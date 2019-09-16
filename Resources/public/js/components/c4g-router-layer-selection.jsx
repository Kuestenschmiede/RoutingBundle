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

export class RouterLayerSelection extends Component {

  constructor(props) {
    super(props);

    this.setLayer = this.setLayer.bind(this);
  }

  setLayer(event) {
    let layer = event.target.value;
    if (this.props.router.state.mode === "route") {
      this.props.router.setState({
        layerRoute: parseInt(layer, 10)
      }, this.props.router.recalculateRoute);
    } else {
      this.props.router.setState({
        layerArea: parseInt(layer, 10)
      }, this.props.router.performArea());
    }

  }

  render() {
    let defaultLayer = 0;
    if (this.props.router.state.mode === "route") {
      defaultLayer = this.props.router.state.layerRoute;
    } else if (this.props.router.state.mode === "route") {
      defaultLayer = this.props.router.state.layerArea;
    }
    return (
      <select className="c4g-router-layer-selection" onSelect={this.setLayer} defaultValue={defaultLayer}>
        {Object.keys(this.props.layers).map((id) => {
          let layer = Object.keys(this.props.layers[id])[0];

          return <option key={id} value={id}>{layer}</option>
        })}
      </select>
    );
  }
}