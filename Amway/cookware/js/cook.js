$(function () {
	//創意食譜
		$('.owl-carousel.cook-detail').owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            autoHeight:true,
            onInitialized: function () {
                $('.owl-dot').each(function (i) {
                    $(this).addClass('subtab' + (i + 1));
                });
            }
        });
});