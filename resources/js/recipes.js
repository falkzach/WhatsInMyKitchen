var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();
    },

    recipes: {
        "Cupcakes": {name: "Cupcakes", available: true},
        "Cookies": {name: "Cookies", available: false},
        "Sushi": {name: "Sushi", available: true},
        "Apple Pie": {name: "Apple Pie", available: true}
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

    add_recipe: function(name, available) {
        var context = {name: name, available: available};
        recipes.recipes[context.name] = context;
        recipes._add_recipe_li(context);
    },

    delete_recipe: function(name) {
        safedelete.protect("#recipeDelete-" + name, function(){
            delete recipes.recipes[name];
            $("#" + name).remove();
        });

    },

    delete_all_recipes: function() {
        for(var r in recipes.recipes)
        {
            delete recipes.recipes[r.toString()];
            $("#" + r.toString()).remove();
        }
    }

};
