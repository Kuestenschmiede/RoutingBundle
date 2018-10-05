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
    public function getAreaAction(Request $request, $layerId, $center, $radius)
    {
        $response = new Response();
        $response ->setContent(AreaService::getResponse($layerId, $center, $radius));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }
    public function getRouteAction(Request $request, $profileId, $layerId, $locations, $detour)
    {
        $response = new Response();
        if($request->query->get('profile') !== null){
            $profile = $request->query->get('profile');
        }
        $locations = explode(";",$locations);
        $routeService = new RouteService();
        $response ->setContent($routeService->getResponse($profileId, $layerId, $locations, $detour, $profile));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }
}