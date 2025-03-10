<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Fields
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['name']           			= ['Name', 'Please enter the name of the data connection.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['customDB']           		= ['Custom database', 'Enter a custom database. Leave empty for usual DB (contao).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource']    			= ['Source table', 'Please enter the source table, which includes the data you want to display.'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptable']    			    = ['Parent tables', 'Please enter the parent tables to limit the data from the source table'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableOptions']    		= ['Fields of the parent tables in backend', 'Fields of the parent tables to display in backend'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableBlob']    			= ['Blob', 'Read the sourcecode.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableField']    			= ['Link to parent tables', 'Please choose the field from the source table which links to the parent tables (e.g. pid).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableCompareField']      = ['Link to source table', 'Please choose the fields from the parent tables which links to the source table (e.g. ID).'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geox']                    = ['X-coordinate', 'Please choose the field, which represents the X-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoy']                    = ['Y-coordinate', 'Please choose the field, which represents the Y-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geolocation']             = ['Geolocation', 'Please choose the field, which represents the X- and Y-coordinate, WKT or WKB'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['label']                   = ['Label', 'Please choose the field, which contains the label'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['locstyle']                = ['Lokationsstil', 'Please choose the field, which represents the Y-coordinate'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch']             = ['Popup mechanism', 'Select the popup mechanism you want to use to fill the popup in the map.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSelection']          = ['Popup (field selection)', 'Select the fields from which the popup is to be composed (the individual field contents are separated by a line break).'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popup']                   = ['Popup (expert setting)', 'Specify placeholders for individual fields that you want to display in the popup. Options and functions for this field are described <a href="https://docs.con4gis.org/kartenstrukturen-quelltabellen" style="color: red" rel="noopener" target="_blank">here</a>.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tooltip']                 = ['Tooltip', 'Please choose the field, which contains the tooltip'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['cutTextAtLength']         = ['Cut text at certain length', 'Specify a number of characters for which the rest of the text is to be replaced by "...". 0 means no replacement.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['openLinksInTab']          = ['Open links in new tab', 'If you set this checkbox, all generated hyperlinks are opened in a new browser tab.'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataType']                = ['Data type', 'Choose the data type'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projName']                = ['Projection', 'Please enter the name of the projection'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projCode']                = ['Projection code', 'Please enter the settings of the projection in the format suitable for Proj4js'];

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_default'] = 'Field selection';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_expert'] = 'Expert configuration (more flexible)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['popupSwitch_off'] = 'No popup';

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeCoords'] = 'Coordinate pair';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeWKT'] = 'Well-Kown-Text (WKT)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['dataTypeWKB'] = 'Well-Kown-Binary (WKB)';

$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][1] = 'Pair of coordinates (two fields)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][2] = 'Pair of coordinates (one field)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][3] = 'Well-Kown-Text (WKT)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['references']['dataType'][4] = 'Well-Kown-Binary (WKB)';
/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['new']        = ['New data connection', 'Create a new data connection'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['edit']       = ['Edit data connection', 'Edit data connection with ID %s'];
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['delete']     = ['Delete data connection', 'Delete data connection with ID %s'];

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['defaultLegend']		= 'General data';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['parentLegend']		= 'Parent tables (optional)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoLegend']		    = 'Location (set either the x- and y-coordinate or the geolocation)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableInformation']	= 'Assign table columns (optional)';
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['projLegend']		    = 'Custom projection';

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_tables']['infotext'] = 'At this point you can link Contao tables or your own tables to the map. '.
    'Mehr auf <a href="https://docs.con4gis.org/sourcetables-con4gis-maps" title="con4gis Docs source tablesAt this point you can link Contao tables or your own tables to the map. " target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';