// menu
$(document).ready(function () {
    var headerHeight = $(".header").height();
    $(window).scroll(function () {
        var sticky = $('.header'), scroll = $(window).scrollTop();
        if (scroll >= headerHeight) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $("#menuBtn").click(function () {
        $('#menuBtn .cross ').toggleClass('open')
        $('body').toggleClass('oveHidden');
        $("#menu").slideToggle(400);
    });

    // tab
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

    // according_wrap
    $(".according_wrap .title_wrap").click(function () {
        var content_wrap = $(this).parent().find(".content_wrap");
        $(".according_wrap .content_wrap").not(content_wrap).slideUp(400)
        $(".according_wrap .title_wrap").not(this).removeClass("active")
        $(this).toggleClass("active");
        content_wrap.slideToggle(400);
    });

});