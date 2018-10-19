<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 18.10.18
 * Time: 15:49
 */

namespace con4gis\RoutingBundle\Classes\Event;


use Symfony\Component\EventDispatcher\Event;

class LoadAreaFeaturesEvent extends Event
{
    const NAME = "load.area.features";

    private $profileId = 0;

    private $location = "";

    private $distance = 0.0;

    private $layerId = 0;

    private $profile = "";

    private $returnData = "";

    /**
     * @return int
     */
    public function getProfileId()
    {
        return $this->profileId;
    }

    /**
     * @param int $profileId
     */
    public function setProfileId($profileId)
    {
        $this->profileId = $profileId;
    }

    /**
     * @return string
     */
    public function getLocation()
    {
        return $this->location;
    }

    /**
     * @param string $location
     */
    public function setLocation($location)
    {
        $this->location = $location;
    }

    /**
     * @return float
     */
    public function getDistance()
    {
        return $this->distance;
    }

    /**
     * @param float $distance
     */
    public function setDistance($distance)
    {
        $this->distance = $distance;
    }

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
     * @return string
     */
    public function getProfile()
    {
        return $this->profile;
    }

    /**
     * @param string $profile
     */
    public function setProfile($profile)
    {
        $this->profile = $profile;
    }

    /**
     * @return string
     */
    public function getReturnData()
    {
        return $this->returnData;
    }

    /**
     * @param string $returnData
     */
    public function setReturnData($returnData)
    {
        $this->returnData = $returnData;
    }
}