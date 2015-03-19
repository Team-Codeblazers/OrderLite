/*
 * OrderLite Prototype
*/

// number of timers
var iTimers = 0;

// this array will have its values changed to match order names
var sButtons = ["r1c1 default", "r1c2 default", "r1c3 default",
                "r2c1 default", "r2c2 default", "r2c3 default",
                "r3c1 default", "r3c2 default", "r3c3 default"]

// print names of orders in their boxes at startup
$(document).ready(function(){
  printOrders();
});

// print names of order in their boxes
function printOrders() {
  for (var i = 0; i < 9; i++) {
    $("#o" + i + " h3").text(sButtons[i]);
  }
}

// function to add a timer based on button index;
function addTimer(iButton) {
  $("#timers").append("<div id=\"tOrder\"><h3>" + sButtons[iButton] + ", Timer: <span id=\"timer" + iTimers + "\"></span></div>");

  var d = new Date();
  $('#timer' + iTimers).tinyTimer({ from: d, format: '%0m:%0s' });
  iTimers = iTimers + 1;
}

// prevents submit from reloading page
$("form").submit(function(e) {
    e.preventDefault();
});

// addOrder button listener
$("#addOrder").click(function() {
  sButtons[$("#oPos").val()] = $("#oName").val();
  printOrders();
})

// close listener for dynamic html elements
$("body").on("click", "#tOrder", function() {
  $(this).remove();
  iTimers = iTimers - 1;
});

/* First Row Of Order Buttons */
// Row 1 Column 1
$("#o0").click(function() {
  addTimer(0);
});
// Row 1 Column 2
$("#o1").click(function() {
  addTimer(1);
});
// Row 1 Column 3
$("#o2").click(function() {
  addTimer(2);
});
/* Second Row Of Order Buttons */
// Row 2 Column 1
$("#o3").click(function() {
  addTimer(3);
});
// Row 2 Column 2
$("#o4").click(function() {
  addTimer(4);
});
// Row 2 Column 3
$("#o5").click(function() {
  addTimer(5);
});
/* Third Row Of Order Buttons */
// Row 3 Column 1
$("#o6").click(function() {
  addTimer(6);
});
// Row 3 Column 2
$("#o7").click(function() {
  addTimer(7);
});
// Row 3 Column 3
$("#o8").click(function() {
  addTimer(8);
});
