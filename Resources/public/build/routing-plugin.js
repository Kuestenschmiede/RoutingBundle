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
        url = 'con4gis/routeService/1/36/2/' + fromCoord;

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

      var url = 'con4gis/areaService/1/36/' + distance + '/' + fromCoord;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzdmZDVlM2YwY2QwODQwZjZmMWMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnRyb2wtc2lkZWJvYXJkLmpzIiwid2VicGFjazovLy8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC16b29tbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRpbmctcGx1Z2luLmpzIl0sIm5hbWVzIjpbImM0ZyIsIm1hcHMiLCJjb25zdGFudCIsIiQiLCJpMThuIiwiZXh0ZW5kIiwiTEFORyIsIk5BTUUiLCJISURFIiwiQ0xPU0UiLCJQT0lOVCIsIkZSRUVIQU5EIiwiTElORSIsIlBPTFlHT04iLCJDSVJDTEUiLCJQRVJJTUVURVIiLCJMRU5HVEgiLCJTVVJGQUNFQVJFQSIsIlJBRElVUyIsIlJFRlJFU0giLCJDT1BZX1RPX0NMSVBCT0FSRCIsIkNUUkxfWk9PTV9JTiIsIkNUUkxfWk9PTV9PVVQiLCJDVFJMX1pPT01fRVhUIiwiQ1RSTF9aT09NX0hPTUUiLCJDVFJMX1pPT01fUE9TIiwiQ1RSTF9aT09NX1NMSURFUiIsIkNUUkxfUkVTRVRfUk9UQVRJT04iLCJDVFJMX1BPUlRTSURFIiwiQ1RSTF9ST1VURVIiLCJDVFJMX0VESVRPUiIsIkNUUkxfTUVBU1VSRVRPT0xTIiwiQ1RSTF9JTkZPUEFHRSIsIkNUUkxfQURESVRJT05BTFBBTkVMIiwiQ1RSTF9BQ0NPVU5UIiwiQ1RSTF9aT09NTEVWRUwiLCJDVFJMX01PVVNFQ09PUkRTIiwiQ1RSTF9HRU9TRUFSQ0giLCJDVFJMX1NUQVJUX1NFQVJDSCIsIkNUUkxfT1ZFUlZJRVdNQVAiLCJDVFJMX0dFT0JPT0tNQVJLUyIsIkNUUkxfU0lERUJPQVJEIiwiQ1RSTF9TVEFSQk9BUkQiLCJDVFJMX0FUVFJJQlVUSU9OIiwiQ1RSTF9HUklEIiwiQ1RSTF9QRVJNQUxJTksiLCJDVFJMX0ZVTExTQ1JFRU4iLCJDVFJMX1BSSU5UIiwiRURJVE9SIiwiRURJVE9SX0VOQUJMRV9JTlNUQU5UX01FQVNVUkUiLCJFRElUT1JfRU5BQkxFX0ZSRUVIQU5EX0RSQVciLCJFRElUT1JfRkVBVFVSRV9BUFBMWSIsIkVESVRPUl9GRUFUVVJFX0RFTEVURSIsIkVESVRPUl9GRUFUVVJFX01PRElGWSIsIkVESVRPUl9TRUxFQ1RfSU5GTyIsIkVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9TRUxFQ1QiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyIsIkVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OIiwiRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSIsIlBPUFVQX1JPVVRFX0ZST00iLCJQT1BVUF9ST1VURV9UTyIsIlNUQVJCT0FSRCIsIlNUQVJCT0FSRF9CQVNFTEFZRVIiLCJTVEFSQk9BUkRfTEFZRVIiLCJTVEFSQk9BUkRfVklFV19UUklHR0VSX0JBU0VMQVlFUlNXSVRDSEVSIiwiU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSIiwiU0lERUJPQVJEIiwiUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCIsIlJPVVRFUl9GUk9NX0xBQkVMIiwiUk9VVEVSX09WRVJfTEFCRUwiLCJST1VURVJfVE9fTEFCRUwiLCJST1VURVJfQ0xFQVJfVElUTEUiLCJST1VURVJfQ0xFQVJfSFRNTCIsIlJPVVRFUl9MYWJlbF9JbnRlcmltIiwiUk9VVEVSX1NXSVRDSCIsIlJPVVRFUl9PVkVSIiwiUk9VVEVSX1BSSU5UIiwiUk9VVEVSX1ZJRVdfTEFCRUxfUk9VVEUiLCJST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRSIsIlJPVVRFUl9WSUVXX0xBQkVMX1RJTUUiLCJST1VURVJfVklFV19MQUJFTF9QUk9GSUxFIiwiUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyIsIlJPVVRFUl9WSUVXX0FMRVJUX0dPQ09ESU5HIiwiUk9VVEVSIiwiUk9VVEVSX04iLCJST1VURVJfRSIsIlJPVVRFUl9TIiwiUk9VVEVSX1ciLCJST1VURVJfTkUiLCJST1VURVJfU0UiLCJST1VURVJfU1ciLCJST1VURVJfTlciLCJST1VURVJfRElSRUNUSU9OXzAiLCJST1VURVJfRElSRUNUSU9OXzEiLCJST1VURVJfRElSRUNUSU9OXzIiLCJST1VURVJfRElSRUNUSU9OXzMiLCJST1VURVJfRElSRUNUSU9OXzQiLCJST1VURVJfRElSRUNUSU9OXzUiLCJST1VURVJfRElSRUNUSU9OXzYiLCJST1VURVJfRElSRUNUSU9OXzciLCJST1VURVJfRElSRUNUSU9OXzgiLCJST1VURVJfRElSRUNUSU9OXzEwIiwiUk9VVEVSX0RJUkVDVElPTl8xNSIsIlJPVVRFUl9GUk9NIiwiUk9VVEVSX1RPIiwiUk9VVEVSX0ZJTkRfUk9VVEUiLCJST1VURVJfTE9DX1JPVVRFX1RPIiwiUk9VVEVSX1JPVVRFREVTQyIsIlJPVVRFUl9ST1VURU5BTUUiLCJST1VURVJfRElTVEFOQ0UiLCJST1VURVJfVElNRSIsIlJPVVRFUl9SRVZfR0VPQ09ESU5HIiwiUk9VVEVSX0VSUk9SX1JFVl9HRU9DT0RJTkciLCJST1VURVJfU0VBUkNISU5HIiwiUk9VVEVSX0VSUk9SX1NFQVJDSElORyIsIlJPVVRFUl9DQUxDX1JPVVRFIiwiUk9VVEVSX0VSUk9SX0NBTENfUk9VVEUiLCJNRUFTVVJFVE9PTFMiLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04iLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EIiwiR0VPQk9PS01BUktTX1BMQUNFSE9MREVSIiwiSU5GT1BBR0UiLCJBRERJVElPTkFMUEFORUwiLCJBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSIiwiQUNDT1VOVCIsIkFDQ09VTlRfVklFV19UUklHR0VSIiwiU0VBUkNIX05PVF9GT1VORCIsIk5PTkUiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiY3NzIiwiT1BFTiIsIkNMT1NFQUJMRSIsIkVOQUJMRUQiLCJESVNBQkxFRCIsIklDT04iLCJDT05UUk9MIiwiQ09QWSIsIkFDVElWRSIsIklOQUNUSVZFIiwiTE9BRElORyIsIkFOSU1BVElPTl9TUElOIiwiTEFSR0UiLCJTTUFMTCIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIkFUVFJJQlVUSU9OX0xPR08iLCJDT05UUk9MX0NPTlRBSU5FUl9UTCIsIkNPTlRST0xfQ09OVEFJTkVSX1RSIiwiQ09OVFJPTF9DT05UQUlORVJfQkwiLCJDT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIiLCJDT05UUk9MX0NPTlRBSU5FUl9CUiIsIkVESVRPUl9EUkFXX0NPTlRFTlRfUE9JTlQiLCJFRElUT1JfRFJBV19DT05URU5UX0ZSRUVIQU5EIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9MSU5FU1RSSU5HIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OIiwiRURJVE9SX0RSQVdfQ09OVEVOVF9DSVJDTEUiLCJFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1QiLCJFRElUT1JfRFJBV19UUklHR0VSIiwiRURJVE9SX0NPTlRFTlRfU0VMRUNUIiwiRURJVE9SX0RSQVdfT1BUSU9OUyIsIkdFT1NFQVJDSCIsIkdFT1NFQVJDSF9XUkFQUEVSIiwiR0VPU0VBUkNIX1RSSUdHRVIiLCJHRU9TRUFSQ0hfU1RBUlQiLCJHUkFUSUNVTEUiLCJQUklOVCIsIklORk9QQUdFX1ZJRVdfVFJJR0dFUiIsIk9WRVJWSUVXTUFQIiwiT1ZFUlZJRVdNQVBfV1JBUFBFUiIsIkdFT0JPT0tNQVJLUyIsIlBFUk1BTElOSyIsIlBFUk1BTElOS19QT1BVUCIsIlBPUFVQX0NMT1NFIiwiUE9QVVBfUk9VVEVfV1JBUFBFUiIsIlBPUlRTSURFIiwiUE9SVFNJREVfQ09OVEFJTkVSIiwiUE9SVFNJREVfQ09OVFJPTCIsIlBPUlRTSURFX1dSQVBQRVIiLCJQT1JUU0lERV9USVRMRUJBUiIsIlBPUlRTSURFX1RPUF9UT09MQkFSIiwiUE9SVFNJREVfQ09OVEVOVF9DT05UQUlORVIiLCJQT1JUU0lERV9CT1RUT01fVE9PTEJBUiIsIlBPUlRTSURFX1NUQVRVU0JBUiIsIlBPUlRTSURFX1ZJRVdUUklHR0VSQkFSIiwiUE9SVFNJREVfSEVBRExJTkUiLCJQT1JUU0lERV9CVVRUT05CQVIiLCJQT1JUU0lERV9CVVRUT04iLCJQT1JUU0lERV9ISURFIiwiUE9SVFNJREVfQ0xPU0UiLCJTUElOTkVSIiwiU1RBUkJPQVJEX0NPTlRBSU5FUiIsIlNUQVJCT0FSRF9DT05UUk9MIiwiU1RBUkJPQVJEX1dSQVBQRVIiLCJTVEFSQk9BUkRfVElUTEVCQVIiLCJTVEFSQk9BUkRfQ09OVEVOVF9DT05UQUlORVIiLCJTVEFSQk9BUkRfQk9UVE9NX1RPT0xCQVIiLCJTVEFSQk9BUkRfU1RBVFVTQkFSIiwiU1RBUkJPQVJEX1ZJRVdUUklHR0VSQkFSIiwiU1RBUkJPQVJEX0hFQURMSU5FIiwiU1RBUkJPQVJEX0JVVFRPTkJBUiIsIlNUQVJCT0FSRF9CVVRUT04iLCJTVEFSQk9BUkRfQ0xPU0UiLCJTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUiIsIlNUQVJCT0FSRF9CQVNFTEFZRVJUUkVFIiwiU1RBUkJPQVJEX0xBWUVSVFJFRSIsIlNUQVJCT0FSRF9DT05URU5UX0xBWUVSU1dJVENIRVIiLCJUT09MVElQX1BPUFVQIiwiWk9PTV9MRVZFTCIsIlJPVVRFUl9JTlBVVF9XUkFQUEVSIiwiUk9VVEVSX1BST0ZJTEVfV1JBUFBFUiIsIlJPVVRFUl9JTlBVVF9GUk9NIiwiUk9VVEVSX0lOUFVUX1RPIiwiUk9VVEVSX0lOUFVUX0NMRUFSIiwiUk9VVEVSX0JVVFRPTkJBUiIsIlJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19XUkFQUEVSIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19IRUFERVIiLCJST1VURVJfUFJPRklMRV9DQVIiLCJST1VURVJfUFJPRklMRV9IR1YiLCJST1VURVJfUFJPRklMRV9CSUtFIiwiUk9VVEVSX1BST0ZJTEVfRk9PVCIsIlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIiLCJST1VURVJfSU5TVFJVQ1RJT05TX1RBQkxFIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOIiwiUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCIsIlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fRElTVEFOQ0UiLCJPTF9DT05UUk9MIiwiT0xfVU5TRUxFQ1RBQkxFIiwiT0xfT1ZFUkxBWUNPTlRBSU5FUiIsIk9MX09WRVJMQVlDT05UQUlORVJfU0UiLCJPTF9WSUVXUE9SVCIsIk9MX1pPT00iLCJPTF9aT09NX0lOIiwiT0xfWk9PTV9FWFQiLCJPTF9aT09NX0hPTUUiLCJPTF9aT09NX1BPUyIsIk9MX1pPT01fV0lUSF9FWFQiLCJPTF9aT09NX1dJVEhfSE9NRSIsIk9MX1pPT01fV0lUSF9QT1MiLCJPTF9aT09NX1NMSURFUiIsIk9MX1pPT01fV0lUSF9TTElERVIiLCJjc3NDb25zdGFudHMiLCJjb250cm9sIiwiUm91dGVyIiwib3B0X29wdGlvbnMiLCJvcHRpb25zIiwibmFtZSIsImNyZWF0ZSIsIm1hcENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJoZWFkbGluZSIsImRpcmVjdGlvbiIsImluZGV4IiwiU2lkZWJvYXJkIiwiY2FsbCIsIm9sIiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJpbml0Iiwic2VsZiIsInZpZXdSb3V0ZXIiLCJzZWxlY3RJbnRlcmFjdGlvbiIsInByb2ZpbGVJZCIsInNwaW5uZXIiLCJzaG93IiwicHJveHkiLCJsb2NhdGlvblN0eWxlQ29udHJvbGxlciIsImxvYWRMb2NhdGlvblN0eWxlcyIsImRhdGEiLCJyb3V0ZXJfZnJvbV9sb2NzdHlsZSIsInJvdXRlcl90b19sb2NzdHlsZSIsInJvdXRlcl9wb2ludF9sb2NzdHlsZSIsInJvdXRpbmdBbHRXYXlTb3VyY2UiLCJzb3VyY2UiLCJWZWN0b3IiLCJyb3V0aW5nV2F5U291cmNlIiwicm91dGVyV2F5TGF5ZXIiLCJsYXllciIsInpJbmRleCIsInN0eWxlIiwiU3R5bGUiLCJzdHJva2UiLCJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwicm91dGVyQWx0V2F5TGF5ZXIiLCJpbnRlcmFjdGlvbiIsIlNlbGVjdCIsIm9uIiwiZXZlbnQiLCJzZWxlY3RlZCIsImdlb21ldHJ5IiwiZ2V0R2VvbWV0cnkiLCJnZW9tIiwiTGluZVN0cmluZyIsInNob3dBbHRSb3V0ZSIsInJlc3BvbnNlIiwiZ2V0SWQiLCJtYXAiLCJhZGRJbnRlcmFjdGlvbiIsInJvdXRpbmdIaW50U291cmNlIiwicm91dGVySGludExheWVyIiwiZmVhdHVyZSIsInJlc29sdXRpb24iLCJhcnJMb2NTdHlsZXMiLCJsb2NhdGlvbnNTb3VyY2UiLCJsb2NhdGlvbnNMYXllciIsInJvdXRlckxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsIkNvbGxlY3Rpb24iLCJ2aXNpYmxlIiwiYWRkTGF5ZXIiLCJhZGRVc2VySW50ZXJmYWNlIiwiYWN0aXZhdGUiLCJwcm9maWxlIiwiZ2VvU2VhcmNoQXBpIiwiYXBpIiwiZ2Vvc2VhcmNoIiwiZ2VvUmV2ZXJzZVNlYXJjaEFwaSIsImdlb3NlYXJjaF9yZXZlcnNlIiwicm91dGluZ0FwaSIsInJvdXRpbmciLCJoaWRlIiwicHJlT3BlbkZ1bmN0aW9uIiwiYWRkTWFwSW5wdXRJbnRlcmFjdGlvbiIsInRvTG9uTGF0IiwicGVyZm9ybVJldmVyc2VTZWFyY2giLCIkdG9JbnB1dCIsInRvVmFsdWUiLCJQb2ludCIsInByZUhpZGVGdW5jdGlvbiIsInJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24iLCJwcmVDbG9zZUZ1bmN0aW9uIiwiY2xlYXIiLCJyb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyIiwiZW1wdHkiLCJjbGVhcklucHV0IiwiJGZyb21JbnB1dCIsIm92ZXJWYWx1ZSIsImlkIiwiY2xlYXJPdmVyIiwiJG92ZXJJbnB1dCIsImVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidW4iLCJmbk1hcFJvdXRlckludGVyYWN0aW9uIiwiY29vcmRpbmF0ZSIsImV2dCIsInByb2oiLCJ2YWwiLCJmcm9tVmFsdWUiLCIkYnV0dG9uT3ZlciIsInByb3AiLCJnZXRJbnRlcmFjdGlvbnMiLCJnZXRBcnJheSIsInNldEFjdGl2ZSIsInJvdXRlclZpZXciLCJyb3V0ZXJWaWV3SW5wdXRXcmFwcGVyIiwicm91dGVyVmlld0NvbnRlbnRXcmFwcGVyIiwicm91dGVyVmlld0NvbnRlbnRIZWFkbGluZSIsInByaW50Iiwicm91dGVQcm9maWxlIiwicm91dGVyRnJvbUxhYmVsIiwicm91dGVyT3ZlckxhYmVsIiwicm91dGVyVG9MYWJlbCIsInJvdXRlckZyb21DbGVhciIsInJvdXRlck92ZXJDbGVhciIsInJvdXRlclRvQ2xlYXIiLCJzd2l0Y2hGcm9tVG8iLCJidXR0b25PdmVyIiwiY3JlYXRlRWxlbWVudCIsImZyb21JbnB1dFdyYXBwZXIiLCJjbGFzc05hbWUiLCJmcm9tSW5wdXQiLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwidGl0bGUiLCIkcm91dGVyRnJvbUNsZWFyIiwiJHN3aXRjaEZyb21UbyIsIiRwcmludCIsInJvdXRlckJ1dHRvbkJhciIsImFwcGVuZENoaWxkIiwicm91dGVyX2FwaV9zZWxlY3Rpb24iLCJPYmplY3QiLCJrZXlzIiwicm91dGVyX3Byb2ZpbGVzIiwibGVuZ3RoIiwiYWN0aXZlIiwiYWRkQ2xhc3MiLCJjYXIiLCIkcm91dGVQcm9maWxlQ2FyIiwiY2xpY2siLCJjbGVhclNpYmxpbmdzIiwicmVjYWxjdWxhdGVSb3V0ZSIsImhndiIsIiRyb3V0ZVByb2ZpbGVIZ3YiLCJzcGFuQmlrZSIsImJpa2UiLCJsaXN0IiwiJHJvdXRlUHJvZmlsZUJpa2UiLCJpIiwiY2hpbGQiLCJjaGlsZENsaWNrIiwiY2hpbGRyZW4iLCJwYXJlbnQiLCJzcGFuRm9vdCIsImZvb3QiLCIkcm91dGVQcm9maWxlRm9vdCIsIndoZWVsY2hhaXIiLCIkcm91dGVQcm9maWxlV2hlZWxjaGFpciIsIiRlbGVtZW50IiwiZWxlbWVudCIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbnNvbGUiLCJ3YXJuIiwicHJldmVudERlZmF1bHQiLCJvdmVySW5wdXRXcmFwcGVyIiwib3ZlcklucHV0IiwiJHJvdXRlck92ZXJDbGVhciIsInJlbW92ZSIsInBlcmZvcm1TZWFyY2giLCJzd2l0Y2hWYXJOYW1lIiwidmFsdWUiLCJzd2l0Y2hWYXJWYWwiLCJyb3V0aW5nQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJXaW5QcmludCIsIndpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsImNsb3NlIiwiZm9jdXMiLCJ0b0lucHV0V3JhcHBlciIsInRvSW5wdXQiLCIkcm91dGVyVG9DbGVhciIsInN0YXR1c0JhciIsImdldEF0dHJpYnV0aW9uIiwiYWRkVmlldyIsInRyaWdnZXJDb25maWciLCJ0aXBMYWJlbCIsIndpdGhIZWFkbGluZSIsInNlY3Rpb25FbGVtZW50cyIsInNlY3Rpb24iLCJ0b3BUb29sYmFyIiwiY29udGVudENvbnRhaW5lciIsInNldElucHV0IiwiZnJvbSIsImF0dHJpYnV0aW9uU2VhcmNoIiwiYXR0cmlidXRpb25Sb3V0ZXIiLCJhdHRyaWJ1dGlvblJvdXRlckhvc3QiLCJhdHRyaWJ1dGlvbldyYXBwZXIiLCJhdHRyaWJ1dGlvbkh0bWwiLCJnZW9zZWFyY2hfZW5naW5lIiwicm91dGVyX2F0dHJpYnV0aW9uIiwidG1wRmVhdHVyZSIsIkZlYXR1cmUiLCJjbG9uZSIsInRyYW5zZm9ybSIsInNldFN0eWxlIiwiYWRkRmVhdHVyZSIsInByb3B0Iiwicm91dGVyX2ludGVyaW1fbG9jc3R5bGUiLCJwZXJmb3JtVmlhUm91dGUiLCJmcm9tUG9pbnQiLCJ0b1BvaW50Iiwib3ZlclBvaW50IiwidXJsIiwiZnJvbUNvb3JkIiwidG9Db29yZCIsIm92ZXJDb29yZCIsImdldENvb3JkaW5hdGVzIiwiQXJyYXkiLCJwdXNoIiwiYWpheCIsImRvbmUiLCJzaG93Um91dGUiLCJhbHdheXMiLCJ1cGRhdGUiLCJyb3V0ZVJlc3BvbnNlIiwic2hvd1JvdXRlTGF5ZXIiLCJzaG93Um91dGVJbnN0cnVjdGlvbnMiLCJyb3V0ZU51bWJlciIsIm1hcFZpZXciLCJ3YXlQb2x5bGluZSIsInJvdXRlRmVhdHVyZXMiLCJhbHRSb3V0ZUZlYXR1cmVzIiwicmlnaHRQYWRkaW5nIiwibGVmdFBhZGRpbmciLCJnZXRWaWV3IiwiZm9ybWF0IiwiUG9seWxpbmUiLCJyb3V0ZXMiLCJyZWFkRmVhdHVyZXMiLCJkYXRhUHJvamVjdGlvbiIsImZlYXR1cmVQcm9qZWN0aW9uIiwiZ2V0UHJvamVjdGlvbiIsInNldElkIiwicm91dGVyX3ZpYXJvdXRlX3ByZWNpc2lvbiIsInJvdXRlX2dlb21ldHJ5Iiwicm91dGVyX2FsdGVybmF0aXZlIiwiYWRkRmVhdHVyZXMiLCJyZW5kZXJTeW5jIiwiYW5pbWF0ZSIsInN0YXJ0IiwiRGF0ZSIsImR1cmF0aW9uIiwiZ2V0UmVzb2x1dGlvbiIsImNlbnRlciIsImFjdGl2ZVBvcnRzaWRlIiwiY29udGFpbmVyIiwib3V0ZXJXaWR0aCIsImFjdGl2ZVN0YXJib2FyZCIsImZpdCIsImdldFNpemUiLCJwYWRkaW5nIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uIiwic3RyTW9kIiwic3RyVHlwZSIsImltYWdlIiwiZ2V0SW5zdHJ1Y3Rpb25JY29uT1JTIiwiaW50VHlwZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaHJlZiIsImdldFR5cGVUZXh0IiwidGV4dElEIiwiZ2V0TW9kaWZpZXJUZXh0Iiwic3RyTW9kaWZpZXIiLCJnZXREcml2aW5nSW5zdHJ1Y3Rpb25JY29uIiwiaW5zdHJ1Y3Rpb25JZCIsInJlcGxhY2UiLCJnZXRUZXh0IiwidGV4dF9pZCIsImdldERyaXZpbmdJbnN0cnVjdGlvbiIsImRlc2NyaXB0aW9uIiwicm91dGVySW5zdHJ1Y3Rpb24iLCJyb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIiLCJyb3V0ZXJJbnN0cnVjdGlvbnNIdG1sIiwiaW5zdHIiLCJyb3dzdHlsZSIsImoiLCJyb3V0ZV9uYW1lXzAiLCJyb3V0ZV9uYW1lXzEiLCJ0b3RhbF9kaXN0YW5jZSIsInRvdGFsX3RpbWUiLCJsZWdzIiwic3VtbWFyeSIsInNwbGl0IiwidG9IdW1hbkRpc3RhbmNlIiwiZGlzdGFuY2UiLCJ0b0h1bWFuVGltZSIsInJvdXRlX25hbWUiLCJyb3V0ZV9zdW1tYXJ5Iiwic3RlcHMiLCJtYW5ldXZlciIsIm1vZGlmaWVyIiwibG9jYXRpb24iLCJpbnN0cnVjdGlvbnRleHQiLCJleGl0Iiwicm91dGVfaW5zdHJ1Y3Rpb25zIiwic2VnbWVudHMiLCJpbnN0cnVjdGlvbiIsImFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24iLCJmbkl0ZW1DbGljayIsImZuSXRlbU92ZXIiLCJmbkl0ZW1PdXQiLCJnZXRGZWF0dXJlcyIsImN1cnJlbnRDb29yZGluYXRlcyIsImN1cnJlbnRIaW50RmVhdHVyZSIsInNldENlbnRlciIsImNvb3JkTG9uTGF0Iiwic3RyaW5nbG9ubGF0IiwicGFyc2VGbG9hdCIsIm5ld0Nvb3JkIiwiZnJvbUxvbkxhdCIsImVhY2giLCIkaW5wdXQiLCJ0cmlnZ2VyIiwiYWRkcmVzcyIsImNpdHkiLCJyb2FkIiwidG93biIsImhvdXNlX251bWJlciIsImRpc3BsYXlfbmFtZSIsImF0dHIiLCJib3VuZHMiLCJ2aWV3Ym94IiwiY2FsY3VsYXRlRXh0ZW50IiwidHJhbnNmb3JtRXh0ZW50IiwiZW5jb2RlVVJJIiwibG9uIiwibGF0IiwiYWxlcnQiLCJlcnJvciIsIlJPVVRFUl9WSUVXX0FMRVJUX0dFT0NPRElORyIsImRpc3RhbmNlSW5NZXRlcnMiLCJodW1hbkRpc3RhbmNlIiwicGFyc2VJbnQiLCJ0b0ZpeGVkIiwidGltZUluU2Vjb25kcyIsInNlY29uZHMiLCJtaW51dGVzIiwiaG91cnMiLCJodW1hblRpbWUiLCJleHREaXYiLCJkZWZhdWx0T3BlbiIsImlkZW50aWZpZXIiLCJjc3NuYW1lIiwiaW5pdGlhbGl6ZWQiLCJidXR0b24iLCJ3cmFwcGVyIiwidGl0bGVCYXIiLCJib3R0b21Ub29sYmFyIiwic2VjdGlvbnMiLCJ2aWV3VHJpZ2dlckJhciIsInZpZXdzIiwiYWN0aXZlVmlldyIsInBhdXNlZFZpZXciLCJDb250cm9sIiwidGFyZ2V0IiwiaW5pdENsYXNzIiwidGl0bGVCdXR0b25CYXIiLCJjbG9zZUJ1dHRvbiIsImNhcGl0YWxpemVkTmFtZSIsImhpZGVCdXR0b24iLCJjYWNoaW5nIiwidXRpbHMiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJibHVyIiwiZSIsIm1lc3NhZ2UiLCJ0b2dnbGUiLCJnZXRUYXJnZXQiLCJhcHBlbmQiLCIkb3ZlcmxheWNvbnRhaW5lcl9zdG9wZXZlbnQiLCJhZGRTZWN0aW9uIiwiY29udGVudEhlYWRsaW5lIiwiU3Bpbm5lciIsImdldFZhbHVlIiwib3B0X2V2ZW50IiwiY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IiwiY29udGFpbmVyT2Zmc2V0V2lkdGgiLCJoZWlnaHQiLCJvdXRlckhlaWdodCIsImRpc3BsYXkiLCJvZmZzZXRXaWR0aCIsImZvckVhY2giLCJoYXNDbGFzcyIsInN0b3JlVmFsdWUiLCJwb3N0T3BlbkZ1bmN0aW9uIiwiaXNPcGVuIiwib3B0X2hpZGUiLCJvcHRfb3Blbk90aGVyU2lkZWJvYXJkIiwiZGVhY3RpdmF0ZSIsIm1ha2VCdXR0b24iLCJsYWJlbCIsImNsaWNrQWN0aW9uIiwiZ2V0RWxlbWVudCIsInNldEVsZW1lbnQiLCJuZXdFbGVtZW50Iiwib3B0X3ZpZXdTY29wZSIsInZpZXdTY29wZSIsImFkZGl0aW9uYWxUcmlnZ2VyQ2xhc3MiLCJ2aWV3IiwiaW5pdEZ1bmN0aW9uIiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsInBhdXNlZCIsIm9wdF9vcGVuU2lkZWJvYXJkIiwib3B0X3BhdXNlIiwiWm9vbWxldmVsIiwidXBkYXRlWm9vbWxldmVsIiwidW5kZWZpbmVkSFRNTCIsImdldFpvb20iLCJtaXNjIiwic3Bpbm5lclNwYW4iLCJhZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZ2V0VW5pcXVlSWQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzdWJzdHIiLCJlbmNvZGVHZW9Kc29uUHJvcGVydHkiLCJpbnB1dCIsIm91dHB1dCIsImRlY29kZUdlb0pzb25Qcm9wZXJ0eSIsInNldFVybFBhcmFtIiwicGFyYW0iLCJvcHRfZ2V0S2V5Iiwib3B0X2V4ZWN1dGUiLCJsaW5rIiwic2VhcmNoUGFyYW0iLCJwYXJhbVJlcGxhY2VkIiwib3JpZ2luIiwicGF0aG5hbWUiLCJoYXNoIiwic2VhcmNoIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsImtleSIsIm9mZnNldCIsIm9yaWdpblN0cmluZyIsImdldFVybFBhcmFtIiwicmVnRXgiLCJzdWJzdHJpbmciLCJSZWdFeHAiLCJleGVjIiwiZGVsdGFFbmNvZGUiLCJhcnJJbnB1dCIsImFyck91dHB1dCIsInNvcnQiLCJhIiwiYiIsImRlbHRhRGVjb2RlIiwiaXNOYU4iLCJjYWxsSG9va0Z1bmN0aW9ucyIsImFyckhvb2tGdW5jdGlvbnMiLCJwYXJhbWV0ZXJzIiwiZ2V0UmdiYUZyb21IZXhBbmRPcGFjaXR5IiwiaGV4Iiwib3B0X29wYWNpdHkiLCJvcHRfYXJyYXkiLCJiaWdpbnQiLCJyIiwiZyIsInJlZHVjZVN0eWxlIiwic3R5bGVJZCIsInJlZHVjZWRTdHlsZSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibG9jYXRpb25TdHlsZXMiLCJnZXRGaWxsIiwiZ2V0U3Ryb2tlIiwic2V0V2lkdGgiLCJDaXJjbGUiLCJmaWxsIiwicmFkaXVzIiwibWVhc3VyZUdlb21ldHJ5Iiwib3B0X2ZvcmNlTGluZU1lYXN1cmUiLCJvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSIsInNwaGVyZSIsImNvb3JkaW5hdGVzIiwiY29vcmQxIiwiY29vcmQyIiwicmVzdWx0IiwiUG9seWdvbiIsImdldERpc3RhbmNlIiwicmF3VmFsdWUiLCJyb3VuZCIsImh0bWxWYWx1ZSIsImFicyIsImdldEFyZWEiLCJnZXRDZW50ZXIiLCJnZXRSYWRpdXMiLCJlZGdlQ29vcmRpbmF0ZSIsIlBJIiwic3FydCIsImdldEV4dGVudEZvckdlb21ldHJpZXMiLCJhcnJHZW9tZXRyaWVzIiwiZXh0ZW50U291cmNlIiwiZ2V0RXh0ZW50IiwiRXh0ZW50IiwiZml0VG9FeHRlbnRzIiwiZXh0ZW50cyIsIm9wdF9wYWRkaW5nIiwib3B0X2FuaW1hdGlvbkR1cmF0aW9uIiwiZXh0ZW50IiwiZml0VG9FeHRlbnQiLCJvcHRfbWluWm9vbSIsIm9wdF9tYXhab29tIiwib3B0X21pblJlc29sdXRpb24iLCJmaXRPcHRpb25zIiwibWluUmVzb2x1dGlvbiIsIm1pblpvb20iLCJtYXhab29tIiwicmVwbGFjZUFsbFBsYWNlaG9sZGVycyIsInN0cklucHV0Iiwib3B0X2xheWVyIiwic3RyT3V0cHV0IiwicmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzIiwicmVwbGFjZUVkaXRvclZhcnNQbGFjZWhvbGRlcnMiLCJyZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzIiwiZnVuY3Rpb25OYW1lIiwiZ2V0U3R5bGUiLCJnZXQiLCJldktleSIsImVkaXRvclZhcnMiLCJvYmplY3RUb0FycmF5Iiwib2JqZWN0IiwiZ2V0VmVjdG9yTGF5ZXIiLCJmblN0eWxlIiwiZ2V0Q3VycmVudFN1YmRvbWFpbiIsInJlZHJhd01hcFZpZXciLCJtYXBEYXRhIiwiY29udHJvbENvbnRhaW5lclRvcExlZnQiLCJwcmVwZW5kIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQiLCJhZnRlciIsImxlZnRTbGlkZUVsZW1lbnRzIiwiY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIiLCJzY2FsZWxpbmUiLCJyZW1vdmVDb250cm9sIiwiY29udHJvbHMiLCJTY2FsZUxpbmUiLCJhZGRDb250cm9sIiwiem9vbWxldmVsIiwibW91c2Vwb3NpdGlvbiIsIk1vdXNlUG9zaXRpb24iLCJwcm9qZWN0aW9uIiwiY29vcmRpbmF0ZUZvcm1hdCIsInRvU3RyaW5nSERNUyIsImxvY2FsU3RvcmFnZSIsIlJvdXRlclBsdWdpbiIsInZpZXdBcmVhIiwibW9kV2F5SW50ZXJhY3Rpb24iLCJNb2RpZnkiLCJtYXBCcm93c2VyRXZlbnQiLCJyb3V0ZXJGZWF0dXJlc1NvdXJjZSIsInJvdXRlckZlYXR1cmVzTGF5ZXIiLCJmZWF0dXJlcyIsInNob3dGZWF0dXJlcyIsImxvZyIsImxheWVyQ29udHJvbGxlciIsImFyckxheWVycyIsImNvbnRlbnQiLCJwb3B1cCIsInVuc3R5bGVkRmVhdHVyZXMiLCJjb250ZW50RmVhdHVyZXMiLCJtaXNzaW5nU3R5bGVzIiwicmVzdWx0Q29vcmRpbmF0ZSIsInBvaW50IiwiY29udGVudEZlYXR1cmUiLCJzZXQiLCJjbHVzdGVyIiwiem9vbSIsImZpbGxjb2xvciIsImZvbnRjb2xvciIsImxvY19saW5rdXJsIiwiaG92ZXJfbG9jYXRpb24iLCJob3Zlcl9zdHlsZSIsInpvb21fb25jbGljayIsImxvY3N0eWxlIiwidGFncyIsInBlcmZvcm1BcmVhIiwicm91dGVyQ29udGVudEVsZW1lbnQiLCJhcmVhVmlldyIsImFyZWFWaWV3SW5wdXRXcmFwcGVyIiwiYXJlYUNvbnRlbnRFbGVtZW50IiwiYXJlYVZpZXdDb250ZW50V3JhcHBlciIsImFyZWFGcm9tTGFiZWwiLCJhcmVhRnJvbUNsZWFyIiwicm91dGVyQWN0aXZhdGVGdW5jdGlvbiIsInJvdXRlckRlYWN0aXZhdGVGdW5jdGlvbiIsImFyZWFGcm9tSW5wdXRXcmFwcGVyIiwiYXJlYUZyb21JbnB1dCIsIiRhcmVhRnJvbUNsZWFyIiwiYXJlYUFjdGl2YXRlRnVuY3Rpb24iLCJmbk1hcEFyZWFJbnRlcmFjdGlvbiIsInNjb3BlIiwiYXJlYVZhbHVlIiwiYXJlYURlYWN0aXZhdGVGdW5jdGlvbiIsImM0Z01hcHNIb29rcyIsIm1hcENvbnRyb2xsZXJfYWRkQ29udHJvbHMiLCJwYXJhbXMiLCJyb3V0ZXIiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNB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QUlBLFNBQVMsSUFBSXgzQixJQUFJQyxJQUFKLENBQVM4UCxPQUFULENBQWlCcWtCLFlBQXJCLENBQWtDO0FBQzdDelgsZ0JBQVVsVSxnSEFBYUEsQ0FBQzVHLFdBRHFCO0FBRTdDaW1CLGNBQVF5UCxPQUFPRSxTQUY4QjtBQUc3Q3BuQixxQkFBZUE7QUFIOEIsS0FBbEMsQ0FBYjtBQUtBQSxrQkFBY2tELEdBQWQsQ0FBa0JxZ0IsVUFBbEIsQ0FBNkI0RCxNQUE3QjtBQUNBbm5CLGtCQUFjcWpCLFFBQWQsQ0FBdUI4RCxNQUF2QixHQUFnQ0EsTUFBaEM7QUFDQXZjLFlBQVE0WixHQUFSLENBQVl4a0IsY0FBY2tELEdBQWQsQ0FBa0JtZ0IsUUFBOUI7QUFDRCxHQVpEO0FBYUQsQ0F6K0JBLEVBeStCQ2xyQixNQXorQkQsRUF5K0JTLEtBQUt4SSxHQXorQmQsQ0FBRCxDIiwiZmlsZSI6InJvdXRpbmctcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL3JvdXRpbmctcGx1Z2luLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM3ZmQ1ZTNmMGNkMDg0MGY2ZjFjIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb25zdGFudCA9IHRoaXMuYzRnLm1hcHMuY29uc3RhbnQgfHwge307XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29uc3RhbnRzIChlbilcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmkxOG4gPSAkLmV4dGVuZChjNGcubWFwcy5jb25zdGFudC5pMThuLCB7XG5cbiAgICBMQU5HOiAnZGUnLFxuXG4gICAgTkFNRTogJ05hbWUnLFxuICAgIEhJREU6ICdadWtsYXBwZW4nLFxuICAgIENMT1NFOiAnU2NobGllw59lbicsXG4gICAgUE9JTlQ6ICdQT0knLFxuICAgIEZSRUVIQU5EOiAnRnJlaWhhbmQnLFxuICAgIExJTkU6ICdMaW5pZScsXG4gICAgUE9MWUdPTjogJ0Zsw6RjaGUnLFxuICAgIENJUkNMRTogJ1JhZGl1cycsXG4gICAgUEVSSU1FVEVSOiAnVW1mYW5nJyxcbiAgICBMRU5HVEg6ICdMw6RuZ2UnLFxuICAgIFNVUkZBQ0VBUkVBOiAnRmzDpGNoZW5pbmhhbHQnLFxuICAgIFJBRElVUzogJ1JhZGl1cycsXG4gICAgUkVGUkVTSDogJ0FrdHVhbGlzaWVyZW4nLFxuICAgIENPUFlfVE9fQ0xJUEJPQVJEOiAnSW4gWndpc2NoZW5hYmxhZ2Uga29waWVyZW4nLFxuXG4gICAgQ1RSTF9aT09NX0lOOiAnVmVyZ3LDtsOfZXJuJyxcbiAgICBDVFJMX1pPT01fT1VUOiAnVmVya2xlaW5lcm4nLFxuICAgIENUUkxfWk9PTV9FWFQ6ICdNYXhpbWFsIHZlcmtsZWluZXJuJyxcbiAgICBDVFJMX1pPT01fSE9NRTogJ1p1ciB1cnNwcsO8bmdsaWNoZW4gUG9zaXRpb24nLFxuICAgIENUUkxfWk9PTV9QT1M6ICdadW0gYWt0dWVsbGVuIFN0YW5kb3J0JyxcbiAgICBDVFJMX1pPT01fU0xJREVSOiAnWm9vbSBTbGlkZXInLFxuICAgIENUUkxfUkVTRVRfUk9UQVRJT046ICdSb3RhdGlvbiAodG91Y2gsIGFsdCttb3VzZSkgenVyw7xja3NldHplbicsXG4gICAgQ1RSTF9QT1JUU0lERTogJ1BvcnRzaWRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9ST1VURVI6ICdSb3V0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0VESVRPUjogJ0VkaXRvciBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfTUVBU1VSRVRPT0xTOiAnTWVzc3dlcmt6ZXVnZSBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfSU5GT1BBR0U6ICdJbmZvc2VpdGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX0FERElUSU9OQUxQQU5FTDogJ1BhbmVsIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BQ0NPVU5UOiAnQWNjb3VudCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfWk9PTUxFVkVMOiAnWm9vbScsXG4gICAgQ1RSTF9NT1VTRUNPT1JEUzogJ0xvbi9MYXQnLFxuICAgIENUUkxfR0VPU0VBUkNIOiAnU3VjaGUgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1NUQVJUX1NFQVJDSDogJ1N1Y2hlIHN0YXJ0ZW4nLFxuICAgIENUUkxfT1ZFUlZJRVdNQVA6ICfDnGJlcnNpY2h0c2thcnRlIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9HRU9CT09LTUFSS1M6ICdGYXZvcml0ZW4gdmVyd2FsdGVuJyxcbiAgICBDVFJMX1NJREVCT0FSRDogJ1NpZGVib2FyZCBlaW4tL2F1c2JsZW5kZW4nLFxuICAgIENUUkxfU1RBUkJPQVJEOiAnU3RhcmJvYXJkIGVpbi0vYXVzYmxlbmRlbicsXG4gICAgQ1RSTF9BVFRSSUJVVElPTjogJ0F0dHJpYnV0aW9uIGFuemVpZ2VuJyxcbiAgICBDVFJMX0dSSUQ6ICdHaXR0ZXIgZWluLS9hdXNibGVuZGVuJyxcbiAgICBDVFJMX1BFUk1BTElOSzogJ1Blcm1hbGluayBnZW5lcmllcmVuJyxcbiAgICBDVFJMX0ZVTExTQ1JFRU46ICdWb2xsYmlsZG1vZHVzIGVpbi0vYXVzc2NoYWx0ZW4nLFxuICAgIENUUkxfUFJJTlQ6ICdLYXJ0ZSBleHBvcnRpZXJlbicsXG5cbiAgICBFRElUT1I6ICdFZGl0b3InLFxuICAgIEVESVRPUl9FTkFCTEVfSU5TVEFOVF9NRUFTVVJFOiAnTWVzc2VuIHfDpGhyZW5kIGRlcyBaZWljaG5lbnMnLFxuICAgIEVESVRPUl9FTkFCTEVfRlJFRUhBTkRfRFJBVzogJ0ZyZWloYW5kIHplaWNobmVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9BUFBMWTogJ0VkaXRpZXJlbiBiZWVuZGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9ERUxFVEU6ICdFbGVtZW50IGzDtnNjaGVuJyxcbiAgICBFRElUT1JfRkVBVFVSRV9NT0RJRlk6ICdFbGVtZW50IGVkaXRpZXJlbiAvIHZlcnNjaGllYmVuJyxcbiAgICBFRElUT1JfU0VMRUNUX0lORk86ICdadXIgQXVzd2FobCBlaW4gRWxlbWVudCBhdWYgZGVyIEthcnRlIGFua2xpY2tlbi4nLFxuICAgIEVESVRPUl9TRUxFQ1RfSU5GT19BRERJVElPTkFMOiAnW1N0cmddICsgW0tsaWNrXSBmw7xyIE1laHJmYWNoYXVzd2FobCA8YnI+W1NoaWZ0XSBoYWx0ZW4gZsO8ciBBdXN3YWhsYm94JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX1NFTEVDVDogJ0F1c3dhaGwgTW9kdXMnLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19QT0lOVDogJ0thcnRlbmVsZW1lbnRlJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdGcmVpaGFuZHdlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdGbMOkY2hlbndlcmt6ZXVnZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRTogJ0tyZWlzd2Vya3pldWdlJyxcblxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdSb3V0ZSB2b24gaGllcicsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcblxuICAgIFNUQVJCT0FSRDogJ1N0YXJib2FyZCcsXG4gICAgU1RBUkJPQVJEX0JBU0VMQVlFUjogJ0Jhc2lza2FydGVuJyxcbiAgICBTVEFSQk9BUkRfTEFZRVI6ICdFYmVuZW4nLFxuICAgIFNUQVJCT0FSRF9WSUVXX1RSSUdHRVJfQkFTRUxBWUVSU1dJVENIRVI6ICdCYXNpc2thcnRlbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9MQVlFUlNXSVRDSEVSOiAnS2FydGVuZWxlbWVudGUnLFxuXG4gICAgU0lERUJPQVJEOiAnU2lkZWJvYXJkJyxcblxuICAgIFJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9GUk9NX0xBQkVMOiAnU3RhcnQnLFxuICAgIFJPVVRFUl9PVkVSX0xBQkVMOiAnWndpc2NoZW56aWVsJyxcbiAgICBST1VURVJfVE9fTEFCRUw6ICdaaWVsJyxcbiAgICBST1VURVJfQ0xFQVJfVElUTEU6ICdMw7ZzY2hlbicsXG4gICAgUk9VVEVSX0NMRUFSX0hUTUw6ICcnLFxuICAgIFJPVVRFUl9MYWJlbF9JbnRlcmltOiAnWndpc2NoZW56aWVsJyxcblxuICAgIFJPVVRFUl9TV0lUQ0g6J1dlY2hzZWwgdm9uIFN0YXJ0IHVuZCBaaWVsJyxcbiAgICBST1VURVJfT1ZFUjonWndpc2NoZW56aWVsIGhpbnp1ZsO8Z2VuJyxcbiAgICBST1VURVJfUFJJTlQ6J1JvdXRlbmJlc2NocmVpYnVuZyBkcnVja2VuJyxcblxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1JPVVRFOiAnUm91dGU6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9ESVNUQU5DRTogJ0VudGZlcm51bmc6JyxcbiAgICBST1VURVJfVklFV19MQUJFTF9USU1FOiAnWmVpdDonLFxuICAgIFJPVVRFUl9WSUVXX0xBQkVMX1BST0ZJTEU6ICdQcm9maWw6JyxcblxuICAgIFJPVVRFUl9WSUVXX0FMRVJUX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuLicsXG4gICAgUk9VVEVSX1ZJRVdfQUxFUlRfR09DT0RJTkc6ICdadWdyaWZmIGF1ZiBHZW9jb2RlciBmZWhsZ2VzY2hsYWdlbi4nLFxuXG4gICAgUk9VVEVSOiAnUm91dGVyJyxcbiAgICBST1VURVJfTjogJ05vcmRlbicsXG4gICAgUk9VVEVSX0U6ICdPc3QnLFxuICAgIFJPVVRFUl9TOiAnU8O8ZGVuJyxcbiAgICBST1VURVJfVzogJ1dlc3RlbicsXG4gICAgUk9VVEVSX05FOiAnTm9yZG9zdCcsXG4gICAgUk9VVEVSX1NFOiAnU8O8ZG9zdCcsXG4gICAgUk9VVEVSX1NXOiAnU8O8ZHdlc3QnLFxuICAgIFJPVVRFUl9OVzogJ05vcmR3ZXN0JyxcbiAgICBST1VURVJfRElSRUNUSU9OXzA6ICdVbmJla2FubnRlIEFud2Vpc3VuZ1sgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fMTogJ0dlcmFkZWF1cyB3ZWl0ZXJmYWhyZW5bIGF1ZiA8Yj4lczwvYj5dJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzI6ICdMZWljaHQgcmVjaHRzIGFiYmllZ2VuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8zOiAnUmVjaHRzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl80OiAnU2NoYXJmIHJlY2h0cyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNTogJ1dlbmRlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNjogJ1NjaGFyZiBsaW5rcyBhYmJpZWdlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgIFJPVVRFUl9ESVJFQ1RJT05fNzogJ0xpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl84OiAnTGVpY2h0IGxpbmtzIGFiYmllZ2VuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgUk9VVEVSX0RJUkVDVElPTl8xMDogJ0ZhaHJlbiBTaWUgUmljaHR1bmcgPGI+JWQ8L2I+WyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtMSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVyc3RlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0yJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgendlaXRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS0zJzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZHJpdHRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS00JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgdmllcnRlciBNw7ZnbGljaGtlaXRbIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICAnUk9VVEVSX0RJUkVDVElPTl8xMS01JzogJ0luIGRlbiBLcmVpc3ZlcmtlaHIgZWluZmFocmVuIHVuZCBiZWkgZsO8bmZ0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtNic6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIHNlY2hzdGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTcnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBzaWVidGVyIE3DtmdsaWNoa2VpdFsgaW4gUmljaHR1bmcgPGI+JXM8L2I+XSB2ZXJsYXNzZW4nLFxuICAgICdST1VURVJfRElSRUNUSU9OXzExLTgnOiAnSW4gZGVuIEtyZWlzdmVya2VociBlaW5mYWhyZW4gdW5kIGJlaSBhY2h0ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEtOSc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIG5ldW50ZXIgTcO2Z2xpY2hrZWl0WyBpbiBSaWNodHVuZyA8Yj4lczwvYj5dIHZlcmxhc3NlbicsXG4gICAgJ1JPVVRFUl9ESVJFQ1RJT05fMTEteCc6ICdJbiBkZW4gS3JlaXN2ZXJrZWhyIGVpbmZhaHJlbiB1bmQgYmVpIGVpbmVyIGRlciB2aWVsZW4gTcO2Z2xpY2hrZWl0ZW5bIGluIFJpY2h0dW5nIDxiPiVzPC9iPl0gdmVybGFzc2VuJyxcbiAgICBST1VURVJfRElSRUNUSU9OXzE1OiAnU2llIGhhYmVuIElociBaaWVsIGVycmVpY2h0JyxcblxuICAgICdST1VURVJfNS5YX1RZUEVfMCc6ICcgJW0gZmFocmVuWyBhdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xJzogJyAlbSBkZW0gU3RyYcOfZW52ZXJsYXVmIGZvbGdlblsgYWxzIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMic6ICcgRmFocmVuIFNpZVsgYXVmIDxiPiVzPC9iPl0gbG9zJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzMnOiAnIERhcyBaaWVsIGJlZmluZGV0IHNpY2ggPGI+JW08L2I+JyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzQnOiAnIFdlaXRlcmZhaHJlblsgYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNSc6ICcgJW0gW2F1ZiA8Yj4lczwvYj4gXWF1ZmZhaHJlbicsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV82JzogJyAlbSBbYXVmIDxiPiVzPC9iPiBdYWJmYWhyZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfNyc6ICcgRGVuIEZhaHJzdHJlaWZlbiAlbSBiZW51dHplbiBbYXVmIDxiPiVzPC9iPl0nLFxuICAgICdST1VURVJfNS5YX1RZUEVfOCc6ICcgJW0gYWJiaWVnZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzknOiAnIERlbiBGYWhyc3RyZWlmZW4gJW0gYmVudXR6ZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEwJzogJyAlbSBmYWhyZW4gdW0gYXVmIGRlciBTdHJhw59lIHp1IGJsZWliZW4nLFxuICAgICdST1VURVJfNS5YX1RZUEVfMTEnOiAnIEltIEtyZWlzdmVya2VociBkaWUgPGI+JXouPC9iPiBBdXNmYWhydCBuZWhtZW4gW2F1ZiA8Yj4lczwvYj5dJyxcbiAgICAnUk9VVEVSXzUuWF9UWVBFXzEyJzogJyBJbSBLcmVpc3ZlcmtlaHIgZGllIDxiPiV6LjwvYj4gQXVzZmFocnQgbmVobWVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xMyc6ICcgJW0gZmFocmVuIFthdWYgPGI+JXM8L2I+XScsXG4gICAgJ1JPVVRFUl81LlhfVFlQRV8xNCc6ICcgYWJiaWVnZW5bIGF1ZiA8Yj4lczwvYj5dJyxcblxuICAgICdST1VURVJfNS5YX01PRF8wJyAgOiAnVXR1cm4nLFxuICAgICdST1VURVJfNS5YX01PRF8xJyAgOiAnU2NoYXJmIHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzInICA6ICdSZWNodHMnLFxuICAgICdST1VURVJfNS5YX01PRF8zJyAgOiAnTGVpY2h0IHJlY2h0cycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzQnICA6ICdHZXJhZGVhdXMnLFxuICAgICdST1VURVJfNS5YX01PRF81JyAgOiAnTGVpY2h0IGxpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNicgIDogJ0xpbmtzJyxcbiAgICAnUk9VVEVSXzUuWF9NT0RfNycgIDogJ1NjaGFyZiBsaW5rcycsXG4gICAgJ1JPVVRFUl81LlhfTU9EXzgnICA6ICdpbiBkZXIgTsOkaGUnLFxuXG4gICAgUk9VVEVSX0ZST006ICdTdGFydCcsXG4gICAgUk9VVEVSX1RPOiAnWmllbCcsXG4gICAgUk9VVEVSX0ZJTkRfUk9VVEU6ICdSb3V0ZSBmaW5kZW4nLFxuICAgIFJPVVRFUl9MT0NfUk9VVEVfVE86ICdSb3V0ZSBoaWVyaGluJyxcbiAgICBST1VURVJfUk9VVEVERVNDOiAnUm91dGVuYmVzY2hyZWlidW5nJyxcbiAgICBST1VURVJfUk9VVEVOQU1FOiAnUm91dGUnLFxuICAgIFJPVVRFUl9ESVNUQU5DRTogJ0Rpc3RhbnonLFxuICAgIFJPVVRFUl9USU1FOiAnWmVpdCcsXG4gICAgUk9VVEVSX1JFVl9HRU9DT0RJTkc6ICdFcm1pdHRsZSBBZHJlc3NlLi4uJyxcbiAgICBST1VURVJfRVJST1JfUkVWX0dFT0NPRElORzogJ0ZlaGxlciBiZWltIEVybWl0dGVsbiBkZXIgQWRyZXNzZScsXG4gICAgUk9VVEVSX1NFQVJDSElORzogJ1N1Y2hlIEFkcmVzc2UuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9TRUFSQ0hJTkc6ICdGZWhsZXIgYmVpbSBTdWNoZW4gZGVyIEFkcmVzc2UnLFxuICAgIFJPVVRFUl9DQUxDX1JPVVRFOiAnQmVyZWNobmUgUm91dGUuLi4nLFxuICAgIFJPVVRFUl9FUlJPUl9DQUxDX1JPVVRFOiAnRmVobGVyIGJlaW0gQmVyZWNobmVuIGRlciBSb3V0ZScsXG5cbiAgICBNRUFTVVJFVE9PTFM6ICdNZXNzd2Vya3pldWdlJyxcbiAgICBNRUFTVVJFVE9PTFNfSU5GTzogJ1fDpGhsZW4gU2llIHdlaXRlciB1bnRlbiBlaW5lbiBNZXNzdHlwIGF1cyB1bmQgc3RhcnRlbiBTaWUgZGllIE1lc3N1bmcgZHVyY2ggZGFzIEtsaWNrZW4gYXVmIGRlciBLYXJ0ZS4nLFxuICAgIE1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUw6ICcoRWluemVsbmUgTWVzc3VuZ2VuIGvDtm5uZW4gbWl0IGVpbmVtIERvcHBlbGtsaWNrIGJlZW5kZXQgd2VyZGVuLiknLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUOiAnQXVzd2FobCBNb2R1cycsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdTdHJlY2tlbiBtZXNzZW4nLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnRmzDpGNoZW4gbWVzc2VuJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnUmFkaXVzIG1lc3NlbicsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EOiAnRnJlaWhhbmQgbWVzc2VuJyxcblxuICAgIEdFT0JPT0tNQVJLU19QTEFDRUhPTERFUjogJ05ldWUgQmV6ZWljaG51bmcnLFxuXG4gICAgSU5GT1BBR0U6ICdJbmZvcm1hdGlvbmVuJyxcbiAgICBBRERJVElPTkFMUEFORUw6ICdQYW5lbCcsXG4gICAgQURESVRJT05BTFBBTkVMX1ZJRVdfVFJJR0dFUjogJ1BhbmVsIGFuemVpZ2VuJyxcbiAgICBBQ0NPVU5UOiAnQWNjb3VudCcsXG4gICAgQUNDT1VOVF9WSUVXX1RSSUdHRVI6ICdBY2NvdW50IGFuemVpZ2VuJyxcblxuICAgIFNFQVJDSF9OT1RfRk9VTkQ6ICdEaWUgTG9rYXRpb24ga29ubnRlIG5pY2h0IGdlZnVuZGVuIHdlcmRlbi4gQml0dGUgdmVyc3VjaGVuIFNpZSBlaW5lIGFuZGVyZSBFaW5nYWJlLicsXG5cbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbiAgfSk7IC8vIGVuZCBvZiBcImxhbmd1YWdlIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBsYW5nQ29uc3RhbnRzID0gdGhpcy5jNGcubWFwcy5jb25zdGFudC5pMThuO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZS5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29uc3RhbnQgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50IHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQsIGM0Zykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIENTUyBjb25zdGFudHNcbiAgICovXG4gIGM0Zy5tYXBzLmNvbnN0YW50LmNzcyA9ICQuZXh0ZW5kKGM0Zy5tYXBzLmNvbnN0YW50LmNzcywge1xuXG4gICAgT1BFTjogJ2M0Zy1vcGVuJyxcbiAgICBDTE9TRTogJ2M0Zy1jbG9zZScsXG4gICAgQ0xPU0VBQkxFOiAnYzRnLWNsb3NlYWJsZScsXG4gICAgRU5BQkxFRDogJ2M0Zy1lbmFibGVkJyxcbiAgICBESVNBQkxFRDogJ2M0Zy1kaXNhYmxlZCcsXG4gICAgSElERTogJ2M0Zy1oaWRlJyxcbiAgICBJQ09OOiAnYzRnLWljb24nLFxuICAgIENPTlRST0w6ICdjNGctY29udHJvbCcsXG4gICAgQ09QWTogJ2M0Zy1jb3B5JyxcbiAgICBSRUZSRVNIOiAnYzRnLXJlZnJlc2gnLFxuICAgIEFDVElWRTogJ2M0Zy1hY3RpdmUnLFxuICAgIElOQUNUSVZFOiAnYzRnLWluYWN0aXZlJyxcbiAgICBMT0FESU5HOiAnYzRnLWxvYWRpbmcnLFxuICAgIEFOSU1BVElPTl9TUElOOiAnYzRnLWFuaW1hdGlvbi1zcGluJyxcbiAgICBMQVJHRTogJ2M0Zy1sYXJnZScsXG4gICAgU01BTEw6ICdjNGctc21hbGwnLFxuICAgIEhPUklaT05UQUw6ICdjNGctaG9yaXpvbnRhbCcsXG4gICAgVkVSVElDQUw6ICdjNGctdmVydGljYWwnLFxuXG4gICAgQVRUUklCVVRJT05fTE9HTzogJ2M0Zy1hdHRyaWJ1dGlvbi1sb2dvJyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9UTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci10b3AtbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfVFI6ICdjNGctY29udHJvbC1jb250YWluZXItdG9wLXJpZ2h0JyxcbiAgICBDT05UUk9MX0NPTlRBSU5FUl9CTDogJ2M0Zy1jb250cm9sLWNvbnRhaW5lci1ib3R0b20tbGVmdCcsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQkxfU1VCOiAnYzRnLWNvbnRyb2wtY29udGFpbmVyLWJvdHRvbS1sZWZ0LXN1YicsXG4gICAgQ09OVFJPTF9DT05UQUlORVJfQlI6ICdjNGctY29udHJvbC1jb250YWluZXItYm90dG9tLXJpZ2h0JyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BPSU5UOiAnYzRnLWRyYXctY29udGVudC1wb2ludCcsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9GUkVFSEFORDogJ2M0Zy1kcmF3LWNvbnRlbnQtZnJlZWhhbmQnLFxuICAgIEVESVRPUl9EUkFXX0NPTlRFTlRfTElORVNUUklORzogJ2M0Zy1kcmF3LWNvbnRlbnQtbGluZScsXG4gICAgRURJVE9SX0RSQVdfQ09OVEVOVF9QT0xZR09OOiAnYzRnLWRyYXctY29udGVudC1wb2x5Z29uJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX0NJUkNMRTogJ2M0Zy1kcmF3LWNvbnRlbnQtY2lyY2xlJyxcbiAgICBFRElUT1JfRFJBV19DT05URU5UX1BST0pFQ1Q6ICdjNGctZHJhdy1jb250ZW50LXByb2plY3QnLFxuICAgIEVESVRPUl9EUkFXX1RSSUdHRVI6ICdjNGctZHJhdy10cmlnZ2VyJyxcbiAgICBFRElUT1JfQ09OVEVOVF9TRUxFQ1Q6ICdjNGctY29udGVudC1zZWxlY3QnLFxuICAgIEVESVRPUl9EUkFXX09QVElPTlM6ICdjNGctZWRpdG9yLWRyYXctb3B0aW9ucycsXG4gICAgRURJVE9SX0ZFQVRVUkVfQVBQTFk6ICdjNGctZWRpdG9yLWZlYXR1cmUtYXBwbHknLFxuICAgIEVESVRPUl9GRUFUVVJFX0RFTEVURTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1kZWxldGUnLFxuICAgIEVESVRPUl9GRUFUVVJFX01PRElGWTogJ2M0Zy1lZGl0b3ItZmVhdHVyZS1tb2RpZnknLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfU0VMRUNUOiAnYzRnLWVkaXRvci12aWV3LXRyaWdnZXItc2VsZWN0JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfUE9JTlQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvaW50JyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQ6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWZyZWVoYW5kJyxcbiAgICBFRElUT1JfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORzogJ2M0Zy1lZGl0b3Itdmlldy10cmlnZ2VyLWRyYXctbGluZScsXG4gICAgRURJVE9SX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT046ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LXBvbHlnb24nLFxuICAgIEVESVRPUl9WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEU6ICdjNGctZWRpdG9yLXZpZXctdHJpZ2dlci1kcmF3LWNpcmNsZScsXG4gICAgR0VPU0VBUkNIOiAnYzRnLWdlb3NlYXJjaCcsXG4gICAgR0VPU0VBUkNIX1dSQVBQRVI6ICdjNGctZ2Vvc2VhcmNoLXdyYXBwZXInLFxuICAgIEdFT1NFQVJDSF9UUklHR0VSOiAnYzRnLWdlb3NlYXJjaC10cmlnZ2VyJyxcbiAgICBHRU9TRUFSQ0hfU1RBUlQ6ICdjNGctZ2Vvc2VhcmNoLXN0YXJ0JyxcbiAgICBHUkFUSUNVTEU6ICdjNGctZ3JhdGljdWxlJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLXNlbGVjdCcsXG4gICAgTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkc6ICdjNGctbWVhc3VyZXRvb2xzLXZpZXctdHJpZ2dlci1kcmF3LWxpbmUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19QT0xZR09OOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1wb2x5Z29uJyxcbiAgICBNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFOiAnYzRnLW1lYXN1cmV0b29scy12aWV3LXRyaWdnZXItZHJhdy1jaXJjbGUnLFxuICAgIE1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORDogJ2M0Zy1tZWFzdXJldG9vbHMtdmlldy10cmlnZ2VyLWRyYXctZnJlZWhhbmQnLFxuICAgIFBSSU5UOidjNGctcHJpbnQnLFxuICAgIElORk9QQUdFX1ZJRVdfVFJJR0dFUjogJ2M0Zy1pbmZvcGFnZS12aWV3LXRyaWdnZXInLFxuICAgIElORk9QQUdFOiAnYzRnLWluZm9wYWdlJyxcbiAgICBBRERJVElPTkFMUEFORUxfVklFV19UUklHR0VSOiAnYzRnLWFkZGl0aW9uYWxwYW5lbC12aWV3LXRyaWdnZXInLFxuICAgIEFERElUSU9OQUxQQU5FTDogJ2M0Zy1hZGRpdGlvbmFscGFuZWwnLFxuICAgIEFDQ09VTlRfVklFV19UUklHR0VSOiAnYzRnLWFjY291bnQtdmlldy10cmlnZ2VyJyxcbiAgICBBQ0NPVU5UOiAnYzRnLWFjY291bnQnLFxuICAgIE9WRVJWSUVXTUFQOiAnYzRnLW92ZXJ2aWV3bWFwJyxcbiAgICBPVkVSVklFV01BUF9XUkFQUEVSOiAnYzRnLW92ZXJ2aWV3bWFwLXdyYXBwZXInLFxuICAgIEdFT0JPT0tNQVJLUzogJ2M0Zy1nZW9ib29rbWFya3MnLFxuICAgIFBFUk1BTElOSzogJ2M0Zy1wZXJtYWxpbmsnLFxuICAgIFBFUk1BTElOS19QT1BVUDogJ2M0Zy1wZXJtYWxpbmstcG9wdXAnLFxuICAgIFBPUFVQX0NMT1NFOiAnYzRnLXBvcHVwLWNsb3NlJyxcbiAgICBQT1BVUF9ST1VURV9XUkFQUEVSOiAnYzRnLXBvcHVwLXJvdXRlLXdyYXBwZXInLFxuICAgIFBPUFVQX1JPVVRFX0ZST006ICdjNGctcG9wdXAtcm91dGUtZnJvbScsXG4gICAgUE9QVVBfUk9VVEVfVE86ICdjNGctcG9wdXAtcm91dGUtdG8nLFxuICAgIFBPUlRTSURFOiAnYzRnLXBvcnRzaWRlJyxcbiAgICBQT1JUU0lERV9DT05UQUlORVI6ICdjNGctcG9ydHNpZGUtY29udGFpbmVyJyxcbiAgICBQT1JUU0lERV9DT05UUk9MOiAnYzRnLXBvcnRzaWRlLWNvbnRyb2wnLFxuICAgIFBPUlRTSURFX1dSQVBQRVI6ICdjNGctcG9ydHNpZGUtd3JhcHBlcicsXG4gICAgUE9SVFNJREVfVElUTEVCQVI6ICdjNGctcG9ydHNpZGUtdGl0bGViYXInLFxuICAgIFBPUlRTSURFX1RPUF9UT09MQkFSOiAnYzRnLXBvcnRzaWRlLXRvcC10b29sYmFyJyxcbiAgICBQT1JUU0lERV9DT05URU5UX0NPTlRBSU5FUjogJ2M0Zy1wb3J0c2lkZS1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgUE9SVFNJREVfQk9UVE9NX1RPT0xCQVI6ICdjNGctcG9ydHNpZGUtYm90dG9tLXRvb2xiYXInLFxuICAgIFBPUlRTSURFX1NUQVRVU0JBUjogJ2M0Zy1wb3J0c2lkZS1zdGF0dXNiYXInLFxuICAgIFBPUlRTSURFX1ZJRVdUUklHR0VSQkFSOiAnYzRnLXBvcnRzaWRlLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBQT1JUU0lERV9IRUFETElORTogJ2M0Zy1wb3J0c2lkZS1oZWFkbGluZScsXG4gICAgUE9SVFNJREVfQlVUVE9OQkFSOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbmJhcicsXG4gICAgUE9SVFNJREVfQlVUVE9OOiAnYzRnLXBvcnRzaWRlLWJ1dHRvbicsXG4gICAgUE9SVFNJREVfSElERTogJ2M0Zy1wb3J0c2lkZS1oaWRlJyxcbiAgICBQT1JUU0lERV9DTE9TRTogJ2M0Zy1wb3J0c2lkZS1jbG9zZScsXG4gICAgU1BJTk5FUjogJ2M0Zy1zcGlubmVyJyxcbiAgICBTVEFSQk9BUkQ6ICdjNGctc3RhcmJvYXJkJyxcbiAgICBTVEFSQk9BUkRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250YWluZXInLFxuICAgIFNUQVJCT0FSRF9DT05UUk9MOiAnYzRnLXN0YXJib2FyZC1jb250cm9sJyxcbiAgICBTVEFSQk9BUkRfV1JBUFBFUjogJ2M0Zy1zdGFyYm9hcmQtd3JhcHBlcicsXG4gICAgU1RBUkJPQVJEX1RJVExFQkFSOiAnYzRnLXN0YXJib2FyZC10aXRsZWJhcicsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfQ09OVEFJTkVSOiAnYzRnLXN0YXJib2FyZC1jb250ZW50LWNvbnRhaW5lcicsXG4gICAgU1RBUkJPQVJEX0JPVFRPTV9UT09MQkFSOiAnYzRnLXN0YXJib2FyZC1ib3R0b20tdG9vbGJhcicsXG4gICAgU1RBUkJPQVJEX1NUQVRVU0JBUjogJ2M0Zy1zdGFyYm9hcmQtc3RhdHVzYmFyJyxcbiAgICBTVEFSQk9BUkRfVklFV1RSSUdHRVJCQVI6ICdjNGctc3RhcmJvYXJkLXZpZXd0cmlnZ2VyYmFyJyxcbiAgICBTVEFSQk9BUkRfSEVBRExJTkU6ICdjNGctc3RhcmJvYXJkLWhlYWRsaW5lJyxcbiAgICBTVEFSQk9BUkRfQlVUVE9OQkFSOiAnYzRnLXN0YXJib2FyZC1idXR0b25iYXInLFxuICAgIFNUQVJCT0FSRF9CVVRUT046ICdjNGctc3RhcmJvYXJkLWJ1dHRvbicsXG4gICAgU1RBUkJPQVJEX1ZJRVdfVFJJR0dFUl9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1zdGFyYm9hcmQtdmlldy10cmlnZ2VyLWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfVklFV19UUklHR0VSX0xBWUVSU1dJVENIRVI6ICdjNGctc3RhcmJvYXJkLXZpZXctdHJpZ2dlci1sYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQ0xPU0U6ICdjNGctc3RhcmJvYXJkLWNsb3NlJyxcbiAgICBTVEFSQk9BUkRfQ09OVEVOVF9CQVNFTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWJhc2VsYXllcnN3aXRjaGVyJyxcbiAgICBTVEFSQk9BUkRfQkFTRUxBWUVSVFJFRTogJ2M0Zy1iYXNlbGF5ZXJ0cmVlJyxcbiAgICBTVEFSQk9BUkRfTEFZRVJUUkVFOiAnYzRnLWxheWVydHJlZScsXG4gICAgU1RBUkJPQVJEX0NPTlRFTlRfTEFZRVJTV0lUQ0hFUjogJ2M0Zy1jb250ZW50LWxheWVyc3dpdGNoZXInLFxuICAgIFRPT0xUSVBfUE9QVVA6ICdjNGctdG9vbHRpcC1wb3B1cCcsXG4gICAgWk9PTV9MRVZFTDogJ2M0Zy16b29tLWxldmVsJyxcblxuICAgIFJPVVRFUl9JTlBVVF9XUkFQUEVSOiAnYzRnLXJvdXRlci1pbnB1dC13cmFwcGVyJyxcbiAgICBST1VURVJfUFJPRklMRV9XUkFQUEVSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdyYXBwZXInLFxuICAgIFJPVVRFUl9JTlBVVF9GUk9NOiAnYzRnLXJvdXRlci1pbnB1dC1mcm9tJyxcbiAgICBST1VURVJfSU5QVVRfVE86ICdjNGctcm91dGVyLWlucHV0LXRvJyxcbiAgICBST1VURVJfSU5QVVRfQ0xFQVI6ICdjNGctcm91dGVyLWlucHV0LWNsZWFyJyxcbiAgICBST1VURVJfQlVUVE9OQkFSOiAnYzRnLXJvdXRlci1idXR0b25iYXInLFxuICAgIFJPVVRFUl9BVFRSSUJVVElPTl9XUkFQUEVSOiAnYzRnLXJvdXRlci1hdHRyaWJ1dGlvbi13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI6ICdjNGctcm91dGVyLWluc3RydWN0aW9ucy13cmFwcGVyJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb25zLWhlYWRlcicsXG5cbiAgICBST1VURVJfU1dJVENIOiAnYzRnLXJvdXRlci1zd2l0Y2gnLFxuICAgIFJPVVRFUl9PVkVSOiAnYzRnLXJvdXRlci1vdmVyJyxcbiAgICBST1VURVJfUFJJTlQ6ICdjNGctcm91dGVyLXByaW50JyxcblxuICAgIFJPVVRFUl9QUk9GSUxFX0NBUjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1jYXInLFxuICAgIFJPVVRFUl9QUk9GSUxFX0hHVjogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1oZ3YnLFxuICAgIFJPVVRFUl9QUk9GSUxFX0JJS0U6ICdjNGctcm91dGVyLXByb2ZpbGUtYmlrZScsXG4gICAgUk9VVEVSX1BST0ZJTEVfRk9PVDogJ2M0Zy1yb3V0ZXItcHJvZmlsZS1mb290JyxcbiAgICBST1VURVJfUFJPRklMRV9XSEVFTENIQUlSOiAnYzRnLXJvdXRlci1wcm9maWxlLXdoZWVsY2hhaXInLFxuXG5cblxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEU6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLXRhYmxlJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU06ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ6ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLW9kZCcsXG4gICAgUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0VWRU46ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW0tLWV2ZW4nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uJyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0lDT046ICdjNGctcm91dGVyLWluc3RydWN0aW9uLWl0ZW1fZGlyZWN0aW9uLWljb24nLFxuICAgIFJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVDogJ2M0Zy1yb3V0ZXItaW5zdHJ1Y3Rpb24taXRlbV90ZXh0JyxcbiAgICBST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFOiAnYzRnLXJvdXRlci1pbnN0cnVjdGlvbi1pdGVtX2Rpc3RhbmNlJyxcblxuICAgIE9MX0NPTlRST0w6ICdvbC1jb250cm9sJyxcbiAgICBPTF9VTlNFTEVDVEFCTEU6ICdvbC11bnNlbGVjdGFibGUnLFxuXG4gICAgT0xfT1ZFUkxBWUNPTlRBSU5FUjogJ29sLW92ZXJsYXljb250YWluZXInLFxuICAgIE9MX09WRVJMQVlDT05UQUlORVJfU0U6ICdvbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCcsXG4gICAgT0xfVklFV1BPUlQ6ICdvbC12aWV3cG9ydCcsXG4gICAgT0xfWk9PTTogJ29sLXpvb20nLFxuICAgIE9MX1pPT01fSU46ICdvbC16b29tLWluJyxcbiAgICBPTF9aT09NX0VYVDogJ29sLXpvb20tZXh0ZW50JyxcbiAgICBPTF9aT09NX0hPTUU6ICdvbC16b29tLWhvbWUnLFxuICAgIE9MX1pPT01fUE9TOiAnb2wtem9vbS1wb3NpdGlvbicsXG4gICAgT0xfWk9PTV9XSVRIX0VYVDogJ29sLXpvb20td2l0aC1leHRlbnQnLFxuICAgIE9MX1pPT01fV0lUSF9IT01FOiAnb2wtem9vbS13aXRoLWhvbWUnLFxuICAgIE9MX1pPT01fV0lUSF9QT1M6ICdvbC16b29tLXdpdGgtcG9zaXRpb24nLFxuICAgIE9MX1pPT01fU0xJREVSOiAnb2wtem9vbS1zbGlkZXInLFxuICAgIE9MX1pPT01fV0lUSF9TTElERVI6ICdvbC16b29tLXdpdGgtc2xpZGVyJyxcblxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxuICB9KTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBjc3NDb25zdGFudHMgPSB0aGlzLmM0Zy5tYXBzLmNvbnN0YW50LmNzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LmpzIiwiLy8gXCJuYW1lc3BhY2VcIlxudGhpcy5jNGcgPSB0aGlzLmM0ZyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMgPSB0aGlzLmM0Zy5tYXBzIHx8IHt9O1xudGhpcy5jNGcubWFwcy5jb250cm9sID0gdGhpcy5jNGcubWFwcy5jb250cm9sIHx8IHt9O1xuXG5pbXBvcnQge1NpZGVib2FyZH0gZnJvbSBcIi4vYzRnLW1hcHMtY29udHJvbC1zaWRlYm9hcmRcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge2M0Zy5tYXBzLmNvbnRyb2wuU2lkZWJvYXJkfVxuICAgKlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICBtYXBDb250cm9sbGVyICBbZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIGNvbmZpZyAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyID0gZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAvLyBleHRlbmQgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIG5hbWU6ICdyb3V0ZXInLFxuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgaGVhZGxpbmU6IGxhbmdDb25zdGFudHMuUk9VVEVSLFxuICAgICAgZGlyZWN0aW9uOiAnbGVmdCdcbiAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuaW5kZXg9MDtcblxuICAgIC8vIGNhbGwgcGFyZW50IGNvbnN0cnVjdG9yXG4gICAgU2lkZWJvYXJkLmNhbGwodGhpcywgdGhpcy5vcHRpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5oZXJpdCBmcm9tIFwiU2lkZWJvYXJkXCJcbiAgICovXG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyLCBTaWRlYm9hcmQpO1xuXG4gIC8qKlxuICAgKiBNZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlJvdXRlci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlJvdXRlci5wcm90b3R5cGUsIHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNlbGYsXG4gICAgICAgICAgdmlld1JvdXRlcixcbiAgICAgICAgICBzZWxlY3RJbnRlcmFjdGlvbixcbiAgICAgICAgICBwcm9maWxlSWQ7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuXG4gICAgICAvLyBjaGVjayBhbmQgbG9hZCBsb2NhdGlvbiBzdHlsZXMgdmlhIG1hcC1wcm94eVxuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfZnJvbV9sb2NzdHlsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdG9fbG9jc3R5bGUsXG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXG4gICAgICBdKTtcblxuXG4gICAgICAvLyBBZGQgcm91dGVyIGxheWVyKHMpXG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIHRoaXMucm91dGVyV2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuOSknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMCxcbiAgICAgICAgc3R5bGU6IFtcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICAgICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDAsIDUxLCAxMTksIDAuNCknLFxuICAgICAgICAgICAgICB3aWR0aDogNFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgc2VsZWN0SW50ZXJhY3Rpb24gPSBuZXcgb2wuaW50ZXJhY3Rpb24uU2VsZWN0KHtcbiAgICAgICAgICBzdHlsZTpbXG4gICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApJyxcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDUxLCAxMTksIDAuMCknLFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIF1cblxuICAgICAgfSk7XG4gICAgICBzZWxlY3RJbnRlcmFjdGlvbi5vbignc2VsZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICBpZihldmVudC5zZWxlY3RlZFswXSApIHtcbiAgICAgICAgICAgICAgdmFyIGdlb21ldHJ5ID0gZXZlbnQuc2VsZWN0ZWRbMF0uZ2V0R2VvbWV0cnkoKTtcbiAgICAgICAgICAgICAgaWYoZ2VvbWV0cnkgJiYgZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcpe1xuICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QWx0Um91dGUoc2VsZi5yZXNwb25zZSxldmVudC5zZWxlY3RlZFswXS5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKHNlbGVjdEludGVyYWN0aW9uKTtcblxuXG4gICAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIgPSBuZXcgb2wubGF5ZXIuVmVjdG9yKHtcbiAgICAgICAgc291cmNlOiB0aGlzLnJvdXRpbmdIaW50U291cmNlLFxuICAgICAgICBzdHlsZTogZnVuY3Rpb24gKGZlYXR1cmUsIHJlc29sdXRpb24pIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWxmLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgIHJldHVybiAoIXNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5KSB8fCBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVdLnN0eWxlKGZlYXR1cmUsIHJlc29sdXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sb2NhdGlvbnNTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5sb2NhdGlvbnNMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMubG9jYXRpb25zU291cmNlLFxuICAgICAgICB6SW5kZXg6IDJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJvdXRlckxheWVyR3JvdXAgPSBuZXcgb2wubGF5ZXIuR3JvdXAoe1xuICAgICAgICBsYXllcnM6IG5ldyBvbC5Db2xsZWN0aW9uKFtcbiAgICAgICAgICB0aGlzLnJvdXRlcldheUxheWVyLFxuICAgICAgICAgIHRoaXMucm91dGVyQWx0V2F5TGF5ZXIsXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbnNMYXllcixcbiAgICAgICAgICB0aGlzLnJvdXRlckhpbnRMYXllclxuICAgICAgICBdKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5yb3V0ZXJMYXllckdyb3VwKTtcblxuICAgICAgdmlld1JvdXRlciA9IHRoaXMuYWRkVXNlckludGVyZmFjZSgpO1xuICAgICAgdmlld1JvdXRlci5hY3RpdmF0ZSgpO1xuXG4gICAgICAvLyBzdG9yZSBzb21lIHZhcnMgZm9yIGFqYXgtcmVxdWVzdHNcbiAgICAgIHByb2ZpbGVJZCA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucHJvZmlsZTtcbiAgICAgIHRoaXMuZ2VvU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoICsgJy8nICsgcHJvZmlsZUlkO1xuICAgICAgdGhpcy5nZW9SZXZlcnNlU2VhcmNoQXBpID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5hcGkuZ2Vvc2VhcmNoX3JldmVyc2UgKyAnLycgKyBwcm9maWxlSWQ7XG4gICAgICB0aGlzLnJvdXRpbmdBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5yb3V0aW5nICsgJy8nICsgcHJvZmlsZUlkO1xuXG4gICAgICB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcHJlT3BlbkZ1bmN0aW9uOiBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgICAgdGhpcy5hZGRNYXBJbnB1dEludGVyYWN0aW9uKCk7XG5cbiAgICAgIGlmIChvcHRfb3B0aW9ucyAmJiBvcHRfb3B0aW9ucy50b0xvbkxhdCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHRoaXMuJHRvSW5wdXQsIG9wdF9vcHRpb25zLnRvTG9uTGF0KTtcbiAgICAgICAgdGhpcy50b1ZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoW29wdF9vcHRpb25zLnRvTG9uTGF0WzFdLCBvcHRfb3B0aW9ucy50b0xvbkxhdFswXV0pO1xuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHByZUhpZGVGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5yZW1vdmVNYXBJbnB1dEludGVyYWN0aW9uKCk7XG4gICAgfSxcblxuICAgIHByZUNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmNsZWFyKCk7XG5cbiAgICAgICQodGhpcy5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgdGhpcy5jbGVhcklucHV0KHRoaXMuJGZyb21JbnB1dCk7XG4gICAgICBpZih0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgZm9yKHZhciBpZCBpbiB0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJPdmVyKHRoaXMuJG92ZXJJbnB1dCxpZCk7XG4gICAgICAgICAgICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgICAgICBpZihlbGVtKXtcbiAgICAgICAgICAgICAgICAgIGVsZW0ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNsZWFySW5wdXQodGhpcy4kdG9JbnB1dCk7XG5cbiAgICAgIHRoaXMucmVtb3ZlTWFwSW5wdXRJbnRlcmFjdGlvbigpO1xuXG4gICAgfSxcblxuICAgIHJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnVuKCdjbGljaycsIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbik7XG4gICAgfSxcblxuICAgIGFkZE1hcElucHV0SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgIGNvb3JkaW5hdGU7XG5cbiAgICAgIHNlbGYuZm5NYXBSb3V0ZXJJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcblxuICAgICAgICBjb29yZGluYXRlID0gb2wucHJvai50b0xvbkxhdChldnQuY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgaWYgKHNlbGYuJGZyb21JbnB1dC52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAgIC8vc2VsZi4kZnJvbUlucHV0LnZhbChvbC5wcm9qLnRvTG9uTGF0KGV2dC5jb29yZGluYXRlKSk7XG4gICAgICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChzZWxmLiRmcm9tSW5wdXQsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgIHNlbGYuZnJvbVZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgICAvL3NlbGYuJGZyb21JbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLiR0b0lucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICAgICAgLy9zZWxmLiR0b0lucHV0LnZhbChvbC5wcm9qLnRvTG9uTGF0KGV2dC5jb29yZGluYXRlKSk7XG4gICAgICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChzZWxmLiR0b0lucHV0LCBjb29yZGluYXRlKTtcbiAgICAgICAgICBzZWxmLnRvVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChjb29yZGluYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLiRvdmVySW5wdXQpIHtcbiAgICAgICAgICAgIGlmKHNlbGYuJG92ZXJJbnB1dC52YWwoKSA9PT1cIlwiKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaChzZWxmLiRvdmVySW5wdXQsIGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIGlmICghc2VsZi5vdmVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vdmVyVmFsdWU9e307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYub3ZlclZhbHVlW3NlbGYuaW5kZXhdPW5ldyBvbC5nZW9tLlBvaW50KGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIHNlbGYuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NsaWNrJywgc2VsZi5mbk1hcFJvdXRlckludGVyYWN0aW9uKTtcbiAgICAgIGlmKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpWyc5J10pe1xuICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRJbnRlcmFjdGlvbnMoKS5nZXRBcnJheSgpWyc5J10uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0SW50ZXJhY3Rpb25zKCkuZ2V0QXJyYXkoKVsnOCddLnNldEFjdGl2ZSh0cnVlKVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIGFkZFVzZXJJbnRlcmZhY2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgbGV0IHNlbGYsXG4gICAgICAgICAgcm91dGVyVmlldyxcbiAgICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLFxuICAgICAgICAgIHJvdXRlclZpZXdDb250ZW50V3JhcHBlcixcbiAgICAgICAgICByb3V0ZXJWaWV3Q29udGVudEhlYWRsaW5lLFxuICAgICAgICAgIHByaW50LFxuICAgICAgICAgIHJvdXRlUHJvZmlsZSA9W10sXG4gICAgICAgICAgcm91dGVyRnJvbUxhYmVsLFxuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbCxcbiAgICAgICAgICByb3V0ZXJUb0xhYmVsLFxuICAgICAgICAgIHJvdXRlckZyb21DbGVhcixcbiAgICAgICAgICByb3V0ZXJPdmVyQ2xlYXIsXG4gICAgICAgICAgcm91dGVyVG9DbGVhcixcbiAgICAgICAgICBzd2l0Y2hGcm9tVG8sXG4gICAgICAgICAgYnV0dG9uT3ZlcjtcblxuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHNlbGYucm91dGVyVmlld0NvbnRlbnRXcmFwcGVyID0gcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyO1xuXG4gICAgICAvLyBAVE9ETzogQWRkIHJvdXRlci1pbmZvLXRleHRcbiAgICAgIC8vIHJvdXRlclZpZXdDb250ZW50SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgLy8gcm91dGVyVmlld0NvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQ7XG4gICAgICAvLyByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyVmlld0NvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfV1JBUFBFUjtcblxuICAgICAgdGhpcy5mcm9tSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICB0aGlzLmZyb21JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICB0aGlzLmZyb21JbnB1dC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0ZST007XG4gICAgICB0aGlzLmZyb21JbnB1dC5pZCA9IHRoaXMuZnJvbUlucHV0Lm5hbWUgPSBcInJvdXRpbmdGcm9tXCI7XG5cbiAgICAgIHJvdXRlckZyb21MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICByb3V0ZXJGcm9tTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncm91dGluZ0Zyb20nKTtcbiAgICAgIHJvdXRlckZyb21MYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9GUk9NX0xBQkVMO1xuXG4gICAgICByb3V0ZXJGcm9tQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJvdXRlckZyb21DbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgcm91dGVyRnJvbUNsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICByb3V0ZXJGcm9tQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgIHRoaXMuJHJvdXRlckZyb21DbGVhciA9ICQocm91dGVyRnJvbUNsZWFyKTtcblxuICAgICAgc3dpdGNoRnJvbVRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBzd2l0Y2hGcm9tVG8uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9TV0lUQ0g7XG4gICAgICBzd2l0Y2hGcm9tVG8udGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9TV0lUQ0g7XG4gICAgICB0aGlzLiRzd2l0Y2hGcm9tVG8gPSAkKHN3aXRjaEZyb21Ubyk7XG5cbiAgICAgIGJ1dHRvbk92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbk92ZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9PVkVSO1xuICAgICAgYnV0dG9uT3Zlci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX09WRVI7XG4gICAgICB0aGlzLiRidXR0b25PdmVyID0gJChidXR0b25PdmVyKTtcblxuICAgICAgcHJpbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByaW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfUFJJTlQ7XG4gICAgICBwcmludC50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1BSSU5UO1xuICAgICAgdGhpcy4kcHJpbnQgPSAkKHByaW50KTtcblxuXG5cblxuICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfQlVUVE9OQkFSO1xuICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIuYXBwZW5kQ2hpbGQoc3dpdGNoRnJvbVRvKTtcbiAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmFwcGVuZENoaWxkKGJ1dHRvbk92ZXIpO1xuICAgICAgdGhpcy5yb3V0ZXJCdXR0b25CYXIuYXBwZW5kQ2hpbGQocHJpbnQpO1xuXG4gICAgICAgIC8vICQocHJpbnQpLmluc2VydEJlZm9yZShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYzRnLXBvcnRzaWRlLWhpZGVcIilbMF0pO1xuXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzInKXsgLy9PcGVuUm91dGVTZXJ2aWNlXG4gICAgICAgICAgICBpZihPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykubGVuZ3RoID09IDEpey8vY2hlY2sgZm9yIHNpbmdsZSBwcm9maWxlIGFuZCBzZXQgdGhpcyBhcyAgYWN0aXZlIHJvdXRpbmcgcHJvZmlsZVxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcykubGVuZ3RoID4gMSl7IC8vY2hlY2sgZm9yIG11bHRpcGxlIHByb2ZpbGVzIGFuZCBhZGQgcHJvZmlsZS1jaGFuZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMucm91dGVQcm9maWxlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV1JBUFBFUik7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzAnXSl7IC8vYWRkIGJ1dHRvbiBmb3IgcHJvZmlsZSBkcml2aW5nLWNhclxuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuY2FyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmNhcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0NBUik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUNhciA9ICQocm91dGVQcm9maWxlLmNhcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWycxJ10pIHsgLy9hZGQgYnV0dG9uIGZvciBwcm9maWxlIGRyaXZpbmctaGd2XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5oZ3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuaGd2KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfSEdWKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmhndik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUhndiA9ICQocm91dGVQcm9maWxlLmhndik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlSGd2LmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzInXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMyddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc0J11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzUnXVxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNiddXG4gICAgICAgICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc3J10peyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcGFuQmlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UgPSAkKHJvdXRlUHJvZmlsZS5iaWtlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMjsgaSA8IDg7IGkrKyl7IC8vaXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuZGF0YSgncHJvZmlsZScpKXsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmRhdGEoJ3Byb2ZpbGUnLGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5iaWtlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfQklLRSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGVQcm9maWxlLmJpa2UubGlzdC5jaGlsZHJlbi5sZW5ndGggPT0gMSl7IC8vaWdub3JlIGRyb3Bkb3duIGxpc3QsIGlmIG9ubHkgb25lIGN5Y2xpbmcgcHJvZmlsZSBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNleyAvL2FwcGVuZCB3aXRoIGRyb3Bkb3duLCBpZiBtdWx0aXBsZSBjeWNsaW5nIHByb2ZpbGVzIGFyZSBlbmFibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuQmlrZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuQmlrZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuYmlrZS5saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHNwYW5CaWtlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncygkKHRoaXMpLnBhcmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc4J11cbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzknXSl7IC8vYWRkIGJ1dHRvbiBhbmQgZHJvcGRvd24gZm9yIHdhbGtpbmcgcHJvZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5Gb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdCA9ICQocm91dGVQcm9maWxlLmZvb3QpO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSA4OyBpIDwgMTA7IGkrKyl7IC8vaXRlcmF0ZSBvdmVyIHBvc3NpYmxlIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGNoaWxkKS5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hpbGRDbGljaygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighdGhpcy4kcm91dGVQcm9maWxlRm9vdC5kYXRhKCdwcm9maWxlJykpeyAvL2FkZCBleGlzdGluZyBkZWZhdWx0IHByb2ZpbGUgdG8gYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuZGF0YSgncHJvZmlsZScsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQocm91dGVQcm9maWxlLmZvb3QpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9GT09UKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZVByb2ZpbGUuZm9vdC5saXN0LmNoaWxkcmVuLmxlbmd0aCA9PSAxKXsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgd2Fsa2luZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuY2xpY2soZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIHdhbGtpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5Gb290LmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW5Gb290LmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5mb290Lmxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkZvb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKCQodGhpcykucGFyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEwJ10peyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgd2hlZWxjaGFpclxuICAgICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUud2hlZWxjaGFpciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV0hFRUxDSEFJUik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZVdoZWVsY2hhaXIgPSAkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLndoZWVsY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcxMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRDbGljayA9IGZ1bmN0aW9uKCRlbGVtZW50KXsgLy9oYW5kbGUgdGhlIGNsaWNrIGluc2lkZSB0aGUgcHJvZmlsZSBkcm9wZG93blxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkZWxlbWVudC5kYXRhKCdwcm9maWxlJyk7IC8vYWN0aXZhdGUgc2VsZWN0ZWQgcHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTsgLy91cGRhdGUgdGhlIHJvdXRlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU2libGluZ3MgPSBmdW5jdGlvbihlbGVtZW50KXsgLy9mdW5jdGlvbiB0byBhZGp1c3QgY3NzLWNsYXNzZXMgYWZ0ZXIgY2hhbmdpbmcgcHJvZmlsZVxuICAgICAgICAgICAgICAgICAgICBsZXQgc2libGluZ3MgPSAkKGVsZW1lbnQpLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGggOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgJChzaWJsaW5nc1tpXSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgcHJvZmlsZSBpbiB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcyl7IC8vc2V0IGRlZmF1bHQgdmFsdWUgZm9yIGluaXRpYWwgcm91dGluZ1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9maWxlKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSBwcm9maWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gUm91dGVyIFByb2ZpbGVzIGVuYWJsZWQnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG5cbiAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJGcm9tTGFiZWwpO1xuICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZnJvbUlucHV0KTtcbiAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJGcm9tQ2xlYXIpO1xuICAgICAgaWYgKGJ1dHRvbk92ZXIgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcpe1xuICAgICAgICAgIHRoaXMuJGJ1dHRvbk92ZXIuaGlkZSgpO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuJHJvdXRlckZyb21DbGVhci5oaWRlKCk7XG5cbiAgICAgIHRoaXMuJHJvdXRlckZyb21DbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbGVhcklucHV0KHNlbGYuJGZyb21JbnB1dCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy4kYnV0dG9uT3Zlci5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5pbmRleCsrO1xuICAgICAgICAgIHNlbGYuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsdHJ1ZSk7XG5cbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfRlJPTTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dC5pZCA9IHNlbGYub3ZlcklucHV0Lm5hbWUgPSBcInJvdXRpbmdPdmVyXCI7XG5cbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nRnJvbScpO1xuICAgICAgICAgIHJvdXRlck92ZXJMYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9MYWJlbF9JbnRlcmltO1xuXG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfQ0xFQVI7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICAgICAgcm91dGVyT3ZlckNsZWFyLmlkID0gc2VsZi5pbmRleDtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJPdmVyQ2xlYXIgPSAkKHJvdXRlck92ZXJDbGVhcik7XG5cbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyT3ZlckxhYmVsKTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5vdmVySW5wdXQpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJPdmVyQ2xlYXIpO1xuXG4gICAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLm92ZXJJbnB1dFdyYXBwZXIpO1xuICAgICAgICAgIHNlbGYuJHJvdXRlck92ZXJDbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgc2VsZi5jbGVhck92ZXIoc2VsZi4kb3ZlcklucHV0LHRoaXMuaWQpO1xuICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAvL2J1dHRvbk92ZXIuc2hvdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuJG92ZXJJbnB1dCA9ICQoc2VsZi5vdmVySW5wdXQpO1xuICAgICAgICAgIHNlbGYuJG92ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnBlcmZvcm1TZWFyY2goc2VsZi4kb3ZlcklucHV0LCBcIm92ZXJWYWx1ZVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG5cblxuXG4gICAgICB0aGlzLiRzd2l0Y2hGcm9tVG8uY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgc3dpdGNoVmFyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91dGluZ0Zyb21cIikudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nRnJvbVwiKS52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91dGluZ1RvXCIpLnZhbHVlO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm91dGluZ1RvXCIpLnZhbHVlID0gc3dpdGNoVmFyTmFtZTtcbiAgICAgICAgICB2YXIgc3dpdGNoVmFyVmFsID0gc2VsZi5mcm9tVmFsdWU7XG4gICAgICAgICAgc2VsZi5mcm9tVmFsdWUgPSBzZWxmLnRvVmFsdWU7XG4gICAgICAgICAgc2VsZi50b1ZhbHVlID0gc3dpdGNoVmFyVmFsO1xuICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuXG4gICAgICB9KTtcbiAgICAgIHRoaXMuJHByaW50LmNsaWNrKGZ1bmN0aW9uIChldmVudCl7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBsZXQgcm91dGluZ0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYzRnLXJvdXRlci1pbnN0cnVjdGlvbnMtd3JhcHBlclwiKVswXTtcbiAgICAgICAgICBpZighcm91dGluZ0NvbnRlbnQpIHJldHVybjtcbiAgICAgICAgICBsZXQgV2luUHJpbnQgPSB3aW5kb3cub3BlbignJywgJycsICdsZWZ0PTAsdG9wPTAsd2lkdGg9ODAwLGhlaWdodD05MDAsdG9vbGJhcj0wLHNjcm9sbGJhcnM9MCxzdGF0dXM9MCcpO1xuICAgICAgICAgIFdpblByaW50LmRvY3VtZW50LndyaXRlKHJvdXRpbmdDb250ZW50LmlubmVySFRNTCk7XG4gICAgICAgICAgV2luUHJpbnQuZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICBXaW5QcmludC5mb2N1cygpO1xuICAgICAgICAgIFdpblByaW50LnByaW50KCk7XG4gICAgICAgICAgV2luUHJpbnQuY2xvc2UoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRmcm9tSW5wdXQgPSAkKHRoaXMuZnJvbUlucHV0KTtcbiAgICAgIHRoaXMuJGZyb21JbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnBlcmZvcm1TZWFyY2goc2VsZi4kZnJvbUlucHV0LCBcImZyb21WYWx1ZVwiKTtcbiAgICAgICAgaWYgKHNlbGYuJGZyb21JbnB1dC52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICAgIHNlbGYuJHJvdXRlckZyb21DbGVhci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi4kcm91dGVyRnJvbUNsZWFyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5yb3V0ZXJCdXR0b25CYXIpO1xuICAgICAgaWYodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuY2hpbGRyZW4pe1xuICAgICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5yb3V0ZVByb2ZpbGUpO1xuICAgICAgfVxuICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmZyb21JbnB1dFdyYXBwZXIpO1xuXG4gICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfV1JBUFBFUjtcblxuICAgICAgdGhpcy50b0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgdGhpcy50b0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgIHRoaXMudG9JbnB1dC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX1RPO1xuICAgICAgdGhpcy50b0lucHV0LmlkID0gdGhpcy50b0lucHV0Lm5hbWUgPSBcInJvdXRpbmdUb1wiO1xuXG4gICAgICByb3V0ZXJUb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHJvdXRlclRvTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncm91dGluZ1RvJyk7XG4gICAgICByb3V0ZXJUb0xhYmVsLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1RPX0xBQkVMO1xuXG4gICAgICByb3V0ZXJUb0NsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICByb3V0ZXJUb0NsZWFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfQ0xFQVI7XG4gICAgICByb3V0ZXJUb0NsZWFyLnRpdGxlID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfVElUTEU7XG4gICAgICByb3V0ZXJUb0NsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICB0aGlzLiRyb3V0ZXJUb0NsZWFyID0gJChyb3V0ZXJUb0NsZWFyKTtcblxuICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJUb0xhYmVsKTtcbiAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50b0lucHV0KTtcbiAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyVG9DbGVhcik7XG5cblxuICAgICAgdGhpcy4kcm91dGVyVG9DbGVhci5oaWRlKCk7XG5cbiAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbGYuY2xlYXJJbnB1dChzZWxmLiR0b0lucHV0KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiR0b0lucHV0ID0gJCh0aGlzLnRvSW5wdXQpO1xuICAgICAgdGhpcy4kdG9JbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnBlcmZvcm1TZWFyY2goc2VsZi4kdG9JbnB1dCwgXCJ0b1ZhbHVlXCIpO1xuICAgICAgICBpZiAoc2VsZi4kdG9JbnB1dC52YWwoKSAhPT0gXCJcIikge1xuICAgICAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnRvSW5wdXRXcmFwcGVyKTtcblxuICAgICAgc2VsZi5zdGF0dXNCYXIuYXBwZW5kQ2hpbGQodGhpcy5nZXRBdHRyaWJ1dGlvbigpKTtcblxuICAgICAgcm91dGVyVmlldyA9IHRoaXMuYWRkVmlldyh7XG4gICAgICAgIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICB0aXBMYWJlbDogbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19BRERSRVNTX0lOUFVULFxuICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQsXG4gICAgICAgICAgd2l0aEhlYWRsaW5lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzZWN0aW9uRWxlbWVudHM6IFtcbiAgICAgICAgICB7c2VjdGlvbjogdGhpcy50b3BUb29sYmFyLCBlbGVtZW50OiByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyfSxcbiAgICAgICAgICB7c2VjdGlvbjogdGhpcy5jb250ZW50Q29udGFpbmVyLCBlbGVtZW50OiByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXJ9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcm91dGVyVmlldztcblxuICAgIH0sXG5cbiAgICBzZXRJbnB1dDogZnVuY3Rpb24gKGZyb20sIGNvb3JkaW5hdGUpIHtcbiAgICAgIC8vIHBlcmZvcm0gZ2VvU2VhcmNoIG9uIGdpdmVuIGxvY2F0aW9uXG4gICAgICAvLyBmaWxsIGZyb20vdG8gZmllbGRcbiAgICAgIC8vXG5cbiAgICAgIGlmICghY29vcmRpbmF0ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvb3JkaW5hdGUgPSBvbC5wcm9qLnRvTG9uTGF0KGNvb3JkaW5hdGUpO1xuXG4gICAgICBpZiAoZnJvbSkge1xuICAgICAgICB0aGlzLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHRoaXMuJGZyb21JbnB1dCwgY29vcmRpbmF0ZSk7XG4gICAgICAgIHRoaXMuZnJvbVZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRpbmF0ZSk7XG5cbiAgICAgICAgLy90aGlzLiRmcm9tSW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtUmV2ZXJzZVNlYXJjaCh0aGlzLiR0b0lucHV0LCBjb29yZGluYXRlKTtcbiAgICAgICAgdGhpcy50b1ZhbHVlID0gbmV3IG9sLmdlb20uUG9pbnQoY29vcmRpbmF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgIH0sXG5cbiAgICBnZXRBdHRyaWJ1dGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzLFxuICAgICAgICAgIGF0dHJpYnV0aW9uU2VhcmNoLFxuICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVyLFxuICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVySG9zdCxcbiAgICAgICAgICBhdHRyaWJ1dGlvbldyYXBwZXIsXG4gICAgICAgICAgYXR0cmlidXRpb25IdG1sO1xuICAgICAgc3dpdGNoKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24pe1xuICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVyID0gJzxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vcHJvamVjdC1vc3JtLm9yZy9cIj5Qcm9qZWN0IE9TUk08L2E+JztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXIgPSAnPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9wcm9qZWN0LW9zcm0ub3JnL1wiPlByb2plY3QgT1NSTTwvYT4nO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlciA9ICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9vcGVucm91dGVzZXJ2aWNlLm9yZy9cIj5vcGVucm91dGVzZXJ2aWNlPC9hPic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc3dpdGNoKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuZ2Vvc2VhcmNoLmdlb3NlYXJjaF9lbmdpbmUpe1xuICAgICAgICAgIGNhc2UgXCIxXCI6IC8vT1NNXG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uU2VhcmNoID0gJy0gR2VvY29kZXIgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vbm9taW5hdGltLm9wZW5zdHJlZXRtYXAub3JnL1wiPk9wZW5TdHJlZXRNYXA8L2E+ICc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIyXCI6IC8vTWFwcXVlc3RcbiAgICAgICAgICAgICAgYXR0cmlidXRpb25TZWFyY2ggPSAnLSBHZW9jb2RlciBieSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL3d3dy5tYXBxdWVzdC5jb20vXCI+TWFwUXVlc3Q8L2E+ICc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCIzXCI6IC8vY3VzdG9tXG4gICAgICAgICAgICAgIGF0dHJpYnV0aW9uU2VhcmNoID0gJy0gTm9taW5hdGltLUdlb2NvZGVyICc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCI0XCI6IC8vY29uNGdpc1xuICAgICAgICAgICAgICBhdHRyaWJ1dGlvblNlYXJjaCA9ICctIEdlb2NvZGVyIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5jb240Z2lzLm9yZy9rYXJ0ZW5kaWVuc3RlLmh0bWxcIj5jb240Z2lzPC9hPiAnO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgICAgc3dpdGNoKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24pe1xuICAgICAgICAgICAgY2FzZSBcIjBcIjpcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGlvblJvdXRlckhvc3QgPSAnLSBPU1JNIGhvc3RpbmcgYnkgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9hbGdvMi5pdGkua2l0LmVkdS9cIj5LSVQ8L2E+JztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb25Sb3V0ZXJIb3N0ID0gJy0gT1NSTSBob3N0aW5nIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vYWxnbzIuaXRpLmtpdC5lZHUvXCI+S0lUPC9hPic7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiMlwiOlxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uUm91dGVySG9zdCA9ICdcXCctIE9SUyBob3N0aW5nIGJ5IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5nZW9nLnVuaS1oZWlkZWxiZXJnLmRlL2dpcy9oZWlnaXRfZW4uaHRtbFwiPkhlaUdJVDwvYT5cXCcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIC8vVG9EbyBjaGVjayBwYXJhbXNcbiAgICAgIGF0dHJpYnV0aW9uSHRtbCA9IGF0dHJpYnV0aW9uUm91dGVyICsgYXR0cmlidXRpb25TZWFyY2ggKyBhdHRyaWJ1dGlvblJvdXRlckhvc3Q7XG4gICAgICBhdHRyaWJ1dGlvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGF0dHJpYnV0aW9uV3JhcHBlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0FUVFJJQlVUSU9OX1dSQVBQRVI7XG5cbiAgICAgIGF0dHJpYnV0aW9uV3JhcHBlci5pbm5lckhUTUwgPSBhdHRyaWJ1dGlvbkh0bWw7XG5cbiAgICAgIGlmIChzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hdHRyaWJ1dGlvbikge1xuICAgICAgICBhdHRyaWJ1dGlvbldyYXBwZXIuaW5uZXJIVE1MID0gc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXR0cmlidXRpb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGlvbldyYXBwZXI7XG5cbiAgICB9LFxuXG4gICAgcmVjYWxjdWxhdGVSb3V0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRtcEZlYXR1cmUsXG4gICAgICBwcm94eSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5O1xuXG4gICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5jbGVhcigpO1xuICAgICAgaWYgKHRoaXMuZnJvbVZhbHVlKSB7XG4gICAgICAgIHRtcEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgZ2VvbWV0cnk6IHRoaXMuZnJvbVZhbHVlLmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlICYmIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlXSkge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUocHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2Zyb21fbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZS5hZGRGZWF0dXJlKHRtcEZlYXR1cmUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudG9WYWx1ZSkge1xuICAgICAgICB0bXBGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgIGdlb21ldHJ5OiB0aGlzLnRvVmFsdWUuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3RvX2xvY3N0eWxlICYmIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZV0pIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICB9XG4gICAgICBpZih0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgZm9yKHZhciBwcm9wdCBpbiB0aGlzLm92ZXJWYWx1ZSl7XG4gICAgICAgICAgICAgIHRtcEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgICBnZW9tZXRyeTogdGhpcy5vdmVyVmFsdWVbcHJvcHRdLmNsb25lKCkudHJhbnNmb3JtKCdFUFNHOjQzMjYnLCAnRVBTRzozODU3JylcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9pbnRlcmltX2xvY3N0eWxlICYmIHByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1t0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9pbnRlcmltX2xvY3N0eWxlXSkge1xuICAgICAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShwcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfaW50ZXJpbV9sb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmFkZEZlYXR1cmUodG1wRmVhdHVyZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZnJvbVZhbHVlICYmIHRoaXMudG9WYWx1ZSkge1xuICAgICAgICAgIGlmKHRoaXMub3ZlclZhbHVlKXtcbiAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtVmlhUm91dGUodGhpcy5mcm9tVmFsdWUsIHRoaXMudG9WYWx1ZSwgdGhpcy5vdmVyVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtVmlhUm91dGUodGhpcy5mcm9tVmFsdWUsIHRoaXMudG9WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHBlcmZvcm1WaWFSb3V0ZTogZnVuY3Rpb24gKGZyb21Qb2ludCwgdG9Qb2ludCwgb3ZlclBvaW50KSB7XG5cbiAgICAgIHZhciB1cmwsXG4gICAgICAgICAgc2VsZixcbiAgICAgICAgICBmcm9tQ29vcmQsXG4gICAgICAgICAgdG9Db29yZCxcbiAgICAgICAgICBvdmVyQ29vcmQ7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICBmcm9tQ29vcmQgPSBbZnJvbVBvaW50LmdldENvb3JkaW5hdGVzKClbMV0sIGZyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzBdXTtcbiAgICAgIHRvQ29vcmQgPSBbdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCB0b1BvaW50LmdldENvb3JkaW5hdGVzKClbMF1dO1xuICAgICAgaWYob3ZlclBvaW50KXtcbiAgICAgICAgICBvdmVyQ29vcmQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICBmb3IodmFyIHByb3B0IGluIG92ZXJQb2ludCl7XG4gICAgICAgICAgICAgIG92ZXJDb29yZC5wdXNoKFtvdmVyUG9pbnRbcHJvcHRdLmdldENvb3JkaW5hdGVzKClbMV0sIG92ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVswXV0pO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMScgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpey8vT1NSTS1BUEk6NS54IG9yIE9SUy0gQVBJXG4gICAgICAgICAgICB1cmwgPSBzZWxmLnJvdXRpbmdBcGkgKyAnLycgKyBmcm9tQ29vcmQgO1xuXG4gICAgICAgICAgICBpZihvdmVyUG9pbnQpe1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTxvdmVyQ29vcmQubGVuZ3RoO2krKylcbiAgICAgICAgICAgICAgICB1cmwgKz0nLycrb3ZlckNvb3JkW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXJsICs9Jy8nK3RvQ29vcmQ7XG4gICAgICAgICAgICBpZih0aGlzLnJvdXRlUHJvZmlsZSAmJiB0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmUpe1xuICAgICAgICAgICAgICAgIHVybCArPSAnP3Byb2ZpbGU9Jyt0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgJ3VybCc6IHVybH0pXG4gICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1JvdXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3Bpbm5lci5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgICAgfSBlbHNley8vT1NSTS1BUEk6PDVcbiAgICAgICAgICAgIHVybCA9IHNlbGYucm91dGluZ0FwaSArICc/b3V0cHV0PWpzb24maW5zdHJ1Y3Rpb25zPXRydWUmYWx0PWZhbHNlJmxvY19mcm9tPScgKyBmcm9tQ29vcmQgKyAnJmxvY190bz0nICsgdG9Db29yZDtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lci5zaG93KCk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICAndXJsJzogdXJsfSlcbiAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1JvdXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cblxuICAgIH0sXG5cbiAgICBzaG93Um91dGU6IGZ1bmN0aW9uIChyb3V0ZVJlc3BvbnNlKSB7XG5cbiAgICAgIHRoaXMuc2hvd1JvdXRlTGF5ZXIocm91dGVSZXNwb25zZSwwKTtcbiAgICAgIHRoaXMuc2hvd1JvdXRlSW5zdHJ1Y3Rpb25zKHJvdXRlUmVzcG9uc2UsMCk7XG4gICAgfSxcbiAgICBzaG93QWx0Um91dGU6IGZ1bmN0aW9uIChyb3V0ZVJlc3BvbnNlLCByb3V0ZU51bWJlcil7XG4gICAgICB0aGlzLnNob3dSb3V0ZUxheWVyKHJvdXRlUmVzcG9uc2Uscm91dGVOdW1iZXIpO1xuICAgICAgdGhpcy5zaG93Um91dGVJbnN0cnVjdGlvbnMocm91dGVSZXNwb25zZSxyb3V0ZU51bWJlcik7XG4gICAgfSxcblxuICAgIHNob3dSb3V0ZUxheWVyOiBmdW5jdGlvbiAocm91dGVSZXNwb25zZSxyb3V0ZU51bWJlcikge1xuXG4gICAgICB2YXIgbWFwVmlldyxcbiAgICAgICAgICB3YXlQb2x5bGluZSxcbiAgICAgICAgICByb3V0ZUZlYXR1cmVzLFxuICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXMsXG4gICAgICAgICAgcmlnaHRQYWRkaW5nLFxuICAgICAgICAgIGxlZnRQYWRkaW5nLFxuICAgICAgICAgIHJvdXRlTnVtYmVyID0gcm91dGVOdW1iZXIgfHwgMDtcblxuICAgICAgaWYocm91dGVSZXNwb25zZSkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1dheVNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgIG1hcFZpZXcgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzEnIHx8dGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicgKSB7Ly9PU1JNLUFQSTo1LnhcbiAgICAgICAgICAgICAgd2F5UG9seWxpbmUgPSBuZXcgb2wuZm9ybWF0LlBvbHlsaW5lKCk7XG5cbiAgICAgICAgICAgICAgLy8gYWRkIHJvdXRlXG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzICYmIHJvdXRlUmVzcG9uc2Uucm91dGVzWzFdKSB7Ly9jaGVjayBmb3IgYWx0ZXJuYXRpdmUgcm91dGVcbiAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZU51bWJlciA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlc1swXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVQcm9qZWN0aW9uOiBtYXBWaWV3LmdldFByb2plY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGFsdFJvdXRlRmVhdHVyZXNbMF0uc2V0SWQoMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBhbHRSb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2Uucm91dGVzWzFdLmdlb21ldHJ5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgYWx0Um91dGVGZWF0dXJlc1swXS5zZXRJZCgxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByb3V0ZUZlYXR1cmVzID0gd2F5UG9seWxpbmUucmVhZEZlYXR1cmVzKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5nZW9tZXRyeSwge1xuICAgICAgICAgICAgICAgICAgZGF0YVByb2plY3Rpb246ICdFUFNHOjQzMjYnLFxuICAgICAgICAgICAgICAgICAgZmVhdHVyZVByb2plY3Rpb246IG1hcFZpZXcuZ2V0UHJvamVjdGlvbigpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByb3V0ZUZlYXR1cmVzWzBdLnNldElkKHJvdXRlTnVtYmVyKTtcblxuXG4gICAgICAgICAgfSBlbHNlIHsvL09TUk0tQVBJOjw1XG4gICAgICAgICAgICAgIHdheVBvbHlsaW5lID0gbmV3IG9sLmZvcm1hdC5Qb2x5bGluZSh7XG4gICAgICAgICAgICAgICAgICAnZmFjdG9yJzogdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfdmlhcm91dGVfcHJlY2lzaW9uIHx8IDFlNlxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBhZGQgcm91dGVcbiAgICAgICAgICAgICAgcm91dGVGZWF0dXJlcyA9IHdheVBvbHlsaW5lLnJlYWRGZWF0dXJlcyhyb3V0ZVJlc3BvbnNlLnJvdXRlX2dlb21ldHJ5LCB7XG4gICAgICAgICAgICAgICAgICBkYXRhUHJvamVjdGlvbjogJ0VQU0c6NDMyNicsXG4gICAgICAgICAgICAgICAgICBmZWF0dXJlUHJvamVjdGlvbjogbWFwVmlldy5nZXRQcm9qZWN0aW9uKClcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hbHRlcm5hdGl2ZSA9PSAnMScpIHtcbiAgICAgICAgICAgICAgaWYgKHJvdXRlUmVzcG9uc2Uucm91dGVzICYmIChyb3V0ZVJlc3BvbnNlLnJvdXRlcy5sZW5ndGggPiAxKSAmJiAocm91dGVSZXNwb25zZS5yb3V0ZXNbMV0pKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuYWRkRmVhdHVyZXMoYWx0Um91dGVGZWF0dXJlcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmFkZEZlYXR1cmVzKHJvdXRlRmVhdHVyZXMpO1xuICAgICAgICAgIC8vIHJlbmRlciB2aWV3XG4gICAgICAgICAgLy8gc28gdGhlIHJvdXRlIGdldHMgZHJhd24gYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLnJlbmRlclN5bmMoKTtcblxuICAgICAgICAgIC8vIGFuaW1hdGlvblxuICAgICAgICAgIG1hcFZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgIHJlc29sdXRpb246IG1hcFZpZXcuZ2V0UmVzb2x1dGlvbigpLFxuICAgICAgICAgICAgICBjZW50ZXI6IFswLCAwXVxuICAgICAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmJlZm9yZVJlbmRlcihcbiAgICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIC8vICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIC8vICAgICAgIHNvdXJjZTogbWFwVmlldy5nZXRDZW50ZXIoKVxuICAgICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnpvb20oe1xuICAgICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiBtYXBWaWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgIC8vICk7XG5cbiAgICAgICAgICAvLyBjYWxjdWxhdGUgcGFkZGluZ1xuICAgICAgICAgIGxlZnRQYWRkaW5nID0gMDtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlUG9ydHNpZGUgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlUG9ydHNpZGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgIGxlZnRQYWRkaW5nID0gJCh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVQb3J0c2lkZS5jb250YWluZXIpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByaWdodFBhZGRpbmcgPSAwO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5hY3RpdmVTdGFyYm9hcmQgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuYWN0aXZlU3RhcmJvYXJkLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICByaWdodFBhZGRpbmcgPSAkKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmFjdGl2ZVN0YXJib2FyZC5jb250YWluZXIpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjZW50ZXIgb24gcm91dGVcbiAgICAgICAgICBtYXBWaWV3LmZpdChcbiAgICAgICAgICAgICAgcm91dGVGZWF0dXJlc1swXS5nZXRHZW9tZXRyeSgpLFxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuZ2V0U2l6ZSgpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiBbMCwgcmlnaHRQYWRkaW5nLCAwLCBsZWZ0UGFkZGluZ11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcblxuXG5cbiAgICAgIGdldEluc3RydWN0aW9uSWNvbjogZnVuY3Rpb24oc3RyTW9kLHN0clR5cGUpIHtcbiAgICAgICAgICB2YXIgaW1hZ2UgPSBcIlwiO1xuXG4gICAgICAgICAgc3dpdGNoKHN0ck1vZCkge1xuICAgICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJzaGFycCBsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2hhcnAtbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2hhcnAgcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2xpZ2h0IGxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJzbGlnaHQtbGVmdC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2xpZ2h0IHJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ1dHVyblwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBcInUtdHVybi5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic3RyYWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gXCJjb250aW51ZS5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPVwiZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2goc3RyVHlwZSl7XG4gICAgICAgICAgICAgIGNhc2UgXCJkZXBhcnRcIjpcbiAgICAgICAgICAgICAgICAgIGltYWdlID1cImhlYWQucG5nXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImFycml2ZVwiOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPVwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyb3VuZGFib3V0XCI6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9XCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIFwiYnVuZGxlcy9jb240Z2lzbWFwcy92ZW5kb3Ivb3NybS9pbWFnZXMvXCIgKyBpbWFnZTtcbiAgICAgIH0sXG4gICAgICBnZXRJbnN0cnVjdGlvbkljb25PUlM6IGZ1bmN0aW9uKGludFR5cGUpe1xuICAgICAgICBsZXQgaW1hZ2U7XG4gICAgICAgIHN3aXRjaChpbnRUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwidHVybi1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJ0dXJuLXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzaGFycC1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJzaGFycC1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LWxlZnQucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1yaWdodC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwiY29udGludWUucG5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInJvdW5kLWFib3V0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGltYWdlID0gXCJyb3VuZC1hYm91dC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwidS10dXJuLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwidGFyZ2V0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwiaGVhZC5wbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgaW1hZ2UgPSBcInNsaWdodC1sZWZ0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICBpbWFnZSA9IFwic2xpZ2h0LXJpZ2h0LnBuZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmICsgXCJidW5kbGVzL2NvbjRnaXNtYXBzL3ZlbmRvci9vc3JtL2ltYWdlcy9cIiArIGltYWdlO1xuICAgICAgfSxcblxuICAgICAgZ2V0VHlwZVRleHQ6IGZ1bmN0aW9uKHN0clR5cGUpIHtcbiAgICAgICAgICB2YXIgdGV4dElEO1xuXG4gICAgICAgICAgc3dpdGNoKHN0clR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInR1cm5cIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzBcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibmV3IG5hbWVcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzFcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiZGVwYXJ0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8yXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImFycml2ZVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfM1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJtZXJnZVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfNFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJvbiByYW1wXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV81XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm9mZiByYW1wXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV82XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImZvcmtcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzdcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiZW5kIG9mIHJvYWRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzhcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwidXNlIGxhbmVcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzlcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiY29udGludWVcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzEwXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInJvdW5kYWJvdXRcIjpcbiAgICAgICAgICAgICAgY2FzZSBcImV4aXQgcm91bmRhYm91dFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMTFcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwicm90YXJ5XCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJleGl0IHJvdGFyeVwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX1RZUEVfMTJcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwicm91bmRhYm91dCB0dXJuXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfVFlQRV8xM1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJub3RpZmljYXRpb25cIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9UWVBFXzE0XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFuZ0NvbnN0YW50c1t0ZXh0SURdO1xuICAgICAgfSxcblxuICAgICAgZ2V0TW9kaWZpZXJUZXh0OiBmdW5jdGlvbihzdHJNb2RpZmllcikge1xuICAgICAgICAgIHZhciB0ZXh0SUQ7XG5cbiAgICAgICAgICBzd2l0Y2goc3RyTW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInV0dXJuXCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzBcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2hhcnAgcmlnaHRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfMVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF8yXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInNsaWdodCByaWdodFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF8zXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInN0cmFpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzRcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2xpZ2h0IGxlZnRcIjpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfNVwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgICB0ZXh0SUQgPSBcIlJPVVRFUl81LlhfTU9EXzZcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwic2hhcnAgbGVmdFwiOlxuICAgICAgICAgICAgICAgICAgdGV4dElEID0gXCJST1VURVJfNS5YX01PRF83XCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIHRleHRJRCA9IFwiUk9VVEVSXzUuWF9NT0RfOFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbGFuZ0NvbnN0YW50c1t0ZXh0SURdO1xuICAgICAgfSxcbiAgICAgIGdldERyaXZpbmdJbnN0cnVjdGlvbkljb246IGZ1bmN0aW9uIChpbnN0cnVjdGlvbklkKSB7XG4gICAgICAgICAgdmFyIGlkLFxuICAgICAgICAgICAgICBpbWFnZTtcblxuICAgICAgICAgIGlkID0gaW5zdHJ1Y3Rpb25JZC5yZXBsYWNlKC9eMTEtXFxkezEsfSQvLCBcIjExXCIpOyAgICAvLyBkdW1iIGNoZWNrLCBpZiB0aGVyZSBpcyBhIHJvdW5kYWJvdXQgKGFsbCBoYXZlIHRoZSBzYW1lIGljb24pXG5cbiAgICAgICAgICBpbWFnZSA9ICdkZWZhdWx0LnBuZyc7XG5cbiAgICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnY29udGludWUucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3NsaWdodC1yaWdodC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAndHVybi1yaWdodC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzQnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnc2hhcnAtcmlnaHQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3UtdHVybi5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzYnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAnc2hhcnAtbGVmdC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzcnOlxuICAgICAgICAgICAgICAgICAgaW1hZ2UgPSAndHVybi1sZWZ0LnBuZyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdzbGlnaHQtbGVmdC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzEwJzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ2hlYWQucG5nJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICcxMSc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9ICdyb3VuZC1hYm91dC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJzE1JzpcbiAgICAgICAgICAgICAgICAgIGltYWdlID0gJ3RhcmdldC5wbmcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWYgKyBcImJ1bmRsZXMvY29uNGdpc21hcHMvdmVuZG9yL29zcm0vaW1hZ2VzL1wiICsgaW1hZ2U7XG5cbiAgICAgIH0sXG4gICAgICBnZXRUZXh0OiBmdW5jdGlvbiAoaWQpIHtcblxuICAgICAgICAgIHZhciB0ZXh0X2lkID0gXCJST1VURVJfXCIgKyBpZDtcblxuICAgICAgICAgIGlmIChsYW5nQ29uc3RhbnRzW3RleHRfaWRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKHRleHRfaWQgKyBcIiBjYW4ndCBmaW5kIGluIGxhbmd1YWdlIGZpbGVzLlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGxhbmdDb25zdGFudHNbdGV4dF9pZF07XG4gICAgICB9LFxuXG4gICAgICBnZXREcml2aW5nSW5zdHJ1Y3Rpb246IGZ1bmN0aW9uIChpbnN0cnVjdGlvbklkKSB7XG5cbiAgICAgICAgICB2YXIgaWQsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgaWQgPSBcIkRJUkVDVElPTl9cIiArIGluc3RydWN0aW9uSWQucmVwbGFjZSgvXjExLVxcZHsyLH0kLywgXCIxMS14XCIpOyAgIC8vIGR1bWIgY2hlY2ssIGlmIHRoZXJlIGFyZSAxMCsgZXhpdHMgb24gYSByb3VuZGFib3V0IChzYXkgdGhlIHNhbWUgZm9yIGV4aXQgMTArKVxuXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmdldFRleHQoaWQpO1xuICAgICAgICAgIGlmICghZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB0aGlzLmdldFRleHQoJ0RJUkVDVElPTl8wJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgfSxcbiAgICAgIHNob3dSb3V0ZUluc3RydWN0aW9uczogZnVuY3Rpb24gKHJvdXRlUmVzcG9uc2Uscm91dGVOdW1iZXIpIHtcblxuICAgICAgICAgIHZhciBzZWxmLFxuICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbixcbiAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLFxuICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sLFxuICAgICAgICAgICAgICBpbnN0cixcbiAgICAgICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICAgICAgc3RyTW9kLFxuICAgICAgICAgICAgICByb3dzdHlsZSxcbiAgICAgICAgICAgICAgcm91dGVOdW1iZXIgPSByb3V0ZU51bWJlciB8fCAwLFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICBqLFxuICAgICAgICAgICAgICByb3V0ZV9uYW1lXzAgPSBcIlwiLFxuICAgICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSBcIlwiLFxuICAgICAgICAgICAgICB0b3RhbF9kaXN0YW5jZSA9IFwiXCIsXG4gICAgICAgICAgICAgIHRvdGFsX3RpbWUgPSBcIlwiO1xuXG4gICAgICAgICAgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgICAgIGlmIChzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX1dSQVBQRVI7XG4gICAgICAgICAgICAgIHNlbGYucm91dGVyVmlld0NvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJChzZWxmLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpLmVtcHR5KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSGVhZGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0hFQURFUjtcblxuICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcxJykgey8vT1NSTS1BUEk6NS54XG4gICAgICAgICAgICAgICAgICBpZiAocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3NbMF0uc3VtbWFyeSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlX25hbWVfMCA9IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzBdLnN1bW1hcnkuc3BsaXQoXCIsXCIpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlX25hbWVfMSA9IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzWzBdLnN1bW1hcnkuc3BsaXQoXCIsXCIpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZV9uYW1lXzEgPSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1sxXS5zdW1tYXJ5LnNwbGl0KFwiLFwiKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRvdGFsX2Rpc3RhbmNlID0gdGhpcy50b0h1bWFuRGlzdGFuY2Uocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgIHRvdGFsX3RpbWUgPSB0aGlzLnRvSHVtYW5UaW1lKHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIGVsc2UgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcpIHsvL09TUk0tQVBJOjw1XG4gICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlX25hbWUpIHtcbiAgICAgICAgICAgICAgICAgIHJvdXRlX25hbWVfMCA9IHJvdXRlUmVzcG9uc2Uucm91dGVfbmFtZVswXTtcbiAgICAgICAgICAgICAgICAgIHJvdXRlX25hbWVfMSA9IHJvdXRlUmVzcG9uc2Uucm91dGVfbmFtZVsxXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChyb3V0ZVJlc3BvbnNlLnJvdXRlX3N1bW1hcnkpIHtcbiAgICAgICAgICAgICAgICAgIHRvdGFsX2Rpc3RhbmNlID0gdGhpcy50b0h1bWFuRGlzdGFuY2Uocm91dGVSZXNwb25zZS5yb3V0ZV9zdW1tYXJ5LnRvdGFsX2Rpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgIHRvdGFsX3RpbWUgPSB0aGlzLnRvSHVtYW5UaW1lKHJvdXRlUmVzcG9uc2Uucm91dGVfc3VtbWFyeS50b3RhbF90aW1lKTtcbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpey8vT1NSLUFQSVxuICAgICAgICAgICAgICAgICAgdG90YWxfdGltZSA9IHRoaXMudG9IdW1hblRpbWUocm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLnN1bW1hcnkuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgdG90YWxfZGlzdGFuY2UgPSB0aGlzLnRvSHVtYW5EaXN0YW5jZShyb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc3VtbWFyeS5kaXN0YW5jZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJvdXRlX25hbWVfMCAmJiByb3V0ZV9uYW1lXzEpe1xuICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIuaW5uZXJIVE1MID0gJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9ST1VURSArICc8L2xhYmVsPiA8ZW0+JyArIHJvdXRlX25hbWVfMCArICcgJiM4NTk0OyAnICsgcm91dGVfbmFtZV8xICsgJzwvZW0+PGJyPicgKyAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfZGlzdGFuY2UgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSArICc8L2xhYmVsPiA8ZW0+JyArIHRvdGFsX3RpbWUgKyAnPC9lbT48YnI+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZih0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmUpe1xuICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIZWFkZXIuaW5uZXJIVE1MID0gJzxsYWJlbD4nICsgbGFuZ0NvbnN0YW50cy5ST1VURVJfVklFV19MQUJFTF9QUk9GSUxFICsgJzwvbGFiZWw+IDxlbT4nK3RoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW3RoaXMucm91dGVQcm9maWxlLmFjdGl2ZV0gICsgJzwvZW0+PGJyPicgKyAnPGxhYmVsPicgKyBsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0xBQkVMX0RJU1RBTkNFICsgJzwvbGFiZWw+IDxlbT4nICsgdG90YWxfZGlzdGFuY2UgKyAnPC9lbT48YnI+JyArICc8bGFiZWw+JyArIGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfTEFCRUxfVElNRSArICc8L2xhYmVsPiA8ZW0+JyArIHRvdGFsX3RpbWUgKyAnPC9lbT48YnI+JztcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgc2VsZi5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlckluc3RydWN0aW9uc0hlYWRlcik7XG5cbiAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCA9ICc8dGFibGUgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfVEFCTEUgKyAnXCIgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCI+JztcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzEnKSB7Ly9PU1JNLUFQSTo1LnhcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcm91dGVSZXNwb25zZS5yb3V0ZXNbcm91dGVOdW1iZXJdLmxlZ3Nbal0uc3RlcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0ciA9IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5sZWdzW2pdLnN0ZXBzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgc3RyVHlwZSA9IGluc3RyLm1hbmV1dmVyLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RyLm1hbmV1dmVyLm1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ck1vZCA9IGluc3RyLm1hbmV1dmVyLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fT0REO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlICs9IFwiIFwiICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ciBjbGFzcz1cIicgKyByb3dzdHlsZSArICdcIj4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPGltZyBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9JQ09OICsgJ1wiIHNyYz1cIicgKyB0aGlzLmdldEluc3RydWN0aW9uSWNvbihzdHJNb2QsIHN0clR5cGUpICsgJ1wiIGFsdD1cIlwiLz4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGQ+JztcblxuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQgKyAnXCIgZGF0YS1wb3M9XCInICsgaW5zdHIubWFuZXV2ZXIubG9jYXRpb24gKyAnXCI+JztcblxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgcm91dGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdHJ1Y3Rpb250ZXh0ID0gdGhpcy5nZXRUeXBlVGV4dChpbnN0ci5tYW5ldXZlci50eXBlKS5yZXBsYWNlKC8lcy8sIGluc3RyLm5hbWUpLnJlcGxhY2UoLyVtLywgdGhpcy5nZXRNb2RpZmllclRleHQoaW5zdHIubWFuZXV2ZXIubW9kaWZpZXIpKS5yZXBsYWNlKC8lei8sIGluc3RyLm1hbmV1dmVyLmV4aXQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0ci5uYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb250ZXh0ID0gaW5zdHJ1Y3Rpb250ZXh0LnJlcGxhY2UoL1xcWy4qP1xcXS9nLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3Rpb250ZXh0ID0gaW5zdHJ1Y3Rpb250ZXh0LnJlcGxhY2UoL1xcWyguKilcXF0vLCBcIiQxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IGluc3RydWN0aW9udGV4dDtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0ubGVnc1swXS5zdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gdGhpcy50b0h1bWFuRGlzdGFuY2UoaW5zdHIuZGlzdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RyPlwiO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzAnKXsvL09TUk0tQVBJOjw1XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3V0ZVJlc3BvbnNlLnJvdXRlX2luc3RydWN0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgaW5zdHIgPSByb3V0ZVJlc3BvbnNlLnJvdXRlX2luc3RydWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9PREQ7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvd3N0eWxlID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9FVkVOO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByb3dzdHlsZSArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU07XG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ciBjbGFzcz1cIicgKyByb3dzdHlsZSArICdcIj4nO1xuXG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT04gKyAnXCI+JztcbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzxpbWcgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiArICdcIiBzcmM9XCInICsgdGhpcy5nZXREcml2aW5nSW5zdHJ1Y3Rpb25JY29uKGluc3RyWzBdKSArICdcIiBhbHQ9XCJcIi8+JztcbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvdGQ+JztcblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX1RFWFQgKyAnXCIgZGF0YS1wb3M9XCInICsgaW5zdHJbM10gKyAnXCI+JztcblxuICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgcm91dGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGlmIChpbnN0clsxXSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gdGhpcy5nZXREcml2aW5nSW5zdHJ1Y3Rpb24oaW5zdHJbMF0pLnJlcGxhY2UoL1xcWyguKilcXF0vLCBcIiQxXCIpLnJlcGxhY2UoLyVzLywgaW5zdHJbMV0pLnJlcGxhY2UoLyVkLywgdGhpcy5nZXRUZXh0KGluc3RyWzZdKSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gdGhpcy5nZXREcml2aW5nSW5zdHJ1Y3Rpb24oaW5zdHJbMF0pLnJlcGxhY2UoL1xcWyguKilcXF0vLCBcIlwiKS5yZXBsYWNlKC8lZC8sIHRoaXMuZ2V0VGV4dChpbnN0cls2XSkpO1xuICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRElSRUNUSU9OX0RJU1RBTkNFICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gcm91dGVSZXNwb25zZS5yb3V0ZV9pbnN0cnVjdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gdGhpcy50b0h1bWFuRGlzdGFuY2UoaW5zdHJbNV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gXCI8L3RyPlwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PT0gJzInICl7Ly9PcGVuUm91dGVTZXJ2aWNlXG4gICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc2VnbWVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc2VnbWVudHNbal0uc3RlcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnN0ciA9IHJvdXRlUmVzcG9uc2Uucm91dGVzW3JvdXRlTnVtYmVyXS5zZWdtZW50c1tqXS5zdGVwc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHN0clR5cGUgPSBpbnN0ci50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcm93c3R5bGUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX09ERDtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU1fRVZFTjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3dzdHlsZSArPSBcIiBcIiArIGNzc0NvbnN0YW50cy5ST1VURVJfSU5TVFJVQ1RJT05TX0lURU07XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dHIgY2xhc3M9XCInICsgcm93c3R5bGUgKyAnXCI+JztcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTiArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzxpbWcgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fSUNPTiArICdcIiBzcmM9XCInICsgdGhpcy5nZXRJbnN0cnVjdGlvbkljb25PUlMoc3RyVHlwZSkgKyAnXCIgYWx0PVwiXCIvPic7XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC90ZD4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaW5zdHIubWFuZXV2ZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCArICdcIiBkYXRhLXBvcz1cIicgKyBpbnN0ci5tYW5ldXZlci5sb2NhdGlvbiArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9ICc8dGQgY2xhc3M9XCInICsgY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlNUUlVDVElPTlNfSVRFTV9ESVJFQ1RJT05fVEVYVCArICdcIiBkYXRhLXBvcz1cIicgKyAwICsgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyBidWlsZCByb3V0ZSBkZXNjcmlwdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBpbnN0ci5pbnN0cnVjdGlvbjtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90ZD5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgIHJvdXRlckluc3RydWN0aW9uc0h0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjc3NDb25zdGFudHMuUk9VVEVSX0lOU1RSVUNUSU9OU19JVEVNX0RJUkVDVElPTl9ESVNUQU5DRSArICdcIj4nO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSByb3V0ZVJlc3BvbnNlLnJvdXRlc1tyb3V0ZU51bWJlcl0uc2VnbWVudHNbMF0uc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IHRoaXMudG9IdW1hbkRpc3RhbmNlKGluc3RyLmRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSBcIjwvdGQ+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICByb3V0ZXJJbnN0cnVjdGlvbnNIdG1sICs9IFwiPC90cj5cIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb25zSHRtbCArPSAnPC90YWJsZT4nO1xuXG4gICAgICAgICAgcm91dGVySW5zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gcm91dGVySW5zdHJ1Y3Rpb25zSHRtbDtcblxuICAgICAgICAgIHNlbGYucm91dGVySW5zdHJ1Y3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJJbnN0cnVjdGlvbik7XG5cbiAgICAgICAgICB0aGlzLmFkanVzdEluc3RydWN0aW9uTWFwSW50ZXJhY3Rpb24oKTtcblxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhZGp1c3RJbnN0cnVjdGlvbk1hcEludGVyYWN0aW9uOiBmdW5jdGlvbiAocm91dGVySW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICBmbkl0ZW1DbGljayxcbiAgICAgICAgICBmbkl0ZW1PdmVyLFxuICAgICAgICAgIGZuSXRlbU91dDtcblxuICAgICAgZm5JdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgIGlmIChzZWxmLnJvdXRpbmdXYXlTb3VyY2UgJiYgc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKCkgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMCcgKSB7XG4gICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gc2VsZi5yb3V0aW5nV2F5U291cmNlLmdldEZlYXR1cmVzKClbMF07XG4gICAgICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvb3JkaW5hdGVzID0gZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKClbZWxlbWVudC5kYXRhKCdwb3MnKV07XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEhpbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChjdXJyZW50Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIoY3VycmVudENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihzZWxmLnJvdXRpbmdXYXlTb3VyY2UgJiYgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA+PSAnMScpe1xuICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICAgIHZhciBjb29yZExvbkxhdCA9IGVsZW1lbnQuZGF0YSgncG9zJyk7XG4gICAgICAgICAgICAgIHZhciBzdHJpbmdsb25sYXQgPSBjb29yZExvbkxhdC5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgICAgICAgc3RyaW5nbG9ubGF0WzFdID0gcGFyc2VGbG9hdChzdHJpbmdsb25sYXRbMV0pO1xuICAgICAgICAgICAgICB2YXIgbmV3Q29vcmQgPSBvbC5wcm9qLmZyb21Mb25MYXQoc3RyaW5nbG9ubGF0KTtcbiAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChuZXdDb29yZClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5hZGRGZWF0dXJlKGN1cnJlbnRIaW50RmVhdHVyZSk7XG4gICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuc2V0Q2VudGVyKG5ld0Nvb3JkKTtcbiAgICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmbkl0ZW1PdmVyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHNlbGYucm91dGluZ1dheVNvdXJjZSAmJiBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9hcGlfc2VsZWN0aW9uID09ICcwJykge1xuICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBzZWxmLnJvdXRpbmdXYXlTb3VyY2UuZ2V0RmVhdHVyZXMoKVswXTtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SGludEZlYXR1cmUgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5OiBuZXcgb2wuZ2VvbS5Qb2ludChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKVtlbGVtZW50LmRhdGEoJ3BvcycpXSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmFkZEZlYXR1cmUoY3VycmVudEhpbnRGZWF0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5yb3V0aW5nV2F5U291cmNlICYmIHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPj0gJzEnKSB7XG4gICAgICAgICAgICB2YXIgZmVhdHVyZSA9IHNlbGYucm91dGluZ1dheVNvdXJjZS5nZXRGZWF0dXJlcygpWzBdO1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkTG9uTGF0ID0gZWxlbWVudC5kYXRhKCdwb3MnKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nbG9ubGF0ID0gY29vcmRMb25MYXQuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIHN0cmluZ2xvbmxhdFswXSA9IHBhcnNlRmxvYXQoc3RyaW5nbG9ubGF0WzBdKTtcbiAgICAgICAgICAgICAgICBzdHJpbmdsb25sYXRbMV0gPSBwYXJzZUZsb2F0KHN0cmluZ2xvbmxhdFsxXSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0Nvb3JkID0gb2wucHJvai5mcm9tTG9uTGF0KHN0cmluZ2xvbmxhdCk7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIaW50RmVhdHVyZSA9IG5ldyBvbC5GZWF0dXJlKHtcbiAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IG5ldyBvbC5nZW9tLlBvaW50KG5ld0Nvb3JkKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGluZ0hpbnRTb3VyY2UuYWRkRmVhdHVyZShjdXJyZW50SGludEZlYXR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZuSXRlbU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5yb3V0aW5nSGludFNvdXJjZS5jbGVhcigpO1xuICAgICAgfTtcblxuXG4gICAgICAkKCdbZGF0YS1wb3NdJywgcm91dGVySW5zdHJ1Y3Rpb24pLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG5cbiAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuICAgICAgICAkZWxlbWVudC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm5JdGVtQ2xpY2soJGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZWxlbWVudC5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbkl0ZW1PdmVyKCRlbGVtZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm5JdGVtT3V0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2xlYXJJbnB1dDogZnVuY3Rpb24gKCRpbnB1dCkge1xuXG4gICAgICAkaW5wdXQudmFsKCcnKTtcbiAgICAgICRpbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgIHRoaXMucm91dGluZ1dheVNvdXJjZS5jbGVhcigpO1xuICAgICAgdGhpcy5yb3V0aW5nQWx0V2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdIaW50U291cmNlLmNsZWFyKCk7XG5cblxuICAgICAgJCh0aGlzLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpLmVtcHR5KCk7XG4gICAgICB0aGlzLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfSxcbiAgICBjbGVhck92ZXI6IGZ1bmN0aW9uICgkaW5wdXQsIGluZGV4KXtcbiAgICAgICAgaWYodGhpcy5vdmVyVmFsdWUpe1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub3ZlclZhbHVlW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRidXR0b25PdmVyLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTtcbiAgICAgICAgJCh0aGlzLnJvdXRlckluc3RydWN0aW9uc1dyYXBwZXIpLmVtcHR5KCk7XG4gICAgICAgIHRoaXMucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtUmV2ZXJzZVNlYXJjaDogZnVuY3Rpb24gKCRpbnB1dCwgdmFsdWUpIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgIHVybDtcblxuICAgICAgdXJsID0gdGhpcy5nZW9SZXZlcnNlU2VhcmNoQXBpICsgJz9mb3JtYXQ9anNvbiZsYXQ9JyArIHZhbHVlWzFdICsgJyZsb249JyArIHZhbHVlWzBdO1xuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAndXJsJzogdXJsfSlcbiAgICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLmNpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5hZGRyZXNzLmNpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnJvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJywgJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5hZGRyZXNzLnRvd247XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnJvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJywgJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5hZGRyZXNzLnJvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcgJyArIHJlc3BvbnNlLmFkZHJlc3MuaG91c2VfbnVtYmVyICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXNwb25zZS5hZGRyZXNzLnJvYWQgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzcG9uc2UuZGlzcGxheV9uYW1lO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgkaW5wdXQuYXR0cignbmFtZScpID09PSBcInJvdXRpbmdGcm9tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLiRyb3V0ZXJGcm9tQ2xlYXIuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkaW5wdXQuYXR0cignbmFtZScpID09PSBcInJvdXRpbmdUb1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5zaG93KCk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICB9KVxuICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuc3Bpbm5lci5oaWRlKCk7XG4gICAgICB9KTtcblxuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBmdW5jdGlvbiAoJGlucHV0LCB2YWx1ZSkge1xuXG4gICAgICB2YXIgbWFwLFxuICAgICAgICAgIGJvdW5kcyxcbiAgICAgICAgICB2aWV3Ym94LFxuICAgICAgICAgIHNlbGYsXG4gICAgICAgICAgdXJsO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgaWYgKCRpbnB1dC52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAvL3NlbGYuY2xlYXJJbnB1dCgkaW5wdXQpO1xuICAgICAgICBkZWxldGUgc2VsZlt2YWx1ZV07XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuXG4gICAgICBtYXAgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXA7XG4gICAgICBib3VuZHMgPSBtYXAuZ2V0VmlldygpLmNhbGN1bGF0ZUV4dGVudChtYXAuZ2V0U2l6ZSgpKTtcbiAgICAgIGJvdW5kcyA9IG9sLnByb2oudHJhbnNmb3JtRXh0ZW50KGJvdW5kcywgbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCksICdFUFNHOjQzMjYnKTtcbiAgICAgIHZpZXdib3ggPSAnJnZpZXdib3g9JyArIGJvdW5kc1swXSArICcsJyArIGJvdW5kc1sxXSArICcsJyArIGJvdW5kc1syXSArICcsJyArIGJvdW5kc1szXTtcblxuICAgICAgdXJsID0gc2VsZi5nZW9TZWFyY2hBcGkgKyAnP2Zvcm1hdD1qc29uJmxpbWl0PTEmcT0nICsgZW5jb2RlVVJJKCRpbnB1dC52YWwoKSkgKyB2aWV3Ym94O1xuXG4gICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICd1cmwnOiB1cmxcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpZih2YWx1ZSA9PT1cIm92ZXJWYWx1ZVwiKXtcbiAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5vdmVyVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLm92ZXJWYWx1ZT17fTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNlbGYub3ZlclZhbHVlW3NlbGYuaW5kZXhdPW5ldyBvbC5nZW9tLlBvaW50KFtwYXJzZUZsb2F0KHJlc3BvbnNlWzBdLmxvbiksIHBhcnNlRmxvYXQocmVzcG9uc2VbMF0ubGF0KV0pO1xuICAgICAgICAgICAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIHNlbGZbdmFsdWVdID0gbmV3IG9sLmdlb20uUG9pbnQoXG4gICAgICAgICAgICAgICAgICAgICAgW3BhcnNlRmxvYXQocmVzcG9uc2VbMF0ubG9uKSwgcGFyc2VGbG9hdChyZXNwb25zZVswXS5sYXQpXVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsZXJ0KGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUxFUlRfQUREUkVTUyk7XG4gICAgICAgICAgICAgIHNlbGYuY2xlYXJJbnB1dCgkaW5wdXQpO1xuICAgICAgICAgICAgICBkZWxldGUgc2VsZlt2YWx1ZV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICB9KVxuICAgICAgLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhbGVydChsYW5nQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FMRVJUX0dFT0NPRElORyk7XG4gICAgICB9KTtcblxuXG5cbiAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgfSxcblxuICAgIHRvSHVtYW5EaXN0YW5jZTogZnVuY3Rpb24gKGRpc3RhbmNlSW5NZXRlcnMpIHtcblxuICAgICAgLy8gY29waWVkIGZyb20gb2xkIHNvdXJjZXNcblxuICAgICAgdmFyIGRpc3RhbmNlLFxuICAgICAgICAgIGh1bWFuRGlzdGFuY2U7XG5cbiAgICAgIGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbk1ldGVycywgMTApO1xuICAgICAgZGlzdGFuY2UgPSBkaXN0YW5jZSAvIDEwMDA7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA+PSAxMDApIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMCkgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDEwKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgJyZuYnNwOycgKyAna20nO1xuICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAwLjEpIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMikgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gKGRpc3RhbmNlICogMTAwMCkudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ20nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVtYW5EaXN0YW5jZTtcbiAgICB9LFxuXG4gICAgdG9IdW1hblRpbWU6IGZ1bmN0aW9uICh0aW1lSW5TZWNvbmRzKSB7XG5cbiAgICAgIC8vIGNvcGllZCBmcm9tIG9sZCBzb3VyY2VzXG5cbiAgICAgIHZhciBzZWNvbmRzLFxuICAgICAgICAgIG1pbnV0ZXMsXG4gICAgICAgICAgaG91cnMsXG4gICAgICAgICAgaHVtYW5UaW1lO1xuXG4gICAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZUluU2Vjb25kcywgMTApO1xuICAgICAgbWludXRlcyA9IHBhcnNlSW50KHNlY29uZHMgLyA2MCwgMTApO1xuICAgICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgICAgaG91cnMgPSBwYXJzZUludChtaW51dGVzIC8gNjAsIDEwKTtcbiAgICAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICAgIGlmIChob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKSB7XG4gICAgICAgIGh1bWFuVGltZSA9IHNlY29uZHMgKyAnJm5ic3A7JyArICdzJztcbiAgICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodW1hblRpbWUgPSBob3VycyArICcmbmJzcDsnICsgJ2gnICsgJyZuYnNwOycgKyBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh1bWFuVGltZTtcbiAgICB9XG5cbiAgfSk7XG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFJvdXRlciA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXBvcnRzaWRlLXJvdXRlci5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vYzRnLW1hcHMtY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gXCIuL2M0Zy1tYXBzLW1pc2Mtc3Bpbm5lclwiO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHNpZGVib2FyZCBzdHJ1Y3R1cmVzLiBQcm92aWRlcyBzdGFuZGFyZCBjb25maWd1cmF0aW9ucyB3aGljaCBhcmUgZXF1YWwgZm9yIGVhY2ggc2lkZWJvYXJkIGVsZW1lbnQuXG4gKi9cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICpcbiAgICogQGV4dGVuZHMge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICogQHBhcmFtICAge29iamVjdH0gICAgICAgICAgICAgIG9wdGlvbnMgIG1pc2MgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBleHREaXY6IGZhbHNlLFxuICAgICAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICAgICAgbWFwQ29udHJvbGxlcjogdW5kZWZpbmVkLFxuICAgICAgbmFtZTogJ3NpZGVib2FyZCcsXG4gICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICAvL2FjdGl2ZSBJZGVudGlmaWVyICh3aGljaCBzaWRlIGlzIHRoaXMgZWxlbWVudCBvbj8pXG4gICAgLy9jc3NuYW1lIG5lZWRlZCB0byBzZXQgdGhlIGNzcyBjbGFzcyBjb3JyZWN0bHlcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB0aGlzLmlkZW50aWZpZXIgPSAnUG9ydHNpZGUnO1xuICAgICAgICB0aGlzLmNzc25hbWUgPSAncG9ydHNpZGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdGhpcy5pZGVudGlmaWVyID0gJ1N0YXJib2FyZCc7XG4gICAgICAgIHRoaXMuY3NzbmFtZSA9ICdzdGFyYm9hcmQnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLy90aGlzLmNzc25hbWUgPSB0aGlzLmlkZW50aWZpZXIuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB0aGlzLmlkZW50aWZpZXIuc2xpY2UoMSk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucy50aXBMYWJlbCA9IHRoaXMub3B0aW9ucy50aXBMYWJlbCB8fCB0aGlzLm9wdGlvbnMuaGVhZGxpbmUgfHwgbGFuZ0NvbnN0YW50cy5DVFJMX1NJREVCT0FSRDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3Bpbm5lciA9IHVuZGVmaW5lZDtcbiAgICAvLyBtYWluc3RydWN0dXJlIGVsZW1lbnRzXG4gICAgdGhpcy53cmFwcGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGl0bGVCYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5oZWFkbGluZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRvcFRvb2xiYXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50Q29udGFpbmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuYm90dG9tVG9vbGJhciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXR1c0JhciA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLnZpZXdUcmlnZ2VyQmFyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudmlld3MgPSBbXTtcbiAgICB0aGlzLmFjdGl2ZVZpZXcgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wYXVzZWRWaWV3ID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jcmVhdGUgJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICBvbC5jb250cm9sLkNvbnRyb2wuY2FsbCh0aGlzLCB7XG4gICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgdGFyZ2V0OiB0aGlzLm9wdGlvbnMudGFyZ2V0IHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBvbC5pbmhlcml0cyhjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZCwgb2wuY29udHJvbC5Db250cm9sKTtcblxuICAvLyBBZGQgbWV0aG9kc1xuICBjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlNpZGVib2FyZC5wcm90b3R5cGUsIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGJhc2ljIGh0bWwtZWxlbWVudHMgZm9yIHRoZSBzaWRlYm9hcmRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtib29sZWFufSAgJ3RydWUnIG9uIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICAgIGluaXRDbGFzcyxcbiAgICAgICAgICB0aXRsZUJ1dHRvbkJhcixcbiAgICAgICAgICBjbG9zZUJ1dHRvbixcbiAgICAgICAgICBjYXBpdGFsaXplZE5hbWUsXG4gICAgICAgICAgaGlkZUJ1dHRvbixcbiAgICAgICAgICBjYWNoaW5nO1xuXG4gICAgICBjYWNoaW5nID0gdGhpcy5vcHRpb25zLmNhY2hpbmc7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgc2VsZiA9IHRoaXM7XG5cblxuICAgICAgLy8gRG8gbm90IGhpZGUgd2hlbiBpdCBpcyBpbml0aWFsaXplZCBvcGVuLCBvciBpbiBhbiBleHRlcm5hbCBkaXZcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIGluaXRDbGFzcyA9ICcgJyArIGNzc0NvbnN0YW50cy5PUEVOO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzEnKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdENsYXNzID0gJyAnICsgY3NzQ29uc3RhbnRzLkNMT1NFO1xuICAgICAgICAvLyBpZiAoY2FjaGluZykge1xuICAgICAgICAvLyAgICAgdXRpbHMuc3RvcmVWYWx1ZSh0aGlzLm9wdGlvbnMubmFtZSwgJzAnKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICQodGhpcy5idXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIC8vIGxvb3NlIGZvY3VzLCBvdGhlcndpc2UgaXQgbG9va3MgbWVzc3lcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gW25vdGVdIFwidGhpcy5ibHVyKClcIiBkb2VzIG5vdCB3b3JrIGluIElFLWZ1bGxzY3JlZW4tbW9kZVxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUubmFtZSArICc6ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjYXBpdGFsaXplZE5hbWUgPT0gXCJSb3V0ZXJcIiB8fCBjYXBpdGFsaXplZE5hbWUgPT0gXCJNZWFzdXJlXCIgfHwgY2FwaXRhbGl6ZWROYW1lID09IFwiRWRpdG9yXCIpe1xuICAgICAgICAgICAgICBzZWxmLnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgc2VsZi50b2dnbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi50aXRsZSA9IHRoaXMub3B0aW9ucy50aXBMYWJlbDtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKCdjNGctJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJyAnICsgJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jb250YWluZXInICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArIGluaXRDbGFzcyk7XG4gICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoJ2M0Zy0nICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWNvbnRyb2wnICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRSArICcgJyArIGNzc0NvbnN0YW50cy5PTF9DT05UUk9MICsgaW5pdENsYXNzKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgZGltZW5zaW9uc1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgLy90aGlzLmNvbnRhaW5lci5zdHlsZS5taW5XaWR0aCA9ICcyNTBweCc7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGVbdGhpcy5vcHRpb25zLmRpcmVjdGlvbl0gPSAnLTE5MjBweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xMDAlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vdGhpcy5jb250YWluZXIuc3R5bGUubWluV2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlW3RoaXMub3B0aW9ucy5kaXJlY3Rpb25dID0gJy0xOTIwcHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZVt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uXSA9ICctMTAwJSc7XG4gICAgICB9XG5cbiAgICAgIC8vIFBsYWNlIGNvbnRhaW5lclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5vcHRpb25zLmV4dERpdikuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgICAgICAvLyAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPSB0aGlzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICQoJyMnICsgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLmdldFRhcmdldCgpICsgJyAuJyArIGNzc0NvbnN0YW50cy5PTF9PVkVSTEFZQ09OVEFJTkVSX1NFKS5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLiRvdmVybGF5Y29udGFpbmVyX3N0b3BldmVudC5hcHBlbmQodGhpcy5jb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGNvbnRlbnQtYXJlYVxuICAgICAgLy9cbiAgICAgIC8vIFdyYXBwZXJcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctd3JhcHBlcic7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgLy8gVGl0bGViYXJcbiAgICAgIHRoaXMudGl0bGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudGl0bGVCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy10aXRsZWJhcic7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50aXRsZUJhcik7XG5cbiAgICAgIC8vIFRyaWdnZXJiYXJcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudmlld1RyaWdnZXJCYXIuY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy12aWV3dHJpZ2dlcmJhcic7XG5cbiAgICAgIC8vIFRvcC1Ub29sYmFyXG4gICAgICB0aGlzLnRvcFRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctdG9wLXRvb2xiYXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIENvbnRlbnQtQ29udGFpbmVyXG4gICAgICB0aGlzLmNvbnRlbnRDb250YWluZXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICBjbGFzc05hbWU6ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctY29udGVudC1jb250YWluZXInLFxuICAgICAgICB0YXJnZXQ6IHRoaXMud3JhcHBlclxuICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBjb250ZW50IGhlYWRsaW5lXG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5jb250ZW50SGVhZGxpbmUuY2xhc3NOYW1lID0gJ2NvbnRlbnRIZWFkbGluZSc7XG4gICAgICB0aGlzLmNvbnRlbnRIZWFkbGluZS5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRoaXMuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRIZWFkbGluZSk7XG5cbiAgICAgIC8vIEJvdHRvbS1Ub29sYmFyXG4gICAgICB0aGlzLmJvdHRvbVRvb2xiYXIgPSB0aGlzLmFkZFNlY3Rpb24oe1xuICAgICAgICAgIGNsYXNzTmFtZTogJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1ib3R0b20tdG9vbGJhciBjNGctY2xvc2UnLFxuICAgICAgICAgIHRhcmdldDogdGhpcy53cmFwcGVyXG4gICAgICB9KTtcblxuICAgICAgIC8vIFN0YXR1c2JhclxuICAgICAgdGhpcy5zdGF0dXNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctc3RhdHVzYmFyIGM0Zy1jbG9zZSc7XG4gICAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5zdGF0dXNCYXIpO1xuXG4gICAgICAvLyBBZGQgc3Bpbm5lclxuICAgICAgdGhpcy5zcGlubmVyID0gbmV3IFNwaW5uZXIoe1xuICAgICAgICB0YXJnZXQ6IHRoaXMuY29udGVudENvbnRhaW5lcixcbiAgICAgICAgY2xhc3NOYW1lOiBjc3NDb25zdGFudHMuTEFSR0VcbiAgICAgIH0pO1xuXG4gICAgICAvLyBGaWxsIHRpdGxlYmFyXG4gICAgICAvL1xuICAgICAgLy8gSGVhZGxpbmVcbiAgICAgIHRoaXMuaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0aGlzLmhlYWRsaW5lLmNsYXNzTmFtZSA9ICdjNGctJyArIHRoaXMuY3NzbmFtZSArICctaGVhZGxpbmUnO1xuICAgICAgdGhpcy5oZWFkbGluZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaGVhZGxpbmU7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRoaXMuaGVhZGxpbmUpO1xuICAgICAgLy8gQnV0dG9uYmFyXG4gICAgICB0aXRsZUJ1dHRvbkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGl0bGVCdXR0b25CYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0wgKyAnICcgKyAnYzRnLScgKyB0aGlzLmNzc25hbWUgKyAnLWJ1dHRvbmJhcic7XG4gICAgICB0aGlzLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQnV0dG9uQmFyKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAvLyBIaWRlYnV0dG9uXG4gICAgICAgIGhpZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaGlkZUJ1dHRvbi5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUE9SVFNJREVfSElERTtcbiAgICAgICAgaGlkZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuSElERTtcbiAgICAgICAgJChoaWRlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xvc2UodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGl0bGVCdXR0b25CYXIuYXBwZW5kQ2hpbGQoaGlkZUJ1dHRvbik7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb3NlYnV0dG9uXG4gICAgICBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2M0Zy0nICsgdGhpcy5jc3NuYW1lICsgJy1jbG9zZSc7XG4gICAgICBjbG9zZUJ1dHRvbi50aXRsZSA9IGxhbmdDb25zdGFudHMuQ0xPU0U7XG4gICAgICAkKGNsb3NlQnV0dG9uKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2VsZi5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRpdGxlQnV0dG9uQmFyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgLy9BZGQgc3Bpbm5lciBmb3IgbGVmdCBzaWRlZCBzaWRlYm9hcmQgZWxlbWVudHNcbiAgICAgIHRoaXMuc3Bpbm5lciA9IG5ldyBTcGlubmVyKHtcbiAgICAgICAgdGFyZ2V0OiB0aGlzLmNvbnRlbnRDb250YWluZXIsXG4gICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLkxBUkdFXG4gICAgICB9KTtcblxuICAgICAgLy8gSGFuZGxlIGV4dGVybmFsIERJViBhbmQgZGVmYXVsdCBzdGF0ZVxuICAgICAgLy8gY2F0Y2ggdG91Y2ggZXZlbnRzIGFuZCBzdG9wIHRoZWlyIHByb3BhZ2F0aW9uXG4gICAgICAvLyBvdGhlcndpc2UgdG91Y2gtc2Nyb2xsaW5nIHdpbGwgYmUgc3RvcHBlZCBieSBvbDNcbiAgICAgICQodGhpcy5jb250YWluZXIpLm9uKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBCaW5kIHRoZSB1cGRhdGUgbWV0aG9kIHRvIHRoZSBtYXAtcmVzaXplIGV2ZW50XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAub24oJ2NoYW5nZTpzaXplJywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgICAvLyBTaG93IG9wZW4gaWYgZGVzaXJlZFxuICAgICAgaWYgKCh0aGlzLm9wdGlvbnMuZGVmYXVsdE9wZW4pIHx8ICh0aGlzLm9wdGlvbnMuY2FjaGluZyAmJiAodXRpbHMuZ2V0VmFsdWUodGhpcy5vcHRpb25zLm5hbWUpID09ICcxJykpKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCAvLyBlbmQgb2YgXCJjcmVhdGVcIlxuXG4gICAgLyoqXG4gICAgICogICBVcGRhdGUgdGhlIHNpZGVib2FyZHMgaHRtbC1lbGVtZW50c1xuICAgICAqICAgcmVzaXplcyB0aGUgY29udGVudC1jb250YWluZXJcbiAgICAgKiAgIGFuZCB0aGUgdG9wLXRvb2xiYXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2V2ZW50LW9iamVjdH0gIG9wdF9ldmVudCAgKm9wdGlvbmFsKiAgSnVzdCBuZWVkZWQgYnkgdGhlIG9sLWJpbmQtbWV0aG9kLFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IG5vdCB1c2VkIGluIHRoZSBmdW5jdGlvblxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9wdF9ldmVudCkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyT3V0ZXJIZWlnaHQsXG4gICAgICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGg7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvKlxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubmFtZSkge1xuICAgICAgICAgIGNhcGl0YWxpemVkTmFtZSA9IHV0aWxzLmNhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLm9wdGlvbnMubmFtZSk7XG4gICAgICB9Ki9cblxuICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0ID0gJCh0aGlzLndyYXBwZXIpLmhlaWdodCgpIC0gKCQodGhpcy50aXRsZUJhcikub3V0ZXJIZWlnaHQodHJ1ZSkgKyAkKHRoaXMuc3RhdHVzQmFyKS5vdXRlckhlaWdodCh0cnVlKSk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gJiYgdGhpcy5vcHRpb25zLmRpcmVjdGlvbiAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICBpZiAodGhpcyAhPT0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG9wLVRvb2xiYXJcbiAgICAgIGlmICh0aGlzLnRvcFRvb2xiYXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BUb29sYmFyLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLnRvcFRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgIHRoaXMudG9wVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgIGNvbnRlbnRDb250YWluZXJPdXRlckhlaWdodCAtPSAkKHRoaXMudG9wVG9vbGJhcikub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy50b3BUb29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBCb3R0b20tdG9vbGJhclxuICAgICAgaWYgKHRoaXMuYm90dG9tVG9vbGJhcikge1xuICAgICAgICAgIGlmICh0aGlzLmJvdHRvbVRvb2xiYXIuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuYm90dG9tVG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgdGhpcy5ib3R0b21Ub29sYmFyLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgICAgY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0IC09ICQodGhpcy5ib3R0b21Ub29sYmFyKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmJvdHRvbVRvb2xiYXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnRlbnQtY29udGFpbmVyXG4gICAgICAkKHRoaXMuY29udGVudENvbnRhaW5lcikub3V0ZXJIZWlnaHQoY29udGVudENvbnRhaW5lck91dGVySGVpZ2h0KTtcblxuICAgICAgLy8gQ29ycmVjdCB3aWR0aFxuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9PT0gdGhpcykge1xuICAgICAgICAgICAgICAvL3RoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgICBjb250YWluZXJPZmZzZXRXaWR0aCA9IHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlclt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHNlbGYub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy9vbmx5IG1vdmUgdGhlIHRvZ2dsZSBidXR0b24gb24gc3RhcmJvYXJkIGVsZW1lbnRzXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIGNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgLy8gZW5kIG9mIFwidXBkYXRlXCJcblxuICAgIC8qKlxuICAgICAqIE9wZW5zIHRoaXMgc2lkZWJvYXJkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICAgICpvcHRpb25hbCogb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGluaXRpYWxpemUtZnVuY3Rpb24gaWYgaXQgZXhpc3RzXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAndHJ1ZScgYW4gc3VjY2Vzc1xuICAgICAqL1xuICAgIG9wZW46IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuICAgICAgdmFyIGNvbnRhaW5lck9mZnNldFdpZHRoLFxuICAgICAgICAgIHNlbGY7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBDYWxsIGluaXRpYWxpemUtZnVuY3Rpb25zLCBpZiBleGlzdGVudFxuICAgICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRoaXMuaW5pdChvcHRfb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2FsbCBwcmVPcGVuRnVuY3Rpb25zXG4gICAgICBpZiAodHlwZW9mIHRoaXMucHJlT3BlbkZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJlT3BlbkZ1bmN0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRhaW5lck9mZnNldFdpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0RGl2KSB7XG4gICAgICAgIC8vIE5vdCBhdmFpbGFibGUgb24gZXh0ZXJuYWwgZGl2c1xuICAgICAgICBjb25zb2xlLndhcm4oJ1lvdSBjYW5ub3QgdXNlIHRoaXMgZnVuY3Rpb24gb24gZXh0ZXJuYWwgZW1iZWRkZWQgc2lkZWJvYXJkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vY2xvc2Ugb3RoZXIgYWN0aXZlIHNpZGVib2FyZCBvbiB0aGlzIHNpZGVcbiAgICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXS5jbG9zZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzbGlkZSBvdGhlciBlbGVtZW50cyB3aGVuIG5vIG90aGVyIHNpZGVib2FyZCB3YXMgYWN0aXZlIG9uIHRoaXMgc2lkZVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW3RoaXMub3B0aW9ucy5kaXJlY3Rpb24gKyBcIlNsaWRlRWxlbWVudHNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moc2VsZi5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTikuY3NzKHRoaXMub3B0aW9ucy5kaXJlY3Rpb24sIDApO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5lbGVtZW50KS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5jc3ModGhpcy5vcHRpb25zLmRpcmVjdGlvbiwgY29udGFpbmVyT2Zmc2V0V2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IHRoaXMgYXMgYWN0aXZlIFNpZGVib2FyZFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlcltcImFjdGl2ZVwiICsgdGhpcy5pZGVudGlmaWVyXSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgYSB2aWV3IG5lZWRzIHRvIGJlIHJlYWN0aXZhdGVkXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkKHRoaXMuc3RhdHVzQmFyKS5oYXNDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpKSB7XG4gICAgICAgICAgJCh0aGlzLnN0YXR1c0JhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCh0aGlzLmJvdHRvbVRvb2xiYXIpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkpIHtcbiAgICAgICAgICAkKHRoaXMuYm90dG9tVG9vbGJhcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkNMT1NFKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuT1BFTik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzaG93IGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNhY2hpbmcpIHtcbiAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCBwb3N0T3BlbkZ1bmN0aW9uc1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucG9zdE9wZW5GdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucG9zdE9wZW5GdW5jdGlvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSwgLy8gZW5kIG9mIFwib3BlblwiXG5cbiAgICBpc09wZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gJiYgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gPT09IHRoaXMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhpcyBzaWRlYm9hcmQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtICAge2Jvb2xlYW59ICBvcHRfaGlkZSAgICAgICAgICAgICAgICpvcHRpb25hbCogQ2hvb3NlIGlmIHRoaXMgZnVuY3Rpb24gc2hvdWxkIHRyaWdnZXIgfHByZUhpZGVGdW5jdGlvbnxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGVhZCBvZiB8cHJlQ2xvc2VGdW5jdGlvbnwuIERlZmF1bHQgaXMgfGZhbHNlfC5cbiAgICAgKiBAcGFyYW0gICB7Ym9vbGVhbn0gIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQgICpvcHRpb25hbCogSW5kaWNhdGVzIGlmIGFub3RoZXIgc2lkZWJvYXJkIGVsZW1lbnQgd2lsbCBiZSBvcGVuZWQgaW5zdGVhZC5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyB8ZmFsc2V8LlxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgIHx0cnVlfCBvbiBzdWNjZXNzLlxuICAgICAqL1xuICAgIGNsb3NlOiBmdW5jdGlvbiAob3B0X2hpZGUsIG9wdF9vcGVuT3RoZXJTaWRlYm9hcmQpIHtcbiAgICAgIHZhciBjb250YWluZXJPZmZzZXRXaWR0aCxcbiAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgIGRpcmVjdGlvbiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247XG5cbiAgICAgIGlmIChvcHRfaGlkZSApIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZUhpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMucHJlSGlkZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5wcmVDbG9zZUZ1bmN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGFpbmVyT2Zmc2V0V2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHREaXYpIHtcbiAgICAgICAgLy8gTm90IGF2YWlsYWJsZSBvbiBleHRlcm5hbCBkaXZzXG4gICAgICAgIGNvbnNvbGUud2FybignWW91IGNhbm5vdCB1c2UgdGhpcyBmdW5jdGlvbiBvbiBleHRlcm5hbCBlbWJlZGRlZCBzaWRlYm9hcmQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbXCJhY3RpdmVcIiArIHRoaXMuaWRlbnRpZmllcl0gIT09IHRoaXMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoaXMgJyArIHRoaXMub3B0aW9ucy5uYW1lICsgJy1lbGVtZW50ICgnICsgdGhpcy5vcHRpb25zLm5hbWUgKyAnKSBpcyBhbHJlYWR5IGNsb3NlZC4nKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLk9QRU4pLmFkZENsYXNzKGNzc0NvbnN0YW50cy5DTE9TRSkuY3NzKGRpcmVjdGlvbiwgLWNvbnRhaW5lck9mZnNldFdpZHRoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5PUEVOKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQ0xPU0UpLmNzcyhkaXJlY3Rpb24sIDApO1xuXG4gICAgICAgIGlmICghb3B0X29wZW5PdGhlclNpZGVib2FyZCkge1xuICAgICAgICAgIC8vIHNsaWRlIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXJbZGlyZWN0aW9uICsgXCJTbGlkZUVsZW1lbnRzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKGRpcmVjdGlvbiwgMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoaWRlIGNvbnRhaW5lciB0byBmaXggcmVzaXppbmcgaXNzdWVcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIGNoZWNrIGlmIGEgdmlldyBuZWVkcyB0byBiZSBkZWFjdGl2YXRlZFxuICAgICAgICBpZiAodGhpcy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVWaWV3LmRlYWN0aXZhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWN0aXZlIFNpZGVib2FyZGVudHJ5XG4gICAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jYWNoaW5nKSB7XG4gICAgICAgICAgICB1dGlscy5zdG9yZVZhbHVlKHRoaXMub3B0aW9ucy5uYW1lLCAnMCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIGVuZCBvZiBcImNsb3NlXCJcblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSB0aGlzIHNpZGVib2FyZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3MuXG4gICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAob3B0X2hpZGUpIHtcbiAgICAgIHZhciBjYXBpdGFsaXplZE5hbWU7XG4gICAgICBjYXBpdGFsaXplZE5hbWUgPSB1dGlscy5jYXBpdGFsaXplRmlyc3RMZXR0ZXIodGhpcy5vcHRpb25zLm5hbWUpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyW1wiYWN0aXZlXCIgKyB0aGlzLmlkZW50aWZpZXJdID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlKG9wdF9oaWRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm9wZW4oKTtcbiAgICB9LCAvLyBlbmQgb2YgXCJ0b2dnbGVcIlxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGJ1dHRvbiB3aGljaCBjaGFyYWN0ZXJpc3RpY3MgYXJlIGRlZmluZWQgYnkgdGhlIG9wdGlvbnMgcGFyYW1ldGVyXG4gICAgICogVGhlc2Ugb3B0aW9ucyBpbmNsdWRlIGUuZy4gdGhlIHRhcmdldCBjb250YWluZXIgd2hlcmUgdGhlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIGFuZCB0aGUgY2xpY2sgYWN0aW9uIG9mIHRoZSBidXR0b25cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtvYmplY3R9ICBvcHRfb3B0aW9ucyAgVGhlIGJ1dHRvbiBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7W3R5cGVdfSAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1ha2VCdXR0b246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgICB2YXIgb3B0aW9ucyxcbiAgICAgICAgICBidXR0b247XG5cbiAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7XG4gICAgICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIHRpcExhYmVsOiB1bmRlZmluZWQsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkLFxuICAgICAgICBjbGlja0FjdGlvbjogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZSA9ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnYzRnLScgKyB0aGlzLm9wdGlvbnMubmFtZSArICctYnV0dG9uJyArIG9wdGlvbnMuY2xhc3NOYW1lO1xuICAgICAgaWYob3B0aW9ucy5pZCkge1xuICAgICAgICBidXR0b24uaWQgPSBvcHRpb25zLmlkO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMudGlwTGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGJ1dHRvbi50aXRsZSA9IG9wdGlvbnMudGlwTGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IG9wdGlvbnMubGFiZWw7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmxhYmVsID09PSAnb2JqZWN0Jykge1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQob3B0aW9ucy5sYWJlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jbGlja0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAkKGJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9ucy5jbGlja0FjdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMudGFyZ2V0KSB7XG4gICAgICAgICQob3B0aW9ucy50YXJnZXQpLmFwcGVuZChidXR0b24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0sIC8vIGVuZCBvZiBcIm1ha2VCdXR0b25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkU2VjdGlvbiBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdF9vcHRpb25zICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgYWRkU2VjdGlvbjogZnVuY3Rpb24gKG9wdF9vcHRpb25zKSB7XG5cbiAgICAgIHZhciBvcHRpb25zLFxuICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgdHlwZTogJ2RpdicsXG4gICAgICAgIGNsYXNzTmFtZTogJycsXG4gICAgICAgIHRhcmdldDogdW5kZWZpbmVkXG4gICAgICB9LCBvcHRfb3B0aW9ucyk7XG5cbiAgICAgIC8vIHRyeSB0byBjcmVhdGUgdGhlIG5ldyBzZWN0aW9uXG4gICAgICB0cnkge1xuICAgICAgICBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHRpb25zLnR5cGUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBjcmVhdGUgc2VjdGlvbi4gXCInICsgb3B0aW9ucy50eXBlICsgJyBpcyBub3QgYSB2YWxpZCBIVE1MLW5vZGUuJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZTtcblxuICAgICAgLy8gdHJ5IHRvIGFwcGVuZCB0aGUgc2VjdGlvbiB0byB0aGUgZ2l2ZW4gdGFyZ2V0XG4gICAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvcHRpb25zLnRhcmdldC5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24uZ2V0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgfHwgZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBzZWN0aW9uLnNldEVsZW1lbnQgPSBmdW5jdGlvbiAobmV3RWxlbWVudCkge1xuICAgICAgICBpZiAobmV3RWxlbWVudCAmJiB0eXBlb2YgbmV3RWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQgPT09IG5ld0VsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuXG4gICAgICAvLyBhZGQgdG8gc2VjdGlvbnMtYXJyYXlcbiAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sIC8vIGVuZCBvZiBcImFkZFNlY3Rpb25cIlxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbYWRkVmlldyBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge1t0eXBlXX0gIG9wdGlvbnMgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBhZGRWaWV3OiBmdW5jdGlvbiAob3B0aW9ucywgb3B0X3ZpZXdTY29wZSkge1xuXG4gICAgICB2YXIgc2VsZixcbiAgICAgICAgICB2aWV3U2NvcGUsXG4gICAgICAgICAgYWRkaXRpb25hbFRyaWdnZXJDbGFzcyxcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgIHZpZXc7XG5cbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgdmlld1Njb3BlID0gb3B0X3ZpZXdTY29wZSB8fCB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAvLyBuYW1lOiB1bmRlZmluZWQsXG4gICAgICAgIHRyaWdnZXJDb25maWc6IHVuZGVmaW5lZCwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IHtvcHRfdGFyZ2V0OiBbc3RyaW5nfGh0bWxPYmplY3RdLCBvcHRfY2xhc3NOYW1lOiBbc3RyaW5nXSwgb3B0X3RpcExhYmVsOiBbc3RyaW5nXX1cbiAgICAgICAgc2VjdGlvbkVsZW1lbnRzOiBbXSwgLy8gQFRPRE8gZG9rdSBmb3JtYXQ6IFt7c2VjdGlvbjogW3NlY3Rpb25PYmplY3RdLCBlbGVtZW50OiBbZWxlbWVudE9iamVjdF19XVxuICAgICAgICBpbml0RnVuY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYWN0aXZhdGVGdW5jdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IHVuZGVmaW5lZFxuICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Nhbm5vdCBhZGQgYSB2aWV3IHdpdGhvdXQgYSBuYW1lIChvZiB0eXBlIFwic3RyaW5nXCIpLicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZpZXcgPSB7fTtcblxuICAgICAgdmlldy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgdmlldy5wYXVzZWQgPSBmYWxzZTtcblxuICAgICAgdmlldy5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfb3BlblNpZGVib2FyZCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICBpZiAob3B0aW9ucy50cmlnZ2VyQ29uZmlnLndpdGhIZWFkbGluZSkge1xuICAgICAgICAgICAgc2VsZi5jb250ZW50SGVhZGxpbmUuaW5uZXJIVE1MID0gb3B0aW9ucy50cmlnZ2VyQ29uZmlnLnRpcExhYmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3BlbiBTaWRlYm9hcmQgaWYgY2xvc2VkXG4gICAgICAgIGlmIChvcHRfb3BlblNpZGVib2FyZCAmJiAhc2VsZi5pc09wZW4oKSkge1xuICAgICAgICAgIHNlbGYub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVhY3RpdmF0ZSBjdXJyZW50IGFjdGl2ZVZpZXcsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0eXBlb2Ygdmlld1Njb3BlLmFjdGl2ZVZpZXcgPT09ICdvYmplY3QnICYmIHZpZXdTY29wZS5hY3RpdmVWaWV3ICE9PSB2aWV3KSB7XG4gICAgICAgICAgdmlld1Njb3BlLmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdTY29wZS5hY3RpdmVWaWV3ID0gdmlldztcblxuICAgICAgICAvLyBIYW5kbGUgc3ViLXZpZXdzXG4gICAgICAgIGlmICh2aWV3LmFjdGl2ZVZpZXcpIHtcbiAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgaW5pdGlhbGl6ZS1mdW5jdGlvbnMsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICghdmlldy5pbml0aWFsaXplZCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5pbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZpZXcuaW5pdGlhbGl6ZWQgPSBvcHRpb25zLmluaXRGdW5jdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNwbGF5IGVsZW1lbnRzIGluIGdpdmVuIHNlY3Rpb25zXG4gICAgICAgIGlmIChvcHRpb25zLnNlY3Rpb25FbGVtZW50cyAmJiBvcHRpb25zLnNlY3Rpb25FbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdGlvbnMuc2VjdGlvbkVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNlY3Rpb25FbGVtZW50c1tpXS5zZWN0aW9uLnNldEVsZW1lbnQob3B0aW9ucy5zZWN0aW9uRWxlbWVudHNbaV0uZWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hhbmdlIHRyaWdnZXItc3RhdGUsIGlmIGV4aXN0ZW50XG4gICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBhY3RpdmF0ZSBmdW5jdGlvbiwgaWYgZXhpc3RlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG5cbiAgICAgIHZpZXcuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uIChvcHRfcGF1c2UpIHtcblxuICAgICAgICB2aWV3LnBhdXNlZCA9IG9wdF9wYXVzZSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIHZpZXdTY29wZS5hY3RpdmVWaWV3ID09PSAnb2JqZWN0JyAmJiB2aWV3U2NvcGUuYWN0aXZlVmlldyA9PT0gdmlldykge1xuICAgICAgICAgIGlmICh0cmlnZ2VyICYmICF2aWV3LnBhdXNlZCkge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5yZW1vdmVDbGFzcygnYzRnLWFjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBzdWItdmlld3NcbiAgICAgICAgICBpZiAodmlldy5hY3RpdmVWaWV3KSB7XG4gICAgICAgICAgICB2aWV3LmFjdGl2ZVZpZXcuZGVhY3RpdmF0ZSh2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ2FsbCBkZWFjdGl2YXRlIGZ1bmN0aW9uLCBpZiBleGlzdGVudFxuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWFjdGl2YXRlRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlYWN0aXZhdGVGdW5jdGlvbih2aWV3LnBhdXNlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy50cmlnZ2VyQ29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBvcHRpb25zLnRyaWdnZXJDb25maWcgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLnZpZXdUcmlnZ2VyQmFyLFxuICAgICAgICAgIHRpcExhYmVsOiBvcHRpb25zLm5hbWUsXG4gICAgICAgIH0sIG9wdGlvbnMudHJpZ2dlckNvbmZpZyk7XG5cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsaWNrQWN0aW9uID0gdmlldy5hY3RpdmF0ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMudHJpZ2dlckNvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyAnICsgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRpdGlvbmFsVHJpZ2dlckNsYXNzID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy50cmlnZ2VyQ29uZmlnLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgYWRkaXRpb25hbFRyaWdnZXJDbGFzcztcbiAgICAgICAgLy8gQFRPRE8gY2hlY2s6IHRyaWdnZXIgPSB0aGlzLm1ha2VCdXR0b24ob3B0aW9ucy50cmlnZ2VyQ29uZmlnKTtcbiAgICAgICAgdHJpZ2dlciA9IHRoaXMubWFrZUJ1dHRvbihvcHRpb25zLnRyaWdnZXJDb25maWcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZpZXdzLnB1c2godmlldyk7XG4gICAgICByZXR1cm4gdmlldztcbiAgICB9IC8vIGVuZCBvZiBcImFkZFZpZXdcIlxuXG4gIH0pOyAvLyBlbmQgb2YgXCJhZGQgbWV0aG9kc1wiXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFNpZGVib2FyZCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXNpZGVib2FyZC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMuY29udHJvbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbCB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogRGlzcGxheXMgdGhlIGN1cnJlbnQgem9vbWxldmVsIG9uIHRoZSBtYXAuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAZXh0ZW5kcyAge29sLmNvbnRyb2wuQ29udHJvbH1cbiAgICpcbiAgICogQHBhcmFtICAgIHtPYmplY3R9ICAgICAgICAgICAgICBvcHRfb3B0aW9ucyAgKm9wdGlvbmFsKiBjb250cm9sIG9wdGlvbnMuXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlpvb21sZXZlbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICB2YXIgc2VsZixcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgdXBkYXRlWm9vbWxldmVsO1xuXG4gICAgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMubWFwVmlldykge1xuICAgICAgY29uc29sZS53YXJuKCdab29tbGV2ZWwgY29udHJvbCBuZWVkcyB0byBrbm93IHRoZSBtYXAuJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHtcbiAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlpPT01fTEVWRUwsXG4gICAgICB1bmRlZmluZWRIVE1MOiAnJ1xuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpO1xuXG4gICAgdXBkYXRlWm9vbWxldmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBwYXJzZUludChvcHRpb25zLm1hcFZpZXcuZ2V0Wm9vbSgpKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5tYXBWaWV3Lm9uKCdjaGFuZ2U6cmVzb2x1dGlvbicsIHVwZGF0ZVpvb21sZXZlbCk7XG4gICAgb2wuY29udHJvbC5Db250cm9sLmNhbGwodGhpcywge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIHRhcmdldDogb3B0aW9ucy50YXJnZXRcbiAgICB9KTtcbiAgfTtcbiAgb2wuaW5oZXJpdHMoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwsIG9sLmNvbnRyb2wuQ29udHJvbCk7XG5cblxuICAvKlxuICAgKiBBZGQgbWV0aG9kc1xuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlID0gJC5leHRlbmQoYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWwucHJvdG90eXBlLCB7XG5cbiAgICAvLyBub3RoaW5nIHRvIGFkZCBoZXJlXG5cbiAgfSk7IC8vIGVuZCBvZiBcImFkZCBtZXRob2RzXCIgLS0tXG5cbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5leHBvcnQgdmFyIFpvb21sZXZlbCA9IHRoaXMuYzRnLm1hcHMuY29udHJvbC5ab29tbGV2ZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb250cm9sLXpvb21sZXZlbC5qcyIsIi8vIFwibmFtZXNwYWNlXCJcbnRoaXMuYzRnID0gdGhpcy5jNGcgfHwge307XG50aGlzLmM0Zy5tYXBzID0gdGhpcy5jNGcubWFwcyB8fCB7fTtcbnRoaXMuYzRnLm1hcHMubWlzYyA9IHRoaXMuYzRnLm1hcHMubWlzYyB8fCB7fTtcblxuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQFRPRE9cbiAgICogW1NwaW5uZXIgZGVzY3JpcHRpb25dXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIENvbnRyb2wgb3B0aW9ucy5cbiAgICovXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lciA9IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuXG4gICAgdmFyIG9wdGlvbnMsXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgc3Bpbm5lclNwYW47XG5cbiAgICBvcHRpb25zID0gb3B0X29wdGlvbnMgfHwge307XG5cbiAgICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgY2xhc3NOYW1lOiAnJyxcbiAgICAgIHRhcmdldDogJy4nICsgY3NzQ29uc3RhbnRzLk9MX1ZJRVdQT1JUXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAob3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgIG9wdGlvbnMuY2xhc3NOYW1lID0gJyAnICsgb3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5TUElOTkVSICsgb3B0aW9ucy5jbGFzc05hbWUgKyAnICcgKyBjc3NDb25zdGFudHMuSElERTtcbiAgICAkKG9wdGlvbnMudGFyZ2V0KS5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgIHNwaW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwaW5uZXJTcGFuLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5JQ09OICsgJyAnICsgY3NzQ29uc3RhbnRzLkFOSU1BVElPTl9TUElOO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChzcGlubmVyU3Bhbik7XG5cbiAgICB0aGlzLmFkZGl0aW9uYWxBY3RpdmF0aW9uQ291bnRlciA9IDA7XG5cbiAgfTtcblxuICAvLyBBZGQgbWV0aG9kcyB0byBzcGlubmVyXG4gIGM0Zy5tYXBzLm1pc2MuU3Bpbm5lci5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5taXNjLlNwaW5uZXIucHJvdG90eXBlLCB7XG5cbiAgICAvKipcbiAgICAgKiBAVE9ET1xuICAgICAqIFtzaG93IGRlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge1t0eXBlXX0gIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJCh0aGlzLmVsZW1lbnQpLmhhc0NsYXNzKGNzc0NvbnN0YW50cy5ISURFKSkge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgKz0gMTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQFRPRE9cbiAgICAgKiBbaGlkZSBkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtbdHlwZV19ICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCQodGhpcy5lbGVtZW50KS5oYXNDbGFzcyhjc3NDb25zdGFudHMuSElERSkpIHtcbiAgICAgICAgLy9jb25zb2xlLndhcm4oJ1NwaW5uZXIgaXMgYWxyZWFkeSBoaWRkZW4uJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsQWN0aXZhdGlvbkNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAkKHRoaXMuZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkhJREUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWRkaXRpb25hbEFjdGl2YXRpb25Db3VudGVyIC09IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgfSk7IC8vIEVuZCBvZiBcImFkZCBtZXRob2RzIHRvIHNwaW5uZXJcIlxuXG59KGpRdWVyeSwgdGhpcy5jNGcpKTtcblxuZXhwb3J0IHZhciBTcGlubmVyID0gdGhpcy5jNGcubWFwcy5taXNjLlNwaW5uZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1taXNjLXNwaW5uZXIuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG5cbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHtab29tbGV2ZWx9IGZyb20gXCIuL2M0Zy1tYXBzLWNvbnRyb2wtem9vbWxldmVsXCI7XG5cbihmdW5jdGlvbiAoJCwgYzRnKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogYzRnLU1hcHMgdXRpbGl0eSBmdW5jdGlvbnNcbiAgICovXG4gIGM0Zy5tYXBzLnV0aWxzID0gJC5leHRlbmQoYzRnLm1hcHMudXRpbHMsIHtcbiAgICAvKipcbiAgICAgKiAgQ29udmVydHMgdGhlIGZpcnN0IGxldHRlciBvZiBhIGdpdmVuIHN0cmluZyB0byB1cHBlcmNhc2UsIGxlYXZpbmcgdGhlIHJlbWFpbmluZyBzdHJpbmcgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogIEBwYXJhbSAgICB7c3RyaW5nfSAgICB0aGUgc3RyaW5nIHRvIGNhcGl0YWxpemVcbiAgICAgKlxuICAgICAqICBAcmV0dXJuICAge3N0cmluZ30gICAgdGhlIGNhcGl0YWxpemVkIHN0cmluZ1xuICAgICAqL1xuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcjogZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhbiB1bmlxdWUgaWQuXG4gICAgICpcbiAgICAgKiBUaGUgaWQgaXMgOSBjaGFyYWN0ZXJzIGxvbmcgYW5kIHByZWZpeGVkIHdpdGggYW4gdW5kZXJzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICBUaGUgZ2VuZXJhdGVkIGlkLlxuICAgICAqL1xuICAgIGdldFVuaXF1ZUlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSBzaG91bGQgYmUgdW5pcXVlIGJlY2F1c2Ugb2YgaXRzIHNlZWRpbmcgYWxnb3JpdGhtLlxuICAgICAgLy8gQ29udmVydCBpdCB0byBiYXNlIDM2IChudW1iZXJzICsgbGV0dGVycyksIGFuZCBncmFiIHRoZSBmaXJzdCA5IGNoYXJhY3RlcnNcbiAgICAgIC8vIGFmdGVyIHRoZSBkZWNpbWFsLlxuICAgICAgcmV0dXJuICdfJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRW5jb2RlIGlucHV0IHN0cmluZ3MgZm9yIEdlb0pTT04tT2JqZWN0cyBwcm9wZXJseSxcbiAgICAgKiBzbyB0aGV5IHdpbGwgbm90IGJyZWFrIHRoZSBDb2RlLlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXCAtPiBcXFxcO1xuICAgICAqICAgXCIgLT4gJyc7XG4gICAgICogICDDhCAtPiAmQXVtbDtcbiAgICAgKiAgIMOkIC0+ICZhdW1sO1xuICAgICAqICAgw5YgLT4gJk91bWw7XG4gICAgICogICDDtiAtPiAmb3VtbDtcbiAgICAgKiAgIMOcIC0+ICZVdW1sO1xuICAgICAqICAgw7wgLT4gJnV1bWw7XG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgaW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGVuY29kZUdlb0pzb25Qcm9wZXJ0eTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICB2YXIgb3V0cHV0O1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXC9nLCAnXFxcXFxcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcXCIvZywgJ1xcJ1xcJydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw4QvZywgJyZBdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw6QvZywgJyZhdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5YvZywgJyZPdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7YvZywgJyZvdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw5wvZywgJyZVdW1sOydcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvw7wvZywgJyZ1dW1sOydcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgLy8gZW5kIG9mIGVuY29kZUdlb0pzb25Qcm9wZXJ0eSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgaW5wdXQgc3RyaW5ncyBmb3IgR2VvSlNPTi1PYmplY3RzIHByb3Blcmx5LFxuICAgICAqIHNvIHRoZXkgd2lsbCBiZSBkaXNwbGF5ZWQgY29ycmVjdGx5LlxuICAgICAqIFRyYW5zZm9ybXM6XG4gICAgICogICBcXFxcICAgICAtPiBcXDtcbiAgICAgKiAgICcnICAgICAtPiBcIjtcbiAgICAgKiAgICZBdW1sOyAtPiDDhFxuICAgICAqICAgJmF1bWw7IC0+IMOkXG4gICAgICogICAmT3VtbDsgLT4gw5ZcbiAgICAgKiAgICZvdW1sOyAtPiDDtlxuICAgICAqICAgJlV1bWw7IC0+IMOcXG4gICAgICogICAmdXVtbDsgLT4gw7xcbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBpbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVjb2RlR2VvSnNvblByb3BlcnR5OiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIHZhciBvdXRwdXQ7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gaW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFxcXFxcXFwvZywgJ1xcXFwnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgL1xcJ1xcJy9nLCAnXFxcIidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJkF1bWw7L2csICfDhCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJmF1bWw7L2csICfDpCdcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJk91bWw7L2csICfDlidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJm91bWw7L2csICfDtidcbiAgICAgICkucmVwbGFjZShcbiAgICAgICAgICAvJlV1bWw7L2csICfDnDsnXG4gICAgICApLnJlcGxhY2UoXG4gICAgICAgICAgLyZ1dW1sOy9nLCAnw7wnXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiBkZWNvZGVHZW9Kc29uUHJvcGVydHkoKVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG9yIHJlcGxhY2UgYW4gVVJMLXBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgIHRoZSBnaXZlbiBwYXJhbWV0ZXIsIGBwYXJhbWAsXG4gICAgICogd2lsbCBiZSBhcHBsaWVkIGFzIFwiaGFzaC1wYXJhbWV0ZXJcIi5cbiAgICAgKiBlLmcuOlxuICAgICAqICAgaHR0cHM6Ly9teXVybC5kZTpwb3J0L3BhdGgvdG8vbWFwcyNwYXJhbVxuICAgICAqIE5vdGUsIHRoYXQgYWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIHdoZXJlYXMgZXhpc3RpbmcgXCJHRVQtcGFyYW1ldGVyc1wiIHN0YXkgdW50b3VjaGVkLlxuICAgICAqXG4gICAgICogSWYgYG9wdF9nZXRLZXlgIGlzIHNldCwgaXQgd2lsbCBiZSBhcHBsaWVkIGFzIFwiR0VULXBhcmFtZXRlclwiLlxuICAgICAqIGUuZy46XG4gICAgICogICBodHRwczovL215dXJsLmRlOnBvcnQvcGF0aC90by9tYXBzP29wdF9nZXRLZXk9cGFyYW1cbiAgICAgKiBJZiB0aGUga2V5IGRlc2NyaWJlZCBieSBgb3B0X2dldEtleWAgaXMgYWxyZWFkeSBleGlzdGluZywgaXRzIHZhbHVlIHdpbGwgYmUgb3ZlcnJpZGVuLFxuICAgICAqIG90aGVyd2lzZSB0aGUga2V5LXZhbHVlLXBhaXIgd2lsbCBiZSBhcHBlbmRlZCBhcHByb3ByaWF0bHkuXG4gICAgICogQWxyZWFkeSBleGlzdGluZyBcImhhc2gtcGFyYW1ldGVyc1wiIHdpbGwgc3RheSB1bnRvdWNoZWQuXG4gICAgICpcbiAgICAgKiBJZiBgb3B0X2V4ZWN1dGVgIGlzIGBmYWxzZWAgb3IgYHVuZGVmaW5lZGAsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgbmV3IGxpbmsgYXMgYHN0cmluZ2AsXG4gICAgICogb3RoZXJ3aXNlIHRoZSBcImhyZWYvbG9jYXRpb25cIiB3aWxsIGJlIGNoYW5nZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIsIHdoaWNoIGNhbiBjYXVzZSBhIHBhZ2VyZWxvYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBwYXJhbSAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufHN0cmluZ30gIG9wdF9nZXRLZXkgICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqIEBwYXJhbSAge3VuZGVmaW5lZHxib29sZWFufSAgICAgICAgIG9wdF9leGVjdXRlICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIHNldFVybFBhcmFtOiBmdW5jdGlvbiAocGFyYW0sIG9wdF9nZXRLZXksIG9wdF9leGVjdXRlKSB7XG4gICAgICB2YXIgbGluayxcbiAgICAgICAgICBzZWFyY2hQYXJhbSxcbiAgICAgICAgICBwYXJhbVJlcGxhY2VkLFxuICAgICAgICAgIGk7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxpbmsgPSBsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaWYgKCFvcHRfZ2V0S2V5KSB7XG4gICAgICAgIC8vIHVzZSBoYXNoLXBhcmFtZXRlclxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gcGFyYW07XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGluayArPSBsb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXJhbTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBHRVQtcGFyYW1ldGVyXG4gICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgICAgICAvLyB0aGVyZSBhcmUgYWxyZWFkeSBzZWFyY2gtcGFyYW1ldGVyc1xuICAgICAgICAgIHBhcmFtUmVwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICBvcHRfZ2V0S2V5ID0gb3B0X2dldEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIC8vIHJlcGxhY2UgcGFyYW1ldGVyIGlmIGFscmVhZHkgZXhpc3RlbnRcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFxuICAgICAgICAgICAgICAvKFtePVxcP1xcJl0rKT0oW14mXSspL2dpLFxuICAgICAgICAgICAgICBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gb3B0X2dldEtleSkge1xuICAgICAgICAgICAgICAgICAgcGFyYW1SZXBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gb3RoZXJ3aXNlIGFwcGVuZCBhcyBuZXcgcGFyYW1ldGVyXG4gICAgICAgICAgaWYgKCFwYXJhbVJlcGxhY2VkKSB7XG4gICAgICAgICAgICBzZWFyY2hQYXJhbSArPSAnJicgKyBvcHRfZ2V0S2V5ICsgJz0nICsgcGFyYW07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCBiZSB0aGUgb25seSBzZWFyY2gtcGFyYW1ldGVyIGluIHRoZSBVUkxcbiAgICAgICAgICBzZWFyY2hQYXJhbSA9ICc/JyArIG9wdF9nZXRLZXkgKyAnPScgKyBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0X2V4ZWN1dGUpIHtcbiAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggPSBzZWFyY2hQYXJhbTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rICs9IHNlYXJjaFBhcmFtICsgbG9jYXRpb24uaGFzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpbms7XG4gICAgfSwgLy8gZW5kIG9mIHNldFVybFBhcmFtKClcblxuICAgIC8qKlxuICAgICAqIEdldCBzZWFyY2ggb3IgaGFzaCBVUkwtcGFyYW1ldGVyIGFzIHN0cmluZy5cbiAgICAgKlxuICAgICAqIElmIGBvcHRfZ2V0S2V5YCBpcyBgZmFsc2VgIG9yIGB1bmRlZmluZWRgLCB0aGUgaGFzaC1wYXJhbWV0ZXIgb2YgdGhlIFVSTCBpcyByZXR1cm5lZCxcbiAgICAgKiBvdGhlcndpc2UgaXQgd2lsbCBzZWFyY2ggZm9yIGEgR0VULXBhcmFtZXRlciBhbmQgcmV0dXJuIGl0cyB2YWx1ZS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIGlzIG5vdCBleGlzdGVudCwgb3IgZW1wdHksIGFuIGVtcHR5IHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3VuZGVmaW5lZHxzdHJpbmd9ICBvcHRfZ2V0S2V5ICBEZWZhdWx0OiBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgICBUaGUgZm91bmQgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGdldFVybFBhcmFtOiBmdW5jdGlvbiAob3B0X2dldEtleSkge1xuICAgICAgdmFyIHBhcmFtLFxuICAgICAgICAgIHJlZ0V4O1xuXG4gICAgICBpZiAoIW9wdF9nZXRLZXkpIHtcbiAgICAgICAgcGFyYW0gPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghbG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgICAgcGFyYW0gPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWdFeCA9IG5ldyBSZWdFeHAoJ1tcXD9cXCZdJyArIG9wdF9nZXRLZXkgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICAgIHBhcmFtID0gcmVnRXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgIHBhcmFtID0gcGFyYW0gPyBwYXJhbVsxXSA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9LCAvLyBlbmQgb2YgZ2V0VXJsUGFyYW0oKVxuXG4gICAgLyoqXG4gICAgICogRGVsdGEtZW5jb2RlIGFuIGFycmF5IG9mIG51bWJlcnMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhcnJheSB3aWxsIGJlIHNvcnRlZCAobG93ZXN0IHRvIGhpZ2hlc3QpXG4gICAgICogYmVmb3JlIGVuY29kaW5nLlxuICAgICAqXG4gICAgICogU28gYWZ0ZXIgdGhlIGVuY29kaW5nIHRoZSBmaXJzdCB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvbnRhaW5zXG4gICAgICogdGhlIHNtYWxsZXN0IG51bWJlciBvZiB0aGUgc2V0IGFuZCBlYWNoIGZvbGxvd2luZyBudW1iZXIganVzdFxuICAgICAqIHJlcHJlc2VudHMgdGhlIG9mZnNldCB0byBpdHMgcHJldmlvdXMgbmVpZ2hib3IuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3RseSBlZmZpY2llbnQgZm9yIGhpZ2ggbnVtYmVycywgdGhhdCBhcmUgXCJjbG9zZSB0byBlYWNoIG90aGVyXCIuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgWzEzMzcsIDExLCAxMDEsIDEyMywgOTYsIDY5LCA0MiwgNDJdXG4gICAgICogICB3aWxsIGJlIHNvcnRlZFxuICAgICAqICAgWzExLCA0MiwgNDIsIDY5LCA5NiwgMTAxLCAxMjMsIDEzMzddXG4gICAgICogICBhbmQgZW5jb2RlZCB0b1xuICAgICAqICAgWzExLCAzMSwgMCwgMjcsIDI3LCA1LCAyMiwgMTIxNF1cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxudW1iZXJzPn0gIGFycklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8bnVtYmVycz59ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlbHRhRW5jb2RlOiBmdW5jdGlvbiAoYXJySW5wdXQpIHtcbiAgICAgIHZhciBhcnJPdXRwdXQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFhcnJJbnB1dCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBpZiAoYXJySW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBhcnJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgYXJySW5wdXQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICB9KTtcblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBhcnJJbnB1dFswXTtcbiAgICAgIGZvciAoaSA9IDE7IGkgPCBhcnJJbnB1dC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnJPdXRwdXRbaV0gPSBhcnJJbnB1dFtpXSAtIGFycklucHV0W2kgLSAxXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFyck91dHB1dDtcblxuICAgIH0sIC8vIGVuZCBvZiBkZWx0YUVuY29kZSgpXG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgYSBkZWx0YS1lbmNvZGVkIGFycmF5LlxuICAgICAqIFNlZSBgZGVsdGFFbmNvZGVgIGZ1bmN0aW9uIGZvciBtb3JlIGRldGFpbGVkIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge2FycmF5PG51bWJlcnM+fSAgYXJySW5wdXQgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHthcnJheTxudW1iZXJzPn0gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVsdGFEZWNvZGU6IGZ1bmN0aW9uIChhcnJJbnB1dCkge1xuICAgICAgdmFyIGFyck91dHB1dCxcbiAgICAgICAgICBpO1xuXG4gICAgICBpZiAoIWFycklucHV0KSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgYXJyT3V0cHV0ID0gW107XG4gICAgICBhcnJPdXRwdXRbMF0gPSBwYXJzZUludChhcnJJbnB1dFswXSwgMTApO1xuICAgICAgaWYgKGlzTmFOKGFycklucHV0WzBdKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgYXJySW5wdXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyT3V0cHV0W2ldID0gcGFyc2VJbnQoYXJySW5wdXRbaV0sIDEwKSArIGFyck91dHB1dFtpIC0gMV07XG4gICAgICAgIGlmIChpc05hTihhcnJPdXRwdXRbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhcnJPdXRwdXQ7XG5cbiAgICB9LCAvLyBlbmQgb2YgZGVsdGFEZWNvZGUoKVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGNhbGwgZnVuY3Rpb25zIGluIGBhcnJIb29rRnVuY3Rpb25zYCB3aXRoIGdpdmVuIGBwYXJhbWV0ZXJzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHthcnJheTxmdW5jdGlvbj59ICAgYXJySG9va0Z1bmN0aW9ucyAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHttaXhlZH0gICAgICAgICAgICAgcGFyYW1ldGVycyAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGNhbGxIb29rRnVuY3Rpb25zOiBmdW5jdGlvbiAoYXJySG9va0Z1bmN0aW9ucywgcGFyYW1ldGVycykge1xuICAgICAgdmFyIGo7XG5cbiAgICAgIGlmIChhcnJIb29rRnVuY3Rpb25zICYmIGFyckhvb2tGdW5jdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgYXJySG9va0Z1bmN0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJySG9va0Z1bmN0aW9uc1tqXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJySG9va0Z1bmN0aW9uc1tqXShwYXJhbWV0ZXJzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAvLyBlbmQgb2YgXCJjYWxsSG9va0Z1bmN0aW9ucygpXCJcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBoZXgtZm9ybWF0ZWQgY29sb3IgdmFsdWUgaW50byByZ2JhKCktZm9ybWF0LlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ3xudW1iZXJ9ICBoZXggICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtzdHJpbmd8bnVtYmVyfSAgb3B0X29wYWNpdHkgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBnZXRSZ2JhRnJvbUhleEFuZE9wYWNpdHk6IGZ1bmN0aW9uIChoZXgsIG9wdF9vcGFjaXR5LCBvcHRfYXJyYXkpIHtcblxuICAgICAgdmFyIGJpZ2ludCwgciwgZywgYiwgYTtcblxuICAgICAgYmlnaW50ID0gcGFyc2VJbnQoaGV4LCAxNik7XG4gICAgICBpZiAob3B0X29wYWNpdHkgJiYgb3B0X29wYWNpdHkudmFsdWUpIHtcbiAgICAgICAgb3B0X29wYWNpdHkudmFsdWUgPSBwYXJzZUludChvcHRfb3BhY2l0eS52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfb3BhY2l0eSAmJiB0eXBlb2Ygb3B0X29wYWNpdHkgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0X29wYWNpdHkgPT09ICdvYmplY3QnICYmIG9wdF9vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgb3B0X29wYWNpdHkgPSBvcHRfb3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRfb3BhY2l0eSA9IDEwMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByID0gKGJpZ2ludCA+PiAxNikgJiAyNTU7XG4gICAgICBnID0gKGJpZ2ludCA+PiA4KSAmIDI1NTtcbiAgICAgIGIgPSBiaWdpbnQgJiAyNTU7XG4gICAgICBhID0gb3B0X29wYWNpdHkgPyAob3B0X29wYWNpdHkgLyAxMDApIDogMTtcbiAgICAgIGlmKG9wdF9hcnJheSl7XG4gICAgICAgIHJldHVybiBbcixnLGIsYV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsXCIgKyBhICsgXCIpXCI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZHVjZSBhIGRlZmluZWQgc3R5bGUsIHRvIGEgc2ltcGxlciB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogVGhlIHJlZHVjZWQgc3R5bGUgaXMgdGhlIGZpcnN0IHN0eWxlIG9mIHRoZSBkZWZpbmVkIHN0eWxlc2V0LFxuICAgICAqIHdpdGggYSAxcHggdGhpY2sgc3Ryb2tlIGFuZCBhIGNpcmNsZSB3aXRoIGEgNXB4IHJhZGl1cy5cbiAgICAgKlxuICAgICAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSBhZGRpdGlvbmFsIGdlb21ldHJpZXMgd2l0aCBhIG1haW4tZ2VvbWV0cnksXG4gICAgICogd2l0aG91dCBoYXZpbmcgdG8gZGVmaW5lIGEgd2hvbGUgbmV3IHN0eWxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge251bWJlcnxzdHJpbmd9ICAgICAgICAgICBzdHlsZUlkICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8b2wuc3R5bGUuU3R5bGU+fSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZWR1Y2VTdHlsZTogZnVuY3Rpb24gKHN0eWxlSWQpIHtcbiAgICAgIHZhciBzdHlsZSxcbiAgICAgICAgICByZWR1Y2VkU3R5bGUsXG4gICAgICAgICAgZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZVN0eWxlO1xuXG4gICAgICBpZiAoIWM0Zy5tYXBzLmxvY2F0aW9uU3R5bGVzW3N0eWxlSWRdIHx8ICFjNGcubWFwcy5sb2NhdGlvblN0eWxlc1tzdHlsZUlkXS5zdHlsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHN0eWxlID0gYzRnLm1hcHMubG9jYXRpb25TdHlsZXNbc3R5bGVJZF0uc3R5bGUoKVswXTtcblxuICAgICAgZmlsbFN0eWxlID0gc3R5bGUuZ2V0RmlsbCgpO1xuICAgICAgc3Ryb2tlU3R5bGUgPSBzdHlsZS5nZXRTdHJva2UoKTtcbiAgICAgIHN0cm9rZVN0eWxlLnNldFdpZHRoKDEpO1xuXG4gICAgICByZWR1Y2VkU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgICAgICBpbWFnZTogbmV3IG9sLnN0eWxlLkNpcmNsZSh7XG4gICAgICAgICAgZmlsbDogZmlsbFN0eWxlLFxuICAgICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgICAgcmFkaXVzOiA1XG4gICAgICAgIH0pLFxuICAgICAgICAvLyB0ZXh0OiBzdHlsZS5nZXRUZXh0KCksXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlU3R5bGUsXG4gICAgICAgIGZpbGw6IGZpbGxTdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBbcmVkdWNlZFN0eWxlXTtcbiAgICB9LCAvLyBlbmQgb2YgXCJyZWR1Y2VTdHlsZVwiXG5cbiAgICAvKipcbiAgICAgKiBNZWFzdXJlIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBnaXZlbiBnZW9tZXRyeS5cbiAgICAgKlxuICAgICAqIElmIHRoZSBnZW9tZXRyeSBpcyBhIGBMaW5lU3RyaW5nYCB0aGUgZnVuY3Rpb24gd2lsbCBtZWFzdXJlIGl0cyBsZW5ndGgsXG4gICAgICogaXMgaXQgYSBgUG9seWdvbmAgaXQgd2lsbCBtZWFzdXJlIHRoZSBhY3JlYWdlLFxuICAgICAqIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiBgMGAuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgb3B0aW9uYWwgYG9wdF9mb3JjZUxpbmVNZWFzdXJlYCBwYXJhbWV0ZXIgaXMgYHRydWVgXG4gICAgICogYW5kIHRoZSBnZW9tZXRyeSBpcyBhIGBQb2x5Z29uYCBpdCB3aWxsIG1lYXN1cmUgaXRzIHBlcmltZXRlciBpbnN0ZWFkXG4gICAgICogb2YgaXRzIGFjcmVhZ2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2wuZ2VvbS5MaW5lU3RyaW5nfG9sLmdlb20uUG9seWdvbn0gICBnZW9tZXRyeSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHt1bmRlZmluZWR8Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgIG9wdF9mb3JjZUxpbmVNZWFzdXJlICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7YXJyYXk8c3RyaW5nPnxudW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIG1lYXN1cmVHZW9tZXRyeTogZnVuY3Rpb24gKGdlb21ldHJ5LCBvcHRfZm9yY2VMaW5lTWVhc3VyZSwgb3B0X2ZvcmNlU3VyZmFjZU1lYXN1cmUpIHtcbiAgICAgIHZhciB2YWx1ZSxcbiAgICAgICAgICBzcGhlcmUsXG4gICAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICAgICAgY29vcmQxLFxuICAgICAgICAgIGNvb3JkMixcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgaTtcblxuICAgICAgaWYgKCFnZW9tZXRyeSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vc3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgICBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkxpbmVTdHJpbmcgfHwgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uICYmIG9wdF9mb3JjZUxpbmVNZWFzdXJlKSkge1xuXG4gICAgICAgIGNvb3JkaW5hdGVzID0gZ2VvbWV0cnkuZ2V0Q29vcmRpbmF0ZXMoKTtcbiAgICAgICAgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgICAgY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGggLSAxOyBpICs9IDEpIHtcbiAgICAgICAgICBjb29yZDEgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpXSwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKTtcbiAgICAgICAgICBjb29yZDIgPSBvbC5wcm9qLnRyYW5zZm9ybShjb29yZGluYXRlc1tpICsgMV0sICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2Jyk7XG4gICAgICAgICAgdmFsdWUgKz0gb2wuc3BoZXJlLmdldERpc3RhbmNlKGNvb3JkMSwgY29vcmQyLCA2Mzc4MTM3KTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh2YWx1ZSA+IDEwMDApIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgLyAxMDAwICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSArXG4gICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICcgJyArICdtJztcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2UgaWYgKGdlb21ldHJ5IGluc3RhbmNlb2Ygb2wuZ2VvbS5Qb2x5Z29uKSB7XG4gICAgICAgIC8vZ2VvbWV0cnkgPSAvKiogQHR5cGUge29sLmdlb20uUG9seWdvbn0gKi8oZ2VvbWV0cnkuY2xvbmUoKS50cmFuc2Zvcm0oJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSk7XG4gICAgICAgIC8vY29vcmRpbmF0ZXMgPSBnZW9tZXRyeS5nZXRMaW5lYXJSaW5nKDApLmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnMob2wuc3BoZXJlLmdldEFyZWEoZ2VvbWV0cnkpKTtcbiAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgIHJlc3VsdC5odG1sVmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAvIDEwMDAwMDAgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgJyAnICsgJ208c3VwPjI8L3N1cD4nO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkgaW5zdGFuY2VvZiBvbC5nZW9tLkNpcmNsZSAmJiBvcHRfZm9yY2VTdXJmYWNlTWVhc3VyZSkge1xuICAgICAgICAgIHZhciBjZW50ZXIgPSBnZW9tZXRyeS5nZXRDZW50ZXIoKTtcbiAgICAgICAgICB2YXIgcmFkaXVzID0gZ2VvbWV0cnkuZ2V0UmFkaXVzKCk7XG4gICAgICAgICAgdmFyIGVkZ2VDb29yZGluYXRlID0gW2NlbnRlclswXSArIHJhZGl1cywgY2VudGVyWzFdXTtcbiAgICAgICAgICAvL3ZhciB3Z3M4NFNwaGVyZSA9IG5ldyBvbC5TcGhlcmUoNjM3ODEzNyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gb2wuc3BoZXJlLmdldERpc3RhbmNlKFxuICAgICAgICAgICAgICBvbC5wcm9qLnRyYW5zZm9ybShjZW50ZXIsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGVkZ2VDb29yZGluYXRlLCAnRVBTRzozODU3JywgJ0VQU0c6NDMyNicpLFxuICAgICAgICAgICAgICA2Mzc4MTM3XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhbHVlID0gTWF0aC5QSSAqIE1hdGguc3FydCh2YWx1ZSk7XG5cbiAgICAgICAgICByZXN1bHQucmF3VmFsdWUgPSAoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgaWYgKHZhbHVlID4gMTAwMDApIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IChNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMDAwMCAqIDEwMCkgLyAxMDApLnRvRml4ZWQoMikgK1xuICAgICAgICAgICAgICAgICAgJyAnICsgJ2ttPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gcmVzdWx0LnJhd1ZhbHVlICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdtPHN1cD4yPC9zdXA+JztcbiAgICAgICAgICB9XG5cblxuICAgICAgfSBlbHNlIGlmIChnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uQ2lyY2xlKSB7XG4gICAgICAgICAgdmFyIGNlbnRlciA9IGdlb21ldHJ5LmdldENlbnRlcigpO1xuICAgICAgICAgIHZhciByYWRpdXMgPSBnZW9tZXRyeS5nZXRSYWRpdXMoKTtcbiAgICAgICAgICB2YXIgZWRnZUNvb3JkaW5hdGUgPSBbY2VudGVyWzBdICsgcmFkaXVzLCBjZW50ZXJbMV1dO1xuICAgICAgICAgIC8vdmFyIHdnczg0U3BoZXJlID0gbmV3IG9sLlNwaGVyZSg2Mzc4MTM3KTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBvbC5zcGhlcmUuZ2V0RGlzdGFuY2UoXG4gICAgICAgICAgICAgIG9sLnByb2oudHJhbnNmb3JtKGNlbnRlciwgJ0VQU0c6Mzg1NycsICdFUFNHOjQzMjYnKSxcbiAgICAgICAgICAgICAgb2wucHJvai50cmFuc2Zvcm0oZWRnZUNvb3JkaW5hdGUsICdFUFNHOjM4NTcnLCAnRVBTRzo0MzI2JyksXG4gICAgICAgICAgICAgIDYzNzgxMzdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmVzdWx0LnJhd1ZhbHVlID0gKE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgIGlmIChyZXN1bHQucmF3VmFsdWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgICByZXN1bHQuaHRtbFZhbHVlID0gKE1hdGgucm91bmQoKHZhbHVlICogMTAwKSAvIDEwMCkgLyAxMDAwKS50b0ZpeGVkKDIpICtcbiAgICAgICAgICAgICAgICAgICcgJyArICdrbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzdWx0Lmh0bWxWYWx1ZSA9IHJlc3VsdC5yYXdWYWx1ZSArXG4gICAgICAgICAgICAgICAgICAnICcgKyAnbSc7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGV4dGVudCBmb3IgYW4gYXJyYXkgb2YgZ2VvbWV0cmllcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAgIHtBcnJheS48b2wuZ2VvbS5zaW1wbGVHZW9tZXRyeT59ICBhcnJHZW9tZXRyaWVzICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7b2wuRXh0ZW50fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGdldEV4dGVudEZvckdlb21ldHJpZXM6IGZ1bmN0aW9uIChhcnJHZW9tZXRyaWVzKSB7XG4gICAgICB2YXIgZXh0ZW50U291cmNlO1xuXG4gICAgICBpZiAoIWFyckdlb21ldHJpZXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdHZW9tZXRyaWVzIG1pc3NpbmcgZm9yIGV4dGVudCBjYWxjdWxhdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGV4dGVudFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICBleHRlbnRTb3VyY2UuYWRkRmVhdHVyZXMoYXJyR2VvbWV0cmllcyk7XG5cbiAgICAgIHJldHVybiBleHRlbnRTb3VyY2UuZ2V0RXh0ZW50KCkgfHwgb2wuRXh0ZW50KFswLCAwLCAwLCAwXSk7XG4gICAgfSwgLy8gZW5kIG9mIGdldEV4dGVudEZvckdlb21ldHJpZXMoKVxuXG4gICAgLyoqXG4gICAgICogRml0IHZpZXcgb2YgYG1hcGAgdG8gYSBnaXZlbiBhcnJheSBvZiBgZXh0ZW50c2AuXG4gICAgICogQW5pbWF0ZWQgaWYgYG9wdF9hbmltYXRpb25EdXJhdGlvbmAgaXMgYW4gaW50ZWdlciA+IDAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7b2JqZWN0fSAgICAgZXh0ZW50cyAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X2FuaW1hdGlvbkR1cmF0aW9uICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZml0VG9FeHRlbnRzOiBmdW5jdGlvbiAoZXh0ZW50cywgbWFwLCBvcHRfcGFkZGluZywgb3B0X2FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICB2YXIgdmlldyxcbiAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgIGV4dGVudCxcbiAgICAgICAgICBrZXk7XG5cbiAgICAgIGlmICghZXh0ZW50cyB8fCAhbWFwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBleHRlbnQgb3IgbWFwIGZvciBmaXRFeHRlbnQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy9leHRlbnQgPSBvbC5leHRlbnQuY3JlYXRlRW1wdHkoKTtcblxuICAgICAgZm9yIChrZXkgaW4gZXh0ZW50cykge1xuICAgICAgICBpZiAoZXh0ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBleHRlbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVudCA9IGV4dGVudHNba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2wuZXh0ZW50LmV4dGVuZChleHRlbnQsIGV4dGVudHNba2V5XSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maXRUb0V4dGVudChleHRlbnQsIG1hcCwgb3B0X3BhZGRpbmcsIDUsIDAsIDAsIDIpO1xuXG5cbiAgICB9LCAvLyBlbmQgb2YgZml0VG9FeHRlbnRzXG5cbiAgICAvKipcbiAgICAgKiBGaXQgdmlldyBvZiBgbWFwYCB0byBhIGdpdmVuIGBleHRlbnRgLlxuICAgICAqIEFuaW1hdGVkIGlmIGBvcHRfYW5pbWF0aW9uRHVyYXRpb25gIGlzIGFuIGludGVnZXIgPiAwLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge29sLkV4dGVudH0gIGV4dGVudCAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5NYXB9ICAgICBtYXAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7YXJyYXl9ICAgICAgb3B0X3BhZGRpbmcgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9hbmltYXRpb25EdXJhdGlvbiAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtpbnRlZ2VyfSAgICBvcHRfbWluWm9vbSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKiBAcGFyYW0gICB7aW50ZWdlcn0gICAgb3B0X21heFpvb20gICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge2ludGVnZXJ9ICAgIG9wdF9taW5SZXNvbHV0aW9uICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge2Jvb2xlYW59ICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGZpdFRvRXh0ZW50OiBmdW5jdGlvbiAoZXh0ZW50LCBtYXAsIG9wdF9wYWRkaW5nLCBvcHRfYW5pbWF0aW9uRHVyYXRpb24sIG9wdF9taW5ab29tLCBvcHRfbWF4Wm9vbSwgb3B0X21pblJlc29sdXRpb24pIHtcbiAgICAgIHZhciB2aWV3LFxuICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgZml0T3B0aW9ucztcblxuICAgICAgaWYgKCFleHRlbnQgfHwgIW1hcCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01pc3NpbmcgZXh0ZW50IG9yIG1hcCBmb3IgZml0RXh0ZW50Jyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmlldyA9IG1hcC5nZXRWaWV3KCk7XG5cbiAgICAgIGZpdE9wdGlvbnMgPSB7XG4gICAgICAgICdwYWRkaW5nJzogb3B0X3BhZGRpbmcgfHwgWzI1LCAyNSwgMjUsIDI1XVxuICAgICAgfTtcblxuICAgICAgaWYgKG9wdF9taW5SZXNvbHV0aW9uICYmIG9wdF9taW5SZXNvbHV0aW9uID4gMCkge1xuICAgICAgICBmaXRPcHRpb25zLm1pblJlc29sdXRpb24gPSBvcHRfbWluUmVzb2x1dGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdF9taW5ab29tICYmIG9wdF9taW5ab29tID49IDApIHtcbiAgICAgICAgZml0T3B0aW9ucy5taW5ab29tID0gb3B0X21pblpvb207XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRfbWF4Wm9vbSAmJiBvcHRfbWF4Wm9vbSA+PSAwKSB7XG4gICAgICAgIGZpdE9wdGlvbnMubWF4Wm9vbSA9IG9wdF9tYXhab29tO1xuICAgICAgfVxuXG4gICAgICAvLyBhbmltYXRlIHRoZSBcImZpdHRpbmdcIiB3aGVuIGEgZHVyYXRpb24gaXMgZ2l2ZW4gYW5kIGl0cyBncmVhdGVyIHRoYW4gMFxuICAgICAgaWYgKG9wdF9hbmltYXRpb25EdXJhdGlvbiAmJiBvcHRfYW5pbWF0aW9uRHVyYXRpb24gPiAwKSB7XG4gICAgICAgIHZpZXcuYW5pbWF0ZSh7XG4gICAgICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAgIGR1cmF0aW9uOiBvcHRfYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgcmVzb2x1dGlvbjogdmlldy5nZXRSZXNvbHV0aW9uKCksXG4gICAgICAgICAgY2VudGVyOiBbMCwgMF1cbiAgICAgICAgICAvL3JvdGF0aW9uOiBNYXRoLlBJXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBtYXAuYmVmb3JlUmVuZGVyKFxuICAgICAgICAvLyAgICAgb2wuYW5pbWF0aW9uLnBhbih7XG4gICAgICAgIC8vICAgICAgIHN0YXJ0OiArbmV3IERhdGUoKSxcbiAgICAgICAgLy8gICAgICAgZHVyYXRpb246IG9wdF9hbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgLy8gICAgICAgc291cmNlOiB2aWV3LmdldENlbnRlcigpXG4gICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgLy8gICAgIG9sLmFuaW1hdGlvbi56b29tKHtcbiAgICAgICAgLy8gICAgICAgc3RhcnQ6ICtuZXcgRGF0ZSgpLFxuICAgICAgICAvLyAgICAgICBkdXJhdGlvbjogb3B0X2FuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAvLyAgICAgICByZXNvbHV0aW9uOiB2aWV3LmdldFJlc29sdXRpb24oKVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gKTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmlldy5maXQoZXh0ZW50LCBtYXAuZ2V0U2l6ZSgpLCB7cGFkZGluZzogWzI1LCAyNSwgMjUsIDI1XX0pO1xuICAgICAgICAvL3ZpZXcuZml0KGV4dGVudCwgbWFwLmdldFNpemUoKSk7XG4gICAgICAgIC8vdmlldy5zZXRab29tKHZpZXcuZ2V0Wm9vbSgpLTEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sIC8vIGVuZCBvZiBmaXRUb0V4dGVudCgpXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBmdW5jdGlvbiB0byBydW4gYWxsIHBsYWNlaG9sZGVyIGZ1bmN0aW9ucyBhdCBvbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgICAgICAgICAgc3RySW5wdXQgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICAgICAgICAgICAgICAgICAgZmVhdHVyZSAgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyIHwgdW5kZWZpbmVkfSAgb3B0X2xheWVyICBbZGVzY3JpcHRpb25dXG4gICAgICpcbiAgICAgKiBAcmV0dXJuICB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQWxsUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcikge1xuICAgICAgdmFyIHN0ck91dHB1dDtcblxuICAgICAgLy8gb25seSBjaGVjayB0aGUgZmlyc3QgdHdvIHBhcmFtZXRlcnMgYXMgdGhleSB3aWxsIGJlIHVzZWQgYnkgYWxsIHBsYWNlaG9sZGVyLWZ1bmN0aW9uc1xuICAgICAgLy8gLT4gZm9yIHBlcmZvcm1hbmNlXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gdGhpcy5yZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoc3RySW5wdXQsIGZlYXR1cmUsIG9wdF9sYXllcik7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzKHN0ck91dHB1dCwgZmVhdHVyZSk7XG4gICAgICBzdHJPdXRwdXQgPSB0aGlzLnJlcGxhY2VBdHRyaWJ1dGVQbGFjZWhvbGRlcnMoc3RyT3V0cHV0LCBmZWF0dXJlKTtcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUFsbFBsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHtGTmZ1bmN0aW9uTmFtZX1gLCBpbiBgc3RySW5wdXRgLFxuICAgICAqIHdpdGggdGhlIHJlc3VsdCBvZiBgd2luZG93LmZ1bmN0aW9uTmFtZShmZWF0dXJlLCBzdHlsZSlgLCBpZiBpdCBleGlzdC5cbiAgICAgKiBPdGhlcndpc2UgdGhlIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2ltcGx5IHJlbW92ZWQgKC9yZXBsYWNlZCB3aXRoICcnKS5cbiAgICAgKiBTdHlsZSB3aWxsIGJlIHRha2VuIGVpdGhlciBmcm9tIHRoZSBmZWF0dXJlLCBvciB0aGUgbGF5ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgICAgIGZlYXR1cmUgICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLmxheWVyLkxheWVyfSAgbGF5ZXIgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgcmVwbGFjZUZ1bmN0aW9uUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICB2YXIgc3RyT3V0cHV0O1xuXG4gICAgICBpZiAoIXN0cklucHV0IHx8ICFmZWF0dXJlIHx8ICFsYXllcikge1xuICAgICAgICByZXR1cm4gc3RySW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIHN0ck91dHB1dCA9IHN0cklucHV0LnJlcGxhY2UoXG4gICAgICAgICAgL1xcJFxce0ZOKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBmdW5jdGlvbk5hbWUsIG9mZnNldCwgb3JpZ2luU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGU7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggc3R5bGVcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGZlYXR1cmUuZ2V0U3R5bGUoKSAmJiB0eXBlb2YgZmVhdHVyZS5nZXRTdHlsZSgpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBmZWF0dXJlLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxheWVyLmdldFN0eWxlID09PSAnZnVuY3Rpb24nICYmIGxheWVyLmdldFN0eWxlKCkpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGxheWVyLmdldFN0eWxlKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbZnVuY3Rpb25OYW1lXShmZWF0dXJlLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRnVuY3Rpb25QbGFjZWhvbGRlcnMoKVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMsIGluIGBzdHJJbnB1dGAsIGZvciB2YXJpYWJsZXMgc2V0IGJ5IHRoZSBnZW9FZGl0b3IuXG4gICAgICogVmFsaWQgcGxhY2Vob2xkZXJzIGFyZTogKFtrZXldIHJlcHJlc2VudHMgdGhlIHN0cmluZ25hbWUgb2YgdGhlIHZhcmlhYmxlcyBrZXkpXG4gICAgICogICBgJHtFTFtrZXldfWAgICA9PiAgTGFiZWwgZm9yIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZMW2tleV19YCAgPT4gIExhYmVsIGZvciB0aGUgdmFyaWFibGUsIGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAqICAgYCR7RVZba2V5XX1gICAgPT4gIFZhbHVlIG9mIHRoZSB2YXJpYWJsZVxuICAgICAqICAgYCR7RVZWW2tleV19YCAgPT4gIFNhbWUgYXMgYCR7RVZba2V5XX1gXG4gICAgICpcbiAgICAgKiBJZiBubyBhcHByb3ByaWF0ZSB2YWx1ZSBjYW4gYmUgZm91bmQgZm9yIGEgcGxhY2Vob2xkZXJcbiAgICAgKiBpdCB3aWxsIHNpbXBseSBiZSByZW1vdmVkICgvcmVwbGFjZWQgd2l0aCAnJykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgIHN0cklucHV0ICBbZGVzY3JpcHRpb25dXG4gICAgICogQHBhcmFtICAge29sLkZlYXR1cmV9ICBmZWF0dXJlICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqXG4gICAgICogQHJldHVybiAge3N0cmluZ30gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIHJlcGxhY2VFZGl0b3JWYXJzUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KEVWP1tMVl0pKFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCB0eXBlLCBldktleSwgb2Zmc2V0LCBvcmlnaW5TdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBlZGl0b3JWYXJzLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaGFzIGVkaXRvclZhcnNcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpKSB7XG4gICAgICAgICAgICAgIGVkaXRvclZhcnMgPSBmZWF0dXJlLmdldCgnZWRpdG9yVmFycycpO1xuICAgICAgICAgICAgICAvLyBzZWFyY2ggZm9yIGVkaXRvclZhciB3aXRoIGtleSA9PSBldktleVxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWRpdG9yVmFycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChlZGl0b3JWYXJzW2ldLmtleSA9PT0gZXZLZXkpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlmIHR5cGUgaXMgJ0VWTCcgZGlzcGxheSBsYWJlbCBvbmx5IGlmIGEgdmFsdWUgaXMgc2V0IHRvb1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdFTCcgfHwgKHR5cGUgPT09ICdFVkwnICYmIGVkaXRvclZhcnNbaV0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlZGl0b3JWYXJzW2ldLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVkaXRvclZhcnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgfVxuICAgICAgKTsgLy8gZW5kIG9mIHJlcGxhY2UoKVxuXG4gICAgICByZXR1cm4gc3RyT3V0cHV0O1xuICAgIH0sIC8vIGVuZCBvZiByZXBsYWNlRWRpdG9yVmFyc1BsYWNlaG9sZGVycygpXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlIGV2ZXJ5IG9jY3VyYW5jZSBvZiBgJHthdHRyfWAsIGluIGBzdHJJbnB1dGAsXG4gICAgICogd2l0aCB0aGUgcmVzdWx0IG9mIGBmZWF0dXJlLmdldChhdHRyKWAsIGlmIGl0IGV4aXN0LlxuICAgICAqIE90aGVyd2lzZSB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBzaW1wbHkgcmVtb3ZlZCAoL3JlcGxhY2VkIHdpdGggJycpLlxuICAgICAqXG4gICAgICogQHBhcmFtICAge3N0cmluZ30gICAgICBzdHJJbnB1dCAgW2Rlc2NyaXB0aW9uXVxuICAgICAqIEBwYXJhbSAgIHtvbC5GZWF0dXJlfSAgZmVhdHVyZSAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKlxuICAgICAqIEByZXR1cm4gIHtzdHJpbmd9ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICByZXBsYWNlQXR0cmlidXRlUGxhY2Vob2xkZXJzOiBmdW5jdGlvbiAoc3RySW5wdXQsIGZlYXR1cmUpIHtcbiAgICAgIHZhciBzdHJPdXRwdXQ7XG5cbiAgICAgIGlmICghc3RySW5wdXQgfHwgIWZlYXR1cmUgfHwgdHlwZW9mIGZlYXR1cmUuZ2V0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdHJJbnB1dDtcbiAgICAgIH1cblxuICAgICAgc3RyT3V0cHV0ID0gc3RySW5wdXQucmVwbGFjZShcbiAgICAgICAgICAvXFwkXFx7KFteXFx9XSopXFx9L2csXG4gICAgICAgICAgZnVuY3Rpb24gKG1hdGNoLCBhdHRyLCBvZmZzZXQsIG9yaWdpblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmUuZ2V0KGF0dHIpIHx8ICcnO1xuICAgICAgICAgIH1cbiAgICAgICk7IC8vIGVuZCBvZiByZXBsYWNlKClcblxuICAgICAgcmV0dXJuIHN0ck91dHB1dDtcbiAgICB9LCAvLyBlbmQgb2YgcmVwbGFjZUF0dHJpYnV0ZVBsYWNlaG9sZGVycygpXG5cbiAgICBvYmplY3RUb0FycmF5OiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9iamVjdCA9IE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0W2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCAvLyBlbmQgb2Ygb2JqZWN0VG9BcnJheSgpXG5cbiAgICBnZXRWZWN0b3JMYXllcihzb3VyY2UsIHN0eWxlKSB7XG4gICAgICAgIHZhciBmblN0eWxlO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdHlsZSBpcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuU3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmblN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgIHN0eWxlOiBmblN0eWxlXG4gICAgICAgIH0pO1xuICAgIH0sLy8gZW5kIG9mIFwiZ2V0VmVjdG9yTGF5ZXIoKVwiXG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyB0aGUgc3ViZG9tYWluIGZyb20gdGhlIGN1cnJlbnQgcmVxdWVzdCBob3N0IGFuZCByZXR1cm5zIGl0LlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCAqfVxuICAgICAqL1xuICAgIGdldEN1cnJlbnRTdWJkb21haW4oKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIHJlZHJhd01hcFZpZXc6IGZ1bmN0aW9uIChtYXBDb250cm9sbGVyKSB7XG4gICAgICB2YXIgbWFwRGF0YSA9IG1hcENvbnRyb2xsZXIuZGF0YTtcbiAgICAgIHZhciBjb250cm9sQ29udGFpbmVyVG9wTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbENvbnRhaW5lclRvcExlZnQuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLkNPTlRST0xfQ09OVEFJTkVSX1RMICsgJyAnICsgY3NzQ29uc3RhbnRzLk9MX1VOU0VMRUNUQUJMRTtcbiAgICAgIG1hcENvbnRyb2xsZXIuJG92ZXJsYXljb250YWluZXJfc3RvcGV2ZW50LnByZXBlbmQoY29udHJvbENvbnRhaW5lclRvcExlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTCArICcgJyArIGNzc0NvbnN0YW50cy5PTF9VTlNFTEVDVEFCTEU7XG4gICAgICAkKGNvbnRyb2xDb250YWluZXJUb3BMZWZ0KS5hZnRlcihjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCk7XG4gICAgICBtYXBDb250cm9sbGVyLmxlZnRTbGlkZUVsZW1lbnRzLnB1c2goY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpO1xuXG4gICAgICB2YXIgY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnRTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5DT05UUk9MX0NPTlRBSU5FUl9CTF9TVUIgKyAnICcgKyBjc3NDb25zdGFudHMuT0xfVU5TRUxFQ1RBQkxFO1xuXG4gICAgICBpZiAobWFwRGF0YS5zY2FsZWxpbmUpIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMuc2NhbGVsaW5lID0gbmV3IG9sLmNvbnRyb2wuU2NhbGVMaW5lKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdCxcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnNjYWxlbGluZSk7XG4gICAgICB9XG5cbiAgICAgICQoY29udHJvbENvbnRhaW5lckJvdHRvbUxlZnQpLmFwcGVuZChjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1Yik7XG5cbiAgICAgIGlmIChtYXBEYXRhLnpvb21sZXZlbCkge1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5yZW1vdmVDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMuem9vbWxldmVsKTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5jb250cm9scy56b29tbGV2ZWwgPSBuZXcgWm9vbWxldmVsKHtcbiAgICAgICAgICBtYXBWaWV3OiBtYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCksXG4gICAgICAgICAgdGFyZ2V0OiBjb250cm9sQ29udGFpbmVyQm90dG9tTGVmdFN1YixcbiAgICAgICAgICB1bmRlZmluZWRIVE1MOiAnTi9BJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLnpvb21sZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXBEYXRhLm1vdXNlcG9zaXRpb24pIHtcbiAgICAgICAgbWFwQ29udHJvbGxlci5tYXAucmVtb3ZlQ29udHJvbChtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24pO1xuICAgICAgICBtYXBDb250cm9sbGVyLmNvbnRyb2xzLm1vdXNlcG9zaXRpb24gPSBuZXcgb2wuY29udHJvbC5Nb3VzZVBvc2l0aW9uKHtcbiAgICAgICAgICBwcm9qZWN0aW9uOiAnRVBTRzo0MzI2JyxcbiAgICAgICAgICBjb29yZGluYXRlRm9ybWF0OiBvbC5jb29yZGluYXRlLnRvU3RyaW5nSERNUyxcbiAgICAgICAgICB0YXJnZXQ6IGNvbnRyb2xDb250YWluZXJCb3R0b21MZWZ0U3ViLFxuICAgICAgICAgIHVuZGVmaW5lZEhUTUw6ICdOL0EnXG4gICAgICAgIH0pO1xuICAgICAgICBtYXBDb250cm9sbGVyLm1hcC5hZGRDb250cm9sKG1hcENvbnRyb2xsZXIuY29udHJvbHMubW91c2Vwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW2tleV0gfHwgJyc7XG4gICAgfSxcbiAgICBzdG9yZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTsgLy8gb25seSBzdHJpbmdzXG4gICAgfVxuICB9KTtcblxufShqUXVlcnksIHRoaXMuYzRnKSk7XG5cbmV4cG9ydCB2YXIgdXRpbHMgPSB0aGlzLmM0Zy5tYXBzLnV0aWxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHMuanMiLCIvLyBcIm5hbWVzcGFjZVwiXG50aGlzLmM0ZyA9IHRoaXMuYzRnIHx8IHt9O1xudGhpcy5jNGcubWFwcyA9IHRoaXMuYzRnLm1hcHMgfHwge307XG50aGlzLmM0Zy5tYXBzLmNvbnRyb2wgPSB0aGlzLmM0Zy5tYXBzLmNvbnRyb2wgfHwge307XG5cbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29udHJvbC1wb3J0c2lkZS1yb3V0ZXJcIjtcbmltcG9ydCB7bGFuZ0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7Y3NzQ29uc3RhbnRzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtY29uc3RhbnRcIjtcblxuKGZ1bmN0aW9uICgkLCBjNGcpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAZXh0ZW5kcyB7YzRnLm1hcHMuY29udHJvbC5TaWRlYm9hcmR9XG4gICAqXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gIG1hcENvbnRyb2xsZXIgIFtkZXNjcmlwdGlvbl1cbiAgICogQHBhcmFtICB7W3R5cGVdfSAgY29uZmlnICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXJQbHVnaW4gPSBmdW5jdGlvbiAob3B0X29wdGlvbnMpIHtcblxuICAgIC8vIGV4dGVuZCBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgbmFtZTogJ3JvdXRlcicsXG4gICAgICBjcmVhdGU6IHRydWUsXG4gICAgICBtYXBDb250cm9sbGVyOiB1bmRlZmluZWQsXG4gICAgICBoZWFkbGluZTogbGFuZ0NvbnN0YW50cy5ST1VURVIsXG4gICAgICBkaXJlY3Rpb246ICdsZWZ0J1xuICAgIH0sIG9wdF9vcHRpb25zKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5pbmRleD0wO1xuXG4gICAgLy8gY2FsbCBwYXJlbnQgY29uc3RydWN0b3JcbiAgICBSb3V0ZXIuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMpO1xuICB9O1xuICAvKipcbiAgICogSW5oZXJpdCBmcm9tIFwiUm91dGVyXCJcbiAgICovXG4gIG9sLmluaGVyaXRzKGM0Zy5tYXBzLmNvbnRyb2wuUm91dGVyUGx1Z2luLCBSb3V0ZXIpO1xuXG4gIC8qKlxuICAgKiBNZXRob2RzXG4gICAqL1xuICBjNGcubWFwcy5jb250cm9sLlJvdXRlclBsdWdpbi5wcm90b3R5cGUgPSAkLmV4dGVuZChjNGcubWFwcy5jb250cm9sLlJvdXRlclBsdWdpbi5wcm90b3R5cGUsIHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmLFxuICAgICAgICB2aWV3Um91dGVyLFxuICAgICAgICB2aWV3QXJlYSxcbiAgICAgICAgc2VsZWN0SW50ZXJhY3Rpb24sXG4gICAgICAgIHByb2ZpbGVJZDtcblxuICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG5cbiAgICAgIC8vIGNoZWNrIGFuZCBsb2FkIGxvY2F0aW9uIHN0eWxlcyB2aWEgbWFwLXByb3h5XG4gICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW1xuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9mcm9tX2xvY3N0eWxlLFxuICAgICAgICB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl90b19sb2NzdHlsZSxcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcG9pbnRfbG9jc3R5bGVcbiAgICAgIF0pO1xuXG5cbiAgICAgIC8vIEFkZCByb3V0ZXIgbGF5ZXIocylcbiAgICAgIHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLnJvdXRpbmdXYXlTb3VyY2UgPSBuZXcgb2wuc291cmNlLlZlY3RvcigpO1xuICAgICAgdGhpcy5yb3V0ZXJXYXlMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ1dheVNvdXJjZSxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgNTEsIDExOSwgMC45KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0ZXJBbHRXYXlMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0FsdFdheVNvdXJjZSxcbiAgICAgICAgekluZGV4OiAwLFxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMCwgNTEsIDExOSwgMC40KScsXG4gICAgICAgICAgICAgIHdpZHRoOiA0XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxlY3RJbnRlcmFjdGlvbiA9IG5ldyBvbC5pbnRlcmFjdGlvbi5TZWxlY3Qoe1xuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCA1MSwgMTE5LCAwLjApJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuXG4gICAgICB9KTtcbiAgICAgIHNlbGVjdEludGVyYWN0aW9uLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuc2VsZWN0ZWRbMF0pIHtcbiAgICAgICAgICB2YXIgZ2VvbWV0cnkgPSBldmVudC5zZWxlY3RlZFswXS5nZXRHZW9tZXRyeSgpO1xuICAgICAgICAgIGlmIChnZW9tZXRyeSAmJiBnZW9tZXRyeSBpbnN0YW5jZW9mIG9sLmdlb20uTGluZVN0cmluZykge1xuICAgICAgICAgICAgc2VsZi5zaG93QWx0Um91dGUoc2VsZi5yZXNwb25zZSwgZXZlbnQuc2VsZWN0ZWRbMF0uZ2V0SWQoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgICB0aGlzLm1vZFdheUludGVyYWN0aW9uID0gbmV3IG9sLmludGVyYWN0aW9uLk1vZGlmeSh7XG4gICAgICAgIHNvdXJjZTogdGhpcy5yb3V0aW5nV2F5U291cmNlLFxuICAgICAgICBzdHlsZTogW1xuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKScsXG4gICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgICAgICAgICBzdHJva2U6IG5ldyBvbC5zdHlsZS5TdHJva2Uoe1xuICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LCA1MSwgMTE5LCAwLjApJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuXG4gICAgICB9KTtcbiAgICAgIHRoaXMubW9kV2F5SW50ZXJhY3Rpb24ub24oJ21vZGlmeWVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzZWxmLiRidXR0b25PdmVyLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIGxldCBvdmVyUG9pbnQgPSBuZXcgb2wuZ2VvbS5Qb2ludChldmVudC5tYXBCcm93c2VyRXZlbnQuY29vcmRpbmF0ZSkudHJhbnNmb3JtKFwiRVBTRzozODU3XCIsIFwiRVBTRzo0MzI2XCIpO1xuICAgICAgICBzZWxmLnBlcmZvcm1SZXZlcnNlU2VhcmNoKHNlbGYuJG92ZXJJbnB1dCwgb3ZlclBvaW50LmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICBpZiAoIXNlbGYub3ZlclZhbHVlKSB7XG4gICAgICAgICAgc2VsZi5vdmVyVmFsdWUgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLm92ZXJWYWx1ZVtzZWxmLmluZGV4XSA9IG92ZXJQb2ludDtcbiAgICAgICAgc2VsZi4kYnV0dG9uT3Zlci5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgICAgfSk7XG5cbiAgICAgIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihzZWxlY3RJbnRlcmFjdGlvbik7XG4gICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAuYWRkSW50ZXJhY3Rpb24odGhpcy5tb2RXYXlJbnRlcmFjdGlvbik7XG5cblxuICAgICAgdGhpcy5yb3V0aW5nSGludFNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLnJvdXRlckhpbnRMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGluZ0hpbnRTb3VyY2UsXG4gICAgICAgIHN0eWxlOiBmdW5jdGlvbiAoZmVhdHVyZSwgcmVzb2x1dGlvbikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGYucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3NlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3BvaW50X2xvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgICAgcmV0dXJuICghc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkpIHx8IHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wb2ludF9sb2NzdHlsZV0uc3R5bGUoZmVhdHVyZSwgcmVzb2x1dGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxvY2F0aW9uc1NvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKCk7XG4gICAgICB0aGlzLmxvY2F0aW9uc0xheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgICAgIHNvdXJjZTogdGhpcy5sb2NhdGlvbnNTb3VyY2UsXG4gICAgICAgIHpJbmRleDogMlxuICAgICAgfSk7XG4gICAgICB0aGlzLnJvdXRlckZlYXR1cmVzU291cmNlID0gbmV3IG9sLnNvdXJjZS5WZWN0b3IoKTtcbiAgICAgIHRoaXMucm91dGVyRmVhdHVyZXNMYXllciA9IG5ldyBvbC5sYXllci5WZWN0b3Ioe1xuICAgICAgICBzb3VyY2U6IHRoaXMucm91dGVyRmVhdHVyZXNTb3VyY2VcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yb3V0ZXJMYXllckdyb3VwID0gbmV3IG9sLmxheWVyLkdyb3VwKHtcbiAgICAgICAgbGF5ZXJzOiBuZXcgb2wuQ29sbGVjdGlvbihbXG4gICAgICAgICAgdGhpcy5yb3V0ZXJXYXlMYXllcixcbiAgICAgICAgICB0aGlzLnJvdXRlckFsdFdheUxheWVyLFxuICAgICAgICAgIHRoaXMubG9jYXRpb25zTGF5ZXIsXG4gICAgICAgICAgdGhpcy5yb3V0ZXJIaW50TGF5ZXIsXG4gICAgICAgICAgdGhpcy5yb3V0ZXJGZWF0dXJlc0xheWVyLFxuICAgICAgICBdKSxcbiAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLm1hcC5hZGRMYXllcih0aGlzLnJvdXRlckxheWVyR3JvdXApO1xuICAgICAgdmlld0FyZWEgPSB0aGlzLmFkZFVzZXJJbnRlcmZhY2UoJ2FyZWEnKTtcbiAgICAgIHZpZXdSb3V0ZXIgPSB0aGlzLmFkZFVzZXJJbnRlcmZhY2UoJ3JvdXRlcicpO1xuXG4gICAgICB2aWV3Um91dGVyLmFjdGl2YXRlKCk7XG4gICAgICAvL3ZpZXdBcmVhLmFjdGl2YXRlKCk7XG5cbiAgICAgIC8vIHN0b3JlIHNvbWUgdmFycyBmb3IgYWpheC1yZXF1ZXN0c1xuICAgICAgcHJvZmlsZUlkID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5wcm9maWxlO1xuICAgICAgdGhpcy5nZW9TZWFyY2hBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2ggKyAnLycgKyBwcm9maWxlSWQ7XG4gICAgICB0aGlzLmdlb1JldmVyc2VTZWFyY2hBcGkgPSB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLmFwaS5nZW9zZWFyY2hfcmV2ZXJzZSArICcvJyArIHByb2ZpbGVJZDtcbiAgICAgIHRoaXMucm91dGluZ0FwaSA9IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEuYXBpLnJvdXRpbmcgKyAnLycgKyBwcm9maWxlSWQ7XG5cbiAgICAgIHRoaXMuc3Bpbm5lci5oaWRlKCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSxcbiAgICBwcmVPcGVuRnVuY3Rpb246IGZ1bmN0aW9uIChvcHRfb3B0aW9ucykge1xuICAgICAgaWYgKG9wdF9vcHRpb25zICYmIG9wdF9vcHRpb25zLnRvTG9uTGF0KSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVJldmVyc2VTZWFyY2godGhpcy4kdG9JbnB1dCwgb3B0X29wdGlvbnMudG9Mb25MYXQpO1xuICAgICAgICB0aGlzLnRvVmFsdWUgPSBuZXcgb2wuZ2VvbS5Qb2ludChbb3B0X29wdGlvbnMudG9Mb25MYXRbMV0sIG9wdF9vcHRpb25zLnRvTG9uTGF0WzBdXSk7XG4gICAgICB9XG5cbiAgICB9LFxuICAgIHByZUNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgICAgdGhpcy5yb3V0aW5nV2F5U291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRpbmdBbHRXYXlTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucm91dGluZ0hpbnRTb3VyY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMubG9jYXRpb25zU291cmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJvdXRlckZlYXR1cmVzU291cmNlLmNsZWFyKCk7XG5cbiAgICAgICQodGhpcy5yb3V0ZXJJbnN0cnVjdGlvbnNXcmFwcGVyKS5lbXB0eSgpO1xuICAgICAgdGhpcy5jbGVhcklucHV0KHRoaXMuJGZyb21JbnB1dCk7XG4gICAgICBpZiAodGhpcy5vdmVyVmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaWQgaW4gdGhpcy5vdmVyVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyT3Zlcih0aGlzLiRvdmVySW5wdXQsIGlkKTtcbiAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICBpZiAoZWxlbSkge1xuICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbS5wYXJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xlYXJJbnB1dCh0aGlzLiR0b0lucHV0KTtcblxuICAgICAgdGhpcy5yZW1vdmVNYXBJbnB1dEludGVyYWN0aW9uKCk7XG5cbiAgICB9LFxuICAgIHBlcmZvcm1WaWFSb3V0ZTogZnVuY3Rpb24gKGZyb21Qb2ludCwgdG9Qb2ludCwgb3ZlclBvaW50KSB7XG5cbiAgICAgIHZhciB1cmwsXG4gICAgICAgIHNlbGYsXG4gICAgICAgIGZyb21Db29yZCxcbiAgICAgICAgdG9Db29yZCxcbiAgICAgICAgb3ZlckNvb3JkO1xuXG4gICAgICBzZWxmID0gdGhpcztcblxuICAgICAgZnJvbUNvb3JkID0gW2Zyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCBmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXV07XG4gICAgICB0b0Nvb3JkID0gW3RvUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVsxXSwgdG9Qb2ludC5nZXRDb29yZGluYXRlcygpWzBdXTtcbiAgICAgIGlmIChvdmVyUG9pbnQpIHtcbiAgICAgICAgb3ZlckNvb3JkID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIHByb3B0IGluIG92ZXJQb2ludCkge1xuICAgICAgICAgIG92ZXJDb29yZC5wdXNoKFtvdmVyUG9pbnRbcHJvcHRdLmdldENvb3JkaW5hdGVzKClbMV0sIG92ZXJQb2ludFtwcm9wdF0uZ2V0Q29vcmRpbmF0ZXMoKVswXV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMScgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpIHsvL09TUk0tQVBJOjUueCBvciBPUlMtIEFQSVxuICAgICAgICB1cmwgPSAnY29uNGdpcy9yb3V0ZVNlcnZpY2UvMS8zNi8yLycgKyBmcm9tQ29vcmQ7XG5cbiAgICAgICAgaWYgKG92ZXJQb2ludCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3ZlckNvb3JkLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgdXJsICs9ICc7JyArIG92ZXJDb29yZFtpXTtcbiAgICAgICAgfVxuICAgICAgICB1cmwgKz0gJzsnICsgdG9Db29yZDtcbiAgICAgICAgaWYgKHRoaXMucm91dGVQcm9maWxlICYmIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSkge1xuICAgICAgICAgIHVybCArPSAnP3Byb2ZpbGU9JyArIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuXG4gICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAndXJsJzogdXJsXG4gICAgICAgIH0pXG4gICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5zaG93Um91dGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZmVhdHVyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dGZWF0dXJlcyhyZXNwb25zZS5mZWF0dXJlcywgcmVzcG9uc2UudHlwZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLnNwaW5uZXIuaGlkZSgpO1xuICAgICAgICAgICAgc2VsZi51cGRhdGUoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gJyc7XG5cbiAgICAgIH0gZWxzZSB7Ly9PU1JNLUFQSTo8NVxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSB1c2UgYSBtb3JlIG1vZGVybiBBUEktVmVyc2lvbiBmb3IgdGhlIFJvdXRlc2VydmljZVwiKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0ZlYXR1cmVzOiBmdW5jdGlvbiAoZmVhdHVyZXMsIHR5cGUgPSBcInRhYmxlXCIpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgc2VsZi5yb3V0ZXJGZWF0dXJlc1NvdXJjZS5jbGVhcigpO1xuICAgICAgY29uc3QgbGF5ZXIgPSBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sYXllckNvbnRyb2xsZXIuYXJyTGF5ZXJzWzc0XTtcbiAgICAgIGlmIChsYXllciAmJiBsYXllci5jb250ZW50ICYmIGxheWVyLmNvbnRlbnRbMF0gJiYgbGF5ZXIuY29udGVudFswXS5kYXRhICYmIGxheWVyLmNvbnRlbnRbMF0uZGF0YS5wb3B1cCkge1xuICAgICAgICBzZWxmLnJvdXRlckZlYXR1cmVzTGF5ZXIucG9wdXAgPSBsYXllci5jb250ZW50WzBdLmRhdGEucG9wdXA7XG4gICAgICB9XG4gICAgICBjb25zdCB1bnN0eWxlZEZlYXR1cmVzID0gW107XG4gICAgICBjb25zdCBjb250ZW50RmVhdHVyZXMgPSBbXTtcbiAgICAgIGxldCBtaXNzaW5nU3R5bGVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmZWF0dXJlID0gZmVhdHVyZXNbaV1cbiAgICAgICAgbGV0IHJlc3VsdENvb3JkaW5hdGU7XG4gICAgICAgIGlmICh0eXBlID09IFwib3ZlcnBhc3NcIikge1xuICAgICAgICAgIHJlc3VsdENvb3JkaW5hdGUgPSBvbC5wcm9qLnRyYW5zZm9ybShbcGFyc2VGbG9hdChmZWF0dXJlWydsb24nXSksIHBhcnNlRmxvYXQoZmVhdHVyZVsnbGF0J10pXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByZXN1bHRDb29yZGluYXRlID0gb2wucHJvai50cmFuc2Zvcm0oW3BhcnNlRmxvYXQoZmVhdHVyZVsnZ2VveCddKSwgcGFyc2VGbG9hdChmZWF0dXJlWydnZW95J10pXSwgJ0VQU0c6NDMyNicsICdFUFNHOjM4NTcnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9pbnQgPSBuZXcgb2wuZ2VvbS5Qb2ludChyZXN1bHRDb29yZGluYXRlKTtcbiAgICAgICAgbGV0IGNvbnRlbnRGZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUocG9pbnQpO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXRJZChmZWF0dXJlLmlkKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX3pvb20nLCBsYXllci5jbHVzdGVyLnpvb20pO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2NsdXN0ZXJfcG9wdXAnLCBsYXllci5jbHVzdGVyLnBvcHVwKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX2ZpbGxjb2xvcicsIGxheWVyLmNsdXN0ZXIuZmlsbGNvbG9yKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdjbHVzdGVyX2ZvbnRjb2xvcicsIGxheWVyLmNsdXN0ZXIuZm9udGNvbG9yKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdsb2NfbGlua3VybCcsIGxheWVyLmxvY19saW5rdXJsKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9sb2NhdGlvbicsIGxheWVyLmhvdmVyX2xvY2F0aW9uKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdob3Zlcl9zdHlsZScsIGxheWVyLmhvdmVyX3N0eWxlKTtcbiAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCd6b29tX29uY2xpY2snLCBsYXllci56b29tX29uY2xpY2spO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ3RpZCcsIGZlYXR1cmVbJ2lkJ10pO1xuICAgICAgICBsZXQgbG9jc3R5bGUgPSBmZWF0dXJlWydsb2NzdHlsZSddIHx8IGxheWVyLmxvY3N0eWxlO1xuICAgICAgICBjb250ZW50RmVhdHVyZS5zZXQoJ2xvY2F0aW9uU3R5bGUnLCBsb2NzdHlsZSk7XG4gICAgICAgIGlmIChsb2NzdHlsZSAmJiBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdICYmIHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpIHtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZS5zZXRTdHlsZShzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgICBjb250ZW50RmVhdHVyZXMucHVzaChjb250ZW50RmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGVudEZlYXR1cmUuc2V0KCdzdHlsZUlkJywgbG9jc3R5bGUpO1xuICAgICAgICAgIHVuc3R5bGVkRmVhdHVyZXMucHVzaChjb250ZW50RmVhdHVyZSk7XG4gICAgICAgICAgbWlzc2luZ1N0eWxlc1tsb2NzdHlsZV0gPSBsb2NzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB0YWdzIGluIGZlYXR1cmUudGFncykge1xuICAgICAgICAgIGNvbnRlbnRGZWF0dXJlLnNldCh0YWdzLCBmZWF0dXJlLnRhZ3NbdGFnc10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWlzc2luZ1N0eWxlcyAmJiBtaXNzaW5nU3R5bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKG1pc3NpbmdTdHlsZXMsIHtcbiAgICAgICAgICBkb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuc3R5bGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFyIHN0eWxlSWQgPSB1bnN0eWxlZEZlYXR1cmVzW2ldLmdldCgnc3R5bGVJZCcpO1xuICAgICAgICAgICAgICB1bnN0eWxlZEZlYXR1cmVzW2ldLnNldFN0eWxlKHNlbGYub3B0aW9ucy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tzdHlsZUlkXS5zdHlsZSk7XG4gICAgICAgICAgICAgIHNlbGYucm91dGVyRmVhdHVyZXNTb3VyY2UuYWRkRmVhdHVyZSh1bnN0eWxlZEZlYXR1cmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pc3NpbmdTdHlsZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChmZWF0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGYucm91dGVyRmVhdHVyZXNTb3VyY2UuYWRkRmVhdHVyZXMoY29udGVudEZlYXR1cmVzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHBlcmZvcm1BcmVhOiBmdW5jdGlvbihmcm9tUG9pbnQsIGRpc3RhbmNlKXtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBsZXQgZnJvbUNvb3JkID0gW2Zyb21Qb2ludC5nZXRDb29yZGluYXRlcygpWzFdLCBmcm9tUG9pbnQuZ2V0Q29vcmRpbmF0ZXMoKVswXV07XG4gICAgICBcbiAgICAgIGxldCB1cmwgPSAnY29uNGdpcy9hcmVhU2VydmljZS8xLzM2LycgKyBkaXN0YW5jZSArICcvJyArIGZyb21Db29yZDtcbiAgICAgIGlmICh0aGlzLnJvdXRlUHJvZmlsZSAmJiB0aGlzLnJvdXRlUHJvZmlsZS5hY3RpdmUpIHtcbiAgICAgICAgdXJsICs9ICc/cHJvZmlsZT0nICsgdGhpcy5yb3V0ZVByb2ZpbGUuYWN0aXZlO1xuICAgICAgfVxuICAgICAgdGhpcy5zcGlubmVyLnNob3coKTtcblxuICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAndXJsJzogdXJsXG4gICAgICB9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBzZWxmLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHNlbGYuc2hvd0ZlYXR1cmVzKHJlc3BvbnNlWzBdLHJlc3BvbnNlWzFdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zcGlubmVyLmhpZGUoKTtcbiAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSxcbiAgICBhZGRVc2VySW50ZXJmYWNlOiBmdW5jdGlvbiAodHlwZSkge1xuXG4gICAgICBsZXQgc2VsZixcbiAgICAgICAgcm91dGVyVmlldyxcbiAgICAgICAgcm91dGVyQ29udGVudEVsZW1lbnQsXG4gICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIsXG4gICAgICAgIHJvdXRlclZpZXdDb250ZW50V3JhcHBlcixcbiAgICAgICAgYXJlYVZpZXcsXG4gICAgICAgIGFyZWFWaWV3SW5wdXRXcmFwcGVyLFxuICAgICAgICBhcmVhQ29udGVudEVsZW1lbnQsXG4gICAgICAgIGFyZWFWaWV3Q29udGVudFdyYXBwZXIsXG4gICAgICAgIHByaW50LFxuICAgICAgICByb3V0ZVByb2ZpbGUgPSBbXSxcbiAgICAgICAgcm91dGVyRnJvbUxhYmVsLFxuICAgICAgICByb3V0ZXJPdmVyTGFiZWwsXG4gICAgICAgIHJvdXRlclRvTGFiZWwsXG4gICAgICAgIHJvdXRlckZyb21DbGVhcixcbiAgICAgICAgcm91dGVyT3ZlckNsZWFyLFxuICAgICAgICByb3V0ZXJUb0NsZWFyLFxuICAgICAgICBzd2l0Y2hGcm9tVG8sXG4gICAgICAgIGFyZWFGcm9tTGFiZWwsXG4gICAgICAgIGFyZWFGcm9tQ2xlYXIsXG4gICAgICAgIGJ1dHRvbk92ZXI7XG5cbiAgICAgIGlmICh0eXBlID09PSAncm91dGVyJykge1xuICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgcm91dGVyQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb3V0ZXJWaWV3Q29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm91dGVyQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm91dGVyVmlld0lucHV0V3JhcHBlcik7XG4gICAgICAgIHJvdXRlckNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvdXRlclZpZXdDb250ZW50V3JhcHBlcik7XG4gICAgICAgIHNlbGYucm91dGVyVmlld0NvbnRlbnRXcmFwcGVyID0gcm91dGVyVmlld0NvbnRlbnRXcmFwcGVyO1xuXG4gICAgICAgIHRoaXMuZnJvbUlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICAgIHRoaXMuZnJvbUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmZyb21JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMuZnJvbUlucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfRlJPTTtcbiAgICAgICAgdGhpcy5mcm9tSW5wdXQuaWQgPSB0aGlzLmZyb21JbnB1dC5uYW1lID0gXCJyb3V0aW5nRnJvbVwiO1xuXG4gICAgICAgIHJvdXRlckZyb21MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHJvdXRlckZyb21MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nRnJvbScpO1xuICAgICAgICByb3V0ZXJGcm9tTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTV9MQUJFTDtcblxuICAgICAgICByb3V0ZXJGcm9tQ2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm91dGVyRnJvbUNsZWFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfQ0xFQVI7XG4gICAgICAgIHJvdXRlckZyb21DbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgICByb3V0ZXJGcm9tQ2xlYXIuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfQ0xFQVJfSFRNTDtcbiAgICAgICAgdGhpcy4kcm91dGVyRnJvbUNsZWFyID0gJChyb3V0ZXJGcm9tQ2xlYXIpO1xuXG4gICAgICAgIHN3aXRjaEZyb21UbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzd2l0Y2hGcm9tVG8uY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9TV0lUQ0g7XG4gICAgICAgIHN3aXRjaEZyb21Uby50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX1NXSVRDSDtcbiAgICAgICAgdGhpcy4kc3dpdGNoRnJvbVRvID0gJChzd2l0Y2hGcm9tVG8pO1xuXG4gICAgICAgIGJ1dHRvbk92ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uT3Zlci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX09WRVI7XG4gICAgICAgIGJ1dHRvbk92ZXIudGl0bGUgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9PVkVSO1xuICAgICAgICB0aGlzLiRidXR0b25PdmVyID0gJChidXR0b25PdmVyKTtcblxuXG4gICAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMucm91dGVyQnV0dG9uQmFyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfQlVUVE9OQkFSO1xuICAgICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5hcHBlbmRDaGlsZChzd2l0Y2hGcm9tVG8pO1xuICAgICAgICB0aGlzLnJvdXRlckJ1dHRvbkJhci5hcHBlbmRDaGlsZChidXR0b25PdmVyKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpIHsgLy9PcGVuUm91dGVTZXJ2aWNlXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKS5sZW5ndGggPT0gMSkgey8vY2hlY2sgZm9yIHNpbmdsZSBwcm9maWxlIGFuZCBzZXQgdGhpcyBhcyAgYWN0aXZlIHJvdXRpbmcgcHJvZmlsZVxuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKVswXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA+IDEpIHsgLy9jaGVjayBmb3IgbXVsdGlwbGUgcHJvZmlsZXMgYW5kIGFkZCBwcm9maWxlLWNoYW5nZXJcbiAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAkKHRoaXMucm91dGVQcm9maWxlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV1JBUFBFUik7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzAnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1jYXJcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5jYXIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9DQVIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIgPSAkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuY2FyKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQ2FyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMCc7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1oZ3ZcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmhndiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5oZ3YpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9IR1YpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuaGd2KTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlSGd2ID0gJChyb3V0ZVByb2ZpbGUuaGd2KTtcblxuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcxJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzInXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMyddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc0J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzUnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNiddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc3J10pIHsgLy9hZGQgYnV0dG9uIGFuZCBkcm9wZG93biBmb3IgY3ljbGluZyBwcm9maWxlc1xuICAgICAgICAgICAgICBsZXQgc3BhbkJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlID0gJChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgODsgaSsrKSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuZGF0YSgncHJvZmlsZScpKSB7IC8vYWRkIGV4aXN0aW5nIGRlZmF1bHQgcHJvZmlsZSB0byBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJywgaSk7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuYmlrZSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0JJS0UpO1xuXG4gICAgICAgICAgICAgIGlmIChyb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmNoaWxkcmVuLmxlbmd0aCA9PSAxKSB7IC8vaWdub3JlIGRyb3Bkb3duIGxpc3QsIGlmIG9ubHkgb25lIGN5Y2xpbmcgcHJvZmlsZSBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgeyAvL2FwcGVuZCB3aXRoIGRyb3Bkb3duLCBpZiBtdWx0aXBsZSBjeWNsaW5nIHByb2ZpbGVzIGFyZSBlbmFibGVkXG4gICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgIHNwYW5CaWtlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHNwYW5CaWtlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKCQodGhpcykucGFyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc4J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzknXSkgeyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciB3YWxraW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgIGxldCBzcGFuRm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QgPSAkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDg7IGkgPCAxMDsgaSsrKSB7IC8vaXRlcmF0ZSBvdmVyIHBvc3NpYmxlIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcm91dGVQcm9maWxlRm9vdC5kYXRhKCdwcm9maWxlJykpIHsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5mb290KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfRk9PVCk7XG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpIHsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgd2Fsa2luZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIHdhbGtpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgc3BhbkZvb3QuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmZvb3QubGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkZvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEwJ10pIHsgLy9hZGQgYnV0dG9uIGZvciBwcm9maWxlIHdoZWVsY2hhaXJcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLndoZWVsY2hhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyID0gJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlV2hlZWxjaGFpci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEwJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoaWxkQ2xpY2sgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHsgLy9oYW5kbGUgdGhlIGNsaWNrIGluc2lkZSB0aGUgcHJvZmlsZSBkcm9wZG93blxuICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkZWxlbWVudC5kYXRhKCdwcm9maWxlJyk7IC8vYWN0aXZhdGUgc2VsZWN0ZWQgcHJvZmlsZVxuICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJGVsZW1lbnQpO1xuICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTsgLy91cGRhdGUgdGhlIHJvdXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jbGVhclNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHsgLy9mdW5jdGlvbiB0byBhZGp1c3QgY3NzLWNsYXNzZXMgYWZ0ZXIgY2hhbmdpbmcgcHJvZmlsZVxuICAgICAgICAgICAgICBsZXQgc2libGluZ3MgPSAkKGVsZW1lbnQpLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkKHNpYmxpbmdzW2ldKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgaW4gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpIHsgLy9zZXQgZGVmYXVsdCB2YWx1ZSBmb3IgaW5pdGlhbCByb3V0aW5nXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9maWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IHByb2ZpbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIFJvdXRlciBQcm9maWxlcyBlbmFibGVkJylcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZyb21JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyRnJvbUxhYmVsKTtcbiAgICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZnJvbUlucHV0KTtcbiAgICAgICAgdGhpcy5mcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlckZyb21DbGVhcik7XG4gICAgICAgIGlmIChidXR0b25PdmVyICYmIHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX2FwaV9zZWxlY3Rpb24gPT0gJzAnKSB7XG4gICAgICAgICAgdGhpcy4kYnV0dG9uT3Zlci5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRyb3V0ZXJGcm9tQ2xlYXIuaGlkZSgpO1xuXG4gICAgICAgIHRoaXMuJHJvdXRlckZyb21DbGVhci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNlbGYuY2xlYXJJbnB1dChzZWxmLiRmcm9tSW5wdXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRidXR0b25PdmVyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5pbmRleCsrO1xuICAgICAgICAgIHNlbGYuJGJ1dHRvbk92ZXIucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfV1JBUFBFUjtcblxuICAgICAgICAgIHNlbGYub3ZlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgIHNlbGYub3ZlcklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0ZST007XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXQuaWQgPSBzZWxmLm92ZXJJbnB1dC5uYW1lID0gXCJyb3V0aW5nT3ZlclwiO1xuXG4gICAgICAgICAgcm91dGVyT3ZlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncm91dGluZ0Zyb20nKTtcbiAgICAgICAgICByb3V0ZXJPdmVyTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfTGFiZWxfSW50ZXJpbTtcblxuICAgICAgICAgIHJvdXRlck92ZXJDbGVhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0NMRUFSO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9DTEVBUl9IVE1MO1xuICAgICAgICAgIHJvdXRlck92ZXJDbGVhci5pZCA9IHNlbGYuaW5kZXg7XG4gICAgICAgICAgc2VsZi4kcm91dGVyT3ZlckNsZWFyID0gJChyb3V0ZXJPdmVyQ2xlYXIpO1xuXG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHJvdXRlck92ZXJMYWJlbCk7XG4gICAgICAgICAgc2VsZi5vdmVySW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGYub3ZlcklucHV0KTtcbiAgICAgICAgICBzZWxmLm92ZXJJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyT3ZlckNsZWFyKTtcblxuICAgICAgICAgIHJvdXRlclZpZXdJbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5vdmVySW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICBzZWxmLiRyb3V0ZXJPdmVyQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5jbGVhck92ZXIoc2VsZi4kb3ZlcklucHV0LCB0aGlzLmlkKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAvL2J1dHRvbk92ZXIuc2hvdygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuJG92ZXJJbnB1dCA9ICQoc2VsZi5vdmVySW5wdXQpO1xuICAgICAgICAgIHNlbGYuJG92ZXJJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5wZXJmb3JtU2VhcmNoKHNlbGYuJG92ZXJJbnB1dCwgXCJvdmVyVmFsdWVcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHN3aXRjaEZyb21Uby5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciBzd2l0Y2hWYXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nRnJvbVwiKS52YWx1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdXRpbmdGcm9tXCIpLnZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nVG9cIikudmFsdWU7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3V0aW5nVG9cIikudmFsdWUgPSBzd2l0Y2hWYXJOYW1lO1xuICAgICAgICAgIHZhciBzd2l0Y2hWYXJWYWwgPSBzZWxmLmZyb21WYWx1ZTtcbiAgICAgICAgICBzZWxmLmZyb21WYWx1ZSA9IHNlbGYudG9WYWx1ZTtcbiAgICAgICAgICBzZWxmLnRvVmFsdWUgPSBzd2l0Y2hWYXJWYWw7XG4gICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZnJvbUlucHV0ID0gJCh0aGlzLmZyb21JbnB1dCk7XG4gICAgICAgIHRoaXMuJGZyb21JbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYucGVyZm9ybVNlYXJjaChzZWxmLiRmcm9tSW5wdXQsIFwiZnJvbVZhbHVlXCIpO1xuICAgICAgICAgIGlmIChzZWxmLiRmcm9tSW5wdXQudmFsKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHNlbGYuJHJvdXRlckZyb21DbGVhci5zaG93KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuJHJvdXRlckZyb21DbGVhci5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucm91dGVyQnV0dG9uQmFyKTtcbiAgICAgICAgaWYgKHRoaXMucm91dGVQcm9maWxlICYmIHRoaXMucm91dGVQcm9maWxlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJvdXRlUHJvZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVyVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmZyb21JbnB1dFdyYXBwZXIpO1xuICAgICAgICB0aGlzLnRvSW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9XUkFQUEVSO1xuXG4gICAgICAgIHRoaXMudG9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy50b0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy50b0lucHV0LmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfVE87XG4gICAgICAgIHRoaXMudG9JbnB1dC5pZCA9IHRoaXMudG9JbnB1dC5uYW1lID0gXCJyb3V0aW5nVG9cIjtcblxuICAgICAgICByb3V0ZXJUb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcm91dGVyVG9MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdyb3V0aW5nVG8nKTtcbiAgICAgICAgcm91dGVyVG9MYWJlbC5pbm5lckhUTUwgPSBsYW5nQ29uc3RhbnRzLlJPVVRFUl9UT19MQUJFTDtcblxuICAgICAgICByb3V0ZXJUb0NsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJvdXRlclRvQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgICAgcm91dGVyVG9DbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgICByb3V0ZXJUb0NsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICAgIHRoaXMuJHJvdXRlclRvQ2xlYXIgPSAkKHJvdXRlclRvQ2xlYXIpO1xuXG4gICAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQocm91dGVyVG9MYWJlbCk7XG4gICAgICAgIHRoaXMudG9JbnB1dFdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50b0lucHV0KTtcbiAgICAgICAgdGhpcy50b0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZChyb3V0ZXJUb0NsZWFyKTtcblxuXG4gICAgICAgIHRoaXMuJHJvdXRlclRvQ2xlYXIuaGlkZSgpO1xuXG4gICAgICAgIHNlbGYuJHJvdXRlclRvQ2xlYXIuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzZWxmLmNsZWFySW5wdXQoc2VsZi4kdG9JbnB1dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHRvSW5wdXQgPSAkKHRoaXMudG9JbnB1dCk7XG4gICAgICAgIHRoaXMuJHRvSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnBlcmZvcm1TZWFyY2goc2VsZi4kdG9JbnB1dCwgXCJ0b1ZhbHVlXCIpO1xuICAgICAgICAgIGlmIChzZWxmLiR0b0lucHV0LnZhbCgpICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBzZWxmLiRyb3V0ZXJUb0NsZWFyLnNob3coKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi4kcm91dGVyVG9DbGVhci5oaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMudG9JbnB1dFdyYXBwZXIpO1xuXG4gICAgICAgIHNlbGYuc3RhdHVzQmFyLmFwcGVuZENoaWxkKHRoaXMuZ2V0QXR0cmlidXRpb24oKSk7XG4gICAgICAgIGxldCByb3V0ZXJBY3RpdmF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBzZWxmLnJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgICAgICAgICBzZWxmLmFkZE1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcm91dGVyRGVhY3RpdmF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBzZWxmLnJlbW92ZU1hcElucHV0SW50ZXJhY3Rpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdXRlclZpZXcgPSB0aGlzLmFkZFZpZXcoe1xuICAgICAgICAgIG5hbWU6ICdyb3V0ZXItdmlldycsXG4gICAgICAgICAgdHJpZ2dlckNvbmZpZzoge1xuICAgICAgICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuUk9VVEVSX1ZJRVdfQUREUkVTU19JTlBVVCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQsXG4gICAgICAgICAgICB3aXRoSGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgICAgLy97c2VjdGlvbjogdGhpcy50b3BUb29sYmFyLCBlbGVtZW50OiByb3V0ZXJWaWV3SW5wdXRXcmFwcGVyfSxcbiAgICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLmNvbnRlbnRDb250YWluZXIsIGVsZW1lbnQ6IHJvdXRlckNvbnRlbnRFbGVtZW50fSxcbiAgICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHRoaXMudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uIDogcm91dGVyQWN0aXZhdGVGdW5jdGlvbixcbiAgICAgICAgICBkZWFjdGl2YXRlRnVuY3Rpb24gOiByb3V0ZXJEZWFjdGl2YXRlRnVuY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByb3V0ZXJWaWV3O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICBhcmVhQ29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJlYVZpZXdJbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYXJlYVZpZXdDb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcmVhQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYXJlYVZpZXdJbnB1dFdyYXBwZXIpO1xuICAgICAgICBhcmVhQ29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoYXJlYVZpZXdDb250ZW50V3JhcHBlcik7XG4gICAgICAgIHNlbGYuYXJlYVZpZXdDb250ZW50V3JhcHBlciA9IGFyZWFWaWV3Q29udGVudFdyYXBwZXI7XG5cbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGNzc0NvbnN0YW50cy5ST1VURVJfSU5QVVRfV1JBUFBFUjtcblxuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dC5jbGFzc05hbWUgPSBjc3NDb25zdGFudHMuUk9VVEVSX0lOUFVUX0ZST007XG4gICAgICAgIHRoaXMuYXJlYUZyb21JbnB1dC5pZCA9IHRoaXMuYXJlYUZyb21JbnB1dC5uYW1lID0gXCJyb3V0aW5nRnJvbVwiO1xuXG4gICAgICAgIGFyZWFGcm9tTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBhcmVhRnJvbUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JvdXRpbmdGcm9tJyk7XG4gICAgICAgIGFyZWFGcm9tTGFiZWwuaW5uZXJIVE1MID0gbGFuZ0NvbnN0YW50cy5ST1VURVJfRlJPTV9MQUJFTDtcblxuICAgICAgICBhcmVhRnJvbUNsZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFyZWFGcm9tQ2xlYXIuY2xhc3NOYW1lID0gY3NzQ29uc3RhbnRzLlJPVVRFUl9JTlBVVF9DTEVBUjtcbiAgICAgICAgYXJlYUZyb21DbGVhci50aXRsZSA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX1RJVExFO1xuICAgICAgICBhcmVhRnJvbUNsZWFyLmlubmVySFRNTCA9IGxhbmdDb25zdGFudHMuUk9VVEVSX0NMRUFSX0hUTUw7XG4gICAgICAgIHRoaXMuJGFyZWFGcm9tQ2xlYXIgPSAkKGFyZWFGcm9tQ2xlYXIpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfYXBpX3NlbGVjdGlvbiA9PSAnMicpIHsgLy9PcGVuUm91dGVTZXJ2aWNlXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKS5sZW5ndGggPT0gMSkgey8vY2hlY2sgZm9yIHNpbmdsZSBwcm9maWxlIGFuZCBzZXQgdGhpcyBhcyAgYWN0aXZlIHJvdXRpbmcgcHJvZmlsZVxuICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzKVswXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpLmxlbmd0aCA+IDEpIHsgLy9jaGVjayBmb3IgbXVsdGlwbGUgcHJvZmlsZXMgYW5kIGFkZCBwcm9maWxlLWNoYW5nZXJcbiAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAkKHRoaXMucm91dGVQcm9maWxlKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfV1JBUFBFUik7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzAnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1jYXJcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5jYXIpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9DQVIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVDYXIgPSAkKHJvdXRlUHJvZmlsZS5jYXIpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuY2FyKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQ2FyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAnMCc7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEnXSkgeyAvL2FkZCBidXR0b24gZm9yIHByb2ZpbGUgZHJpdmluZy1oZ3ZcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmhndiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5oZ3YpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5ST1VURVJfUFJPRklMRV9IR1YpO1xuICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuaGd2KTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlSGd2ID0gJChyb3V0ZVByb2ZpbGUuaGd2KTtcblxuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVIZ3YuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICcxJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzInXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snMyddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc0J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzUnXVxuICAgICAgICAgICAgICB8fCB0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlc1snNiddXG4gICAgICAgICAgICAgIHx8IHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc3J10pIHsgLy9hZGQgYnV0dG9uIGFuZCBkcm9wZG93biBmb3IgY3ljbGluZyBwcm9maWxlc1xuICAgICAgICAgICAgICBsZXQgc3BhbkJpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgIHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlID0gJChyb3V0ZVByb2ZpbGUuYmlrZSk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgODsgaSsrKSB7IC8vaXRlcmF0ZSBvdmVyIGFsbCBwb3NzaWJsZSBjeWNsaW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuZGF0YSgncHJvZmlsZScpKSB7IC8vYWRkIGV4aXN0aW5nIGRlZmF1bHQgcHJvZmlsZSB0byBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlQmlrZS5kYXRhKCdwcm9maWxlJywgaSk7XG4gICAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmJpa2UubGlzdC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUuYmlrZSkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX0JJS0UpO1xuXG4gICAgICAgICAgICAgIGlmIChyb3V0ZVByb2ZpbGUuYmlrZS5saXN0LmNoaWxkcmVuLmxlbmd0aCA9PSAxKSB7IC8vaWdub3JlIGRyb3Bkb3duIGxpc3QsIGlmIG9ubHkgb25lIGN5Y2xpbmcgcHJvZmlsZSBpcyBlbmFibGVkXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUJpa2UuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgeyAvL2FwcGVuZCB3aXRoIGRyb3Bkb3duLCBpZiBtdWx0aXBsZSBjeWNsaW5nIHByb2ZpbGVzIGFyZSBlbmFibGVkXG4gICAgICAgICAgICAgICAgc3BhbkJpa2UuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmJpa2UpO1xuICAgICAgICAgICAgICAgIHNwYW5CaWtlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS5iaWtlLmxpc3QpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHNwYW5CaWtlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVCaWtlLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhclNpYmxpbmdzKCQodGhpcykucGFyZW50KCkpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJCh0aGlzKS5kYXRhKCdwcm9maWxlJyk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzWyc4J11cbiAgICAgICAgICAgICAgfHwgdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzknXSkgeyAvL2FkZCBidXR0b24gYW5kIGRyb3Bkb3duIGZvciB3YWxraW5nIHByb2ZpbGVzXG4gICAgICAgICAgICAgIGxldCBzcGFuRm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLmZvb3QubGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QgPSAkKHJvdXRlUHJvZmlsZS5mb290KTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDg7IGkgPCAxMDsgaSsrKSB7IC8vaXRlcmF0ZSBvdmVyIHBvc3NpYmxlIHByb2ZpbGVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tYXBDb250cm9sbGVyLmRhdGEucm91dGVyX3Byb2ZpbGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgICAgY2hpbGQuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAkKGNoaWxkKS5kYXRhKCdwcm9maWxlJywgW2ldKTtcbiAgICAgICAgICAgICAgICAgICQoY2hpbGQpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoaWxkQ2xpY2soJCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy4kcm91dGVQcm9maWxlRm9vdC5kYXRhKCdwcm9maWxlJykpIHsgLy9hZGQgZXhpc3RpbmcgZGVmYXVsdCBwcm9maWxlIHRvIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVGb290LmRhdGEoJ3Byb2ZpbGUnLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgJChjaGlsZCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByb3V0ZVByb2ZpbGUuZm9vdC5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAkKHJvdXRlUHJvZmlsZS5mb290KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuUk9VVEVSX1BST0ZJTEVfRk9PVCk7XG5cbiAgICAgICAgICAgICAgaWYgKHJvdXRlUHJvZmlsZS5mb290Lmxpc3QuY2hpbGRyZW4ubGVuZ3RoID09IDEpIHsgLy9pZ25vcmUgZHJvcGRvd24gbGlzdCwgaWYgb25seSBvbmUgd2Fsa2luZyBwcm9maWxlIGlzIGVuYWJsZWRcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlUHJvZmlsZS5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlRm9vdC5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuY2xlYXJTaWJsaW5ncyh0aGlzKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucm91dGVQcm9maWxlLmFjdGl2ZSA9ICQodGhpcykuZGF0YSgncHJvZmlsZScpO1xuICAgICAgICAgICAgICAgICAgc2VsZi5yZWNhbGN1bGF0ZVJvdXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7IC8vYXBwZW5kIHdpdGggZHJvcGRvd24sIGlmIG11bHRpcGxlIHdhbGtpbmcgcHJvZmlsZXMgYXJlIGVuYWJsZWRcbiAgICAgICAgICAgICAgICBzcGFuRm9vdC5hcHBlbmRDaGlsZChyb3V0ZVByb2ZpbGUuZm9vdCk7XG4gICAgICAgICAgICAgICAgc3BhbkZvb3QuYXBwZW5kQ2hpbGQocm91dGVQcm9maWxlLmZvb3QubGlzdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZVByb2ZpbGUuYXBwZW5kQ2hpbGQoc3BhbkZvb3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlUHJvZmlsZUZvb3QuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJCh0aGlzKS5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkKHRoaXMpLmRhdGEoJ3Byb2ZpbGUnKTtcbiAgICAgICAgICAgICAgICAgIHNlbGYucmVjYWxjdWxhdGVSb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXNbJzEwJ10pIHsgLy9hZGQgYnV0dG9uIGZvciBwcm9maWxlIHdoZWVsY2hhaXJcbiAgICAgICAgICAgICAgcm91dGVQcm9maWxlLndoZWVsY2hhaXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcikuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLlJPVVRFUl9QUk9GSUxFX1dIRUVMQ0hBSVIpO1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZVByb2ZpbGVXaGVlbGNoYWlyID0gJChyb3V0ZVByb2ZpbGUud2hlZWxjaGFpcik7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFwcGVuZENoaWxkKHJvdXRlUHJvZmlsZS53aGVlbGNoYWlyKTtcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVQcm9maWxlV2hlZWxjaGFpci5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3ModGhpcyk7XG4gICAgICAgICAgICAgICAgc2VsZi5yb3V0ZVByb2ZpbGUuYWN0aXZlID0gJzEwJztcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNoaWxkQ2xpY2sgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHsgLy9oYW5kbGUgdGhlIGNsaWNrIGluc2lkZSB0aGUgcHJvZmlsZSBkcm9wZG93blxuICAgICAgICAgICAgICBzZWxmLnJvdXRlUHJvZmlsZS5hY3RpdmUgPSAkZWxlbWVudC5kYXRhKCdwcm9maWxlJyk7IC8vYWN0aXZhdGUgc2VsZWN0ZWQgcHJvZmlsZVxuICAgICAgICAgICAgICBzZWxmLmNsZWFyU2libGluZ3MoJGVsZW1lbnQpO1xuICAgICAgICAgICAgICBzZWxmLnJlY2FsY3VsYXRlUm91dGUoKTsgLy91cGRhdGUgdGhlIHJvdXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5jbGVhclNpYmxpbmdzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHsgLy9mdW5jdGlvbiB0byBhZGp1c3QgY3NzLWNsYXNzZXMgYWZ0ZXIgY2hhbmdpbmcgcHJvZmlsZVxuICAgICAgICAgICAgICBsZXQgc2libGluZ3MgPSAkKGVsZW1lbnQpLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkKHNpYmxpbmdzW2ldKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAkKGVsZW1lbnQpLmFkZENsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ZpbGUgaW4gdGhpcy5vcHRpb25zLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJfcHJvZmlsZXMpIHsgLy9zZXQgZGVmYXVsdCB2YWx1ZSBmb3IgaW5pdGlhbCByb3V0aW5nXG4gICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlcl9wcm9maWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9maWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVQcm9maWxlLmFjdGl2ZSA9IHByb2ZpbGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIFJvdXRlciBQcm9maWxlcyBlbmFibGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChhcmVhRnJvbUxhYmVsKTtcbiAgICAgICAgdGhpcy5hcmVhRnJvbUlucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmFyZWFGcm9tSW5wdXQpO1xuICAgICAgICB0aGlzLmFyZWFGcm9tSW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKGFyZWFGcm9tQ2xlYXIpO1xuICAgICAgICB0aGlzLiRhcmVhRnJvbUNsZWFyLmhpZGUoKTtcblxuICAgICAgICB0aGlzLiRhcmVhRnJvbUNsZWFyLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgc2VsZi5jbGVhcklucHV0KHNlbGYuJGZyb21JbnB1dCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5yb3V0ZVByb2ZpbGUgJiYgdGhpcy5yb3V0ZVByb2ZpbGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICBhcmVhVmlld0lucHV0V3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLnJvdXRlUHJvZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFyZWFWaWV3SW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuYXJlYUZyb21JbnB1dFdyYXBwZXIpO1xuICAgICAgICBsZXQgYXJlYUFjdGl2YXRlRnVuY3Rpb24gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHNlbGYuZm5NYXBBcmVhSW50ZXJhY3Rpb24gPSBmdW5jdGlvbihldnQpe1xuICAgICAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICAgICAgaWYoJChzZWxmLmFyZWFGcm9tSW5wdXQpLnZhbCgpID09PSBcIlwiKXtcbiAgICAgICAgICAgICAgc2VsZi5wZXJmb3JtUmV2ZXJzZVNlYXJjaCgkKHNlbGYuYXJlYUZyb21JbnB1dCksb2wucHJvai50b0xvbkxhdChldnQuY29vcmRpbmF0ZSkpO1xuICAgICAgICAgICAgICBzZWxmLmFyZWFWYWx1ZSA9IG5ldyBvbC5nZW9tLlBvaW50KG9sLnByb2oudG9Mb25MYXQoZXZ0LmNvb3JkaW5hdGUpKTtcbiAgICAgICAgICAgICAgc2VsZi5wZXJmb3JtQXJlYShzZWxmLmFyZWFWYWx1ZSw1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2VsZi5vcHRpb25zLm1hcENvbnRyb2xsZXIubWFwLm9uKCdjbGljaycsIHNlbGYuZm5NYXBBcmVhSW50ZXJhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhcmVhRGVhY3RpdmF0ZUZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICBzZWxmLm9wdGlvbnMubWFwQ29udHJvbGxlci5tYXAudW4oJ2NsaWNrJywgc2VsZi5mbk1hcEFyZWFJbnRlcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYXJlYVZpZXcgPSB0aGlzLmFkZFZpZXcoe1xuICAgICAgICAgIG5hbWU6ICdhcmVhLXZpZXcnLFxuICAgICAgICAgIHRyaWdnZXJDb25maWc6IHtcbiAgICAgICAgICAgIHRpcExhYmVsOiAnTE9PT09MJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY3NzQ29uc3RhbnRzLlJPVVRFUl9WSUVXX0FERFJFU1NfSU5QVVQsXG4gICAgICAgICAgICB3aXRoSGVhZGxpbmU6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlY3Rpb25FbGVtZW50czogW1xuICAgICAgICAgICAge3NlY3Rpb246IHRoaXMuY29udGVudENvbnRhaW5lciwgZWxlbWVudDogYXJlYUNvbnRlbnRFbGVtZW50fSxcbiAgICAgICAgICAgIHtzZWN0aW9uOiB0aGlzLnRvcFRvb2xiYXIsIGVsZW1lbnQ6IHRoaXMudmlld1RyaWdnZXJCYXJ9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhY3RpdmF0ZUZ1bmN0aW9uIDogYXJlYUFjdGl2YXRlRnVuY3Rpb24sXG4gICAgICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBhcmVhRGVhY3RpdmF0ZUZ1bmN0aW9uXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJlYVZpZXc7XG4gICAgICB9XG5cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5jNGdNYXBzSG9va3MgPSB3aW5kb3cuYzRnTWFwc0hvb2tzIHx8IHt9O1xuICB3aW5kb3cuYzRnTWFwc0hvb2tzLm1hcENvbnRyb2xsZXJfYWRkQ29udHJvbHMgPSB3aW5kb3cuYzRnTWFwc0hvb2tzLm1hcENvbnRyb2xsZXJfYWRkQ29udHJvbHMgfHwgW107XG4gIHdpbmRvdy5jNGdNYXBzSG9va3MubWFwQ29udHJvbGxlcl9hZGRDb250cm9scy5wdXNoKGZ1bmN0aW9uKHBhcmFtcyl7XG4gICAgbGV0IG1hcENvbnRyb2xsZXIgPSBwYXJhbXMubWFwQ29udHJvbGxlcjtcblxuICAgIG1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUNvbnRyb2wobWFwQ29udHJvbGxlci5jb250cm9scy5yb3V0ZXIpO1xuICAgIGxldCByb3V0ZXIgPSBuZXcgYzRnLm1hcHMuY29udHJvbC5Sb3V0ZXJQbHVnaW4oe1xuICAgICAgdGlwTGFiZWw6IGxhbmdDb25zdGFudHMuQ1RSTF9ST1VURVIsXG4gICAgICB0YXJnZXQ6IHBhcmFtcy5Db250YWluZXIsXG4gICAgICBtYXBDb250cm9sbGVyOiBtYXBDb250cm9sbGVyXG4gICAgfSk7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChyb3V0ZXIpO1xuICAgIG1hcENvbnRyb2xsZXIuY29udHJvbHMucm91dGVyID0gcm91dGVyO1xuICAgIGNvbnNvbGUubG9nKG1hcENvbnRyb2xsZXIubWFwLmNvbnRyb2xzKTtcbiAgfSlcbn0oalF1ZXJ5LCB0aGlzLmM0ZykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1Jlc291cmNlcy9wdWJsaWMvanMvcm91dGluZy1wbHVnaW4uanMiXSwic291cmNlUm9vdCI6IiJ9