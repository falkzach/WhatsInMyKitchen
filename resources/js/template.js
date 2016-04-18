var template = {
    init: function() {

    },

    get_template: function (path, callback) {
        var source;
        var template;

        $.ajax({
            url: path,
            success: function (data) {
                source = data;

                Handlebars.registerHelper('amountList', function(name, amount, options) {
                    var ret = "<ul class='dropdown-menu scrollable-menu' role='menu'>";
                    
                    var start = parseInt(amount) - 5;
                    while(parseInt(start) < 1) start++;

                    var newAmount = 0;

                    for(var i=0; i<10; i++) {
                        newAmount = parseInt(parseInt(start) + parseInt(i));
                        ret = ret + "<li><a href='#' onclick='kitchen.change_quantity(\"" + name + "\"," + newAmount +")'>" + newAmount + "</a></li>";
                    }

                    return ret + "</ul>";
                });

                template = Handlebars.compile(source);

                if (callback) callback(template);
            }
        });
    },

    get_html: function (template, context) {
        return template(context);
    }
};
