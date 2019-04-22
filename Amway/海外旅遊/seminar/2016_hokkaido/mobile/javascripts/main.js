/**
 * Created by arielyih on 2/1/16.
 */
var screenWidth = 0, screenHeight = 0, wrapRight = 0;

function onUpdateReady() {
  //alert('資料下載完畢');
  showMessage('資料下載完畢');
  window.applicationCache.swapCache();
  //console.log('found new version!');
}


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
    //if ($('iframe').length) iframeInit();
    // rebuilt
    if (screenWidth<768 && !$('#content').length){
        $('#main').css('min-height', screenHeight-$('header').height());
    }


    if(window.applicationCache){

        var appCache = window.applicationCache;

        window.applicationCache.addEventListener('updateready', onUpdateReady);

        if(window.applicationCache.status === window.applicationCache.UPDATEREADY){
          onUpdateReady();
        }

        // Fired after the first cache of the manifest.
        appCache.addEventListener('cached', handleCacheEvent, false);

        // Checking for an update. Always the first event fired in the sequence.
        appCache.addEventListener('checking', handleCacheEvent, false);

        // An update was found. The browser is fetching resources.
        appCache.addEventListener('downloading', handleCacheEvent, false);

        // The manifest returns 404 or 410, the download failed,
        // or the manifest changed while the download was in progress.
        appCache.addEventListener('error', handleCacheError, false);

        // Fired after the first download of the manifest.
        appCache.addEventListener('noupdate', handleCacheEvent, false);

        // Fired if the manifest file returns a 404 or 410.
        // This results in the application cache being deleted.
        appCache.addEventListener('obsolete', handleCacheEvent, false);

        // Fired for each resource listed in the manifest as it is being fetched.
        appCache.addEventListener('progress', handleCacheEvent, false);

        // Fired when the manifest resources have been newly redownloaded.
        appCache.addEventListener('updateready', handleCacheEvent, false);

        //alert("status:" + getCacheStatus());
        showMessage("status:" + getCacheStatus());


    }else{
        //alert("not support html5 cache");
        showMessage("not support html5 cache");

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


function handleCacheEvent(e) {
  //...
  var status = getCacheStatus();

  if(status == "DOWNLOADING"){
      $('.mask').show();

      if($(".info")){
        showLoading();
      }

  }else if(status == "UPDATEREADY" || status == "IDLE"){

      $('.mask').hide();
      hideLoading();

  }else{
    showMessage(status);  
  }
  
}


function showLoading(){
    var wording = "資料更新中";
    var dw = $(".info").text();
    if(dw == ""){
        dw = wording;
    }else{
        dw += ".";
    }
    if(dw.length > (5 + wording.length))
        dw = wording;
    $(".info").css({'top':(screenHeight/2-30)+'px'});
    $(".info").show();
    $(".info").text(dw);
}

function hideLoading(){
    $(".info").text("");
    $(".info").hide();
}



function showMessage(msg){

  if($(".info")){
    $(".info").text(msg);
  }else if(console.log){
    console.log(msg);
  }else{
    alert(msg);  
  }
}

function handleCacheError(e) {
  //alert('Error: Cache failed to update!');
  //showMessage('Error: Cache failed to update! '+e.type);
};


function getCacheStatus(){
    
    var appCache = window.applicationCache;

    switch (appCache.status) {
      case appCache.UNCACHED: // UNCACHED == 0
        return 'UNCACHED';
        break;
      case appCache.IDLE: // IDLE == 1
        return 'IDLE';
        break;
      case appCache.CHECKING: // CHECKING == 2
        return 'CHECKING';
        break;
      case appCache.DOWNLOADING: // DOWNLOADING == 3
        return 'DOWNLOADING';
        break;
      case appCache.UPDATEREADY:  // UPDATEREADY == 4
        return 'UPDATEREADY';
        break;
      case appCache.OBSOLETE: // OBSOLETE == 5
        return 'OBSOLETE';
        break;
      default:
        return 'UKNOWN CACHE STATUS';
        break;
    };
}

