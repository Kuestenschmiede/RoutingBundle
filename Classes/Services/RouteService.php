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
        $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
        $points = $polyline->tunePolyline($points)->getPoints();
        $features = $this->getFeatures($layer, $detour, $points);
        return $routeString;
    }
    public function getFeatures($layerId,$detour,$points){
        $features = [];
        $objLayer = C4gMapsModel::findById($layerId);
        $sourceTable = $objLayer->tab_source;
        $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
        foreach($points as $point){
            $bounds = $point->getLatLngBounds($point,$detour);
            $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
            $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
            $sqlLoc = " WHERE ". $arrConfig['geox'] . "BETWEEN" . $bounds['left']['lng'] . " AND ". $bounds['right']['lng'] . "AND" . $arrConfig['geoy'] . "BETWEEN" . $bounds['lower'] . " AND ". $bounds['upper'];
            $sqlSelect = $sourceTable.".". $arrConfig['geox']." AS geox,".$sourceTable.".".$arrConfig['geoy']." AS geoy";
            $sqlSelect = $arrConfig['locstyle'] ? $sqlSelect . ", " .$sourceTable."." . $arrConfig['locstyle'] . " AS locstyle" : $sqlSelect;
            $sqlSelect = $arrConfig['label'] ? $sqlSelect . ", " . $sourceTable.".". $arrConfig['label'] . " AS label" : $sqlSelect;
            $sqlSelect = $arrConfig['tooltip'] ? $sqlSelect . ", ". $sourceTable."." . $arrConfig['tooltip'] . " AS tooltip" : $sqlSelect;
            $sqlWhere = $arrConfig['sqlwhere'] ? $arrConfig['sqlwhere'] : '';
            $sqlAnd = $sqlWhere ? ' AND ' : '';
            $strQuery = "SELECT ".$sourceTable.".id,". $sqlSelect ." FROM ".$sourceTable . $onClause . $sqlLoc . $sqlAnd . $sqlWhere . $andbewhereclause ;
            $result = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();

            return $result;
        }
    }
}