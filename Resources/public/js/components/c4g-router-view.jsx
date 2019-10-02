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
import {routingConstants} from "./../routing-constants";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Polyline} from "ol/format";
import {transform, toLonLat, fromLonLat, transformExtent} from "ol/proj";
import {Style, Stroke} from "ol/style";
import {Vector, Group} from "ol/layer";
import {Vector as VectorSource} from "ol/source";
import {Collection} from "ol";
import {LineString} from "ol/geom";
import {Modify, Select} from "ol/interaction";
import {AlertHandler} from "./../../../../../CoreBundle/Resources/public/js/AlertHandler";
import {RoutingPermalink} from "./../c4g-routing-permalink";

/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */
export class RouterView extends Component {

  constructor(props) {
    super(props);
    this.setActiveId = this.setActiveId.bind(this);
    this.setOpen = this.setOpen.bind(this);
    const mapController = this.props.mapController;
    let arrProfiles = [];

    for (let key in mapController.data.router_profiles) {
      if (mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: mapController.data.router_profiles[key]
        });
      }
    }
    let layerRoute = null;
    let layerArea = null;
    for (let key in mapController.data.routerLayers) {
      if (mapController.data.routerLayers.hasOwnProperty(key)) {
        layerRoute = layerRoute || key;
        layerArea = layerArea || key;
      }
    }

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
      activeId: null,
      openResults: false,
      containerAddresses: {
        arrFromPositions: [],
        arrFromNames: [],
        arrToPositions: [],
        arrToNames: [],
        arrAreaPositions: [],
        arrAreaNames: [],
        arrOverPositions: {},
        arrOverNames: {}
      },
      fromAddress: "",
      toAddress: "",
      areaAddress: "",
      layerRoute: layerRoute,
      layerArea: layerArea,
      detourRoute: props.detourRoute.initial,
      detourArea: props.detourArea.initial,
      featureList: {
        features: [],
        type: ""
      },
      mode: props.mode || "route",
      overPtCtr: 0,
      overAddresses: [],
      featureSource: undefined,
      routerWaySource: undefined,
      routerHintSource: undefined,
      areaPoint: null,
      fromPoint: null,
      toPoint: null,
      overPoints: [],
      profiles: arrProfiles,
      currentProfile: 0
    };
    this.swapPoints = this.swapPoints.bind(this);
    if (mapController.data.usePermalink) {
      this.permalink = new RoutingPermalink(this);
    }
    this.init();
  }

  render() {
    let sources = {
      waySource: this.state.routerWaySource,
      hintSource: this.state.routerHintSource,
      featureSource: this.state.featureSource
    };
    // TODO aus mapData übernehmen
    let sliderOptions = {
      min: 1,
      max: 10,
      value: this.state.mode === "route" ? this.state.detourRoute : this.state.detourArea,
      router: this
    };
    return (
      <React.Fragment>
        <RouterControls router={this} open={this.props.open} className={this.props.className} profiles={this.state.profiles}
          objSettings={this.state.objSettings} objFunctions={this.objFunctions} overSettings={this.createOverSettings()}
          sources={sources} layers={this.props.mapController.data.routerLayers} containerAddresses={this.state.containerAddresses}
          mapController={this.props.mapController} currentProfile={this.state.currentProfile} fromAddress={this.state.fromAddress}
          toAddress={this.state.toAddress} areaAddress={this.state.areaAddress} mode={this.state.mode} sliderOptions={sliderOptions}
        />
        <RouterResultContainer open={this.state.openResults} setOpen={this.setOpen} direction={"bottom"} className={"c4g-router-result-container"} mapController={this.props.mapController}
          mode={this.state.mode} routerInstructions={this.state.routerInstructions} featureList={this.state.featureList} routerWaySource={this.state.routerWaySource}
          layerRoute={this.state.layerRoute} layerArea={this.state.layerArea} routerHintSource={this.state.routerHintSource} featureSource={this.state.featureSource}
          activeId={this.state.activeId} setActiveId={this.setActiveId}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    if (this.props.mapController.data.usePermalink) {
      this.permalink.handleInitialParams();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let fragments = this.permalink.linkFragments;
    if (this.state.fromPoint && fragments.fromAddress !== this.state.fromPoint.getCoordinates()) {
      this.permalink.updateLinkFragments("fromAddress", this.state.fromPoint.getCoordinates());
    }
    if (this.state.toPoint && fragments.toAddress !== this.state.toPoint.getCoordinates()) {
      this.permalink.updateLinkFragments("toAddress", this.state.toPoint.getCoordinates());
    }
    if (fragments.mode !== this.state.mode) {
      this.permalink.updateLinkFragments("mode", this.state.mode);
    }
    if (fragments.detourArea !== this.state.detourArea) {
      this.permalink.updateLinkFragments("detourArea", this.state.detourArea);
    }
    if (fragments.detourRoute !== this.state.detourRoute) {
      this.permalink.updateLinkFragments("detourRoute", this.state.detourRoute);
    }
  }
  setActiveId(activeId) {
    this.setState({"activeId": activeId});
  };
  setOpen(bool) {
    this.setState({"openResults": bool});
  };

  setAreaPoint(longitude, latitude) {
    const scope = this;
    this.performReverseSearch("areaAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({areaPoint: point}, () => scope.updateRouteLayersAndPoints());
  }

  setRouteFrom(longitude, latitude) {
    const scope = this;
    this.performReverseSearch("fromAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({fromPoint: point}, () => {scope.updateRouteLayersAndPoints();});
  }

  setRouteTo(longitude, latitude) {
    const scope = this;
    this.performReverseSearch("toAddress", [longitude, latitude]);
    let point = new Point([longitude, latitude]);
    this.setState({toPoint: point}, () => scope.updateRouteLayersAndPoints());
  }

  addOverPoint(longitude, latitude, index) {
    const scope = this;
    this.performReverseSearch("overAddress", [longitude, latitude], index);
    let point = new Point([longitude, latitude]);
    const overPoints = this.state.overPoints;
    overPoints.splice(index,0,point);

    // overPoints[index] = point;
    this.setState({overPoints: overPoints}, () => scope.updateRouteLayersAndPoints());
  }

  swapPoints() {
    const newFromPoint = this.state.toPoint;
    const newFromAddress = this.state.toAddress;
    const newToPoint = this.state.fromPoint;
    const newToAddress = this.state.fromAddress;
    const containerAddresses = this.state.containerAddresses;
    const tmpNames = containerAddresses.arrFromNames;
    const tmpPos = containerAddresses.arrFromPositions;
    containerAddresses.arrFromNames = containerAddresses.arrToNames;
    containerAddresses.arrFromPositions = containerAddresses.arrToPositions;
    containerAddresses.arrToNames = tmpNames;
    containerAddresses.arrToPositions = tmpPos;
    this.setState({
      fromPoint: newFromPoint,
      fromAddress: newFromAddress,
      toPoint: newToPoint,
      toAddress: newToAddress,
      containerAddresses: containerAddresses
    }, this.recalculateRoute);
  }

  createOverSettings() {
    const scope = this;
    let objSettings = {};
    objSettings.overAddresses = this.state.overAddresses;
    objSettings.overPoints = this.state.overPoints;
    objSettings.overPtCtr = this.state.overPtCtr;
    // increments the overPtCtr so the popup can render additional overFields
    objSettings.overFunction = function() {
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrOverNames[scope.state.overPtCtr] = [];
      containerAddresses.arrOverPositions[scope.state.overPtCtr] = [];
      scope.setState({
        overPtCtr: scope.state.overPtCtr + 1,
        containerAddresses: containerAddresses
      });
    };
    objSettings.swapFunction = this.swapPoints;
    objSettings.objFunctions = {};
    for (let i = 0; i < this.state.overPtCtr; i++) {
      objSettings.objFunctions[i] = this.createAutocompleteFunctionsForOverField(i);
      if (!objSettings.overAddresses[i]) {
        objSettings.overAddresses[i] = "";
      }
      if (!objSettings.overPoints[i]) {
        objSettings.overPoints[i] = null;
      }
    }
    return objSettings;
  }

  createAutocompleteFunctionsForOverField(fieldId) {
    const scope = this;
    // set listener for the autocomplete from field
    const deleteOverListener = function(event) {
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrOverPositions[fieldId] = [];
      containerAddresses.arrOverNames[fieldId] = [];
      let overPoints = scope.state.overPoints;
      delete overPoints[fieldId];
      let overAddresses = scope.state.overAddresses;
      delete overAddresses[fieldId];
      scope.setState({
        overPoints: overPoints,
        containerAddresses: containerAddresses,
        overAddresses: overAddresses,
        overPtCtr: scope.state.overPtCtr - 1
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });
    };

    const selectOverListener = function(event, ui) {
      let overAddresses, overPoints, overValue;
      let value = ui.item.value;
      let index = scope.state.containerAddresses.arrOverNames[fieldId].findIndex(
        danger => danger === value
      );
      let coord = scope.state.containerAddresses.arrOverPositions[fieldId][index];
      overAddresses = scope.state.overAddresses;
      overAddresses[fieldId] = scope.state.containerAddresses.arrOverNames[fieldId][index];
      overValue = new Point([coord[1], coord[0]]);
      overPoints = scope.state.overPoints;
      overPoints[fieldId] = overValue;
      scope.setState({
        overPoints: overPoints,
        overAddresses: overAddresses
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });
    };

    const changeOverListener = function () {
      // self.fromValue = null;
    };

    return {
      "selectListener": selectOverListener,
      "deleteFunction": deleteOverListener,
      "changeListener": changeOverListener
    };
  }

  updateRouteLayersAndPoints() {
    const scope = this;
    this.locationsSource.clear();
    if (this.state.fromPoint) {
      let tmpFeature = new Feature({
        geometry: this.state.fromPoint.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
        tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
      }
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
    if (!(this.state.fromPoint && this.state.toPoint)) {
      this.routerWaySource.clear();
    }
    if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
      for (let key in this.state.overPoints) {
        if (this.state.overPoints.hasOwnProperty(key) && this.state.overPoints[key] !== null) {
          let tmpFeature = new Feature({
            geometry: this.state.overPoints[key].clone().transform('EPSG:4326', 'EPSG:3857')
          });
          if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
            tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
          }
          this.locationsSource.addFeature(tmpFeature);
        }
      }
    }
    if (this.state.areaPoint) {
      let tmpFeature = new Feature({
        geometry: this.state.areaPoint.clone().transform('EPSG:4326', 'EPSG:3857')
      });
      if (this.props.mapController.data.router_point_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle]) {
        tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle].style);
      } else {
        this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_point_locstyle], {done: function() {
            tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[scope.props.mapController.data.router_point_locstyle].style);
          }});
      }
      this.areaSource.addFeature(tmpFeature);
    }
    if (this.state.mode === "route") {
      this.recalculateRoute();
    } else {
      this.performArea();
    }

  }

  createAutocompleteFunctions() {
    let objFunctions = {};
    const scope = this;
    // set listener for the autocomplete from field
    const deleteFromListener = function(event) {
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrFromPositions = [];
      containerAddresses.arrFromNames = [];
      scope.setState({
        fromPoint: null,
        containerAddresses: containerAddresses,
        fromAddress: ""
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });

    };

    const selectFromListener = function(event, ui) {
      let value = ui.item.value;
      let index = scope.state.containerAddresses.arrFromNames.findIndex(
        danger => danger === value
      );
      let coord = scope.state.containerAddresses.arrFromPositions[index];
      let fromValue = new Point([coord[1], coord[0]]);

      scope.setState({
        fromPoint: fromValue,
        fromAddress: scope.state.containerAddresses.arrFromNames[index]
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });

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
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });

    };

    const selectToListener = function(event, ui){
      let value = ui.item.value;
      let index = scope.state.containerAddresses.arrToNames.findIndex(
        danger => danger === value
      );
      let coord = scope.state.containerAddresses.arrToPositions[index];
      let toValue = new Point([coord[1], coord[0]]);

      scope.setState({
        toPoint: toValue,
        toAddress: scope.state.containerAddresses.arrToNames[index]
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.recalculateRoute();
      });
    };

    const changeToListener = function () {
      // self.fromValue = null;
    };

    objFunctions.toFunctions = {
      "selectListener": selectToListener,
      "deleteFunction": deleteToListener,
      "changeListener": changeToListener
    };

    // set listener for the autocomplete to field
    const deleteAreaListener = function(event) {
      let containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrAreaPositions = [];
      containerAddresses.arrAreaNames = [];
      scope.setState({
        areaPoint: null,
        containerAddresses: containerAddresses,
        areaAddress: ""
      }, () => {
      });

    };

    const selectAreaListener = function(event, ui){
      let value = ui.item.value;
      let index = scope.state.containerAddresses.arrAreaNames.findIndex(
        danger => danger === value
      );
      let coord = scope.state.containerAddresses.arrAreaPositions[index];
      let areaValue = new Point([coord[1], coord[0]]);

      scope.setState({
        areaPoint: areaValue,
        areaAddress: scope.state.containerAddresses.arrAreaNames[index]
      }, () => {
        scope.updateRouteLayersAndPoints();
        scope.performArea();
      });
    };

    const changeAreaListener = function () {
      // self.fromValue = null;
    };

    objFunctions.areaFunctions = {
      "selectListener": selectAreaListener,
      "deleteFunction": deleteAreaListener,
      "changeListener": changeAreaListener
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
    this.routerWaySource = new VectorSource();
    this.routerWayLayer = new Vector({
      source: this.routerWaySource,
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
      source: this.routerWaySource,
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
      const arrKeys = Object.keys(self.state.overPoints);
      if (arrKeys.length > 0) {
        for(let id in self.state.overPoints) {
          if (self.state.overPoints.hasOwnProperty(id)) {
            let dist = self.calcDistance(self.modifyStartPoint.getCoordinates(), self.state.overPoints[id].getCoordinates());
            if(dist < minDistance){
              minDistance = dist;
              insertId = id;
            }
          }
        }

        let distStart = self.calcDistance(self.state.fromPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
        let distEnd = self.calcDistance(self.state.toPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
        let distStartOld = self.calcDistance(self.state.fromPoint.getCoordinates(), self.state.overPoints[0].getCoordinates());
        let overEndIndex = arrKeys[arrKeys.length - 1];
        let distEndOld = self.calcDistance(
          self.state.toPoint.getCoordinates(),
          self.state.overPoints[overEndIndex].getCoordinates()
        );

        if (distStart < distStartOld) {
          insertId = 0;
        } else if (distEnd < distEndOld) {
          insertId++;
        }
      } else {
        insertId = 0;
      }
      self.performReverseSearch("overAddress", overPoint.getCoordinates(), insertId);
      self.addOverPoint(overPoint.getCoordinates()[0], overPoint.getCoordinates()[1], insertId);
    });

    self.props.mapController.map.addInteraction(selectInteraction);
    if (this.props.mapController.data.enableOverPoints) {
      self.props.mapController.map.addInteraction(this.modWayInteraction);
    }

    selectInteraction.setActive(false);

    this.routerHintSource = new VectorSource();
    this.routerHintLayer = new Vector({
      source: this.routerHintSource,
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
   * Calculates the euclidean distance between two points.
   * @param point1
   * @param point2
   */
  calcDistance(point1, point2) {
    let square1, square2;
    square1 = Math.pow(point1[0] - point2[0], 2);
    square2 = Math.pow(point1[1] - point2[1], 2);
    return Math.sqrt(square1 + square2);
  }

  /**
   * Displays the route instructions in the portside router.
   * @param routeResponse
   * @param routeNumber
   */
  showRouteInstructions(routeResponse, routeNumber, routerWaySource, routerHintSource) {

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
        this.setState({
          routerInstructions: this.routeInstructions[routeNumber],
          "routerWaySource": routerWaySource,
          "routerHintSource": routerHintSource});
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
   * Asynchronous implementation of the forward geosearch.
   */
  async performGeoSearch(address) {
    const scope = this;
    let url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI(address);
    if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
      url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI(address);
    }

    return await fetch(url).then(function (response) {
      if (response) {
        return response.json().then(function(data) {
          return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
        });
        // return [parseFloat(response[0].lon), parseFloat(response[0].lat)];
      } else {
        // show error hint
        let alertHandler = new AlertHandler();
        alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
      }

    }).catch(function () {
      let alertHandler = new AlertHandler();
      alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
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
        alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
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
   * @param opt_index     The index for the overAddress (over points only)
   */
  performReverseSearch(stateProp, value, opt_index) {

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
              self.setState({areaAddress: value}, function() {
                if (jQuery("#areaFrom").val() === "") {
                  jQuery("#areaFrom").val(value);
                }
              });
              // self.updateLinkFragments("addressArea", value);
              break;
            case "fromAddress":
              self.setState({fromAddress: value}, function() {
                if (jQuery("#routingFrom").val() === "") {
                  jQuery("#routingFrom").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressFrom", value);
              break;
            case "toAddress":
              self.setState({toAddress: value}, function() {
                if (jQuery("#routingTo").val() === "") {
                  jQuery("#routingTo").val(value);
                }
              });
              // update address in link
              // self.updateLinkFragments("addressTo", value);
              break;
            case "overAddress":
              const overAddresses = self.state.overAddresses;
              overAddresses.splice(opt_index, 0, value);
              self.setState({overAddresses: overAddresses});
              break;
          }
        }
      });
  }

  /**
   * Executes an area search with the given point as center. If there are any, the features in the perimeter will be
   * drawn onto the map and displayed in the feature container.
   */
  performArea() {
    const self = this;

    let fromPoint = this.state.areaPoint;

    if (!fromPoint) {
      return;
    }
    let fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
    let profileId = this.props.mapController.data.profile;
    let url = 'con4gis/areaService/' + profileId + '/' + this.state.layerArea + '/' + this.state.detourArea + '/' + fromCoord;
    url += '?profile=' + this.state.currentProfile;
    if (self.areaAjax) {
      self.areaAjax.abort();
    }

    // this.spinner.show();
    self.areaAjax = jQuery.ajax({
      'url': url
    }).done(function (response) {
        self.response = response;
        if (response) {
          // const routerLayers = self.options.mapController.data.routerLayers;
          // const chosenOption = self.activeLayerValueArea;
          // this should be changed soon, as it totally messes up the logic of the structure
          let sortedFeatures = self.showFeatures(response[0], response[1], "area");
          self.setState({
            "featureList": {
              "features": sortedFeatures,
              "type": response.type
            },
            "featureSource": self.routerFeaturesSource
          });
          // let extent = self.routerFeaturesSource.getExtent();
          // extent = extend(extent, self.areaLayer.getSource().getExtent());
          // let view = self.props.mapController.map.getView();
          // view.fit(extent, {
          //   size: self.props.mapController.map.getSize(),
          //   padding: [0, 0, 0, 0]
          // });
          // // clear route & route features
          // self.routingWaySource.clear();
          // self.routingAltWaySource.clear();
          // self.routingHintSource.clear();
          // self.locationsSource.clear();
          // // jQuery(self.routerFeatureWrapper).empty();
          // // jQuery(self.routerInstructionsWrapper).empty();
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
    if (this.state.featureSource) {
      this.state.featureSource.clear();
    }
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
    if (overPoint && Object.keys(overPoint).length > 0) {
      overCoord = [];
      for (var propt in overPoint) {
        if (overPoint.hasOwnProperty(propt) && overPoint[propt]) {
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
    }

    if (this.props.mapController.data.router_api_selection >= '1') {//OSRM-API:5.x or ORS- API
      let profileId = this.props.mapController.data.profile;

      url = 'con4gis/routeService/' + this.props.mapController.data.lang + '/'
        + profileId + '/' + this.state.layerRoute + '/'
        + this.state.detourRoute + '/' + fromCoord;

      if (overPoint) {
        for (var i = 0; i < overCoord.length; i++)
          url += ';' + overCoord[i];
      }
      url += ';' + toCoord;
      // if (this.state.currentProfile) {
        url += '?profile=' + this.state.currentProfile;
      // }

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
              scope.showRouteInstructions(response, 0, scope.routerWaySource, scope.routerHintSource);
              if (response.features && response.features.length > 0) {
                let sortedFeatures = scope.showFeatures(response.features, response.type, "router");
                scope.setState({
                  "featureList": {
                      "features":   sortedFeatures,
                      "type": response.type
                  },
                  "featureSource": scope.routerFeaturesSource
                });
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
    if (this.state.fromPoint && this.state.toPoint) {
      if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
        this.performViaRoute(this.state.fromPoint, this.state.toPoint, this.state.overPoints);
      } else {
        this.performViaRoute(this.state.fromPoint, this.state.toPoint);
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
    let layerId = this.state.mode === "route" ? this.state.layerRoute : this.state.layerArea;
    const layer = self.props.mapController.proxy.layerController.arrLayers[layerId];
    let activeLayer = this.state.mode === "route" ? "Tanken": "Tanken";//self.activeLayerValue : self.activeLayerValueArea; //richtig anpassen, wenn vorhanden aus GUI
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
            contentFeature = self.props.mapController.proxy.layerController.featureFromOverpass(feature, features, layer, true);
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
          if (locstyle && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            contentFeature.setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                contentFeatures.push(contentFeature);
              }
            } else {
              contentFeatures.push(contentFeature);
            }
          }
          else {
            contentFeature.set('styleId', locstyle);
            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
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
      self.props.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
        done: function () {
          for (let i = 0; i < unstyledFeatures.length; i++) {
            var styleId = unstyledFeatures[i].get('styleId');
            unstyledFeatures[i].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);
            self.routerFeaturesSource.addFeature(unstyledFeatures[i]);
          }
          missingStyles = undefined;
        }
      });
    }
    if (features && features.length > 0) {
      this.routerFeaturesSource.addFeatures(contentFeatures);
    }
    return priceSortedFeatures;
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
      this.routerWaySource.clear();
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
        this.routerWaySource.addFeatures(routeFeatures);
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
      self.routerHintSource.clear();
      feature = self.routerWaySource.getFeatures()[0];
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
        self.routerHintSource.addFeature(currentHintFeature);
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
          self.routerHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().fit(geom);
          let afterZoom = self.options.mapController.map.getView().getZoom();
          let endZoom = Math.round((currentZoom + afterZoom)/2)
          endZoom = (endZoom > afterZoom) ? afterZoom : endZoom;
          self.options.mapController.map.getView().setZoom(endZoom);
        }
      }
    };

    fnItemOver = function (element) {
      if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
        var feature = self.routerWaySource.getFeatures()[0];
        if (feature) {
          self.routerHintSource.clear();
          var currentHintFeature = new Feature({
            geometry: new Point(feature.getGeometry().getCoordinates()[element.data('pos')])
          });
          self.routerHintSource.addFeature(currentHintFeature);
        }
      }
      if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
        var feature = self.routerWaySource.getFeatures()[0];
        if (feature) {
          self.routerHintSource.clear();
          var coordLonLat = element.data('pos');
          if (coordLonLat) {
            var stringlonlat = coordLonLat.split(",");
            stringlonlat[0] = parseFloat(stringlonlat[0]);
            stringlonlat[1] = parseFloat(stringlonlat[1]);
            var newCoord = fromLonLat(stringlonlat);
            var currentHintFeature = new Feature({
              geometry: new Point(newCoord)
            });
            self.routerHintSource.addFeature(currentHintFeature);
          }
          feature = self.routerWaySource.getFeatures()[0];
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
              self.routerHintSource.addFeature(currentHintFeature);
            }
          }
        }
      }

    };

    fnItemOut = function () {
      self.routerHintSource.clear();
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
      let feature = self.props.mapController.map.forEachFeatureAtPixel(evt.pixel,
          function (feature, layer) {
            return feature;
          }
      );
      if (feature && feature.getId()) {
        self.setState(
            {
              activeId: feature.getId(),
              openResults: true
            }, () => {
              document.querySelector(".c4g-route-feature-wrapper").scrollTo(0,document.querySelector("li.route-features-list-element.c4g-active").offsetTop);
            })
      }
      else {
        coordinate = toLonLat(evt.coordinate);
        // clear old features
        self.areaSource.clear();
        if (self.state.mode === "route") {
          // TODO router permalink wieder aktualisieren
          if (self.state.fromAddress === "") {
            self.setRouteFrom(coordinate[0], coordinate[1]);
            // self.updateLinkFragments("addressFrom", coordinate);
            self.recalculateRoute();
          } else if (self.state.toAddress === "") {
            self.setRouteTo(coordinate[0], coordinate[1]);
            // self.updateLinkFragments("addressTo", coordinate);
            self.recalculateRoute();
          } else if (self.state.overPtCtr > 0) {
            // TODO implement over points
            for (let i = 0; i < self.state.overPtCtr; i++) {
              if (!self.state.overPoints[i]) {
                self.addOverPoint(coordinate[0], coordinate[1], i);
                break;
              }
            }
          }
        }
        else if (self.state.mode === "area" && self.state.areaAddress === "") {
          self.setAreaPoint(coordinate[0], coordinate[1]);
        }
      }


    };

    this.props.mapController.map.on('click', self.fnMapRouterInteraction);
  }
}