/// <reference path="../../config.js" />

/*
使用範例:

 *** 若限制要加入粉絲時, 請加入 fansPage module *** 例如: $$('fb,requireFB,fansPage', function () { .. });

HTML:
<a href="javascript:;" data-tracking="" requireFB >FB Connect</a>

JS:
$$('fb,requireFB', function () {
    $.fb.init().done(function () {
        $.fb.getLoginStatus().always(function (AResponse) {
            $('[requireFB]')
            .on($.fn.requireFB.events.REQUIRE_FB_SUCCESS, function (event, fbid, accessToken) {
                // 成功時執行
                console.log('REQUIRE_FB_SUCCESS');
            })
            .on($.fn.requireFB.events.REQUIRE_FB_FAIL, function () {
                // 失敗時執行
                console.log('REQUIRE_FB_FAIL');
            })
            .requireFB();
        });
    });
});

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'connect'], factory) : factory(jQuery);
} (function () {
    $.fn.requireFB = function () {
        var $activeRequireFBElement = $($.fn.requireFB.settings.bindingSelector).eq(0);

        if ($.fb.fansPage) {
            $.fb.fansPage({
                onShow: function (ALightbox, AOverlay) {
                    $activeRequireFBElement.trigger($.fn.requireFB.events.FANS_PAGE_SHOW, [ALightbox, AOverlay]);
                }
                , onHide: function (AIsJoin) {
                    $activeRequireFBElement.trigger($.fn.requireFB.events.FANS_PAGE_HIDE, [AIsJoin]);
                }
            });
        }
        if ($.fb.connect) {
            $.fb.connect({
                onLogin: function () {
                    $activeRequireFBElement.trigger($.fn.requireFB.events.CONNECT_LOGIN);
                }
                , onSuccess: function (AUserID, AAccessToken) {
                    $activeRequireFBElement.trigger($.fn.requireFB.events.CONNECT_SUCCESS, [AUserID, AAccessToken]);
                    if ($.fb.fansPage) {
                        return $.fb.fansPage().done(function () {
                            $activeRequireFBElement.trigger($.fn.requireFB.events.FANS_PAGE_SUCCESS, [AUserID, AAccessToken]);
                            $activeRequireFBElement.trigger($.fn.requireFB.events.REQUIRE_FB_SUCCESS, [AUserID, AAccessToken]);
                        }).fail(function () {
                            $activeRequireFBElement.trigger($.fn.requireFB.events.FANS_PAGE_FAIL);
                            $activeRequireFBElement.trigger($.fn.requireFB.events.REQUIRE_FB_FAIL);
                        });
                    } else {
                        $activeRequireFBElement.trigger($.fn.requireFB.events.REQUIRE_FB_SUCCESS, [AUserID, AAccessToken]);
                    }
                }
                , onFail: function () {
                    $activeRequireFBElement.trigger($.fn.requireFB.events.CONNECT_FAIL);
                    $activeRequireFBElement.trigger($.fn.requireFB.events.REQUIRE_FB_FAIL);
                }
            });

            $($.fn.requireFB.settings.bindingSelector).once($.fn.requireFB.settings.bindingEvent, function () {
                $activeRequireFBElement = $(this);
                return $.fb.connect();
            });
        }

        return this;
    };

    $.fn.requireFB.settings = {
        bindingSelector: '[requireFB]'
        , bindingEvent: window['CLICK'] ? window['CLICK'] : 'click'
    };

    $.fn.requireFB.events = {
        REQUIRE_FB_SUCCESS: 'requireFB:success' // 當授權及加入粉絲(fansPage)成功時         參數: event, AUserID, AAccessToken
        , REQUIRE_FB_FAIL: 'requireFB:fail'     // 當授權及加入粉絲(fansPage)失敗時
        , CONNECT_LOGIN: 'connect:login'        // 當需要登入時                             參數: event, AUserID, AAccessToken
        , CONNECT_SUCCESS: 'connect:success'    // 當授權成功時                             參數: event, AUserID, AAccessToken
        , CONNECT_FAIL: 'connect:fail'          // 當授權失敗時
        , FANS_PAGE_SUCCESS: 'fansPage:success' // (fansPage)當加入粉絲成功時               參數: event, AUserID, AAccessToken
        , FANS_PAGE_FAIL: 'fansPage:fail'       // (fansPage)當加入粉絲(fansPage)失敗時
        , FANS_PAGE_SHOW: 'fansPage:show'       // (fansPage)當加入粉絲窗(fansPage)顯示時   參數: event, ALightbox, AOverlay
        , FANS_PAGE_HIDE: 'fansPage:hide'       // (fansPage)當加入粉絲窗(fansPage)隱藏時   參數: event, AIsJoin
    };


}));