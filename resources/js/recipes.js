var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();

    },

    _add_initial_recipes: function()
    {
        var items = ["Cupcakes", "Cookies", "Sushi", "Apple Pie"];
        var ul = document.getElementById("recipes_list");
        items.map(function(item){
            //recipes._add_recipe(item,ul)

            var context = {name: item};
            recipes._recipe_ul(context);
        });
    },

    _add_recipe: function(name, ul){
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);

    },

    _recipe_ul:function(context){
        template.get_template('resources/templates/recipe_ul.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            var ul = $('<div/>').html(html_string).contents();
            console.log(html_string);
            $('.recipes_list').append(ul);
        });

    },






};