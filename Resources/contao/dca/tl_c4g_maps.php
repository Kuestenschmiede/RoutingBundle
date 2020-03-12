<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

$GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'] = $GLOBALS['TL_DCA']['tl_c4g_maps']['subpalettes']['enablePopup'].',routing_to';

$GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['table'] = str_replace('tab_filter_alias,', 'tab_filter_alias,routing_to,', $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes']['table']);

$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['routing_to'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'],
    'exclude'                 => true,
    'default'                 => '',
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default ''"
];