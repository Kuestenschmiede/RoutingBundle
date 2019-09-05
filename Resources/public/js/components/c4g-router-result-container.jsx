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

export class RouterResultContainer extends HorizontalPanel {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.className + (this.state.open ? " c4g-open" : " c4g-close")}>
        <RouterInstructionsContainer className={"c4g-route-instructions-wrapper"} routerInstructions={this.props.routerInstructions} open={this.state.open}/>
        <RouterFeatureList className={"c4g-route-feature-wrapper"}/>
      </div>
    );
  }

  componentDidUpdate() {
    let className = this.props.className + (this.state.open ? " c4g-open" : " c4g-close");
    let container = document.getElementsByClassName(className)[0];
    const scope = this;
    jQuery(scope.state.control.element).css("bottom", container.offsetHeight + "px");
  }

  open() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  slideInCollidingElements() {
    // override parent method
  }

  slideOutCollidingElements() {
    // override parent method
  }
}