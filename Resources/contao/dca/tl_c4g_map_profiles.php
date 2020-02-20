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
$callbackClass = "con4gis\RoutingBundle\Classes\Callbacks\TlC4gRoutingConfiguration";

Contao\CoreBundle\DataContainer\PaletteManipulator::create()
    ->addLegend('routing_legend', 'geosearch_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_AFTER, true)
    ->addField('routerConfig', 'routing_legend', Contao\CoreBundle\DataContainer\PaletteManipulator::POSITION_APPEND)
    ->applyToPalette('default', 'tl_c4g_map_profiles');

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']['mapFunctions']['options'][] = 'routing';

$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields'] = array_merge([
    'router' => [
        'sql'                     => "char(1) NOT NULL default ''"
    ],

    'routerConfig' => [
        'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_profiles']['routerConfig'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => [$callbackClass,'getRouterConfigs'],
        'eval'                    => ['tl_class'=>'clr','chosen' => true,'includeBlankOption'=>true],
        'sql'                     => "int(10) NOT NULL default '0'",
        'xlabel'                  => [['tl_c4g_map_profiles_routing', 'configurationLink']]
    ]

],$GLOBALS['TL_DCA']['tl_c4g_map_profiles']['fields']);

/**
 * Class tl_c4g_map_profiles
 */
class tl_c4g_map_profiles_routing extends Backend
{
    public function configurationLink(Contao\DataContainer $dc)
    {
        return ' <a href="contao/main.php?do=c4g_routing_configuration&amp;table=tl_c4g_routing_configuration&amp;id=' . $dc->activeRecord->pid . '&amp;popup=1&amp;nb=1&amp;rt=' . REQUEST_TOKEN . '" title="' . Contao\StringUtil::specialchars($GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editRoutingConfiguration']) . '" onclick="Backend.openModalIframe({\'title\':\'' . Contao\StringUtil::specialchars(str_replace("'", "\\'", $GLOBALS['TL_LANG']['tl_c4g_map_profiles']['editRoutingConfiguration'])) . '\',\'url\':this.href});return false">' . Contao\Image::getHtml('edit.svg') . '</a>';
    }

}