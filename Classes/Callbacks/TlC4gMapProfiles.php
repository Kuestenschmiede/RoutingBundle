<?php
/**
 * Created by PhpStorm.
 * User: cro
 * Date: 29.11.18
 * Time: 10:12
 */

namespace con4gis\RoutingBundle\Classes\Callbacks;

use Contao\Database;
use Contao\DataContainer;

/**
 * Class TlC4gMapProfiles
 * Callback class for the tl_c4g_map_profiles DCA file.
 * @package con4gis\routing\Classes\Callbacks
 */
class TlC4gMapProfiles
{
    private $db = null;

    /**
     * TlC4gMapProfiles constructor.
     * @param null $db
     */
    public function __construct()
    {
        $this->db = Database::getInstance();
    }


    // TODO im zweifel via saveCallback noch prüfen ob alles notwendige gesetzt ist
    public function getRouterLayer($multiColumnWizard)
    {
        $arrColumnLayers = [
            'label'     => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerLayer']['layers'],
            'inputType' => 'select',
            'eval'      => ['chosen'=>true, 'includeBlankOption'=>true]
        ];
        $arrLayers = $this->db->prepare('SELECT * FROM tl_c4g_maps WHERE published=1')
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
        $profile = $this->db->prepare("SELECT locstyles FROM tl_c4g_map_profiles WHERE id=?")->execute($dc->activeRecord->profile);
        $ids = deserialize($profile->locstyles,true);
        if (count($ids)>0) {
            $locStyles = $this->db->prepare("SELECT id,name FROM tl_c4g_map_locstyles WHERE id IN (".implode(',',$ids).") ORDER BY name")->execute();
        } else {
            $locStyles = $this->db->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")->execute();
        }
        while ($locStyles->next()) {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }

    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) {
            return;
        }

        $objProfile = $this->db->prepare("SELECT * FROM tl_c4g_map_profiles WHERE id=?")
            ->limit(1)
            ->execute($dc->id);
        if ($objProfile->router) {
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