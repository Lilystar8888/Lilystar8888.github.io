/// <reference path="js/config.js" />

$$('owlcarousel', function () {
	$('.advertisement .owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		autoplay:true,
    	autoplayTimeout:6000,
    	autoplayHoverPause:true
	});
	$('.stage .owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		nav:true
	});
});
