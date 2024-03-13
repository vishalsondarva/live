(function ($) {
  "use strict";
  // Toggler navbar
  $(".nav-menu-content-dropdown").click(function () {
    $(this).find("ul").toggleClass("show");
  })
  $('.toggle').click(function () {
    $('.nav-menu-content').toggleClass('active')
    $('.nav-overlay').toggleClass('active')
  })
  $('.toggle-close').click(function () {
    $('.nav-menu-content').toggleClass('active')
    $('.nav-overlay').toggleClass('active')
  })
  AOS.init({ offset: 0, duration: 500 });
})(window.jQuery);

$("a[href*=\\#]:not([href=\\#])").on("click", function () {
  if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length
      ? target
      : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate({
        scrollTop: target
          .offset()
          .top - 80
      }, 200, 'swing', function () {
        window.location.hash = '';
      });
      return false;
    }
  }
});

$(window).scroll(function () {
  onScroll();
  animateOnScroll(".about-arrow", "blink-arrow")
});

function onScroll() {
  var scrollPos = $(document).scrollTop();

  // try {
  // var heroElement = $(".header");
  // if (
  //     (heroElement.position().top - 100) <= scrollPos &&
  //     (heroElement.position().top - 100) + heroElement.height() > scrollPos
  // ) {
  //     $(".top-menu").removeClass("active");
  // } else {
  //     $(".top-menu").removeClass("active");
  //     $(".top-menu").addClass("active");
  // }
  // } catch (e) {
  // // Ignore href='javascript:;'
  // }

  $(".navigation a").each(function () {
    var currLink = $(this);

    try {
      var refElement = $(currLink.attr("href"));
      if (
        (refElement.position().top - 100) <= scrollPos &&
        (refElement.position().top - 100) + refElement.height() > scrollPos
      ) {
        $(".navigation li a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    } catch (e) {
      // Ignore href='javascript:;'
    }
  });
}

function animateOnScroll(elem, animation) {
  var elem = $(elem)
  var scrollPos = $(document).scrollTop();
  try {
    if (
      (elem.position().top - 100) <= scrollPos &&
      (elem.position().top - 100) + elem.height() > scrollPos
    ) {
      elem.removeClass(animation);
    } else {
      elem.removeClass(animation);
      elem.addClass(animation);
    }
  } catch (e) {
    // Ignore href='javascript:;'
  }
}
function showModal(projectTarget) {
  // var projectElement = $("." + projectTarget);
  // var projectImg = projectElement.find(".projects-image > img").attr("src");
  // var projectTitle = projectElement.find(".projects-title").text();
  // var projectContent = projectElement.find(".projects-content").attr("data-desc");
  // var projectLink = projectElement.find(".projects-content").attr("data-link");
  // var projectWhitepaper = projectElement.find(".projects-content").attr("data-whitepaper");
  // var projectYear = projectElement.find(".projects-content").attr("data-year");
  // var projectQuote = projectElement.find(".projects-content").attr("data-quote");
  // var buttonStatus = projectElement.find(".projects-content").attr("data-button");

  // var modalElement = $("#projectModal");
  // var modalElementDetail = modalElement.find(".modal-project-details")
  // modalElementDetail.css({
  //                     "background": "linear-gradient(180deg, rgba(16, 17, 17, 0.00) 0%, rgba(16, 17, 17, 0.00) 34.64%, #101111 100%), url(" + projectImg + ") center center no-repeat",
  //                     "background-size" : "cover"
  //                   })
  // modalElement.find(".projects-title").text(projectTitle)
  // modalElement.find(".projects-year").text(`(${projectYear})`)
  // modalElement.find(".projects-quote").text(projectQuote)
  // modalElement.find(".projects-desc").text(projectContent)
  // modalElement.find(".read-more > a").attr("href", projectLink)
  // modalElement.find(".data-whitepaper > a").attr("href", projectWhitepaper)
  // modalElement.find(".projects-button").hide()
  // if(buttonStatus == 1) {
  //   modalElement.find(".projects-button").show()
  // }


  // let modal = bootstrap.Modal.getOrCreateInstance($("#projectModal"));
  // modal.show();

  var modalElement = $("#modalSlide");
  var modalSlide = modalElement.find(".carousel-item")
  for (let index = 0; index < modalSlide.length; index++) {
    console.log(modalSlide[index])
    $(modalSlide[index]).removeClass('active')
  }
  var modalActive = $(`#modalSlide .carousel-item.${projectTarget}`).addClass('active')
  let modal = bootstrap.Modal.getOrCreateInstance($("#projectModal"));
  modal.show();
}
function metaverseShow() {
  let modal = bootstrap.Modal.getOrCreateInstance($("#metaverseModal"));
  $(".metaverse-frame").html('<iframe title="CadGL 3D Configurator"  src="https://app.cadgl.com/iframe/aaff5c24-dae4-4cf0-b0ae-963f183d479f" class="w-100 mb-4 rounded frame-metaverse" frameborder="0" allowfullscreen="allowfullscreen"></iframe>')
  modal.show();
}

function launchDex() {
  window.open("https://www.dextools.io/app/en/ether/pair-explorer/0x39fb7af42ef12d92a0d577ca44cd54a0f24c4915?t=1709829906438", "_blank");
}

function uniSwap() {
  window.open("https://app.uniswap.org/swap?outputCurrency=0x22b6c31c2beb8f2d0d5373146eed41ab9ede3caf", "_blank");
}


// header
var headerHeight = $(".main_header").height();
$(window).scroll(function () {
  var sticky = $('.main_header'), scroll = $(window).scrollTop();
  if (scroll >= headerHeight) {
    sticky.addClass('fixed');
    $("#hero").css("padding-top",headerHeight+'px')
  }
  else {
    sticky.removeClass('fixed');
    $("#hero").css("padding-top",'0px')
  }
});


// audio-play-pause
var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.src = "assets/icons/pause.svg";
  } else {
    track.pause();
    controlBtn.src = "assets/icons/play.svg";
  }
}
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  controlBtn.src = "assets/icons/play.svg";
});