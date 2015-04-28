// counter for items in cart
//XAMPP
var rootURL = "../../OrderLite/api/index.php";
//MAMP
//var rootURL = "http://localhost:8888/OrderLite/api/index.php";


$(document).ready(function(){
  console.log("page loaded");
});

$("#create-order").click(function(){
	document.location.href = "order.html";
});
