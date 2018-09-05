webpackJsonp([4],{

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

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _dev = __webpack_require__(36);

var _dev2 = _interopRequireDefault(_dev);

var _static = __webpack_require__(5);

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cart = new _page2.default({
  data: {},
  init: function init(page, system, dev, data) {
    this.page = page;
    this.init_event();
    this.Dev = dev;
    this.fun().scroll();
  },
  init_event: function init_event() {
    this.page.resize(function (pageChanged, platform) {
      if (pageChanged) {
        // alert(platform);
      }
    });
    $('.personBox .toggle-btn').bind('click', function () {
      var _thisPerson = $(this).parent().parent();
      if (_thisPerson.hasClass('close')) {
        _thisPerson.removeClass('close');
        $(this).find('em').html('收起');
      } else {
        _thisPerson.addClass('close');
        $(this).find('em').html('展開');
      }
    });
    // 购物车 - 收起
    $('.cart-persons .item').on('click', '.summary-toggle', function () {
      var $parent = $(this).parents('.item'),
          _class = $(this).attr('class'),
          _text = $(this).html();
      if ($(this).hasClass('ddl-u')) {
        _class = _class.replace(/ddl-u/ig, 'ddl-d');
        _text = _text.replace(/收起/ig, '展開');
        $parent.addClass('collapse');
      } else {
        _class = _class.replace('ddl-d', 'ddl-u');
        _text = _text.replace(/展開/ig, '收起');
        $parent.removeClass('collapse');
      }
      $(this).attr('class', _class).html(_text);
    });
    // 购物车 - 删除提示
    $('.cart-top-tips').on('click', '.icon-close', function () {
      $(this).parents('.cart-top-tips').remove();
    });
    // 购物车 - 删除
    $('.cart-product-table .cart-product-delete').click(function () {
      var _text = $(this).parents('.cart-product-table').find('.cart-product-title p:eq(0)').text();
      $(this).deleteConfirmForOneCart('\u78BA\u5B9A\u522A\u9664\u8A72 <span class="red">' + _text + '</span> \u55CE\uFF1F', function () {
        _dev2.default.deleteOneProduct();
      }, function () {});
    });
    // 购物车 - 快速订货
    $('.btn-quickorder').click(function () {
      $('.popup.large-popup.quick-order').showpage();
    });
    //增加订货人
    $('.btn-addperson').click(function () {
      $('.popup.large-popup.add-person').showpage();
    });
    // 结算
    $('input[name=invoice-method]').change(function () {
      $('input[type=text]').hide();
      $(this).siblings('input[type=text]').show();
    });
    // 结算 付款
    $('input[name=credit-card]').change(function () {
      var _index = this.getAttribute('data-type') || 0;
      if (_index == 1) $('.col-detail .wrapper1').show();else $('.col-detail .wrapper1').hide();
    });
    $('.cartbtn.icon-plus').off('click').on('click', function () {
      $('body').showloading({ isForPop: false, position: 'fixed' });
    });
    // 结算 編輯臨時地址
    $('input[name=address-type]').change(function () {
      var _selector = this.getAttribute('data-type');
      $('.section').removeClass('block');
      $('.' + _selector).addClass('block');
    });

    $('.center').click(function () {
      $(this).addClass('active').siblings('.center').removeClass('active');
    });

    //其他信用卡信息
    $('.credit-number .input-group-content input').on('input', function () {
      if ($(this).val().length >= 4 && $(this).nextAll().length != 0) {
        $(this).nextAll('input')[0].focus();
      }
    });
    //页面滚动条监控
    var that = this;
    $(window).bind('scroll.detail', function () {
      that.fun().scroll();
    });
    //选择物品中的最后一个border为none
    // $(document).ready(function(){
    //   $(".js-cart-product1 .container div.cart-product-table").last().css("border","none");
    // });
    // 银行卡联动
    // $.bankSelect('.js-selectbank', '.js-bank-num')
  },

  fun: function fun() {
    var cartFun = {
      scroll: function scroll() {
        if ($(window).width() < 768) return;
        if (!$('div').is('.cart-next')) return;
        var top = $('.cart-next').offset().top;
        if ($(window).scrollTop() < top - $(window).height() + $('.cart-next').height()) {
          $('.cart-next .container').addClass('fixed');
        } else {
          $('.cart-next .container').removeClass('fixed');
        }
      }
    };
    return cartFun;
  }

}); // cart


window.cart = cart;

/***/ })

},[86]);