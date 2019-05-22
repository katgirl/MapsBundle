<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

if (method_exists('\System', 'getContainer')) {
    $filteredSizes = [];
    $imageSizes = \System::getContainer()->get('contao.image.image_sizes')->getAllOptions();
    $just = 'proportional';
    foreach ($imageSizes as $group => $sizes) {
        foreach ($sizes as $key => $size) {
            if ($size == $just) {
                $filteredSizes[$group][$key] = $size;
            }
        }
    }
    $imageSizes = $filteredSizes;
}

/**
 * Table tl_c4g_map_locstyles
 */
$GLOBALS['TL_DCA']['tl_c4g_map_locstyles'] =
    [

    // Config
    'config' =>
        [
        'label'                       => $GLOBALS['TL_LANG']['MOD']['c4g_map_locstyles'][0],
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onsubmit_callback'             => [
            ['\con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator', 'purgeLocationstyleApiCache']
        ],
        'sql'                         =>
            [
            'keys' =>
                [
                'id' => 'primary'
                ]
            ]
        ],

    // List
    'list' =>
        [

        'sorting' =>
            [
            'mode'                    => 1,
            'fields'                  => ['name'],
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => ['name'],
            'flag'                    => 1,
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png'
            ],
        'label' =>
            [
            'fields'                  => ['name'],
            'format'                  => '%s'
            ],
        'global_operations' =>
            [
            'all' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
                ]
            ],
        'operations' =>
            [
            'edit' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
                ],
            'copy' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
                ],
            'delete' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
                ],
            'show' =>
                [
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
                ]
            ]
        ],


    // Palettes
    'palettes' =>
        [
        '__selector__'                => ['styletype','line_arrows', 'icon_resize_zoom'],
        'default'                     => 'name,styletype,strokewidth,strokecolor,strokeopacity,fillcolor,fillopacity,radius;'.
                                         '{arrow_legend},line_arrows;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;',
        'cust_icon'                   => 'name,styletype,icon_src, icon_scale, icon_size,icon_resize_zoom,icon_opacity,icon_offset;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;',
        'cust_icon_svg'                   => 'name, styletype, svgSrc, icon_scale, icon_size,icon_resize_zoom, strokewidth, strokecolor, strokeopacity, fillcolor, fillopacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;',
        'style_function'              => 'name,styletype,style_function_js;',
        'photo'                       => 'name,styletype,radius,photoKind,icon_src,strokecolor,icon_opacity;'.
                                         '{label_legend},label,label_align_hor,label_align_ver,label_offset,font_family,font_color,font_size,label_outl_color,label_outl_width,label_outl_box,font_opacity,font_style,font_weight;'.
                                         '{popup_legend},tooltip,popup_info;'.
                                         '{zoom_legend:hide},onclick_zoomto,minzoom,maxzoom;'.
                                         '{editor_legend:hide},editor_icon,editor_icon_size,editor_sort,editor_vars,editor_collect;'


        ],

    // Subpalettes
    'subpalettes' =>
        [
        'line_arrows'                 => 'line_arrows_back,line_arrows_radius,line_arrows_minzoom',
        'icon_resize_zoom'            => 'icon_resize_src_zoom,icon_resize_scale_factor'
        ],


    // Fields
    'fields' =>
        [
        'id' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
            ],
        'tstamp' =>
            [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'name' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['name'],
            'exclude'                 => true,
            'search'                  => true,
            'sorting'                 => true,
            'filter'                  => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => ['mandatory'=>true, 'maxlength'=>75],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'styletype' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['styletype'],
            'filter'                  => true,
            'inputType'               => 'select',
            'default'                 => 'point',
            'options'                 => ['point', 'square', 'star', 'x', 'cross', 'triangle', 'cust_icon','cust_icon_svg','style_function','photo'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => ['submitOnChange'=>'true'],
            'sql'                     => "varchar(15) NOT NULL default ''"
            ],
        'strokewidth' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokewidth'],
            'inputType'               => 'inputUnit',
            'default'                 => '2',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default '2'"
            ],
        'strokecolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokecolor'],
            'default'                 => 'ee0016',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard', 'mandatory'=>false],
            'sql'                     => "varchar(6) NOT NULL default 'ee0016'"
            ],
        'strokeopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['strokeopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default '100'"
            ],
        'fillcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillcolor'],
            'inputType'               => 'text',
            'default'                 => 'ee0011',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'],
            'sql'                     => "varchar(6) NOT NULL default 'ee0011'"
            ],
        'fillopacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['fillopacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '50',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default '50'"
            ],
        'radius' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['radius'],
            'inputType'               => 'inputUnit',
            'default'                 => '10',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'icon_src' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_src'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
            'sql'                     => "binary(16) NULL"
            ],
        'icon_size' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_size'],
            'exclude'                 => true,
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>true],
//            'load_callback'           => array(array('tl_c4g_map_locstyles','setSizes')),
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'svgSrc' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['svgSrc'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'svg', 'tl_class'=>'clr', 'mandatory'=>true,'submitOnChange' => true],
            //'save_callback'           => array(array('tl_c4g_map_locstyles','setSizes')),
            'sql'                     => "binary(16) NULL"
            ],
        'icon_scale' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_scale'],
            'default'                 => '1.00',
            'exclude'                 => true,
            'flag'                    => 1,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'long', 'rgxp'=>'digit', 'mandatory'=>true],
            'sql'                     => "double(3,3) NOT NULL default '1.000'"
            ],
        'icon_resize_zoom' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_zoom'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
        ],
            
        'icon_resize_src_zoom' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_src_zoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) NOT NULL default '0'"
        ],
    
        'icon_resize_scale_factor' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_resize_scale_factor'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "double(3,3) NOT NULL default '1.000'"
        ],
        
        'icon_offset' =>
            [
                'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_offset'],
                'exclude'                 => true,
                'default'                 => ['0','0'],
                'inputType'               => 'imageSize',
                'options'                  => $imageSizes,
                'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long'],
                'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'iconcolor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['iconcolor'],
            'inputType'               => 'text',
            'default'                 => '',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'long wizard'],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'icon_opacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['icon_opacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'clr', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'photoKind' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['photoKind'],
            'exclude'                 => true,
            'default'                 => 'popup_default',
            'inputType'               => 'select',
            'options'                 => ['default','square','round','anchored','folio'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => ['mandatore'=>true],
            'sql'                     => "varchar(64) NOT NULL default ''"
            ],
        'onhover_locstyle' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onhover_locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => ['tl_c4g_map_locstyles','getLocStyles', 'includeBlankOption' => true],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'style_function_js' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['style_function_js'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => ['style'=>'height:120px;', 'preserveTags'=>true],
            'sql'                     => "text NULL"
            ],
        'line_arrows' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['submitOnChange' => true],
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'line_arrows_back' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_back'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],

        'line_arrows_radius' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_radius'],
            'inputType'               => 'inputUnit',
            'default'                 => '4',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'line_arrows_minzoom' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['line_arrows_minzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '-1',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) NOT NULL default '0'"
            ],

        'label' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label_align_hor' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_hor'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => ['left','center','right'],
            'default'                 => 'center',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'sql'                     => "varchar(10) NOT NULL default ''"
            ],

        'label_align_ver' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_align_ver'],
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => ['top','middle','bottom'],
            'default'                 => 'top',
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'sql'                     => "varchar(10) NOT NULL default ''"
            ],
        'label_offset' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_offset'],
            'exclude'                 => true,
            'default'                 => ['0','10'],
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_family' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_family'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_color' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_color'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
            'sql'                     => "varchar(6) NOT NULL default ''"
            ],
        'font_size' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_size'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'digit', 'tl_class' => 'w50'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'label_outl_color' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_color'],
            'default'                 => 'ee0016',
            'inputType'               => 'text',
            'eval'                    => ['maxlength'=>6, 'isHexColor'=>true, 'colorpicker'=>true, 'decodeEntities'=>true, 'tl_class'=>'w50 wizard'],
            'sql'                     => "varchar(6) NOT NULL default 'ee0016'"
            ],
        'label_outl_box' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_box'],
            'default'                 => '',
            'inputType'               => 'checkbox',
            'eval'                    => ['tl_class'=>'long clr'],
            'sql'                     => "char(1) NOT NULL default ''"
            ],
        'label_outl_width' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['label_outl_width'],
            'inputType'               => 'inputUnit',
            'default'                 => '',
            'options'                 => ['px'],
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'font_opacity' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_opacity'],
            'inputType'               => 'inputUnit',
            'default'                 => '100',
            'options'                 => ['%'],
            'eval'                    => ['rgxp'=>'prcnt', 'tl_class'=>'clr'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],

        'font_style' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_style'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],

        'font_weight' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['font_weight'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'tooltip' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['tooltip'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['tl_class'=>'long'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popup_info' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_info'],
            'exclude'                 => true,
            'inputType'               => 'textarea',
            'eval'                    => ['rte'=>'tinyMCE'],
            'sql'                     => "text NULL"
            ],
        'popup_kind' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_kind'],
            'default'                 => 'cloud',
            'exclude'                 => true,
            'inputType'               => 'radio',
            'options'                 => ['bubble','cloud'],
            'reference'               => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['references'],
            'eval'                    => ['mandatory'=>true],
            'sql'                     => "varchar(30) NOT NULL default 'cloud'"
            ],
        'popup_size' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_size'],
            'default'                 => ['200','200'],
            'exclude'                 => true,
            'inputType'               => 'imageSize',
