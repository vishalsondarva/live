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

    $('.slick_banner').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        fade: true,
    });

    $('.slick_ourBusiness').slick({
        infinite: false,
        dots: true,
        arrows: false,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
    });
});

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
    $('.main_screen').css({ '--header-height': $(".main_screen header").outerHeight() + 'px', '--footer-height': $(".main_screen footer").outerHeight() + 'px' });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $('.btn_menu, .navber .btn_close').on('click', function (e) {
        $('.navber').toggleClass('open');
        $('.navber').removeClass('hide');
        $('body').toggleClass('scroll_off');
    });
    $(".navber").on('click', function (event) {
        if (!$(event.target).closest('.navber .navbar_wrap').length) {
            $('.navber').removeClass('open');
            $('body').removeClass('scroll_off');
        }
    });


    // fileUpload
    $('.fileUpload').change(function () {
        var filename = $(this).val().split('\\').pop();
        var fileValue = $(this).parent().find('.file_name');
        if ($(this).val().length > 0) {
            fileValue.html(filename).addClass('show');
        } else {
            removeFile();
        }
    });


    // Tabing
    $('.tabs_wrapper .tab_wrap .btn_tab').click(function () {
        var $this = $(this);
        var $theTab = $(this).attr('id');
        // console.log($theTab);
        if ($this.hasClass('active')) {
            // do nothing
        } else {
            $this.closest('.tabs_wrapper').find('.tab_wrap .btn_tab, .tabs_container .tab_content').removeClass('active');
            $('.tabs_container .tab_content[data-tab="' + $theTab + '"], .tab_wrap .btn_tab[id="' + $theTab + '"]').addClass('active');
        }
    });


    // magnificPopup
    if ($(".image_popup, .video_popup")[0]) {
        $('.image_popup').magnificPopup({
            // delegate: 'a',
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

});
