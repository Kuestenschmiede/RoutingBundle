<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 01.10.18
 * Time: 10:45
 */

namespace con4gis\RoutingBundle\Classes\Services;


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\api\RoutingApi;
use con4gis\RoutingBundle\Classes\LatLng;
use con4gis\RoutingBundle\Classes\Polyline;

class RouteService
{
    public function getResponse($profileId, $layer, $locations, $detour, $profile){
        $routingApi = new RoutingApi();
        $routeString = $routingApi->generate($profileId, $locations, $profile);
        $routeData =\GuzzleHttp\json_decode($routeString, true);
        $polyline = new Polyline([]);

        $objLayer = C4gMapsModel::findById($layer);

        $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
        $points = $polyline->tunePolyline($points,0.1,0.4)->getPoints();
        $routeData['features'] = $this->getFeatures($layer, $detour, $points);

        $routeData['type'] = $objLayer->location_type;
        return \GuzzleHttp\json_encode($routeData);
    }
    public function getFeatures($layerId,$detour,$points){
        $features = [];
        $objLayer = C4gMapsModel::findById($layerId);
        if($objLayer->location_type == "table" || $objLayer->location_type == "frisia"){
            $sourceTable = $objLayer->tab_source;
            $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
            foreach($points as $point){
                $bounds = $point->getLatLngBounds($point,$detour);
                $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
                $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
                $sqlLoc = " WHERE ". $arrConfig['geox'] . " BETWEEN " . $bounds['left']->getLng() . " AND ". $bounds['right']->getLng() . " AND " . $arrConfig['geoy'] . " BETWEEN " . $bounds['lower']->getLat() . " AND ". $bounds['upper']->getLat();
                $sqlSelect = $sourceTable.".". $arrConfig['geox']." AS geox,".$sourceTable.".".$arrConfig['geoy']." AS geoy";
                $sqlSelect = $arrConfig['locstyle'] ? $sqlSelect . ", " .$sourceTable."." . $arrConfig['locstyle'] . " AS locstyle" : $sqlSelect;
                $sqlSelect = $arrConfig['label'] ? $sqlSelect . ", " . $sourceTable.".". $arrConfig['label'] . " AS label" : $sqlSelect;
                $sqlSelect = $arrConfig['tooltip'] ? $sqlSelect . ", ". $sourceTable."." . $arrConfig['tooltip'] . " AS tooltip" : $sqlSelect;
                $sqlWhere = $arrConfig['sqlwhere'] ? $arrConfig['sqlwhere'] : '';
                $sqlAnd = $sqlWhere ? ' AND ' : '';
                $strQuery = "SELECT ".$sourceTable.".id,". $sqlSelect ." FROM ".$sourceTable . $onClause . $sqlLoc . $sqlAnd . $sqlWhere . $andbewhereclause ;
                $featurePoint = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
                $features = array_merge($features,$featurePoint);
            }
        }
        else if($objLayer->location_type == "overpass"){
            $buffer = $this->bufferLineString($points,$detour);
            $url = "https://osm.kartenkueste.de/api/interpreter";
            $strBBox = '(poly:"';
            foreach($buffer as $element){
                $strBBox .= $element[1] . ' ' . $element[0] . ' ';
            }
            $strBBox = rtrim($strBBox);
            $strBBox .= '")';
            $query = $objLayer->ovp_request;
            $query = str_replace("(bbox)", $strBBox, $query);
            $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
//            $data = strtr(rawurlencode($query), $revert);
            $REQUEST = new \Request();
            $REQUEST->setHeader('Content-Type', 'POST');
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($url,$query);
            $requestData =\GuzzleHttp\json_decode($REQUEST->response, true);
            $features =$requestData['elements'];
//            foreach($points as $point){
//                $bounds = $point->getLatLngBounds($point,$detour);
//                $url = "https://osm.kartenkueste.de/api/interpreter?data=";
//                $strBBox = '(' . $bounds['lower']->getLat() . ',' . $bounds['left']->getLng() . ',' . $bounds['upper']->getLat() . ',' . $bounds['right']->getLng() .')';
//                $query = $objLayer->ovp_request;
//                $query = str_replace("(bbox)", $strBBox, $query);
//                $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
//                $url .= strtr(rawurlencode($query), $revert);
//                $REQUEST = new \Request();
//                if ($_SERVER['HTTP_REFERER']) {
//                    $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
//                }
//                if ($_SERVER['HTTP_USER_AGENT']) {
//                    $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
//                }
//                $REQUEST->send($url);
//                $requestData =\GuzzleHttp\json_decode($REQUEST->response, true);
//                $features = array_merge($features,$requestData['elements']);
//            }
        }

        return $features;
    }
    public function bufferLineString($points,$detour){
        $latLng = new LatLng();
        $latWidth = $latLng->getLatWidth();
        $pointsUp = [];
        $pointsDown = [];
        for($i = 0; $i < count($points); $i++){
            $lngWidth = $latLng->getLngWidth($points[$i]->getLat());
            if($i == 0){
                $divX = $points[1]->getLng()-$points[0]->getLng();
                $divY = $points[1]->getLat()-$points[0]->getLat();
                $rad = atan2($divX,$divY);
                $radUp = $rad+M_PI_2;
                $radDown = $rad-M_PI_2;
                $pointsUp[]= [$points[0]->getLng()+((cos($radUp)*$detour)/$lngWidth),$points[0]->getLat()+((sin($radUp)*$detour)/$latWidth)];
                $pointsDown[]= [$points[0]->getLng()+((cos($radDown)*$detour)/$lngWidth),$points[0]->getLat()+((sin($radDown)*$detour)/$latWidth)];
            }
            else if($i == count($points)-1){
                $divX = $points[count($points)-1]->getLng()-$points[count($points)-2]->getLng();
                $divY = $points[count($points)-1]->getLat()-$points[count($points)-2]->getLat();
                $rad = atan2($divX,$divY);
                $radUp = $rad+M_PI_2;
                $radDown = $rad-M_PI_2;
                $pointsUp[]= [$points[count($points)-1]->getLng()+((cos($radUp)*$detour)/$lngWidth),$points[count($points)-1]->getLat()+((sin($radUp)*$detour)/$latWidth)];
                $pointsDown[]= [$points[count($points)-1]->getLng()+((cos($radDown)*$detour)/$lngWidth),$points[count($points)-1]->getLat()+((sin($radDown)*$detour)/$latWidth)];
            }
            else{
                $divX = $points[$i+1]->getLng()-$points[$i-1]->getLng();
                $divY = $points[$i+1]->getLat()-$points[$i-1]->getLat();
                $rad = atan2($divX,$divY);
                $radUp = $rad+M_PI_2;
                $radDown = $rad-M_PI_2;
                $pointsUp[]= [$points[$i]->getLng()+((cos($radUp)*$detour)/$lngWidth),$points[$i]->getLat()+((sin($radUp)*$detour)/$latWidth)];
                $pointsDown[]= [$points[$i]->getLng()+((cos($radDown)*$detour)/$lngWidth),$points[$i]->getLat()+((sin($radDown)*$detour)/$latWidth)];
            }
        }
        for($i = count($pointsDown); $i >= 0; $i--){
            $pointsUp[] = $pointsDown[$i];
        }
        return $pointsUp;
    }
}