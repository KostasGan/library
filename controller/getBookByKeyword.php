<?php

require_once 'db_connection.php';

$db = new Database(); // create a controller type Database for db_connection.php
$keyword = $_POST["keyword"]; //get user's input from url as parameter

//check if parameter has value or is empty and return a error message.
if(!isset($keyword) or empty($keyword)){
	echo "Δεν έχετε εισάγει λέξη αναζήτησης";
	exit;
} ;

//sql query that return books which author,title,genre,description contains the user's input.
$query = "SELECT * FROM books 
		  WHERE  author LIKE '%".$keyword."%' 
		  OR title LIKE '%".$keyword."%' 
		  OR genre LIKE '%".$keyword."%' 
		  OR description LIKE '%".$keyword."%'";

$conn = $db->db_connections(); //call db_connections() for connection to database and save it in a variable
$results = $db->data_selection($conn,$query); //call data_selection() that get as parameter a connection and a query
												//and execute query for the required data.
$db->db_disconnection($conn); //call db_disconnections() to close connection with database.


return $keyword; //return the results from the db to client controller for use.

?>