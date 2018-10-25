<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 22.10.18
 * Time: 11:19
 */
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'router_api_selection,router_viaroute_url,router_attribution,router_alternative,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,routerLayers,minDetourArea,maxDetourArea,minDetourRoute,maxDetourRoute,click_locstyle';
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
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['click_locstyle'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['click_locstyle'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => array('tl_c4g_map_profiles_router','getLocStyles'),
    'eval'                    => array('tl_class'=>'clr', 'chosen' => true),
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
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

    /**
     * Return all Location Styles for current Maps Profile as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $profile = $this->Database->prepare("SELECT locstyles FROM tl_c4g_map_profiles WHERE id=?")->execute($dc->activeRecord->profile);
        $ids = deserialize($profile->locstyles,true);
        if (count($ids)>0) {
            $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles WHERE id IN (".implode(',',$ids).") ORDER BY name")->execute();
        } else {
            $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")->execute();
        }
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }
}