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

  render() {
    console.log(this.props.routerInstructions);
    let chosenRoute = 0;
    let instructions = [];
    if (this.props.routerInstructions && this.props.routerInstructions[chosenRoute]) {
      instructions = this.props.routerInstructions[chosenRoute];
    }
    console.log("instruction container render");

    // TODO hier muss noch eine ID zu, die dann für die hover-Action interessant wird, weil dann immer
    // TODO die jeweilige instruction auf der route markiert werden muss

    return (
      <div className={this.props.className}>

        {instructions.map((item) => {
          return <RouterInstruction imgPath={item.imgPath} instrText={item.instrText} instrDist={item.instrDist}/>
        })}
      </div>
    );
  }
}