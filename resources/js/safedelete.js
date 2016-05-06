var safedelete = {
    clicked: {},

    protect: function(selector, callback)
    {
        if(safedelete.clicked[selector] == true)
        {
            safedelete.clicked[selector] = null;
            if (callback) callback();
        }
        else
        {
            $(selector).css('color', '#a94442');
            safedelete.clicked[selector] = true;
            var timer=self.setInterval(
                function() {
                    $(selector).css('color', '#cccccc');
                    safedelete.clicked[selector] = null;
                    window.clearInterval(timer);
                } ,2000);

        }
        event.stopPropagation();
    }
};
