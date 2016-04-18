/**
 * Created by carlos on 16/04/16.
 */
var kitchen = {
    init: function()
    {
        kitchen._add_initial_items();
    },

    items: {
        "Bananas": {name: "Bananas", quantity: 2, unit: ""},
        "Cookies": {name: "Cookies", quantity: 3, unit: "Units"},
        "Lettuce": {name: "Lettuce", quantity: 4, unit: "Grams"},
        "Eggs": {name: "Eggs", quantity: 5, unit: "Units"}
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

    add_item: function(name, quantity, unit) {
        var context = {name: name, quantity: quantity, unit: unit};
        kitchen.items[context.name] = context;
        kitchen._add_item_li(context);
    },

    delete_item: function(name) {
        safedelete.protect("#itemDelete-" + name, function(){
            delete kitchen.items[name];
            $("#" + name).remove();
        });

    },

    change_quantity: function(name, newQ) {
        kitchen.items[name].quantity = newQ;
        $("#kitchenList" + name + "quantity").html(newQ);
    }

};

function sumQuantity(quantity, sum) {
    return parseInt(quantity, 10) + parseInt(sum, 10);
}