$(document).ready(function(){
  //console.log("page loaded");
});

// home button
$("#home").click(function(){
    if(window.location.pathname === "/orderlite/order.html") {
        var r = confirm("Are you sure you want to leave?");
        if (r === true){

            window.location.href = "index.html";
        }
    }
    else
        window.location = "index.html";
});

// create order
$("#create-order").click(function(){
	document.location.href = "order.html";
});

// admin portal
$("#admin").click(function(){
	document.location.href = "adminPortal.html";
});

