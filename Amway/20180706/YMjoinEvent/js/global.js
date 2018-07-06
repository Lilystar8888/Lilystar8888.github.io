/// <reference path="config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'fb'], factory) : factory(jQuery);
}(function () {
    function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }

    // 整個網站要用的 js 寫在這裡，例如主選單顯示/隱藏
    $('.btn-top').on('click',function(){
        $('html , body').animate({
            scrollTop: 0
        }, 800);
    });
    if ($.isMobile) {
        // if (!$.isiPad || ($.isiPad && !CONST.isiPadUsePC)) {
        //     $(window).resize(function () {
        //         var vw = $(this).width();
        //         $('html').css({ fontSize: vw });
        //     }).resize();
        // }
        $('.menu').on('click', function() {
            $('.header').stop(true, true).toggleClass('open');
        });
    }
    else {
        if ($('html').hasClass('ie-static')) {
            $(window).resize(function () {
                var wh = $(window).width();
                $('html').removeClass('s1024').removeClass('s1440').removeClass('s1920');
                if (wh <= 1024)
                    $('html').addClass('s1024');
                else if (wh > 1024 && wh <= 1440)
                    $('html').addClass('s1440');
                else if (wh > 1440)
                    $('html').addClass('s1920');
            }).resize();
        }

        if (isIE() && isIE() <= 9) {
            $('body').css('display', 'none');
            alert('親愛的漾媽您好，由於您使用的瀏覽器版本無法支援本站的程式特效，請您改用GOOGLE Chorme瀏覽器，以取得更好的瀏覽體驗。謝謝您。');
        }

    }

    var shareURL = $.resolve("~/index.aspx");

    $('.nav-item.nav-item--fb').click(function () {
        $.fb.share(shareURL);
    });
}));