<?php

class Database{
	public function db_connections()
	{
		$serverName='localhost';
		$username='root';
		$password='';
		$dbname= 'test';

		$conn = new mysqli($serverName,$username,$password,$dbname);

		if($conn->connect_errno){
			printf("Connect failed: %s\n", $conn->connect_errno);
			exit();
		}

		$conn->set_charset("utf8");

		return $conn;
	}

	public function data_selection($conn,$query)
	{
		$results= mysqli_query($conn,$query) or die("Error in data selection ". $conn->connect_errno);	
 
		if($results->num_rows > 0 ){
			require_once '../model/books.php';

			$model = new Model();

			$books = $model->JSONStringOutput($results);
    	}
	}

	public function db_disconnection($conn)
	{
		$conn->close();

	}
}

?>