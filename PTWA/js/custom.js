// slick
$(document).ready(function () {
    $('.slick_appInfo').slick({
        infinite: false,
        dots: false,
        arrows: true,
        autoplay: false,
        prevArrow: '#none',
        nextArrow: '.slick_appInfo_next',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 0,
        fade: true,
        swipe: false,
    });
});

// btn
$(document).ready(function () {
    $('.btn').on('click', function (ev) {
        var div = $('<div/>'),
            xPos = ev.pageX - $(this).offset().left,
            yPos = ev.pageY - $(this).offset().top,
            rippleSide = $(this).height();
        div.css({
            "height": rippleSide,
            "width": rippleSide,
            top: yPos - (rippleSide / 2),
            left: xPos - (rippleSide / 2)
        }).addClass('btn_effect').appendTo($(this));
        setTimeout(function () {
            div.remove();
        }, 1500);
    });

});


// Header
$(document).ready(function () {
    $(".header .btn_navbar").click(function () {
        $(".header .nav_wrap").slideToggle(400);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });
    $("#show_search, #hide_search").click(function () {
        $("body").toggleClass("scroll_off").find(".search_wrap").toggleClass("show");
        return false;
    });

    function headerJs() {
        $(".header .nav_wrap").slideUp(400);
        $("body").removeClass("scroll_off").find(".btn_navbar, .search_wrap").removeClass("open show");
    }
    $(".header .nav_wrap ul li a[href*='#']").click(function () {
        headerJs();
    })

    $(this).keydown(function (event) {
        if (event.keyCode == 27) {
            headerJs()
        }
    });
    $(this).click(function (event) {
        if (!$(event.target).closest(".header").length) {
            headerJs()
        }
    });

});
function headerHeight() {
    $("html").css('scroll-padding-top', $(".header").height());
    $("body").css('padding-top', $(".header").height());
}
$(window).ready(function () {
    // headerHeight();
});
$(window).resize(function () {
    // headerHeight();
});
$(window).scroll(function () {
    // headerHeight();
});





