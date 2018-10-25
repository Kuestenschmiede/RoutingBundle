// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};
this.c4g.maps.control = this.c4g.maps.control || {};

import {Router} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-control-portside-router";
import {langConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant-i18n-de";
import {cssConstants} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-constant";
import {utils} from "./../../../../MapsBundle/Resources/public/js/c4g-maps-utils"
import {routingConstants} from "./routing-constants";
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
      headline: langConstants.ROUTER,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }
    this.index=0;

    // call parent constructor
    Router.call(this, this.options);
  };
  /**
   * Inherit from "Router"
   */
  ol.inherits(c4g.maps.control.RouterPlugin, Router);

  /**
   * Methods
   */
  c4g.maps.control.RouterPlugin.prototype = $.extend(c4g.maps.control.RouterPlugin.prototype, {

    init: function () {
      var self,
        viewRouter,
        viewArea,
        selectInteraction,
        profileId;

      self = this;
      this.spinner.show();


      // check and load location styles via map-proxy
      this.options.mapController.proxy.locationStyleController.loadLocationStyles([
        this.options.mapController.data.router_from_locstyle,
        this.options.mapController.data.router_to_locstyle,
        this.options.mapController.data.router_point_locstyle
      ]);


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

        if (event.selected[0]) {
          var geometry = event.selected[0].getGeometry();
          if (geometry && geometry instanceof ol.geom.LineString) {
            self.showAltRoute(self.response, event.selected[0].getId());
          }

        }

      });
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
        self.$buttonOver.trigger('click');
        let overPoint = new ol.geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
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
        style: function (feature, resolution) {
          // console.log(self.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style);
          return (!self.options.mapController.proxy) || self.options.mapController.proxy.locationStyleController.arrLocStyles[self.options.mapController.data.router_point_locstyle].style(feature, resolution);
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
        layers: new ol.Collection([
          this.routerWayLayer,
          this.routerAltWayLayer,
          this.locationsLayer,
          this.routerHintLayer,
          this.routerFeaturesLayer,
        ]),
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
    preOpenFunction: function (opt_options) {
      if (opt_options && opt_options.toLonLat) {
        this.performReverseSearch(this.$toInput, opt_options.toLonLat);
        this.recalculateRoute();
        this.toValue = new ol.geom.Point([opt_options.toLonLat[1], opt_options.toLonLat[0]]);
      }

    },
    preCloseFunction: function () {

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
    performViaRoute: function (fromPoint, toPoint, overPoint) {

      var url,
        self,
        fromCoord,
        toCoord,
        overCoord;

      self = this;

      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];
      if (overPoint) {
        overCoord = new Array();
        for (var propt in overPoint) {
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
      if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2') {//OSRM-API:5.x or ORS- API
        url = 'con4gis/routeService/1/' + $(self.routerLayersSelect).val() + '/'+$(self.toggleDetourRoute).val()+'/' + fromCoord;

        if (overPoint) {
          for (var i = 0; i < overCoord.length; i++)
            url += ';' + overCoord[i];
        }
        url += ';' + toCoord;
        if (this.routeProfile && this.routeProfile.active) {
          url += '?profile=' + this.routeProfile.active;
        }
        this.spinner.show();

        jQuery.ajax({
          'url': url
        })
          .done(function (response) {
            self.response = response;
            if (response) {
              self.showRouteLayer(response);
              if (response.features) {
                if (response.features[0].distance) {
                  response.features.sort(function(a,b) {
                    return parseFloat(a.distance) - parseFloat(b.distance);
                  });
                }

                self.showFeatures(response.features, response.type);
                self.showFeaturesInPortside(response.features, response.type, "router");
              }
            }

          })
          .always(function () {
            self.spinner.hide();
            self.update();
          });

        return '';

      } else {//OSRM-API:<5
        console.log("Please use a more modern API-Version for the Routeservice")
      }
    },
    showFeatures: function (features, type = "table") {
      const self = this;
      self.routerFeaturesSource.clear();
      self.routeFeatureSelect = null;
      const layer = self.options.mapController.proxy.layerController.arrLayers[4];
      if (layer && layer.content && layer.content[0] && layer.content[0].data && layer.content[0].data.popup) {
        self.routerFeaturesLayer.popup = layer.content[0].data.popup;
      }
      const unstyledFeatures = [];
      const contentFeatures = [];
      let missingStyles = [];
      for (let i = 0; i < features.length; i++) {
        let feature = features[i];
        let resultCoordinate;
        if (type == "overpass") {
          resultCoordinate = ol.proj.transform([parseFloat(feature['lon']), parseFloat(feature['lat'])], 'EPSG:4326', 'EPSG:3857');
        }
        else {
          resultCoordinate = ol.proj.transform([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
        }
        let point = new ol.geom.Point(resultCoordinate);
        let contentFeature = new ol.Feature(point);
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
        let locstyle = feature['locstyle'] || layer.locstyle;
        contentFeature.set('locationStyle', locstyle);
        if (locstyle && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
          contentFeature.setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
          contentFeatures.push(contentFeature);
        }
        else {
          contentFeature.set('styleId', locstyle);
          unstyledFeatures.push(contentFeature);
          missingStyles[locstyle] = locstyle;
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
      if (features.length > 0) {
        self.routerFeaturesSource.addFeatures(contentFeatures);
        self.routeFeatureSelect = new ol.interaction.Select({
          filter: function(feature, layer) {
            return self.routerFeaturesSource.hasFeature(feature);
          }
        });
        self.routeFeatureSelect.on('select', function(event) {
          // should be always only one feature
          const feature = event.selected[0];
          if (feature) {
            self.clickFeatureEntryForFeature(feature);
          }
        });
        self.options.mapController.map.addInteraction(self.routeFeatureSelect);
      }
    },
    showFeaturesInPortside: function(features, type, mode) {
      const scope = this;
      if(scope[mode + "FeatureWrapper"] === undefined){
        scope[mode + "FeatureWrapper"] = document.createElement('div');
        $(scope[mode + "FeatureWrapper"]).addClass(mode + '-features-display');
        scope[mode + "ViewContentWrapper"].appendChild(scope[mode + "FeatureWrapper"]);
      }
      scope.features = features;
      scope.type = type;
      scope.reloadFeatureValues(mode);
    },

    clickFeatureEntryForFeature: function (feature) {
      const featureId = feature.get('tid');
      if (this.entryWrapper) {
        $(this.entryWrapper).children().each(function(index, element) {
          if ($(element).data('id') === featureId) {
            $(element).click();
          }
        });
      }
    },

    reloadFeatureValues: function(mode) {
      const scope = this;
      const features = scope.features;
      const type = scope.type;
      if (scope[mode + "FeatureWrapper"]) {
        $(scope[mode + "FeatureWrapper"]).empty();
        const routerLayers = this.options.mapController.data.routerLayers;
        const chosenLayerId = $(scope.routerLayersSelect).val();
        const chosenOption = scope.activeLayerValue;
        const values = routerLayers[chosenLayerId][chosenOption].keys;
        const labels = routerLayers[chosenLayerId][chosenOption].labels;

        let entryWrapper = document.createElement("ul");
        $(entryWrapper).addClass("route-features-list-wrapper");
        for (let i = 0; i < features.length; i++) {
          let entry = document.createElement('li');
          $(entry).addClass("route-features-list-element");
          if (type === "overpass" || type === "table") {
            for (let j = 0; j < values.length; j++) {
              let valueDiv = document.createElement('div');
              valueDiv.innerHTML = labels[j] + ": " + features[i][values[j]];
              entry.appendChild(valueDiv);
            }
          } else {
            if (window.c4gMapsHooks && window.c4gMapsHooks.routePluginEntry) {
              utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, {
                entry: entry,
                feature: features[i],
                values: values,
                labels: labels,
                router: scope
              });
            }
          }
          $(entry).addClass("c4g-inactive");
          $(entry).data('id', features[i].id);
          $(entry).on('click', function(event) {
            scope.routerFeaturesSource.forEachFeature(function(tmpFeature) {
              if (tmpFeature.get('tid') === features[i].id) {
                if (!scope.options.mapController.proxy.locationStyleController.arrLocStyles[scope.options.mapController.data.click_locstyle]) {
                  scope.options.mapController.proxy.locationStyleController.loadLocationStyles([scope.options.mapController.data.click_locstyle], {
                    done: function() {
                      let style = scope.options.mapController.proxy.locationStyleController.arrLocStyles[scope.options.mapController.data.click_locstyle].style;
                      tmpFeature.setStyle(style);
                    }
                  });
                } else {
                  let style = scope.options.mapController.proxy.locationStyleController.arrLocStyles[scope.options.mapController.data.click_locstyle].style;
                  tmpFeature.setStyle(style);
                }
              } else {
                tmpFeature.setStyle(scope.options.mapController.proxy.locationStyleController.arrLocStyles[1].style);
              }
            });
            // refresh css classes
            $(this).parent().children('li').each(function(index, element) {
              $(element).addClass("c4g-inactive").removeClass("c4g-active");
            });
            $(this).addClass("c4g-active").removeClass("c4g-inactive");
            // TODO soll auf den ausgewählten entry scrollen
            console.log(entry.offsetTop);
            let container = document.getElementsByClassName("c4g-portside-content-container")[0];
            $("div.c4g-portside-content-container").scrollTop(entry.offsetTop - 300);
            console.log("scrolled");
          });


          entryWrapper.appendChild(entry);
        }
        scope.entryWrapper = entryWrapper;
        scope[mode + "FeatureWrapper"].appendChild(entryWrapper);
      }
    },

    performArea: function(fromPoint){
      const self = this;

      let fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      let url = 'con4gis/areaService/1/' + $(this.areaLayersSelect).val() + '/' + $(self.toggleDetourArea).val() + '/' + fromCoord;
      if (this.routeProfile && this.routeProfile.active) {
        url += '?profile=' + this.routeProfile.active;
      }
      this.spinner.show();

      jQuery.ajax({
        'url': url
      })
        .done(function (response) {
          self.response = response;
          if (response) {
            response[0].sort(function(a,b) {
              return parseFloat(a.distance) - parseFloat(b.distance);
            });
            self.showFeatures(response[0],response[1]);
            self.showFeaturesInPortside(response[0], response[1], "area");
          }

        })
        .always(function () {
          self.spinner.hide();
          self.update();
        });
        
    },
    addUserInterface: function (type) {

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
        routeProfile = [],
        routerFromLabel,
        routerOverLabel,
        routerToLabel,
        routerFromClear,
        routerOverClear,
        routerToClear,
        switchFromTo,
        areaFromLabel,
        areaFromClear,
        buttonOver;

      if (type === 'router') {
        self = this;
        routerContentElement = document.createElement('div');
        routerViewInputWrapper = document.createElement('div');
        routerViewContentWrapper = document.createElement('div');
        routerContentElement.appendChild(routerViewInputWrapper);
        routerContentElement.appendChild(routerViewContentWrapper);
        self.routerViewContentWrapper = routerViewContentWrapper;

        this.fromInputWrapper = document.createElement('div');
        this.fromInputWrapper.className = cssConstants.ROUTER_INPUT_WRAPPER;

        this.fromInput = document.createElement("input");
        this.fromInput.type = "text";
        this.fromInput.className = cssConstants.ROUTER_INPUT_FROM;
        this.fromInput.id = this.fromInput.name = "routingFrom";

        routerFromLabel = document.createElement('label');
        routerFromLabel.setAttribute('for', 'routingFrom');
        routerFromLabel.innerHTML = langConstants.ROUTER_FROM_LABEL;

        routerFromClear = document.createElement('button');
        routerFromClear.className = cssConstants.ROUTER_INPUT_CLEAR;
        routerFromClear.title = langConstants.ROUTER_CLEAR_TITLE;
        routerFromClear.innerHTML = langConstants.ROUTER_CLEAR_HTML;
        this.$routerFromClear = $(routerFromClear);

        switchFromTo = document.createElement('button');
        switchFromTo.className = cssConstants.ROUTER_SWITCH;
        switchFromTo.title = langConstants.ROUTER_SWITCH;
        this.$switchFromTo = $(switchFromTo);

        buttonOver = document.createElement('button');
        buttonOver.className = cssConstants.ROUTER_OVER;
        buttonOver.title = langConstants.ROUTER_OVER;
        this.$buttonOver = $(buttonOver);


        this.routerButtonBar = document.createElement('div');
        this.routerButtonBar.className = cssConstants.ROUTER_BUTTONBAR;
        this.routerButtonBar.appendChild(switchFromTo);
        this.routerButtonBar.appendChild(buttonOver);

        if (this.options.mapController.data.router_api_selection == '2') { //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          }
          else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(cssConstants.ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(cssConstants.ROUTER_PROFILE_CAR);
              this.$routeProfileCar = $(routeProfile.car);
              this.routeProfile.appendChild(routeProfile.car);
              this.$routeProfileCar.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '0';
                self.recalculateRoute();
              });
            }

            if (this.options.mapController.data.router_profiles['1']) { //add button for profile driving-hgv
              routeProfile.hgv = document.createElement('button');
              $(routeProfile.hgv).addClass(cssConstants.ROUTER_PROFILE_HGV);
              this.routeProfile.appendChild(routeProfile.hgv);
              this.$routeProfileHgv = $(routeProfile.hgv);

              this.$routeProfileHgv.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '1';
                self.recalculateRoute();
              });
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

              $(routeProfile.bike).addClass(cssConstants.ROUTER_PROFILE_BIKE);

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

              $(routeProfile.foot).addClass(cssConstants.ROUTER_PROFILE_FOOT);

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
              $(routeProfile.wheelchair).addClass(cssConstants.ROUTER_PROFILE_WHEELCHAIR);
              this.$routeProfileWheelchair = $(routeProfile.wheelchair);
              this.routeProfile.appendChild(routeProfile.wheelchair);
              this.$routeProfileWheelchair.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '10';
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
          }
          else {
            console.warn('No Router Profiles enabled')
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
          self.overInputWrapper.className = cssConstants.ROUTER_INPUT_WRAPPER;

          self.overInput = document.createElement("input");
          self.overInput.type = "text";
          self.overInput.className = cssConstants.ROUTER_INPUT_FROM;
          self.overInput.id = self.overInput.name = "routingOver";

          routerOverLabel = document.createElement('label');
          routerOverLabel.setAttribute('for', 'routingFrom');
          routerOverLabel.innerHTML = langConstants.ROUTER_Label_Interim;

          routerOverClear = document.createElement('button');
          routerOverClear.className = cssConstants.ROUTER_INPUT_CLEAR;
          routerOverClear.title = langConstants.ROUTER_CLEAR_TITLE;
          routerOverClear.innerHTML = langConstants.ROUTER_CLEAR_HTML;
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
        if(mapData.routerLayers){
          this.routerLayersInput = document.createElement('div');
          this.routerLayersSelect = document.createElement('select');
          this.routerLayersInput.appendChild(this.routerLayersSelect);
          for(let i in mapData.routerLayers){
            let option = document.createElement('option');
            option.value = i;
            option.textContent = self.options.mapController.proxy.layerController.arrLayers[i].name;
            this.routerLayersSelect.add(option);
          }
          this.routerLayersValueSelect = document.createElement('div');
          this.routerLayersValueSelect.className = routingConstants.ROUTE_LAYER_VALUES;
          $(this.routerLayersSelect).on('change', function() {
            $(self.routerLayersValueSelect).empty();
            let selected = $(this).val();
            let clickFunction = function() {
              self.activeLayerValue = this.innerHTML;
              $(this).addClass("c4g-active").removeClass('c4g-inactive');
              $(this).siblings().addClass("c4g-inactive").removeClass('c4g-active');
              self.reloadFeatureValues();
            };
            for(let i in mapData.routerLayers[selected]){
              if(mapData.routerLayers[selected].hasOwnProperty(i)){
                let buttonElement = document.createElement('button');
                buttonElement.innerHTML = i;
                buttonElement.value = mapData.routerLayers[selected][i]['keys'];
                $(buttonElement).on('click', clickFunction);
                self.routerLayersValueSelect.appendChild(buttonElement);
              }
            }
            $(self.routerLayersValueSelect.firstChild).trigger('click');
            self.recalculateRoute();
          });
          $(this.routerLayersSelect).trigger('change');
          if(Object.keys(mapData.routerLayers).length <= 1){
            $(this.routerLayersSelect).css('display','none');
          }
          $(this.routerLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
          routerViewInputWrapper.appendChild(this.routerLayersInput);
          routerViewInputWrapper.appendChild(this.routerLayersValueSelect);
        }
        self.toggleDetourRoute = document.createElement('input');
        self.toggleDetourRoute.className = routingConstants.ROUTE_TOGGLE;
        self.toggleDetourRoute.setAttribute('type','range');
        self.toggleDetourRoute.setAttribute('min',mapData.detourRoute[0]);
        self.toggleDetourRoute.setAttribute('max',mapData.detourRoute[1]);
        self.toggleDetourRoute.setAttribute('value',(mapData.detourRoute[0]+mapData.detourRoute[1])/2);
        self.toggleDetourRoute.setAttribute('step',0.5);

        let toggleDetourWrapper = document.createElement('div');
        let output = document.createElement('output');
        let p = document.createElement('p');
        p.innerHTML = 'Umweg';
        output.innerHTML = 100;
        toggleDetourWrapper.appendChild(p);
        toggleDetourWrapper.appendChild(self.toggleDetourRoute);
        toggleDetourWrapper.appendChild(output);
        $(self.toggleDetourRoute).on('input', function(){
          let control = $(this);
          let range = control.attr('max') - control.attr('min');
          let pos = ((control.val() - control.attr('min')) / range) * 100;
          let posOffset = Math.round(50 * pos / 100) - (25);
          let output = control.next('output');
          output
            .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
            .text(control.val());
        });
        $(self.toggleDetourRoute).trigger('input');
        routerViewInputWrapper.appendChild(toggleDetourWrapper);

        routerViewInputWrapper.appendChild(this.fromInputWrapper);
        this.toInputWrapper = document.createElement('div');
        this.toInputWrapper.className = cssConstants.ROUTER_INPUT_WRAPPER;

        this.toInput = document.createElement("input");
        this.toInput.type = "text";
        this.toInput.className = cssConstants.ROUTER_INPUT_TO;
        this.toInput.id = this.toInput.name = "routingTo";

        routerToLabel = document.createElement('label');
        routerToLabel.setAttribute('for', 'routingTo');
        routerToLabel.innerHTML = langConstants.ROUTER_TO_LABEL;

        routerToClear = document.createElement('button');
        routerToClear.className = cssConstants.ROUTER_INPUT_CLEAR;
        routerToClear.title = langConstants.ROUTER_CLEAR_TITLE;
        routerToClear.innerHTML = langConstants.ROUTER_CLEAR_HTML;
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
        let routerActivateFunction = function(){
          self.removeMapInputInteraction();
          self.addMapInputInteraction();
        };
        let routerDeactivateFunction = function(){
          self.removeMapInputInteraction();
        };

        routerView = this.addView({
          name: 'router-view',
          triggerConfig: {
            tipLabel: langConstants.ROUTER_VIEW_ADDRESS_INPUT,
            className: cssConstants.ROUTER_VIEW_ADDRESS_INPUT,
            withHeadline: true
          },
          sectionElements: [
            //{section: this.topToolbar, element: routerViewInputWrapper},
            {section: this.contentContainer, element: routerContentElement},
            {section: this.topToolbar, element: this.viewTriggerBar}
          ],
          activateFunction : routerActivateFunction,
          deactivateFunction : routerDeactivateFunction
        });
        return routerView;
      }
      else {
        self = this;
        areaContentElement = document.createElement('div');
        areaViewInputWrapper = document.createElement('div');
        areaViewContentWrapper = document.createElement('div');
        areaContentElement.appendChild(areaViewInputWrapper);
        areaContentElement.appendChild(areaViewContentWrapper);
        self.areaViewContentWrapper = areaViewContentWrapper;

        this.areaFromInputWrapper = document.createElement('div');
        this.areaFromInputWrapper.className = cssConstants.ROUTER_INPUT_WRAPPER;

        this.areaFromInput = document.createElement("input");
        this.areaFromInput.type = "text";
        this.areaFromInput.className = cssConstants.ROUTER_INPUT_FROM;
        this.areaFromInput.id = this.areaFromInput.name = "routingFrom";

        areaFromLabel = document.createElement('label');
        areaFromLabel.setAttribute('for', 'routingFrom');
        areaFromLabel.innerHTML = langConstants.ROUTER_FROM_LABEL;

        areaFromClear = document.createElement('button');
        areaFromClear.className = cssConstants.ROUTER_INPUT_CLEAR;
        areaFromClear.title = langConstants.ROUTER_CLEAR_TITLE;
        areaFromClear.innerHTML = langConstants.ROUTER_CLEAR_HTML;
        this.$areaFromClear = $(areaFromClear);
        if (this.options.mapController.data.router_api_selection == '2') { //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          }
          else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(cssConstants.ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(cssConstants.ROUTER_PROFILE_CAR);
              this.$routeProfileCar = $(routeProfile.car);
              this.routeProfile.appendChild(routeProfile.car);
              this.$routeProfileCar.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '0';
                self.recalculateRoute();
              });
            }

            if (this.options.mapController.data.router_profiles['1']) { //add button for profile driving-hgv
              routeProfile.hgv = document.createElement('button');
              $(routeProfile.hgv).addClass(cssConstants.ROUTER_PROFILE_HGV);
              this.routeProfile.appendChild(routeProfile.hgv);
              this.$routeProfileHgv = $(routeProfile.hgv);

              this.$routeProfileHgv.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '1';
                self.recalculateRoute();
              });
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

              $(routeProfile.bike).addClass(cssConstants.ROUTER_PROFILE_BIKE);

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

              $(routeProfile.foot).addClass(cssConstants.ROUTER_PROFILE_FOOT);

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
              $(routeProfile.wheelchair).addClass(cssConstants.ROUTER_PROFILE_WHEELCHAIR);
              this.$routeProfileWheelchair = $(routeProfile.wheelchair);
              this.routeProfile.appendChild(routeProfile.wheelchair);
              this.$routeProfileWheelchair.click(function (event) {
                self.clearSiblings(this);
                self.routeProfile.active = '10';
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
          }
          else {
            console.warn('No Router Profiles enabled')
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
        if(mapData.routerLayers){
          this.areaLayersInput = document.createElement('div');
          this.areaLayersSelect = document.createElement('select');
          this.areaLayersInput.appendChild(this.areaLayersSelect);
          for(let i in mapData.routerLayers){
            let option = document.createElement('option');
            option.value = i;
            option.textContent = self.options.mapController.proxy.layerController.arrLayers[i].name;
            this.areaLayersSelect.add(option);
          }
          this.areaLayersValueSelect = document.createElement('div');
          this.areaLayersValueSelect.className = routingConstants.ROUTE_LAYER_VALUES;
          $(this.areaLayersSelect).on('change', function() {
            $(self.areaLayersValueSelect).empty();
            let selected = $(this).val();
            let clickFunction = function() {
              self.activeLayerValueArea = this.innerHTML;
              $(this).addClass("c4g-active").removeClass('c4g-inactive');
              $(this).siblings().addClass("c4g-inactive").removeClass('c4g-active');
              // self.reloadFeatureValues();
            };
            for(let i in mapData.routerLayers[selected]){
              if(mapData.routerLayers[selected].hasOwnProperty(i)){
                let buttonElement = document.createElement('button');
                buttonElement.innerHTML = i;
                buttonElement.value = mapData.routerLayers[selected][i]['keys'];
                $(buttonElement).on('click', clickFunction);
                self.areaLayersValueSelect.appendChild(buttonElement);
              }
            }
            $(self.areaLayersValueSelect.firstChild).trigger('click');
            if(self.areaValue){
              self.performArea(self.areaValue);
            }
          });
          $(this.areaLayersSelect).trigger('change');
          if(Object.keys(mapData.routerLayers).length <= 1){
            $(this.areaLayersSelect).css('display','none');
          }
          $(this.areaLayersSelect).addClass(routingConstants.ROUTE_LAYERS_SELECT);
          areaViewInputWrapper.appendChild(this.areaLayersInput);
          areaViewInputWrapper.appendChild(this.areaLayersValueSelect);
        }
        self.toggleDetourArea = document.createElement('input');
        self.toggleDetourArea.className = routingConstants.ROUTE_TOGGLE;
        self.toggleDetourArea.setAttribute('type','range');
        self.toggleDetourArea.setAttribute('min',mapData.detourArea[0]);
        self.toggleDetourArea.setAttribute('max',mapData.detourArea[1]);
        self.toggleDetourArea.setAttribute('value',(mapData.detourArea[0]+mapData.detourArea[1])/2);
        self.toggleDetourArea.setAttribute('step',0.5);
        let toggleDetourWrapper = document.createElement('div');
        let output = document.createElement('output');
        let p = document.createElement('p');
        p.innerHTML = 'Radius';
        output.innerHTML = 100;
        toggleDetourWrapper.appendChild(p);
        toggleDetourWrapper.appendChild(self.toggleDetourArea);
        toggleDetourWrapper.appendChild(output);
        $(self.toggleDetourArea).on('input', function(){
          let control = $(this);
          let range = control.attr('max') - control.attr('min');
          let pos = ((control.val() - control.attr('min')) / range) * 100;
          let posOffset = Math.round(50 * pos / 100) - (25);
          let output = control.next('output');
          output
            .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
            .text(control.val());
        });
        $(self.toggleDetourArea).trigger('input');
        areaViewInputWrapper.appendChild(toggleDetourWrapper);
        let areaActivateFunction = function(){
          self.fnMapAreaInteraction = function(evt){
            const scope = this;
            if($(self.areaFromInput).val() === ""){
              self.performReverseSearch($(self.areaFromInput),ol.proj.toLonLat(evt.coordinate));
              self.areaValue = new ol.geom.Point(ol.proj.toLonLat(evt.coordinate));
              self.performArea(self.areaValue);
            }
          }
          self.options.mapController.map.on('click', self.fnMapAreaInteraction);
        }
        let areaDeactivateFunction = function(){
          self.options.mapController.map.un('click', self.fnMapAreaInteraction);
        }
        areaView = this.addView({
          name: 'area-view',
          triggerConfig: {
            tipLabel: 'LOOOOL',
            className: cssConstants.ROUTER_VIEW_ADDRESS_INPUT,
            withHeadline: true
          },
          sectionElements: [
            {section: this.contentContainer, element: areaContentElement},
            {section: this.topToolbar, element: this.viewTriggerBar}
          ],
          activateFunction : areaActivateFunction,
          deactivateFunction: areaDeactivateFunction
        });
        return areaView;
      }

    }
  });

  window.c4gMapsHooks = window.c4gMapsHooks || {};
  window.c4gMapsHooks.mapController_addControls = window.c4gMapsHooks.mapController_addControls || [];
  window.c4gMapsHooks.mapController_addControls.push(function(params){
    let mapController = params.mapController;

    mapController.map.removeControl(mapController.controls.router);
    let router = new c4g.maps.control.RouterPlugin({
      tipLabel: langConstants.CTRL_ROUTER,
      target: params.Container,
      mapController: mapController
    });
    mapController.map.addControl(router);
    mapController.controls.router = router;
    console.log(mapController.map.controls);
  })
}(jQuery, this.c4g));