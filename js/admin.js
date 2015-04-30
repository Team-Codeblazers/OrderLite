var background;
//var myBackgroundElements;

$(document).ready(function(){
	loadStyles();
})

$(document).ready(function(){
  console.log("admin page loading");
});

$("#submit-admin").off("click").on("click",function(){
	// background
	if(document.getElementById('bg-color').value === "default")
		background = "#f6f6f6";
	else
		background = document.getElementById('bg-color').value;
	//myBackgroundElements = document.querySelectorAll("body","html");
	localStorage.setItem("bgColor", background);
	//localStorage.setItem("bgElements", myBackgroundElements);
	loadStyles();

	// add to menu
	var myItem = {};
	var rLength;
	myItem["recipeID"] = document.getElementById('itemID').value;
	myItem["recipeName"] = document.getElementById('itemName').value;
	myItem["description"] = document.getElementById('itemDescr').value;
	myItem["ingredients"] = document.getElementById('itemIngr').value;
	myItem["picture"] = document.getElementById('itemPic').value;
	myItem["calories"] = document.getElementById('itemCal').value;
	myItem["price"] = document.getElementById('itemPrice').value;

	if( myItem["recipeID"] !== null && myItem["recipeName"] !== null && myItem["description"] !== null && myItem["ingredients"] !== null && myItem["picture"] !== null && myItem["calories"] !== null && myItem["price"] !== null){
		var json = JSON.stringify(myItem);
		$.post("json/Recipes.json", json, function(returnedData) {
			alert("added (in my dreams)");		
		});
	}
	else if(myItem.length > 1) {
		alert("All item fields must be entered to add item to menu. Otherwise, leave all fields blank.");
	}

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