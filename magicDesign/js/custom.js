$(document).ready(function(){$(".header .btn_navbar").click(function(){$(".header .nav_wrap").slideToggle(400),$("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open")}),$(this).click(function(e){$(e.target).closest(".header").length||($(".header .nav_wrap").slideUp(400),$("body").removeClass("scroll_off").find(".btn_navbar").removeClass("open"))});var e=$(".header").outerHeight();$(this).scroll(function(){var a=$(".header, body");$(window).scrollTop()>=e?a.addClass("fixed"):a.removeClass("fixed")})}),$(document).ready(function(){$(".image_popup, .video_popup")[0]&&($(".image_popup").magnificPopup({type:"image",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,gallery:{enabled:!0}}),$(".video_popup").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!0,gallery:{enabled:!0}})),$(".tabs_wrapper .tab_wrap .tab").click(function(){var e=$(this),a=$(this).attr("id");e.hasClass("active")||(e.closest(".tabs_wrapper").find(".tab_wrap .tab, .tabs_container .tab_content").removeClass("active"),$('.tabs_container .tab_content[data-tab="'+a+'"], .tab_wrap .tab[id="'+a+'"]').addClass("active"))}),$(".accordion_wrap .accordion_box .title_wrap").click(function(){var e=$(this).parent(".accordion_box");$(this).parent().find(".content_wrap").slideToggle(400),e.toggleClass("active")})});let elementsArray=document.querySelectorAll(".fadeIn");function fadeIn(){for(var e=0;e<elementsArray.length;e++){var a=elementsArray[e];a.getBoundingClientRect().top-window.innerHeight+30<0&&a.classList.add("inView")}}window.addEventListener("scroll",fadeIn),fadeIn();var $horizontal=$(".img_scroll_wrap");$(window).scroll(function(){var e=$(this).scrollTop(),a=$(document).height(),t=$(this).height(),n=(scrollPercent=e/(a-t))*(1-$horizontal.width());$horizontal.css({left:n})});