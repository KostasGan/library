<?php

class Database{
	public function db_connections()
	{
		$serverName='localhost';
		$username='root';
		$password='';
		$dbname= 'test1';

		$conn = new mysqli($serverName,$username,$password,$dbname);

		if(mysqli_connect_errno()){
			printf("Connect failed: %s\n", mysqli_connect_error());
			exit();
		}
		return $conn;
	}

	public function data_selection($conn,$query)
	{
		$results= $conn->query($query) or die("Error in data selection". mysql_error($conn));
		return "all good";
		if(mysql_num_rows($results) > 0 ){

			/*$emparray = array();
    		while($row =mysqli_fetch_assoc($result))
    		{
        		$emparray[] = $row;
    		}
    		return "Data:" . json_encode($emparray);*/
    		return $results;
    	}
    	return "yolo";

	}

	public function db_disconnection($conn)
	{
		$conn->close();

	}

}

?>