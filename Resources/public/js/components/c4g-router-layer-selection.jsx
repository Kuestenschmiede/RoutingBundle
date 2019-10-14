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
    this.setLayerValue = this.setLayerValue.bind(this);
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
      }, this.props.router.performArea);
    }

  }

  setLayerValue(event) {
    let value = event.target.value;
    console.log(value);
    const scope = this;
    this.props.router.setState({
      layerValueRoute: value
    }, () => {
      console.log("MACH DU FICKER");
      scope.props.router.showFeatures(scope.props.router.state.featureList.features, scope.props.router.state.featureList.type, "router");
    });
  }

  render() {
    const scope = this;
    let defaultLayer = 0;
    if (this.props.router.state.mode === "route") {
      defaultLayer = this.props.router.state.layerRoute;
    } else if (this.props.router.state.mode === "route") {
      defaultLayer = this.props.router.state.layerArea;
    }
    const arrLayers = scope.props.router.props.mapController.proxy.layerController.arrLayers;
    let layerValueSelection = <div className={"c4g-router-layer-value-selection"}>
      {Object.keys(this.props.layers[defaultLayer]).map((name) => {
        return <button onMouseUp={this.setLayerValue} key={this.props.layers[defaultLayer][name].mapLabel} value={name}>{name}</button>
      })}
    </div>;
    return (
      <React.Fragment>
        <select className="c4g-router-layer-selection" onSelect={this.setLayer} defaultValue={defaultLayer}>
          {Object.keys(this.props.layers).map((id) => {
            let layer = arrLayers[id];

            return <option key={id} value={id}>{layer.name}</option>
          })}
        </select>
        {layerValueSelection}
      </React.Fragment>
    );
  }
}