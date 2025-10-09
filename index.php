<?php
ini_set('display_errors', 1);s
error_reporting(E_ALL);

require_once 'patientController.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once 'Controller/UserController.php'; 

$controllerName = isset($_GET['controller']) ? ucfirst($_GET['controller']) : 'Home';
$controllerClass = $controllerName . 'Controller';

$actionName = isset($_GET['action']) ? $_GET['action'] : 'index';

if(!class_exists($controllerClass)){
  http_response_code(404);
  die("Controller '{$controllerClass}' não encontrado.");
}

$controller = new $controllerClass();

if(!method_exists($controller, $actionName))
  http_response_code(404);
  die("Ação '{$actionName}' não encontrada no Controller.");
}


$controller->$actionName();