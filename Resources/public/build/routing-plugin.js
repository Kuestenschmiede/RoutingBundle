/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/routing-plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************************/
/*! exports provided: langConstants */
/*! exports used: langConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return langConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * Language constants (en)
   */

  c4g.maps.constant.i18n = $.extend(c4g.maps.constant.i18n, {

    LANG: 'de',

    NAME: 'Name',
    HIDE: 'Zuklappen',
    CLOSE: 'Schließen',
    POINT: 'POI',
    FREEHAND: 'Freihand',
    LINE: 'Linie',
    POLYGON: 'Fläche',
    CIRCLE: 'Radius',
    PERIMETER: 'Umfang',
    LENGTH: 'Länge',
    SURFACEAREA: 'Flächeninhalt',
    RADIUS: 'Radius',
    REFRESH: 'Aktualisieren',
    COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',

    CTRL_ZOOM_IN: 'Vergrößern',
    CTRL_ZOOM_OUT: 'Verkleinern',
    CTRL_ZOOM_EXT: 'Maximal verkleinern',
    CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
    CTRL_ZOOM_POS: 'Zum aktuellen Standort',
    CTRL_ZOOM_SLIDER: 'Zoom Slider',
    CTRL_RESET_ROTATION: 'Rotation (touch, alt+mouse) zurücksetzen',
    CTRL_PORTSIDE: 'Portside ein-/ausblenden',
    CTRL_ROUTER: 'Router ein-/ausblenden',
    CTRL_EDITOR: 'Editor ein-/ausblenden',
    CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
    CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
    CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
    CTRL_ACCOUNT: 'Account ein-/ausblenden',
    CTRL_ZOOMLEVEL: 'Zoom',
    CTRL_MOUSECOORDS: 'Lon/Lat',
    CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
    CTRL_START_SEARCH: 'Suche starten',
    CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
    CTRL_GEOBOOKMARKS: 'Favoriten verwalten',
    CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
    CTRL_STARBOARD: 'Starboard ein-/ausblenden',
    CTRL_ATTRIBUTION: 'Attribution anzeigen',
    CTRL_GRID: 'Gitter ein-/ausblenden',
    CTRL_PERMALINK: 'Permalink generieren',
    CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
    CTRL_PRINT: 'Karte exportieren',

    EDITOR: 'Editor',
    EDITOR_ENABLE_INSTANT_MEASURE: 'Messen während des Zeichnens',
    EDITOR_ENABLE_FREEHAND_DRAW: 'Freihand zeichnen',
    EDITOR_FEATURE_APPLY: 'Editieren beenden',
    EDITOR_FEATURE_DELETE: 'Element löschen',
    EDITOR_FEATURE_MODIFY: 'Element editieren / verschieben',
    EDITOR_SELECT_INFO: 'Zur Auswahl ein Element auf der Karte anklicken.',
    EDITOR_SELECT_INFO_ADDITIONAL: '[Strg] + [Klick] für Mehrfachauswahl <br>[Shift] halten für Auswahlbox',
    EDITOR_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Kartenelemente',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihandwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Streckenwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Flächenwerkzeuge',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Kreiswerkzeuge',

    POPUP_ROUTE_FROM: 'Route von hier',
    POPUP_ROUTE_TO: 'Route hierhin',

    STARBOARD: 'Starboard',
    STARBOARD_BASELAYER: 'Basiskarten',
    STARBOARD_LAYER: 'Ebenen',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',

    SIDEBOARD: 'Sideboard',

    ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
    ROUTER_FROM_LABEL: 'Start',
    ROUTER_OVER_LABEL: 'Zwischenziel',
    ROUTER_TO_LABEL: 'Ziel',
    ROUTER_CLEAR_TITLE: 'Löschen',
    ROUTER_CLEAR_HTML: '',
    ROUTER_Label_Interim: 'Zwischenziel',

    ROUTER_SWITCH: 'Wechsel von Start und Ziel',
    ROUTER_OVER: 'Zwischenziel hinzufügen',
    ROUTER_PRINT: 'Routenbeschreibung drucken',

    ROUTER_VIEW_LABEL_ROUTE: 'Route:',
    ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
    ROUTER_VIEW_LABEL_TIME: 'Zeit:',
    ROUTER_VIEW_LABEL_PROFILE: 'Profil:',

    ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
    ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',

    ROUTER: 'Router',
    ROUTER_N: 'Norden',
    ROUTER_E: 'Ost',
    ROUTER_S: 'Süden',
    ROUTER_W: 'Westen',
    ROUTER_NE: 'Nordost',
    ROUTER_SE: 'Südost',
    ROUTER_SW: 'Südwest',
    ROUTER_NW: 'Nordwest',
    ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
    ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
    ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
    ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
    ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
    ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
    'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
    'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
    ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',

    'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
    'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
    'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
    'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
    'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
    'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
    'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
    'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',

    'ROUTER_5.X_MOD_0': 'Uturn',
    'ROUTER_5.X_MOD_1': 'Scharf rechts',
    'ROUTER_5.X_MOD_2': 'Rechts',
    'ROUTER_5.X_MOD_3': 'Leicht rechts',
    'ROUTER_5.X_MOD_4': 'Geradeaus',
    'ROUTER_5.X_MOD_5': 'Leicht links',
    'ROUTER_5.X_MOD_6': 'Links',
    'ROUTER_5.X_MOD_7': 'Scharf links',
    'ROUTER_5.X_MOD_8': 'in der Nähe',

    ROUTER_FROM: 'Start',
    ROUTER_TO: 'Ziel',
    ROUTER_FIND_ROUTE: 'Route finden',
    ROUTER_LOC_ROUTE_TO: 'Route hierhin',
    ROUTER_ROUTEDESC: 'Routenbeschreibung',
    ROUTER_ROUTENAME: 'Route',
    ROUTER_DISTANCE: 'Distanz',
    ROUTER_TIME: 'Zeit',
    ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
    ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
    ROUTER_SEARCHING: 'Suche Adresse...',
    ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
    ROUTER_CALC_ROUTE: 'Berechne Route...',
    ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',

    MEASURETOOLS: 'Messwerkzeuge',
    MEASURETOOLS_INFO: 'Wählen Sie weiter unten einen Messtyp aus und starten Sie die Messung durch das Klicken auf der Karte.',
    MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',

    GEOBOOKMARKS_PLACEHOLDER: 'Neue Bezeichnung',

    INFOPAGE: 'Informationen',
    ADDITIONALPANEL: 'Panel',
    ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
    ACCOUNT: 'Account',
    ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',

    SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',

    NONE: '' // last line
  }); // end of "language constants" ---
})(jQuery, this.c4g);

var langConstants = this.c4g.maps.constant.i18n;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-constant.js":
/*!**************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************************/
/*! exports provided: cssConstants */
/*! exports used: cssConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cssConstants; });
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.constant = this.c4g.maps.constant || {};

(function ($, c4g) {
  'use strict';

  /**
   * CSS constants
   */

  c4g.maps.constant.css = $.extend(c4g.maps.constant.css, {

    OPEN: 'c4g-open',
    CLOSE: 'c4g-close',
    CLOSEABLE: 'c4g-closeable',
    ENABLED: 'c4g-enabled',
    DISABLED: 'c4g-disabled',
    HIDE: 'c4g-hide',
    ICON: 'c4g-icon',
    CONTROL: 'c4g-control',
    COPY: 'c4g-copy',
    REFRESH: 'c4g-refresh',
    ACTIVE: 'c4g-active',
    INACTIVE: 'c4g-inactive',
    LOADING: 'c4g-loading',
    ANIMATION_SPIN: 'c4g-animation-spin',
    LARGE: 'c4g-large',
    SMALL: 'c4g-small',
    HORIZONTAL: 'c4g-horizontal',
    VERTICAL: 'c4g-vertical',

    ATTRIBUTION_LOGO: 'c4g-attribution-logo',
    CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
    CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
    CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
    CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
    CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
    EDITOR_DRAW_CONTENT_POINT: 'c4g-draw-content-point',
    EDITOR_DRAW_CONTENT_FREEHAND: 'c4g-draw-content-freehand',
    EDITOR_DRAW_CONTENT_LINESTRING: 'c4g-draw-content-line',
    EDITOR_DRAW_CONTENT_POLYGON: 'c4g-draw-content-polygon',
    EDITOR_DRAW_CONTENT_CIRCLE: 'c4g-draw-content-circle',
    EDITOR_DRAW_CONTENT_PROJECT: 'c4g-draw-content-project',
    EDITOR_DRAW_TRIGGER: 'c4g-draw-trigger',
    EDITOR_CONTENT_SELECT: 'c4g-content-select',
    EDITOR_DRAW_OPTIONS: 'c4g-editor-draw-options',
    EDITOR_FEATURE_APPLY: 'c4g-editor-feature-apply',
    EDITOR_FEATURE_DELETE: 'c4g-editor-feature-delete',
    EDITOR_FEATURE_MODIFY: 'c4g-editor-feature-modify',
    EDITOR_VIEW_TRIGGER_SELECT: 'c4g-editor-view-trigger-select',
    EDITOR_VIEW_TRIGGER_DRAW_POINT: 'c4g-editor-view-trigger-draw-point',
    EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-editor-view-trigger-draw-freehand',
    EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-editor-view-trigger-draw-line',
    EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-editor-view-trigger-draw-polygon',
    EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-editor-view-trigger-draw-circle',
    GEOSEARCH: 'c4g-geosearch',
    GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
    GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
    GEOSEARCH_START: 'c4g-geosearch-start',
    GRATICULE: 'c4g-graticule',
    MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
    MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
    PRINT: 'c4g-print',
    INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
    INFOPAGE: 'c4g-infopage',
    ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
    ADDITIONALPANEL: 'c4g-additionalpanel',
    ACCOUNT_VIEW_TRIGGER: 'c4g-account-view-trigger',
    ACCOUNT: 'c4g-account',
    OVERVIEWMAP: 'c4g-overviewmap',
    OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
    GEOBOOKMARKS: 'c4g-geobookmarks',
    PERMALINK: 'c4g-permalink',
    PERMALINK_POPUP: 'c4g-permalink-popup',
    POPUP_CLOSE: 'c4g-popup-close',
    POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
    POPUP_ROUTE_FROM: 'c4g-popup-route-from',
    POPUP_ROUTE_TO: 'c4g-popup-route-to',
    PORTSIDE: 'c4g-portside',
    PORTSIDE_CONTAINER: 'c4g-portside-container',
    PORTSIDE_CONTROL: 'c4g-portside-control',
    PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
    PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
    PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
    PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
    PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
    PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
    PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
    PORTSIDE_HEADLINE: 'c4g-portside-headline',
    PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
    PORTSIDE_BUTTON: 'c4g-portside-button',
    PORTSIDE_HIDE: 'c4g-portside-hide',
    PORTSIDE_CLOSE: 'c4g-portside-close',
    SPINNER: 'c4g-spinner',
    STARBOARD: 'c4g-starboard',
    STARBOARD_CONTAINER: 'c4g-starboard-container',
    STARBOARD_CONTROL: 'c4g-starboard-control',
    STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
    STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
    STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
    STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
    STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
    STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
    STARBOARD_HEADLINE: 'c4g-starboard-headline',
    STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
    STARBOARD_BUTTON: 'c4g-starboard-button',
    STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
    STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
    STARBOARD_CLOSE: 'c4g-starboard-close',
    STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
    STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
    STARBOARD_LAYERTREE: 'c4g-layertree',
    STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
    TOOLTIP_POPUP: 'c4g-tooltip-popup',
    ZOOM_LEVEL: 'c4g-zoom-level',

    ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
    ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
    ROUTER_INPUT_FROM: 'c4g-router-input-from',
    ROUTER_INPUT_TO: 'c4g-router-input-to',
    ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
    ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
    ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
    ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
    ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',

    ROUTER_SWITCH: 'c4g-router-switch',
    ROUTER_OVER: 'c4g-router-over',
    ROUTER_PRINT: 'c4g-router-print',

    ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
    ROUTER_PROFILE_HGV: 'c4g-router-profile-hgv',
    ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
    ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
    ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',

    ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
    ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
    ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
    ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
    ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',

    OL_CONTROL: 'ol-control',
    OL_UNSELECTABLE: 'ol-unselectable',

    OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
    OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
    OL_VIEWPORT: 'ol-viewport',
    OL_ZOOM: 'ol-zoom',
    OL_ZOOM_IN: 'ol-zoom-in',
    OL_ZOOM_EXT: 'ol-zoom-extent',
    OL_ZOOM_HOME: 'ol-zoom-home',
    OL_ZOOM_POS: 'ol-zoom-position',
    OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
    OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
    OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
    OL_ZOOM_SLIDER: 'ol-zoom-slider',
    OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',

    NONE: '' // last line
  }); // end of "css constants" ---
})(jQuery, this.c4g);

var cssConstants = this.c4g.maps.constant.css;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-portside-router.js":
/*!*****************************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-portside-router.js ***!
  \*****************************************************************************/
/*! exports provided: Router */
/*! exports used: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__ = __webpack_require__(/*! ./c4g-maps-control-sideboard */ "../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};