//            'options'                 => array('px'),
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50', 'mandatory'=>true],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'popup_offset' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['popup_offset'],
            'exclude'                 => true,
            'default'                 => ['0','0'],
            'inputType'               => 'imageSize',
//            'options'                 => array('px'),
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'w50'],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'onclick_zoomto' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['onclick_zoomto'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'minzoom' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['minzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'maxzoom' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['maxzoom'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'default'                 => '0',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'editor_icon' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon'],
            'exclude'                 => true,
            'inputType'               => 'fileTree',
            'eval'                    => ['fieldType'=>'radio', 'files'=>true, 'extensions'=>'gif,jpg,jpeg,png,svg', 'tl_class'=>'clr'],
            'sql'                     => "binary(16) NULL"
            ],
        'editor_icon_size' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_icon_size'],
            'exclude'                 => true,
            'default'                 => ['0','0'],
            'inputType'               => 'imageSize',
            'options'                  => $imageSizes,
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'long', 'mandatory'=>false],
            'sql'                     => "varchar(100) NOT NULL default ''"
            ],
        'editor_sort' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_sort'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'eval'                    => ['rgxp'=>'digit', 'tl_class'=>'clr'],
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
            ],
        'editor_vars' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_vars'],
            'inputType'               => 'keyValueWizard',
            'exclude'                 => true,
            'sql'                     => "text NULL"
            ],

        'editor_collect' =>
            [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_locstyles']['editor_collect'],
            'exclude'                 => true,
            'default'                 => '',
            'inputType'               => 'checkbox',
            'sql'                     => "char(1) NOT NULL default ''"
            ],


        ]
    ];

