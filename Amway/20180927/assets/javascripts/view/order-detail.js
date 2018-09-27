webpackJsonp([12],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(102);


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
  data: {},
  init: function init(page, system, dev, data) {
    this.Page = page;
    this.swiper(); //初始化页面swiper
    this.event();
  },
  event: function event() {
    $('.order-detail .top').on('click', '.icon-close', function () {
      $(this).parents('.top').remove();
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
    $('.filter-title .swiper-slide').bind('click', function () {
      $(this).addClass('cur').siblings().removeClass('cur');
      $(this).parents('.group').find('.filter-item').eq($(this).index()).addClass('cur').siblings().removeClass('cur');
    });
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
          swiper.params.slidesPerView = 10.7;
          swiper.update();
        });
      }
    });
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
  }
}); // other page

/***/ })

},[101]);