<?php
session_start();

//Slim Framwork initialization
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
error_reporting(E_ALL);
ini_set('display_errors', 1);
$app = new \Slim\Slim(); //using the slim API

$app->get('/getOptions', 'getOptions');

$app->run();

//get DB connection, default root access.
function getConnection($user = 'root', $pw = 'root', $host = 'localhost') 
{
	$dbConnection = new mysqli($host, $user, $pw, 'OrderLite'); 
	
    // Check mysqli connection
	if (mysqli_connect_errno()) 
	{
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	return $dbConnection;
}

function getOptions()
{
	$con = getConnection();

	$app = \Slim\Slim::getInstance();
	$request = $app->request()->getBody();
	
    //initialise list 
	$options_list = array();
	
    //query DB 
	$result = $con->query( "SELECT DISTINCT Ingredient.foodName, Ingredient.categoryID FROM Ingredient");
	$counter = 0;
	while ($rows = mysqli_fetch_row($result)) 
	{
		if($counter < 10)
		{
			$recipe_list[] = $rows;
		}
		else 
		{
			break;
		}
		
		$counter = $counter + 1;
	}
    //return the result 
	echo json_encode($options_list);
	$con->close();
	
	
}