webpackJsonp([10],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(106);


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _zoom = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// product list page
new _page2.default({
	data: {
		recommendSwiper: null //推荐商品
	},
	init: function init(page, system, dev, data, animation) {
		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.swiper(); //初始化页面swiper
		this.zoom(); //初始化banner图片缩放
		this.event();
	},
	event: function event() {
		var _this = this;

		var that = this;
		$('.product-des .des-nav .nav-content p:first-child').addClass('cur');
		//页面resize
		this.Page.resize(function (pageChanged, platform) {
			console.log('pageChanged:' + pageChanged + ',platform:' + platform);
			if (pageChanged && platform == 1) {
				if (_this.data && _this.data.recommendSwiper && _this.data.recommendSwiper.updateDirection) _this.data.recommendSwiper.updateDirection('horizontal');
			} else if (pageChanged && (platform == 2 || platform == 3)) {
				//this.data.recommendSwiper.params.spaceBetween=0;
				if (_this.data && _this.data.recommendSwiper && _this.data.recommendSwiper.updateDirection) _this.data.recommendSwiper.updateDirection('vertical');
			}
		});
		//详情菜单点击
		$('.nav-content p').bind('click', function () {
			that.fun().contentNavClick($(this), $(this).index());
		});
		//页面滚动监听
		$(window).bind('scroll.detail', function () {
			that.fun().scroll();
		});
	},
	swiper: function swiper() {
		var _this2 = this;

		var that = this;
		var bigSwiper = new Swiper('.big-swiper', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			onSlideChangeStart: function onSlideChangeStart(swiper) {}
		});
		var smallSwiper = new Swiper('.small-swiper', {
			slidesPerView: 4,
			spaceBetween: 12,
			onSlideChangeStart: function onSlideChangeStart(swiper) {
				if (swiper.activeIndex <= 0) {
					$('.small-container .swiper-button-prev').addClass('swiper-button-disabled');
					if ($('.recommend-swiper .swiper-slide').length > 4) {
						$('.small-container .swiper-button-next').removeClass('swiper-button-disabled');
					}
				} else if (swiper.activeIndex >= $('.small-swiper .swiper-slide').length - 4) {
					$('.small-container .swiper-button-next').addClass('swiper-button-disabled');
					if ($('.small-swiper .swiper-slide').length > 4) {
						$('.small-container .swiper-button-prev').removeClass('swiper-button-disabled');
					}
				} else {
					$('.small-container .swiper-button-prev,.small-container .swiper-button-next').removeClass('swiper-button-disabled');
				}
			}
		});
		$('.small-container .swiper-button-prev,.small-container .swiper-button-next').bind('click', function (event) {
			if ($(event.currentTarget).hasClass('swiper-button-prev')) {
				smallSwiper.slidePrev();
			} else {
				smallSwiper.slideNext();
			}
		});
		//缩略图点击事件
		$('.small-swiper .swiper-slide').bind('click', function () {
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.big-swiper .swiper-slide').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
			$('.sku-super .sku-img-super').attr('src', $('.big-swiper .swiper-slide').eq($(this).index()).find('img').attr('data-zoom'));
		});
		//推荐产品
		this.data.recommendSwiper = new Swiper('.recommend-swiper', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			slidesPerView: 2,
			spaceBetween: 10,
			onSlideChangeStart: function onSlideChangeStart(swiper) {
				console.log(swiper.activeIndex);
				console.log();
				if (swiper.activeIndex <= 0) {
					$('.recommend-product .swiper-button-prev').addClass('swiper-button-disabled');
					if ($('.recommend-swiper>.swiper-wrapper').children('.swiper-slide').length > 2) {
						$('.recommend-product .swiper-button-next').removeClass('swiper-button-disabled');
					}
				} else if (swiper.activeIndex >= $('.recommend-swiper>.swiper-wrapper').children('.swiper-slide').length - 2) {
					$('.recommend-product .swiper-button-next').addClass('swiper-button-disabled');
					if ($('.recommend-swiper>.swiper-wrapper').children('.swiper-slide').length > 2) {
						$('.recommend-product .swiper-button-prev').removeClass('swiper-button-disabled');
					}
				} else {
					$('.recommend-product>.swiper-button-prev,.recommend-product>.swiper-button-next').removeClass('swiper-button-disabled');
				}
			}
		});
		$('.recommend-product ').children('.swiper-button-prev').bind('click', function (event) {
			if ($(event.currentTarget).hasClass('swiper-button-prev')) {
				_this2.data.recommendSwiper.slidePrev();
			} else {
				_this2.data.recommendSwiper.slideNext();
			}
		});
		$('.recommend-product ').children('.swiper-button-next').bind('click', function (event) {
			if ($(event.currentTarget).hasClass('swiper-button-prev')) {
				_this2.data.recommendSwiper.slidePrev();
			} else {
				_this2.data.recommendSwiper.slideNext();
			}
		});

		//推荐列表小轮播图
		$('.suggest-small-swiper .small-container').each(function (index, item) {
			var _this3 = this;

			if (!$(this).data("swiper")) {
				var suggestSwiper = new Swiper(item, {
					slidesPerView: 5,
					spaceBetween: 6,
					onSlideChangeStart: function onSlideChangeStart(swiper) {
						$(_this3).parents('.box').find('.suggest-big-swiper').data('swiper').slideTo(swiper.activeIndex);
					}
				});
				$(this).data("swiper", suggestSwiper);
			}
		});
		$('.suggest-big-swiper').each(function (index, item) {
			var _this4 = this;

			if (!$(this).data("swiper")) {
				var that = this;
				var bigSwiper = new Swiper(item, {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					onSlideChangeStart: function onSlideChangeStart(swiper) {
						var isSmallSwiper = $(_this4).parents('.box').find('.suggest-small-swiper .small-container').data('swiper');
						//console.log(swiper, $(this).find('.swiper-slide').length);
						if (isSmallSwiper) $(_this4).parents('.box').find('.suggest-small-swiper .small-container').data('swiper').slideTo(swiper.activeIndex);
						$(_this4).parents('.box').find('.suggest-small-swiper .small-container .swiper-slide').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
						$(_this4).parents('.box').find('.product-info li').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
						if (swiper.activeIndex <= 0) {
							$(_this4).parents('.box').find('.suggest-small-swiper .swiper-button-prev').addClass('swiper-button-disabled');
						} else if (swiper.activeIndex >= $(_this4).find('.swiper-slide').length - 1) {
							$(_this4).parents('.box').find('.suggest-small-swiper .swiper-button-next').addClass('swiper-button-disabled');
						} else {
							$(_this4).parents('.box').find('.suggest-small-swiper .swiper-button-prev,.suggest-small-swiper .swiper-button-next').removeClass('swiper-button-disabled');
						}
					}
				});
				$(this).data("swiper", bigSwiper);
			}
		});

		//缩略图点击事件
		$('.suggest-small-swiper .swiper-slide').unbind('click').bind('click', function () {
			that.thuSwitch(this, $(this).index());
		});
		//缩略图左右箭头点击事件
		$('.suggest-small-swiper .swiper-button-prev,.suggest-small-swiper .swiper-button-next').unbind('click').bind('click', function () {
			if ($(this).hasClass('swiper-button-prev')) {
				$(this).parents('.box').find('.suggest-big-swiper').data('swiper').slidePrev();
			} else {
				$(this).parents('.box').find('.suggest-big-swiper').data('swiper').slideNext();
			}
		});
	},
	thuSwitch: function thuSwitch(el, index) {
		$(el).parents('.box').find('.suggest-big-swiper').data('swiper').slideTo(index);
	},
	zoom: function zoom() {
		(0, _zoom.Zoom)(".sku-box", {
			isZoom: true,
			hoverEvent: function hoverEvent(type) {},
			moveEvent: function moveEvent(obj) {}
		});
	},
	fun: function fun() {
		var pageFun = {
			contentNavClick: function contentNavClick(dom, index) {
				$(dom).addClass('cur').siblings().removeClass('cur');
				var scrollTop = $('.group').eq(index).offset();
				$('html,body').animate({
					scrollTop: scrollTop.top - $('.nav-content').height()
				});
			},
			scroll: function scroll() {
				if ($('.des-nav').length == 0) return;
				var top = $('.des-nav').offset().top;
				if ($(window).scrollTop() > top) {
					$('.des-nav').addClass('fixed');
				} else {
					$('.des-nav').removeClass('fixed');
				}
			}
		};
		return pageFun;
	}
});

/***/ })

},[105]);