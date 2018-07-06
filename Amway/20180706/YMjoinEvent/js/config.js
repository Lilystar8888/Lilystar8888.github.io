/// <reference path="lib/reference/jquery-1.10.2.js" />
/// <reference path="lib/reference/FB.Javascript.SDK.js" />
/// <reference path="lib/reference/swfobject.js" />
/// <reference path="lib/reference/createjs/reference.js" />
/// <reference path="lib/reference/crypto-1.0.0.js" />
/// <reference path="lib/reference/resumable-1.0.0.js" />

/// <reference path="lib/requirejs/json2.min.js" />

/// <reference path="lib/swfobject/swffit.min.js" />

/// <reference path="lib/jquery/jquery.easing.min.js" />
/// <reference path="lib/jquery/jquery.cookie.min.js" />
/// <reference path="lib/jquery/jquery.tinyscrollbar.min.js" />
/// <reference path="lib/jquery/jquery.colorbox.min.js" />
/// <reference path="lib/jquery/owl.carousel2.js" />
/// <reference path="lib/jquery/jquery.jgestures.js" />
/// <reference path="lib/jquery/jquery.velocity.js" />
/// <reference path="lib/jquery/jquery.velocity-ui.js" />

/// <reference path="lib/megapix/binaryajax.js" />
/// <reference path="lib/megapix/exif.js" />
/// <reference path="lib/megapix/megapix-image.js" />

/// <reference path="lib/filter/caman.full.js" />
/// <reference path="lib/filter/caman.extend-1.0.0.js" />

/// <reference path="lib/jquery/jquery.extend-1.0.2.js" />
/// <reference path="lib/jquery/jquery.niceSelect-0.4.js" />
/// <reference path="lib/jquery/jquery.lightbox-1.0.5.js" />
/// <reference path="lib/jquery/jquery.cityZone-1.0.0.js" />
/// <reference path="lib/jquery/jquery.form-1.0.0.js" />
/// <reference path="lib/jquery/jquery.viewed-1.0.0.js" />
/// <reference path="lib/jquery/jquery.upload-1.0.1.js" />
/// <reference path="lib/jquery/jquery.gif-0.1.js" />
/// <reference path="lib/jquery/jquery.socketio-1.0.0.js" />
/// <reference path="lib/jquery/jquery.motion-1.0.0.js" />
/// <reference path="lib/jquery/jquery.youtube-1.0.0.js" />
/// <reference path="lib/jquery/jquery.selectphoto-1.0.0.js" />

/// <reference path="lib/facebook/jquery.fb-1.0.11.js" />
/// <reference path="lib/facebook/jquery.fb.photoPicker-1.0.0.js" />
/// <reference path="lib/facebook/jquery.fb.api-1.0.2.js" />
/// <reference path="lib/facebook/jquery.fb.connect-1.0.14.js" />
/// <reference path="lib/facebook/jquery.fb.fansPage.js" />
/// <reference path="lib/facebook/jquery.fb.friendPicker-1.0.0.js" />
/// <reference path="lib/facebook/jquery.fb.requireFB-1.0.0.js" />

/// <reference path="global.js" />


//#region fall back
var CONST = CONST || {};
var Config = Config || {};
var require = {};
(function(methods) {
	var method,
		noop = function () {},
		length = methods.length,
		console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];
		// Only stub undefined methods.
		console[method]||(console[method] = noop);
	}
})('assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn'.split(' '));
//#endregion
// 網站必須載入的套件
Config.GlobalRequire = Config.GlobalRequire || '';
Config.GlobalReady = Config.GlobalReady || '';

//#region JSLibPath, Min 
function JSLibPath(url) { return CONST.root + 'js/lib/' + url };
function JSLibPathMin(url, min) {
    return JSLibPath(location.hostname == 'localhost' ? url : min ? min : url + '.min');
};
function Min(url, min) {
    return location.hostname == 'localhost' ? url : min ? min : url + '.min';
};
//#endregion

