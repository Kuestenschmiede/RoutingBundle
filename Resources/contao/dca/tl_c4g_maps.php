<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	  con4gis contributors (see "authors.txt")
  * @license 	  LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */
foreach ($GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'] as $id => $pallete) {
    $newPallete = str_replace('popup_info,', 'popup_info,routing_to,', $pallete);
    $GLOBALS['TL_DCA']['tl_c4g_maps']['palettes'][$id] = $newPallete;
}
$GLOBALS['TL_DCA']['tl_c4g_maps']['fields']['routing_to'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_maps']['routing_to'],
    'exclude'                 => true,
    'default'                 => '',
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default ''"
];