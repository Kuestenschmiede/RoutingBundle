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

    this.state.router = this.props.router;
    this.state.detailsEnabled = false;

    this.setRouteMode = this.setRouteMode.bind(this);
    this.setAreaMode = this.setAreaMode.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  setRouteMode(event) {
    event.stopPropagation();
    this.props.router.setMode("route");
  }

  setAreaMode(event) {
    event.stopPropagation();
    this.props.router.setMode("area");
  }

  render() {
    let className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
    // propagate open state down to child components
    let open = this.props.open;

    return (
      <div className={className}>
        <div className="c4g-router-mode-switch">
          <button id="c4g-router-button-route" onMouseUp={this.setRouteMode}>Route</button>
          <button id="c4g-router-button-area" onMouseUp={this.setAreaMode}>Area</button>
        </div>
        <RouterAddressInput className="c4g-router-input-wrapper" router={this.props.router} withPosition={true} switchTargets={false}
                            objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} currentProfile={this.props.currentProfile}
                            containerAddresses={this.props.containerAddresses} mode={this.props.mode} open={open} layers={this.props.layers}
                            fromAddress={this.props.fromAddress} toAddress={this.props.toAddress} areaAddress={this.props.areaAddress} sliderOptions={this.props.sliderOptions}
                            profiles={this.props.profiles} overSettings={this.props.overSettings} toggleDetails={this.toggleDetails} detailsEnabled={this.state.detailsEnabled}/>
      </div>
    );
  }

  toggleDetails() {
    if (!this.state.detailsEnabled) {
      this.setState({detailsEnabled: true}, this.slideOutCollidingElements);
    } else {
      this.setState({detailsEnabled: false}, this.slideOutCollidingElements);
    }
  }

  slideInCollidingElements() {
    jQuery(this.state.control.element).css("top", 0 + "px");
  }

  slideOutCollidingElements() {
    // override parent method
    let className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
    let topValue = 0;
    let container = document.getElementsByClassName(className)[0];
    if (container) {
      topValue = container.offsetHeight;
    }
    jQuery(this.state.control.element).css("top", topValue + "px");
  }

  open() {
    this.props.setOpen(true);
    this.slideOutCollidingElements();
  }

  close() {
    this.props.setOpen(false);
    this.slideOutCollidingElements();
  }

  clickControl() {
    if (this.props.open) {
      this.close();
    } else {
      this.open();
    }
  }


}