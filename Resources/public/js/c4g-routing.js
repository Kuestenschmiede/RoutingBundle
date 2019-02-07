import {Sideboard} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard";
import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import * as popupFunctions from "./../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de";
import {routingConstants} from "./routing-constants";
import {routingConstantsEnglish} from "./routing-constant-i18n-en";
import {routingConstantsGerman} from "./routing-constant-i18n-de";
import {CachedInputfield} from "./../../../../CoreBundle/Resources/public/js/c4g-cached-inputfield";
let langRouteConstants = {};

'use strict';
export class Router extends Sideboard {

  /**
   * Constructor
   *
   * @extends {c4g.maps.control.Sideboard}
   *
   * @param  {[type]}  mapController  [description]
   * @param  {[type]}  config         [description]
   */
  constructor(opt_options) {
    // extend options
    let options = $.extend({
      name: 'router',
      create: true,
      mapController: undefined,
      headline: opt_options.mapController.data.routerHeadline || langRouteConstants.ROUTER,
      direction: 'left'
    }, opt_options);
    super(options);
    let mapData = this.options.mapController.data;
    // language stuff
    this.mapData = mapData;
    if (typeof mapData !== 'undefined') {
      if (mapData.lang === "de") {
        langRouteConstants = routingConstantsGerman;
      } else if (mapData.lang === "en") {
        langRouteConstants = routingConstantsEnglish;
      } else {
        // fallback
        langRouteConstants = routingConstantsEnglish;
      }
    }
    this.options = options;
    if (!this.options.mapController) {
      return false;
    }
    this.layerController = this.options.mapController.proxy.layerController;
    this.linkFragments = {
      mode: "",
      addressArea: "",
      addressFrom: "",
      addressTo: "",
      detour: 0,
      searchType: "",
      forceStart: 1
    };
    this.usePermalink = this.options.mapController.data.usePermalink;
  };

