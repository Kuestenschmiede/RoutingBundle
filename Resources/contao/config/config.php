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

/**
 * Backend Modules
 */
$GLOBALS['BE_MOD']['con4gis'] = array_merge($GLOBALS['BE_MOD']['con4gis'], array
(
    'c4g_routing_configuration' => array
    (
        'brick' => 'routing',
        'tables' => ['tl_c4g_routing_configuration'],
        'icon' => 'bundles/con4giscore/images/be-icons/edit.svg'
    )
));
