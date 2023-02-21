$(document).ready(function () {
    $('.imgSlider_slick').slick({
        infinite: true,
        dots: false,
        arrows: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        focusOnSelect: true,
        pauseOnHover: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '24%',
        slidesToScroll: 1,
        responsive: [
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
                    centerPadding: '8%',
                }
            },
        ]
    });
});

$(document).ready(function () {
    var headerHeight = $('.header').outerHeight();
    var footerHeight = $('.copyright_section').outerHeight();
    var totalSize = headerHeight + footerHeight;

    $('body').css('--headerFooter-size', totalSize+'px');
});