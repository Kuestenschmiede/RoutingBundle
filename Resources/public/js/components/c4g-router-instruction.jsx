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
      <div className={"c4g-router-instruction"}>
        <img src={this.props.imgPath} alt=""/>
        <span>{this.props.instrText}</span>
        <span>{this.props.instrDist}</span>
      </div>
    );
  }

}