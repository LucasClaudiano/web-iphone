$(document).ready(function(){
    $('.btn').click(function(){
        alert("Cadastro realizado , Parabéns") 
    })

    $('form').on('submit', function(e) {
        console.log("submit"); 
        e.preventDefault(); 
    })
})


$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#444444");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff")
    });
});

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("color", "#ffffff");
    });
    $("input").blur(function(){
        $(this).css("color", "#8a8a8a");
    });
});

/* função scroll*/

(function() { 

var $target = $('.anime'),  
    animationClass = 'anime-start',
    offset = $(window).height() * 2.7/4;

    function animeScroll(){
        var documentTop = $(document).scrollTop(); 

        $target.each(function() {
            var itemTop = $(this).offset().top; 
            if(documentTop > itemTop-offset) {
                $(this).addClass(animationClass); 
            }else {
                $(this).removeClass(animationClass);
            }
        })
    }

    animeScroll(); 

    $(document).scroll(function(){
        animeScroll(); 
    })

}()); 