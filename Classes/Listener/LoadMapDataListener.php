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


use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\RoutingBundle\Entity\RoutingConfiguration;
use Contao\System;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapDataListener
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;
    
    /**
     * LoadMapDataListener constructor.
     * @param EntityManager $entityManager
     */
    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    
    public function onloadMapDataAddRouterData(LoadMapdataEvent $event,
                                               $eventName,
                                               EventDispatcherInterface $eventDispatcher)
    {
        $mapData = $event->getMapData();
        System::loadLanguageFile('tl_c4g_routing_configuration');
        $profile = C4gMapProfilesModel::findById($mapData['profile']);
        if ($profile->router) {
            $routerConfig = $this->entityManager->getRepository(RoutingConfiguration::class)
                ->findOneBy(['id' => $profile->routerConfig]);
            if ($routerConfig instanceof RoutingConfiguration) {
                $mapData['router_enable'] = $profile->geosearch && $profile->router;
                $mapData['router_viaroute_precision'] = $routerConfig->getRouterViarouteUrl() ? 1e5 : 1e6;
                if ($routerConfig->getRouterAttribution())
                {
                    $mapData['router_attribution'] = \Contao\Controller::replaceInsertTags($routerConfig->getRouterAttribution());
                    if ($profile->attribution) {
                        $mapData['attribution']['router'] = \Contao\Controller::replaceInsertTags($routerConfig->getRouterAttribution());
                    }
                }
                $mapData['router_from_locstyle'] = $routerConfig->getRouterFromLocstyle();
                $mapData['router_to_locstyle'] = $routerConfig->getRouterToLocstyle();
                $mapData['router_point_locstyle'] = $routerConfig->getRouterPointLocstyle();
                $mapData['router_interim_locstyle'] = $routerConfig->getRouterInterimLocstyle();
                $mapData['router_api_selection'] = $routerConfig->getRouterApiSelection();
                $mapData['router_alternative'] = $routerConfig->getRouterAlternative();
                if($routerConfig->getRouterProfiles()){
                    $router_profiles = array_flip($routerConfig->getRouterProfiles());
                    foreach($router_profiles as $key => $router_profile){
                        $router_profiles[$key] = $GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['references_router_profiles'][$key];
                    }
                    $mapData['router_profiles'] = $router_profiles;
                }
                if($routerConfig->getCustomProfiles()) {
                    $mapData['customProfiles'] = $routerConfig->getCustomProfiles();
                }
                $routerLayers = $routerConfig->getRouterLayers();
                if($routerLayers && $routerLayers[0] && $routerLayers[0]['key']){
                    $returnLayers = [];
                    foreach ($routerLayers as $routerLayer) {
                        $routerLayer['key'] = str_replace(" ", "", $routerLayer['key']);
                        $routerLayer['label'] = str_replace(" ", "", $routerLayer['label']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['keys'] = explode(",", $routerLayer['key']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['labels'] = explode(",", $routerLayer['label']);
                        $returnLayers[$routerLayer['layers']][$routerLayer['value']]['mapLabel'] = $routerLayer['mapLabel'];
                    }
                    $mapData['routerLayers'] = $returnLayers;
                }
                $mapData['clickLocstyle'] = $routerConfig->getClickLocstyle();
                $mapData['detourArea'] = [
                    "min" => $routerConfig->getMinDetourArea(),
                    "max" => $routerConfig->getMaxDetourArea(),
                    "initial" => $routerConfig->getInitialDetourArea()
                ];
                $mapData['detourRoute'] = [
                    "min" => $routerConfig->getMinDetourRoute(),
                    "max" => $routerConfig->getMaxDetourRoute(),
                    "initial" => $routerConfig->getInitialDetourRoute()
                ];
                $mapData['router_open'] = $routerConfig->getOpenRouter();
                $mapData['areaCenterLocstyle'] = $routerConfig->getAreaCenterLocstyle();
                $mapData['enableOverPoints'] = $routerConfig->getEnableOverPoints();
                $mapData['enableTargetSwitch'] = $routerConfig->getEnableTargetSwitch();
                $mapData['routerHeadline'] = $routerConfig->getRouterHeadline();
                $mapData['priorityFeatures'] = $routerConfig->getPriorityFeatures();
                $mapData['priorityLocstyle'] = $routerConfig->getPriorityLocstyle();
                $mapData['closeAfterSearch'] = $routerConfig->getCloseAfterSearch();
                $mapData['showFeatures'] = $routerConfig->getShowFeatures();
                $mapData['featureLabel'] = $routerConfig->getFeatureLabel();
                $mapData['showInstructions'] = $routerConfig->getShowInstructions();
                $mapData['instructionLabel'] = $routerConfig->getInstructionLabel();
                $mapData['initialMode'] = $routerConfig->getInitialMode();
                $mapData['routeStartButton'] = $routerConfig->getRouteStartButton();
                $mapData['usePermalink'] = $routerConfig->getUsePermalink();
                $mapData['hideFeaturesWithoutLabel'] = $routerConfig->getHideFeaturesWithoutLabel();
            }
        }

        $event->setMapData($mapData);
    }
}