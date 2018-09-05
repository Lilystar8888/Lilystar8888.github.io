webpackJsonp([6],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// video-detail page
new _page2.default({
	data: {},
	init: function init(page, system, dev, data, animation) {
		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.event();
		// video-detail
		// this.collect();
	},
	event: function event() {
		var that = this;
		var _text = $.platform == 1 ? '向上滑動查看更多商品' : '滑動查看更多商品';
		// video-detail加載更多相關商品
		function loadProductlist(scrollLoad) {
			that.Dev.getCorrelationlist(null, function (isMore) {
				scrollLoad.handled(isMore);
			});
		};
		//下拉加载
		new _util.ScrollLoad({
			target: $('.js-vd-product-content'),
			html: {
				start: '<p class="more">' + _text + '</p>',
				move: '<p class="more">正在加载数据</p>',
				end: '<p class="more">无数据</p>',
				callback: loadProductlist
			}
		});
	}
});

/***/ })

},[116]);