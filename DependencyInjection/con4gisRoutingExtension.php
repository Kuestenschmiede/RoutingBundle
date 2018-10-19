<?php
/**
 * Created by PhpStorm.
 * User: fsc
 * Date: 15.08.18
 * Time: 12:29
 */

namespace con4gis\RoutingBundle\DependencyInjection;


use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class con4gisRoutingExtension extends Extension
{
    /**
     * {@inheritdoc}
     */
    public function load(array $mergedConfig, ContainerBuilder $container)
    {
        $loader = new YamlFileLoader(
            $container,
            new FileLocator(__DIR__.'/../Resources/config')
        );
        $loader->load('listeners.yaml');
        $loader->load('services.yaml');
    }
    public function getAlias()
    {
        return "con4gis_routing";
    }
}