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
import ReactDOM from "react-dom";
import { RouterAddressField } from "./c4g-router-address-field.jsx";
import { RouterProfileSelection } from "./c4g-router-profile-selection.jsx";
import {Point} from "ol/geom";
import {transform} from "ol/proj";
import Popup from "react-popup";
import {RouterInputPopup} from "./c4g-router-input-popup.jsx";

export class RouterAddressInput extends Component {

  constructor(props) {
    super(props);

    if (!props.router) {
      console.warn("The routing component needs a router, it won't work correctly since none was passed...");
    }

    this.state = {
      router: props.router,
    };
    let popupContainer = document.createElement('div');
    popupContainer.id = "popupContainer";
    let mapId = this.props.router.props.mapController.data.mapId;
    document.getElementById("c4g_map_" + mapId).appendChild(popupContainer);
    ReactDOM.render(
      <Popup />,
      document.getElementById('popupContainer')
    );

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
    const scope = this;

    /** Prompt plugin */
    Popup.registerPlugin('inputPopup', function (callback) {
      this.create({
        title: 'Routenoptionen',
        content: <RouterInputPopup profiles={scope.props.profiles} open={scope.props.open}
                                   mode={scope.props.mode} settings={scope.props.popupSettings}/>,
        buttons: {
          // left: ['cancel'],
          right: [{
            text: 'Bestätigen',
            className: 'success',
            action: function () {
              callback();
              Popup.close();
            }
          }]
        }
      });
    });

    const clickListener = function() {
      /** Call the plugin */
      Popup.plugins().inputPopup(function () {
        // TODO die parameter die man hier einstellen kann in die view hochreichen
      });
    };

    if (this.props.mode === "route") {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="routingFrom" label="Start"
                            cssId="routingFrom" objFunctions={this.props.objFunctions.fromFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.fromAddress} router={this.props.router}/>
        <RouterAddressField className="c4g-router-input-to" name="routingTo" label="Ziel"
                            cssId="routingTo" objFunctions={this.props.objFunctions.toFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.toAddress} router={this.props.router}/>
      </React.Fragment>;
    } else {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="areaFrom" label="Zentrum"
                            cssId="areaFrom" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.areaAddress} router={this.props.router}/>
      </React.Fragment>;
    }
    return (
      <div className={this.props.className}>
        {input}
        <button onMouseUp={clickListener}>Klick mich hart du Sau!</button>
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

    objFunctions["submit" + uppercasedType + "Listener"] = function(event) {
      // TODO
      // self.$fromInput.trigger('change');
      // const performSearchCallback = function() {
      //   self.performViaRoute();
      // };
      // self.performSearch(self.$fromInput, "fromValue", performSearchCallback);
    };

    objFunctions["select" + uppercasedType + "Listener"] = function(event, ui) {
      let value = ui.item.value;
      let coord = scope.state.arrFromPositions[containerAddresses.arrFromNames.findIndex(
        danger => danger === value
      )];
      self.fromValue = new Point([coord[1], coord[0]]);
      self.recalculateRoute();
    };

    objFunctions["change" + uppercasedType + "Listener"] = function (event) {

    };

    return {
      callbacks: objFunctions,
      settings: objSettings
    };
  }
}