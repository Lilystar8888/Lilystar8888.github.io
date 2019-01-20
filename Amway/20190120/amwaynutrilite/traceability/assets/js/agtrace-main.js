$('#back-to-top').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
});

/*home*/
$(function() {
	$('#video-slider').slick({
  		dots: true,
  		arrows: false,
  		infinite: true,
  		autoplay: false
	});
	$('#products-slider').slick({
  		dots: true,
  		arrows: false,
  		infinite: false,
  		autoplay: false
	});
	$('.video-play-button').magnificPopup({
		type: 'iframe'
	});
});

/*process*/
$(function() {
	$('#process-steps').slick({ 
		dots: false,
		arrows: false,
		infinite: false,
		autoplay: false,
		swipe: false,
		draggable: false,
		adaptiveHeight: true
	});
	$('#process-nav a.nav-button').click(function() {
		$('#process-nav a.nav-button').parent().removeClass('active');
		$(this).parent().addClass('active');
		var slideID = $(this).attr('id').replace('process-nav-','');
		$('#process-steps').slick('slickGoTo', (slideID-1));
		$('.process-title-mobile').text($('#process-nav a.nav-button#process-nav-' + slideID).parent().children('.process-title').text());
	});

	if(window.location.hash) {
		var	slideHash = (window.location.hash).replace('#', '');
	  	//console.log(slideHash);
		$('#process-nav a.nav-button').parent().removeClass('active');
		//console.log('#process-nav a.nav-button#process-nav-' + slideHash);
		$('#process-nav a.nav-button#process-nav-' + slideHash).parent().addClass('active');
	  	$('#process-steps').slick('slickGoTo', (slideHash-1));
		$('.process-title-mobile').text($('#process-nav a.nav-button#process-nav-' + slideHash).parent().children('.process-title').text());

	}
});

/*product*/
$(function() {
	$('#product-content').slick({
		dots: false,
		arrows: false,
		infinite: false,
		autoplay: false,
		swipe: false,
		draggable: false,
		fade: true
	});

	$('#product-navigation a.nav-block').click(function() {
		$('#product-navigation a.nav-block').removeClass('active');
		$(this).addClass('active');
		var slideID = $(this).attr('id').replace('product-nav-','');
		
		/*handle desktop content*/
		$('#product-content').slick('slickGoTo', (slideID-1));

		/*handle mobile content*/
		$('.mobile-product-content').removeClass('open');
		$('.mobile-product-content#mobile-' + slideID).addClass('open');
	});

	$('.product-content-images').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: false
	});

});

/*farm*/
$(function() {
	$('.open-livestream').magnificPopup({
	  type:'inline', 
	  midClick: true
	});
});