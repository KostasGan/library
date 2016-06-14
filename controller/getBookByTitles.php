<?php

require_once 'db_connection.php';

$db = new Database(); //create a controller type Database for db_connection.php
$title = $_POST["title"]; //get user's input from url as parameter

//check if parameter has value or is empty and return a error message.
if(!isset($title) or empty($title)){
	echo "Δεν έχετε επιλέξει τίτλο βιβλίου!";
	exit;
} ;

//sql query that return book which title is the same as user's selected
$query = "SELECT * FROM books WHERE title='".$title."'";

$conn = $db->db_connections(); //call db_connections() for connection to database and save it in a variable
$results = $db->data_selection($conn,$query); //call data_selection() that get as parameter a connection and a query
												//and execute query for the required data.
$db->db_disconnection($conn); //call db_disconnections() to close connection with database.


return $title; //return the results from the db to client controller for use.

?>