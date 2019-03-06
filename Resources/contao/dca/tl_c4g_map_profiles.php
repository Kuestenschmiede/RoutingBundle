<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
$callbackClass = "con4gis\RoutingBundle\Classes\Callbacks\TlC4gRoutingConfiguration";

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['__selector__'][] = 'router';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] = str_replace('geosearch;','geosearch;{routing_legend:hide},router;', $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'routerConfig';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields'] = array_merge([
    'router' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'checkbox',
        'eval'                    => ['tl_class'=>'clr','submitOnChange' => true],
        'sql'                     => "char(1) NOT NULL default ''"
    ],

    'routerConfig' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerConfig'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getRouterConfigs'],
        'eval'                    => ['tl_class'=>'clr','chosen' => true, 'includeBlankOption'=>true],
        'sql'                     => "int(10) NOT NULL default '0'"
    ]

],$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']);
