<?php
class Books{

	private $books;
	
	//return Books data to controller in JSON format.
	public function getBooks()
	{
		return $this->JSONStringOutput($this->books);
	}

	//set books data from database
	public function setBooks($books)
	{
		$this->books=$books;
	}

	//convert data array from database to JSON and return it.
	public function JSONStringOutput($results)
	{
    	echo '{"books":'.json_encode($results, JSON_UNESCAPED_UNICODE).'}';
	}
}

?>