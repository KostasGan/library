<?php

private $serverName='localhost';
private $username='root';
private $password='';


$conn = new mysqli($serverName,$username,$password);

if(mysqli_connect_errno()){
	printf("Connect failed: %s\n", mysqli_connect_error());
	exit();
}

echo "Connection established";

$conn->close();
?>