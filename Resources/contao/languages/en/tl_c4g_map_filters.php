<?php
/**
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version    7
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */


$strName = "tl_c4g_map_filters";

/**
 * Fields
 */
$GLOBALS['TL_LANG'][$strName]['name'] = ["Name"];
$GLOBALS['TL_LANG'][$strName]['filters'] = ["Filters"];
$GLOBALS['TL_LANG'][$strName]['translation'] = ["Translation"];
$GLOBALS['TL_LANG'][$strName]['identifier'] = ["Identifier"];
$GLOBALS['TL_LANG'][$strName]['value'] = ["Value"];


/**
 * Legends
 */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = "Filter settings";

/**
 * Operations
 */
$GLOBALS['TL_LANG'][$strName]['new']        = array('New filter', 'Create a new filter');
$GLOBALS['TL_LANG'][$strName]['edit']       = array('Edit filter', 'Edit filter ID %s');
$GLOBALS['TL_LANG'][$strName]['copy']       = array('Copy filter', 'Copy filter ID %s');
$GLOBALS['TL_LANG'][$strName]['delete']     = array('Delete filter', 'Delete filter ID %s');
$GLOBALS['TL_LANG'][$strName]['show']       = array('Show filter', 'Show details of filter ID %s');

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_filters']['infotext'] = 'WRITE ME TEXT '.
    'More on <a href="https://docs.con4gis.org/kartenfilter_con4gis-Maps" title="con4gis Docs map filter" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';