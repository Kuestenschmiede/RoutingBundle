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
use Contao\System;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

//include_once(System::getContainer()->getParameter('kernel.project_dir')."/vendor/phayes/geophp/geoPHP.inc");

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
        if ($mapsProfile->router_api_selection == "2") {
            return $this->performMatrixORS($mapsProfile, $routingProfile, $locations, $opt_options);
        } else if ($mapsProfile->router_api_selection == "3") {
            return $this->performMatrixGraphhopper($mapsProfile, $routingProfile, $locations, $opt_options);
        }
    }
    
    protected function performMatrixORS($mapsProfile, $routingProfile, $locations, $opt_options = null)
    {
        $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];
        $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'driving-car';
        $matrixUrl = $mapsProfile->router_viaroute_url ? $mapsProfile->router_viaroute_url : "https://api.openrouteservice.org/";
        $matrixUrl = $matrixUrl . 'matrix?api_key=' . $mapsProfile->router_api_key . '&profile=' . $routingProfile;
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
    
    protected  function performMatrixGraphhopper($mapsProfile, $routingProfile, $locations, $opt_options = null)
    {
        $valuesProfile =[0 => "car", 1 => "truck", 2 => "bike", 3 => "racingbike", 5 => "mtb", 8 => "foot", 9 => "hike", 11 => "small_truck", 12 => "scooter"];
        $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'car';
        $matrixUrl = $mapsProfile->router_viaroute_url ? $mapsProfile->router_viaroute_url : "https://graphhopper.com/api/1/";
        $matrixUrl = $matrixUrl . 'matrix?key=' . $mapsProfile->router_api_key;
        $startlocation = [$locations[0]];
        array_splice($locations, 1, 1);
        $matrixData = [
            'elevation'      => false,
            'vehicle'        => $routingProfile,
            'from_points'    => $startlocation,
            'to_points'      => $locations,
            'out_arrays'      => ['distances']
        ];
        $REQUEST = new \Request();
        if ($_SERVER['HTTP_REFERER']) {
            $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
        }
        $REQUEST->setHeader('Content-Type', "application/json");
        $REQUEST->method = "POST";
        $encodedData = \GuzzleHttp\json_encode($matrixData);
        $REQUEST->send($matrixUrl, $encodedData);
        return $REQUEST->response;
    }
}