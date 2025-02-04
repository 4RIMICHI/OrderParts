<?php

require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;
use Illuminate\Database\Capsule\Manager as Capsule;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

require __DIR__ . '/../config/database.php';

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'pgsql',
    'host'      => '127.0.0.1',
    'database'  => 'myapp',
    'username'  => 'your_username',
    'password'  => 'your_password',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();

$app = AppFactory::create();

require __DIR__ . '/../routes/auth.php';

$app->run();