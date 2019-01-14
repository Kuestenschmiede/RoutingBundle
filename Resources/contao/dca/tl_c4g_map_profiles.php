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
$callbackClass = "con4gis\RoutingBundle\Classes\Callbacks\TlC4gMapProfiles";
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['config']['onload_callback'][] = [$callbackClass,'updateDCA'];

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['__selector__'][] = 'router';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] = str_replace('geosearch;','geosearch;{routing_legend:hide},router;', $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'router_api_selection,router_viaroute_url,routerHeadline,router_attribution,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,openRouter,router_alternative,enableOverPoints,enableTargetSwitch,routeStartButton,closeAfterSearch,showInstructions,instructionLabel,showFeatures,featureLabel,initialMode,routerLayers,hideFeaturesWithoutLabel,minDetourArea,maxDetourArea,initialDetourArea,minDetourRoute,maxDetourRoute,initialDetourRoute,clickLocstyle,areaCenterLocstyle,priorityFeatures,priorityLocstyle,usePermalink';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields'] = array_merge([
    'router' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'checkbox',
        'eval'                    => ['tl_class'=>'clr','submitOnChange' => true],
        'sql'                     => "char(1) NOT NULL default ''"
    ],

    'router_viaroute_url' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url'],
        'exclude'                 => true,
        'inputType'               => 'text',
        'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        'sql'                     => "varchar(255) NOT NULL default ''"
    ],

    'router_attribution' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_attribution'],
        'filter'                  => false,
        'inputType'               => 'text',
        'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
        'sql'                     => "varchar(255) NOT NULL default ''"
    ],
    'router_api_selection' => [
        'label'                   => $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_selection'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'default'                 => '2',
        'options'                 => ['0','1','2','3'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_api_selection'],
        'eval'                    => ['tl_class'=>'clr long','submitOnChange' => true],
        'sql'                     => "char(1) NOT NULL default '2'"
    ],
    'router_alternative'=> [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_alternative'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'checkbox',
        'eval'                    => ['submitOnChange' => true],
        'sql'                     => "char(1) NOT NULL default ''"
    ],
    'router_api_key' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_api_key'],
        'exclude'                 => true,
        'inputType'               => 'text',
        'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        'sql'                     => "varchar(255) NOT NULL default ''"
    ],
    'router_from_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_from_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
        'wizard'                  => [['tl_c4g_map_profiles', 'editLocationStyle']],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_to_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
        'wizard'                  => [['tl_c4g_map_profiles', 'editLocationStyle']],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_point_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
        'wizard'                  => [['tl_c4g_map_profiles', 'editLocationStyle']],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_interim_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
        'wizard'                  => [['tl_c4g_map_profiles', 'editLocationStyle']],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_profiles' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles'],
        'exclude'                 => true,
        'default'                 => ['0','2','8'],
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass, 'getRouterProfiles'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles'],
        'eval'                    => ['mandatory'=>false, 'multiple'=>true,'chosen'=>true, 'tl_class' => 'clr m12'],
        'sql'                     => "blob NULL"
    ],
    'minDetourArea' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '0.5',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        'sql'                     => "float(5, 2) NOT NULL default '0.5'"
    ],
    'maxDetourArea' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '20',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        'sql'                     => "float(5, 2) NOT NULL default '20'"
    ],
    'initialDetourArea' => [

        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourArea'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '10',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        'sql'                     => "float(5, 2) NOT NULL default '10'"
    ],
    'routerLayers' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'],
        'exclude'                 => true,
        'inputType'               => 'multiColumnWizard',
        'eval'                    => [
            'columnsCallback'     => [$callbackClass,'getRouterLayer']
        ],
        'sql'                     => 'blob NULL'
    ],
    'hideFeaturesWithoutLabel' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['hideFeaturesWithoutLabel'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'minDetourRoute' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '0.5',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        'sql'                     => "float(5,2) NOT NULL default '0.5'"
    ],
    'maxDetourRoute' => [

        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '5',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        'sql'                     => "float(5,2) NOT NULL default '5'"
    ],
    'initialDetourRoute' => [

        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialDetourRoute'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '2.5',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        'sql'                     => "float(5,2) NOT NULL default '2.5'"
    ],
    'clickLocstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'openRouter' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'],
        'exclude'                 => true,
        'default'                 => false,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'areaCenterLocstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'enableOverPoints' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '1'"
    ],
    'enableTargetSwitch' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '1'"
    ],
    'routerHeadline' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerHeadline'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '',
        'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        'sql'                     => "varchar(100) NOT NULL default ''"
    ],
    'priorityFeatures' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityFeatures'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '0',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit'],
        'sql'                     => "int(10) NOT NULL default '0'"
    ],
    'priorityLocstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['priorityLocstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'closeAfterSearch' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'routeStartButton' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routeStartButton'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'showFeatures' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showFeatures'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'featureLabel' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['featureLabel'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => 'In der Nähe',
        'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        'sql'                     => "varchar(100) NOT NULL default ''"
    ],
    'showInstructions' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'instructionLabel' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['instructionLabel'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => 'Routenhinweise',
        'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        'sql'                     => "varchar(100) NOT NULL default ''"
    ],
    'initialMode' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'],
        'exclude'                 => true,
        'default'                 => "area",
        'inputType'               => "select",
        'options'                 => ['area', 'route'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes'],
        'sql'                     => "varchar(10) NOT NULL default 'area'"
    ],
    'usePermalink' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['usePermalink'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ]

],$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']);
