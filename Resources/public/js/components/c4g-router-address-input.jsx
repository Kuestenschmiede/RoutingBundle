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
    console.log("alter");
    this.setState({overPtCtr: this.state.overPtCtr + 1});
  }

  /**
   * Swaps the start and the destination.
   */
  swapTargets() {
    console.log("alter");
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
    if (this.props.open) {
      details = <div className="buttonbar">
        <button className="c4g-router-over" onClick={this.addOverPoint}></button>
        <button className="c4g-router-switch" onClick={this.swapTargets}></button>
      </div>;
    }
    if (this.state.mode === "route") {
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
}