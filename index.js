/*
 * OrderLite Prototype
*/

// this array will have its values changed to match order names
var sButtons = ["row 1 column 1",
                "row 1 column 2",
                "row 1 column 3",
                "row 2 column 1",
                "row 2 column 2",
                "row 2 column 3",
                "row 3 column 1",
                "row 3 column 2",
                "row 3 column 3"]

// function to add a timer based on button index;
function addTimer(iButton) {
  $("#timers").append("<div id=\"tOrder\"><h3>" + sButtons[iButton] + "</div>");
}

// close listener for dynamic html elements
$("body").on("click", "#tOrder", function() {
  $(this).remove();
});

/* First Row Of Order Buttons */
// Row 1 Column 1
$("#r1c1").click(function() {
  addTimer(0);
});
// Row 1 Column 2
$("#r1c2").click(function() {
  addTimer(1);
});
// Row 1 Column 3
$("#r1c3").click(function() {
  addTimer(2);
});
/* Second Row Of Order Buttons */
// Row 2 Column 1
$("#r2c1").click(function() {
  addTimer(3);
});
// Row 2 Column 2
$("#r2c2").click(function() {
  addTimer(4);
});
// Row 2 Column 3
$("#r2c3").click(function() {
  addTimer(5);
});
/* Third Row Of Order Buttons */
// Row 3 Column 1
$("#r3c1").click(function() {
  addTimer(6);
});
// Row 3 Column 2
$("#r3c2").click(function() {
  addTimer(7);
});
// Row 3 Column 3
$("#r3c3").click(function() {
  addTimer(8);
});
