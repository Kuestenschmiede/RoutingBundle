<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\RoutingBundle\Classes;

class Polyline {

    protected $points;
    const EARTH_RADIUS = 6378.137;
    const LAT_WIDTH = 111.3;

    public function __construct(array $points) {
        $this->points = $points;
    }

    public function getPoints() {
        return $this->points;
    }

    public function asSqlPolygon() {
        $points = array();
        foreach ($this->points AS $p){
            $points[] = $p->getLat() . ' ' . $p->getLng();
        }
        $points[] = $this->points[0]->getLat() . ' ' . $this->points[0]->getLng();
        return join(',', $points);
    }

    public function getSize() {
        return count($this->points);
    }

    public function fromEncodedString($string = null, $encoding = 1e-5) {
        if (!is_string($string)) {
            throw new \InvalidArgumentException(sprintf('Expecting string, %s given', gettype($string)));
        }

        $points = array();
        $index = $i = 0;
        $previous = array(0,0);
        while( $i < strlen($string)  ) {
            $shift = $result = 0x00;
            do {
                $bit = ord(substr($string,$i++)) - 63;
                $result |= ($bit & 0x1f) << $shift;
                $shift += 5;
            } while( $bit >= 0x20 ) ;

            $diff = ($result & 1) ? ~($result >> 1) : ($result >> 1);
            $number = $previous[$index % 2] + $diff;
            $previous[$index % 2] = $number;
            $index++;
            $points[] = $number *$encoding;
        }

        $return = array();
        if (count($points) < 2) {
            return array();
        }
        do {
            $return[] = new LatLng(array_shift($points), array_shift($points));
        }
        while (!empty($points));

        return new self($return);
    }
    public function tunePolyline(Polyline $polyline, $pBetweenDist = 1, $pMaxDist = 2) {
        $points = array();
        $maxDist = 0;
        $latLngs = $polyline->getPoints();
        $points[] = $latLngs[0];

        $numPoints = count($latLngs);
        for ($c = 0; $c < $numPoints - 1; $c++) {
            if (($betweenDist = $this->getDistance($latLngs[$c], $latLngs[$c+1])) > $pBetweenDist || $maxDist > $pMaxDist) {
                $points[] = $latLngs[$c+1];
                $maxDist = 0;
            }
            else {
                $maxDist += $betweenDist;
            }
        }
        $points[] = $latLngs[$numPoints-1];
        return new Polyline($points);
    }
    public function getDistance(LatLng $latLng1, LatLng $latLng2) {
        $lat = ($latLng1->getLat() + $latLng2->getLat()) / 2 * 0.01745;
        $dy = self::LAT_WIDTH * ($latLng1->getLat() - $latLng2->getLat());
        $dx = self::LAT_WIDTH * cos($lat) * ($latLng1->getLng() - $latLng2->getLng());
        return sqrt(pow($dx, 2) + pow($dy, 2));
    }
}