var faq = {
    init: function()
    {
        $("select").change(function(){
            $(this).find("option:selected").each(function(){
                if($(this).attr("value")=="kitchenDD"){
                    $(".box").not(".kitchenDD").hide();
                    $(".kitchenDD").show();}
                else if($(this).attr("value")=="shoppingDD"){
                    $(".box").not(".shoppingDD").hide();
                    $(".shoppingDD").show();}
                else if($(this).attr("value")=="recipeDD"){
                    $(".box").not(".recipeDD").hide();
                    $(".recipeDD").show();}
                else if($(this).attr("value")=="userDD"){
                    $(".box").not(".userDD").hide();
                    $(".userDD").show();}
                else if($(this).attr("value")=="miscDD"){
                    $(".box").not(".miscDD").hide();
                    $(".miscDD").show();}
                else{
                    $(".box").hide();}
            });
        }).change();
    }
};
