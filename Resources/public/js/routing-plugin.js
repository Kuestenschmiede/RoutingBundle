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

      init: function(){
        var self,
          viewRouter,
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
          style:[
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

          if(event.selected[0] ) {
            var geometry = event.selected[0].getGeometry();
            if(geometry && geometry instanceof ol.geom.LineString){
              self.showAltRoute(self.response,event.selected[0].getId());
            }

          }

        });

        self.options.mapController.map.addInteraction(selectInteraction);


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
    preCloseFunction: function () {

      this.routingWaySource.clear();
      this.routingAltWaySource.clear();
      this.routingHintSource.clear();
      this.locationsSource.clear();
      this.routerFeaturesSource.clear();

      $(this.routerInstructionsWrapper).empty();
      this.clearInput(this.$fromInput);
      if(this.overValue){
        for(var id in this.overValue){
          this.clearOver(this.$overInput,id);
          var elem = document.getElementById(id);
          if(elem){
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
      if(overPoint){
        overCoord = new Array();
        for(var propt in overPoint){
          overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
        }
      }
      if (this.options.mapController.data.router_api_selection == '1' || this.options.mapController.data.router_api_selection == '2'){//OSRM-API:5.x or ORS- API
        url = 'con4gis/routeService/1/74/2/' + fromCoord ;

        if(overPoint){
          for(var i = 0;i<overCoord.length;i++)
            url +=';'+overCoord[i];
        }
        url +=';'+toCoord;
        if(this.routeProfile && this.routeProfile.active){
          url += '?profile='+this.routeProfile.active;
        }
        this.spinner.show();

        jQuery.ajax({
          'url': url})
          .done(function (response) {
            self.response = response;
            if (response) {
              self.showRoute(response);
              if(response.features){
                self.showFeatures(response.features, response.type);
              }
            }

          })
          .always(function () {
            self.spinner.hide();
            self.update();
          });

        return '';

      } else{//OSRM-API:<5
        console.log("Please use a more modern API-Version for the Routeservice")
      }
    },
    showFeatures: function(features, type){
        const self = this;
        self.routerFeaturesSource.clear();
        const layer = self.options.mapController.proxy.layerController.arrLayers[74];
        if(layer && layer.content && layer.content[0] && layer.content[0].data && layer.content[0].data.popup){
          self.routerFeaturesLayer.popup = layer.content[0].data.popup;
        }
        const unstyledFeatures = [];
        const contentFeatures = [];
        let missingStyles = [];
        for(let i = 0; i < features.length; i++){
          let feature = features[i]
          let resultCoordinate;
          if(type == "overpass"){
            resultCoordinate = ol.proj.transform([parseFloat(feature['lon']), parseFloat(feature['lat'])], 'EPSG:4326', 'EPSG:3857');
          }
          else{
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
          if(locstyle && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style){
            contentFeature.setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);
            contentFeatures.push(contentFeature);
          }
          else{
            contentFeature.set('styleId',locstyle);
            unstyledFeatures.push(contentFeature);
            missingStyles[locstyle] = locstyle;
          }
          for(let tags in feature.tags){
            contentFeature.set(tags, feature.tags[tags]);
          }
        }
        if(missingStyles && missingStyles.length > 0){
          self.options.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {done: function() {
              for(let i = 0; i < unstyledFeatures.length; i++){
                var styleId =unstyledFeatures[i].get('styleId');
                unstyledFeatures[i].setStyle(self.options.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);
                self.routerFeaturesSource.addFeature(unstyledFeatures[i]);
              }
              missingStyles = undefined;
            }});
        }
      if(features.length > 0){
        self.routerFeaturesSource.addFeatures(contentFeatures);
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