<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

namespace con4gis\RoutingBundle\Classes\Services;

use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;
use con4gis\RoutingBundle\Classes\Event\LoadRouteFeaturesEvent;
use con4gis\RoutingBundle\Classes\Polyline;
use con4gis\RoutingBundle\Entity\RoutingConfiguration;
use Contao\System;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class RouteService extends \Frontend
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
    /**
     * Prepares the GET data for the call to the route services.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */
    public function generate($profileId, $locations, $routerConfig, $profile = null)
    {
        $strParams = "";
        foreach ($_GET as $key=>$value) {
            if (\Input::get($key)) {
                if (strlen($strParams) > 0) {
                    $strParams .= "&";
                }
                if ($key == "loc_to" || $key == "loc_from") {
                    $strParams .= "loc=" . \Input::get($key);
                } else {
                    $strParams .= $key . "=" . \Input::get($key);
                }
            }
        }
        return $this->getRoutingResponse($locations, $strParams, $routerConfig, $profileId, $profile);
    }

    /**
     * Creates a route and dispatches an event for loading features on the route. Returns an object containing both.
     * @param $profileId
     * @param $layer
     * @param $locations
     * @param $detour
     * @param $profile
     * @return string
     */
    public function getResponse($profileId, $layer, $locations, $detour, $profile)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $routerConfigRepo = System::getContainer()->get('doctrine.orm.default_entity_manager')
            ->getRepository(RoutingConfiguration::class);
        $routerConfig = $routerConfigRepo->findOneBy(['id' => $objMapsProfile->routerConfig]);
        $routeData = $this->generate($profileId, $locations,$routerConfig, $profile);
        $polyline = new Polyline([]);
        $objLayer = C4gMapsModel::findById($layer);
        if($routerConfig->getRouterLayers()){ //prevent listener and decoding of polyline if not necessary
            try {
                if ($routerConfig->getRouterApiSelection() == '1' || $routeData['routeType'] == '1') {
                    $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
                }
                else if ($routerConfig->getRouterApiSelection() == '2' || $routeData['routeType'] == '2'){
                    $points = $polyline->fromEncodedString($routeData['routes'][0]['geometry']);
                }
                else if ($routerConfig->getRouterApiSelection() == '3' || $routeData['routeType'] == '3') {
                    $points = $polyline->fromEncodedString($routeData['paths'][0]['points']);
                }
                else if ($routerConfig->getRouterApiSelection() == '4' || $routeData['routeType'] == '4') {
                    $points = $polyline->fromEncodedString($routeData['trip']['legs'][0]['shape'], 1e-6);
                }
                $points = $polyline->tunePolyline($points,0.1,0.4)->getPoints();
                $event = new LoadRouteFeaturesEvent();
                $event->setLayerId($layer);
                $event->setPoints($points);
                $event->setDetour($detour);
                $this->eventDispatcher->dispatch($event::NAME, $event);
                $routeData['features'] = $event->getFeatures();
                $routeData['bbox'] = $event->getBbox();
                $routeData['type'] = $objLayer->location_type;
            } catch(\InvalidArgumentException $exception) {
                // return error to frontend
                $routeData['error'] = "ROUTER_ERROR_POLYLINE";
            }
        }
        return \GuzzleHttp\json_encode($routeData);
    }

    /**
     * Checks the router type and calls the appropriate function.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @param $profile
     * @return string
     */
    protected function getRoutingResponse($arrInput, $strParams, $routerConfig, $intProfileId, $profile)
    {

        if($routerConfig instanceof RoutingConfiguration) {
            if($routerConfig->getRouterApiSelection() == '1' || $routerConfig->getRouterApiSelection() == '0') {
                $response = $this->getORSMResponse($arrInput, $strParams, $routerConfig, $profile);
            }
            else if($routerConfig->getRouterApiSelection() == '2') {
                $response = $this->getORSResponse($arrInput, $strParams, $profile, $routerConfig);
            }
            else if($routerConfig->getRouterApiSelection() == '3') {
                $response = $this->getGraphhopperResponse($arrInput, $strParams, $profile, $routerConfig);
            }
            else if ($routerConfig->getRouterApiSelection() == '4') {
                $response = $this->getValhallaResponse($arrInput, $strParams, $routerConfig, $profile);
            }
            else if ($routerConfig->getRouterApiSelection() == '5') {
                $response = $this->getCon4gisIOResponse($arrInput, $strParams, $routerConfig, $profile);
            }
            return $response;
        }
    }
    private function getCon4gisIOResponse ($arrInput, $strParams, $routerConfig, $profile = null){
        if($routerConfig instanceof RoutingConfiguration){
            $objSettings = C4gMapSettingsModel::findOnly();
            $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 3, 5);
            if(!substr_count('ca-ES, cs-CZ, de-DE, en-US, es-ES, fr-FR	, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)){
                $language = $GLOBALS['TL_LANGUAGE'];
                if(!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE',$language)){
                    $language = "en-US";
                }
            }
            $strInput = "";
            foreach($arrInput as $elementInput) {
                $strInput .= $elementInput .";";
            }
            $strInput = rtrim($strInput,';');
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->setHeader('Content-Type', "application/json");
            $REQUEST->method = "GET";
            $sendUrl = $objSettings->con4gisIoUrl . "routing.php?input=" . $strInput . "&language=" . $language . "&profile=" . $profile . "&key=" . $objSettings->con4gisIoKey;
            $REQUEST->send($sendUrl);
            $response = $REQUEST->response;
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch(\Exception $exception) {
                $response = [];
                $response['error'] = "ROUTER_ERROR_POLYLINE";
                return $response;
            }
            return $response;
        }
    }
    private function getValhallaResponse($arrInput, $strParams, $routerConfig, $profile = null) {
        if($routerConfig instanceof RoutingConfiguration){
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : "https://api.mapbox.com/valhalla/v1/";
            $strRoutingUrl .= "route";
            $strRoutingUrl .= $routerConfig->getRouterApiKey() ? "?access_token=" . $routerConfig->getRouterApiKey() : "";

            $locations = [];
            for($i = 0; $i < sizeof($arrInput); $i++){
                $location = [];
                $location['lat'] = explode(",",$arrInput[$i])[0];
                $location['lon'] = explode(",",$arrInput[$i])[1];
                $location['type'] = "through";
                $locations[] = $location;
            }
            $locations[0]['type'] = "break";
            $locations[sizeof($locations) - 1]['type'] = "break";
            switch($profile){
                case 0:
                    $costing = "auto";
                    break;
                case 1:
                    $costing = "truck";
                    break;
                case 2:
                    $costing = "bicycle";
                    break;
                case 3:
                    $costing = "bicycle";
                    $costing_options = [
                        "bicycle" => [
                            "bicycle_type" => "Road"
                        ]
                    ];
                    break;
                case 5:
                    $costing = "bicycle";
                    $costing_options = [
                        "bicycle" => [
                            "bicycle_type" => "Mountain"
                        ]
                    ];
                    break;
                case 8:
                    $costing = "pedestrian";
                    break;
                case 12:
                    $costing = "motor_scooter";
                    break;
                case 13:
                    $costing = "motorcycle";
                    $costing_options = [
                        "motorcycle"    => [
                            "use_highways"  => 0.4,
                            "use_trails"    => 0.8
                        ]
                    ];
                    break;
                default:
                    $costing = "auto";
                    break;
            }


            $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 3, 5);
            if(!substr_count('ca-ES, cs-CZ, de-DE, en-US, en-US-x-pirate, es-ES, fr-FR	, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE', $language)){
                $language = $GLOBALS['TL_LANGUAGE'];
                if(!substr_count('ca-ES, cs-CZ, de-DE, en-US,C, es-ES, fr-FR, hi-IN, it-IT, pt-PT, ru-RU, sl-SI, sv-SE',$language)){
                    $language = "en-US";
                }
            }
            if($routerConfig->getPirate()) {
                $language = "en-US-x-pirate";
            }
            $directionOptions = [
                "units"     => "meters",
                "language"  => $language
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
            $routeData = [
                "locations"         => $locations,
                "costing"           => $costing,
                "directions_options" => $directionOptions
            ];
            if ($costing_options) {
                $routeData = [
                    "locations"         => $locations,
                    "costing"           => $costing,
                    "directions_options" => $directionOptions,
                    "costing_options"   => $costing_options
                ];
            }
            $encodedData = \GuzzleHttp\json_encode($routeData);

            $REQUEST->send($strRoutingUrl, $encodedData);
            $response = $REQUEST->response;
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch(\Exception $exception) {
                $response = [];
                $response['error'] = "ROUTER_ERROR_POLYLINE";
                return $response;
            }
            return $response;
        }
    }
    /**
     * Calls the Graphhopper and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getGraphhopperResponse($arrInput, $strParams, $profile, $routerConfig)
    {
        if($routerConfig instanceof RoutingConfiguration){
            $valuesProfile =[0 => "car", 1 => "truck", 2 => "bike", 3 => "racingbike", 5 => "mtb", 8 => "foot", 9 => "hike", 11 => "small_truck", 12 => "scooter"];
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : "https://graphhopper.com/api/1/";
            $strRoutingUrl .= "route?";
            $apiKey = "&key=".$routerConfig->getRouterApiKey();
            $points = "point=" . explode(",",$arrInput[0])[0].','.explode(",",$arrInput[0])[1];
            for($i = 1; $i < sizeof($arrInput); $i++){
                $points .=  "&point=" . explode(",",$arrInput[$i])[0].','.explode(",",$arrInput[$i])[1];
            }
            $points = substr($points,0,strlen($points)-1);
            $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
            if(!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr',$language)){
                $language = $GLOBALS['TL_LANGUAGE'];
                if(!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr',$language)){
                    $language = "en";
                }
            }
            $profile = $valuesProfile[$profile] ? $valuesProfile[$profile] : 'car';

            $profile = "&vehicle=" . $profile;
            $locale = "&locale=" . $language;
            $url = $strRoutingUrl . $points . $profile . $locale;
            if ($routerConfig->getRouterAlternative() == "1" && sizeof($arrInput) == 2) {
                $url .= "&algorithm=alternative_route&ch.disable=true";
            }
            $url .= $apiKey;
            $request = $this->createRequest();
            $request->send($url);
            $response = $request->response;
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch(\Exception $exception) {
                $response = [];
                $response['error'] = "ROUTER_ERROR_POLYLINE";
                return $response;
            }
            return $response;
        }

    }

    /**
     * Calls the ORSM and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getORSMResponse($arrInput, $strParams, $routerConfig, $profile = "driving")
    {
        $strRoutingUrl = "http://router.project-osrm.org/";
        if ($routerConfig->getRouterViarouteUrl())
        {
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl();
            if(substr($strRoutingUrl,-1,1) != '/') {
                $strRoutingUrl= $strRoutingUrl.'/';
            }
        }

        $request = $this->createRequest();
        if ($routerConfig && $routerConfig->getRouterApiSelection() == '1') {
            $url = "";
            for ($i = 0; $i< sizeof($arrInput); $i++) {
                $url = $url. explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].';';
            }
            $url = substr($url,0,strlen($url)-1);
            $request->send($strRoutingUrl . 'route/v1/'. $profile . '/' .$url.'?steps=true&overview=full&alternatives=true');
        } else {
            $request->send($strRoutingUrl . '?' . $strParams);
        }
        $response = $request->response;
        try {
            $response = \GuzzleHttp\json_decode($response, true);
        } catch(\Exception $exception) {
            $response = [];
            $response['error'] = "ROUTER_ERROR_POLYLINE";
            return $response;
        }
        return $response;
    }

    /**
     * Calls the ORS and returns the routing response.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @param $profile
     * @return array|mixed|string
     */
    private function getORSResponse($arrInput, $strParams, $profile, $routerConfig)
    {
        if($routerConfig instanceof RoutingConfiguration) {
            $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];
            $strRoutingUrl = $routerConfig->getRouterViarouteUrl() ? $routerConfig->getRouterViarouteUrl() : "https://api.openrouteservice.org/";
            $strRoutingUrl .= "directions?";
            $apiKey = "api_key=".$routerConfig->getRouterApiKey();
            $coordinates = "&coordinates=";
            for($i = 0; $i < sizeof($arrInput); $i++){
                $coordinates .=  explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].'|';
            }
            $coordinates = substr($coordinates,0,strlen($coordinates)-1);
            $language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
            if(!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr',$language)){
                $language = $GLOBALS['TL_LANGUAGE'];
                if(!substr_count('cn, de, en, es, ru, dk, fr, it, nl, br, se, tr, gr',$language)){
                    $language = "en";
                }
            }
            $profile = $valuesProfile[$profile] ? $valuesProfile[$profile] : 'driving-car';

            $profile = "&profile=".$profile."&format=json&language=".$language."&geometry_format=encodedpolyline&maneuvers=true&preference=recommended";
            $url = $strRoutingUrl.$apiKey.$coordinates.$profile;
            $request = $this->createRequest();
            $request->send($url);
            $response = $request->response;
            try {
                $response = \GuzzleHttp\json_decode($response, true);
            } catch(\Exception $exception) {
                $response = [];
                $response['error'] = "ROUTER_ERROR_POLYLINE";
                return $response;
            }

            // error handling
            if ($response['error'] && $response['error']['code'] === 2004) {
                // try again with another preference
                $url = str_replace("preference=recommended","preference=fastest", $url);
                $request->send($url);
                $response = $request->response;
                $response = json_decode($response, true);
                if ($response['error'] && $response['error']['code'] === 2004) {
                    return $response;
                }
            }

            if ($routerConfig->getRouterAlternative() == "1") {
                $request = $this->createRequest();
                $url = str_replace("preference=recommended","preference=shortest",$url);
                $request->send($url);
                $response['routes'][1] = \GuzzleHttp\json_decode($request->response, true)['routes'][0];
            }
            return $response;
        }
    }

    /**
     * Helper function for creating a request and setting default headers.
     * @return \Request
     */
    private function createRequest()
    {
        $request = new \Request();
        if ($_SERVER['HTTP_REFERER']) {
            $request->setHeader('Referer', $_SERVER['HTTP_REFERER']);
        }
        if ($_SERVER['HTTP_USER_AGENT']) {
            $request->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
        }
        return $request;
    }


}