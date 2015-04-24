$(document).ready(function () {
    load();
});

function load() {
    loadOptions();
}

function loadOptions(){
    $(".resultDiv").remove();

    // Get data from file as JSON
    $.getJSON('json/Recipes.json', function (data) {

        if (data.length === 0) 
            $("#order-list").append("<div class='resultDiv'><p id='no-result'>No results</p></div>");

        else {
            $.each(data.Recipes, function (key, recipe) {
                var ingr = "";
                if($("#recipe"+recipe.recipeID).has("recipeID").length === 0){
                    var add = "<div id='recipe"+recipe.recipeID+"' class='resultDiv'><img class='orderPicture' src='img/recipes/"+recipe.recipeID+".jpeg' id='picture"+recipe.recipeID+"' alt='picture"+recipe.recipeID+"'><ul class='resultList'></ul></div>";

                    $("#order-list").append(add);

                    console.log(recipe.recipeName);
                    $.each(recipe.ingredients, function(key, ingredient) {
                        ingr += ingredient + ', ';           
                    });

                    ingr = ingr.replace(/,\s*$/, "");
                    $("#recipe"+recipe.recipeID+">ul").append("<li><h5 class='name'><b>"+recipe.recipeID+". "+recipe.recipeName+"</b></h5></li><li class='description'>\""+recipe.description+"\"</li><li class='ingredientList'><b>Ingredients:</b> "+ingr+"</li><li class='.price'><b>Price:</b> $"+recipe.price.toFixed(2)+"</li>");

                }

                var divs = $(".resultDiv");
                var maxHeight = 0;

                $.each(divs, function(){
                    var thisHeight = $(this).height();
                    if ( thisHeight > maxHeight){
                      maxHeight = thisHeight;
                    }
                });

                $.each(divs, function(){
                    $(this).height(maxHeight);
                });
            });

        }
        addListeners();
    });
}

function addListeners(){
    // hover and action for each recipe item
    $(".resultDiv").hover(function(){
        $(this).css("background-color","#E5E5E3");
    }, function(){
        $(this).css("background-color","white");
    });

    // click to add to cart
    $(".resultDiv").off("click").on("click", function(){
        // find id of recipe being added
        r = $(this).context.id;
        r = r.replace(/\D/g,'');
        $.getJSON('json/Recipes.json', function (data) {
            var d = data.Recipes;
            var add = "<div id='recipe"+r+"' class='cartDiv'>"+
            "<ul class='cartList'>"+
                "<li><b>"+r+". "+d[r-1].recipeName+"</b></li><li class='.price'><b>Price:</b> $"+d[r-1].price.toFixed(2)+"</li>"+
            "</ul>"+
            "</div>";

        $("#cart").append(add);

        addCartListeners();
        });
    }); 

    // home button
    $("#home").click(function(){
        if(window.location.pathname === "/orderlite/order.html") {
            var r = confirm("Are you sure you want to leave?");
            if (r === true)
                window.location.href = "index.html";
        }
        else
            window.location = "index.html";
    });
}

function addCartListeners(){
    // hover and action for each cart item
    $(".cartDiv").hover(function(){
        $(this).css("background-color","#E5E5E3");
    }, function(){
        $(this).css("background-color","white");
    });

    $(".cartDiv").off("click").on("click", function(){
        $(this).remove();
        // FIX THIS
        // freeze 'next' button if nothing is in cart
        console.log($("#cart").length);
        if($("#cart").length === 0)
            $("#next").addClass("disabled");
    });
}