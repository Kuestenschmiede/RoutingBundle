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
use con4gis\MapsBundle\Resources\contao\modules\api\RoutingApi;
use con4gis\RoutingBundle\Classes\Event\LoadRouteFeaturesEvent;
use con4gis\RoutingBundle\Classes\LatLng;
use con4gis\RoutingBundle\Classes\Polyline;
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
    public function generate($profileId, $locations, $profile = null)
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
        return $this->getRoutingResponse($locations, $strParams, $profileId, $profile);
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
        $routeData = $this->generate($profileId, $locations, $profile);
        $polyline = new Polyline([]);
        $objLayer = C4gMapsModel::findById($layer);
        try {
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
        } catch(\InvalidArgumentException $exception) {
            // return error to frontend
            $routeData['error'] = "ROUTER_ERROR_POLYLINE";
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
    protected function getRoutingResponse($arrInput, $strParams, $intProfileId, $profile)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
        if($objMapsProfile->router_api_selection == '1' || $objMapsProfile->router_api_selection == '0') {
            $response = $this->getORSMResponse($objMapsProfile, $arrInput, $strParams);
        }
        else if($objMapsProfile->router_api_selection == '2' && false){
            $response = $this->getORSResponse($arrInput, $strParams, $intProfileId, $profile);
        }
        else if($objMapsProfile->router_api_selection == '3' || true){
            $response = $this->getGraphhopperResponse($arrInput, $strParams, $intProfileId, $profile);
        }
        return $response;
    }
    /**
     * Calls the Graphhopper and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getGraphhopperResponse($arrInput, $strParams, $intProfileId, $profile){
        $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];

        $valuesProfile = ["car" , "small_truck" , "truck" , "scooter" , "foot" , "hike" , "bike" , "mtb" , "racingbike"];
        $valuesProfile =[0 => "car", 1 => "truck", 2 => "bike", 3 => "racingbike", 5 => "mtb", 8 => "foot", 9 => "hike", 11 => "small_truck", 12 => "scooter"];
        $strRoutingUrl = "https://graphhopper.com/api/1/route?";
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
        $apiKey = "&key=".$objMapsProfile->router_api_key;
        $points = "point=" . explode(",",$arrInput[0])[0].','.explode(",",$arrInput[0])[1];
        for($i = 0; $i < sizeof($arrInput); $i++){
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

        $profile = "&vehicle=".$profile."&locale=".$language;
        $url = $strRoutingUrl.$points.$profile.$apiKey;
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

    /**
     * Calls the ORSM and returns the routing response.
     * @param $objMapsProfile
     * @param $arrInput
     * @param $strParams
     * @return string
     */
    private function getORSMResponse($objMapsProfile, $arrInput, $strParams)
    {
        $strRoutingUrl = "http://router.project-osrm.org/";
        if ($objMapsProfile->router_viaroute_url)
        {
            $strRoutingUrl = $objMapsProfile->router_viaroute_url;
            if(substr($strRoutingUrl,-1,1) != '/') {
                $strRoutingUrl= $strRoutingUrl.'/';
            }
        }

        $request = $this->createRequest();
        if ($objMapsProfile && $objMapsProfile->router_api_selection == '1') {
            $url = "";
            for ($i = 0; $i< sizeof($arrInput); $i++) {
                $url = $url. explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].';';
            }
            $url = substr($url,0,strlen($url)-1);
            $request->send($strRoutingUrl . 'route/v1/driving/'.$url.'?steps=true&overview=full&alternatives=true');
        } else {
            $request->send($strRoutingUrl . '?' . $strParams);
        }
        $response = $request->response;
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
    private function getORSResponse($arrInput, $strParams, $intProfileId, $profile)
    {
        $valuesProfile = ["driving-car" , "driving-hgv" , "cycling-regular" , "cycling-road" , "cycling-safe" , "cycling-mountain" , "cycling-tour" , "cycling-electric" , "foot-walking" , "foot-hiking" , "wheelchair"];
        $strRoutingUrl = "https://api.openrouteservice.org/directions?";
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
        $apiKey = "api_key=".$objMapsProfile->router_api_key;
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

        if ($objMapsProfile->router_alternative == "1") {
            $request = $this->createRequest();
            $url = str_replace("preference=recommended","preference=shortest",$url);
            $request->send($url);
            $response['routes'][1] = \GuzzleHttp\json_decode($request->response, true)['routes'][0];
        }
        return $response;
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