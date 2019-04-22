var inFormOrLink;

$(function () {

    // 整個網站要用的 js 寫在這裡，例如主選單顯示/隱藏
    $('.top').on('click',function(){
        $('body,html').animate({scrollTop:0},'slow')
    });

    if ($.isMobile) {
        if (!$.isiPad || ($.isiPad && !CONST.isiPadUsePC)) {
            $(window).resize(function () {
                var vw = $(this).width();
                $('html').css({ fontSize: vw });
            }).resize();
        }
        $('.switch, .nav-overlay').on('touchstart',function(){
            $('body').toggleClass('open');
        });
        $('.top').hide();
        $(window).scroll(function(){
            if($(this).scrollTop() >20){
                $('.top').fadeIn();
            }else{
                $('.top').fadeOut();
            }
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
    }

    $('nav div.search a').click(function () {
        var val = $('nav div.search input[type=text]').val();
        if ($.trim(val).length == 0) return;
        if ($.isMobile) {
            location.href = 'https://www.amway.com.tw/weightplus/mobile/search-result.aspx?search=' + encodeURIComponent(val);
        }else{
            location.href = 'https://www.amway.com.tw/weightplus/search-result.aspx?search=' + encodeURIComponent(val);
        }
    });
    $('div.search-nav a.btn-inline').click(function () {
        var val = $('div.search-nav input[type=text]').val();
        if ($.trim(val).length == 0) return;
        if ($.isMobile) {
            location.href = 'https://www.amway.com.tw/weightplus/mobile/search-result.aspx?search=' + encodeURIComponent(val);
        }else{
            location.href = 'https://www.amway.com.tw/weightplus/search-result.aspx?search=' + encodeURIComponent(val);
        }
    });

    //$.objEmotionalMsg = "123";

    // mobile/menu.aspx li上加act
    if (location.pathname.indexOf("/mobile/") > -1) {
        var pname = location.pathname.replace("/mobile/", "");
        if (pname.length != 0)
            $('div.navarea nav a[href="' + pname + '"]').addClass('act');
    }
    else {
        //var pname = location.pathname.replace("/", "");
        var pname = location.pathname.substring(location.pathname.lastIndexOf('/')).replace("/", "");
        if (pname.length != 0)
            $('.nav1,.nav2,.nav3,.nav4').find('a[href="' + pname + '"]').parent().addClass('act');
    }

    //search按enter
    $('nav div.search input[type=text]').bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode                        
            e.preventDefault();
            $('nav div.search a').click();
        }
    });
    $('div.search-nav input[type=text]').bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode                        
            e.preventDefault();
            $('div.search-nav a.btn-inline').click();
        }
    });

    //$('#selector a.page-link').click(function () {
    //    $('body,html').animate({ scrollTop: 0 }, 'slow');
    //});
    $(document).bind('click', '.light-theme.simple-pagination a', function () {
        //$('body,html').animate({ scrollTop: 0 }, 'slow');
        //console.log($(this).text());
    });

    // if ($.isMobile){
    //     //mobile to pc
    //     if (document.body.clientWidth <= 600) {
    //         $('footer a.pc').click(function () {
    //             var date = new Date();
    //             var minutes = 30;
    //             date.setTime(date.getTime() + (minutes * 60 * 1000));
    //             $.cookie('CheckDeviceWebPage', true, { path: '/', expires: date });
    //             location.href = CONST.toPCUrl;
    //         });
    //     }
    //         //pc to mobile
    //     else {
    //         if (CONST.checkBrowser != true) {
    //             var date = new Date();
    //             var minutes = 30;
    //             var navigationType = window.performance.navigation.type;

    //             date.setTime(date.getTime() + (minutes * 60 * 1000));

    //             if (navigationType == "1" || navigationType == "2") {
    //                 $.cookie('CheckDeviceWebPage', true, { path: '/', expires: date });
    //             }

    //             var ckCheckDeviceWebPage = $.cookie('CheckDeviceWebPage');

    //             if (ckCheckDeviceWebPage != "true") {
    //                 var result = confirm("是否切換至手機版?");
    //                 $.cookie('CheckDeviceWebPage', true, { path: '/', expires: date });
    //                 if (result == true) {
    //                     location.href = CONST.toMobileUrl;
    //                 }
    //             }
    //         }
    //     }
    // }

    $(document).on("click", 'a', function () {
    //$('a').on('click', function () {
        inFormOrLink = true;
    });
    $(document).on("submit", 'form', function () {
    //$('form').on('submit', function () {
        inFormOrLink = true;
    });

    $(window).on("beforeunload", function (event) {
        //CallbackFunction(event);
        if (!inFormOrLink) {
            $.removeCookie('CheckDeviceWebPage');
        }
    })
});