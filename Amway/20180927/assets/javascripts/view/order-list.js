webpackJsonp([11],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(104);


/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
	data: {},
	init: function init(page, system, dev, data, animation) {
		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.event();
	},
	event: function event() {
		var _this2 = this;

		var that = this;
		//显示筛选
		$('.filter-btn').on('click', function () {
			var _this = _this2;
			var $container = that.getFilterBox();
			if ($.platform == 1) {
				_this2.Animation.toLeft($container);
			} else {
				if ($container.hasClass('open')) {
					$container.removeClass('open');
				} else {
					$container.addClass('open');
				}
				$('.input-icon').toggleClass('arrow-u').toggleClass('arrow-d');
			}
		});
		//关闭筛选
		$('.filter-order .close').on('click', function () {
			_this2.Animation.toRight($('.filter-order'));
			return;
		});
		//导航栏点击替换
		$('.orderlist-header-left a').bind('click', function () {
			$(this).find('em').addClass('cur').parent().siblings().find('em').removeClass('cur');
		});
		//筛选-选择
		$('.filter-content li .item a').bind('click', function () {
			$(this).addClass('cur').siblings('a').removeClass('cur');
		});
		//筛选-清空
		$('.filter-content .btn-clear').bind('click', function () {
			$('.filter-content li .item').each(function () {
				$(this).find('a').removeClass('cur').eq(0).addClass('cur');
				$(this).find('input').val('');
			});
		});
		//筛选-保存
		$('.filter-content .btn-save').bind('click', function () {
			_this2.Animation.toRight($('.product-filter-content'));
			return;
		});
		//筛选 pc 是否显示 
		$('.choose-box').bind('click', function () {
			$(".filter-box").toggle();
			$(".choose-box em").toggleClass("arrow-u").toggleClass("arrow-d");
		});
		//页面resize
		this.Page.resize(function (pageChanged, platform) {
			//2pc 1 m
			if (platform == 1) {
				if ($('.filter-box').hasClass('open')) {
					$('.filter-box').removeClass('open');
				}
			}
			//console.log(`pageChanged:${pageChanged},platform:${platform}`);
			if (platform != 1) {
				if ($('.large-popup.filter-order.pageIn').hasClass('block')) {
					$('.large-popup.filter-order.pageIn').removeClass('block');
				}
			}
		});
	},
	getFilterBox: function getFilterBox() {
		var $container = $('.popup.large-popup.filter-order');
		if ($.platform != 1) {
			$container = $('.filter-box');
		}
		return $container;
	}
}); // order list page

/***/ })

},[103]);