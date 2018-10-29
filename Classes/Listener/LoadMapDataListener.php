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
        $routerLayers = unserialize($profile->routerLayers);
        $returnLayers = [];
        foreach ($routerLayers as $routerLayer) {
            $routerLayer['key'] = str_replace(" ", "", $routerLayer['key']);
            $routerLayer['label'] = str_replace(" ", "", $routerLayer['label']);
            $returnLayers[$routerLayer['layers']][$routerLayer['value']]['keys'] = explode(",", $routerLayer['key']);
            $returnLayers[$routerLayer['layers']][$routerLayer['value']]['labels'] = explode(",", $routerLayer['label']);
        }
        $mapData['routerLayers'] = $returnLayers;
        $mapData['clickLocstyle'] = $profile->clickLocstyle;
        $mapData['detourArea'] = [$profile->minDetourArea, $profile->maxDetourArea];
        $mapData['detourRoute'] = [$profile->minDetourRoute, $profile->maxDetourRoute];
        $event->setMapData($mapData);
    }
}