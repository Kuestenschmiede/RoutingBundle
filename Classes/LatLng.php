<?php

namespace con4gis\RoutingBundle\Classes;

class LatLng {

    protected $lat;
    protected $lng;
    protected $crs;
    const EARTH_RADIUS = 6378.137;
    const LAT_WIDTH = 111.3;

    public function __construct($lat = 0, $lng = 0, $crs = 'etrs89') {
        $this->lat = $lat;
        $this->lng = $lng;
        $this->crs = $crs;
    }

    public function getLng() {
        return $this->lng;
    }

    public function getLat() {
        return $this->lat;
    }

    public function setLng($lng) {
        $this->lng = $lng;
    }

    public function setLat($lat) {
        $this->lat = $lat;
    }

    public function getCrs() {
        return $this->crs;
    }

    public function setCrs($crs) {
        $this->crs = $crs;
    }
    public function getLatWidth() {
        return self::LAT_WIDTH;
    }
    public function getLngWidth($lat = 0) {
        return 2 * M_PI * self::EARTH_RADIUS * cos(deg2rad($lat)) / 360;
    }

    public function getEarthRadius() {
        return self::EARTH_RADIUS;
    }

    public function __toString() {
        return $this->lat . ',' . $this->lng;
    }

    public function toArray() {
        return array('lat' => $this->lat, 'lng' => $this->lng);
    }

    public static function fromString($string = '0,0') {
        if (!is_string($string)) {
            throw new \InvalidArgumentException(sprintf('Expecting string, %s given', gettype($string)));
        }
        if (strstr($string, ',') !== false) {
            $array = explode(',', $string);
        }
        else {
            $array = explode(' ', $string);
        }
        if (count($array) != 2) {
            throw new \InvalidArgumentException('$string is not a valid LatLng string. Valid formats: "lat,lng"|"lat lng"');
        }
        return new self((float)$array[0], (float)$array[1]);
    }
    public function getLatLngBounds(LatLng $latLng, $span = 0) {

        $lngWidth = $this->getLngWidth($latLng->getLat());
        $latWidth = self::LAT_WIDTH;

        return array(
            'left' =>   new LatLng($latLng->getLat(), $latLng->getLng() - ($span/$lngWidth)),
            'upper' =>  new LatLng($latLng->getLat() + ($span/$latWidth), $latLng->getLng()),
            'right' =>  new LatLng($latLng->getLat(), $latLng->getLng() + ($span/$lngWidth)),
            'lower' =>  new LatLng($latLng->getLat() - ($span/$latWidth), $latLng->getLng())
        );
    }
}