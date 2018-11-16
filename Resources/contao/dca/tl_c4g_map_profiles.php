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
//$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['config']['onload_callback'][] = ['tl_c4g_map_profiles_router','updateDCA'];
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['__selector__'][] = 'router';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default'] = str_replace('geosearch;','geosearch,router;', $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['palettes']['default']);
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'routerHeadline,router_api_selection,router_api_key,router_viaroute_url,router_attribution,router_alternative,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,openRouter,routerLayers,minDetourArea,maxDetourArea,minDetourRoute,maxDetourRoute,clickLocstyle,areaCenterLocstyle,enableOverPoints,enableTargetSwitch,priorityFeatures,priorityLocstyle,closeAfterSearch,showFeatures,showInstructions,initialMode;';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields'] = array_merge([
    'router' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router'],
        'exclude'                 => true,
        'default'                 => '',
        'inputType'               => 'checkbox',
        'eval'                    => ['tl_class'=>'clr'],
        'sql'                     => "char(1) NOT NULL default ''"
    ],

    'router_viaroute_url' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_viaroute_url'],
        'exclude'                 => true,
        'default'                 => 'https://api.openrouteservice.org/',
        'inputType'               => 'text',
        'eval'                    => ['rgxp'=>'url', 'decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        'sql'                     => "varchar(255) NOT NULL default 'https://api.openrouteservice.org/'"
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
        'options'                 => ['0','1','2'],
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
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'clr w50'],
        'wizard' => [
            ['tl_c4g_map_profiles', 'editLocationStyle']
        ],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_to_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_to_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'w50'],
        'wizard' => [
            ['tl_c4g_map_profiles', 'editLocationStyle']
        ],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_point_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_point_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'w50'],
        'wizard' => [
            ['tl_c4g_map_profiles', 'editLocationStyle']
        ],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_interim_locstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_interim_locstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'w50'],
        'wizard' => [
            ['tl_c4g_map_profiles', 'editLocationStyle']
        ],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'router_profiles' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['router_profiles'],
        'exclude'                 => true,
        'default'                 => ['0','2','8'],
        'inputType'               => 'select',
        'options'                 => ['0','1','2','3','4','5','6','8','9','10'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_profiles'],
        'eval'                    => ['mandatory'=>false, 'multiple'=>true,'chosen'=>true],
        'sql'                     => "blob NULL"
    ],
    'minDetourArea' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourArea'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '0',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
        'sql'                     => "decimal(10) NOT NULL default '0'"
    ],
    'maxDetourArea' => [

    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourArea'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '20',
    'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 30],
    'sql'                     => "decimal(10) NOT NULL default '20'"
    ],
    'routerLayers' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'],
        'exclude'                 => true,
        'inputType'               => 'multiColumnWizard',
        'eval'                    => [
            'columnsCallback'        => ['tl_c4g_map_profiles_router','getRouterLayer']
        ],
        'sql'                     => 'blob NULL'
    ],
    'minDetourRoute' => [
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['minDetourRoute'],
    'filter'                  => false,
    'inputType'               => 'text',
    'default'                 => '0',
    'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 0],
    'sql'                     => "decimal(10) NOT NULL default '0'"
    ],
    'maxDetourRoute' => [

        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['maxDetourRoute'],
        'filter'                  => false,
        'inputType'               => 'text',
        'default'                 => '5',
        'eval'                    => [ 'tl_class'=>'w50', 'rgxp'=>'digit', "minval" => 1, "maxval" => 10],
        'sql'                     => "decimal(10) NOT NULL default '5'"
    ],
    'clickLocstyle' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['clickLocstyle'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
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
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
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
        'options_callback'        => ['tl_c4g_map_profiles_router','getLocStyles'],
        'eval'                    => ['tl_class'=>'clr', 'chosen' => true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ],
    'closeAfterSearch' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['closeAfterSearch'],
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
    'showInstructions' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['showInstructions'],
        'exclude'                 => true,
        'default'                 => true,
        'inputType'               => 'checkbox',
        'sql'                     => "char(1) NOT NULL default '0'"
    ],
    'initialMode' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['initialMode'],
        'exclude'                 => true,
        'default'                 => "area",
        'inputType'               => "select",
        'options'                 => ['area', 'route'],
        'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['references_router_modes'],
        'sql'                     => "varchar(10) NOT NULL default 'area'"
    ]

],$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']);

class tl_c4g_map_profiles_router extends Backend
{
    // TODO im zweifel via saveCallback noch prüfen ob alles notwendige gesetzt ist
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
            'eval'                    => ['tl_class'=>'w50']
        ];
        $arrColumnValue = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['value'],
            'filter'                  => false,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'w50']
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
    public function updateDCA(DataContainer $dc){
        if (!$dc->id) {
            return;
        }
        $objProfile = $this->Database->prepare("SELECT zoom_panel, geosearch_engine, be_optimize_checkboxes_limit, router_api_selection FROM tl_c4g_map_profiles WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        if($objProfile->router ){
            if($objProfile->router_api_selection == 2){
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] =
                    str_replace('router_api_selection,','router_api_selection,router_api_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router']);
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] =
                    str_replace('router_interim_locstyle','router_interim_locstyle,router_profiles',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router']);
            }
        }
    }
}