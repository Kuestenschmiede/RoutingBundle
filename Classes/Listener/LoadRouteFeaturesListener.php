<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

namespace con4gis\RoutingBundle\Classes\Listener;


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use con4gis\RoutingBundle\Classes\Event\LoadRouteFeaturesEvent;
use Contao\System;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

//include_once(System::getContainer()->getParameter('kernel.project_dir')."/vendor/phayes/geophp/geoPHP.inc");

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
        if ($objLayer->location_type == "table") {
            $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
            foreach ($points as $point) {
                $bounds = $point->getLatLngBounds($point,$detour);
                $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
                $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
                if ($objConfig->geox && $objConfig->geoy) {
                    $sqlLoc = " WHERE ". $objConfig->geox . " BETWEEN " . $bounds['left']->getLng() . " AND ". $bounds['right']->getLng() . " AND " . $objConfig->geoy . " BETWEEN " . $bounds['lower']->getLat() . " AND ". $bounds['upper']->getLat();
                    $sqlSelect = $objConfig->tableSource . "." . $objConfig->geox ." AS geox," . $objConfig->tableSource . "." . $objConfig->geoy . " AS geoy";
                }
                else if ($objConfig->geolocation) {
                    $sqlLoc = " WHERE SUBSTRING_INDEX(". $objConfig->geolocation . ", ',', -1) BETWEEN " . $bounds['left']->getLng() . " AND ". $bounds['right']->getLng() . " AND SUBSTRING_INDEX(" . $objConfig->geolocation . ",',',1) BETWEEN " . $bounds['lower']->getLat() . " AND ". $bounds['upper']->getLat();
                    $sqlSelect = "SUBSTRING_INDEX(". $objConfig->geolocation . ", ',', -1) AS geox, SUBSTRING_INDEX(" . $objConfig->geolocation . ",',',1) AS geoy";
                }
                else {
                    continue;
                    //@Todo handling for missing locations
                }
                $sqlSelect = $objConfig->locstyle ? $sqlSelect . ", " . $objConfig->tableSource . "." . $objConfig->locstyle . " AS locstyle" : $sqlSelect;
                $sqlSelect = $objConfig->label ? $sqlSelect . ", " . $objConfig->tableSource . "." . $objConfig->label . " AS label" : $sqlSelect;
                $sqlSelect = $objConfig->tooltip ? $sqlSelect . ", ". $objConfig->tableSource."." . $objConfig->tooltip . " AS tooltip" : $sqlSelect;
                $sqlWhere = $objConfig->sqlwhere ? $objConfig->sqlwhere : '';
                $sqlAnd = $sqlWhere ? ' AND ' : '';
                $strQuery = "SELECT " . $objConfig->tableSource.".id,". $sqlSelect ." FROM ".$objConfig->tableSource . $onClause . $sqlLoc . $sqlAnd . $sqlWhere . $andbewhereclause ;
                $featurePoint = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
                if (!$this->checkIfArrayContainsFeature($featurePoint[0], $features)) {
                    $features = array_merge($features,$featurePoint);
                }
            }
            $event->setFeatures($features);
        }
        else if ($objLayer->location_type == "overpass") {
            $url = "https://osm.kartenkueste.de/api/interpreter";
            $lineStringWKT = 'LINESTRING (';
            foreach ($points as $point) {
                if ($point) {
                    $lineStringWKT .= $point->getLng() . ' ' . $point->getLat() . ', ';
                }
            }
            $lineStringWKT = rtrim($lineStringWKT, ', ');
            $lineStringWKT .= ')';
            //,ST_Buffer_Strategy('end_flat'),ST_Buffer_Strategy('join_round', 10)
            $selectBuffer = "SELECT ST_AsText(ST_Buffer(ST_GeomFromText('" . $lineStringWKT . "')," . $detour / 113.139 . "))";
            $db = \Database::getInstance();
            $result = array_shift($db->prepare($selectBuffer)->execute()->fetchAssoc());
            $polygon = \geoPHP::load($result, 'wkt');
            $jsonPolygon = $polygon->out('json');
            if ($jsonPolygon) {
                $jsonPolygon = \GuzzleHttp\json_decode($jsonPolygon);
                $strBBox = 'poly:"';
                foreach ($jsonPolygon->coordinates[0] as $coordinate) {
                    $strBBox .= $coordinate[1] . ' ' . $coordinate[0] . ' ';
                }
                $strBBox = rtrim($strBBox) . '"';
                $query = $objLayer->ovp_request;
                $strSearch = strrpos($query, "(bbox)") ? "(bbox)" : "{{bbox}}";
                $query = str_replace($strSearch, $strBBox, $query);
                $REQUEST = new \Request();
                $REQUEST->setHeader('Content-Type', 'json');
                if ($_SERVER['HTTP_REFERER']) {
                    $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                }
                if ($_SERVER['HTTP_USER_AGENT']) {
                    $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                }
                $REQUEST->send($url, $query);
                if ($REQUEST->response) {
                    try {
                        $requestData = \GuzzleHttp\json_decode($REQUEST->response, true);
                        $features = $requestData['elements'];
                    } catch (\Exception $exception) {
                        $features = [];
                    }
                }

                if ($jsonPolygon) {
                    $event->setBbox($jsonPolygon);
                }
                $event->setFeatures($features);
            } else {
                $event->setFeatures([]);
            }
        }
    }
    
    private function checkIfArrayContainsFeature($feature, $array)
    {
        foreach ($array as $entry) {
            if ($entry['id'] === $feature['id']) {
                return true;
            }
        }
        return false;
    }
}