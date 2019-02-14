<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');

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

$strName = 'tl_c4g_routing_configuration';
$callbackClass = \con4gis\RoutingBundle\Classes\Callbacks\TlC4gRoutingConfiguration::class;
/**
 * Table tl_c4g_routing_configuration
 */
$GLOBALS['TL_DCA'][$strName] = array
(
    
    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onsubmit_callback'             => array(
            array('\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache')
        )
    ),
    
    // List
    'list' => array
    (
        'sorting' => array
        (
            'mode'                    => 1,
            'fields'                  => array('name'),
            'flag'                    => 1
        ),
        'label' => array
        (
            'fields'                  => array('name'),
            'format'                  => '%s'
        ),
        'global_operations' => array
        (
            'all' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            )
        ),
        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),
    
    // Palettes
    'palettes' => array
    (
        '__selector__'                => array('router_api_selection'),
        'default'                     => '{general_legend},name,router_api_selection,router_viaroute_url,router_from_locstyle,router_to_locstyle,router_point_locstyle;'
                                        .'{extended_legend:hide},routerHeadline,router_attribution,router_interim_locstyle,openRouter,router_alternative,enableOverPoints,enableTargetSwitch,routeStartButton,closeAfterSearch,showInstructions,instructionLabel;'
                                        .'{search_legend:hide},showFeatures,featureLabel,initialMode,routerLayers,hideFeaturesWithoutLabel,minDetourArea,maxDetourArea,initialDetourArea,minDetourRoute,maxDetourRoute,initialDetourRoute,clickLocstyle,areaCenterLocstyle,priorityFeatures,priorityLocstyle,usePermalink;'
    ),
    
    
    // Subpalettes
    'subpalettes' => array
    (
        'router_api_selection_1' => 'customProfiles',
        'router_api_selection_2' => 'router_api_key,router_profiles',
        'router_api_selection_3' => 'router_api_key,router_profiles',
        'router_api_selection_4' => 'router_api_key'
    ),
    
    // Fields
    'fields' => array
    (
        'name' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['name'],
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
    
        'tstamp' => [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],
        
        'router_viaroute_url' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_viaroute_url'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
    
        'router_attribution' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_attribution'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>255, 'tl_class'=>'long', 'allowHtml' => true],
        ],
        'router_api_selection' => [
            'label'                   => $GLOBALS['TL_LANG'][$strName]['router_api_selection'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'default'                 => '2',
            'options'                 => ['0','1','2','3','4'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_api_selection'],
            'eval'                    => ['tl_class'=>'clr long','submitOnChange' => true],
        ],
        'router_alternative'=> [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_alternative'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
        ],
        'router_api_key' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_api_key'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
        'router_from_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_from_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
//            'wizard'                  => [[$strName, 'editLocationStyle']],
        ],
        'router_to_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_to_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
//            'wizard'                  => [[$strName, 'editLocationStyle']],
        ],
        'router_point_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_point_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true, 'mandatory' => true],
//            'wizard'                  => [[$strName, 'editLocationStyle']],
        ],
        'router_interim_locstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_interim_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'w50','chosen' => true, 'includeBlankOption'=>true],
//            'wizard'                  => [[$strName, 'editLocationStyle']],
        ],
        'router_profiles' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['router_profiles'],
            'exclude'                 => true,
            'default'                 => 'a:0:{}',
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass, 'getRouterProfiles'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_profiles'],
            'eval'                    => ['mandatory'=>false, 'multiple'=>true,'chosen'=>true, 'tl_class' => 'clr m12'],
        ],
        'minDetourArea' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['minDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        ],
        'maxDetourArea' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['maxDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '20',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        ],
        'initialDetourArea' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialDetourArea'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '10',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
        ],
        'routerLayers' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routerLayers'],
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$callbackClass,'getRouterLayer']
            ],
        ],
        'customProfiles' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['customProfiles'],
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnsCallback'     => [$callbackClass,'getCustomProfileStructure']
            ],
        ],
        'hideFeaturesWithoutLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['hideFeaturesWithoutLabel'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'minDetourRoute' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['minDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        ],
        'maxDetourRoute' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['maxDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        ],
        'initialDetourRoute' => [
        
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialDetourRoute'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '2.5',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        ],
        'clickLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['clickLocstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        ],
        'openRouter' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['openRouter'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'areaCenterLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['areaCenterLocstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        ],
        'enableOverPoints' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['enableOverPoints'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'enableTargetSwitch' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['enableTargetSwitch'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'routerHeadline' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routerHeadline'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'Router',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'priorityFeatures' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['priorityFeatures'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit'],
        ],
        'priorityLocstyle' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['priorityLocstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => [$callbackClass,'getLocStyles'],
            'eval'                    => ['tl_class'=>'clr', 'chosen' => true, 'includeBlankOption'=>true],
        ],
        'closeAfterSearch' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['closeAfterSearch'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'routeStartButton' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['routeStartButton'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'showFeatures' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['showFeatures'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ],
        'featureLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['featureLabel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'In der Nähe',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'showInstructions' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['showInstructions'],
            'exclude'                 => true,
            'default'                 => true,
            'inputType'               => 'checkbox',
        ],
        'instructionLabel' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['instructionLabel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'default'                 => 'Routenhinweise',
            'eval'                    => [ 'tl_class'=>'clr', "maxlength" => 100],
        ],
        'initialMode' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['initialMode'],
            'exclude'                 => true,
            'default'                 => "route",
            'inputType'               => "select",
            'options'                 => ['area', 'route'],
            'reference'               => &$GLOBALS['TL_LANG'][$strName]['references_router_modes'],
        ],
        'usePermalink' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['usePermalink'],
            'exclude'                 => true,
            'default'                 => false,
            'inputType'               => 'checkbox',
        ]
    )
);
