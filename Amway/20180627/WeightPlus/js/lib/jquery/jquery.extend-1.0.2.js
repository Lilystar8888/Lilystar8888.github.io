/// <reference path="../../config.js" />

(function (factory) {
	typeof define === 'function' && define.amd ? define(['jquery'].concat(window['JSON'] ? [] : ['json2']), factory) : factory(jQuery);
} (function () {
	// #region $ 的擴充 function
	var ua = navigator.userAgent;
	// 是否為 iPad
	$.isiPad = /ipad;/i.test(ua);
	$.isIOS = $.isiPad || /(iphone|ipod);/i.test(ua);
	$.isAndroid = /(android)/i.test(ua);
	// 是否為行動裝置
	$.isMobile = $.isIOS || $.isAndroid;

	//http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
	$.isTouchSupport = 'ontouchstart' in window // works on most browsers
				|| 'onmsgesturechange' in window; // works on ie10

	//洗牌，會改變原有array
	$.shuffle = function (arr) {
		for (var i = arr.length; i>0;i--) {
			arr.push(arr.splice(~~(Math.random()*i),1)[0]);
		}
		return arr || [];
	};
	$.val = function(o, props){
		var v;
		if (typeof(o)==='undefined'){return v;}
		props = props.split('.');
		for(var i = 0; i < props.length;i++) {
			v = o[props[i]];
			if (typeof(v) === 'undefined') {break;}
			o = v;
		}
		return v;
	};

	// 是否支援 Flash
	$.isFlashSupported = function () {
		if (window.ActiveXObject) {
			try {
				if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash'))
					return true;
			} catch (e) { }
		}

		return navigator.plugins['Shockwave Flash'] ? true : false;
	};

	// 驗證是否為中文
	$.validChinese = function (s) { return /^[\u4E00-\u9FFF]*$/.test('' + s); };
	// 驗證 Email
	$.validEMail = function (s) { return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test('' + s); };
	// 驗證手機號碼
	$.validMobile = function (s) { return /^09[0-9]{8}$/.test('' + s); };
	// 驗證電話號碼
	$.validTel = function (s) { return /(^0([0-9]{8,9})+((\#([0-9]){1,5}){0,1})$)|(^0([0-9]{1,2})\-([0-9]{6,8})+((\#([0-9]){1,5}){0,1})$)|(^\(0([0-9]{1,2})\)([0-9]{6,8})+((\#([0-9]){1,5}){0,1})|(^09[0-9]{8})|(^09[0-9]{2})+(\-([0-9]{6}))|(^09[0-9]{2})+(\-([0-9]{3}))+(\-([0-9]{3}))$)/.test('' + s); };

	// 以目前位址取得檔案網址(可用 .. 或 ~)
	$.resolve = function (url) {
		url = url.replace(/^~\//, CONST.root || '/');
		if (!url) return window.location.href;
		var b = document.createElement('div');
		b.innerHTML = '<a href="' + url.replace(/"/g, '&quot;') + '"></a>';
		return b.firstChild.href;
	};

	$.static = function (url) {
		url = url.replace(/^~\//, CONST.static || CONST.root || '/');
		return $.resolve(url);
	};

	// 取得 query string 參數值
	$.queryString = function (s) {
		var q = window.location.search.substring(1).split('&');
		for (i = 0; i < q.length; i++)
			if (q[i].split('=')[0] == s) return decodeURIComponent(q[i].split('=')[1]);
		return '';
	};

	// 取得 hash 參數值
	$.hashString = function (s) {
		var q = window.location.hash.substring(1).split('&');
		for (i = 0; i < q.length; i++)
			if (q[i].split('=')[0] == s) return decodeURIComponent(q[i].split('=')[1]);
		return '';
	};

	// 取得地理位置
	$.geoLocation = function (options) {
		var d = $.Deferred();

		function fallback() {
			$.getJSON('//freegeoip.net/json/?callback=?').done(function (o) {
				d.resolve(o.latitude, o.longitude);
			}).fail(function () {
				var def = options['default'];
				def ? d.resolve(def.lat, def.lng) : d.reject();
			});
		};

		if (navigator.geolocation) {
			options = typeof (options) === typeof (1)
				? { enableHighAccurary: false, maximumAge: 0, timeout: options }
				: $.extend({}, { enableHighAccurary: false, maximumAge: 0, timeout: 15000 }, options);
			navigator.geolocation.getCurrentPosition(function (position) {
				d.resolve(position.coords.latitude, position.coords.longitude);
			}, fallback, options);
		}
		else {
			fallback();
		}
		return d.promise();
	};

	// 參數中只要有一個 Deferred 完成(done), 或全部的 Deferred 都失敗(fail), 則執行回傳的 done or fail
	$.any = function () {
		var d = $.Deferred();
		var len = arguments.length;
		if (arguments.length) {
			$.each(arguments, function (i, o) {
				o.done(function () {
					d.resolve();
				})
				.fail(function () {
					--len || d.reject();
				});
			});
		} else {
			d.resolve();
		}
		return d.promise();
	};

	// 延遲執行, $.delay(1000).done(function() { ... });
	$.delay = function (ms) {
		var d = $.Deferred();
		setTimeout(d.resolve, ms);
		return d;
	};

	// 重覆執行直到 fn 回傳 false, immediate: 是否第一次就立即執行 fn
	$.repeat = function (fn, ms, immediate) {
		var d = $.Deferred();
		var tid;
		(function f() {
			var b = true;
			if (immediate) {
				b = fn();
			}
			immediate = true;
			if (b===false) {
				d.reject();
			} else {
				clearTimeout(tid);
				tid = setTimeout(f, ms);
			}
		})();
		return d.fail(function() { clearTimeout(tid); });
	};

	//#region 呼叫後端 API, 若有傳 o 參數則為 POST, 無則為 GET
	$.callAPI = function (url, o, s) {
		var setting = $.extend({}, $.callAPI.settings, s);

		setting['url'] = url;
		if (o) $.extend(setting, { type: 'POST', data: o });

		function alertErrMsg(msg) { if (setting.alertErrMsg) { alert(setting.alertErrMsg); } return msg; }

		if (!setting.isHideLoading)
			setting['beforeSend'] = function () { $.loading(250); };

		var d = $.Deferred();
		$.ajax(setting).done(function (data, status, req) {
			var oResult = data;
			if ($.trim(data).substr(0, 1) == '{') {
				oResult = JSON.parse(data);
				if (oResult.ErrMsg || oResult.ErrorMessage) {
					d.reject.apply(d, [alertErrMsg(oResult.ErrMsg || oResult.ErrorMessage), req, 'error', 'Response Error Data']);
					return;
				}
			}
			d.resolve.apply(d, [oResult].concat(Array.prototype.slice.call(arguments, 1)));
		}).fail(function (req) {
			req ?
				req.status == 0 ?
					d.reject.apply(d, [alertErrMsg('0: unknow!!')].concat(Array.prototype.slice.call(arguments, 0)))
					:
					d.reject.apply(d, [alertErrMsg(req.status + ": " + req.statusText)].concat(Array.prototype.slice.call(arguments, 0)))
				:
				d.reject.apply(d, [alertErrMsg('999: error!!')].concat(Array.prototype.slice.call(arguments, 0)))
			;
		}).always(function () {
			if (!setting.isHideLoading) $.loading('hide');
		});

		return d.promise();
	};

	$.callAPI.settings = {
		global: false
		, cache: false
		, async: true
		, dataType: 'html'
		, type: 'GET'
		, timeout: 60000
		, alertErrMsg: '伺服器忙碌中，請稍候再試。'
		, isHideLoading: false
	};
	//#endregion

	//#region 顯示或隱藏 Loading 畫面, command: 'hide' --> 隱藏, command: 整數 --> 延遲 n 毫秒後才顯示
	(function () {
		var tmDelayLoading = null;
		$.loading = function (command) {
			if (tmDelayLoading) {
				clearTimeout(tmDelayLoading);
				tmDelayLoading = null;
			}

			if (command == 'hide') {
				$('#ibLoading').remove();
			} else {
				if ($('#ibLoading').length) return;

				function add() {
					if ($('#ibLoading').length) return;

					$('<div id="ibLoading"><div/><img/></div>')
					.css({
						display: 'block'
						, position: 'fixed'
						, top: 0, left: 0, width: '100%', height: '100%'
						, 'z-index': $.loading.settings.zIndex
					})
					.find('div').css({
						position: 'absolute'
						, 'background-color': $.loading.settings.overlayBgColor
						, opacity: $.loading.settings.overlayOpacity
						, top: 0, left: 0, width: '100%', height: '100%'
					}).end()
					.find('img').attr('src', $.loading.settings.imageURL).css({
						position: 'absolute'
						, top: '50%', left: '50%'
						, 'margin-top': '-' + ($.loading.settings.imageHeight / 2) + 'px', 'margin-left': '-' + ($.loading.settings.imageWidth / 2) + 'px'
						, width : $.loading.settings.imageWidth
						, height : $.loading.settings.imageHeight
					}).end()
					.appendTo('body')
					;
				}

				if ($.isNumeric(command))
					tmDelayLoading = setTimeout(add, command);
				else
					add();
			}
		};

		$.loading.settings = {
			overlayBgColor: '#000'  // 遮罩顏色
			, overlayOpacity: 0.7   // 遮罩透明度
			, zIndex: 99999999	  // z-index
			, imageURL: '//www.facebook.com/images/loaders/indicator_blue_large.gif'	// 圖檔位址
			, imageWidth: 32		// 圖檔寬
			, imageHeight: 32	   // 圖檔高
		};
	})();
	//#endregion

	//#endregion

	//#region $() 的擴充 plugin
	// 以資料(object)套用模板, 取得 HTML (可傳入array objject, 取得多筆)
	$.fn.template = function (o) {
		var me = this;
		return $.map($.isArray(o) ? o : [o], function (o) {
			var str = me.html().replace('<!--', '').replace('-->', '');
			while (m = str.match(/\{(\w+)\}/)) {
				str = str.replace(m[0], o[m[1]] || '');
			}
			return str;
		}).join('');
	};

	// 使用one方式, 並以回傳值來判斷回種的時機, 
	// 回傳Deferred時 -> 並在Deferred的always時才會回種
	// 否則 -> 直接回種
	$.fn.once = function () {
		var o_args = arguments;
		return this.each(function () {
			var THISOBJ = this;
			var args = [];
			$(o_args).each(function (k, v) {
				if ($.isFunction(v)) {
					args.push(function () {
						var ret = v.apply(this, Array.prototype.slice.call(arguments, 0));
						if ($.isPlainObject(ret)) {
							ret.always(function () {
								$(THISOBJ).one.apply($(THISOBJ), args);
							});
						} else {
							$(THISOBJ).one.apply($(THISOBJ), args);
						}
					});
				} else
					args.push(v);
			});

			$(THISOBJ).one.apply($(THISOBJ), args);
		});
	};

	//#endregion


}));