var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();
    },

    recipes: {
        "Cupcakes": {name: "Cupcakes", available: true, ingredients: "Ingredients to make cupcakes", directions: "Eat cupcakes! Nom nom!"},
        "Cookies": {name: "Cookies", available: false,  ingredients: "Ingredients to make cookies", directions: "Eat cookies! Nom nom!"},
        "Sushi": {name: "Sushi", available: true,  ingredients: "Ingredients to make sushi", directions: "Eat sushi! Nom nom!"},
        "Apple_Pie": {name: "Apple_Pie", available: true,  ingredients: "Ingredients to make apple pie", directions: "Eat apple pie! Nom nom!"}
    },

    _add_initial_recipes: function() {
        Object.keys(recipes.recipes).map(function(item) {
            var context = recipes.recipes[item];
            recipes._add_recipe_li(context);
        });
    },

    _add_recipe_li:function(context){
        template.get_template('resources/templates/recipe_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#recipes_list').append(html_string);
        });
    },

    add_recipe: function(name, available, ingredients, directions) {
    if(name == "")
    {
        console.log("ERROR in add item input: " + name);
        return;
    }
        var context = {name: name, available: available, ingredients: ingredients, directions: directions};
        recipes.recipes[context.name] = context;
        recipes._add_recipe_li(context);
    },

    delete_recipe: function(name) {
        console.log('Deleting recipe: '+ name);
        safedelete.protect("#recipeDelete-" + name, function(){
            delete recipes.recipes[name];
            $("#" + name + "_recipe").remove();
        });

    },

    delete_all_recipes: function() {
        for(var r in recipes.recipes)
        {
            recipes.delete_recipe(r);
            recipes.delete_recipe(r);
        }
        $('#confirm_popup').modal('hide');
    },

    viewRecipe: function(name, ingredients, directions)
    {
        document.getElementById("viewRecipeTitle").innerHTML = name;
        document.getElementById("ingIno").innerHTML = ingredients;
        document.getElementById("dirInfo").innerHTML = directions;
        $('#viewRecipe').modal('show');
    }

};
