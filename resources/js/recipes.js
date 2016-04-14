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
            recipes._add_recipe(item,ul)
        });
    },

    _add_recipe: function(name, ul){
        var li = document.createElement("li");
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);

    }
};