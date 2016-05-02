/**
 * Created by carlos on 1/05/16.
 */
var settings = {
    init: function()
    {
        settings._populate_units_table();
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

    _populate_units_table: function()
    {
        for(var unit in settings.units)
        {
            settings._add_row_to_table(unit.toString() , "unitTableSettings");
        }
    },

    add_unit: function(name) {
        var context = {name: name};
        settings.units[context.name] = context;
        settings._add_row_to_table(context.name.toString(), "unitTableSettings");
    }
}