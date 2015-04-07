$(document).ready(function () {
    // Get data from file as JSON
    $.getJSON('json/Recipes.json', function (data) {

    	var opt = "";
    	if (data.length === 0) $("#order-list").append("<div class='orderDiv'><p id='no-result'>No results</p></div>");

    	else {
    		$.each(data.Recipes, function (key, recipe) {
    			console.log(recipe.recipeName);
    			opt += '<ul style="list-style-type:none"><li><button class="btn btn-default btn-lg"' +
    			'"value="' + recipe.recipeName +
    			'">' + recipe.recipeName +
    			'</button></li></ul>';
    			$("#order-list").html(opt);
    		});
    	}

    });

});