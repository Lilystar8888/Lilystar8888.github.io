/// <reference path="js/config.js" />

$$('owlcarousel youtube', function () {
    //stage1 owl
    var stage1SettingLoop = {
        items:1,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000
    }
    var stage1SettingOne = {
        items:1,
        nav:false,
        dots:false
    }
    var stage1Setting = $('.stage1-owl .owl-item--link').length > 1 ? stage1SettingLoop : stage1SettingOne;
	$('.stage1-owl .owl-carousel').owlCarousel(stage1Setting);
    //stage4 owl
    $('.stage4-owl .owl-carousel').owlCarousel({
        items:1,
        nav:true,
        dots:true
    });
    //stage3 owl
    $('.stage3-owl .owl-carousel').owlCarousel({
        items: 1,
        merge: true,
        nav: true,
        dots: true,
        video: true,
        lazyLoad: true,
        center: true,
        nav: true,
        dots: true,
        autoHeight: true
    }).on('translated.owl.carousel', function (event) {
        $('.youtubevideo').youtube('pause');
    });

    var gbIsIFrameAPI = !($('html').hasClass('ie6') || $('html').hasClass('ie7') || $('html').hasClass('ie8') || $('html').hasClass('ie9'));
    console.log('youtube player -> ', gbIsIFrameAPI ? 'iframe' : 'flash');
    $.youtube.init(gbIsIFrameAPI).done(function () {
        $('.youtubevideo').each(function () {
            var $item = $(this);
            var sVideoID = $item.data('ytid');
            console.log(sVideoID);

            $item.on($.fn.youtube.events.READY, function () {
                console.log('index', sVideoID, 'READY');
            }).on($.fn.youtube.events.START, function () {
                console.log('index', sVideoID, 'START');
            }).youtube({
                videoId: sVideoID
                , quality: 'hd720'
                , playerVars: {
                    autoplay: 0
                    , controls: 1
                    , autohide: 1
                    , fs: 0
                    , cc_load_policy: 1
                    , hl: 'zh'
                    , playsinline: 1
                    , showinfo: 1
                }
            });
        });
    });
});