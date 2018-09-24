webpackJsonp([3],{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(96);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

var _swiper = __webpack_require__(50);

var _swiper2 = _interopRequireDefault(_swiper);

var _animation = __webpack_require__(20);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
    data: {},
    init: function init(page, system, dev, data) {
        this.page = page;
        this.init_event();
    },
    init_event: function init_event() {
        var that = this;
        this.renderSwiper();
        this.page.resize(function (pageChanged, platform) {
            if (pageChanged) {
                // alert(platform);
            }
        });
        if (this.page.options.platform !== 1) {
            var $element = $('#goTop');

            $(window).off('scroll.totop', "**").on('scroll.totop', function () {
                if ($(window).scrollTop() > 100) $element.show();else $element.hide();
            });
            $element.on('click', function () {
                _animation2.default.scrollToTop(300);
                return false;
            });
        }
        $('.js-swiper').mouseenter(function () {
            that.swiper.stopAutoplay();
        }).mouseleave(function () {
            that.swiper.startAutoplay();
        });
    },
    renderSwiper: function renderSwiper() {
        var _this = this;

        if ($('.js-swiper').length > 0) {
            $('.js-swiper').each(function (index, item) {
                var _ref;

                _this.swiper = new _swiper2.default(item, (_ref = {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                }, (0, _defineProperty3.default)(_ref, 'pagination', '.swiper-pagination'), (0, _defineProperty3.default)(_ref, 'autoplay', 2000), (0, _defineProperty3.default)(_ref, 'loop', true), _ref));
            });
        }
    }
}); // home page

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(49);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ })

},[94]);