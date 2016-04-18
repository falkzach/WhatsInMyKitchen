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
                    var ret;

                    var start = parseInt(amount) - 5;

                    while(parseInt(start) < 1) start++;

                    var newAmount = 0;
                    var selected = "";

                    for(var i=0; i<10; i++) {
                        newAmount = parseInt(parseInt(start) + parseInt(i));
                        if(amount == newAmount)
                            selected = "selected";
                        else
                            selected = "";
                        ret = ret + "<option " + selected + "><a href='#' >" + newAmount + "</a></option>";
                    }

                    return ret;
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
