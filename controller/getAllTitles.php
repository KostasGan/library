<?php
require 'db_connection.php';

$db = new Database();
$query = "SELECT id, title FROM books";


$conn = $db->db_connections();
$results = $db->data_selection($conn,$query);
$db->db_disconnection($conn);

/*if($results === 0 ){
	return false;
}*/
echo $results;

?>