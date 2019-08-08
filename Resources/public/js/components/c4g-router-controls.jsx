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

export class RouterControls extends HorizontalPanel {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RouterAddressInput router={this.props.router} withPosition={false} switchTargets={false}
                          objFunctions={this.props.objFunctions} objSettings={this.props.objSettings} containerAddresses={this.props.containerAddresses}/>
    );
  }

}