(function ($, c4g) {
    'use strict';

    /**
     * Constructor
     *
     * @extends {c4g.maps.control.Sideboard}
     *
     * @param  {[type]}  mapController  [description]
     * @param  {[type]}  config         [description]
     */

    c4g.maps.control.Router = function (opt_options) {

        // extend options
        this.options = $.extend({
            name: 'router',
            create: true,
            mapController: undefined,
            headline: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER,
            direction: 'left'
        }, opt_options);

        if (!this.options.mapController) {
            return false;
        }
        this.index = 0;

        // call parent constructor
        __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["a" /* Sideboard */].call(this, this.options);
    };

    /**
     * Inherit from "Sideboard"
     */
    ol.inherits(c4g.maps.control.Router, __WEBPACK_IMPORTED_MODULE_0__c4g_maps_control_sideboard__["a" /* Sideboard */]);

    /**
     * Methods
     */
    c4g.maps.control.Router.prototype = $.extend(c4g.maps.control.Router.prototype, {

        init: function init() {

            var self, viewRouter, selectInteraction, profileId;

            self = this;
            this.spinner.show();

            // check and load location styles via map-proxy
            this.options.mapController.proxy.locationStyleController.loadLocationStyles([this.options.mapController.data.router_from_locstyle, this.options.mapController.data.router_to_locstyle, this.options.mapController.data.router_point_locstyle]);

            // Add router layer(s)
            this.routingAltWaySource = new ol.source.Vector();
            this.routingWaySource = new ol.source.Vector();
            this.routerWayLayer = new ol.layer.Vector({
                source: this.routingWaySource,
                zIndex: 1,
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.6)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 51, 119, 0.9)',
                        width: 4
                    })
                })]
            });
            this.routerAltWayLayer = new ol.layer.Vector({
                source: this.routingAltWaySource,
                zIndex: 0,
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.6)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(0, 51, 119, 0.4)',
                        width: 4
                    })
                })]
            });

            selectInteraction = new ol.interaction.Select({
                style: [new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 255, 255, 0.0)',
                        width: 8
                    })
                }), new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: 'rgba(255, 51, 119, 0.0)',
                        width: 4
                    })
                })]

            });
            selectInteraction.on('select', function (event) {

                if (event.selected[0]) {
                    var geometry = event.selected[0].getGeometry();
                    if (geometry && geometry instanceof ol.geom.LineString) {
                        self.showAltRoute(self.response, event.selected[0].getId());
                    }
                }
            });

            self.options.mapController.map.addInteraction(selectInteraction);

            this.routingHintSource = new ol.source.Vector();
            this.routerHintLayer = new ol.layer.Vector({
                source: this.routingHintSource,
                style: function style(feature, resolution) {
                    // console.log(self.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style);
                    return !self.options.mapController.proxy || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
                }
            });

            this.locationsSource = new ol.source.Vector();
            this.locationsLayer = new ol.layer.Vector({
                source: this.locationsSource,
                zIndex: 2
            });

            this.routerLayerGroup = new ol.layer.Group({
                layers: new ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer]),
                visible: true
            });
            this.options.mapController.map.addLayer(this.routerLayerGroup);

            viewRouter = this.addUserInterface();
            viewRouter.activate();

            // store some vars for ajax-requests
            profileId = this.options.mapController.data.profile;
            this.geoSearchApi = this.options.mapController.data.api.geosearch + '/' + profileId;
            this.geoReverseSearchApi = this.options.mapController.data.api.geosearch_reverse + '/' + profileId;
            this.routingApi = this.options.mapController.data.api.routing + '/' + profileId;

            this.spinner.hide();

            return true;
        },

        preOpenFunction: function preOpenFunction(opt_options) {

            this.addMapInputInteraction();

            if (opt_options && opt_options.toLonLat) {
                this.performReverseSearch(this.$toInput, opt_options.toLonLat);
                this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
            }
        },

        preHideFunction: function preHideFunction() {
            this.removeMapInputInteraction();
        },

        preCloseFunction: function preCloseFunction() {

            this.routingWaySource.clear();
            this.routingAltWaySource.clear();
            this.routingHintSource.clear();
            this.locationsSource.clear();

            $(this.routerInstructionsWrapper).empty();
            this.clearInput(this.$fromInput);
            if (this.overValue) {
                for (var id in this.overValue) {
                    this.clearOver(this.$overInput, id);
                    var elem = document.getElementById(id);
                    if (elem) {
                        elem.parentNode.parentNode.removeChild(elem.parentNode);
                    }
                }
            }
            this.clearInput(this.$toInput);

            this.removeMapInputInteraction();
        },

        removeMapInputInteraction: function removeMapInputInteraction() {

            var self = this;
            this.options.mapController.map.un('click', self.fnMapRouterInteraction);
        },

        addMapInputInteraction: function addMapInputInteraction() {

            var self = this,
                coordinate;

            self.fnMapRouterInteraction = function (evt) {

                coordinate = ol.proj.toLonLat(evt.coordinate);

                if (self.$fromInput.val() === "") {
                    //self.$fromInput.val(ol.proj.toLonLat(evt.coordinate));
                    self.performReverseSearch(self.$fromInput, coordinate);
                    self.fromValue = new ol.geom.Point(coordinate);

                    //self.$fromInput.trigger('change');
                } else if (self.$toInput.val() === "") {
                    //self.$toInput.val(ol.proj.toLonLat(evt.coordinate));
                    self.performReverseSearch(self.$toInput, coordinate);
                    self.toValue = new ol.geom.Point(coordinate);
                } else if (self.$overInput) {
                    if (self.$overInput.val() === "") {
                        self.performReverseSearch(self.$overInput, coordinate);
                        if (!self.overValue) {
                            self.overValue = {};
                        }
                        self.overValue[self.index] = new ol.geom.Point(coordinate);
                        self.$buttonOver.prop("disabled", false);
                    }
                }
            };

            this.options.mapController.map.on('click', self.fnMapRouterInteraction);
            if (self.options.mapController.map.getInteractions().getArray()['9']) {
                self.options.mapController.map.getInteractions().getArray()['9'].setActive(true);
            } else {
                self.options.mapController.map.getInteractions().getArray()['8'].setActive(true);
            }
        },

        addUserInterface: function addUserInterface() {
            var _this = this;

            var self = void 0,
                routerView = void 0,
                routerViewInputWrapper = void 0,
                routerViewContentWrapper = void 0,
                routerViewContentHeadline = void 0,
                print = void 0,
                routeProfile = [],
                routerFromLabel = void 0,
                routerOverLabel = void 0,
                routerToLabel = void 0,
                routerFromClear = void 0,
                routerOverClear = void 0,
                routerToClear = void 0,
                switchFromTo = void 0,
                buttonOver = void 0;

            self = this;

            routerViewInputWrapper = document.createElement('div');
            routerViewContentWrapper = document.createElement('div');

            self.routerViewContentWrapper = routerViewContentWrapper;

            // @TODO: Add router-info-text
            // routerViewContentHeadline = document.createElement('h4');
            // routerViewContentHeadline.innerHTML = langConstants.ROUTER_VIEW_ADDRESS_INPUT;
            // routerViewContentWrapper.appendChild(routerViewContentHeadline);

            this.fromInputWrapper = document.createElement('div');
            this.fromInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

            this.fromInput = document.createElement("input");
            this.fromInput.type = "text";
            this.fromInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_FROM;
            this.fromInput.id = this.fromInput.name = "routingFrom";

            routerFromLabel = document.createElement('label');
            routerFromLabel.setAttribute('for', 'routingFrom');
            routerFromLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_FROM_LABEL;

            routerFromClear = document.createElement('button');
            routerFromClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
            routerFromClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
            routerFromClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
            this.$routerFromClear = $(routerFromClear);

            switchFromTo = document.createElement('button');
            switchFromTo.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_SWITCH;
            switchFromTo.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_SWITCH;
            this.$switchFromTo = $(switchFromTo);

            buttonOver = document.createElement('button');
            buttonOver.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_OVER;
            buttonOver.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_OVER;
            this.$buttonOver = $(buttonOver);

            print = document.createElement('button');
            print.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PRINT;
            print.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_PRINT;
            this.$print = $(print);

            this.routerButtonBar = document.createElement('div');
            this.routerButtonBar.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_BUTTONBAR;
            this.routerButtonBar.appendChild(switchFromTo);
            this.routerButtonBar.appendChild(buttonOver);
            this.routerButtonBar.appendChild(print);

            // $(print).insertBefore(document.getElementsByClassName("c4g-portside-hide")[0]);

            if (this.options.mapController.data.router_api_selection == '2') {
                //OpenRouteService
                if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {
                    //check for single profile and set this as  active routing profile
                    this.routeProfile = [];
                    this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
                } else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) {
                    //check for multiple profiles and add profile-changer
                    this.routeProfile = document.createElement('div');
                    $(this.routeProfile).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WRAPPER);
                    if (this.options.mapController.data.router_profiles['0']) {
                        //add button for profile driving-car
                        routeProfile.car = document.createElement('button');
                        $(routeProfile.car).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_CAR);
                        this.$routeProfileCar = $(routeProfile.car);
                        this.routeProfile.appendChild(routeProfile.car);
                        this.$routeProfileCar.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '0';
                            self.recalculateRoute();
                        });
                    }

                    if (this.options.mapController.data.router_profiles['1']) {
                        //add button for profile driving-hgv
                        routeProfile.hgv = document.createElement('button');
                        $(routeProfile.hgv).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_HGV);
                        this.routeProfile.appendChild(routeProfile.hgv);
                        this.$routeProfileHgv = $(routeProfile.hgv);

                        this.$routeProfileHgv.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '1';
                            self.recalculateRoute();
                        });
                    }
                    if (this.options.mapController.data.router_profiles['2'] || this.options.mapController.data.router_profiles['3'] || this.options.mapController.data.router_profiles['4'] || this.options.mapController.data.router_profiles['5'] || this.options.mapController.data.router_profiles['6'] || this.options.mapController.data.router_profiles['7']) {
                        //add button and dropdown for cycling profiles
                        var spanBike = document.createElement('span');
                        routeProfile.bike = document.createElement('button');
                        routeProfile.bike.list = document.createElement('ul');
                        this.$routeProfileBike = $(routeProfile.bike);
                        for (var i = 2; i < 8; i++) {
                            //iterate over all possible cycling profiles
                            if (this.options.mapController.data.router_profiles[i]) {
                                (function () {
                                    var child = document.createElement('li');
                                    child.innerHTML = _this.options.mapController.data.router_profiles[i];
                                    $(child).data('profile', [i]);
                                    $(child).click(function (event) {
                                        self.childClick($(child));
                                    });
                                    if (!_this.$routeProfileBike.data('profile')) {
                                        //add existing default profile to button
                                        _this.$routeProfileBike.data('profile', i);
                                        $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                                    }
                                    routeProfile.bike.list.appendChild(child);
                                })();
                            }
                        }

                        $(routeProfile.bike).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_BIKE);

                        if (routeProfile.bike.list.children.length == 1) {
                            //ignore dropdown list, if only one cycling profile is enabled
                            this.routeProfile.appendChild(routeProfile.bike);
                            this.$routeProfileBike.click(function (event) {
                                self.clearSiblings(this);
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        } else {
                            //append with dropdown, if multiple cycling profiles are enabled
                            spanBike.appendChild(routeProfile.bike);
                            spanBike.appendChild(routeProfile.bike.list);
                            this.routeProfile.appendChild(spanBike);
                            this.$routeProfileBike.click(function (event) {
                                self.clearSiblings($(this).parent());
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        }
                    }
                    if (this.options.mapController.data.router_profiles['8'] || this.options.mapController.data.router_profiles['9']) {
                        //add button and dropdown for walking profiles
                        var spanFoot = document.createElement('span');
                        routeProfile.foot = document.createElement('button');
                        routeProfile.foot.list = document.createElement('ul');
                        this.$routeProfileFoot = $(routeProfile.foot);
                        for (var _i = 8; _i < 10; _i++) {
                            //iterate over possible profiles
                            if (this.options.mapController.data.router_profiles[_i]) {
                                var child = document.createElement('li');
                                child.innerHTML = this.options.mapController.data.router_profiles[_i];
                                $(child).data('profile', [_i]);
                                $(child).click(function (event) {
                                    self.childClick($(this));
                                });
                                if (!this.$routeProfileFoot.data('profile')) {
                                    //add existing default profile to button
                                    this.$routeProfileFoot.data('profile', _i);
                                    $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                                }
                                routeProfile.foot.list.appendChild(child);
                            }
                        }

                        $(routeProfile.foot).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_FOOT);

                        if (routeProfile.foot.list.children.length == 1) {
                            //ignore dropdown list, if only one walking profile is enabled
                            this.routeProfile.appendChild(routeProfile.foot);
                            this.$routeProfileFoot.click(function (event) {
                                self.clearSiblings(this);
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        } else {
                            //append with dropdown, if multiple walking profiles are enabled
                            spanFoot.appendChild(routeProfile.foot);
                            spanFoot.appendChild(routeProfile.foot.list);
                            this.routeProfile.appendChild(spanFoot);
                            this.$routeProfileFoot.click(function (event) {
                                self.clearSiblings($(this).parent());
                                self.routeProfile.active = $(this).data('profile');
                                self.recalculateRoute();
                            });
                        }
                    }
                    if (this.options.mapController.data.router_profiles['10']) {
                        //add button for profile wheelchair
                        routeProfile.wheelchair = document.createElement('button');
                        $(routeProfile.wheelchair).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WHEELCHAIR);
                        this.$routeProfileWheelchair = $(routeProfile.wheelchair);
                        this.routeProfile.appendChild(routeProfile.wheelchair);
                        this.$routeProfileWheelchair.click(function (event) {
                            self.clearSiblings(this);
                            self.routeProfile.active = '10';
                            self.recalculateRoute();
                        });
                    }
                    this.childClick = function ($element) {
                        //handle the click inside the profile dropdown
                        self.routeProfile.active = $element.data('profile'); //activate selected profile
                        self.clearSiblings($element);
                        self.recalculateRoute(); //update the route
                    };
                    this.clearSiblings = function (element) {
                        //function to adjust css-classes after changing profile
                        var siblings = $(element).parent().children();
                        for (var _i2 = 0; _i2 < siblings.length; _i2++) {
                            $(siblings[_i2]).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                        }
                        $(element).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                    };
                    for (var profile in this.options.mapController.data.router_profiles) {
                        //set default value for initial routing
                        if (this.options.mapController.data.router_profiles.hasOwnProperty(profile)) {
                            this.routeProfile.active = profile;
                            break;
                        }
                    }
                } else {
                    console.warn('No Router Profiles enabled');
                }
            }

            this.fromInputWrapper.appendChild(routerFromLabel);
            this.fromInputWrapper.appendChild(this.fromInput);
            this.fromInputWrapper.appendChild(routerFromClear);
            if (buttonOver && this.options.mapController.data.router_api_selection == '0') {
                this.$buttonOver.hide();
            }

            this.$routerFromClear.hide();

            this.$routerFromClear.click(function (event) {
                event.preventDefault();
                self.clearInput(self.$fromInput);
            });

            this.$buttonOver.click(function (event) {
                event.preventDefault();
                self.index++;
                self.$buttonOver.prop("disabled", true);

                self.overInputWrapper = document.createElement('div');
                self.overInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

                self.overInput = document.createElement("input");
                self.overInput.type = "text";
                self.overInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_FROM;
                self.overInput.id = self.overInput.name = "routingOver";

                routerOverLabel = document.createElement('label');
                routerOverLabel.setAttribute('for', 'routingFrom');
                routerOverLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_Label_Interim;

                routerOverClear = document.createElement('button');
                routerOverClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
                routerOverClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
                routerOverClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
                routerOverClear.id = self.index;
                self.$routerOverClear = $(routerOverClear);

                self.overInputWrapper.appendChild(routerOverLabel);
                self.overInputWrapper.appendChild(self.overInput);
                self.overInputWrapper.appendChild(routerOverClear);

                routerViewInputWrapper.appendChild(self.overInputWrapper);
                self.$routerOverClear.click(function (event) {
                    event.preventDefault();
                    self.clearOver(self.$overInput, this.id);
                    $(this).parent().remove();
                    //buttonOver.show();
                });
                self.$overInput = $(self.overInput);
                self.$overInput.on('change', function () {
                    self.performSearch(self.$overInput, "overValue");
                });
            });

            this.$switchFromTo.click(function (event) {
                event.preventDefault();
                var switchVarName = document.getElementById("routingFrom").value;
                document.getElementById("routingFrom").value = document.getElementById("routingTo").value;
                document.getElementById("routingTo").value = switchVarName;
                var switchVarVal = self.fromValue;
                self.fromValue = self.toValue;
                self.toValue = switchVarVal;
                self.recalculateRoute();
            });
            this.$print.click(function (event) {
                event.preventDefault();
                var routingContent = document.getElementsByClassName("c4g-router-instructions-wrapper")[0];
                if (!routingContent) return;
                var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
                WinPrint.document.write(routingContent.innerHTML);
                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            });

            this.$fromInput = $(this.fromInput);
            this.$fromInput.on('change', function () {
                self.performSearch(self.$fromInput, "fromValue");
                if (self.$fromInput.val() !== "") {
                    self.$routerFromClear.show();
                } else {
                    self.$routerFromClear.hide();
                }
            });

            routerViewInputWrapper.appendChild(this.routerButtonBar);
            if (this.routeProfile && this.routeProfile.children) {
                routerViewInputWrapper.appendChild(this.routeProfile);
            }
            routerViewInputWrapper.appendChild(this.fromInputWrapper);

            this.toInputWrapper = document.createElement('div');
            this.toInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

            this.toInput = document.createElement("input");
            this.toInput.type = "text";
            this.toInput.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_TO;
            this.toInput.id = this.toInput.name = "routingTo";

            routerToLabel = document.createElement('label');
            routerToLabel.setAttribute('for', 'routingTo');
            routerToLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_TO_LABEL;

            routerToClear = document.createElement('button');
            routerToClear.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
            routerToClear.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
            routerToClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
            this.$routerToClear = $(routerToClear);

            this.toInputWrapper.appendChild(routerToLabel);
            this.toInputWrapper.appendChild(this.toInput);
            this.toInputWrapper.appendChild(routerToClear);

            this.$routerToClear.hide();

            self.$routerToClear.click(function (event) {
                event.preventDefault();
                self.clearInput(self.$toInput);
            });

            this.$toInput = $(this.toInput);
            this.$toInput.on('change', function () {
                self.performSearch(self.$toInput, "toValue");
                if (self.$toInput.val() !== "") {
                    self.$routerToClear.show();
                } else {
                    self.$routerToClear.hide();
                }
            });

            routerViewInputWrapper.appendChild(this.toInputWrapper);

            self.statusBar.appendChild(this.getAttribution());

            routerView = this.addView({
                name: 'router-view',
                triggerConfig: {
                    tipLabel: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_ADDRESS_INPUT,
                    className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_VIEW_ADDRESS_INPUT,
                    withHeadline: false
                },
                sectionElements: [{ section: this.topToolbar, element: routerViewInputWrapper }, { section: this.contentContainer, element: routerViewContentWrapper }]
            });

            return routerView;
        },

        setInput: function setInput(from, coordinate) {
            // perform geoSearch on given location
            // fill from/to field
            //

            if (!coordinate) {
                return false;
            }

            coordinate = ol.proj.toLonLat(coordinate);

            if (from) {
                this.performReverseSearch(this.$fromInput, coordinate);
                this.fromValue = new ol.geom.Point(coordinate);

                //this.$fromInput.trigger('change');
            } else {
                this.performReverseSearch(this.$toInput, coordinate);
                this.toValue = new ol.geom.Point(coordinate);
            }

            this.recalculateRoute();
        },

        getAttribution: function getAttribution() {
            var self = this,
                attributionSearch = void 0,
                attributionRouter = void 0,
                attributionRouterHost = void 0,
                attributionWrapper = void 0,
                attributionHtml = void 0;
            switch (self.options.mapController.data.router_api_selection) {
                case "0":
                    attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
                    break;
                case "1":
                    attributionRouter = '<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';
                    break;
                case "2":
                    attributionRouter = '<a target="_blank" href="https://openrouteservice.org/">openrouteservice</a>';
                    break;
            }
            switch (self.options.mapController.data.geosearch.geosearch_engine) {
                case "1":
                    //OSM
                    attributionSearch = '- Geocoder by <a target="_blank" href="https://nominatim.openstreetmap.org/">OpenStreetMap</a> ';
                    break;
                case "2":
                    //Mapquest
                    attributionSearch = '- Geocoder by <a target="_blank" href="http://www.mapquest.com/">MapQuest</a> ';
                    break;
                case "3":
                    //custom
                    attributionSearch = '- Nominatim-Geocoder ';
                    break;
                case "4":
                    //con4gis
                    attributionSearch = '- Geocoder by <a target="_blank" href="https://www.con4gis.org/kartendienste.html">con4gis</a> ';
                    break;
            }
            switch (self.options.mapController.data.router_api_selection) {
                case "0":
                    attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                    break;
                case "1":
                    attributionRouterHost = '- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';
                    break;
                case "2":
                    attributionRouterHost = '\'- ORS hosting by <a target="_blank" href="https://www.geog.uni-heidelberg.de/gis/heigit_en.html">HeiGIT</a>\'';
                    break;
            }

            //ToDo check params
            attributionHtml = attributionRouter + attributionSearch + attributionRouterHost;
            attributionWrapper = document.createElement('div');
            attributionWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_ATTRIBUTION_WRAPPER;

            attributionWrapper.innerHTML = attributionHtml;

            if (self.options.mapController.data.router_attribution) {
                attributionWrapper.innerHTML = self.options.mapController.data.router_attribution;
            }

            return attributionWrapper;
        },

        recalculateRoute: function recalculateRoute() {
            var tmpFeature,
                proxy = this.options.mapController.proxy;

            this.locationsSource.clear();
            if (this.fromValue) {
                tmpFeature = new ol.Feature({
                    geometry: this.fromValue.clone().transform('EPSG:4326', 'EPSG:3857')
                });
                if (this.options.mapController.data.router_from_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle]) {
                    tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle].style);
                }
                this.locationsSource.addFeature(tmpFeature);
            }
            if (this.toValue) {
                tmpFeature = new ol.Feature({
                    geometry: this.toValue.clone().transform('EPSG:4326', 'EPSG:3857')
                });
                if (this.options.mapController.data.router_to_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle]) {
                    tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle].style);
                }
                this.locationsSource.addFeature(tmpFeature);
            }
            if (this.overValue) {
                for (var propt in this.overValue) {
                    tmpFeature = new ol.Feature({
                        geometry: this.overValue[propt].clone().transform('EPSG:4326', 'EPSG:3857')
                    });
                    if (this.options.mapController.data.router_interim_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle]) {
                        tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle].style);
                    }
                    this.locationsSource.addFeature(tmpFeature);
                }
            }
            if (this.fromValue && this.toValue) {
                if (this.overValue) {
                    this.performViaRoute(this.fromValue, this.toValue, this.overValue);
                } else {
                    this.performViaRoute(this.fromValue, this.toValue);
                }
            }
        },

        performViaRoute: function performViaRoute(fromPoint, toPoint, overPoint) {

            var url, self, fromCoord, toCoord, overCoord;

            self = this;

            fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
            toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
            if (overPoint) {
                overCoord = new Array();
                for (var propt in overPoint) {
                    overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
                }
            }
            if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {
                //OSRM-API:5.x or ORS- API
                url = self.routingApi + '/' + fromCoord;

                if (overPoint) {
                    for (var i = 0; i < overCoord.length; i++) {
                        url += '/' + overCoord[i];
                    }
                }
                url += '/' + toCoord;
                if (this.routeProfile && this.routeProfile.active) {
                    url += '?profile=' + this.routeProfile.active;
                }
                this.spinner.show();

                jQuery.ajax({
                    'url': url }).done(function (response) {
                    self.response = response;
                    if (response) {
                        self.showRoute(response);
                    }
                }).always(function () {
                    self.spinner.hide();
                    self.update();
                });

                return '';
            } else {
                //OSRM-API:<5
                url = self.routingApi + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
                this.spinner.show();

                jQuery.ajax({
                    'url': url }).done(function (response) {

                    if (response) {
                        self.showRoute(response);
                    }
                }).always(function () {
                    self.spinner.hide();
                    self.update();
                });

                return '';
            }
        },

        showRoute: function showRoute(routeResponse) {

            this.showRouteLayer(routeResponse, 0);
            this.showRouteInstructions(routeResponse, 0);
        },
        showAltRoute: function showAltRoute(routeResponse, routeNumber) {
            this.showRouteLayer(routeResponse, routeNumber);
            this.showRouteInstructions(routeResponse, routeNumber);
        },

        showRouteLayer: function showRouteLayer(routeResponse, routeNumber) {

            var mapView,
                wayPolyline,
                routeFeatures,
                altRouteFeatures,
                rightPadding,
                leftPadding,
                routeNumber = routeNumber || 0;

            if (routeResponse) {
                this.routingWaySource.clear();
                this.routingAltWaySource.clear();
                mapView = this.options.mapController.map.getView();

                if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {
                    //OSRM-API:5.x
                    wayPolyline = new ol.format.Polyline();

                    // add route

                    if (routeResponse.routes && routeResponse.routes[1]) {
                        //check for alternative route
                        if (routeNumber == 1) {
                            altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: mapView.getProjection()
                            });
                            altRouteFeatures[0].setId(0);
                        } else {
                            altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: mapView.getProjection()
                            });
                            altRouteFeatures[0].setId(1);
                        }
                    }
                    routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: mapView.getProjection()
                    });
                    routeFeatures[0].setId(routeNumber);
                } else {
                    //OSRM-API:<5
                    wayPolyline = new ol.format.Polyline({
                        'factor': this.options.mapController.data.router_viaroute_precision || 1e6
                    });

                    // add route
                    routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
                        dataProjection: 'EPSG:4326',
                        featureProjection: mapView.getProjection()
                    });
                }
                if (this.options.mapController.data.router_alternative == '1') {
                    if (routeResponse.routes && routeResponse.routes.length > 1 && routeResponse.routes[1]) {
                        this.routingAltWaySource.addFeatures(altRouteFeatures);
                    }
                }
                this.routingWaySource.addFeatures(routeFeatures);
                // render view
                // so the route gets drawn before the animation starts
                this.options.mapController.map.renderSync();

                // animation
                mapView.animate({
                    start: +new Date(),
                    duration: 2000,
                    resolution: mapView.getResolution(),
                    center: [0, 0]
                    //rotation: Math.PI
                });
                // this.options.mapController.map.beforeRender(
                //     ol.animation.pan({
                //       start: +new Date(),
                //       duration: 2000,
                //       source: mapView.getCenter()
                //     }),
                //     ol.animation.zoom({
                //       start: +new Date(),
                //       duration: 2000,
                //       resolution: mapView.getResolution()
                //     })
                // );

                // calculate padding
                leftPadding = 0;
                if (this.options.mapController.activePortside && this.options.mapController.activePortside.container) {
                    leftPadding = $(this.options.mapController.activePortside.container).outerWidth();
                }

                rightPadding = 0;
                if (this.options.mapController.activeStarboard && this.options.mapController.activeStarboard.container) {
                    rightPadding = $(this.options.mapController.activeStarboard.container).outerWidth();
                }

                // center on route
                mapView.fit(routeFeatures[0].getGeometry(), this.options.mapController.map.getSize(), {
                    padding: [0, rightPadding, 0, leftPadding]
                });
            }
        },

        getInstructionIcon: function getInstructionIcon(strMod, strType) {
            var image = "";

            switch (strMod) {
                case "right":
                    image = "turn-right.png";
                    break;
                case "left":
                    image = "turn-left.png";
                    break;
                case "sharp left":
                    image = "sharp-left.png";
                    break;
                case "sharp right":
                    image = "sharp-right.png";
                    break;
                case "slight left":
                    image = "slight-left.png";
                    break;
                case "slight right":
                    image = "slight-right.png";
                    break;
                case "uturn":
                    image = "u-turn.png";
                    break;
                case "straight":
                    image = "continue.png";
                    break;
                default:
                    image = "default.png";
                    break;
            }
            switch (strType) {
                case "depart":
                    image = "head.png";
                    break;
                case "arrive":
                    image = "target.png";
                    break;
                case "roundabout":
                    image = "round-about.png";
                    break;
                default:
                    break;
            }

            return "bundles/con4gismaps/vendor/osrm/images/" + image;
        },
        getInstructionIconORS: function getInstructionIconORS(intType) {
            var image = void 0;
            switch (intType) {
                case 0:
                    image = "turn-left.png";
                    break;
                case 1:
                    image = "turn-right.png";
                    break;
                case 2:
                    image = "sharp-left.png";
                    break;
                case 3:
                    image = "sharp-right.png";
                    break;
                case 4:
                    image = "slight-left.png";
                    break;
                case 5:
                    image = "slight-right.png";
                    break;
                case 6:
                    image = "continue.png";
                    break;
                case 7:
                    image = "round-about.png";
                    break;
                case 8:
                    image = "round-about.png";
                    break;
                case 9:
                    image = "u-turn.png";
                    break;
                case 10:
                    image = "target.png";
                    break;
                case 11:
                    image = "head.png";
                    break;
                case 12:
                    image = "slight-left.png";
                    break;
                case 13:
                    image = "slight-right.png";
                    break;

            }
            return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
        },

        getTypeText: function getTypeText(strType) {
            var textID;

            switch (strType) {
                case "turn":
                    textID = "ROUTER_5.X_TYPE_0";
                    break;
                case "new name":
                    textID = "ROUTER_5.X_TYPE_1";
                    break;
                case "depart":
                    textID = "ROUTER_5.X_TYPE_2";
                    break;
                case "arrive":
                    textID = "ROUTER_5.X_TYPE_3";
                    break;
                case "merge":
                    textID = "ROUTER_5.X_TYPE_4";
                    break;
                case "on ramp":
                    textID = "ROUTER_5.X_TYPE_5";
                    break;
                case "off ramp":
                    textID = "ROUTER_5.X_TYPE_6";
                    break;
                case "fork":
                    textID = "ROUTER_5.X_TYPE_7";
                    break;
                case "end of road":
                    textID = "ROUTER_5.X_TYPE_8";
                    break;
                case "use lane":
                    textID = "ROUTER_5.X_TYPE_9";
                    break;
                case "continue":
                    textID = "ROUTER_5.X_TYPE_10";
                    break;
                case "roundabout":
                case "exit roundabout":
                    textID = "ROUTER_5.X_TYPE_11";
                    break;
                case "rotary":
                case "exit rotary":
                    textID = "ROUTER_5.X_TYPE_12";
                    break;
                case "roundabout turn":
                    textID = "ROUTER_5.X_TYPE_13";
                    break;
                case "notification":
                    textID = "ROUTER_5.X_TYPE_14";
                    break;
                default:
                    break;
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */][textID];
        },

        getModifierText: function getModifierText(strModifier) {
            var textID;

            switch (strModifier) {
                case "uturn":
                    textID = "ROUTER_5.X_MOD_0";
                    break;
                case "sharp right":
                    textID = "ROUTER_5.X_MOD_1";
                    break;
                case "right":
                    textID = "ROUTER_5.X_MOD_2";
                    break;
                case "slight right":
                    textID = "ROUTER_5.X_MOD_3";
                    break;
                case "straight":
                    textID = "ROUTER_5.X_MOD_4";
                    break;
                case "slight left":
                    textID = "ROUTER_5.X_MOD_5";
                    break;
                case "left":
                    textID = "ROUTER_5.X_MOD_6";
                    break;
                case "sharp left":
                    textID = "ROUTER_5.X_MOD_7";
                    break;
                default:
                    textID = "ROUTER_5.X_MOD_8";
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */][textID];
        },
        getDrivingInstructionIcon: function getDrivingInstructionIcon(instructionId) {
            var id, image;

            id = instructionId.replace(/^11-\d{1,}$/, "11"); // dumb check, if there is a roundabout (all have the same icon)

            image = 'default.png';

            switch (id) {
                case '1':
                    image = 'continue.png';
                    break;
                case '2':
                    image = 'slight-right.png';
                    break;
                case '3':
                    image = 'turn-right.png';
                    break;
                case '4':
                    image = 'sharp-right.png';
                    break;
                case '5':
                    image = 'u-turn.png';
                    break;
                case '6':
                    image = 'sharp-left.png';
                    break;
                case '7':
                    image = 'turn-left.png';
                    break;
                case '8':
                    image = 'slight-left.png';
                    break;
                case '10':
                    image = 'head.png';
                    break;
                case '11':
                    image = 'round-about.png';
                    break;
                case '15':
                    image = 'target.png';
                    break;
            }
            return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
        },
        getText: function getText(id) {

            var text_id = "ROUTER_" + id;

            if (__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */][text_id] === undefined) {
                console.warn(text_id + " can't find in language files.");
            }
            return __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */][text_id];
        },

        getDrivingInstruction: function getDrivingInstruction(instructionId) {

            var id, description;

            id = "DIRECTION_" + instructionId.replace(/^11-\d{2,}$/, "11-x"); // dumb check, if there are 10+ exits on a roundabout (say the same for exit 10+)

            description = this.getText(id);
            if (!description) {
                description = this.getText('DIRECTION_0');
            }

            return description;
        },
        showRouteInstructions: function showRouteInstructions(routeResponse, routeNumber) {

            var self,
                routerInstruction,
                routerInstructionsHeader,
                routerInstructionsHtml,
                instr,
                strType,
                strMod,
                rowstyle,
                routeNumber = routeNumber || 0,
                i,
                j,
                route_name_0 = "",
                route_name_1 = "",
                total_distance = "",
                total_time = "";

            self = this;

            if (self.routerInstructionsWrapper === undefined) {
                self.routerInstructionsWrapper = document.createElement('div');
                self.routerInstructionsWrapper.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_WRAPPER;
                self.routerViewContentWrapper.appendChild(self.routerInstructionsWrapper);
            } else {
                $(self.routerInstructionsWrapper).empty();
            }

            routerInstructionsHeader = document.createElement('div');
            routerInstructionsHeader.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_HEADER;

            if (routeResponse) {
                if (this.options.mapController.data.router_api_selection == '1') {
                    //OSRM-API:5.x
                    if (routeResponse.routes[routeNumber].legs[0].summary) {
                        route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
                        route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
                        if (routeResponse.routes[routeNumber].legs[1]) {
                            route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
                        }
                    }
                    total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].distance);
                    total_time = this.toHumanTime(routeResponse.routes[routeNumber].duration);
                } else if (this.options.mapController.data.router_api_selection == '0') {
                    //OSRM-API:<5
                    if (routeResponse.route_name) {
                        route_name_0 = routeResponse.route_name[0];
                        route_name_1 = routeResponse.route_name[1];
                    }

                    if (routeResponse.route_summary) {
                        total_distance = this.toHumanDistance(routeResponse.route_summary.total_distance);
                        total_time = this.toHumanTime(routeResponse.route_summary.total_time);
                    }
                } else if (this.options.mapController.data.router_api_selection == '2') {
                    //OSR-API
                    total_time = this.toHumanTime(routeResponse.routes[routeNumber].summary.duration);
                    total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].summary.distance);
                }

                if (route_name_0 && route_name_1) {
                    routerInstructionsHeader.innerHTML = '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
                } else if (this.routeProfile.active) {
                    routerInstructionsHeader.innerHTML = '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.options.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
                }

                self.routerInstructionsWrapper.appendChild(routerInstructionsHeader);

                routerInstruction = document.createElement('div');

                routerInstructionsHtml = '<table class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';
                if (this.options.mapController.data.router_api_selection === '1') {
                    //OSRM-API:5.x
                    for (j = 0; j < routeResponse.routes[routeNumber].legs.length; j += 1) {
                        for (i = 0; i < routeResponse.routes[routeNumber].legs[j].steps.length; i += 1) {
                            instr = routeResponse.routes[routeNumber].legs[j].steps[i];

                            strType = instr.maneuver.type;
                            if (instr.maneuver.modifier) {
                                strMod = instr.maneuver.modifier;
                            }
                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_ODD;

                            if (i % 2 === 0) {
                                rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                            }

                            rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM;

                            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                            routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIcon(strMod, strType) + '" alt=""/>';
                            routerInstructionsHtml += '</td>';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';

                            // build route description
                            var instructiontext = this.getTypeText(instr.maneuver.type).replace(/%s/, instr.name).replace(/%m/, this.getModifierText(instr.maneuver.modifier)).replace(/%z/, instr.maneuver.exit);
                            if (instr.name.length < 1) {
                                instructiontext = instructiontext.replace(/\[.*?\]/g, '');
                            } else {
                                instructiontext = instructiontext.replace(/\[(.*)\]/, "$1");
                            }
                            routerInstructionsHtml += instructiontext;

                            routerInstructionsHtml += '</div>';
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                            if (i !== routeResponse.routes[routeNumber].legs[0].steps.length - 1) {
                                routerInstructionsHtml += this.toHumanDistance(instr.distance);
                            }
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += "</tr>";
                        }
                    }
                } else if (this.options.mapController.data.router_api_selection === '0') {
                    //OSRM-API:<5
                    for (i = 0; i < routeResponse.route_instructions.length; i += 1) {
                        instr = routeResponse.route_instructions[i];
                        rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_ODD;

                        if (i % 2 === 0) {
                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                        }

                        rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM;

                        routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                        routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getDrivingInstructionIcon(instr[0]) + '" alt=""/>';
                        routerInstructionsHtml += '</td>';

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr[3] + '">';

                        // build route description
                        if (instr[1] !== "") {
                            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "$1").replace(/%s/, instr[1]).replace(/%d/, this.getText(instr[6]));
                        } else {
                            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "").replace(/%d/, this.getText(instr[6]));
                        }

                        routerInstructionsHtml += '</div>';
                        routerInstructionsHtml += "</td>";

                        routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                        if (i !== routeResponse.route_instructions.length - 1) {
                            routerInstructionsHtml += this.toHumanDistance(instr[5]);
                        }
                        routerInstructionsHtml += "</td>";

                        routerInstructionsHtml += "</tr>";
                    }
                } else if (this.options.mapController.data.router_api_selection === '2') {
                    //OpenRouteService
                    for (j = 0; j < routeResponse.routes[routeNumber].segments.length; j += 1) {
                        for (i = 0; i < routeResponse.routes[routeNumber].segments[j].steps.length; i += 1) {
                            instr = routeResponse.routes[routeNumber].segments[j].steps[i];

                            strType = instr.type;

                            rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_ODD;

                            if (i % 2 === 0) {
                                rowstyle = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_EVEN;
                            }

                            rowstyle += " " + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM;

                            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
                            routerInstructionsHtml += '<img class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconORS(strType) + '" alt=""/>';
                            routerInstructionsHtml += '</td>';

                            if (instr.maneuver) {
                                routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';
                            } else {
                                routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + 0 + '">';
                            }

                            // build route description

                            routerInstructionsHtml += instr.instruction;

                            routerInstructionsHtml += '</div>';
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += '<td class="' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
                            if (i !== routeResponse.routes[routeNumber].segments[0].steps.length - 1) {
                                routerInstructionsHtml += this.toHumanDistance(instr.distance);
                            }
                            routerInstructionsHtml += "</td>";

                            routerInstructionsHtml += "</tr>";
                        }
                    }
                }

                routerInstructionsHtml += '</table>';

                routerInstruction.innerHTML = routerInstructionsHtml;

                self.routerInstructionsWrapper.appendChild(routerInstruction);

                this.adjustInstructionMapInteraction();
            }
        },

        adjustInstructionMapInteraction: function adjustInstructionMapInteraction(routerInstruction) {
            var self = this,
                fnItemClick,
                fnItemOver,
                fnItemOut;

            fnItemClick = function fnItemClick(element) {
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        var currentCoordinates = feature.getGeometry().getCoordinates()[element.data('pos')];
                        self.routingHintSource.clear();
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(currentCoordinates)
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                        self.options.mapController.map.getView().setCenter(currentCoordinates);
                    }
                }
                if (self.routingWaySource && self.options.mapController.data.router_api_selection >= '1') {
                    self.routingHintSource.clear();
                    var coordLonLat = element.data('pos');
                    var stringlonlat = coordLonLat.split(",");
                    stringlonlat[0] = parseFloat(stringlonlat[0]);
                    stringlonlat[1] = parseFloat(stringlonlat[1]);
                    var newCoord = ol.proj.fromLonLat(stringlonlat);
                    var currentHintFeature = new ol.Feature({
                        geometry: new ol.geom.Point(newCoord)
                    });
                    self.routingHintSource.addFeature(currentHintFeature);
                    self.options.mapController.map.getView().setCenter(newCoord);
                }
            };

            fnItemOver = function fnItemOver(element) {
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        self.routingHintSource.clear();
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                    }
                }
                if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
                    var feature = self.routingWaySource.getFeatures()[0];
                    if (feature) {
                        self.routingHintSource.clear();
                        var coordLonLat = element.data('pos');
                        var stringlonlat = coordLonLat.split(",");
                        stringlonlat[0] = parseFloat(stringlonlat[0]);
                        stringlonlat[1] = parseFloat(stringlonlat[1]);
                        var newCoord = ol.proj.fromLonLat(stringlonlat);
                        var currentHintFeature = new ol.Feature({
                            geometry: new ol.geom.Point(newCoord)
                        });
                        self.routingHintSource.addFeature(currentHintFeature);
                    }
                }
            };

            fnItemOut = function fnItemOut() {
                self.routingHintSource.clear();
            };

            $('[data-pos]', routerInstruction).each(function (index, element) {

                var $element = $(element);

                $element.click(function () {
                    fnItemClick($element);
                });

                $element.on('mouseenter', function () {
                    fnItemOver($element);
                });

                $element.on('mouseleave', function () {
                    fnItemOut();
                });
            });
        },

        clearInput: function clearInput($input) {

            $input.val('');
            $input.trigger('change');
            this.routingWaySource.clear();
            this.routingAltWaySource.clear();
            this.routingHintSource.clear();

            $(this.routerInstructionsWrapper).empty();
            this.recalculateRoute();
            this.update();
        },
        clearOver: function clearOver($input, index) {
            if (this.overValue) {
                delete this.overValue[index];
            }
            this.$buttonOver.prop("disabled", false);
            $(this.routerInstructionsWrapper).empty();
            this.recalculateRoute();
            this.update();
        },

        performReverseSearch: function performReverseSearch($input, value) {

            var self = this,
                url;

            url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
            this.spinner.show();

            jQuery.ajax({
                'url': url }).done(function (response) {

                if (response) {
                    var value = "";
                    if (response.address) {
                        if (response.address.city) {
                            value = response.address.city;
                            if (response.address.road) {
                                value = ', ' + value;
                            }
                        }
                        if (response.address.town) {
                            value = response.address.town;
                            if (response.address.road) {
                                value = ', ' + value;
                            }
                        }
                        if (response.address.road) {
                            if (response.address.house_number) {
                                value = ' ' + response.address.house_number + value;
                            }
                            value = response.address.road + value;
                        }
                    }

                    if (value === "") {
                        value = response.display_name;
                    }
                    $input.val(value);

                    if ($input.attr('name') === "routingFrom") {
                        self.$routerFromClear.show();
                    } else if ($input.attr('name') === "routingTo") {
                        self.$routerToClear.show();
                    }

                    self.recalculateRoute();
                }
            }).always(function () {
                self.spinner.hide();
            });
        },

        performSearch: function performSearch($input, value) {

            var map, bounds, viewbox, self, url;

            self = this;

            if ($input.val() === "") {
                //self.clearInput($input);
                delete self[value];
                return "";
            }

            map = self.options.mapController.map;
            bounds = map.getView().calculateExtent(map.getSize());
            bounds = ol.proj.transformExtent(bounds, map.getView().getProjection(), 'EPSG:4326');
            viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];

            url = self.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;

            jQuery.ajax({
                'url': url
            }).done(function (response) {

                if (response.length > 0) {
                    if (value === "overValue") {
                        if (!self.overValue) {
                            self.overValue = {};
                        }
                        self.overValue[self.index] = new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
                        self.$buttonOver.prop("disabled", false);
                    } else {
                        self[value] = new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
                    }
                } else {
                    alert(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_ALERT_ADDRESS);
                    self.clearInput($input);
                    delete self[value];
                }

                self.recalculateRoute();
            }).error(function () {
                alert(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_ALERT_GEOCODING);
            });

            return "";
        },

        toHumanDistance: function toHumanDistance(distanceInMeters) {

            // copied from old sources

            var distance, humanDistance;

            distance = parseInt(distanceInMeters, 10);
            distance = distance / 1000;

            if (distance >= 100) {
                humanDistance = distance.toFixed(0) + '&nbsp;' + 'km';
            } else if (distance >= 10) {
                humanDistance = distance.toFixed(1) + '&nbsp;' + 'km';
            } else if (distance >= 0.1) {
                humanDistance = distance.toFixed(2) + '&nbsp;' + 'km';
            } else {
                humanDistance = (distance * 1000).toFixed(0) + '&nbsp;' + 'm';
            }

            return humanDistance;
        },

        toHumanTime: function toHumanTime(timeInSeconds) {

            // copied from old sources

            var seconds, minutes, hours, humanTime;

            seconds = parseInt(timeInSeconds, 10);
            minutes = parseInt(seconds / 60, 10);
            seconds = seconds % 60;

            hours = parseInt(minutes / 60, 10);
            minutes = minutes % 60;

            if (hours === 0 && minutes === 0) {
                humanTime = seconds + '&nbsp;' + 's';
            } else if (hours === 0) {
                humanTime = minutes + '&nbsp;' + 'min';
            } else {
                humanTime = hours + '&nbsp;' + 'h' + '&nbsp;' + minutes + '&nbsp;' + 'min';
            }

            return humanTime;
        }

    });
})(jQuery, this.c4g);

