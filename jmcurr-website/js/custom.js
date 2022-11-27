// menu
$(document).ready(function () {
    var headerHeight = $(".header").height();
    $(window).scroll(function () {
        var sticky = $('.header'), scroll = $(window).scrollTop();
        if (scroll >= headerHeight) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $("#menuBtn").click(function () {
        $('#menuBtn .cross ').toggleClass('open')
        $('body').toggleClass('oveHidden');
        $("#menu").slideToggle(400);
    });

});