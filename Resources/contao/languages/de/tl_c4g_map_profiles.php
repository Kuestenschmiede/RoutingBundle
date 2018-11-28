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

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'] =            ['Layer für Route', 'Geben Sie hier die Layer an, die an der Route durchsucht werden sollen (Overpass, Table).'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'] =           ['Minimaler Radius Gebietssuche', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerHeadline'] =          ['Überschrift Router', 'Geben Sie eine Überschrift für den Router an.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'] =           ['Maximaler Radius Gebietssuche', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'] =          ['Minimaler Umweg an Route', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'] =          ['Maximaler Umweg an Route', ''];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'] =              ['Router initial öffnen', 'Klicken Sie diese Checkbox, um den Router initial zu öffnen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'] =           ['Lokationsstil aktives Element', 'Geben Sie hier den Lokationsstil für das jeweils aktive Element ein.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'] =      ['Lokationsstil Zentrum (Umkreissuche)', 'Geben Sie hier einen Lokationsstil an, in dem bei der Umkreissuche ein Marker auf das ausgewählte Zentrum gesetzt wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityFeatures'] =        ['Priorisierte Features', 'Die hier angegebene Anzahl an Features mit dem niedrigsten Wert für das Kartenlabel werden in der Karte anders dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityLocstyle'] =        ['Lokationsstil priorisierte Features', 'Geben Sie hier einen Lokationsstil an, in dem die priorisierten Features dargestellt werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'] =        ['Zwischenziele', 'Aktivieren Sie diese Checkbox, um die Möglichkeit von Zwischenzielen im Router zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'] =      ['Start und Ziel tauschen', 'Aktivieren Sie diese Checkbox, um das Vertauschen von Start und Ziel im Router zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'] =        ['Router nach Suche schließen', 'Wenn Sie diese Checkbox aktivieren, wird der Router nach Starten der Suche geschlossen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'] =        ['Button für Routenhinweise einblenden', 'Wenn Sie diese Checkbox aktivieren, werden Routenhinweise angezeigt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showFeatures'] =            ['Ergebnisliste einblenden', 'Wenn Sie diese Checkbox aktivieren, werden Ergebnisse im Router dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'] =             ['Initiale Sicht', 'Wählen Sie aus, welche Sicht im Router initial angezeigt werden soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routeStartButton'] =        ['Button: "Suche starten"', 'Wählen Sie aus, ob ein Knopf eingestellt werden soll, mit dem die Suche manuell gestartet werden kann.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = ['Auswahl der API-Version','Alte API funktioniert nur mit eingenem ORSM-Server'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = ['Location-Stil für Start-Location', 'Location-Stil für Start-Location'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = ['Location-Stil für Ziel-Location', 'Location-Stil für Ziel-Location'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = ['Location-Stil für Unterwegs-Hinweise', 'Location-Stil für Unterwegs-Hinweise'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = ['Location-Stil für Zwischenziele', 'Location-Stil für Zwischenziele'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = ['Alternativroute','Sollen Alternativrouten dargestellt werden?'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['key'] =      ['Schlüssel'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'] =    ['Wert'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['label'] =    ['Label'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['mapLabel'] = ['Kartenlabel',' Geben Sie den Schlüssel für das Label aus der Karte ein.'];

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['area'] = "Umkreissuche";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['route'] = "Routensuche";


/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['0'] = 'Auto';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['1'] = 'Lastwagen';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['2'] = 'Fahrrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['3'] = 'Rennrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['4'] = 'Fahrrad (sicher)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['5'] = 'Moutainbike';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['6'] = 'Trekkingrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['7'] = 'Elekrofahrrad';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['8'] = 'FußgängerIn';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['9'] = 'WandererIn';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles']['10']= 'Rollstuhl';
