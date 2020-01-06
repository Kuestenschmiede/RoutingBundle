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
import {AutocompleteInput} from "./c4g-autocomplete-input.jsx";
import {Point} from "ol/geom";

export class RouterAddressField extends Component {

  constructor(props) {
    super(props);

    this.getPosition = this.getPosition.bind(this);
    this.removeContent = this.removeContent.bind(this);
  }

  render() {
    let positionButton = null;
    if (this.props.withPosition) {
      positionButton = <button className="c4g-router-position" onMouseUp={this.getPosition}></button>;
    }
    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <AutocompleteInput type="search" className={this.props.class} name={this.props.name}
                           cssId={this.props.cssId} objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} popup={this.props.popup}
                           containerAddresses={this.props.containerAddresses} autoComplete="off" router={this.props.router} value={this.props.value} index={this.props.index}/>
        {positionButton}
        <button className={"c4g-router-input-clear"} onMouseUp={this.removeContent}></button>
      </div>
    );
  }

  removeContent(event) {
    jQuery("#" + this.props.cssId).val('');
    this.props.clearInput(event);
  }

  getPosition() {
    const scope = this;
    let handleNewPosition = function (pos) {
      scope.handlePosition(pos);
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleNewPosition);
    } else {
      console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
    }
  }

  /**
   * Takes the input coordinates and executes the reverse search. On success, the result location is inserted in the
   * given input field and the given property of this.
   * @param coordinates
   */
  handlePosition(coordinates) {
    let coords = coordinates.coords;
    if (this.props.name === "routingFrom") {
      this.props.router.setRouteFrom(coords.longitude, coords.latitude);
    }
    else if (this.props.name === "overValue") {

    }
    else if (this.props.name === "routingTo") {
      this.props.router.setRouteTo(coords.longitude, coords.latitude);
    }
    if (this.props.name === "areaFrom") {
      this.props.router.setAreaPoint(coords.longitude, coords.latitude);
    }
    this.props.router.recalculateRoute();
  }
}