<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

namespace con4gis\RoutingBundle\Classes\Callbacks;

use con4gis\RoutingBundle\Entity\RoutingConfiguration;
use Contao\Database;
use Contao\DataContainer;
use Contao\System;

/**
 * Class TlC4gMapProfiles
 * Callback class for the tl_c4g_map_profiles DCA file.
 * @package con4gis\routing\Classes\Callbacks
 */
class TlC4gRoutingConfiguration
{
    private $db = null;

    /**
     * TlC4gMapProfiles constructor.
     */
    public function __construct()
    {
        $this->db = Database::getInstance();
    }

    public function getRouterLayer($multiColumnWizard)
    {
        $arrColumnLayers = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['routerLayer']['layers'],
            'inputType' => 'select',
            'eval' => ['chosen' => true, 'includeBlankOption' => true, 'style' => 'min-width:200px;width:200px;'],
        ];
        $arrLayers = $this->db->prepare('SELECT * FROM tl_c4g_maps')
            ->execute()->fetchAllAssoc();
        $arrOptions = [];
        foreach ($arrLayers as $arrLayer) {
            $arrOptions[$arrLayer['id']] = $arrLayer['name'];
        }
        $arrColumnLayers['options'] = $arrOptions;
        $arrColumnKey = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['routerLayer']['key'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnValue = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['routerLayer']['value'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnLabels = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['routerLayer']['label'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnMapLabels = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['routerLayer']['mapLabel'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $return = [
            'layers' => $arrColumnLayers,
            'key' => $arrColumnKey,
            'value' => $arrColumnValue,
            'label' => $arrColumnLabels,
            'mapLabel' => $arrColumnMapLabels,
        ];

        return $return;
    }
    public function getRouterProfiles(DataContainer $dc)
    {
        $activeAPI = $dc->activeRecord->router_api_selection;
        if ($activeAPI == 2) {
            return ['0','1','2','3','4','5','6','8','9','10'];
        } elseif ($activeAPI == 3) {
            return ['0', '1', '2', '3', '5', '8', '9', '11', '12'];
        } elseif ($activeAPI == 4 || $activeAPI == 5) {
            return ['0', '1', '2', '3', '5', '8', '12', '13'];
        }
    }

    /**
     * Return all Location Styles for current Maps Profile as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $locStyles = $this->db->prepare('SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name')->execute();
        if ($locStyles) {
            while ($locStyles->next()) {
                $return[$locStyles->id] = $locStyles->name;
            }
        }

        return $return;
    }

    public function updateDCA(DataContainer $dc)
    {
        if (!$dc->id) {
            return;
        }

        $objProfile = $this->db->prepare('SELECT * FROM tl_c4g_map_profiles WHERE id=?')
            ->limit(1)
            ->execute($dc->id);
        if ($objProfile->router) {
            if ($objProfile->router_api_selection > 1) {
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] =
                    str_replace('router_api_selection,','router_api_selection,router_api_key,',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router']);
                $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router'] =
                    str_replace('router_interim_locstyle','router_interim_locstyle,router_profiles',
                        $GLOBALS['TL_DCA']['tl_c4g_map_profiles']['subpalettes']['router']);
            }
        }
    }

    public function getRouterConfigs(DataContainer $dc)
    {
        $em = System::getContainer()->get('doctrine.orm.default_entity_manager');
        $configs = $em->getRepository(RoutingConfiguration::class)->findAll();
        $arrConfigs = [];
        foreach ($configs as $config) {
            $arrConfigs[$config->getId()] = $config->getName();
        }

        return $arrConfigs;
    }

    public function getCustomProfileStructure($multiColumnwizard)
    {
        $arrColumnProfileKey = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['customProfile']['profileKey'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnShowName = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['customProfile']['showName'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $arrColumnFA = [
            'label' => &$GLOBALS['TL_LANG']['tl_c4g_routing_configuration']['customProfile']['fontAwesome'],
            'filter' => false,
            'inputType' => 'text',
            'eval' => ['tl_class' => 'w50'],
        ];
        $return = [
            'profileKey' => $arrColumnProfileKey,
            'showName' => $arrColumnShowName,
            'fontAwesome' => $arrColumnFA,
        ];

        return $return;
    }
}
