<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 22.10.18
 * Time: 15:16
 */

namespace con4gis\RoutingBundle\Classes\Listener;


use con4gis\MapsBundle\Classes\Events\LoadMapdataEvent;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapDataListener
{
    public function onloadMapDataAddRouterData(LoadMapdataEvent $event,
                                               $eventName,
                                               EventDispatcherInterface $eventDispatcher)
    {
        $mapData = $event->getMapData();
        $profile = C4gMapProfilesModel::findById($mapData['profile']);
        if ($profile->router) {
            $mapData['router_enable'] = $profile->geosearch && $profile->router;
            $mapData['router_viaroute_precision'] = $profile->router_viaroute_url ? 1e5 : 1e6;
            if ($profile->router_attribution)
            {
                $mapData['router_attribution'] = \Contao\Controller::replaceInsertTags($profile->router_attribution);
                if ($profile->attribution) {
                    $mapData['attribution']['router'] = \Contao\Controller::replaceInsertTags($profile->router_attribution);
                }
            }
            $mapData['router_from_locstyle'] = $profile->router_from_locstyle;
            $mapData['router_to_locstyle'] = $profile->router_to_locstyle;
            $mapData['router_point_locstyle'] = $profile->router_point_locstyle;
            $mapData['router_interim_locstyle'] = $profile->router_interim_locstyle;
            $mapData['router_api_selection'] = $profile->router_api_selection;
            $mapData['router_alternative'] = $profile->router_alternative;
            if($profile->router_profiles){
                $router_profiles = array_flip(unserialize($profile->router_profiles));
                foreach($router_profiles as $key => $router_profile){
                    $router_profiles[$key] = $GLOBALS['TL_LANG']['c4g_maps']['router_profiles'][$key];
                }
                $mapData['router_profiles'] = $router_profiles;
            }
            $routerLayers = unserialize($profile->routerLayers);
            $returnLayers = [];
            foreach ($routerLayers as $routerLayer) {
                $routerLayer['key'] = str_replace(" ", "", $routerLayer['key']);
                $routerLayer['label'] = str_replace(" ", "", $routerLayer['label']);
                $returnLayers[$routerLayer['layers']][$routerLayer['value']]['keys'] = explode(",", $routerLayer['key']);
                $returnLayers[$routerLayer['layers']][$routerLayer['value']]['labels'] = explode(",", $routerLayer['label']);
                $returnLayers[$routerLayer['layers']][$routerLayer['value']]['mapLabel'] = $routerLayer['mapLabel'];
            }
            $mapData['routerLayers'] = $returnLayers;
            $mapData['clickLocstyle'] = $profile->clickLocstyle;
            $mapData['detourArea'] = [$profile->minDetourArea, $profile->maxDetourArea];
            $mapData['detourRoute'] = [$profile->minDetourRoute, $profile->maxDetourRoute];
            $mapData['router_open'] = $profile->openRouter;
            $mapData['areaCenterLocstyle'] = $profile->areaCenterLocstyle;
            $mapData['enableOverPoints'] = $profile->enableOverPoints;
            $mapData['enableTargetSwitch'] = $profile->enableTargetSwitch;
            $mapData['routerHeadline'] = $profile->routerHeadline;
        }

        $event->setMapData($mapData);
    }
}