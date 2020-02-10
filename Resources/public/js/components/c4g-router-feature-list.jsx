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
    this.setActiveId = this.setActiveId.bind(this);
  }

  setActiveId(activeId) {
      this.setState({"activeId": activeId})
  }

  render() {
    let sortedFeatures = this.sortFeatures();
    if (!sortedFeatures) {
      return (
          <div className={this.props.className}>
          </div>
      );
    }

    return (
      <div className={this.props.className}>
        {this.props.header}
        {this.props.switcher}
        <ul>
          {sortedFeatures.map((feature, index) => {
            return <RouterFeatureListItem feature={feature} type={this.props.featureList.type} active={this.props.activeId == feature.id}
                                          setActiveId={this.props.setActiveId} routeMode={this.props.routeMode} mapController={this.props.mapController}
                                          layerRoute={this.props.layerRoute} layerArea={this.props.layerArea} featureSource={this.props.featureSource}
                                          key={index} layerValueRoute={this.props.layerValueRoute} layerValueArea={this.props.layerValueArea}/>
          })}
        </ul>
      </div>
    );
  }

  sortFeatures() {
    const routerLayers = this.props.mapController.data.routerLayers;
    const currentLayer = this.props.routeMode === "area" ? this.props.layerArea : this.props.layerRoute;
    const currentLayerValue = this.props.routeMode === "area" ? this.props.layerValueArea : this.props.layerValueRoute;

    if (!routerLayers) {
      return;
    }

    const currentLabelProp = routerLayers[currentLayer][currentLayerValue]['mapLabel'];
    let features = [...this.props.featureList.features];
    return features.sort(function (a, b) {
      let aValues = a, bValues = b;
      if (a.tags && b.tags) {
        aValues = a.tags;
        bValues = b.tags;
      }
      if (isNaN(aValues[currentLabelProp])) {
        // string values
        return aValues[currentLabelProp] < bValues[currentLabelProp] ? -1 : 1;
      } else {
        // numeric values
        return aValues[currentLabelProp] - bValues[currentLabelProp];
      }
    });
  }
}