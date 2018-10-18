<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 18.10.18
 * Time: 15:49
 */

namespace con4gis\RoutingBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadRouteFeaturesEvent extends Event
{
    const NAME = "load.route.features";

    private $layerId = 0;

    private $detour = 0;

    private $points = [];

    /**
     * @return int
     */
    public function getLayerId()
    {
        return $this->layerId;
    }

    /**
     * @param int $layerId
     */
    public function setLayerId($layerId)
    {
        $this->layerId = $layerId;
    }

    /**
     * @return int
     */
    public function getDetour()
    {
        return $this->detour;
    }

    /**
     * @param int $detour
     */
    public function setDetour($detour)
    {
        $this->detour = $detour;
    }

    /**
     * @return array
     */
    public function getPoints()
    {
        return $this->points;
    }

    /**
     * @param array $points
     */
    public function setPoints($points)
    {
        $this->points = $points;
    }
}