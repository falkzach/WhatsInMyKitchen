var safedelete = {
    clicked: {},

    protect: function(selector, callback)
    {

        if(safedelete.clicked[selector] == true)
        {
            //execute the callback if passed
            safedelete.clicked[selector] = null;
            if (callback) callback();
        }
        else
        {
            console.log('clicked');
            $(selector).css('color', '#a94442');
            safedelete.clicked[selector] = true;
            var timer=self.setInterval(
                function() {
                    $(selector).css('color', '#cccccc');
                    safedelete.clicked[selector] = null;
                    window.clearInterval(timer);
                } ,2000);
        }




    }
};
