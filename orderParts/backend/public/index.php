<?php

require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

// 既存のコード     
$app = AppFactory::create();

require __DIR__ . '/../config/database.php';
require __DIR__ . '/../routes/auth.php';

$app->run();