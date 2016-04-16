/**
 * Created by carlos on 16/04/16.
 */
var kitchen = {
    init: function()
    {
        kitchen._add_initial_items();
    },

    items: {
        "Bananas": {name: "Banana", quantity: 2},
        "Cookies": {name: "Cookies", quantity: 3},
        "Lettuce": {name: "Lettuce", quantity: 4},
        "Eggs": {name: "Eggs", quantity: 5}
    },

    _add_initial_items: function() {
        Object.keys(kitchen.items).map(function(item) {
            var context = kitchen.items[item];
            kitchen._add_item_li(context);
        });
    },

    _add_item_li:function(context){
        template.get_template('resources/templates/kitchen_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#kitchen_list').append(html_string);
        });
    },

    add_item: function(name, quantity) {
        var context = {name: name, quantity: quantity};
        kitchen.items[context.name] = context;
        kitchen._add_item_li(context);
    },

    delete_item: function(name) {
        safedelete.protect("#itemDelete-" + name, function(){
            delete kitchen.items[name];
            $("#" + name).remove();
        });

    }

};