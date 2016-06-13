function getAllTitles(){
	var url = "../../controller/getAllTitles.php";

	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			if(http.responseText.length == 0 || http.responseText === ""){
				alert('Δεν βρέθηκαν διαθέσιμοι τίτλοι βίβλιων');
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

			if(http.responseText.length == 0 || http.responseText === ""){
				alert('Δεν βρέθηκε αποτέλεσμα βάση κριτιρίου αναζήτησης');
				return;
			}

			var obj = JSON.parse(http.responseText);
			console.log(obj);
			
			BookPresentation(obj);

		}
	}
	
	http.open("POST",url,true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send("title="+bookTitle);
}

function getBookByKeyword(keyword){

	if(!keyword.trim()){
		alert("Εισάγετε κάποιο γράμμα για να ξεκινήσετε την αναζήτηση");
		return;
	}

	var url  = "../../controller/getBookByKeyword.php";

	var http = new XMLHttpRequest();

	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			if(http.responseText.length == 0 || http.responseText === "" ){
				alert('Δεν βρέθηκαν αποτελέσματα βάση λέξης κλειδίου αναζήτησης');
				return;
			}

			var obj = JSON.parse(http.responseText);
			console.log(obj);
			
			BookPresentation(obj);
		}
	}
	
	http.open("POST",url,true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send("keyword="+keyword.trim());
}