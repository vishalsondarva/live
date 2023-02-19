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
        centerPadding: '20%',
        slidesToScroll: 1,
        responsive: [
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
                }
            },
        ]
    });
});