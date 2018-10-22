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
            $returnLayers[$routerLayer['layers']]['keys'][] = $routerLayer['key'];
            $returnLayers[$routerLayer['layers']]['value'][] = $routerLayer['value'];

        }
        $mapData['routerLayers'] = $returnLayers;
        $event->setMapData($mapData);
    }
}