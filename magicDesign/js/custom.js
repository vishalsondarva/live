// Header
$(document).ready(function () {
    $(".header .btn_navbar").click(function () {
        $(".header .nav_wrap").slideToggle(400);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });

    function headerJs() {
        $(".header .nav_wrap").slideUp(400);
        $("body").removeClass("scroll_off").find(".btn_navbar").removeClass("open");
    }
    $(this).click(function (event) {
        if (!$(event.target).closest(".header").length) {
            headerJs()
        }
    });

});


$(document).ready(function () {
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
});


let elementsArray = document.querySelectorAll(".fadeIn");
window.addEventListener('scroll', fadeIn);
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 25;
        if (distInView < 0) {
            elem.classList.add("inView");
        }
        else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();