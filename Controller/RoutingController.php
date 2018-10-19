<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 27.06.18
 * Time: 11:07
 */

namespace con4gis\RoutingBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\RoutingBundle\Classes\Services\AreaService;
use con4gis\RoutingBundle\Classes\Services\RouteService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class RoutingController extends BaseController
{
    public function getAreaAction(Request $request, $profileId, $layerId, $distance, $center)
    {
        $response = new Response();
        if($request->query->get('profile') !== null){
            $profile = $request->query->get('profile');
        }
        $response ->setContent(AreaService::getResponse($profileId, $layerId, $distance, $center, $profile));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }
    public function getRouteAction(Request $request, $profileId, $layerId, $detour, $locations)
    {
        $response = new Response();
        if($request->query->get('profile') !== null){
            $profile = $request->query->get('profile');
        }
        $locations = explode(";",$locations);
        $routeService = $this->get("con4gis.route_service");
        $response ->setContent($routeService->getResponse($profileId, $layerId, $locations, $detour, $profile));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }
}