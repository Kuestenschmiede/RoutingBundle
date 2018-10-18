<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 18.10.18
 * Time: 15:49
 */

namespace con4gis\RoutingBundle\Classes\Events;


use Symfony\Component\EventDispatcher\Event;

class LoadAreaFeaturesEvent extends Event
{
    const NAME = "load.area.features";
}