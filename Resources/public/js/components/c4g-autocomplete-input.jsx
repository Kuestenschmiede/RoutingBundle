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
import {AutocompleteHandler} from "./../../../../../CoreBundle/Resources/public/js/AutocompleteHandler";

export class AutocompleteInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let input = document.createElement('input');
    let handler = new AutocompleteHandler(
      jQuery(input),
      this.props.objFunctions,
      this.props.cssId,
      this.props.objSettings,
      this.props.containerAddresses
    );
    handler.handleInput();
    jQuery(input).autocomplete({source: this.props.containerAddresses.arrNames});
    return input;
  }
}