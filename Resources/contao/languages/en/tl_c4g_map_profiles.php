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

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router']                = array('Activate routing (Please check the <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">terms of use</a> for default API!)',
                                                                            'Adds an additional button to activate routing functionality.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url']   = array('Alternative URL of ORS- or OSRM-API',
                                                                            'Default: http://router.project-osrm.org/viaroute or https://api.openrouteservice.org/directions?');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key']        = array('API-Key',
                                                                            'Enter your API-key here. You can generate the key <a href="https://openrouteservice.org/sign-up/" target="_blank">here</a>.');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles']       = array('Router-profiles',
                                                                            'Enter the profiles for OpenRouteService');
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution']    = array('Override OSRM attribution',
                                                                            'Only override the attribution if you use another API-server, or put the attribution somewhere prominent else on your page!');

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'] =            ['Layer for routes', 'Enter the layers to show on the route or in a perimeter (default: Overpass & Table).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerHeadline'] =          ['Headline Router', 'Enter the headline for the router.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'] =           ['Minimal radius for perimeter search', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'] =           ['Maximal radius for perimeter search', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'] =          ['Minimal detour for route', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'] =          ['Maximal detour for route', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'] =              ['Open router initially', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'] =           ['Locstyle for active feature', 'Choose the locationstyle for the clicked feature.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'] =      ['Locstyle center (perimeter search)', 'Choose the locationstyle for the center of the perimeter search'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityFeatures'] =        ['Prioritized features', 'The entered number of features is displayed differently.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityLocstyle'] =        ['Locstyle prioritized features', 'Choose the locationstyle for the prioritized features.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'] =        ['Interim goals', 'Activate interim goals for router.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'] =      ['Switch start and goal', 'Activate button to switch start and goal.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'] =        ['Close router after search', 'If checked, the router is closed after the search.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'] =        ['Show route instructions', 'Show instructions for the route in portside'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showFeatures'] =            ['Show route features', 'Show features beside the route in portside'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'] =             ['Initial view', 'Choose which view should be activated'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routeStartButton'] =        ['Button: "Start search"', 'Adds a button, which allows you to start the search manually.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = ['Selection of API-version',
    'Old OSRM-API only works with own servers'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = ['Locstyle for start-location'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = ['Locstyle for goal-location'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = ['Locstyle for on-the-fly hints'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = ['Locstyle for interim-locations', ];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = ['Alternative routes','Do you want to allow alternative routes?'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['key'] =      ['Key'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'] =    ['Value'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['label'] =    ['Label'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['mapLabel'] = ['Map label',''];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['area'] = "Perimeter search";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['route'] = "Router";

/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['0'] = 'Car';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['1'] = 'Heavy Vehicle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['2'] = 'Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['3'] = 'Roadbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['4'] = 'Bicycle (safe)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['5'] = 'Moutainbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['6'] = 'Touring bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['7'] = 'Electric Bicycle';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['8'] = 'Pedestrian';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['9'] = 'Hiker';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['10']= 'Wheelchair';
