<?php
/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */
foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $id => $pallete) {
    $newPallete = str_replace('popup_info,', 'popup_extend,routing_to,', $pallete);
    $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$id] = $newPallete;
}
$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['routing_to'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'],
    'exclude'                 => true,
    'default'                 => '',
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default ''"
];