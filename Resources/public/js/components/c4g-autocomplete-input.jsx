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
import {AutocompleteHandler} from "./../../../../../CoreBundle/Resources/public/js/AutocompleteHandler";

export class AutocompleteInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const scope = this;
    const submitFunction = function () {
      let field = $("#" + scope.props.cssId);
      field.trigger('change');
      const performSearchCallback = function() {
        scope.props.router.performViaRoute();
      };
      let value = (scope.props.cssId.indexOf('From') !== -1) ? "fromValue" : "toValue";
      scope.props.router.performSearch(field, value, performSearchCallback);
    };

    let enterListener = function(event, opt_this) {
      //const scope = this;
      if (event.keyCode === 13) {
        submitFunction();
      } else {
        if ($(event.currentTarget).val().length === 0 && !event.keyCode) { //deleted
          scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.classList[0]);

          let cssClass = event.currentTarget.classList[0];
          if (cssClass.indexOf('From') !== -1) {
            travelData.routeFrom = {};
            scope.props.containerAddresses.arrFromPositions = [];
            scope.props.containerAddresses.arrFromPositions = [];
          } else if (cssClass.indexOf('To') !== -1) {
            travelData.routeTo = {};
            scope.props.containerAddresses.arrToNames = [];
            scope.props.containerAddresses.arrToPositions = [];
          }
          else{
            console.log("This is weird ¯\\_(ツ)_/¯");
          }
        }
        else {
          scope.counter = Math.floor(Date.now());
          setTimeout(function() {
            if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
              delete scope.counter;
              scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
            }
          },500);
        }
      }
    };

    return (
      <input id={this.props.cssId} type="search" value={this.props.value} onKeyDown={enterListener} autoComplete="off"/>
    );
  }

  componentDidMount() {
    let arrNames;
    if (this.props.cssId.indexOf("From") !== -1) {
      arrNames = this.props.containerAddresses.arrFromNames
    } else {
      arrNames = this.props.containerAddresses.arrToNames;
    }
    jQuery('#' + this.props.cssId).autocomplete({
      source: arrNames
    });
  }

  setCenter (center) {
    this.objSettings.center = center;
  }

  autocompleteAddress(input, cssClass) {
    const scope = this;
    const settings = scope.props.objSettings;
    let center;
    if (settings.center) {
      if (typeof settings.center === "function") {
        let objCenter = settings.center();
        center = objCenter[0] + "," + objCenter[1];
      }
      else {
        center = settings.center[0] + "," + settings.center[1];
      }
    }
    else if(settings.bBox){
      center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
    }
    let url;
    if (center) {
      url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input +"&center=" + center;
    }
    else {
      url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
    }
    $.ajax({url: url}).done(function(data) {
      let center;
      if (settings.center) {
        center = settings.center;
      }
      else if (settings.bBox){
        center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
      }
      if (data.length > 0) {

        if (data[0] && data[0].display_name  && center) {
          // $(cssId).val(data[0].display_name);
          let arrAddresses = [];
          for (let i in data) {
            if (data.hasOwnProperty(i)) {
              if (settings.bBox && settings.bBox[0]) {
                if (scope.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                  let distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                  let element = {
                    'dist' : distance,
                    'pos'  : [data[i].lat, data[i].lon],
                    'name' : data[i].display_name
                  };
                  arrAddresses.push(element);
                }
              }
            }
          }
          arrAddresses.sort((a,b) => a.dist -b.dist);

          for (let i in arrAddresses) {
            if (arrAddresses.hasOwnProperty(i)) {
              if (cssClass.indexOf('from') !== -1) {
                // do not add twice
                if (!scope.props.containerAddresses.arrFromNames.includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrFromNames.push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrFromPositions.push(arrAddresses[i].pos);
                }
              }
              else if (cssClass.indexOf('to') !== -1){
                if (!scope.props.containerAddresses.arrToNames.includes(arrAddresses[i].name)) {
                  scope.props.containerAddresses.arrToNames.push(arrAddresses[i].name);
                  scope.props.containerAddresses.arrToPositions.push(arrAddresses[i].pos);
                }
              }
              else {
                console.log("This is weird ¯\\_(ツ)_/¯");
              }

            }
          }
          // trigger keydown event to show autocomplete options
          let event = jQuery.Event("keydown", {keyCode: 8});
          $(cssClass).trigger(event);
        }
        for(let i in data) {
          if(data.hasOwnProperty(i)) {
            if (cssClass.indexOf('From') !== -1) {
              // do not add twice
              if (!scope.props.containerAddresses.arrFromNames.includes(data[i].display_name)) {
                scope.props.containerAddresses.arrFromNames.push(data[i].display_name);
                scope.props.containerAddresses.arrFromPositions.push([data[i].lat, data[i].lon]);
              }
            }
            else if (cssClass.indexOf('To') !== -1){
              if (!scope.props.containerAddresses.arrToNames.includes(data[i].display_name)) {
                scope.props.containerAddresses.arrToNames.push(data[i].display_name);
                scope.props.containerAddresses.arrToPositions.push([data[i].lat, data[i].lon]);
              }
            }
            else {
              console.log("This is weird ¯\\_(ツ)_/¯");
            }
          }
        }
        // trigger keydown event to show autocomplete options
        let event = jQuery.Event("keydown", {keyCode: 8});
        $(cssClass).trigger(event);
      }
    });
  }

  isInBoundingBox(longitude, latitude, bbox) {
    if (typeof longitude === "string") {
      longitude = parseFloat(longitude);
    }
    if (typeof latitude === "string") {
      latitude = parseFloat(latitude);
    }
    if (bbox[0] < longitude &&
      longitude < bbox[2] &&
      bbox[1] < latitude &&
      latitude < bbox[3]) {
      return true;
    } else {
      return false;
    }
  }
}