  /**
   * Initializes the router.
   * @returns {boolean}
   */
  init() {
    var self,
      viewRouter,
      viewArea,
      selectInteraction,
      profileId;

    self = this;
    this.spinner.show();

    let styles = [
      this.options.mapController.data.router_from_locstyle,
      this.options.mapController.data.router_to_locstyle,
      this.options.mapController.data.router_point_locstyle,
      this.options.mapController.data.areaCenterLocstyle,
      this.options.mapController.data.clickLocstyle
    ];
    if (this.options.mapController.data.priorityFeatures && this.options.mapController.data.priorityLocstyle) {
      styles.push(this.options.mapController.data.priorityLocstyle);
    }
    // check and load location styles via map-proxy
    this.options.mapController.proxy.locationStyleController.loadLocationStyles(styles);
    mapData = mapData[this.options.mapController.data.mapId];

    // Add router layer(s)
    this.routingAltWaySource = new ol.source.Vector();
    this.routingWaySource = new ol.source.Vector();
    this.routerWayLayer = new ol.layer.Vector({
      source: this.routingWaySource,
      zIndex: 1,
      style: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }),
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })
      ]
    });
    this.routerAltWayLayer = new ol.layer.Vector({
      source: this.routingAltWaySource,
      zIndex: 0,
      style: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }),
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })
      ]
    });

    selectInteraction = new ol.interaction.Select({
      style: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }),
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })
      ]
    });
    selectInteraction.on('select', function (event) {
      let feature = event.selected[0];
      if (feature) {
        var geometry = feature.getGeometry();
        if (geometry && geometry instanceof ol.geom.LineString) {
          self.showAltRoute(self.response, feature.getId());
        } else {
          if (feature) {
            self.clickFeatureEntryForFeature(feature);
          }
        }

      }
    });
    this.mapSelectInteraction = selectInteraction;
    this.modWayInteraction = new ol.interaction.Modify({
      source: this.routingWaySource,
      style: [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }),
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })
      ]
    });
    this.modWayInteraction.on('modifyend', function (event) {
      this.$overInput = self.addInterimField();
      let overPoint = new ol.geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
      self.performReverseSearch(this.$overInput, overPoint.getCoordinates());
      let minDistance = Infinity;
      let insertId;
      if (!self.overValue) {
        self.overValue = [];
      }
      else{
        for(let id in self.overValue){
          let distX = overPoint.getCoordinates()[0] - self.overValue[id].getCoordinates()[0];
          let distY = overPoint.getCoordinates()[1] - self.overValue[id].getCoordinates()[1];
          let dist = Math.sqrt(distX * distX + distY * distY);
          if(dist < minDistance){
            minDistance = dist;
            insertId = id;
          }
        }
        let distStartX = self.fromValue.getCoordinates()[0] - overPoint.getCoordinates()[0];
        let distStartY = self.fromValue.getCoordinates()[1] - overPoint.getCoordinates()[1];
        let distStart = Math.sqrt(distStartX * distStartX + distStartY * distStartY);

        let distEndX = self.toValue.getCoordinates()[0] - overPoint.getCoordinates()[0];
        let distEndY = self.toValue.getCoordinates()[1] - overPoint.getCoordinates()[1];
        let distEnd = Math.sqrt(distEndX * distEndX + distEndY * distEndY);

        distStartX = self.fromValue.getCoordinates()[0] - self.overValue[0].getCoordinates()[0];
        distStartY = self.fromValue.getCoordinates()[1] - self.overValue[0].getCoordinates()[1];
        let distStartOld = Math.sqrt(distStartX * distStartX + distStartY * distStartY);

        distEndX = self.toValue.getCoordinates()[0] - self.overValue[self.overValue.length - 1].getCoordinates()[0];
        distEndY = self.toValue.getCoordinates()[1] - self.overValue[self.overValue.length - 1].getCoordinates()[1];
        let distEndOld = Math.sqrt(distEndX * distEndX + distEndY * distEndY);
        if(distStart < distStartOld){
          insertId = 0;
        }
        else if(distEnd < distEndOld){
          insertId++;
        }
      }
      self.overValue.splice(insertId,0,overPoint);
      self.$buttonOver.prop("disabled", false);
      self.recalculateRoute();
    });

    self.options.mapController.map.addInteraction(selectInteraction);
    if (this.options.mapController.data.enableOverPoints) {
      self.options.mapController.map.addInteraction(this.modWayInteraction);
    }

    this.routingHintSource = new ol.source.Vector();
    this.routerHintLayer = new ol.layer.Vector({
      source: this.routingHintSource,
      style: function (feature, resolution) {
        return (!self.options.mapController.proxy) || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
      }
    });

    this.locationsSource = new ol.source.Vector();
    this.locationsLayer = new ol.layer.Vector({
      source: this.locationsSource,
      zIndex: 2
    });
    this.areaSource = new ol.source.Vector();
    this.areaLayer = new ol.layer.Vector({
      source: this.areaSource,
      zIndex: 2
    });
    this.routerFeaturesSource = new ol.source.Vector();
    this.routerFeaturesLayer = new ol.layer.Vector({
      source: this.routerFeaturesSource,
      zIndex: 20,
      // declutter: true
    });
    this.routerLayerGroup = new ol.layer.Group({
      layers: new ol.Collection([
        this.routerWayLayer,
        this.routerAltWayLayer,
        this.locationsLayer,
        this.routerHintLayer,
        this.routerFeaturesLayer,
        this.locationsLayer,
        this.areaLayer
      ]),
      visible: true
    });

    this.options.mapController.map.addLayer(this.routerLayerGroup);
    if (this.mapData.routerLayers) {
      this.viewArea = this.addAreaInterface();
      if (this.options.mapController.data.initialMode === "area") {
        this.viewArea.activate();
      }
    }
    this.viewRouter = this.addRouterInterface();
    if (this.options.mapController.data.initialMode === "route" || !this.viewArea) {
      this.viewRouter.activate();
    }

    // store some vars for ajax-requests
    profileId = this.options.mapController.data.profile;
    this.geoSearchApi = this.options.mapController.data.api.geosearch + '/' + profileId;
    this.geoReverseSearchApi = this.options.mapController.data.api.geosearch_reverse + '/' + profileId;
    this.routingApi = this.options.mapController.data.api.routing + '/' + profileId;

    this.spinner.hide();
    this.handleInitialParams();
    return true;

  }

  /**
   * Sets one key of this.linkFragments to the given value.
   * @param key
   * @param value
   */
  updateLinkFragments(key, value) {
    if (this.usePermalink) {
      if (!this.linkFragments) {
        this.linkFragments = {};
      }
      this.linkFragments[key] = value;
      this.updateUrl();
    }
  }

  /**
   * Checks the current values in this.linkFragments and updates the browser URL, when an update is possible yet.
   */
  updateUrl() {
    let url = "?mapsParams=";
    const fragments = this.linkFragments;
    // only attend updating url when every value is set
    if (fragments.mode && fragments.mode === "area") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.addressArea ? "a:" + fragments.addressArea + "/" : "";
        url += fragments.detour ? "d:" + fragments.detour + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";
        let completeUrl = window.location.pathname + url;
        history.pushState({}, null, completeUrl);
    } else if (fragments.mode && fragments.mode === "route") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.addressFrom ? "af:" + fragments.addressFrom + "/" : "";
        url += fragments.addressTo ? "at:" + fragments.addressTo + "/" : "";
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
    const params = this.options.mapController.data.initialParams;
    const scope = this;
    if (params) {
      const arrParams = params.split("/").map(pair => pair.split(":"));
      const objParams = {};
      arrParams.forEach(([key,value]) => objParams[key] = value);
      let routerLayers = this.options.mapController.data.routerLayers;
      let desiredButton = "";
      iterationLabel:
        for (let key in routerLayers) {
          if (routerLayers.hasOwnProperty(key)) {
            let obj = routerLayers[key];
            for (let innerKey in obj) {
              if (obj.hasOwnProperty(innerKey)) {
                let singleEntry = obj[innerKey];
                let cmpValue = objParams.s
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
        this.viewArea.activate();
        let center = objParams.m;
        let detour = objParams.d;
        let searchtype = objParams.s;
        let forceStart = objParams.f;

        if (detour || detour > 1) {
          this.updateLinkFragments("detour", detour);
          $(this.toggleDetourArea).val(detour);
          $(this.toggleDetourArea).trigger('input');
        }
        if (center) {
          this.updateLinkFragments("addressArea", center);
          $(this.areaFromInput).val(center);
          this.performSearch($(this.areaFromInput), "areaValue", function () {
            if (scope.areaValue) {
              let point = $.extend(true, {}, scope.areaValue);
              let feature = new ol.Feature({geometry: point.transform('EPSG:4326', 'EPSG:3857')});
              var styleId = scope.options.mapController.data.areaCenterLocstyle;

              var locStyle = scope.options.mapController.proxy.locationStyleController.arrLocStyles[styleId];
              if (locStyle) {
                feature.setStyle(locStyle.style);
                scope.areaSource.addFeature(feature);
                scope.performArea(scope.areaValue);
              } else {
                scope.options.mapController.proxy.locationStyleController.loadLocationStyles([styleId], {
                  done: function () {
                    let locStyle = scope.options.mapController.proxy.locationStyleController.arrLocStyles;
                    feature.setStyle(locStyle.style);
                    scope.areaSource.addFeature(feature);
                    scope.performArea(scope.areaValue);
                  }
                });
              }
            }
          });
        }
        if (searchtype) {
          this.updateLinkFragments("searchType", searchtype);
        }
        if (forceStart) {
          this.updateLinkFragments("forceStart", forceStart);
        }
        // activate area view
        $(".c4g-portside-viewtriggerbar .c4g-area-search").click();

      } else if (objParams.m === "route") {
        this.viewRouter.activate();
        let fromAddress = objParams.af;
        let toAddress = objParams.at;
        let detour = objParams.d;
        let searchtype = objParams.s;
        let forceStart = objParams.f;
        if (detour) {
          $(this.toggleDetourRoute).val(detour);
          $(this.toggleDetourRoute).trigger('input');
          this.updateLinkFragments("detour", objParams.d);
        }
        if (fromAddress) {
          $(this.fromInput).val(fromAddress);
          this.updateLinkFragments("addressFrom", fromAddress);
        }
        if (toAddress) {
          $(this.toInput).val(toAddress);
          this.updateLinkFragments("addressTo", toAddress);
        }
        if (searchtype) {
          this.updateLinkFragments("searchType", objParams.s);
        }
        if (forceStart) {
          this.updateLinkFragments("forceStart", objParams.f);
        }
        if (fromAddress && toAddress) {
          this.performSearch($(this.fromInput), "fromValue", function () {
            if (scope.fromValue) {
              scope.performSearch($(scope.toInput), "toValue", function () {
                if (scope.fromValue && scope.toValue) {
                  let fromStyleId = scope.options.mapController.data.router_from_locstyle;
                  let toStyleId = scope.options.mapController.data.router_to_locstyle;
                  let fromStyle = scope.options.mapController.proxy.locationStyleController.arrLocStyles[fromStyleId].style;
                  let toStyle = scope.options.mapController.proxy.locationStyleController.arrLocStyles[toStyleId].style;
                  let fromPoint = scope.fromValue.clone();
                  fromPoint.transform('EPSG:4326', 'EPSG:3857');
                  let toPoint = scope.toValue.clone();
                  toPoint.transform('EPSG:4326', 'EPSG:3857');
                  let fromFeature = new ol.Feature({geometry: fromPoint});
                  fromFeature.setStyle(fromStyle);
                  let toFeature = new ol.Feature({geometry: toPoint});
                  toFeature.setStyle(toStyle);
                  scope.locationsSource.addFeature(fromFeature);
                  scope.locationsSource.addFeature(toFeature);
                  if (forceStart) {
                    scope.performViaRoute(scope.fromValue, scope.toValue);
                  }
                }
              });
            }
          });
        }
        // activate router view
        $(".c4g-portside-viewtriggerbar .c4g-route-search").click();
      }
    }
  }

  /**
   * Executes setup code on opening the router.
   * @param opt_options
   */
  preOpenFunction(opt_options) {
    if (opt_options && opt_options.toLonLat) {
      this.performReverseSearch(this.$toInput, opt_options.toLonLat);
      this.recalculateRoute();
      this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
    }
  }

  /**
   * Removes the router click interaction from the map upon hiding the router.
   */
  preHideFunction() {
    this.removeMapInputInteraction();
  }

  /**
   * Clears all router input elements, feature sources and removes every map interaction.
   */
  preCloseFunction() {

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
  }

  /**
   * Removes the router click interaction from the map.
   */
  removeMapInputInteraction() {

    var self = this;
    this.options.mapController.map.un('click', self.fnMapRouterInteraction);
  }

  /**
   * Adds a click interaction for the router. Upon map click, the clicked points are converted to locations and the
   * route search is started, as long as all mandatory properties are set.
   */
  addMapInputInteraction() {

    var self = this,
      coordinate;

    self.fnMapRouterInteraction = function (evt) {

      coordinate = ol.proj.toLonLat(evt.coordinate);
      // clear old features
      self.areaSource.clear();
      if (self.$fromInput.val() === "") {
        //self.$fromInput.val(ol.proj.toLonLat(evt.coordinate));
        self.performReverseSearch(self.$fromInput, coordinate);
        self.fromValue = new ol.geom.Point(coordinate);
        self.recalculateRoute();

        //self.$fromInput.trigger('change');
      } else if (self.$toInput.val() === "") {
        //self.$toInput.val(ol.proj.toLonLat(evt.coordinate));
        self.performReverseSearch(self.$toInput, coordinate);
        self.toValue = new ol.geom.Point(coordinate);
        self.recalculateRoute();
      } else if (self.$overInput) {
        if (self.$overInput.val() === "") {
          self.performReverseSearch(self.$overInput, coordinate);
          if (!self.overValue) {
            self.overValue = [];
          }
          self.overValue.push(new ol.geom.Point(coordinate));
          self.recalculateRoute();
          self.$buttonOver.prop("disabled", false);
        }
      }
    };

    this.options.mapController.map.on('click', self.fnMapRouterInteraction);
  }

  /**
   * Creates a wrapper element for the router attribution.
   * @returns {HTMLElement}
   */
  getAttribution() {
    let self = this,
      attributionSearch,
      attributionRouter,
      attributionRouterHost,
      attributionWrapper,
      attributionHtml;
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
      case "3":
        attributionRouter = 'Powered by <a href="https://www.graphhopper.com/">GraphHopper API</a>';
        break;
    }
    switch (self.options.mapController.data.geosearch.geosearch_engine) {
      case "1": //OSM
        attributionSearch = '- Geocoder by <a target="_blank" href="https://nominatim.openstreetmap.org/">OpenStreetMap</a> ';
        break;
      case "2": //Mapquest
        attributionSearch = '- Geocoder by <a target="_blank" href="http://www.mapquest.com/">MapQuest</a> ';
        break;
      case "3": //custom
        attributionSearch = '- Nominatim-Geocoder ';
        break;
      case "4": //con4gis
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
      case "3":
        attributionRouterHost = '';
    }

    //ToDo check params
    attributionHtml = attributionRouter + attributionSearch + attributionRouterHost;
    attributionWrapper = document.createElement('div');
    attributionWrapper.className = routingConstants.ROUTER_ATTRIBUTION_WRAPPER;

    attributionWrapper.innerHTML = attributionHtml;

    if (self.options.mapController.data.router_attribution) {
      attributionWrapper.innerHTML = self.options.mapController.data.router_attribution;
    }

    return attributionWrapper;

  }

  /**
   * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
   */
  recalculateRoute() {
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
      }
      else {
        this.performViaRoute(this.fromValue, this.toValue);
      }
    }

  }

  /**
   * Executes a route search with the given from and to points. Displays features and feature entries on success. Uses
   * overpoints, if any are given.
   * @param fromPoint
   * @param toPoint
   * @param overPoint
   * @returns {string}
   */
  performViaRoute(fromPoint, toPoint, overPoint) {

    var url,
      self,
      fromCoord,
      toCoord,
      overCoord;

    self = this;
    this.areaSource.clear();
    this.mapSelectInteraction.getFeatures().clear();
    if (!fromPoint) {
      fromPoint = this.fromValue;
    }
    if (!toPoint) {
      toPoint = this.toValue;
    }
    if (!overPoint) {
      if (this.overValue) {
        overPoint = this.overValue;
      }
    }
    fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
    toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
    if (overPoint) {
      overCoord = new Array();
      for (var propt in overPoint) {
        if (overPoint.hasOwnProperty(propt)) {
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
    }

    if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2' || this.options.mapController.data.router_api_selection == '3') {//OSRM-API:5.x or ORS- API
      let profileId = this.options.mapController.data.profile;
      url = 'con4gis/routeService/' + profileId + '/' + $(self.routerLayersSelect).val() + '/' + $(self.toggleDetourRoute).val() + '/' + fromCoord;

      if (overPoint) {
        for (var i = 0; i < overCoord.length; i++)
          url += ';' + overCoord[i];
      }
      url += ';' + toCoord;
      if (this.routeProfile && this.routeProfile.active) {
        url += '?profile=' + this.routeProfile.active;
      }

      if (self.routeAjax) {
        self.routeAjax.abort();
      }

      this.spinner.show();

      self.routeAjax = jQuery.ajax({
        'url': url
      })
        .done(function (response) {
          self.response = response;
          if (response) {
            if (response.error && response.error != "ROUTER_ERROR_POLYLINE") {
              let errorDiv = self.showRouterError(langRouteConstants[response.error]);
              $(self.fromInput).parent()[0].appendChild(errorDiv);
            } else {
              self.showRouteLayer(response);
              if (response.features) {
                $(".router-content-switcher").css('display', 'block');
              }
              self.showRouteInstructions(response, 0);
              if (response.features && response.features.length > 0) {
                let sortedFeatures = self.showFeatures(response.features, response.type, "router");

                self.showFeaturesInPortside(sortedFeatures, response.type, "router");
                $(self.areaFeatureWrapper).empty();
                $(self.areaFromInput).val("");
              }
            }
          }
        })
        .always(function () {
          self.routeAjax = undefined;
          self.spinner.hide();
          self.update();
          if (self.options.mapController.data.closeAfterSearch) {
            self.close(true);
          }
        });


      return '';

    } else {//OSRM-API:<5
      try {
        url = self.routingApi + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
        this.spinner.show();

        jQuery.ajax({
          'url': url
        })
          .done(function (response) {

            if (response) {
              self.showRoute(response);
            }

          })
          .always(function () {
            self.spinner.hide();
            self.update();
          });

        return '';
      }
      catch (Exception) {
        console.log("Please use a more modern API-Version for the Routeservice")
      }

    }
  }

  /**
   * Displays the main route.
   * @param routeResponse
   */
  showRoute(routeResponse) {

    this.showRouteLayer(routeResponse, 0);
    this.showRouteInstructions(routeResponse, 0);
  }

  /**
   * Show an alternate route.
   * @param routeResponse
   * @param routeNumber
   */
  showAltRoute(routeResponse, routeNumber) {
    this.showRouteLayer(routeResponse, routeNumber);
    this.showRouteInstructions(routeResponse, routeNumber);
  }

  /**
   * Displays a route on the map.
   * @param routeResponse
   * @param routeNumber
   */
  showRouteLayer(routeResponse, routeNumber) {

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

      if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {//OSRM-API:5.x
        wayPolyline = new ol.format.Polyline();

        // add route

        if (routeResponse.routes && routeResponse.routes[1]) {//check for alternative route
          if (routeNumber == 1) {
            altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            altRouteFeatures[0].setId(0);
          }
          else {
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


      }
      else if(this.options.mapController.data.router_api_selection == '0'){//OSRM-API:<5
        wayPolyline = new ol.format.Polyline({
          'factor': this.options.mapController.data.router_viaroute_precision || 1e6
        });

        // add route
        routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapView.getProjection()
        });
      }
      else if (this.options.mapController.data.router_api_selection == '3'){
        wayPolyline = new ol.format.Polyline();
        if (routeResponse.paths && routeResponse.paths[1]) {//check for alternative route
          if (routeNumber == 1) {
            altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[0].points, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            altRouteFeatures[0].setId(0);
          }
          else {
            altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[1].points, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            altRouteFeatures[0].setId(1);
          }
        }
        routeFeatures = wayPolyline.readFeatures(routeResponse.paths[routeNumber].points, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapView.getProjection()
        });
        routeFeatures[0].setId(routeNumber);
      }
      if (this.options.mapController.data.router_alternative == '1') {
        if ((routeResponse.routes && (routeResponse.routes.length > 1) && (routeResponse.routes[1])) || (routeResponse.paths && (routeResponse.paths.length > 1) && (routeResponse.paths[1]))) {
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
      mapView.fit(
        routeFeatures[0].getGeometry(),
        {
          size: this.options.mapController.map.getSize(),
          padding: [0, rightPadding, 0, leftPadding]
        }
      );
    }
  }

  /**
   * Clears the current features from the map and displays the given new features. The features are sorted by the configured
   * property. The function takes the backend configuration according to prioritized features into account.
   * @param features
   * @param type
   * @param mode
   * @returns {*}
   */
  showFeatures(features, type = "table", mode = "router") {
    const self = this;
    self.routerFeaturesSource.clear();
    // interim clear of feature selection
    if (!features) {
      // TODO the calling function expects a return value; should probably be fixed
      return [];
    }
    const mapData = this.mapData;
    const layerId = mode === "router" ? $(this.routerLayersSelect).val() : $(this.areaLayersSelect).val();
    const layer = self.options.mapController.proxy.layerController.arrLayers[layerId];
    let activeLayer = mode === "router" ? self.activeLayerValue : self.activeLayerValueArea;
    const unstyledFeatures = [];
    const contentFeatures = [];
    let missingStyles = [];
    const priceSortedFeatures = features.slice();
    let bestFeatures = [];
    this.bestFeatureIds = [];
    if (mapData.priorityFeatures && mapData.priorityLocstyle && features.length > 0) {
      // sort by selected value for the map label ascending
      priceSortedFeatures.sort(function (a, b) {
        return parseFloat(a[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) - parseFloat(b[mapData.routerLayers[layerId][activeLayer]['mapLabel']]);
      });
      let featureCount = parseInt(mapData.priorityFeatures, 10);
      let upperBound = featureCount > priceSortedFeatures.length ? priceSortedFeatures.length : featureCount;
      for (let i = 0; i < upperBound; i++) {
        bestFeatures[i] = priceSortedFeatures[i];
        this.bestFeatureIds.push(priceSortedFeatures[i]['id']);
      }
    }
    featureLoop:
      for (let i = 0; features && (i < features.length); i++) {
        let label = "";
        let feature = features[i];
        let resultCoordinate;
        let contentFeature;
        if (type == "overpass") {
          if (feature.type === "node" && !feature.tags) {
            continue;
          }
          contentFeature = self.layerController.featureFromOverpass(feature, features, layer, true);
          if(!contentFeature){
            continue;
          }
        }
        else {
          resultCoordinate = ol.proj.transform([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
          let point = new ol.geom.Point(resultCoordinate);
          contentFeature = new ol.Feature(point);
          contentFeature.setId(feature.id);
          contentFeature.set('loc_linkurl', layer.loc_linkurl);
          contentFeature.set('hover_location', layer.hover_location);
          contentFeature.set('hover_style', layer.hover_style);
          contentFeature.set('zoom_onclick', layer.zoom_onclick);
          contentFeature.set('tid', feature.id);
        }


        if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
          label = feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
        }
        else if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature.tags && feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
          label = feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
        }

        let locstyle = feature['locstyle'] || layer.locstyle;
        if (mapData.priorityFeatures && mapData.priorityLocstyle) {
          if (bestFeatures.includes(feature)) {
            locstyle = mapData.priorityLocstyle;
          }
        }

        contentFeature.set('locationStyle', locstyle);
        contentFeature.set('zIndex', i);
        contentFeature.set('label', label);
        if (locstyle && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          contentFeature.setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
          if (self.options.mapController.data.hideFeaturesWithoutLabel) {
            if (label && label !== "") {
              contentFeatures.push(contentFeature);
            }
          } else {
            contentFeatures.push(contentFeature);
          }
        }
        else {
          contentFeature.set('styleId', locstyle);
          if (self.options.mapController.data.hideFeaturesWithoutLabel) {
            if (label && label !== "") {
              unstyledFeatures.push(contentFeature);
              missingStyles[locstyle] = locstyle;
            }
          } else {
            unstyledFeatures.push(contentFeature);
            missingStyles[locstyle] = locstyle;
          }
        }
        for (let tags in feature.tags) {
          contentFeature.set(tags, feature.tags[tags]);
        }
      }
    if (missingStyles && missingStyles.length > 0) {
      self.options.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
        done: function () {
          for (let i = 0; i < unstyledFeatures.length; i++) {
            var styleId = unstyledFeatures[i].get('styleId');
            unstyledFeatures[i].setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);
            self.routerFeaturesSource.addFeature(unstyledFeatures[i]);
          }
          missingStyles = undefined;
        }
      });
    }
    if (features && features.length > 0) {
      this.routerFeaturesSource.addFeatures(contentFeatures);
    }
    this.update();
    return priceSortedFeatures;
  }

  /**
   * Renders the feature list in the portside router, if configured.
   * @param features
   * @param type
   * @param mode
   */
  showFeaturesInPortside(features, type, mode) {
    const scope = this;
    if (this.options.mapController.data.showFeatures) {
      if (scope[mode + "FeatureWrapper"] === undefined) {
        scope[mode + "FeatureWrapper"] = document.createElement('div');
        $(scope[mode + "FeatureWrapper"]).addClass(mode + '-features-display');
        scope[mode + "ViewContentWrapper"].appendChild(scope[mode + "FeatureWrapper"]);
      }
    }
    scope.features = features;
    scope.type = type;
    scope.reloadFeatureValues(mode);
  }

  /**
   * Translates a string description into the correct instruction icon (OpenSourceRoutingMachine icons).
   * @param strMod
   * @param strType
   * @returns {string}
   */
  getInstructionIcon(strMod, strType) {
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
  }

  /**
   * Translates an integer number into the correct instruction icon (OpenRouteService icons).
   * @param intType
   * @returns {string}
   */
  getInstructionIconORS(intType) {
    let image;
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
  }

  /**
   * Translates an integer number into the correct instruction icon (Graphhopper icons).
   * @param intType
   * @returns {string}
   */
  getInstructionIconGraphhopper(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "continue.png";
        break;
      case -2:
        image = "turn-left.png";
        break;
      case 2:
        image = "turn-right.png";
        break;
      case -1:
        image = "turn-left.png";
        break;
      case 1:
        image = "turn-right.png";
        break;
      case -3:
        image = "sharp-left.png";
        break;
      case 3:
        image = "sharp-right.png";
        break;
      case -7:
        image = "slight-left.png";
        break;
      case 7:
        image = "slight-right.png";
        break;
      case 6:
        image = "round-about.png";
        break;
      case 4:
        image = "target.png";
        break;
      case 5:
        image = "target.png";
        break;
      case -98:
        image = "u-turn.png";
        break;
      case 99:
        image = "head.png";
        break;

    }
    return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
  }

  /**
   * Translates the type of an instruction into a string representation.
   * @param strType
   * @returns {*}
   */
  getTypeText(strType) {
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
    return langRouteConstants[textID];
  }

  /**
   * Translates a modifier into a string representation.
   * @param strModifier
   * @returns {*}
   */
  getModifierText(strModifier) {
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
    return langRouteConstants[textID];
  }

  /**
   * Get the icon for a given instruction ID.
   * @param instructionId
   * @returns {string}
   */
  getDrivingInstructionIcon(instructionId) {
    var id,
      image;

    id = instructionId.replace(/^11-\d{1,}$/, "11");    // dumb check, if there is a roundabout (all have the same icon)

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

  }

  /**
   * Gets instruction text.
   * @param id
   * @returns {*}
   */
  getText(id) {

    var text_id = "ROUTER_" + id;

    if (langRouteConstants[text_id] === undefined) {
      console.warn(text_id + " can't find in language files.");
    }
    return langRouteConstants[text_id];
  }

  /**
   * Translates an instruction ID into a readable string representation.
   * @param instructionId
   * @returns {*}
   */
  getDrivingInstruction(instructionId) {

    var id,
      description;

    id = "DIRECTION_" + instructionId.replace(/^11-\d{2,}$/, "11-x");   // dumb check, if there are 10+ exits on a roundabout (say the same for exit 10+)

    description = this.getText(id);
    if (!description) {
      description = this.getText('DIRECTION_0');
    }

    return description;
  }

  /**
   * Displays the route instructions in the portside router.
   * @param routeResponse
   * @param routeNumber
   */
  showRouteInstructions(routeResponse, routeNumber) {

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
    if (!this.options.mapController.data.showInstructions) {
      return;
    }

    if (self.routerInstructionsWrapper === undefined) {
      self.routerInstructionsWrapper = document.createElement('div');
      self.routerInstructionsWrapper.className = routingConstants.ROUTER_INSTRUCTIONS_WRAPPER;
      self.routerViewContentWrapper.appendChild(self.routerInstructionsWrapper);
    } else {
      $(self.routerInstructionsWrapper).empty();
    }

    routerInstructionsHeader = document.createElement('div');
    routerInstructionsHeader.className = routingConstants.ROUTER_INSTRUCTIONS_HEADER;

    if (routeResponse) {
      if (!(routeResponse.features && routeResponse.features.length > 0) || !this.options.mapController.data.showFeatures) {
        $(".c4g-router-instructions-wrapper").css('display', 'block');
      }
      if (this.options.mapController.data.router_api_selection == '1') {//OSRM-API:5.x
        if (routeResponse.routes[routeNumber].legs[0].summary) {
          route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
          route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
          if (routeResponse.routes[routeNumber].legs[1]) {
            route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
          }

        }
        total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].distance);
        total_time = this.toHumanTime(routeResponse.routes[routeNumber].duration);
      }

      else if (this.options.mapController.data.router_api_selection == '0') {//OSRM-API:<5
        if (routeResponse.route_name) {
          route_name_0 = routeResponse.route_name[0];
          route_name_1 = routeResponse.route_name[1];
        }

        if (routeResponse.route_summary) {
          total_distance = this.toHumanDistance(routeResponse.route_summary.total_distance);
          total_time = this.toHumanTime(routeResponse.route_summary.total_time);
        }


      }
      else if (this.options.mapController.data.router_api_selection == '2') {//OSR-API
        total_time = this.toHumanTime(routeResponse.routes[routeNumber].summary.duration);
        total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].summary.distance);
      }
      else if (this.options.mapController.data.router_api_selection == '3') { //Graphhopper
        total_distance = this.toHumanDistance(routeResponse.paths[0].distance);
        total_time = this.toHumanTime(routeResponse.paths[0].time / 1000) ;
      }

      if (route_name_0 && route_name_1) {
        routerInstructionsHeader.innerHTML = '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
      }
      else if (this.routeProfile && this.routeProfile.active) {
        routerInstructionsHeader.innerHTML = '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.options.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + langRouteConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
      }


      self.routerInstructionsWrapper.appendChild(routerInstructionsHeader);

      routerInstruction = document.createElement('div');

      routerInstructionsHtml = '<table class="' + routingConstants.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';
      if (this.options.mapController.data.router_api_selection === '1') {//OSRM-API:5.x
        for (j = 0; j < routeResponse.routes[routeNumber].legs.length; j += 1) {
          for (i = 0; i < routeResponse.routes[routeNumber].legs[j].steps.length; i += 1) {
            instr = routeResponse.routes[routeNumber].legs[j].steps[i];

            strType = instr.maneuver.type;
            if (instr.maneuver.modifier) {
              strMod = instr.maneuver.modifier;
            }
            rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_ODD;

            if (i % 2 === 0) {
              rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_EVEN;
            }

            rowstyle += " " + routingConstants.ROUTER_INSTRUCTIONS_ITEM;

            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
            routerInstructionsHtml += '<img class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIcon(strMod, strType) + '" alt=""/>';
            routerInstructionsHtml += '</td>';


            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';


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

            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
            if (i !== routeResponse.routes[routeNumber].legs[0].steps.length - 1) {
              routerInstructionsHtml += this.toHumanDistance(instr.distance);
            }
            routerInstructionsHtml += "</td>";

            routerInstructionsHtml += "</tr>";
          }
        }

      } else if (this.options.mapController.data.router_api_selection === '0') {//OSRM-API:<5
        for (i = 0; i < routeResponse.route_instructions.length; i += 1) {
          instr = routeResponse.route_instructions[i];
          rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_ODD;

          if (i % 2 === 0) {
            rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_EVEN;
          }

          rowstyle += " " + routingConstants.ROUTER_INSTRUCTIONS_ITEM;

          routerInstructionsHtml += '<tr class="' + rowstyle + '">';

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
          routerInstructionsHtml += '<img class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getDrivingInstructionIcon(instr[0]) + '" alt=""/>';
          routerInstructionsHtml += '</td>';

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr[3] + '">';

          // build route description
          if (instr[1] !== "") {
            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "$1").replace(/%s/, instr[1]).replace(/%d/, this.getText(instr[6]));
          } else {
            routerInstructionsHtml += this.getDrivingInstruction(instr[0]).replace(/\[(.*)\]/, "").replace(/%d/, this.getText(instr[6]));
          }


          routerInstructionsHtml += '</div>';
          routerInstructionsHtml += "</td>";

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
          if (i !== routeResponse.route_instructions.length - 1) {
            routerInstructionsHtml += this.toHumanDistance(instr[5]);
          }
          routerInstructionsHtml += "</td>";

          routerInstructionsHtml += "</tr>";
        }
      }
      else if (this.options.mapController.data.router_api_selection === '2') {//OpenRouteService
        for (j = 0; j < routeResponse.routes[routeNumber].segments.length; j += 1) {
          for (i = 0; i < routeResponse.routes[routeNumber].segments[j].steps.length; i += 1) {
            instr = routeResponse.routes[routeNumber].segments[j].steps[i];

            strType = instr.type;

            rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_ODD;

            if (i % 2 === 0) {
              rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_EVEN;
            }

            rowstyle += " " + routingConstants.ROUTER_INSTRUCTIONS_ITEM;

            routerInstructionsHtml += '<tr class="' + rowstyle + '">';

            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
            routerInstructionsHtml += '<img class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconORS(strType) + '" alt=""/>';
            routerInstructionsHtml += '</td>';

            if (instr.maneuver) {
              routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';
            }
            else {
              routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + 0 + '">';
            }


            // build route description

            routerInstructionsHtml += instr.instruction;


            routerInstructionsHtml += '</div>';
            routerInstructionsHtml += "</td>";

            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
            if (i !== routeResponse.routes[routeNumber].segments[0].steps.length - 1) {
              routerInstructionsHtml += this.toHumanDistance(instr.distance);
            }
            routerInstructionsHtml += "</td>";

            routerInstructionsHtml += "</tr>";
          }
        }
      }
      else if (this.options.mapController.data.router_api_selection === '3') { // Graphhopper
        for (j = 0; j < routeResponse.paths[routeNumber].instructions.length; j += 1) {
          instr = routeResponse.paths[routeNumber].instructions[j];

          strType = (j == 0) ? 99 : instr.sign;

          rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_ODD;

          if (i % 2 === 0) {
            rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_EVEN;
          }

          rowstyle += " " + routingConstants.ROUTER_INSTRUCTIONS_ITEM;

          routerInstructionsHtml += '<tr class="' + rowstyle + '">';

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
          routerInstructionsHtml += '<img class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconGraphhopper(strType) + '" alt=""/>';
          routerInstructionsHtml += '</td>';

          if (instr.maneuver) {
            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + instr.maneuver.location + '">';
          }
          else {
            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-pos="' + 0 + '">';
          }


          // build route description

          routerInstructionsHtml += instr.text;


          routerInstructionsHtml += '</div>';
          routerInstructionsHtml += "</td>";

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
          if (j !== routeResponse.paths[routeNumber].instructions.length - 1 && j != 0) {
            routerInstructionsHtml += this.toHumanDistance(instr.distance);
          }
          routerInstructionsHtml += "</td>";

          routerInstructionsHtml += "</tr>";
        }
      }


      routerInstructionsHtml += '</table>';

      routerInstruction.innerHTML = routerInstructionsHtml;

      self.routerInstructionsWrapper.appendChild(routerInstruction);

      this.adjustInstructionMapInteraction();

    }
  }

  /**
   * Takes a feature as input and simulates a click on the feature entry that is connected to the given feature.
   * @param feature
   */
  clickFeatureEntryForFeature(feature) {
    const featureId = feature.get('tid');
    if (this.entryWrapper) {
      $(this.entryWrapper).children().each(function (index, element) {
        if ($(element).data('id') === featureId) {
          $(element).click();
        }
      });
    }
  }

  /**
   * Rerenders the feature list in the portside router. The function checks the current configuration on each call and
   * displays the feature list according to the type of the selected layer.
   * @param mode
   */
  reloadFeatureValues(mode) {
    const scope = this;
    const features = scope.features;
    const type = scope.type;
    if (scope[mode + "FeatureWrapper"]) {
      $(scope[mode + "FeatureWrapper"]).empty();
      const routerLayers = this.options.mapController.data.routerLayers;
      const chosenLayerId = $(scope[mode + "LayersSelect"]).val();
      const chosenOption = mode === "router" ? scope.activeLayerValue : scope.activeLayerValueArea;
      const values = routerLayers[chosenLayerId][chosenOption].keys;
      const labels = routerLayers[chosenLayerId][chosenOption].labels;

      let entryWrapper = document.createElement("ul");
      $(entryWrapper).addClass("route-features-list-wrapper");
      for (let i = 0; i < features.length; i++) {
        let entry = document.createElement('li');
        $(entry).addClass("route-features-list-element");
        if (type === "table") {
          for (let j = 0; j < values.length; j++) {
            let valueDiv = document.createElement('div');
            valueDiv.innerHTML = labels[j] + ": " + features[i][values[j]];
            entry.appendChild(valueDiv);
          }
        } else if (type === "overpass") {
          if (!features[i].tags) {
            continue;
          }
          let currentFeature = null;
          scope.routerFeaturesSource.forEachFeature(function (feature) {
            if (feature.get('tid') === features[i].id) {
              currentFeature = feature;
            }
          });
          if (!currentFeature) {
            continue;
          }
          const featureEntryContent = popupFunctions.fnStandardInfoPopup(currentFeature, currentFeature.getStyle());
          let valueDiv = document.createElement('div');
          valueDiv.innerHTML = featureEntryContent;
          entry.appendChild(valueDiv);
        } else {
          if (window.c4gMapsHooks && window.c4gMapsHooks.routePluginEntry) {
            utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, {
              entry: entry,
              feature: features[i],
              values: values,
              labels: labels,
              router: scope,
              activeLayerValue: chosenOption
            });
          }
        }
        let currentFeature = null;
        scope.routerFeaturesSource.forEachFeature(function (feature) {
          if (feature.getId() === features[i].id) {
            currentFeature = feature;
          }
        });
        if (currentFeature) {
          let popupInfos = {};
          popupInfos.async = false;
          popupInfos.content = entry.innerHTML;
          currentFeature.set('popup', popupInfos);
        }
        $(entry).addClass(cssConstants.INACTIVE);
        $(entry).data('id', features[i].id);
        $(entry).on('click', function (event) {
          scope.routerFeaturesSource.forEachFeature(function (tmpFeature) {
            let layer = undefined;
            if (mode === "area") {
              layer = scope.options.mapController.proxy.layerController.arrLayers[$(scope.areaLayersSelect).val()];
            }
            else if (mode === "router") {
              layer = scope.options.mapController.proxy.layerController.arrLayers[$(scope.routerLayersSelect).val()];
            }
            if (tmpFeature.get('tid') === features[i].id) {
              let clickStyleId = scope.options.mapController.data.clickLocstyle;
              if (!scope.options.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId]) {
                scope.options.mapController.proxy.locationStyleController.loadLocationStyles([clickStyleId], {
                  done: function () {
                    let style = scope.options.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
                    // check if feature is still clicked
                    scope.mapSelectInteraction.getFeatures().forEach(function (elem, index, array) {
                      if (elem === tmpFeature) {
                        // feature is still clicked, style it accordingly
                        tmpFeature.setStyle(style);
                      }
                    });
                  }
                });
              } else {
                let style = scope.options.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
                tmpFeature.setStyle(style);
              }
            } else {
              if (scope.bestFeatureIds.includes(tmpFeature.get('tid'))) {
                let locstyle = scope.options.mapController.data.priorityLocstyle;
                tmpFeature.setStyle(scope.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
              } else {
                tmpFeature.setStyle(scope.options.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
              }
            }
          });
          // refresh css classes
          $(this).parent().children('li').each(function (index, element) {
            $(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
          });
          $(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          $("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
          scope.update();
        });


        entryWrapper.appendChild(entry);
      }
      scope.entryWrapper = entryWrapper;
      scope[mode + "FeatureWrapper"].appendChild(entryWrapper);
    }
  }

  /**
   * Executes an area search with the given point as center. If there are any, the features in the perimeter will be
   * drawn onto the map and displayed in the feature container.
   * @param fromPoint
   */
  performArea(fromPoint) {
    const self = this;

    if (!fromPoint) {
      return;
    }
    let fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
    let profileId = this.options.mapController.data.profile;
    let url = 'con4gis/areaService/' + profileId + '/' + $(this.areaLayersSelect).val() + '/' + $(self.toggleDetourArea).val() + '/' + fromCoord;
    if (this.routeProfile && this.routeProfile.active) {
      url += '?profile=' + this.routeProfile.active;
    }
    if (self.areaAjax) {
      self.areaAjax.abort();
    }

    this.spinner.show();

    self.areaAjax = jQuery.ajax({
      'url': url
    })
      .done(function (response) {
        self.response = response;
        if (response) {
          const routerLayers = self.options.mapController.data.routerLayers;
          const chosenOption = self.activeLayerValueArea;
          // response[0].sort(function(a,b) {
          //   return parseFloat(a.distance) - parseFloat(b.distance);
          // });
          // this should be changed soon, as it totally messes up the logic of the structure
          let sortedFeatures = self.showFeatures(response[0], response[1], "area");
          let view = self.options.mapController.map.getView();
          let leftPadding = 0;
          if (self.options.mapController.activePortside && self.options.mapController.activePortside.container) {
            leftPadding = $(self.options.mapController.activePortside.container).outerWidth();
          }

          let rightPadding = 0;
          if (self.options.mapController.activeStarboard && self.options.mapController.activeStarboard.container) {
            rightPadding = $(self.options.mapController.activeStarboard.container).outerWidth();
          }
          let extent = self.routerFeaturesSource.getExtent();
          extent = ol.extent.extend(extent, self.areaLayer.getSource().getExtent());
          view.fit(extent,
            {
              size: self.options.mapController.map.getSize(),
              // padding: [0, rightPadding, 0, leftPadding]
              // TODO rightPadding & leftPadding do not work as intended in mobile
              padding: [0, 0, 0, 0]
            }
          );
          self.showFeaturesInPortside(sortedFeatures, response[1], "area");
          // clear route & route features
          self.routingWaySource.clear();
          self.routingAltWaySource.clear();
          self.routingHintSource.clear();
          self.locationsSource.clear();
          $(self.routerFeatureWrapper).empty();
          $(self.routerInstructionsWrapper).empty();
          $(".router-content-switcher").css('display', 'none');
          $(self.fromInput).val("");
          self.fromValue = null;
          $(self.toInput).val("");
          self.toValue = null;
        }

      })
      .always(function () {
        self.areaAjax = undefined;
        self.spinner.hide();
        self.update();
        if (self.options.mapController.data.closeAfterSearch) {
          self.close(true);
        }
      });
  }

  /**
   * Takes the input coordinates and executes the reverse search. On success, the result location is inserted in the
   * given input field and the given property of this.
   * @param coordinates
   * @param cssId
   * @param property
   * @param mode
   */
  handlePosition(coordinates, cssId, property, mode) {
    const scope = this;
    let coords = coordinates.coords;
    let profileId = this.options.mapController.data.profile;
    let url = "/con4gis/reverseNominatimService/" + profileId + '?format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
    $.ajax({url: url}).done(function (data) {
      let address = "";
      if (data.address) {
        if (data.address.city) {
          address = data.address.city;
          if (data.address.road) {
            address = ', ' + value;
          }
        }
        if (data.address.postcode) {
          address += data.address.postcode + " ";
        }

        if (data.address.town) {
          address = data.address.town;
          if (data.address.road) {
            address = ', ' + value;
          }
        }
        if (data.address.road) {
          if (data.address.house_number) {
            address = ' ' + data.address.house_number + value;
          }
          address = data.address.road + value;
        }
      }

      if (address.length > 0) {
        address += ", ";
      }

      $(cssId).val(address);
      switch (property) {
        case "fromValue":
          scope.updateLinkFragments("addressFrom", address);
          break;
        case "toValue":
          scope.updateLinkFragments("addressTo", address);
          break;
        case "areaValue":
          scope.updateLinkFragments("addressArea", address);
          break;
      }
      scope[property] = new ol.geom.Point([coords.longitude, coords.latitude]);


      if (mode === "area") {
        scope.setAreaPoint([coords.longitude, coords.latitude]);
        if (scope[property]) {
          scope.performArea(scope[property]);
        }
      } else {
        if (scope.fromValue && scope.toValue) {
          scope.performViaRoute(scope.fromValue, scope.toValue);
        }
      }
    });
  }

  /**
   * Adds an interaction for the area search. When the map is clicked, the location of the click will be taken as center
   * and gets converted into an address. Afterwards, the area search is triggered.
   */
  addAreaInputInteraction() {
    const scope = this;
    
    scope.fnMapAreaInteraction = function (evt) {
      if ($(scope.areaFromInput).val() === "") {
        scope.performReverseSearch($(scope.areaFromInput), ol.proj.toLonLat(evt.coordinate));
        scope.areaValue = new ol.geom.Point(ol.proj.toLonLat(evt.coordinate));
        scope.setAreaPoint(evt.coordinate);
        scope.performArea(scope.areaValue);
      }
    };
    scope.options.mapController.map.on('click', scope.fnMapAreaInteraction);
    scope.updateLinkFragments("mode", "area");
  }

  /**
   * Takes a set of coordinates as input and sets these coordinates as new center for the area search.
   * @param coordinates   Coordinate pair in WGS:84 projection (Lat/Lon)
   */
  setAreaPoint(coordinates) {
    if (this.areaValue) {
      let point = $.extend(true, {}, this.areaValue);
      point.transform('EPSG:4326', 'EPSG:3857');
      let feature = new ol.Feature({geometry: point});
      let locstyleId = this.options.mapController.data.areaCenterLocstyle;
      feature.setStyle(this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
      this.areaSource.clear();
      this.routerFeaturesSource.clear();
      this.routerWayLayer.getSource().clear();
      this.routerAltWayLayer.getSource().clear();
      this.locationsSource.clear();
      this.mapSelectInteraction.getFeatures().clear();
      this.areaSource.addFeature(feature);
      this.updateLinkFragments("addressArea");
    }
  }

  /**
   * Creates a list of controls for the routing profiles. Each profile has a corresponding button, that activates the
   * profile when clicked.
   */
  createRouterProfileSelect() {
    const self = this;
    let routeProfile = [];

    if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
      this.routeProfile = [];
      this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
    }
    else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
      this.routeProfile = document.createElement('div');
      $(this.routeProfile).addClass(routingConstants.ROUTER_PROFILE_WRAPPER);
      if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
        routeProfile.car = document.createElement('button');
        $(routeProfile.car).addClass(routingConstants.ROUTER_PROFILE_CAR);
        $(routeProfile.car).prop('title',langRouteConstants.CAR);
        this.$routeProfileCar = $(routeProfile.car);
        this.routeProfile.appendChild(routeProfile.car);
        this.$routeProfileCar.click(function (event) {
          self.clearSiblings(this);
          self.routeProfile.active = '0';
          self.recalculateRoute();
        });
      }

      if (this.options.mapController.data.router_profiles['1']
        || this.options.mapController.data.router_profiles['11']) { //add button for profile driving-truck
        let spanTruck = document.createElement('span');
        routeProfile.truck = document.createElement('button');
        routeProfile.truck.list = document.createElement('ul');
        this.$routeProfileTruck = $(routeProfile.truck);
        if (this.options.mapController.data.router_profiles['1']) {
          let child = document.createElement('li');
          child.innerHTML = this.options.mapController.data.router_profiles[1];
          $(child).data('profile', [1]);
          $(child).click(function (event) {
            self.childClick($(this));
          });
          if (!this.$routeProfileTruck.data('profile')) { //add existing default profile to button
            this.$routeProfileTruck.data('profile', 1);
            $(child).addClass(cssConstants.ACTIVE);
          }
          routeProfile.truck.list.appendChild(child);
        }
        if (this.options.mapController.data.router_profiles['11']) {
          let child = document.createElement('li');
          child.innerHTML = this.options.mapController.data.router_profiles[11];
          $(child).data('profile', [11]);
          $(child).click(function (event) {
            self.childClick($(this));
          });
          if (!this.$routeProfileTruck.data('profile')) { //add existing default profile to button
            this.$routeProfileTruck.data('profile', 11);
            $(child).addClass(cssConstants.ACTIVE);
          }
          routeProfile.truck.list.appendChild(child);
        }


        $(routeProfile.truck).addClass(routingConstants.ROUTER_PROFILE_TRUCK);
        $(routeProfile.truck).prop('title',langRouteConstants.TRUCK);


        if (routeProfile.truck.list.children.length == 1) { //ignore dropdown list, if only one truck profile is enabled
          this.routeProfile.appendChild(routeProfile.truck);
          this.$routeProfileTruck.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = $(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple walking profiles are enabled
          spanTruck.appendChild(routeProfile.truck);
          spanTruck.appendChild(routeProfile.truck.list);
          this.routeProfile.appendChild(spanTruck);
          this.$routeProfileTruck.click(function (event) {
            self.clearSiblings($(this).parent());
            self.routeProfile.active = $(this).data('profile');
            self.recalculateRoute();
          });
        }
      }
      if (this.options.mapController.data.router_profiles['2']
        || this.options.mapController.data.router_profiles['3']
        || this.options.mapController.data.router_profiles['4']
        || this.options.mapController.data.router_profiles['5']
        || this.options.mapController.data.router_profiles['6']
        || this.options.mapController.data.router_profiles['7']) { //add button and dropdown for cycling profiles
        let spanBike = document.createElement('span');
        routeProfile.bike = document.createElement('button');
        routeProfile.bike.list = document.createElement('ul');
        this.$routeProfileBike = $(routeProfile.bike);
        for (let i = 2; i < 8; i++) { //iterate over all possible cycling profiles
          if (this.options.mapController.data.router_profiles[i]) {
            let child = document.createElement('li');
            child.innerHTML = this.options.mapController.data.router_profiles[i];
            $(child).data('profile', [i]);
            $(child).click(function (event) {
              self.childClick($(child));
            });
            if (!this.$routeProfileBike.data('profile')) { //add existing default profile to button
              this.$routeProfileBike.data('profile', i);
              $(child).addClass(cssConstants.ACTIVE);
            }
            routeProfile.bike.list.appendChild(child);
          }
        }

        $(routeProfile.bike).addClass(routingConstants.ROUTER_PROFILE_BIKE);
        $(routeProfile.bike).prop('title',langRouteConstants.BIKE);

        if (routeProfile.bike.list.children.length == 1) { //ignore dropdown list, if only one cycling profile is enabled
          this.routeProfile.appendChild(routeProfile.bike);
          this.$routeProfileBike.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = $(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple cycling profiles are enabled
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
      if (this.options.mapController.data.router_profiles['8']
        || this.options.mapController.data.router_profiles['9']) { //add button and dropdown for walking profiles
        let spanFoot = document.createElement('span');
        routeProfile.foot = document.createElement('button');
        routeProfile.foot.list = document.createElement('ul');
        this.$routeProfileFoot = $(routeProfile.foot);
        for (let i = 8; i < 10; i++) { //iterate over possible profiles
          if (this.options.mapController.data.router_profiles[i]) {
            let child = document.createElement('li');
            child.innerHTML = this.options.mapController.data.router_profiles[i];
            $(child).data('profile', [i]);
            $(child).click(function (event) {
              self.childClick($(this));
            });
            if (!this.$routeProfileFoot.data('profile')) { //add existing default profile to button
              this.$routeProfileFoot.data('profile', i);
              $(child).addClass(cssConstants.ACTIVE);
            }
            routeProfile.foot.list.appendChild(child);
          }
        }

        $(routeProfile.foot).addClass(routingConstants.ROUTER_PROFILE_FOOT);
        $(routeProfile.foot).prop('title',langRouteConstants.WALK);


        if (routeProfile.foot.list.children.length == 1) { //ignore dropdown list, if only one walking profile is enabled
          this.routeProfile.appendChild(routeProfile.foot);
          this.$routeProfileFoot.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = $(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple walking profiles are enabled
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
      if (this.options.mapController.data.router_profiles['10']) { //add button for profile wheelchair
        routeProfile.wheelchair = document.createElement('button');
        $(routeProfile.wheelchair).addClass(routingConstants.ROUTER_PROFILE_WHEELCHAIR);
        $(routeProfile.wheelchair).prop('title',langRouteConstants.WHEEL);
        this.$routeProfileWheelchair = $(routeProfile.wheelchair);
        this.routeProfile.appendChild(routeProfile.wheelchair);
        this.$routeProfileWheelchair.click(function (event) {
          self.clearSiblings(this);
          self.routeProfile.active = '10';
          self.recalculateRoute();
        });
      }
      if (this.options.mapController.data.router_profiles['12']) { //add button for profile scooter
        routeProfile.scooter = document.createElement('button');
        $(routeProfile.scooter).addClass(routingConstants.ROUTER_PROFILE_SCOOTER);
        $(routeProfile.scooter).prop('title',langRouteConstants.SCOOT);
        this.$routeProfileScooter = $(routeProfile.scooter);
        this.routeProfile.appendChild(routeProfile.scooter);
        this.$routeProfileScooter.click(function (event) {
          self.clearSiblings(this);
          self.routeProfile.active = '12';
          self.recalculateRoute();
        });
      }
      this.childClick = function ($element) { //handle the click inside the profile dropdown
        self.routeProfile.active = $element.data('profile'); //activate selected profile
        self.clearSiblings($element);
        self.recalculateRoute(); //update the route
      };
      this.clearSiblings = function (element) { //function to adjust css-classes after changing profile
        let siblings = $(element).parent().children();
        for (let i = 0; i < siblings.length; i++) {
          $(siblings[i]).removeClass(cssConstants.ACTIVE);
        }
        $(element).addClass(cssConstants.ACTIVE);
      };
      for (let profile in this.options.mapController.data.router_profiles) { //set default value for initial routing
        if (this.options.mapController.data.router_profiles.hasOwnProperty(profile)) {
          this.routeProfile.active = profile;
          break;
        }
      }
    } else {
      console.warn('No Router Profiles enabled')
    }
  }

  /**
   * Creates a button that determines the current geolocation (via the browsers Geolocation-API).
   * @param cssName
   * @param property
   * @param mode
   * @returns {HTMLElement}
   */
  createPositionButton(cssName, property, mode) {
    const scope = this;
    var handleNewPosition = function (pos) {
      scope.handlePosition(pos, cssName, property, mode);
    };

    let positionButton = document.createElement("button");
    positionButton.className = routingConstants.ROUTE_POSITION;
    positionButton.title = langRouteConstants.ROUTE_POSITION;
    positionButton.innerHTML = "";
    $(positionButton).on("click", function (event) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleNewPosition);
      } else {
        console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
      }
    });
    return positionButton;
  }

  /**
   * Creates a detour slider for the given mode.
   * @param mode            Slider mode. Either "route" or "area".
   * @param min             The minimum value for the slider.
   * @param max             The maximum value for the slider.
   * @param initialValue    The initial value the slider should show.
   * @returns {HTMLElement}
   */
  createDetourSlider(mode, min, max, initialValue) {
    const scope = this;
    let key = "toggleDetour" + utils.capitalizeFirstLetter(mode);
    scope[key] = document.createElement('input');
    scope[key].className = routingConstants.ROUTE_TOGGLE;
    scope[key].setAttribute('type', 'range');
    scope[key].setAttribute('min', min);
    scope[key].setAttribute('max', max);
    scope[key].setAttribute('value', initialValue);
    scope[key].setAttribute('step', 0.5);

    let toggleDetourWrapper = document.createElement('div');
    let output = document.createElement('output');
    output.className = routingConstants.OUTPUT_DETOUR;
    let p = document.createElement('p');
    p.innerHTML = langRouteConstants.ROUTE_DETOUR;
    output.innerHTML = 100;
    toggleDetourWrapper.appendChild(p);
    toggleDetourWrapper.appendChild(scope[key]);
    toggleDetourWrapper.appendChild(output);
    $(scope[key]).on('input', function () {
      let control = $(this);
      let range = control.attr('max') - control.attr('min');
      let pos = ((control.val() - control.attr('min')) / range) * 100;
      let posOffset = Math.round(50 * pos / 100) - (25);
      let output = control.next('output');
      output
        .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
        .text(control.val() + " km");
      scope.updateLinkFragments("detour", control.val());
    });
    $(scope[key]).on('change', function () {
      if (mode === "route") {
        scope.recalculateRoute();
      } else {
        scope.performArea(scope.areaValue);
      }
    });
    $(scope[key]).trigger('input');
    return toggleDetourWrapper;
  }
  addInterimField(){
    const scope = this;
    this.$buttonOver.prop("disabled", true);

    this.overInputWrapper = document.createElement('div');
    this.overInputWrapper.className = routingConstants.ROUTER_INPUT_WRAPPER;

    this.overInput = document.createElement("input");
    this.overInput.type = "text";
    this.overInput.className = routingConstants.ROUTER_INPUT_FROM;
    this.overInput.id = this.overInput.name = "routingOver";

    let routerOverLabel = document.createElement('label');
    routerOverLabel.setAttribute('for', 'routingFrom');
    routerOverLabel.innerHTML = langRouteConstants.ROUTER_Label_Interim;

    let routerOverClear = document.createElement('button');
    routerOverClear.className = routingConstants.ROUTER_INPUT_CLEAR;
    routerOverClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
    routerOverClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
    routerOverClear.id = this.overValue && this.overValue.length ? this.overValue.length -1 : 0;
    this.$routerOverClear = $(routerOverClear);

    this.overInputWrapper.appendChild(routerOverLabel);
    this.overInputWrapper.appendChild(this.overInput);
    this.overInputWrapper.appendChild(routerOverClear);

    this.routerViewInputWrapper.appendChild(this.overInputWrapper);
    this.$routerOverClear.click(function (event) {
      event.preventDefault();
      scope.clearOver(scope.$overInput, scope.id);
      $(scope).parent().remove();
      //buttonOver.show();
    });
    scope.$overInput = $(scope.overInput);
    this.$overInput.on('change', function () {
      scope.performSearch(scope.$overInput, "overValue", function() {
        scope.performViaRoute();
      });
    });
    return this.$overInput;
  }

  /**
   * Creates the user interface for the router view.
   * It contains the various input controls and the result containers for the instructions and features.
   * @returns {boolean|*}
   */
  addRouterInterface() {
    let self,
      routerView,
      routerContentElement,
      routerViewInputWrapper,
      routerViewContentWrapper,
      areaView,
      areaViewInputWrapper,
      areaContentElement,
      areaViewContentWrapper,
      print,
      routerFromLabel,
      routerOverLabel,
      routerToLabel,
      routerFromClear,
      routerToClear,
      switchFromTo,
      areaFromLabel,
      areaFromClear,
      buttonOver;

      self = this;
      const mapData = this.mapData;
      routerContentElement = document.createElement('div');
      routerViewInputWrapper = document.createElement('div');
      this.routerViewInputWrapper = routerViewInputWrapper;
      routerViewContentWrapper = document.createElement('div');
      routerContentElement.appendChild(routerViewInputWrapper);
      routerContentElement.appendChild(routerViewContentWrapper);
      self.routerViewContentWrapper = routerViewContentWrapper;

      // create feature / instruction wrappers
      if (this.options.mapController.data.showFeatures && this.options.mapController.data.showInstructions) {
        let buttonFeatures = document.createElement("button");
        buttonFeatures.innerHTML = this.options.mapController.data.featureLabel;
        $(buttonFeatures).on('click', function () {
          $(".c4g-router-instructions-wrapper").css('display', 'none');
          $(".router-features-display").css('display', 'block');
        });

        let buttonInstructions = document.createElement('button');
        buttonInstructions.innerHTML = this.options.mapController.data.instructionLabel;
        $(buttonInstructions).on('click', function () {
          $(".c4g-router-instructions-wrapper").css('display', 'block');
          $(".router-features-display").css('display', 'none');
        });

        self.contentSwitcher = document.createElement("div");
        self.contentSwitcher.className = "router-content-switcher";
        $(self.contentSwitcher).hide();
        self.contentSwitcher.appendChild(buttonFeatures);
        self.contentSwitcher.appendChild(buttonInstructions);
        routerViewContentWrapper.appendChild(self.contentSwitcher);
      }

      this.fromInputWrapper = document.createElement('div');
      this.fromInputWrapper.className = routingConstants.ROUTER_INPUT_WRAPPER;

      this.fromInput = document.createElement("input");
      this.fromInput.type = "text";
      this.fromInput.className = routingConstants.ROUTER_INPUT_FROM;
      this.fromInput.id = this.fromInput.name = "routingFrom";



      routerFromLabel = document.createElement('label');
      routerFromLabel.setAttribute('for', 'routingFrom');
      routerFromLabel.innerHTML = langRouteConstants.ROUTER_FROM_LABEL;

      routerFromClear = document.createElement('button');
      routerFromClear.className = routingConstants.ROUTER_INPUT_CLEAR;
      routerFromClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
      routerFromClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
      this.$routerFromClear = $(routerFromClear);
      this.$routerFromClear.click(function (event) {
        event.preventDefault();
        self.clearInput(self.$fromInput);
      });

      let routerFromPosition = this.createPositionButton(".c4g-router-input-from", "fromValue", "router");

      this.routerButtonBar = document.createElement('div');
      this.routerButtonBar.className = routingConstants.ROUTER_BUTTONBAR;

      // over points controls
      if (this.options.mapController.data.enableOverPoints) {
        buttonOver = document.createElement('button');
        buttonOver.className = routingConstants.ROUTER_OVER;
        buttonOver.title = langRouteConstants.ROUTER_OVER;
        this.$buttonOver = $(buttonOver);
        this.routerButtonBar.appendChild(buttonOver);

        this.$buttonOver.on('click', function(){self.addInterimField()});
      }

      if (this.options.mapController.data.enableTargetSwitch) {
        switchFromTo = document.createElement('button');
        switchFromTo.className = routingConstants.ROUTER_SWITCH;
        switchFromTo.title = langRouteConstants.ROUTER_SWITCH;
        this.$switchFromTo = $(switchFromTo);
        this.routerButtonBar.appendChild(switchFromTo);
      }

      // add profiles selection
      if (this.options.mapController.data.router_api_selection > 1) { //OpenRouteService
        this.createRouterProfileSelect();
      }

      this.fromInputWrapper.appendChild(routerFromLabel);
      this.fromInputWrapper.appendChild(routerFromPosition);
      this.fromInputWrapper.appendChild(this.fromInput);
      this.fromInputWrapper.appendChild(routerFromClear);
      if (buttonOver && this.options.mapController.data.router_api_selection == '0') {
        this.$buttonOver.hide();
      }

      if (this.options.mapController.data.enableTargetSwitch) {
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
      }

      this.$fromInput = $(this.fromInput);
      this.$fromInput.on('change', function () {
        self.fromValue = null;
        self.performSearch(self.$fromInput, "fromValue");
      });
      // add enter listener
      this.$fromInput.on('keydown', function(event) {
        if (event.keyCode === 13) {
          // trigger new search
          self.$fromInput.trigger('change');
          const performSearchCallback = function() {
            self.performViaRoute();
          };
          if (!self.fromValue) {
            self.performSearch(self.$fromInput, "fromValue", performSearchCallback);
          } else {
            performSearchCallback();
          }
        }
      });

      routerViewInputWrapper.appendChild(this.routerButtonBar);
      if (this.routeProfile && this.routeProfile.children) {
        routerViewInputWrapper.appendChild(this.routeProfile);
      }

      /**
       * Begin routerUiFunction
       */
      const routerUiFunction = function () {
        self.routerLayersInput = document.createElement('div');
        self.routerLayersSelect = document.createElement('select');
        self.routerLayersInput.appendChild(self.routerLayersSelect);
        for (let i in mapData.routerLayers) {
          let option = document.createElement('option');
          option.value = i;
          let layer = self.options.mapController.proxy.layerController.arrLayers[i];
          if (layer) {
            option.textContent = layer.name;
            self.routerLayersSelect.add(option);
          } else {
            console.warn("The layer with the ID " + i + " is not included in the map. Please include it to use it for route search.");
          }
        }
        self.routerLayersValueSelect = document.createElement('div');
        self.routerLayersValueSelect.className = routingConstants.ROUTE_LAYER_VALUES;
        $(self.routerLayersSelect).on('change', function () {
          $(self.routerLayersValueSelect).empty();
          let selected = $(this).val();
          let clickFunction = function () {
            self.activeLayerValue = this.innerHTML;
            $(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
            $(this).siblings().addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
            self.reloadFeatureValues("router");
            if (self.response && self.response.features) {
              self.showFeatures(self.response.features, self.response.type, "router")
            }
            let layerId = $(self.routerLayersSelect).val();
            self.updateLinkFragments("searchType", self.options.mapController.data.routerLayers[layerId][self.activeLayerValue]['mapLabel']);
          };
          let buttonActivated = false;
          for (let i in mapData.routerLayers[selected]) {
            if (mapData.routerLayers[selected].hasOwnProperty(i)) {
              let buttonElement = document.createElement('button');
              buttonElement.innerHTML = i;
              buttonElement.value = mapData.routerLayers[selected][i]['keys'];
              $(buttonElement).on('click', clickFunction);
              self.routerLayersValueSelect.appendChild(buttonElement);
              if (self.desiredButtonRouting && self.desiredButtonRouting === i) {
                $(buttonElement).click();
                buttonActivated = true;
              }
            }
          }
          if (!buttonActivated) {
            $(self.routerLayersValueSelect.firstChild).trigger('click');
          }
          if (self.routerLayersValueSelect.childElementCount === 1) {
            // only one button for selection, the bar can be hidden
            $(self.routerLayersValueSelect.firstChild).css("display", "none");
          }

          self.recalculateRoute();
        });
        $(self.routerLayersSelect).trigger('change');
        if (Object.keys(mapData.routerLayers).length <= 1) {
          $(self.routerLayersSelect).css('display', 'none');
        }
        $(self.routerLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
        $(self.routerLayersInput).insertBefore($(routerViewInputWrapper));
        $(self.routerLayersValueSelect).insertBefore($(routerViewInputWrapper));
      };
      /**
       * End routerUiFunction
       */

      // create the layer selection elements when layers are loaded
      if (mapData.routerLayers) {
        if (self.options.mapController.proxy.layers_loaded) {
          routerUiFunction();
        }
        else {
          // add layer selection creation to proxy hook
          window.c4gMapsHooks = window.c4gMapsHooks || {};
          window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
          window.c4gMapsHooks.proxy_layer_loaded.push(routerUiFunction);
        }
        let toggleDetourWrapper = this.createDetourSlider("route", mapData.detourRoute.min, mapData.detourRoute.max, mapData.detourRoute.initial);
        routerViewInputWrapper.appendChild(toggleDetourWrapper);
      }

      //
      routerViewInputWrapper.appendChild(this.fromInputWrapper);
      this.toInputWrapper = document.createElement('div');
      this.toInputWrapper.className = routingConstants.ROUTER_INPUT_WRAPPER;

      this.toInput = document.createElement("input");
      this.toInput.type = "text";
      this.toInput.className = routingConstants.ROUTER_INPUT_TO;
      this.toInput.id = this.toInput.name = "routingTo";



      let routerToPosition = this.createPositionButton(".c4g-router-input-to", "toValue", "router")

      routerToLabel = document.createElement('label');
      routerToLabel.setAttribute('for', 'routingTo');
      routerToLabel.innerHTML = langRouteConstants.ROUTER_TO_LABEL;

      routerToClear = document.createElement('button');
      routerToClear.className = routingConstants.ROUTER_INPUT_CLEAR;
      routerToClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
      routerToClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
      this.$routerToClear = $(routerToClear);

      this.toInputWrapper.appendChild(routerToLabel);
      this.toInputWrapper.appendChild(routerToPosition);
      this.toInputWrapper.appendChild(this.toInput);
      this.toInputWrapper.appendChild(routerToClear);

      self.$routerToClear.click(function (event) {
        event.preventDefault();
        self.clearInput(self.$toInput);
      });

      this.$toInput = $(this.toInput);
      this.$toInput.on('change', function () {
        // reset toValue for keydown listener
        self.toValue = null;
        self.performSearch(self.$toInput, "toValue");
      });
      // add enter listener
      this.$toInput.on('keydown', function(event) {
        if (event.keyCode === 13) {
          // trigger new search
          self.$toInput.trigger('change');
          const performSearchCallback = function() {
            self.performViaRoute();
          };
          if (!self.toValue) {
            self.performSearch(self.$toInput, "toValue", performSearchCallback);
          } else {
            performSearchCallback();
          }
        }
      });

      routerViewInputWrapper.appendChild(this.toInputWrapper);

      // start search button
      if (mapData.routeStartButton) {
        let routeStartButton = document.createElement("button");
        routeStartButton.className = routingConstants.ROUTE_START_BUTTON;
        routeStartButton.innerText = langRouteConstants.START_ROUTE;
        $(routeStartButton).on("click", function (event) {
          if (self.fromValue && self.toValue) {
            self.performViaRoute(self.fromValue, self.toValue);
          } else {
            // wait for one second and check the values again
            self.spinner.show();
            window.setTimeout(function () {
              if (self.fromValue && self.toValue) {
                self.performViaRoute(self.fromValue, self.toValue);
              }
              self.spinner.hide();
            }, 1000);
          }
        });
        routerViewInputWrapper.appendChild(routeStartButton);
      }

      self.fromInputLoaded = false;
      self.toInputLoaded = false;
      self.statusBar.appendChild(this.getAttribution());
      let routerActivateFunction = function () {
        self.removeMapInputInteraction();
        self.addMapInputInteraction();
        self.updateLinkFragments("mode", "route");
        if (!self.fromInputLoaded) {
          let fromInputCacheable = new CachedInputfield("#routingFrom", true, "c4g-router-address", "pink");
          self.fromInputLoaded = true;
        }
        if (!self.toInputLoaded) {
          let toInputCacheable = new CachedInputfield("#routingTo", true, "c4g-router-address", "pink");
          self.toInputLoaded = true;
        }
      };
      let routerDeactivateFunction = function () {
        self.removeMapInputInteraction();
      };

      routerView = this.addView({
        name: 'router-view',
        triggerConfig: {
          tipLabel: langRouteConstants.ROUTER_VIEW_ADDRESS_INPUT,
          className: routingConstants.ROUTER_SEARCH,
          withHeadline: true
        },
        sectionElements: [
          {section: this.contentContainer, element: routerContentElement},
          {section: this.topToolbar, element: this.viewTriggerBar}
        ],
        activateFunction: routerActivateFunction,
        deactivateFunction: routerDeactivateFunction
      });

      return routerView;

  }

  /**
   * Creates the user interface for the area view.
   * It contains the various input controls and the result containers for the instructions and features.
   * @returns {boolean|*}
   */
  addAreaInterface() {
    let self,
      areaView,
      areaViewInputWrapper,
      areaContentElement,
      areaViewContentWrapper,
      print,
      routeProfile = [],
      areaFromLabel,
      areaFromClear;

    self = this;
    areaContentElement = document.createElement('div');
    areaViewInputWrapper = document.createElement('div');
    areaViewContentWrapper = document.createElement('div');
    areaContentElement.appendChild(areaViewInputWrapper);
    areaContentElement.appendChild(areaViewContentWrapper);
    self.areaViewContentWrapper = areaViewContentWrapper;

    this.areaFromInputWrapper = document.createElement('div');
    this.areaFromInputWrapper.className = routingConstants.ROUTER_INPUT_WRAPPER;

    this.areaFromInput = document.createElement("input");
    this.areaFromInput.type = "text";
    this.areaFromInput.className = routingConstants.ROUTER_INPUT_FROM;
    this.areaFromInput.id = this.areaFromInput.name = "areaFrom";

    this.$areaFromInput = $(this.areaFromInput);
    this.$areaFromInput.on('change', function () {
      self.performSearch(self.$areaFromInput, "areaValue", function() {
        // check if areaValue is set
        // if yes, add a marker to map
        if (self.areaValue) {
          self.setAreaPoint(self.areaValue.getCoordinates());
          self.performArea(self.areaValue);
        }
      });
    });

    // create area position button
    let areaPosition = this.createPositionButton(".c4g-router-input-from", "areaValue", "area");

    areaFromLabel = document.createElement('label');
    areaFromLabel.setAttribute('for', 'areaFrom');
    areaFromLabel.innerHTML = langRouteConstants.ROUTER_FROM_LABEL;

    areaFromClear = document.createElement('button');
    areaFromClear.className = routingConstants.ROUTER_INPUT_CLEAR;
    areaFromClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
    areaFromClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
    this.$areaFromClear = $(areaFromClear);

    this.areaFromInputWrapper.appendChild(areaFromLabel);
    this.areaFromInputWrapper.appendChild(areaPosition);
    this.areaFromInputWrapper.appendChild(this.areaFromInput);
    this.areaFromInputWrapper.appendChild(areaFromClear);

    this.$areaFromClear.on("click", function (event) {
      event.preventDefault();
      self.clearInput($(self.areaFromInput));
    });
    if (this.routeProfile && this.routeProfile.children) {
      areaViewInputWrapper.appendChild(this.routeProfile);
    }

    /**
     * Area UI callback
     */
    const areaUiFunction = function () {
      self.areaLayersInput = document.createElement('div');
      self.areaLayersSelect = document.createElement('select');
      self.areaLayersInput.appendChild(self.areaLayersSelect);
      for (let i in mapData.routerLayers) {
        let option = document.createElement('option');
        option.value = i;
        let layer = self.options.mapController.proxy.layerController.arrLayers[i];
        if (layer) {
          option.textContent = layer.name;
          self.areaLayersSelect.add(option);
        } else {
          console.warn("The layer with the ID " + i + " is not included in the map. Please include it to use it for area search.");
        }
      }
      self.areaLayersValueSelect = document.createElement('div');
      self.areaLayersValueSelect.className = routingConstants.ROUTE_LAYER_VALUES;
      $(self.areaLayersSelect).on('change', function () {
        $(self.areaLayersValueSelect).empty();
        let selected = $(this).val();
        let clickFunction = function () {
          self.activeLayerValueArea = this.innerHTML;
          $(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          $(this).siblings().addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
          self.reloadFeatureValues("area");
          if (self.response) {
            self.showFeatures(self.response[0], self.response[1], "area")
          }
          let layerId = $(self.areaLayersSelect).val();
          self.updateLinkFragments("searchType", self.options.mapController.data.routerLayers[layerId][self.activeLayerValueArea]['mapLabel']);
        };
        let buttonActivated = false;
        for (let i in mapData.routerLayers[selected]) {
          if (mapData.routerLayers[selected].hasOwnProperty(i)) {
            let buttonElement = document.createElement('button');
            buttonElement.innerHTML = i;
            buttonElement.value = mapData.routerLayers[selected][i]['keys'];
            $(buttonElement).on('click', clickFunction);
            self.areaLayersValueSelect.appendChild(buttonElement);
            if (self.desiredButtonRouting && self.desiredButtonRouting === i) {
              $(buttonElement).trigger("click");
              buttonActivated = true;
            }
          }
        }
        if (!buttonActivated) {
          $(self.areaLayersValueSelect.firstChild).trigger('click');
        }
        if (self.areaLayersValueSelect.childElementCount === 1) {
          // only one button for selection, the bar can be hidden
          $(self.areaLayersValueSelect.firstChild).css("display", "none");
        }
        if (self.areaValue) {
          self.performArea(self.areaValue);
        }
      });
      $(self.areaLayersSelect).trigger('change');
      if (Object.keys(mapData.routerLayers).length <= 1) {
        $(self.areaLayersSelect).css('display', 'none');
      }
      $(self.areaLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
      $(self.areaLayersInput).insertBefore($(areaViewInputWrapper));
      $(self.areaLayersValueSelect).insertBefore($(areaViewInputWrapper));
    };
    /**
     * Area UI callback
     */

    if (mapData.routerLayers && self.options.mapController.proxy.layers_loaded) {
      areaUiFunction();
    } else {
      window.c4gMapsHooks = window.c4gMapsHooks || {};
      window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
      window.c4gMapsHooks.proxy_layer_loaded.push(areaUiFunction);
    }

    let toggleDetourWrapper = this.createDetourSlider("area", mapData.detourArea.min, mapData.detourArea.max, mapData.detourArea.initial);
    areaViewInputWrapper.appendChild(toggleDetourWrapper);
    this.areaInputLoaded = false;
    let areaActivateFunction = function () {
      areaDeactivateFunction();
      self.addAreaInputInteraction();
      self.updateLinkFragments("mode", "area");
      if (!self.areaInputLoaded) {
        let areaInputCacheable = new CachedInputfield("#areaFrom", true, "c4g-router-address");
        self.areaInputLoaded = true;
      }
    };
    let areaDeactivateFunction = function () {
      self.options.mapController.map.un('click', self.fnMapAreaInteraction);
    };
    let areaStartButton = document.createElement("button");
    areaStartButton.className = "c4g-area-search-start";
    areaStartButton.innerText = "Suche starten";
    let callCnt = 0;
    $(areaStartButton).on("click", function (event) {
      if (self.areaValue) {
        self.performArea(self.areaValue);
      } else {
        self.spinner.show();
        // wait for one second and check the values again
        window.setTimeout(function() {
          if (self.areaValue) {
            self.performArea(self.areaValue);
          } else {
            console.warn("Address search cancelled after waiting for address too long...");
          }
          self.spinner.hide();
        }, 1000);
      }
    });
    areaViewInputWrapper.appendChild(this.areaFromInputWrapper);
    areaViewInputWrapper.appendChild(areaStartButton);
    areaView = this.addView({
      name: 'area-view',
      triggerConfig: {
        tipLabel: langRouteConstants.AREA_NAME,
        className: "c4g-area-search",
        withHeadline: true
      },
      sectionElements: [
        {section: this.contentContainer, element: areaContentElement},
        {section: this.topToolbar, element: this.viewTriggerBar}
      ],
      activateFunction: areaActivateFunction,
      deactivateFunction: areaDeactivateFunction
    });
    return areaView;
  }

  /**
   * Creates an interaction for routing instructions. When hovering the instructions in the portside container, the
   * location of the instruction is highlighted on the route.
   * @param routerInstruction
   */
  adjustInstructionMapInteraction(routerInstruction) {
    var self = this,
      fnItemClick,
      fnItemOver,
      fnItemOut;

    fnItemClick = function (element) {
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
        })
        self.routingHintSource.addFeature(currentHintFeature);
        self.options.mapController.map.getView().setCenter(newCoord);
      }
    };

    fnItemOver = function (element) {
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

    fnItemOut = function () {
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
  }

  /**
   * Clears an input field.
   * @param $input
   */
  clearInput($input) {

    $input.val('');
    $input.trigger('change');
    this.routingWaySource.clear();
    this.routingAltWaySource.clear();
    this.routingHintSource.clear();


    $(this.routerInstructionsWrapper).empty();
    this.recalculateRoute();
    this.update();
  }

  /**
   * Removes an over point from the route.
   * @param $input
   * @param index
   */
  clearOver($input, index) {
    if (this.overValue) {
      delete this.overValue[index];
    }
    this.$buttonOver.prop("disabled", false);
    $(this.routerInstructionsWrapper).empty();
    this.recalculateRoute();
    this.update();
  }

  /**
   * Converts a given coordinate into the corresponding location.
   * @param $input    The input field in which the result location should be stored.
   * @param value     The property that contains the coordinates.
   */
  performReverseSearch($input, value) {

    var self = this,
      url;

    url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
    this.spinner.show();

    jQuery.ajax({
      'url': url
    })
      .done(function (response) {

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
            // update address in link
            self.updateLinkFragments("addressFrom", value);
          } else if ($input.attr('name') === "routingTo") {
            self.$routerToClear.show();
            // update address in link
            self.updateLinkFragments("addressTo", value);
          } else if ($input.attr('name') === "areaFrom") {
            self.updateLinkFragments("addressArea", value);
          }
        }

      })
      .always(function () {
        self.spinner.hide();
      });

  }

  /**
   * Searches the geo-coordinates for a given location.
   * @param $input        The input field containing the location.
   * @param value         The property in which the resulting coordinate should be stored.
   * @param opt_callback  Optional callback. Is executed after successful search.
   * @returns {string}
   */
  performSearch($input, value, opt_callback) {

    var map,
      bounds,
      viewbox,
      self,
      url;

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
            self.overValue = [];
          }
          self.overValue.push(new ol.geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]));
          self.$buttonOver.prop("disabled", false);
        }
        else {
          self[value] = new ol.geom.Point(
            [parseFloat(response[0].lon), parseFloat(response[0].lat)]
          );
          switch(value) {
            case "fromValue":
              self.updateLinkFragments("addressFrom", $input.val());
              break;
            case "toValue":
              self.updateLinkFragments("addressTo", $input.val());
              break;
            case "areaValue":
              self.updateLinkFragments("addressArea", $input.val());
              break;
            default:
              break;
          }
        }
      } else {
        // show error hint
        let errorDiv = self.showRouterError(langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS);
        let inputDiv = $input.parent()[0];
        inputDiv.appendChild(errorDiv);
        self.clearInput($input);
        delete self[value];
      }

      if (opt_callback && typeof opt_callback === "function") {
        opt_callback();
      }
    }).fail(function () {
        let inputDiv = $input.parent()[0];
        inputDiv.appendChild(self.showRouterError(langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS));
        self.clearInput($input);
        delete self[value];
      });

    return "";

  }

  /**
   * Creates a div element that containts the given error text.
   * @param $field
   * @param errorText
   */
  showRouterError(errorText) {
    let errorDiv = document.createElement('div');
    $(errorDiv).addClass(routingConstants.ROUTE_ERROR);
    $(errorDiv).addClass('contentHeadline');

    let errorLabel = document.createElement('label');
    errorLabel.innerHTML = errorText;
    errorDiv.appendChild(errorLabel);
    let buttonClose = document.createElement('button');
    $(buttonClose).addClass(cssConstants.POPUP_CLOSE);
    $(buttonClose).addClass(cssConstants.ICON);
    $(buttonClose).on('click', function () {
        $(this).parent().remove();
      }
    )
    errorDiv.appendChild(buttonClose);
    return errorDiv;
  }

  /**
   * Converts a distance in meters to a more readable format.
   * @param distanceInMeters  The distance to convert.
   * @returns {string}
   */
  toHumanDistance(distanceInMeters) {

    var distance,
      humanDistance;

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
  }

  /**
   * Converts a time in seconds to a more readable format.
   * @param timeInSeconds     The time to convert.
   * @returns {string}
   */
  toHumanTime(timeInSeconds) {

    var seconds,
      minutes,
      hours,
      humanTime;

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
}

// hook to make the mapController load the router at the end of its constructor
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params){
  let mapController = params.mapController;
  if(mapController.data.router_enable){
    mapController.map.removeControl(mapController.controls.router);
    let router = new Router({
      tipLabel: langRouteConstants.CTRL_ROUTER,
      target: params.Container,
      mapController: mapController,
      defaultOpen: false,
      direction: "left",
      name: "router"
    });
    if (mapController.data.router_open || mapController.data.initialParams) {
      router.open();
    }
    mapController.map.addControl(router);
    mapController.controls.router = router;
  }
});