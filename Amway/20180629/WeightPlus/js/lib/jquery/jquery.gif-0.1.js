/*! 
	Author: Ammon Lin
	version : 0.1
	All right reserved.
*/
(function(factory) {
	if (typeof define === 'function' && define.amd) { define(['jquery'], factory); }
	else { factory(jQuery); }
}(function($) {
	var isCanvasSupported = (function() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	})();

	var defaults = {
		loop: true, // 不斷重覆或次數
		frames: 0, // 總共幾張圖檔
		spf: 1000 / 30, // second per frame
		time: {}, // 設定某張的時間 , 例如  {'2':3000, '5',500}  表示第二張是三秒  第五張是零點五秒 其餘參考 spf
		useCanvas:true,
		filename: function(idx) { // 每張檔案的檔名
			return 'frames/' + idx + '.jpg';
		}
	};
	var events = {
		progress: 'gif:progress',
		loaded: 'gif:loaded',
		end: 'gif:end'
	};

	$.fn.gif = function(option) {
		var settings = $.extend({}, defaults, option);
		if (settings.loop === false) { settings.loop = 1; }
		return this.each(function() {
			var loop = settings.loop;
			if (settings.frames < 1) { throw '[jquery gif] frames must great than zero' }
			var def = $.Deferred().resolve();
			var me = $(this);
			for (var i = 0; i < settings.frames; i++) {
				(function(i) {
					def = def.then(function() {
						me.trigger(events.progress, ~~(i / settings.frames * 100));
						return $.get(settings.filename(i));
					});
				})(i);
			}
			me.data('deferred', def.then(function(img) {
				var idx = 0;
				var frames = settings.frames;
				me.trigger(events.progress, 100).trigger(events.loaded);
				var a = $('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />');
				var b = $('<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />');
				var toggle = !/\.png$/i.test(settings.filename(0));

				if (settings.useCanvas && isCanvasSupported) {
					var c = document.createElement('canvas');
					c.width = me.width();
					c.height = me.height();;
					me.append(c);
					var ctx = c.getContext('2d');
					var img = a.load(function() {
									ctx.clearRect(0, 0, c.width, c.height);
									ctx.drawImage(a[0], 0, 0);
								})[0];
					(function fn() {
						var spf = settings.time[idx] || settings.spf;
						img.src = settings.filename(idx++);
						idx %= frames;
						if (loop !== true && idx == 0 && --loop == 0) {
							return me.trigger(events.end);
						}
						setTimeout(fn, spf);
					})();
				
				} else {
					a.add(b).hide().appendTo(me);
					(function fn() {
						var spf = settings.time[idx] || settings.spf;
						var t = a.toggle(toggle);
						a = b.show();
						b = t;
						a[0].src = settings.filename(idx++);
						b[0].src = settings.filename(idx %= frames);
						if (loop !== true && idx == 0 && --loop == 0) {
							return me.trigger(events.end);
						}
						setTimeout(fn, spf);
					})();
				}
			}));
		});
	};
	$.fn.gif.settings = defaults;
	$.fn.gif.events = events;
}));