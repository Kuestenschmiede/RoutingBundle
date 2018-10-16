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
        $point = new LatLng($coords[1], $coords[0]);

        $objLayer = C4gMapsModel::findById($layerId);
//        if($objLayer->type == "table" || $objLayer->type == "frisia"){
            $sourceTable = $objLayer->tab_source;
            $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
            $bounds = $point->getLatLngBounds($point,$distance);
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
            foreach($pointFeatures as $pointFeature){
                $pTemp = new LatLng($pointFeature['geox'],$pointFeature['geoy']);
                if($pTemp->getDistance($point) < $distance){
                    $responseFeatures[] = $point;
                }
                return \GuzzleHttp\json_encode($responseFeatures);
            }
//        }
    }
}