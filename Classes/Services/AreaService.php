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
use con4gis\RoutingBundle\Entity\RoutingConfiguration;
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
        $routerConfigRepo = System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $mapsProfile->routerConfig]);
        if($routerConfig instanceof  RoutingConfiguration){
            if ($routerConfig->getRouterApiSelection() == "1") {
                return $this->performMatrixOSRM($routerConfig,$locations);
            }
            else if ($routerConfig->getRouterApiSelection() == "2") {
                return $this->performMatrixORS($routerConfig, $routingProfile, $locations, $opt_options);
            }
            else if ($routerConfig->getRouterApiSelection() == "3") {
                return $this->performMatrixGraphhopper($routerConfig, $routingProfile, $locations, $opt_options);
            }
        }

    }

    protected function performMatrixOSRM($routerConfig, $locations, $routingProfile = null, $opt_options = null){
        if ($routerConfig instanceof RoutingConfiguration) {
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : "http://router.project-osrm.org/";
            $matrixUrl .= "table/v1/driving/";
            foreach ($locations as $location) {
                $matrixUrl .= $location[0] . ',' . $location[1]. ';';
            };
            $matrixUrl = substr($matrixUrl,0,strlen($matrixUrl)-1);
            $matrixUrl .= "?sources=0&annotations=duration,distance";
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($matrixUrl);
            return $REQUEST->response;
        }
    }
    
    protected function performMatrixORS($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration){
            $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];
            $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'driving-car';
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : "https://api.openrouteservice.org/";
            $matrixUrl = $matrixUrl . 'matrix?api_key=' . $routerConfig->getRouterApiKey() . '&profile=' . $routingProfile;
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
    
    protected  function performMatrixGraphhopper($routerConfig, $routingProfile, $locations, $opt_options = null)
    {
        if ($routerConfig instanceof RoutingConfiguration){
            $valuesProfile =[0 => "car", 1 => "truck", 2 => "bike", 3 => "racingbike", 5 => "mtb", 8 => "foot", 9 => "hike", 11 => "small_truck", 12 => "scooter"];
            $routingProfile = $valuesProfile[$routingProfile] ? $valuesProfile[$routingProfile] : 'car';
            $matrixUrl = $routerConfig->getRouterViaRouteUrl() ? $routerConfig->getRouterViaRouteUrl() : "https://graphhopper.com/api/1/";
            $matrixUrl = $matrixUrl . 'matrix?key=' . $routerConfig->getRouterApiKey();
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
}