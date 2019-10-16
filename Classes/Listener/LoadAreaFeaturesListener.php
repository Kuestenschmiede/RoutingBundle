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


use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapTablesModel;
use con4gis\RoutingBundle\Classes\Event\LoadAreaFeaturesEvent;
use con4gis\RoutingBundle\Classes\LatLng;
use con4gis\RoutingBundle\Classes\Services\AreaService;
use con4gis\RoutingBundle\Entity\RoutingConfiguration;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadAreaFeaturesListener
{
    private $areaService;

    /**
     * LoadAreaFeaturesListener constructor.
     * @param $areaService
     */
    public function __construct(AreaService $areaService)
    {
        $this->areaService = $areaService;
    }

    public function onLoadAreaFeaturesGetFeatures(
        LoadAreaFeaturesEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        $profileId = $event->getProfileId();
        $location = $event->getLocation();
        $distance = $event->getDistance();
        $layerId = $event->getLayerId();
        $profile = $event->getProfile();
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $coords = explode(',',$location);
        $point = new LatLng($coords[0], $coords[1]);
        $bounds = $point->getLatLngBounds($point,$distance);

        $objLayer = C4gMapsModel::findById($layerId);
        $routerConfigRepo = \System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $objMapsProfile->routerConfig]);
        if($routerConfig instanceof RoutingConfiguration){
            $type = $routerConfig->getRouterApiSelection();
            if ($objLayer->location_type == "table") {
                $objConfig = C4gMapTablesModel::findByPk($objLayer->tab_source);
                $sourceTable = $objConfig->tableSource;
                $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' . htmlspecialchars_decode($objLayer->tab_whereclause) : '';
                $onClause = $objLayer->tabJoinclause ? ' ' . htmlspecialchars_decode($objLayer->tabJoinclause) : '';
                if ($objConfig->geox && $objConfig->geoy) {
                    $sqlLoc = " WHERE ". $objConfig->geox . " BETWEEN " . $bounds['left']->getLng() . " AND ". $bounds['right']->getLng() . " AND " . $objConfig->geoy . " BETWEEN " . $bounds['lower']->getLat() . " AND ". $bounds['upper']->getLat();
                    $sqlSelect = $sourceTable . ".". $objConfig->geox . " AS geox," . $sourceTable . "." . $objConfig->geoy." AS geoy";
                }
                else if ($objConfig->geolocation) {
                    $sqlLoc = " WHERE SUBSTRING_INDEX(". $objConfig->geolocation . ", ',', -1) BETWEEN " . $bounds['left']->getLng() . " AND ". $bounds['right']->getLng() . " AND SUBSTRING_INDEX(" . $objConfig->geolocation . ",',',1) BETWEEN " . $bounds['lower']->getLat() . " AND ". $bounds['upper']->getLat();
                    $sqlSelect = "SUBSTRING_INDEX(". $objConfig->geolocation . ", ',', -1) AS geox, SUBSTRING_INDEX(" . $objConfig->geolocation . ",',',1) AS geoy";
                }
                else{
                    //@ToDo ¯\_(ツ)_/¯
                }
                $sqlSelect = $objConfig->locstyle ? $sqlSelect . ", " .$sourceTable."." . $objConfig->locstyle . " AS locstyle" : $sqlSelect;
                $sqlSelect = $objConfig->label ? $sqlSelect . ", " . $sourceTable.".". $objConfig->label . " AS label" : $sqlSelect;
                $sqlSelect = $objConfig->tooltip ? $sqlSelect . ", ". $sourceTable."." . $objConfig->tooltip . " AS tooltip" : $sqlSelect;
                $sqlWhere = $objConfig->sqlwhere ? $objConfig->sqlwhere : '';
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
                //ToDo check performMatrix result
                $requestData = \GuzzleHttp\json_decode($this->areaService->performMatrix($objMapsProfile,$profile,$locations), true);
                $type = $requestData['responseType'] ?: $type;
                $finalResponseFeatures = [];
//                for($i = 1; $i < count($requestData['distances'][0]); $i++) {
//                    if ($routerConfig->getRouterApiSelection() == "1") {
//                        if($requestData['distances'][0][$i] < $distance){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                    else if ($routerConfig->getRouterApiSelection() == "2") {
//                        if($requestData['distances'][0][$i] < $distance){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                    else if ($routerConfig->getRouterApiSelection() == "3") {
//                        if($requestData['distances'][0][$i] < floatval($distance)*1000){
//                            $finalResponseFeatures[] = $responseFeatures[$i-1];
//                        }
//                    }
//                }

                $event->setReturnData([$requestData, $responseFeatures, $type, 'notOverpass']);
            } else if($objLayer->location_type == "overpass") {
                $url = $objMapsProfile->overpass_url ? $objMapsProfile->overpass_url : "http://overpass-api.de/api/interpreter";
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
                //ToDo check response
                if ($REQUEST->response) {
                    $requestData = \GuzzleHttp\json_decode($REQUEST->response, true);
                    $locations = [];
                    $locations[] = [floatval($point->getLng()), floatval($point->getLat())];
                    foreach($requestData['elements'] as $element){
                        if ($element['type'] == "node") {
                            $locations[] = [floatval($element['lon']),floatval($element['lat'])];
                        } else {
                            continue;
                        }
                    }
                    //ToDo check performMatrix result
                    $matrixResponse = \GuzzleHttp\json_decode($this->areaService->performMatrix($objMapsProfile,$profile,$locations), true);
                    $type = $matrixResponse['responseType'] ?: $type;
//                    $features = [];
//                    $type = $matrixResponse['responseType'] ? $matrixResponse['responseType'] : $routerConfig->getRouterApiSelection();

                    $event->setReturnData([$matrixResponse, $requestData, $type, 'overpass']);
                } else {
                    $event->setReturnData([]);
                }
            }
        }
    }
}