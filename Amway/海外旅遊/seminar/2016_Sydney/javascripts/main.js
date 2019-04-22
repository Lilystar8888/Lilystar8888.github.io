/**
 * Created by arielyih on 2/1/16.
 */
var screenWidth = 0, screenHeight = 0, wrapRight = 0;

$(function(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    if (screenWidth<768) fontInit();
    else{
        wrapRight = (screenWidth-400)/2;
        $('#wrap').css({'margin-left': wrapRight, 'right': wrapRight, 'position': 'static'});
        $('#backTop').css({'right': wrapRight-100});
    }
    if ($('map').length) $('img[usemap]').rwdImageMaps();
    if ($('#ham-nav').length) hamburgerInit();
    if ($('#openClose').length) switchOpenCloseInit();
    backTopInit();
    $('.mask').css({'backgroundColor': 'rgba(0,0,0,0.5', 'display': 'none'});
});

$(window).load(function(){
    if ($('iframe').length) iframeInit();
    // rebuilt
    if (screenWidth<768 && !$('#content').length){
        $('#main').css('min-height', screenHeight-$('header').height());
    }
});

// reset font size
function fontInit(){
    var fontRatio = 24/640;
    $('body').css('font-size', screenWidth*fontRatio);
}

// back to top
function backTopInit(){
    var $backTop = $('#backTop');
    $backTop.show();
    $backTop.click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });
}

// switch close open area
function switchOpenCloseInit(){
    $('.openClose-area').click(function(){
        $('.openClose-area.open').removeClass('open');
        $(this).addClass('open');
    });
}

// set iframe height
function iframeInit(){
    var $iframe = $('iframe'), headerHeight = $('header').height(), $connectFail = $('.connectFail'), footerHeight = $('footer').height();
    // remind
    if ($iframe.hasClass('remind')) $iframe.css('height', 1286*screenWidth/640);
    // online
    if ($iframe.hasClass('online')) $iframe.css('height', 718*screenWidth/640);
    // article
    if ($iframe.hasClass('article')) $iframe.css('height', 1286*screenWidth/640);
    // namelist
    if ($iframe.hasClass('namelist')) $iframe.css('height', 1005*screenWidth/640);
    // video
    if ($iframe.hasClass('video')) $iframe.css('height', 1005*screenWidth/640);
    // photos
    if ($iframe.hasClass('photos')) $iframe.css('height', 1005*screenWidth/640);
    // when connect is offline
    if (!navigator.onLine){
        $connectFail.removeClass('hidden');
        $iframe.hide();
        $('.connectFail-text').css('height', screenHeight-headerHeight-footerHeight);
    }
}