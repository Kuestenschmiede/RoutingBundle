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

export class RouterInstruction extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className={"c4g-router-instruction"} key={this.props.id}>
        <div><img src={this.getInstructionIconValhalla(this.props.imgPath)} alt=""/></div>
        <div>{this.props.instrText}</div>
        <div>{this.props.instrDist}</div>
      </div>
    );
  }

  /**
   * Translates an integer number into the correct instruction icon (Graphhopper icons).
   * @param intType
   * @returns {string}
   */
  getInstructionIconValhalla(intType) {
    let image;
    switch (intType) {
      case 0:
        image = "default.png";
        break;
      case 1:
        image = "head.png";
        break;
      case 2:
        image = "head.png";
        break;
      case 3:
        image = "head.png";
        break;
      case 4:
        image = "target.png";
        break;
      case 5:
        image = "target.png";
        break;
      case 6:
        image = "target.png";
        break;
      case 7:
        image = "continue.png";
        break;
      case 8:
        image = "continue.png";
        break;
      case 9:
        image = "slight-right.png";
        break;
      case 10:
        image = "turn-right.png";
        break;
      case 11:
        image = "sharp-right.png";
        break;
      case 12:
        image = "u-turn.png";
        break;
      case 13:
        image = "u-turn.png";
        break;
      case 14:
        image = "sharp-left.png";
        break;
      case 15:
        image = "turn-left.png";
        break;
      case 16:
        image = "slight-left.png";
        break;
      case 17:
        image = "continue.png";
        break;
      case 18:
        image = "slight-right.png";
        break;
      case 19:
        image = "slight-left.png";
        break;
      case 20:
        image = "slight-right.png";
        break;
      case 21:
        image = "slight-left.png";
        break;
      case 22:
        image = "continue.png";
        break;
      case 23:
        image = "slight-right.png";
        break;
      case 24:
        image = "slight-left.png";
        break;
      case 25:
        image = "continue.png";
        break;
      case 26:
        image = "round-about.png";
        break;
      case 27:
        image = "round-about.png";
        break;
      default:
        image = "default.png";
        break;

    }
    // return document.getElementsByTagName('base')[0].href + "bundles/con4gismaps/vendor/osrm/images/" + image;
    return "bundles/con4gismaps/vendor/osrm/images/" + image;
  }

}