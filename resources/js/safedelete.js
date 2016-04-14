var safedelete = {
    clicked: {},

    protect: function(selector, callback)
    {

        if(safedelete.clicked[selector] == true)
        {
            //execute the callback if passed
            if (callback) callback();
            safedelete.clicked[selector] = null;
        }
        else
        {
            console.log('clicked');
            $(selector).css('color', '#a94442');
            safedelete.clicked[selector] = true;
            var timer=self.setInterval(
                function() {
                    $(selector).css('color', '#cccccc');
                    window.clearInterval(timer);
                } ,2000);
        }




    }
};
