// Custom scripts file

jQuery(document).ready(function ($) {

  'use strict';

  // Generic function that runs on window resize.
  function resizeStuff() {
  }


  // Runs function once on window resize.
  var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();


  // JS Looping
  var loopLink = $('.loop__link');
  var loopText = $('.loop__text');
  console.log('its working');

  loopLink.on('click', function(e) {
    e.preventDefault();
    var loopId = $(this).attr('id');
    var parent = $(this).parents('.loop');

    parent.find('.loop__link').removeClass('is-active');
    //loopLink.removeClass('is-active');
    $(this).addClass('is-active');
    parent.find('.loop__text').removeClass('is-active');
    parent.find('#' + loopId + '.loop__text').addClass('is-active');
  });

  //Smooth scroll to anchor
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  //Back to top Button
  var backToTop = $('.back-to-top');
  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 500) {
      backToTop.addClass('is-active');
    }
    if (scrollPosition < 500) {
      backToTop.removeClass('is-active');
    }
  });

  backToTop.on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });


  // Main menu
  var menuButton = $('.menu-button');
  var mainMenu = $('.main-menu');

  menuButton.on('click', function() {
    if(mainMenu.hasClass('is-active')) {
      $(this).removeClass('is-active');
      mainMenu.removeClass('is-active');  
      $('body').removeClass('no-scroll');
    }
    else {
      $(this).addClass('is-active');
      mainMenu.addClass('is-active'); 
      $('body').addClass('no-scroll');
    }
    
  });

  $('.menu__link').on('click', function() {
    mainMenu.removeClass('is-active');
    menuButton.removeClass('is-active');
    $('body').removeClass('no-scroll');
  });


});
