
/************************
    Scroll to fixed Navbar
*************************/
$(function () {
    var headerHeight = $('.header').outerHeight();
    // $('.body_wrap').css('padding-top', headerHeight);
    $('.body_wrap .banner').css('padding-top', headerHeight);

    window.onresize = function () {
        var headerHeight = $('.header').outerHeight();
        // $('.body_wrap').css('padding-top', headerHeight);
        $('.body_wrap .banner').css('padding-top', headerHeight);
    };

    $(window).scroll(function () {
        var sticky = $('.header, .body_wrap'),
            scroll = $(window).scrollTop();

        if (scroll >= 20) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

});


/************************
    Toggle Navbar
*************************/
$(function () {
    $("#menuBtn").click(function () {
        $('#menuBtn .cross ').toggleClass('open')
        $('body').toggleClass('oveHidden', 400);
        $("#menu").slideToggle(400);
    });

    if ($(window).width() < 991) {
        $('.nav_items .lg_hide ').addClass('item');

        $("#menu .link").click(function () {
            $('#menuBtn .cross ').removeClass('open')
            $('body').removeClass('oveHidden', 400);
            $("#menu").slideUp(400);
        });
    }

});


/************************
    smooth Scroll
*************************/
$(function () {
    var headerHeight = $('.header').outerHeight();
    // console.log(headerHeight);

    $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - headerHeight / 2
                }, 1000);
                return false;
            }
        }
    });

    $(window).scroll(function () {
        activeNav()
    })
    function activeNav() {
        var scroll = $(window).scrollTop()
        $(".sc_wrap").each(function (i) {
            if (scroll > ($(this).offset().top - $(".header").outerHeight() - 1) && scroll <= ($(this).offset().top + $(this).outerHeight())) {
                $(".header .item").removeClass("active")
                $(".header .item").eq(i).addClass("active")
            } else {
                $(".header .item").eq(i).removeClass("active")
            }
        })
    }

});


/************************
    loader
*************************/
$(window).on('load', function(){
    $('.loader_wrap').fadeOut(400);
})