/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */

export class RoutingPermalink {

  _router;

  constructor(router) {
    this._router = router;
    this.linkFragments = router.linkFragments;
  }

  get router() {
    return this._router;
  }

  set router(value) {
    this._router = value;
  }

  /**
   * Sets one key of this.linkFragments to the given value.
   * @param key
   * @param value
   */
  updateLinkFragments(key, value) {
    if (!this.linkFragments) {
      this.linkFragments = {};
    }
    this.linkFragments[key] = value;
    this.updateUrl();
  }

  /**
   * Checks the current values in this.linkFragments and updates the browser URL.
   */
  updateUrl() {
    let url = "?mapsParams=";
    const fragments = this.linkFragments;
    if (fragments.mode && fragments.mode === "area") {
      url += fragments.mode ? "m:" + fragments.mode + "/" : "";
      url += fragments.addressArea ? "a:" + fragments.addressArea[0] + "," + fragments.addressArea[1] + "/" : "";
      url += fragments.detour ? "d:" + fragments.detour + "/" : "";
      url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
      url += fragments.forceStart ? "f:" + fragments.forceStart : "";
      let completeUrl = window.location.pathname + url;
      history.pushState({}, null, completeUrl);
    } else if (fragments.mode && fragments.mode === "route") {
      url += fragments.mode ? "m:" + fragments.mode + "/" : "";
      url += fragments.addressFrom ? "af:" + fragments.addressFrom[0] + "," + fragments.addressFrom[1] + "/" : "";
      url += fragments.addressTo ? "at:" + fragments.addressTo[0] + "," + fragments.addressTo[1] + "/" : "";
      url += fragments.detour ? "d:" + fragments.detour + "/" : "";
      url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
      url += fragments.forceStart ? "f:" + fragments.forceStart : "";
      let completeUrl = window.location.pathname + url;
      history.pushState({}, null, completeUrl);
    }
  }

  /**
   * Checks if there are GET params loaded into the mapData and triggers the search accordingly.
   * The first param is expected to be either "route" or "area" to indicate the type of search.
   * After that, the next param (or the next two, in case of "route") should be an address string.
   * The following parameters are detour/searchtype/forceStart.
   */
  handleInitialParams() {
    const params = this.router.options.mapController.data.initialParams;
    const scope = this;
    if (params) {
      const arrParams = params.split("/").map(pair => pair.split(":"));
      const objParams = {};
      arrParams.forEach(([key,value]) => objParams[key] = value);
      let routerLayers = this.router.options.mapController.data.routerLayers;
      let desiredButton = "";
      iterationLabel:
        for (let key in routerLayers) {
          if (routerLayers.hasOwnProperty(key)) {
            let obj = routerLayers[key];
            for (let innerKey in obj) {
              if (obj.hasOwnProperty(innerKey)) {
                let singleEntry = obj[innerKey];
                let cmpValue = objParams.s;
                if (singleEntry.mapLabel === cmpValue) {
                  desiredButton = innerKey;
                  break iterationLabel;
                }
              }
            }
          }
        }
      // iterate buttons later on when the UI is built
      this.desiredButtonRouting = desiredButton;
      if (objParams.m === "area") {
        this.handleInitialAreaSearch(objParams);
      } else if (objParams.m === "route") {
        this.handleInitialRouteSearch(objParams);
      }
    }
  }

  handleInitialAreaSearch(objParams) {
    this.router.viewArea.activate();
    let center = objParams.a;
    center = center.split(",");
    let detour = objParams.d;
    let searchtype = objParams.s;
    let forceStart = objParams.f;
    if (detour || detour > 1) {
      this.updateLinkFragments("detour", detour);
      jQuery(this.toggleDetourArea).val(detour);
      jQuery(this.toggleDetourArea).trigger('input');
    }
    if (center && center.length === 2) {
      this.updateLinkFragments("addressArea", center);
      this.router.setAreaPoint(center);
    }
    if (searchtype) {
      this.updateLinkFragments("searchType", searchtype);
    }
    if (forceStart) {
      this.updateLinkFragments("forceStart", forceStart);
    }
    // activate area view
    jQuery(".c4g-portside-viewtriggerbar .c4g-area-search").click();
  }

  handleInitialRouteSearch(objParams) {
    this.router.viewRouter.activate();
    let fromAddress = objParams.af.split(",").map(elem => parseFloat(elem));
    let toAddress = objParams.at.split(",").map(elem => parseFloat(elem));
    let detour = objParams.d;
    let searchtype = objParams.s;
    let forceStart = objParams.f;
    console.log(fromAddress, toAddress);
    if (detour) {
      jQuery(this.router.toggleDetourRoute).val(detour);
      jQuery(this.router.toggleDetourRoute).trigger('input');
      this.updateLinkFragments("detour", objParams.d);
    }
    if (fromAddress) {
      // jQuery(this.fromInput).val(fromAddress);
      this.updateLinkFragments("addressFrom", fromAddress);
    }
    if (toAddress) {
      // jQuery(this.toInput).val(toAddress);
      this.updateLinkFragments("addressTo", toAddress);
    }
    if (searchtype) {
      this.updateLinkFragments("searchType", objParams.s);
    }
    if (forceStart) {
      this.updateLinkFragments("forceStart", objParams.f);
    }
    if (fromAddress && toAddress) {
      this.router.setFromPoint(fromAddress);
      this.router.setToPoint(toAddress);
    }
    // activate router view
    jQuery(".c4g-portside-viewtriggerbar .c4g-route-search").click();
  }
}