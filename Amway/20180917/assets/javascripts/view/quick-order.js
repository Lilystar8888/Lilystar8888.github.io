webpackJsonp([8],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(114);


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
  data: {},
  init: function init(page, system, dev, data) {
    this.page = page;
    this.dev = dev;
    this.init_event();
    this.fun().scroll();
  },
  init_event: function init_event() {
    this.dev.refreshThisPage();
    this.page.resize(function (pageChanged, platform) {
      if (pageChanged) {}
    });
    $('#tab-input-code').click(function () {
      $('#tab-my-favorite').removeClass('active');
      $('.my-favorite').hide();
      $('#tab-input-code').addClass('active');
      $('.input-code').show();
      $(this).parent().parent().parent().find('.footer').children().find('.pv').removeClass('pv-display');
    });

    $('#tab-my-favorite').click(function () {
      $('#tab-my-favorite').addClass('active');
      $('.my-favorite').show();
      $('#tab-input-code').removeClass('active');
      $('.input-code').hide();
      $(this).parent().parent().parent().find('.footer').children().find('.pv').addClass('pv-display');
    });
    //页面滚动条监控
    var that = this;
    $(window).bind('scroll.detail', function () {
      that.fun().scroll();
    });
    $('.extra-info .spec').click(function () {
      $(this).addClass('img-cur').siblings().removeClass('img-cur');
    });

    $('.extra-info .kind').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
    });
  },

  fun: function fun() {
    var quickFun = {
      scroll: function scroll() {
        if ($(window).width() < 768) return;
        var top = $('.quick-order .footer').offset().top;
        if ($(window).scrollTop() < top - $(window).height() + $('.quick-order .footer').height()) {
          $('.quick-order .footer .container').addClass('fixed');
        } else {
          $('.quick-order .footer .container').removeClass('fixed');
        }
      }
    };
    return quickFun;
  }

});

/***/ })

},[113]);