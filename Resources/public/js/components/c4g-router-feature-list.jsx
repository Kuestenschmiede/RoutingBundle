/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import {RouterFeatureListItem} from "./c4g-router-feature-list-item.jsx";

export class RouterFeatureList extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className={this.props.className}>
        <ul>
          {this.props.featureList.features.map((feature, index) => {
            return <RouterFeatureListItem feature={feature} routeMode={this.props.routeMode} mapController={this.props.mapController} layerRoute={this.props.layerRoute} layerArea={this.props.layerArea} featureSource={this.props.featureSource} key={index}/>
          })}
        </ul>
      </div>
    );
  }
}