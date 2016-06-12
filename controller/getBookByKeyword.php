<?php

require_once 'db_connection.php';

$db = new Database();
$keyword = $_POST["keyword"];


if(!isset($keyword) or empty($keyword)){
	echo "Δεν έχετε εισάγει λέξη αναζήτησης";
	exit;
} ;

$query = "SELECT * FROM books 
		  WHERE  author LIKE '%".$keyword."%' 
		  OR title LIKE '%".$keyword."%' 
		  OR genre LIKE '%".$keyword."%' 
		  OR description LIKE '%".$keyword."%'";

$conn = $db->db_connections();
$results = $db->data_selection($conn,$query);
$db->db_disconnection($conn);


return $keyword;



?>