(function() {
	//#region _$
	// document ready
	window._$ = (function () {
		var a = function (f) { return a.r ? f() : a.q.push(f) }
		function f(b, c, d, e) {
			for (a.r = 1; b = a.q.shift(); )
				b();
		}
		a.q = [];
		document.addEventListener ? document.addEventListener("DOMContentLoaded", f, !1) : document.attachEvent("onreadystatechange", f);
		return a;
	})();
	//#endregion

	//#region $$
	window.$$ = function(modules, ready, fn) {
		var noop = function() { };
		if (typeof (modules) === typeof (noop)) {
			fn = modules;
			modules = [];
			ready = [];
		}
		if (typeof (ready) === typeof (noop)){
			fn = ready;
			ready = [];
		}

		if (typeof (modules) === typeof ('')) {
			modules = modules == '' ? [] : modules.split(/[\s,;]+/);
		}

		if (typeof (ready) === typeof ('') && modules != '') {
			ready = ready.split(/[\s,;]+/);
		}

		modules = ['jquery'].concat((Config.GlobalRequire || '').split(/[\s,;]+/).concat(modules));
		ready = ['global','data-tracking'].concat((Config.GlobalReady || '').split(/[\s,;]+/).concat(ready));

		require(modules, function() {
			require(['plugin-settings'], function() {
				_$(function(){
					require(ready, fn);
				})
			});
		});
	};
	//#endregion

	var old = (function(){
			var div = document.createElement('div');
			div.innerHTML = '<!--[if lt IE 9]><i></i><![endif]-->';
			return !!div.getElementsByTagName('i')[0];
		}());

	// JS 模組設定
	require.paths = {
		'jquery': Min('//ajax.googleapis.com/ajax/libs/jquery/' + (old ? '1.12.0' : '2.2.0') + '/jquery')
		, 'jqueryui': Min('//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui')

		, 'json2': JSLibPath('requirejs/json2.min')
        
		, 'resumable': JSLibPath('reference/resumable-1.0.0.min')
		, 'crypto': JSLibPath('reference/crypto-1.0.0.min')

		, 'global': CONST.root + 'js/global'

		, 'swfobject': '//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject'
		, 'swffit': JSLibPath('swfobject/swffit.min')
		, 'owlcarousel': JSLibPath('jquery/owl.carousel2.min')

		, 'easing': JSLibPath('jquery/jquery.easing.min')
		, 'cookie': JSLibPath('jquery/jquery.cookie.min')
		, 'tinyscrollbar': JSLibPath('jquery/jquery.tinyscrollbar.min')
		, 'colorbox': JSLibPath('jquery/jquery.colorbox.min')
		, 'jgestures': JSLibPath('jquery/jquery.jgestures.min') // Mobile 上控制手勢或動作
		, 'velocity': JSLibPath('jquery/jquery.velocity.min')
		, 'velocity-ui': JSLibPath('jquery/jquery.velocity-ui.min')

		, 'binaryajax': JSLibPath('megapix/binaryajax.min') // exif 需要使用
		, 'exif': JSLibPath('megapix/exif.min') 
		, 'megapix': JSLibPath('megapix/megapix-image.min') 
		, 'skrollr': JSLibPath('jquery/skrollr.min')//分層動畫

		, 'caman_base': JSLibPathMin('filter/caman.full') // 濾鏡
		, 'filter': JSLibPathMin('filter/caman.extend-1.0.0') // 濾鏡擴充

		, 'extend': JSLibPathMin('jquery/jquery.extend-1.0.2')
		, 'niceSelect': JSLibPathMin('jquery/jquery.niceSelect-0.4')
		, 'lightbox': JSLibPathMin('jquery/jquery.lightbox-1.0.5')
		, 'cityZone': JSLibPathMin('jquery/jquery.cityZone-1.0.0') // 縣市區域 select 控制
		, 'form': JSLibPathMin('jquery/jquery.form-1.0.0') // 表單以 api 送出
		, 'viewed': JSLibPathMin('jquery/jquery.viewed-1.0.0') // 判斷 element 是否被看到
		, 'upload': JSLibPathMin('jquery/jquery.upload-1.0.1') // Mobile 上傳照片
		, 'gif': JSLibPathMin('jquery/jquery.gif-0.1')
		, 'socketio': JSLibPathMin('jquery/jquery.socketio-1.0.0')
		, 'motion': JSLibPathMin('jquery/jquery.motion-1.0.0') // 判斷手機動作
		, 'youtube': JSLibPathMin('jquery/jquery.youtube-1.0.0') // Youtube Player影片播放控制
		, 'selectphoto': JSLibPathMin('jquery/jquery.selectphoto-1.0.0') // 選擇相片

		, 'fb': JSLibPath('facebook/jquery.fb-1.0.11') // facebook 基本控制
		, 'fbapi': JSLibPathMin('facebook/jquery.fb.api-1.0.2') // 個人資料收集
		, 'connect': JSLibPathMin('facebook/jquery.fb.connect-1.0.14') // facebook connect 基本控制
		, 'fansPage': JSLibPathMin('facebook/jquery.fb.fansPage-1.0.0') // 加入 facebook 粉絲團
		, 'friendPicker': JSLibPathMin('facebook/jquery.fb.friendPicker-1.0.0') // 挑選 facebook 朋友
		, 'photoPicker': JSLibPathMin('facebook/jquery.fb.photoPicker-1.0.0') // 挑選 facebook 照片
		, 'requireFB': JSLibPathMin('facebook/jquery.fb.requireFB-1.0.0') //  facebook connect + 限制加入粉絲團(選配)

		, 'plugin-settings': CONST.root + 'js/plugin-settings' // attribute data-tracking 自動送出 tracking
		, 'data-tracking': JSLibPathMin('ready/data.tracking-1.0.0') // attribute data-tracking 自動送出 tracking
		, 'fb-ready': JSLibPathMin('ready/fb.ready-1.0.0') // 自動 init FB 及一些工具
	};

	// JS 模組相依性設定
	require.shim = {
		'jqueryui': ['jquery']
		, 'swffit': ['swfobject']
	};
})();
