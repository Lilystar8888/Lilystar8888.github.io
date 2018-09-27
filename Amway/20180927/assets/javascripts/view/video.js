webpackJsonp([5],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(119);


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// video page
new _page2.default({
	data: {},
	init: function init(page, system, dev, data, animation) {
		var _this = this;

		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.event();
		this.Page.resize(function (pageChanged, platform) {
			_this.setVideo.call(_this);
		});
	},
	// 设置可见区域才能看到video
	setVideo: function setVideo() {
		var that = this;
		$('.list-container li').each(function (index, item) {
			var i = 0,
			    _top = $(item).offset().top,
			    _height = item.clientHeight,
			    _scrollTop = $(window).scrollTop(),
			    _windowHeight = $(window).height();

			if (_scrollTop - 180 <= _top && _scrollTop + _windowHeight + 180 >= _height + _top) {
				i++;
				$(item).addClass('open');
				that.createElement.call($(item));
			} else {
				i--;
				$(item).removeClass('open').find('iframe').remove();
			}
		});
	},
	createElement: function createElement() {
		var $videoContainer = this.find('.video-tv'),
		    _src = $videoContainer.attr('data-src');
		if ($videoContainer.find('iframe').length == 0) $videoContainer.append('<iframe src="' + _src + '"></iframe>');
	},
	event: function event() {
		var that = this;
		$(window).on('scroll.video', function () {
			that.setVideo();
		});

		function loadVideolist(scrollLoad) {
			that.Dev.getVideoList(null, function (isMore) {
				scrollLoad.handled(isMore);
			});
		};
		var _text = $.platform == 1 ? '向上滑動查看更多商品' : '滑動查看更多商品';
		//下拉加载
		new _util.ScrollLoad({
			target: $('.list-container'),
			html: {
				start: '<p class="more">' + _text + '</p>',
				move: '<p class="more">正在加载数据</p>',
				end: '<p class="more">无数据</p>',
				callback: loadVideolist
			}
		});
	}
});

/***/ })

},[118]);