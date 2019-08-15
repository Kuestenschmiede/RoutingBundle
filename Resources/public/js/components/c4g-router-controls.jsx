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

    this.state.mode = "route"; // route or area
    this.state.router = this.props.router;
    this.state.open = this.props.open;

    this.setRouteMode = this.setRouteMode.bind(this);
    this.setAreaMode = this.setAreaMode.bind(this);
  }

  setRouteMode(event) {
    event.stopPropagation();
    this.setState({mode: "route"});
  }

  setAreaMode(event) {
    event.stopPropagation();
    this.setState({mode: "area"});
  }

  render() {
    let className = this.props.className + (this.state.open ? " c4g-open" : " c4g-close");
    let arrProfiles = [];
    // propagate open state down to child components
    let open = this.state.open;
    for (let key in this.state.router.options.mapController.data.router_profiles) {
      if (this.state.router.options.mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: this.state.router.options.mapController.data.router_profiles[key]
        });
      }
    }

    let details = null;

    if (this.state.open) {
      details = <div>
        <RouterProfileSelection profiles={arrProfiles}/>
      </div>;
    }

    return (
      <div className={className}>
        <div className="c4g-router-mode-switch">
          <button id="c4g-router-button-route" onMouseUp={this.setRouteMode}>Route</button>
          <button id="c4g-router-button-area" onMouseUp={this.setAreaMode}>Area</button>
        </div>
        <RouterAddressInput className="c4g-router-input-wrapper" router={this.props.router} withPosition={true} switchTargets={false}
                            objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} mode={this.state.mode} open={open}/>
        {details}
      </div>
    );
  }

  slideInCollidingElements() {
    // override parent method
    let className = this.props.className + (this.state.open ? " c4g-open" : " c4g-close");
    let topValue = 0;
    let container = document.getElementsByClassName(className)[0];
    if (container) {
      topValue = container.offsetHeight;
    }
    jQuery(this.state.control.element).css("top", topValue + "px");
  }

  slideOutCollidingElements() {
    // override parent method
    this.slideInCollidingElements();
  }





}