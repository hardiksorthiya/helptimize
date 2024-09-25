// ---------Responsive-navbar-active-animation-----------

$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

// -----------------------------------------Slider----------------------------------------------------------

// HERO SLIDER
var menu = [];
  jQuery('.swiper-slide').each( function(index){
      menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
      loop: true,
      speed: 1000,
      parallax: true,
      
      watchSlidesProgress: true,
      // pagination: {
      //     el: '.swiper-pagination',
      //     clickable: true,
      // },

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      on: {
          progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                  var slideProgress = swiper.slides[i].progress;
                  var innerOffset = swiper.width * interleaveOffset;
                  var innerTranslate = slideProgress * innerOffset;
                  swiper.slides[i].querySelector(".slide-inner").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }      
          },

          touchStart: function() {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = "";
            }
          },

          setTransition: function(speed) {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].style.transition = speed + "ms";
                  swiper.slides[i].querySelector(".slide-inner").style.transition =
                  speed + "ms";
              }
          }
      }
  };

  var swiper = new Swiper(".swiper-container", swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function(indx){
      if ($(this).attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });