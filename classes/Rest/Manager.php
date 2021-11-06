<?php

namespace MiCasa\Core\Rest;

class Manager {
    public function registerRoutes(){
        (new Routes\Transactions())->registerHooks();
    }
}