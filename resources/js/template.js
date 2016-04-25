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
                template = Handlebars.compile(source);
                if (callback) callback(template);
            }
        });
    },

    get_html: function (template, context) {
        return template(context);
    }
};
