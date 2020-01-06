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
import { RouterLayerSelection } from "./c4g-router-layer-selection.jsx";
import { RouterDetourSlider } from "./c4g-router-detour-slider.jsx";

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
    if (this.props.detailsEnabled && this.props.mode === "route") {
      overForm = Object.keys(this.props.overSettings.overPoints).map((item) => {
          return <RouterAddressField className={"c4g-router-input-over-" + item} name={"overPoint-" + item} label="Zwischenziel"
                                     cssId={"routingOver-" + item} objFunctions={this.props.overSettings.objFunctions} objSettings={this.props.objSettings}
                                     containerAddresses={this.props.containerAddresses} value={this.props.overSettings.overAddresses[item]}
                                     router={this.props.router} key={item} index={item} clearInput={() => {this.props.overSettings.objFunctions[item].deleteFunction();}}/>
        });
    }

    let fromClsAddition = "";
    let toClsAddition = "";
    let areaClsAddition = "";
    if (this.props.mode === "route") {
      areaClsAddition = " invisible";
      // input = <React.Fragment>
      //   <RouterAddressField className="c4g-router-input-from" name="routingFrom" label="Start"
      //                       cssId="routingFrom" objFunctions={this.props.objFunctions.fromFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.from}
      //                       containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.fromAddress} router={this.props.router}/>
      //   {overForm}
      //   <RouterAddressField className="c4g-router-input-to" name="routingTo" label="Ziel"
      //                       cssId="routingTo" objFunctions={this.props.objFunctions.toFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.to}
      //                       containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.toAddress} router={this.props.router}/>
      // </React.Fragment>;
    } else {
      fromClsAddition = " invisible";
      toClsAddition = " invisible";
      // input = <React.Fragment>
      //   <RouterAddressField className="c4g-router-input-area" name="areaFrom" label="Zentrum"
      //                       cssId="areaInput" objFunctions={this.props.objFunctions.areaFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.area}
      //                       containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.areaAddress} router={this.props.router}/>
      // </React.Fragment>;
    }

    input = <React.Fragment>
      <RouterAddressField className={"c4g-router-input-from" + fromClsAddition} name="routingFrom" label="Start"
                          cssId="routingFrom" objFunctions={this.props.objFunctions.fromFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.from}
                          containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.fromAddress} router={this.props.router}/>
      {overForm}
      <RouterAddressField className={"c4g-router-input-to" + toClsAddition} name="routingTo" label="Ziel"
                          cssId="routingTo" objFunctions={this.props.objFunctions.toFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.to}
                          containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.toAddress} router={this.props.router}/>
      <RouterAddressField className={"c4g-router-input-area" + areaClsAddition} name="areaFrom" label="Zentrum"
                          cssId="areaInput" objFunctions={this.props.objFunctions.areaFunctions} objSettings={this.props.objSettings} clearInput={this.props.resetFunctions.area}
                          containerAddresses={this.props.containerAddresses} withPosition={this.props.withPosition} value={this.props.areaAddress} router={this.props.router}/>
    </React.Fragment>;

    const swapFunction = function() {
      scope.props.overSettings.swapFunction();
      const tmpFrom = jQuery("#routingFrom").val();
      jQuery("#routingFrom").val(jQuery("#routingTo").val());
      jQuery("#routingTo").val(tmpFrom);
    };

    let details = "";
    let swapButton = "";
    if (this.props.switchTargets) {
      swapButton = <button className="c4g-router-switch" onMouseUp={swapFunction}></button>;
    }
    let overButton = "";
    if (this.props.enableOverPoints) {
      overButton = <button className="c4g-router-over" onMouseUp={this.props.overSettings.overFunction}></button>;
    }
    let featureSearchControls = "";
    if (this.props.router.props.mapController.data.showFeatures) {
      featureSearchControls = <React.Fragment>
        <RouterProfileSelection profiles={this.props.profiles} router={this.props.router} currentProfile={this.props.currentProfile}/>
        <RouterLayerSelection layers={this.props.layers} router={this.props.router}/>
        <RouterDetourSlider min={this.props.sliderOptions.min} max={this.props.sliderOptions.max} value={this.props.sliderOptions.value} router={this.props.sliderOptions.router}/>
      </React.Fragment>
    }
    if (this.props.detailsEnabled && this.props.mode === "route") {
      details = <div className="buttonbar">
        {overButton}
        {swapButton}
        {featureSearchControls}
      </div>;
    } else if (this.props.detailsEnabled && this.props.mode === "area") {
      details = <div className="buttonbar">
        {featureSearchControls}
      </div>;
    }

    // let detailButton = "";
    // if (!(overButton === "" && swapButton === "" && featureSearchControls === "")) {
    //   detailButton = <button className={"c4g-router-extended-options"} onMouseUp={this.props.toggleDetails}></button>;
    // }

    return (
      <div className={this.props.className}>
        {input}
        {/*{detailButton}*/}
        {details}
      </div>
    );
  }
}