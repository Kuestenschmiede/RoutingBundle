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
import {RouterInstructionsContainer} from "./c4g-router-instructions-container.jsx";
import {RouterFeatureList} from "./c4g-router-feature-list.jsx";
import {toHumanDistance, toHumanTime} from "../c4g-router-time-conversions";

export class RouterResultContainer extends HorizontalPanel {

  constructor(props) {
    super(props);
    this.state.mode = "instr";
    this.setResultInstr = this.setResultInstr.bind(this);
    this.setResultFeat = this.setResultFeat.bind(this)
  }

  setResultInstr(event) {
    event.stopPropagation();
    this.setState({mode: "instr"});
  }
  setResultFeat(event) {
    event.stopPropagation();
    this.setState({mode: "feat"});
  }
  render() {
    let result = "";
    if (this.state.mode === "instr" && this.state.open) {
        result = <RouterInstructionsContainer className={"c4g-route-instructions-wrapper"} routerInstructions={this.props.routerInstructions} routerWaySource={this.props.routerWaySource} routerHintSource={this.props.routerHintSource} open={this.state.open}/>
    }
    else if (this.state.mode === "feat" && this.state.open) {
        result = <RouterFeatureList className={"c4g-route-feature-wrapper"} featureList={this.props.featureList} mapController={this.props.mapController} featureSource={this.props.featureSource}/>
    }
      let instructions = [];
      let time = "";
      let distance = "";
      let profile = "";
      if (this.props.routerInstructions && this.props.routerInstructions.instructions) {
          instructions = this.props.routerInstructions.instructions;
          time = toHumanTime(this.props.routerInstructions.time);
          distance = toHumanDistance(this.props.routerInstructions.distance);
          profile = this.props.routerInstructions.instructions[0].travel_type;
      }

      let routerHeader = "";
      if (time && distance && profile) {
          routerHeader = (
              <div className="c4g-router-instructions-header">
                  <div className="c4g-router-route-profile">
                      <label>Profil:</label>
                      <em>{profile}</em>
                  </div>
                  <div className="c4g-router-route-time">
                      <label>Dauer:</label>
                      <em>{time}</em>
                  </div>
                  <div className="c4g-router-route-distance">
                      <label>Distanz:</label>
                      <em>{distance}</em>
                  </div>
              </div>
          );
      }
      let resultSwitcher = "";
      if ((instructions.length > 0 || this.props.featureList.features.length > 0) && this.state.open) {
          resultSwitcher = (
              <div className="c4g-router-mode-switch">
                  <button id="c4g-router-button-route" onMouseUp={this.setResultInstr}>Instructions</button>
                  <button id="c4g-router-button-area" onMouseUp={this.setResultFeat}>Features</button>
              </div>
          )
      }
    return (
      <div className={this.props.className + (this.state.open ? " c4g-open" : " c4g-close")}>
          {routerHeader}
          {resultSwitcher}
          {result}
      </div>
    );
  }

  componentDidUpdate() {
    let className = this.props.className + (this.state.open ? " c4g-open" : " c4g-close");
    let bottomValue = 0;
    let container = document.getElementsByClassName(className)[0];
    if (container) {
      bottomValue = container.offsetHeight;
    }
    const scope = this;
    jQuery(scope.state.control.element).css("bottom", container.offsetHeight + "px");
    // window.setTimeout(function() {
    //   jQuery(scope.state.control.element).css("bottom", container.offsetHeight + "px");
    // }, 100);
  }

  open() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  slideInCollidingElements() {
    // this.slideOutCollidingElements();
  }

  slideOutCollidingElements() {


  }
}