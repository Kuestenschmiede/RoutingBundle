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
    };

  }


  render() {
    let input = null;
    const scope = this;

    let overForm = "";
    if (this.props.detailsEnabled) {
      overForm = Object.keys(this.props.overSettings.overPoints).map((item) => {
          return <RouterAddressField className={"c4g-router-input-over-" + item} name={"overPoint-" + item} label="Zwischenziel"
                                     cssId={"routingOver-" + item} objFunctions={this.props.overSettings.objFunctions} objSettings={this.props.objSettings}
                                     containerAddresses={this.props.containerAddresses} value={this.props.overSettings.overAddresses[item]}
                                     router={this.props.router} key={item} index={item}/>
        });
    }

    if (this.props.mode === "route") {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="routingFrom" label="Start"
                            cssId="routingFrom" objFunctions={this.props.objFunctions.fromFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.fromAddress} router={this.props.router}/>
        {overForm}
        <RouterAddressField className="c4g-router-input-to" name="routingTo" label="Ziel"
                            cssId="routingTo" objFunctions={this.props.objFunctions.toFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.toAddress} router={this.props.router}/>
      </React.Fragment>;
    } else {
      input = <React.Fragment>
        <RouterAddressField className="c4g-router-input-from" name="areaFrom" label="Zentrum"
                            cssId="areaFrom" objFunctions={this.props.objFunctions} objSettings={this.props.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.areaAddress} router={this.props.router}/>
      </React.Fragment>;
    }

    let details = "";
    if (this.props.detailsEnabled && this.props.mode === "route") {
      details = <div className="buttonbar">
        <button className="c4g-router-over" onMouseUp={this.props.overSettings.overFunction}></button>
        <button className="c4g-router-switch" onMouseUp={this.props.overSettings.switchFunction}></button>
        <RouterProfileSelection profiles={this.props.profiles} router={this.props.router} currentProfile={this.props.currentProfile}/>
      </div>;
    }

    return (
      <div className={this.props.className}>
        {input}
        <button onMouseUp={this.props.toggleDetails}>Mehr Optionen</button>
        {details}
      </div>
    );
  }
}