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

//include_once(System::getContainer()->getParameter('kernel.project_dir')."/vendor/phayes/geophp/geoPHP.inc");

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
     * Determines the request method and selects the appropriate data result.
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
     * Returns the layer structure for the map.
     * @param $arrInput
     * @param $strParams
     * @param $intProfileId
     * @return string
     */
    protected function getRoutingResponse($arrInput, $strParams, $intProfileId, $profile)
    {
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $intProfileId);
        if($objMapsProfile->router_api_selection == '1' || $objMapsProfile->router_api_selection == '0'){
            $strRoutingUrl = "http://router.project-osrm.org/";
            if ($intProfileId > 0)
            {

                if ($objMapsProfile !== null)
                {
                    if ($objMapsProfile->router_viaroute_url)
                    {
                        $strRoutingUrl = $objMapsProfile->router_viaroute_url;
                        if(substr($strRoutingUrl,-1,1)!='/'){
                            $strRoutingUrl= $strRoutingUrl.'/';
                        }
                    }
                }
            }

            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }

            if ($objMapsProfile && $objMapsProfile->router_api_selection == '1') {
                $url = "";
                for ($i = 0; $i< sizeof($arrInput); $i++) {
                    $url = $url. explode(",",$arrInput[$i])[1].','.explode(",",$arrInput[$i])[0].';';
                }
                $url = substr($url,0,strlen($url)-1);
                $REQUEST->send($strRoutingUrl . 'route/v1/driving/'.$url.'?steps=true&overview=full&alternatives=true');
            } else {
                $REQUEST->send($strRoutingUrl . '?' . $strParams);
            }
            $response = $REQUEST->response;
        }
        else{
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
            $REQUEST = new \Request();
            if ($_SERVER['HTTP_REFERER']) {
                $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
            }
            if ($_SERVER['HTTP_USER_AGENT']) {
                $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
            }
            $REQUEST->send($url);
            $response = $REQUEST->response;
            if($objMapsProfile->router_alternative == "1"){
                $REQUEST2 = new \Request();
                if ($_SERVER['HTTP_REFERER']) {
                    $REQUEST2->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                }
                if ($_SERVER['HTTP_USER_AGENT']) {
                    $REQUEST2->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                }
                $url = str_replace("preference=recommended","preference=shortest",$url);
                $REQUEST2->send($url);
                $response = \GuzzleHttp\json_decode($response, true);
                $response['routes'][1] = \GuzzleHttp\json_decode($REQUEST2->response, true)['routes'][0];
                $response = \GuzzleHttp\json_encode($response);
            }


        }

        return $response;
    }

    public function getResponse($profileId, $layer, $locations, $detour, $profile)
    {
        $routeString = $this->generate($profileId, $locations, $profile);
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