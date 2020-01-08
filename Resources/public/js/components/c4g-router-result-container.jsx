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
import {RouterInstructionsContainer} from "./c4g-router-instructions-container.jsx";
import {RouterFeatureList} from "./c4g-router-feature-list.jsx";
import {toHumanDistance, toHumanTime} from "../c4g-router-time-conversions";
import {Titlebar} from "./../../../../../MapsBundle/Resources/public/js/components/c4g-titlebar.jsx";

export class RouterResultContainer extends Component {

  constructor(props) {
    super(props);
    this.setResultInstr = this.setResultInstr.bind(this);
    this.setResultFeat = this.setResultFeat.bind(this);
    this.clickControl = this.clickControl.bind(this);
    this.state = {
      mode: "instr"
    };
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
    if (this.props.detailOpen) {
      if ((this.state.mode === "instr" && this.props.routerInstructions && this.props.mode === "route")) {
        result = <RouterInstructionsContainer className={"c4g-route-instructions-wrapper"} mapController={this.props.mapController} routerInstructions={this.props.routerInstructions} routerWaySource={this.props.routerWaySource} routerHintSource={this.props.routerHintSource} open={this.props.open}/>
      } else if (((this.state.mode === "feat" || this.props.mode === "area") || (!this.props.routerInstructions && this.props.featureList))) {
        result = <RouterFeatureList className={"c4g-route-feature-wrapper"} activeId={this.props.activeId} setActiveId={this.props.setActiveId}
                                    routeMode={this.props.mode} layerRoute={this.props.layerRoute} layerArea={this.props.layerArea}
                                    featureList={this.props.featureList} mapController={this.props.mapController} featureSource={this.props.featureSource}
                                    layerValueRoute={this.props.layerValueRoute} layerValueArea={this.props.layerValueArea}
        />
      }
    }
    let instructions = [];
    let time = "";
    let distance = "";
    let profile = "";
    let detour = "";
    let featureCount = "";
    if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
      instructions = this.props.routerInstructions.instructions;
      time = toHumanTime(this.props.routerInstructions.time);
      distance = toHumanDistance(this.props.routerInstructions.distance);
      profile = this.props.routerInstructions.instructions[0].travel_type;
    } else if (this.props.featureList && this.props.mode === "area") {
      profile = this.props.profile;
      detour = this.props.detour;
      featureCount = this.props.featureList.features.length;
    }

    let routerHeader = "";
    let routerHeaderContent = "";
    if ((time && distance && profile) && this.props.mode === "route") {
      routerHeaderContent = (
        <div className="c4g-router-instructions-header">
          <div className="c4g-router-route-profile">
            <label>{this.props.lang.ROUTER_VIEW_LABEL_PROFILE}</label>
            <em>{profile}</em>
          </div>
          <div className="c4g-router-route-time">
            <label>{this.props.lang.ROUTER_VIEW_LABEL_TIME}</label>
            <em>{time}</em>
          </div>
          <div className="c4g-router-route-distance">
            <label>{this.props.lang.ROUTER_VIEW_LABEL_DISTANCE}</label>
            <em>{distance}</em>
          </div>
        </div>
      );
    } else if ((detour && featureCount && profile) && this.props.mode === "area") {
      routerHeaderContent = (
        <div className="c4g-router-instructions-header">
          <div className="c4g-router-area-profile">
            <label>{this.props.lang.AREA_PROFILE}:</label>
            <em>{profile}</em>
          </div>
          <div className="c4g-router-area-detour">
            <label>{this.props.lang.AREA_DETOUR}:</label>
            <em>{detour} km</em>
          </div>
          <div className="c4g-router-area-featurecount">
            <label>{this.props.lang.AREA_FEATURECOUNT}:</label>
            <em>{featureCount}</em>
          </div>
        </div>
      );
    }

    if (routerHeaderContent) {
      let detailBtnClass = "c4g-beach-options";
      let detailBtnCb = this.props.toggleDetailOpen;
      let closeBtnClass = "c4g-titlebar-close";
      let closeBtnCb = () => this.props.setOpen(false);
      routerHeader = (<Titlebar wrapperClass={"c4g-router-results-header c4g-beach-header"} header={this.props.headline} headerClass={"c4g-router-results-headline c4g-beach-header-headline"}
                                detailBtnClass={detailBtnClass} detailBtnCb={detailBtnCb} closeBtnClass={closeBtnClass} closeBtnCb={closeBtnCb}>
        {routerHeaderContent}
      </Titlebar>);
    }

    let resultSwitcher = "";
    if ((instructions.length > 0 || this.props.featureList.features.length > 0) && this.props.detailOpen && this.props.mode === "route") {
        resultSwitcher = (
            <div className="c4g-router-mode-switch">
                <button id="c4g-router-button-route" onMouseUp={this.setResultInstr}>Instructions</button>
                <button id="c4g-router-button-area" onMouseUp={this.setResultFeat}>Features</button>
            </div>
        );
    }
    return (
      <div className={this.props.className + (this.props.open ? " c4g-open" : " c4g-close")
      + (this.props.detailOpen && this.props.open ? " c4g-details-open" : "")}>
          {routerHeader}
          {resultSwitcher}
          {result}
      </div>
    );
  }

  componentDidUpdate() {
    let className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
    let container = document.getElementsByClassName(className)[0];
    let controlContainer = document.querySelector(".c4g-router-panel.c4g-open");
    if (controlContainer) {
      controlContainer = controlContainer[0];
    }
    let mapContainer = document.querySelector(".c4g_map")[0];
    const scope = this;
    if (container) {
      if (controlContainer) {
        if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
          container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
        }
      }
    }

    if (this.props.mode === "area" && this.state.mode !== "feat") {
      this.setState({mode: "feat"});
    }
  }

  open() {
    this.props.setOpen(true);
  }

  close() {
    this.props.setOpen(false);
  }

  clickControl() {
    if (this.props.open) {
        this.close();
    } else {
        this.open();
    }
  }

  slideInCollidingElements() {
    // override parent method
  }

  slideOutCollidingElements() {
    // override parent method
  }
}