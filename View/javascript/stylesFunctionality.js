//Functionality that open/hide search options depend users first selection, searc by title or by keyword
function onSearchOptionChange(){
	var elem = document.getElementById("search-selection");
	var book_viw = document.getElementById("books");
	var userOption = elem.options[elem.selectedIndex].value;

	//if users selection is 'search by title' open corresponding search field and close book_view.
	if(userOption === 'title'){
		document.getElementById("formForKeyword").style.display="none";
		document.getElementById("TitleSelection").style.display="block";
		document.getElementById("books").style.display="none";
	}
	else{
		document.getElementById("formForKeyword").style.display="block";
		document.getElementById("TitleSelection").style.display="none";
		document.getElementById("books").style.display="none";
	}
}

//Functionality that get a book's titles object and insert them to a <select> for user's selection
function addSelectOptions(obj){
	var select = document.getElementById('selectbytitle'); //find <select> which will contain titles.
	
	select.options[0].disabled=true; // disable empty option of <select> so user cannot select it.

	for(i=0; i<obj.books.length; i++){

		var option =document.createElement('option'); //create a new option for each book title.
		option.text= obj.books[i].title; // add book title as option's text
		select.add(option);	//add the available option to <select>
	}
}


//A function that get a book object,create elements and print books info to frontend.html
function BooksInfoView(books) {
	var text = "";

	EmptyBooksList(); //make a second books clean up before new result print

	var books_div = document.getElementById('books'); //find element for books
	
	books_div.style.display='block'; //make the element visible


	//create books as many as the length of books that function get as parameter.
	for (i=0; i<books.books.length; i++) {
		var new_book= document.createElement('div');
		new_book.setAttribute('id',i);

		var img =document.createElement('img');
		img.setAttribute('src', '../assets/book.jpg');
		img.setAttribute('class','book_img');

		var title = document.createElement('h1');
		title.setAttribute('class','book_title');
		text = document.createTextNode(books.books[i].title);
		title.appendChild(text);

		var author = document.createElement('p');
		author.setAttribute('class','book_author');
		text = document.createTextNode('Συγγραφέας: ' + books.books[i].author + " / " + books.books[i].publish_date);
		author.appendChild(text);

		var price = document.createElement('p');
		price.setAttribute('class','book_price');
		text = document.createTextNode("Τιμή: " + books.books[i].price  + '\u20AC');
		price.appendChild(text);

		var genre = document.createElement('p');
		genre.setAttribute('class','book_genre');
		text = document.createTextNode("Είδος Βιβλίου:  " + books.books[i].genre);
		genre.appendChild(text);

		var description = document.createElement('p');
		description.setAttribute('class','book_description');
		text = document.createTextNode("Περιγραφή:  "+books.books[i].description);
		description.appendChild(text);

		var hr= document.createElement('hr');

		new_book.appendChild(img);
		new_book.appendChild(title);
		new_book.appendChild(author);
		new_book.appendChild(genre);
		new_book.appendChild(description);
		new_book.appendChild(price);
		new_book.appendChild(hr);

		books_div.appendChild(new_book);
	};

}
//Functionality that clean book's info view from previous results.
function EmptyBooksList() {
	var books_div = document.getElementById('books'); // find element that contains results

	//check if has available result and remove them.
	if (books_div.hasChildNodes()) {
		if (books_div.childNodes.length >= 1 ){
			for(var j=0; j<books_div.childNodes.length; j++){
				books_div.removeChild(books_div.childNodes[j]);
			}
		}		
	}
}
