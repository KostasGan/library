<?php
require_once 'db_connection.php'; 

$db = new Database(); // create a controller type Database for db_connection.php
$query = "SELECT id, title FROM books"; //sql query for get id,titles of all books in database


$conn = $db->db_connections(); //call db_connections() for connection to database and save it in a variable
$results = $db->data_selection($conn,$query); // call data_selection() that get as parameter a connection and a query
												//and execute query for the required data.
$db->db_disconnection($conn); //call db_disconnections() to close connection with database.

return $results; //return the results from the db to client controller for use.

?>