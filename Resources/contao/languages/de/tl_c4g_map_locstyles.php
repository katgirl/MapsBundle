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
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['name']             = array('Name', 'Bitte geben Sie den Namen des Lokationsstils an.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['styletype']        = array('Darstellung als','Bitte wählen Sie die Darstellungsart der Lokation (Punkt, Icon, etc.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokecolor']      = array('Farbe der Linie/Rahmen und Deckkraft','Bitte wählen Sie die Farbe der Linie bzw. des Rahmens und die Deckkraft in %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokewidth']      = array('Breite der Linie/Rahmen','Bitte wählen Sie die Breite der Linie bzw. des Rahmens.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillcolor']        = array('Farbe der Füllung und Deckkraft','Bitte wählen Sie die Farbe der Füllung und die Deckkraft in %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['radius']           = array('Radius','Bitte wählen Sie den Radius in Pixeln (gilt für Darstellung als Punkt, Stern, Dreieck, Quadrat, Kreuz).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon']          = array('OpenLayers Icon','Bitte wählen Sie aus den verfügbaren OpenLayers Standardicons aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_size']     = array('Größe des Icons in Pixeln','Die Größe des Icons auf der Karte. Wird gegebenenfalls skaliert.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['ol_icon_offset']   = array('Positionsversatz des Icons (X/Y) in Pixel','Bei einem Versatz von "0" befindet sich die obere linke Ecke des Icons an der angegebenen Geo-Lokation. X=Positiv => nach rechts. X=negativ => nach links. Y=positiv => nach unten. Y=negativ => nach oben.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSrc']           = array('SVG Quelle','Wählen Sie Ihr SVG-Icon aus. Bitte beachten Sie, dass für die Anzeige im Firefox Höhe und Breite des Icons innerhalb der SVG-Datei gesetzt sein sollten ("height"- und "width"-Attribute). Alternativ aktivieren Sie die folgende Checkbox "SVG-Attribute ergänzen".');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svg_add_attributes']           = array('SVG-Attribute ergänzen','Ihre SVG-Datei wird beim Speichern so angepasst, dass sie mit Firefox kompatibel ist wenn Sie diese Checkbox aktivieren.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['givenSvgWidth']    = array('Größeneinstellung des SVG','Wählen Sie bitte hier, ob in der SVG-Datei die Größe mit "width" und "height" angegeben ist.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_src']         = array('Icon Quelle','Wählen Sie bitte hier das anzuzeigende Icon aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_size']        = array('Größe des Icons in Pixeln','Tragen Sie die Originalmaße (Breite und Höhe) des Icons ein. Wenn das Icon zu groß/zu klein ist nutzen Sie bitte die "Icon skalieren"-Option.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSize']          = array('Größe des SVG in Pixeln','Geben Sie hier die Größe an, in der Sie das SVG auf der Karte darstellen wollen.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_scale']       = array('Icon skalieren','Sie können die Größe skalieren: 1.0 = 100%');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_zoom']       = array('Icon bei Zoom neu skalieren', 'Setzen Sie diese Checkbox, wenn das Icon beim Zoomen auch neu mitskaliert werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_src_zoom']       = array('Initiale Zoomstufe','Geben Sie die Zoomstufe an, für die das Icon die angegebenen Maße und Skalierung haben soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_scale_factor']       = array('Skalierungsfaktor','Geben Sie einen Wert (0-1) an, um den das Icon pro Zoomstufe skaliert werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_min_scale']       = array('Minimale Skalierung','Geben Sie einen Skalierungsfaktor an, der nicht unterschritten werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_max_scale']       = array('Maximale Skalierung','Geben Sie einen Skalierungsfaktor an, der nicht überschritten werden soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_offset']      = array('Positionsversatz des Icons (X/Y) in Pixel','Bei einem Versatz von "0" befindet sich die obere linke Ecke des Icons an der angegebenen Geo-Lokation. X=Positiv => nach rechts. X=negativ => nach links. Y=positiv => nach unten. Y=negativ => nach oben.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_opacity']     = array('Deckkraft des Icons','Bitte wählen Sie die Deckkraft des Icons in % aus.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['iconcolor']        = array('Farbe des Icons','Hiermit können Sie die Icon-Farbe verändern.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['photoKind']        = array('Art des Fotostils','Bitte wählen Sie den Fotostil für den Lokationsstil ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onhover_locstyle'] = array('Lokationsstil bei Maus-Hover','Wählen Sie einen Lokationsstil aus, der eingestellt wird, während sich der Maus-Cursor über der Lokation befindet.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['style_function_js']   = array('Code für StyleFunction','Geben Sie hier Code für eine eigene StyleFunciton ein (Nur den Körper der Funktion. Rückgabe eines Ol-Styles)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows']      = array('Richtungspfeile aktivieren','Stellen Sie ein, ob bei der Darstellung von Strecken Richtungspfeile angezeigt werden sollen. Nur sinnvoll für Linien (Strecken).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_back'] = array('Pfeile in beide Richtungen','Setzen Sie diese Checkbox, um Pfeile in beide Richtungen zeichnen zu lassen.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_radius']= array('Radius des Pfeilkopfs in Pixeln','Der Pfeilkopf wird mit einem Dreieck-Symbol, ">", dargestellt. Geben Sie hier den Radius in Pixeln ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_minzoom'] = array('Pfeilköpfe zeigen ab Zoomlevel','Mindest-Zoomlevel, ab dem die Pfeilköpfe angezeigt werden sollen. Wenn dieser Wert kleiner als null ist, dann werden die Pfeilköpfe nur angezeigt, wenn sie kleiner als die Pfeillinie sind. (0=immer zeigen, -1=automatisch)');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label'] 		       = array('Label', 'Geben Sie hier ein Label ein, das auf der Karte bei der Lokation mit angezeigt wird. Überschreibt Einstellung am Kartenstrukturelement!');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_hor']  = array('Horizontale Ausrichtung ','Bitte definieren Sie, wie sich das Label relativ zur Lokation horizontal ausrichten soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_ver']  = array('Vertikale Ausrichtung','Bitte definieren Sie, wie sich das Label relativ zur Lokation vertikal ausrichten soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_offset']     = array('Positionsversatz des Labels (X/Y) in Pixeln','Verschiebt das Label um die angegebene Anzahl von Pixeln.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_family']      = array('Schriftart','Geben Sie die für das Label zu verwendende Schriftart an (Notierung wie in CSS).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_color']       = array('Schriftfarbe und Deckkraft','Wählen Sie die für die Schrift des Labels zu verwendende Farbe und Deckkraft in %.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_size']        = array('Schriftgröße','Wählen Sie die für die Schrift des Labels zu verwendende Schriftgröße.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_color'] = array('Farbe Schriftrand','Falls die Schrift Ihres Labels einen Rand bekommen soll, dann tragen Sie hier die Randfarbe ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_box']   = array('Art des Schriftrands','Im Normalfall folgt der Schriftrand der Schrift. Mit anwählen der Checkbox wird der Hintergrund in eine einfache Box umgewandelt.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_width'] = array('Breite Schriftrand','Falls die Schrift Ihres Labels einen Rand bekommen sollen, dann tragen Sie hier die Breite des Randes ein.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_style']       = array('Schriftstil','Wählen Sie den für die Schrift des Labels zu verwendenden Stil (Notierung wie in CSS).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_weight']      = array('Schriftgewicht','Wählen Sie das für die Schrift des Labels zu verwendende Gewicht (Notierung wie in CSS).');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_minzoom'] 		 = array('Mindest-Zoomstufe (Label)', 'Geben Sie die Zoomstufe ein, ab der das Label des Karteneintrags angezeigt wird. 0=keine Einschränkung.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_maxzoom'] 		 = array('Maximale Zoomstufe (Label)', 'Geben Sie die Zoomstufe ein, bis zu der das Label des Karteneintrags angezeigt wird. 0=keine Einschränkung.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['tooltip'] 		 = array('Tooltip für Icons', 'Kurze Information, die angezeigt wird, wenn der Mauszeiger über der Lokation für eine kurze Zeit stehen bleibt.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_info'] 		 = array('Popup Information', 'Wird eine Popup-Information gesetzt, so wird sie durch einen Mausklick oder via Hover (abhängig von der Einstellung im Kartenprofil) auf der Lokation angezeigt. Überschreibt Einstellung am Kartenstrukturelement!');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_kind']       = array('Art des Popups','Wählen Sie aus, welches Erscheinen das Popup haben soll, das beim Klick auf eine Lokation mit Popup-Informationen erscheinen soll.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_size']       = array('Größe des Popups','Die Größe des Popups. Wird, falls notwendig, verkleinert.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_offset']     = array('Positionsversatz des Popups (X/Y) in Pixeln','Bei einem Versatz von "0" befindet sich die obere linke Ecke des Popups an der angegebenen Geo-Lokation. X=Positiv => nach rechts. X=negativ => nach links. Y=positiv => nach unten. Y=negativ => nach oben.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onclick_zoomto'] 	 = array('Zoomen bei Mausklick auf Zoomstufe', 'Geben Sie die Zoomstufe ein, auf die bei Mausklick gezoomt werden soll. Funktioniert nur, wenn keine Direktverlinkung angegeben ist. Überschreibt Einstellung am Kartenstrukturelement!');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['minzoom'] 		 = array('Mindest-Zoomstufe', 'Geben Sie die Zoomstufe ein, ab der die Elemente des Karteneintrags angezeigt werden. 0=keine Einschränkung.');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['maxzoom'] 		 = array('Maximale Zoomstufe', 'Geben Sie die Zoomstufe ein, bis zu der die Elemente des Karteneintrags angezeigt werden. 0=keine Einschränkung.');

//xlabel buttons
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editLocstyles'] = ['Lokationsstile bearbeiten'];

/**
 * Reference
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['point']       = 'Punkt';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['square']      = 'Quadrat';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['star']        = 'Stern';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['x']           = 'X';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cross']       = 'Kreuz';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['triangle']    = 'Dreieck';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['ol_icon']     = 'OpenLayers Standardicon';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cust_icon']   = 'Eigenes Icon - Pixel';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cust_icon_svg']   = 'Eigenes Icon - Vektor';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['style_function']   = 'Style function';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['photo']       = 'Photo';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker.png']        = 'Roter Marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-blue.png']   = 'Blauer Marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-gold.png']   = 'Goldener Marker';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['marker-green.png']  = 'Grüner Marker';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['left']              = 'Lokation links vom Label';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['center']            = 'Mittig';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['right']             = 'Lokation rechts vom Label';





$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['top']               = 'Lokation über dem Label';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['middle']            = 'Mittig';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bottom']            = 'Lokation unter dem Label';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['bubble']            = 'Standard';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['cloud']             = 'Sprechblase';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['vector']            = 'Vektor';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['pixel']             = 'Raster';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['default']           = 'Standard';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['round']             = 'abgerundet';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['anchored']          = 'verankert';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['folio']             = 'Portfolio';

$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['true']              = 'Bekannte Größe';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references']['none']              = 'Unbekannte Größe';


/**
 * Buttons
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['new']        = array('Neuer Lokationsstil', 'Einen neuen Lokationsstil erstellen');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit']       = array('Lokationsstil bearbeiten', 'Lokationsstil ID %s bearbeiten');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy']       = array('Lokationsstil duplizieren', 'Lokationsstil ID %s duplizieren');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete']     = array('Lokationsstil löschen', 'Lokationsstil ID %s löschen');
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show']       = array('Details', 'Die Details des Lokationsstils ID %s anzeigen');

/**
 * Legends
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['arrow_legend'] 	= 'Richtungspfeile';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_legend'] 	= 'Einstellungen für Label';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_legend'] 	= 'Einstellungen für Popups';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['zoom_legend']  	= 'Zoomstufen';
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['expert_legend']  	= 'Experteneinstellungen';

/**
 * Globals
 */
$GLOBALS['TL_LANG']['MSC']['ow_value'] = 'Label im Editor';

/**
 * Info text
 */
$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['infotext'] = 'Hier stellen Sie die Icons für Ihre Kartenelemente ein (aus der Dateiverwaltung oder vordefiniert). Sie können die Position der Icons anpassen, damit z.B. die Spitze eines Markers direkt auf den Punkt zeigt (Positionsversatz). '.
   'Mehr auf <a href="https://docs.con4gis.org/lokationsstile-con4gis-maps" title="con4gis Docs Lokationsstile" target="_blank" rel="noopener"><b>docs.con4gis.org</b></a>';