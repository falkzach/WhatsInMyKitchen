var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();
    },

    recipes: {
        "Cupcakes": {name: "Cupcakes", available: true},
        "Cookies": {name: "Cookies", available: false},
        "Sushi": {name: "Sushi", available: true},
        "Apple_Pie": {name: "Apple_Pie", available: true}
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
    }

};
