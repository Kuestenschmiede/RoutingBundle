<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 01.10.18
 * Time: 10:45
 */

namespace con4gis\RoutingBundle\Classes\Services;


use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\RoutingBundle\Classes\LatLng;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

include_once($_SERVER['DOCUMENT_ROOT']."../vendor/phayes/geophp/geoPHP.inc");

class AreaService
{

    public function getResponse($profileId, $layerId, $distance, $location, $profile)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $coords = explode(',',$location);
        $point = new LatLng($coords[0], $coords[1]);
        $bounds = $point->getLatLngBounds($point,$distance);

        $objLayer = C4gMapsModel::findById($layerId);
        if($objLayer->location_type == "table" || $objLayer->location_type == "frisia"){
            $sourceTable = $objLayer->tab_source;
            $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
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
            $pointFeatures = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
            $responseFeatures = [];
            $locations = [];
            $locations[] = [$point->getLng(), $point->getLat()];
            foreach($pointFeatures as $pointFeature){
                $pTemp = new LatLng($pointFeature['geoy'],$pointFeature['geox']);
                if($pTemp->getDistance($point) < $distance){
                    $responseFeatures[] = $pointFeature;
                    $locations[] = [$pTemp->getLng(), $pTemp->getLat()];
                }
            }
            $matrixUrl = 'https://api.openrouteservice.org/matrix?api_key=' . $objMapsProfile->router_api_key . '&profile=driving-car';
            $matrixData = [
                'profile'       => 'driving-car',
                'locations'     => $locations,
                'sources'       => '0',
                'metrics'       => 'distance',
                'units'         => 'km'
            ];

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->method = "POST";
            $finalResponseFeatures = [];
            $encodedData = \GuzzleHttp\json_encode($matrixData);
            $REQUEST->send($matrixUrl, $encodedData);
            $requestData = \GuzzleHttp\json_decode($REQUEST->response, true);
            for($i = 1; $i < count($requestData['distances'][0]); $i++) {
                if($requestData['distances'][0][$i] < $distance){
                    $finalResponseFeatures[] = $responseFeatures[$i-1];
                }
            }
            return \GuzzleHttp\json_encode([$finalResponseFeatures,'notOverpass']);
        }
        else if($objLayer->location_type == "overpass"){
            $url = "https://osm.kartenkueste.de/api/interpreter";
            $strBBox = $bounds['lower']->getLat() . "," . $bounds['left']->getLng() . "," . $bounds['upper']->getLat() . ",". $bounds['right']->getLng();
            $query = $objLayer->ovp_request;
            $strSearch = strrpos($query, "(bbox)") ? "(bbox)" : "{{bbox}}";
            $query = str_replace($strSearch, $strBBox, $query);
            $REQUEST = new \Request();
            $REQUEST->setHeader('Content-Type', 'POST');
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($url,$query);
            $requestData = \GuzzleHttp\json_decode($REQUEST->response, true);
            $locations = [];
            $locations[] = [$point->getLng(), $point->getLat()];
            foreach($requestData['elements'] as $element){
                $locations[] = [$element['lon'],$element['lat']];
            }
            $matrixUrl = 'https://api.openrouteservice.org/matrix?api_key=' . $objMapsProfile->router_api_key . '&profile=driving-car';
            $matrixData = [
                'profile'       => 'driving-car',
                'locations'     => $locations,
                'sources'       => '0',
                'metrics'       => 'distance',
                'units'         => 'km'
            ];

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->method = "POST";
            $encodedData = \GuzzleHttp\json_encode($matrixData);
            $REQUEST->send($matrixUrl, $encodedData);
            $matrixResponse = \GuzzleHttp\json_decode($REQUEST->response, true);
            $features = [];
            for($i = 1; $i < count($matrixResponse['distances'][0]); $i++) {
                if($matrixResponse['distances'][0][$i] < $distance){
                    $features[] = $requestData['elements'][$i-1];
                }
            }
            return \GuzzleHttp\json_encode([$features,'overpass']);
        }
    }
}