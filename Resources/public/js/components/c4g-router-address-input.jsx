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

    this.popupOpen = false;
  }


  render() {
    let input = null;
    const scope = this;

    /** Prompt plugin */
    Popup.registerPlugin('inputPopup', function (callback) {
      this.create({
        title: 'Routenoptionen',
        content: <RouterInputPopup profiles={scope.props.profiles} open={scope.props.open} containerAddresses={scope.props.containerAddresses}
                                   mode={scope.props.mode} settings={scope.props.popupSettings} objFunctions={scope.props.objFunctions}/>,
        buttons: {
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

    console.log("render called");

    const clickListener = function() {
      /** Call the plugin */
      Popup.plugins().inputPopup(function () {
        // TODO die parameter die man hier einstellen kann in die view hochreichen
        scope.popupOpen = false;
      });
      scope.popupOpen = true;
    };


    if (this.popupOpen) {
      Popup.close();
      clickListener();
    }

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
        <button onMouseUp={clickListener}>Mehr Optionen</button>
      </div>
    );
  }
}