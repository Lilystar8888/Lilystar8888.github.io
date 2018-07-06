/// <reference path="../../config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {
    var goInitDeferred = $.Deferred();
    var init = false;

    $.fb = {
        api: function () {
            var THISOBJ = this;
            var oaArgs = Array.prototype.slice.call(arguments);

            var oDeferred = $.Deferred();

            var oaFBApiArgs = oaArgs.concat([function (AResponse) {
                if ((('' + AResponse).toLowerCase() == 'true') || (('' + AResponse).toLowerCase() == 'false')) {
                    oDeferred.reject(AResponse);
                } else if (AResponse.error && AResponse.error.message) {
                    console.log('fb.api', AResponse.error.message);
                    oDeferred.reject(AResponse.error.message, AResponse.error);
                } else
                    oDeferred.resolve(AResponse);
            } ]);

            goInitDeferred.done(function () {
                FB.api.apply(FB, oaFBApiArgs);
            });

            return oDeferred.promise();
        },
        fql: function (fql) {
            return this.api('fql', { q: fql });
        },

        login: function (AOpts) {
            var oDeferred = $.Deferred();
            goInitDeferred.done(function () {
                FB.login(function (AResponse) {
                    if ((AResponse.authResponse) && (AResponse.status == 'connected')) {
                        oDeferred.resolve(AResponse.authResponse.userID, AResponse.authResponse.accessToken, AResponse);
                    } else {
                        oDeferred.reject(AResponse);
                    }
                }, AOpts);
            });
            return oDeferred.promise();
        },

        ui: function (AOpts) {
            var oDeferred = $.Deferred();
            goInitDeferred.done(function () {
                FB.ui(AOpts, function (AResponse) {
                    if (AResponse != null) {
                        if (AOpts.method == 'apprequests') {
                            if (!AResponse.to) { return oDeferred.reject(); }
                        }
                        oDeferred.resolve(AResponse);
                    } else {
                        oDeferred.reject();
                    }
                });
            });
            return oDeferred.promise();
        },

        getLoginStatus: function () {
            var oDeferred = $.Deferred();
            goInitDeferred.done(function () {
                FB.getLoginStatus(function (AResponse) {
                    if ((AResponse.authResponse) && (AResponse.status == 'connected')) {
                        $('form[signedRequest]').each(function (i, v) {
                            var $sr = $(v).find('input[name="SignedRequest"]');
                            if ($sr.length == 0)
                                $('<input type="hidden" name="SignedRequest" />').val(FB.getAuthResponse().signedRequest).appendTo(v);
                            else
                                $sr.val(FB.getAuthResponse().signedRequest);
                        });
                        oDeferred.resolve(AResponse.authResponse.userID, AResponse.authResponse.accessToken, AResponse);
                    } else {
                        oDeferred.reject(AResponse);
                    }
                });
            });
            return oDeferred.promise();
        },

        post: function (url, data, settings, noErrorMsg) {
            data = $.extend(data || {}, { signedRequest: FB.getAuthResponse().signedRequest });
            var def = $.post(url, data, settings);
            if (!noErrorMsg) {
                def.fail(function () {
                    alert('伺服器忙碌中，請稍候再試。');
                });
            }
            return def;
        },
        get: function (url, data, settings, noErrorMsg) {
            data = $.extend(data || {}, { signedRequest: FB.getAuthResponse().signedRequest });
            var def = $.get(url, data, settings);
            if (!noErrorMsg) {
                def.fail(function () {
                    alert('伺服器忙碌中，請稍候再試。');
                });
            }
            return def;
        },

        init: function (ASetting) {
            if (init) { return goInitDeferred.promise(); }
            init = true;

            var setting = $.extend({
                appId: window['CONST'] ? CONST.appID : undefined,
                status: true,
                cookie: true,
                xfbml: true,
                oauth: true
            }, ASetting);

            $('body').prepend('<div id="fb-root"></div>');

            window.fbAsyncInit = function () {
                if (ASetting !== false)
                    FB.init(setting);

                goInitDeferred.resolve(setting);
            }

            var e = document.createElement('script');
            e.async = true;
            e.src = document.location.protocol + '//connect.facebook.net/zh_TW/all.js';
            document.getElementById('fb-root').appendChild(e);

            return goInitDeferred.promise();
        },

        share: function (link) {
            window.open(
                //'https://' + ($.isMobile ? 'm.facebook.com/sharer' : 'www.facebook.com/sharer/sharer.php') + '?u=' + encodeURIComponent(link)
                'https://www.facebook.com/share.php' + '?u=' + encodeURIComponent(link)
                , "fbsharer", "status = 1, height = 325, width = 580, resizable = 0"
            );
        },

        feed: function (link, redirect_uri, picture, name, description) {
            var inFbApp = window['CONST'] ? CONST.inFbApp : /FBIOS/i.test(navigator.userAgent) || (/(android)/i.test(navigator.userAgent) && /FBAV/i.test(navigator.userAgent));

            function uiFeed() {
                FB.ui({
                    method: 'feed'
	                , name: name ? name : $('meta[property="og:title"]').attr('content')
	                , description: description ? description : $('meta[property="og:description"]').attr('content')
	                , picture: picture ? $.static(picture) : $('meta[property="og:image"]').attr('content')
	                , caption: location.hostname
	                , link: link ? link : location.href
                }, function (r) {
                    if (redirect_uri)
                        location.href = redirect_uri;
                    else if ($.isFunction(redirect_uri))
                        redirect_uri();
                });
            }

            function urlFeed() {
                $.loading();
                setTimeout(function () {
                    location.href = 'https://m.facebook.com/dialog/feed?' + $.param({
                        method: 'feed'
	                    , app_id: window['CONST'] ? CONST.appID : undefined
	                    , display: 'touch'
	                    , name: name ? name : $('meta[property="og:title"]').attr('content')
	                    , description: description ? description : $('meta[property="og:description"]').attr('content')
	                    , picture: picture ? $.static(picture) : $('meta[property="og:image"]').attr('content')
	                    , caption: location.hostname
	                    , link: inFbApp ? encodeURIComponent(link ? link : location.href) : link ? link : location.href
	                    , redirect_uri: redirect_uri ? redirect_uri : location.href
                    });

                    if (inFbApp) {
                        setTimeout(function () {
                            location.href = redirect_uri ? redirect_uri : location.href;
                        }, 500);
                    }
                }, 400);
            }

            if (!$.isMobile || (inFbApp && $.isIOS)) {
                uiFeed();
            } else {
                uiFeed();
            }
        }
    }
}));