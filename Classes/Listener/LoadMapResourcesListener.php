<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
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
        $mapData = $event->getMapData();
        if ($mapData['router_enable']) {
            ResourceLoader::loadJavaScriptDeferred('c4g-routing', '/bundles/con4gisrouting/build/c4g-routing.js');
            ResourceLoader::loadJavaScriptDeferred('jquery-ui', '/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.js');

            ResourceLoader::loadCssRessource('jquery-ui-css', '/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css');
            ResourceLoader::loadCssRessource('routing-css', 'bundles/con4gisrouting/css/c4g-routing.css');
            ResourceLoader::loadCssRessource('c4g-cached-inputfield', '/bundles/con4giscore/css/c4g-cached-inputfield.css');
        }
    }
}
