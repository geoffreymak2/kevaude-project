(function ($) {
  "use strict";

  /* 
   One Page Navigation & wow js
   ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  /* 
   CounterUp
   ========================================================================== */
  $(".counter").counterUp({
    time: 1000,
  });

  /* 
   MixitUp
   ========================================================================== */
  $("#portfolio").mixItUp();

  /* Nivo Lightbox
  ========================================================*/
  $(".lightbox").nivoLightbox({
    effect: "fadeScale",
    keyboardNav: true,
  });

  /* 
   Page Loader
   ========================================================================== */
  $("#loader").fadeOut();
})(jQuery);
