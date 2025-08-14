(function ($) {
    "use strict";
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $(".header-area").addClass(".background-header")
        }
        else{
            $(".header-area").removeClass(".background-header")
        }
    })
})