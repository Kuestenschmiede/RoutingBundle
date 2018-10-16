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
      headline: c4g.maps.constant.i18n.ROUTER,
      direction: 'left'
    }, opt_options);

    if (!this.options.mapController) {
      return false;
    }
    this.index=0;

    // call parent constructor
    c4g.maps.control.Router.call(this, this.options);
  };
  /**
   * Inherit from "Router"
   */
  ol.inherits(c4g.maps.control.RouterPlugin, c4g.maps.control.Router);

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
        url = 'con4gis/routeService/1/74/2/' + fromCoord;

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
              self.showRoute(response);
              if (response.features) {
                self.showFeatures(response.features, response.type);
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
      const layer = self.options.mapController.proxy.layerController.arrLayers[74];
      if (layer && layer.content && layer.content[0] && layer.content[0].data && layer.content[0].data.popup) {
        self.routerFeaturesLayer.popup = layer.content[0].data.popup;
      }
      const unstyledFeatures = [];
      const contentFeatures = [];
      let missingStyles = [];
      for (let i = 0; i < features.length; i++) {
        let feature = features[i]
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
      }
    },
    performArea: function(fromPoint, distance){
      const self = this;

      let fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      
      let url = 'con4gis/areaService/1/71/' + distance + '/' + fromCoord;
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
              self.showFeatures(response);
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
        this.fromInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

        this.fromInput = document.createElement("input");
        this.fromInput.type = "text";
        this.fromInput.className = c4g.maps.constant.css.ROUTER_INPUT_FROM;
        this.fromInput.id = this.fromInput.name = "routingFrom";

        routerFromLabel = document.createElement('label');
        routerFromLabel.setAttribute('for', 'routingFrom');
        routerFromLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_FROM_LABEL;

        routerFromClear = document.createElement('button');
        routerFromClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
        routerFromClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
        routerFromClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
        this.$routerFromClear = $(routerFromClear);

        switchFromTo = document.createElement('button');
        switchFromTo.className = c4g.maps.constant.css.ROUTER_SWITCH;
        switchFromTo.title = c4g.maps.constant.i18n.ROUTER_SWITCH;
        this.$switchFromTo = $(switchFromTo);

        buttonOver = document.createElement('button');
        buttonOver.className = c4g.maps.constant.css.ROUTER_OVER;
        buttonOver.title = c4g.maps.constant.i18n.ROUTER_OVER;
        this.$buttonOver = $(buttonOver);


        this.routerButtonBar = document.createElement('div');
        this.routerButtonBar.className = c4g.maps.constant.css.ROUTER_BUTTONBAR;
        this.routerButtonBar.appendChild(switchFromTo);
        this.routerButtonBar.appendChild(buttonOver);

        if (this.options.mapController.data.router_api_selection == '2') { //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          }
          else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(c4g.maps.constant.css.ROUTER_PROFILE_CAR);
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
              $(routeProfile.hgv).addClass(c4g.maps.constant.css.ROUTER_PROFILE_HGV);
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
                    $(child).addClass(c4g.maps.constant.css.ACTIVE);
                  }
                  routeProfile.bike.list.appendChild(child);
                }
              }

              $(routeProfile.bike).addClass(c4g.maps.constant.css.ROUTER_PROFILE_BIKE);

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
                    $(child).addClass(c4g.maps.constant.css.ACTIVE);
                  }
                  routeProfile.foot.list.appendChild(child);
                }
              }

              $(routeProfile.foot).addClass(c4g.maps.constant.css.ROUTER_PROFILE_FOOT);

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
              $(routeProfile.wheelchair).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WHEELCHAIR);
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
                $(siblings[i]).removeClass(c4g.maps.constant.css.ACTIVE);
              }
              $(element).addClass(c4g.maps.constant.css.ACTIVE);
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
          self.overInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

          self.overInput = document.createElement("input");
          self.overInput.type = "text";
          self.overInput.className = c4g.maps.constant.css.ROUTER_INPUT_FROM;
          self.overInput.id = self.overInput.name = "routingOver";

          routerOverLabel = document.createElement('label');
          routerOverLabel.setAttribute('for', 'routingFrom');
          routerOverLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_Label_Interim;

          routerOverClear = document.createElement('button');
          routerOverClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
          routerOverClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
          routerOverClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
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
        this.toInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

        this.toInput = document.createElement("input");
        this.toInput.type = "text";
        this.toInput.className = c4g.maps.constant.css.ROUTER_INPUT_TO;
        this.toInput.id = this.toInput.name = "routingTo";

        routerToLabel = document.createElement('label');
        routerToLabel.setAttribute('for', 'routingTo');
        routerToLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_TO_LABEL;

        routerToClear = document.createElement('button');
        routerToClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
        routerToClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
        routerToClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
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
        }
        let routerDeactivateFunction = function(){
          self.removeMapInputInteraction();
        }

        routerView = this.addView({
          name: 'router-view',
          triggerConfig: {
            tipLabel: c4g.maps.constant.i18n.ROUTER_VIEW_ADDRESS_INPUT,
            className: c4g.maps.constant.css.ROUTER_VIEW_ADDRESS_INPUT,
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
        this.areaFromInputWrapper.className = c4g.maps.constant.css.ROUTER_INPUT_WRAPPER;

        this.areaFromInput = document.createElement("input");
        this.areaFromInput.type = "text";
        this.areaFromInput.className = c4g.maps.constant.css.ROUTER_INPUT_FROM;
        this.areaFromInput.id = this.areaFromInput.name = "routingFrom";

        areaFromLabel = document.createElement('label');
        areaFromLabel.setAttribute('for', 'routingFrom');
        areaFromLabel.innerHTML = c4g.maps.constant.i18n.ROUTER_FROM_LABEL;

        areaFromClear = document.createElement('button');
        areaFromClear.className = c4g.maps.constant.css.ROUTER_INPUT_CLEAR;
        areaFromClear.title = c4g.maps.constant.i18n.ROUTER_CLEAR_TITLE;
        areaFromClear.innerHTML = c4g.maps.constant.i18n.ROUTER_CLEAR_HTML;
        this.$areaFromClear = $(areaFromClear);
        if (this.options.mapController.data.router_api_selection == '2') { //OpenRouteService
          if (Object.keys(this.options.mapController.data.router_profiles).length == 1) {//check for single profile and set this as  active routing profile
            this.routeProfile = [];
            this.routeProfile.active = Object.keys(this.options.mapController.data.router_profiles)[0];
          }
          else if (Object.keys(this.options.mapController.data.router_profiles).length > 1) { //check for multiple profiles and add profile-changer
            this.routeProfile = document.createElement('div');
            $(this.routeProfile).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WRAPPER);
            if (this.options.mapController.data.router_profiles['0']) { //add button for profile driving-car
              routeProfile.car = document.createElement('button');
              $(routeProfile.car).addClass(c4g.maps.constant.css.ROUTER_PROFILE_CAR);
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
              $(routeProfile.hgv).addClass(c4g.maps.constant.css.ROUTER_PROFILE_HGV);
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
                    $(child).addClass(c4g.maps.constant.css.ACTIVE);
                  }
                  routeProfile.bike.list.appendChild(child);
                }
              }

              $(routeProfile.bike).addClass(c4g.maps.constant.css.ROUTER_PROFILE_BIKE);

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
                    $(child).addClass(c4g.maps.constant.css.ACTIVE);
                  }
                  routeProfile.foot.list.appendChild(child);
                }
              }

              $(routeProfile.foot).addClass(c4g.maps.constant.css.ROUTER_PROFILE_FOOT);

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
              $(routeProfile.wheelchair).addClass(c4g.maps.constant.css.ROUTER_PROFILE_WHEELCHAIR);
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
                $(siblings[i]).removeClass(c4g.maps.constant.css.ACTIVE);
              }
              $(element).addClass(c4g.maps.constant.css.ACTIVE);
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
        let areaActivateFunction = function(){
          self.fnMapAreaInteraction = function(evt){
            const scope = this;
            if($(self.areaFromInput).val() === ""){
              self.performReverseSearch($(self.areaFromInput),ol.proj.toLonLat(evt.coordinate));
              self.areaValue = new ol.geom.Point(ol.proj.toLonLat(evt.coordinate));
              self.performArea(self.areaValue,5);
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
            className: c4g.maps.constant.css.ROUTER_VIEW_ADDRESS_INPUT,
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

  c4g.maps.hook.mapController_addControls = c4g.maps.hook.mapController_addControls || [];
  c4g.maps.hook.mapController_addControls.push(function(params){
    let mapController = params.mapController;

    mapController.map.removeControl(mapController.controls.router);
    mapController.controls.router = new c4g.maps.control.RouterPlugin({
      tipLabel: c4g.maps.constant.i18n.CTRL_ROUTER,
      target: params.Container,
      mapController: mapController
    });
    mapController.map.addControl(mapController.controls.router)
  })
}(jQuery, this.c4g));