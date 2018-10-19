<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 01.10.18
 * Time: 10:45
 */

namespace con4gis\RoutingBundle\Classes\Services;


use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\RoutingBundle\Classes\Event\LoadAreaFeaturesEvent;
use con4gis\RoutingBundle\Classes\LatLng;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

include_once($_SERVER['DOCUMENT_ROOT']."../vendor/phayes/geophp/geoPHP.inc");

class AreaService
{

    private $eventDispatcher;

    /**
     * AreaService constructor.
     * @param $eventDispatcher
     */
    public function __construct($eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }




    public function getResponse($profileId, $layerId, $distance, $location, $profile)
    {
        $event = new LoadAreaFeaturesEvent();
        $event->setProfileId($profileId);
        $event->setLayerId($layerId);
        $event->setDistance($distance);
        $event->setLocation($location);
        $event->setProfile($profile);
        $this->eventDispatcher->dispatch($event::NAME, $event);
        return $event->getReturnData();
    }
    public function performMatrix($mapsProfile, $routingProfile, $locations, $opt_options = null)
    {
        $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];
        $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'driving-car';
        $matrixUrl = 'https://api.openrouteservice.org/matrix?api_key=' . $mapsProfile->router_api_key . '&profile=' . $routingProfile;
        $matrixData = [
            'profile'       => $routingProfile,
            'locations'     => $locations,
            'sources'       => '0',
            'metrics'       => 'distance',
            'units'         => 'km'
        ];

        $REQUEST = new \Request();
        if ($_SERVER['HTTP_REFERER']) {
            $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
        }
        $REQUEST->method = "POST";
        $encodedData = \GuzzleHttp\json_encode($matrixData);
        $REQUEST->send($matrixUrl, $encodedData);
        return $REQUEST->response;
    }
}