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
import {HorizontalPanel} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-horizontal-panel.jsx";
import {RouterAddressInput} from "./c4g-router-address-input.jsx"
import {RouterProfileSelection} from "./c4g-router-profile-selection.jsx"

export class RouterControls extends HorizontalPanel {

  constructor(props) {
    super(props);

    this.state.mode ="route"; // route or area
    this.state.router = this.props.router;
  }

  render() {
    let className = this.props.className + (this.state.open ? " c4g-open" : " c4g-close");
    let arrProfiles = [];
    for (let key in this.state.router.options.mapController.data.router_profiles) {
      if (this.state.router.options.mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: this.state.router.options.mapController.data.router_profiles[key]
        });
      }
    }
    return (
      <div className={className}>
        <div className="c4g-router-mode-switch">
          <button id="c4g-router-button-route">Route</button>
          <button id="c4g-router-button-area">Area</button>
        </div>
        <RouterAddressInput className="c4g-router-input-wrapper" router={this.props.router} withPosition={true} switchTargets={false}
                            objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} containerAddresses={this.props.containerAddresses}/>
        <RouterProfileSelection profiles={arrProfiles}/>
      </div>

    );
  }

}