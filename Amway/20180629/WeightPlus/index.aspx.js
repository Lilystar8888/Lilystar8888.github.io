/// <reference path="js/config.js" />

$$('owlcarousel', function () {

    //alert($.objEmotionalMsg);
    //alert(gFeedInfo[1].name);
    $('.advertisement .owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		autoplay:true,
    	autoplayTimeout:6000,
    	autoplayHoverPause:true
	});
	$('.portal-left a').on('click',function(){
    	$('body,html').animate({scrollTop:950},'slow')
    });
    $('.portal-right a').on('click',function(){
        $('body,html').animate({scrollTop:1990},'slow')
    });
});
