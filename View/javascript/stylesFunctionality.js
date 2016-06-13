function onSearchOptionChange(){
	var elem = document.getElementById("search-selection");
	var userOption = elem.options[elem.selectedIndex].value;

	if(userOption === 'title'){
		document.getElementById("formForKeyword").style.display="none";
		document.getElementById("TitleSelection").style.display="block";
	}
	else{
		document.getElementById("formForKeyword").style.display="block";
		document.getElementById("TitleSelection").style.display="none";
	}
}

function addSelectOptions(obj){
	var select = document.getElementById('selectbytitle');
	
	select.options[0].disabled=true;

	for(i=0; i<obj.books.length; i++){

		var option =document.createElement('option');
		option.text= obj.books[i].title;
		select.add(option);
	}
}

function BookPresentation(books) {
	var text = "";
	var books_div = document.getElementById('books');
	books_div.style.display='block';

	if (books_div.hasChildNodes()) {
		if (books_div.childNodes.length == 1 && books.books.length == 1 ) {
			books_div.removeChild(books_div.childNodes[0]);
		}
		else{
			for(j=0; j<books_div.childNodes.length; j++){
				books_div.removeChild(books_div.childNodes[j]);
			}
		}		
	};



	for (i=0; i<books.books.length; i++) {
		var new_book = document.createElement('div');

		var title = document.createElement('h1');
		title.setAttribute('class','book_title');
		text = document.createTextNode(books.books[i].title + " - " + books.books[i].publish_date);
		title.appendChild(text);

		var author = document.createElement('p');
		author.setAttribute('class','book_author');
		text = document.createTextNode("Συγγραφέας: " + books.books[i].author);
		author.appendChild(text);

		var price = document.createElement('p');
		price.setAttribute('class','book_price');
		text = document.createTextNode("Τιμή: " + books.books[i].price + " Euro");
		price.appendChild(text);

		var genre = document.createElement('p');
		genre.setAttribute('class','book_genre');
		text = document.createTextNode("Είδος Βιβλίου: " + books.books[i].genre);
		genre.appendChild(text);

		var description = document.createElement('p');
		description.setAttribute('class','book_description');
		text = document.createTextNode("Περιγραφή: "+books.books[i].description);
		description.appendChild(text);

		new_book.appendChild(title);
		new_book.appendChild(author);
		new_book.appendChild(price);
		new_book.appendChild(genre);
		new_book.appendChild(description);


		books_div.appendChild(new_book);
	};

}
