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
	// body...
}
