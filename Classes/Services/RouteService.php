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
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class RouteService
{
    public function getResponse($profileId, $layer, $locations, $detour, $profile){
        $routingApi = new RoutingApi();
        $routeString = $routingApi->generate($profileId, $locations, $profile);
        $routeData =\GuzzleHttp\json_decode($routeString, true);
        $polyline = new Polyline([]);
        $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
        $points = $polyline->tunePolyline($points,0.1,0.4)->getPoints();
        $objLayer = C4gMapsModel::findById($layer);
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
            foreach($points as $point){
                $bounds = $point->getLatLngBounds($point,$detour);
                $url = "https://osm.kartenkueste.de/api/interpreter?data=";
                $strBBox = '(' . $bounds['lower']->getLat() . ',' . $bounds['left']->getLng() . ',' . $bounds['upper']->getLat() . ',' . $bounds['right']->getLng() .')';
                $query = $objLayer->ovp_request;
                $query = str_replace("(bbox)", $strBBox, $query);
                $revert = array('%21'=>'!', '%2A'=>'*', '%27'=>"'", '%28'=>'(', '%29'=>')');
                $url .= strtr(rawurlencode($query), $revert);
                $REQUEST = new \Request();
                if ($_SERVER['HTTP_REFERER']) {
                    $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                }
                if ($_SERVER['HTTP_USER_AGENT']) {
                    $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                }
                $REQUEST->send($url);
                $requestData =\GuzzleHttp\json_decode($REQUEST->response, true);
                $features = array_merge($features,$requestData['elements']);
            }
        }

        return $features;
    }
}