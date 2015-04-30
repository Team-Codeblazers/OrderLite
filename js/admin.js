var background;
//var myBackgroundElements;

$(document).ready(function(){
	loadStyles();
})

$(document).ready(function(){
  console.log("admin page loading");
});

$("#submit-admin").click(function(){
	// background
	if(document.getElementById('bg-color').value === "default")
		background = "#f6f6f6";
	else
		background = document.getElementById('bg-color').value;
	//myBackgroundElements = document.querySelectorAll("body","html");
	localStorage.setItem("bgColor", background);
	//localStorage.setItem("bgElements", myBackgroundElements);
	loadStyles();
});

function loadStyles(){
	// background
	background = localStorage.getItem("bgColor");
	console.log("Background color is " + background);
	var myBackgroundElements = document.querySelectorAll("body","html");

	for(var i = 0; i < myBackgroundElements.length; i++){
		myBackgroundElements[i].style.backgroundColor = background;
	}

}