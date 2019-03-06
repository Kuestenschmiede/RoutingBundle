# con4gis-RoutingBundle
## Overview
The routing brick of the Contao GIS-kit **con4gis**. Extends con4gis MapsBundle.

Adds a control to the con4gis-map, which allows the user to calculate a route and display it on the map.
Furthermore it is possible to display features from the [OpenStreetMap](https://www.openstreetmap.de/) or from the servers database along the route or in a perimeter around a center.

__Features include:__
* Customize the appearance of the router
* Use different routing engines ([Valhalla](https://wiki.openstreetmap.org/wiki/Valhalla), [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/) or [OpenRouteService](https://openrouteservice.org/))
* Display alternative routes
* Add additional targets between start and end
* Shows hints for each route part
* Add data from the [OpenStreetMap](https://www.openstreetmap.de/) or your own database, so they are displayed near the route
* Perimeter search for data from the [OpenStreetMap](https://www.openstreetmap.de/) or your own database

## Installation
Via composer:
```
composer require con4gis/routing
```
Alternatively, you can use the Contao Manager to install the con4gis-RoutingBundle.

## Requirements
- [Contao](https://github.com/contao/core-bundle) (>=4.4)   
- [CoreBundle](https://github.com/Kuestenschmiede/CoreBundle/releases) (*latest stable release*)
- [MapsBundle](https://github.com/Kuestenschmiede/MapsBundle/releases) (*latest stable release*)

## Documentation
Visit [docs.con4gis.org](https://docs.con4gis.org) for a user documentation. You can also contact us via the support forum there.