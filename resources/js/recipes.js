var recipes = {
    init: function()
    {
        recipes._add_initial_recipes();
    },

    _add_initial_recipes:function()
    {
        var ul = document.getElementById("recipes_list");
        recipes._add_recipe("Cupcakes", ul);
        recipes._add_recipe("Cookies", ul);
        recipes._add_recipe("Sushi", ul);
        recipes._add_recipe("Apple Pie", ul);
    },

    _add_recipe:function(name, ul){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(name));
        ul.appendChild(li);

    }
};