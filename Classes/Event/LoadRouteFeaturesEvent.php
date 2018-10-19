<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 18.10.18
 * Time: 15:49
 */

namespace con4gis\RoutingBundle\Classes\Event;


use Symfony\Component\EventDispatcher\Event;

class LoadRouteFeaturesEvent extends Event
{
    const NAME = "load.route.features";

    private $layerId = 0;

    private $detour = 0;

    private $points = [];

    private $features = [];

    private $bbox = "";

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

    /**
     * @return array
     */
    public function getFeatures()
    {
        return $this->features;
    }

    /**
     * @param array $features
     */
    public function setFeatures($features)
    {
        $this->features = $features;
    }

    /**
     * @return string
     */
    public function getBbox()
    {
        return $this->bbox;
    }

    /**
     * @param string $bbox
     */
    public function setBbox($bbox)
    {
        $this->bbox = $bbox;
    }
}