var Router = this.c4g.maps.control.Router;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-sideboard.js ***!
  \***********************************************************************/
/*! exports provided: Sideboard */
/*! exports used: Sideboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sideboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "../MapsBundle/Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};






/**
 * Base class for sideboard structures. Provides standard configurations which are equal for each sideboard element.
 */
(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {ol.control.Control}
   * @param   {object}              options  misc configuration options
   *
   */

  c4g.maps.control.Sideboard = function (options) {

    this.options = $.extend({
      create: true,
      extDiv: false,
      defaultOpen: false,
      mapController: undefined,
      name: 'sideboard',
      direction: 'right'
    }, options);

    //active Identifier (which side is this element on?)
    //cssname needed to set the css class correctly
    switch (this.options.direction) {
      case 'left':
        this.identifier = 'Portside';
        this.cssname = 'portside';
        break;
      case 'right':
        this.identifier = 'Starboard';
        this.cssname = 'starboard';
        break;
    }
    //this.cssname = this.identifier.charAt(0).toLowerCase() + this.identifier.slice(1);
    this.initialized = false;
    this.options.tipLabel = this.options.tipLabel || this.options.headline || __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_SIDEBOARD;
    this.container = document.createElement('div');
    this.element = document.createElement('div');
    this.button = undefined;
    this.spinner = undefined;
    // mainstructure elements
    this.wrapper = undefined;
    this.titleBar = undefined;
    this.headline = undefined;
    this.topToolbar = undefined;
    this.contentContainer = undefined;
    this.bottomToolbar = undefined;
    this.statusBar = undefined;

    this.sections = [];
    this.viewTriggerBar = undefined;
    this.views = [];
    this.activeView = undefined;
    this.pausedView = undefined;

    if (this.options.create && this.options.mapController) {
      this.create();
    }

    if (!this.options.extDiv) {
      ol.control.Control.call(this, {
        element: this.element,
        target: this.options.target || undefined
      });
    }
  };
  ol.inherits(c4g.maps.control.Sideboard, ol.control.Control);

  // Add methods
  c4g.maps.control.Sideboard.prototype = $.extend(c4g.maps.control.Sideboard.prototype, {

    /**
     * Creates the basic html-elements for the sideboard
     *
     * @return  {boolean}  'true' on success
     */
    create: function create() {
      var self, initClass, titleButtonBar, closeButton, capitalizedName, hideButton, caching;

      caching = this.options.caching;
      capitalizedName = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["a" /* utils */].capitalizeFirstLetter(this.options.name);
      self = this;

      // Do not hide when it is initialized open, or in an external div
      if (this.options.extDiv) {
        initClass = ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN;
        // if (caching) {
        //     utils.storeValue(this.options.name, '1');
        // }
      } else {
        initClass = ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE;
        // if (caching) {
        //     utils.storeValue(this.options.name, '0');
        // }
        this.options.mapController["active" + this.identifier] = this.options.mapController["active" + this.identifier] || false;

        this.button = document.createElement('button');
        $(this.button).on('click', function (event) {
          event.stopPropagation();
          // loose focus, otherwise it looks messy
          try {
            this.blur();
          } catch (e) {
            // [note] "this.blur()" does not work in IE-fullscreen-mode
            console.warn(e.name + ': ' + e.message);
          }
          if (capitalizedName == "Router" || capitalizedName == "Measure" || capitalizedName == "Editor") {
            self.toggle(true);
          } else {
            self.toggle();
          }
        });
        this.button.title = this.options.tipLabel;
        this.element.appendChild(this.button);
      }

      // Set attributes
      $(this.container).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-container' + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE + initClass);
      $(this.element).addClass('c4g-' + this.options.name + ' ' + 'c4g-' + this.cssname + '-control' + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE + ' ' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OL_CONTROL + initClass);

      // Set initial dimensions
      if (this.options.direction === 'right') {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      } else {
        //this.container.style.minWidth = '250px';
        //this.container.style[this.options.direction] = '-1920px';
        this.container.style[this.options.direction] = '-100%';
      }

      // Place container
      if (this.options.extDiv) {
        document.getElementById(this.options.extDiv).appendChild(this.container);
        //     this.options.mapController["active" + this.identifier] = this;
      } else {
        if (this.options.direction === 'left') {
          $('#' + this.options.mapController.map.getTarget() + ' .' + __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OL_OVERLAYCONTAINER_SE).append(this.container);
        } else {
          this.options.mapController.$overlaycontainer_stopevent.append(this.container);
        }
      }

      // Build content-area
      //
      // Wrapper
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'c4g-' + this.cssname + '-wrapper';
      this.container.appendChild(this.wrapper);
      // Titlebar
      this.titleBar = document.createElement('div');
      this.titleBar.className = 'c4g-' + this.cssname + '-titlebar';
      this.wrapper.appendChild(this.titleBar);

      // Triggerbar
      this.viewTriggerBar = document.createElement('div');
      this.viewTriggerBar.className = 'c4g-' + this.cssname + '-viewtriggerbar';

      // Top-Toolbar
      this.topToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-top-toolbar',
        target: this.wrapper
      });

      // Content-Container
      this.contentContainer = this.addSection({
        className: 'c4g-' + this.cssname + '-content-container',
        target: this.wrapper
      });

      // add content headline
      this.contentHeadline = document.createElement('div');
      this.contentHeadline.className = 'contentHeadline';
      this.contentHeadline.innerHTML = '';
      this.contentContainer.appendChild(this.contentHeadline);

      // Bottom-Toolbar
      this.bottomToolbar = this.addSection({
        className: 'c4g-' + this.cssname + '-bottom-toolbar c4g-close',
        target: this.wrapper
      });

      // Statusbar
      this.statusBar = document.createElement('div');
      this.statusBar.className = 'c4g-' + this.cssname + '-statusbar c4g-close';
      this.wrapper.appendChild(this.statusBar);

      // Add spinner
      this.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["a" /* Spinner */]({
        target: this.contentContainer,
        className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].LARGE
      });

      // Fill titlebar
      //
      // Headline
      this.headline = document.createElement('span');
      this.headline.className = 'c4g-' + this.cssname + '-headline';
      this.headline.innerHTML = this.options.headline;
      this.titleBar.appendChild(this.headline);
      // Buttonbar
      titleButtonBar = document.createElement('div');
      titleButtonBar.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CONTROL + ' ' + 'c4g-' + this.cssname + '-buttonbar';
      this.titleBar.appendChild(titleButtonBar);

      if (this.options.direction === 'left') {
        // Hidebutton
        hideButton = document.createElement('button');
        hideButton.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].PORTSIDE_HIDE;
        hideButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].HIDE;
        $(hideButton).click(function (event) {
          event.preventDefault();
          self.close(true);
          return false;
        });
        titleButtonBar.appendChild(hideButton);
      }

      // Closebutton
      closeButton = document.createElement('button');
      closeButton.className = 'c4g-' + this.cssname + '-close';
      closeButton.title = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant_i18n_de__["a" /* langConstants */].CLOSE;
      $(closeButton).click(function (event) {
        event.preventDefault();
        self.close();
        return false;
      });
      titleButtonBar.appendChild(closeButton);

      //Add spinner for left sided sideboard elements
      this.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["a" /* Spinner */]({
        target: this.contentContainer,
        className: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].LARGE
      });

      // Handle external DIV and default state
      // catch touch events and stop their propagation
      // otherwise touch-scrolling will be stopped by ol3
      $(this.container).on('touchstart touchmove touchend', function (event) {
        event.stopPropagation();
      });

      // Bind the update method to the map-resize event
      this.options.mapController.map.on('change:size', this.update, this);

      // Show open if desired
      if (this.options.defaultOpen || this.options.caching && __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["a" /* utils */].getValue(this.options.name) == '1') {
        this.open();
      }

      return true;
    }, // end of "create"

    /**
     *   Update the sideboards html-elements
     *   resizes the content-container
     *   and the top-toolbar
     *
     * @param  {event-object}  opt_event  *optional*  Just needed by the ol-bind-method,
     *                                                but not used in the function
     */
    update: function update(opt_event) {

      var self, contentContainerOuterHeight, containerOffsetWidth;

      self = this;

      /*
      if (this.options && this.options.name) {
          capitalizedName = utils.capitalizeFirstLetter(this.options.name);
      }*/

      contentContainerOuterHeight = $(this.wrapper).height() - ($(this.titleBar).outerHeight(true) + $(this.statusBar).outerHeight(true));
      if (this.options && this.options.direction && this.options.direction != "undefined" && this.options.direction === 'left') {
        if (this !== this.options.mapController["active" + this.identifier]) {
          containerOffsetWidth = 0;
        }
      }

      // Top-Toolbar
      if (this.topToolbar) {
        if (this.topToolbar.innerHTML) {
          // this.topToolbar.style.display = 'block';
          this.topToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.topToolbar).outerHeight(true);
        } else {
          this.topToolbar.style.display = 'none';
        }
      }

      // Bottom-toolbar
      if (this.bottomToolbar) {
        if (this.bottomToolbar.innerHTML) {
          // this.bottomToolbar.style.display = 'block';
          this.bottomToolbar.style.display = '';
          contentContainerOuterHeight -= $(this.bottomToolbar).outerHeight(true);
        } else {
          this.bottomToolbar.style.display = 'none';
        }
      }

      // Content-container
      $(this.contentContainer).outerHeight(contentContainerOuterHeight);

      // Correct width
      if (this.options) {
        if (this.options.mapController["active" + this.identifier] === this) {
          //this.container.style.width = 'auto';
          containerOffsetWidth = this.container.offsetWidth;
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });

          //only move the toggle button on starboard elements
          if (this.options.direction === 'right') {
            $(this.element).css(this.options.direction, containerOffsetWidth);
          }
        }
      }
    }, // end of "update"

    /**
     * Opens this sideboard element
     *
     * @param   {object}    *optional* options to be passed to the initialize-function if it exists
     * @return  {boolean}  'true' an success
     */
    open: function open(opt_options) {
      var containerOffsetWidth, self;

      self = this;

      // Call initialize-functions, if existent
      if (!this.initialized) {
        if (typeof this.init === 'function') {
          this.initialized = this.init(opt_options);
        } else {
          this.initialized = true;
        }
      }

      // call preOpenFunctions
      if (typeof this.preOpenFunction === 'function') {
        this.preOpenFunction();
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier]) {
          if (this.options.mapController["active" + this.identifier] === this) {
            return false;
          }
          //close other active sideboard on this side
          this.options.mapController["active" + this.identifier].close(true, true);
        } else {
          // slide other elements when no other sideboard was active on this side
          this.options.mapController[this.options.direction + "SlideElements"].forEach(function (element) {
            $(element).css(self.options.direction, containerOffsetWidth);
          });
        }

        $(this.container).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN).css(this.options.direction, 0);
        if (this.options.direction === 'left') {
          $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN);
        } else {
          $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN).css(this.options.direction, containerOffsetWidth);
        }

        // set this as active Sideboard
        this.options.mapController["active" + this.identifier] = this;

        // check if a view needs to be reactivated
        if (this.activeView) {
          this.activeView.activate();
        }

        if ($(this.statusBar).hasClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE)) {
          $(this.statusBar).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN);
        }

        if ($(this.bottomToolbar).hasClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE)) {
          $(this.bottomToolbar).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN);
        }

        // show container to fix resizing issue
        $(this.container).css('visibility', 'visible');

        this.update();
        if (this.options.caching) {
          __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["a" /* utils */].storeValue(this.options.name, '1');
        }

        // call postOpenFunctions
        if (typeof this.postOpenFunction === 'function') {
          this.postOpenFunction();
        }

        return true;
      }
      return false;
    }, // end of "open"

    isOpen: function isOpen() {
      return this.options.mapController["active" + this.identifier] && this.options.mapController["active" + this.identifier] === this;
    },

    /**
     * Closes this sideboard element
     *
     * @param   {boolean}  opt_hide               *optional* Choose if this function should trigger |preHideFunction|
     *                                            instead of |preCloseFunction|. Default is |false|.
     * @param   {boolean}  opt_openOtherSideboard  *optional* Indicates if another sideboard element will be opened instead.
     *                                            Default is |false|.
     *
     * @return  {boolean}                         |true| on success.
     */
    close: function close(opt_hide, opt_openOtherSideboard) {
      var containerOffsetWidth, direction;

      direction = this.options.direction;

      if (opt_hide) {
        if (typeof this.preHideFunction === 'function') {
          this.preHideFunction();
        }
      } else {
        if (typeof this.preCloseFunction === 'function') {
          this.preCloseFunction();
        }
      }

      containerOffsetWidth = this.container.offsetWidth;

      if (this.options.extDiv) {
        // Not available on external divs
        console.warn('You cannot use this function on external embedded sideboard.');
      } else {
        if (this.options.mapController["active" + this.identifier] !== this) {
          console.warn('This ' + this.options.name + '-element (' + this.options.name + ') is already closed.');
          return false;
        }
        $(this.container).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).css(direction, -containerOffsetWidth);
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].OPEN).addClass(__WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].CLOSE).css(direction, 0);

        if (!opt_openOtherSideboard) {
          // slide other elements
          this.options.mapController[direction + "SlideElements"].forEach(function (element) {
            $(element).css(direction, 0);
          });
        }

        // hide container to fix resizing issue
        $(this.container).css('visibility', 'hidden');

        // check if a view needs to be deactivated
        if (this.activeView) {
          this.activeView.deactivate(true);
        }

        // Remove active Sideboardentry
        this.options.mapController["active" + this.identifier] = false;

        if (this.options.caching) {
          __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["a" /* utils */].storeValue(this.options.name, '0');
        }
        return true;
      }
      return false;
    }, // end of "close"

    /**
     * Toggle this sideboard element
     *
     * @return  {boolean}  Returns |true| on success.
     */
    toggle: function toggle(opt_hide) {
      var capitalizedName;
      capitalizedName = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_utils__["a" /* utils */].capitalizeFirstLetter(this.options.name);
      if (this.options.mapController["active" + this.identifier] === this) {
        return this.close(opt_hide);
      }
      return this.open();
    }, // end of "toggle"

    /**
     * Creates a button which characteristics are defined by the options parameter
     * These options include e.g. the target container where the button will be appended and the click action of the button
     *
     * @param   {object}  opt_options  The button configuration
     *
     * @return  {[type]}           [description]
     */
    makeButton: function makeButton(opt_options) {

      var options, button;

      options = $.extend({
        label: undefined,
        tipLabel: undefined,
        className: '',
        target: undefined,
        clickAction: undefined
      }, opt_options);

      if (options.className) {
        options.className = ' ' + options.className;
      }

      button = document.createElement('button');
      button.className = 'c4g-' + this.options.name + '-button' + options.className;
      if (options.id) {
        button.id = options.id;
      }

      if (typeof options.tipLabel === 'string') {
        button.title = options.tipLabel;
      }

      if (typeof options.label === 'string') {
        button.innerHTML = options.label;
      } else if (_typeof(options.label) === 'object') {
        button.appendChild(options.label);
      }

      if (typeof options.clickAction === 'function') {
        $(button).click(function () {
          try {
            this.blur();
          } catch (e) {
            console.warn(e.message);
          }
          options.clickAction();
        });
      }

      if (options.target) {
        $(options.target).append(button);
      }

      return button;
    }, // end of "makeButton"

    /**
     * @TODO
     * [addSection description]
     *
     * @param  {[type]}  opt_options  [description]
     */
    addSection: function addSection(opt_options) {

      var options, section, element;

      options = $.extend({
        type: 'div',
        className: '',
        target: undefined
      }, opt_options);

      // try to create the new section
      try {
        section = document.createElement(options.type);
      } catch (e) {
        console.warn('Cannot create section. "' + options.type + ' is not a valid HTML-node.');
        return false;
      }

      section.className = options.className;

      // try to append the section to the given target
      if (options.target) {
        try {
          options.target.appendChild(section);
        } catch (e) {
          console.warn(e.message);
        }
      }

      section.getElement = function () {
        return element || false;
      };

      section.setElement = function (newElement) {
        if (newElement && (typeof newElement === "undefined" ? "undefined" : _typeof(newElement)) === 'object') {
          if (!(element && element === newElement)) {
            if (element) {
              this.removeChild(element);
            }
            this.appendChild(newElement);
            element = newElement;
          }
        }
      };

      // add to sections-array
      this.sections.push(section);
      return section;
    }, // end of "addSection"

    /**
     * @TODO
     * [addView description]
     *
     * @param  {[type]}  options  [description]
     */
    addView: function addView(options, opt_viewScope) {

      var self, viewScope, additionalTriggerClass, trigger, view;

      self = this;
      viewScope = opt_viewScope || this;

      options = $.extend({
        // name: undefined,
        triggerConfig: undefined, // @TODO doku format: {opt_target: [string|htmlObject], opt_className: [string], opt_tipLabel: [string]}
        sectionElements: [], // @TODO doku format: [{section: [sectionObject], element: [elementObject]}]
        initFunction: undefined,
        activateFunction: undefined,
        deactivateFunction: undefined
      }, options);

      if (typeof options.name !== 'string') {
        console.warn('Cannot add a view without a name (of type "string").');
        return false;
      }

      view = {};

      view.initialized = false;
      view.paused = false;

      view.activate = function (opt_openSideboard) {
        var i;

        if (options.triggerConfig.withHeadline) {
          self.contentHeadline.innerHTML = options.triggerConfig.tipLabel;
        }

        // open Sideboard if closed
        if (opt_openSideboard && !self.isOpen()) {
          self.open();
        }

        // Deactivate current activeView, if existent
        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView !== view) {
          viewScope.activeView.deactivate();
        }
        viewScope.activeView = view;

        // Handle sub-views
        if (view.activeView) {
          view.activeView.activate();
        }

        // Call initialize-functions, if existent
        if (!view.initialized) {
          if (typeof options.initFunction === 'function') {
            view.initialized = options.initFunction();
          } else {
            view.initialized = true;
          }
        }

        // Display elements in given sections
        if (options.sectionElements && options.sectionElements.length > 0) {
          for (i = 0; i < options.sectionElements.length; i += 1) {
            options.sectionElements[i].section.setElement(options.sectionElements[i].element);
          }
        }

        // Change trigger-state, if existent
        if (trigger) {
          $(trigger).addClass('c4g-active');
        }

        // Call activate function, if existent
        if (typeof options.activateFunction === 'function') {
          if (!options.activateFunction(view.paused)) {
            return false;
          }
        }

        view.paused = false;
        self.update();
        return true;
      };

      view.deactivate = function (opt_pause) {

        view.paused = opt_pause || false;

        if (_typeof(viewScope.activeView) === 'object' && viewScope.activeView === view) {
          if (trigger && !view.paused) {
            $(trigger).removeClass('c4g-active');
          }

          // Handle sub-views
          if (view.activeView) {
            view.activeView.deactivate(view.paused);
          }

          // Call deactivate function, if existent
          if (typeof options.deactivateFunction === 'function') {
            return options.deactivateFunction(view.paused);
          }
        }

        return true;
      };

      if (_typeof(options.triggerConfig) === 'object') {
        options.triggerConfig = $.extend({
          target: this.viewTriggerBar,
          tipLabel: options.name
        }, options.triggerConfig);

        options.triggerConfig.clickAction = view.activate;
        if (options.triggerConfig.className) {
          additionalTriggerClass = ' ' + options.triggerConfig.className;
        } else {
          additionalTriggerClass = '';
        }
        options.triggerConfig.className = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant__["a" /* cssConstants */].ICON + additionalTriggerClass;
        // @TODO check: trigger = this.makeButton(options.triggerConfig);
        trigger = this.makeButton(options.triggerConfig);
      }

      this.views.push(view);
      return view;
    } // end of "addView"

  }); // end of "add methods"
})(jQuery, this.c4g);

var Sideboard = this.c4g.maps.control.Sideboard;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************************/
/*! exports provided: Zoomlevel */
/*! exports used: Zoomlevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Zoomlevel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};



(function ($, c4g) {
  'use strict';

  /**
   * Displays the current zoomlevel on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */

  c4g.maps.control.Zoomlevel = function (options) {

    var self, element, updateZoomlevel;

    self = this;

    if (!options || !options.mapView) {
      console.warn('Zoomlevel control needs to know the map.');
      return false;
    }

    // default options
    options = $.extend({
      className: __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);

    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = options.mapView.getZoom();

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(options.mapView.getZoom());
    };

    options.mapView.on('change:resolution', updateZoomlevel);
    ol.control.Control.call(this, {
      element: element,
      target: options.target
    });
  };
  ol.inherits(c4g.maps.control.Zoomlevel, ol.control.Control);

  /*
   * Add methods
   */
  c4g.maps.control.Zoomlevel.prototype = $.extend(c4g.maps.control.Zoomlevel.prototype, {

    // nothing to add here

  }); // end of "add methods" ---
})(jQuery, this.c4g);

var Zoomlevel = this.c4g.maps.control.Zoomlevel;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************************/
/*! exports provided: Spinner */
/*! exports used: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.misc = this.c4g.maps.misc || {};



(function ($, c4g) {
  'use strict';

  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */

  c4g.maps.misc.Spinner = function (opt_options) {

    var options, target, spinnerSpan;

    options = opt_options || {};

    // default options
    options = $.extend({
      className: '',
      target: '.' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].SPINNER + options.className + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].HIDE;
    $(options.target).append(this.element);

    spinnerSpan = document.createElement('span');
    spinnerSpan.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);

    this.additionalActivationCounter = 0;
  };

  // Add methods to spinner
  c4g.maps.misc.Spinner.prototype = $.extend(c4g.maps.misc.Spinner.prototype, {

    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */
    show: function show() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].HIDE)) {
        $(this.element).removeClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    },

    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */
    hide: function hide() {
      if ($(this.element).hasClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].HIDE)) {
        //console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          $(this.element).addClass(__WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }

  }); // End of "add methods to spinner"
})(jQuery, this.c4g);

var Spinner = this.c4g.maps.misc.Spinner;

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js":
/*!*******************************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js ***!
  \*******************************************************************/
