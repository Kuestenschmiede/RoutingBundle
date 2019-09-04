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
    // this.viewRouter = this.addRouterInterface();
    if (this.options.mapController.data.initialMode === "route" || !this.viewArea) {
      // this.viewRouter.activate();
    }

    // id => array of instructions, for each route one entry
    this.routeInstructions = {};

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
   * Creates a wrapper element for the router attribution.
   * @returns {HTMLElement}
   */








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


}

// hook to make the mapController load the router at the end of its constructor
window.c4gMapsHooks = window.c4gMapsHooks || {};
window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
window.c4gMapsHooks.mapController_addControls.push(function(params){
  let mapController = params.mapController;
  if(mapController.data.router_enable){
    mapController.map.removeControl(mapController.controls.router);

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
      target: document.querySelector('#' + mapController.data.mapDiv + ' .' + cssConstants.OL_OVERLAYCONTAINER_SE),
      mapController: mapController,
      direction: "top",
      withPosition: false,
      detourRoute: mapController.data.detourRoute,
      detourArea: mapController.data.detourArea,
      containerAddresses: containerAddresses,
      className: "c4g-router-panel",
      langConstants: langRouteConstants
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

