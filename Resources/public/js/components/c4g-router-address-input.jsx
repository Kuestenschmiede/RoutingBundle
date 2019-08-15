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
import { RouterAddressField } from "./c4g-router-address-field.jsx";
import { RouterProfileSelection } from "./c4g-router-profile-selection.jsx";
import {Point} from "ol/geom";
import {transform} from "ol/proj";

export class RouterAddressInput extends Component {

  constructor(props) {
    super(props);

    if (!props.router) {
      console.warn("The routing component needs a router, it won't work correctly since none was passed...");
    }

    this.state = {
      router: props.router,
      fromAddress: "",
      toAddress: "",
      areaFrom: "",
      mode: props.mode || "route",
      overPtCtr: 0,
      overAddresses: [],
      areaPoint: [],
      fromPoint: [],  // array of two coords
      toPoint: [],  // array of two coords
      overPoints: [],  // array of arrays of two coords
    };
    this.addOverPoint = this.addOverPoint.bind(this);
    this.swapTargets = this.swapTargets.bind(this)
  }

  /**
   * Adds an over point to the route.
   */
  addOverPoint() {
    this.setState({overPtCtr: this.state.overPtCtr + 1});
  }

  /**
   * Swaps the start and the destination.
   */
  swapTargets() {
    let newFromAddress = this.state.toAddress;
    let newToAddress = this.state.fromAddress;
    this.setState({
      fromAddress: newFromAddress,
      toAddress: newToAddress,
      fromPoint: this.state.toPoint,
      toPoint: this.state.fromPoint
    });
  }

  render() {
    let input = null;
    let details = null;
    if (this.props.open && this.props.mode === "route") {
      details = <div className="buttonbar">
        <button className="c4g-router-over" onMouseUp={this.addOverPoint}></button>
        <button className="c4g-router-switch" onMouseUp={this.swapTargets}></button>
      </div>;
    }
    if (this.props.mode === "route") {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="routingFrom" label="Start"
                            cssId="routingFrom" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.state.fromAddress}/>
        <RouterAddressField className="c4g-router-input-to" name="routingTo" label="Ziel"
                            cssId="routingTo" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.state.toAddress}/>
      </React.Fragment>;
    } else {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="areaFrom" label="Zentrum"
                            cssId="areaFrom" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.state.areaFrom}/>
      </React.Fragment>;
    }
    return (
      <div className={this.props.className}>
        {input}
        {details}
      </div>
    );
  }

  /**
   * Creates objSettings object and objFunctions for the autocomplete handler.
   * @param type  The type of field, "from" or "to"
   */
  createAutocompleteFunctions(type) {
    const scope = this;
    const uppercasedType = type.charAt(0).toUpperCase() + type.slice(1);
    const objFunctions = {};
    const objSettings = {
      "proxyUrl": mapData.proxyUrl,
      "keyAutocomplete": mapData.autocomplete,
      "center" : function () {
        let center = self.options.mapController.map.getView().getCenter();
        center = transform(center, "EPSG:3857","EPSG:4326")
        return center;
      }
    };
    objFunctions["delete" + uppercasedType + "Listener"] = function(event) {
      let newState = {};
      newState[type + "Address"] = "";
      newState[type + "Point"] = [];
      scope.setState(newState);
      scope.state.router.recalculateRoute();
    };
    // const deleteFromListener = function(event) {
    //   self.fromValue = null;
    //   containerAddresses.arrFromPositions = [];
    //   self.recalculateRoute();
    // };
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

  }
}