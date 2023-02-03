/* eslint-disable no-undef */
$(document).ready(function() {
  ///COMPOSE SLIDEDOWN BEHAVIOUR
  $("#nav-arrow").click(() => {
    if ($(".new-tweet")[0].style.display === 'none') {
      $(".new-tweet").slideDown("slow");
      return;
    } else {
      $(".new-tweet").slideUp("slow");
      return;
    }
  });
  ///SCROLL BUTTON HIDING/APPEARING (Mobile Version)
  let lastScrollDepth = 0;
  $(window).scroll(function() {
    $("a").attr('href', '#top');
    const height = $(window).scrollTop();
    if (height > lastScrollDepth) {
      lastScrollDepth = height;
    }
    if (lastScrollDepth >= 120) {
      $(".scroll-button").slideDown(100);
      $(".label").slideUp(100);
    }
    if (height < 120) {
      $(".scroll-button").slideUp(10);
      $(".label").slideDown(10);
      lastScrollDepth = 0;
    }
  });
  ///SCROLL BUTTON HIDING/APPEARING (Desktop Version)
  $("main").scroll(function() {
    const height = $("main").scrollTop();
    $("a").removeAttr('href');
    if (height > lastScrollDepth) {
      lastScrollDepth = height;
    }
    if (lastScrollDepth >= 120) {
      $(".scroll-button").slideDown(100);
      $(".label").slideUp(100);
    }
    if (height < 120) {
      $(".scroll-button").slideUp(10);
      $(".label").slideDown(10);
      lastScrollDepth = 0;
    }
  });

  //CLICK BEHAVIOUR (Covers both versions)
  $(".scroll-button").click(() => {
    $(".scroll-button").slideUp(10);
    $("main").animate({ scrollTop: 0 }, "fast");
    $(".label").slideDown(10);
    $(".new-tweet").slideDown(10);
    lastScrollDepth = 0;
  });
});