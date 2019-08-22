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
import {Sideboard} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-control-sideboard";
import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import * as popupFunctions from "./../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de";
import {routingConstants} from "./routing-constants";
import {routingConstantsEnglish} from "./routing-constant-i18n-en";
import {routingConstantsGerman} from "./routing-constant-i18n-de";
import {CachedInputfield} from "./../../../../CoreBundle/Resources/public/js/c4g-cached-inputfield";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {extend} from "ol/extent";
import {transform, toLonLat, fromLonLat, transformExtent} from "ol/proj";
import {Style, Stroke} from "ol/style";
import {Vector, Group} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {LineString} from "ol/geom";
import {Modify, Select} from "ol/interaction";
import {RoutingPermalink} from "./c4g-routing-permalink";
import {AlertHandler} from "./../../../../CoreBundle/Resources/public/js/AlertHandler";
import {AutocompleteHandler} from "./../../../../CoreBundle/Resources/public/js/AutocompleteHandler";
import ReactDOM from "react-dom";
import React from "react";
import {RouterView} from "./components/c4g-router-view.jsx";

let langRouteConstants = {};
const containerAddresses = {
  arrFromPositions: [],
  arrFromNames: [],
  arrToPositions: [],
  arrToNames: []
};

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
    let options = jQuery.extend({
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
    if (this.usePermalink) {
      this.permalinkHandler = new RoutingPermalink(this);
    }
  }

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
    let mapData = this.options.mapController.data;

    // Add router layer(s)
    this.routingAltWaySource = new VectorSource();
    this.routingWaySource = new VectorSource();
    this.routerWayLayer = new Vector({
      source: this.routingWaySource,
      zIndex: 1,
      style: [
        new Style({
          stroke: new Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }),
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })
      ]
    });
    this.routerAltWayLayer = new Vector({
      source: this.routingAltWaySource,
      zIndex: 0,
      style: [
        new Style({
          stroke: new Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }),
        new Style({
          stroke: new Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })
      ]
    });

    selectInteraction = new Select({
      style: [
        new Style({
          stroke: new Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }),
        new Style({
          stroke: new Stroke({
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
        if (geometry && (geometry.getType() === 'LineString')) {
          self.showAltRoute(self.response, feature.getId());
        } else {
          if (feature) {
            self.clickFeatureEntryForFeature(feature);
          }
        }

      }
    });
    this.mapSelectInteraction = selectInteraction;
    this.modWayInteraction = new Modify({
      source: this.routingWaySource,
      style: [
        new Style({
          stroke: new Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }),
        new Style({
          stroke: new Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })
      ]
    });
    this.modWayInteraction.on('modifystart', function (event) {
      self.modifyStartPoint = new Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
    });
    this.modWayInteraction.on('modifyend', function (event) {
      let overPoint = new Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
      let minDistance = Infinity;
      let insertId;
      if (!self.overValue) {
        self.overValue = [];
      }
      else if(self.overValue.length > 0) {
        for(let id in self.overValue){
          let distX = self.modifyStartPoint.getCoordinates()[0] - self.overValue[id].getCoordinates()[0];
          let distY = self.modifyStartPoint.getCoordinates()[1] - self.overValue[id].getCoordinates()[1];
          let dist = Math.sqrt(distX * distX + distY * distY);
          if(dist < minDistance){
            minDistance = dist;
            insertId = id;
          }
        }
        let distStartX = self.fromValue.getCoordinates()[0] - self.modifyStartPoint.getCoordinates()[0];
        let distStartY = self.fromValue.getCoordinates()[1] - self.modifyStartPoint.getCoordinates()[1];
        let distStart = Math.sqrt(distStartX * distStartX + distStartY * distStartY);

        let distEndX = self.toValue.getCoordinates()[0] - self.modifyStartPoint.getCoordinates()[0];
        let distEndY = self.toValue.getCoordinates()[1] - self.modifyStartPoint.getCoordinates()[1];
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
      this.$overInput = self.addInterimField(insertId, overPoint.ol_uid);
      self.performReverseSearch(this.$overInput, overPoint.getCoordinates());
      self.overValue.splice(insertId,0,overPoint);
      self.updateInterimIds(insertId);
      self.$buttonOver.prop("disabled", false);
      self.recalculateRoute();
    });

    self.options.mapController.map.addInteraction(selectInteraction);
    if (this.options.mapController.data.enableOverPoints) {
      self.options.mapController.map.addInteraction(this.modWayInteraction);
    }

    this.routingHintSource = new VectorSource();
    this.routerHintLayer = new Vector({
      source: this.routingHintSource,
      style: function (feature, resolution) {
        return (!self.options.mapController.proxy) || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
      }
    });

    this.locationsSource = new VectorSource();
    this.locationsLayer = new Vector({
      source: this.locationsSource,
      zIndex: 2
    });
    this.areaSource = new VectorSource();
    this.areaLayer = new Vector({
      source: this.areaSource,
      zIndex: 2
    });
    this.routerFeaturesSource = new VectorSource();
    this.routerFeaturesLayer = new Vector({
      source: this.routerFeaturesSource,
      zIndex: 20,
      // declutter: true
    });
    this.routerLayerGroup = new Group({
      layers: new Collection([
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

    if (this.usePermalink) {
      this.permalinkHandler.handleInitialParams();
    }
    this.spinner.hide();
    return true;

  }

  updateLinkFragments(key, value) {
    if (this.usePermalink) {
      this.permalinkHandler.updateLinkFragments(key, value);
    }
  }

  updateInterimIds(insertId) {
    let intGoals = $("." + routingConstants.ROUTER_INPUT_WRAPPER)
  }

  updateUrl() {
    this.permalinkHandler.updateUrl();
  }

  handleInitialParams() {
    this.permalinkHandler.handleInitialParams();
  }

  /**
   * Executes setup code on opening the router.
   * @param opt_options
   */
  preOpenFunction(opt_options) {
    if (opt_options && opt_options.toLonLat) {
      this.performReverseSearch(this.$toInput, opt_options.toLonLat);
      this.recalculateRoute();
      this.toValue = new Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
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

    jQuery(this.routerInstructionsWrapper).empty();
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
    self.options.mapController.map.removeInteraction(this.mapSelectInteraction);
  }

  /**
   * Adds a click interaction for the router. Upon map click, the clicked points are converted to locations and the
   * route search is started, as long as all mandatory properties are set.
   */
  addMapInputInteraction() {

    var self = this,
      coordinate;

    self.fnMapRouterInteraction = function (evt) {

      coordinate = toLonLat(evt.coordinate);
      // clear old features
      self.areaSource.clear();

      if (self.$fromInput.val() === "") {
        self.performReverseSearch(self.$fromInput, coordinate);
        self.fromValue = new Point(coordinate);
        self.updateLinkFragments("addressFrom", coordinate);
        self.recalculateRoute();
      } else if (self.$toInput.val() === "") {
        self.performReverseSearch(self.$toInput, coordinate);
        self.toValue = new Point(coordinate);
        self.updateLinkFragments("addressTo", coordinate);
        self.recalculateRoute();
      } else if (self.$overInput) {

        if (self.$overInput.val() === "") {
          self.performReverseSearch(self.$overInput, coordinate);
          if (!self.overValue) {
            self.overValue = [];
          }
          self.overValue.push(new Point(coordinate));
          let olUid = self.overValue[self.overValue.length - 1]['ol_uid'];
          let deleteButton =  self.$overInput.next()[0];
          // traverse the dom level until the delete button is found
          while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
            deleteButton = jQuery(deleteButton).next()[0];
          }

          deleteButton.id = olUid;
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


  /**
   * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
   */
  recalculateRoute() {
    var tmpFeature,
      proxy = this.options.mapController.proxy;

    this.locationsSource.clear();
    if (this.fromValue) {
      tmpFeature = new Feature({
        geometry: this.fromValue.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.options.mapController.data.router_from_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle]) {
        tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle].style);
      }
      this.locationsSource.addFeature(tmpFeature);
    }
    if (this.toValue) {
      tmpFeature = new Feature({
        geometry: this.toValue.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.options.mapController.data.router_to_locstyle && proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle]) {
        tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle].style);
      }
      this.locationsSource.addFeature(tmpFeature);
    }
    if (this.overValue) {
      for (var propt in this.overValue) {
        tmpFeature = new Feature({
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
      if (!fromPoint) {
        return;
      }
    }
    if (!toPoint) {
      if (!toPoint) {
        return;
      }
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
      overCoord = [];
      for (var propt in overPoint) {
        if (overPoint.hasOwnProperty(propt)) {
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
    }

    if (this.options.mapController.data.router_api_selection >= '1') {//OSRM-API:5.x or ORS- API
      let profileId = this.options.mapController.data.profile;
      url = 'con4gis/routeService/' + this.options.mapController.data.lang + '/'
        + profileId + '/' + jQuery(self.routerLayersSelect).val() + '/'
        + jQuery(self.toggleDetourRoute).val() + '/' + fromCoord;

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
            if (response.error) {
              let errorDiv = self.showRouterError(langRouteConstants[response.error]);
              jQuery(self.fromInput).parent()[0].appendChild(errorDiv);
            } else {
              self.showRouteLayer(response);
              if (response.features) {
                jQuery(".router-content-switcher").css('display', 'block');
              }
              self.showRouteInstructions(response, 0);
              if (response.features && response.features.length > 0) {
                let sortedFeatures = self.showFeatures(response.features, response.type, "router");

                self.showFeaturesInPortside(sortedFeatures, response.type, "router");
                jQuery(self.areaFeatureWrapper).empty();
                jQuery(self.areaFromInput).val("");
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
        url = 'con4gis/routeService/' + profileId + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
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

      if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2' || routeResponse.routeType == '1' || routeResponse.routeType == '2') {//OSRM-API:5.x
        wayPolyline = new Polyline();

        // add route

        if (routeResponse.routes ) {//check for alternative route
          if (routeResponse.routes[1]) {
            if (routeNumber === 1) {
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
      } else if(this.options.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0'){//OSRM-API:<5
        wayPolyline = new Polyline({
          'factor': this.options.mapController.data.router_viaroute_precision || 1e6
        });

        // add route
        routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapView.getProjection()
        });
      }
      else if (this.options.mapController.data.router_api_selection == '3'){
        wayPolyline = new Polyline();
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
      else if (this.options.mapController.data.router_api_selection == "4" || routeResponse.routeType == '4') {
        wayPolyline = new Polyline({
          'factor': 1e6
        });
        if (routeResponse.trip && routeResponse.trip.legs && routeResponse.trip.legs[1]) {//check for alternative route
          if (routeNumber == 1) {
            altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            altRouteFeatures[0].setId(0);
          }
          else {
            altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            altRouteFeatures[0].setId(1);
          }
        }
        routeFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[routeNumber].shape, {
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
      if (routeFeatures) {
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
          leftPadding = jQuery(this.options.mapController.activePortside.container).outerWidth();
        }

        rightPadding = 0;
        if (this.options.mapController.activeStarboard && this.options.mapController.activeStarboard.container) {
          rightPadding = jQuery(this.options.mapController.activeStarboard.container).outerWidth();
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
    // self.routerFeaturesSource.clear();
    // interim clear of feature selection
    if (!features) {
      // TODO the calling function expects a return value; should probably be fixed
      return [];
    }
    const mapData = this.mapData;
    const layerId = mode === "router" ? jQuery(this.routerLayersSelect).val() : jQuery(this.areaLayersSelect).val();
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
          resultCoordinate = transform([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
          let point = new Point(resultCoordinate);
          contentFeature = new Feature(point);
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
        jQuery(scope[mode + "FeatureWrapper"]).addClass(mode + '-features-display');
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
   * Translates an integer number into the correct instruction icon (Graphhopper icons).
   * @param intType
   * @returns {string}
   */
  getInstructionIconValhalla(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "default.png";
        break;
      case 1:
        image = "head.png";
        break;
      case 2:
        image = "head.png";
        break;
      case 3:
        image = "head.png";
        break;
      case 4:
        image = "target.png";
        break;
      case 5:
        image = "target.png";
        break;
      case 6:
        image = "target.png";
        break;
      case 7:
        image = "continue.png";
        break;
      case 8:
        image = "continue.png";
        break;
      case 9:
        image = "slight-right.png";
        break;
      case 10:
        image = "turn-right.png";
        break;
      case 11:
        image = "sharp-right.png";
        break;
      case 12:
        image = "u-turn.png";
        break;
      case 13:
        image = "u-turn.png";
        break;
      case 14:
        image = "sharp-left.png";
        break;
      case 15:
        image = "turn-left.png";
        break;
      case 16:
        image = "slight-left.png";
        break;
      case 17:
        image = "continue.png";
        break;
      case 18:
        image = "slight-right.png";
        break;
      case 19:
        image = "slight-left.png";
        break;
      case 20:
        image = "slight-right.png";
        break;
      case 21:
        image = "slight-left.png";
        break;
      case 22:
        image = "continue.png";
        break;
      case 23:
        image = "slight-right.png";
        break;
      case 24:
        image = "slight-left.png";
      case 25:
        image = "continue.png";
        break;
      case 26:
        image = "round-about.png";
        break;
      case 27:
        image = "round-about.png";
        break;
      default:
        image = "default.png";
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
      jQuery(self.routerInstructionsWrapper).empty();
    }

    routerInstructionsHeader = document.createElement('div');
    routerInstructionsHeader.className = routingConstants.ROUTER_INSTRUCTIONS_HEADER;

    if (routeResponse) {
      if (!(routeResponse.features && routeResponse.features.length > 0) || !this.options.mapController.data.showFeatures) {
        jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
      }
      if (this.options.mapController.data.router_api_selection == '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
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

      else if (this.options.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {//OSRM-API:<5
        if (routeResponse.route_name) {
          route_name_0 = routeResponse.route_name[0];
          route_name_1 = routeResponse.route_name[1];
        }

        if (routeResponse.route_summary) {
          total_distance = this.toHumanDistance(routeResponse.route_summary.total_distance);
          total_time = this.toHumanTime(routeResponse.route_summary.total_time);
        }


      }
      else if (this.options.mapController.data.router_api_selection == '2' || routeResponse.routeType == '2') {//OSR-API
        total_time = this.toHumanTime(routeResponse.routes[routeNumber].summary.duration);
        total_distance = this.toHumanDistance(routeResponse.routes[routeNumber].summary.distance);
      }
      else if (this.options.mapController.data.router_api_selection == '3' || routeResponse.routeType == '3') { //Graphhopper
        total_distance = this.toHumanDistance(routeResponse.paths[0].distance);
        total_time = this.toHumanTime(routeResponse.paths[0].time / 1000) ;
      }
      else if (this.options.mapController.data.router_api_selection == '4' || routeResponse.routeType == '4') { //Valhalla
        total_distance = this.toHumanDistance(routeResponse.trip.summary.length *1000);
        total_time = this.toHumanTime(routeResponse.trip.summary.time) ;
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
      if (this.options.mapController.data.router_api_selection === '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
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

      } else if (this.options.mapController.data.router_api_selection === '0' || routeResponse.routeType == '0') {//OSRM-API:<5
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
      else if (this.options.mapController.data.router_api_selection === '2' || routeResponse.routeType == '2') {//OpenRouteService
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
      else if (this.options.mapController.data.router_api_selection === '3' || routeResponse.routeType == '3') { // Graphhopper
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
      else if (this.options.mapController.data.router_api_selection === '4' || routeResponse.routeType == '4') {
        for (j = 0; j < routeResponse.trip.legs[routeNumber].maneuvers.length; j += 1) {
          instr = routeResponse.trip.legs[routeNumber].maneuvers[j];

          strType = instr.type;

          rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_ODD;

          if (i % 2 === 0) {
            rowstyle = routingConstants.ROUTER_INSTRUCTIONS_ITEM_EVEN;
          }

          rowstyle += " " + routingConstants.ROUTER_INSTRUCTIONS_ITEM;

          routerInstructionsHtml += '<tr class="' + rowstyle + '">';

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION + '">';
          routerInstructionsHtml += '<img class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON + '" src="' + this.getInstructionIconValhalla(strType) + '" alt=""/>';
          routerInstructionsHtml += '</td>';

          if ((instr.begin_shape_index || instr.begin_shape_index > -1) && instr.end_shape_index) {
            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-start="' + instr.begin_shape_index + '"  data-end="' + instr.end_shape_index + '">';
          }
          else{
            routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT + '" data-start="0"  data-end="0">';
          }


          // build route description

          routerInstructionsHtml += instr.instruction;


          routerInstructionsHtml += '</div>';
          routerInstructionsHtml += "</td>";

          routerInstructionsHtml += '<td class="' + routingConstants.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE + '">';
          if (j !== routeResponse.trip.legs[routeNumber].maneuvers.length - 1 && j != 0) {
            routerInstructionsHtml += this.toHumanDistance(instr.length * 1000);
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
      jQuery(this.entryWrapper).children().each(function (index, element) {
        if (jQuery(element).data('id') === featureId) {
          jQuery(element).click();
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
      jQuery(scope[mode + "FeatureWrapper"]).empty();
      const routerLayers = this.options.mapController.data.routerLayers;
      const chosenLayerId = jQuery(scope[mode + "LayersSelect"]).val();
      const chosenOption = mode === "router" ? scope.activeLayerValue : scope.activeLayerValueArea;
      const values = routerLayers[chosenLayerId][chosenOption].keys;
      const labels = routerLayers[chosenLayerId][chosenOption].labels;

      let entryWrapper = document.createElement("ul");
      jQuery(entryWrapper).addClass("route-features-list-wrapper");
      for (let i = 0; i < features.length; i++) {
        let entry = document.createElement('li');
        jQuery(entry).addClass("route-features-list-element");
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
        jQuery(entry).addClass(cssConstants.INACTIVE);
        jQuery(entry).data('id', features[i].id);
        jQuery(entry).on('click', function (event) {
          scope.routerFeaturesSource.forEachFeature(function (tmpFeature) {
            let layer = undefined;
            if (mode === "area") {
              layer = scope.options.mapController.proxy.layerController.arrLayers[jQuery(scope.areaLayersSelect).val()];
            }
            else if (mode === "router") {
              layer = scope.options.mapController.proxy.layerController.arrLayers[jQuery(scope.routerLayersSelect).val()];
            }
            if (tmpFeature.get('tid') === features[i].id) {
              let clickStyleId = scope.options.mapController.data.clickLocstyle;
              if (clickStyleId) {
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
          jQuery(this).parent().children('li').each(function (index, element) {
            jQuery(element).addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
          });
          jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
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
    let url = 'con4gis/areaService/' + profileId + '/' + jQuery(this.areaLayersSelect).val() + '/' + jQuery(self.toggleDetourArea).val() + '/' + fromCoord;
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
            leftPadding = jQuery(self.options.mapController.activePortside.container).outerWidth();
          }

          let rightPadding = 0;
          if (self.options.mapController.activeStarboard && self.options.mapController.activeStarboard.container) {
            rightPadding = jQuery(self.options.mapController.activeStarboard.container).outerWidth();
          }
          let extent = self.routerFeaturesSource.getExtent();
          extent = extend(extent, self.areaLayer.getSource().getExtent());
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
          jQuery(self.routerFeatureWrapper).empty();
          jQuery(self.routerInstructionsWrapper).empty();
          jQuery(".router-content-switcher").css('display', 'none');
          jQuery(self.fromInput).val("");
          self.fromValue = null;
          jQuery(self.toInput).val("");
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
    if (property === "fromValue") {
      scope[property] = new Point([coords.longitude, coords.latitude]);
      scope.performReverseSearch(jQuery(scope.$fromInput), [coords.longitude, coords.latitude]);
    }
    else if (property === "overValue") {
      if (!scope[property]) {
        scope[property] = [];
      }
      scope[property].push(new Point([coords.longitude, coords.latitude]));
      scope.performReverseSearch(jQuery(scope.$overInput), [coords.longitude, coords.latitude]);
    }
    else if (property === "toValue") {
      scope[property] = new Point([coords.longitude, coords.latitude]);
      scope.performReverseSearch(jQuery(scope.$toInput), [coords.longitude, coords.latitude]);
    }
    if (mode === "area") {
      scope.setAreaPoint([coords.longitude, coords.latitude]);
      if (scope[property]) {
        scope.performArea(scope[property]);
      }
    }
    scope.recalculateRoute();
  }

  /**
   * Adds an interaction for the area search. When the map is clicked, the location of the click will be taken as center
   * and gets converted into an address. Afterwards, the area search is triggered.
   */
  addAreaInputInteraction() {
    const scope = this;
    
    scope.fnMapAreaInteraction = function (evt) {
      if (jQuery(scope.areaFromInput).val() === "") {
        scope.performReverseSearch(jQuery(scope.areaFromInput), toLonLat(evt.coordinate));
        scope.areaValue = new Point(toLonLat(evt.coordinate));
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
      let point = jQuery.extend(true, {}, this.areaValue);
      // transform coordinates if needed
      if (!(coordinates[0] >= -90.0 && coordinates[0] <= 90.0
        && coordinates[1] >= -90.0 && coordinates[1] <= 90.0)) {
        point.transform('EPSG:4326', 'EPSG:3857');
      }
      let feature = new Feature({geometry: point});
      let locstyleId = this.options.mapController.data.areaCenterLocstyle;
      feature.setStyle(this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
      this.areaSource.clear();
      this.routerFeaturesSource.clear();
      this.routerWayLayer.getSource().clear();
      this.routerAltWayLayer.getSource().clear();
      this.locationsSource.clear();
      this.mapSelectInteraction.getFeatures().clear();
      this.areaSource.addFeature(feature);
      this.updateLinkFragments("addressArea", coordinates);
    }
  }

  setFromPoint(coordinates) {
    const scope = this;
    if (this.fromValue) {
      this.fromValue.setCoordinates(coordinates);
    } else {
      this.fromValue = new Point(coordinates);
    }
    // transform coordinates if needed
    if (!(coordinates[0] >= -90.0 && coordinates[0] <= 90.0
      && coordinates[1] >= -90.0 && coordinates[1] <= 90.0)) {
      this.fromValue.transform('EPSG:3857', 'EPSG:4326');
    }
    let point = jQuery.extend(true, {}, this.fromValue);
    let feature = new Feature({geometry: this.fromValue});
    let locstyleId = this.options.mapController.data.router_from_locstyle;
    if (this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId]) {
      feature.setStyle(this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
    } else {
      this.options.mapController.proxy.hook_locstyles_loaded.push(function() {
        feature.setStyle(scope.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
      });
    }

    this.mapSelectInteraction.getFeatures().clear();
    this.routerFeaturesSource.addFeature(feature);
    this.updateLinkFragments("addressFrom", coordinates);
    this.performReverseSearch(this.$fromInput, coordinates);
    this.recalculateRoute();
  }

  setToPoint(coordinates) {
    const scope = this;
    if (this.toValue) {
      this.toValue.setCoordinates(coordinates);
    } else {
      this.toValue = new Point(coordinates);
    }
    // transform coordinates if needed
    if (!(coordinates[0] >= -90.0 && coordinates[0] <= 90.0
      && coordinates[1] >= -90.0 && coordinates[1] <= 90.0)) {
      this.toValue.transform('EPSG:3857', 'EPSG:4326');
    }
    let point = jQuery.extend(true, {}, this.toValue);
    let feature = new Feature({geometry: this.toValue});
    let locstyleId = this.options.mapController.data.router_to_locstyle;

    if (this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId]) {
      feature.setStyle(this.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
    } else {
      this.options.mapController.proxy.hook_locstyles_loaded.push(function() {
        feature.setStyle(scope.options.mapController.proxy.locationStyleController.arrLocStyles[locstyleId].style);
      })
    }
    this.mapSelectInteraction.getFeatures().clear();
    this.routerFeaturesSource.addFeature(feature);
    this.updateLinkFragments("addressTo", coordinates);
    this.performReverseSearch(this.$toInput, coordinates);
    this.recalculateRoute();
  }

  /**
   * Creates a list of controls for the routing profiles. Each profile has a corresponding button, that activates the
   * profile when clicked.
   */
  createRouterProfileSelect() {
    const self = this;
    let routeProfile = [];

    if (this.options.mapController.data.router_profiles && Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
      this.routeProfile = [];
      this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
    }
    else if (this.options.mapController.data.router_profiles && Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
      this.routeProfile = document.createElement('div');
      jQuery(this.routeProfile).addClass(routingConstants.ROUTER_PROFILE_WRAPPER);
      if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
        routeProfile.car = document.createElement('button');
        jQuery(routeProfile.car).addClass(routingConstants.ROUTER_PROFILE_CAR);
        jQuery(routeProfile.car).prop('title',langRouteConstants.CAR);
        this.$routeProfileCar = jQuery(routeProfile.car);
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
        this.$routeProfileTruck = jQuery(routeProfile.truck);
        if (this.options.mapController.data.router_profiles['1']) {
          let child = document.createElement('li');
          child.innerHTML = this.options.mapController.data.router_profiles[1];
          jQuery(child).data('profile', [1]);
          jQuery(child).click(function (event) {
            self.childClick(jQuery(this));
          });
          if (!this.$routeProfileTruck.data('profile')) { //add existing default profile to button
            this.$routeProfileTruck.data('profile', 1);
            jQuery(child).addClass(cssConstants.ACTIVE);
          }
          routeProfile.truck.list.appendChild(child);
        }
        if (this.options.mapController.data.router_profiles['11']) {
          let child = document.createElement('li');
          child.innerHTML = this.options.mapController.data.router_profiles[11];
          jQuery(child).data('profile', [11]);
          jQuery(child).click(function (event) {
            self.childClick(jQuery(this));
          });
          if (!this.$routeProfileTruck.data('profile')) { //add existing default profile to button
            this.$routeProfileTruck.data('profile', 11);
            jQuery(child).addClass(cssConstants.ACTIVE);
          }
          routeProfile.truck.list.appendChild(child);
        }


        jQuery(routeProfile.truck).addClass(routingConstants.ROUTER_PROFILE_TRUCK);
        jQuery(routeProfile.truck).prop('title',langRouteConstants.TRUCK);


        if (routeProfile.truck.list.children.length == 1) { //ignore dropdown list, if only one truck profile is enabled
          this.routeProfile.appendChild(routeProfile.truck);
          this.$routeProfileTruck.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = jQuery(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple walking profiles are enabled
          spanTruck.appendChild(routeProfile.truck);
          spanTruck.appendChild(routeProfile.truck.list);
          this.routeProfile.appendChild(spanTruck);
          this.$routeProfileTruck.click(function (event) {
            self.clearSiblings(jQuery(this).parent());
            self.routeProfile.active = jQuery(this).data('profile');
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
        this.$routeProfileBike = jQuery(routeProfile.bike);
        for (let i = 2; i < 8; i++) { //iterate over all possible cycling profiles
          if (this.options.mapController.data.router_profiles[i]) {
            let child = document.createElement('li');
            child.innerHTML = this.options.mapController.data.router_profiles[i];
            jQuery(child).data('profile', [i]);
            jQuery(child).click(function (event) {
              self.childClick(jQuery(child));
            });
            if (!this.$routeProfileBike.data('profile')) { //add existing default profile to button
              this.$routeProfileBike.data('profile', i);
              jQuery(child).addClass(cssConstants.ACTIVE);
            }
            routeProfile.bike.list.appendChild(child);
          }
        }

        jQuery(routeProfile.bike).addClass(routingConstants.ROUTER_PROFILE_BIKE);
        jQuery(routeProfile.bike).prop('title',langRouteConstants.BIKE);

        if (routeProfile.bike.list.children.length == 1) { //ignore dropdown list, if only one cycling profile is enabled
          this.routeProfile.appendChild(routeProfile.bike);
          this.$routeProfileBike.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = jQuery(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple cycling profiles are enabled
          spanBike.appendChild(routeProfile.bike);
          spanBike.appendChild(routeProfile.bike.list);
          this.routeProfile.appendChild(spanBike);
          this.$routeProfileBike.click(function (event) {
            self.clearSiblings(jQuery(this).parent());
            self.routeProfile.active = jQuery(this).data('profile');
            self.recalculateRoute();
          });
        }
      }
      if (this.options.mapController.data.router_profiles['8']
        || this.options.mapController.data.router_profiles['9']) { //add button and dropdown for walking profiles
        let spanFoot = document.createElement('span');
        routeProfile.foot = document.createElement('button');
        routeProfile.foot.list = document.createElement('ul');
        this.$routeProfileFoot = jQuery(routeProfile.foot);
        for (let i = 8; i < 10; i++) { //iterate over possible profiles
          if (this.options.mapController.data.router_profiles[i]) {
            let child = document.createElement('li');
            child.innerHTML = this.options.mapController.data.router_profiles[i];
            jQuery(child).data('profile', [i]);
            jQuery(child).click(function (event) {
              self.childClick(jQuery(this));
            });
            if (!this.$routeProfileFoot.data('profile')) { //add existing default profile to button
              this.$routeProfileFoot.data('profile', i);
              jQuery(child).addClass(cssConstants.ACTIVE);
            }
            routeProfile.foot.list.appendChild(child);
          }
        }

        jQuery(routeProfile.foot).addClass(routingConstants.ROUTER_PROFILE_FOOT);
        jQuery(routeProfile.foot).prop('title',langRouteConstants.WALK);


        if (routeProfile.foot.list.children.length == 1) { //ignore dropdown list, if only one walking profile is enabled
          this.routeProfile.appendChild(routeProfile.foot);
          this.$routeProfileFoot.click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = jQuery(this).data('profile');
            self.recalculateRoute();
          });
        }
        else { //append with dropdown, if multiple walking profiles are enabled
          spanFoot.appendChild(routeProfile.foot);
          spanFoot.appendChild(routeProfile.foot.list);
          this.routeProfile.appendChild(spanFoot);
          this.$routeProfileFoot.click(function (event) {
            self.clearSiblings(jQuery(this).parent());
            self.routeProfile.active = jQuery(this).data('profile');
            self.recalculateRoute();
          });
        }
      }
      if (this.options.mapController.data.router_profiles['10']) { //add button for profile wheelchair
        routeProfile.wheelchair = document.createElement('button');
        jQuery(routeProfile.wheelchair).addClass(routingConstants.ROUTER_PROFILE_WHEELCHAIR);
        jQuery(routeProfile.wheelchair).prop('title',langRouteConstants.WHEEL);
        this.$routeProfileWheelchair = jQuery(routeProfile.wheelchair);
        this.routeProfile.appendChild(routeProfile.wheelchair);
        this.$routeProfileWheelchair.click(function (event) {
          self.clearSiblings(this);
          self.routeProfile.active = '10';
          self.recalculateRoute();
        });
      }
      if (this.options.mapController.data.router_profiles['12']
          || this.options.mapController.data.router_profiles['13']) { //add button for profile motorcycle and scooter
          let spanMotor = document.createElement('span');
          routeProfile.motorcycle = document.createElement('button');
          routeProfile.motorcycle.list = document.createElement('ul');
          this.$routeProfileMotorcycle = jQuery(routeProfile.motorcycle);
          for (let i = 12; i < 14; i++) { //iterate over possible profiles
            if (this.options.mapController.data.router_profiles[i]) {
              let child = document.createElement('li');
              child.innerHTML = this.options.mapController.data.router_profiles[i];
              jQuery(child).data('profile', [i]);
              jQuery(child).click(function (event) {
                self.childClick(jQuery(this));
              });
              if (!this.$routeProfileMotorcycle.data('profile')) { //add existing default profile to button
                this.$routeProfileMotorcycle.data('profile', i);
                jQuery(child).addClass(cssConstants.ACTIVE);
              }
              routeProfile.motorcycle.list.appendChild(child);
            }
          }

          jQuery(routeProfile.motorcycle).addClass(routingConstants.ROUTER_PROFILE_SCOOTER);
          jQuery(routeProfile.motorcycle).prop('title',langRouteConstants.SCOOTER);


          if (routeProfile.motorcycle.list.children.length == 1) { //ignore dropdown list, if only one motorcycle profile is enabled
            this.routeProfile.appendChild(routeProfile.motorcycle);
            this.$routeProfileMotorcycle.click(function (event) {
              self.clearSiblings(this);
              self.routeProfile.active = jQuery(this).data('profile');
              self.recalculateRoute();
            });
          }
          else { //append with dropdown, if multiple motorcycle profiles are enabled
            spanMotor.appendChild(routeProfile.motorcycle);
            spanMotor.appendChild(routeProfile.motorcycle.list);
            this.routeProfile.appendChild(spanMotor);
            this.$routeProfileMotorcycle.click(function (event) {
              self.clearSiblings(jQuery(this).parent());
              self.routeProfile.active = jQuery(this).data('profile');
              self.recalculateRoute();
            });
          }
      }
      this.childClick = function ($element) { //handle the click inside the profile dropdown
        self.routeProfile.active = $element.data('profile'); //activate selected profile
        self.clearSiblings($element);
        self.recalculateRoute(); //update the route
      };
      this.clearSiblings = function (element) { //function to adjust css-classes after changing profile
        let siblings = jQuery(element).parent().children();
        for (let i = 0; i < siblings.length; i++) {
          jQuery(siblings[i]).removeClass(cssConstants.ACTIVE);
        }
        jQuery(element).addClass(cssConstants.ACTIVE);
      };
      for (let profile in this.options.mapController.data.router_profiles) { //set default value for initial routing
        if (this.options.mapController.data.router_profiles.hasOwnProperty(profile)) {
          this.routeProfile.active = profile;
          break;
        }
      }
    }
    else if (this.options.mapController.data.customProfiles && this.options.mapController.data.customProfiles.length > 1) {
      this.routeProfile = document.createElement('div');
      jQuery(this.routeProfile).addClass(routingConstants.ROUTER_PROFILE_WRAPPER);
      this.customProfiles = [];
      self.routeProfile.active = this.options.mapController.data.customProfiles[0].profileKey;
      for (let customProfileId in this.options.mapController.data.customProfiles) {
        //set fontawesome logo for custom profile
        let customProfile = this.options.mapController.data.customProfiles[customProfileId];
        let selector = "c4g-custom-router-" + customProfile.profileKey;
        let styleEl = document.createElement('style');
        document.head.appendChild(styleEl);

        // Grab style sheet
        let styleSheet = styleEl.sheet;
        // catch firefox, because FF does not know "addRule"
        if (styleSheet.addRule && typeof document.styleSheets[0].addRule === 'function') {
          styleSheet.addRule("button." + selector + ':before', 'content: "\\' + customProfile.fontAwesome + '";');
        } else {
          styleSheet.insertRule("button." + selector + ':before { content: "\\' + customProfile.fontAwesome + '";}', 0);
        }

        routeProfile[customProfile.profileKey] = document.createElement('button');
        jQuery(routeProfile[customProfile.profileKey]).prop('title', customProfile.showName);
        jQuery(routeProfile[customProfile.profileKey]).click(function (event) {
            self.clearSiblings(this);
            self.routeProfile.active = customProfile.profileKey;
            self.recalculateRoute();
        });
        jQuery(routeProfile[customProfile.profileKey]).addClass(selector);
        if (customProfileId == 0) {
          jQuery(routeProfile[customProfile.profileKey]).addClass(cssConstants.ACTIVE);
        }
        this.routeProfile.appendChild(routeProfile[customProfile.profileKey]);
        this.customProfiles.push(jQuery(routeProfile[customProfile.profileKey]));
      }
      this.clearSiblings = function (element) { //function to adjust css-classes after changing profile
        let siblings = jQuery(element).parent().children();
        for (let i = 0; i < siblings.length; i++) {
          jQuery(siblings[i]).removeClass(cssConstants.ACTIVE);
        }
        jQuery(element).addClass(cssConstants.ACTIVE);
      };
    }
    else if (this.options.mapController.data.customProfiles){ //fallback for only one custom profile
      self.routeProfile = {};
      self.routeProfile.active = this.options.mapController.data.customProfiles[0].profileKey;
    }
    else {
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
    jQuery(positionButton).on("click", function (event) {
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
    jQuery(scope[key]).on('input', function () {
      let control = jQuery(this);
      let range = control.attr('max') - control.attr('min');
      let pos = ((control.val() - control.attr('min')) / range) * 100;
      let posOffset = Math.round(50 * pos / 100) - (25);
      let output = control.next('output');
      output
        .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
        .text(control.val() + " km");
      scope.updateLinkFragments("detour", control.val());
    });
    jQuery(scope[key]).on('change', function () {
      if (mode === "route") {
        scope.recalculateRoute();
      } else {
        scope.performArea(scope.areaValue);
      }
    });
    jQuery(scope[key]).trigger('input');
    return toggleDetourWrapper;
  }

  addInterimField(insertId = null, olUid = null){
    const scope = this;
    this.$buttonOver.prop("disabled", true);

    this.overInputWrapper = document.createElement('div');
    this.overInputWrapper.className = routingConstants.ROUTER_INPUT_WRAPPER;
    this.overInput = document.createElement("input");
    this.overInput.type = "text";
    this.overInput.className = routingConstants.ROUTER_INPUT_OVER;
    this.overInput.id = this.overInput.name = "routingOver";

    let routerOverLabel = document.createElement('label');
    let positionButton = this.createPositionButton(".c4g-router-input-over", "overValue", "router");
    routerOverLabel.setAttribute('for', 'routingFrom');
    routerOverLabel.innerHTML = langRouteConstants.ROUTER_Label_Interim;

    let routerOverClear = document.createElement('button');
    routerOverClear.className = routingConstants.ROUTER_INPUT_CLEAR;
    routerOverClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
    routerOverClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
    routerOverClear.id = olUid ? olUid : 0;
    this.$routerOverClear = jQuery(routerOverClear);

    this.overInputWrapper.appendChild(routerOverLabel);
    this.overInputWrapper.appendChild(this.overInput);
    this.overInputWrapper.appendChild(positionButton);
    this.overInputWrapper.appendChild(routerOverClear);
    let listInputWrapper = $("." + routingConstants.ROUTER_INPUT_WRAPPER);
    let appendBefore = null;
    if (insertId != 0 && !insertId) {
      appendBefore = listInputWrapper.last()[0];
    }
    else {
      insertId = parseInt(insertId) + 1;
      appendBefore = listInputWrapper[insertId];
    }
    this.routerViewInputWrapper.insertBefore(this.overInputWrapper, appendBefore);
    this.$routerOverClear.click(function (event) {
      event.preventDefault();
      scope.clearOver(scope.$overInput, this.id);
      jQuery(this).parent().remove();
    });
    scope.$overInput = jQuery(scope.overInput);
    this.$overInput.on('change', function () {
      scope.performSearch(scope.$overInput, "overValue", function() {
        scope.recalculateRoute();
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
        jQuery(buttonFeatures).on('click', function () {
          jQuery(".c4g-router-instructions-wrapper").css('display', 'none');
          jQuery(".router-features-display").css('display', 'block');
        });

        let buttonInstructions = document.createElement('button');
        buttonInstructions.innerHTML = this.options.mapController.data.instructionLabel;
        jQuery(buttonInstructions).on('click', function () {
          jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
          jQuery(".router-features-display").css('display', 'none');
        });

        self.contentSwitcher = document.createElement("div");
        self.contentSwitcher.className = "router-content-switcher";
        jQuery(self.contentSwitcher).hide();
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

      if (mapData.autocomplete) {
        const deleteFromListener = function(event) {
          self.fromValue = null;
          containerAddresses.arrFromPositions = [];
          self.recalculateRoute();
        };
        const submitFromFunction = function(event) {
          // trigger new search
          self.$fromInput.trigger('change');
          const performSearchCallback = function() {
            self.performViaRoute();
          };
          self.performSearch(self.$fromInput, "fromValue", performSearchCallback);

        }

        const selectFromListener = function(event, ui){
          let value = ui.item.value;
          let coord = containerAddresses.arrFromPositions[containerAddresses.arrFromNames.findIndex(
              danger => danger === value
          )];
          self.fromValue = new Point([coord[1], coord[0]]);
          self.recalculateRoute();
        };

        const changeFromListener = function () {
          // self.fromValue = null;
        }
        const objFromListeners = {
          "selectListener": selectFromListener,
          "submitFunction": submitFromFunction,
          "deleteFunction": deleteFromListener,
          "changeListener": changeFromListener
        };
        this.$fromInput = jQuery(this.fromInput);
        const objSettings = {
          "proxyUrl": mapData.proxyUrl,
          "keyAutocomplete": mapData.autocomplete,
          "center" : function () {
            let center = self.options.mapController.map.getView().getCenter();
            center = transform(center, "EPSG:3857","EPSG:4326")
            return center;
          }
        };
        const autocompleteHandlerFrom = new AutocompleteHandler(this.$fromInput, objFromListeners, "route-to", objSettings , containerAddresses);
        autocompleteHandlerFrom.handleInput();
        this.$fromInput.autocomplete({
          source: containerAddresses.arrFromNames
        });
      }
      else {
        this.$fromInput = jQuery(this.fromInput);
        this.$fromInput.on('change', function(event){
          self.fromValue = null;
          self.performSearch(self.$fromInput, "fromValue");
        });
        this.$fromInput.on('keydown', function(event) {
          if (event.keyCode === 13) {
            self.$fromInput.trigger('change');
            const performSearchCallback = function() {
              self.performViaRoute();
            }
            if (!self.fromValue) {
              self.performSearch(self.$fromInput, "fromValue", performSearchCallback);
            }
            else {
              performSearchCallback();
            }
          }
        });
      }
      routerFromLabel = document.createElement('label');
      routerFromLabel.setAttribute('for', 'routingFrom');
      routerFromLabel.innerHTML = langRouteConstants.ROUTER_FROM_LABEL;

      routerFromClear = document.createElement('button');
      routerFromClear.className = routingConstants.ROUTER_INPUT_CLEAR;
      routerFromClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
      routerFromClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
      this.$routerFromClear = jQuery(routerFromClear);
      this.$routerFromClear.click(function (event) {
        self.fromValue = null;
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
        this.$buttonOver = jQuery(buttonOver);
        this.routerButtonBar.appendChild(buttonOver);

        this.$buttonOver.on('click', function(){self.addInterimField()});
      }

      if (this.options.mapController.data.enableTargetSwitch) {
        switchFromTo = document.createElement('button');
        switchFromTo.className = routingConstants.ROUTER_SWITCH;
        switchFromTo.title = langRouteConstants.ROUTER_SWITCH;
        this.$switchFromTo = jQuery(switchFromTo);
        this.routerButtonBar.appendChild(switchFromTo);
      }

      // add profiles selection
      if (this.options.mapController.data.router_api_selection >= 1) {
        this.createRouterProfileSelect();
      }

      this.fromInputWrapper.appendChild(routerFromLabel);
      this.fromInputWrapper.appendChild(this.fromInput);
      this.fromInputWrapper.appendChild(routerFromPosition);
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


      // add enter listener

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
        jQuery(self.routerLayersSelect).on('change', function () {
          jQuery(self.routerLayersValueSelect).empty();
          let selected = jQuery(this).val();
          let clickFunction = function () {
            self.activeLayerValue = this.innerHTML;
            jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
            jQuery(this).siblings().addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
            self.reloadFeatureValues("router");
            if (self.response && self.response.features) {
              self.showFeatures(self.response.features, self.response.type, "router")
            }
            let layerId = jQuery(self.routerLayersSelect).val();
            self.updateLinkFragments("searchType", self.options.mapController.data.routerLayers[layerId][self.activeLayerValue]['mapLabel']);
          };
          let buttonActivated = false;
          for (let i in mapData.routerLayers[selected]) {
            if (mapData.routerLayers[selected].hasOwnProperty(i)) {
              let buttonElement = document.createElement('button');
              buttonElement.innerHTML = i;
              buttonElement.value = mapData.routerLayers[selected][i]['keys'];
              jQuery(buttonElement).on('click', clickFunction);
              self.routerLayersValueSelect.appendChild(buttonElement);
              if (self.desiredButtonRouting && self.desiredButtonRouting === i) {
                jQuery(buttonElement).click();
                buttonActivated = true;
              }
            }
          }
          if (!buttonActivated) {
            jQuery(self.routerLayersValueSelect.firstChild).trigger('click');
          }
          if (self.routerLayersValueSelect.childElementCount === 1) {
            // only one button for selection, the bar can be hidden
            jQuery(self.routerLayersValueSelect.firstChild).css("display", "none");
          }

          self.recalculateRoute();
        });
        jQuery(self.routerLayersSelect).trigger('change');
        if (Object.keys(mapData.routerLayers).length <= 1) {
          jQuery(self.routerLayersSelect).css('display', 'none');
        }
        jQuery(self.routerLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
        jQuery(self.routerLayersInput).insertBefore(jQuery(routerViewInputWrapper));
        jQuery(self.routerLayersValueSelect).insertBefore(jQuery(routerViewInputWrapper));
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

      if (mapData.autocomplete) {
        const selectToListener = function(event, ui) {
          let value = ui.item.value;
          let coord = containerAddresses.arrToPositions[containerAddresses.arrToNames.findIndex(
              danger => danger === value
          )];
          self.toValue = new Point([coord[1], coord[0]]);
          self.recalculateRoute();
        };
        const changeToListener = function() {
          // self.toValue = null;
        };
        const deleteToListener = function(event) {
          self.toValue = null;
          containerAddresses.arrFromPositions = [];
          containerAddresses.arrFromPositions = [];
          self.recalculateRoute();
        };
        const submitToFunction = function () {
          // trigger new search
          self.$toInput.trigger('change');
          const performSearchCallback = function() {
            self.performViaRoute();
          };
          self.performSearch(self.$toInput, "toValue", performSearchCallback);
        }
        this.$toInput = jQuery(this.toInput);
        const objToListeners = {
          "selectListener": selectToListener,
          "submitFunction": submitToFunction,
          "deleteFunction": deleteToListener,
          "changeListener": changeToListener
        };
        const objSettings = {
          "proxyUrl": mapData.proxyUrl,
          "keyAutocomplete": mapData.autocomplete,
          "center" : function () {
            let center = self.options.mapController.map.getView().getCenter();
            center = transform(center, "EPSG:3857","EPSG:4326")
            return center;
          }
        };

        const autocompleteHandlerTo = new AutocompleteHandler(this.$toInput, objToListeners, "route-to", objSettings, containerAddresses);
        autocompleteHandlerTo.handleInput();
        this.$toInput.autocomplete({
          source: containerAddresses.arrToNames
        });
      }
      else {
        this.$toInput = jQuery(this.toInput);
        this.$fromInput.on('change', function(event){
          self.fromValue = null;
          self.performSearch(self.$fromInput, "fromValue");
        });
        this.$fromInput.on('keydown', function(event) {
          if (event.keyCode === 13) {
            self.$fromInput.trigger('change');
            const performSearchCallback = function() {
              self.performViaRoute();
            }
            if (!self.fromValue) {
              self.performSearch(self.$fromInput, "fromValue", performSearchCallback);
            }
            else {
              performSearchCallback();
            }
          }
        });
      }

      let routerToPosition = this.createPositionButton(".c4g-router-input-to", "toValue", "router")

      routerToLabel = document.createElement('label');
      routerToLabel.setAttribute('for', 'routingTo');
      routerToLabel.innerHTML = langRouteConstants.ROUTER_TO_LABEL;

      routerToClear = document.createElement('button');
      routerToClear.className = routingConstants.ROUTER_INPUT_CLEAR;
      routerToClear.title = langRouteConstants.ROUTER_CLEAR_TITLE;
      routerToClear.innerHTML = langRouteConstants.ROUTER_CLEAR_HTML;
      this.$routerToClear = jQuery(routerToClear);

      this.toInputWrapper.appendChild(routerToLabel);
      this.toInputWrapper.appendChild(this.toInput);
      this.toInputWrapper.appendChild(routerToPosition);
      this.toInputWrapper.appendChild(routerToClear);

      self.$routerToClear.click(function (event) {
        event.preventDefault();
        self.toValue = null;
        self.clearInput(self.$toInput);
      });

      routerViewInputWrapper.appendChild(this.toInputWrapper);

      // start search button
      if (mapData.routeStartButton) {
        let routeStartButton = document.createElement("button");
        routeStartButton.className = routingConstants.ROUTE_START_BUTTON;
        routeStartButton.innerText = langRouteConstants.START_ROUTE;
        jQuery(routeStartButton).on("click", function (event) {
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
      let routerActivateFunction = function () {
        self.removeMapInputInteraction();
        self.addMapInputInteraction();
        self.updateLinkFragments("mode", "route");
        if (self.fromInputLoaded) {
          let fromInputCacheable = new CachedInputfield("#routingFrom", true, "c4g-router-address", "pink");
          self.fromInputLoaded = true;
        }
        if (self.toInputLoaded) {
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
    const mapData = this.mapData;
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

    this.$areaFromInput = jQuery(this.areaFromInput);
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
    this.$areaFromClear = jQuery(areaFromClear);

    this.areaFromInputWrapper.appendChild(areaFromLabel);
    this.areaFromInputWrapper.appendChild(areaPosition);
    this.areaFromInputWrapper.appendChild(this.areaFromInput);
    this.areaFromInputWrapper.appendChild(areaFromClear);

    this.$areaFromClear.on("click", function (event) {
      event.preventDefault();
      self.clearInput(jQuery(self.areaFromInput));
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
      jQuery(self.areaLayersSelect).on('change', function () {
        jQuery(self.areaLayersValueSelect).empty();
        let selected = jQuery(this).val();
        let clickFunction = function () {
          self.activeLayerValueArea = this.innerHTML;
          jQuery(this).addClass(cssConstants.ACTIVE).removeClass(cssConstants.INACTIVE);
          jQuery(this).siblings().addClass(cssConstants.INACTIVE).removeClass(cssConstants.ACTIVE);
          self.reloadFeatureValues("area");
          if (self.response) {
            self.showFeatures(self.response[0], self.response[1], "area")
          }
          let layerId = jQuery(self.areaLayersSelect).val();
          self.updateLinkFragments("searchType", self.options.mapController.data.routerLayers[layerId][self.activeLayerValueArea]['mapLabel']);
        };
        let buttonActivated = false;
        for (let i in mapData.routerLayers[selected]) {
          if (mapData.routerLayers[selected].hasOwnProperty(i)) {
            let buttonElement = document.createElement('button');
            buttonElement.innerHTML = i;
            buttonElement.value = mapData.routerLayers[selected][i]['keys'];
            jQuery(buttonElement).on('click', clickFunction);
            self.areaLayersValueSelect.appendChild(buttonElement);
            if (self.desiredButtonRouting && self.desiredButtonRouting === i) {
              jQuery(buttonElement).trigger("click");
              buttonActivated = true;
            }
          }
        }
        if (!buttonActivated) {
          jQuery(self.areaLayersValueSelect.firstChild).trigger('click');
        }
        if (self.areaLayersValueSelect.childElementCount === 1) {
          // only one button for selection, the bar can be hidden
          jQuery(self.areaLayersValueSelect.firstChild).css("display", "none");
        }
        if (self.areaValue) {
          self.performArea(self.areaValue);
        }
      });
      jQuery(self.areaLayersSelect).trigger('change');
      if (Object.keys(mapData.routerLayers).length <= 1) {
        jQuery(self.areaLayersSelect).css('display', 'none');
      }
      jQuery(self.areaLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
      jQuery(self.areaLayersInput).insertBefore(jQuery(areaViewInputWrapper));
      jQuery(self.areaLayersValueSelect).insertBefore(jQuery(areaViewInputWrapper));
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
    areaViewInputWrapper.appendChild(this.areaFromInputWrapper);
    if (mapData.routeStartButton) {
      let areaStartButton = document.createElement("button");
      areaStartButton.className = "c4g-area-search-start";
      areaStartButton.innerText = "Suche starten";
      let callCnt = 0;
      jQuery(areaStartButton).on("click", function (event) {
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
      areaViewInputWrapper.appendChild(areaStartButton);
    }

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
          var currentHintFeature = new Feature({
            geometry: new Point(currentCoordinates)
          });
          self.routingHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().setCenter(currentCoordinates);
        }
      }
      if (self.routingWaySource && self.options.mapController.data.router_api_selection >= '1') {
        self.routingHintSource.clear();
        feature = self.routingWaySource.getFeatures()[0];
        let coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = element.data('pos');
        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = fromLonLat(stringlonlat);
          var currentHintFeature = new Feature({
            geometry: new Point(newCoord)
          })
          self.routingHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().setCenter(newCoord);
        }
        if (coordinates) {
          let start = element.data('start');
          let end = element.data('end');
          if (start, end) {
            let geom = new LineString(coordinates.slice(start, end))
            var currentHintFeature = new Feature({
              geometry: geom
            })
            currentHintFeature.setStyle(
              new Style({
                stroke: new Stroke({
                  color: 'rgba(255, 0, 0, 1)',
                  width: 20
                })
              }),
            );
            let currentZoom = self.options.mapController.map.getView().getZoom();
            self.routingHintSource.addFeature(currentHintFeature);
            self.options.mapController.map.getView().fit(geom);
            let afterZoom = self.options.mapController.map.getView().getZoom();
            let endZoom = Math.round((currentZoom + afterZoom)/2)
            endZoom = (endZoom > afterZoom) ? afterZoom : endZoom;
            self.options.mapController.map.getView().setZoom(endZoom);
          }
        }
      }
    };

    fnItemOver = function (element) {
      if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
        var feature = self.routingWaySource.getFeatures()[0];
        if (feature) {
          self.routingHintSource.clear();
          var currentHintFeature = new Feature({
            geometry: new Point(feature.getGeometry().getCoordinates()[element.data('pos')])
          });
          self.routingHintSource.addFeature(currentHintFeature);
        }
      }
      if (self.routingWaySource && self.routingWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
        var feature = self.routingWaySource.getFeatures()[0];
        if (feature) {
          self.routingHintSource.clear();
          var coordLonLat = element.data('pos');
          if (coordLonLat) {
            var stringlonlat = coordLonLat.split(",");
            stringlonlat[0] = parseFloat(stringlonlat[0]);
            stringlonlat[1] = parseFloat(stringlonlat[1]);
            var newCoord = fromLonLat(stringlonlat);
            var currentHintFeature = new Feature({
              geometry: new Point(newCoord)
            });
            self.routingHintSource.addFeature(currentHintFeature);
          }
          feature = self.routingWaySource.getFeatures()[0];
          let coordinates = feature.getGeometry().getCoordinates();
          if (coordinates) {
            let start = element.data('start');
            let end = element.data('end');
            if (start, end) {
              var currentHintFeature = new Feature({
                geometry: new LineString(coordinates.slice(start, end))
              });
              currentHintFeature.setStyle(
                new Style({
                  stroke: new Stroke({
                    color: 'rgba(255, 0, 0, 1)',
                    width: 15
                  })
                }),
              );
              self.routingHintSource.addFeature(currentHintFeature);
            }
          }
        }
      }

    };

    fnItemOut = function () {
      self.routingHintSource.clear();
    };


    jQuery('[data-start]', routerInstruction).each(function (index, element) {

      var $element = jQuery(element);

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
    jQuery('[data-pos]', routerInstruction).each(function (index, element) {

      var $element = jQuery(element);

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


    jQuery(this.routerInstructionsWrapper).empty();
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
      let intCount = -1;
      for(let i = 0; i < this.overValue.length; i++) {
        if (this.overValue[i]['ol_uid'] === index) {
          intCount = i;
        }
      }
      // only remove if the overField is not empty (overField empty <=> intCount == 0)
      if (intCount > -1) {
        this.overValue.splice(intCount, 1);
      }
    }
    this.$buttonOver.prop("disabled", false);
    jQuery(this.routerInstructionsWrapper).empty();
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
    if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.reverseKey && this.mapData.geosearch.url) {
      url = this.mapData.geosearch.url + "reverse.php?key=" + this.mapData.geosearch.reverseKey + '&format=json&lat=' + value[1] + '&lon=' + value[0];
    }
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
            // self.updateLinkFragments("addressFrom", value);
          } else if ($input.attr('name') === "routingTo") {
            self.$routerToClear.show();
            // update address in link
            // self.updateLinkFragments("addressTo", value);
          } else if ($input.attr('name') === "areaFrom") {
            // self.updateLinkFragments("addressArea", value);
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
    bounds = transformExtent(bounds, map.getView().getProjection(), 'EPSG:4326');
    viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];

    url = self.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
    if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
      url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
    }

    jQuery.ajax({
      'url': url
    }).done(function (response) {

      if (response.length > 0) {
        if (value === "overValue") {
          if (!self.overValue) {
            self.overValue = [];
          }
          let overPoint = new Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
          let deleteButton =  $input.next()[0];
          // traverse the dom level until the delete button is found
          while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
            deleteButton = jQuery(deleteButton).next()[0];
          }

          deleteButton.id = overPoint['ol_uid'];
          self.overValue.push(overPoint);
          self.$buttonOver.prop("disabled", false);
        }
        else {
          let coords = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
          self[value] = new Point(coords);
          switch(value) {
            case "fromValue":
              self.updateLinkFragments("addressFrom", coords);
              break;
            case "toValue":
              self.updateLinkFragments("addressTo", coords);
              break;
            case "areaValue":
              self.updateLinkFragments("addressArea", coords);
              break;
            default:
              break;
          }
        }
      } else {
        // show error hint
        let alertHandler = new AlertHandler();
        alertHandler.showInfoDialog(langRouteConstants.ROUTER_VIEW_ALERT_ERROR, langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS);
        // let errorDiv = self.showRouterError(langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS);
        // let inputDiv = $input.parent()[0];
        // inputDiv.appendChild(errorDiv);
        // self.clearInput($input);
        // delete self[value];
      }

      if (opt_callback && typeof opt_callback === "function") {
        opt_callback();
      }
      self.recalculateRoute();
    }).fail(function () {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(langRouteConstants.ROUTER_VIEW_ALERT_ERROR, langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS);
        // let inputDiv = $input.parent()[0];
        // inputDiv.appendChild(self.showRouterError(langRouteConstants.ROUTER_VIEW_ALERT_ADDRESS));
        // self.clearInput($input);
        // delete self[value];
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
    jQuery(errorDiv).addClass(routingConstants.ROUTE_ERROR);
    jQuery(errorDiv).addClass('contentHeadline');

    let errorLabel = document.createElement('label');
    errorLabel.innerHTML = errorText;
    errorDiv.appendChild(errorLabel);
    let buttonClose = document.createElement('button');
    jQuery(buttonClose).addClass(cssConstants.POPUP_CLOSE);
    jQuery(buttonClose).addClass(cssConstants.ICON);
    jQuery(buttonClose).on('click', function () {
        jQuery(this).parent().remove();
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

    let objFunctions = {};
    // set listener for the autocomplete from field
    const deleteFromListener = function(event) {
      router.fromValue = null;
      containerAddresses.arrFromPositions = [];
      router.recalculateRoute();
    };

    // const submitFromFunction = function(event) {
    //   // trigger new search
    //   router.$fromInput.trigger('change');
    //   const performSearchCallback = function() {
    //     router.performViaRoute();
    //   };
    //   router.performSearch(router.$fromInput, "fromValue", performSearchCallback);
    //
    // };

    const selectFromListener = function(event, ui){
      let value = ui.item.value;
      let coord = containerAddresses.arrFromPositions[containerAddresses.arrFromNames.findIndex(
        danger => danger === value
      )];
      router.fromValue = new Point([coord[1], coord[0]]);
      router.recalculateRoute();
    };

    const changeFromListener = function () {
      // self.fromValue = null;
    };

    objFunctions.fromFunctions = {
      "selectListener": selectFromListener,
      "deleteFunction": deleteFromListener,
      "changeListener": changeFromListener
    };

    // set listener for the autocomplete to field
    const deleteToListener = function(event) {
      router.toValue = null;
      containerAddresses.arrToPositions = [];
      router.recalculateRoute();
    };

    // const submitToFunction = function(event) {
    //   // trigger new search
    //   router.$fromInput.trigger('change');
    //   const performSearchCallback = function() {
    //     router.performViaRoute();
    //   };
    //   router.performSearch(router.$fromInput, "fromValue", performSearchCallback);
    // };

    const selectToListener = function(event, ui){
      let value = ui.item.value;
      let coord = containerAddresses.arrFromPositions[containerAddresses.arrFromNames.findIndex(
        danger => danger === value
      )];
      router.fromValue = new Point([coord[1], coord[0]]);
      router.recalculateRoute();
    };

    const changeToListener = function () {
      // self.fromValue = null;
    };

    objFunctions.toFunctions = {
      "selectListener": selectToListener,
      "deleteFunction": deleteToListener,
      "changeListener": changeToListener
    };

    let routerControlProps = {
      target: document.querySelector('#' + mapController.data.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE),
      mapController: mapController,
      direction: "top",
      router: router,
      withPosition: false,
      objFunctions: objFunctions,
      objSettings: {
        "proxyUrl": mapController.data.proxyUrl,
        "keyAutocomplete": mapController.data.autocomplete,
        "center" : function () {
          let center = mapController.map.getView().getCenter();
          center = transform(center, "EPSG:3857","EPSG:4326");
          return center;
        }
      },
      containerAddresses: containerAddresses,
      className: "c4g-router-panel"
    };
    mapController.routerContainer = document.createElement('div');
    ReactDOM.render(React.createElement(RouterView, routerControlProps), mapController.routerContainer);
    jQuery(".ol-overlaycontainer-stopevent").append(mapController.routerContainer);
  }
});

window.c4gMapsHooks.proxy_appendPopup = window.c4gMapsHooks.proxy_appendPopup || [];
window.c4gMapsHooks.proxy_appendPopup.push(function(params) {
  let objPopup = params.popup;
  let feature = objPopup.feature;
  let mapController = params.mapController;
  if (mapController.controls.router && objPopup.popup.routing_link) {
    let router = mapController.controls.router;

    let routingHandler = function (event) {
      if (mapController.activePortside !== router) {
        router.open();
      }

      if (jQuery(event.currentTarget).hasClass(cssConstants.POPUP_ROUTE_FROM)) {
        // from address
        router.setFromPoint(toLonLat(feature.getGeometry().getCoordinates(), "EPSG:3857"));
      } else {
        // to address
        router.setToPoint(toLonLat(feature.getGeometry().getCoordinates(), "EPSG:3857"));
      }
    }; // end of "routingHandler()"

    let routeButtonWrapper = document.createElement('div');
    routeButtonWrapper.className = cssConstants.POPUP_ROUTE_WRAPPER;

    let routeFromButton = document.createElement('button');
    routeFromButton.className = cssConstants.ICON + ' ' + cssConstants.POPUP_ROUTE_FROM;
    jQuery(routeFromButton).click(routingHandler);
    routeButtonWrapper.appendChild(routeFromButton);

    let routeFromButtonSpan = document.createElement('span');
    routeFromButtonSpan.innerHTML = langRouteConstants.POPUP_ROUTE_FROM;
    routeFromButton.appendChild(routeFromButtonSpan);

    let routeToButton = document.createElement('button');
    routeToButton.className = cssConstants.ICON + ' ' + cssConstants.POPUP_ROUTE_TO;
    jQuery(routeToButton).click(routingHandler);
    routeButtonWrapper.appendChild(routeToButton);

    let routeToButtonSpan = document.createElement('span');
    routeToButtonSpan.innerHTML = langRouteConstants.POPUP_ROUTE_TO;
    routeToButton.appendChild(routeToButtonSpan);

    window.c4gMapsPopup.$content.append(routeButtonWrapper);
  }
});

