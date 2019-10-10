$(document).ready(function() {
  'use strict';

  var headerOverlay = $(".header__overlay"),
    menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".ion-md-close"),
    menuList = $(".main-nav"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search");

  /* =======================
  // Hide Header
  ======================= */
  header();

  function header() {
    var initialScroll;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > initialScroll && initialScroll > 100) {
        $('.header').addClass('is-hide');
      } else {
        $('.header').removeClass('is-hide');
      }
      initialScroll = scroll;
    });
  }


  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
    headerOverlay.addClass("is-visible");
  }

  function menuClose() {
    menuList.removeClass("is-open");
    headerOverlay.removeClass("is-visible");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }

  /* =======================
  // Slick Slider
  ======================= */
  $('.slider__box').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: false,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
  });


  /* =======================
  // Masonry Grid Layout
  ======================= */
  var $grid = $('.grid').masonry({
    itemSelector: '.grid__post',
    percentPosition: true
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="facebook.com"]']
  });

  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");


  /* =======================
  // Instagram Feed
  ======================= */
  var userId = $('#instafeed').attr('data-userId');
  var accessToken = $('#instafeed').attr('data-accessToken');
  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 4,
    resolution: 'standard_resolution',
    userId: userId,
    accessToken: accessToken,
    template:
      '<li class="instagram-item"><a href="{{link}}" class="instagram-link" aria-label="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });


});