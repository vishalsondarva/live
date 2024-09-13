$(document).ready(function () {
    // btn
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

    // Header
    $(".header .btn_navbar").click(function () {
        $(".header .col_nav").fadeToggle(200);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });

    function headerJs() {
        $(".header .col_nav").fadeOut(200);
        $("body").removeClass("scroll_off").find(".btn_navbar").removeClass("open");
    }

    $(".header .col_nav ul li a[href*='#']").click(function () {
        headerJs();
    })

    $(this).click(function (event) {
        if (!$(event.target).closest(".header").length) {
            headerJs()
        }
    });


});
