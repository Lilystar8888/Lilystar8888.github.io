webpackJsonp([2],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _zoom = __webpack_require__(37);

var _static = __webpack_require__(5);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
	data: {
		recommendSwiper: null //推荐商品
	},
	init: function init(page, system, dev, data, animation) {
		this.Page = page;
		this.Dev = dev;
		this.Animation = animation;
		this.swiper(); //初始化页面swiper
		this.event();
		this.fun().scroll();
		this.swipers.init();
	},
	event: function event() {
		var that = this;
		//所有商品和已选商品切换
		$('.title-content .btns a').bind('click', function () {
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.product-container').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
			if ($(this).index() == 1) {
				$('.product-container').eq(1).find('.filter-title').data('swiper').update();
			}
		});
		//多重单条件，筛选点击
		$('.filter-title .swiper-slide').bind('click', function () {
			$(this).addClass('cur').siblings().removeClass('cur');
			$(this).parents('.group').find('.filter-item').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
		});
		//多重多条件，筛选点击
		// $('.filter-item .item').bind('click', function () {
		// 	var that = $(this)
		// 	if (that.hasClass('cur')) {
		// 		that.removeClass('cur');
		// 	} else {
		// 		that.addClass('cur').siblings().removeClass('cur');
		// 	}
		//$(this).parents('.group').find('.filter-item').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
		// });
		//多重多条件，筛选点击
		$('.filter-item .item .i-title ').bind('click', function () {
			var that = $(this).parent();
			if (that.hasClass('cur')) {
				that.removeClass('cur');
			} else {
				that.addClass('cur').siblings().removeClass('cur');
			}
			//$(this).parents('.group').find('.filter-item').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
		});
		//$('.i-title').bind('click',function(){
		//var content=$(this).parents('.item').find('.item-content');
		//	if(content.hasClass('cur')){
		//		content.removeClass('cur');
		//		$(this).removeClass('cur');
		//	}else{
		//		content.addClass('cur');
		//		$(this).addClass('cur');
		//	}
		//});
		//页面resize
		this.Page.resize(function (pageChanged, platform) {
			if (pageChanged && platform == 1) {
				$('.filter-title').each(function () {
					var swiper = $(this).data('swiper');
					swiper.params.slidesPerView = 3.7;
					swiper.update();
				});
			} else if (pageChanged && (platform == 2 || platform == 3)) {
				$('.filter-title').each(function () {
					var swiper = $(this).data('swiper');
					swiper.params.slidesPerView = 7.7;
					swiper.update();
				});
			}
		});
		//页面滚动监听
		$(window).bind('scroll.detail', function () {
			that.fun().scroll();
		});
	},
	swipers: {
		init: function init() {
			var that = this;
			$('.small-container').each(function (index, item) {
				var _this = this;

				if (!$(this).data("swiper")) {
					var smallSwiper = new Swiper(item, {
						slidesPerView: 8,
						spaceBetween: 8,
						onSlideChangeStart: function onSlideChangeStart(swiper) {
							$(_this).parents('.box').find('.big-swiper').data('swiper').slideTo(swiper.activeIndex);
						}
					});
					$(this).data("swiper", smallSwiper);
				}
			});
			$('.big-swiper').each(function (index, item) {
				var _this2 = this;

				if (!$(this).data("swiper")) {
					var that = this;
					var bigSwiper = new Swiper(item, {
						nextButton: '.swiper-button-next',
						prevButton: '.swiper-button-prev',
						onSlideChangeStart: function onSlideChangeStart(swiper) {
							var isSmallSwiper = $(_this2).parents('.box').find('.small-container').data('swiper');
							console.log(swiper, $(_this2).find('.swiper-slide').length);
							if (isSmallSwiper) $(_this2).parents('.box').find('.small-container').data('swiper').slideTo(swiper.activeIndex);
							$(_this2).parents('.box').find('.small-container .swiper-slide').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
							$(_this2).parents('.box').find('.product-info li').eq(swiper.activeIndex).addClass('cur').siblings().removeClass('cur');
							if (swiper.activeIndex <= 0) {
								$(_this2).parents('.box').find('.small-swiper .swiper-button-prev').addClass('swiper-button-disabled');
							} else if (swiper.activeIndex >= $(_this2).find('.swiper-slide').length - 1) {
								$(_this2).parents('.box').find('.small-swiper .swiper-button-next').addClass('swiper-button-disabled');
							} else {
								$(_this2).parents('.box').find('.small-swiper .swiper-button-prev,.small-swiper .swiper-button-next').removeClass('swiper-button-disabled');
							}
						}
					});
					$(this).data("swiper", bigSwiper);
				}
			});

			//缩略图点击事件
			$('.small-swiper .swiper-slide').unbind('click').bind('click', function () {
				that.thuSwitch(this, $(this).index());
				console.log($('.small-swiper .swiper-slide'));
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
	swiper: function swiper() {
		$('.filter-title').each(function (index, item) {
			var filterSwiper = new Swiper(item, {
				slidesPerView: 3.7,
				freeMode: true,
				preloadImages: false,
				isResize: true,
				onSlideChangeStart: function onSlideChangeStart(swiper) {}
			});
			$(this).data("swiper", filterSwiper);
		});
	},
	fun: function fun() {
		var pageFun = {
			scroll: function scroll() {
				if ($(window).width() < 768) return;
				var top = $('.data-info').offset().top;
				if ($(window).scrollTop() < top - $(window).height() + $('.data-info').height()) {
					$('.data-content').addClass('fixed');
				} else {
					$('.data-content').removeClass('fixed');
				}
			}
		};
		return pageFun;
	}
}); // product list page

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
  data: {},
  init: function init(page, system, dev, data) {
    this.page = page;
    this.init_event();
  },
  init_event: function init_event() {
    // console.log('sd')
    this.demo();
    this.page.resize(function (pageChanged, platform) {
      if (pageChanged) {
        // alert(platform);
      }
    });
  },
  demo: function demo() {
    $('.btn-login').click(function () {
      $('.popup-login').showpage();
    });
    $('.btn-focus').click(function () {
      $('.btn-thousands').focus();
    });
    $('.btn0').click(function () {
      $('.popup.large-popup.selfname0').showpage();
    });
    $('.btn0-1').click(function () {
      $.alert('<p>我是模板</p>');
    });
    //显示loading 
    $('.btn-show-loading').click(function () {
      // $('body').showloading();
      $.showloading();

      setTimeout(function () {
        //取消loading
        $('body').hideloading();
      }, 3000);
    });

    // 特惠活動 - 活動機制詳情
    $('.btn-view-detail').click(function () {
      $.alertWithTitle('活動詳情', '<p>購買紐崔萊系列產品滿新台幣10,000元即可獲贈alfi真空保溫壺1個或高效B群雙層錠20粒裝；</p>\
      <p>購買紐崔萊系列產品滿新台幣10,000元即可獲贈alfi真空保溫壺1個或高效B群雙層錠20粒裝；</p>\
      <p><a href="javascript:;">活動禮品有限，先到先得！</a></p>');
    });
    // 你确定要删除吗？
    $('.btn3').click(function () {
      $.deleteConfirm('您確定要刪除該產品嗎', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    $('.btn3-1').click(function () {
      $.deleteConfirmWithIcon('產品數量為 0 后，產品将从已選產品中刪除，您確定要這麼操作嗎？', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    // 調整購物車內容
    $('.btn-cart-1').click(function () {
      $.alertWithOneBtn('<p>同張訂單產品分期付款期數需相同，請調整購物車內容！</p>', '返回購物車', function () {
        console.log('返回購物車确认');
      });
    });
    // 购物车-不符合活動
    $('.btn-cart-2').click(function () {
      $.alertWithOneBtn('<p>您所選贈品數量不符合<span class="bold">益之源淨水器特惠活動</span>，請重新選擇贈品!</p>', '返回購物車', function () {
        console.log('返回購物車确认');
      });
    });
    // 购物车 - 刪除全部產品
    $('.btn-cart-3').click(function () {
      $.deleteConfirm('您確定要刪除購物車中的全部產品嗎？', function () {
        console.log('确认');
      });
    });
    // 電匯
    $('.btn-transfer-account').click(function () {
      $('.popup.popup-transfer-account').showpop();
    });
    // 分期说明
    $('.btn-installment').click(function () {
      $('.popup.popup-installment').showpop();
    });
    // 电子券使用说明
    $('.btn-digital-coupon').click(function () {
      $('.popup.popup-digital-coupon').showpop();
    });
    // 结算 庫存提示
    $('.btn-order-1').click(function () {
      $.alertWithOneBtn('<p><span class="bold">訂貨代碼(中文品名) ]</span>數量超出庫，目前庫存低於8，  請修改訂購數量。</p>', '修改購物車', function () {
        console.log('确认');
      });
    });
    // 结算 送貨地址有誤
    $('.btn-order-2').click(function () {
      $.alertWithTwoBtn('<p>此訂單送貨地址不允許輸入{0}產品，請重新選擇產品！</p>', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    // 结算 用戶未開卡
    $('.btn-order-3').click(function () {
      $.alertWithTwoBtn('<p>此直銷商/會員還未驗證開卡，  請先完成開卡驗證。</p>', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    // 结算 宅配時段不一致
    $('.btn-order-4').click(function () {
      $.alertWithTwoBtn('<p>您所選擇的臨時地址，其對應的宅配時段與您的默認宅配時段不一致，請選擇您合適的宅配時段。</p>', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    // 结算 切換送貨方式
    $('.btn-order-5').click(function () {
      $.alertWithTwoBtn('<p>您確認要將送貨方式改為<span class="bold">中心取貨</span>嗎？</p>', function () {
        console.log('确认');
      }, function () {
        console.log('取消');
      });
    });
    // 结算 索要發票
    $('.btn-tickets').click(function () {
      $('.popup.large-popup.ask-for-invoice').showpage();
    });
    // 结算 - 編輯臨時地址
    $('.btn-edit-address').click(function () {
      $('.popup.large-popup.edit-address').showpage();
    });
    // 订单 取消訂單失敗 某時間段內不能取消
    $('.btn-order1-1').click(function () {
      $.alertWithOneBtn('<p>訂單在12:00-18:00時間段內不能取消，請聯絡安麗客服</p>', '確 定', function () {
        console.log('确认');
      });
    });
    // 订单 取消訂單失敗 因使用現金券
    $('.btn-order1-2').click(function () {
      $.alertWithOneBtn('<p>訂單OO150120181454產生的現金代用券xxx已使用，不可取消訂單</p>', '確 定', function () {
        console.log('确认');
      });
    });
    // 获取url所有参数 $.urlParams().id
    // 获取单个url参数 $.urlParam('id')
    // 转换千位付 $.toThousands("10000")
    // 设置cookie $.cookie.set('nihao','hello');
    // 获取cookie $.cookie.get('nihao');
    // 删除cookie $.cookie.del('nihao');
    // 分期促销
    $('.btn1').click(function () {
      $('.popup.popup-reminder-tips').showpop();
    });
    // 添加收货人
    $('.btn2').click(function () {
      $('.popup.large-popup.add-person').showpop();
    });
    // 加入购物车成功
    $('.btn-cart-success').click(function () {
      $('.popup.popup-add-cart.tip-success').showpop();
    });
    // 加入购物车失败
    $('.btn-cart-fail').click(function () {
      $('.popup.popup-add-cart.tip-fail').showpop();
    });
    // 加入最爱成功
    $('.btn-fav-success').click(function () {
      $('.popup.popup-add-like.tip-success').showpop();
    });
    // 加入最爱失败
    $('.btn-fav-fail').click(function () {
      $('.popup.popup-add-like.tip-fail').showpop();
    });
    // 到货提示
    $('.btn-cart-arrival').click(function () {
      $.alert('<p class="c55">產品預計到貨時間：</p><p class="c22"><span class="red bold">2018年12月中旬</span>，將依實際出貨日以簡訊通知收貨。</p>');
    });
    //加入购物车成功修改
    $('.btn-cart-csuccess').click(function () {
      $('.popup.popup-add-goods.tip-success').showToast();
    });
    //加入购物车失败修改
    $('.btn-cart-cfail').click(function () {
      $('.popup.popup-add-goods.tip-fail').showToast();
    });
    //加入我的最爱成功修改
    $('.btn-fav-csuccess').click(function () {
      $('.popup.popup-add-lgoods.tip-success').showToast();
    });
    //加入我的最爱失败修改
    $('.btn-fav-cfail').click(function () {
      $('.popup.popup-add-lgoodsf.tip-fail').showToast();
    });
    // 快速订货弹窗
    $('.btn-quick-order').click(function () {
      $('.popup.large-popup.quick-order').showpage();
    });
    // 電子劵使用
    $('.btn-electronic-use').click(function () {
      $('.popup.large-popup.electronic-use').showpage();
    });
    // 电子券使用说明
    $('.btn-electronic-use').click(function () {
      $('.popup.large-popup.electronic-use').showpage();
    });
    $('.btn-digital-coupon-instructions,.btn-use-digital-coupon,.btn-close-digital-coupon').click(function () {
      $('.popup.large-popup.electronic-use .use-digital-coupon').toggle();
      $('.popup.large-popup.electronic-use .digital-coupon-instructions').toggle();
    });
    // 选择中心取货
    $('.btn-select-center').click(function () {
      $('.popup.large-popup.select-center').showpage();
    });
    // 修改領貨人資訊
    $('.btn-order-7').click(function () {
      $('.popup.large-popup.add-personForReceive').showpage();
    });
    //select picking center
    $('.center').click(function () {
      $(this).addClass('active').siblings('.center').removeClass('active');
    });
    // 修改訂單時間
    $('.btn-modify-time').click(function () {
      $('.popup.large-popup.modify-order-time').showpage();
    });
    // 信用卡付款
    $('.btn-order-6').click(function () {
      $('.popup.large-popup.add-credit-card').showpage();
    });
    // 付款并送貨 页面展开收起切换
    $('.paySendCon li').on('click', '.slideToggle', function () {
      var self = $(this),
          $slideCon = self.parent().siblings('.tableCon'),
          $arrow = self.find('em'),
          arrowName = self.find('span'),
          className = $arrow.attr('class');
      if (className == 'arrow-u') {
        $arrow.attr('class', 'arrow-d');
        arrowName.text('展開');
        $slideCon.hide();
      } else {
        $arrow.attr('class', 'arrow-u');
        arrowName.text('收起');
        $slideCon.show();
      }
    });
  }
}); // other page

/***/ })

},[109]);