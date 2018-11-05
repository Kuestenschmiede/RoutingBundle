<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 01.10.18
 * Time: 10:45
 */

namespace con4gis\RoutingBundle\Classes\Services;


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\MapsBundle\Resources\contao\modules\api\RoutingApi;
use con4gis\RoutingBundle\Classes\Event\LoadRouteFeaturesEvent;
use con4gis\RoutingBundle\Classes\LatLng;
use con4gis\RoutingBundle\Classes\Polyline;
use Contao\System;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

include_once(System::getContainer()->getParameter('kernel.project_dir')."/vendor/phayes/geophp/geoPHP.inc");

class RouteService
{
    private $eventDispatcher;

    /**
     * RouteService constructor.
     * @param $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }

    public function getResponse($profileId, $layer, $locations, $detour, $profile)
    {
        $routingApi = new RoutingApi();
        $routeString = $routingApi->generate($profileId, $locations, $profile);
        $routeData =\GuzzleHttp\json_decode($routeString, true);
        $polyline = new Polyline([]);
        $objLayer = C4gMapsModel::findById($layer);
        $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
        $points = $polyline->tunePolyline($points,0.1,0.4)->getPoints();
        $event = new LoadRouteFeaturesEvent();
        $event->setLayerId($layer);
        $event->setPoints($points);
        $event->setDetour($detour);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        $routeData['features'] = $event->getFeatures();
        $routeData['bbox'] = $event->getBbox();
        $routeData['type'] = $objLayer->location_type;
        return \GuzzleHttp\json_encode($routeData);
    }
}