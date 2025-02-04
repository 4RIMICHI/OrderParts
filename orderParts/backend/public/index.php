<?php

require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

require __DIR__ . '/../config/database.php';

$app = AppFactory::create();

require __DIR__ . '/../routes/auth.php';

$app->run();