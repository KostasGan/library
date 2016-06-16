
//GetAllTitles used to get all availables books titles from server
function getAllTitles(){
	var url = "../../controller/getAllTitles.php"; //define url for server 
													//file which send the books title 

	//Define a new XMLHttpRequest.The XMLHttpRequest object is used to exchange data 
	//with a server behind the scenes												
	var http = new XMLHttpRequest(); 

	//Asychronous callback function that triggered every time ready state change.
	//readyState == 4 -> request finished and response is ready
	//status == 200 -> server response "OK"
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			//check  server respone books titles and If not alert a error message and break function
			if(http.responseText.length == 0 || http.responseText === ""){
				alert('Δεν βρέθηκαν διαθέσιμοι τίτλοι βίβλιων');
				return;
			}
			//server sent titles as json encode response so parse JSON data to Object
			var titles = JSON.parse(http.responseText);
			
			//Function in 'controller.js' that add titles in a select.
			addSelectOptions(titles);
		}
	}
	http.open("GET",url,true); //Open a asychronous("true" value define this)request to server url with GET 
	http.send(); //send the request to server
}

//GetBooksByTitles used to get all availables books from server by books title
function getBookByTitle(){
	var url  = "../../controller/getBookByTitles.php"; //define url for server 
													   //file which send the books title

	var select = document.getElementById("selectbytitle"); //Find <select> that contains books titles
	var bookTitle = select.options[select.selectedIndex].text; //Get the selected Value

	//Define a new XMLHttpRequest.The XMLHttpRequest object is used to exchange data 
	//with a server behind the scenes	
	var http = new XMLHttpRequest();


	//Asychronous callback function that triggered every time ready state change.
	//readyState == 4 -> request finished and response is ready
	//status == 200 -> server response "OK"
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {

			//check if server respone books by title and If not alert a error message and break function
			if(http.responseText.length == 0 || http.responseText === ""){
				alert('Δεν βρέθηκε αποτέλεσμα βάση κριτιρίου αναζήτησης');
				return;
			}
			//server sent book's info as json encode response so parse JSON data to Object
			var books= JSON.parse(http.responseText);
			console.log(books);

			//function in 'controller.js'. Clean book's list from old results
			EmptyBooksList(); 

			//Function in 'controller.js' that get an object and print it in site.
			BooksInfoView(books);
		}
	}
	
	http.open("POST",url,true); //Open a asychronous("true" value define this)request to server url with POST
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Define necessary headers for server.
	http.send("title="+bookTitle); //send user's selected book title as parameter to server.
}

//GetBooksByKeyword used to get all availables books from server for each keyword that user insert.
function getBookByKeyword(keyword){

	//check user input if is empty and inform him to insert letter,numbers or symbols and break
	if(keyword===""){
		var books_div = document.getElementById('books').style.display="none"; //hide books view when there arent results.
		//alert("Εισάγετε κάποιο γράμμα για να ξεκινήσετε την αναζήτηση");
		return;
	}

	var url  = "../../controller/getBookByKeyword.php"; //define url for server 
													   //file which send the books title

	//Define a new XMLHttpRequest.The XMLHttpRequest object is used to exchange data 
	//with a server behind the scenes											   
	var http = new XMLHttpRequest();

	//Asychronous callback function that triggered every time ready state change.
	//readyState == 4 -> request finished and response is ready
	//status == 200 -> server response "OK"
	http.onreadystatechange = function(){
		if(http.readyState == 4 && http.status == 200) {
			//check if server respone books by keyword and If not alert a error message,clean book list and break function
			if(http.responseText.length == 0 || http.responseText === "" ){
				var books_div = document.getElementById('books').style.display="none"; //hide books view when there arent results.
				alert('Δεν βρέθηκαν αποτελέσματα βάση λέξης κλειδίου αναζήτησης'); 
				return;
			}
			//server sent book's info as json encode response so parse JSON data to Object
			var books = JSON.parse(http.responseText);

			//function in 'controller.js'. Clean book's list from old results
			EmptyBooksList(); 

			//Function in 'controller.js' that get an object and print it in site.
			BooksInfoView(books);
		}
	}
	
	http.open("POST",url,true); //Open a asychronous("true" value define this)request to server url with POST
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Define necessary headers for server.
	http.send("keyword="+keyword.trim()); // send user's keyword without spaces as parameter to server
}