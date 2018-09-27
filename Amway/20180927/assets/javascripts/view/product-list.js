webpackJsonp([9],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// product list page
new _page2.default({
	data: {},
	init: function init(page, system, dev, data, animation) {
		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.event();
		this.swiper.init();
	},
	event: function event() {
		var _this = this;

		var that = this;

		// 点击产品顺序效果
		$('.product-order a').on('click', function () {
			if ($(this).hasClass('cur')) {
				if ($(this).hasClass('angle-reverse')) {
					$(this).removeClass('angle-reverse');
				} else {
					$(this).addClass('angle-reverse');
				}
			} else {
				$(this).addClass('cur').siblings('a').removeClass('cur');
			}
		});
		//选择其他button
		$('.select-title').bind('click', function () {
			that.showOtherProduct(this);
			return false;
		});
		//显示筛选
		$('.btnfilter').on('click', function () {
			_this.Animation.toLeft($('.product-filter-content'));
		});
		//关闭筛选
		$('.product-filter-content .close').on('click', function () {
			_this.Animation.toRight($('.product-filter-content'));
			return;
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
		$('.product-filter-content .btn-save').bind('click', function () {
			_this.Animation.toRight($('.product-filter-content'));
			return;
		});
		// var item = $('item-list').children('product-item')
		// var length = item.length

		//向上滑动查看更多产品的显示与隐藏
		//  if($('.item-list').find('li').length>8){
		// 	 $('.item-list').parents('.product-content').addClass("show-hide");
		// 	//$('.product-content .scroll-down').find('.more').addClass("show-hide");
		//      console.log("xlxx");
		//  }
		//  else{
		// 	$('.more').removeClass("show-hide");
		//  }
		//页面resize
		this.Page.resize(function (pageChanged, platform) {
			//console.log(`pageChanged:${pageChanged},platform:${platform}`);
		});
		$('.product-content').ScrollLoad(function (scrollLoad) {
			that.Dev.getProductList(null, function (isMore) {
				that.swiper.init();
				scrollLoad.handled(isMore);
			});
		});
	},
	swiper: {
		init: function init() {
			var that = this;
			$('.small-container').each(function (index, item) {
				var _this2 = this;

				if (!$(this).data("swiper")) {
					var smallSwiper = new Swiper(item, {
						slidesPerView: 8,
						spaceBetween: 8,
						onSlideChangeStart: function onSlideChangeStart(swiper) {
							$(_this2).parents('.box').find('.big-swiper').data('swiper').slideTo(swiper.activeIndex);
						}
					});
					$(this).data("swiper", smallSwiper);
				}
			});
			$('.big-swiper').each(function (index, item) {
				var _this3 = this;

				if (!$(this).data("swiper")) {
					var that = this;
					var bigSwiper = new Swiper(item, {
						nextButton: '.big-swiper .swiper-button-next',
						prevButton: '.big-swiper .swiper-button-prev',
						onSlideChangeStart: function onSlideChangeStart(swiper) {
							var isSmallSwiper = $(_this3).parents('.box').find('.small-container').data('swiper');
							//console.log(swiper, $(this).find('.swiper-slide').length);
							if (isSmallSwiper) $(_this3).parents('.box').find('.small-container').data('swiper').slideTo(swiper.activeIndex);
							$(_this3).parents('.box').find('.small-container .swiper-slide').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
							$(_this3).parents('.box').find('.product-info li').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
							if (swiper.activeIndex === 1) {
								$(_this3).parents('.box').find('.small-swiper .swiper-button-prev').removeClass('swiper-button-disabled');
							}
							if (swiper.activeIndex <= 0) {
								$(_this3).parents('.box').find('.small-swiper .swiper-button-prev').addClass('swiper-button-disabled');
							} else if (swiper.activeIndex >= $(_this3).find('.swiper-slide').length - 1) {
								$(_this3).parents('.box').find('.small-swiper .swiper-button-next').addClass('swiper-button-disabled');
							} else {
								$(_this3).parents('.box').find('.small-swiper .swiper-button-prev,.small-swiper .swiper-button-next').removeClass('swiper-button-disabled');
							}
							if ($(_this3).find('.swiper-slide').length === 2 && swiper.activeIndex === 0) {
								$(_this3).parents('.box').find('.small-swiper .swiper-button-next').removeClass('swiper-button-disabled');
							}
						}
					});
					$(this).data("swiper", bigSwiper);
				}
			});

			//缩略图点击事件
			$('.small-swiper .swiper-slide').unbind('click').bind('click', function () {
				that.thuSwitch(this, $(this).index());
			});
			//缩略图左右箭头点击事件
			$('.small-swiper .swiper-button-prev,.small-swiper .swiper-button-next').unbind('click').bind('click', function () {
				if ($(this).hasClass('swiper-button-prev')) {
					$(this).parents('.box').find('.big-swiper').data('swiper').slidePrev();
				} else {
					$(this).parents('.box').find('.big-swiper').data('swiper').slideNext();
				}
			});
		},
		thuSwitch: function thuSwitch(el, index) {
			$(el).parents('.box').find('.big-swiper').data('swiper').slideTo(index);
		}
	},
	showOtherProduct: function showOtherProduct(el) {
		if ($(el).parents('.title-info').hasClass('cur')) {
			$(el).parents('.title-info').removeClass('cur');
			$('.select-content').hide();
			$(el).find('em').removeClass('arrow-u').addClass('arrow-d');
		} else {
			$(el).parents('.title-info').addClass('cur');
			$('.select-content').show();
			$(el).find('em').removeClass('arrow-d').addClass('arrow-u');
		}
	}
});

/***/ })

},[107]);