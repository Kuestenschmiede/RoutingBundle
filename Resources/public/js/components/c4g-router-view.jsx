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

import React, { Component } from "react";
import {RouterControls} from "./c4g-router-controls.jsx";
import {RouterResultContainer} from "./c4g-router-result-container.jsx";
import {cssConstants} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils";
import * as popupFunctions from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de";
import {routingConstants} from "./../routing-constants";
import {routingConstantsEnglish} from "./../routing-constant-i18n-en";
import {routingConstantsGerman} from "./../routing-constant-i18n-de";
import {CachedInputfield} from "./../../../../../CoreBundle/Resources/public/js/c4g-cached-inputfield";
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
import {RoutingPermalink} from "./../c4g-routing-permalink";
import {AlertHandler} from "./../../../../../CoreBundle/Resources/public/js/AlertHandler";

/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */
export class RouterView extends Component {

  constructor(props) {
    super(props);

    const mapController = this.props.mapController;

    this.state = {
      router: props.router,
      objSettings: {
        "proxyUrl": mapController.data.proxyUrl,
        "keyAutocomplete": mapController.data.autocomplete,
        "center" : function () {
          let center = mapController.map.getView().getCenter();
          center = transform(center, "EPSG:3857","EPSG:4326");
          return center;
        }
      },
      containerAddresses: this.props.containerAddresses,
      fromAddress: "",
      toAddress: "",
      areaAddress: "",
      mode: props.mode || "route",
      overPtCtr: 0,
      overAddresses: [],
      areaPoint: null,
      fromPoint: null,  // array of two coords
      toPoint: null,  // array of two coords
      overPoints: [],  // array of arrays of two coords
    };
    this.init();
  }

  render() {
    return (
      <React.Fragment>
        <RouterControls router={this} open={this.props.open} className={this.props.className}
          objSettings={this.state.objSettings} objFunctions={this.objFunctions}
          containerAddresses={this.state.containerAddresses} mapController={this.props.mapController}
          fromAddress={this.state.fromAddress} toAddress={this.state.toAddress} areaAddress={this.state.areaAddress}
        />
        <RouterResultContainer open={false} direction={"bottom"} className={"c4g-router-result-container"} mapController={this.props.mapController}
          routerInstructions={this.state.routerInstructions}/>
      </React.Fragment>
    );
  }

