$(function(){
    var SetCarouselHeight = function() {
        $("#carousel .carousel-item > img").height(function(){
            return $("#carousel").width() * 0.5;
        });
    }

    var SetCarouselMargin = function(){
        var navbarHeight = $('#header-navbar').outerHeight();
        $('#carousel').css('margin-top', navbarHeight + 'px');
    }

    //SetCarouselHeight();
    SetCarouselMargin();
    $(window).resize(function(){
        //SetCarouselHeight();
        SetCarouselMargin();
    });
});
