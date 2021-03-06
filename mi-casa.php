<?php
/*
Plugin Name:     Mi Casa
Plugin URI:      https://github.com/vegam17/mi-casa-wp
Description:     Core plugin for Mi Casa ecosytem
Version:         0.0.1
Plugin Author:   Miguel Vega
Author URI:      https://www.vega.dev/
Text Domain:     mi-casa
*/

namespace MiCasa\Core;

if(!defined('ABSPATH')) exit;

if(class_exists('MiCasa') || function_exists('mi_casa')) exit;

require_once 'autoload.php';

class MiCasa {
    function __construct() {

    }

    function initialize() {
        $this->enqueue_assets();
        (new Rest\Manager())->registerRoutes();
        (new Shortcodes\Manager())->registerShortcodes();
    }

    public function enqueue_assets() {
        wp_register_script(
            'mi-casa', 
            plugin_dir_url( __FILE__ ) . '/dist/bundle.js', 
            [], 
            filemtime( plugin_dir_path( __FILE__ ) . '/dist/bundle.js'),
            true
        );
        wp_localize_script('mi-casa', 'wp', [
            'rest' => 'http://localhost/personal-finance/wp-json/micasa/v1/'
        ]);
        wp_enqueue_script('mi-casa');
    }
}

function mi_casa() {
    global $mi_casa;

    if(!isset($mi_casa)){
        $mi_casa = new MiCasa();
        $mi_casa->initialize();
    }
    return $mi_casa;
}

mi_casa();