/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    ¯\_(ツ)_/¯
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import * as popupFunctionsDE from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de";
import * as popupFunctionsEN from "./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-en";


export class RouterFeatureListItem extends Component {

    constructor(props) {
        super(props);
        this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;


    }

    render() {
        const scope = this;
        let currentFeature = null;
        this.props.featureSource.forEachFeature(function (feature) {
            if (feature.get('tid') === scope.props.feature.id) {
                currentFeature = feature;
            }
        });
        let featureEntryContent = "";
        if (currentFeature) {
            featureEntryContent = this.popupFunctions.fnStandardInfoPopup(currentFeature, currentFeature.getStyle());
            let element = {__html: featureEntryContent + "<br>"}
            return (
                <li dangerouslySetInnerHTML={element}/>
            );
        }
        return null;
    }
}