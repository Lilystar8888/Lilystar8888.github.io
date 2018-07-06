/// <reference path="../../config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'fb'], factory) : factory(jQuery);
} (function () {

    var gbIsInit = false;
    var gbIsConnecting = false;

    $.fb.connect = function (ASetting) {
        if (!gbIsInit)
            return init(ASetting);

        if (gbIsInitLogin)
            return;
        if (gbIsConnecting)
            return;

        gbIsConnecting = true;

        var deferred = $.Deferred();

        if (!FB.getAccessToken()) {
            goSetting.onLogin();

            $.loading(250);
            gaLogin();

            if (goSetting.redirectAuthURL) {
                $.delay(250).done(function () {
                    location.href = $.fb.connect.url();
                });
            } else {
                $.fb.login(goSetting.loginOption)
                .done(function (AUserID, AAccessToken) {
                    gaAuth();
                    $.delay(250).done(function () {
                        $.loading('hide');
                        addSignedRequest();
                        var ret = goSetting.onSuccess(AUserID, AAccessToken);
                        if ($.isPlainObject(ret)) {
                            ret.done(function () { deferred.resolve(); gbIsConnecting = false; }).fail(function () { deferred.reject(); gbIsConnecting = false; });
                        } else {
                            deferred.resolve();
                            gbIsConnecting = false;
                        }
                    });
                })
                .fail(function (AResponse) {
                    $.loading('hide');
                    var ret = goSetting.onFail();
                    if ($.isPlainObject(ret)) {
                        ret.always(function () { deferred.reject(); });
                    } else {
                        deferred.reject();
                        gbIsConnecting = false;
                    }
                });
            }
        } else {
            addSignedRequest();
            var ret = goSetting.onSuccess(FB.getUserID(), FB.getAccessToken());
            if ($.isPlainObject(ret)) {
                ret.done(function () { deferred.resolve(); gbIsConnecting = false; }).fail(function () { deferred.reject(); gbIsConnecting = false; });
            } else {
                deferred.resolve();
                gbIsConnecting = false;
            }
        }

        return deferred.promise();
    };


	$.fb.connect.redirect = function(settings){
		gaLogin();
		$.delay(250).done(function () {
			location.href = $.fb.connect.url(settings);
		});
	};
	$.fb.connect.url = function(settings){
		if (typeof(settings) == typeof('')){
			settings = {url:settings};
		}
		var o = $.extend({
						appID : goSetting.appID,
						scope : $.val(goSetting, 'loginOption.scope'),
						url : goSetting.redirectAuthURL || location.href
					},
					settings||{}
				);

        return 'https://www.facebook.com/dialog/oauth?' +
			'client_id=' + encodeURIComponent(o.appID) +
			'&redirect_uri=' + encodeURIComponent(o.url) +
			(o.scope ? '&scope=' + encodeURIComponent(o.scope) : '') +
			'&response_type=token';
	};
    var goSetting = $.fb.connect.settings = {
        // 登入選項 {}, scope: 授權項目
        loginOption: undefined
        // Facebook APP ID
        , appID: window['CONST'] ? CONST.appID : undefined
        // 使用轉址方式授權, 行動裝置請使用此方式
        , redirectAuthURL: undefined
        // GA 設定, login: 開啟登入窗時送, auth: 授權成功時送, 若己授權過則都不送
        , ga: $.isMobile ? { login: ['mobile', 'fb', 'login.frame'], auth: ['mobile', 'fb', 'auth']} : { login: ['pc', 'fb', 'login.frame'], auth: ['pc', 'fb', 'auth'] }
        // 當需要登入時
        , onLogin: function () { }
        // 連接成功時執行
        , onSuccess: function (AUserID, AAccessToken) { }
        // 連接失敗時執行
        , onFail: function (AResponse) { }
    };

    var gbIsInitLogin = false;

    function gaLogin() {
        window.ga && ga.apply(null, ['send', 'event'].concat(goSetting.ga.login));
        window._gaq&&_gaq.push(['_trackEvent'].concat(goSetting.ga.login));
    }
    function gaAuth() {
        window.ga && ga.apply(null, ['send', 'event'].concat(goSetting.ga.auth));
        window._gaq && _gaq.push(['_trackEvent'].concat(goSetting.ga.auth));
    }

    function addSignedRequest() {
        if (FB.getAccessToken()) {
            $('form[signedRequest]').each(function (i, v) {
                var $sr = $(v).find('input[name="SignedRequest"]');
                if ($sr.length == 0)
                    $('<input type="hidden" name="SignedRequest" />').val(FB.getAuthResponse().signedRequest).appendTo(v);
                else
                    $sr.val(FB.getAuthResponse().signedRequest);
            });
        }
    }

    function init(ASetting) {
        goSetting = $.fb.connect.settings = $.extend({}, $.fb.connect.settings, ASetting);


        if (goSetting.redirectAuthURL && (/access_token=\w{100,}/.test(location.hash) || /error=.+/.test(location.search))) {
        //if (/*goSetting.redirectAuthURL && */(/access_token=\w{100,}/.test(location.hash) || /error=.+/.test(location.hash))) {
            gbIsInitLogin = !/error=.+/.test(location.search);

            if (gbIsInitLogin) {
				//location.replace(location.pathname + location.search + '#');
                gaAuth();
                $.delay(250).done(function () {
                    addSignedRequest();
                    var ret = goSetting.onSuccess(FB.getUserID(), FB.getAccessToken());
                    if ($.isPlainObject(ret)) {
                        ret.always(function () { gbIsInitLogin = false; });
                    } else
                        gbIsInitLogin = false;
                });
            } else {
                var ret = goSetting.onFail();
                if ($.isPlainObject(ret)) {
                    ret.always(function () { gbIsInitLogin = false; });
                } else
                    gbIsInitLogin = false;
            }
        }

        gbIsInit = true;
    };


}));