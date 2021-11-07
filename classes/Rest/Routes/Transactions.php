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
            'posts_per_page' => -1,
            'order_by' => 'meta_value',
            'meta_key' => 'date'
        ]);
        $output = [];
        foreach($posts as $post){
            $output[] = [
                'id' => $post->ID,
                'date' => get_field('date', $post->ID),
                'card' => intval(get_field('card', $post->ID)),
                'description' => get_field('description', $post->ID),
                'debit' => floatval(get_field('debit', $post->ID)),
                'credit' => floatval(get_field('credit', $post->ID)),
                'account' => get_field('account', $post->ID),
            ];
        }
        wp_send_json_success($output);
    }
}
