function getAllTitles(){
	var url = "../../controller/getAllTitles.php";

	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			if(http.responseText.length == 0){
				alert('Δεν βρέθηκαν αποτελέσματα!');
				return;
			}

			var obj = JSON.parse(http.responseText);
			
			addSelectOptions(obj);

		}
	}
	http.open("GET",url,true);
	http.send();
}

function getBookByTitle(){
	var url  = "../../controller/getBookByTitles.php";
	var select = document.getElementById("selectbytitle");
	var bookTitle = select.options[select.selectedIndex].text;

	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			if(http.responseText.length == 0){
				alert('Δεν βρέθηκαν αποτελέσματα!');
				return;
			}

			var obj = JSON.parse(http.responseText);
			console.log(obj);
			
			//addSelectOptions(obj);

		}
	}
	http.open("GET",url+'?title='+bookTitle,true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send();


}