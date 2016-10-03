 
   
// ========== 7 START FADE IN NAVIGATION ========== //

 (function($) { "use strict";

$(document).ready(function() {

     $(".nav-fadein").hide();

     $(window).on('scroll load', function() {

         if ($(this).scrollTop() > 400) {

             $('.nav-fadein').fadeIn();

         } else {

             $('.nav-fadein').fadeOut();

         }

     });

 });

 })(jQuery);

// ========== END FADE IN NAVIGATION ========== //

// ========== 1. START PAGE LOADER ========== //

 (function($) { "use strict";



$(window).load(function() {

	$(".loader-img").delay(500).fadeOut();

	$("#pageloader").delay(1000).fadeOut("slow");

	var hash = window.location.hash;

	if(!hash) { 

	// Do nothing //

	} else {

	$(document).scrollTop( $(hash).offset().top -78); 

}

});

 })(jQuery);

 // ========== END PAGE LOADER ========== //
 
 // ========== 5. START SCROLL TO TOP ========== //

 // Button

 (function($) { "use strict";

$(document).ready(function() {

     $(".scrollup").hide();

     $(window).scroll(function() {

         if ($(this).scrollTop() > 400) {

             $('.scrollup').fadeIn();

         } else {

             $('.scrollup').fadeOut();

         }

     });

 });

 })(jQuery);

 // Action

   (function($) { "use strict";

$("a.scrolltotop[href^='#']").on('click', function(e) {



   // prevent default anchor click behavior

   e.preventDefault();



   // store hash

   var hash = this.hash;



   // animate

   $('html, body').stop().animate({scrollTop:0}, 1000, 'easeOutExpo');



});

 })(jQuery);

  // ========== END SCROLL TO TOP ========== //
  
  // ========== 9. START SCROLLTO SCRIPT ========== //

     (function($) { "use strict";

$("a.scrollto[href^='#']").on('click', function(e) {



   // prevent default anchor click behavior

   e.preventDefault();



   // store hash

   var hash = this.hash;



   // animate

   $('html, body').stop().animate({

       scrollTop: $(hash).offset().top -60}, 1200, 'easeInOutExpo');



});

 })(jQuery);

 // ========== END SCROLL TO SCRIPT ========== //
