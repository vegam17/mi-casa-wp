<?php

namespace MiCasa\Core\Shortcodes;

class BaseShortcode {
    private $shortcode = 'mi_casa';

    public function registerShortcode(){
        add_shortcode($this->shortcode, [$this, 'renderCallback']);
    }

    public function renderCallback(){
        return '<div id="mi-casa"></div>';
    }
}