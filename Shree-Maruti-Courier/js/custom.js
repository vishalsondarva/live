/************************
    slick
*************************/
$(document).ready(function () {
    $('.banner_slick').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        fade: true,
        slide: 'div',
        cssEase: 'linear',
        pauseOnHover: false,
    });
    $('.ourServices_slick').slick({
        infinite: false,
        dots: false,
        arrows: true,
        prevArrow: $('#ourServices_prev'),
        nextArrow: $('#ourServices_next'),
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.coreValue_slick').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '12%',
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.clientsSay_slick').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1560,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.clients_slick').slick({
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: $('#clients_slick_prev'),
        nextArrow: $('#clients_slick_next'),
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
});


/************************
   Menu, sc-nav
*************************/
$(document).ready(function () {
    $('.menu_icon, .menu_wrapper .close_menu').click(function () {
        $('.menu_wrapper').fadeToggle(300);
        $('.menu_wrapper, body').toggleClass('open_menu');
    });
    $(this).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.menu_wrapper').fadeOut(300);
            $('.menu_wrapper, body').removeClass('open_menu');
        }
    });

    var headerHeight = $('.header').outerHeight();
    $(window).scroll(function () {
        var sticky = $('.header, body'),
            scroll = $(window).scrollTop();

        if (scroll >= headerHeight) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    $('.loader_wrap').fadeOut();
});
$('.menu_wrapper').mousemove(function (e) {
    var moveinX = (e.pageX * -2 / 100);
    var moveinY = (e.pageY * -2 / 100);
    $('.menu_wrapper .bg_img').css('background-position', moveinX + 'px ' + moveinY + 'px ')
})
// $(window).on('load', function(){
//     $('.loader_wrap').fadeOut();
// });



/************************
    magnificPopup-img
*************************/
$(document).ready(function () {
    if ($(".img_popup, .video_popup")[0]) {
        $('.img_popup').magnificPopup({
            // delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        });
        $('.video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        });
    }
});

/************************
    Tab
*************************/
$(document).ready(function () {
    $('.tab_wrap .tab').click(function () {
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

    // services-tab
    $('.ourServices_slick .slick-current').addClass('active');
    $('.ourServices_slick .slick-slide').click(function () {
        var $this = $(this);
        var $theTab = $(this).data('slick-index');
        console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.ourServices_wrap').find('.ourServices_slick .slick-slide, .tabs_container .tab_content').removeClass('active');
            $('.ourServices_wrap .tabs_container .tab_content[data-tab="' + $theTab + '"], .ourServices_slick .slick-slide[data-slick-index="' + $theTab + '"]').addClass('active');
        }
    });
});