/**
 * Class tl_c4g_map_locstyles
 */
class tl_c4g_map_locstyles extends Backend
{

    public function __construct()
    {
        parent::__construct();
    }


    public function setSizes($varValue, DataContainer $dc)
    {

        if ($dc->activeRecord->styletype == 'cust_icon') {
            $icon_src = $dc->activeRecord->icon_src;
            $icon_size = $dc->activeRecord->icon_size;
            if ($icon_src &! $icon_size) {
                if (\Validator::isUuid($icon_src))
                {
                   $iconSrc = \FilesModel::findByUuid($icon_src);
                    list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $icon_size = 'a:3:{i:0;s:'.strlen($width).':"'.$width.'";i:1;s:'.strlen($height).':"'.$height.'";i:2;s:2:"px";}';

                    $offsetWidth = '-'.($width / 2);
                    $offsetHeight = '-'.($height / 2);
                    $icon_offset = 'a:3:{i:0;s:'.strlen($offsetWidth).':"'.$offsetWidth.'";i:1;s:'.strlen($offsetHeight).':"'.$offsetHeight.'";i:2;s:2:"px";}';

                    $this->Database->prepare("UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?")
                        ->execute($icon_size, $icon_offset, $dc->id);
                }
            }
        }

        if ($dc->activeRecord->styletype == 'cust_icon_svg') {
            $icon_src = $dc->activeRecord->svgSrc;
            $icon_size = $dc->activeRecord->icon_size;
            if ($icon_src &! $icon_size) {
                if (\Validator::isUuid($icon_src))
                {
                    $iconSrc = \FilesModel::findByUuid($icon_src);
                    //list($width, $height, $type, $attr) = getimagesize($iconSrc->path);
                    $size = (new Contao\ImagineSvg\Imagine)->open($iconSrc->path)->getSize();
                    $width = $size->getWidth();
                    $height = $size->getHeight();

                    $icon_size = 'a:3:{i:0;s:'.strlen($width).':"'.$width.'";i:1;s:'.strlen($height).':"'.$height.'";i:2;s:2:"px";}';

                    $offsetWidth = '-'.($width / 2);
                    $offsetHeight = '-'.($height / 2);
                    $icon_offset = 'a:3:{i:0;s:'.strlen($offsetWidth).':"'.$offsetWidth.'";i:1;s:'.strlen($offsetHeight).':"'.$offsetHeight.'";i:2;s:2:"px";}';

                    $this->Database->prepare("UPDATE tl_c4g_map_locstyles SET icon_size=?, icon_offset=? WHERE id =?")
                        ->execute($icon_size, $icon_offset, $dc->id);
                }
            }
        }

        return $varValue;
    }

    /**
     * Return all Location Styles as array
     * @param object
     * @return array
     */
    public function getLocStyles(DataContainer $dc)
    {
        $locStyles = $this->Database->prepare("SELECT id,name FROM tl_c4g_map_locstyles ORDER BY name")
            ->execute();
        $return[''] = '-';
        while ($locStyles->next())
        {
            $return[$locStyles->id] = $locStyles->name;
        }
        return $return;
    }
}
