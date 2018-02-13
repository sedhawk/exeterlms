$(document).ready(function(){    
    $("div").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){    
    $("h1").click(function(){
        $(this).toggleClass("blue");
    });
});

$(document).ready(function(){    
    $("p").click(function(){
        $(this).css("color", "purple");
    });
});