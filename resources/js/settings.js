/**
 * Created by carlos on 1/05/16.
 */
var settings = {
    init: function()
    {
        settings._populate_tables();
        settings.check_notifications();
    },

    units: {
        "Units": {name: "Units"},
        "Grams": {name: "Grams"},
        "Kg": {name: "Kg"},
        "lb": {name: "lb"},
        "Bags": {name: "Bags"},
        "Bottles": {name: "Bottles"},
        "Pieces": {name: "Pieces"}
    },

    kitchen_accounts: {
        "My_Kitchen": {name: "My_Kitchen"},
        "Mum_Kitchen": {name: "Mum_Kitchen"},
        "Carlos_Kitchen": {name: "Carlos_Kitchen"},
        "Ayechan_Kitchen": {name: "Ayechan_Kitchen"}
    },

    current_kitchen: {"kitchen": {name: "My_Kitchen"}},

    current_user: {"user": {name: "Default_User"}},

    kitchen_invitations: {
        "Grandma_Kitchen": {name: "Grandma_Kitchen"},
        "Zach_Kitchen": {name: "Zach_Kitchen"}
    },

    _add_row_to_table: function(content, tableId)
    {
        //console.log("Added element " + content + " to table " + tableId);
        tabBody=document.getElementById(tableId);
        row=document.createElement("li");
        row.className = "list-group-item";
        textnode1=document.createTextNode(content);
        row.appendChild(textnode1);
        tabBody.appendChild(row);
    },

    _populate_tables: function()
    {
        Object.keys(settings.units).map(function(item) {
            var context = settings.units[item];
            settings._add_unit_li(context);
        });
        Object.keys(settings.kitchen_accounts).map(function(item) {
            var context = settings.kitchen_accounts[item];
            settings._add_kitchen_li(context);
        });
        Object.keys(settings.kitchen_invitations).map(function(item) {
            var context = settings.kitchen_invitations[item];
            settings._add_kitchen_invitation_li(context);
        });

        settings.select_kitchen(settings.current_kitchen.name);
        settings.select_user(settings.current_user["user"].name);
    },

    add_unit: function(name) {
        if(name == "")
        {
            console.log("ERROR in add cateopry input: " + name);
            return;
        }
        var context = {name: name};
        settings.units[context.name] = context;
        settings._add_unit_li(context);
    },

    add_kitchen: function(name) {
        if(name == "")
        {
            console.log("ERROR in add cateopry input: " + name);
            return;
        }
        var context = {name: name};
        settings.kitchen_accounts[context.name] = context;
        settings._add_kitchen_li(context);
    },

    _add_unit_li:function(context){
        template.get_template('resources/templates/settings_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#unitTableSettings').append(html_string);
        });
        template.get_template('resources/templates/add_item_quantity_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#add_unit_Table').append(html_string);
        });
        template.get_template('resources/templates/edit_item_quantity_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#edit_unit_Table').append(html_string);
        });
        template.get_template('resources/templates/add_shop_item_unit_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#add_shop_unit_Table').append(html_string);
        });
    },

    _add_kitchen_li:function(context){
        template.get_template('resources/templates/settings_kitchen_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#kitchenTableSettings').append(html_string);
        });
    },

    _add_kitchen_invitation_li:function(context){
        template.get_template('resources/templates/invitation_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#invitationsKitchenSettings').append(html_string);
        });
        template.get_template('resources/templates/invitation_popup_li.handlebars', function(t) {
            var html_string = template.get_html(t, context);
            $('#kitchen_invit_list_popup').append(html_string);
        });
    },

    delete_measure_unit: function(name) {
        delete settings.units[name];
        $("#" + name).remove();
    },

    delete_kitchen_account: function(name) {
        delete settings.kitchen_accounts[name];
        $("#" + name).remove();
    },

    delete_kitchen_invitation: function(name) {
        console.log("Deleting invitation to: " + name)
        delete settings.kitchen_invitations[name];
        $("#" + name).remove();
        $("#" + name + "_popup").remove();
    },

    select_kitchen: function(new_kitchen) {
        if(new_kitchen == "")
        {
            console.log("ERROR in new kitchen input: " + new_kitchen);
            return;
        }
        $('#actualKitchenLabel').html(new_kitchen);
        $('#kitchenListName').html(new_kitchen);
        settings.current_kitchen["kitchen"] = {name: new_kitchen};
    },

    select_user: function (new_user) {
        if(new_user == "")
        {
            console.log("ERROR in new user input: " + new_user);
            return;
        }
        console.log("New user: " + new_user);
        $('#current_user_label').html(new_user);
        var context = {name: new_user};
        settings.current_user["user"] = context;
    },

    check_notifications: function()
    {
        var size = getSize(settings.kitchen_invitations);
        //console.log("Number of notifications: " + size);
        if(size == 0)
        {
            $('#settings_notif_button').removeClass('btn-warning');
            $('#settings_notif_button').addClass('btn-default');
            $('#settings_notif_popup_text').show();
            $('#kitchen_invit_list_popup_div').hide();
            $('#settings_navbar_icon').css('color','#555555');
        }
        else
        {
            $('#settings_notif_button').removeClass('btn-default');
            $('#settings_notif_button').addClass('btn-warning');
            $('#settings_notif_popup_text').hide();
            $('#kitchen_invit_list_popup_div').show();
            $('#settings_navbar_icon').css('color','#FF8000');
        }
    }
}