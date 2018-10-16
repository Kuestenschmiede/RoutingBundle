<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 01.10.18
 * Time: 10:45
 */

namespace con4gis\RoutingBundle\Classes\Services;


use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class AreaService
{
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher = null;

    /**
     * LayerService constructor.
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }
    public static function getResponse($profileId, $layerId, $location, $detour, $profile){
        $objMapsProfile = C4gMapProfilesModel::findBy('id', $profileId);
        $rect = [];
        $rect[] =
    }
}