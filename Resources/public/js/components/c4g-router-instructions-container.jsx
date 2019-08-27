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
import {RouterInstruction} from "./c4g-router-instruction.jsx";

export class RouterInstructionsContainer extends Component {

  constructor(props) {
    super(props);

  }

  // TODO Wenn keine instructions vorhanden, gar nicht anzeigen
  // TODO wenn instructions da, aber nicht geöffnet: Routenname und gesamtlänge oder sowas
  // TODO wenn aufgeklappt, zeige zusätzlich alle instructions

  render() {
    console.log(this.props.routerInstructions);
    let instructions = [];
    let time = "";
    let distance = "";
    if (this.props.routerInstructions && this.props.routerInstructions.instructions) {
      instructions = this.props.routerInstructions.instructions;
      time = this.props.routerInstructions.time;
      distance = this.props.routerInstructions.distance;
    }

    let routerHeader = (
      <React.Fragment>
        <span className="c4g-router-route-time">Dauer: {time}</span>
        <span className="c4g-router-route-distance">Distanz: {distance}</span>
      </React.Fragment>
    );

    if (instructions.length === 0) {
      return ("");
    } else if (!this.props.open) {
      // instructions present, container closed
      return (
        <div className={this.props.className}>
          {routerHeader}
        </div>
      );
    } else {
      // instructions present, container open
      // TODO hier muss noch eine ID zu, die dann für die hover-Action interessant wird, weil dann immer
      // TODO die jeweilige instruction auf der route markiert werden muss
      return (
        <div className={this.props.className}>
          {routerHeader}
          {instructions.map((item) => {
            return <RouterInstruction imgPath={item.imgPath} instrText={item.instruction} instrDist={item.length}/>
          })}
        </div>
      );
    }
  }
}