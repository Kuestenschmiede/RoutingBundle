<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
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
        ResourceLoader::loadJavaScriptDeferred('c4g-routing', "/bundles/con4gisrouting/build/c4g-routing.js");
        ResourceLoader::loadJavaScriptDeferred('c4g-cached-inputfield', "/bundles/con4giscore/js/c4g-cached-inputfield.js");
        ResourceLoader::loadJavaScriptDeferred('jquery-ui', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.js");

        ResourceLoader::loadCssRessource('jquery-ui-css', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css");
        ResourceLoader::loadCssRessource("routing-css", "bundles/con4gisrouting/css/c4g-routing.css");
        ResourceLoader::loadCssRessource("c4g-cached-inputfield", "/bundles/con4giscore/css/c4g-cached-inputfield.css");
    }
}