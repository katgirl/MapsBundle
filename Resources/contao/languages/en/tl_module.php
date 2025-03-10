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
$GLOBALS['TL_LANG']['tl_module']['c4g_map_id'] = array('Mapstructure', 'Choose a mapstructure to be displayed from available maps.');
// $GLOBALS['TL_LANG']['tl_module']['c4g_map_mapsize'] = array('Map size', 'Custom map size, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_width'] = array('Map width', 'Custom map width, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_height'] = array('Map height', 'Custom map height, overrides map size defined on map level.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoom'] = array('Zoomlevel', 'Custom zoomlevel, overrides zoomlevel defined on map level.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_default_mapservice'] = array('Default base layer', 'Choose from the available base layers, which are defined at the map profile of the chosen map. If none is defined, the profile basemap is taken by default.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_site_id'] = array('Map page', 'Select the map page to which the search should redirect.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoomlevel'] = array('Zoomlevel', 'Specify the zoomlevel that should be applied when opening the map.');
$GLOBALS['TL_LANG']['tl_module']['c4g_map_placeholder'] = array('Placeholder for input field', 'Specify a placeholder that should be displayed when no input has been made yet.');
$GLOBALS['TL_LANG']['tl_module']['c4g_element_type'] = array('Element type', 'Choose the element which you want to display externally.');

$GLOBALS['TL_LANG']['tl_module']['editMaps'] = ['Edit structure elements'];

$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['starboard'] = "Starboard";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['baselayer'] = "Baselayer switcher";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['permalink'] = "Permalink";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['search'] = "Search";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['measuretools'] = "Measuretools";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['legend'] = "Legend";
//$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['overviewmap'] = "Overview map";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['filter'] = "Map filter";
$GLOBALS['TL_LANG']['tl_module']['element_type_refs']['popup'] = "Popup";

/**
 * Legend
 */
$GLOBALS['TL_LANG']['tl_module']['c4g_map_legend'] = 'Map configuration';
$GLOBALS['TL_LANG']['tl_module']['c4g_search_legend'] = 'Search configuration';
$GLOBALS['TL_LANG']['tl_module']['c4g_external_legend'] = 'Display map components outside the map';