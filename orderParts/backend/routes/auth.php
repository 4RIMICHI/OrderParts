<?php

require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;
use Illuminate\Database\Capsule\Manager as Capsule;
use Slim\App;
use Slim\Http\Request;
use Slim\Http\Response;
use Illuminate\Database\Capsule\Manager as DB;
use Illuminate\Support\Facades\Hash;

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

return function (App $app) {
    $app->post('/register', function (Request $request, Response $response) {
        $data = $request->getParsedBody();
        $email = $data['email'];
        $password = password_hash($data['password'], PASSWORD_DEFAULT);

        try {
            DB::table('users')->insert([
                'email' => $email,
                'password' => $password
            ]);
            return $response->withJson(['message' => 'User registered successfully'], 201);
        } catch (\Exception $e) {
            error_log($e->getMessage()); // エラーログに記録
            return $response->withJson(['error' => 'Error registering user', 'details' => $e->getMessage()], 500);
        }
    });

    $app->post('/login', function (Request $request, Response $response) {
        $data = $request->getParsedBody();
        $email = $data['email'];
        $password = $data['password'];

        $user = DB::table('users')->where('email', $email)->first();

        if ($user && password_verify($password, $user->password)) {
            // トークン生成などの処理を追加
            return $response->withJson(['message' => 'Login successful']);
        } else {
            return $response->withJson(['error' => 'Invalid credentials'], 400);
        }
    });
};

$app->run();