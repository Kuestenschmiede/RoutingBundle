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

/** Routing und Umkreissuche  */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'] = ['Activate routing','Please activate search tools in addition. Adds an additional button to activate routing functionality. Please check the <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">terms of use</a> for default API!.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = ['Routing Server Technology','Choose Server Technology'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key'] = ['API-Key', 'Enter your ORS-API-Key. You can generate the key <a href="https://openrouteservice.org/sign-up/" target="_blank">here</a>. Pay attention to the terms of use.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url'] = ['Alternative URL (mandatory for OSRM-API 4)', 'Enter the URL of a ORS or OSRM Server, for example if you want to use your own. By default, either http://router.project-osrm.org/ or https://api.openrouteservice.org/ is used. Pay attention to the providers\' copyright information.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerHeadline'] = ['Headline Router', 'Default: Router'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution'] = ['Override Router Copyright', 'Overrides the default attriubution. Recommended only if you are using an alternative API-Server, or if you have placed it in another, clearly visible, spot on your website!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = ['Location Style for Starting Point', 'Choose a location style for the starting point.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = ['Location Style for Target Point', 'Choose a location style for the target point.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = ['Location Style for on-the-fly hints', 'Choose a location style for the on-the-fly hints.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = ['Location Style for interim targets', 'Choose a location style for interim targets.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles'] = ['Router Profile', 'Determines the OpenRouteService or Graphhopper profiles.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'] = ['Layer for routes', 'Enter the layers to show on the route or in a perimeter (default: Overpass & Table).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['layers'] = ['Layer','Layer to be evaluated for the router or area search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['key'] = ['Key','Key for the evaluation.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'] = ['Button Text','The text for the corresponding button.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['label'] = ['Label','Label for the map elements.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['mapLabel'] = ['Label Field','Fieldname for the label generation.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hideFeaturesWithoutLabel'] = ['Hide features without label','Check this to hide features that have no label.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'] = ['Router initially opened', 'Check this to open the router initially.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = ['Alternative Routes', 'Should alternative routes be displayed?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'] = ['Interim Targets', 'Check this to enable the possibility to create interim targets.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'] = ['Swap Start and Target', 'Check this to enable swapping of start and target.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routeStartButton'] = ['Button: "Start Search"', 'Choose if a button should be generated with which the search can be triggered manually.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'] = ['Close Router after Search', 'If this is checked, the router will be closed automatically after the search has been initiated.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'] = ['Show Route Information', 'Check this top show information about the route.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['instructionLabel'] = ['Route information button caption', 'Enter a caption for the route information button.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showFeatures'] = ['Show Result List', 'If this is checked, results will be shown in the router.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['featureLabel'] = ['Result list button caption', 'Enter a caption for the result list button.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'] = ['Initial View', 'Choose the initial view in the router.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'] = ['Minimum Radius Area Search (km)', 'The minimum radius to search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'] = ['Maximum Radius Area Search (km)', 'The maximum radius to search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourArea'] = ['Initial Radius Area Search (km)', 'The initial radius to search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'] = ['Minimum Detour along Route (km)', 'The minimum detour to be calculated.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'] = ['Maximum Detour along Route (km)', 'The maximum detour to be calculated.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourRoute'] = ['Initial Detour along Route (km)', 'The initial detour to be calculated.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'] = ['Location Style active element', 'Enter the location style for the active element.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'] = ['Location Style Center (Area Search)', 'Choose the location style which will place a marker in the center of the search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityFeatures'] = ['Prioritized Features', 'The number of features with the lowest value to be displayed differently on the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityLocstyle'] = ['Location Style prioritized features', 'Location Style for prioritized features.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['usePermalink'] = ['Generate router permalink', 'Check this to save the current search parameters in the URL.'];

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['area'] = "Area Search";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['route'] = "Route Search";

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['0'] = 'OpenSourceRoutingMachine (API 4.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['1'] = 'OpenSourceRroutingMachine (API 5.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['2'] = 'OpenRouteService';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['3'] = 'Graphhopper';

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['0'] = 'Car';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['1'] = 'Truck';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['2'] = 'Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['3'] = 'Road Bike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['4'] = 'Bicycle (secure)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['5'] = 'Mountainbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['6'] = 'Trekking Bike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['7'] = 'Electronic Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['8'] = 'Pedestrian';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['9'] = 'Hiker';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['10']= 'Wheelchair';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['11']= 'Small Truck';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['12']= 'Scooter';

/** legend */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routing_legend'] = 'Routing and Area Search';