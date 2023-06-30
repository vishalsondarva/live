// slick
$('.slick_banner').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    fade: true,
    cssEase: 'ease-in-out',
});

$('.slick_client').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '25%'
            }
        },
    ]
});

$('.slick_rating').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});

$('.slick_services').slick({
    infinite: true,
    dots: true,
    arrows: true,
    appendDots: '.slick_services_btn',
    appendArrows: '.slick_services_btn',
    prevArrow: '<button class="btn btn_arrow prev"><span class="iconFont-chevron-left"></span></button>',
    nextArrow: '<button class="btn btn_arrow next"><span class="iconFont-chevron-right"></span></button>',
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '10%',
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '18%',
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '10%',
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0%',
            }
        },
    ]
});

$('.slick_testimonial').slick({
    infinite: true,
    dots: true,
    arrows: true,
    appendDots: '.slick_testimonial_btn',
    appendArrows: '.slick_testimonial_btn',
    prevArrow: '<button class="btn btn_arrow prev"><span class="iconFont-chevron-left"></span></button>',
    nextArrow: '<button class="btn btn_arrow next"><span class="iconFont-chevron-right"></span></button>',
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.slick_blog').slick({
    infinite: true,
    dots: true,
    arrows: true,
    appendDots: '.slick_blog_btn',
    appendArrows: '.slick_blog_btn',
    prevArrow: '<button class="btn btn_arrow prev"><span class="iconFont-chevron-left"></span></button>',
    nextArrow: '<button class="btn btn_arrow next"><span class="iconFont-chevron-right"></span></button>',
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$('.slick_portfolio').slick({
    infinite: true,
    dots: true,
    arrows: true,
    appendDots: '.slick_portfolio_btn',
    appendArrows: '.slick_portfolio_btn',
    prevArrow: '<button class="btn btn_arrow prev"><span class="iconFont-chevron-left"></span></button>',
    nextArrow: '<button class="btn btn_arrow next"><span class="iconFont-chevron-right"></span></button>',
    autoplay: true,
    focusOnSelect: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '28%',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                centerPadding: '15%',
            }
        },
    ]
});





// // Header
$(document).ready(function () {
    $(".header .btn_navbar").click(function () {
        $(".header .nav_wrap").slideToggle(400);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });

    function headerJs() {
        $(".header .nav_wrap").slideUp(400);
        $("body").removeClass("scroll_off").find(".btn_navbar").removeClass("open");
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


// Smooth-Scroll
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
    var headerHeight = $('.header').outerHeight() - 1;
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);
            return false;
        }
    }
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var headerHeight = $(".header").outerHeight();

    $(".header .navbar li > a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.length > 0) {
            var refElementOffset = refElement.offset().top - headerHeight;
            if (scroll > refElementOffset && scroll <= refElementOffset + refElement.outerHeight()) {
                currLink.parent("li").addClass("active");
            } else {
                currLink.parent("li").removeClass("active");
            }
        }
    });
});


// easyResponsiveTabs
$('#technologyTab').easyResponsiveTabs({
    type: 'default',
    width: 'auto',
    fit: true,
    tabidentify: 'respTabs_1',
});

var actPosition = $(".respTabs_list .respTab_item").position();
var actWidth = $(".respTabs_list .respTab_item").outerWidth();
$(".respTabs_list .line").css({ "left": + actPosition.left + 15, "width": actWidth - 30 });

$(".respTabs_list .respTab_item").click(function () {
    var position = $(this).position();
    var width = $(this).outerWidth();
    $(".respTabs_list .line").css({ "left": + position.left + 15, "width": width - 30 });
});

$(".contact_section").css('--title-height', $(".contact_section .sc_title2").outerHeight() + 'px');
$(".footer").css('--subscribedBox-size', $(".footer .subscribe_wrap").outerHeight() + 'px');

$(window).ready(function () {
    // magnificPopup
    if ($(".image_popup, .video_popup")[0]) {
        $('.image_popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
            gallery: { enabled: true }
        });
        $('.video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
            gallery: { enabled: true }
        });
    }

    // backToTop
    $('#backToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        $(window).scrollTop(0);
        return false;
    });

    // counter
    var counted = 0;
    $(window).scroll(function () {
        var oTop = $('#countWrap .content').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            counted = 1;
        }
    });
});

const textAnimation1 = document.querySelectorAll('.slick_item .textSpan');

textAnimation1.forEach(elem => {
    const words = elem.textContent.split(' ');
    elem.innerHTML = '';
    words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
    });
    elem.innerHTML = words.join(' ');
});


// SVG-Inject
$(function () {
    $('.svg, .svg_img').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
});

