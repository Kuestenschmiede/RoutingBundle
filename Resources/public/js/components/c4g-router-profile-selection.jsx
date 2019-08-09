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

export class RouterProfileSelection extends Component {

  constructor(props) {
    super(props);

    this.state = {
      profiles: this.props.profiles || []
    };
  }

  render() {
    return (
      <div className="c4g-router-profile-wrapper">
        {this.state.profiles.map(item => (
          <button key={item.id}>{item.text}</button>
        ))}

      </div>
    );
  }
}