function onSelectionChange(){
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