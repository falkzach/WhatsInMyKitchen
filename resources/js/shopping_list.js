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

    _add_cart_li:function(context){
        template.get_template('resources/templates/shopping_cart_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#cart_popup_list').append(html_string);
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

    add_item_cart: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in add item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        shopping.cart_items[context.name] = context;
        shopping._add_cart_li(context);
    },

    edit_item: function(name, quantity, unit) {
        if(name == "" || quantity == "" || unit == "")
        {
            console.log("ERROR in edit item input: " + name + "," + quantity + "," + unit + ";");
            return;
        }
        var context = {name: name, quantity: quantity, unit: unit};
        shopping.item_list[context.name] = context;
        $("#" + name).remove();
        shopping._add_item_li(context);
    },

    delete_item: function(name) {
        console.log("Deleting: "+ name + " in shopping list");
        safedelete.protect("#itemDelete-" + name, function(){
            delete shopping.item_list[name];
            $("#" + name).remove();
        });

    },

    delete_item_cart: function(name) {
        console.log("Deleting: "+ name + " in shopping cart");
        safedelete.protect("#itemDelete-" + name, function(){
            delete shopping.cart_items[name];
            $("#" + name + "_cart").remove();
        });

    },

    delete_all_items: function() {
        for(var element in shopping.item_list) {
            shopping.delete_item(element);
            shopping.delete_item(element);
        }
    },

    from_list_to_cart: function(element) {
        var nam = shopping.item_list[element].name;
        var quant = shopping.item_list[nam].quantity;
        var uni = shopping.item_list[nam].unit;
        shopping.add_item_cart(nam, quant, uni);
        shopping.delete_item(nam);
        shopping.delete_item(nam);
    },

    from_cart_to_list: function(element) {
        var nam = shopping.cart_items[element].name;
        var quant = shopping.cart_items[nam].quantity;
        var uni = shopping.cart_items[nam].unit;
        shopping.item_list[nam] = {name: nam, quantity: quant, unit: uni};
        shopping.delete_item_cart(nam);
        shopping.delete_item_cart(nam);
        shopping._add_item_li(shopping.item_list[nam]);
    },

    from_cart_to_kitchen: function(element) {
        var nam = shopping.cart_items[element].name;
        var quant = shopping.cart_items[nam].quantity;
        var uni = shopping.cart_items[nam].unit;
        shopping.delete_item_cart(nam);
        shopping.delete_item_cart(nam);
        kitchen.add_item(nam, quant, uni);
    },

    check_empty: function () {
        var size = getSize(shopping.cart_items);
        if(size == 0)
        {
            $('#cart_popup_text').show();
            $('#cart_popup_list_div').hide();
        }
        else
        {
            $('#cart_popup_text').hide();
            $('#cart_popup_list_div').show();
        }
    },

    change_quantity: function(name, newQ) {
        shopping.item_list[name].quantity = newQ;
    }
}