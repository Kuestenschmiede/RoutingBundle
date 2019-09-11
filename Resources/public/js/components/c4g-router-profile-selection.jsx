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
      profiles: this.props.profiles || [],
      currentProfile: 0 // default car
    };
    this.setProfile = this.setProfile.bind(this);
  }

  setProfile(profile) {
    this.setState({currentProfile: parseInt(profile.id, 10)});
  }

  render() {
    return (
      <div className="c4g-router-profile-wrapper">
        {this.state.profiles.map((item) => {
          return <button onMouseUp={() => this.setProfile(item)}
                         className={parseInt(item.id, 10) === this.state.currentProfile ? "c4g-active" : "c4g-inactive"}
                  key={item.id}>{item.text}</button>
        })}
      </div>
    );
  }
}