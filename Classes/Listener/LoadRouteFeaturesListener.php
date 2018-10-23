<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 18.10.18
 * Time: 16:02
 */

namespace con4gis\RoutingBundle\Classes\Listener;


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\RoutingBundle\Classes\Event\LoadRouteFeaturesEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

include_once($_SERVER['DOCUMENT_ROOT']."../vendor/phayes/geophp/geoPHP.inc");

class LoadRouteFeaturesListener
{
    public function onLoadRouteFeaturesGetFeatures(
        LoadRouteFeaturesEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $features = [];
        $points = $event->getPoints();
        $layerId = $event->getLayerId();
        $detour = $event->getDetour();
        $objLayer = C4gMapsModel::findById($layerId);
        if ($objLayer->location_type == "table" || $objLayer->location_type == "frisia") {
            $sourceTable = $objLayer->tab_source;
            $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
            foreach ($points as $point) {
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
        else if ($objLayer->location_type == "overpass") {
            $url = "https://osm.kartenkueste.de/api/interpreter";
            $lineStringWKT = 'LINESTRING (';
            foreach ($points as $point) {
                if($point){
                    $lineStringWKT .= $point->getLng() . ' ' . $point->getLat() . ', ';
                }
            }
            $lineStringWKT = rtrim($lineStringWKT, ', ');
            $lineStringWKT .= ')';
            $selectBuffer = "SELECT ST_AsText(ST_Buffer(ST_GeomFromText('". $lineStringWKT. "'),". $detour/113.139 .",ST_Buffer_Strategy('end_flat'),ST_Buffer_Strategy('join_round', 10)))";
            $db = \Database::getInstance();
            $result = array_shift($db->prepare($selectBuffer)->execute()->fetchAssoc());
            $polygon = \geoPHP::load($result,'wkt');
            $jsonPolygon = \GuzzleHttp\json_decode($polygon->out('json'));
            $strBBox = 'poly:"';
            foreach ($jsonPolygon->coordinates[0] as $coordinate) {
                $strBBox .= $coordinate[1] . ' ' .$coordinate[0]. ' ';
            }
            $strBBox = rtrim($strBBox).'"';
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
            $features = $requestData['elements'];
        }
        if ($jsonPolygon) {
            $event->setBbox($jsonPolygon);
        }
        $event->setFeatures($features);
    }
}