/*! exports provided: trim, isMobile, fnStandardInfoPopup, fnReducedInfoPopup, fnHeader, fnFooter, fnGetTranslate_Type, fnContent, fnContentAerodrome, fnContentNatural, fnContentProtectedArea, fnContentLanduse, fnMessstation, fnContentRoute, fnContentPetrol, fnContentHistoric, fnContentBarriers, fnContentTourism, fnContentAmenity, fnContentStorage, fnContentInformationCity, fnContentEmergency, fnContentCuisine, fnContentShipping, fnContentHydrants, fnContentStreetsTraffic, fnContentSports, fnArztInfo, fnKraftwerkInfo, fnWertstoffinfo, fnAdditionalBuildingInfos, fnSicherheitAdditional, fnWreckInfo, fnKlosterAdditional */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["trim"] = trim;
/* harmony export (immutable) */ __webpack_exports__["isMobile"] = isMobile;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnStandardInfoPopup", function() { return fnStandardInfoPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnReducedInfoPopup", function() { return fnReducedInfoPopup; });
/* harmony export (immutable) */ __webpack_exports__["fnHeader"] = fnHeader;
/* harmony export (immutable) */ __webpack_exports__["fnFooter"] = fnFooter;
/* harmony export (immutable) */ __webpack_exports__["fnGetTranslate_Type"] = fnGetTranslate_Type;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContent", function() { return fnContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAerodrome", function() { return fnContentAerodrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentNatural", function() { return fnContentNatural; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentProtectedArea", function() { return fnContentProtectedArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentLanduse", function() { return fnContentLanduse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnMessstation", function() { return fnMessstation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentRoute", function() { return fnContentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentPetrol", function() { return fnContentPetrol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHistoric", function() { return fnContentHistoric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentBarriers", function() { return fnContentBarriers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentTourism", function() { return fnContentTourism; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentAmenity", function() { return fnContentAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStorage", function() { return fnContentStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentInformationCity", function() { return fnContentInformationCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentEmergency", function() { return fnContentEmergency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentCuisine", function() { return fnContentCuisine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentShipping", function() { return fnContentShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentHydrants", function() { return fnContentHydrants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentStreetsTraffic", function() { return fnContentStreetsTraffic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnContentSports", function() { return fnContentSports; });
/* harmony export (immutable) */ __webpack_exports__["fnArztInfo"] = fnArztInfo;
/* harmony export (immutable) */ __webpack_exports__["fnKraftwerkInfo"] = fnKraftwerkInfo;
/* harmony export (immutable) */ __webpack_exports__["fnWertstoffinfo"] = fnWertstoffinfo;
/* harmony export (immutable) */ __webpack_exports__["fnAdditionalBuildingInfos"] = fnAdditionalBuildingInfos;
/* harmony export (immutable) */ __webpack_exports__["fnSicherheitAdditional"] = fnSicherheitAdditional;
/* harmony export (immutable) */ __webpack_exports__["fnWreckInfo"] = fnWreckInfo;
/* harmony export (immutable) */ __webpack_exports__["fnKlosterAdditional"] = fnKlosterAdditional;
/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\xE4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}
var fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "Geb\xE4udename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "Fl\xE4che: " + f + " Km\xB2<br/>";
    } else c += "Fl\xE4che " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "Internet Geb\xFChr: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "H\xF6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\xE4ume: " + b["wheelchair:rooms"] + "<br/>");b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "Rampe f\xFCr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "Behindertenparkpl\xE4tze: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "Zentralschl\xFCssel: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");b.operator && (c += "Betreiber: " + b.operator + "<br/>");b.ref && (c += "Referenz: " + b.ref + "<br/>");"yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\xE4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\xDFh\xE4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";"dentist" == b.amenity && (a += "Zahnarzt<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";"alternative" == b.healthcare && (a += "Alternativ- und Komplement\xE4rmediziner<br/>");"midwife" == b.healthcare && (a += "Hebamme<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\xE4de<br/>";
    "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");"veterinary" == b.amenity && (a += "Tierarzt<br/>");"fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");"fire_extinguisher" == b.emergency && (a += "Feuerl\xF6scher<br/>");"aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");"defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");"phone" == b.emergency && (a += "Notrufs\xE4ule<br/>");"police" == b.amenity && (a += "Polizeiwache<br/>");"ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
    "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");"water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");"baywatch" == b.waterway && (a += "Wasserwacht<br/>");"air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");"emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";"life_ring" == b.emergency && (a += "Rettungsring<br/>");"siren" == b.emergency && (a += "Sirene<br/>");"life_ring" == b.amenity && (a += "Rettungsring<br/>");"rescue_station" == b.amenity && (a += "Rettungsstation<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\xDCberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));"suction_point" == b.emergency && (a += "Saugstelle<br/>");"fire_water_pond" == b.emergency && (a += "L\xF6schteich<br/>");"mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");"water_tank" == b.emergency && (a += "L\xF6schwassertank<br/>");"container" == b.recycling_type && (a += "Recycling Container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");"yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");"yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");"yes" == b["diet:raw"] ? a += "rohk\xF6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\xF6stliche Gerichte<br/>");"yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");"yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");"yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");"yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");"yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");"pub" == b.amenity && (a += "Gastst\xE4tte<br/>");"bar" == b.amenity && (a += "Bar<br/>");"yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");"yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");"yes" == b.cake && (a += "Kuchenteilchen, Geb\xE4ck etc. im Angebot<br/>");"yes" == b.coffee && (a += "Kaffeegetr\xE4nke im Angebot<br/>");"yes" == b.drinks && (a += "Getr\xE4nke im Angebot<br/>");"biergarten" == b.amenity && (a += "Biergarten<br/>");"restaurant" == b.amenity && (a += "Restaurant<br/>");"fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\xE9, Bistro<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";"alpine_hut" == b.tourism && (a += "Bergh\xFCtte<br/>");"aquarium" == b.tourism && (a += "Aquarium<br/>");"apartment" == b.tourism && (a += "Ferienwohnung<br/>");"attraction" == b.tourism && (a += "Sehensw\xFCrdigkeit<br/>");"artwork" == b.tourism && (a += "Skulptur<br/>");"camp_site" == b.tourism && (a += "Campingplatz<br/>");"caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
    "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");"gallery" == b.tourism && (a += "Kunstgalerie<br/>");"guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");"hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");"hotel" == b.tourism && (a += "Hotel<br/>");"motel" == b.tourism && (a += "Motel<br/>");"museum" == b.tourism && (a += "Museum<br/>");"picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");"theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");"viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
    "wilderness_hut" == b.tourism && (a += "Schutzh\xFCtte<br/>");"wine_cellar" == b.tourism && (a += "Weinkeller<br/>");"zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));"trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");"fishing" == b.club && (a += "Angelverein<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "Amateurfunker<br/>");
    "art" == b.club && (a += "Kunstverein<br/>");"astronomy" == b.club && (a += "Astronomieverein<br/>");"automobile" == b.club && (a += "Automobilverein<br/>");"board_games" == b.club && (a += "Brettspielverein<br/>");"card_games" == b.club && (a += "Kartenspielverein<br/>");"charity" == b.club && (a += "Charity-Verein<br/>");"chess" == b.club && (a += "Schachverein<br/>");"cinema" == b.club && (a += "Kinoverein<br/>");"cooking" == b.club && (a += "Kochverein<br/>");"culture" == b.club && (a += "Kulturverein<br/>");"doityourself" == b.club && (a += "doityourself-Verein<br/>");
    "equestrian" == b.club && (a += "Reitverein<br/>");"ethnic" == b.club && (a += "Ethnischer Verein<br/>");"fan" == b.club && (a += "Fanverein<br/>");"freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");"game" == b.club && (a += "Spieleverein<br/>");"history" == b.club && (a += "Historischer-Verein / Verein f\xFCr Geschichte<br/>");"hunting" == b.club && (a += "Jagdverein<br/>");"linux" == b.club && (a += "Linux-Verein<br/>");"motorcycle" == b.club && (a += "Motorradverein<br/>");"music" == b.club && (a += "Musikverein<br/>");"nature" == b.club && (a += "Naturverein<br/>");
    "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");"photography" == b.club && (a += "Fotografieverein<br/>");"politics" == b.club && (a += "Verein f\xFCr Politik<br/>");"relegion" == b.club && (a += "Politischer-Verein<br/>");"scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");"smoke" == b.club && (a += "Raucherverein<br/>");"sport" == b.club && (a += "Sportverein<br/>");"theatre" == b.club && (a += "Theaterverein<br/>");"veterans" == b.club && (a += "Veteranen<br/>");"amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");"beach_resort" == b.leisure && (a += "Standbad<br/>");"bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");"common" == b.leisure && (a += "\xD6ffentliche Gr\xFCnfl\xE4chen<br/>");"club" == b.leisure && (a += "Club/Verein<br/>");"dance" == b.leisure && (a += "Tanzen<br/>");"dog_park" == b.leisure && (a += "Hundepark<br/>");"firepit" == b.leisure && (a += "Feuerstelle<br/>");"fishing" == b.leisure && (a += "Angelstelle<br/>");"garden" == b.leisure && (a += "Garten<br/>");"golf_course" == b.leisure && (a += "Golfplatz<br/>");"hackerspace" == b.leisure && (a += "Ort f\xFCr Hackertreffen<br/>");
    "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");"ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");"nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");"park" == b.leisure && (a += "Gr\xFCnanlage<br/>");"miniature_golf" == b.leisure && (a += "Minigolf<br/>");"pitch" == b.leisure && (a += "Spielfeld<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");"playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");"social_club" == b.leisure && (a += "Treffpunkt f\xFCr Freizeitgruppen<br/>");"spa" == b.leisure && (a += "Heilbad / Spa<br/>");"sports_centre" == b.leisure && (a += "Sportzentrum<br/>");"climbing_adventure" == b.sport && (a += "Seilgarten<br/>");"stadium" == b.leisure && (a += "Stadion<br/>");"swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");"track" == b.leisure && (a += "Rennbahn<br/>");"water_park" == b.leisure && (a += "Wasserpark<br/>");"wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");"adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
    "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "Piste f\xFCr Skitouren<br/>";break;case "downhill":
            a += "Skiabfahrt<br/>";break;case "sled":
            a += "Rodelberg / Rodelstrecke<br/>";break;case "nordic":
            a += "Langlauf Piste<br/>";break;case "hike":
            a += "Schneeschuh- und Winterwanderweg<br/>";break;case "snow_park":
            a += "Snow-Park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "Surfen<br/>";break;case "kitesurfing":
            a += "Kitesurfen<br/>";break;case "water_ski":
            a += "Wasserski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "Lift mit Gondeln<br/>";break;case "gondola":
            a += "Lift mit Gondeln<br/>";break;case "chair_lift":
            a += "Sessellift<br/>";break;case "mixed_lift":
            a += "Lift mit Sesseln und Gondeln<br/>";break;case "drag_lift":
            a += "Skilift<br/>";
            break;case "t-bar":
            a += "T-Lift<br/>";break;case "t-bar":
            a += "T-Lift (einseitig)<br/>";break;case "platter":
            a += "Lift mit Sitzscheibe<br/>";break;case "rope_tow":
            a += "B\xFCgellift<br/>";break;case "magic_carpet":
            a += "Bef\xF6rderungsband<br/>";break;default:
            a += "unbekannt";}"mosque" == b.building && (a += "Moschee<br/>");"synagogue" == b.building && (a += "Synagoge<br/>");"apartments" == b.building && (a += "Wohnung<br/>");"farm" == b.building && (a += "Farm<br/>");"hotel" == b.building && (a += "Hotel<br/>");"house" == b.building && (a += "Haus<br/>");"detached" == b.building && (a += "Freistehend<br/>");"residential" == b.building && (a += "Residenz<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";"terrace" == b.building && (a += "Terrasse<br/>");"houseboat" == b.building && (a += "Hausboot<br/>");"bungalow" == b.building && (a += "Bungalow<br/>");"static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");"commercial" == b.building && (a += "Kommerziell<br/>");"retail" == b.building && (a += "Verkauf<br/>");"warehouse" == b.building && (a += "Lagerhaus<br/>");"bakehouse" == b.building && (a += "Backstube<br/>");"temple" == b.building && (a += "Tempel<br/>");"shrine" == b.building && (a += "Schrein<br/>");"civic" == b.building && (a += "B\xFCrgerlich<br/>");"stadium" == b.building && (a += "Stadium<br/>");"train_station" == b.building && (a += "Bahnhof<br/>");"university" == b.building && (a += "Universit\xE4t<br/>");"public" == b.building && (a += "\xD6ffentliches Geb\xE4ude<br/>");"bridge" == b.building && (a += "Br\xFCcke<br/>");"bunker" == b.building && (a += "Bunker<br/>");"cabin" == b.building && (a += "H\xFCtte<br/>");"conservatory" == b.building && (a += "Wintergarten<br/>");"construction" == b.building && (a += "Im Bau<br/>");"garage" == b.building && (a += "Garage<br/>");"garages" == b.building && (a += "Garagen<br/>");"greenhouse" == b.building && (a += "Gew\xE4chshaus<br/>");"hangar" == b.building && (a += "Hangar<br/>");"hut" == b.building && (a += "H\xFCtte<br/>");"pavillion" == b.building && (a += "Pavillion<br/>");"roof" == b.building && (a += "\xDCberdacht<br/>");"shed" == b.building && (a += "Gartenh\xE4uschen<br/>");
    "transformer_tower" == b.building && (a += "Transformator Turm<br/>");"service" == b.building && (a += "Service-Stelle<br/>");"kiosk" == b.building && (a += "Kiosk<br/>");"carport" == b.building && (a += "Carport<br/>");"ruins" == b.building && (a += "Ruinen<br/>");"gambling" == b.amenity && (a += "Spielhalle<br/>");"library" == b.amenity && (a += "B\xFCcherei<br/>");"fountain" == b.amenity && (a += "Brunnen<br/>");"attraction" == b.amenity && (a += "Sehensw\xFCrdigkeit<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
    "townhall" == b.amenity && (a += "Rathaus / B\xFCrgerhaus<br/>");"bench" == b.amenity && (a += "Parkbank<br/>");if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";"post_box" == b.amenity && (a += "Briefkasten<br/>");"post_office" == b.amenity && (a += "Postamt<br/>");"telephone" == b.amenity && (a += "Telefon<br/>");"atm" == b.amenity && (a += "Geldautomat<br/>");"bank" == b.amenity && (a += "Bankfiliale<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "\xD6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\xD6ffentliche Toilette<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");"kindergarten" == b.amenity && (a += "Kindergarten<br/>");"internet_cafe" == b.amenity && (a += "Internetcaf\xE9<br/>");"daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");"childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
    "university" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"college" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"shelter" == b.amenity && (a += "Unterstand<br/>");"bbq" == b.amenity && (a += "Grillplatz<br/>");"nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");"bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");"bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");"boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");"car_sharing" == b.amenity && (a += "Car-Sharing<br/>");"cinema" == b.amenity && (a += "Kino<br/>");"swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\xE4ndige Vertretung<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");"Barfusspfad" == b.amenity && (a += "Barfu\xDFpfad<br/>");"casino" == b.amenity && (a += "Casino<br/>");"spa" == b.amenity && (a += "Heilbad / Spa<br/>");"stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");"watering_place" == b.amenity && (a += "Wasserstelle / Tr\xE4nke<br/>");"yes" == b.watering_place && (a += "Wasserstelle / Tr\xE4nke<br/>");"water_point" == b.amenity && (a += "gro\xDFe Trinkwasserstelle<br/>");
    "taxi" == b.amenity && (a += "Taxi<br/>");"car_wash" == b.amenity && (a += "Autowaschanlage<br/>");"brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");"stripclub" == b.amenity && (a += "Stripclub<br/>");"swingerclub" == b.amenity && (a += "Swingerclub<br/>");"planetarium" == b.amenity && (a += "Planetarium<br/>");"courthouse" == b.amenity && (a += "Gericht<br/>");"crematorium" == b.amenity && (a += "Krematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";"hunting_stand" == b.amenity && (a += "Hochsitz<br/>");"photo_booth" == b.amenity && (a += "Fotoautomat<br/>");"prison" == b.amenity && (a += "Gef\xE4ngnis<br/>");"ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");"register_office" == b.amenity && (a += "Standesamt<br/>");"marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");"solarium" == b.amenity && (a += "Solarium<br/>");"sauna" == b.amenity && (a += "Sauna<br/>");"shower" == b.amenity && (a += "\xF6ffentliche Dusche<br/>");if ("waste_disposal" == b.amenity && (a += "M\xFCllentsorgung auf \xF6ffentlichen Pl\xE4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {case "trash":
            a += "Allgemeiner M\xFCll<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmazeutisch<br/>";break;case "organic":
            a += "Kompost<br/>";break;case "plastic":
            a += "Plastik<br/>";break;case "rubble":
            a += "Schutt<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;default:
            a += "Allgemeiner M\xFCll<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\xFCllcontainer<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";"ferry_terminal" == b.amenity && (a += "F\xE4hrhafen<br/>");"bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");"youth_club" == b.amenity && (a += "Jugendzentrum<br/>");"festival_grounds" == b.amenity && (a += "Festivalgel\xE4nde<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Eintrittskartenautomat<br/>";break;case "animal_feed":
            a += "Tierfutterautomat<br/>";
            break;case "bicycle_tube":
            a += "Fahrradschlauchautomat<br/>";break;case "books":
            a += "B\xFCcherautomat<br/>";break;case "candles":
            a += "Kerzenautomat<br/>";break;case "cigarettes":
            a += "Zigarettenautomat<br/>";break;case "chemist":
            a += "Apotheken/Drogerie Automat<br/>";break;case "condoms":
            a += "Kondomautomat<br/>";break;case "drinks":
            a += "Getr\xE4nkeautomat<br/>";break;case "electronics":
            a += "Automat f\xFCr Elektro-Zubeh\xF6r<br/>";break;case "elongated_coin":
            a += "M\xFCnzpr\xE4gungsautomat<br/>";break;
        case "excrement_bags":
            a += "Hundet\xFCtenspender<br/>";break;case "feminine_hygiene":
            a += "Automat f\xFCr Damenhygieneprodukte<br/>";break;case "first_aid":
            a += "Erste-Hilfe-Automat<br/>";break;case "fishing_tackle":
            a += "Automat f\xFCr Angelzubeh\xF6r<br/>";break;case "fishing_bait":
            a += "Angelk\xF6derautomat<br/>";break;case "flowers":
            a += "Blumenautomat<br/>";break;case "food":
            a += "Lebensmittel-Automat<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfelautomat<br/>";break;case "ice_cream":
            a += "Automat f\xFCr Speiseeis<br/>";
            break;case "ink_cartridges":
            a += "Druckerpatronen Automat<br/>";break;case "laundry_detergent":
            a += "Waschmittelautomat<br/>";break;case "public_transport_tickets":
            a += "Fahrkartenautomat<br/>";break;case "newspaper":
            a += "Zeitungsautomat<br/>";break;case "parcel_pickup":
            a += "Packstation<br/>";break;case "parcel_mail_in":
            a += "Paketstation<br/>";break;case "parking_tickets":
            a += "Parkscheinautomat<br/>";break;case "photos":
            a += "Fotoautomat<br/>";break;case "sex_toys":
            a += "Automat f\xFCr Sexspielzeug<br/>";break;
        case "SIM_cards":
            a += "Automat f\xFCr SIM Karten<br/>";break;case "stamps":
            a += "Briefmarkenautomat<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeitenautomat<br/>";break;case "syringes":
            a += "Spritzenautomat<br/>";break;case "toll":
            a += "Maut-Automat<br/>";break;case "toys":
            a += "Spielzeugautomat<br/>";break;case "umbrellas":
            a += "Regenschirmautomat<br/>";break;default:
            a += "Verkaufsautomat<br/>";} else a += "Verkaufsautomat<br/>";"arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");"artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
    "museum" == b.amenity && (a += "Museum<br/>");"theatre" == b.amenity && (a += "Theater<br/>");"cathedral" == b.building && (a += "Kathedrale<br/>");"church" == b.building && (a += "Kirche<br/>");"chapel" == b.building && (a += "Kapelle<br/>");"place_of_worship" == b.amenity && (a += "Kirche / Kultst\xE4tte<br/>");"village" == b.abandoned && (a += "Verlassene Stadt<br/>");"theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\xFCgungspark<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\xE4tte<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\xE4rbaracken<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\xE4rflugplatz<br/>");"monastery" == b.historic && (a += "Historisches Kloster<br/>");"monastery" == b.amenity && (a += "Kloster<br/>");"monastery" == b.building && (a += "Kloster<br/>");"manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");"boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");"milestone" == b.historic && (a += "Historischer Meilenstein<br/>");"monument" == b.historic && (a += "Monument<br/>");"palace" == b.historic && (a += "Palast<br/>");"mine" == b.historic && (a += "Verlassene Mine<br/>");"ruins" == b.historic && (a += "Ruine<br/>");"harbour" == b.historic_usage && (a += "historischer Hafen<br/>");"rune_stone" == b.historic && (a += "Runenstein<br/>");"battlefield" == b.historic && (a += "Schlachtfeld<br/>");"blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
    if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";"city_gate" == b.historic && (a += "Stadttor<br/>");"wayside_cross" == b.historic && (a += "Wegkreuz<br/>");"monument" == b.amenity && (a += "Denkmal<br/>");"memorial" == b.historic && (a += "Denkmal<br/>");"optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "Burg<br/>";break;case "palace":
            a += "Palast<br/>";break;case "stately":
            a += "Schloss<br/>";
            break;case "manor":
            a += "Herrenhaus<br/>";break;case "fortress":
            a += "Festung<br/>";break;case "castrum":
            a += "R\xF6misches Milit\xE4rlager<br/>";break;case "shiro":
            a += "Shiro<br/>";break;case "kremlin":
            a += "Kreml<br/>";break;default:
            a += "Schloss / Burg<br/>";} else a += "Schloss / Burg<br/>";"archaeological_site" == b.historic && (a += "Arch\xE4ologische Fundst\xE4tte<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "rock-cut":
            a += "Felsgrab<br/>";break;
        case "hypogeum":
            a += "Hypog\xE4um<br/>";break;case "war_grave":
            a += "Soldatenfriedhof<br/>";break;case "mausoleum":
            a += "Mausoleum<br/>";break;case "columbarium":
            a += "Kolumbarium<br/>";break;case "crypt":
            a += "Krypta<br/>";break;case "pyramid":
            a += "Pyramide<br/>";break;case "sarcophagus":
            a += "Sarkophag<br/>";break;case "vault":
            a += "Gruft<br/>";break;case "tombstone":
            a += "Grabstein<br/>";break;default:
            a += "Historische Grabst\xE4tte<br/>";} else a += "Historische Grabst\xE4tte<br/>";"accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\xFCfer<br/>");"administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\xF6rde<br/>");"architect" == b.office && (a += "Architekturb\xFCro<br/>");"association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");"physician" == b.office && (a += "Arzt<br/>");"camping" == b.office && (a += "Rezeption Campingplatz oder B\xFCro Freizeitpark<br/>");"company" == b.office && (a += "Sitz einer privaten Firma<br/>");"educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
    "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");"estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"forestry" == b.office && (a += "Forstamt<br/>");"foundation" == b.office && (a += "Gesch\xE4ftsstelle einer Stiftung<br/>");"government" == b.office && (a += "Beh\xF6rde / Regierungseinrichtung<br/>");"guide" == b.office && (a += "B\xFCro f\xFCr Touristenf\xFChrungen<br/>");"insurance" == b.office && (a += "Versicherungsb\xFCro<br/>");"it" == b.office && (a += "IT-Unternehmen<br/>");
    "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");"newspaper" == b.office && (a += "Zeitungsredaktion<br/>");"ngo" == b.office && (a += "B\xFCro einer Nichtregierungsorganisation<br/>");"notary" == b.office && (a += "Notar<br/>");"political_party" == b.office && (a += "B\xFCro einer politischen Partei<br/>");"quango" == b.office && (a += "B\xFCro einer halbstaatlichen Organisation<br/>");"realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
    "register" == b.office && (a += "Standesamt<br/>");"religion" == b.office && (a += "B\xFCro einer religi\xF6sen Instanz<br/>");"research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");"tax" == b.office && (a += "Finanzamt<br/>");"telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");"travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");"water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");"therapist" == b.office && (a += "Therapeut<br/>");"city" == b.place && (a += "Gro\xDFstadt<br/>");
    "town" == b.place && (a += "Stadt/Kleinstadt<br/>");"village" == b.place && (a += "Dorf<br/>");"continent" == b.place && (a += "Kontinent<br/>");"ocean" == b.place && (a += "Ozean</br>");"track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");"raceway" == b.highway && (a += "Motorsportbahn<br/>");"designated" == b.bicycle && (a += "Radweg<br/>");"path" == b.highway && (a += "Fu\xDFweg<br/>");"parking" == b.amenity && (a += "Parkplatz<br/>");"services" == b.highway && (a += "Rastst\xE4tte<br/>");"rest_area" == b.highway && (a += "Rastplatz<br/>");"turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");"service" == b.highway && (a += "Zufahrtsstra\xDFe / Erschlie\xDFungsweg<br/>");"motorway" == b.highway && (a += "Autobahn<br/>");"motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");"bridleway" == b.highway && (a += "Reitweg<br/>");"yes" == b.oneway && (a += "Einbahnstra\xDFe<br/>");"yes" == b.park_ride && (a += "Park and Ride<br/>");"unknown" == b.park_ride && (a += "Park and Ride<br/>");"bus" == b.park_ride && (a += "Park and Ride<br/>");"tram" == b.park_ride && (a += "Park and Ride<br/>");
    "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");"pedestrian" == b.highway && (a += "Fu\xDFg\xE4ngerzone<br/>");"street_lamp" == b.highway && (a += "Strassenlaterne<br/>");"traffic_signals" == b.highway && (a += "Ampel<br/>");"traffic_signals" == b.crossing && (a += "Fu\xDFg\xE4ngerampel<br/>");"speed_camera" == b.highway && (a += "Blitzer<br/>");"yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
    "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");"cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");
    "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");"buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");"fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");if ("charging_station" == b.amenity) {
        var a = a + "Ladestation / Stromtankstelle<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "F\xFCr Autos: Ja";break;case "no":
                    a += "F\xFCr Autos: Nein";break;default:
                    a += "F\xFCr Autos: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr Autos: Unbekannt<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "F\xFCr E-Bike: Ja";break;case "no":
                    a += "F\xFCr E-Bike: Nein";break;default:
                    a += "F\xFCr E-Bike: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr E-Bike: Unbekannt<br/>";"no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");"yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");"no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");"yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");"no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");"yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");"no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");"yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");"no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");"yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
        "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");"yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");"no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");"yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");"no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");"yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");"no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");"yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");"Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");"yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");"nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");"yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");"no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");"yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");"no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");"yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");"Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");"yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");"no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");"yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");"no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");"yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");"no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");"yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
        "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");"yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");"no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");"yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");"no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
        "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "Tunnel<br/>");if (b.bridge) switch (a += "Br\xFCcken-Typ: ", b.bridge) {case "swing":
            a += "Drehbr\xFCcke";break;case "aqueduct":
            a += "Historische Wasserpipeline";break;
        case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "boardwalk":
            a += "Bohlenweg";break;case "cantilever":
            a += "Auslegerbr\xFCcke";break;case "covered":
            a += "gedeckte Br\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "humpback":
            a += "Drehbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "low_water_crossing":
            a += "Irische Br\xFCcke";break;case "moveable":
            a += "Bewegliche Br\xFCcken";break;case "pontoon":
            a += "Schwimmbr\xFCcke";break;case "suspension":
            a += "H\xE4ngebr\xFCcke";
            break;case "trestle":
            a += "Trestle-Br\xFCcke";break;case "viaduct":
            a += "Viadukt";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "Drehbr\xFCcke";break;case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "submersible":
            a += "Senkbr\xFCcke";break;case "transporter":
            a += "Schwebef\xE4hre";break;case "retractable":
            a += "Schubbr\xFCcke";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";"social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");"assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");"outreach" == b.social_facility && (a += "Beratungsstelle<br/>");"workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
        "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");"food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");"hospice" == b.social_facility && (a += "Hospiz<br/>");
    }b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "Spirituosenladen<br/>");"bakery" == b.shop && (a += "B\xE4ckerei<br/>");"beverages" == b.shop && (a += "Getr\xE4nkehandel<br/>");
    "butcher" == b.shop && (a += "Fleischerei<br/>");"cheese" == b.shop && (a += "K\xE4sefachgesch\xE4ft<br/>");"chocolate" == b.shop && (a += "Schokoladenfachgesch\xE4ft<br/>");"coffee" == b.shop && (a += "Kaffeefachgesch\xE4ft<br/>");"confectionery" == b.shop && (a += "S\xFC\xDFwarenladen<br/>");"convenience" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"deli" == b.shop && (a += "Feinkostladen<br/>");"dairy" == b.shop && (a += "Milchladen<br/>");"farm" == b.shop && (a += "Hofladen<br/>");"greengrocer" == b.shop && (a += "Gem\xFCseh\xE4ndler<br/>");
    "grocery" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");"pasta" == b.shop && (a += "Pastagesch\xE4ft<br/>");"seafood" == b.shop && (a += "Fischfachgesch\xE4ft<br/>");"tea" == b.shop && (a += "Teefachgesch\xE4ft<br/>");"wine" == b.shop && (a += "Weinhandlung<br/>");"department_store" == b.shop && (a += "Kaufhaus<br/>");"general" == b.shop && (a += "Gemischtwarenhandlung<br/>");"kiosk" == b.shop && (a += "Kiosk<br/>");"mall" == b.shop && (a += "Einkaufszentrum<br/>");"supermarket" == b.shop && (a += "Supermarkt<br/>");"baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");"bag" == b.shop && (a += "Taschen und Koffer<br/>");"boutique" == b.shop && (a += "Boutique<br/>");"clothes" == b.shop && (a += "Bekleidung<br/>");"fabric" == b.shop && (a += "Textilgesch\xE4ft<br/>");"fashion" == b.shop && (a += "Fashion<br/>");"jewelry" == b.shop && (a += "Juwelier<br/>");"leather" == b.shop && (a += "Lederwaren<br/>");"shoes" == b.shop && (a += "Schuhfachgesch\xE4ft<br/>");"variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");"chemist" == b.shop && (a += "Drogerie<br/>");
    "cosmetics" == b.shop && (a += "Kosmetikfachgesch\xE4ft<br/>");"drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");"perfumery" == b.shop && (a += "Parf\xFCmerie<br/>");"erotic" == b.shop && (a += "Erotikhandel<br/>");"hairdresser" == b.shop && (a += "Friseur<br/>");"hearing_aids" == b.shop && (a += "H\xF6rger\xE4te<br/>");"herbalist" == b.shop && (a += "Kr\xE4uterhandel<br/>");"massage" == b.shop && (a += "Massagesalon<br/>");"medical_supply" == b.shop && (a += "Sanit\xE4tshaus<br/>");"optician" == b.shop && (a += "Optiker<br/>");
    "tattoo" == b.shop && (a += "T\xE4towierer<br/>");"bathroom_furnishing" == b.shop && (a += "Badm\xF6bel und -accessoires<br/>");"doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");"energy" == b.shop && (a += "Energiehandel<br/>");"florist" == b.shop && (a += "Blumengesch\xE4ft<br/>");"furnace" == b.shop && (a += "Ofenfachgesch\xE4ft<br/>");"garden_centre" == b.shop && (a += "Gartencenter<br/>");"gas" == b.shop && (a += "Fachgesch\xE4ft f\xFCr technische Gase<br/>");"glaziery" == b.shop && (a += "Glaserei<br/>");"hardware" == b.shop && (a += "Eisenwaren<br/>");"houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");"locksmith" == b.shop && (a += "Schl\xFCsseldienst<br/>");"paint" == b.shop && (a += "Farbenfachgesch\xE4ft<br/>");"trade" == b.shop && (a += "Baustoffhandel<br/>");"antiques" == b.shop && (a += "Antiquit\xE4ten<br/>");"bed" == b.shop && (a += "Betten- und Matratzengesch\xE4ft<br/>");"candles" == b.shop && (a += "Kerzengesch\xE4ft<br/>");"carpet" == b.shop && (a += "Teppichfachhandel<br/>");"curtain" == b.shop && (a += "Gardinenfachgesch\xE4ft<br/>");
    "furniture" == b.shop && (a += "M\xF6bel- und Einrichtungshaus<br/>");"interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");"kitchen" == b.shop && (a += "K\xFCchen<br/>");"window_blind" == b.shop && (a += "Jalousien und Roll\xE4den<br/>");"computer" == b.shop && (a += "Computer-Fachh\xE4ndler<br/>");"electronics" == b.shop && (a += "Elektronikmarkt<br/>");"hifi" == b.shop && (a += "Hifi-Fachh\xE4ndler<br/>");"mobile_phone" == b.shop && (a += "Handy-Shop<br/>");"radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
    "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\xE4ft<br/>");"bicycle" == b.shop && (a += "Fahrradfachgesch\xE4ft<br/>");"car" == b.shop && (a += "Autohaus<br/>");"car_repair" == b.shop && (a += "Autowerkstatt<br/>");"car_parts" == b.shop && (a += "Autoteilefachgesch\xE4ft<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\xFCstung<br/>";"fishing" == b.shop && (a += "Angelfachgesch\xE4ft<br/>");"free_flying" == b.shop && (a += "Fallschirmausr\xFCstung<br/>");"hunting" == b.shop && (a += "Jagdausr\xFCstung<br/>");
    "motorcycle" == b.shop && (a += "Motorradgesch\xE4ft<br/>");"outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");"sports" == b.shop && (a += "Sportgesch\xE4ft<br/>");"tyres" == b.shop && (a += "Reifenfachhandel<br/>");"water_sports" == b.shop && (a += "Wassersportbedarf<br/>");"art" == b.shop && (a += "Kunstladen<br/>");"craft" == b.shop && (a += "Kunsthandwerk<br/>");"frame" == b.shop && (a += "Bilderrahmengesch\xE4ft<br/>");"music" == b.shop && (a += "Musikgesch\xE4ft<br/>");"music_instrument" == b.shop && (a += "Musikhaus<br/>");"photo" == b.shop && (a += "Fotofachgesch\xE4ft<br/>");"video" == b.shop && (a += "Videothek<br/>");"video_games" == b.shop && (a += "Videospiele<br/>");"anime" == b.shop && (a += "Anime<br/>");"books" == b.shop && (a += "Buchhandlung<br/>");"gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");"newsagent" == b.shop && (a += "Zeitungsh\xE4ndler<br/>");"stationery" == b.shop && (a += "Schreibwaren<br/>");"ticket" == b.shop && (a += "Ticketshop<br/>");"copyshop" == b.shop && (a += "Kopierladen<br/>");"funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
    "laundry" == b.shop && (a += "Waschsalon / W\xE4scherei<br/>");"dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");"money_lender" == b.shop && (a += "Geldverleiher<br/>");"pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");"pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");"pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");"religion" == b.shop && (a += "Religi\xF6se Artikel<br/>");"beauty" == b.shop && (a += "Sch\xF6nheitssalon<br/>");"solarium" == b.shop && (a += "Solarium<br/>");"tobacco" == b.shop && (a += "Tabakwaren<br/>");
    "toys" == b.shop && (a += "Spielwaren<br/>");"travel_agency" == b.shop && (a += "Reiseb\xFCro<br/>");"market_hall" == b.shop && (a += "Markthalle<br/>");"vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");"weapons" == b.shop && (a += "Waffenladen<br/>");"lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");"fish" == b.pet && (a += "Aquaristik<br/>");"agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");"basket_maker" == b.craft && (a += "Korbmacher<br/>");"beekeeper" == b.craft && (a += "Imker<br/>");"blacksmith" == b.craft && (a += "Schmied<br/>");"brewery" == b.craft && (a += "Brauerei<br/>");"yes" == b.microbrewery && (a += "Hausbrauerei<br/>");"boatbuilder" == b.craft && (a += "Bootsbauer<br/>");"bookbinder" == b.craft && (a += "Buchbinder<br/>");"builder" == b.craft && (a += "Hausbau<br/>");"carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");"carpet_layer" == b.craft && (a += "Teppichleger<br/>");"caterer" == b.craft && (a += "Catering<br/>");"clockmaker" == b.craft && (a += "Uhrmacher<br/>");"confectionery" == b.craft && (a += "Konditorei<br/>");"dressmaker" == b.craft && (a += "Schneider<br/>");"electrician" == b.craft && (a += "Elektriker<br/>");"gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");"glaziery" == b.craft && (a += "Glaserei<br/>");"handicraft" == b.craft && (a += "Handwerkskunst<br/>");"hvac" == b.craft && (a += "K\xE4lteanlagenbauer f\xFCr L\xFCftungs-, Heizungs- und Klimatechnik<br/>");"insulation" == b.craft && (a += "W\xE4rmed\xE4mmung von Geb\xE4uden<br/>");"jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");"key_cutter" == b.craft && (a += "Schl\xFCsselmacher<br/>");"locksmith" == b.craft && (a += "Schl\xFCsseldienst<br/>");"metal_construction" == b.craft && (a += "Metallbauer<br/>");"optician" == b.craft && (a += "Optiker<br/>");"painter" == b.craft && (a += "Maler<br/>");"parquet_layer" == b.craft && (a += "Parkettverleger<br/>");"photographer" == b.craft && (a += "Fotograf<br/>");"photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");"plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");"plumber" == b.craft && (a += "Anlagenmechaniker Sanit\xE4r-, Heizungs- und Klimatechnik.<br/>");
    "pottery" == b.craft && (a += "T\xF6pferei<br/>");"rigger" == b.craft && (a += "Riggemacher (Takelage f\xFCr Segelschiffe)<br/>");"roofer" == b.craft && (a += "Dachdecker<br/>");"saddler" == b.craft && (a += "Sattler<br/>");"sailmaker" == b.craft && (a += "Segelmacher<br/>");"sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");"scaffolder" == b.craft && (a += "Ger\xFCstbauer<br/>");"sculptor" == b.craft && (a += "Bildhauer<br/>");"shoemaker" == b.craft && (a += "Schuhmacher<br/>");"stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
    "stonemason" == b.craft && (a += "Steinmetz<br/>");"sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");"sweep" == b.craft && (a += "Schornsteinfeger<br/>");"tailor" == b.craft && (a += "Schneider<br/>");"tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");"tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");"upholsterer" == b.craft && (a += "Polsterer<br/>");"watchmaker" == b.craft && (a += "Uhrmacher<br/>");"window_construction" == b.craft && (a += "Fensterbauer<br/>");"machines" == b.rental && (a += "Maschinenverleih<br/>");
    "car_rental" == b.amenity && (a += "Autoverleih<br/>");"allotments" == b.landuse && (a += "Schrebergarten<br/>");"basin" == b.landuse && (a += "Regenwasserr\xFCckhaltebecken<br/>");"brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");"commercial" == b.landuse && (a += "Industriegebiet<br/>");"construction" == b.landuse && (a += "Baugebiet<br/>");"farmland" == b.landuse && (a += "Ackerfl\xE4che<br/>");"farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");"forest" == b.landuse && (a += "Forst<br/>");"garages" == b.landuse && (a += "Garagenkomplex<br/>");"grass" == b.landuse && (a += "Rasenfl\xE4chen<br/>");"greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");"greenhouse_horticulture" == b.landuse && (a += "Gew\xE4chshaus-Fl\xE4che<br/>");"industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");"landfill" == b.landuse && (a += "M\xFClldeponie<br/>");"meadow" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"orchard" == b.landuse && (a += "Obstplantage<br/>");"plant_nursery" == b.landuse && (a += "Baumschule<br/>");"quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");"railway" == b.landuse && (a += "Gebiet f\xFCr Eisenbahnnutzung<br/>");"recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");"reservoir" == b.landuse && (a += "Wasserreservoir<br/>");"residential" == b.landuse && (a += "Wohngebiet<br/>");"retail" == b.landuse && (a += "Einkaufszentrum<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"village_green" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"vineyard" == b.landuse && (a += "Weinberg<br/>");"pond" == b.landuse && (a += "kleiner Teich<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"animal_keeping" == b.landuse && (a += "Weide, Paddock f\xFCr Tierhaltung<br/>");"yes" == b.entrance && (a += "Eingang zum Geb\xE4ude<br/>");"main" == b.entrance && (a += "Haupteingang<br/>");"service" == b.entrance && (a += "Hinterausgang f\xFCr Angestellte oder Zulieferer<br/>");"exit" == b.entrance && (a += "Ausgang des Geb\xE4udes<br/>");"emergency" == b.entrance && (a += "Notausgang<br/>");"bay" == b.natural && (a += "Bucht<br/>");"beach" == b.natural && (a += "Strand<br/>");"wood" == b.natural && (a += "nat\xFCrlicher Wald<br/>");
    "glacier" == b.natural && (a += "Gletscher<br/>");"cave_entrance" == b.natural && (a += "H\xF6hle<br/>");"spring" == b.natural && (a += "nat\xFCrliche Quelle<br/>");"waterfall" == b.natural && (a += "Wasserfall<br/>");"scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"wetland" == b.natural && (a += "Feuchtgebiet<br/>");"tree" == b.natural && (a += "Baum");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");"tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
    "heath" == b.natural && (a += "Heide<br/>");"moor" == b.natural && (a += "Hochmoor<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");"bare_rock" == b.natural && (a += "Nackter Fels<br/>");"scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");"volcano" == b.natural && (a += "Vulkan<br/>");"valley" == b.natural && (a += "Tal<br/>");"stone" == b.natural && (a += "Findling<br/>");"sea" == b.natural && (a += "Meer<br/>");"national_park" == b.boundary && (a += "Nationalpark<br/>");
    "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");"yes" == b.mountain_pass && (a += "Gebirgspass<br/>");"waterfall" == b.waterway && (a += "Wasserfall<br/>");"canal" == b.waterway && (a += "Kanal<br/>");"canal" == b.water && (a += "Kanal<br/>");"river" == b.waterway && (a += "Fluss<br/>");"river" == b.water && (a += "Fluss<br/>");"riverbank" == b.waterway && (a += "Fluss<br/>");"ditch" == b.waterway && (a += "Entw\xE4sserungsgraben<br/>");"stream" == b.waterway && (a += "Bach<br/>");"ferry" == b.route && (a += "F\xE4hrverbindung<br/>");"turning_point" == b.waterway && (a += "Wendestelle<br/>");if ("lake" == b.water || "water" == b.natural) a += "See<br/>";"cove" == b.water && (a += "kleine Bucht<br/>");"lagoon" == b.water && (a += "Lagune<br/>");"pond" == b.water && (a += "Teich<br/>");"reservoir" == b.water && (a += "Wasserreservoir<br/>");"oxbow" == b.water && (a += "Altwassersee<br/>");"lock" == b.water && (a += "Schleusenkammer<br/>");"moat" == b.water && (a += "Burggraben<br/>");"wastewater" == b.water && (a += "Kl\xE4ranlage<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");"boatyard" == b.waterway && (a += "Schiffswerft<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");"foot" == b.route && (a += "Wanderweg<br/>");"hiking" == b.route && (a += "Wanderweg<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "Informationstafel<br/>";break;case "map":
            a += "Informationstafel mit Karte<br/>";break;case "office":
            a += "Touristeninformation<br/>";break;case "terminal":
            a += "Informationsterminal<br/>";break;case "audioguide":
            a += "Audioguide<br/>";break;case "guidepost":
            a += "Wegweiser<br/>";break;case "tactile_map":
            a += "Blindenkarte 2D<br/>";break;case "tactile_model":
            a += "Blindenkarte 3D<br/>";break;case "route_marker":
            a += "Wegerkennungsmarker<br/>";break;default:
            a += "Informationstafel<br/>";} else a += "Informationstafel<br/>";"bicycle" == b.route && (a += "Radwanderweg<br/>");
    "mtb" == b.route && (a += "Mountainbikeroute<br/>");"horse" == b.route && (a += "Reitwanderweg<br/>");"coastline" == b.natural && (a += "K\xFCstenlinie<br/>");"cliff" == b.natural && (a += "Klippe<br/>");"dam" == b.waterway && (a += "Staudamm<br/>");"weir" == b.waterway && (a += "Wehr<br/>");"lock_gate" == b.waterway && (a += "Schleusentor<br/>");"yes" == b.lock && (a += "Schleuse<br/>");"sluice_gate" == b.waterway && (a += "Siel<br/>");"pumping_station" == b.man_made && (a += "Sch\xF6pfwerk<br/>");"groyne" == b.man_made && (a += "Buhne<br/>");"dyke" == b.man_made && (a += "Deich<br/>");"levee" == b.man_made && (a += "Deich<br/>");"watermill" == b.man_made && (a += "Wasserm\xFChle<br/>");"airfield" == b.military && (a += "Milit\xE4rflugplatz<br/>");"naval_base" == b.military && (a += "Marinest\xFCtzpunkt<br/>");"range" == b.military && (a += "Waffen\xFCbungsplatz<br/>");"military" == b.landuse && (a += "milit\xE4risch genutztes Gebiet<br/>");"training_area" == b.military && (a += "Truppen\xFCbungsplatz<br/>");"exclusion_zone" == b.military && (a += "milit\xE4risch genutztes Gebiet<br/>");"danger_area" == b.military && (a += "milit\xE4rische Gefahrenzone<br/>");"barracks" == b.military && (a += "Kaserne<br/>");"nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\xE4nde<br/>");"yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");"petroleum_well" == b.man_made && (a += "Erd\xF6lpumpe<br/>");"storage_tank" == b.man_made && (a += "Speichertank<br/>");"wastewater_plant" == b.man_made && (a += "Kl\xE4ranlage<br/>");"silo" == b.man_made && (a += "Silo<br/>");"water_tower" == b.man_made && (a += "Wasserturm<br/>");"windmill" == b.man_made && (a += "Windm\xFChle<br/>");"monitoring_station" == b.man_made && (a += "Messstation");"crane" == b.man_made && (a += "Kran");"lighthouse" == b.man_made && (a += "Leuchtturm");"beacon" == b.man_made && (a += "Leuchtfeuer");"breakwater" == b.man_made && (a += "Wellenbrecher");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");"lantern" == b.light_source && (a += "Strassenlaterne<br/>");"floodlight" == b.light_source && (a += "Flutlicht<br/>");"signal_lamp" == b.light_source && (a += "Signallicht<br/>");"aviation" == b.light_source && (a += "Befeuerung<br/>");"warning" == b.light_source && (a += "Warnlicht<br/>");if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "Elektrisch";break;case "incandescent":
            a += "strahlend";break;case "halogen":
            a += "Halogen";break;case "discharge":
            a += "Entladungslicht";break;case "metal-halide":
            a += "Halogen-Metalldampflampe";break;case "neon":
            a += "Neon";break;case "sodium":
            a += "Natriumdampflampe";
            break;case "high_pressure_sodium":
            a += "Hochdruck Natriumdampflampe";break;case "low_pressure_sodium":
            a += "Niedrigdruck Natriumdampflampe";break;case "fluorescent":
            a += "Fluoreszenzlampe";break;case "mercury":
            a += "Quecksilberlampe";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Lichtbogen";break;default:
            a += "Unbekannt";}"drinking_water" == b.amenity && (a += "Trinkwasser<br/>");"yes" == b.drinking_water && (a += "Trinkwasser<br/>");"works" == b.man_made ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {case "biomass":
            a += "Biogasanlage";break;case "biofuel":
            a += "Biogasanlage";break;case "biogas":
            a += "Biogasanlage";break;case "coal":
            a += "Kohlekraftwerk";break;case "oil":
            a += "\xD6lraffinerie";break;case "waste":
            a += "M\xFCllverbrennungsanlage";
            break;case "wind":
            a += "Windkraftwerk";break;case "solar":
            a += "Solarkraftwerk";break;case "hydro":
            a += "Wasserkraftwerk";break;case "tidal":
            a += "Gezeitenkraftwerk";break;case "wave":
            a += "Wellenkraftwerk";break;case "geothermal":
            a += "Geothermie";break;case "osmotic":
            a += "Osmosekraftwerk";break;case "nuclear":
            a += "Atomkraftwerk";break;default:
            a += "unbekannt<br/>";}"photovoltaic" == b.power_source && (a += "Solarkraftwerk");"line" == b.power && (a += "Hochspannungs-\xDCbertragungsleitung<br/>");"cable" == b.power && (a += "Untergrundkabel<br/>");
    "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");"plant" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"sub_station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"compensator" == b.power && (a += "Kompensator<br/>");"converter" == b.power && (a += "Konverter<br/>");"generator" == b.power && (a += "Generator<br/>");"heliostat" == b.power && (a += "Heliostat<br/>");"insulator" == b.power && (a += "Isulator<br/>");"busbar" == b.line && (a += "Sammelschiene<br/>");
    "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");"minor_line" == b.power && (a += "Nebenlinie<br/>");"pole" == b.power && (a += "Pfahl<br/>");"portal" == b.power && (a += "H-f\xF6rmiger Mast<br/>");"catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");"substation" == b.power && (a += "Umspannwerk<br/>");"switch" == b.power && (a += "Lastschalter<br/>");"terminal" == b.power && (a += "Terminal / Anschluss<br/>");"tower" == b.power && (a += "Hochspannungsleitungs<br/>");"transformer" == b.power && (a += "Nebenlinie<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "Poller, Pfosten<br/>";break;case "cycle_barrier":
            a += "Umlaufsperre, Dr\xE4ngelgitter<br/>";break;case "gate":
            a += "Tor, Schranke<br/>";break;case "chain":
            a += "Kette<br/>";break;case "lift_gate":
            a += "Schlagbaum<br/>";break;case "wall":
            a += "L\xE4rmschutzwand<br/>";break;case "toll_booth":
            a += "Mautstelle<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "Stacheldrahtzaun<br/>";break;case "wood":
                    a += "Holzzaun<br/>";break;case "chain_link":
                    a += "Maschendrahtzaun<br/>";break;case "electric":
                    a += "Weidezaun<br/>";break;case "railing":
                    a += "Gel\xE4nder<br/>";break;case "wire":
                    a += "einfacher Drahtzaun<br/>";break;case "metal":
                    a += "Metallzaun<br/>";break;case "pole":
                    a += "Holzpf\xE4hle<br/>";break;default:
                    a += "Zaun<br/>";}break;case "block":
            a += "Block<br/>";break;case "ditch":
            a += "Graben<br/>";break;case "border_control":
            a += "Grenzkontrolle<br/>";break;case "hedge":
            a += "Hecke<br/>";break;case "retaining_wall":
            a += "St\xFCtzmauer<br/>";break;case "cattle_grid":
            a += "Weiderost<br/>";break;case "horse_stile":
            a += "Zaun\xFCbertritt<br/>";break;default:
            a += "unbekannt<br/>";}"noise_barrier" == b.wall && (a += "L\xE4rmschutzwand<br/>");"retaining_wall" == b.designation && (a += "L\xE4rmschutzwand<br/>");"noise_barrier" == b.designation && (a += "L\xE4rmschutzwand<br/>");"surveillance" == b.man_made && (a += "\xDCberwachter Bereich<br/>");if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {case "aerodrome":
            a += "Flugplatz";break;case "apron":
            a += "Vorfeld";break;case "gate":
            a += "gate";break;case "helipad":
            a += "Hubschrauberlandeplatz";break;
        case "hangar":
            a += "Hangar";break;case "runway":
            a += "Start-/Landebahn";break;case "taxiway":
            a += "Rollweg";break;case "terminal":
            a += "Flughafengeb\xE4ude";break;default:
            a += "unbekannt<br/>";}"halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");"crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"level_crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"station" == b.railway && (a += "Bahnhof<br/>");"bus_station" == b.amenity && (a += "Busbahnhof<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");"rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));"tram" == b.railway && (a += "Stra\xDFenbahnlinie<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "F\xE4hrhafen<br/>";break;case "container":
            a += "Containerhafen<br/>";
            break;case "marina":
            "marina" != b.leisure && (a += "Jachthafen<br/>");break;case "navel_base":
            a += "Marine-Hafen<br/>";break;case "tanker":
            a += "Hafen f\xFCr \xD6ltanker<br/>";break;case "passenger":
            a += "Personenschifffahrt<br/>";break;case "bulk":
            a += "Sch\xFCttgut-Hafen<br/>";break;default:
            a += "Hafen<br/>";} else a += "Hafen<br/>";"marina" == b.leisure && (a += "Jachthafen<br/>");"wreck" == b.historic && (a += "Wrack<br/>");"animal_shelter" == b.amenity && (a += "Tierheim<br/>");"shelter" == b.animal && (a += "Tierheim<br/>");"horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");"yes" == b.animal_shelter && (a += "Tierheim<br/>");"dog" == b.animal_shelter && (a += "Tierheim<br/>");"cat" == b.animal_shelter && (a += "Tierheim<br/>");"animal_boarding" == b.amenity && (a += "Tierpension<br/>");"yes" == b.animal_boarding && (a += "Tierpension<br/>");"dog" == b.animal_boarding && (a += "Tierpension<br/>");"horse" == b.animal_boarding && (a += "Tierpension<br/>");"cat" == b.animal_boarding && (a += "Tierpension<br/>");"dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");"cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";"swimming" == b.animal && (a += "Badestelle f\xFCr Hunde<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\xFCtterungsstelle<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\xFCtterung<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
    "manger" == b.amenity && (a += "Krippe<br/>");"birdhouse" == b.man_made && (a += "Vogelhaus<br/>");"stork" == b.birds_nest && (a += "Storchennest<br/>");"nest_box" == b.amenity && (a += "Nistkasten<br/>");"wellness" == b.animal && (a += "Hundesalon<br/>");"cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";"cowshed" == b.building && (a += "Kuhstall<br/>");"sty" == b.building && (a += "Schweinestall<br/>");"barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
    "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\xE4ude<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";"milestone" == b.highway && (a += "Strassenkilometer<br/>");"market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");"tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");"event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");"pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";"leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");"evergreen" == b.wood && (a += "immergr\xFCn<br/>");
        "palm" == b.wood && (a += "Palmen<br/>");"nipa_palm" == b.wood && (a += "Nipapalmen<br/>");"eucalypt" == b.wood && (a += "Eukalypten<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\xE4chse<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\xF6\xDFe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";"manger" == b["feeding:type"] && (a += "Futterbeh\xE4lter: Futterraufe<br/>");"automated" == b["feeding:type"] && (a += "Automat<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "Tier: Schaaf<br/>";break;case "horse":
            a += "Tier: Pferd<br/>";break;case "cow":
            a += "Tier: Kuh<br/>";break;case "rabbit":
            a += "Tier: Kaninchen<br/>";break;case "bunny":
            a += "Tier: Hase<br/>";break;case "cat":
            a += "Tier: Katze </br>";break;case "swan":
            a += "Tier: Schwan </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";break;case "donkey":
            a += "Tier: Esel </br>";break;case "squirrel":
            a += "Tier: Eichh\xF6rnchen </br>";break;case "pig":
            a += "Tier: Schwein </br>";break;case "deer":
            a += "Tier: Reh </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";
            break;case "monkey":
            a += "Tier: Affe </br>";break;case "camel":
            a += "Tier: Kamel </br>";break;case "goat":
            a += "Tier: Ziege </br>";break;case "hamster":
            a += "Tier: Hamster </br>";break;case "alpaca":
            a += "Tier: Alpaka </br>";break;default:
            a += "Tiere: nicht bekannt<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "F\xFCttern mit: Heu</br>";break;case "grain":
            a += "F\xFCttern mit: Getreide</br>";break;case "corn":
            a += "F\xFCttern mit: Korn</*br>";break;default:
            a += "F\xFCttern mit: nicht bekannt</br>";}"volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");"volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");return a;
},
    fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\xFCtzte Landschaft/Gesch\xFCtztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\xFCtzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\xFCter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\xE4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = "Beschreibung: \"Standortausstattung\": Retentionsraum (gesetzlich gesch\xFCtztes \xDCberschwemmungsgebiet) <br/>"), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
    return a;
},
    fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");"paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");b.animal_keeping && (a += "Tiere: Perde<br/>");return a;
},
    fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\xE4ten<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");"yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");"yes" == b["monitoring:air_quality"] && (a += "Luftqualit\xE4t<br/>");return a;
},
    fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\xE4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\xE4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));return a;
},
    fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "Megalith<br/>";break;case "bigstone":
            a += "Findling<br/>";break;case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "fortification":
            a += "historischer Graben / Wall<br/>";break;default:
            a += "unbekannt<br/>";}return a;
},
    fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "Hunde erlaubt<br/>");"no" == b.dog && (a += "Hunde nicht erlaubt<br/>");b.stars && (a += b.stars + "Sterne<br/>");b.caravans && (a += "Wohnmobilstellpl\xE4tze<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";"yes" == b.washing_machine && (a += "Waschmaschinen<br/>");"yes" == b.dryer && (a += "Trockner<br/>");"yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");"reception" == b.camp_site && (a += "Reception vorhanden<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\xDFenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));"geology" == b.board_type && (a += "Geologische Informationen<br/>");"history" == b.board_type && (a += "Historische Informationen<br/>");"nature" == b.board_type && (a += "Informationen \xFCber Natur<br/>");"notice" == b.board_type && (a += "Allgemeine Information<br/>");"plants" == b.board_type && (a += "Informationen \xFCber Pflanzen<br/>");"wildlife" == b.board_type && (a += "Informationen \xFCber Wild<br/>");return a;
},
    fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Tickets<br/>";break;case "animal_feed":
            a += "Tierfutter<br/>";break;case "books":
            a += "B\xFCcher<br/>";break;case "candles":
            a += "Kerzen<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;case "condoms":
            a += "Kondome<br/>";break;case "drinks":
            a += "Getr\xE4nke<br/>";break;case "first_aid":
            a += "Erste Hilfe Artikel<br/>";break;
        case "fishing_tackle":
            a += "Angelequipment<br/>";break;case "flowers":
            a += "Blumen<br/>";break;case "ice_cream":
            a += "Eis<br/>";break;case "laundry_detergent":
            a += "Waschmittel<br/>";break;case "newspapers":
            a += "Zeitung<br/>";break;case "SIM_cards":
            a += "SIM-Karten<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeiten<br/>";break;case "parcel_pickup":
            a += "Paketstation<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfel<br/>";break;case "public_transport_tickets":
            a += "Tickets f\xFCr \xF6ffentliche Verkehrsmittel<br/>";
            break;case "parking_ticket":
            a += "Parkticket<br/>";break;case "sex_toys":
            a += "Sexspielzeug<br/>";break;case "stamps":
            a += "Briefmarken<br/>";break;case "toll":
            a += "Mauttickets<br/>";break;case "umbrellas":
            a += "Regenschirme<br/>";break;default:
            a += "Inhalt unbekannt<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));return a;
},
    fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;
                case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \xD6l<br/>"));return a;
},
    fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "Einwohnerzahl: " + d + "<br/>";
    } else a += "Einwohnerzahl " + b.population + "<br/>";1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");return a;
},
    fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];switch (c) {case "mechanical":
                c = "mechanisch";break;case "electronic":
                c = "elektronisch";break;case "pneumatic":
                c = "pneumatisch";break;case "electromechanic":
                c = "elektromechanisch";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "Luftschutz";break;case "tornado":
                c = "Tornado";break;case "storm":
                c = "Sturm";break;case "civil_defense":
                c = "Bev\xF6lkerungsschutz";break;case "fire":
                c = "Feuer";}a += "Nutzung: " + c + "<br/>";
    }b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "H\xF6rweite: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\xE4ten: " : a + "K\xFCche: ";"arabic" == b.cuisine && (c += "arabisch<br/>");"italian" == b.cuisine && (c += " italienisch<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinesisch<br/>");"greek" == b.cuisine && (c += " griechisch<br/>");"african" == b.cuisine && (c += " afrikanisch<br/>");"german" == b.cuisine && (c += " deutsch<br/>");"mexican" == b.cuisine && (c += " mexikanisch<br/>");"french" == b.cuisine && (c += " franz\xF6sisch<br/>");"indian" == b.cuisine && (c += " indisch<br/>");"iranian" == b.cuisine && (c += " iranisch<br/>");"lebanese" == b.cuisine && (c += " libanesisch<br/>");"thai" == b.cuisine && (c += " thail\xE4ndisch<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " t\xFCrkisch<br/>");"bavarian" == b.cuisine && (c += " bayrisch<br/>");"czech" == b.cuisine && (c += " tschechisch<br/>");"portuguese" == b.cuisine && (c += " portugiesisch<br/>");"spanish" == b.cuisine && (c += " spanisch<br/>");"japanese" == b.cuisine && (c += " japanisch<br/>");"fish" == b.cuisine && (c += " Fisch<br/>");"brazilian" == b.cuisine && (c += " brasilianisch<br/>");"asian" == b.cuisine && (c += " asiatisch<br/>");"mediterranean" == b.cuisine && (c += " mediterran<br/>");"seafood" == b.cuisine && (c += " Meeresfr\xFCchte<br/>");"ice_cream" == b.cuisine && (c += " Eiscrem<br/>");"burger" == b.cuisine && (c += " Fast Food<br/>");"frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");"" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Zufahrtsbeschr\xE4nkung durch Tide</br>");"yes" == b["access:swell"] && (a += "Zufahrtsbeschr\xE4nkung durch Schwell</br>");"yes" == b["access:ice"] && (a += "Zufahrtsbeschr\xE4nkung durch Eis</br>");b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");"no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");"yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\xF6mung</br>");b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\xE4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\xE4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
        var c = b.duration;"" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");"yes" == b.motorcar && (a += "Autos erlaubt <br/>");"no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");"no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");"yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");"yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");"no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");"no" == b.bicycle && (a += "Keine Fahrr\xE4der<br/>");"no" == b.bicycle && (a += "Fahrr\xE4der erlaubt<br/>");"yes" == b.hgv && (a += "LKW erlaubt <br/>");"no" == b.hgv && (a += "LKW nicht erlaubt <br/>");"yes" == b.foot && (a += "Fussg\xE4nger erlaubt <br/>");"no" == b.foot && (a += "Fussg\xE4nger nicht erlaubt <br/>");"yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");"no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");"yes" == b["ferry:cable"] && (a += "Seilf\xE4hre<br/>");
    }if (b["seamark:light:1:colour"]) {
        c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\xF6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\xF6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");c = b["fire_hydrant:diameter"];
        "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\xFCrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));c = b.water_volume;
        "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Typ \xDCberflurhydrant: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");"" == a && (a = "Keine Details vorhanden.");
    }return a;
},
    fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "Ampel mit Gr\xFCnpfeil<br/>");"no" == b["red_turn:right"] && (a += "Ampel ohne Gr\xFCnpfeil<br/>");b.bridge && (b.height && (a += "H\xF6he \xFCber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\xE4nge der Br\xFCcke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\xE4higkeit: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\xDFe<br/>");"yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\xDFe f\xFCr LKWs<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "Oberfl\xE4che: ";switch (c) {case "grass":
                a += "Gras<br/>";break;case "paved":
                a += "versiegelt<br/>";break;case "asphalt":
                a += "Asphalt<br/>";
                break;case "cobblestone":
                a += "Naturstein unbehauen<br/>";break;case "sett":
                a += "behauenes Steinpflaster<br/>";break;case "concrete":
                a += "Beton<br/>";break;case "unpaved":
                a += "ohne Stra\xDFenbelag<br/>";break;case "paving_stones":
                a += "Pflastersteine<br/>";break;case "compacted":
                a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";break;case "dirt":
                a += "unbefestigt<br/>";break;case "fine_gravel":
                a += "Splitt/Kies<br/>";break;case "grass_paver":
                a += "Rasengittersteine<br/>";break;case "gravel":
                a += "Schotter<br/>";
                break;case "earth":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "ground":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "metal":
                a += "Metall<br/>";break;case "mud":
                a += "Matsch, Morast<br/>";break;case "sand":
                a += "Sand<br/>";break;case "wood":
                a += "Holz<br/>";break;case "tartan":
                a += "Tartan- oder Kunststoffbelag<br/>";break;case "artificial_turf":
                a += "Kunstrasen<br/>";break;case "clay":
                a += "Ascheplatz<br/>";break;default:
                a += "unbekannt<br/>";}
    }"grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
    "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");"grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\xE4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");"grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\xE4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");"grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\xE4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\xE4nde unterscheidbar<br/>");"yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");"no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");"excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");"good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
    "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");"bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");"horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");"no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");"hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");"mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
    "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\xF6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\xF6glich. Eventuell sind die H\xE4nde f\xFCrs Gleichgewicht n\xF6tig. (Schwierigskeitstyp: 3)</br>");"alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\xF6tigt man die H\xE4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
    "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\xE4lle: Leicht bis m\xE4\xDFig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\xF6nnen n\xF6tig</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt flache Wurzeln und kleinere Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: loserer Untergrund m\xF6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\xE4den</br>Gef\xE4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\xF6tig. Hindernisse k\xF6nnen \xFCberrollt werden</br>");"2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt gr\xF6\xDFere Wurzeln und Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\xF6\xDFere Wurzeln und Steine</br>Hindernisse:  flache Abs\xE4tze und Treppen</br>Gef\xE4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\xF6tig.</br>");"3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\xF6\xDFeren Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  hohe Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\xF6tig.</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\xDFen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\xE4ufig loses Ger\xF6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\xF6tig.</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\xE4nde mit Gegenanstiegen, Ger\xF6llfeldern und Erdrutschen, \xF6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\xE4tzen und Hindernissen wie umgefallenen B\xE4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\xF6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\xF6tig.</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\xFCr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\xDFteils nur noch kletterbar</br>Hindernisse: Abs\xE4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\xE4nde braucht.</br>Gef\xE4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");"10" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
    "30" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");"50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \xFCberschritten werden.</br>");"100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \xFCberschritten werden.</br>");
    "no" == b.overtaking && (a += "\xDCberholverbot, Fahrzeuge d\xFCrfen nicht \xFCberholen !</br>");"yes" == b.noexit && (a += "Die Stra\xDFe endet hier, es handelt sich um eine Sackgasse</br>");"yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\xDFe, sie d\xFCrfen diese Stra\xDFe nur in eine Richtung befahren</br>");"designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\xDFe, derjenige, der sich auf dieser befindet, hat gegen\xFCber anderen Fahrzeugen die Vorfahrt!</br>");
    "end" == b.priority_road && (a += "Die Vorfahrtsstra\xDFe endet hier und die Regelung wird aufgehoben</br>");"emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\xE4llen zur Benuzung zur Verf\xFCgung steht</br>");"yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");"choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
    "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unbekannt";"yes" != c && (d = c);a += "Frauenparkpl\xE4tze (Anzahl: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "M\xF6gliche Sportart: Kegeln<br/>");
    "10pin" == b.sport && (a += "M\xF6gliche Sportart: Bowling<br/>");"american_football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"aikido" == b.sport && (a += "M\xF6gliche Sportart: Aikido<br/>");"archery" == b.sport && (a += "M\xF6gliche Sportart: Bogenschie\xDFen<br/>");"athletics" == b.sport && (a += "M\xF6gliche Sportart: Leichtathletik<br/>");"australian_football" == b.sport && (a += "M\xF6gliche Sportart: Australian Football<br/>");"base" == b.sport && (a += "M\xF6gliche Sportart: Objektspringen<br/>");
    "badminton" == b.sport && (a += "M\xF6gliche Sportart: Badminton<br/>");"baseball" == b.sport && (a += "M\xF6gliche Sportart: Baseball<br/>");"basketball" == b.sport && (a += "M\xF6gliche Sportart: Basketball<br/>");"beachvolleyball" == b.sport && (a += "M\xF6gliche Sportart: Beachvolleyball<br/>");"bmx" == b.sport && (a += "M\xF6gliche Sportart: BMX<br/>");"boules" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"boule" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"bowls" == b.sport && (a += "M\xF6gliche Sportart: Bowls<br/>");
    "boxing" == b.sport && (a += "M\xF6gliche Sportart: Boxen<br/>");"canadian_football" == b.sport && (a += "M\xF6gliche Sportart: Canadian Football<br/>");"canoe" == b.sport && (a += "M\xF6gliche Sportart: Paddeln<br/>");"chess" == b.sport && (a += "M\xF6gliche Sportart: Schach<br/>");"cliff_diving" == b.sport && (a += "M\xF6gliche Sportart: Klippenspringen<br/>");"climbing" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"climbing_adventure" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"cricket" == b.sport && (a += "M\xF6gliche Sportart: Cricket<br/>");"cricket_nets" == b.sport && (a += "M\xF6gliche Sportart: Cricket Netz<br/>");"croquet" == b.sport && (a += "M\xF6gliche Sportart: Croquet<br/>");"curling" == b.sport && (a += "M\xF6gliche Sportart: Curling<br/>");"cycling" == b.sport && (a += "M\xF6gliche Sportart: Radrennen, Radsport<br/>");"dog_racing" == b.sport && (a += "M\xF6gliche Sportart: Hunderennen<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"fencing" == b.sport && (a += "M\xF6gliche Sportart: Fechten<br/>");
    "equestrian" == b.sport && (a += "M\xF6gliche Sportart: Reiten<br/>");"football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"free_flying" == b.sport && (a += "M\xF6gliche Sportart: Freeflying<br/>");"gaelic_games" == b.sport && (a += "M\xF6gliche Sportart: Gaelic games<br/>");"golf" == b.sport && (a += "M\xF6gliche Sportart: Golf<br/>");"gymnastics" == b.sport && (a += "M\xF6gliche Sportart: Gymnastik<br/>");"hockey" == b.sport && (a += "M\xF6gliche Sportart: Hockey<br/>");"horseshoes" == b.sport && (a += "M\xF6gliche Sportart: Hufeisenwerfen<br/>");"horse_racing" == b.sport && (a += "M\xF6gliche Sportart: Pferderennen<br/>");"ice_stock" == b.sport && (a += "M\xF6gliche Sportart: Eisstockschie\xDFen<br/>");"judo" == b.sport && (a += "M\xF6gliche Sportart: Judo<br/>");"karting" == b.sport && (a += "M\xF6gliche Sportart: Kartfahren<br/>");"kitesurfing" == b.sport && (a += "M\xF6gliche Sportart: Kitesurfing<br/>");"korfball" == b.sport && (a += "M\xF6gliche Sportart: Korfball<br/>");"motor" == b.sport && (a += "M\xF6gliche Sportart: Motorsport<br/>");
    "multi" == b.sport && (a += "M\xF6gliche Sportart: Mehrfachsport<br/>");"obstacle_course" == b.sport && (a += "M\xF6gliche Sportart: Hindernislauf<br/>");"orienteering" == b.sport && (a += "M\xF6gliche Sportart: Orientierungslauf<br/>");"paddle_tennis" == b.sport && (a += "M\xF6gliche Sportart: Paddle-Tennis<br/>");"paragliding" == b.sport && (a += "M\xF6gliche Sportart: Gleitschirmfliegen<br/>");"Pelota" == b.sport && (a += "M\xF6gliche Sportart: Pelota<br/>");"rasquet" == b.sport && (a += "M\xF6gliche Sportart: Racquetball<br/>");
    "rowing" == b.sport && (a += "M\xF6gliche Sportart: Rudern<br/>");"rugby_league" == b.sport && (a += "M\xF6gliche Sportart: Rugby League<br/>");"rugby_union" == b.sport && (a += "M\xF6gliche Sportart: Rugby Union<br/>");"running" == b.sport && (a += "M\xF6gliche Sportart: Laufsport<br/>");"scuba_diving" == b.sport && (a += "M\xF6gliche Sportart: Sporttauchen<br/>");"shooting" == b.sport && (a += "M\xF6gliche Sportart: Sportschie\xDFen<br/>");"skating" == b.sport && (a += "M\xF6gliche Sportart: Eislaufsport<br/>");"skateboard" == b.sport && (a += "M\xF6gliche Sportart: Skateboard<br/>");"skiing" == b.sport && (a += "M\xF6gliche Sportart: Skifahren<br/>");"soccer" == b.sport && (a += "M\xF6gliche Sportart: Fu\xDFball<br/>");"surfing" == b.sport && (a += "M\xF6gliche Sportart: Surfen<br/>");"swimming" == b.sport && (a += "M\xF6gliche Sportart: Schwimmen<br/>");"table_tennis" == b.sport && (a += "M\xF6gliche Sportart: Tischtennis<br/>");"taekwondo" == b.sport && (a += "M\xF6gliche Sportart: Taekwondo<br/>");"team_handball" == b.sport && (a += "M\xF6gliche Sportart: Handball<br/>");
    "tennis" == b.sport && (a += "M\xF6gliche Sportart: Tennis<br/>");"toboggan" == b.sport && (a += "M\xF6gliche Sportart: Rodeln<br/>");"volleyball" == b.sport && (a += "M\xF6gliche Sportart: Volleyball<br/>");"water_ski" == b.sport && (a += "M\xF6gliche Sportart: Wasserski<br/>");"weightlifting" == b.sport && (a += "M\xF6gliche Sportart: Gewichtheben<br/>");"wrestling" == b.sport && (a += "M\xF6gliche Sportart: Ringen<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\xE4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\xE4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\xE4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\xE4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\xE4\xDFchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\xF6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\xE4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\xE4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\xE4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));"" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "Erzeugungsart: ";switch (b["generator:method"]) {case "combustion":
                a += "Verbrennung";break;case "thermal":
                a += "thermische Nutzung (z.B. Solarthermie)";break;case "pumping":
                a += "durch Pumpen (z.B. die Nutzung von Geothermie)";break;case "photovoltaic":
                a += "Photovoltaik";break;case "gasification":
                a += "Vergasung, danach Verbrennung";break;case "anaerobic_digestion":
                a += "Erzeugung von Biogas durch Verg\xE4rung";break;case "pyrolysis":
                a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
                break;case "fission":
                a += "Kernspaltung";break;case "fusion":
                a += "Kernfusion";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "Erzeugungsart: ";switch (b.power_source) {case "photovoltaic":
                a += "Photovoltaik";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");"wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");"francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");"steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");"heat_pump" == b["generator:type"] && (a += "Generatortyp: W\xE4rmepumpe<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");"steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");"combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\xD6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\xD6l-Entsorgung (Maschinen-, Alt-und Motor\xF6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\xFCnabf\xE4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\xDFenmaterial Entsorgung</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "Breite: " + b.width + " m<br/>");b.height && (a += "H\xF6he: " + b.height + " m<br/>");b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");b.maxheight && (a += "Maximalh\xF6he: " + b.maxheight + " m<br/>");b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");b.maxspeed && (a += "H\xF6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "Freik\xF6rperkultur<br/>");"yes" == b.ruins && (a += "Ruine<br/>");b.ele && (a += "H\xF6he \xFCber NN: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");"yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");"yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");"yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");"yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\xF6glich<br/>");"yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\xF6glich<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\xE4der werden gewaschen<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\xE4dern<br/>");"yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\xE4der k\xF6nnen geladen werden<br/>");"yes" == b.cafe && (a += "Kleine Caf\xE9-Ecke<br/>");"yes" == b.breakfast && (a += "Besonderes Fr\xFChst\xFCcksangebot<br/>");"yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");"yes" == b.indoor_seating && (a += "Sitzm\xF6glichkeiten im Innenbereich<br/>");"yes" == b.outdoor_seating && (a += "Sitzm\xF6glichkeiten im Au\xDFenbereich<br/>");"yes" == b.self_service && (a += "Selbstbedienungsb\xE4ckerei<br/>");"yes" == b.bakehouse && (a += "Backstube<br/>");"yes" == b.pastry_shop && (a += "Geb\xE4ck aus der Konditorei<br/>");"yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");"only" == b.fair_trade && (a += "fast ausschlie\xDFlich Fair-Trade-Produkte im Sortiment<br/>");"no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\xF6sung<br/>");"abused" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen die Misshandlung erlitten haben<br/>");"child" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Kinder<br/>");"disabled" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit k\xF6rperlicher oder geistiger Behinderung<br/>");"diseased" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Erkrankte Menschen<br/>");"drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Drogens\xFCchtige<br/>");"homeless" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Obdachlose<br/>");"juvenile" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Jugendliche und Teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit psychischen Problemen<br/>");"migrant" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit Migrationshintergrund<br/>");"orphan" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Waisen<br/>");"senior" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Senioren<br/>");"underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arme oder benachteiligte Menschen<br/>");"unemployed" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arbeitslose<br/>");"victim" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Opfer eines Verbrechens<br/>");
    return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "Geb\xE4udenfarbe: " + b["building:color"] + "</br>");b["building:height"] && (a += "Geb\xE4udenh\xF6he: " + b["building:height"] + " m</br>");b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");b["building:part"] && (a += "Geb\xE4udeteile: " + b["building:part"] + "</br>");b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "Dachh\xF6he: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "Geb\xE4udentyp: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \xFCberwacht"), "outdoor" == b.surveillance && (a += "Au\xDFenbereich wird \xFCberwacht"), "public" == b.surveillance && (a += "\xD6ffentliche \xDCberwachung"), "camera" == b["surveillance:type"] && (a += "\xDCberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\xDCberwachungstyp: W\xE4chter"), "ALPR" == b["surveillance:type"] && (a += "\xDCberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Geb\xE4ude"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\xE4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\xF6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\xF6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "Typ: Kl\xF6sterliche Gemeinschaft (monastery)<br/>";break;case "convent":
            a += "Typ: Bettelm\xF6nch Gemeinschaft (convent)<br/>";break;case "canonry":
            a += "Typ: Kanonikat (canonry)<br/>";break;case "commandry":
            a += "Typ: Milit\xE4r gef\xFChrt (commandry)<br/>";break;case "hermitage":
            a += "Typ: Einsiedelei (hermitage)<br/>";break;default:
            a += "Typ: unbekannt<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\xE4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\xF6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\xF6ser Rang: Erzabtei<br/>"));"yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");"yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "Religion: animistisch<br/><br/>";break;case "bahai":
            a += "Religion: bahai<br/>";break;case "buddhist":
            a += "Religion: buddhistisch<br/>";break;case "christian":
            a += "Religion: christlich<br/>";break;case "hindu":
            a += "Religion: hinduistisch<br/>";break;case "IglesiaNiCristo":
            a += "Religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "Religion: jain<br/>";break;case "jewish":
            a += "Religion: j\xFCdisch<br/>";break;case "multifaith":
            a += "Religion: pluralistisch<br/>";break;case "muslim":
            a += "Religion: muslimisch<br/>";
            type += "Moschee<br/>";break;case "pagan":
            a += "Religion: heidnisch<br/>";break;case "pastafarian":
            a += "Religion: pastafarisch<br/>";break;case "scientologist":
            a += "Religion: scientologisch<br/>";break;case "shinto":
            a += "Religion: schintoistisch<br/>";break;case "sikh":
            a += "Religion: sikh<br/>";break;case "spiritualist":
            a += "Religion: spiritistisch<br/>";break;case "taoist":
            a += "Religion: taoistisch<br/>";break;case "unitarian":
            a += "Religion: unitarian<br/>";break;case "yazidi":
            a += "Religion: yazidi<br/>";break;
        case "zoroastrian":
            a += "Religion: zoroastrisch<br/>";break;default:
            a += "Religion: unbekannt<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";break;case "baptist":
            a += "Konfession: Baptisten<br/>";break;case "catholic":
            a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";break;case "roman_catholic":
            a += "Konfession: R\xF6misch-Katholische Kirche<br/>";break;case "old_catholic":
            a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
            break;case "greek_catholic":
            a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\xFCr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";break;case "evangelical":
            a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";break;case "jehovahs_witness":
            a += "Konfession: Zeugen Jehovas<br/>";break;case "lutheran":
            a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
            break;case "mennonite":
            a += "Konfession: Mennoniten<br/>";break;case "messianic_jewish":
            a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";break;case "methodist":
            a += "Konfession: Methodist Church (engl. Methodism)<br/>";break;case "mormon":
            a += "Konfession: Mormonen<br/>";break;case "new_apostolic":
            a += "Konfession: Neuapostolische Kirche<br/>";break;case "orthodox":
            a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";break;case "greek_orthodox":
            a += "Konfession: Griechisch-Orthodox<br/>";
            break;case "coptic_orthodox":
            a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \xC4gyptens.<br/>";break;case "pentecostal":
            a += "Konfession: Pfingstbewegung<br/>";break;case "presbyterian":
            a += "Konfession: Presbyterianische Kirchen<br/>";break;case "protestant":
            a += "Konfession: Evangelische Kirchen<br/>";break;case "quaker":
            a += "Konfession: Qu\xE4ker<br/>";break;case "reformed":
            a += "Konfession: Evangelisch-reformierte<br/>";break;case "russian_orthodox":
            a += "Konfession: Russisch-Orthodox<br/>";
            break;case "seventh_day_adventist":
            a += "Konfession: Siebenten-Tags-Adventisten<br/>";break;case "christian_community":
            a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\xE4ndige Kultusgemeinschaft versteht.<br/>";break;case "adventist":
            a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";break;case "alliance":
            a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
            break;case "assemblies_of_god":
            a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";break;case "apostolic":
            a += "Konfession: Apostolische Kirche<br/>";break;case "armenian_apostolic":
            a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";break;case "assyrian":
            a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\xF6llig eigenst\xE4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
            break;case "christ_scientist":
            a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";break;case "church_of_scotland":
            a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201Ethe Kirk\u201C genannt.<br/>";break;case "czechoslovak_hussite":
            a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\xF6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
            break;case "dutch_reformed":
            a += "Konfession: Niederl\xE4ndisch-reformierte Kirche, (einschlie\xDFlich NGK und \xE4hnliche Kirchen in S\xFCdafrika)<br/>";break;case "exclusive_brethren":
            a += "Konfession: Exclusive Brethren<br/>";break;case "foursquare":
            a += "Konfession: International Church of the Foursquare Gospel<br/>";break;case "kimbanguist":
            a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\xE4ngige, christliche Kirche.<br/>";break;case "living_waters_church":
            a += "Konfession: Living Waters Christian Church<br/>";
            break;case "mariavite":
            a += "Konfession: Mariavitismus<br/>";break;case "maronite":
            a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\xF6mischen Papst als Oberhaupt anerkennt.<br/>";break;case "moravian":
            a += "Konfession: Herrnhuter Br\xFCdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\xFCder-Unit\xE4t, engl. Moravian Church) ist eine aus der b\xF6hmischen Reformation herkommende \xFCberkonfessionell-christliche Glaubensbewegung.<br/>";
            break;case "nazarene":
            a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";break;case "nondenominational":
            a += "Konfession: Nondenominational Christianity<br/>";break;case "old_believers":
            a += "Konfession: Altorthodoxe, (h\xE4ufiger Altgl\xE4ubige) ist eine Sammelbezeichnung f\xFCr religi\xF6se Str\xF6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";break;case "polish_catholic":
            a += "Konfession: Polnisch-Katholische Kirche<br/>";
            break;case "salvation_army":
            a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\xE4gter sozialer T\xE4tigkeit.<br/>";break;case "santo_daime":
            a += "Konfession: Santo Daime, ist einer synkretistischen religi\xF6se Bewegung aus Brasilien.<br/>";break;case "serbian_orthodox":
            a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";break;case "spiritism":
            a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
            break;case "united":
            a += "Konfession: United Church of Canada, ist die zweitgr\xF6\xDFte Kirche in Kanada.<br/>";break;case "united_church_of_christ":
            a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";break;case "united_free_church_of_scotland":
            a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";break;case "united_methodist":
            a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
            break;case "united_reformed":
            a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\xDFbritannien.<br/>";break;case "uniting":
            a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\xF6\xDFte christliche Denomination in Australien.<br/>";break;case "church_of_sweden":
            a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";break;case "mission_covenant_church_of_sweden":
            a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";break;case "alternative":
            a += "Konfession: alternative<br/>";break;case "ashkenazi":
            a += "Konfession: ashkenazi<br/>";break;case "buchari":
            a += "Konfession: buchari<br/>";break;case "conservative":
            a += "Konfession: conservative<br/>";break;case "egalitarian":
            a += "Konfession: egalitarian<br/>";break;case "hasidic":
            a += "Konfession: hasidic<br/>";break;case "humanistic":
            a += "Konfession: humanistic<br/>";break;case "kabbalah":
            a += "Konfession: kabbalah<br/>";break;case "kabbalistic":
            a += "Konfession: kabbalistic<br/>";break;case "karaite":
            a += "Konfession: karaite<br/>";break;case "liberal":
            a += "Konfession: liberal<br/>";break;case "lubavitch":
            a += "Konfession: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "Konfession: lubavitch_messianic<br/>";break;case "mizrachi_baghdadi":
            a += "Konfession: mizrachi_baghdadi<br/>";break;case "mizrachi_chida":
            a += "Konfession: mizrachi_chida<br/>";break;case "mizrachi_jerusalemite":
            a += "Konfession: mizrachi_jerusalemite<br/>";
            break;case "mizrachi_livorno":
            a += "Konfession: mizrachi_livorno<br/>";break;case "mizrachi_moroccan":
            a += "Konfession: mizrachi_moroccan<br/>";break;case "modern_orthodox":
            a += "Konfession: modern_orthodox<br/>";break;case "neo_orthodox":
            a += "Konfession: neo_orthodox<br/>";break;case "nondenominational":
            a += "Konfession: nondenominational<br/>";break;case "orthodox":
            a += "Konfession: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "Konfession: orthodox_ashkenaz<br/>";break;case "orthodox_sefard":
            a += "Konfession: orthodox_sefard<br/>";
            break;case "progressive":
            a += "Konfession: progressive<br/>";break;case "reconstructionist":
            a += "Konfession: reconstructionist<br/>";break;case "reform":
            a += "Konfession: reform<br/>";break;case "renewal":
            a += "Konfession: renewal<br/>";break;case "samaritan":
            a += "Konfession: samaritan<br/>";break;case "sefardi":
            a += "Konfession: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "Konfession: sefardi_amsterdam<br/>";break;case "sefardi_london":
            a += "Konfession: sefardi_london<br/>";break;case "traditional":
            a += "Konfession: traditional<br/>";
            break;case "ultra_orthodox":
            a += "Konfession: ultra_orthodox<br/>";break;case "unaffiliated":
            a += "Konfession: unaffiliated<br/>";break;case "yemenite":
            a += "Konfession: yemenite<br/>";break;case "yemenite_baladi":
            a += "Konfession: yemenite_baladi<br/>";break;case "yemenite_shami":
            a += "Konfession: yemenite_shami<br/>";break;case "ahmadiya":
            a += "Konfession: ahmadiya<br/>";break;case "alaouite":
            a += "Konfession: alaouite<br/>";break;case "druze":
            a += "Konfession: druze<br/>";break;case "ibadi":
            a += "Konfession: ibadi<br/>";
            break;case "ismaili":
            a += "Konfession: ismaili<br/>";break;case "shia":
            a += "Konfession: shia<br/>";break;case "sunni":
            a += "Konfession: sunni<br/>";break;case "nichiren":
            a += "Konfession: nichiren<br/>";break;case "jodo_shinshu":
            a += "Konfession: jodo_shinshu<br/>";break;case "jodo_shu":
            a += "Konfession: jodo_shu<br/>";break;case "vajrayana":
            a += "Konfession: vajrayana<br/>";break;case "shingon_shu":
            a += "Konfession: shingon_shu<br/>";break;case "zen":
            a += "Konfession: zen<br/>";break;case "thai_mahanikaya":
            a += "Konfession: thai_mahanikaya<br/>";
            break;case "thai_thammayut":
            a += "Konfession: thai_thammayut<br/>";break;case "asatru":
            a += "Konfession: asatru<br/>";break;case "celtic":
            a += "Konfession: celtic<br/>";break;case "greco-roman":
            a += "Konfession: greco-roman<br/>";break;case "wicca":
            a += "Konfession: wicca<br/>";break;case "irani":
            a += "Konfession: irani<br/>";break;case "parsi":
            a += "Konfession: parsi<br/>";break;default:
            a += "unbekannt<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
            break;case "BSCM":
            a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "Ordensgemeinschaft (CO): Oratorians<br/>";break;case "CMC":
            a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "Ordensgemeinschaft (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "Ordensgemeinschaft (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
            break;case "FMM":
            a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "Ordensgemeinschaft (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
            break;case "OCD":
            a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";break;case "OFM":
            a += "Ordensgemeinschaft (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";break;case "OMI":
            a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "Ordensgemeinschaft (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
            break;case "OSSS":
            a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";break;case "PSDP":
            a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "Ordensgemeinschaft (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "Ordensgemeinschaft (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "Ordensgemeinschaft (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";break;case "SSF":
            a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unbekannt<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "../MapsBundle/Resources/public/js/c4g-maps-utils.js":
/*!***********************************************************!*\
  !*** ../MapsBundle/Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************************/
/*! exports provided: utils */
/*! exports used: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "../MapsBundle/Resources/public/js/c4g-maps-control-zoomlevel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__ = __webpack_require__(/*! ./c4g-maps-popup-info-de */ "../MapsBundle/Resources/public/js/c4g-maps-popup-info-de.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};





(function ($, c4g) {
  'use strict';

  /**
   * c4g-Maps utility functions
   */

  c4g.maps.utils = $.extend(c4g.maps.utils, {
    /**
     *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
     *
     *  @param    {string}    the string to capitalize
     *
     *  @return   {string}    the capitalized string
     */
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    /**
     * Generate an unique id.
     *
     * The id is 9 characters long and prefixed with an underscore.
     *
     * @return  {string}  The generated id.
     */
    getUniqueId: function getUniqueId() {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Encode input strings for GeoJSON-Objects properly,
     * so they will not break the Code.
     * Transforms:
     *   \ -> \\;
     *   " -> '';
     *   Ä -> &Auml;
     *   ä -> &auml;
     *   Ö -> &Ouml;
     *   ö -> &ouml;
     *   Ü -> &Uuml;
     *   ü -> &uuml;
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }

      output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

      return output;
    }, // end of encodeGeoJsonProperty()

    /**
     * Decode input strings for GeoJSON-Objects properly,
     * so they will be displayed correctly.
     * Transforms:
     *   \\     -> \;
     *   ''     -> ";
     *   &Auml; -> Ä
     *   &auml; -> ä
     *   &Ouml; -> Ö
     *   &ouml; -> ö
     *   &Uuml; -> Ü
     *   &uuml; -> ü
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }
      if (typeof input !== "string") {
        input = input + "";
      }

      output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

      return output;
    }, // end of decodeGeoJsonProperty()

    /**
     * Create or replace an URL-parameter.
     *
     * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
     * will be applied as "hash-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps#param
     * Note, that already existing "hash-parameters" will be overriden,
     * whereas existing "GET-parameters" stay untouched.
     *
     * If `opt_getKey` is set, it will be applied as "GET-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps?opt_getKey=param
     * If the key described by `opt_getKey` is already existing, its value will be overriden,
     * otherwise the key-value-pair will be appended appropriatly.
     * Already existing "hash-parameters" will stay untouched.
     *
     * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
     * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
     *
     * @param  {string}                    param        [description]
     * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
     * @param  {undefined|boolean}         opt_execute  Default: `undefined`
     */
    setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
      var link, searchParam, paramReplaced, i;

      if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
        return false;
      }

      link = location.origin + location.pathname;

      if (!opt_getKey) {
        // use hash-parameter
        if (opt_execute) {
          location.hash = param;
          return true;
        }
        link += location.search + '#' + param;
      } else {
        // use GET-parameter
        if (location.search) {
          // there are already search-parameters
          paramReplaced = false;
          opt_getKey = opt_getKey.toLowerCase();
          // replace parameter if already existent
          searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
            if (key === opt_getKey) {
              paramReplaced = true;
              return key + '=' + param;
            }
            return match;
          });
          // otherwise append as new parameter
          if (!paramReplaced) {
            searchParam += '&' + opt_getKey + '=' + param;
          }
        } else {
          // this will be the only search-parameter in the URL
          searchParam = '?' + opt_getKey + '=' + param;
        }
        if (opt_execute) {
          location.search = searchParam;
          return true;
        }
        link += searchParam + location.hash;
      }

      return link;
    }, // end of setUrlParam()

    /**
     * Get search or hash URL-parameter as string.
     *
     * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
     * otherwise it will search for a GET-parameter and return its value.
     *
     * If a parameter is not existent, or empty, an empty string will be returned.
     *
     * @param   {undefined|string}  opt_getKey  Default: `undefined`
     *
     * @return  {string}                        The found parameter.
     */
    getUrlParam: function getUrlParam(opt_getKey) {
      var param, regEx;

      if (!opt_getKey) {
        param = location.hash.substring(1);
      } else {
        if (!location.search) {
          param = '';
        } else {
          regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
          param = regEx.exec(location.search);
          param = param ? param[1] : '';
        }
      }

      return param;
    }, // end of getUrlParam()

    /**
     * Delta-encode an array of numbers.
     * Note that the array will be sorted (lowest to highest)
     * before encoding.
     *
     * So after the encoding the first value of the output contains
     * the smallest number of the set and each following number just
     * represents the offset to its previous neighbor.
     *
     * This is mostly efficient for high numbers, that are "close to each other".
     *
     * Example:
     *   [1337, 11, 101, 123, 96, 69, 42, 42]
     *   will be sorted
     *   [11, 42, 42, 69, 96, 101, 123, 1337]
     *   and encoded to
     *   [11, 31, 0, 27, 27, 5, 22, 1214]
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaEncode: function deltaEncode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }
      if (arrInput.length === 1) {
        return arrInput;
      }

      arrInput.sort(function (a, b) {
        return a - b;
      });

      arrOutput = [];
      arrOutput[0] = arrInput[0];
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = arrInput[i] - arrInput[i - 1];
      }

      return arrOutput;
    }, // end of deltaEncode()

    /**
     * Decode a delta-encoded array.
     * See `deltaEncode` function for more detailed information.
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaDecode: function deltaDecode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }

      arrOutput = [];
      arrOutput[0] = parseInt(arrInput[0], 10);
      if (isNaN(arrInput[0])) {
        return [];
      }
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
        if (isNaN(arrOutput[i])) {
          return [];
        }
      }

      return arrOutput;
    }, // end of deltaDecode()

    /**
     * Check and call functions in `arrHookFunctions` with given `parameters`.
     *
     * @param   {array<function>}   arrHookFunctions  [description]
     * @param   {mixed}             parameters        [description]
     */
    callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
      var j;

      if (arrHookFunctions && arrHookFunctions.length > 0) {
        for (j = 0; j < arrHookFunctions.length; j += 1) {
          if (typeof arrHookFunctions[j] === 'function') {
            arrHookFunctions[j](parameters);
          }
        }
      }
    }, // end of "callHookFunctions()"

    /**
     * Convert a hex-formated color value into rgba()-format.
     *
     * @param   {string|number}  hex          [description]
     * @param   {string|number}  opt_opacity  [description]
     *
     * @return  {string}                      [description]
     */
    getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

      var bigint, r, g, b, a;

      bigint = parseInt(hex, 16);
      if (opt_opacity && opt_opacity.value) {
        opt_opacity.value = parseInt(opt_opacity.value);
      }

      if (opt_opacity && typeof opt_opacity !== 'number') {
        if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
          opt_opacity = opt_opacity.value;
        } else {
          opt_opacity = 100;
        }
      }

      r = bigint >> 16 & 255;
      g = bigint >> 8 & 255;
      b = bigint & 255;
      a = opt_opacity ? opt_opacity / 100 : 1;
      if (opt_array) {
        return [r, g, b, a];
      }

      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    },

    /**
     * Reduce a defined style, to a simpler version.
     *
     * The reduced style is the first style of the defined styleset,
     * with a 1px thick stroke and a circle with a 5px radius.
     *
     * This can be used to display additional geometries with a main-geometry,
     * without having to define a whole new style.
     *
     * @param   {number|string}           styleId  [description]
     *
     * @return  {array<ol.style.Style>}            [description]
     */
    reduceStyle: function reduceStyle(styleId) {
      var style, reducedStyle, fillStyle, strokeStyle;

      if (!c4g.maps.locationStyles[styleId] || !c4g.maps.locationStyles[styleId].style) {
        return [];
      }

      style = c4g.maps.locationStyles[styleId].style()[0];

      fillStyle = style.getFill();
      strokeStyle = style.getStroke();
      strokeStyle.setWidth(1);

      reducedStyle = new ol.style.Style({
        image: new ol.style.Circle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: 5
        }),
        // text: style.getText(),
        stroke: strokeStyle,
        fill: fillStyle
      });

      return [reducedStyle];
    }, // end of "reduceStyle"

    /**
     * Measure the dimensions of the given geometry.
     *
     * If the geometry is a `LineString` the function will measure its length,
     * is it a `Polygon` it will measure the acreage,
     * otherwise it will return `0`.
     *
     * If the optional `opt_forceLineMeasure` parameter is `true`
     * and the geometry is a `Polygon` it will measure its perimeter instead
     * of its acreage.
     *
     * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
     * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
     *
     * @return  {array<string>|number}                                       [description]
     */
    measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
      var value, sphere, coordinates, coord1, coord2, result, i;

      if (!geometry) {
        return false;
      }

      //sphere = new ol.Sphere(6378137);
      result = {};

      if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

        coordinates = geometry.getCoordinates();
        if (geometry instanceof ol.geom.Polygon) {
          coordinates = coordinates[0];
        }
        value = 0;
        for (i = 0; i < coordinates.length - 1; i += 1) {
          coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
          coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
          value += ol.sphere.getDistance(coord1, coord2, 6378137);
        }
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 1000) {
          result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else if (geometry instanceof ol.geom.Polygon) {
        //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
        //coordinates = geometry.getLinearRing(0).getCoordinates();
        value = Math.abs(ol.sphere.getArea(geometry));
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        value = Math.PI * Math.sqrt(value);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (result.rawValue > 10000) {
          result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else {
        result = 0;
      }

      return result;
    },

    /**
     * Calculate extent for an array of geometries.
     *
     * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
     *
     * @return  {ol.Extent}                                      [description]
     */
    getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
      var extentSource;

      if (!arrGeometries) {
        console.warn('Geometries missing for extent calculation');
        return false;
      }

      extentSource = new ol.source.Vector();
      extentSource.addFeatures(arrGeometries);

      return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
    }, // end of getExtentForGeometries()

    /**
     * Fit view of `map` to a given array of `extents`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {object}     extents                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {integer}    opt_animationDuration  [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
      var view, padding, extent, key;

      if (!extents || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }
      //extent = ol.extent.createEmpty();

      for (key in extents) {
        if (extents.hasOwnProperty(key)) {
          if (typeof extent === "undefined") {
            extent = extents[key];
          } else {
            ol.extent.extend(extent, extents[key]);
          }
        }
      }

      this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
    }, // end of fitToExtents

    /**
     * Fit view of `map` to a given `extent`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {ol.Extent}  extent                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {array}      opt_padding            [description]
     * @param   {integer}    opt_animationDuration  [description]
     * @param   {integer}    opt_minZoom            [description]
     * @param   {integer}    opt_maxZoom            [description]
     * @param   {integer}    opt_minResolution      [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
      var view, padding, fitOptions;

      if (!extent || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }

      view = map.getView();

      fitOptions = {
        'padding': opt_padding || [25, 25, 25, 25]
      };

      if (opt_minResolution && opt_minResolution > 0) {
        fitOptions.minResolution = opt_minResolution;
      }

      if (opt_minZoom && opt_minZoom >= 0) {
        fitOptions.minZoom = opt_minZoom;
      }

      if (opt_maxZoom && opt_maxZoom >= 0) {
        fitOptions.maxZoom = opt_maxZoom;
      }

      // animate the "fitting" when a duration is given and its greater than 0
      if (opt_animationDuration && opt_animationDuration > 0) {
        view.animate({
          start: +new Date(),
          duration: opt_animationDuration,
          resolution: view.getResolution(),
          center: [0, 0]
          //rotation: Math.PI
        });
        // map.beforeRender(
        //     ol.animation.pan({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       source: view.getCenter()
        //     }),
        //     ol.animation.zoom({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       resolution: view.getResolution()
        //     })
        // );
      }

      try {
        view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
        //view.fit(extent, map.getSize());
        //view.setZoom(view.getZoom()-1);
        return true;
      } catch (e) {
        return false;
      }
    }, // end of fitToExtent()

    /**
     * Convenience function to run all placeholder functions at once.
     *
     * @param   {string}                      strInput   [description]
     * @param   {ol.Feature}                  feature    [description]
     * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
     *
     * @return  {string}                                 [description]
     */
    replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
      var strOutput;

      // only check the first two parameters as they will be used by all placeholder-functions
      // -> for performance
      if (!strInput || !feature) {
        return strInput;
      }

      strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
      strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
      strOutput = this.replaceAttributePlaceholders(strOutput, feature);

      return strOutput;
    }, // end of replaceAllPlaceholders()

    /**
     * Replace every occurance of `${FNfunctionName}`, in `strInput`,
     * with the result of `window.functionName(feature, style)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     * Style will be taken either from the feature, or the layer.
     *
     * @param   {string}          strInput  [description]
     * @param   {ol.Feature}      feature   [description]
     * @param   {ol.layer.Layer}  layer     [description]
     *
     * @return  {string}                    [description]
     */
    replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
      var strOutput;

      if (!strInput || !feature || !layer) {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
        var style;

        // check if function exists
        if (typeof __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__[functionName](feature, style);
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceFunctionPlaceholders()

    /**
     * Replace placeholders, in `strInput`, for variables set by the geoEditor.
     * Valid placeholders are: ([key] represents the stringname of the variables key)
     *   `${EL[key]}`   =>  Label for the variable
     *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
     *   `${EV[key]}`   =>  Value of the variable
     *   `${EVV[key]}`  =>  Same as `${EV[key]}`
     *
     * If no appropriate value can be found for a placeholder
     * it will simply be removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
        var editorVars, i;

        // check if feature has editorVars
        if (feature.get('editorVars')) {
          editorVars = feature.get('editorVars');
          // search for editorVar with key == evKey
          for (i = 0; i < editorVars.length; i += 1) {
            if (editorVars[i].key === evKey) {
              // if type is 'EVL' display label only if a value is set too
              if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
                return editorVars[i].label;
              } else {
                return editorVars[i].value;
              }
            }
          }
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceEditorVarsPlaceholders()

    /**
     * Replace every occurance of `${attr}`, in `strInput`,
     * with the result of `feature.get(attr)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
        return feature.get(attr) || '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceAttributePlaceholders()

    objectToArray: function objectToArray(object) {
      if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
        object = Object.keys(object).map(function (key) {
          return object[key];
        });
      }
      return object;
    }, // end of objectToArray()

    getVectorLayer: function getVectorLayer(source, style) {
      var fnStyle;

      // make sure that the style is a function
      if (typeof style === 'function') {
        fnStyle = style;
      } else if (style !== undefined) {
        fnStyle = function fnStyle() {
          return style;
        };
      }

      return new ol.layer.Vector({
        source: source,
        style: fnStyle
      });
    },
    // end of "getVectorLayer()"

    /**
     * Extracts the subdomain from the current request host and returns it.
     * @returns {string | *}
     */
    getCurrentSubdomain: function getCurrentSubdomain() {
      return window.location.href;
    },


    redrawMapView: function redrawMapView(mapController) {
      var mapData = mapController.data;
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
      mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
      $(controlContainerTopLeft).after(controlContainerBottomLeft);
      mapController.leftSlideElements.push(controlContainerBottomLeft);

      var controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;

      if (mapData.scaleline) {
        mapController.map.removeControl(mapController.controls.scaleline);
        mapController.controls.scaleline = new ol.control.ScaleLine({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeft,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.scaleline);
      }

      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);

      if (mapData.zoomlevel) {
        mapController.map.removeControl(mapController.controls.zoomlevel);
        mapController.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__["a" /* Zoomlevel */]({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.zoomlevel);
      }

      if (mapData.mouseposition) {
        mapController.map.removeControl(mapController.controls.mouseposition);
        mapController.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.mouseposition);
      }
    },
    getValue: function getValue(key) {
      return localStorage[key] || '';
    },
    storeValue: function storeValue(key, value) {
      localStorage[key] = value; // only strings
    }
  });
})(jQuery, this.c4g);

