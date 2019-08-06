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

export class RouterAddressField extends Component {

  constructor(props) {
    super(props);
    /*
      Required props:
      name
      label
      class
     */
    // TODO Die click action und handler für button und input field bauen
  }


  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input type="search" className={this.props.class} name={this.props.name} id={this.props.name} autoComplete="off"/>
        <button className="c4g-router-position"></button>
      </div>
    );
  }
}