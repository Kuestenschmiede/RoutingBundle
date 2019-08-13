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
    // TODO Die click action und handler für button und input field bauen
  }

  getPosition(event) {
    // TODO position holen, übersetzen lassen und adresse in feld schreiben (pos. natürlich an router geben)
  }

  render() {
    let positionButton = null;
    if (this.props.withPosition) {
      positionButton = <button className="c4g-router-position" onClick={this.getPosition}></button>;
    }
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <AutocompleteInput type="search" className={this.props.class} name={this.props.name}
                           cssId={this.props.cssId} objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                           containerAddresses={this.props.containerAddresses} autoComplete="off"/>
        {positionButton}
      </div>
    );
  }
}