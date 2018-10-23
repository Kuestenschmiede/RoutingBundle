<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 22.10.18
 * Time: 11:19
 */
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'router_api_selection,router_viaroute_url,router_attribution,router_alternative,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,routerLayers,minDetourArea,maxDetourArea,minDetourRoute,maxDetourRoute';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['routerLayers'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'],
    'exclude'                 => true,
    'inputType'               => 'multiColumnWizard',
    'eval'                    => [
        'columnsCallback'        => ['tl_c4g_map_profiles_router','getRouterLayer']
    ],
    'sql'                     => 'blob NULL'
];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['minDetourArea'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '0',
    'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
    'sql'                     => "decimal(10) NOT NULL default '0'"
];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['maxDetourArea'] = [

    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '20',
    'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
    'sql'                     => "decimal(10) NOT NULL default '20'"
];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['minDetourRoute'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '0',
    'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
    'sql'                     => "decimal(10) NOT NULL default '0'"
];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['maxDetourRoute'] = [

    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '5',
    'eval'                    => array( 'tl_class'=>'w50', 'rgxp'=>'digit'),
    'sql'                     => "decimal(10) NOT NULL default '5'"
];
class tl_c4g_map_profiles_router extends Backend
{
    public function getRouterLayer($multiColumnWizard)
    {
        $arrColumnLayers = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['layers'],
            'inputType' => 'select'
        ];
        $arrLayers = $this->Database->prepare('SELECT * FROM tl_c4g_maps WHERE published=1')
            ->execute()->fetchAllAssoc();
        $arrOptions =[];
        foreach ($arrLayers as $arrLayer){
            $arrOptions[$arrLayer['id']] = $arrLayer['name'];
        }
        $arrColumnLayers['options'] = $arrOptions;
        $arrColumnKey = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['key'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>'true', 'tl_class'=>'w50']
        ];
        $arrColumnValue = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>'true', 'tl_class'=>'w50']
        ];
        $arrColumnLabels = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['label'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'w50']
        ];
        $return = [
            'layers'    => $arrColumnLayers,
            'key'       => $arrColumnKey,
            'value'     => $arrColumnValue,
            'label'     => $arrColumnLabels
        ];
        return $return;
    }
}