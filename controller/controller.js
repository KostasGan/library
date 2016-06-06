function test () {
	var url = "../../model/db_connection.php";

	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			console.log(http.responseText);
		}
	}
	
	http.open("GET",url,true);
	http.send();
}