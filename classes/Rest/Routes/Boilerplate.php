<?php

namespace MiCasa\Core\Rest\Routes;

class Boilerplate {
    public function registerHooks(){
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    public function registerRoutes(){
        register_rest_route($this->namespace, '/test', [
            'methods' => 'GET',
            'callback' => [$this, 'test_callback_example'],
            'permission_callback' => '__return_true'
        ]);
    }

    public function test_callback_example() {
        return wp_send_json_success();
    }
}
