$(document).ready(function () {
	load();
});

function load() {
	loadOptions();
	//addListeners();
}

function loadOptions(){
    // Get data from file as JSON
    $.getJSON('json/Recipes.json', function (data) {

    	var ingr = "";
    	if (data.length === 0) 
            $("#order-list").append("<div class='resultDiv'><p id='no-result'>No results</p></div>");

        else {
            $.each(data.Recipes, function (key, recipe) {
                if($("#recipe"+recipe.recipeID).has("recipeID").length === 0){
                    var add = "<div id='recipe"+recipe.recipeID+"' class='resultDiv'><ul class='resultList'><h5 class='name'>"+recipe.recipeName+"</h5></ul></div>";

                    $("#order-list").append(add);

                    console.log(recipe.recipeName);
                    $.each(recipe.ingredients, function(key, ingredient) {
                        ingr += ingredient + ', ';           
                    });

                    ingr = ingr.replace(/,\s*$/, "");
                    $("#recipe"+recipe.recipeID+">ul").append("<li class='.ingredientList'>Ingredients: "+ingr+"</li><li class='.price'>Price: "+recipe.price.toFixed(2)+"</li>");
    			// opt += '<ul class ="recipes-ul" style="list-style-type:none"><li><button class="btn btn-default btn-lg"' +
    			// '"value="' + recipe.recipeName +
    			// '">' + recipe.recipeName +
    			// '</button></li><li><p>Ingredients: ';
    			// $.each(recipe.ingredients, function(key, ingredient) {
    			// 	opt += ingredient + ', ';			
    			// });
    			// opt = opt.replace(/,\s*$/, "");
    			// opt += '</p></li><li><p>Price: $' +
    			// recipe.price.toFixed(2) +
    			// '</p></li></ul>';
                //$("#order-list").html(opt);
                }
            });
        }
    });
}

function addListeners(){
  $(".orderDiv").hover(function(){
    $(this).css("background-color","grey");
}, function(){
    $(this).css("background-color","white");

});

  $("#home").button().off("click").on("click",function(){
    window.location = "index.html";
});
}
