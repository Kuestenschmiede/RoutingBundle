con4gis-Routing
==============
The routing brick of the Contao GIS-kit **con4gis**. Extends con4gis MapsBundle.

**Git Repository:** RoutingBundle  
**Composer Vendor/Package:** [con4gis/routing](https://packagist.org/packages/con4gis/routing)  
**Website:** [con4gis.org](https://con4gis.org)

**Requires:**
- [Contao](https://github.com/contao/core) (***>=4.4***)   
- [CoreBundle](https://github.com/Kuestenschmiede/CoreBundle/releases) (*latest stable release*)
- [MapsBundle](https://github.com/Kuestenschmiede/MapsBundle/releases) (*latest stable release*)

Adds a control to the con4gis-map, which allows the user to calculate a route and display it on the map.
Furthermore it is possible to display features from the OpenStreetMap or from the servers database along the route or in a perimeter around a center.

##Router
- [OSRM](http://project-osrm.org/) (***4/5***)   
- [OpenRouteService](https://openrouteservice.org/) (Directions)

##Area (perimeter search)
- [OpenRouteService](https://openrouteservice.org/) (Matrix)

##configuration
- Custom Router-headline
- Choose your routing-API (ORS AND OSRM)
- Custom routing-server
- display alternative routes
- route over several targets
- show a list describing the route
- custom locationstyles for start, end and interim goals
- choose layers to load OpenStreetMap-data over OverpassQL along route or in perimeter
- choose layers to load georeferenced data from your own database along route or in perimeter
- specify a minimal and maximal detour for features along a route
- specify a minimal and maximal distance for features in a perimeter (calculated over the OpenRouteService Matrix-Service)
- show a list with all features along a route and in a perimeter

