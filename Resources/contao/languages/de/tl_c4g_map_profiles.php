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
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'] = ['Router aktivieren',  'Bitte aktivieren Sie zusätzlich die Suchwerkzeuge. Fügt einen zusätzlichen Schalter in die Karte ein, über den der Router aktiviert werden kann. Beachten Sie bitte die <a href="https://github.com/DennisOSRM/Project-OSRM/wiki/Api-usage-policy" target="_blank">Nutzungsbedingungen des Standard-Anbieters</a>!)'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'] = ['Routing-Servertechnik','Auswahl der Servertechnik.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key'] = ['API-Key', 'Geben Sie hier Ihren ORS-API-Key ein. Den Key können Sie <a href="https://openrouteservice.org/sign-up/" target="_blank">hier</a> generieren. Achten Sie auf die Servicebeschränkungen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url'] = ['Alternative URL (verfplichtend für OSRM-API 4)', 'Geben Sie hier die URL des ORS oder OSRM Servers ein, wenn Sie z.B. einen eigenen Server nutzen möchten. Standardmäßig wird http://router.project-osrm.org/ oder https://api.openrouteservice.org/ verwendet. Achten Sie dabei auf die Copyright Hinweise des Anbieters.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerHeadline'] = ['Überschrift Router', 'Standard: Router'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution'] = ['Copyright für Router überschreiben', 'Überschreibt die Standard-Attribution. Dies ist nur dann empfehlenswert, wenn Sie einen alternativen API-Server nutzen, oder die Attribution an einer anderen, offensichtlichen Stelle, auf der Seite platziert haben!'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'] = ['Lokationstil für Startpunkt', 'Wählen Sie einen Lokationstil für den Startpunkt aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'] = ['Lokationstil für Zielpunkt', 'Wählen Sie einen Lokationstil für den Zielpunkt aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'] = ['Lokationstil für Unterwegs-Hinweise', 'Wählen Sie einen Lokationstil für Unterwegs-Hinweise aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'] = ['Lokationstil für Zwischenziele', 'Wählen Sie einen Lokationstil für Zwischenziele aus.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles'] = ['Router-Profile', 'Legt die OpenRouteService-Profile fest.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'] = ['Kartenstrukturelemente an der Route', 'Geben Sie hier die Strukturelemente an, die an der Route durchsucht werden sollen ("Anfrage an Overpass API (nur QL)", "Aus anderer Tabelle").'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['layers'] = ['Strukturelement','Strukturelement welches an der Route- und/oder für die Umkreissuche ausgewertet werden soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['key'] = ['Feldname','Feldname (key) für die Auswertung.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'] = ['Buttontext','Die Bezeichnung wird am entsprechenden Button für die Auswahl dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['label'] = ['Label','Label für die Kartenelemente.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['mapLabel'] = ['Labelfeld','Feldname für die Labelgenerierung.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'] = ['Router initial öffnen', 'Aktivieren Sie diese Checkbox, um den Router initial zu öffnen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'] = ['Alternativroute','Sollen Alternativrouten dargestellt werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'] = ['Zwischenziele', 'Aktivieren Sie diese Checkbox, um die Möglichkeit von Zwischenzielen im Router zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'] = ['Start und Ziel tauschen', 'Aktivieren Sie diese Checkbox, um das Vertauschen von Start und Ziel im Router zu aktivieren.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routeStartButton'] = ['Button: "Suche starten"', 'Wählen Sie aus, ob ein Knopf eingestellt werden soll, mit dem die Suche manuell gestartet werden kann.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'] = ['Router nach Suche schließen', 'Wenn Sie diese Checkbox aktivieren, wird der Router nach Starten der Suche geschlossen.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'] = ['Routenhinweise einblenden', 'Wenn Sie diese Checkbox aktivieren, werden Routenhinweise angezeigt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['instructionLabel'] = ['Buttontext für Routenhinweise', 'Hier können sie den Buttontext für die Anzeige der Routenhinweise angeben.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showFeatures'] = ['Ergebnisliste einblenden', 'Wenn Sie diese Checkbox aktivieren, werden Ergebnisse im Router dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['featureLabel'] = ['Buttontext für Ergebnisliste', 'Hier können sie den Buttontext für die Anzeige der Ergebnisliste angeben.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'] = ['Initiale Sicht', 'Wählen Sie aus, welche Sicht im Router initial angezeigt werden soll.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'] = ['Minimaler Radius Gebietssuche (km)', 'Ab welcher Entfernung zum Standort soll gesucht werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'] = ['Maximaler Radius Gebietssuche (km)', 'Bis zu welcher Entfernung zum Standort soll gesucht werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourArea'] = ['Initialer Radius Gebietssuche (km)', 'Welche Entfernung soll standardmäßig verwendet werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'] = ['Minimaler Umweg an Route (km)', 'Ab welcher Entfernung zur Route soll gesucht werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'] = ['Maximaler Umweg an Route (km)', 'Bis zu welcher Entfernung zur Route soll gesucht werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourRoute'] = ['Initialer Umweg an Route (km)', 'Welche Entfernung soll standardmäßig verwendet werden?'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'] = ['Lokationsstil aktives Element', 'Geben Sie hier den Lokationsstil für das jeweils aktive Element ein.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'] = ['Lokationsstil Zentrum (Umkreissuche)', 'Geben Sie hier einen Lokationsstil an, in dem bei der Umkreissuche ein Marker auf das ausgewählte Zentrum gesetzt wird.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityFeatures'] = ['Priorisierte Features', 'Die hier angegebene Anzahl an Features mit dem niedrigsten Wert für das Kartenlabel werden in der Karte anders dargestellt.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityLocstyle'] = ['Lokationsstil priorisierte Features', 'Geben Sie hier einen Lokationsstil an, in dem die priorisierten Features dargestellt werden.'];
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['usePermalink'] = ['Router-Permalink generieren', 'Aktivieren Sie diese Checkbox, um die aktuelle Routen- bzw. Umkreissuche in der URL zu speichern.'];
/**
 * References
 */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['area'] = "Umkreissuche";
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes']['route'] = "Routensuche";

$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['0'] = 'OpenSourceRoutingMachine (API 4.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['1'] = 'OpenSourceRroutingMachine (API 5.x)';
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection']['2'] = 'OpenRouteService';

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

/** legend */
$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routing_legend'] = 'Routing und Umkreissuche';