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
        foreach($routerLayers as $routerLayer){
            $routerLayer['key'] = str_replace(" ", "", $routerLayer['key']);
            $returnLayers[$routerLayer['layers']][$routerLayer['value']] = explode(",", $routerLayer['key']);

        }
        $mapData['routerLayers'] = $returnLayers;
        $event->setMapData($mapData);
    }
}