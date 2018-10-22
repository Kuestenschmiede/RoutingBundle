<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 15.08.18
 * Time: 12:21
 */

namespace con4gis\RoutingBundle\Classes\Listener;


use con4gis\MapsBundle\Classes\Events\LoadMapResourcesEvent;
use con4gis\MapsBundle\Resources\contao\classes\ResourceLoader;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class LoadMapResourcesListener
{
    public function onLoadMapResourcesLoadRouterFiles(
        LoadMapResourcesEvent $event,
        $eventName,
        EventDispatcherInterface $eventDispatcher
    ) {
        ResourceLoader::loadJavaScriptDeferred('routing-plugin', "/bundles/con4gisrouting/build/routing-plugin.js");
    }
}