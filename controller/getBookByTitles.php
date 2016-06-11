<?php

require_once 'db_connection.php';

$db = new Database();
$title = $_POST["title"];


if(!isset($title) or empty($title)){
	echo "Δεν έχετε επιλέξει τίτλο βιβλίου!";
	exit;
} ;

$query = "SELECT * FROM books WHERE title='".$title."'";

$conn = $db->db_connections();
$results = $db->data_selection($conn,$query);
$db->db_disconnection($conn);


return $title;

?>