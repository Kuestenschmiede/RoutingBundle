<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 22.10.18
 * Time: 11:19
 */
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] = 'router_api_selection,router_viaroute_url,router_attribution,router_alternative,router_from_locstyle,router_to_locstyle,router_point_locstyle,router_interim_locstyle,routerLayers';
$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['routerLayers'] = array(
    'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayers'],
    'exclude'                 => true,
    'inputType'               => 'multiColumnWizard',
    'eval'                    => array(
        'columnsCallback'        => array('tl_c4g_map_profiles_router','getRouterLayer')
    ),
    'sql'                     => 'blob NULL'
);
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
            'eval'                    => ['mandatory'=>'true', 'tl_class'=>'w50']
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