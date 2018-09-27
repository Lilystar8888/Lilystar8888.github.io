webpackJsonp([15],{

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 93:
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
    this.fun().scroll();
  },
  init_event: function init_event() {
    var that = this;
    // this.demo();
    that.page.resize(function (pageChanged, platform) {
      if (pageChanged) {
        // alert(platform);
      }
    });

    //页面滚动条监控
    $(window).bind('scroll.detail', function () {
      that.fun().scroll();

      // 银行卡联动
      $.bankSelect('.js-selectbank', '.js-bank-num');
    });
  },

  fun: function fun() {
    var cartFun = {
      scroll: function scroll() {
        if ($(window).width() < 768) return;
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
}); // 结算

/***/ })

},[92]);