<?php

class Database{
	//function that make a connection with database
	public function db_connections()
	{
		//database parameter for connection
		$serverName='localhost';
		$username='root';
		$password='';
		$dbname= 'test';

		$conn = new mysqli($serverName,$username,$password,$dbname); //try establish a new connection

		//if connection fail return a error to user.
		if($conn->connect_errno){
			printf("Connect failed: %s\n", $conn->connect_errno);
			exit();
		}

		//set connection charset to UTF-8 
		$conn->set_charset("utf8");

		return $conn; //return a connection to database
	}

	public function data_selection($conn,$query)
	{
		//execute the query. If request fail then return error message to user
		$results= mysqli_query($conn,$query) or die("Error in data selection ". $conn->connect_errno);	
 		
 		//if results contais data and they arent empty then make a book model and convert db data to JSON
		if($results->num_rows > 0 ){
			require_once '../model/books.php';

			$model = new Model(); // create a new book model

			$books = $model->JSONStringOutput($results); //get a parameter data object from database and convert them to JSON
    	}
	}

	//function that get a db connection variable and close db connection
	public function db_disconnection($conn)
	{
		$conn->close();

	}
}

?>