<?php
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

namespace con4gis\MapsBundle\Classes\Caches;


use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;
use Contao\System;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class C4GBaselayerApiCache extends C4GApiCache
{
    /**
     * @var C4GBaselayerApiCache
     */
    protected static $instance = null;

    public static function getInstance($container) {
        if (!static::$instance) {
            static::$instance = new self($container);
        }
        return static::$instance;
    }

    /**
     * C4GLayerApiCache constructor.
     */
    protected function __construct($container)
    {
        $this->cacheInstance = new FilesystemAdapter(
            $namespace = 'con4gis_baselayerService',
            $defaultLifetime = 0,
            $directory = $container->getParameter('kernel.cache_dir')
        );
    }
}