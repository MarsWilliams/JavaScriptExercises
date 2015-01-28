window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "http://placehold.it/350x150");
	placeholder.setAttribute("alt", "xoffee");
	var para = document.createElement("p");
	para.setAttribute("id", "description");
	var description = document.createTextNode("hello");
	para.appendChild(description);
	testdiv.parentNode.insertBefore(para, testdiv);
	var Benjamin = document.registerElement('benjamin');
	document.body.appendChild(new Benjamin());
};



