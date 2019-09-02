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
import {toHumanDistance, toHumanTime} from "./../c4g-router-time-conversions";

export class RouterInstructionsContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.routerInstructions);
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

    let routerHeader = (
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
          {instructions.map((item, index) => {
            return <RouterInstruction imgPath={item.type} instrText={item.instruction} instrDist={item.length} id={index}/>
          })}
        </div>
      );
    }
  }
}