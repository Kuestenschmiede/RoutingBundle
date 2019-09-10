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


    return (
      <div>
        <RouterAddressField className="c4g-router-input-from" name="routingFrom" label="Start"
                            cssId="routingFrom" objFunctions={this.props.objFunctions.fromFunctions} objSettings={this.props.settings.objSettings} popup={true}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.fromAddress} router={this.props.router}/>

        {Object.keys(this.props.settings.overPoints).map((item) => {
          return <RouterAddressField className={"c4g-router-input-over-" + item} name={"overPoint-" + item} label="Zwischenziel" popup={true}
                                     cssId="routingOver" objFunctions={this.props.settings.objFunctions} objSettings={this.props.settings.objSettings}
                                     containerAddresses={this.props.containerAddresses} value={this.props.settings.overAddresses[item]}
                                     router={this.props.settings.router} key={item} index={item}/>
        })}
        <RouterAddressField className="c4g-router-input-to" name="routingTo" label="Ziel" popup={true}
                            cssId="routingTo" objFunctions={this.props.objFunctions.toFunctions} objSettings={this.props.settings.objSettings}
                            containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.toAddress} router={this.props.router}/>
        {details}

      </div>
    );
  }
}