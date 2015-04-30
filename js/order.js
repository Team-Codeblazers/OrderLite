var items = 0;
var entireOrder = [];

// window.onload = function () {
// console.log("orders loading");
// load();
// };

function load() {
    loadOptions();
}

function loadOptions(){
    $(".resultDiv").remove();
    entireOrder = [];

    // Get data from file as JSON
    $.getJSON('json/Recipes.json', function (data) {

        if (data.length === 0) 
            $("#order-list").append("<div class='resultDiv'><p id='no-result'>No results</p></div>");

        else {
            $.each(data.Recipes, function (key, recipe) {
                var ingr = "";
                if($("#recipe"+recipe.recipeID).has("recipeID").length === 0){
                    var add = "<div id='recipe"+recipe.recipeID+"' class='resultDiv'><img class='orderPicture' src='"+recipe.picture+"' id='picture"+recipe.recipeID+"' alt='picture"+recipe.recipeID+"'><ul class='resultList'></ul></div>";

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
        // remove empty notice for cart
        $("#empty").empty();
        // increase item counter
        ++items;

        // find id of recipe being added
        r = $(this).context.id;
        r = r.replace(/\D/g,'');
        $.getJSON('json/Recipes.json', function (data) {
            var d = data.Recipes;
            // add item to array of order items
            var current = {"recipeID": r, "recipeName": d[r-1].recipeName, "ingredients": d[r-1].ingredients, "price": d[r-1].price};
            entireOrder[items-1] = current;
            console.log(entireOrder[items-1]);
            // populate order cart
            var add = "<div id='recipe"+r+"' class='cartDiv'>"+
            "<ul class='cartList'>"+
                "<li><b>"+r+". "+d[r-1].recipeName+"</b></li><li class='.price'><b>Price:</b> $"+d[r-1].price.toFixed(2)+"</li>"+
            "</ul>"+
            "</div>";

        $("#cart").append(add);

        addCartListeners();
        });
    }); 

    // next button
    $("#next").click(function(){
        console.log(items);
        // accounting for h3 title
        if (items === 0 && $("#empty").length > 0){
            $("#empty").append("<p>Your cart is empty!</p>");
        }

        else {
            alert("Now we're cookin'.");
        }
    })
}

function addCartListeners(){
    // hover and action for each cart item
    $(".cartDiv").hover(function(){
        $(this).css("background-color","#E5E5E3");
    }, function(){
        $(this).css("background-color","white");
    });

    // click to remove from cart
    $(".cartDiv").off("click").on("click", function(){
        $(this).remove();
        --items;
        entireOrder.splice(items);
        //console.log(entireOrder[items-1]["recipeName"]);
    });
}