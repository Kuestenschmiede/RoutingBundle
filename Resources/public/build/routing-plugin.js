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

            if (self.options.mapController.map.getInteractions() && self.options.mapController.map.getInteractions().getArray() && self.options.mapController.map.getInteractions().getArray()['9']) {
                self.options.mapController.map.getInteractions().getArray()['9'].setActive(false);
            }
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
            // if(self.options.mapController.map.getInteractions().getArray()['9']){
            //     self.options.mapController.map.getInteractions().getArray()['9'].setActive(true);
            // }
            // else{
            //     self.options.mapController.map.getInteractions().getArray()['8'].setActive(true)
            // }
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
        if (typeof window[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return window[functionName](feature, style);
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
        url = 'con4gis/routeService/1/74/2/' + fromCoord;

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
      var layer = self.options.mapController.proxy.layerController.arrLayers[74];
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
    performArea: function performArea(fromPoint, distance) {
      var self = this;

      var fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];

      var url = 'con4gis/areaService/1/71/' + distance + '/' + fromCoord;
      if (this.routeProfile && this.routeProfile.active) {
        url += '?profile=' + this.routeProfile.active;
      }
      this.spinner.show();

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        self.response = response;
        if (response) {
          self.showFeatures(response);
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
              for (var _i4 = 2; _i4 < 8; _i4++) {
                //iterate over all possible cycling profiles
                if (this.options.mapController.data.router_profiles[_i4]) {
                  (function () {
                    var child = document.createElement('li');
                    child.innerHTML = _this.options.mapController.data.router_profiles[_i4];
                    $(child).data('profile', [_i4]);
                    $(child).click(function (event) {
                      self.childClick($(child));
                    });
                    if (!_this.$routeProfileBike.data('profile')) {
                      //add existing default profile to button
                      _this.$routeProfileBike.data('profile', _i4);
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
              for (var _i5 = 8; _i5 < 10; _i5++) {
                //iterate over possible profiles
                if (this.options.mapController.data.router_profiles[_i5]) {
                  var _child = document.createElement('li');
                  _child.innerHTML = this.options.mapController.data.router_profiles[_i5];
                  $(_child).data('profile', [_i5]);
                  $(_child).click(function (event) {
                    self.childClick($(this));
                  });
                  if (!this.$routeProfileFoot.data('profile')) {
                    //add existing default profile to button
                    this.$routeProfileFoot.data('profile', _i5);
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
              for (var _i6 = 0; _i6 < siblings.length; _i6++) {
                $(siblings[_i6]).removeClass(__WEBPACK_IMPORTED_MODULE_2__MapsBundle_Resources_public_js_c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzU4MDY0MmE2OGE1MTdiZDc0MjAiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkLmpzIiwid2VicGFjazovLy8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRpbmctcGx1Z2luLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb25zdGFudCIsIiQiLCJpMThuIiwiZXh0ZW5kIiwiTEFORyIsIk5BTUUiLCJISURFIiwiQ0xPU0UiLCJQT0lOVCIsIkZSRUVIQU5EIiwiTElORSIsIlBPTFlHT04iLCJDSVJDTEUiLCJQRVJJTUVURVIiLCJMRU5HVEgiLCJTVVJGQUNFQVJFQSIsIlJBRElVUyIsIlJFRlJFU0giLCJDT1BZX1RPX0NMSVBCT0FSRCIsIkNUUkxfWk9PTV9JTiIsIkNUUkxfWk9PTV9PVVQiLCJDVFJMX1pPT01fRVhUIiwiQ1RSTF9aT09NX0hPTUUiLCJDVFJMX1pPT01fUE9TIiwiQ1RSTF9aT09NX1NMSURFUiIsIkNUUkxfUkVTRVRfUk9UQVRJT04iLCJDVFJMX1BPUlRTSURFIiwiQ1RSTF9ST1VURVIiLCJDVFJMX0VESVRPUiIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiQ1RSTF9JTkZPUEFHRSIsIkNUUkxfQURESVRJT05BTFBBTkVMIiwiQ1RSTF9BQ0NPVU5UIiwiQ1RSTF9aT09NTEVWRUwiLCJDVFJMX01PVVNFQ09PUkRTIiwiQ1RSTF9HRU9TRUFSQ0giLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJDVFJMX0dFT0JPT0tNQVJLUyIsIkNUUkxfU0lERUJPQVJEIiwiQ1RSTF9TVEFSQk9BUkQiLCJDVFJMX0FUVFJJQlVUSU9OIiwiQ1RSTF9HUklEIiwiQ1RSTF9QRVJNQUxJTksiLCJDVFJMX0ZVTExTQ1JFRU4iLCJDVFJMX1BSSU5UIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIlBPUFVQX1JPVVRFX0ZST00iLCJQT1BVUF9ST1VURV9UTyIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9CQVNFTEFZRVIiLCJTVEFSQk9BUkRfTEFZRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU0lERUJPQVJEIiwiUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCIsIlJPVVRFUl9GUk9NX0xBQkVMIiwiUk9VVEVSX09WRVJfTEFCRUwiLCJST1VURVJfVE9fTEFCRUwiLCJST1VURVJfQ0xFQVJfVElUTEUiLCJST1VURVJfQ0xFQVJfSFRNTCIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1BSSU5UIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUiLCJST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUiLCJST1VURVJfVklFV19MQUJFTF9QUk9GSUxFIiwiUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyIsIlJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HIiwiUk9VVEVSIiwiUk9VVEVSX04iLCJST1VURVJfRSIsIlJPVVRFUl9TIiwiUk9VVEVSX1ciLCJST1VURVJfTkUiLCJST1VURVJfU0UiLCJST1VURVJfU1ciLCJST1VURVJfTlciLCJST1VURVJfRElSRUNUSU9OXzAiLCJST1VURVJfRElSRUNUSU9OXzEiLCJST1VURVJfRElSRUNUSU9OXzIiLCJST1VURVJfRElSRUNUSU9OXzMiLCJST1VURVJfRElSRUNUSU9OXzQiLCJST1VURVJfRElSRUNUSU9OXzUiLCJST1VURVJfRElSRUNUSU9OXzYiLCJST1VURVJfRElSRUNUSU9OXzciLCJST1VURVJfRElSRUNUSU9OXzgiLCJST1VURVJfRElSRUNUSU9OXzEwIiwiUk9VVEVSX0RJUkVDVElPTl8xNSIsIlJPVVRFUl9GUk9NIiwiUk9VVEVSX1RPIiwiUk9VVEVSX0ZJTkRfUk9VVEUiLCJST1VURVJfTE9DX1JPVVRFX1RPIiwiUk9VVEVSX1JPVVRFREVTQyIsIlJPVVRFUl9ST1VURU5BTUUiLCJST1VURVJfRElTVEFOQ0UiLCJST1VURVJfVElNRSIsIlJPVVRFUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkciLCJST1VURVJfU0VBUkNISU5HIiwiUk9VVEVSX0VSUk9SX1NFQVJDSElORyIsIlJPVVRFUl9DQUxDX1JPVVRFIiwiUk9VVEVSX0VSUk9SX0NBTENfUk9VVEUiLCJNRUFTVVJFVE9PTFMiLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiR0VPQk9PS01BUktTX1BMQUNFSE9MREVSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUwiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQUNDT1VOVCIsIkFDQ09VTlRfVklFV19UUklHR0VSIiwiU0VBUkNIX05PVF9GT1VORCIsIk5PTkUiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiY3NzIiwiT1BFTiIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIkFDVElWRSIsIklOQUNUSVZFIiwiTE9BRElORyIsIkFOSU1BVElPTl9TUElOIiwiTEFSR0UiLCJTTUFMTCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFUVFJJQlVUSU9OX0xPR08iLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIiLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQiLCJFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEUiLCJFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1QiLCJFRElUT1JfRFJBV19UUklHR0VSIiwiRURJVE9SX0NPTlRFTlRfU0VMRUNUIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkdFT1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiR0VPU0VBUkNIX1RSSUdHRVIiLCJHRU9TRUFSQ0hfU1RBUlQiLCJHUkFUSUNVTEUiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJjc3NDb25zdGFudHMiLCJjb250cm9sIiwiUm91dGVyIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwibmFtZSIsImNyZWF0ZSIsIm1hcENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJoZWFkbGluZSIsImRpcmVjdGlvbiIsImluZGV4IiwiU2lkZWJvYXJkIiwiY2FsbCIsIm9sIiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJpbml0Iiwic2VsZiIsInZpZXdSb3V0ZXIiLCJzZWxlY3RJbnRlcmFjdGlvbiIsInByb2ZpbGVJZCIsInNwaW5uZXIiLCJzaG93IiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRhdGEiLCJyb3V0ZXJfZnJvbV9sb2NzdHlsZSIsInJvdXRlcl90b19sb2NzdHlsZSIsInJvdXRlcl9wb2ludF9sb2NzdHlsZSIsInJvdXRpbmdBbHRXYXlTb3VyY2UiLCJzb3VyY2UiLCJWZWN0b3IiLCJyb3V0aW5nV2F5U291cmNlIiwicm91dGVyV2F5TGF5ZXIiLCJsYXllciIsInpJbmRleCIsInN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwicm91dGVyQWx0V2F5TGF5ZXIiLCJpbnRlcmFjdGlvbiIsIlNlbGVjdCIsIm9uIiwiZXZlbnQiLCJzZWxlY3RlZCIsImdlb21ldHJ5IiwiZ2V0R2VvbWV0cnkiLCJnZW9tIiwiTGluZVN0cmluZyIsInNob3dBbHRSb3V0ZSIsInJlc3BvbnNlIiwiZ2V0SWQiLCJtYXAiLCJhZGRJbnRlcmFjdGlvbiIsInJvdXRpbmdIaW50U291cmNlIiwicm91dGVySGludExheWVyIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJhcnJMb2NTdHlsZXMiLCJsb2NhdGlvbnNTb3VyY2UiLCJsb2NhdGlvbnNMYXllciIsInJvdXRlckxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsIkNvbGxlY3Rpb24iLCJ2aXNpYmxlIiwiYWRkTGF5ZXIiLCJhZGRVc2VySW50ZXJmYWNlIiwiYWN0aXZhdGUiLCJwcm9maWxlIiwiZ2VvU2VhcmNoQXBpIiwiYXBpIiwiZ2Vvc2VhcmNoIiwiZ2VvUmV2ZXJzZVNlYXJjaEFwaSIsImdlb3NlYXJjaF9yZXZlcnNlIiwicm91dGluZ0FwaSIsInJvdXRpbmciLCJoaWRlIiwicHJlT3BlbkZ1bmN0aW9uIiwiYWRkTWFwSW5wdXRJbnRlcmFjdGlvbiIsInRvTG9uTGF0IiwicGVyZm9ybVJldmVyc2VTZWFyY2giLCIkdG9JbnB1dCIsInRvVmFsdWUiLCJQb2ludCIsInByZUhpZGVGdW5jdGlvbiIsInJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24iLCJwcmVDbG9zZUZ1bmN0aW9uIiwiY2xlYXIiLCJyb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyIiwiZW1wdHkiLCJjbGVhcklucHV0IiwiJGZyb21JbnB1dCIsIm92ZXJWYWx1ZSIsImlkIiwiY2xlYXJPdmVyIiwiJG92ZXJJbnB1dCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidW4iLCJmbk1hcFJvdXRlckludGVyYWN0aW9uIiwiZ2V0SW50ZXJhY3Rpb25zIiwiZ2V0QXJyYXkiLCJzZXRBY3RpdmUiLCJjb29yZGluYXRlIiwiZXZ0IiwicHJvaiIsInZhbCIsImZyb21WYWx1ZSIsIiRidXR0b25PdmVyIiwicHJvcCIsInJvdXRlclZpZXciLCJyb3V0ZXJWaWV3SW5wdXRXcmFwcGVyIiwicm91dGVyVmlld0NvbnRlbnRXcmFwcGVyIiwicm91dGVyVmlld0NvbnRlbnRIZWFkbGluZSIsInByaW50Iiwicm91dGVQcm9maWxlIiwicm91dGVyRnJvbUxhYmVsIiwicm91dGVyT3ZlckxhYmVsIiwicm91dGVyVG9MYWJlbCIsInJvdXRlckZyb21DbGVhciIsInJvdXRlck92ZXJDbGVhciIsInJvdXRlclRvQ2xlYXIiLCJzd2l0Y2hGcm9tVG8iLCJidXR0b25PdmVyIiwiY3JlYXRlRWxlbWVudCIsImZyb21JbnB1dFdyYXBwZXIiLCJjbGFzc05hbWUiLCJmcm9tSW5wdXQiLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwidGl0bGUiLCIkcm91dGVyRnJvbUNsZWFyIiwiJHN3aXRjaEZyb21UbyIsIiRwcmludCIsInJvdXRlckJ1dHRvbkJhciIsImFwcGVuZENoaWxkIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwicm91dGVyX3Byb2ZpbGVzIiwibGVuZ3RoIiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjYXIiLCIkcm91dGVQcm9maWxlQ2FyIiwiY2xpY2siLCJjbGVhclNpYmxpbmdzIiwicmVjYWxjdWxhdGVSb3V0ZSIsImhndiIsIiRyb3V0ZVByb2ZpbGVIZ3YiLCJzcGFuQmlrZSIsImJpa2UiLCJsaXN0IiwiJHJvdXRlUHJvZmlsZUJpa2UiLCJpIiwiY2hpbGQiLCJjaGlsZENsaWNrIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJzcGFuRm9vdCIsImZvb3QiLCIkcm91dGVQcm9maWxlRm9vdCIsIndoZWVsY2hhaXIiLCIkcm91dGVQcm9maWxlV2hlZWxjaGFpciIsIiRlbGVtZW50IiwiZWxlbWVudCIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwicHJldmVudERlZmF1bHQiLCJvdmVySW5wdXRXcmFwcGVyIiwib3ZlcklucHV0IiwiJHJvdXRlck92ZXJDbGVhciIsInJlbW92ZSIsInBlcmZvcm1TZWFyY2giLCJzd2l0Y2hWYXJOYW1lIiwidmFsdWUiLCJzd2l0Y2hWYXJWYWwiLCJyb3V0aW5nQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJXaW5QcmludCIsIndpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiZm9jdXMiLCJ0b0lucHV0V3JhcHBlciIsInRvSW5wdXQiLCIkcm91dGVyVG9DbGVhciIsInN0YXR1c0JhciIsImdldEF0dHJpYnV0aW9uIiwiYWRkVmlldyIsInRyaWdnZXJDb25maWciLCJ0aXBMYWJlbCIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJ0b3BUb29sYmFyIiwiY29udGVudENvbnRhaW5lciIsInNldElucHV0IiwiZnJvbSIsImF0dHJpYnV0aW9uU2VhcmNoIiwiYXR0cmlidXRpb25Sb3V0ZXIiLCJhdHRyaWJ1dGlvblJvdXRlckhvc3QiLCJhdHRyaWJ1dGlvbldyYXBwZXIiLCJhdHRyaWJ1dGlvbkh0bWwiLCJnZW9zZWFyY2hfZW5naW5lIiwicm91dGVyX2F0dHJpYnV0aW9uIiwidG1wRmVhdHVyZSIsIkZlYXR1cmUiLCJjbG9uZSIsInRyYW5zZm9ybSIsInNldFN0eWxlIiwiYWRkRmVhdHVyZSIsInByb3B0Iiwicm91dGVyX2ludGVyaW1fbG9jc3R5bGUiLCJwZXJmb3JtVmlhUm91dGUiLCJmcm9tUG9pbnQiLCJ0b1BvaW50Iiwib3ZlclBvaW50IiwidXJsIiwiZnJvbUNvb3JkIiwidG9Db29yZCIsIm92ZXJDb29yZCIsImdldENvb3JkaW5hdGVzIiwiQXJyYXkiLCJwdXNoIiwiYWpheCIsImRvbmUiLCJzaG93Um91dGUiLCJhbHdheXMiLCJ1cGRhdGUiLCJyb3V0ZVJlc3BvbnNlIiwic2hvd1JvdXRlTGF5ZXIiLCJzaG93Um91dGVJbnN0cnVjdGlvbnMiLCJyb3V0ZU51bWJlciIsIm1hcFZpZXciLCJ3YXlQb2x5bGluZSIsInJvdXRlRmVhdHVyZXMiLCJhbHRSb3V0ZUZlYXR1cmVzIiwicmlnaHRQYWRkaW5nIiwibGVmdFBhZGRpbmciLCJnZXRWaWV3IiwiZm9ybWF0IiwiUG9seWxpbmUiLCJyb3V0ZXMiLCJyZWFkRmVhdHVyZXMiLCJkYXRhUHJvamVjdGlvbiIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsInNldElkIiwicm91dGVyX3ZpYXJvdXRlX3ByZWNpc2lvbiIsInJvdXRlX2dlb21ldHJ5Iiwicm91dGVyX2FsdGVybmF0aXZlIiwiYWRkRmVhdHVyZXMiLCJyZW5kZXJTeW5jIiwiYW5pbWF0ZSIsInN0YXJ0IiwiRGF0ZSIsImR1cmF0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsImNlbnRlciIsImFjdGl2ZVBvcnRzaWRlIiwiY29udGFpbmVyIiwib3V0ZXJXaWR0aCIsImFjdGl2ZVN0YXJib2FyZCIsImZpdCIsImdldFNpemUiLCJwYWRkaW5nIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uIiwic3RyTW9kIiwic3RyVHlwZSIsImltYWdlIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW50VHlwZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaHJlZiIsImdldFR5cGVUZXh0IiwidGV4dElEIiwiZ2V0TW9kaWZpZXJUZXh0Iiwic3RyTW9kaWZpZXIiLCJnZXREcml2aW5nSW5zdHJ1Y3Rpb25JY29uIiwiaW5zdHJ1Y3Rpb25JZCIsInJlcGxhY2UiLCJnZXRUZXh0IiwidGV4dF9pZCIsImdldERyaXZpbmdJbnN0cnVjdGlvbiIsImRlc2NyaXB0aW9uIiwicm91dGVySW5zdHJ1Y3Rpb24iLCJyb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIiLCJyb3V0ZXJJbnN0cnVjdGlvbnNIdG1sIiwiaW5zdHIiLCJyb3dzdHlsZSIsImoiLCJyb3V0ZV9uYW1lXzAiLCJyb3V0ZV9uYW1lXzEiLCJ0b3RhbF9kaXN0YW5jZSIsInRvdGFsX3RpbWUiLCJsZWdzIiwic3VtbWFyeSIsInNwbGl0IiwidG9IdW1hbkRpc3RhbmNlIiwiZGlzdGFuY2UiLCJ0b0h1bWFuVGltZSIsInJvdXRlX25hbWUiLCJyb3V0ZV9zdW1tYXJ5Iiwic3RlcHMiLCJtYW5ldXZlciIsIm1vZGlmaWVyIiwibG9jYXRpb24iLCJpbnN0cnVjdGlvbnRleHQiLCJleGl0Iiwicm91dGVfaW5zdHJ1Y3Rpb25zIiwic2VnbWVudHMiLCJpbnN0cnVjdGlvbiIsImFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24iLCJmbkl0ZW1DbGljayIsImZuSXRlbU92ZXIiLCJmbkl0ZW1PdXQiLCJnZXRGZWF0dXJlcyIsImN1cnJlbnRDb29yZGluYXRlcyIsImN1cnJlbnRIaW50RmVhdHVyZSIsInNldENlbnRlciIsImNvb3JkTG9uTGF0Iiwic3RyaW5nbG9ubGF0IiwicGFyc2VGbG9hdCIsIm5ld0Nvb3JkIiwiZnJvbUxvbkxhdCIsImVhY2giLCIkaW5wdXQiLCJ0cmlnZ2VyIiwiYWRkcmVzcyIsImNpdHkiLCJyb2FkIiwidG93biIsImhvdXNlX251bWJlciIsImRpc3BsYXlfbmFtZSIsImF0dHIiLCJib3VuZHMiLCJ2aWV3Ym94IiwiY2FsY3VsYXRlRXh0ZW50IiwidHJhbnNmb3JtRXh0ZW50IiwiZW5jb2RlVVJJIiwibG9uIiwibGF0IiwiYWxlcnQiLCJlcnJvciIsIlJPVVRFUl9WSUVXX0FMRVJUX0dFT0NPRElORyIsImRpc3RhbmNlSW5NZXRlcnMiLCJodW1hbkRpc3RhbmNlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwidGltZUluU2Vjb25kcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJodW1hblRpbWUiLCJleHREaXYiLCJkZWZhdWx0T3BlbiIsImlkZW50aWZpZXIiLCJjc3NuYW1lIiwiaW5pdGlhbGl6ZWQiLCJidXR0b24iLCJ3cmFwcGVyIiwidGl0bGVCYXIiLCJib3R0b21Ub29sYmFyIiwic2VjdGlvbnMiLCJ2aWV3VHJpZ2dlckJhciIsInZpZXdzIiwiYWN0aXZlVmlldyIsInBhdXNlZFZpZXciLCJDb250cm9sIiwidGFyZ2V0IiwiaW5pdENsYXNzIiwidGl0bGVCdXR0b25CYXIiLCJjbG9zZUJ1dHRvbiIsImNhcGl0YWxpemVkTmFtZSIsImhpZGVCdXR0b24iLCJjYWNoaW5nIiwidXRpbHMiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZSIsIm1lc3NhZ2UiLCJ0b2dnbGUiLCJnZXRUYXJnZXQiLCJhcHBlbmQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhZGRTZWN0aW9uIiwiY29udGVudEhlYWRsaW5lIiwiU3Bpbm5lciIsImdldFZhbHVlIiwib3B0X2V2ZW50IiwiY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IiwiY29udGFpbmVyT2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsImRpc3BsYXkiLCJvZmZzZXRXaWR0aCIsImZvckVhY2giLCJoYXNDbGFzcyIsInN0b3JlVmFsdWUiLCJwb3N0T3BlbkZ1bmN0aW9uIiwiaXNPcGVuIiwib3B0X2hpZGUiLCJvcHRfb3Blbk90aGVyU2lkZWJvYXJkIiwiZGVhY3RpdmF0ZSIsIm1ha2VCdXR0b24iLCJsYWJlbCIsImNsaWNrQWN0aW9uIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJuZXdFbGVtZW50Iiwib3B0X3ZpZXdTY29wZSIsInZpZXdTY29wZSIsImFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3MiLCJ2aWV3IiwiaW5pdEZ1bmN0aW9uIiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsInBhdXNlZCIsIm9wdF9vcGVuU2lkZWJvYXJkIiwib3B0X3BhdXNlIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwidW5kZWZpbmVkSFRNTCIsImdldFpvb20iLCJtaXNjIiwic3Bpbm5lclNwYW4iLCJhZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0VW5pcXVlSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJpbnB1dCIsIm91dHB1dCIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwib3JpZ2luIiwicGF0aG5hbWUiLCJoYXNoIiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImtleSIsIm9mZnNldCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsInNvcnQiLCJhIiwiYiIsImRlbHRhRGVjb2RlIiwiaXNOYU4iLCJjYWxsSG9va0Z1bmN0aW9ucyIsImFyckhvb2tGdW5jdGlvbnMiLCJwYXJhbWV0ZXJzIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInJlZHVjZWRTdHlsZSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibG9jYXRpb25TdHlsZXMiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwic2V0V2lkdGgiLCJDaXJjbGUiLCJmaWxsIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwicmVzdWx0IiwiUG9seWdvbiIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsImh0bWxWYWx1ZSIsImFicyIsImdldEFyZWEiLCJnZXRDZW50ZXIiLCJnZXRSYWRpdXMiLCJlZGdlQ29vcmRpbmF0ZSIsIlBJIiwic3FydCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJhcnJHZW9tZXRyaWVzIiwiZXh0ZW50U291cmNlIiwiZ2V0RXh0ZW50IiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwiZXh0ZW50IiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwibWluUmVzb2x1dGlvbiIsIm1pblpvb20iLCJtYXhab29tIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsInN0cklucHV0Iiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwiZnVuY3Rpb25OYW1lIiwiZ2V0U3R5bGUiLCJnZXQiLCJldktleSIsImVkaXRvclZhcnMiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsInJlZHJhd01hcFZpZXciLCJtYXBEYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJwcm9qZWN0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsInRvU3RyaW5nSERNUyIsImxvY2FsU3RvcmFnZSIsIlJvdXRlclBsdWdpbiIsInZpZXdBcmVhIiwibW9kV2F5SW50ZXJhY3Rpb24iLCJNb2RpZnkiLCJtYXBCcm93c2VyRXZlbnQiLCJyb3V0ZXJGZWF0dXJlc1NvdXJjZSIsInJvdXRlckZlYXR1cmVzTGF5ZXIiLCJmZWF0dXJlcyIsInNob3dGZWF0dXJlcyIsImxvZyIsImxheWVyQ29udHJvbGxlciIsImFyckxheWVycyIsImNvbnRlbnQiLCJwb3B1cCIsInVuc3R5bGVkRmVhdHVyZXMiLCJjb250ZW50RmVhdHVyZXMiLCJtaXNzaW5nU3R5bGVzIiwicmVzdWx0Q29vcmRpbmF0ZSIsInBvaW50IiwiY29udGVudEZlYXR1cmUiLCJzZXQiLCJjbHVzdGVyIiwiem9vbSIsImZpbGxjb2xvciIsImZvbnRjb2xvciIsImxvY19saW5rdXJsIiwiaG92ZXJfbG9jYXRpb24iLCJob3Zlcl9zdHlsZSIsInpvb21fb25jbGljayIsImxvY3N0eWxlIiwidGFncyIsInBlcmZvcm1BcmVhIiwicm91dGVyQ29udGVudEVsZW1lbnQiLCJhcmVhVmlldyIsImFyZWFWaWV3SW5wdXRXcmFwcGVyIiwiYXJlYUNvbnRlbnRFbGVtZW50IiwiYXJlYVZpZXdDb250ZW50V3JhcHBlciIsImFyZWFGcm9tTGFiZWwiLCJhcmVhRnJvbUNsZWFyIiwicm91dGVyQWN0aXZhdGVGdW5jdGlvbiIsInJvdXRlckRlYWN0aXZhdGVGdW5jdGlvbiIsImFyZWFGcm9tSW5wdXRXcmFwcGVyIiwiYXJlYUZyb21JbnB1dCIsIiRhcmVhRnJvbUNsZWFyIiwiYXJlYUFjdGl2YXRlRnVuY3Rpb24iLCJmbk1hcEFyZWFJbnRlcmFjdGlvbiIsInNjb3BlIiwiYXJlYVZhbHVlIiwiYXJlYURlYWN0aXZhdGVGdW5jdGlvbiIsImM0Z01hcHNIb29rcyIsIm1hcENvbnRyb2xsZXJfYWRkQ29udHJvbHMiLCJwYXJhbXMiLCJyb3V0ZXIiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNB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WXhrQixjQUFja0QsR0FBZCxDQUFrQm1nQixRQUE5QjtBQUNELEdBWkQ7QUFhRCxDQWwrQkEsRUFrK0JDbHJCLE1BbCtCRCxFQWsrQlMsS0FBS3hJLEdBbCtCZCxDQUFELEMiLCJmaWxlIjoicm91dGluZy1wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGluZy1wbHVnaW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzU4MDY0MmE2OGE1MTdiZDc0MjAiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnN0YW50ID0gdGhpcy5jNGcubWFwcy5jb25zdGFudCB8fCB7fTtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBMYW5ndWFnZSBjb25zdGFudHMgKGVuKVxuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuaTE4biA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4sIHtcblxuICAgIExBTkc6ICdkZScsXG5cbiAgICBOQU1FOiAnTmFtZScsXG4gICAgSElERTogJ1p1a2xhcHBlbicsXG4gICAgQ0xPU0U6ICdTY2hsaWXDn2VuJyxcbiAgICBQT0lOVDogJ1BPSScsXG4gICAgRlJFRUhBTkQ6ICdGcmVpaGFuZCcsXG4gICAgTElORTogJ0xpbmllJyxcbiAgICBQT0xZR09OOiAnRmzDpGNoZScsXG4gICAgQ0lSQ0xFOiAnUmFkaXVzJyxcbiAgICBQRVJJTUVURVI6ICdVbWZhbmcnLFxuICAgIExFTkdUSDogJ0zDpG5nZScsXG4gICAgU1VSRkFDRUFSRUE6ICdGbMOkY2hlbmluaGFsdCcsXG4gICAgUkFESVVTOiAnUmFkaXVzJyxcbiAgICBSRUZSRVNIOiAnQWt0dWFsaXNpZXJlbicsXG4gICAgQ09QWV9UT19DTElQQk9BUkQ6ICdJbiBad2lzY2hlbmFibGFnZSBrb3BpZXJlbicsXG5cbiAgICBDVFJMX1pPT01fSU46ICdWZXJncsO2w59lcm4nLFxuICAgIENUUkxfWk9PTV9PVVQ6ICdWZXJrbGVpbmVybicsXG4gICAgQ1RSTF9aT09NX0VYVDogJ01heGltYWwgdmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9IT01FOiAnWnVyIHVyc3Byw7xuZ2xpY2hlbiBQb3NpdGlvbicsXG4gICAgQ1RSTF9aT09NX1BPUzogJ1p1bSBha3R1ZWxsZW4gU3RhbmRvcnQnLFxuICAgIENUUkxfWk9PTV9TTElERVI6ICdab29tIFNsaWRlcicsXG4gICAgQ1RSTF9SRVNFVF9ST1RBVElPTjogJ1JvdGF0aW9uICh0b3VjaCwgYWx0K21vdXNlKSB6dXLDvGNrc2V0emVuJyxcbiAgICBDVFJMX1BPUlRTSURFOiAnUG9ydHNpZGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1JPVVRFUjogJ1JvdXRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfRURJVE9SOiAnRWRpdG9yIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9NRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9JTkZPUEFHRTogJ0luZm9zZWl0ZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfQURESVRJT05BTFBBTkVMOiAnUGFuZWwgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FDQ09VTlQ6ICdBY2NvdW50IGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9aT09NTEVWRUw6ICdab29tJyxcbiAgICBDVFJMX01PVVNFQ09PUkRTOiAnTG9uL0xhdCcsXG4gICAgQ1RSTF9HRU9TRUFSQ0g6ICdTdWNoZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUlRfU0VBUkNIOiAnU3VjaGUgc3RhcnRlbicsXG4gICAgQ1RSTF9PVkVSVklFV01BUDogJ8OcYmVyc2ljaHRza2FydGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0dFT0JPT0tNQVJLUzogJ0Zhdm9yaXRlbiB2ZXJ3YWx0ZW4nLFxuICAgIENUUkxfU0lERUJPQVJEOiAnU2lkZWJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9TVEFSQk9BUkQ6ICdTdGFyYm9hcmQgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FUVFJJQlVUSU9OOiAnQXR0cmlidXRpb24gYW56ZWlnZW4nLFxuICAgIENUUkxfR1JJRDogJ0dpdHRlciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfUEVSTUFMSU5LOiAnUGVybWFsaW5rIGdlbmVyaWVyZW4nLFxuICAgIENUUkxfRlVMTFNDUkVFTjogJ1ZvbGxiaWxkbW9kdXMgZWluLS9hdXNzY2hhbHRlbicsXG4gICAgQ1RSTF9QUklOVDogJ0thcnRlIGV4cG9ydGllcmVuJyxcblxuICAgIEVESVRPUjogJ0VkaXRvcicsXG4gICAgRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkU6ICdNZXNzZW4gd8OkaHJlbmQgZGVzIFplaWNobmVucycsXG4gICAgRURJVE9SX0VOQUJMRV9GUkVFSEFORF9EUkFXOiAnRnJlaWhhbmQgemVpY2huZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0FQUExZOiAnRWRpdGllcmVuIGJlZW5kZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ0VsZW1lbnQgbMO2c2NoZW4nLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ0VsZW1lbnQgZWRpdGllcmVuIC8gdmVyc2NoaWViZW4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GTzogJ1p1ciBBdXN3YWhsIGVpbiBFbGVtZW50IGF1ZiBkZXIgS2FydGUgYW5rbGlja2VuLicsXG4gICAgRURJVE9SX1NFTEVDVF9JTkZPX0FERElUSU9OQUw6ICdbU3RyZ10gKyBbS2xpY2tdIGbDvHIgTWVocmZhY2hhdXN3YWhsIDxicj5bU2hpZnRdIGhhbHRlbiBmw7xyIEF1c3dhaGxib3gnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPSU5UOiAnS2FydGVuZWxlbWVudGUnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ0ZyZWloYW5kd2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2Vud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ0Zsw6RjaGVud2Vya3pldWdlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnS3JlaXN3ZXJremV1Z2UnLFxuXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ1JvdXRlIHZvbiBoaWVyJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuXG4gICAgU1RBUkJPQVJEOiAnU3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSOiAnQmFzaXNrYXJ0ZW4nLFxuICAgIFNUQVJCT0FSRF9MQVlFUjogJ0ViZW5lbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdLYXJ0ZW5lbGVtZW50ZScsXG5cbiAgICBTSURFQk9BUkQ6ICdTaWRlYm9hcmQnLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVDogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0ZST01fTEFCRUw6ICdTdGFydCcsXG4gICAgUk9VVEVSX09WRVJfTEFCRUw6ICdad2lzY2hlbnppZWwnLFxuICAgIFJPVVRFUl9UT19MQUJFTDogJ1ppZWwnLFxuICAgIFJPVVRFUl9DTEVBUl9USVRMRTogJ0zDtnNjaGVuJyxcbiAgICBST1VURVJfQ0xFQVJfSFRNTDogJycsXG4gICAgUk9VVEVSX0xhYmVsX0ludGVyaW06ICdad2lzY2hlbnppZWwnLFxuXG4gICAgUk9VVEVSX1NXSVRDSDonV2VjaHNlbCB2b24gU3RhcnQgdW5kIFppZWwnLFxuICAgIFJPVVRFUl9PVkVSOidad2lzY2hlbnppZWwgaGluenVmw7xnZW4nLFxuICAgIFJPVVRFUl9QUklOVDonUm91dGVuYmVzY2hyZWlidW5nIGRydWNrZW4nLFxuXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEU6ICdSb3V0ZTonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFOiAnRW50ZmVybnVuZzonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1RJTUU6ICdaZWl0OicsXG4gICAgUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRTogJ1Byb2ZpbDonLFxuXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4uJyxcbiAgICBST1VURVJfVklFV19BTEVSVF9HT0NPRElORzogJ1p1Z3JpZmYgYXVmIEdlb2NvZGVyIGZlaGxnZXNjaGxhZ2VuLicsXG5cbiAgICBST1VURVI6ICdSb3V0ZXInLFxuICAgIFJPVVRFUl9OOiAnTm9yZGVuJyxcbiAgICBST1VURVJfRTogJ09zdCcsXG4gICAgUk9VVEVSX1M6ICdTw7xkZW4nLFxuICAgIFJPVVRFUl9XOiAnV2VzdGVuJyxcbiAgICBST1VURVJfTkU6ICdOb3Jkb3N0JyxcbiAgICBST1VURVJfU0U6ICdTw7xkb3N0JyxcbiAgICBST1VURVJfU1c6ICdTw7xkd2VzdCcsXG4gICAgUk9VVEVSX05XOiAnTm9yZHdlc3QnLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMDogJ1VuYmVrYW5udGUgQW53ZWlzdW5nWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xOiAnR2VyYWRlYXVzIHdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMjogJ0xlaWNodCByZWNodHMgYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzM6ICdSZWNodHMgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzQ6ICdTY2hhcmYgcmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl81OiAnV2VuZGVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl82OiAnU2NoYXJmIGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl83OiAnTGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzg6ICdMZWljaHQgbGlua3MgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzEwOiAnRmFocmVuIFNpZSBSaWNodHVuZyA8Yj4lZDwvYj5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0xJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZXJzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTInOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB6d2VpdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTMnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBkcml0dGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTQnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSB2aWVydGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTUnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBmw7xuZnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS02JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgc2VjaHN0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNyc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNpZWJ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGFjaHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS05JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgbmV1bnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS14JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZWluZXIgZGVyIHZpZWxlbiBNw7ZnbGljaGtlaXRlblsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTU6ICdTaWUgaGFiZW4gSWhyIFppZWwgZXJyZWljaHQnLFxuXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8wJzogJyAlbSBmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEnOiAnICVtIGRlbSBTdHJhw59lbnZlcmxhdWYgZm9sZ2VuWyBhbHMgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8yJzogJyBGYWhyZW4gU2llWyBhdWYgPGI+JXM8L2I+XSBsb3MnLFxuICAgICdST1VURVJfNS5YX1RZUEVfMyc6ICcgRGFzIFppZWwgYmVmaW5kZXQgc2ljaCA8Yj4lbTwvYj4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNCc6ICcgV2VpdGVyZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV81JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYXVmZmFocmVuJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzYnOiAnICVtIFthdWYgPGI+JXM8L2I+IF1hYmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV83JzogJyBEZW4gRmFocnN0cmVpZmVuICVtIGJlbnV0emVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV84JzogJyAlbSBhYmJpZWdlbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOSc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTAnOiAnICVtIGZhaHJlbiB1bSBhdWYgZGVyIFN0cmHDn2UgenUgYmxlaWJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMSc6ICcgSW0gS3JlaXN2ZXJrZWhyIGRpZSA8Yj4lei48L2I+IEF1c2ZhaHJ0IG5laG1lbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTInOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEzJzogJyAlbSBmYWhyZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzE0JzogJyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuXG4gICAgJ1JPVVRFUl81LlhfTU9EXzAnICA6ICdVdHVybicsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzEnICA6ICdTY2hhcmYgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfMicgIDogJ1JlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzMnICA6ICdMZWljaHQgcmVjaHRzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNCcgIDogJ0dlcmFkZWF1cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzUnICA6ICdMZWljaHQgbGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF82JyAgOiAnTGlua3MnLFxuICAgICdST1VURVJfNS5YX01PRF83JyAgOiAnU2NoYXJmIGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfOCcgIDogJ2luIGRlciBOw6RoZScsXG5cbiAgICBST1VURVJfRlJPTTogJ1N0YXJ0JyxcbiAgICBST1VURVJfVE86ICdaaWVsJyxcbiAgICBST1VURVJfRklORF9ST1VURTogJ1JvdXRlIGZpbmRlbicsXG4gICAgUk9VVEVSX0xPQ19ST1VURV9UTzogJ1JvdXRlIGhpZXJoaW4nLFxuICAgIFJPVVRFUl9ST1VURURFU0M6ICdSb3V0ZW5iZXNjaHJlaWJ1bmcnLFxuICAgIFJPVVRFUl9ST1VURU5BTUU6ICdSb3V0ZScsXG4gICAgUk9VVEVSX0RJU1RBTkNFOiAnRGlzdGFueicsXG4gICAgUk9VVEVSX1RJTUU6ICdaZWl0JyxcbiAgICBST1VURVJfUkVWX0dFT0NPRElORzogJ0VybWl0dGxlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9SRVZfR0VPQ09ESU5HOiAnRmVobGVyIGJlaW0gRXJtaXR0ZWxuIGRlciBBZHJlc3NlJyxcbiAgICBST1VURVJfU0VBUkNISU5HOiAnU3VjaGUgQWRyZXNzZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX1NFQVJDSElORzogJ0ZlaGxlciBiZWltIFN1Y2hlbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX0NBTENfUk9VVEU6ICdCZXJlY2huZSBSb3V0ZS4uLicsXG4gICAgUk9VVEVSX0VSUk9SX0NBTENfUk9VVEU6ICdGZWhsZXIgYmVpbSBCZXJlY2huZW4gZGVyIFJvdXRlJyxcblxuICAgIE1FQVNVUkVUT09MUzogJ01lc3N3ZXJremV1Z2UnLFxuICAgIE1FQVNVUkVUT09MU19JTkZPOiAnV8OkaGxlbiBTaWUgd2VpdGVyIHVudGVuIGVpbmVuIE1lc3N0eXAgYXVzIHVuZCBzdGFydGVuIFNpZSBkaWUgTWVzc3VuZyBkdXJjaCBkYXMgS2xpY2tlbiBhdWYgZGVyIEthcnRlLicsXG4gICAgTUVBU1VSRVRPT0xTX0lORk9fQURESVRJT05BTDogJyhFaW56ZWxuZSBNZXNzdW5nZW4ga8O2bm5lbiBtaXQgZWluZW0gRG9wcGVsa2xpY2sgYmVlbmRldCB3ZXJkZW4uKScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdBdXN3YWhsIE1vZHVzJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ1N0cmVja2VuIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdSYWRpdXMgbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZCBtZXNzZW4nLFxuXG4gICAgR0VPQk9PS01BUktTX1BMQUNFSE9MREVSOiAnTmV1ZSBCZXplaWNobnVuZycsXG5cbiAgICBJTkZPUEFHRTogJ0luZm9ybWF0aW9uZW4nLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ1BhbmVsJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnUGFuZWwgYW56ZWlnZW4nLFxuICAgIEFDQ09VTlQ6ICdBY2NvdW50JyxcbiAgICBBQ0NPVU5UX1ZJRVdfVFJJR0dFUjogJ0FjY291bnQgYW56ZWlnZW4nLFxuXG4gICAgU0VBUkNIX05PVF9GT1VORDogJ0RpZSBMb2thdGlvbiBrb25udGUgbmljaHQgZ2VmdW5kZW4gd2VyZGVuLiBCaXR0ZSB2ZXJzdWNoZW4gU2llIGVpbmUgYW5kZXJlIEVpbmdhYmUuJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwibGFuZ3VhZ2UgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGxhbmdDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmkxOG47XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ1NTIGNvbnN0YW50c1xuICAgKi9cbiAgYzRnLm1hcHMuY29uc3RhbnQuY3NzID0gJC5leHRlbmQoYzRnLm1hcHMuY29uc3RhbnQuY3NzLCB7XG5cbiAgICBPUEVOOiAnYzRnLW9wZW4nLFxuICAgIENMT1NFOiAnYzRnLWNsb3NlJyxcbiAgICBDTE9TRUFCTEU6ICdjNGctY2xvc2VhYmxlJyxcbiAgICBFTkFCTEVEOiAnYzRnLWVuYWJsZWQnLFxuICAgIERJU0FCTEVEOiAnYzRnLWRpc2FibGVkJyxcbiAgICBISURFOiAnYzRnLWhpZGUnLFxuICAgIElDT046ICdjNGctaWNvbicsXG4gICAgQ09OVFJPTDogJ2M0Zy1jb250cm9sJyxcbiAgICBDT1BZOiAnYzRnLWNvcHknLFxuICAgIFJFRlJFU0g6ICdjNGctcmVmcmVzaCcsXG4gICAgQUNUSVZFOiAnYzRnLWFjdGl2ZScsXG4gICAgSU5BQ1RJVkU6ICdjNGctaW5hY3RpdmUnLFxuICAgIExPQURJTkc6ICdjNGctbG9hZGluZycsXG4gICAgQU5JTUFUSU9OX1NQSU46ICdjNGctYW5pbWF0aW9uLXNwaW4nLFxuICAgIExBUkdFOiAnYzRnLWxhcmdlJyxcbiAgICBTTUFMTDogJ2M0Zy1zbWFsbCcsXG4gICAgSE9SSVpPTlRBTDogJ2M0Zy1ob3Jpem9udGFsJyxcbiAgICBWRVJUSUNBTDogJ2M0Zy12ZXJ0aWNhbCcsXG5cbiAgICBBVFRSSUJVVElPTl9MT0dPOiAnYzRnLWF0dHJpYnV0aW9uLWxvZ28nLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX1RMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLXRvcC1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtcmlnaHQnLFxuICAgIENPTlRST0xfQ09OVEFJTkVSX0JMOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLWxlZnQtc3ViJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CUjogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tcmlnaHQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQ6ICdjNGctZHJhdy1jb250ZW50LXBvaW50JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EOiAnYzRnLWRyYXctY29udGVudC1mcmVlaGFuZCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HOiAnYzRnLWRyYXctY29udGVudC1saW5lJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPTFlHT046ICdjNGctZHJhdy1jb250ZW50LXBvbHlnb24nLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfQ0lSQ0xFOiAnYzRnLWRyYXctY29udGVudC1jaXJjbGUnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfUFJPSkVDVDogJ2M0Zy1kcmF3LWNvbnRlbnQtcHJvamVjdCcsXG4gICAgRURJVE9SX0RSQVdfVFJJR0dFUjogJ2M0Zy1kcmF3LXRyaWdnZXInLFxuICAgIEVESVRPUl9DT05URU5UX1NFTEVDVDogJ2M0Zy1jb250ZW50LXNlbGVjdCcsXG4gICAgRURJVE9SX0RSQVdfT1BUSU9OUzogJ2M0Zy1lZGl0b3ItZHJhdy1vcHRpb25zJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1hcHBseScsXG4gICAgRURJVE9SX0ZFQVRVUkVfREVMRVRFOiAnYzRnLWVkaXRvci1mZWF0dXJlLWRlbGV0ZScsXG4gICAgRURJVE9SX0ZFQVRVUkVfTU9ESUZZOiAnYzRnLWVkaXRvci1mZWF0dXJlLW1vZGlmeScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1Q6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1zZWxlY3QnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9pbnQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItZHJhdy1saW5lJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTjogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctcG9seWdvbicsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctY2lyY2xlJyxcbiAgICBHRU9TRUFSQ0g6ICdjNGctZ2Vvc2VhcmNoJyxcbiAgICBHRU9TRUFSQ0hfV1JBUFBFUjogJ2M0Zy1nZW9zZWFyY2gtd3JhcHBlcicsXG4gICAgR0VPU0VBUkNIX1RSSUdHRVI6ICdjNGctZ2Vvc2VhcmNoLXRyaWdnZXInLFxuICAgIEdFT1NFQVJDSF9TVEFSVDogJ2M0Zy1nZW9zZWFyY2gtc3RhcnQnLFxuICAgIEdSQVRJQ1VMRTogJ2M0Zy1ncmF0aWN1bGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1mcmVlaGFuZCcsXG4gICAgUFJJTlQ6J2M0Zy1wcmludCcsXG4gICAgSU5GT1BBR0VfVklFV19UUklHR0VSOiAnYzRnLWluZm9wYWdlLXZpZXctdHJpZ2dlcicsXG4gICAgSU5GT1BBR0U6ICdjNGctaW5mb3BhZ2UnLFxuICAgIEFERElUSU9OQUxQQU5FTF9WSUVXX1RSSUdHRVI6ICdjNGctYWRkaXRpb25hbHBhbmVsLXZpZXctdHJpZ2dlcicsXG4gICAgQURESVRJT05BTFBBTkVMOiAnYzRnLWFkZGl0aW9uYWxwYW5lbCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdjNGctYWNjb3VudC12aWV3LXRyaWdnZXInLFxuICAgIEFDQ09VTlQ6ICdjNGctYWNjb3VudCcsXG4gICAgT1ZFUlZJRVdNQVA6ICdjNGctb3ZlcnZpZXdtYXAnLFxuICAgIE9WRVJWSUVXTUFQX1dSQVBQRVI6ICdjNGctb3ZlcnZpZXdtYXAtd3JhcHBlcicsXG4gICAgR0VPQk9PS01BUktTOiAnYzRnLWdlb2Jvb2ttYXJrcycsXG4gICAgUEVSTUFMSU5LOiAnYzRnLXBlcm1hbGluaycsXG4gICAgUEVSTUFMSU5LX1BPUFVQOiAnYzRnLXBlcm1hbGluay1wb3B1cCcsXG4gICAgUE9QVVBfQ0xPU0U6ICdjNGctcG9wdXAtY2xvc2UnLFxuICAgIFBPUFVQX1JPVVRFX1dSQVBQRVI6ICdjNGctcG9wdXAtcm91dGUtd3JhcHBlcicsXG4gICAgUE9QVVBfUk9VVEVfRlJPTTogJ2M0Zy1wb3B1cC1yb3V0ZS1mcm9tJyxcbiAgICBQT1BVUF9ST1VURV9UTzogJ2M0Zy1wb3B1cC1yb3V0ZS10bycsXG4gICAgUE9SVFNJREU6ICdjNGctcG9ydHNpZGUnLFxuICAgIFBPUlRTSURFX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250YWluZXInLFxuICAgIFBPUlRTSURFX0NPTlRST0w6ICdjNGctcG9ydHNpZGUtY29udHJvbCcsXG4gICAgUE9SVFNJREVfV1JBUFBFUjogJ2M0Zy1wb3J0c2lkZS13cmFwcGVyJyxcbiAgICBQT1JUU0lERV9USVRMRUJBUjogJ2M0Zy1wb3J0c2lkZS10aXRsZWJhcicsXG4gICAgUE9SVFNJREVfVE9QX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtdG9wLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9CT1RUT01fVE9PTEJBUjogJ2M0Zy1wb3J0c2lkZS1ib3R0b20tdG9vbGJhcicsXG4gICAgUE9SVFNJREVfU1RBVFVTQkFSOiAnYzRnLXBvcnRzaWRlLXN0YXR1c2JhcicsXG4gICAgUE9SVFNJREVfVklFV1RSSUdHRVJCQVI6ICdjNGctcG9ydHNpZGUtdmlld3RyaWdnZXJiYXInLFxuICAgIFBPUlRTSURFX0hFQURMSU5FOiAnYzRnLXBvcnRzaWRlLWhlYWRsaW5lJyxcbiAgICBQT1JUU0lERV9CVVRUT05CQVI6ICdjNGctcG9ydHNpZGUtYnV0dG9uYmFyJyxcbiAgICBQT1JUU0lERV9CVVRUT046ICdjNGctcG9ydHNpZGUtYnV0dG9uJyxcbiAgICBQT1JUU0lERV9ISURFOiAnYzRnLXBvcnRzaWRlLWhpZGUnLFxuICAgIFBPUlRTSURFX0NMT1NFOiAnYzRnLXBvcnRzaWRlLWNsb3NlJyxcbiAgICBTUElOTkVSOiAnYzRnLXNwaW5uZXInLFxuICAgIFNUQVJCT0FSRDogJ2M0Zy1zdGFyYm9hcmQnLFxuICAgIFNUQVJCT0FSRF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0NPTlRST0w6ICdjNGctc3RhcmJvYXJkLWNvbnRyb2wnLFxuICAgIFNUQVJCT0FSRF9XUkFQUEVSOiAnYzRnLXN0YXJib2FyZC13cmFwcGVyJyxcbiAgICBTVEFSQk9BUkRfVElUTEVCQVI6ICdjNGctc3RhcmJvYXJkLXRpdGxlYmFyJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVI6ICdjNGctc3RhcmJvYXJkLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICBTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVI6ICdjNGctc3RhcmJvYXJkLWJvdHRvbS10b29sYmFyJyxcbiAgICBTVEFSQk9BUkRfU1RBVFVTQkFSOiAnYzRnLXN0YXJib2FyZC1zdGF0dXNiYXInLFxuICAgIFNUQVJCT0FSRF9WSUVXVFJJR0dFUkJBUjogJ2M0Zy1zdGFyYm9hcmQtdmlld3RyaWdnZXJiYXInLFxuICAgIFNUQVJCT0FSRF9IRUFETElORTogJ2M0Zy1zdGFyYm9hcmQtaGVhZGxpbmUnLFxuICAgIFNUQVJCT0FSRF9CVVRUT05CQVI6ICdjNGctc3RhcmJvYXJkLWJ1dHRvbmJhcicsXG4gICAgU1RBUkJPQVJEX0JVVFRPTjogJ2M0Zy1zdGFyYm9hcmQtYnV0dG9uJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLXN0YXJib2FyZC12aWV3LXRyaWdnZXItYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9DTE9TRTogJ2M0Zy1zdGFyYm9hcmQtY2xvc2UnLFxuICAgIFNUQVJCT0FSRF9DT05URU5UX0JBU0VMQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtYmFzZWxheWVyc3dpdGNoZXInLFxuICAgIFNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFOiAnYzRnLWJhc2VsYXllcnRyZWUnLFxuICAgIFNUQVJCT0FSRF9MQVlFUlRSRUU6ICdjNGctbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9MQVlFUlNXSVRDSEVSOiAnYzRnLWNvbnRlbnQtbGF5ZXJzd2l0Y2hlcicsXG4gICAgVE9PTFRJUF9QT1BVUDogJ2M0Zy10b29sdGlwLXBvcHVwJyxcbiAgICBaT09NX0xFVkVMOiAnYzRnLXpvb20tbGV2ZWwnLFxuXG4gICAgUk9VVEVSX0lOUFVUX1dSQVBQRVI6ICdjNGctcm91dGVyLWlucHV0LXdyYXBwZXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dSQVBQRVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlcicsXG4gICAgUk9VVEVSX0lOUFVUX0ZST006ICdjNGctcm91dGVyLWlucHV0LWZyb20nLFxuICAgIFJPVVRFUl9JTlBVVF9UTzogJ2M0Zy1yb3V0ZXItaW5wdXQtdG8nLFxuICAgIFJPVVRFUl9JTlBVVF9DTEVBUjogJ2M0Zy1yb3V0ZXItaW5wdXQtY2xlYXInLFxuICAgIFJPVVRFUl9CVVRUT05CQVI6ICdjNGctcm91dGVyLWJ1dHRvbmJhcicsXG4gICAgUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVI6ICdjNGctcm91dGVyLWF0dHJpYnV0aW9uLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfV1JBUFBFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSEVBREVSOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtaGVhZGVyJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6ICdjNGctcm91dGVyLXN3aXRjaCcsXG4gICAgUk9VVEVSX09WRVI6ICdjNGctcm91dGVyLW92ZXInLFxuICAgIFJPVVRFUl9QUklOVDogJ2M0Zy1yb3V0ZXItcHJpbnQnLFxuXG4gICAgUk9VVEVSX1BST0ZJTEVfQ0FSOiAnYzRnLXJvdXRlci1wcm9maWxlLWNhcicsXG4gICAgUk9VVEVSX1BST0ZJTEVfSEdWOiAnYzRnLXJvdXRlci1wcm9maWxlLWhndicsXG4gICAgUk9VVEVSX1BST0ZJTEVfQklLRTogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1iaWtlJyxcbiAgICBST1VURVJfUFJPRklMRV9GT09UOiAnYzRnLXJvdXRlci1wcm9maWxlLWZvb3QnLFxuICAgIFJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVI6ICdjNGctcm91dGVyLXByb2ZpbGUtd2hlZWxjaGFpcicsXG5cblxuXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19UQUJMRTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24tdGFibGUnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbScsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tb2RkJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbS0tZXZlbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV9kaXJlY3Rpb24taWNvbicsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX3RleHQnLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0U6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlzdGFuY2UnLFxuXG4gICAgT0xfQ09OVFJPTDogJ29sLWNvbnRyb2wnLFxuICAgIE9MX1VOU0VMRUNUQUJMRTogJ29sLXVuc2VsZWN0YWJsZScsXG5cbiAgICBPTF9PVkVSTEFZQ09OVEFJTkVSOiAnb2wtb3ZlcmxheWNvbnRhaW5lcicsXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRTogJ29sLW92ZXJsYXljb250YWluZXItc3RvcGV2ZW50JyxcbiAgICBPTF9WSUVXUE9SVDogJ29sLXZpZXdwb3J0JyxcbiAgICBPTF9aT09NOiAnb2wtem9vbScsXG4gICAgT0xfWk9PTV9JTjogJ29sLXpvb20taW4nLFxuICAgIE9MX1pPT01fRVhUOiAnb2wtem9vbS1leHRlbnQnLFxuICAgIE9MX1pPT01fSE9NRTogJ29sLXpvb20taG9tZScsXG4gICAgT0xfWk9PTV9QT1M6ICdvbC16b29tLXBvc2l0aW9uJyxcbiAgICBPTF9aT09NX1dJVEhfRVhUOiAnb2wtem9vbS13aXRoLWV4dGVudCcsXG4gICAgT0xfWk9PTV9XSVRIX0hPTUU6ICdvbC16b29tLXdpdGgtaG9tZScsXG4gICAgT0xfWk9PTV9XSVRIX1BPUzogJ29sLXpvb20td2l0aC1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9TTElERVI6ICdvbC16b29tLXNsaWRlcicsXG4gICAgT0xfWk9PTV9XSVRIX1NMSURFUjogJ29sLXpvb20td2l0aC1zbGlkZXInLFxuXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG4gIH0pOyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIGNzc0NvbnN0YW50cyA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQuY3NzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7U2lkZWJvYXJkfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZFwiO1xuaW1wb3J0IHtsYW5nQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAZXh0ZW5kcyB7YzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmR9XG4gICAqXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIG1hcENvbnRyb2xsZXIgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgY29uZmlnICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXIgPSBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgIC8vIGV4dGVuZCBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgbmFtZTogJ3JvdXRlcicsXG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBtYXBDb250cm9sbGVyOiB1bmRlZmluZWQsXG4gICAgICBoZWFkbGluZTogbGFuZ0NvbnN0YW50cy5ST1VURVIsXG4gICAgICBkaXJlY3Rpb246ICdsZWZ0J1xuICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5pbmRleD0wO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY29uc3RydWN0b3JcbiAgICBTaWRlYm9hcmQuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbmhlcml0IGZyb20gXCJTaWRlYm9hcmRcIlxuICAgKi9cbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXIsIFNpZGVib2FyZCk7XG5cbiAgLyoqXG4gICAqIE1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyLnByb3RvdHlwZSwge1xuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICB2aWV3Um91dGVyLFxuICAgICAgICAgIHNlbGVjdEludGVyYWN0aW9uLFxuICAgICAgICAgIHByb2ZpbGVJZDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG5cbiAgICAgIC8vIGNoZWNrIGFuZCBsb2FkIGxvY2F0aW9uIHN0eWxlcyB2aWEgbWFwLXByb3h5XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlLFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVcbiAgICAgIF0pO1xuXG5cbiAgICAgIC8vIEFkZCByb3V0ZXIgbGF5ZXIocylcbiAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0ZXJXYXlMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ1dheVNvdXJjZSxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgNTEsIDExOSwgMC45KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0ZXJBbHRXYXlMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSxcbiAgICAgICAgekluZGV4OiAwLFxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgNTEsIDExOSwgMC40KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxlY3RJbnRlcmFjdGlvbiA9IG5ldyBvbC5pbnRlcmFjdGlvbi5TZWxlY3Qoe1xuICAgICAgICAgIHN0eWxlOltcbiAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgICAgICAgICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuXG4gICAgICB9KTtcbiAgICAgIHNlbGVjdEludGVyYWN0aW9uLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgIGlmKGV2ZW50LnNlbGVjdGVkWzBdICkge1xuICAgICAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBldmVudC5zZWxlY3RlZFswXS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgICAgICBpZihnZW9tZXRyeSAmJiBnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZyl7XG4gICAgICAgICAgICAgICAgICBzZWxmLnNob3dBbHRSb3V0ZShzZWxmLnJlc3BvbnNlLGV2ZW50LnNlbGVjdGVkWzBdLmdldElkKCkpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oc2VsZWN0SW50ZXJhY3Rpb24pO1xuXG5cbiAgICAgICAgdGhpcy5yb3V0aW5nSGludFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLnJvdXRlckhpbnRMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0hpbnRTb3VyY2UsXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3NlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgcmV0dXJuICghc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkpIHx8IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZV0uc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLmxvY2F0aW9uc0xheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgIHNvdXJjZTogdGhpcy5sb2NhdGlvbnNTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMlxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucm91dGVyTGF5ZXJHcm91cCA9IG5ldyBvbC5sYXllci5Hcm91cCh7XG4gICAgICAgIGxheWVyczogbmV3IG9sLkNvbGxlY3Rpb24oW1xuICAgICAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIsXG4gICAgICAgICAgdGhpcy5yb3V0ZXJBbHRXYXlMYXllcixcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uc0xheWVyLFxuICAgICAgICAgIHRoaXMucm91dGVySGludExheWVyXG4gICAgICAgIF0pLFxuICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLnJvdXRlckxheWVyR3JvdXApO1xuXG4gICAgICB2aWV3Um91dGVyID0gdGhpcy5hZGRVc2VySW50ZXJmYWNlKCk7XG4gICAgICB2aWV3Um91dGVyLmFjdGl2YXRlKCk7XG5cbiAgICAgIC8vIHN0b3JlIHNvbWUgdmFycyBmb3IgYWpheC1yZXF1ZXN0c1xuICAgICAgcHJvZmlsZUlkID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgICAgdGhpcy5nZW9TZWFyY2hBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2ggKyAnLycgKyBwcm9maWxlSWQ7XG4gICAgICB0aGlzLmdlb1JldmVyc2VTZWFyY2hBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2hfcmV2ZXJzZSArICcvJyArIHByb2ZpbGVJZDtcbiAgICAgIHRoaXMucm91dGluZ0FwaSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLnJvdXRpbmcgKyAnLycgKyBwcm9maWxlSWQ7XG5cbiAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBwcmVPcGVuRnVuY3Rpb246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB0aGlzLmFkZE1hcElucHV0SW50ZXJhY3Rpb24oKTtcblxuICAgICAgaWYgKG9wdF9vcHRpb25zICYmIG9wdF9vcHRpb25zLnRvTG9uTGF0KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2godGhpcy4kdG9JbnB1dCwgb3B0X29wdGlvbnMudG9Mb25MYXQpO1xuICAgICAgICB0aGlzLnRvVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChbb3B0X29wdGlvbnMudG9Mb25MYXRbMV0sIG9wdF9vcHRpb25zLnRvTG9uTGF0WzBdXSk7XG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgcHJlSGlkZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgICB9LFxuXG4gICAgcHJlQ2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuY2xlYXIoKTtcblxuICAgICAgJCh0aGlzLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpLmVtcHR5KCk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQodGhpcy4kZnJvbUlucHV0KTtcbiAgICAgIGlmKHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICBmb3IodmFyIGlkIGluIHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICAgICAgdGhpcy5jbGVhck92ZXIodGhpcy4kb3ZlcklucHV0LGlkKTtcbiAgICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICAgIGlmKGVsZW0pe1xuICAgICAgICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYXJJbnB1dCh0aGlzLiR0b0lucHV0KTtcblxuICAgICAgdGhpcy5yZW1vdmVNYXBJbnB1dEludGVyYWN0aW9uKCk7XG5cbiAgICB9LFxuXG4gICAgcmVtb3ZlTWFwSW5wdXRJbnRlcmFjdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAudW4oJ2NsaWNrJywgc2VsZi5mbk1hcFJvdXRlckludGVyYWN0aW9uKTtcblxuICAgICAgaWYgKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKSAmJlxuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpWyc5J10pIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KClbJzknXS5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGRNYXBJbnB1dEludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICBjb29yZGluYXRlO1xuXG4gICAgICBzZWxmLmZuTWFwUm91dGVySW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG5cbiAgICAgICAgY29vcmRpbmF0ZSA9IG9sLnByb2oudG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpO1xuXG4gICAgICAgIGlmIChzZWxmLiRmcm9tSW5wdXQudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAvL3NlbGYuJGZyb21JbnB1dC52YWwob2wucHJvai50b0xvbkxhdChldnQuY29vcmRpbmF0ZSkpO1xuICAgICAgICAgIHNlbGYucGVyZm9ybVJldmVyc2VTZWFyY2goc2VsZi4kZnJvbUlucHV0LCBjb29yZGluYXRlKTtcbiAgICAgICAgICBzZWxmLmZyb21WYWx1ZSA9IG5ldyBvbC5nZW9tLlBvaW50KGNvb3JkaW5hdGUpO1xuXG4gICAgICAgICAgLy9zZWxmLiRmcm9tSW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi4kdG9JbnB1dC52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAgIC8vc2VsZi4kdG9JbnB1dC52YWwob2wucHJvai50b0xvbkxhdChldnQuY29vcmRpbmF0ZSkpO1xuICAgICAgICAgIHNlbGYucGVyZm9ybVJldmVyc2VTZWFyY2goc2VsZi4kdG9JbnB1dCwgY29vcmRpbmF0ZSk7XG4gICAgICAgICAgc2VsZi50b1ZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRpbmF0ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi4kb3ZlcklucHV0KSB7XG4gICAgICAgICAgICBpZihzZWxmLiRvdmVySW5wdXQudmFsKCkgPT09XCJcIikge1xuICAgICAgICAgICAgICAgIHNlbGYucGVyZm9ybVJldmVyc2VTZWFyY2goc2VsZi4kb3ZlcklucHV0LCBjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYub3ZlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3ZlclZhbHVlPXt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm92ZXJWYWx1ZVtzZWxmLmluZGV4XT1uZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICBzZWxmLiRidXR0b25PdmVyLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdjbGljaycsIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbik7XG4gICAgICAvLyBpZihzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKVsnOSddKXtcbiAgICAgIC8vICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKVsnOSddLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIGVsc2V7XG4gICAgICAvLyAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldEludGVyYWN0aW9ucygpLmdldEFycmF5KClbJzgnXS5zZXRBY3RpdmUodHJ1ZSlcbiAgICAgIC8vIH1cbiAgICB9LFxuXG5cbiAgICBhZGRVc2VySW50ZXJmYWNlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGxldCBzZWxmLFxuICAgICAgICAgIHJvdXRlclZpZXcsXG4gICAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlcixcbiAgICAgICAgICByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIsXG4gICAgICAgICAgcm91dGVyVmlld0NvbnRlbnRIZWFkbGluZSxcbiAgICAgICAgICBwcmludCxcbiAgICAgICAgICByb3V0ZVByb2ZpbGUgPVtdLFxuICAgICAgICAgIHJvdXRlckZyb21MYWJlbCxcbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwsXG4gICAgICAgICAgcm91dGVyVG9MYWJlbCxcbiAgICAgICAgICByb3V0ZXJGcm9tQ2xlYXIsXG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLFxuICAgICAgICAgIHJvdXRlclRvQ2xlYXIsXG4gICAgICAgICAgc3dpdGNoRnJvbVRvLFxuICAgICAgICAgIGJ1dHRvbk92ZXI7XG5cblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdXRlclZpZXdDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICBzZWxmLnJvdXRlclZpZXdDb250ZW50V3JhcHBlciA9IHJvdXRlclZpZXdDb250ZW50V3JhcHBlcjtcblxuICAgICAgLy8gQFRPRE86IEFkZCByb3V0ZXItaW5mby10ZXh0XG4gICAgICAvLyByb3V0ZXJWaWV3Q29udGVudEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIC8vIHJvdXRlclZpZXdDb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BRERSRVNTX0lOUFVUO1xuICAgICAgLy8gcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlclZpZXdDb250ZW50SGVhZGxpbmUpO1xuXG4gICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1dSQVBQRVI7XG5cbiAgICAgIHRoaXMuZnJvbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGhpcy5mcm9tSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgdGhpcy5mcm9tSW5wdXQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9GUk9NO1xuICAgICAgdGhpcy5mcm9tSW5wdXQuaWQgPSB0aGlzLmZyb21JbnB1dC5uYW1lID0gXCJyb3V0aW5nRnJvbVwiO1xuXG4gICAgICByb3V0ZXJGcm9tTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgcm91dGVyRnJvbUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdGcm9tJyk7XG4gICAgICByb3V0ZXJGcm9tTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTV9MQUJFTDtcblxuICAgICAgcm91dGVyRnJvbUNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByb3V0ZXJGcm9tQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgIHJvdXRlckZyb21DbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgcm91dGVyRnJvbUNsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICB0aGlzLiRyb3V0ZXJGcm9tQ2xlYXIgPSAkKHJvdXRlckZyb21DbGVhcik7XG5cbiAgICAgIHN3aXRjaEZyb21UbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgc3dpdGNoRnJvbVRvLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfU1dJVENIO1xuICAgICAgc3dpdGNoRnJvbVRvLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfU1dJVENIO1xuICAgICAgdGhpcy4kc3dpdGNoRnJvbVRvID0gJChzd2l0Y2hGcm9tVG8pO1xuXG4gICAgICBidXR0b25PdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b25PdmVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfT1ZFUjtcbiAgICAgIGJ1dHRvbk92ZXIudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9PVkVSO1xuICAgICAgdGhpcy4kYnV0dG9uT3ZlciA9ICQoYnV0dG9uT3Zlcik7XG5cbiAgICAgIHByaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBwcmludC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX1BSSU5UO1xuICAgICAgcHJpbnQudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9QUklOVDtcbiAgICAgIHRoaXMuJHByaW50ID0gJChwcmludCk7XG5cblxuXG5cbiAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0JVVFRPTkJBUjtcbiAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmFwcGVuZENoaWxkKHN3aXRjaEZyb21Ubyk7XG4gICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5hcHBlbmRDaGlsZChidXR0b25PdmVyKTtcbiAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmFwcGVuZENoaWxkKHByaW50KTtcblxuICAgICAgICAvLyAkKHByaW50KS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImM0Zy1wb3J0c2lkZS1oaWRlXCIpWzBdKTtcblxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJyl7IC8vT3BlblJvdXRlU2VydmljZVxuICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA9PSAxKXsvL2NoZWNrIGZvciBzaW5nbGUgcHJvZmlsZSBhbmQgc2V0IHRoaXMgYXMgIGFjdGl2ZSByb3V0aW5nIHByb2ZpbGVcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZSA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA+IDEpeyAvL2NoZWNrIGZvciBtdWx0aXBsZSBwcm9maWxlcyBhbmQgYWRkIHByb2ZpbGUtY2hhbmdlclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzLnJvdXRlUHJvZmlsZSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX1dSQVBQRVIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWycwJ10peyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1jYXJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5jYXIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9DQVIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIgPSAkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuY2FyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQ2FyLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMSddKSB7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWhndlxuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuaGd2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmhndikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0hHVik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YgPSAkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUhndi5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWycyJ11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzMnXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNCddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc1J11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzYnXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNyddKXsgLy9hZGQgYnV0dG9uIGFuZCBkcm9wZG93biBmb3IgY3ljbGluZyBwcm9maWxlc1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3BhbkJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlID0gJChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDI7IGkgPCA4OyBpKyspeyAvL2l0ZXJhdGUgb3ZlciBhbGwgcG9zc2libGUgY3ljbGluZyBwcm9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuZGF0YSgncHJvZmlsZScsIFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmRhdGEoJ3Byb2ZpbGUnKSl7IC8vYWRkIGV4aXN0aW5nIGRlZmF1bHQgcHJvZmlsZSB0byBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJyxpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuYmlrZSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0JJS0UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpeyAvL2lnbm9yZSBkcm9wZG93biBsaXN0LCBpZiBvbmx5IG9uZSBjeWNsaW5nIHByb2ZpbGUgaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXsgLy9hcHBlbmQgd2l0aCBkcm9wZG93biwgaWYgbXVsdGlwbGUgY3ljbGluZyBwcm9maWxlcyBhcmUgZW5hYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UubGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChzcGFuQmlrZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snOCddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc5J10peyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciB3YWxraW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuRm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QgPSAkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gODsgaSA8IDEwOyBpKyspeyAvL2l0ZXJhdGUgb3ZlciBwb3NzaWJsZSBwcm9maWxlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuZGF0YSgncHJvZmlsZScsIFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuZGF0YSgncHJvZmlsZScpKXsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnLGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QubGlzdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5mb290KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfRk9PVCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGVQcm9maWxlLmZvb3QubGlzdC5jaGlsZHJlbi5sZW5ndGggPT0gMSl7IC8vaWdub3JlIGRyb3Bkb3duIGxpc3QsIGlmIG9ubHkgb25lIHdhbGtpbmcgcHJvZmlsZSBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNleyAvL2FwcGVuZCB3aXRoIGRyb3Bkb3duLCBpZiBtdWx0aXBsZSB3YWxraW5nIHByb2ZpbGVzIGFyZSBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdC5saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHNwYW5Gb290KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkKHRoaXMpLnBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWycxMCddKXsgLy9hZGQgYnV0dG9uIGZvciBwcm9maWxlIHdoZWVsY2hhaXJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLndoZWVsY2hhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyID0gJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlV2hlZWxjaGFpci5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMTAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ2xpY2sgPSBmdW5jdGlvbigkZWxlbWVudCl7IC8vaGFuZGxlIHRoZSBjbGljayBpbnNpZGUgdGhlIHByb2ZpbGUgZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJGVsZW1lbnQuZGF0YSgncHJvZmlsZScpOyAvL2FjdGl2YXRlIHNlbGVjdGVkIHByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKCRlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7IC8vdXBkYXRlIHRoZSByb3V0ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclNpYmxpbmdzID0gZnVuY3Rpb24oZWxlbWVudCl7IC8vZnVuY3Rpb24gdG8gYWRqdXN0IGNzcy1jbGFzc2VzIGFmdGVyIGNoYW5naW5nIHByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNpYmxpbmdzID0gJChlbGVtZW50KS5wYXJlbnQoKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoc2libGluZ3NbaV0pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHByb2ZpbGUgaW4gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpeyAvL3NldCBkZWZhdWx0IHZhbHVlIGZvciBpbml0aWFsIHJvdXRpbmdcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMuaGFzT3duUHJvcGVydHkocHJvZmlsZSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gcHJvZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIFJvdXRlciBQcm9maWxlcyBlbmFibGVkJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyRnJvbUxhYmVsKTtcbiAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmZyb21JbnB1dCk7XG4gICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyRnJvbUNsZWFyKTtcbiAgICAgIGlmIChidXR0b25PdmVyICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzAnKXtcbiAgICAgICAgICB0aGlzLiRidXR0b25PdmVyLmhpZGUoKTtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLiRyb3V0ZXJGcm9tQ2xlYXIuaGlkZSgpO1xuXG4gICAgICB0aGlzLiRyb3V0ZXJGcm9tQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYuY2xlYXJJbnB1dChzZWxmLiRmcm9tSW5wdXQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJGJ1dHRvbk92ZXIuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuaW5kZXgrKztcbiAgICAgICAgICBzZWxmLiRidXR0b25PdmVyLnByb3AoXCJkaXNhYmxlZFwiLHRydWUpO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfV1JBUFBFUjtcblxuICAgICAgICAgIHNlbGYub3ZlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0ZST007XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQuaWQgPSBzZWxmLm92ZXJJbnB1dC5uYW1lID0gXCJyb3V0aW5nT3ZlclwiO1xuXG4gICAgICAgICAgcm91dGVyT3ZlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncm91dGluZ0Zyb20nKTtcbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbTtcblxuICAgICAgICAgIHJvdXRlck92ZXJDbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9IVE1MO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5pZCA9IHNlbGYuaW5kZXg7XG4gICAgICAgICAgc2VsZi4kcm91dGVyT3ZlckNsZWFyID0gJChyb3V0ZXJPdmVyQ2xlYXIpO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlck92ZXJMYWJlbCk7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGYub3ZlcklucHV0KTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyT3ZlckNsZWFyKTtcblxuICAgICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5vdmVySW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJPdmVyQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIHNlbGYuY2xlYXJPdmVyKHNlbGYuJG92ZXJJbnB1dCx0aGlzLmlkKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgLy9idXR0b25PdmVyLnNob3coKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZWxmLiRvdmVySW5wdXQgPSAkKHNlbGYub3ZlcklucHV0KTtcbiAgICAgICAgICBzZWxmLiRvdmVySW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5wZXJmb3JtU2VhcmNoKHNlbGYuJG92ZXJJbnB1dCwgXCJvdmVyVmFsdWVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuXG5cblxuICAgICAgdGhpcy4kc3dpdGNoRnJvbVRvLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIHN3aXRjaFZhck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdGcm9tXCIpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91dGluZ0Zyb21cIikudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdUb1wiKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdUb1wiKS52YWx1ZSA9IHN3aXRjaFZhck5hbWU7XG4gICAgICAgICAgdmFyIHN3aXRjaFZhclZhbCA9IHNlbGYuZnJvbVZhbHVlO1xuICAgICAgICAgIHNlbGYuZnJvbVZhbHVlID0gc2VsZi50b1ZhbHVlO1xuICAgICAgICAgIHNlbGYudG9WYWx1ZSA9IHN3aXRjaFZhclZhbDtcbiAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcblxuICAgICAgfSk7XG4gICAgICB0aGlzLiRwcmludC5jbGljayhmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbGV0IHJvdXRpbmdDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImM0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLXdyYXBwZXJcIilbMF07XG4gICAgICAgICAgaWYoIXJvdXRpbmdDb250ZW50KSByZXR1cm47XG4gICAgICAgICAgbGV0IFdpblByaW50ID0gd2luZG93Lm9wZW4oJycsICcnLCAnbGVmdD0wLHRvcD0wLHdpZHRoPTgwMCxoZWlnaHQ9OTAwLHRvb2xiYXI9MCxzY3JvbGxiYXJzPTAsc3RhdHVzPTAnKTtcbiAgICAgICAgICBXaW5QcmludC5kb2N1bWVudC53cml0ZShyb3V0aW5nQ29udGVudC5pbm5lckhUTUwpO1xuICAgICAgICAgIFdpblByaW50LmRvY3VtZW50LmNsb3NlKCk7XG4gICAgICAgICAgV2luUHJpbnQuZm9jdXMoKTtcbiAgICAgICAgICBXaW5QcmludC5wcmludCgpO1xuICAgICAgICAgIFdpblByaW50LmNsb3NlKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kZnJvbUlucHV0ID0gJCh0aGlzLmZyb21JbnB1dCk7XG4gICAgICB0aGlzLiRmcm9tSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wZXJmb3JtU2VhcmNoKHNlbGYuJGZyb21JbnB1dCwgXCJmcm9tVmFsdWVcIik7XG4gICAgICAgIGlmIChzZWxmLiRmcm9tSW5wdXQudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJGcm9tQ2xlYXIuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuJHJvdXRlckZyb21DbGVhci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucm91dGVyQnV0dG9uQmFyKTtcbiAgICAgIGlmKHRoaXMucm91dGVQcm9maWxlICYmIHRoaXMucm91dGVQcm9maWxlLmNoaWxkcmVuKXtcbiAgICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucm91dGVQcm9maWxlKTtcbiAgICAgIH1cbiAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5mcm9tSW5wdXRXcmFwcGVyKTtcblxuICAgICAgdGhpcy50b0lucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1dSQVBQRVI7XG5cbiAgICAgIHRoaXMudG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHRoaXMudG9JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICB0aGlzLnRvSW5wdXQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9UTztcbiAgICAgIHRoaXMudG9JbnB1dC5pZCA9IHRoaXMudG9JbnB1dC5uYW1lID0gXCJyb3V0aW5nVG9cIjtcblxuICAgICAgcm91dGVyVG9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICByb3V0ZXJUb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdUbycpO1xuICAgICAgcm91dGVyVG9MYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9UT19MQUJFTDtcblxuICAgICAgcm91dGVyVG9DbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgcm91dGVyVG9DbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgcm91dGVyVG9DbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgcm91dGVyVG9DbGVhci5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9IVE1MO1xuICAgICAgdGhpcy4kcm91dGVyVG9DbGVhciA9ICQocm91dGVyVG9DbGVhcik7XG5cbiAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyVG9MYWJlbCk7XG4gICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMudG9JbnB1dCk7XG4gICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlclRvQ2xlYXIpO1xuXG5cbiAgICAgIHRoaXMuJHJvdXRlclRvQ2xlYXIuaGlkZSgpO1xuXG4gICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWxmLmNsZWFySW5wdXQoc2VsZi4kdG9JbnB1dCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kdG9JbnB1dCA9ICQodGhpcy50b0lucHV0KTtcbiAgICAgIHRoaXMuJHRvSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wZXJmb3JtU2VhcmNoKHNlbGYuJHRvSW5wdXQsIFwidG9WYWx1ZVwiKTtcbiAgICAgICAgaWYgKHNlbGYuJHRvSW5wdXQudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50b0lucHV0V3JhcHBlcik7XG5cbiAgICAgIHNlbGYuc3RhdHVzQmFyLmFwcGVuZENoaWxkKHRoaXMuZ2V0QXR0cmlidXRpb24oKSk7XG5cbiAgICAgIHJvdXRlclZpZXcgPSB0aGlzLmFkZFZpZXcoe1xuICAgICAgICBuYW1lOiAncm91dGVyLXZpZXcnLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5ST1VURVJfVklFV19BRERSRVNTX0lOUFVULFxuICAgICAgICAgIHdpdGhIZWFkbGluZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAge3NlY3Rpb246IHRoaXMudG9wVG9vbGJhciwgZWxlbWVudDogcm91dGVyVmlld0lucHV0V3JhcHBlcn0sXG4gICAgICAgICAge3NlY3Rpb246IHRoaXMuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyfVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJvdXRlclZpZXc7XG5cbiAgICB9LFxuXG4gICAgc2V0SW5wdXQ6IGZ1bmN0aW9uIChmcm9tLCBjb29yZGluYXRlKSB7XG4gICAgICAvLyBwZXJmb3JtIGdlb1NlYXJjaCBvbiBnaXZlbiBsb2NhdGlvblxuICAgICAgLy8gZmlsbCBmcm9tL3RvIGZpZWxkXG4gICAgICAvL1xuXG4gICAgICBpZiAoIWNvb3JkaW5hdGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb29yZGluYXRlID0gb2wucHJvai50b0xvbkxhdChjb29yZGluYXRlKTtcblxuICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaCh0aGlzLiRmcm9tSW5wdXQsIGNvb3JkaW5hdGUpO1xuICAgICAgICB0aGlzLmZyb21WYWx1ZSA9IG5ldyBvbC5nZW9tLlBvaW50KGNvb3JkaW5hdGUpO1xuXG4gICAgICAgIC8vdGhpcy4kZnJvbUlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2godGhpcy4kdG9JbnB1dCwgY29vcmRpbmF0ZSk7XG4gICAgICAgIHRoaXMudG9WYWx1ZSA9IG5ldyBvbC5nZW9tLlBvaW50KGNvb3JkaW5hdGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICB9LFxuXG4gICAgZ2V0QXR0cmlidXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcyxcbiAgICAgICAgICBhdHRyaWJ1dGlvblNlYXJjaCxcbiAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlcixcbiAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlckhvc3QsXG4gICAgICAgICAgYXR0cmlidXRpb25XcmFwcGVyLFxuICAgICAgICAgIGF0dHJpYnV0aW9uSHRtbDtcbiAgICAgIHN3aXRjaChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uKXtcbiAgICAgICAgICBjYXNlIFwiMFwiOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlciA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3Byb2plY3Qtb3NybS5vcmcvXCI+UHJvamVjdCBPU1JNPC9hPic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVyID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vcHJvamVjdC1vc3JtLm9yZy9cIj5Qcm9qZWN0IE9TUk08L2E+JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXIgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vb3BlbnJvdXRlc2VydmljZS5vcmcvXCI+b3BlbnJvdXRlc2VydmljZTwvYT4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHN3aXRjaChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmdlb3NlYXJjaC5nZW9zZWFyY2hfZW5naW5lKXtcbiAgICAgICAgICBjYXNlIFwiMVwiOiAvL09TTVxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblNlYXJjaCA9ICctIEdlb2NvZGVyIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL25vbWluYXRpbS5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiMlwiOiAvL01hcHF1ZXN0XG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uU2VhcmNoID0gJy0gR2VvY29kZXIgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly93d3cubWFwcXVlc3QuY29tL1wiPk1hcFF1ZXN0PC9hPiAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiM1wiOiAvL2N1c3RvbVxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblNlYXJjaCA9ICctIE5vbWluYXRpbS1HZW9jb2RlciAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiNFwiOiAvL2NvbjRnaXNcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25TZWFyY2ggPSAnLSBHZW9jb2RlciBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuY29uNGdpcy5vcmcva2FydGVuZGllbnN0ZS5odG1sXCI+Y29uNGdpczwvYT4gJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAgIHN3aXRjaChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXJIb3N0ID0gJy0gT1NSTSBob3N0aW5nIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vYWxnbzIuaXRpLmtpdC5lZHUvXCI+S0lUPC9hPic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMVwiOlxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVySG9zdCA9ICctIE9TUk0gaG9zdGluZyBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2FsZ28yLml0aS5raXQuZWR1L1wiPktJVDwvYT4nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlckhvc3QgPSAnXFwnLSBPUlMgaG9zdGluZyBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuZ2VvZy51bmktaGVpZGVsYmVyZy5kZS9naXMvaGVpZ2l0X2VuLmh0bWxcIj5IZWlHSVQ8L2E+XFwnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvL1RvRG8gY2hlY2sgcGFyYW1zXG4gICAgICBhdHRyaWJ1dGlvbkh0bWwgPSBhdHRyaWJ1dGlvblJvdXRlciArIGF0dHJpYnV0aW9uU2VhcmNoICsgYXR0cmlidXRpb25Sb3V0ZXJIb3N0O1xuICAgICAgYXR0cmlidXRpb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBhdHRyaWJ1dGlvbldyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSO1xuXG4gICAgICBhdHRyaWJ1dGlvbldyYXBwZXIuaW5uZXJIVE1MID0gYXR0cmlidXRpb25IdG1sO1xuXG4gICAgICBpZiAoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXR0cmlidXRpb24pIHtcbiAgICAgICAgYXR0cmlidXRpb25XcmFwcGVyLmlubmVySFRNTCA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2F0dHJpYnV0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXR0cmlidXRpb25XcmFwcGVyO1xuXG4gICAgfSxcblxuICAgIHJlY2FsY3VsYXRlUm91dGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0bXBGZWF0dXJlLFxuICAgICAgcHJveHkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eTtcblxuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuY2xlYXIoKTtcbiAgICAgIGlmICh0aGlzLmZyb21WYWx1ZSkge1xuICAgICAgICB0bXBGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLmZyb21WYWx1ZS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSAmJiBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZV0pIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuYWRkRmVhdHVyZSh0bXBGZWF0dXJlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnRvVmFsdWUpIHtcbiAgICAgICAgdG1wRmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICBnZW9tZXRyeTogdGhpcy50b1ZhbHVlLmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSAmJiBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGVdKSB7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5hZGRGZWF0dXJlKHRtcEZlYXR1cmUpO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5vdmVyVmFsdWUpe1xuICAgICAgICAgIGZvcih2YXIgcHJvcHQgaW4gdGhpcy5vdmVyVmFsdWUpe1xuICAgICAgICAgICAgICB0bXBGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHRoaXMub3ZlclZhbHVlW3Byb3B0XS5jbG9uZSgpLnRyYW5zZm9ybSgnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfaW50ZXJpbV9sb2NzdHlsZSAmJiBwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfaW50ZXJpbV9sb2NzdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUocHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2ludGVyaW1fbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5hZGRGZWF0dXJlKHRtcEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmZyb21WYWx1ZSAmJiB0aGlzLnRvVmFsdWUpIHtcbiAgICAgICAgICBpZih0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgICAgIHRoaXMucGVyZm9ybVZpYVJvdXRlKHRoaXMuZnJvbVZhbHVlLCB0aGlzLnRvVmFsdWUsIHRoaXMub3ZlclZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMucGVyZm9ybVZpYVJvdXRlKHRoaXMuZnJvbVZhbHVlLCB0aGlzLnRvVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICBwZXJmb3JtVmlhUm91dGU6IGZ1bmN0aW9uIChmcm9tUG9pbnQsIHRvUG9pbnQsIG92ZXJQb2ludCkge1xuXG4gICAgICB2YXIgdXJsLFxuICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgZnJvbUNvb3JkLFxuICAgICAgICAgIHRvQ29vcmQsXG4gICAgICAgICAgb3ZlckNvb3JkO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgZnJvbUNvb3JkID0gW2Zyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCBmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXV07XG4gICAgICB0b0Nvb3JkID0gW3RvUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzBdXTtcbiAgICAgIGlmKG92ZXJQb2ludCl7XG4gICAgICAgICAgb3ZlckNvb3JkID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgZm9yKHZhciBwcm9wdCBpbiBvdmVyUG9pbnQpe1xuICAgICAgICAgICAgICBvdmVyQ29vcmQucHVzaChbb3ZlclBvaW50W3Byb3B0XS5nZXRDb29yZGluYXRlcygpWzFdLCBvdmVyUG9pbnRbcHJvcHRdLmdldENvb3JkaW5hdGVzKClbMF1dKTtcbiAgICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzEnIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzInKXsvL09TUk0tQVBJOjUueCBvciBPUlMtIEFQSVxuICAgICAgICAgICAgdXJsID0gc2VsZi5yb3V0aW5nQXBpICsgJy8nICsgZnJvbUNvb3JkIDtcblxuICAgICAgICAgICAgaWYob3ZlclBvaW50KXtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwO2k8b3ZlckNvb3JkLmxlbmd0aDtpKyspXG4gICAgICAgICAgICAgICAgdXJsICs9Jy8nK292ZXJDb29yZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybCArPScvJyt0b0Nvb3JkO1xuICAgICAgICAgICAgaWYodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB1cmwgKz0gJz9wcm9maWxlPScrdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgICd1cmwnOiB1cmx9KVxuICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dSb3V0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuICcnO1xuXG4gICAgICAgIH0gZWxzZXsvL09TUk0tQVBJOjw1XG4gICAgICAgICAgICB1cmwgPSBzZWxmLnJvdXRpbmdBcGkgKyAnP291dHB1dD1qc29uJmluc3RydWN0aW9ucz10cnVlJmFsdD1mYWxzZSZsb2NfZnJvbT0nICsgZnJvbUNvb3JkICsgJyZsb2NfdG89JyArIHRvQ29vcmQ7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgJ3VybCc6IHVybH0pXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dSb3V0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG5cbiAgICB9LFxuXG4gICAgc2hvd1JvdXRlOiBmdW5jdGlvbiAocm91dGVSZXNwb25zZSkge1xuXG4gICAgICB0aGlzLnNob3dSb3V0ZUxheWVyKHJvdXRlUmVzcG9uc2UsMCk7XG4gICAgICB0aGlzLnNob3dSb3V0ZUluc3RydWN0aW9ucyhyb3V0ZVJlc3BvbnNlLDApO1xuICAgIH0sXG4gICAgc2hvd0FsdFJvdXRlOiBmdW5jdGlvbiAocm91dGVSZXNwb25zZSwgcm91dGVOdW1iZXIpe1xuICAgICAgdGhpcy5zaG93Um91dGVMYXllcihyb3V0ZVJlc3BvbnNlLHJvdXRlTnVtYmVyKTtcbiAgICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2Uscm91dGVOdW1iZXIpO1xuICAgIH0sXG5cbiAgICBzaG93Um91dGVMYXllcjogZnVuY3Rpb24gKHJvdXRlUmVzcG9uc2Uscm91dGVOdW1iZXIpIHtcblxuICAgICAgdmFyIG1hcFZpZXcsXG4gICAgICAgICAgd2F5UG9seWxpbmUsXG4gICAgICAgICAgcm91dGVGZWF0dXJlcyxcbiAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzLFxuICAgICAgICAgIHJpZ2h0UGFkZGluZyxcbiAgICAgICAgICBsZWZ0UGFkZGluZyxcbiAgICAgICAgICByb3V0ZU51bWJlciA9IHJvdXRlTnVtYmVyIHx8IDA7XG5cbiAgICAgIGlmKHJvdXRlUmVzcG9uc2UpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICBtYXBWaWV3ID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKTtcblxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJyB8fHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzInICkgey8vT1NSTS1BUEk6NS54XG4gICAgICAgICAgICAgIHdheVBvbHlsaW5lID0gbmV3IG9sLmZvcm1hdC5Qb2x5bGluZSgpO1xuXG4gICAgICAgICAgICAgIC8vIGFkZCByb3V0ZVxuXG4gICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlcyAmJiByb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXSkgey8vY2hlY2sgZm9yIGFsdGVybmF0aXZlIHJvdXRlXG4gICAgICAgICAgICAgICAgICBpZiAocm91dGVOdW1iZXIgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZXNbMF0uZ2VvbWV0cnksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzWzBdLnNldElkKDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1sxXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uZ2VvbWV0cnksIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcm91dGVGZWF0dXJlc1swXS5zZXRJZChyb3V0ZU51bWJlcik7XG5cblxuICAgICAgICAgIH0gZWxzZSB7Ly9PU1JNLUFQSTo8NVxuICAgICAgICAgICAgICB3YXlQb2x5bGluZSA9IG5ldyBvbC5mb3JtYXQuUG9seWxpbmUoe1xuICAgICAgICAgICAgICAgICAgJ2ZhY3Rvcic6IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3ZpYXJvdXRlX3ByZWNpc2lvbiB8fCAxZTZcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gYWRkIHJvdXRlXG4gICAgICAgICAgICAgIHJvdXRlRmVhdHVyZXMgPSB3YXlQb2x5bGluZS5yZWFkRmVhdHVyZXMocm91dGVSZXNwb25zZS5yb3V0ZV9nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYWx0ZXJuYXRpdmUgPT0gJzEnKSB7XG4gICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlcyAmJiAocm91dGVSZXNwb25zZS5yb3V0ZXMubGVuZ3RoID4gMSkgJiYgKHJvdXRlUmVzcG9uc2Uucm91dGVzWzFdKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nQWx0V2F5U291cmNlLmFkZEZlYXR1cmVzKGFsdFJvdXRlRmVhdHVyZXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucm91dGluZ1dheVNvdXJjZS5hZGRGZWF0dXJlcyhyb3V0ZUZlYXR1cmVzKTtcbiAgICAgICAgICAvLyByZW5kZXIgdmlld1xuICAgICAgICAgIC8vIHNvIHRoZSByb3V0ZSBnZXRzIGRyYXduIGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0c1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5yZW5kZXJTeW5jKCk7XG5cbiAgICAgICAgICAvLyBhbmltYXRpb25cbiAgICAgICAgICBtYXBWaWV3LmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICByZXNvbHV0aW9uOiBtYXBWaWV3LmdldFJlc29sdXRpb24oKSxcbiAgICAgICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5iZWZvcmVSZW5kZXIoXG4gICAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAvLyAgICAgICBzb3VyY2U6IG1hcFZpZXcuZ2V0Q2VudGVyKClcbiAgICAgICAgICAvLyAgICAgfSksXG4gICAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgICAgLy8gICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogbWFwVmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAvLyApO1xuXG4gICAgICAgICAgLy8gY2FsY3VsYXRlIHBhZGRpbmdcbiAgICAgICAgICBsZWZ0UGFkZGluZyA9IDA7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVBvcnRzaWRlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICBsZWZ0UGFkZGluZyA9ICQodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlUG9ydHNpZGUuY29udGFpbmVyKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmlnaHRQYWRkaW5nID0gMDtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlU3RhcmJvYXJkICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVN0YXJib2FyZC5jb250YWluZXIpIHtcbiAgICAgICAgICAgICAgcmlnaHRQYWRkaW5nID0gJCh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVTdGFyYm9hcmQuY29udGFpbmVyKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2VudGVyIG9uIHJvdXRlXG4gICAgICAgICAgbWFwVmlldy5maXQoXG4gICAgICAgICAgICAgIHJvdXRlRmVhdHVyZXNbMF0uZ2V0R2VvbWV0cnkoKSxcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFNpemUoKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogWzAsIHJpZ2h0UGFkZGluZywgMCwgbGVmdFBhZGRpbmddXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG5cblxuXG4gICAgICBnZXRJbnN0cnVjdGlvbkljb246IGZ1bmN0aW9uKHN0ck1vZCxzdHJUeXBlKSB7XG4gICAgICAgICAgdmFyIGltYWdlID0gXCJcIjtcblxuICAgICAgICAgIHN3aXRjaChzdHJNb2QpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2hhcnAgbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNoYXJwLWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNoYXJwIHJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNsaWdodCBsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNsaWdodCByaWdodFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwidXR1cm5cIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJ1LXR1cm4ucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInN0cmFpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGltYWdlID1cImRlZmF1bHQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoKHN0clR5cGUpe1xuICAgICAgICAgICAgICBjYXNlIFwiZGVwYXJ0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9XCJoZWFkLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID1cInRhcmdldC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwicm91bmRhYm91dFwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPVwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG4gICAgICB9LFxuICAgICAgZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTOiBmdW5jdGlvbihpbnRUeXBlKXtcbiAgICAgICAgbGV0IGltYWdlO1xuICAgICAgICBzd2l0Y2goaW50VHlwZSl7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInR1cm4tbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwidHVybi1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2hhcnAtcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtcmlnaHQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcImNvbnRpbnVlLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwicm91bmQtYWJvdXQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInRhcmdldC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcImhlYWQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZiArIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgICAgIH0sXG5cbiAgICAgIGdldFR5cGVUZXh0OiBmdW5jdGlvbihzdHJUeXBlKSB7XG4gICAgICAgICAgdmFyIHRleHRJRDtcblxuICAgICAgICAgIHN3aXRjaChzdHJUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ0dXJuXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8wXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm5ldyBuYW1lXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImRlcGFydFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMlwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJhcnJpdmVcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzNcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibWVyZ2VcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzRcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwib24gcmFtcFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfNVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJvZmYgcmFtcFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfNlwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJmb3JrXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV83XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImVuZCBvZiByb2FkXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV84XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInVzZSBsYW5lXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV85XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImNvbnRpbnVlXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xMFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyb3VuZGFib3V0XCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJleGl0IHJvdW5kYWJvdXRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzExXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInJvdGFyeVwiOlxuICAgICAgICAgICAgICBjYXNlIFwiZXhpdCByb3RhcnlcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzEyXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInJvdW5kYWJvdXQgdHVyblwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMTNcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibm90aWZpY2F0aW9uXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xNFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhbmdDb25zdGFudHNbdGV4dElEXTtcbiAgICAgIH0sXG5cbiAgICAgIGdldE1vZGlmaWVyVGV4dDogZnVuY3Rpb24oc3RyTW9kaWZpZXIpIHtcbiAgICAgICAgICB2YXIgdGV4dElEO1xuXG4gICAgICAgICAgc3dpdGNoKHN0ck1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1dHVyblwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF8wXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNoYXJwIHJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzFcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfMlwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzbGlnaHQgcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfM1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzdHJhaWdodFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF80XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNsaWdodCBsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzVcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF82XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNoYXJwIGxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfN1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzhcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhbmdDb25zdGFudHNbdGV4dElEXTtcbiAgICAgIH0sXG4gICAgICBnZXREcml2aW5nSW5zdHJ1Y3Rpb25JY29uOiBmdW5jdGlvbiAoaW5zdHJ1Y3Rpb25JZCkge1xuICAgICAgICAgIHZhciBpZCxcbiAgICAgICAgICAgICAgaW1hZ2U7XG5cbiAgICAgICAgICBpZCA9IGluc3RydWN0aW9uSWQucmVwbGFjZSgvXjExLVxcZHsxLH0kLywgXCIxMVwiKTsgICAgLy8gZHVtYiBjaGVjaywgaWYgdGhlcmUgaXMgYSByb3VuZGFib3V0IChhbGwgaGF2ZSB0aGUgc2FtZSBpY29uKVxuXG4gICAgICAgICAgaW1hZ2UgPSAnZGVmYXVsdC5wbmcnO1xuXG4gICAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ2NvbnRpbnVlLnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdzbGlnaHQtcmlnaHQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3R1cm4tcmlnaHQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3NoYXJwLXJpZ2h0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICd1LXR1cm4ucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICc2JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3NoYXJwLWxlZnQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICc3JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3R1cm4tbGVmdC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzgnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnc2xpZ2h0LWxlZnQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcxMCc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdoZWFkLnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnMTEnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAncm91bmQtYWJvdXQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcxNSc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICd0YXJnZXQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmICsgXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuXG4gICAgICB9LFxuICAgICAgZ2V0VGV4dDogZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgICAgICB2YXIgdGV4dF9pZCA9IFwiUk9VVEVSX1wiICsgaWQ7XG5cbiAgICAgICAgICBpZiAobGFuZ0NvbnN0YW50c1t0ZXh0X2lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2Fybih0ZXh0X2lkICsgXCIgY2FuJ3QgZmluZCBpbiBsYW5ndWFnZSBmaWxlcy5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBsYW5nQ29uc3RhbnRzW3RleHRfaWRdO1xuICAgICAgfSxcblxuICAgICAgZ2V0RHJpdmluZ0luc3RydWN0aW9uOiBmdW5jdGlvbiAoaW5zdHJ1Y3Rpb25JZCkge1xuXG4gICAgICAgICAgdmFyIGlkLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjtcblxuICAgICAgICAgIGlkID0gXCJESVJFQ1RJT05fXCIgKyBpbnN0cnVjdGlvbklkLnJlcGxhY2UoL14xMS1cXGR7Mix9JC8sIFwiMTEteFwiKTsgICAvLyBkdW1iIGNoZWNrLCBpZiB0aGVyZSBhcmUgMTArIGV4aXRzIG9uIGEgcm91bmRhYm91dCAoc2F5IHRoZSBzYW1lIGZvciBleGl0IDEwKylcblxuICAgICAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5nZXRUZXh0KGlkKTtcbiAgICAgICAgICBpZiAoIWRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gdGhpcy5nZXRUZXh0KCdESVJFQ1RJT05fMCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgIH0sXG4gICAgICBzaG93Um91dGVJbnN0cnVjdGlvbnM6IGZ1bmN0aW9uIChyb3V0ZVJlc3BvbnNlLHJvdXRlTnVtYmVyKSB7XG5cbiAgICAgICAgICB2YXIgc2VsZixcbiAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb24sXG4gICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlcixcbiAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCxcbiAgICAgICAgICAgICAgaW5zdHIsXG4gICAgICAgICAgICAgIHN0clR5cGUsXG4gICAgICAgICAgICAgIHN0ck1vZCxcbiAgICAgICAgICAgICAgcm93c3R5bGUsXG4gICAgICAgICAgICAgIHJvdXRlTnVtYmVyID0gcm91dGVOdW1iZXIgfHwgMCxcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgcm91dGVfbmFtZV8wID0gXCJcIixcbiAgICAgICAgICAgICAgcm91dGVfbmFtZV8xID0gXCJcIixcbiAgICAgICAgICAgICAgdG90YWxfZGlzdGFuY2UgPSBcIlwiLFxuICAgICAgICAgICAgICB0b3RhbF90aW1lID0gXCJcIjtcblxuICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgICAgICBpZiAoc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgIHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSO1xuICAgICAgICAgICAgICBzZWxmLnJvdXRlclZpZXdDb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICQoc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0hlYWRlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVI7XG5cbiAgICAgICAgICBpZiAocm91dGVSZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMScpIHsvL09TUk0tQVBJOjUueFxuICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzBdLnN1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZV9uYW1lXzAgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdW1tYXJ5LnNwbGl0KFwiLFwiKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdW1tYXJ5LnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVfbmFtZV8xID0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMV0uc3VtbWFyeS5zcGxpdChcIixcIilbMV07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IHRoaXMudG9IdW1hbkRpc3RhbmNlKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICB0b3RhbF90aW1lID0gdGhpcy50b0h1bWFuVGltZShyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICBlbHNlIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzAnKSB7Ly9PU1JNLUFQSTo8NVxuICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgICByb3V0ZV9uYW1lXzAgPSByb3V0ZVJlc3BvbnNlLnJvdXRlX25hbWVbMF07XG4gICAgICAgICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSByb3V0ZVJlc3BvbnNlLnJvdXRlX25hbWVbMV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZV9zdW1tYXJ5KSB7XG4gICAgICAgICAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IHRoaXMudG9IdW1hbkRpc3RhbmNlKHJvdXRlUmVzcG9uc2Uucm91dGVfc3VtbWFyeS50b3RhbF9kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICB0b3RhbF90aW1lID0gdGhpcy50b0h1bWFuVGltZShyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkudG90YWxfdGltZSk7XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzInKXsvL09TUi1BUElcbiAgICAgICAgICAgICAgICAgIHRvdGFsX3RpbWUgPSB0aGlzLnRvSHVtYW5UaW1lKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zdW1tYXJ5LmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgIHRvdGFsX2Rpc3RhbmNlID0gdGhpcy50b0h1bWFuRGlzdGFuY2Uocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnN1bW1hcnkuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihyb3V0ZV9uYW1lXzAgJiYgcm91dGVfbmFtZV8xKXtcbiAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLmlubmVySFRNTCA9ICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUgKyAnPC9sYWJlbD4gPGVtPicgKyByb3V0ZV9uYW1lXzAgKyAnICYjODU5NDsgJyArIHJvdXRlX25hbWVfMSArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSArICc8L2xhYmVsPiA8ZW0+JyArIHRvdGFsX2Rpc3RhbmNlICsgJzwvZW0+PGJyPicgKyAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF90aW1lICsgJzwvZW0+PGJyPic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlKXtcbiAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLmlubmVySFRNTCA9ICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfUFJPRklMRSArICc8L2xhYmVsPiA8ZW0+Jyt0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1t0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmVdICArICc8L2VtPjxicj4nICsgJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSArICc8L2xhYmVsPiA8ZW0+JyArIHRvdGFsX2Rpc3RhbmNlICsgJzwvZW0+PGJyPicgKyAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUgKyAnPC9sYWJlbD4gPGVtPicgKyB0b3RhbF90aW1lICsgJzwvZW0+PGJyPic7XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIpO1xuXG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgPSAnPHRhYmxlIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFICsgJ1wiIGNlbGxwYWRkaW5nPVwiMFwiIGNlbGxzcGFjaW5nPVwiMFwiPic7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT09ICcxJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVncy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzW2pdLnN0ZXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5zdHIgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1tqXS5zdGVwc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHN0clR5cGUgPSBpbnN0ci5tYW5ldXZlci50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0ci5tYW5ldXZlci5tb2RpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJNb2QgPSBpbnN0ci5tYW5ldXZlci5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU07XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dHIgY2xhc3M9XCInICsgcm93c3R5bGUgKyAnXCI+JztcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzxpbWcgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiArICdcIiBzcmM9XCInICsgdGhpcy5nZXRJbnN0cnVjdGlvbkljb24oc3RyTW9kLCBzdHJUeXBlKSArICdcIiBhbHQ9XCJcIi8+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L3RkPic7XG5cblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUICsgJ1wiIGRhdGEtcG9zPVwiJyArIGluc3RyLm1hbmV1dmVyLmxvY2F0aW9uICsgJ1wiPic7XG5cblxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1aWxkIHJvdXRlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RydWN0aW9udGV4dCA9IHRoaXMuZ2V0VHlwZVRleHQoaW5zdHIubWFuZXV2ZXIudHlwZSkucmVwbGFjZSgvJXMvLCBpbnN0ci5uYW1lKS5yZXBsYWNlKC8lbS8sIHRoaXMuZ2V0TW9kaWZpZXJUZXh0KGluc3RyLm1hbmV1dmVyLm1vZGlmaWVyKSkucmVwbGFjZSgvJXovLCBpbnN0ci5tYW5ldXZlci5leGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdHIubmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9udGV4dCA9IGluc3RydWN0aW9udGV4dC5yZXBsYWNlKC9cXFsuKj9cXF0vZywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RydWN0aW9udGV4dCA9IGluc3RydWN0aW9udGV4dC5yZXBsYWNlKC9cXFsoLiopXFxdLywgXCIkMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBpbnN0cnVjdGlvbnRleHQ7XG5cblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IHRoaXMudG9IdW1hbkRpc3RhbmNlKGluc3RyLmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90cj5cIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT09ICcwJyl7Ly9PU1JNLUFQSTo8NVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm91dGVSZXNwb25zZS5yb3V0ZV9pbnN0cnVjdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIGluc3RyID0gcm91dGVSZXNwb25zZS5yb3V0ZV9pbnN0cnVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcm93c3R5bGUgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNO1xuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dHIgY2xhc3M9XCInICsgcm93c3R5bGUgKyAnXCI+JztcblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8aW1nIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04gKyAnXCIgc3JjPVwiJyArIHRoaXMuZ2V0RHJpdmluZ0luc3RydWN0aW9uSWNvbihpbnN0clswXSkgKyAnXCIgYWx0PVwiXCIvPic7XG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L3RkPic7XG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9URVhUICsgJ1wiIGRhdGEtcG9zPVwiJyArIGluc3RyWzNdICsgJ1wiPic7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGJ1aWxkIHJvdXRlIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBpZiAoaW5zdHJbMV0gIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IHRoaXMuZ2V0RHJpdmluZ0luc3RydWN0aW9uKGluc3RyWzBdKS5yZXBsYWNlKC9cXFsoLiopXFxdLywgXCIkMVwiKS5yZXBsYWNlKC8lcy8sIGluc3RyWzFdKS5yZXBsYWNlKC8lZC8sIHRoaXMuZ2V0VGV4dChpbnN0cls2XSkpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IHRoaXMuZ2V0RHJpdmluZ0luc3RydWN0aW9uKGluc3RyWzBdKS5yZXBsYWNlKC9cXFsoLiopXFxdLywgXCJcIikucmVwbGFjZSgvJWQvLCB0aGlzLmdldFRleHQoaW5zdHJbNl0pKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IHJvdXRlUmVzcG9uc2Uucm91dGVfaW5zdHJ1Y3Rpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IHRoaXMudG9IdW1hbkRpc3RhbmNlKGluc3RyWzVdKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90cj5cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT09ICcyJyApey8vT3BlblJvdXRlU2VydmljZVxuICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzW2pdLnN0ZXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5zdHIgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc2VnbWVudHNbal0uc3RlcHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICBzdHJUeXBlID0gaW5zdHIudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgKz0gXCIgXCIgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRyIGNsYXNzPVwiJyArIHJvd3N0eWxlICsgJ1wiPic7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04gKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8aW1nIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT04gKyAnXCIgc3JjPVwiJyArIHRoaXMuZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTKHN0clR5cGUpICsgJ1wiIGFsdD1cIlwiLz4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGQ+JztcblxuICAgICAgICAgICAgICAgICAgICAgIGlmKGluc3RyLm1hbmV1dmVyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQgKyAnXCIgZGF0YS1wb3M9XCInICsgaW5zdHIubWFuZXV2ZXIubG9jYXRpb24gKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQgKyAnXCIgZGF0YS1wb3M9XCInICsgMCArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgcm91dGUgZGVzY3JpcHRpb25cblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gaW5zdHIuaW5zdHJ1Y3Rpb247XG5cblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UgKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnNlZ21lbnRzWzBdLnN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShpbnN0ci5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RkPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdHI+XCI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cblxuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGFibGU+JztcblxuICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uLmlubmVySFRNTCA9IHJvdXRlckluc3RydWN0aW9uc0h0bWw7XG5cbiAgICAgICAgICBzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVySW5zdHJ1Y3Rpb24pO1xuXG4gICAgICAgICAgdGhpcy5hZGp1c3RJbnN0cnVjdGlvbk1hcEludGVyYWN0aW9uKCk7XG5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRqdXN0SW5zdHJ1Y3Rpb25NYXBJbnRlcmFjdGlvbjogZnVuY3Rpb24gKHJvdXRlckluc3RydWN0aW9uKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgZm5JdGVtQ2xpY2ssXG4gICAgICAgICAgZm5JdGVtT3ZlcixcbiAgICAgICAgICBmbkl0ZW1PdXQ7XG5cbiAgICAgIGZuSXRlbUNsaWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoc2VsZi5yb3V0aW5nV2F5U291cmNlICYmIHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzAnICkge1xuICAgICAgICAgICAgICB2YXIgZmVhdHVyZSA9IHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb29yZGluYXRlcyA9IGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRDb29yZGluYXRlcygpW2VsZW1lbnQuZGF0YSgncG9zJyldO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQoY3VycmVudENvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKGN1cnJlbnRDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoc2VsZi5yb3V0aW5nV2F5U291cmNlICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPj0gJzEnKXtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICB2YXIgY29vcmRMb25MYXQgPSBlbGVtZW50LmRhdGEoJ3BvcycpO1xuICAgICAgICAgICAgICB2YXIgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgICAgIHN0cmluZ2xvbmxhdFsxXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzFdKTtcbiAgICAgICAgICAgICAgdmFyIG5ld0Nvb3JkID0gb2wucHJvai5mcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQobmV3Q29vcmQpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcihuZXdDb29yZCk7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm5JdGVtT3ZlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChzZWxmLnJvdXRpbmdXYXlTb3VyY2UgJiYgc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcpIHtcbiAgICAgICAgICAgIHZhciBmZWF0dXJlID0gc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeTogbmV3IG9sLmdlb20uUG9pbnQoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKClbZWxlbWVudC5kYXRhKCdwb3MnKV0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYucm91dGluZ1dheVNvdXJjZSAmJiBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID49ICcxJykge1xuICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHZhciBjb29yZExvbkxhdCA9IGVsZW1lbnQuZGF0YSgncG9zJyk7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZ2xvbmxhdCA9IGNvb3JkTG9uTGF0LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBzdHJpbmdsb25sYXRbMF0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFswXSk7XG4gICAgICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgICAgICAgIHZhciBuZXdDb29yZCA9IG9sLnByb2ouZnJvbUxvbkxhdChzdHJpbmdsb25sYXQpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChuZXdDb29yZClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmbkl0ZW1PdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIH07XG5cblxuICAgICAgJCgnW2RhdGEtcG9zXScsIHJvdXRlckluc3RydWN0aW9uKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuXG4gICAgICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgJGVsZW1lbnQuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuSXRlbUNsaWNrKCRlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGVsZW1lbnQub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm5JdGVtT3ZlcigkZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuSXRlbU91dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNsZWFySW5wdXQ6IGZ1bmN0aW9uICgkaW5wdXQpIHtcblxuICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAkaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuXG5cbiAgICAgICQodGhpcy5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgdGhpcy5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgY2xlYXJPdmVyOiBmdW5jdGlvbiAoJGlucHV0LCBpbmRleCl7XG4gICAgICAgIGlmKHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm92ZXJWYWx1ZVtpbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7XG4gICAgICAgICQodGhpcy5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgICB0aGlzLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVJldmVyc2VTZWFyY2g6IGZ1bmN0aW9uICgkaW5wdXQsIHZhbHVlKSB7XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICB1cmw7XG5cbiAgICAgIHVybCA9IHRoaXMuZ2VvUmV2ZXJzZVNlYXJjaEFwaSArICc/Zm9ybWF0PWpzb24mbGF0PScgKyB2YWx1ZVsxXSArICcmbG9uPScgKyB2YWx1ZVswXTtcbiAgICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgJ3VybCc6IHVybH0pXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzcG9uc2UuYWRkcmVzcy5jaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5yb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcsICcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy50b3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzcG9uc2UuYWRkcmVzcy50b3duO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5yb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcsICcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcy5yb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnICcgKyByZXNwb25zZS5hZGRyZXNzLmhvdXNlX251bWJlciArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzcG9uc2UuYWRkcmVzcy5yb2FkICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3BvbnNlLmRpc3BsYXlfbmFtZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICRpbnB1dC52YWwodmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoJGlucHV0LmF0dHIoJ25hbWUnKSA9PT0gXCJyb3V0aW5nRnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyRnJvbUNsZWFyLnNob3coKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJGlucHV0LmF0dHIoJ25hbWUnKSA9PT0gXCJyb3V0aW5nVG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgfSk7XG5cbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaDogZnVuY3Rpb24gKCRpbnB1dCwgdmFsdWUpIHtcblxuICAgICAgdmFyIG1hcCxcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgdmlld2JveCxcbiAgICAgICAgICBzZWxmLFxuICAgICAgICAgIHVybDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmICgkaW5wdXQudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgLy9zZWxmLmNsZWFySW5wdXQoJGlucHV0KTtcbiAgICAgICAgZGVsZXRlIHNlbGZbdmFsdWVdO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cblxuICAgICAgbWFwID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwO1xuICAgICAgYm91bmRzID0gbWFwLmdldFZpZXcoKS5jYWxjdWxhdGVFeHRlbnQobWFwLmdldFNpemUoKSk7XG4gICAgICBib3VuZHMgPSBvbC5wcm9qLnRyYW5zZm9ybUV4dGVudChib3VuZHMsIG1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpLCAnRVBTRzo0MzI2Jyk7XG4gICAgICB2aWV3Ym94ID0gJyZ2aWV3Ym94PScgKyBib3VuZHNbMF0gKyAnLCcgKyBib3VuZHNbMV0gKyAnLCcgKyBib3VuZHNbMl0gKyAnLCcgKyBib3VuZHNbM107XG5cbiAgICAgIHVybCA9IHNlbGYuZ2VvU2VhcmNoQXBpICsgJz9mb3JtYXQ9anNvbiZsaW1pdD0xJnE9JyArIGVuY29kZVVSSSgkaW5wdXQudmFsKCkpICsgdmlld2JveDtcblxuICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAndXJsJzogdXJsXG4gICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgaWYodmFsdWUgPT09XCJvdmVyVmFsdWVcIil7XG4gICAgICAgICAgICAgICAgICBpZiAoIXNlbGYub3ZlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5vdmVyVmFsdWU9e307XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzZWxmLm92ZXJWYWx1ZVtzZWxmLmluZGV4XT1uZXcgb2wuZ2VvbS5Qb2ludChbcGFyc2VGbG9hdChyZXNwb25zZVswXS5sb24pLCBwYXJzZUZsb2F0KHJlc3BvbnNlWzBdLmxhdCldKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICBzZWxmW3ZhbHVlXSA9IG5ldyBvbC5nZW9tLlBvaW50KFxuICAgICAgICAgICAgICAgICAgICAgIFtwYXJzZUZsb2F0KHJlc3BvbnNlWzBdLmxvbiksIHBhcnNlRmxvYXQocmVzcG9uc2VbMF0ubGF0KV1cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGVydChsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1MpO1xuICAgICAgICAgICAgICBzZWxmLmNsZWFySW5wdXQoJGlucHV0KTtcbiAgICAgICAgICAgICAgZGVsZXRlIHNlbGZbdmFsdWVdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgfSlcbiAgICAgIC5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYWxlcnQobGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BTEVSVF9HRU9DT0RJTkcpO1xuICAgICAgfSk7XG5cblxuXG4gICAgICByZXR1cm4gXCJcIjtcblxuICAgIH0sXG5cbiAgICB0b0h1bWFuRGlzdGFuY2U6IGZ1bmN0aW9uIChkaXN0YW5jZUluTWV0ZXJzKSB7XG5cbiAgICAgIC8vIGNvcGllZCBmcm9tIG9sZCBzb3VyY2VzXG5cbiAgICAgIHZhciBkaXN0YW5jZSxcbiAgICAgICAgICBodW1hbkRpc3RhbmNlO1xuXG4gICAgICBkaXN0YW5jZSA9IHBhcnNlSW50KGRpc3RhbmNlSW5NZXRlcnMsIDEwKTtcbiAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2UgLyAxMDAwO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPj0gMTAwKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAna20nO1xuICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAxMCkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgxKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMC4xKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDIpICsgJyZuYnNwOycgKyAna20nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMCkgKyAnJm5ic3A7JyArICdtJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh1bWFuRGlzdGFuY2U7XG4gICAgfSxcblxuICAgIHRvSHVtYW5UaW1lOiBmdW5jdGlvbiAodGltZUluU2Vjb25kcykge1xuXG4gICAgICAvLyBjb3BpZWQgZnJvbSBvbGQgc291cmNlc1xuXG4gICAgICB2YXIgc2Vjb25kcyxcbiAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgIGhvdXJzLFxuICAgICAgICAgIGh1bWFuVGltZTtcblxuICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVJblNlY29uZHMsIDEwKTtcbiAgICAgIG1pbnV0ZXMgPSBwYXJzZUludChzZWNvbmRzIC8gNjAsIDEwKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICAgIGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xuXG4gICAgICBpZiAoaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCkge1xuICAgICAgICBodW1hblRpbWUgPSBzZWNvbmRzICsgJyZuYnNwOycgKyAncyc7XG4gICAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICAgIGh1bWFuVGltZSA9IG1pbnV0ZXMgKyAnJm5ic3A7JyArICdtaW4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHVtYW5UaW1lID0gaG91cnMgKyAnJm5ic3A7JyArICdoJyArICcmbmJzcDsnICsgbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBodW1hblRpbWU7XG4gICAgfVxuXG4gIH0pO1xuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBSb3V0ZXIgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1wb3J0c2lkZS1yb3V0ZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tIFwiLi9jNGctbWFwcy1taXNjLXNwaW5uZXJcIjtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBzaWRlYm9hcmQgc3RydWN0dXJlcy4gUHJvdmlkZXMgc3RhbmRhcmQgY29uZmlndXJhdGlvbnMgd2hpY2ggYXJlIGVxdWFsIGZvciBlYWNoIHNpZGVib2FyZCBlbGVtZW50LlxuICovXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBleHRlbmRzIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICAgICAgICAgICBvcHRpb25zICBtaXNjIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKlxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgZXh0RGl2OiBmYWxzZSxcbiAgICAgIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgICAgIG1hcENvbnRyb2xsZXI6IHVuZGVmaW5lZCxcbiAgICAgIG5hbWU6ICdzaWRlYm9hcmQnLFxuICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgLy9hY3RpdmUgSWRlbnRpZmllciAod2hpY2ggc2lkZSBpcyB0aGlzIGVsZW1lbnQgb24/KVxuICAgIC8vY3NzbmFtZSBuZWVkZWQgdG8gc2V0IHRoZSBjc3MgY2xhc3MgY29ycmVjdGx5XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ1BvcnRzaWRlJztcbiAgICAgICAgdGhpcy5jc3NuYW1lID0gJ3BvcnRzaWRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9ICdTdGFyYm9hcmQnO1xuICAgICAgICB0aGlzLmNzc25hbWUgPSAnc3RhcmJvYXJkJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vdGhpcy5jc3NuYW1lID0gdGhpcy5pZGVudGlmaWVyLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdGhpcy5pZGVudGlmaWVyLnNsaWNlKDEpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLm9wdGlvbnMudGlwTGFiZWwgPSB0aGlzLm9wdGlvbnMudGlwTGFiZWwgfHwgdGhpcy5vcHRpb25zLmhlYWRsaW5lIHx8IGxhbmdDb25zdGFudHMuQ1RSTF9TSURFQk9BUkQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNwaW5uZXIgPSB1bmRlZmluZWQ7XG4gICAgLy8gbWFpbnN0cnVjdHVyZSBlbGVtZW50c1xuICAgIHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRpdGxlQmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaGVhZGxpbmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy50b3BUb29sYmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY29udGVudENvbnRhaW5lciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmJvdHRvbVRvb2xiYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0dXNCYXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnNlY3Rpb25zID0gW107XG4gICAgdGhpcy52aWV3VHJpZ2dlckJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpZXdzID0gW107XG4gICAgdGhpcy5hY3RpdmVWaWV3ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGF1c2VkVmlldyA9IHVuZGVmaW5lZDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY3JlYXRlICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vcHRpb25zLmV4dERpdikge1xuICAgICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHRhcmdldDogdGhpcy5vcHRpb25zLnRhcmdldCB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cbiAgLy8gQWRkIG1ldGhvZHNcbiAgYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBiYXNpYyBodG1sLWVsZW1lbnRzIGZvciB0aGUgc2lkZWJvYXJkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICd0cnVlJyBvbiBzdWNjZXNzXG4gICAgICovXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBpbml0Q2xhc3MsXG4gICAgICAgICAgdGl0bGVCdXR0b25CYXIsXG4gICAgICAgICAgY2xvc2VCdXR0b24sXG4gICAgICAgICAgY2FwaXRhbGl6ZWROYW1lLFxuICAgICAgICAgIGhpZGVCdXR0b24sXG4gICAgICAgICAgY2FjaGluZztcblxuICAgICAgY2FjaGluZyA9IHRoaXMub3B0aW9ucy5jYWNoaW5nO1xuICAgICAgY2FwaXRhbGl6ZWROYW1lID0gdXRpbHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMub3B0aW9ucy5uYW1lKTtcbiAgICAgIHNlbGYgPSB0aGlzO1xuXG5cbiAgICAgIC8vIERvIG5vdCBoaWRlIHdoZW4gaXQgaXMgaW5pdGlhbGl6ZWQgb3Blbiwgb3IgaW4gYW4gZXh0ZXJuYWwgZGl2XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dERpdikge1xuICAgICAgICBpbml0Q2xhc3MgPSAnICcgKyBjc3NDb25zdGFudHMuT1BFTjtcbiAgICAgICAgLy8gaWYgKGNhY2hpbmcpIHtcbiAgICAgICAgLy8gICAgIHV0aWxzLnN0b3JlVmFsdWUodGhpcy5vcHRpb25zLm5hbWUsICcxJyk7XG4gICAgICAgIC8vIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRDbGFzcyA9ICcgJyArIGNzc0NvbnN0YW50cy5DTE9TRTtcbiAgICAgICAgLy8gaWYgKGNhY2hpbmcpIHtcbiAgICAgICAgLy8gICAgIHV0aWxzLnN0b3JlVmFsdWUodGhpcy5vcHRpb25zLm5hbWUsICcwJyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSB8fCBmYWxzZTtcblxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAkKHRoaXMuYnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAvLyBsb29zZSBmb2N1cywgb3RoZXJ3aXNlIGl0IGxvb2tzIG1lc3N5XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFtub3RlXSBcInRoaXMuYmx1cigpXCIgZG9lcyBub3Qgd29yayBpbiBJRS1mdWxsc2NyZWVuLW1vZGVcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLm5hbWUgKyAnOiAnICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY2FwaXRhbGl6ZWROYW1lID09IFwiUm91dGVyXCIgfHwgY2FwaXRhbGl6ZWROYW1lID09IFwiTWVhc3VyZVwiIHx8IGNhcGl0YWxpemVkTmFtZSA9PSBcIkVkaXRvclwiKXtcbiAgICAgICAgICAgICAgc2VsZi50b2dnbGUodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b24udGl0bGUgPSB0aGlzLm9wdGlvbnMudGlwTGFiZWw7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBhdHRyaWJ1dGVzXG4gICAgICAkKHRoaXMuY29udGFpbmVyKS5hZGRDbGFzcygnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICcgJyArICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udGFpbmVyJyArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyBpbml0Q2xhc3MpO1xuICAgICAgJCh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKCdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250cm9sJyArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEUgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfQ09OVFJPTCArIGluaXRDbGFzcyk7XG5cbiAgICAgIC8vIFNldCBpbml0aWFsIGRpbWVuc2lvbnNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xOTIwcHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTAwJSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLm1pbldpZHRoID0gJzI1MHB4JztcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTkyMHB4JztcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTEwMCUnO1xuICAgICAgfVxuXG4gICAgICAvLyBQbGFjZSBjb250YWluZXJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5leHREaXYpLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgLy8gICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gdGhpcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAkKCcjJyArIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRUYXJnZXQoKSArICcgLicgKyBjc3NDb25zdGFudHMuT0xfT1ZFUkxBWUNPTlRBSU5FUl9TRSkuYXBwZW5kKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci4kb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQuYXBwZW5kKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBjb250ZW50LWFyZWFcbiAgICAgIC8vXG4gICAgICAvLyBXcmFwcGVyXG4gICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMud3JhcHBlci5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLXdyYXBwZXInO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgIC8vIFRpdGxlYmFyXG4gICAgICB0aGlzLnRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnRpdGxlQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdGl0bGViYXInO1xuICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGVCYXIpO1xuXG4gICAgICAvLyBUcmlnZ2VyYmFyXG4gICAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdmlld3RyaWdnZXJiYXInO1xuXG4gICAgICAvLyBUb3AtVG9vbGJhclxuICAgICAgdGhpcy50b3BUb29sYmFyID0gdGhpcy5hZGRTZWN0aW9uKHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLXRvcC10b29sYmFyJyxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLndyYXBwZXJcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb250ZW50LUNvbnRhaW5lclxuICAgICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdGhpcy5hZGRTZWN0aW9uKHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRlbnQtY29udGFpbmVyJyxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLndyYXBwZXJcbiAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgY29udGVudCBoZWFkbGluZVxuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuY29udGVudEhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjb250ZW50SGVhZGxpbmUnO1xuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50SGVhZGxpbmUpO1xuXG4gICAgICAvLyBCb3R0b20tVG9vbGJhclxuICAgICAgdGhpcy5ib3R0b21Ub29sYmFyID0gdGhpcy5hZGRTZWN0aW9uKHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctYm90dG9tLXRvb2xiYXIgYzRnLWNsb3NlJyxcbiAgICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgICAvLyBTdGF0dXNiYXJcbiAgICAgIHRoaXMuc3RhdHVzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnN0YXR1c0Jhci5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLXN0YXR1c2JhciBjNGctY2xvc2UnO1xuICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuc3RhdHVzQmFyKTtcblxuICAgICAgLy8gQWRkIHNwaW5uZXJcbiAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRlbnRDb250YWluZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkxBUkdFXG4gICAgICB9KTtcblxuICAgICAgLy8gRmlsbCB0aXRsZWJhclxuICAgICAgLy9cbiAgICAgIC8vIEhlYWRsaW5lXG4gICAgICB0aGlzLmhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgdGhpcy5oZWFkbGluZS5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWhlYWRsaW5lJztcbiAgICAgIHRoaXMuaGVhZGxpbmUuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmhlYWRsaW5lO1xuICAgICAgdGhpcy50aXRsZUJhci5hcHBlbmRDaGlsZCh0aGlzLmhlYWRsaW5lKTtcbiAgICAgIC8vIEJ1dHRvbmJhclxuICAgICAgdGl0bGVCdXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRpdGxlQnV0dG9uQmFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1idXR0b25iYXInO1xuICAgICAgdGhpcy50aXRsZUJhci5hcHBlbmRDaGlsZCh0aXRsZUJ1dHRvbkJhcik7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgLy8gSGlkZWJ1dHRvblxuICAgICAgICBoaWRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGhpZGVCdXR0b24uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlBPUlRTSURFX0hJREU7XG4gICAgICAgIGhpZGVCdXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkhJREU7XG4gICAgICAgICQoaGlkZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmNsb3NlKHRydWUpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpdGxlQnV0dG9uQmFyLmFwcGVuZENoaWxkKGhpZGVCdXR0b24pO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG9zZWJ1dHRvblxuICAgICAgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY2xvc2UnO1xuICAgICAgY2xvc2VCdXR0b24udGl0bGUgPSBsYW5nQ29uc3RhbnRzLkNMT1NFO1xuICAgICAgJChjbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgICB0aXRsZUJ1dHRvbkJhci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgIC8vQWRkIHNwaW5uZXIgZm9yIGxlZnQgc2lkZWQgc2lkZWJvYXJkIGVsZW1lbnRzXG4gICAgICB0aGlzLnNwaW5uZXIgPSBuZXcgU3Bpbm5lcih7XG4gICAgICAgIHRhcmdldDogdGhpcy5jb250ZW50Q29udGFpbmVyLFxuICAgICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5MQVJHRVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEhhbmRsZSBleHRlcm5hbCBESVYgYW5kIGRlZmF1bHQgc3RhdGVcbiAgICAgIC8vIGNhdGNoIHRvdWNoIGV2ZW50cyBhbmQgc3RvcCB0aGVpciBwcm9wYWdhdGlvblxuICAgICAgLy8gb3RoZXJ3aXNlIHRvdWNoLXNjcm9sbGluZyB3aWxsIGJlIHN0b3BwZWQgYnkgb2wzXG4gICAgICAkKHRoaXMuY29udGFpbmVyKS5vbigndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gQmluZCB0aGUgdXBkYXRlIG1ldGhvZCB0byB0aGUgbWFwLXJlc2l6ZSBldmVudFxuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdjaGFuZ2U6c2l6ZScsIHRoaXMudXBkYXRlLCB0aGlzKTtcblxuICAgICAgLy8gU2hvdyBvcGVuIGlmIGRlc2lyZWRcbiAgICAgIGlmICgodGhpcy5vcHRpb25zLmRlZmF1bHRPcGVuKSB8fCAodGhpcy5vcHRpb25zLmNhY2hpbmcgJiYgKHV0aWxzLmdldFZhbHVlKHRoaXMub3B0aW9ucy5uYW1lKSA9PSAnMScpKSkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgLy8gZW5kIG9mIFwiY3JlYXRlXCJcblxuICAgIC8qKlxuICAgICAqICAgVXBkYXRlIHRoZSBzaWRlYm9hcmRzIGh0bWwtZWxlbWVudHNcbiAgICAgKiAgIHJlc2l6ZXMgdGhlIGNvbnRlbnQtY29udGFpbmVyXG4gICAgICogICBhbmQgdGhlIHRvcC10b29sYmFyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtldmVudC1vYmplY3R9ICBvcHRfZXZlbnQgICpvcHRpb25hbCogIEp1c3QgbmVlZGVkIGJ5IHRoZSBvbC1iaW5kLW1ldGhvZCxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dCBub3QgdXNlZCBpbiB0aGUgZnVuY3Rpb25cbiAgICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChvcHRfZXZlbnQpIHtcblxuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0LFxuICAgICAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgLypcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgfSovXG5cbiAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCA9ICQodGhpcy53cmFwcGVyKS5oZWlnaHQoKSAtICgkKHRoaXMudGl0bGVCYXIpLm91dGVySGVpZ2h0KHRydWUpICsgJCh0aGlzLnN0YXR1c0Jhcikub3V0ZXJIZWlnaHQodHJ1ZSkpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgaWYgKHRoaXMgIT09IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvcC1Ub29sYmFyXG4gICAgICBpZiAodGhpcy50b3BUb29sYmFyKSB7XG4gICAgICAgICAgaWYgKHRoaXMudG9wVG9vbGJhci5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQgLT0gJCh0aGlzLnRvcFRvb2xiYXIpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQm90dG9tLXRvb2xiYXJcbiAgICAgIGlmICh0aGlzLmJvdHRvbVRvb2xiYXIpIHtcbiAgICAgICAgICBpZiAodGhpcy5ib3R0b21Ub29sYmFyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCAtPSAkKHRoaXMuYm90dG9tVG9vbGJhcikub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDb250ZW50LWNvbnRhaW5lclxuICAgICAgJCh0aGlzLmNvbnRlbnRDb250YWluZXIpLm91dGVySGVpZ2h0KGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCk7XG5cbiAgICAgIC8vIENvcnJlY3Qgd2lkdGhcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbdGhpcy5vcHRpb25zLmRpcmVjdGlvbiArIFwiU2xpZGVFbGVtZW50c1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyhzZWxmLm9wdGlvbnMuZGlyZWN0aW9uLCBjb250YWluZXJPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vb25seSBtb3ZlIHRoZSB0b2dnbGUgYnV0dG9uIG9uIHN0YXJib2FyZCBlbGVtZW50c1xuICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmNzcyh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLCBjb250YWluZXJPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIC8vIGVuZCBvZiBcInVwZGF0ZVwiXG5cbiAgICAvKipcbiAgICAgKiBPcGVucyB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAqb3B0aW9uYWwqIG9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBpbml0aWFsaXplLWZ1bmN0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgJ3RydWUnIGFuIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBvcGVuOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcbiAgICAgIHZhciBjb250YWluZXJPZmZzZXRXaWR0aCxcbiAgICAgICAgICBzZWxmO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgLy8gQ2FsbCBpbml0aWFsaXplLWZ1bmN0aW9ucywgaWYgZXhpc3RlbnRcbiAgICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0aGlzLmluaXQob3B0X29wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNhbGwgcHJlT3BlbkZ1bmN0aW9uc1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZU9wZW5GdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByZU9wZW5GdW5jdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dERpdikge1xuICAgICAgICAvLyBOb3QgYXZhaWxhYmxlIG9uIGV4dGVybmFsIGRpdnNcbiAgICAgICAgY29uc29sZS53YXJuKCdZb3UgY2Fubm90IHVzZSB0aGlzIGZ1bmN0aW9uIG9uIGV4dGVybmFsIGVtYmVkZGVkIHNpZGVib2FyZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL2Nsb3NlIG90aGVyIGFjdGl2ZSBzaWRlYm9hcmQgb24gdGhpcyBzaWRlXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0uY2xvc2UodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2xpZGUgb3RoZXIgZWxlbWVudHMgd2hlbiBubyBvdGhlciBzaWRlYm9hcmQgd2FzIGFjdGl2ZSBvbiB0aGlzIHNpZGVcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlclt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHNlbGYub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5jb250YWluZXIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmNzcyh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLCAwKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCB0aGlzIGFzIGFjdGl2ZSBTaWRlYm9hcmRcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgdmlldyBuZWVkcyB0byBiZSByZWFjdGl2YXRlZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVWaWV3LmFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCh0aGlzLnN0YXR1c0JhcikuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKSkge1xuICAgICAgICAgICQodGhpcy5zdGF0dXNCYXIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQodGhpcy5ib3R0b21Ub29sYmFyKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgJCh0aGlzLmJvdHRvbVRvb2xiYXIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2hvdyBjb250YWluZXIgdG8gZml4IHJlc2l6aW5nIGlzc3VlXG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgcG9zdE9wZW5GdW5jdGlvbnNcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBvc3RPcGVuRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnBvc3RPcGVuRnVuY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIGVuZCBvZiBcIm9wZW5cIlxuXG4gICAgaXNPcGVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtib29sZWFufSAgb3B0X2hpZGUgICAgICAgICAgICAgICAqb3B0aW9uYWwqIENob29zZSBpZiB0aGlzIGZ1bmN0aW9uIHNob3VsZCB0cmlnZ2VyIHxwcmVIaWRlRnVuY3Rpb258XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RlYWQgb2YgfHByZUNsb3NlRnVuY3Rpb258LiBEZWZhdWx0IGlzIHxmYWxzZXwuXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBvcHRfb3Blbk90aGVyU2lkZWJvYXJkICAqb3B0aW9uYWwqIEluZGljYXRlcyBpZiBhbm90aGVyIHNpZGVib2FyZCBlbGVtZW50IHdpbGwgYmUgb3BlbmVkIGluc3RlYWQuXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgfGZhbHNlfC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICB8dHJ1ZXwgb24gc3VjY2Vzcy5cbiAgICAgKi9cbiAgICBjbG9zZTogZnVuY3Rpb24gKG9wdF9oaWRlLCBvcHRfb3Blbk90aGVyU2lkZWJvYXJkKSB7XG4gICAgICB2YXIgY29udGFpbmVyT2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICBkaXJlY3Rpb24gPSB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuXG4gICAgICBpZiAob3B0X2hpZGUgKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVIaWRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLnByZUhpZGVGdW5jdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJlQ2xvc2VGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucHJlQ2xvc2VGdW5jdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgb24gZXh0ZXJuYWwgZGl2c1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW5ub3QgdXNlIHRoaXMgZnVuY3Rpb24gb24gZXh0ZXJuYWwgZW1iZWRkZWQgc2lkZWJvYXJkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdICE9PSB0aGlzKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGlzICcgKyB0aGlzLm9wdGlvbnMubmFtZSArICctZWxlbWVudCAoJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJykgaXMgYWxyZWFkeSBjbG9zZWQuJyk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcy5jb250YWluZXIpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmNzcyhkaXJlY3Rpb24sIC1jb250YWluZXJPZmZzZXRXaWR0aCk7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5jc3MoZGlyZWN0aW9uLCAwKTtcblxuICAgICAgICBpZiAoIW9wdF9vcGVuT3RoZXJTaWRlYm9hcmQpIHtcbiAgICAgICAgICAvLyBzbGlkZSBvdGhlciBlbGVtZW50c1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW2RpcmVjdGlvbiArIFwiU2xpZGVFbGVtZW50c1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyhkaXJlY3Rpb24sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGlkZSBjb250YWluZXIgdG8gZml4IHJlc2l6aW5nIGlzc3VlXG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuICAgICAgICAvLyBjaGVjayBpZiBhIHZpZXcgbmVlZHMgdG8gYmUgZGVhY3RpdmF0ZWRcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlVmlldykge1xuICAgICAgICAgIHRoaXMuYWN0aXZlVmlldy5kZWFjdGl2YXRlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFjdGl2ZSBTaWRlYm9hcmRlbnRyeVxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2FjaGluZykge1xuICAgICAgICAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJjbG9zZVwiXG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICBSZXR1cm5zIHx0cnVlfCBvbiBzdWNjZXNzLlxuICAgICAqL1xuICAgIHRvZ2dsZTogZnVuY3Rpb24gKG9wdF9oaWRlKSB7XG4gICAgICB2YXIgY2FwaXRhbGl6ZWROYW1lO1xuICAgICAgY2FwaXRhbGl6ZWROYW1lID0gdXRpbHMuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHRoaXMub3B0aW9ucy5uYW1lKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZShvcHRfaGlkZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5vcGVuKCk7XG4gICAgfSwgLy8gZW5kIG9mIFwidG9nZ2xlXCJcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBidXR0b24gd2hpY2ggY2hhcmFjdGVyaXN0aWNzIGFyZSBkZWZpbmVkIGJ5IHRoZSBvcHRpb25zIHBhcmFtZXRlclxuICAgICAqIFRoZXNlIG9wdGlvbnMgaW5jbHVkZSBlLmcuIHRoZSB0YXJnZXQgY29udGFpbmVyIHdoZXJlIHRoZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCBhbmQgdGhlIGNsaWNrIGFjdGlvbiBvZiB0aGUgYnV0dG9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgb3B0X29wdGlvbnMgIFRoZSBidXR0b24gY29uZmlndXJhdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtYWtlQnV0dG9uOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgICAgdmFyIG9wdGlvbnMsXG4gICAgICAgICAgYnV0dG9uO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICBsYWJlbDogdW5kZWZpbmVkLFxuICAgICAgICB0aXBMYWJlbDogdW5kZWZpbmVkLFxuICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICB0YXJnZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgY2xpY2tBY3Rpb246IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0X29wdGlvbnMpO1xuXG4gICAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5jbGFzc05hbWUgPSAnICcgKyBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBidXR0b24uY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnLWJ1dHRvbicgKyBvcHRpb25zLmNsYXNzTmFtZTtcbiAgICAgIGlmKG9wdGlvbnMuaWQpIHtcbiAgICAgICAgYnV0dG9uLmlkID0gb3B0aW9ucy5pZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnRpcExhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICBidXR0b24udGl0bGUgPSBvcHRpb25zLnRpcExhYmVsO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBvcHRpb25zLmxhYmVsO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5sYWJlbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKG9wdGlvbnMubGFiZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2xpY2tBY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgJChidXR0b24pLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnMuY2xpY2tBY3Rpb24oKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAkKG9wdGlvbnMudGFyZ2V0KS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9LCAvLyBlbmQgb2YgXCJtYWtlQnV0dG9uXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW2FkZFNlY3Rpb24gZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBvcHRfb3B0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGFkZFNlY3Rpb246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgIGVsZW1lbnQ7XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIHR5cGU6ICdkaXYnLFxuICAgICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgICB0YXJnZXQ6IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0X29wdGlvbnMpO1xuXG4gICAgICAvLyB0cnkgdG8gY3JlYXRlIHRoZSBuZXcgc2VjdGlvblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob3B0aW9ucy50eXBlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgY3JlYXRlIHNlY3Rpb24uIFwiJyArIG9wdGlvbnMudHlwZSArICcgaXMgbm90IGEgdmFsaWQgSFRNTC1ub2RlLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG5cbiAgICAgIC8vIHRyeSB0byBhcHBlbmQgdGhlIHNlY3Rpb24gdG8gdGhlIGdpdmVuIHRhcmdldFxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3B0aW9ucy50YXJnZXQuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWN0aW9uLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50IHx8IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgc2VjdGlvbi5zZXRFbGVtZW50ID0gZnVuY3Rpb24gKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKG5ld0VsZW1lbnQgJiYgdHlwZW9mIG5ld0VsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgaWYgKCEoZWxlbWVudCAmJiBlbGVtZW50ID09PSBuZXdFbGVtZW50KSkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gbmV3RWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuICAgICAgLy8gYWRkIHRvIHNlY3Rpb25zLWFycmF5XG4gICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9LCAvLyBlbmQgb2YgXCJhZGRTZWN0aW9uXCJcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW2FkZFZpZXcgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtbdHlwZV19ICBvcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkVmlldzogZnVuY3Rpb24gKG9wdGlvbnMsIG9wdF92aWV3U2NvcGUpIHtcblxuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgdmlld1Njb3BlLFxuICAgICAgICAgIGFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3MsXG4gICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICB2aWV3O1xuXG4gICAgICBzZWxmID0gdGhpcztcbiAgICAgIHZpZXdTY29wZSA9IG9wdF92aWV3U2NvcGUgfHwgdGhpcztcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgLy8gbmFtZTogdW5kZWZpbmVkLFxuICAgICAgICB0cmlnZ2VyQ29uZmlnOiB1bmRlZmluZWQsIC8vIEBUT0RPIGRva3UgZm9ybWF0OiB7b3B0X3RhcmdldDogW3N0cmluZ3xodG1sT2JqZWN0XSwgb3B0X2NsYXNzTmFtZTogW3N0cmluZ10sIG9wdF90aXBMYWJlbDogW3N0cmluZ119XG4gICAgICAgIHNlY3Rpb25FbGVtZW50czogW10sIC8vIEBUT0RPIGRva3UgZm9ybWF0OiBbe3NlY3Rpb246IFtzZWN0aW9uT2JqZWN0XSwgZWxlbWVudDogW2VsZW1lbnRPYmplY3RdfV1cbiAgICAgICAgaW5pdEZ1bmN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGFjdGl2YXRlRnVuY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiB1bmRlZmluZWRcbiAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgYWRkIGEgdmlldyB3aXRob3V0IGEgbmFtZSAob2YgdHlwZSBcInN0cmluZ1wiKS4nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2aWV3ID0ge307XG5cbiAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgIHZpZXcucGF1c2VkID0gZmFsc2U7XG5cbiAgICAgIHZpZXcuYWN0aXZhdGUgPSBmdW5jdGlvbiAob3B0X29wZW5TaWRlYm9hcmQpIHtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlckNvbmZpZy53aXRoSGVhZGxpbmUpIHtcbiAgICAgICAgICAgIHNlbGYuY29udGVudEhlYWRsaW5lLmlubmVySFRNTCA9IG9wdGlvbnMudHJpZ2dlckNvbmZpZy50aXBMYWJlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9wZW4gU2lkZWJvYXJkIGlmIGNsb3NlZFxuICAgICAgICBpZiAob3B0X29wZW5TaWRlYm9hcmQgJiYgIXNlbGYuaXNPcGVuKCkpIHtcbiAgICAgICAgICBzZWxmLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERlYWN0aXZhdGUgY3VycmVudCBhY3RpdmVWaWV3LCBpZiBleGlzdGVudFxuICAgICAgICBpZiAodHlwZW9mIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSAnb2JqZWN0JyAmJiB2aWV3U2NvcGUuYWN0aXZlVmlldyAhPT0gdmlldykge1xuICAgICAgICAgIHZpZXdTY29wZS5hY3RpdmVWaWV3LmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICB2aWV3U2NvcGUuYWN0aXZlVmlldyA9IHZpZXc7XG5cbiAgICAgICAgLy8gSGFuZGxlIHN1Yi12aWV3c1xuICAgICAgICBpZiAodmlldy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdmlldy5hY3RpdmVWaWV3LmFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGluaXRpYWxpemUtZnVuY3Rpb25zLCBpZiBleGlzdGVudFxuICAgICAgICBpZiAoIXZpZXcuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaW5pdEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2aWV3LmluaXRpYWxpemVkID0gb3B0aW9ucy5pbml0RnVuY3Rpb24oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlldy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzcGxheSBlbGVtZW50cyBpbiBnaXZlbiBzZWN0aW9uc1xuICAgICAgICBpZiAob3B0aW9ucy5zZWN0aW9uRWxlbWVudHMgJiYgb3B0aW9ucy5zZWN0aW9uRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLnNlY3Rpb25FbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgb3B0aW9ucy5zZWN0aW9uRWxlbWVudHNbaV0uc2VjdGlvbi5zZXRFbGVtZW50KG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzW2ldLmVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoYW5nZSB0cmlnZ2VyLXN0YXRlLCBpZiBleGlzdGVudFxuICAgICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoJ2M0Zy1hY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgYWN0aXZhdGUgZnVuY3Rpb24sIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hY3RpdmF0ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmFjdGl2YXRlRnVuY3Rpb24odmlldy5wYXVzZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmlldy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICB2aWV3LmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAob3B0X3BhdXNlKSB7XG5cbiAgICAgICAgdmlldy5wYXVzZWQgPSBvcHRfcGF1c2UgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gJ29iamVjdCcgJiYgdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09IHZpZXcpIHtcbiAgICAgICAgICBpZiAodHJpZ2dlciAmJiAhdmlldy5wYXVzZWQpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikucmVtb3ZlQ2xhc3MoJ2M0Zy1hY3RpdmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIYW5kbGUgc3ViLXZpZXdzXG4gICAgICAgICAgaWYgKHZpZXcuYWN0aXZlVmlldykge1xuICAgICAgICAgICAgdmlldy5hY3RpdmVWaWV3LmRlYWN0aXZhdGUodmlldy5wYXVzZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGwgZGVhY3RpdmF0ZSBmdW5jdGlvbiwgaWYgZXhpc3RlbnRcbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZGVhY3RpdmF0ZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24odmlldy5wYXVzZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcblxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJpZ2dlckNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnID0gJC5leHRlbmQoe1xuICAgICAgICAgIHRhcmdldDogdGhpcy52aWV3VHJpZ2dlckJhcixcbiAgICAgICAgICB0aXBMYWJlbDogb3B0aW9ucy5uYW1lLFxuICAgICAgICB9LCBvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuXG4gICAgICAgIG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGlja0FjdGlvbiA9IHZpZXcuYWN0aXZhdGU7XG4gICAgICAgIGlmIChvcHRpb25zLnRyaWdnZXJDb25maWcuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyA9ICcgJyArIG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTiArIGFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3M7XG4gICAgICAgIC8vIEBUT0RPIGNoZWNrOiB0cmlnZ2VyID0gdGhpcy5tYWtlQnV0dG9uKG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSB0aGlzLm1ha2VCdXR0b24ob3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52aWV3cy5wdXNoKHZpZXcpO1xuICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfSAvLyBlbmQgb2YgXCJhZGRWaWV3XCJcblxuICB9KTsgLy8gZW5kIG9mIFwiYWRkIG1ldGhvZHNcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBTaWRlYm9hcmQgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1zaWRlYm9hcmQuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBjdXJyZW50IHpvb21sZXZlbCBvbiB0aGUgbWFwLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGV4dGVuZHMgIHtvbC5jb250cm9sLkNvbnRyb2x9XG4gICAqXG4gICAqIEBwYXJhbSAgICB7T2JqZWN0fSAgICAgICAgICAgICAgb3B0X29wdGlvbnMgICpvcHRpb25hbCogY29udHJvbCBvcHRpb25zLlxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIHNlbGYsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHVwZGF0ZVpvb21sZXZlbDtcblxuICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLm1hcFZpZXcpIHtcbiAgICAgIGNvbnNvbGUud2FybignWm9vbWxldmVsIGNvbnRyb2wgbmVlZHMgdG8ga25vdyB0aGUgbWFwLicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGRlZmF1bHQgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjbGFzc05hbWU6IGNzc0NvbnN0YW50cy5aT09NX0xFVkVMLFxuICAgICAgdW5kZWZpbmVkSFRNTDogJydcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5tYXBWaWV3LmdldFpvb20oKTtcblxuICAgIHVwZGF0ZVpvb21sZXZlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gcGFyc2VJbnQob3B0aW9ucy5tYXBWaWV3LmdldFpvb20oKSk7XG4gICAgfTtcblxuICAgIG9wdGlvbnMubWFwVmlldy5vbignY2hhbmdlOnJlc29sdXRpb24nLCB1cGRhdGVab29tbGV2ZWwpO1xuICAgIG9sLmNvbnRyb2wuQ29udHJvbC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICB0YXJnZXQ6IG9wdGlvbnMudGFyZ2V0XG4gICAgfSk7XG4gIH07XG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLCBvbC5jb250cm9sLkNvbnRyb2wpO1xuXG5cbiAgLypcbiAgICogQWRkIG1ldGhvZHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLnByb3RvdHlwZSA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsLnByb3RvdHlwZSwge1xuXG4gICAgLy8gbm90aGluZyB0byBhZGQgaGVyZVxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBab29tbGV2ZWwgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wuWm9vbWxldmVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLm1pc2MgPSB0aGlzLmM0Zy5tYXBzLm1pc2MgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIEBUT0RPXG4gICAqIFtTcGlubmVyIGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfb3B0aW9ucyBDb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5taXNjLlNwaW5uZXIgPSBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgIHZhciBvcHRpb25zLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHNwaW5uZXJTcGFuO1xuXG4gICAgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICB0YXJnZXQ6ICcuJyArIGNzc0NvbnN0YW50cy5PTF9WSUVXUE9SVFxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKG9wdGlvbnMuY2xhc3NOYW1lKSB7XG4gICAgICBvcHRpb25zLmNsYXNzTmFtZSA9ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuU1BJTk5FUiArIG9wdGlvbnMuY2xhc3NOYW1lICsgJyAnICsgY3NzQ29uc3RhbnRzLkhJREU7XG4gICAgJChvcHRpb25zLnRhcmdldCkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICBzcGlubmVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGlubmVyU3Bhbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuSUNPTiArICcgJyArIGNzc0NvbnN0YW50cy5BTklNQVRJT05fU1BJTjtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bpbm5lclNwYW4pO1xuXG4gICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgPSAwO1xuXG4gIH07XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gc3Bpbm5lclxuICBjNGcubWFwcy5taXNjLlNwaW5uZXIucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMubWlzYy5TcGlubmVyLnByb3RvdHlwZSwge1xuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbc2hvdyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5ISURFKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyICs9IDE7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBUT0RPXG4gICAgICogW2hpZGUgZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMuZWxlbWVudCkuaGFzQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpKSB7XG4gICAgICAgIC8vY29uc29sZS53YXJuKCdTcGlubmVyIGlzIGFscmVhZHkgaGlkZGVuLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyID09PSAwKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ISURFKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciAtPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LFxuXG4gIH0pOyAvLyBFbmQgb2YgXCJhZGQgbWV0aG9kcyB0byBzcGlubmVyXCJcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgU3Bpbm5lciA9IHRoaXMuYzRnLm1hcHMubWlzYy5TcGlubmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtbWlzYy1zcGlubmVyLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xuXG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnRcIjtcbmltcG9ydCB7Wm9vbWxldmVsfSBmcm9tIFwiLi9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbFwiO1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIGM0Zy1NYXBzIHV0aWxpdHkgZnVuY3Rpb25zXG4gICAqL1xuICBjNGcubWFwcy51dGlscyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLnV0aWxzLCB7XG4gICAgLyoqXG4gICAgICogIENvbnZlcnRzIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBnaXZlbiBzdHJpbmcgdG8gdXBwZXJjYXNlLCBsZWF2aW5nIHRoZSByZW1haW5pbmcgc3RyaW5nIHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqICBAcGFyYW0gICAge3N0cmluZ30gICAgdGhlIHN0cmluZyB0byBjYXBpdGFsaXplXG4gICAgICpcbiAgICAgKiAgQHJldHVybiAgIHtzdHJpbmd9ICAgIHRoZSBjYXBpdGFsaXplZCBzdHJpbmdcbiAgICAgKi9cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXI6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYW4gdW5pcXVlIGlkLlxuICAgICAqXG4gICAgICogVGhlIGlkIGlzIDkgY2hhcmFjdGVycyBsb25nIGFuZCBwcmVmaXhlZCB3aXRoIGFuIHVuZGVyc2NvcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgVGhlIGdlbmVyYXRlZCBpZC5cbiAgICAgKi9cbiAgICBnZXRVbmlxdWVJZDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTWF0aC5yYW5kb20gc2hvdWxkIGJlIHVuaXF1ZSBiZWNhdXNlIG9mIGl0cyBzZWVkaW5nIGFsZ29yaXRobS5cbiAgICAgIC8vIENvbnZlcnQgaXQgdG8gYmFzZSAzNiAobnVtYmVycyArIGxldHRlcnMpLCBhbmQgZ3JhYiB0aGUgZmlyc3QgOSBjaGFyYWN0ZXJzXG4gICAgICAvLyBhZnRlciB0aGUgZGVjaW1hbC5cbiAgICAgIHJldHVybiAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEVuY29kZSBpbnB1dCBzdHJpbmdzIGZvciBHZW9KU09OLU9iamVjdHMgcHJvcGVybHksXG4gICAgICogc28gdGhleSB3aWxsIG5vdCBicmVhayB0aGUgQ29kZS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFwgLT4gXFxcXDtcbiAgICAgKiAgIFwiIC0+ICcnO1xuICAgICAqICAgw4QgLT4gJkF1bWw7XG4gICAgICogICDDpCAtPiAmYXVtbDtcbiAgICAgKiAgIMOWIC0+ICZPdW1sO1xuICAgICAqICAgw7YgLT4gJm91bWw7XG4gICAgICogICDDnCAtPiAmVXVtbDtcbiAgICAgKiAgIMO8IC0+ICZ1dW1sO1xuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gIGlucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBlbmNvZGVHZW9Kc29uUHJvcGVydHk6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgdmFyIG91dHB1dDtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFwvZywgJ1xcXFxcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXFwiL2csICdcXCdcXCcnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OEL2csICcmQXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OkL2csICcmYXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OWL2csICcmT3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O2L2csICcmb3VtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8OcL2csICcmVXVtbDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL8O8L2csICcmdXVtbDsnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBlbmNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgYmUgZGlzcGxheWVkIGNvcnJlY3RseS5cbiAgICAgKiBUcmFuc2Zvcm1zOlxuICAgICAqICAgXFxcXCAgICAgLT4gXFw7XG4gICAgICogICAnJyAgICAgLT4gXCI7XG4gICAgICogICAmQXVtbDsgLT4gw4RcbiAgICAgKiAgICZhdW1sOyAtPiDDpFxuICAgICAqICAgJk91bWw7IC0+IMOWXG4gICAgICogICAmb3VtbDsgLT4gw7ZcbiAgICAgKiAgICZVdW1sOyAtPiDDnFxuICAgICAqICAgJnV1bWw7IC0+IMO8XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IGlucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcXFxcXFxcL2csICdcXFxcJ1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC9cXCdcXCcvZywgJ1xcXCInXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZBdW1sOy9nLCAnw4QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZhdW1sOy9nLCAnw6QnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZPdW1sOy9nLCAnw5YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZvdW1sOy9nLCAnw7YnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZVdW1sOy9nLCAnw5w7J1xuICAgICAgKS5yZXBsYWNlKFxuICAgICAgICAgIC8mdXVtbDsvZywgJ8O8J1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgZGVjb2RlR2VvSnNvblByb3BlcnR5KClcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBvciByZXBsYWNlIGFuIFVSTC1wYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCB0aGUgZ2l2ZW4gcGFyYW1ldGVyLCBgcGFyYW1gLFxuICAgICAqIHdpbGwgYmUgYXBwbGllZCBhcyBcImhhc2gtcGFyYW1ldGVyXCIuXG4gICAgICogZS5nLjpcbiAgICAgKiAgIGh0dHBzOi8vbXl1cmwuZGU6cG9ydC9wYXRoL3RvL21hcHMjcGFyYW1cbiAgICAgKiBOb3RlLCB0aGF0IGFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiB3aGVyZWFzIGV4aXN0aW5nIFwiR0VULXBhcmFtZXRlcnNcIiBzdGF5IHVudG91Y2hlZC5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBzZXQsIGl0IHdpbGwgYmUgYXBwbGllZCBhcyBcIkdFVC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcz9vcHRfZ2V0S2V5PXBhcmFtXG4gICAgICogSWYgdGhlIGtleSBkZXNjcmliZWQgYnkgYG9wdF9nZXRLZXlgIGlzIGFscmVhZHkgZXhpc3RpbmcsIGl0cyB2YWx1ZSB3aWxsIGJlIG92ZXJyaWRlbixcbiAgICAgKiBvdGhlcndpc2UgdGhlIGtleS12YWx1ZS1wYWlyIHdpbGwgYmUgYXBwZW5kZWQgYXBwcm9wcmlhdGx5LlxuICAgICAqIEFscmVhZHkgZXhpc3RpbmcgXCJoYXNoLXBhcmFtZXRlcnNcIiB3aWxsIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9leGVjdXRlYCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIG5ldyBsaW5rIGFzIGBzdHJpbmdgLFxuICAgICAqIG90aGVyd2lzZSB0aGUgXCJocmVmL2xvY2F0aW9uXCIgd2lsbCBiZSBjaGFuZ2VkIGRpcmVjdGx5IGluIHRoZSBicm93c2VyLCB3aGljaCBjYW4gY2F1c2UgYSBwYWdlcmVsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgcGFyYW0gICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbnxzdHJpbmd9ICBvcHRfZ2V0S2V5ICAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKiBAcGFyYW0gIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICBvcHRfZXhlY3V0ZSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBzZXRVcmxQYXJhbTogZnVuY3Rpb24gKHBhcmFtLCBvcHRfZ2V0S2V5LCBvcHRfZXhlY3V0ZSkge1xuICAgICAgdmFyIGxpbmssXG4gICAgICAgICAgc2VhcmNoUGFyYW0sXG4gICAgICAgICAgcGFyYW1SZXBsYWNlZCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAodHlwZW9mIHBhcmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsaW5rID0gbG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgIGlmICghb3B0X2dldEtleSkge1xuICAgICAgICAvLyB1c2UgaGFzaC1wYXJhbWV0ZXJcbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhcmFtO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgKz0gbG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGFyYW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgR0VULXBhcmFtZXRlclxuICAgICAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgLy8gdGhlcmUgYXJlIGFscmVhZHkgc2VhcmNoLXBhcmFtZXRlcnNcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgb3B0X2dldEtleSA9IG9wdF9nZXRLZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAvLyByZXBsYWNlIHBhcmFtZXRlciBpZiBhbHJlYWR5IGV4aXN0ZW50XG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcbiAgICAgICAgICAgICAgLyhbXj1cXD9cXCZdKyk9KFteJl0rKS9naSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IG9wdF9nZXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIG90aGVyd2lzZSBhcHBlbmQgYXMgbmV3IHBhcmFtZXRlclxuICAgICAgICAgIGlmICghcGFyYW1SZXBsYWNlZCkge1xuICAgICAgICAgICAgc2VhcmNoUGFyYW0gKz0gJyYnICsgb3B0X2dldEtleSArICc9JyArIHBhcmFtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgYmUgdGhlIG9ubHkgc2VhcmNoLXBhcmFtZXRlciBpbiB0aGUgVVJMXG4gICAgICAgICAgc2VhcmNoUGFyYW0gPSAnPycgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdF9leGVjdXRlKSB7XG4gICAgICAgICAgbG9jYXRpb24uc2VhcmNoID0gc2VhcmNoUGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBzZWFyY2hQYXJhbSArIGxvY2F0aW9uLmhhc2g7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaW5rO1xuICAgIH0sIC8vIGVuZCBvZiBzZXRVcmxQYXJhbSgpXG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VhcmNoIG9yIGhhc2ggVVJMLXBhcmFtZXRlciBhcyBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2dldEtleWAgaXMgYGZhbHNlYCBvciBgdW5kZWZpbmVkYCwgdGhlIGhhc2gtcGFyYW1ldGVyIG9mIHRoZSBVUkwgaXMgcmV0dXJuZWQsXG4gICAgICogb3RoZXJ3aXNlIGl0IHdpbGwgc2VhcmNoIGZvciBhIEdFVC1wYXJhbWV0ZXIgYW5kIHJldHVybiBpdHMgdmFsdWUuXG4gICAgICpcbiAgICAgKiBJZiBhIHBhcmFtZXRlciBpcyBub3QgZXhpc3RlbnQsIG9yIGVtcHR5LCBhbiBlbXB0eSBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8c3RyaW5nfSAgb3B0X2dldEtleSAgRGVmYXVsdDogYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGZvdW5kIHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBnZXRVcmxQYXJhbTogZnVuY3Rpb24gKG9wdF9nZXRLZXkpIHtcbiAgICAgIHZhciBwYXJhbSxcbiAgICAgICAgICByZWdFeDtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIHBhcmFtID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgICAgIHBhcmFtID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVnRXggPSBuZXcgUmVnRXhwKCdbXFw/XFwmXScgKyBvcHRfZ2V0S2V5ICsgJz0oW14mXSspJywgJ2knKTtcbiAgICAgICAgICBwYXJhbSA9IHJlZ0V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgICBwYXJhbSA9IHBhcmFtID8gcGFyYW1bMV0gOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfSwgLy8gZW5kIG9mIGdldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIERlbHRhLWVuY29kZSBhbiBhcnJheSBvZiBudW1iZXJzLlxuICAgICAqIE5vdGUgdGhhdCB0aGUgYXJyYXkgd2lsbCBiZSBzb3J0ZWQgKGxvd2VzdCB0byBoaWdoZXN0KVxuICAgICAqIGJlZm9yZSBlbmNvZGluZy5cbiAgICAgKlxuICAgICAqIFNvIGFmdGVyIHRoZSBlbmNvZGluZyB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIG91dHB1dCBjb250YWluc1xuICAgICAqIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGhlIHNldCBhbmQgZWFjaCBmb2xsb3dpbmcgbnVtYmVyIGp1c3RcbiAgICAgKiByZXByZXNlbnRzIHRoZSBvZmZzZXQgdG8gaXRzIHByZXZpb3VzIG5laWdoYm9yLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBtb3N0bHkgZWZmaWNpZW50IGZvciBoaWdoIG51bWJlcnMsIHRoYXQgYXJlIFwiY2xvc2UgdG8gZWFjaCBvdGhlclwiLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKiAgIFsxMzM3LCAxMSwgMTAxLCAxMjMsIDk2LCA2OSwgNDIsIDQyXVxuICAgICAqICAgd2lsbCBiZSBzb3J0ZWRcbiAgICAgKiAgIFsxMSwgNDIsIDQyLCA2OSwgOTYsIDEwMSwgMTIzLCAxMzM3XVxuICAgICAqICAgYW5kIGVuY29kZWQgdG9cbiAgICAgKiAgIFsxMSwgMzEsIDAsIDI3LCAyNywgNSwgMjIsIDEyMTRdXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8bnVtYmVycz59ICBhcnJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG51bWJlcnM+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZWx0YUVuY29kZTogZnVuY3Rpb24gKGFycklucHV0KSB7XG4gICAgICB2YXIgYXJyT3V0cHV0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghYXJySW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgaWYgKGFycklucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGFycklucHV0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgfSk7XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gYXJySW5wdXRbMF07XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gYXJySW5wdXRbaV0gLSBhcnJJbnB1dFtpIC0gMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFFbmNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIGEgZGVsdGEtZW5jb2RlZCBhcnJheS5cbiAgICAgKiBTZWUgYGRlbHRhRW5jb2RlYCBmdW5jdGlvbiBmb3IgbW9yZSBkZXRhaWxlZCBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRGVjb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIGFyck91dHB1dCA9IFtdO1xuICAgICAgYXJyT3V0cHV0WzBdID0gcGFyc2VJbnQoYXJySW5wdXRbMF0sIDEwKTtcbiAgICAgIGlmIChpc05hTihhcnJJbnB1dFswXSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgZm9yIChpID0gMTsgaSA8IGFycklucHV0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGFyck91dHB1dFtpXSA9IHBhcnNlSW50KGFycklucHV0W2ldLCAxMCkgKyBhcnJPdXRwdXRbaSAtIDFdO1xuICAgICAgICBpZiAoaXNOYU4oYXJyT3V0cHV0W2ldKSkge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXJyT3V0cHV0O1xuXG4gICAgfSwgLy8gZW5kIG9mIGRlbHRhRGVjb2RlKClcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBjYWxsIGZ1bmN0aW9ucyBpbiBgYXJySG9va0Z1bmN0aW9uc2Agd2l0aCBnaXZlbiBgcGFyYW1ldGVyc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7YXJyYXk8ZnVuY3Rpb24+fSAgIGFyckhvb2tGdW5jdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7bWl4ZWR9ICAgICAgICAgICAgIHBhcmFtZXRlcnMgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBjYWxsSG9va0Z1bmN0aW9uczogZnVuY3Rpb24gKGFyckhvb2tGdW5jdGlvbnMsIHBhcmFtZXRlcnMpIHtcbiAgICAgIHZhciBqO1xuXG4gICAgICBpZiAoYXJySG9va0Z1bmN0aW9ucyAmJiBhcnJIb29rRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChqID0gMDsgaiA8IGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyckhvb2tGdW5jdGlvbnNbal0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyckhvb2tGdW5jdGlvbnNbal0ocGFyYW1ldGVycyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgLy8gZW5kIG9mIFwiY2FsbEhvb2tGdW5jdGlvbnMoKVwiXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgaGV4LWZvcm1hdGVkIGNvbG9yIHZhbHVlIGludG8gcmdiYSgpLWZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgaGV4ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfG51bWJlcn0gIG9wdF9vcGFjaXR5ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5OiBmdW5jdGlvbiAoaGV4LCBvcHRfb3BhY2l0eSwgb3B0X2FycmF5KSB7XG5cbiAgICAgIHZhciBiaWdpbnQsIHIsIGcsIGIsIGE7XG5cbiAgICAgIGJpZ2ludCA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgaWYgKG9wdF9vcGFjaXR5ICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgIG9wdF9vcGFjaXR5LnZhbHVlID0gcGFyc2VJbnQob3B0X29wYWNpdHkudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgdHlwZW9mIG9wdF9vcGFjaXR5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdF9vcGFjaXR5ID09PSAnb2JqZWN0JyAmJiBvcHRfb3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgIG9wdF9vcGFjaXR5ID0gb3B0X29wYWNpdHkudmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgciA9IChiaWdpbnQgPj4gMTYpICYgMjU1O1xuICAgICAgZyA9IChiaWdpbnQgPj4gOCkgJiAyNTU7XG4gICAgICBiID0gYmlnaW50ICYgMjU1O1xuICAgICAgYSA9IG9wdF9vcGFjaXR5ID8gKG9wdF9vcGFjaXR5IC8gMTAwKSA6IDE7XG4gICAgICBpZihvcHRfYXJyYXkpe1xuICAgICAgICByZXR1cm4gW3IsZyxiLGFdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLFwiICsgYSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWR1Y2UgYSBkZWZpbmVkIHN0eWxlLCB0byBhIHNpbXBsZXIgdmVyc2lvbi5cbiAgICAgKlxuICAgICAqIFRoZSByZWR1Y2VkIHN0eWxlIGlzIHRoZSBmaXJzdCBzdHlsZSBvZiB0aGUgZGVmaW5lZCBzdHlsZXNldCxcbiAgICAgKiB3aXRoIGEgMXB4IHRoaWNrIHN0cm9rZSBhbmQgYSBjaXJjbGUgd2l0aCBhIDVweCByYWRpdXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYWRkaXRpb25hbCBnZW9tZXRyaWVzIHdpdGggYSBtYWluLWdlb21ldHJ5LFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIGRlZmluZSBhIHdob2xlIG5ldyBzdHlsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtudW1iZXJ8c3RyaW5nfSAgICAgICAgICAgc3R5bGVJZCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PG9sLnN0eWxlLlN0eWxlPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVkdWNlU3R5bGU6IGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICB2YXIgc3R5bGUsXG4gICAgICAgICAgcmVkdWNlZFN0eWxlLFxuICAgICAgICAgIGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2VTdHlsZTtcblxuICAgICAgaWYgKCFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXSB8fCAhYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBzdHlsZSA9IGM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdLnN0eWxlKClbMF07XG5cbiAgICAgIGZpbGxTdHlsZSA9IHN0eWxlLmdldEZpbGwoKTtcbiAgICAgIHN0cm9rZVN0eWxlID0gc3R5bGUuZ2V0U3Ryb2tlKCk7XG4gICAgICBzdHJva2VTdHlsZS5zZXRXaWR0aCgxKTtcblxuICAgICAgcmVkdWNlZFN0eWxlID0gbmV3IG9sLnN0eWxlLlN0eWxlKHtcbiAgICAgICAgaW1hZ2U6IG5ldyBvbC5zdHlsZS5DaXJjbGUoe1xuICAgICAgICAgIGZpbGw6IGZpbGxTdHlsZSxcbiAgICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICAgIHJhZGl1czogNVxuICAgICAgICB9KSxcbiAgICAgICAgLy8gdGV4dDogc3R5bGUuZ2V0VGV4dCgpLFxuICAgICAgICBzdHJva2U6IHN0cm9rZVN0eWxlLFxuICAgICAgICBmaWxsOiBmaWxsU3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gW3JlZHVjZWRTdHlsZV07XG4gICAgfSwgLy8gZW5kIG9mIFwicmVkdWNlU3R5bGVcIlxuXG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgZGltZW5zaW9ucyBvZiB0aGUgZ2l2ZW4gZ2VvbWV0cnkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZ2VvbWV0cnkgaXMgYSBgTGluZVN0cmluZ2AgdGhlIGZ1bmN0aW9uIHdpbGwgbWVhc3VyZSBpdHMgbGVuZ3RoLFxuICAgICAqIGlzIGl0IGEgYFBvbHlnb25gIGl0IHdpbGwgbWVhc3VyZSB0aGUgYWNyZWFnZSxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCByZXR1cm4gYDBgLlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIGBvcHRfZm9yY2VMaW5lTWVhc3VyZWAgcGFyYW1ldGVyIGlzIGB0cnVlYFxuICAgICAqIGFuZCB0aGUgZ2VvbWV0cnkgaXMgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIGl0cyBwZXJpbWV0ZXIgaW5zdGVhZFxuICAgICAqIG9mIGl0cyBhY3JlYWdlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLmdlb20uTGluZVN0cmluZ3xvbC5nZW9tLlBvbHlnb259ICAgZ2VvbWV0cnkgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7dW5kZWZpbmVkfGJvb2xlYW59ICAgICAgICAgICAgICAgICAgICBvcHRfZm9yY2VMaW5lTWVhc3VyZSAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2FycmF5PHN0cmluZz58bnVtYmVyfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBtZWFzdXJlR2VvbWV0cnk6IGZ1bmN0aW9uIChnZW9tZXRyeSwgb3B0X2ZvcmNlTGluZU1lYXN1cmUsIG9wdF9mb3JjZVN1cmZhY2VNZWFzdXJlKSB7XG4gICAgICB2YXIgdmFsdWUsXG4gICAgICAgICAgc3BoZXJlLFxuICAgICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICAgIGNvb3JkMSxcbiAgICAgICAgICBjb29yZDIsXG4gICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICghZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvL3NwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICByZXN1bHQgPSB7fTtcblxuICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5MaW5lU3RyaW5nIHx8IChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbiAmJiBvcHRfZm9yY2VMaW5lTWVhc3VyZSkpIHtcblxuICAgICAgICBjb29yZGluYXRlcyA9IGdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAgIGNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoIC0gMTsgaSArPSAxKSB7XG4gICAgICAgICAgY29vcmQxID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgY29vcmQyID0gb2wucHJvai50cmFuc2Zvcm0oY29vcmRpbmF0ZXNbaSArIDFdLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpO1xuICAgICAgICAgIHZhbHVlICs9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShjb29yZDEsIGNvb3JkMiwgNjM3ODEzNyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwKSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uUG9seWdvbikge1xuICAgICAgICAvL2dlb21ldHJ5ID0gLyoqIEB0eXBlIHtvbC5nZW9tLlBvbHlnb259ICovKGdlb21ldHJ5LmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JykpO1xuICAgICAgICAvL2Nvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0TGluZWFyUmluZygwKS5nZXRDb29yZGluYXRlcygpO1xuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKG9sLnNwaGVyZS5nZXRBcmVhKGdlb21ldHJ5KSk7XG4gICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5DaXJjbGUgJiYgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgICAgICB2YXIgY2VudGVyID0gZ2VvbWV0cnkuZ2V0Q2VudGVyKCk7XG4gICAgICAgICAgdmFyIHJhZGl1cyA9IGdlb21ldHJ5LmdldFJhZGl1cygpO1xuICAgICAgICAgIHZhciBlZGdlQ29vcmRpbmF0ZSA9IFtjZW50ZXJbMF0gKyByYWRpdXMsIGNlbnRlclsxXV07XG4gICAgICAgICAgLy92YXIgd2dzODRTcGhlcmUgPSBuZXcgb2wuU3BoZXJlKDYzNzgxMzcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG9sLnNwaGVyZS5nZXREaXN0YW5jZShcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oY2VudGVyLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShlZGdlQ29vcmRpbmF0ZSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgNjM3ODEzN1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICB2YWx1ZSA9IE1hdGguUEkgKiBNYXRoLnNxcnQodmFsdWUpO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmICh2YWx1ZSA+IDEwMDAwKSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbTxzdXA+Mjwvc3VwPic7XG4gICAgICAgICAgfVxuXG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJlc3VsdC5yYXdWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICBpZiAocmVzdWx0LnJhd1ZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKCh2YWx1ZSAqIDEwMCkgLyAxMDApIC8gMTAwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAna20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSByZXN1bHQucmF3VmFsdWUgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ20nO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBleHRlbnQgZm9yIGFuIGFycmF5IG9mIGdlb21ldHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7QXJyYXkuPG9sLmdlb20uc2ltcGxlR2VvbWV0cnk+fSAgYXJyR2VvbWV0cmllcyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge29sLkV4dGVudH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzOiBmdW5jdGlvbiAoYXJyR2VvbWV0cmllcykge1xuICAgICAgdmFyIGV4dGVudFNvdXJjZTtcblxuICAgICAgaWYgKCFhcnJHZW9tZXRyaWVzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignR2VvbWV0cmllcyBtaXNzaW5nIGZvciBleHRlbnQgY2FsY3VsYXRpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBleHRlbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgZXh0ZW50U291cmNlLmFkZEZlYXR1cmVzKGFyckdlb21ldHJpZXMpO1xuXG4gICAgICByZXR1cm4gZXh0ZW50U291cmNlLmdldEV4dGVudCgpIHx8IG9sLkV4dGVudChbMCwgMCwgMCwgMF0pO1xuICAgIH0sIC8vIGVuZCBvZiBnZXRFeHRlbnRGb3JHZW9tZXRyaWVzKClcblxuICAgIC8qKlxuICAgICAqIEZpdCB2aWV3IG9mIGBtYXBgIHRvIGEgZ2l2ZW4gYXJyYXkgb2YgYGV4dGVudHNgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29iamVjdH0gICAgIGV4dGVudHMgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50czogZnVuY3Rpb24gKGV4dGVudHMsIG1hcCwgb3B0X3BhZGRpbmcsIG9wdF9hbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgdmFyIHZpZXcsXG4gICAgICAgICAgcGFkZGluZyxcbiAgICAgICAgICBleHRlbnQsXG4gICAgICAgICAga2V5O1xuXG4gICAgICBpZiAoIWV4dGVudHMgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vZXh0ZW50ID0gb2wuZXh0ZW50LmNyZWF0ZUVtcHR5KCk7XG5cbiAgICAgIGZvciAoa2V5IGluIGV4dGVudHMpIHtcbiAgICAgICAgaWYgKGV4dGVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZXh0ZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnQgPSBleHRlbnRzW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9sLmV4dGVudC5leHRlbmQoZXh0ZW50LCBleHRlbnRzW2tleV0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZml0VG9FeHRlbnQoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCA1LCAwLCAwLCAyKTtcblxuXG4gICAgfSwgLy8gZW5kIG9mIGZpdFRvRXh0ZW50c1xuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBgZXh0ZW50YC5cbiAgICAgKiBBbmltYXRlZCBpZiBgb3B0X2FuaW1hdGlvbkR1cmF0aW9uYCBpcyBhbiBpbnRlZ2VyID4gMC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvbC5FeHRlbnR9ICBleHRlbnQgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuTWFwfSAgICAgbWFwICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2FycmF5fSAgICAgIG9wdF9wYWRkaW5nICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfYW5pbWF0aW9uRHVyYXRpb24gIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21pblpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9tYXhab29tICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluUmVzb2x1dGlvbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBmaXRUb0V4dGVudDogZnVuY3Rpb24gKGV4dGVudCwgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uLCBvcHRfbWluWm9vbSwgb3B0X21heFpvb20sIG9wdF9taW5SZXNvbHV0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGZpdE9wdGlvbnM7XG5cbiAgICAgIGlmICghZXh0ZW50IHx8ICFtYXApIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGV4dGVudCBvciBtYXAgZm9yIGZpdEV4dGVudCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSBtYXAuZ2V0VmlldygpO1xuXG4gICAgICBmaXRPcHRpb25zID0ge1xuICAgICAgICAncGFkZGluZyc6IG9wdF9wYWRkaW5nIHx8IFsyNSwgMjUsIDI1LCAyNV1cbiAgICAgIH07XG5cbiAgICAgIGlmIChvcHRfbWluUmVzb2x1dGlvbiAmJiBvcHRfbWluUmVzb2x1dGlvbiA+IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5SZXNvbHV0aW9uID0gb3B0X21pblJlc29sdXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWluWm9vbSAmJiBvcHRfbWluWm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWluWm9vbSA9IG9wdF9taW5ab29tO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0X21heFpvb20gJiYgb3B0X21heFpvb20gPj0gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1heFpvb20gPSBvcHRfbWF4Wm9vbTtcbiAgICAgIH1cblxuICAgICAgLy8gYW5pbWF0ZSB0aGUgXCJmaXR0aW5nXCIgd2hlbiBhIGR1cmF0aW9uIGlzIGdpdmVuIGFuZCBpdHMgZ3JlYXRlciB0aGFuIDBcbiAgICAgIGlmIChvcHRfYW5pbWF0aW9uRHVyYXRpb24gJiYgb3B0X2FuaW1hdGlvbkR1cmF0aW9uID4gMCkge1xuICAgICAgICB2aWV3LmFuaW1hdGUoe1xuICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIHJlc29sdXRpb246IHZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgIGNlbnRlcjogWzAsIDBdXG4gICAgICAgICAgLy9yb3RhdGlvbjogTWF0aC5QSVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gbWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi5wYW4oe1xuICAgICAgICAvLyAgICAgICBzdGFydDogK25ldyBEYXRlKCksXG4gICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgIC8vICAgICAgIHNvdXJjZTogdmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAvLyAgICAgfSksXG4gICAgICAgIC8vICAgICBvbC5hbmltYXRpb24uem9vbSh7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKClcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSwge3BhZGRpbmc6IFsyNSwgMjUsIDI1LCAyNV19KTtcbiAgICAgICAgLy92aWV3LmZpdChleHRlbnQsIG1hcC5nZXRTaXplKCkpO1xuICAgICAgICAvL3ZpZXcuc2V0Wm9vbSh2aWV3LmdldFpvb20oKS0xKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnQoKVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdG8gcnVuIGFsbCBwbGFjZWhvbGRlciBmdW5jdGlvbnMgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIHN0cklucHV0ICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgICAgICAgICAgICAgIGZlYXR1cmUgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllciB8IHVuZGVmaW5lZH0gIG9wdF9sYXllciAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUFsbFBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIC8vIG9ubHkgY2hlY2sgdGhlIGZpcnN0IHR3byBwYXJhbWV0ZXJzIGFzIHRoZXkgd2lsbCBiZSB1c2VkIGJ5IGFsbCBwbGFjZWhvbGRlci1mdW5jdGlvbnNcbiAgICAgIC8vIC0+IGZvciBwZXJmb3JtYW5jZVxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHRoaXMucmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKHN0cklucHV0LCBmZWF0dXJlLCBvcHRfbGF5ZXIpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycyhzdHJPdXRwdXQsIGZlYXR1cmUpO1xuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBbGxQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7Rk5mdW5jdGlvbk5hbWV9YCwgaW4gYHN0cklucHV0YCxcbiAgICAgKiB3aXRoIHRoZSByZXN1bHQgb2YgYHdpbmRvdy5mdW5jdGlvbk5hbWUoZmVhdHVyZSwgc3R5bGUpYCwgaWYgaXQgZXhpc3QuXG4gICAgICogT3RoZXJ3aXNlIHRoZSBwbGFjZWhvbGRlciB3aWxsIGJlIHNpbXBseSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICogU3R5bGUgd2lsbCBiZSB0YWtlbiBlaXRoZXIgZnJvbSB0aGUgZmVhdHVyZSwgb3IgdGhlIGxheWVyLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gICAgICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5sYXllci5MYXllcn0gIGxheWVyICAgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VGdW5jdGlvblBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlLCBsYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgaWYgKCFzdHJJbnB1dCB8fCAhZmVhdHVyZSB8fCAhbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHN0cklucHV0O1xuICAgICAgfVxuXG4gICAgICBzdHJPdXRwdXQgPSBzdHJJbnB1dC5yZXBsYWNlKFxuICAgICAgICAgIC9cXCRcXHtGTihbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgZnVuY3Rpb25OYW1lLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmdW5jdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93W2Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHN0eWxlXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZWF0dXJlLmdldFN0eWxlKCkgJiYgdHlwZW9mIGZlYXR1cmUuZ2V0U3R5bGUoKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gZmVhdHVyZS5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYXllci5nZXRTdHlsZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5nZXRTdHlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5nZXRTdHlsZSgpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gd2luZG93W2Z1bmN0aW9uTmFtZV0oZmVhdHVyZSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzKClcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2UgcGxhY2Vob2xkZXJzLCBpbiBgc3RySW5wdXRgLCBmb3IgdmFyaWFibGVzIHNldCBieSB0aGUgZ2VvRWRpdG9yLlxuICAgICAqIFZhbGlkIHBsYWNlaG9sZGVycyBhcmU6IChba2V5XSByZXByZXNlbnRzIHRoZSBzdHJpbmduYW1lIG9mIHRoZSB2YXJpYWJsZXMga2V5KVxuICAgICAqICAgYCR7RUxba2V5XX1gICAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWTFtrZXldfWAgID0+ICBMYWJlbCBmb3IgdGhlIHZhcmlhYmxlLCBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgKiAgIGAke0VWW2tleV19YCAgID0+ICBWYWx1ZSBvZiB0aGUgdmFyaWFibGVcbiAgICAgKiAgIGAke0VWVltrZXldfWAgID0+ICBTYW1lIGFzIGAke0VWW2tleV19YFxuICAgICAqXG4gICAgICogSWYgbm8gYXBwcm9wcmlhdGUgdmFsdWUgY2FuIGJlIGZvdW5kIGZvciBhIHBsYWNlaG9sZGVyXG4gICAgICogaXQgd2lsbCBzaW1wbHkgYmUgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhFVj9bTFZdKShbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgdHlwZSwgZXZLZXksIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWRpdG9yVmFycyxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBmZWF0dXJlIGhhcyBlZGl0b3JWYXJzXG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKSkge1xuICAgICAgICAgICAgICBlZGl0b3JWYXJzID0gZmVhdHVyZS5nZXQoJ2VkaXRvclZhcnMnKTtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGZvciBlZGl0b3JWYXIgd2l0aCBrZXkgPT0gZXZLZXlcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVkaXRvclZhcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yVmFyc1tpXS5rZXkgPT09IGV2S2V5KSB7XG4gICAgICAgICAgICAgICAgICAvLyBpZiB0eXBlIGlzICdFVkwnIGRpc3BsYXkgbGFiZWwgb25seSBpZiBhIHZhbHVlIGlzIHNldCB0b29cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnRUwnIHx8ICh0eXBlID09PSAnRVZMJyAmJiBlZGl0b3JWYXJzW2ldLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWRpdG9yVmFyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBldmVyeSBvY2N1cmFuY2Ugb2YgYCR7YXR0cn1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgZmVhdHVyZS5nZXQoYXR0cilgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgc3RySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7b2wuRmVhdHVyZX0gIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVyczogZnVuY3Rpb24gKHN0cklucHV0LCBmZWF0dXJlKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8IHR5cGVvZiBmZWF0dXJlLmdldCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxceyhbXlxcfV0qKVxcfS9nLFxuICAgICAgICAgIGZ1bmN0aW9uIChtYXRjaCwgYXR0ciwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmZWF0dXJlLmdldChhdHRyKSB8fCAnJztcbiAgICAgICAgICB9XG4gICAgICApOyAvLyBlbmQgb2YgcmVwbGFjZSgpXG5cbiAgICAgIHJldHVybiBzdHJPdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIHJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoKVxuXG4gICAgb2JqZWN0VG9BcnJheTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvYmplY3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwgLy8gZW5kIG9mIG9iamVjdFRvQXJyYXkoKVxuXG4gICAgZ2V0VmVjdG9yTGF5ZXIoc291cmNlLCBzdHlsZSkge1xuICAgICAgICB2YXIgZm5TdHlsZTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3R5bGUgaXMgYSBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gc3R5bGU7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm5TdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgICBzdHlsZTogZm5TdHlsZVxuICAgICAgICB9KTtcbiAgICB9LC8vIGVuZCBvZiBcImdldFZlY3RvckxheWVyKClcIlxuXG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgdGhlIHN1YmRvbWFpbiBmcm9tIHRoZSBjdXJyZW50IHJlcXVlc3QgaG9zdCBhbmQgcmV0dXJucyBpdC5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgKn1cbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U3ViZG9tYWluKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICByZWRyYXdNYXBWaWV3OiBmdW5jdGlvbiAobWFwQ29udHJvbGxlcikge1xuICAgICAgdmFyIG1hcERhdGEgPSBtYXBDb250cm9sbGVyLmRhdGE7XG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lclRvcExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJUb3BMZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9UTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICBtYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5wcmVwZW5kKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkwgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuICAgICAgJChjb250cm9sQ29udGFpbmVyVG9wTGVmdCkuYWZ0ZXIoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuICAgICAgbWFwQ29udHJvbGxlci5sZWZ0U2xpZGVFbGVtZW50cy5wdXNoKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KTtcblxuICAgICAgdmFyIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcblxuICAgICAgaWYgKG1hcERhdGEuc2NhbGVsaW5lKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSA9IG5ldyBvbC5jb250cm9sLlNjYWxlTGluZSh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5zY2FsZWxpbmUpO1xuICAgICAgfVxuXG4gICAgICAkKGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0KS5hcHBlbmQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIpO1xuXG4gICAgICBpZiAobWFwRGF0YS56b29tbGV2ZWwpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsID0gbmV3IFpvb21sZXZlbCh7XG4gICAgICAgICAgbWFwVmlldzogbWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLFxuICAgICAgICAgIHRhcmdldDogY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIsXG4gICAgICAgICAgdW5kZWZpbmVkSFRNTDogJ04vQSdcbiAgICAgICAgfSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAobWFwRGF0YS5tb3VzZXBvc2l0aW9uKSB7XG4gICAgICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy5tb3VzZXBvc2l0aW9uID0gbmV3IG9sLmNvbnRyb2wuTW91c2VQb3NpdGlvbih7XG4gICAgICAgICAgcHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgY29vcmRpbmF0ZUZvcm1hdDogb2wuY29vcmRpbmF0ZS50b1N0cmluZ0hETVMsXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldIHx8ICcnO1xuICAgIH0sXG4gICAgc3RvcmVWYWx1ZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7IC8vIG9ubHkgc3RyaW5nc1xuICAgIH1cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIHV0aWxzID0gdGhpcy5jNGcubWFwcy51dGlscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXV0aWxzLmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtcG9ydHNpZGUtcm91dGVyXCI7XG5pbXBvcnQge2xhbmdDb25zdGFudHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbmZpZyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyUGx1Z2luID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAvLyBleHRlbmQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIG5hbWU6ICdyb3V0ZXInLFxuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgaGVhZGxpbmU6IGxhbmdDb25zdGFudHMuUk9VVEVSLFxuICAgICAgZGlyZWN0aW9uOiAnbGVmdCdcbiAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaW5kZXg9MDtcblxuICAgIC8vIGNhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgUm91dGVyLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcbiAgLyoqXG4gICAqIEluaGVyaXQgZnJvbSBcIlJvdXRlclwiXG4gICAqL1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlJvdXRlclBsdWdpbiwgUm91dGVyKTtcblxuICAvKipcbiAgICogTWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXJQbHVnaW4ucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXJQbHVnaW4ucHJvdG90eXBlLCB7XG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgdmlld1JvdXRlcixcbiAgICAgICAgdmlld0FyZWEsXG4gICAgICAgIHNlbGVjdEludGVyYWN0aW9uLFxuICAgICAgICBwcm9maWxlSWQ7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuXG4gICAgICAvLyBjaGVjayBhbmQgbG9hZCBsb2NhdGlvbiBzdHlsZXMgdmlhIG1hcC1wcm94eVxuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXG4gICAgICBdKTtcblxuXG4gICAgICAvLyBBZGQgcm91dGVyIGxheWVyKHMpXG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuOSknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuNCknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgc2VsZWN0SW50ZXJhY3Rpb24gPSBuZXcgb2wuaW50ZXJhY3Rpb24uU2VsZWN0KHtcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cblxuICAgICAgfSk7XG4gICAgICBzZWxlY3RJbnRlcmFjdGlvbi5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LnNlbGVjdGVkWzBdKSB7XG4gICAgICAgICAgdmFyIGdlb21ldHJ5ID0gZXZlbnQuc2VsZWN0ZWRbMF0uZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICBpZiAoZ2VvbWV0cnkgJiYgZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvd0FsdFJvdXRlKHNlbGYucmVzcG9uc2UsIGV2ZW50LnNlbGVjdGVkWzBdLmdldElkKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgICAgdGhpcy5tb2RXYXlJbnRlcmFjdGlvbiA9IG5ldyBvbC5pbnRlcmFjdGlvbi5Nb2RpZnkoe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ1dheVNvdXJjZSxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgNTEsIDExOSwgMC4wKScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cblxuICAgICAgfSk7XG4gICAgICB0aGlzLm1vZFdheUludGVyYWN0aW9uLm9uKCdtb2RpZnllbmQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICBsZXQgb3ZlclBvaW50ID0gbmV3IG9sLmdlb20uUG9pbnQoZXZlbnQubWFwQnJvd3NlckV2ZW50LmNvb3JkaW5hdGUpLnRyYW5zZm9ybShcIkVQU0c6Mzg1N1wiLCBcIkVQU0c6NDMyNlwiKTtcbiAgICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChzZWxmLiRvdmVySW5wdXQsIG92ZXJQb2ludC5nZXRDb29yZGluYXRlcygpKTtcbiAgICAgICAgaWYgKCFzZWxmLm92ZXJWYWx1ZSkge1xuICAgICAgICAgIHNlbGYub3ZlclZhbHVlID0ge307XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5vdmVyVmFsdWVbc2VsZi5pbmRleF0gPSBvdmVyUG9pbnQ7XG4gICAgICAgIHNlbGYuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24oc2VsZWN0SW50ZXJhY3Rpb24pO1xuICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHRoaXMubW9kV2F5SW50ZXJhY3Rpb24pO1xuXG5cbiAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdIaW50U291cmNlLFxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIHJldHVybiAoIXNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5KSB8fCBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5sb2NhdGlvbnNMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMubG9jYXRpb25zU291cmNlLFxuICAgICAgICB6SW5kZXg6IDJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc1NvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLnJvdXRlckZlYXR1cmVzTGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRlckZlYXR1cmVzU291cmNlXG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGVyTGF5ZXJHcm91cCA9IG5ldyBvbC5sYXllci5Hcm91cCh7XG4gICAgICAgIGxheWVyczogbmV3IG9sLkNvbGxlY3Rpb24oW1xuICAgICAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIsXG4gICAgICAgICAgdGhpcy5yb3V0ZXJBbHRXYXlMYXllcixcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uc0xheWVyLFxuICAgICAgICAgIHRoaXMucm91dGVySGludExheWVyLFxuICAgICAgICAgIHRoaXMucm91dGVyRmVhdHVyZXNMYXllcixcbiAgICAgICAgXSksXG4gICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5yb3V0ZXJMYXllckdyb3VwKTtcbiAgICAgIHZpZXdBcmVhID0gdGhpcy5hZGRVc2VySW50ZXJmYWNlKCdhcmVhJyk7XG4gICAgICB2aWV3Um91dGVyID0gdGhpcy5hZGRVc2VySW50ZXJmYWNlKCdyb3V0ZXInKTtcblxuICAgICAgdmlld1JvdXRlci5hY3RpdmF0ZSgpO1xuICAgICAgLy92aWV3QXJlYS5hY3RpdmF0ZSgpO1xuXG4gICAgICAvLyBzdG9yZSBzb21lIHZhcnMgZm9yIGFqYXgtcmVxdWVzdHNcbiAgICAgIHByb2ZpbGVJZCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucHJvZmlsZTtcbiAgICAgIHRoaXMuZ2VvU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgJy8nICsgcHJvZmlsZUlkO1xuICAgICAgdGhpcy5nZW9SZXZlcnNlU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoX3JldmVyc2UgKyAnLycgKyBwcm9maWxlSWQ7XG4gICAgICB0aGlzLnJvdXRpbmdBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5yb3V0aW5nICsgJy8nICsgcHJvZmlsZUlkO1xuXG4gICAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0sXG4gICAgcHJlQ2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGVyRmVhdHVyZXNTb3VyY2UuY2xlYXIoKTtcblxuICAgICAgJCh0aGlzLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpLmVtcHR5KCk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQodGhpcy4kZnJvbUlucHV0KTtcbiAgICAgIGlmICh0aGlzLm92ZXJWYWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpZCBpbiB0aGlzLm92ZXJWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuY2xlYXJPdmVyKHRoaXMuJG92ZXJJbnB1dCwgaWQpO1xuICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtLnBhcmVudE5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jbGVhcklucHV0KHRoaXMuJHRvSW5wdXQpO1xuXG4gICAgICB0aGlzLnJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24oKTtcblxuICAgIH0sXG4gICAgcGVyZm9ybVZpYVJvdXRlOiBmdW5jdGlvbiAoZnJvbVBvaW50LCB0b1BvaW50LCBvdmVyUG9pbnQpIHtcblxuICAgICAgdmFyIHVybCxcbiAgICAgICAgc2VsZixcbiAgICAgICAgZnJvbUNvb3JkLFxuICAgICAgICB0b0Nvb3JkLFxuICAgICAgICBvdmVyQ29vcmQ7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmcm9tQ29vcmQgPSBbZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIGZyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzBdXTtcbiAgICAgIHRvQ29vcmQgPSBbdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCB0b1BvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgICAgaWYgKG92ZXJQb2ludCkge1xuICAgICAgICBvdmVyQ29vcmQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yICh2YXIgcHJvcHQgaW4gb3ZlclBvaW50KSB7XG4gICAgICAgICAgb3ZlckNvb3JkLnB1c2goW292ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgb3ZlclBvaW50W3Byb3B0XS5nZXRDb29yZGluYXRlcygpWzBdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJyB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJykgey8vT1NSTS1BUEk6NS54IG9yIE9SUy0gQVBJXG4gICAgICAgIHVybCA9ICdjb240Z2lzL3JvdXRlU2VydmljZS8xLzc0LzIvJyArIGZyb21Db29yZDtcblxuICAgICAgICBpZiAob3ZlclBvaW50KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdmVyQ29vcmQubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB1cmwgKz0gJzsnICsgb3ZlckNvb3JkW2ldO1xuICAgICAgICB9XG4gICAgICAgIHVybCArPSAnOycgKyB0b0Nvb3JkO1xuICAgICAgICBpZiAodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlKSB7XG4gICAgICAgICAgdXJsICs9ICc/cHJvZmlsZT0nICsgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICd1cmwnOiB1cmxcbiAgICAgICAgfSlcbiAgICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBzZWxmLnNob3dSb3V0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlLmZlYXR1cmVzLCByZXNwb25zZS50eXBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAnJztcblxuICAgICAgfSBlbHNlIHsvL09TUk0tQVBJOjw1XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIHVzZSBhIG1vcmUgbW9kZXJuIEFQSS1WZXJzaW9uIGZvciB0aGUgUm91dGVzZXJ2aWNlXCIpXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93RmVhdHVyZXM6IGZ1bmN0aW9uIChmZWF0dXJlcywgdHlwZSA9IFwidGFibGVcIikge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBzZWxmLnJvdXRlckZlYXR1cmVzU291cmNlLmNsZWFyKCk7XG4gICAgICBjb25zdCBsYXllciA9IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxheWVyQ29udHJvbGxlci5hcnJMYXllcnNbNzRdO1xuICAgICAgaWYgKGxheWVyICYmIGxheWVyLmNvbnRlbnQgJiYgbGF5ZXIuY29udGVudFswXSAmJiBsYXllci5jb250ZW50WzBdLmRhdGEgJiYgbGF5ZXIuY29udGVudFswXS5kYXRhLnBvcHVwKSB7XG4gICAgICAgIHNlbGYucm91dGVyRmVhdHVyZXNMYXllci5wb3B1cCA9IGxheWVyLmNvbnRlbnRbMF0uZGF0YS5wb3B1cDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVuc3R5bGVkRmVhdHVyZXMgPSBbXTtcbiAgICAgIGNvbnN0IGNvbnRlbnRGZWF0dXJlcyA9IFtdO1xuICAgICAgbGV0IG1pc3NpbmdTdHlsZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZlYXR1cmUgPSBmZWF0dXJlc1tpXVxuICAgICAgICBsZXQgcmVzdWx0Q29vcmRpbmF0ZTtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJvdmVycGFzc1wiKSB7XG4gICAgICAgICAgcmVzdWx0Q29vcmRpbmF0ZSA9IG9sLnByb2oudHJhbnNmb3JtKFtwYXJzZUZsb2F0KGZlYXR1cmVbJ2xvbiddKSwgcGFyc2VGbG9hdChmZWF0dXJlWydsYXQnXSldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSBvbC5wcm9qLnRyYW5zZm9ybShbcGFyc2VGbG9hdChmZWF0dXJlWydnZW94J10pLCBwYXJzZUZsb2F0KGZlYXR1cmVbJ2dlb3knXSldLCAnRVBTRzo0MzI2JywgJ0VQU0c6Mzg1NycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb2ludCA9IG5ldyBvbC5nZW9tLlBvaW50KHJlc3VsdENvb3JkaW5hdGUpO1xuICAgICAgICBsZXQgY29udGVudEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZShwb2ludCk7XG4gICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldElkKGZlYXR1cmUuaWQpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfem9vbScsIGxheWVyLmNsdXN0ZXIuem9vbSk7XG4gICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnY2x1c3Rlcl9wb3B1cCcsIGxheWVyLmNsdXN0ZXIucG9wdXApO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfZmlsbGNvbG9yJywgbGF5ZXIuY2x1c3Rlci5maWxsY29sb3IpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfZm9udGNvbG9yJywgbGF5ZXIuY2x1c3Rlci5mb250Y29sb3IpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY19saW5rdXJsJywgbGF5ZXIubG9jX2xpbmt1cmwpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX2xvY2F0aW9uJywgbGF5ZXIuaG92ZXJfbG9jYXRpb24pO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2hvdmVyX3N0eWxlJywgbGF5ZXIuaG92ZXJfc3R5bGUpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3pvb21fb25jbGljaycsIGxheWVyLnpvb21fb25jbGljayk7XG4gICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgndGlkJywgZmVhdHVyZVsnaWQnXSk7XG4gICAgICAgIGxldCBsb2NzdHlsZSA9IGZlYXR1cmVbJ2xvY3N0eWxlJ10gfHwgbGF5ZXIubG9jc3R5bGU7XG4gICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCgnbG9jYXRpb25TdHlsZScsIGxvY3N0eWxlKTtcbiAgICAgICAgaWYgKGxvY3N0eWxlICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0gJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xvY3N0eWxlXS5zdHlsZSkge1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldFN0eWxlKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3N0eWxlSWQnLCBsb2NzdHlsZSk7XG4gICAgICAgICAgdW5zdHlsZWRGZWF0dXJlcy5wdXNoKGNvbnRlbnRGZWF0dXJlKTtcbiAgICAgICAgICBtaXNzaW5nU3R5bGVzW2xvY3N0eWxlXSA9IGxvY3N0eWxlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHRhZ3MgaW4gZmVhdHVyZS50YWdzKSB7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KHRhZ3MsIGZlYXR1cmUudGFnc1t0YWdzXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtaXNzaW5nU3R5bGVzICYmIG1pc3NpbmdTdHlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMobWlzc2luZ1N0eWxlcywge1xuICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5zdHlsZWRGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgc3R5bGVJZCA9IHVuc3R5bGVkRmVhdHVyZXNbaV0uZ2V0KCdzdHlsZUlkJyk7XG4gICAgICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXNbaV0uc2V0U3R5bGUoc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdLnN0eWxlKTtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlKHVuc3R5bGVkRmVhdHVyZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWlzc2luZ1N0eWxlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGZlYXR1cmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5hZGRGZWF0dXJlcyhjb250ZW50RmVhdHVyZXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcGVyZm9ybUFyZWE6IGZ1bmN0aW9uKGZyb21Qb2ludCwgZGlzdGFuY2Upe1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGxldCBmcm9tQ29vcmQgPSBbZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIGZyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzBdXTtcbiAgICAgIFxuICAgICAgbGV0IHVybCA9ICdjb240Z2lzL2FyZWFTZXJ2aWNlLzEvNzEvJyArIGRpc3RhbmNlICsgJy8nICsgZnJvbUNvb3JkO1xuICAgICAgaWYgKHRoaXMucm91dGVQcm9maWxlICYmIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSkge1xuICAgICAgICB1cmwgKz0gJz9wcm9maWxlPScgKyB0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmU7XG4gICAgICB9XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICd1cmwnOiB1cmxcbiAgICAgIH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHNlbGYucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5zaG93RmVhdHVyZXMocmVzcG9uc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9LFxuICAgIGFkZFVzZXJJbnRlcmZhY2U6IGZ1bmN0aW9uICh0eXBlKSB7XG5cbiAgICAgIGxldCBzZWxmLFxuICAgICAgICByb3V0ZXJWaWV3LFxuICAgICAgICByb3V0ZXJDb250ZW50RWxlbWVudCxcbiAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlcixcbiAgICAgICAgcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyLFxuICAgICAgICBhcmVhVmlldyxcbiAgICAgICAgYXJlYVZpZXdJbnB1dFdyYXBwZXIsXG4gICAgICAgIGFyZWFDb250ZW50RWxlbWVudCxcbiAgICAgICAgYXJlYVZpZXdDb250ZW50V3JhcHBlcixcbiAgICAgICAgcHJpbnQsXG4gICAgICAgIHJvdXRlUHJvZmlsZSA9IFtdLFxuICAgICAgICByb3V0ZXJGcm9tTGFiZWwsXG4gICAgICAgIHJvdXRlck92ZXJMYWJlbCxcbiAgICAgICAgcm91dGVyVG9MYWJlbCxcbiAgICAgICAgcm91dGVyRnJvbUNsZWFyLFxuICAgICAgICByb3V0ZXJPdmVyQ2xlYXIsXG4gICAgICAgIHJvdXRlclRvQ2xlYXIsXG4gICAgICAgIHN3aXRjaEZyb21UbyxcbiAgICAgICAgYXJlYUZyb21MYWJlbCxcbiAgICAgICAgYXJlYUZyb21DbGVhcixcbiAgICAgICAgYnV0dG9uT3ZlcjtcblxuICAgICAgaWYgKHR5cGUgPT09ICdyb3V0ZXInKSB7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICByb3V0ZXJDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJvdXRlclZpZXdDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3V0ZXJDb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb3V0ZXJWaWV3SW5wdXRXcmFwcGVyKTtcbiAgICAgICAgcm91dGVyQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm91dGVyVmlld0NvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgc2VsZi5yb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIgPSByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXI7XG5cbiAgICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1dSQVBQRVI7XG5cbiAgICAgICAgdGhpcy5mcm9tSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuZnJvbUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5mcm9tSW5wdXQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9GUk9NO1xuICAgICAgICB0aGlzLmZyb21JbnB1dC5pZCA9IHRoaXMuZnJvbUlucHV0Lm5hbWUgPSBcInJvdXRpbmdGcm9tXCI7XG5cbiAgICAgICAgcm91dGVyRnJvbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcm91dGVyRnJvbUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdGcm9tJyk7XG4gICAgICAgIHJvdXRlckZyb21MYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9GUk9NX0xBQkVMO1xuXG4gICAgICAgIHJvdXRlckZyb21DbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByb3V0ZXJGcm9tQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgICAgcm91dGVyRnJvbUNsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICAgIHJvdXRlckZyb21DbGVhci5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9IVE1MO1xuICAgICAgICB0aGlzLiRyb3V0ZXJGcm9tQ2xlYXIgPSAkKHJvdXRlckZyb21DbGVhcik7XG5cbiAgICAgICAgc3dpdGNoRnJvbVRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN3aXRjaEZyb21Uby5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX1NXSVRDSDtcbiAgICAgICAgc3dpdGNoRnJvbVRvLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfU1dJVENIO1xuICAgICAgICB0aGlzLiRzd2l0Y2hGcm9tVG8gPSAkKHN3aXRjaEZyb21Ubyk7XG5cbiAgICAgICAgYnV0dG9uT3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25PdmVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfT1ZFUjtcbiAgICAgICAgYnV0dG9uT3Zlci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX09WRVI7XG4gICAgICAgIHRoaXMuJGJ1dHRvbk92ZXIgPSAkKGJ1dHRvbk92ZXIpO1xuXG5cbiAgICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9CVVRUT05CQVI7XG4gICAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmFwcGVuZENoaWxkKHN3aXRjaEZyb21Ubyk7XG4gICAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmFwcGVuZENoaWxkKGJ1dHRvbk92ZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJykgeyAvL09wZW5Sb3V0ZVNlcnZpY2VcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA9PSAxKSB7Ly9jaGVjayBmb3Igc2luZ2xlIHByb2ZpbGUgYW5kIHNldCB0aGlzIGFzICBhY3RpdmUgcm91dGluZyBwcm9maWxlXG4gICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykubGVuZ3RoID4gMSkgeyAvL2NoZWNrIGZvciBtdWx0aXBsZSBwcm9maWxlcyBhbmQgYWRkIHByb2ZpbGUtY2hhbmdlclxuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICQodGhpcy5yb3V0ZVByb2ZpbGUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9XUkFQUEVSKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMCddKSB7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWNhclxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuY2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmNhcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0NBUik7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUNhciA9ICQocm91dGVQcm9maWxlLmNhcik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcwJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMSddKSB7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWhndlxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuaGd2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmhndikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0hHVik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YgPSAkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuXG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUhndi5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEnO1xuICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMiddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyczJ11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzQnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNSddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc2J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzcnXSkgeyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgIGxldCBzcGFuQmlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UgPSAkKHJvdXRlUHJvZmlsZS5iaWtlKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCA4OyBpKyspIHsgLy9pdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIGN5Y2xpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJykpIHsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmRhdGEoJ3Byb2ZpbGUnLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5iaWtlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfQklLRSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpIHsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgY3ljbGluZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIGN5Y2xpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICBzcGFuQmlrZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UubGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkJpa2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzgnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snOSddKSB7IC8vYWRkIGJ1dHRvbiBhbmQgZHJvcGRvd24gZm9yIHdhbGtpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgbGV0IHNwYW5Gb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdCA9ICQocm91dGVQcm9maWxlLmZvb3QpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gODsgaSA8IDEwOyBpKyspIHsgLy9pdGVyYXRlIG92ZXIgcG9zc2libGUgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnKSkgeyAvL2FkZCBleGlzdGluZyBkZWZhdWx0IHByb2ZpbGUgdG8gYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuZGF0YSgncHJvZmlsZScsIGkpO1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmZvb3QpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9GT09UKTtcblxuICAgICAgICAgICAgICBpZiAocm91dGVQcm9maWxlLmZvb3QubGlzdC5jaGlsZHJlbi5sZW5ndGggPT0gMSkgeyAvL2lnbm9yZSBkcm9wZG93biBsaXN0LCBpZiBvbmx5IG9uZSB3YWxraW5nIHByb2ZpbGUgaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHsgLy9hcHBlbmQgd2l0aCBkcm9wZG93biwgaWYgbXVsdGlwbGUgd2Fsa2luZyBwcm9maWxlcyBhcmUgZW5hYmxlZFxuICAgICAgICAgICAgICAgIHNwYW5Gb290LmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdC5saXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChzcGFuRm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkKHRoaXMpLnBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMTAnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgd2hlZWxjaGFpclxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUud2hlZWxjaGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUik7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZVdoZWVsY2hhaXIgPSAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLndoZWVsY2hhaXIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMTAnO1xuICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hpbGRDbGljayA9IGZ1bmN0aW9uICgkZWxlbWVudCkgeyAvL2hhbmRsZSB0aGUgY2xpY2sgaW5zaWRlIHRoZSBwcm9maWxlIGRyb3Bkb3duXG4gICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICRlbGVtZW50LmRhdGEoJ3Byb2ZpbGUnKTsgLy9hY3RpdmF0ZSBzZWxlY3RlZCBwcm9maWxlXG4gICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkZWxlbWVudCk7XG4gICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpOyAvL3VwZGF0ZSB0aGUgcm91dGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNsZWFyU2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbWVudCkgeyAvL2Z1bmN0aW9uIHRvIGFkanVzdCBjc3MtY2xhc3NlcyBhZnRlciBjaGFuZ2luZyBwcm9maWxlXG4gICAgICAgICAgICAgIGxldCBzaWJsaW5ncyA9ICQoZWxlbWVudCkucGFyZW50KCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICQoc2libGluZ3NbaV0pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvZmlsZSBpbiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykgeyAvL3NldCBkZWZhdWx0IHZhbHVlIGZvciBpbml0aWFsIHJvdXRpbmdcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzLmhhc093blByb3BlcnR5KHByb2ZpbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gcHJvZmlsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gUm91dGVyIFByb2ZpbGVzIGVuYWJsZWQnKVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJGcm9tTGFiZWwpO1xuICAgICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5mcm9tSW5wdXQpO1xuICAgICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyRnJvbUNsZWFyKTtcbiAgICAgICAgaWYgKGJ1dHRvbk92ZXIgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcpIHtcbiAgICAgICAgICB0aGlzLiRidXR0b25PdmVyLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHJvdXRlckZyb21DbGVhci5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy4kcm91dGVyRnJvbUNsZWFyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5jbGVhcklucHV0KHNlbGYuJGZyb21JbnB1dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGJ1dHRvbk92ZXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmluZGV4Kys7XG4gICAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfRlJPTTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dC5pZCA9IHNlbGYub3ZlcklucHV0Lm5hbWUgPSBcInJvdXRpbmdPdmVyXCI7XG5cbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nRnJvbScpO1xuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9MYWJlbF9JbnRlcmltO1xuXG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfQ0xFQVI7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmlkID0gc2VsZi5pbmRleDtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJPdmVyQ2xlYXIgPSAkKHJvdXRlck92ZXJDbGVhcik7XG5cbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyT3ZlckxhYmVsKTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5vdmVySW5wdXQpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJPdmVyQ2xlYXIpO1xuXG4gICAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLm92ZXJJbnB1dFdyYXBwZXIpO1xuICAgICAgICAgIHNlbGYuJHJvdXRlck92ZXJDbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxmLmNsZWFyT3ZlcihzZWxmLiRvdmVySW5wdXQsIHRoaXMuaWQpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vYnV0dG9uT3Zlci5zaG93KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2VsZi4kb3ZlcklucHV0ID0gJChzZWxmLm92ZXJJbnB1dCk7XG4gICAgICAgICAgc2VsZi4kb3ZlcklucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnBlcmZvcm1TZWFyY2goc2VsZi4kb3ZlcklucHV0LCBcIm92ZXJWYWx1ZVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc3dpdGNoRnJvbVRvLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIHN3aXRjaFZhck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdGcm9tXCIpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91dGluZ0Zyb21cIikudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdUb1wiKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdUb1wiKS52YWx1ZSA9IHN3aXRjaFZhck5hbWU7XG4gICAgICAgICAgdmFyIHN3aXRjaFZhclZhbCA9IHNlbGYuZnJvbVZhbHVlO1xuICAgICAgICAgIHNlbGYuZnJvbVZhbHVlID0gc2VsZi50b1ZhbHVlO1xuICAgICAgICAgIHNlbGYudG9WYWx1ZSA9IHN3aXRjaFZhclZhbDtcbiAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmcm9tSW5wdXQgPSAkKHRoaXMuZnJvbUlucHV0KTtcbiAgICAgICAgdGhpcy4kZnJvbUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5wZXJmb3JtU2VhcmNoKHNlbGYuJGZyb21JbnB1dCwgXCJmcm9tVmFsdWVcIik7XG4gICAgICAgICAgaWYgKHNlbGYuJGZyb21JbnB1dC52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgc2VsZi4kcm91dGVyRnJvbUNsZWFyLnNob3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi4kcm91dGVyRnJvbUNsZWFyLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5yb3V0ZXJCdXR0b25CYXIpO1xuICAgICAgICBpZiAodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucm91dGVQcm9maWxlKTtcbiAgICAgICAgfVxuICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZnJvbUlucHV0V3JhcHBlcik7XG4gICAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1dSQVBQRVI7XG5cbiAgICAgICAgdGhpcy50b0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLnRvSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICB0aGlzLnRvSW5wdXQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9UTztcbiAgICAgICAgdGhpcy50b0lucHV0LmlkID0gdGhpcy50b0lucHV0Lm5hbWUgPSBcInJvdXRpbmdUb1wiO1xuXG4gICAgICAgIHJvdXRlclRvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICByb3V0ZXJUb0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdUbycpO1xuICAgICAgICByb3V0ZXJUb0xhYmVsLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1RPX0xBQkVMO1xuXG4gICAgICAgIHJvdXRlclRvQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm91dGVyVG9DbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgICByb3V0ZXJUb0NsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICAgIHJvdXRlclRvQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgICAgdGhpcy4kcm91dGVyVG9DbGVhciA9ICQocm91dGVyVG9DbGVhcik7XG5cbiAgICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJUb0xhYmVsKTtcbiAgICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnRvSW5wdXQpO1xuICAgICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlclRvQ2xlYXIpO1xuXG5cbiAgICAgICAgdGhpcy4kcm91dGVyVG9DbGVhci5oaWRlKCk7XG5cbiAgICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xlYXJJbnB1dChzZWxmLiR0b0lucHV0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kdG9JbnB1dCA9ICQodGhpcy50b0lucHV0KTtcbiAgICAgICAgdGhpcy4kdG9JbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYucGVyZm9ybVNlYXJjaChzZWxmLiR0b0lucHV0LCBcInRvVmFsdWVcIik7XG4gICAgICAgICAgaWYgKHNlbGYuJHRvSW5wdXQudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuc2hvdygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50b0lucHV0V3JhcHBlcik7XG5cbiAgICAgICAgc2VsZi5zdGF0dXNCYXIuYXBwZW5kQ2hpbGQodGhpcy5nZXRBdHRyaWJ1dGlvbigpKTtcbiAgICAgICAgbGV0IHJvdXRlckFjdGl2YXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYucmVtb3ZlTWFwSW5wdXRJbnRlcmFjdGlvbigpO1xuICAgICAgICAgIHNlbGYuYWRkTWFwSW5wdXRJbnRlcmFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByb3V0ZXJEZWFjdGl2YXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYucmVtb3ZlTWFwSW5wdXRJbnRlcmFjdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm91dGVyVmlldyA9IHRoaXMuYWRkVmlldyh7XG4gICAgICAgICAgbmFtZTogJ3JvdXRlci12aWV3JyxcbiAgICAgICAgICB0cmlnZ2VyQ29uZmlnOiB7XG4gICAgICAgICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BRERSRVNTX0lOUFVULFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCxcbiAgICAgICAgICAgIHdpdGhIZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICAvL3tzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHJvdXRlclZpZXdJbnB1dFdyYXBwZXJ9LFxuICAgICAgICAgICAge3NlY3Rpb246IHRoaXMuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogcm91dGVyQ29udGVudEVsZW1lbnR9LFxuICAgICAgICAgICAge3NlY3Rpb246IHRoaXMudG9wVG9vbGJhciwgZWxlbWVudDogdGhpcy52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFjdGl2YXRlRnVuY3Rpb24gOiByb3V0ZXJBY3RpdmF0ZUZ1bmN0aW9uLFxuICAgICAgICAgIGRlYWN0aXZhdGVGdW5jdGlvbiA6IHJvdXRlckRlYWN0aXZhdGVGdW5jdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvdXRlclZpZXc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIGFyZWFDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcmVhVmlld0lucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcmVhVmlld0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFyZWFDb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChhcmVhVmlld0lucHV0V3JhcHBlcik7XG4gICAgICAgIGFyZWFDb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChhcmVhVmlld0NvbnRlbnRXcmFwcGVyKTtcbiAgICAgICAgc2VsZi5hcmVhVmlld0NvbnRlbnRXcmFwcGVyID0gYXJlYVZpZXdDb250ZW50V3JhcHBlcjtcblxuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfRlJPTTtcbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0LmlkID0gdGhpcy5hcmVhRnJvbUlucHV0Lm5hbWUgPSBcInJvdXRpbmdGcm9tXCI7XG5cbiAgICAgICAgYXJlYUZyb21MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGFyZWFGcm9tTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncm91dGluZ0Zyb20nKTtcbiAgICAgICAgYXJlYUZyb21MYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9GUk9NX0xBQkVMO1xuXG4gICAgICAgIGFyZWFGcm9tQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYXJlYUZyb21DbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgICBhcmVhRnJvbUNsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICAgIGFyZWFGcm9tQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgICAgdGhpcy4kYXJlYUZyb21DbGVhciA9ICQoYXJlYUZyb21DbGVhcik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcyJykgeyAvL09wZW5Sb3V0ZVNlcnZpY2VcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA9PSAxKSB7Ly9jaGVjayBmb3Igc2luZ2xlIHByb2ZpbGUgYW5kIHNldCB0aGlzIGFzICBhY3RpdmUgcm91dGluZyBwcm9maWxlXG4gICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykubGVuZ3RoID4gMSkgeyAvL2NoZWNrIGZvciBtdWx0aXBsZSBwcm9maWxlcyBhbmQgYWRkIHByb2ZpbGUtY2hhbmdlclxuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICQodGhpcy5yb3V0ZVByb2ZpbGUpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9XUkFQUEVSKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMCddKSB7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWNhclxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuY2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmNhcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0NBUik7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUNhciA9ICQocm91dGVQcm9maWxlLmNhcik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcwJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMSddKSB7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWhndlxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuaGd2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmhndikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0hHVik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YgPSAkKHJvdXRlUHJvZmlsZS5oZ3YpO1xuXG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUhndi5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEnO1xuICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMiddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyczJ11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzQnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNSddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc2J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzcnXSkgeyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgIGxldCBzcGFuQmlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UgPSAkKHJvdXRlUHJvZmlsZS5iaWtlKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCA4OyBpKyspIHsgLy9pdGVyYXRlIG92ZXIgYWxsIHBvc3NpYmxlIGN5Y2xpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJykpIHsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmRhdGEoJ3Byb2ZpbGUnLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5iaWtlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfQklLRSk7XG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpIHsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgY3ljbGluZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIGN5Y2xpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICBzcGFuQmlrZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UubGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkJpa2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzgnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snOSddKSB7IC8vYWRkIGJ1dHRvbiBhbmQgZHJvcGRvd24gZm9yIHdhbGtpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgbGV0IHNwYW5Gb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdCA9ICQocm91dGVQcm9maWxlLmZvb3QpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gODsgaSA8IDEwOyBpKyspIHsgLy9pdGVyYXRlIG92ZXIgcG9zc2libGUgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmRhdGEoJ3Byb2ZpbGUnLCBbaV0pO1xuICAgICAgICAgICAgICAgICAgJChjaGlsZCkuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnKSkgeyAvL2FkZCBleGlzdGluZyBkZWZhdWx0IHByb2ZpbGUgdG8gYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuZGF0YSgncHJvZmlsZScsIGkpO1xuICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmZvb3QpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9GT09UKTtcblxuICAgICAgICAgICAgICBpZiAocm91dGVQcm9maWxlLmZvb3QubGlzdC5jaGlsZHJlbi5sZW5ndGggPT0gMSkgeyAvL2lnbm9yZSBkcm9wZG93biBsaXN0LCBpZiBvbmx5IG9uZSB3YWxraW5nIHByb2ZpbGUgaXMgZW5hYmxlZFxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHsgLy9hcHBlbmQgd2l0aCBkcm9wZG93biwgaWYgbXVsdGlwbGUgd2Fsa2luZyBwcm9maWxlcyBhcmUgZW5hYmxlZFxuICAgICAgICAgICAgICAgIHNwYW5Gb290LmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdC5saXN0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChzcGFuRm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkKHRoaXMpLnBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMTAnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgd2hlZWxjaGFpclxuICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUud2hlZWxjaGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUik7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZVdoZWVsY2hhaXIgPSAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLndoZWVsY2hhaXIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMTAnO1xuICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hpbGRDbGljayA9IGZ1bmN0aW9uICgkZWxlbWVudCkgeyAvL2hhbmRsZSB0aGUgY2xpY2sgaW5zaWRlIHRoZSBwcm9maWxlIGRyb3Bkb3duXG4gICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICRlbGVtZW50LmRhdGEoJ3Byb2ZpbGUnKTsgLy9hY3RpdmF0ZSBzZWxlY3RlZCBwcm9maWxlXG4gICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkZWxlbWVudCk7XG4gICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpOyAvL3VwZGF0ZSB0aGUgcm91dGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmNsZWFyU2libGluZ3MgPSBmdW5jdGlvbiAoZWxlbWVudCkgeyAvL2Z1bmN0aW9uIHRvIGFkanVzdCBjc3MtY2xhc3NlcyBhZnRlciBjaGFuZ2luZyBwcm9maWxlXG4gICAgICAgICAgICAgIGxldCBzaWJsaW5ncyA9ICQoZWxlbWVudCkucGFyZW50KCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICQoc2libGluZ3NbaV0pLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICQoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgcHJvZmlsZSBpbiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykgeyAvL3NldCBkZWZhdWx0IHZhbHVlIGZvciBpbml0aWFsIHJvdXRpbmdcbiAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzLmhhc093blByb3BlcnR5KHByb2ZpbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gcHJvZmlsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gUm91dGVyIFByb2ZpbGVzIGVuYWJsZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKGFyZWFGcm9tTGFiZWwpO1xuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuYXJlYUZyb21JbnB1dCk7XG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJlYUZyb21DbGVhcik7XG4gICAgICAgIHRoaXMuJGFyZWFGcm9tQ2xlYXIuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuJGFyZWFGcm9tQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmNsZWFySW5wdXQoc2VsZi4kZnJvbUlucHV0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlUHJvZmlsZSAmJiB0aGlzLnJvdXRlUHJvZmlsZS5jaGlsZHJlbikge1xuICAgICAgICAgIGFyZWFWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucm91dGVQcm9maWxlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYXJlYVZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5hcmVhRnJvbUlucHV0V3JhcHBlcik7XG4gICAgICAgIGxldCBhcmVhQWN0aXZhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgc2VsZi5mbk1hcEFyZWFJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uKGV2dCl7XG4gICAgICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgICAgICBpZigkKHNlbGYuYXJlYUZyb21JbnB1dCkudmFsKCkgPT09IFwiXCIpe1xuICAgICAgICAgICAgICBzZWxmLnBlcmZvcm1SZXZlcnNlU2VhcmNoKCQoc2VsZi5hcmVhRnJvbUlucHV0KSxvbC5wcm9qLnRvTG9uTGF0KGV2dC5jb29yZGluYXRlKSk7XG4gICAgICAgICAgICAgIHNlbGYuYXJlYVZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQob2wucHJvai50b0xvbkxhdChldnQuY29vcmRpbmF0ZSkpO1xuICAgICAgICAgICAgICBzZWxmLnBlcmZvcm1BcmVhKHNlbGYuYXJlYVZhbHVlLDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NsaWNrJywgc2VsZi5mbk1hcEFyZWFJbnRlcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFyZWFEZWFjdGl2YXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC51bignY2xpY2snLCBzZWxmLmZuTWFwQXJlYUludGVyYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBhcmVhVmlldyA9IHRoaXMuYWRkVmlldyh7XG4gICAgICAgICAgbmFtZTogJ2FyZWEtdmlldycsXG4gICAgICAgICAgdHJpZ2dlckNvbmZpZzoge1xuICAgICAgICAgICAgdGlwTGFiZWw6ICdMT09PT0wnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCxcbiAgICAgICAgICAgIHdpdGhIZWFkbGluZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICB7c2VjdGlvbjogdGhpcy5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiBhcmVhQ29udGVudEVsZW1lbnR9LFxuICAgICAgICAgICAge3NlY3Rpb246IHRoaXMudG9wVG9vbGJhciwgZWxlbWVudDogdGhpcy52aWV3VHJpZ2dlckJhcn1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGFjdGl2YXRlRnVuY3Rpb24gOiBhcmVhQWN0aXZhdGVGdW5jdGlvbixcbiAgICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGFyZWFEZWFjdGl2YXRlRnVuY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcmVhVmlldztcbiAgICAgIH1cblxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmM0Z01hcHNIb29rcyA9IHdpbmRvdy5jNGdNYXBzSG9va3MgfHwge307XG4gIHdpbmRvdy5jNGdNYXBzSG9va3MubWFwQ29udHJvbGxlcl9hZGRDb250cm9scyA9IHdpbmRvdy5jNGdNYXBzSG9va3MubWFwQ29udHJvbGxlcl9hZGRDb250cm9scyB8fCBbXTtcbiAgd2luZG93LmM0Z01hcHNIb29rcy5tYXBDb250cm9sbGVyX2FkZENvbnRyb2xzLnB1c2goZnVuY3Rpb24ocGFyYW1zKXtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHBhcmFtcy5tYXBDb250cm9sbGVyO1xuXG4gICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnJvdXRlcik7XG4gICAgbGV0IHJvdXRlciA9IG5ldyBjNGcubWFwcy5jb250cm9sLlJvdXRlclBsdWdpbih7XG4gICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5DVFJMX1JPVVRFUixcbiAgICAgIHRhcmdldDogcGFyYW1zLkNvbnRhaW5lcixcbiAgICAgIG1hcENvbnRyb2xsZXI6IG1hcENvbnRyb2xsZXJcbiAgICB9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKHJvdXRlcik7XG4gICAgbWFwQ29udHJvbGxlci5jb250cm9scy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgY29uc29sZS5sb2cobWFwQ29udHJvbGxlci5tYXAuY29udHJvbHMpO1xuICB9KVxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vUmVzb3VyY2VzL3B1YmxpYy9qcy9yb3V0aW5nLXBsdWdpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=