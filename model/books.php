<?php
class Model(){

	private $id="";
	private $author="";
	private $title="";
	private $genre="";
	private $price=0;
	private $publish_date="";
	private $description="";

	public function __contruct()
	{
		
	}
	
	public function __contruct($id,$author,$title,$genre,$price,$publish_date,$description)
	{
		$this->id=$id;
		$this->author=$author;
		$this->title=$title;
		$this->genre=$genre;
		$this->price=$price;
		$this->publish_date=$publish_date;
		$this->description=$decription;
	}


	public function getID()
	{
		return $this->id;
	}

	public function getAuthor()
	{
		return $this->author;
	}
	public function getTitle()
	{
		return $this->title;
	}
	public function getGenre()
	{
		return $this->genre;
	}
	public function getPrice()
	{
		return $this->price;
	}
	public function getPublish_Date()
	{
		return $this->publish_date;
	}
	public function getDescription()
	{
		return $this->description;
	}

	public function JSONStringOutput($result)
	{
		$emparray = array();
    	while($row =$results->fetch_assoc())
    	{
        	$emparray[] = $row;
    	}
    	echo '{"books":'.json_encode($emparray, JSON_UNESCAPED_UNICODE).'}';
	}


}

?>