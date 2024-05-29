// slick
$(document).ready(function () {
    $('.banner_slick').slick({
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20%',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20%',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '6%',
                }
            },
        ]
    });

    $('.banner_v2_slick').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: "<button class='slick-prev btn_slick'></button>",
        nextArrow: "<button class='slick-next btn_slick'></button>",
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    $('.players_slick').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: "<button class='slick-prev btn_slick'></button>",
        nextArrow: "<button class='slick-next btn_slick'></button>",
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 4,
                    centerPadding: '5%',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20%',
                }
            },
        ]
    });
    $('.team_slick').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });
    $('.hotel_slick ').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    });

    $('.teamReg_slick ').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

    });


});


// Header
$(document).ready(function () {
    // AOS-Animation
    AOS.init({
        duration: 1200,
        offset: 100,
        delay: 0,
        once: true,
        anchorPlacement: 'top-bottom'
    });

    $(".btn_navbar").click(function () {
        $(".header nav").slideToggle(400);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });

    function headerJs() {
        $(".header nav").slideUp(400);
        $("body").removeClass("scroll_off").find(".btn_navbar").removeClass("open");
    }
    $(".header nav ul li a[href*='#']").click(function () {
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

    // view-password
    $(".viewpass").click(function () {
        $(this).toggleClass("eye_view");
        var input = $('#loginPass');

        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    // backToTop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').css('transform', 'none');
        } else {
            $('#backToTop').css('transform', 'translateY(150%)');
        }
    });
    $('#backToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        $(window).scrollTop(0);
        return false;
    });

});


// countdown
setInterval(function time() {
    var d = new Date();
    var days = 6 - d.getDay();
    if ((days + '').length == 1) {
        days = '0' + days;
    }
    var hours = 60 - d.getHours();
    if ((hours + '').length == 1) {
        hours = '0' + hours;
    }
    var min = 60 - d.getMinutes();
    if ((min + '').length == 1) {
        min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if ((sec + '').length == 1) {
        sec = '0' + sec;
    }
    jQuery('#week-countdown ul').html('<li><span>day</span>' + days + '</li><li><span>Hour</span>' + hours + '</li><li><span>Minute</span>' + min + '</li><li><span>Second</span>' + sec + '</li>')
}, 1000);


// Tabing
$('.tabs_wrapper .tab_wrap .tab').click(function () {
    var $this = $(this);
    var $theTab = $(this).attr('id');
    // console.log($theTab);
    if ($this.hasClass('active')) {
        // do nothing
    } else {
        $this.closest('.tabs_wrapper').find('.tab_wrap .tab, .tabs_container .tab_content').removeClass('active');
        $('.tabs_container .tab_content[data-tab="' + $theTab + '"], .tab_wrap .tab[id="' + $theTab + '"]').addClass('active');
    }
});

