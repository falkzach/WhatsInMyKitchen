/**
 * Created by carlos on 16/04/16.
 */
var kitchen = {
    init: function()
    {
        kitchen._add_initial_items();
        kitchen._add_initial_categories();
    },

    items: {
        "Bananas": {name: "Bananas", quantity: 2, unit: "Units"},
        "Cookies": {name: "Cookies", quantity: 3, unit: "Units"},
        "Lettuce": {name: "Lettuce", quantity: 4, unit: "Grams"},
        "Eggs": {name: "Eggs", quantity: 5, unit: "Units"},
        "Potatoes": {name: "Potatoes", quantity: 1, unit: "Bags"},
        "Milk": {name: "Milk", quantity: 3, unit: "Bottles"},
        "Apples": {name: "Apples", quantity: 3, unit: "Units"}
    },

    categories: {
        "Vegetables": {name: "Vegetables"},
        "Fruits": {name: "Fruits"},
        "Others": {name: "Others"}
    },

    _add_initial_items: function() {
        Object.keys(kitchen.items).map(function(item) {
            var context = kitchen.items[item];
            kitchen._add_item_li(context);
        });
    },

    _add_initial_categories: function() {
        Object.keys(kitchen.categories).map(function(item) {
            var context = kitchen.categories[item];
            kitchen._add_category_li(context);
        });
    },

    _add_item_li:function(context){
        template.get_template('resources/templates/kitchen_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#kitchen_list').append(html_string);
        });
    },

    _add_category_li: function(context){
        template.get_template('resources/templates/kitchen_category_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#kitchen_list').append(html_string);
        });
    },

    add_item: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in add item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        kitchen.items[context.name] = context;
        kitchen._add_item_li(context);
    },

    edit_item: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in edit item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        kitchen.items[context.name] = context;
        $("#" + name).remove();
        kitchen._add_item_li(context);
    },

    add_category: function (new_category) {
        if(new_category == "")
        {
            console.log("ERROR in add cateopry input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: new_category};
        kitchen.categories[context.name] = context;
        kitchen._add_category_li(context);
    },

    delete_item: function(name) {
        console.log("Deleting: "+name);
        safedelete.protect("#itemDelete-" + name, function(){
            delete kitchen.items[name];
            $("#" + name).remove();
        });

    },

    delete_category: function(name) {
        console.log("Deleting: "+name);
        safedelete.protect("#categoryDelete-" + name, function(){
            delete kitchen.items[name];
            $("#" + name).remove();
        });
    },

    delete_all_items: function() {
        for(var element in kitchen.items) {
            kitchen.delete_item(element);
            kitchen.delete_item(element);
        }
    },

    change_quantity: function(name, newQ) {
        kitchen.items[name].quantity = newQ;
    }

};

function sumQuantity(quantity, sum) {
    return parseInt(quantity, 10) + parseInt(sum, 10);
}