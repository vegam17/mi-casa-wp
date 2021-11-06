<?php

namespace MiCasa\Core\Rest\Routes;

class Transactions extends Route {

    public function registerHooks(){
        add_action('rest_api_init', [$this, 'registerRoutes']);
    }

    public function registerRoutes(){
        register_rest_route($this->namespace, '/transactions', [
            'methods' => 'GET',
            'callback' => [$this, 'getTransactions'],
            'permission_callback' => '__return_true'
        ]);
    }

    public function getTransactions() {
        $posts = get_posts([
            'post_type' => 'transaction',
        ]);
        return wp_send_json_success($posts);
    }
}
