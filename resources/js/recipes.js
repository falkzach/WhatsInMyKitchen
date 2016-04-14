var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();
    },

    _add_initial_recipes: function() {
        var items = ["Cupcakes", "Cookies", "Sushi", "Apple Pie"];
        items.map(function(item){
            var context = {name: item};
            recipes._add_recipe_li(context);
        });
    },

    _add_recipe_li:function(context){
        template.get_template('resources/templates/recipe_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#recipes_list').append(html_string);
        });
    },

    add_recipe: function(name) {
        var context = {name: name};
        recipes._add_recipe_li(context);
    }

};
