/// <reference path="js/config.js" />

$$('youtube, colorbox, form', function () {
    var boxComingSoon = false;//控制顯示 敬請期待
    var cbDefaultSetting = {
        inline: true,
        open: true,
        speed: 350,
        width: '100%',
        transition: 'none',
        closeButton: false,
        overlayClose: false,
        escKey: false,
    };

    //close button
    $('.box-close').on('click', function () {
        $('.box-login, .box-login--error, .box-comingsoon').hide();
        location.href = document.referrer || "index.aspx";
    });

    //Coming Soon
    if (boxComingSoon) {
        $.colorbox($.extend(cbDefaultSetting, {
            href: $(".box-comingsoon"),
        }));
        return;
    }
    if (!Config.LoginName) {
        $('.btn--arrow').once('click', function () {
            return $('form').send(/*function(){
						//自訂資料驗證邏輯與 tracking
					}*/)
                .done(function (ret) {
                    if (ret.result) {
                        YoutubeInit();
                        $.colorbox.close();
                    }
                    else {
                        switch (ret.ErrorCode) {
                            case 1://無youngmom會員
                                $.colorbox($.extend(cbDefaultSetting, {
                                    href: $(".box-login--error"),
                                }));
                                break;
                            case 0://帳密錯誤
                            default:
                                $('.box-account').show();
                                break;
                        }
                    }
                })
                .fail(function (err) {
                    // 若 arguments.length == 0 則表示為 valid 錯誤
                    if (arguments.length)
                        console.log(err);
                })
                .always(function () {
                });
        });

        //login page
        $.colorbox($.extend(cbDefaultSetting, {
            href: $('.box-login'),
            onComplete: function () {
                $('.box-account').hide();
            },
        }));
    }
    else {
        YoutubeInit();
    }

    function YoutubeInit() {
        var gbIsIFrameAPI = !($('html').hasClass('ie6') || $('html').hasClass('ie7') || $('html').hasClass('ie8') || $('html').hasClass('ie9'));
        console.log('youtube player -> ', gbIsIFrameAPI ? 'iframe' : 'flash');
        $.youtube.init(gbIsIFrameAPI).done(function () {
            $('.school-video').each(function () {
                var $item = $(this);
                var sVideoID = $item.data('ytid');
                console.log(sVideoID);

                $item.on($.fn.youtube.events.READY, function () {
                    console.log('index', sVideoID, 'READY');
                }).on($.fn.youtube.events.START, function () {
                    console.log('index', sVideoID, 'START');
                }).on($.fn.youtube.events.STATE_CHANGE, function () {
                    var state = $item.youtube('getPlayerState');
                    console.log('index', sVideoID, state);
                    if (state === 0) $item.parent().find('.btn-tool--play').toggleClass('btn-tool--pause');
                }).youtube({
                    videoId: sVideoID
                    , quality: 'hd720'
                    , playerVars: {
                        autoplay: 0
                        , controls: 0
                        , autohide: 1
                        , fs: 0
                        , cc_load_policy: 0
                        , hl: 'zh'
                        , playsinline: 1
                    }
                });

                //click play or pause
                $item.parent().find('.btn-tool--play,.school-mask').click(function () {
                    $thisButton = $(this).parent().find('.btn-tool--play');
                    if ($thisButton.hasClass('btn-tool--pause'))
                        $item.youtube('pause');
                    else
                        $item.youtube('play');

                    $thisButton.toggleClass('btn-tool--pause');
                });

                //click replay
                $item.parent().find('.btn-tool--replay').click(function () {
                    $item.youtube('stop').youtube('play');
                    if (!$(this).parent().find('.btn-tool--play').hasClass('btn-tool--pause'))
                        $(this).parent().find('.btn-tool--play').addClass('btn-tool--pause');
                });

                //click play or pause
                $item.parent().find('.btn-tool--sound').click(function () {
                    if ($(this).hasClass('btn-tool--nosound'))
                        $item.youtube('unMute');
                    else
                        $item.youtube('mute');

                    $(this).toggleClass('btn-tool--nosound');
                });
            });
        });
    }


    $('a.clsAmCard').on('click', function () {
        if ($.isIOS) {
            window.location = 'mcard://';
        } else if ($.isAndroid) {
            window.location = 'intent://' + 'tw.com.amway.mcard' + '#Intent;scheme=mcard;package=tw.com.amway.mcard;S.browser_fallback_url=' + encodeURIComponent('https://app.amwaynet.com.tw/amcard/') + ';end';
        }
    });
});