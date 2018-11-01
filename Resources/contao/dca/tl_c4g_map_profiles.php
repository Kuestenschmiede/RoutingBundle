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
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'router_api_selection,router_viaroute_url,router_attribution,router_alternative,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,openRouter,routerLayers,minDetourArea,maxDetourArea,minDetourRoute,maxDetourRoute,clickLocstyle,areaCenterLocstyle,enableOverPoints,enableTargetSwitch';
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
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['clickLocstyle'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => array('tl_c4g_map_profiles_router','getLocStyles'),
    'eval'                    => array('tl_class'=>'clr', 'chosen' => true),
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['openRouter'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['openRouter'],
    'exclude'                 => true,
    'default'                 => true,
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default '0'"
];

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['areaCenterLocstyle'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['areaCenterLocstyle'],
    'exclude'                 => true,
    'inputType'               => 'select',
    'options_callback'        => array('tl_c4g_map_profiles_router','getLocStyles'),
    'eval'                    => array('tl_class'=>'clr', 'chosen' => true),
    'sql'                     => "int(10) unsigned NOT NULL default '0'"
];

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['enableOverPoints'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableOverPoints'],
    'exclude'                 => true,
    'default'                 => true,
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default '1'"
];

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['enableTargetSwitch'] = [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['enableTargetSwitch'],
    'exclude'                 => true,
    'default'                 => true,
    'inputType'               => 'checkbox',
    'sql'                     => "char(1) NOT NULL default '1'"
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
        $arrColumnMapLabels = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['mapLabel'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'w50']
        ];
        $return = [
            'layers'    => $arrColumnLayers,
            'key'       => $arrColumnKey,
            'value'     => $arrColumnValue,
            'label'     => $arrColumnLabels,
            'mapLabel'  => $arrColumnMapLabels
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