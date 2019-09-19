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
import {routingConstants} from "../routing-constants";
import {utils} from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils";

export class RouterDetourSlider extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    let control = jQuery("." + routingConstants.ROUTE_TOGGLE);
    let range = control.attr('max') - control.attr('min');
    let pos = ((control.val() - control.attr('min')) / range) * 100;
    let posOffset = Math.round(50 * pos / 100) - (25);
    let output = control.next('output');
    output
      .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
      .text(control.val() + " km");
    // TODO detour im view-state setten (darüber dann auch den permalink updaten)
    // scope.updateLinkFragments("detour", control.val());
  }

  handleChange() {
    if (this.props.router.state.mode === "route") {
      this.props.router.recalculateRoute();
    } else {
      this.props.router.performArea();
    }
  }

  render() {
    const scope = this;
    // let key = "toggleDetour" + utils.capitalizeFirstLetter(mode);
    // scope[key] = document.createElement('input');
    // scope[key].className = routingConstants.ROUTE_TOGGLE;
    // scope[key].setAttribute('type', 'range');
    // scope[key].setAttribute('min', min);
    // scope[key].setAttribute('max', max);
    // scope[key].setAttribute('value', initialValue);
    // scope[key].setAttribute('step', 0.5);
    //
    // let toggleDetourWrapper = document.createElement('div');
    // let output = document.createElement('output');
    // output.className = routingConstants.OUTPUT_DETOUR;
    // let p = document.createElement('p');
    // p.innerHTML = langRouteConstants.ROUTE_DETOUR;
    // output.innerHTML = 100;
    // toggleDetourWrapper.appendChild(p);
    // toggleDetourWrapper.appendChild(scope[key]);
    // toggleDetourWrapper.appendChild(output);
    // jQuery(scope[key]).on('input', function () {
    //   let control = jQuery(this);
    //   let range = control.attr('max') - control.attr('min');
    //   let pos = ((control.val() - control.attr('min')) / range) * 100;
    //   let posOffset = Math.round(50 * pos / 100) - (25);
    //   let output = control.next('output');
    //   output
    //     .css('left', 'calc(' + pos + '% - ' + posOffset + 'px)')
    //     .text(control.val() + " km");
    //   scope.updateLinkFragments("detour", control.val());
    // });
    // jQuery(scope[key]).on('change', function () {
    //   if (mode === "route") {
    //     scope.recalculateRoute();
    //   } else {
    //     scope.performArea(scope.areaValue);
    //   }
    // });
    // jQuery(scope[key]).trigger('input');


    return (
      <div>
        <p>Umweg</p>
        <input type="range" className={routingConstants.ROUTE_TOGGLE}
               min={this.props.min} max={this.props.max} defaultValue={this.props.value} step={0.5}/>
        <output className={routingConstants.OUTPUT_DETOUR}>100</output>
      </div>
    );
  }
}