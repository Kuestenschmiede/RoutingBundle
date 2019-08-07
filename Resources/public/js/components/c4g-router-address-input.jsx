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
import { RouterAddressField } from "./c4g-router-address-field";
import {AutocompleteInput} from "./c4g-autocomplete-input";

export class RouterAddressInput extends Component {

  constructor(props) {
    super(props);

    if (!props.router) {
      console.warn("The routing component needs a router, it won't work correctly since none was passed...");
    }

    /*
      props:
      router
      withPosition
      switchTargets
      objFunctions
      objSettings
      containerAddresses
     */

    this.state = {
      router: props.router,
      fromAddress: "",
      toAddress: "",
    };

  }

  render() {
    return (
      <div>
        <div className="buttonbar">
          <button className="c4g-router-over"></button>
          <button className="c4g-router-switch"></button>
        </div>
        <RouterProfileSelection className="c4g-router-profile-wrapper"/>
        <RouterAddressField className="c4g-router-input-from" name="routingFrom"
                            cssId="routingFrom" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition}/>
        <RouterAddressField className="c4g-router-input-to" name="routingTo"
                            cssId="routingTo" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition}/>
      </div>
    );
  }
}