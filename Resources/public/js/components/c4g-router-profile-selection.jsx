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

    this.setProfile = this.setProfile.bind(this);

    this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
  }

  setProfile(profile) {
    this.props.router.setProfile(parseInt(profile.id, 10));
  }

  render() {
    return (
      <div className="c4g-router-profile-wrapper">
        {this.props.profiles.map((item) => {
          return <button onMouseUp={() => this.setProfile(item)}
                         className={"c4g-router-profile-" + this.profileTranslation[item.id] + (parseInt(item.id, 10) === this.props.currentProfile ? " c4g-active" : " c4g-inactive")}
                  key={item.id}/>
        })}
      </div>
    );
  }
}