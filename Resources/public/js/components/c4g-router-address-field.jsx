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
    /*
      Required props:
      name
      label
      class
      withPosition
      alle für autocompleteHandler
     */

    this.getPosition = this.getPosition.bind(this);
  }

  render() {
    let positionButton = null;
    if (this.props.withPosition) {
      positionButton = <button className="c4g-router-position" onMouseUp={this.getPosition}></button>;
    }
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <AutocompleteInput type="search" className={this.props.class} name={this.props.name}
                           cssId={this.props.cssId} objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                           containerAddresses={this.props.containerAddresses} autoComplete="off" router={this.props.router} value={this.props.value}/>
        {positionButton}
      </div>
    );
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
   * @param cssId
   * @param property
   * @param mode
   */
  handlePosition(coordinates) {
    const scope = this;
    let coords = coordinates.coords;
    if (this.props.name === "fromValue") {
      scope[property] = new Point([coords.longitude, coords.latitude]);
      scope.performReverseSearch(jQuery(scope.$fromInput), [coords.longitude, coords.latitude]);
    }
    else if (this.props.name === "overValue") {
      if (!scope[property]) {
        scope[property] = [];
      }
      scope[property].push(new Point([coords.longitude, coords.latitude]));
      scope.performReverseSearch(jQuery(scope.$overInput), [coords.longitude, coords.latitude]);
    }
    else if (this.props.name === "toValue") {
      scope[property] = new Point([coords.longitude, coords.latitude]);
      scope.performReverseSearch(jQuery(scope.$toInput), [coords.longitude, coords.latitude]);
    }
    if (this.props.name === "areaFrom") {
      scope.setAreaPoint([coords.longitude, coords.latitude]);
      if (scope[property]) {
        scope.performArea(scope[property]);
      }
    }
    scope.recalculateRoute();
  }
}