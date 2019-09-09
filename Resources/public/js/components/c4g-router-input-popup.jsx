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
import { RouterProfileSelection} from "./c4g-router-profile-selection.jsx";
import {RouterAddressField} from "./c4g-router-address-field.jsx";

export class RouterInputPopup extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let details = "";
    if (this.props.open && this.props.mode === "route") {
      details = <div className="buttonbar">
        <button className="c4g-router-over" onMouseUp={this.props.settings.overFunction}></button>
        <button className="c4g-router-switch" onMouseUp={this.props.switchFunction}></button>
      </div>;
    }

    let overPoints = "";

    // TODO autocomplete für Zwischenziele

    return (
      <div>
        {this.props.settings.overPoints.map((item, index) => {
          return <RouterAddressField className={"c4g-router-input-over-" + index} name={"overPoint-" + index} label="Ziel"
                                     cssId="routingTo" objFunctions={this.props.settings.objFunctions} objSettings={this.props.settings.objSettings}
                                     containerAddresses={this.props.settings.containerAddresses} value={this.props.settings.overAddresses[index]}
                                     router={this.props.settings.router}/>
        })}
        {details}
        <RouterProfileSelection profiles={this.props.profiles} />
      </div>
    );
  }
}