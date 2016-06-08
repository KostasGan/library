<?php
require_once 'db_connection.php';

$db = new Database();
$query = "SELECT id, title FROM books";


$conn = $db->db_connections();
$results = $db->data_selection($conn,$query);
$db->db_disconnection($conn);

return $results;

?>