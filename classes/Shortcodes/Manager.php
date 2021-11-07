<?php

namespace MiCasa\Core\Shortcodes;

class Manager {
    public function registerShortcodes(){
        add_action( 'init', function(){
            (new BaseShortcode())->registerShortcode();
        });
    }
}