var utils = this.c4g.maps.utils;

/***/ }),

/***/ "./Resources/public/js/routing-plugin.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/routing-plugin.js ***!
  \***********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MapsBundle_Resources_public_js_c4g_maps_control_portside_router__ = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-control-portside-router */ "../MapsBundle/Resources/public/js/c4g-maps-control-portside-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de */ "../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__ = __webpack_require__(/*! ./../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "../MapsBundle/Resources/public/js/c4g-maps-constant.js");
// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};





(function ($, c4g) {
  'use strict';

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */

  c4g.maps.control.RouterPlugin = function (opt_options) {

    // extend options
    this.options = $.extend({
      name: 'router',
      create: true,
      mapController: undefined,
      headline: __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }
    this.index = 0;

    // call parent constructor
    __WEBPACK_IMPORTED_MODULE_0__MapsBundle_Resources_public_js_c4g_maps_control_portside_router__["a" /* Router */].call(this, this.options);
  };
  /**
   * Inherit from "Router"
   */
  ol.inherits(c4g.maps.control.RouterPlugin, __WEBPACK_IMPORTED_MODULE_0__MapsBundle_Resources_public_js_c4g_maps_control_portside_router__["a" /* Router */]);

  /**
   * Methods
   */
  c4g.maps.control.RouterPlugin.prototype = $.extend(c4g.maps.control.RouterPlugin.prototype, {

    init: function init() {
      var self, viewRouter, viewArea, selectInteraction, profileId;

      self = this;
      this.spinner.show();

      // check and load location styles via map-proxy
      this.options.mapController.proxy.locationStyleController.loadLocationStyles([this.options.mapController.data.router_from_locstyle, this.options.mapController.data.router_to_locstyle, this.options.mapController.data.router_point_locstyle]);

      // Add router layer(s)
      this.routingAltWaySource = new ol.source.Vector();
      this.routingWaySource = new ol.source.Vector();
      this.routerWayLayer = new ol.layer.Vector({
        source: this.routingWaySource,
        zIndex: 1,
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })]
      });
      this.routerAltWayLayer = new ol.layer.Vector({
        source: this.routingAltWaySource,
        zIndex: 0,
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })]
      });

      selectInteraction = new ol.interaction.Select({
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]

      });
      selectInteraction.on('select', function (event) {

        if (event.selected[0]) {
          var geometry = event.selected[0].getGeometry();
          if (geometry && geometry instanceof ol.geom.LineString) {
            self.showAltRoute(self.response, event.selected[0].getId());
          }
        }
      });
      this.modWayInteraction = new ol.interaction.Modify({
        source: this.routingWaySource,
        style: [new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]

      });
      this.modWayInteraction.on('modifyend', function (event) {
        self.$buttonOver.trigger('click');
        var overPoint = new ol.geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
        self.performReverseSearch(self.$overInput, overPoint.getCoordinates());
        if (!self.overValue) {
          self.overValue = {};
        }
        self.overValue[self.index] = overPoint;
        self.$buttonOver.prop("disabled", false);
      });

      self.options.mapController.map.addInteraction(selectInteraction);
      self.options.mapController.map.addInteraction(this.modWayInteraction);

      this.routingHintSource = new ol.source.Vector();
      this.routerHintLayer = new ol.layer.Vector({
        source: this.routingHintSource,
        style: function style(feature, resolution) {
          // console.log(self.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style);
          return !self.options.mapController.proxy || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
        }
      });

      this.locationsSource = new ol.source.Vector();
      this.locationsLayer = new ol.layer.Vector({
        source: this.locationsSource,
        zIndex: 2
      });
      this.routerFeaturesSource = new ol.source.Vector();
      this.routerFeaturesLayer = new ol.layer.Vector({
        source: this.routerFeaturesSource
      });
      this.routerLayerGroup = new ol.layer.Group({
        layers: new ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer, this.routerFeaturesLayer]),
        visible: true
      });

      this.options.mapController.map.addLayer(this.routerLayerGroup);
      viewArea = this.addUserInterface('area');
      viewRouter = this.addUserInterface('router');

      viewRouter.activate();
      //viewArea.activate();

      // store some vars for ajax-requests
      profileId = this.options.mapController.data.profile;
      this.geoSearchApi = this.options.mapController.data.api.geosearch + '/' + profileId;
      this.geoReverseSearchApi = this.options.mapController.data.api.geosearch_reverse + '/' + profileId;
      this.routingApi = this.options.mapController.data.api.routing + '/' + profileId;

      this.spinner.hide();

      return true;
    },
    preOpenFunction: function preOpenFunction(opt_options) {
      if (opt_options && opt_options.toLonLat) {
        this.performReverseSearch(this.$toInput, opt_options.toLonLat);
        this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
      }
    },
    preCloseFunction: function preCloseFunction() {

      this.routingWaySource.clear();
      this.routingAltWaySource.clear();
      this.routingHintSource.clear();
      this.locationsSource.clear();
      this.routerFeaturesSource.clear();

      $(this.routerInstructionsWrapper).empty();
      this.clearInput(this.$fromInput);
      if (this.overValue) {
        for (var id in this.overValue) {
          this.clearOver(this.$overInput, id);
          var elem = document.getElementById(id);
          if (elem) {
            elem.parentNode.parentNode.removeChild(elem.parentNode);
          }
        }
      }
      this.clearInput(this.$toInput);

      this.removeMapInputInteraction();
    },
    performViaRoute: function performViaRoute(fromPoint, toPoint, overPoint) {

      var url, self, fromCoord, toCoord, overCoord;

      self = this;

      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
      if (overPoint) {
        overCoord = new Array();
        for (var propt in overPoint) {
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
      if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {
        //OSRM-API:5.x or ORS- API
        url = 'con4gis/routeService/1/4/2/' + fromCoord;

        if (overPoint) {
          for (var i = 0; i < overCoord.length; i++) {
            url += ';' + overCoord[i];
          }
        }
        url += ';' + toCoord;
        if (this.routeProfile && this.routeProfile.active) {
          url += '?profile=' + this.routeProfile.active;
        }
        this.spinner.show();

        jQuery.ajax({
          'url': url
        }).done(function (response) {
          self.response = response;
          if (response) {
            self.showRoute(response);
            if (response.features) {
              self.showFeatures(response.features, response.type);
            }
          }
        }).always(function () {
          self.spinner.hide();
          self.update();
        });

        return '';
      } else {
        //OSRM-API:<5
        console.log("Please use a more modern API-Version for the Routeservice");
      }
    },
    showFeatures: function showFeatures(features) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "table";

      var self = this;
      self.routerFeaturesSource.clear();
      var layer = self.options.mapController.proxy.layerController.arrLayers[4];
      if (layer && layer.content && layer.content[0] && layer.content[0].data && layer.content[0].data.popup) {
        self.routerFeaturesLayer.popup = layer.content[0].data.popup;
      }
      var unstyledFeatures = [];
      var contentFeatures = [];
      var missingStyles = [];
      for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        var resultCoordinate = void 0;
        if (type == "overpass") {
          resultCoordinate = ol.proj.transform([parseFloat(feature['lon']), parseFloat(feature['lat'])], 'EPSG:4326', 'EPSG:3857');
        } else {
          resultCoordinate = ol.proj.transform([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
        }
        var point = new ol.geom.Point(resultCoordinate);
        var contentFeature = new ol.Feature(point);
        contentFeature.setId(feature.id);
        contentFeature.set('cluster_zoom', layer.cluster.zoom);
        contentFeature.set('cluster_popup', layer.cluster.popup);
        contentFeature.set('cluster_fillcolor', layer.cluster.fillcolor);
        contentFeature.set('cluster_fontcolor', layer.cluster.fontcolor);
        contentFeature.set('loc_linkurl', layer.loc_linkurl);
        contentFeature.set('hover_location', layer.hover_location);
        contentFeature.set('hover_style', layer.hover_style);
        contentFeature.set('zoom_onclick', layer.zoom_onclick);
        contentFeature.set('tid', feature['id']);
        var locstyle = feature['locstyle'] || layer.locstyle;
        contentFeature.set('locationStyle', locstyle);
        if (locstyle && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          contentFeature.setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
          contentFeatures.push(contentFeature);
        } else {
          contentFeature.set('styleId', locstyle);
          unstyledFeatures.push(contentFeature);
          missingStyles[locstyle] = locstyle;
        }
        for (var tags in feature.tags) {
          contentFeature.set(tags, feature.tags[tags]);
        }
      }
      if (missingStyles && missingStyles.length > 0) {
        self.options.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
          done: function done() {
            for (var _i = 0; _i < unstyledFeatures.length; _i++) {
              var styleId = unstyledFeatures[_i].get('styleId');
              unstyledFeatures[_i].setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);
              self.routerFeaturesSource.addFeature(unstyledFeatures[_i]);
            }
            missingStyles = undefined;
          }
        });
      }
      if (features.length > 0) {
        self.routerFeaturesSource.addFeatures(contentFeatures);
      }
    },
    showFeaturesInPortside: function showFeaturesInPortside(features, type) {
      var scope = this;
      if (self.featureWrapper === undefined) {
        self.featureWrapper = document.createElement('div');
        self.featureWrapper.className('changeDat');
        self.routerViewContentWrapper.appendChild(sef.featureWrapper);
      }
    },
    performArea: function performArea(fromPoint, distance) {
      var self = this;

      var fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      var url = 'con4gis/areaService/1/4/' + distance + '/' + fromCoord;
      if (this.routeProfile && this.routeProfile.active) {
        url += '?profile=' + this.routeProfile.active;
      }
      this.spinner.show();

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        self.response = response;
        if (response) {
          self.showFeatures(response[0], response[1]);
        }
      }).always(function () {
        self.spinner.hide();
        self.update();
      });
    },
    addUserInterface: function addUserInterface(type) {
      var _this = this;

      var self = void 0,
          routerView = void 0,
          routerContentElement = void 0,
          routerViewInputWrapper = void 0,
          routerViewContentWrapper = void 0,
          areaView = void 0,
          areaViewInputWrapper = void 0,
          areaContentElement = void 0,
          areaViewContentWrapper = void 0,
          print = void 0,
          routeProfile = [],
          routerFromLabel = void 0,
          routerOverLabel = void 0,
          routerToLabel = void 0,
          routerFromClear = void 0,
          routerOverClear = void 0,
          routerToClear = void 0,
          switchFromTo = void 0,
          areaFromLabel = void 0,
          areaFromClear = void 0,
          buttonOver = void 0;

      if (type === 'router') {
        self = this;
        routerContentElement = document.createElement('div');
        routerViewInputWrapper = document.createElement('div');
        routerViewContentWrapper = document.createElement('div');
        routerContentElement.appendChild(routerViewInputWrapper);
        routerContentElement.appendChild(routerViewContentWrapper);
        self.routerViewContentWrapper = routerViewContentWrapper;

        this.fromInputWrapper = document.createElement('div');
        this.fromInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

        this.fromInput = document.createElement("input");
        this.fromInput.type = "text";
        this.fromInput.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_FROM;
        this.fromInput.id = this.fromInput.name = "routingFrom";

        routerFromLabel = document.createElement('label');
        routerFromLabel.setAttribute('for', 'routingFrom');
        routerFromLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_FROM_LABEL;

        routerFromClear = document.createElement('button');
        routerFromClear.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
        routerFromClear.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
        routerFromClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
        this.$routerFromClear = $(routerFromClear);

        switchFromTo = document.createElement('button');
        switchFromTo.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_SWITCH;
        switchFromTo.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_SWITCH;
        this.$switchFromTo = $(switchFromTo);

        buttonOver = document.createElement('button');
        buttonOver.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_OVER;
        buttonOver.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_OVER;
        this.$buttonOver = $(buttonOver);

        this.routerButtonBar = document.createElement('div');
        this.routerButtonBar.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_BUTTONBAR;
        this.routerButtonBar.appendChild(switchFromTo);
        this.routerButtonBar.appendChild(buttonOver);

        if (this.options.mapController.data.router_api_selection == '2') {
          //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {
            //check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          } else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) {
            //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) {
              //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_CAR);
              this.$routeProfileCar = $(routeProfile.car);
              this.routeProfile.appendChild(routeProfile.car);
              this.$routeProfileCar.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '0';
                self.recalculateRoute();
              });
            }

            if (this.options.mapController.data.router_profiles['1']) {
              //add button for profile driving-hgv
              routeProfile.hgv = document.createElement('button');
              $(routeProfile.hgv).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_HGV);
              this.routeProfile.appendChild(routeProfile.hgv);
              this.$routeProfileHgv = $(routeProfile.hgv);

              this.$routeProfileHgv.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '1';
                self.recalculateRoute();
              });
            }
            if (this.options.mapController.data.router_profiles['2'] || this.options.mapController.data.router_profiles['3'] || this.options.mapController.data.router_profiles['4'] || this.options.mapController.data.router_profiles['5'] || this.options.mapController.data.router_profiles['6'] || this.options.mapController.data.router_profiles['7']) {
              //add button and dropdown for cycling profiles
              var spanBike = document.createElement('span');
              routeProfile.bike = document.createElement('button');
              routeProfile.bike.list = document.createElement('ul');
              this.$routeProfileBike = $(routeProfile.bike);
              for (var i = 2; i < 8; i++) {
                //iterate over all possible cycling profiles
                if (this.options.mapController.data.router_profiles[i]) {
                  (function () {
                    var child = document.createElement('li');
                    child.innerHTML = _this.options.mapController.data.router_profiles[i];
                    $(child).data('profile', [i]);
                    $(child).click(function (event) {
                      self.childClick($(child));
                    });
                    if (!_this.$routeProfileBike.data('profile')) {
                      //add existing default profile to button
                      _this.$routeProfileBike.data('profile', i);
                      $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                    }
                    routeProfile.bike.list.appendChild(child);
                  })();
                }
              }

              $(routeProfile.bike).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_BIKE);

              if (routeProfile.bike.list.children.length == 1) {
                //ignore dropdown list, if only one cycling profile is enabled
                this.routeProfile.appendChild(routeProfile.bike);
                this.$routeProfileBike.click(function (event) {
                  self.clearSiblings(this);
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              } else {
                //append with dropdown, if multiple cycling profiles are enabled
                spanBike.appendChild(routeProfile.bike);
                spanBike.appendChild(routeProfile.bike.list);
                this.routeProfile.appendChild(spanBike);
                this.$routeProfileBike.click(function (event) {
                  self.clearSiblings($(this).parent());
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              }
            }
            if (this.options.mapController.data.router_profiles['8'] || this.options.mapController.data.router_profiles['9']) {
              //add button and dropdown for walking profiles
              var spanFoot = document.createElement('span');
              routeProfile.foot = document.createElement('button');
              routeProfile.foot.list = document.createElement('ul');
              this.$routeProfileFoot = $(routeProfile.foot);
              for (var _i2 = 8; _i2 < 10; _i2++) {
                //iterate over possible profiles
                if (this.options.mapController.data.router_profiles[_i2]) {
                  var child = document.createElement('li');
                  child.innerHTML = this.options.mapController.data.router_profiles[_i2];
                  $(child).data('profile', [_i2]);
                  $(child).click(function (event) {
                    self.childClick($(this));
                  });
                  if (!this.$routeProfileFoot.data('profile')) {
                    //add existing default profile to button
                    this.$routeProfileFoot.data('profile', _i2);
                    $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                  }
                  routeProfile.foot.list.appendChild(child);
                }
              }

              $(routeProfile.foot).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_FOOT);

              if (routeProfile.foot.list.children.length == 1) {
                //ignore dropdown list, if only one walking profile is enabled
                this.routeProfile.appendChild(routeProfile.foot);
                this.$routeProfileFoot.click(function (event) {
                  self.clearSiblings(this);
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              } else {
                //append with dropdown, if multiple walking profiles are enabled
                spanFoot.appendChild(routeProfile.foot);
                spanFoot.appendChild(routeProfile.foot.list);
                this.routeProfile.appendChild(spanFoot);
                this.$routeProfileFoot.click(function (event) {
                  self.clearSiblings($(this).parent());
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              }
            }
            if (this.options.mapController.data.router_profiles['10']) {
              //add button for profile wheelchair
              routeProfile.wheelchair = document.createElement('button');
              $(routeProfile.wheelchair).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WHEELCHAIR);
              this.$routeProfileWheelchair = $(routeProfile.wheelchair);
              this.routeProfile.appendChild(routeProfile.wheelchair);
              this.$routeProfileWheelchair.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '10';
                self.recalculateRoute();
              });
            }
            this.childClick = function ($element) {
              //handle the click inside the profile dropdown
              self.routeProfile.active = $element.data('profile'); //activate selected profile
              self.clearSiblings($element);
              self.recalculateRoute(); //update the route
            };
            this.clearSiblings = function (element) {
              //function to adjust css-classes after changing profile
              var siblings = $(element).parent().children();
              for (var _i3 = 0; _i3 < siblings.length; _i3++) {
                $(siblings[_i3]).removeClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
              }
              $(element).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
            };
            for (var profile in this.options.mapController.data.router_profiles) {
              //set default value for initial routing
              if (this.options.mapController.data.router_profiles.hasOwnProperty(profile)) {
                this.routeProfile.active = profile;
                break;
              }
            }
          } else {
            console.warn('No Router Profiles enabled');
          }
        }
        this.fromInputWrapper.appendChild(routerFromLabel);
        this.fromInputWrapper.appendChild(this.fromInput);
        this.fromInputWrapper.appendChild(routerFromClear);
        if (buttonOver && this.options.mapController.data.router_api_selection == '0') {
          this.$buttonOver.hide();
        }

        this.$routerFromClear.hide();

        this.$routerFromClear.click(function (event) {
          event.preventDefault();
          self.clearInput(self.$fromInput);
        });

        this.$buttonOver.click(function (event) {
          event.preventDefault();
          self.index++;
          self.$buttonOver.prop("disabled", true);

          self.overInputWrapper = document.createElement('div');
          self.overInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

          self.overInput = document.createElement("input");
          self.overInput.type = "text";
          self.overInput.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_FROM;
          self.overInput.id = self.overInput.name = "routingOver";

          routerOverLabel = document.createElement('label');
          routerOverLabel.setAttribute('for', 'routingFrom');
          routerOverLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_Label_Interim;

          routerOverClear = document.createElement('button');
          routerOverClear.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
          routerOverClear.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
          routerOverClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
          routerOverClear.id = self.index;
          self.$routerOverClear = $(routerOverClear);

          self.overInputWrapper.appendChild(routerOverLabel);
          self.overInputWrapper.appendChild(self.overInput);
          self.overInputWrapper.appendChild(routerOverClear);

          routerViewInputWrapper.appendChild(self.overInputWrapper);
          self.$routerOverClear.click(function (event) {
            event.preventDefault();
            self.clearOver(self.$overInput, this.id);
            $(this).parent().remove();
            //buttonOver.show();
          });
          self.$overInput = $(self.overInput);
          self.$overInput.on('change', function () {
            self.performSearch(self.$overInput, "overValue");
          });
        });

        this.$switchFromTo.click(function (event) {
          event.preventDefault();
          var switchVarName = document.getElementById("routingFrom").value;
          document.getElementById("routingFrom").value = document.getElementById("routingTo").value;
          document.getElementById("routingTo").value = switchVarName;
          var switchVarVal = self.fromValue;
          self.fromValue = self.toValue;
          self.toValue = switchVarVal;
          self.recalculateRoute();
        });

        this.$fromInput = $(this.fromInput);
        this.$fromInput.on('change', function () {
          self.performSearch(self.$fromInput, "fromValue");
          if (self.$fromInput.val() !== "") {
            self.$routerFromClear.show();
          } else {
            self.$routerFromClear.hide();
          }
        });

        routerViewInputWrapper.appendChild(this.routerButtonBar);
        if (this.routeProfile && this.routeProfile.children) {
          routerViewInputWrapper.appendChild(this.routeProfile);
        }
        if (mapData.routerLayers) {
          this.routerLayersInput = document.createElement('div');
          if (mapData.routerLayers.length > 1 || true) {
            this.routerLayersSelect = document.createElement('select');
            this.routerLayersInput.appendChild(this.routerLayersSelect);
            for (var _i4 in mapData.routerLayers) {
              var option = document.createElement('option');
              option.value = _i4;
              option.textContent = self.options.mapController.proxy.layerController.arrLayers[_i4].name;
              this.routerLayersSelect.add(option);
            }
            $(this.routerLayersSelect).on('change', function () {});
          }
        }
        routerViewInputWrapper.appendChild(this.routerLayersInput);
        routerViewInputWrapper.appendChild(this.fromInputWrapper);
        this.toInputWrapper = document.createElement('div');
        this.toInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

        this.toInput = document.createElement("input");
        this.toInput.type = "text";
        this.toInput.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_TO;
        this.toInput.id = this.toInput.name = "routingTo";

        routerToLabel = document.createElement('label');
        routerToLabel.setAttribute('for', 'routingTo');
        routerToLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_TO_LABEL;

        routerToClear = document.createElement('button');
        routerToClear.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
        routerToClear.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
        routerToClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
        this.$routerToClear = $(routerToClear);

        this.toInputWrapper.appendChild(routerToLabel);
        this.toInputWrapper.appendChild(this.toInput);
        this.toInputWrapper.appendChild(routerToClear);

        this.$routerToClear.hide();

        self.$routerToClear.click(function (event) {
          event.preventDefault();
          self.clearInput(self.$toInput);
        });

        this.$toInput = $(this.toInput);
        this.$toInput.on('change', function () {
          self.performSearch(self.$toInput, "toValue");
          if (self.$toInput.val() !== "") {
            self.$routerToClear.show();
          } else {
            self.$routerToClear.hide();
          }
        });

        routerViewInputWrapper.appendChild(this.toInputWrapper);

        self.statusBar.appendChild(this.getAttribution());
        var routerActivateFunction = function routerActivateFunction() {
          self.removeMapInputInteraction();
          self.addMapInputInteraction();
        };
        var routerDeactivateFunction = function routerDeactivateFunction() {
          self.removeMapInputInteraction();
        };

        routerView = this.addView({
          name: 'router-view',
          triggerConfig: {
            tipLabel: __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_VIEW_ADDRESS_INPUT,
            className: __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_VIEW_ADDRESS_INPUT,
            withHeadline: true
          },
          sectionElements: [
          //{section: this.topToolbar, element: routerViewInputWrapper},
          { section: this.contentContainer, element: routerContentElement }, { section: this.topToolbar, element: this.viewTriggerBar }],
          activateFunction: routerActivateFunction,
          deactivateFunction: routerDeactivateFunction
        });
        return routerView;
      } else {
        self = this;
        areaContentElement = document.createElement('div');
        areaViewInputWrapper = document.createElement('div');
        areaViewContentWrapper = document.createElement('div');
        areaContentElement.appendChild(areaViewInputWrapper);
        areaContentElement.appendChild(areaViewContentWrapper);
        self.areaViewContentWrapper = areaViewContentWrapper;

        this.areaFromInputWrapper = document.createElement('div');
        this.areaFromInputWrapper.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_WRAPPER;

        this.areaFromInput = document.createElement("input");
        this.areaFromInput.type = "text";
        this.areaFromInput.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_FROM;
        this.areaFromInput.id = this.areaFromInput.name = "routingFrom";

        areaFromLabel = document.createElement('label');
        areaFromLabel.setAttribute('for', 'routingFrom');
        areaFromLabel.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_FROM_LABEL;

        areaFromClear = document.createElement('button');
        areaFromClear.className = __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_INPUT_CLEAR;
        areaFromClear.title = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_TITLE;
        areaFromClear.innerHTML = __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].ROUTER_CLEAR_HTML;
        this.$areaFromClear = $(areaFromClear);
        if (this.options.mapController.data.router_api_selection == '2') {
          //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {
            //check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          } else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) {
            //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) {
              //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_CAR);
              this.$routeProfileCar = $(routeProfile.car);
              this.routeProfile.appendChild(routeProfile.car);
              this.$routeProfileCar.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '0';
                self.recalculateRoute();
              });
            }

            if (this.options.mapController.data.router_profiles['1']) {
              //add button for profile driving-hgv
              routeProfile.hgv = document.createElement('button');
              $(routeProfile.hgv).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_HGV);
              this.routeProfile.appendChild(routeProfile.hgv);
              this.$routeProfileHgv = $(routeProfile.hgv);

              this.$routeProfileHgv.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '1';
                self.recalculateRoute();
              });
            }
            if (this.options.mapController.data.router_profiles['2'] || this.options.mapController.data.router_profiles['3'] || this.options.mapController.data.router_profiles['4'] || this.options.mapController.data.router_profiles['5'] || this.options.mapController.data.router_profiles['6'] || this.options.mapController.data.router_profiles['7']) {
              //add button and dropdown for cycling profiles
              var _spanBike = document.createElement('span');
              routeProfile.bike = document.createElement('button');
              routeProfile.bike.list = document.createElement('ul');
              this.$routeProfileBike = $(routeProfile.bike);
              for (var _i5 = 2; _i5 < 8; _i5++) {
                //iterate over all possible cycling profiles
                if (this.options.mapController.data.router_profiles[_i5]) {
                  (function () {
                    var child = document.createElement('li');
                    child.innerHTML = _this.options.mapController.data.router_profiles[_i5];
                    $(child).data('profile', [_i5]);
                    $(child).click(function (event) {
                      self.childClick($(child));
                    });
                    if (!_this.$routeProfileBike.data('profile')) {
                      //add existing default profile to button
                      _this.$routeProfileBike.data('profile', _i5);
                      $(child).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                    }
                    routeProfile.bike.list.appendChild(child);
                  })();
                }
              }

              $(routeProfile.bike).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_BIKE);

              if (routeProfile.bike.list.children.length == 1) {
                //ignore dropdown list, if only one cycling profile is enabled
                this.routeProfile.appendChild(routeProfile.bike);
                this.$routeProfileBike.click(function (event) {
                  self.clearSiblings(this);
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              } else {
                //append with dropdown, if multiple cycling profiles are enabled
                _spanBike.appendChild(routeProfile.bike);
                _spanBike.appendChild(routeProfile.bike.list);
                this.routeProfile.appendChild(_spanBike);
                this.$routeProfileBike.click(function (event) {
                  self.clearSiblings($(this).parent());
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              }
            }
            if (this.options.mapController.data.router_profiles['8'] || this.options.mapController.data.router_profiles['9']) {
              //add button and dropdown for walking profiles
              var _spanFoot = document.createElement('span');
              routeProfile.foot = document.createElement('button');
              routeProfile.foot.list = document.createElement('ul');
              this.$routeProfileFoot = $(routeProfile.foot);
              for (var _i6 = 8; _i6 < 10; _i6++) {
                //iterate over possible profiles
                if (this.options.mapController.data.router_profiles[_i6]) {
                  var _child = document.createElement('li');
                  _child.innerHTML = this.options.mapController.data.router_profiles[_i6];
                  $(_child).data('profile', [_i6]);
                  $(_child).click(function (event) {
                    self.childClick($(this));
                  });
                  if (!this.$routeProfileFoot.data('profile')) {
                    //add existing default profile to button
                    this.$routeProfileFoot.data('profile', _i6);
                    $(_child).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
                  }
                  routeProfile.foot.list.appendChild(_child);
                }
              }

              $(routeProfile.foot).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_FOOT);

              if (routeProfile.foot.list.children.length == 1) {
                //ignore dropdown list, if only one walking profile is enabled
                this.routeProfile.appendChild(routeProfile.foot);
                this.$routeProfileFoot.click(function (event) {
                  self.clearSiblings(this);
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              } else {
                //append with dropdown, if multiple walking profiles are enabled
                _spanFoot.appendChild(routeProfile.foot);
                _spanFoot.appendChild(routeProfile.foot.list);
                this.routeProfile.appendChild(_spanFoot);
                this.$routeProfileFoot.click(function (event) {
                  self.clearSiblings($(this).parent());
                  self.routeProfile.active = $(this).data('profile');
                  self.recalculateRoute();
                });
              }
            }
            if (this.options.mapController.data.router_profiles['10']) {
              //add button for profile wheelchair
              routeProfile.wheelchair = document.createElement('button');
              $(routeProfile.wheelchair).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_PROFILE_WHEELCHAIR);
              this.$routeProfileWheelchair = $(routeProfile.wheelchair);
              this.routeProfile.appendChild(routeProfile.wheelchair);
              this.$routeProfileWheelchair.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '10';
                self.recalculateRoute();
              });
            }
            this.childClick = function ($element) {
              //handle the click inside the profile dropdown
              self.routeProfile.active = $element.data('profile'); //activate selected profile
              self.clearSiblings($element);
              self.recalculateRoute(); //update the route
            };
            this.clearSiblings = function (element) {
              //function to adjust css-classes after changing profile
              var siblings = $(element).parent().children();
              for (var _i7 = 0; _i7 < siblings.length; _i7++) {
                $(siblings[_i7]).removeClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
              }
              $(element).addClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
            };
            for (var _profile in this.options.mapController.data.router_profiles) {
              //set default value for initial routing
              if (this.options.mapController.data.router_profiles.hasOwnProperty(_profile)) {
                this.routeProfile.active = _profile;
                break;
              }
            }
          } else {
            console.warn('No Router Profiles enabled');
          }
        }
        this.areaFromInputWrapper.appendChild(areaFromLabel);
        this.areaFromInputWrapper.appendChild(this.areaFromInput);
        this.areaFromInputWrapper.appendChild(areaFromClear);
        this.$areaFromClear.hide();

        this.$areaFromClear.click(function (event) {
          event.preventDefault();
          self.clearInput(self.$fromInput);
        });
        if (this.routeProfile && this.routeProfile.children) {
          areaViewInputWrapper.appendChild(this.routeProfile);
        }

        areaViewInputWrapper.appendChild(this.areaFromInputWrapper);
        var areaActivateFunction = function areaActivateFunction() {
          self.fnMapAreaInteraction = function (evt) {
            var scope = this;
            if ($(self.areaFromInput).val() === "") {
              self.performReverseSearch($(self.areaFromInput), ol.proj.toLonLat(evt.coordinate));
              self.areaValue = new ol.geom.Point(ol.proj.toLonLat(evt.coordinate));
              self.performArea(self.areaValue, 5);
            }
          };
          self.options.mapController.map.on('click', self.fnMapAreaInteraction);
        };
        var areaDeactivateFunction = function areaDeactivateFunction() {
          self.options.mapController.map.un('click', self.fnMapAreaInteraction);
        };
        areaView = this.addView({
          name: 'area-view',
          triggerConfig: {
            tipLabel: 'LOOOOL',
            className: __WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ROUTER_VIEW_ADDRESS_INPUT,
            withHeadline: true
          },
          sectionElements: [{ section: this.contentContainer, element: areaContentElement }, { section: this.topToolbar, element: this.viewTriggerBar }],
          activateFunction: areaActivateFunction,
          deactivateFunction: areaDeactivateFunction
        });
        return areaView;
      }
    }
  });

  window.c4gMapsHooks = window.c4gMapsHooks || {};
  window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
  window.c4gMapsHooks.mapController_addControls.push(function (params) {
    var mapController = params.mapController;

    mapController.map.removeControl(mapController.controls.router);
    var router = new c4g.maps.control.RouterPlugin({
      tipLabel: __WEBPACK_IMPORTED_MODULE_1__MapsBundle_Resources_public_js_c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ROUTER,
      target: params.Container,
      mapController: mapController
    });
    mapController.map.addControl(router);
    mapController.controls.router = router;
    console.log(mapController.map.controls);
  });
})(jQuery, this.c4g);

/***/ })

/******/ });