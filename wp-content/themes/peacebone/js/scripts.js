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

});
