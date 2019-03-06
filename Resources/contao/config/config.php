<?php
/*
  * This file is part of con4gis,
  * the gis-kit for Contao CMS.
  *
  * @package   	con4gis
  * @version    6
  * @author  	  con4gis contributors (see "authors.txt")
  * @license 	  LGPL-3.0-or-later
  * @copyright 	Küstenschmiede GmbH Software & Design
  * @link       https://www.con4gis.org
  */

$GLOBALS['BE_MOD']['con4gis']['c4g_routing'] = [
  'tables' => "tl_c4g_routing_configuration"
];

/**
 * Backend Modules
 */
$GLOBALS['BE_MOD']['con4gis'] = array_merge($GLOBALS['BE_MOD']['con4gis'], array
(
    'c4g_routing' => array
    (
        'tables' => "tl_c4g_routing_configuration"
    )
));

$GLOBALS['BE_MOD']['con4gis'] =
    \con4gis\CoreBundle\Resources\contao\classes\C4GUtils::sortBackendModules($GLOBALS['BE_MOD']['con4gis']);