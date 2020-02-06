/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {routingConstantsEnglish} from "./routing-constant-i18n-en";
import {routingConstantsGerman} from "./routing-constant-i18n-de";
import ReactDOM from "react-dom";
import React from "react";
import {RouterView} from "./components/c4g-router-view.jsx";

'use strict';

let langRouteConstants = {};
const containerAddresses = {
  arrFromPositions: [],
  arrFromNames: [],
  arrToPositions: [],
  arrToNames: [],
  arrOverPositions: {},
  arrOverNames: {},
};

// hook to make the mapController load the router at the end of its constructor
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params){
  let mapController = params.mapController;
  if(mapController.data.router_enable){
    // mapController.map.removeControl(mapController.controls.router);

    if (typeof mapController.data !== 'undefined') {
      if (mapController.data.lang === "de") {
        langRouteConstants = routingConstantsGerman;
      } else if (mapController.data.lang === "en") {
        langRouteConstants = routingConstantsEnglish;
      } else {
        // fallback
        langRouteConstants = routingConstantsEnglish;
      }
    }

    let routerControlProps = {
      target: document.querySelector('#' + mapController.data.mapDiv + ' .c4g-control-container-top-left'),
      mapController: mapController,
      direction: "top",
      withPosition: false,
      detourRoute: mapController.data.detourRoute,
      detourArea: mapController.data.detourArea,
      containerAddresses: containerAddresses,
      className: "c4g-router-panel",
      langConstants: langRouteConstants
    };
    let openRouter = mapController.data.router_open;

    mapController.routerContainer = document.createElement('div');
    mapController.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
    mapController.components = mapController.components || {};
    mapController.components.router = ReactDOM.render(React.createElement(RouterView, routerControlProps), mapController.routerContainer);
    jQuery(".ol-overlaycontainer-stopevent").append(mapController.routerContainer);
  }
});