  setAreaPoint(longitude, latitude) {
    const scope = this;
    this.performReverseSearch("areaAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({areaPoint: point}, () => scope.updateRouteLayersAndPoints());
  }

  setRouteFrom(longitude, latitude) {
    const scope = this;
    console.log("setRouteFrom");
    this.performReverseSearch("fromAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({fromPoint: point}, () => {console.log("setRouteFromCallback");scope.updateRouteLayersAndPoints();});
  }

  setRouteTo(longitude, latitude) {
    const scope = this;
    this.performReverseSearch("toAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({toPoint: point}, () => scope.updateRouteLayersAndPoints());
  }

  addOverPoint(longitude, latitude) {

  }

  updateRouteLayersAndPoints() {
    this.locationsSource.clear();
    console.log(this.state.fromPoint);
    if (this.state.fromPoint) {
      let tmpFeature = new Feature({
        geometry: this.state.fromPoint.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
        tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
      }
      console.log(tmpFeature);
      this.locationsSource.addFeature(tmpFeature);
    }
    if (this.state.toPoint) {
      let tmpFeature = new Feature({
        geometry: this.state.toPoint.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
        tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
      }
      this.locationsSource.addFeature(tmpFeature);
    }
    // TODO iterate overPoints and add them
  }

  createAutocompleteFunctions() {
    let objFunctions = {};
    const scope = this;
    // set listener for the autocomplete from field
    const deleteFromListener = function(event) {
      console.log("delete from listener triggered");
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrFromPositions = [];
      containerAddresses.arrFromNames = [];
      scope.setState({
        fromPoint: null,
        containerAddresses: containerAddresses,
        fromAddress: ""
      }, scope.updateRouteLayersAndPoints);
      scope.recalculateRoute();
    };

    const selectFromListener = function(event, ui) {
      let value = ui.item.value;
      let coord = scope.state.containerAddresses.arrFromPositions[scope.state.containerAddresses.arrFromNames.findIndex(
        danger => danger === value
      )];
      let fromValue = new Point([coord[1], coord[0]]);
      scope.setState({
        fromPoint: fromValue
      });
      scope.recalculateRoute();
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
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrToPositions = [];
      containerAddresses.arrToNames = [];
      scope.setState({
        toPoint: null,
        containerAddresses: containerAddresses,
        toAddress: ""
      }, scope.updateRouteLayersAndPoints);
      scope.recalculateRoute();
    };

    const selectToListener = function(event, ui){
      let value = ui.item.value;
      let coord = scope.state.containerAddresses.arrToPositions[scope.state.containerAddresses.arrToNames.findIndex(
        danger => danger === value
      )];
      let fromValue = new Point([coord[1], coord[0]]);
      scope.setState({
        fromPoint: fromValue
      });
      scope.recalculateRoute();
    };

    const changeToListener = function () {
      // self.fromValue = null;
    };

    objFunctions.toFunctions = {
      "selectListener": selectToListener,
      "deleteFunction": deleteToListener,
      "changeListener": changeToListener
    };
    return objFunctions;
  }

  // =========================================================================================
  // Begin old functions migrated from routing.js
  // =========================================================================================
  
  init() {
    const self = this;

    let styles = [
      this.props.mapController.data.router_from_locstyle,
      this.props.mapController.data.router_to_locstyle,
      this.props.mapController.data.router_point_locstyle,
      this.props.mapController.data.areaCenterLocstyle,
      this.props.mapController.data.clickLocstyle
    ];
    if (this.props.mapController.data.priorityFeatures && this.props.mapController.data.priorityLocstyle) {
      styles.push(this.props.mapController.data.priorityLocstyle);
    }
    // check and load location styles via map-proxy
    this.props.mapController.proxy.locationStyleController.loadLocationStyles(styles);
    let mapData = this.props.mapController.data;

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

    let selectInteraction = new Select({
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
        console.log(feature);
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

    self.props.mapController.map.addInteraction(selectInteraction);
    if (this.props.mapController.data.enableOverPoints) {
      self.props.mapController.map.addInteraction(this.modWayInteraction);
    }

    selectInteraction.setActive(false);

    this.routingHintSource = new VectorSource();
    this.routerHintLayer = new Vector({
      source: this.routingHintSource,
      style: function (feature, resolution) {
        return (!self.props.mapController.proxy) || self.props.mapController.proxy.locationStyleController.arrLocStyles[self.props.mapController.data.router_point_locstyle].style(feature, resolution);
      }
    });

    this.mapData = this.props.mapController.data;

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

    this.props.mapController.map.addLayer(this.routerLayerGroup);
    // this.viewRouter = this.addRouterInterface();
    if (this.props.mapController.data.initialMode === "route" || !this.viewArea) {
      // this.viewRouter.activate();
    }

    // id => array of instructions, for each route one entry
    this.routeInstructions = {};

    // store some vars for ajax-requests
    let profileId = this.props.mapController.data.profile;

    this.geoSearchApi = this.props.mapController.data.api.geosearch + '/' + profileId;
    this.geoReverseSearchApi = this.props.mapController.data.api.geosearch_reverse + '/' + profileId;
    this.routingApi = this.props.mapController.data.api.routing + '/' + profileId;

    if (this.usePermalink) {
      this.permalinkHandler.handleInitialParams();
    }

    this.objFunctions = this.createAutocompleteFunctions();

    this.addMapInputInteraction();
  }

  /**
   * Displays the route instructions in the portside router.
   * @param routeResponse
   * @param routeNumber
   */
  showRouteInstructions(routeResponse, routeNumber) {

    var scope,
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

    scope = this;
    if (!this.props.mapController.data.showInstructions) {
      return;
    }

    // TODO instructions für die anderen engines übergeben

    routerInstructionsHeader = document.createElement('div');
    routerInstructionsHeader.className = routingConstants.ROUTER_INSTRUCTIONS_HEADER;

    if (routeResponse) {
      if (!(routeResponse.features && routeResponse.features.length > 0) || !this.props.mapController.data.showFeatures) {
        jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
      }
      if (this.props.mapController.data.router_api_selection == '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
        if (routeResponse.routes[routeNumber].legs[0].summary) {
          route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
          route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];
          if (routeResponse.routes[routeNumber].legs[1]) {
            route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
          }
        }
        total_distance = (routeResponse.routes[routeNumber].distance);
        total_time = (routeResponse.routes[routeNumber].duration);
      }

      else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {//OSRM-API:<5
        if (routeResponse.route_name) {
          route_name_0 = routeResponse.route_name[0];
          route_name_1 = routeResponse.route_name[1];
        }

        if (routeResponse.route_summary) {
          total_distance = (routeResponse.route_summary.total_distance);
          total_time = (routeResponse.route_summary.total_time);
        }


      }
      else if (this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '2') {//OSR-API
        total_time = (routeResponse.routes[routeNumber].summary.duration);
        total_distance = (routeResponse.routes[routeNumber].summary.distance);
      }
      else if (this.props.mapController.data.router_api_selection == '3' || routeResponse.routeType == '3') { //Graphhopper
        total_distance = routeResponse.paths[0].distance;
        total_time = routeResponse.paths[0].time / 1000 ;
      }
      else if (this.props.mapController.data.router_api_selection == '4' || routeResponse.routeType == '4') { //Valhalla
        total_distance = routeResponse.trip.summary.length *1000;
        total_time = routeResponse.trip.summary.time ;
        this.routeInstructions[routeNumber] = {
          time: total_time,
          distance: total_distance,
          instructions: routeResponse.trip.legs[routeNumber].maneuvers
        };
        this.setState({routerInstructions: this.routeInstructions[routeNumber]});
      }

      if (route_name_0 && route_name_1) {
        routerInstructionsHeader.innerHTML = '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
      }
      else if (this.routeProfile && this.routeProfile.active) {
        routerInstructionsHeader.innerHTML = '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.props.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.props.langConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
      }

      routerInstruction = document.createElement('div');

      routerInstructionsHtml = '<table class="' + routingConstants.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';

      if (this.props.mapController.data.router_api_selection === '1' || routeResponse.routeType == '1') {//OSRM-API:5.x

      } else if (this.props.mapController.data.router_api_selection === '0' || routeResponse.routeType == '0') {//OSRM-API:<5

      } else if (this.props.mapController.data.router_api_selection === '2' || routeResponse.routeType == '2') {//OpenRouteService

      } else if (this.props.mapController.data.router_api_selection === '3' || routeResponse.routeType == '3') { // Graphhopper

      } else if (this.props.mapController.data.router_api_selection === '4' || routeResponse.routeType == '4') { // Valhalla

      }


      routerInstructionsHtml += '</table>';

      routerInstruction.innerHTML = routerInstructionsHtml;


      this.adjustInstructionMapInteraction();

    }
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
      scope,
      url;

    scope = this;

    if ($input.val() === "") {
      delete scope[value];
      return "";
    }

    map = scope.props.mapController.map;
    bounds = map.getView().calculateExtent(map.getSize());
    bounds = transformExtent(bounds, map.getView().getProjection(), 'EPSG:4326');
    viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];
    url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
    if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
      url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
    }

    jQuery.ajax({
      'url': url
    }).done(function (response) {

      if (response.length > 0) {
        if (value === "overValue") {
          if (!scope.overValue) {
            scope.overValue = [];
          }
          let overPoint = new Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
          let deleteButton =  $input.next()[0];
          // traverse the dom level until the delete button is found
          while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
            deleteButton = jQuery(deleteButton).next()[0];
          }

          deleteButton.id = overPoint['ol_uid'];
          scope.overValue.push(overPoint);
          scope.$buttonOver.prop("disabled", false);
        }
        else {
          let coords = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
          let point = new Point(coords);
          if (value === "fromPoint") {
            scope.setState({fromValue: point});
          } else if (value === "toPoint") {
            scope.setState({toValue: point});
          }
          // TODO wieder einbauen
          // switch(value) {
          //   case "fromValue":
          //     scope.updateLinkFragments("addressFrom", coords);
          //     break;
          //   case "toValue":
          //     scope.updateLinkFragments("addressTo", coords);
          //     break;
          //   case "areaValue":
          //     scope.updateLinkFragments("addressArea", coords);
          //     break;
          //   default:
          //     break;
          // }
        }
      } else {
        // show error hint
        let alertHandler = new AlertHandler();
        alertHandler.showInfoDialog(this.props.langConstants.ROUTER_VIEW_ALERT_ERROR, this.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
      }

      if (opt_callback && typeof opt_callback === "function") {
        opt_callback();
      }
      scope.recalculateRoute();
    }).fail(function () {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
    });

    return "";

  }

  /**
   * Converts a given coordinate into the corresponding location.
   * @param stateProp     The state property of this where the address should be stored.
   * @param value         The property that contains the coordinates.
   */
  performReverseSearch(stateProp, value) {

    var self = this,
      url;

    url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];
    if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.reverseKey && this.mapData.geosearch.url) {
      url = this.mapData.geosearch.url + "reverse.php?key=" + this.mapData.geosearch.reverseKey + '&format=json&lat=' + value[1] + '&lon=' + value[0];
    }

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
          // TODO update router permalink
          switch (stateProp) {
            case "areaAddress":
              self.setState({areaAddress: value});
              // self.updateLinkFragments("addressArea", value);
              break;
            case "fromAddress":
              self.setState({fromAddress: value});
              // update address in link
              // self.updateLinkFragments("addressFrom", value);
              break;
            case "toAddress":
              self.setState({toAddress: value});
              // update address in link
              // self.updateLinkFragments("addressTo", value);
              break;
            case "overAddress":
              // TODO sonderfall
              self.setState({fromAddress: value});
              break;
          }
        }
      });
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
      scope,
      fromCoord,
      toCoord,
      overCoord;

