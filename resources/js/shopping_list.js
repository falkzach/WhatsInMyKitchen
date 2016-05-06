/**
 * Created by carlos on 5/05/16.
 */
var shopping={

    init: function()
    {
        shopping._add_initial_items();
    },

    item_list: {
        "Sugar": {name: "Sugar", quantity: 2, unit: "Bags"},
        "Orange_Juice": {name: "Orange_Juice", quantity: 1, unit: "Bottle"},
        "Chips": {name: "Chips", quantity: 2, unit: "Bags"},
        "Spaghetti": {name: "Spaghetti", quantity: 1, unit: "Kg"}
    },

    cart_items: {
    },

    _add_initial_items: function() {
        Object.keys(shopping.item_list).map(function(item) {
            var context = shopping.item_list[item];
            shopping._add_item_li(context);
        });
    },

    _add_item_li:function(context){
        template.get_template('resources/templates/shopping_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#shopping_list').append(html_string);
        });
    },

    add_item: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in add item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        shopping.item_list[context.name] = context;
        shopping._add_item_li(context);
    },

    edit_item: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in edit item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        shopping.item_list[context.name] = context;
        $("#" + name + "_shopping").remove();
        shopping._add_item_li(context);
    },

    delete_item: function(name) {
        console.log("Deleting: "+ name + " in shopping list");
        safedelete.protect("#itemDelete-" + name, function(){
            delete shopping.item_list[name];
            $("#" + name + "_shopping").remove();
        });

    },

    delete_all_items: function() {
        for(var element in shopping.item_list) {
            shopping.delete_item(element);
            shopping.delete_item(element);
        }
    },

    change_quantity: function(name, newQ) {
        shopping.item_list[name].quantity = newQ;
    }
}