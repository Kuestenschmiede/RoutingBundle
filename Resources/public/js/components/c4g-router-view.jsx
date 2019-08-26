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
import {RouterControls} from "./c4g-router-controls.jsx";
import {RouterResultContainer} from "./c4g-router-result-container.jsx";

/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */
export class RouterView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      router: props.router
    };
  }

  render() {
    return (
      <React.Fragment>
        <RouterControls router={this.props.router} open={this.props.open} className={this.props.className}
          objSettings={this.props.objSettings} objFunctions={this.props.objFunctions}
          containerAddresses={this.props.containerAddresses} mapController={this.props.mapController}
        />
        <RouterResultContainer open={false} direction={"bottom"} className={"c4g-router-result-container"} mapController={this.props.mapController}
          routerInstructions={this.props.routerInstructions}/>
      </React.Fragment>
    );
  }

}