    scope = this;
    // this.areaSource.clear();
    this.mapSelectInteraction.getFeatures().clear();
    if (!fromPoint) {
      fromPoint = this.fromPoint;
      if (!fromPoint) {
        return;
      }
    }
    if (!toPoint) {
      if (!toPoint) {
        return;
      }
      toPoint = this.toPoint;
    }
    if (!overPoint) {
      if (this.overPoints) {
        overPoint = this.overPoints;
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

    if (this.props.mapController.data.router_api_selection >= '1') {//OSRM-API:5.x or ORS- API
      let profileId = this.props.mapController.data.profile;
      url = 'con4gis/routeService/' + this.props.mapController.data.lang + '/'
        + profileId + '/' + jQuery(scope.routerLayersSelect).val() + '/'
        + jQuery(scope.toggleDetourRoute).val() + '/' + fromCoord;

      if (overPoint) {
        for (var i = 0; i < overCoord.length; i++)
          url += ';' + overCoord[i];
      }
      url += ';' + toCoord;
      if (this.routeProfile && this.routeProfile.active) {
        url += '?profile=' + this.routeProfile.active;
      }

      if (scope.routeAjax) {
        scope.routeAjax.abort();
      }

      scope.routeAjax = jQuery.ajax({
        'url': url
      })
        .done(function (response) {
          scope.response = response;
          if (response) {
            if (response.error) {
              let errorDiv = scope.showRouterError(this.props.langConstants[response.error]);
              jQuery(scope.fromInput).parent()[0].appendChild(errorDiv);
            } else {
              scope.showRouteLayer(response);
              if (response.features) {
                jQuery(".router-content-switcher").css('display', 'block');
              }
              scope.showRouteInstructions(response, 0);
              if (response.features && response.features.length > 0) {
                let sortedFeatures = scope.showFeatures(response.features, response.type, "router");

                scope.showFeaturesInPortside(sortedFeatures, response.type, "router");
                jQuery(scope.areaFeatureWrapper).empty();
                jQuery(scope.areaFromInput).val("");
              }
            }
          }
        })
        .always(function () {
          scope.routeAjax = undefined;
          if (scope.props.mapController.data.closeAfterSearch) {
          }
        });


      return '';

    } else {//OSRM-API:<5
      try {
        url = 'con4gis/routeService/' + profileId + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;

        jQuery.ajax({
          'url': url
        })
          .done(function (response) {

            if (response) {
              scope.showRoute(response);
            }

          });

        return '';
      }
      catch (Exception) {
        console.log("Please use a more modern API-Version for the Routeservice")
      }

    }
  }

  /**
   * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
   */
  recalculateRoute() {
    var tmpFeature,
      proxy = this.props.mapController.proxy;

    // this.locationsSource.clear();
    // if (this.fromValue) {
    //   tmpFeature = new Feature({
    //     geometry: this.fromValue.clone().transform('EPSG:4326', 'EPSG:3857')
    //   });
    //   if (this.props.mapController.data.router_from_locstyle && proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
    //     tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
    //   }
    //   this.locationsSource.addFeature(tmpFeature);
    // }
    // if (this.toValue) {
    //   tmpFeature = new Feature({
    //     geometry: this.toValue.clone().transform('EPSG:4326', 'EPSG:3857')
    //   });
    //   if (this.props.mapController.data.router_to_locstyle && proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle]) {
    //     tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style);
    //   }
    //   this.locationsSource.addFeature(tmpFeature);
    // }
    // if (this.overValue) {
    //   for (var propt in this.overValue) {
    //     tmpFeature = new Feature({
    //       geometry: this.overValue[propt].clone().transform('EPSG:4326', 'EPSG:3857')
    //     });
    //     if (this.props.mapController.data.router_interim_locstyle && proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle]) {
    //       tmpFeature.setStyle(proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style);
    //     }
    //     this.locationsSource.addFeature(tmpFeature);
    //   }
    // }
    if (this.state.fromPoint && this.state.toPoint) {
      if (this.state.overPoints.length > 0) {
        this.performViaRoute(this.state.fromPoint, this.state.toPoint, this.state.overPoints);
      }
      else {
        this.performViaRoute(this.state.fromPoint, this.state.toPoint);
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
      mapView = this.props.mapController.map.getView();

      if (this.props.mapController.data.router_api_selection == '1' || this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '1' || routeResponse.routeType == '2') {//OSRM-API:5.x
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
      } else if(this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0'){//OSRM-API:<5
        wayPolyline = new Polyline({
          'factor': this.props.mapController.data.router_viaroute_precision || 1e6
        });

        // add route
        routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapView.getProjection()
        });
      }
      else if (this.props.mapController.data.router_api_selection == '3'){
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
      else if (this.props.mapController.data.router_api_selection == "4" || routeResponse.routeType == '4') {
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
      if (this.props.mapController.data.router_alternative == '1') {
        if ((routeResponse.routes && (routeResponse.routes.length > 1) && (routeResponse.routes[1])) || (routeResponse.paths && (routeResponse.paths.length > 1) && (routeResponse.paths[1]))) {
          this.routingAltWaySource.addFeatures(altRouteFeatures);
        }
      }
      if (routeFeatures) {
        this.routingWaySource.addFeatures(routeFeatures);
        // render view
        // so the route gets drawn before the animation starts
        this.props.mapController.map.renderSync();

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
        if (this.props.mapController.activePortside && this.props.mapController.activePortside.container) {
          leftPadding = jQuery(this.props.mapController.activePortside.container).outerWidth();
        }

        rightPadding = 0;
        if (this.props.mapController.activeStarboard && this.props.mapController.activeStarboard.container) {
          rightPadding = jQuery(this.props.mapController.activeStarboard.container).outerWidth();
        }

        // center on route
        mapView.fit(
          routeFeatures[0].getGeometry(),
          {
            size: this.props.mapController.map.getSize(),
            padding: [0, rightPadding, 0, leftPadding]
          }
        );
      }
    }
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

      // TODO router permalink wieder aktualisieren
      if (self.state.fromAddress === "") {
        self.setRouteFrom(coordinate[0], coordinate[1]);
        // self.updateLinkFragments("addressFrom", coordinate);
        self.recalculateRoute();
      } else if (self.state.toAddress === "") {
        self.setRouteTo(coordinate[0], coordinate[1]);
        // self.updateLinkFragments("addressTo", coordinate);
        self.recalculateRoute();
      } else if (self.$overInput) {
        // TODO implement over points
        // if (self.$overInput.val() === "") {
        //   self.performReverseSearch(self.$overInput, coordinate);
        //   if (!self.overValue) {
        //     self.overValue = [];
        //   }
        //   self.overValue.push(new Point(coordinate));
        //   let olUid = self.overValue[self.overValue.length - 1]['ol_uid'];
        //   let deleteButton =  self.$overInput.next()[0];
        //   // traverse the dom level until the delete button is found
        //   while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
        //     deleteButton = jQuery(deleteButton).next()[0];
        //   }
        //
        //   deleteButton.id = olUid;
        //   self.recalculateRoute();
        //   self.$buttonOver.prop("disabled", false);
        // }
      }
    };

    this.props.mapController.map.on('click', self.fnMapRouterInteraction);
  }
}