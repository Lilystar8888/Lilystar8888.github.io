webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(13);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

var _data = __webpack_require__(51);

var _data2 = _interopRequireDefault(_data);

var _system = __webpack_require__(35);

var _system2 = _interopRequireDefault(_system);

var _animation = __webpack_require__(20);

var _animation2 = _interopRequireDefault(_animation);

var _dev = __webpack_require__(36);

var _dev2 = _interopRequireDefault(_dev);

var _util = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function () {
  function Page(opts) {
    (0, _classCallCheck3.default)(this, Page);

    this.options = {
      urlParam: (0, _util.getUrlAllParam)(), // get all params from url
      platform: null, // platform 1(phone), 2(ipad), 3(pc)
      pageChanged: null // whether page is changed
    };
    this.opts = opts;
    this._init();
    if (opts.init && typeof opts.init === 'function') opts.init(this, _system2.default, _dev2.default, _data2.default, _animation2.default);
  }

  (0, _createClass3.default)(Page, [{
    key: '_init',
    value: function _init() {
      var _this = this;

      this.renderHref();
      this.renderFloat();
      this._setplat();
      this._setContentHeight();
      $('img').renderImg();
      // $.renderCartNum();
      this.renderSelect();
      $(function () {
        _this._init_event();
      });
    }
  }, {
    key: '_init_event',
    value: function _init_event() {
      var _this2 = this;

      $(".search-result").siblings(".input-wrapper").children(".txtsearch").attr("type", "text");
      // show menu
      $('.btnmenu').off('click').on('click', function () {
        _animation2.default.toLeft($('.menu'));
      });
      // hide menu
      $('.menu').off('click').on('click', function (ev) {
        var $target = $(ev.target || ev.srcElement);
        if ($target.parents('.menu-content').length == 0 && $.platform == 1) _animation2.default.toRight($('.menu'));
      });
      // show searchbar
      $('.xs.btnshowsearch').off('click').on('click', function (event) {
        _animation2.default.toLeft($('.searchbar .content'));
        _animation2.default.toLeft($('.searchbar .mask'));

        $(document).one("click", function () {
          _animation2.default.toRight($('.searchbar .content'));
          _animation2.default.toRight($('.searchbar .mask'));
        });

        event.stopPropagation();
      });
      $(".searchbar .content").off('click').on("click", function (e) {
        e.stopPropagation();
      });
      $('.btnclos').off('click').on('click', function (event) {
        _animation2.default.toRight($('.searchbar .content'));
        _animation2.default.toRight($('.searchbar .mask'));
        event.stopPropagation();
      });
      // mask
      // $('.xs.btnshowsearch').off('click').on('click', function () {
      //   $('.searchbar .mask').show()
      // });
      // // show searchbar
      // $('.xs.btnshowsearch').off('click').on('click', function () {
      //   $('.searchbar .content').show();
      // });
      // // click hihe searcher
      // $('.btnclos').off('click').on('click', function () {
      //   $('.searchbar .content').hide();
      // });

      // hide searchbar
      $('.btn-search-close').off('click').on('click', function () {
        $('.searchbar input').val('');
        // $('.searchbar .search-result').removeClass('block');
        _animation2.default.fadeOut($('.searchbar .search-result'));
        if (_this2.options.platform == 1) $('.searchbar .content').hide();
      });
      //搜索框外隐藏
      $('body').off('click').on('click', function () {

        if ($('.search-result').is(".fadeIn.block")) {
          _animation2.default.fadeOut($('.searchbar .search-result'));
          if (_this2.options.platform == 1) $('.searchbar .content').hide();
        }
      }); // enter something to search
      $('.searchbar input').on('input', function (event) {
        var _this3 = this;

        // old version
        // setTimeout(() => {
        //   if (this.value === '') Animation.fadeOut($('.searchbar .search-result'));
        //   else {
        //     Dev.searchProduct({
        //       value: this.value
        //     });
        //     Animation.fadeIn($('.searchbar .search-result'));
        //   }
        // }, 1000);
        // event.stopPropagation();
        if (this.start === true) {
          return;
        }
        this.start = true;
        setTimeout(function () {
          _this3.start = false;
          if (_this3.value === '') {
            _animation2.default.fadeOut($('.searchbar .search-result'));
            return;
          }
          _dev2.default.search_complete({
            value: _this3.value
          }, function () {
            _animation2.default.fadeIn($('.searchbar .search-result'));
          });
        }, 1000);
        event.stopPropagation();
      });
      // 回车
      $(".searchbar input").on('keydown', function (event) {
        if (event.keyCode === 13) {
          _dev2.default.clickSearch($(this), function () {});
        }
      });
      // 搜索框獲取焦點
      $(".searchbar input").on('focus', function (event) {
        _dev2.default.searchBoxInputFocus($(this), function () {});
      });
      // 搜索框失去焦點
      $(".searchbar input").on('blur', function (event) {
        _dev2.default.searchBoxInputBlur($(this), function () {});
      });
      // search
      $('.btnsearch').off('click').on('click', function () {
        // old version
        // var _value = $(this).siblings('input').val();
        // Dev.redirect('product-search', {
        //   id: _value
        // });
        _dev2.default.clickSearch($(this), function () {});
      });
      //点击搜索
      $('.btncontentsearch').off('click').on('click', function () {
        _dev2.default.clickSearch($(this), function () {});
      });
      // 结算 編輯臨時地址
      $('input[name=address-type]').change(function () {
        var _selector = this.getAttribute('data-type');
        $('.section').removeClass('block');
        $('.' + _selector).addClass('block');
      });
      // to search page
      $('.searchbar .content .search-result li').off('click').on('click', function (event) {
        // old version
        // Dev.redirect('product-search', $(this).data());
        event.stopPropagation();
        window.location.href = ACC.config.contextPath + "/p/" + $(this).children('a').html();
      });
      // click someone cate
      $('.cate-container .cate-tabs').off('click').on('click', 'li', function () {
        $(this).addClass('cur').siblings('li').removeClass('cur');
        var _id = $(this).attr('data-id');
        $('.cate-content').find('#ddl-' + _id).fadeIn().siblings().hide();
      });
      if ($('.side-bar').length > 0 && this.options.platform !== 1) {
        var _$element = $('#goTop');
        $(window).off('scroll.totop', "**").on('scroll.totop', function () {
          if ($(window).scrollTop() > 100) _$element.show();else _$element.hide();
        });
        _$element.off('click').off('click').on('click', function () {
          _animation2.default.scrollToTop(300);
          return false;
        });
      }
      // hove cate
      $('.menu li').on('mouseover', function () {
        var _baseleft = $('.menu li:eq(0)').position().left;
        var _id = $(this).attr('data-id'),
            _left = $(this).position().left,
            _top = $(this).offset().top,
            _height = $(this).height(),
            _width = $('.cate-container').width();
        if (_id) {
          $('.cate-container').css({
            height: 'auto',
            top: _top + _height * 1 + "px",
            right: 'auto',
            left: _left + "px"
          }).show();
          $('.cate-container .arrowfull-u').css({
            left: ($(this).width() * 1 - 10) / 2 + "px"
          });
          $('.cate-content').find('#ddl-' + _id).show().siblings('.tab-content').hide();
        } else {
          $('.cate-container').hide();
        }
      });
      // 增加訂貨人
      $('.btn-addperson').off('click').on('click', function () {
        _dev2.default.changeBuyer({}, function (isBool) {
          $('.popup.large-popup.add-person').showpage();
        });
      });
      //apple click
      //     $(document).ready(function() {  
      //   
      //          $('a').on('click touchend', function(e) {  
      //             var el = $(this);  
      //             var link = el.attr('href');  
      //             window.location = link;  
      //          });  
      //         
      //     }); 
      // click mobile menu li 
      $('.menu .mobile-menu .parent .right').off('click').on('click', function () {
        if ($(this).parent('.parent').hasClass('expand')) {
          $(this).parent('.parent').removeClass('expand');
        } else {
          $(this).parent('.parent').addClass('expand');
        }
        //click mobile menu 里的箭头
        $(this).toggleClass('arrow-d').toggleClass('arrow-u');
      });
      $('.js-dropdown').off('click').on('click', function () {
        if ($(this).hasClass('cur')) $(this).removeClass('cur').find('ul').hide();else $(this).addClass('cur').find('ul').show();
      });
      $(document).on('mouseover', function (ev) {
        var $target = $(ev.target || ev.srcElement);
        if ($target.parents('.cate-container').length == 0 && $target.parents('.menu').length == 0) {
          $('.cate-container').hide();
        }
        if ($target.parents('.js-dropdown').length == 0) {
          $('.js-dropdown').removeClass('cur').find('ul').hide();
        }
        if ($target.parents('.js-selectbox').length == 0) {
          $('.js-selectbox').find('ul').removeClass('block');
        }
      });
      //购物说明hover事件
      $('.js-dropdown').hover(function () {
        if ($(this).hasClass('cur')) $(this).removeClass('cur').find('ul').hide();else $(this).addClass('cur').find('ul').show();
      });
      // click product series
      $('.cate-content').off('click').on('click', 'li', function () {
        _dev2.default.redirect('product-list', $(this).data());
      });
      //click all product
      $('.cate-content').off('click').on('click', 'h2', function () {
        _dev2.default.redirect('product-list', $(this).data());
      });
      // click footer bar
      $('a', '.footer-bar').off('click').on('click', function () {
        $('html, body').css({
          'overflow-y': 'auto',
          'height': 'auto',
          'width': 'auto',
          'position': 'initial',
          'top': 'auto'
        });
        if ($('a.footer-cate').hasClass('cur')) {
          _animation2.default.fadeOut($('.cate-container'));
          $('a.footer-cate').removeClass('cur');
          return;
        }
        window.scrollTo(0, 0);
        if ($(this).hasClass('footer-cate')) {
          _animation2.default.fadeIn($('.cate-container'));
          var _height = $(window).height() - $('.header').height() - $('.footer-bar').height();
          $('.cate-container').css({
            // height: _height + "px",
            // top: '.96rem'
          });
          $('.cate-container .cate-tabs li:eq(0)').trigger('click');
          $('a.footer-cate').addClass('cur');
        }
        $('html, body').css({
          'overflow-y': 'hidden',
          'height': '100%',
          'width': '100%',
          'position': 'fixed',
          'top': 0
        });
      });

      // scroll page to trigger 'to top'
      var $element = $('#toTop').length == 0 ? $('<a href="javascript:;" id="toTop" class="xs icon-top hidden"></a>').appendTo('body') : $('#toTop');
      $(window).on('scroll.totop1', function () {
        var _scrollTop = $(window).scrollTop();
        // to top function
        if (_scrollTop > 100) $element.removeClass('hidden');else $element.addClass('hidden');
        // show shadow for cart,order
        //var _$element_cartbar = $('.cart-next .container');
        // _$element_quickorderbar = $('.quick-order .footer .container');
        //if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        // _$element_cartbar.removeClass('fixed')
        // _$element_quickorderbar.removeClass('fixed');
        //} else {
        /// _$element_cartbar.addClass('fixed');;
        //  _$element_quickorderbar.addClass('fixed');
        //}
      });
      $element.off('click').off('click').on('click', function () {
        _animation2.default.scrollToTop(300);
        return false;
      });
      // close popup
      $('.popup').off('click').on('click', function (ev) {
        var $target = $(ev.target || ev.srcElement);
        if ($target.hasClass('btn-close') || $target.hasClass('btn-cancel') || $target.hasClass('mask')) {
          $('.popup').hidepop();
        }
      });
      // responsive resize
      $(window).resize(function () {
        _this2._setplat();
        _this2._setContentHeight();
        $('img').renderImg();
        if ((0, _typeof3.default)(_this2.resizecallback) && typeof _this2.resizecallback === 'function') _this2.resizecallback.call(_this2, _this2.options.pageChanged, _this2.options.platform);
      });
    }
  }, {
    key: 'resize',
    value: function resize(callback) {
      this.resizecallback = callback;
      if ((0, _typeof3.default)(this.resizecallback) && typeof this.resizecallback === 'function') this.resizecallback.call(this, this.options.pageChanged, this.options.platform);
    }
  }, {
    key: '_setContentHeight',
    value: function _setContentHeight() {
      var _minHeight = $(window).height() - $('header').height() - $('.footer-content').height() - $('.topbar').height() - $('.menu').height();
      $('.main').css({
        'min-height': _minHeight + 'px'
      });
    }
  }, {
    key: '_setplat',
    value: function _setplat() {
      var _this4 = this;

      var width = $(window).width();
      if (width >= 0 && width < 768 && this.options.platform != 1) {
        this.options.platform = 1;
        this.options.pageChanged = true;
      } else if (width >= 768 && width < 1024 && this.options.platform != 2) {
        this.options.platform = 2;
        this.options.pageChanged = true;
      } else if (width >= 1024 && this.options.platform != 3) {
        this.options.platform = 3;
        this.options.pageChanged = true;
      } else {
        this.options.pageChanged = false;
      }
      $.platform = this.options.platform;
      $.pageChanged = this.options.pageChanged;
      // menu cate series
      if (this.options.pageChanged) {
        _animation2.default.fadeOut($('.cate-container'));
        $('.footer-bar .footer-cate').removeClass('cur');
        $('.cate-container').css('left', '0');
        var $catecontainer = $('.cate-content .tab-content');
        $catecontainer.each(function (index, item) {
          var $title = $(item).find('h2');
          if (_this4.options.platform == 1) $(item).prepend($title);else $(item).append($title);
        });
        $('.menu').removeClass('pageIn');
      }
    }
  }, {
    key: 'renderHref',
    value: function renderHref(selector) {
      var $context = selector ? $(selector).find('[data-href]') : $('[data-href]');
      $context.each(function (index, item) {
        var _key = $(item).attr('data-href');
        var _href = _dev2.default.getPageUrl(_key);
        if ($(item).attr('data-param')) {
          _href = _href + $(item).attr('data-param');
        }
        $(item).attr({
          'href': _href
        });
      });
    }

    // render num

  }, {
    key: 'renderFloat',
    value: function renderFloat() {
      var $target = $('.float'),
          _value = $target.html();
      $target.each(function (index, item) {
        var _value = $(item).html();
      });
    }

    // render function of control of select

  }, {
    key: 'renderSelect',
    value: function renderSelect() {
      if ($('.js-selectbox[data-rendered!=1]').length == 0) return false;
      $('.js-selectbox[data-rendered!=1]').each(function (index, item) {
        $(this).attr('data-rendered', 1);
        var $value = $(this).find('.select-val'),
            $ul = $(this).find('.select-options'),
            $li = $ul.find('li');
        $value.off('click').off('click').on('click', function () {
          var $ul = $(this).siblings('.select-options');
          if ($ul.hasClass('disabled')) return;
          if ($ul.hasClass('block')) {
            $('.select-options').removeClass('block');
          } else {
            $('.select-options').removeClass('block');
            $ul.hasClass('block') && $ul.removeClass('block') || $ul.addClass('block');
          }
        });
        $li.off('click').off('click').on('click', function () {
          $(this).attr('selected', 'selected');
          $(this).siblings('li').removeAttr('selected');
          $ul.removeClass('block');
          $value.html($(this).html());
        });
      });
    }
  }, {
    key: 'verify',
    value: function verify() {
      console.log('verify form');
    }
  }]);
  return Page;
}(); // 入口文件


module.exports = Page;

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(20);
__webpack_require__(51);
__webpack_require__(36);
__webpack_require__(35);
__webpack_require__(9);
module.exports = __webpack_require__(37);


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // animation from right to left, for instance menu
  toLeft: function toLeft($element) {
    $element.removeClass('pageOut').addClass('pageIn');
    this._in($element);
  },
  toRight: function toRight($element) {
    $element.removeClass('pageIn').addClass('pageOut');
    this._out($element);
  },
  fadeIn: function fadeIn($element) {
    $element.removeClass('fadeOut').addClass('fadeIn');
    this._in($element);
  },
  fadeOut: function fadeOut($element) {
    $element.removeClass('fadeIn').addClass('fadeOut');
    this._out($element);
  },
  // animation for scroll to top
  scrollToTop: function scrollToTop(time) {
    $('html,body').animate({
      scrollTop: "0"
    }, time);
  },
  _in: function _in($element) {
    $element.addClass('block');
    $('body').addClass('overflow').css('height', '100vh');
  },
  _out: function _out($element) {
    $('body').removeClass('overflow').css('height', 'auto');
    setTimeout(function () {
      $element.removeClass('block fadeOut pageOut');
    }, 260);
  }
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 本项目通用
module.exports = {
  // 浏览器判断
  browser: {
    isMobile: function isMobile() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("Android") > -1) {
        return true;
      }
      return false;
    },
    isIE: function isIE() {
      if (!!window.ActiveXObject || "ActiveXObject" in window) return true;else return false;
    },
    isFF: function isFF() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Firefox") > -1) {
        return true;
      }
      return false;
    },
    isSafari: function isSafari() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Safari") > -1) {
        return true;
      }
      return false;
    },
    isChrome: function isChrome() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Chrome") > -1) {
        return true;
      }
      return false;
    },
    isOpera: function isOpera() {
      var userAgent = navigator.userAgent;
      if (userAgent.indexOf("Opera") > -1) {
        return true;
      }
      return false;
    }
  },
  isFile: window.location.href.indexOf('.html') > -1, //判断是否本地环境
  // 千位符
  toThousands: function toThousands(num) {
    var tempstr = num;
    var num = (num || 0).toString(),
        num = tempstr.split('.')[0],
        end = tempstr.split('.').length > 1 ? tempstr.split('.')[1] : '',
        result = '';
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    if (end) {
      result += '.' + end;
    }

    return result;
  }
};

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _system = __webpack_require__(35);

var _system2 = _interopRequireDefault(_system);

var _util = __webpack_require__(9);

var _animation = __webpack_require__(20);

var _animation2 = _interopRequireDefault(_animation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Animation from './util/animation.js'
var Dev = {
  paths: {
    index: './index.html', // home page
    login: './login.html', // login page
    cart: './cart.html', // cart page
    checkout: './checkout.html', // checkout page
    'order-success': './order-success.html',
    'quick-order': './quick-order.html', // quick order page
    'order-list': './order-list.html', // order list page
    'order-detail': './order-detail.html', // order detail page
    'video-list': './video-list.html', // video page
    'video-detail': './video-detail.html', // video page
    'promotion-list': './promotion-list.html', // promotion-list
    'promotion-detail': './promotion-detail.html', // promotion-detail
    'product-list': './product-list.html', // product list page
    'product-detail': './product-detail.html', // product list page
    'product-search': './product-search.html', // search page
    'how-to-order': './how-to-order.html', // 訂貨辦法
    'pay-and-send': './pay-and-send.html', // 付款與送貨
    'how-to-refund': './how-to-refund.html', // 退貨辦法
    'how-to-repair': './how-to-repair.html', // 維修方式
    'goods-status': './goods-status.html', // 正常供貨
    'goods-status-pause': './goods-status-pause.html', // 暂停供货
    'goods-status-stop': './goods-status-stop.html', // 停止供貨
    '404': './404.html', // 404 page
    'maintain': './maintain.html' // 维护 page
  },
  getPageUrl: function getPageUrl(key) {
    // get page url
    var _url = 'javascript:;';
    try {
      if (_system2.default.isFile) _url = this.paths[key];else _url = paths[key];
    } catch (e) {
      console.log('can not find the paths.' + key + ' for developers');
    }
    return _url;
  },
  refreshThisPage: function (_refreshThisPage) {
    function refreshThisPage(_x, _x2) {
      return _refreshThisPage.apply(this, arguments);
    }

    refreshThisPage.toString = function () {
      return _refreshThisPage.toString();
    };

    return refreshThisPage;
  }(function (option, callback) {
    // 刷新页面
    try {
      refreshThisPage(option, callback);
    } catch (e) {
      console.log('can not find the "refreshThisPage" method for developers', option);
    }
  }),
  search_complete: function search_complete(option, callback) {
    // 联想
    // try {
    //   setTimeout(function () {
    //       $.ajax({
    //         cache: true,
    //         type: "GET",
    //         url: ACC.config.contextPath + "/search/autocomplete?term=" + option.value,
    //         async: false,
    //         success: function success(data) {
    //           $('.searchbar .search-result ul').html(data);
    //         },
    //         error: function error(XMLHttpRequest, textStatus, errorThrown) {
    //           console.log("XMLHttpRequest.status+==" + XMLHttpRequest.status);
    //           console.log("XMLHttpRequest.readyState+==" + XMLHttpRequest.readyState);
    //           console.log("textStatus+==" + textStatus);
    //           alert("系统错误，请稍后重试！");
    //         }
    //       });
    //       callback();
    //   }, 1000);
    // } catch (e) {
    //   console.log('can not find the "refreshThisPage" method for developers', option);
    // }
    try {
      searchComplete(option, callback);
    } catch (e) {
      console.log('can not find the "searchComplete" method for developers', option);
      _animation2.default.fadeIn($('.searchbar .search-result'));
    }
  },
  clickSearch: function (_clickSearch) {
    function clickSearch(_x3, _x4) {
      return _clickSearch.apply(this, arguments);
    }

    clickSearch.toString = function () {
      return _clickSearch.toString();
    };

    return clickSearch;
  }(function (option, callback) {
    try {
      clickSearch(option, callback);
    } catch (e) {
      console.log('can not find the "clickSearch" method for developers', option);
    }
  }),
  searchBoxInputFocus: function (_searchBoxInputFocus) {
    function searchBoxInputFocus(_x5, _x6) {
      return _searchBoxInputFocus.apply(this, arguments);
    }

    searchBoxInputFocus.toString = function () {
      return _searchBoxInputFocus.toString();
    };

    return searchBoxInputFocus;
  }(function (option, callback) {
    try {
      searchBoxInputFocus(option, callback);
    } catch (e) {
      console.log('can not find the "searchBoxInputFocus" method for developers', option);
    }
  }),
  searchBoxInputBlur: function (_searchBoxInputBlur) {
    function searchBoxInputBlur(_x7, _x8) {
      return _searchBoxInputBlur.apply(this, arguments);
    }

    searchBoxInputBlur.toString = function () {
      return _searchBoxInputBlur.toString();
    };

    return searchBoxInputBlur;
  }(function (option, callback) {
    try {
      searchBoxInputBlur(option, callback);
    } catch (e) {
      console.log('can not find the "searchBoxInputBlur" method for developers', option);
    }
  }),
  deleteOneProduct: function (_deleteOneProduct) {
    function deleteOneProduct(_x9, _x10) {
      return _deleteOneProduct.apply(this, arguments);
    }

    deleteOneProduct.toString = function () {
      return _deleteOneProduct.toString();
    };

    return deleteOneProduct;
  }(function (option, callback) {
    // 删除单个产品
    try {
      deleteOneProduct(option, callback);
    } catch (e) {
      console.log('can not find the "deleteOneProduct" method for developers', option);
    }
  }),
  redirect: function redirect(key, option) {
    // redirect
    window.location.href = this.getPageUrl(key);
  },
  searchProduct: function (_searchProduct) {
    function searchProduct(_x11, _x12) {
      return _searchProduct.apply(this, arguments);
    }

    searchProduct.toString = function () {
      return _searchProduct.toString();
    };

    return searchProduct;
  }(function (option, callback) {
    // search productlist
    try {
      searchProduct(option, callback);
    } catch (e) {
      console.log('can not find the "searchProduct" method for developers', option);
    }
  }),
  login: function (_login) {
    function login(_x13, _x14) {
      return _login.apply(this, arguments);
    }

    login.toString = function () {
      return _login.toString();
    };

    return login;
  }(function (option, callback) {
    // start login
    try {
      login(option, callback);
    } catch (e) {
      console.log('can not find the "login" method for developers', option);
    }
  }),
  getProductList: function (_getProductList) {
    function getProductList(_x15, _x16) {
      return _getProductList.apply(this, arguments);
    }

    getProductList.toString = function () {
      return _getProductList.toString();
    };

    return getProductList;
  }(function (option, callback) {
    try {
      getProductList(option, callback);
    } catch (e) {
      callback(true);
      console.log('can not find the "getProductList" method for developers', option);
    }
  }),
  getVideoList: function (_getVideoList) {
    function getVideoList(_x17, _x18) {
      return _getVideoList.apply(this, arguments);
    }

    getVideoList.toString = function () {
      return _getVideoList.toString();
    };

    return getVideoList;
  }(function (option, callback) {
    try {
      getVideoList(option, callback);
    } catch (e) {
      callback(true);
      console.log('can not find the "getVideoList" method for developers', option);
    }
  }),
  getCorrelationlist: function (_getCorrelationlist) {
    function getCorrelationlist(_x19, _x20) {
      return _getCorrelationlist.apply(this, arguments);
    }

    getCorrelationlist.toString = function () {
      return _getCorrelationlist.toString();
    };

    return getCorrelationlist;
  }(function (option, callback) {
    try {
      getCorrelationlist(option, callback);
    } catch (e) {
      callback(true);
      console.log('can not find the "getCorrelationlist" method for developers', option);
    }
  }),
  changeBuyer: function (_changeBuyer) {
    function changeBuyer(_x21, _x22) {
      return _changeBuyer.apply(this, arguments);
    }

    changeBuyer.toString = function () {
      return _changeBuyer.toString();
    };

    return changeBuyer;
  }(function (option, callback) {
    try {
      changeBuyer(option, callback);
    } catch (e) {
      console.log('can not find the "changeBuyer" method for developers', option);
    }
  }),
  addCart: function (_addCart) {
    function addCart(_x23, _x24) {
      return _addCart.apply(this, arguments);
    }

    addCart.toString = function () {
      return _addCart.toString();
    };

    return addCart;
  }(function (option, callback) {
    try {
      addCart(option, callback);
    } catch (e) {
      console.log('can not find the "addCart" method for developers', option);
    }
  }),
  setNumChange: function (_setNumChange) {
    function setNumChange(_x25) {
      return _setNumChange.apply(this, arguments);
    }

    setNumChange.toString = function () {
      return _setNumChange.toString();
    };

    return setNumChange;
  }(function (option) {
    try {
      setNumChange(option);
    } catch (e) {
      console.log('can not find the "setNumChange" method for developers', option);
    }
  })
};
module.exports = Dev;

$.fn.extend({
  renderCartNum: function renderCartNum() {
    var $input = $(this).find('input'),
        $minus = $(this).find('.icon-minus'),
        $plus = $(this).find('.icon-plus'),
        minval = $input.attr('min') || 0,
        maxval = $input.attr('max') || 3;
    $minus.off('click').on('click', function () {
      if ($(this).hasClass('disabled')) return;
      var _value = $input.val();
      _value--;
      if (_value <= minval) {
        $(this).addClass('disabled');
      }
      if (_value < maxval) {
        $plus.removeClass('disabled');
      }
      $input.val(_value);
    });
    $plus.off('click').on('click', function () {
      if ($(this).hasClass('disabled')) return;
      var _value = $input.val();
      _value++;
      if (_value >= minval) {
        $minus.removeClass('disabled');
      }
      if (_value >= maxval) {
        $(this).addClass('disabled');
      }
      $input.val(_value);
    });
  },

  focus: function focus(options) {
    var _top = $(this).offset().top;
    options = options || {
      timer: 300
    };
    $('html,body').animate({
      scrollTop: _top + 'px'
    }, options.timer);
  },
  ScrollLoad: function ScrollLoad(_callback) {
    var $item = $(this);
    var _ScrollLoad = new _util.ScrollLoad({
      target: $item, // 容器
      html: {
        start: '<p class="more">滑動查看更多</p>',
        // move: '<p class="more">正在加载数据</p>',
        // end: '<p class="more">无数据</p>',
        callback: function callback(scrollLoad) {
          _callback(scrollLoad);
        }
      }
    });
  },
  showpop: function showpop() {
    // 弹窗
    _animation2.default.fadeIn(this);
  },
  hidepop: function hidepop() {
    if (this.hasClass('pageIn')) _animation2.default.toRight(this);else _animation2.default.fadeOut(this);
  },
  showpage: function showpage() {
    // 弹页面
    if ($(window).width() > 750 && $('[data-dpr=2]').length > 0 || $('[data-dpr=1]').length > 0) _animation2.default.fadeIn(this);else _animation2.default.toLeft(this);
  },
  hidepage: function hidepage() {
    _animation2.default.toRight(this);
    if (this.hasClass('fadeIn')) _animation2.default.fadeOut(this);else _animation2.default.toRight(this);
  },
  renderImg: function renderImg() {
    if (!$.pageChanged) return;
    $('img').each(function (index, item) {
      var _src = item.getAttribute('src'),
          _src_md = item.getAttribute('data-md') || _src,
          _src_xs = item.getAttribute('data-xs') || _src;
      if ($.platform == 1) item.src = _src_xs;else item.src = _src_md;
    });
  },
  // 删除某个购物车产品
  deleteConfirmForOneCart: function deleteConfirmForOneCart(content, callbackConfirm, callbackCancel) {
    $._alert({
      context: $(this).parents('.cart-product-table'),
      content: '<p>' + content + '</p>',
      isMask: false,
      btnConfirm: true,
      btnCancel: true,
      callbackConfirm: callbackConfirm,
      callbackCancel: callbackCancel
    }, 'deleteforonecart');
  },
  // loading 显示 $('.container').showloading();
  showloading: function showloading(options) {
    options = $.extend({}, {
      isMask: true
    }, options);
    options = $.extend({}, {
      src: './assets/imgs/loading.gif'
    }, options);
    var maskHTML = '';
    if (options.isForPopup) {
      $('.mask').addClass('popup-loading');
    }
    if (options.isMask) maskHTML = '<div class="loading-mask ' + options.position + '"></div>';
    $('body').addClass('overflow');
    $(this).addClass("loading-parent-position").append('<div class="mask-box">\n        ' + maskHTML + '\n        <img class="img-loading ' + options.classname + '" src="' + options.src + '" >\n      </div>');
    $('.img-loading').css({
      // "position":"fixed",
      top: $(window).height() / 2 + "px"
    });
    // console.log($(this).scrollTop());
    if ($(window).scrollTop() > 0) {
      console.log($(window).scrollTop() + $(window).height());
      $('.img-loading').css({
        // "position":"fixed",
        top: $(window).scrollTop() + $(window).height() / 2 + "px"
      });
    }
  },
  // loading 隐藏
  hideloading: function hideloading(options) {
    $('body').removeClass('overflow');
    $(this).children(".mask-box").remove();
    if (options && options.isForPopup) {
      $('.mask').removeClass('popup-loading');
    }
  },
  // 显示添加购物3秒隐藏
  showToast: function showToast() {
    _animation2.default.fadeIn(this);
  },
  hideToast: function hideToast(options) {
    var _this = this;

    setTimeout(function () {
      _animation2.default.fadeOut(_this);
    }, options.timer);
  }
});

$.extend({
  platform: 0, // platform 1(phone), 2(ipad), 3(pc)
  pageChanged: false, // whether page is changed
  toThousands: _system2.default.toThousands, // 转换千位付
  urlParams: _util.getUrlAllParam, // 获取url所有参数
  urlParam: _util.getUrlParam,
  cookie: _util.cookie,
  validate: _util.validate,
  showloading: function showloading(newSrc) {
    // $.showloading()
    $('body').showloading({
      classname: 'fixed',
      src: newSrc
    });
  },
  hideloading: function hideloading() {
    $('body').hideloading();
  },
  renderCartNum: function renderCartNum() {
    if ($('.js-cart-num[data-rendered!=1]').length == 0) return false;
    $('.js-cart-num:not(.disabled)[data-rendered!=1]').each(function (index, item) {
      $(item).renderCartNum();
    });
  },

  _alert: function _alert(options, type) {
    var params = $.extend({
      context: 'body',
      content: '',
      title: '',
      isMask: true,
      isClose: true,
      iconRight: false,
      iconWrong: false,
      iconTip: false,
      btnConfirm: false,
      textConfirm: '確 定',
      btnCancel: false,
      textCancel: '取 消',
      callbackConfirm: $.noop,
      callbackCancel: $.noop
    }, options);
    // 处理总类
    var _type = '';
    if (type == 'cart') _type = 'forcart';else if (type == 'withonebtn') _type = 'withonebtn';else if (type == 'withtwobtn') _type = 'withtwobtn';else if (type == 'withtips') _type = 'withtips';else if (params.title) _type = 'withtitle';else if (type == 'deleteforonecart') _type = 'delete-for-onecart';
    // 处理图标
    var iconClass = '';
    if (params.iconRight) iconClass = 'tip-success';else if (params.iconWrong) iconClass = 'tip-fail';else if (params.iconTip) iconClass = 'tip-tip';
    // 处理模板
    var btnConfirmTemplate = '',
        btnCancelTemplate = '',
        titleTemplate = '',
        maskTemplate = '',
        closeTemplate = '';
    if (params.btnConfirm) btnConfirmTemplate = '<a class="btn-confirm" href="javascript:;">' + params.textConfirm + '</a>';
    if (params.btnCancel) btnCancelTemplate = '<a class="btn-cancel" href="javascript:;">' + params.textCancel + '</a>';
    if (params.title) titleTemplate = '<div class="title">' + params.title + '</div>';
    if (params.isMask) maskTemplate = '<div class="mask"></div>';
    if (params.isClose) closeTemplate = '<a class="btn-close icon-close" href="javascript:;"></a>';
    var _template = '<div class="popup template ' + iconClass + ' ' + _type + '">\n                    ' + maskTemplate + '\n                    <div class="popup-content">\n                        ' + titleTemplate + '\n                        ' + closeTemplate + '\n                        <div class="content">\n                          <em class="icon"></em>\n                          <div class="content-desc">' + params.content + '</div>\n                          <div class="btns">\n                            ' + btnCancelTemplate + '\n                            ' + btnConfirmTemplate + '\n                          </div>\n                        </div>\n                    </div>\n                </div>';
    $(params.context).append(_template);
    $('.popup.template', $(params.context)).showpop();
    // mask，close
    $('.btn-close,.mask', '.popup.template').on('click', function (ev) {
      $('.popup.template').hidepop();
      setTimeout(function () {
        $('.popup.template').remove();
      }, 300);
    });

    // 取消关闭按钮
    $('.btn-close,.btn-cancel,.mask', '.popup.template').on('click', function (ev) {
      if (params.callbackCancel && typeof params.callbackCancel === 'function') params.callbackCancel();
      $('.popup.template').hidepop();
      setTimeout(function () {
        $('.popup.template').remove();
      }, 300);
    });
    // 确认按钮
    $('.btn-confirm,.btn-ok', '.popup.template').on('click', function (ev) {
      if (params.callbackConfirm && typeof params.callbackConfirm === 'function') params.callbackConfirm();
      $('.popup.template').hidepop();
      setTimeout(function () {
        $('.popup.template').remove();
      }, 300);
    });
  },
  // 确认删除?
  deleteConfirm: function deleteConfirm(content, callbackConfirm, callbackCancel) {
    $._alert({
      content: '<p>' + content + '</p>',
      btnConfirm: true,
      btnCancel: true,
      callbackConfirm: callbackConfirm,
      callbackCancel: callbackCancel
    });
  },
  // 确认删除?
  deleteConfirmWithIcon: function deleteConfirmWithIcon(content, callbackConfirm, callbackCancel) {
    $._alert({
      content: '<p>' + content + '</p>',
      btnConfirm: true,
      btnCancel: true,
      iconTip: true,
      callbackConfirm: callbackConfirm,
      callbackCancel: callbackCancel
    });
  },
  // 文字弹窗
  alert: function alert(content) {
    $._alert({
      content: '' + content
    }, 'withtips');
  },
  alertWithOneBtn: function alertWithOneBtn(content, btntext, callbackConfirm) {
    $._alert({
      content: '' + content,
      btnConfirm: true,
      textConfirm: '' + btntext,
      callbackConfirm: callbackConfirm
    }, 'withonebtn');
  },
  // 两个按钮
  alertWithTwoBtn: function alertWithTwoBtn(content, callbackConfirm, callbackCancel) {
    $._alert({
      content: '' + content,
      btnConfirm: true,
      btnCancel: true,
      callbackConfirm: callbackConfirm,
      callbackCancel: callbackCancel
    }, 'withtwobtn');
  },
  // 包含标题
  alertWithTitle: function alertWithTitle(title, content) {
    $._alert({
      title: '' + title,
      content: '' + content,
      isClose: true
    }, 'withtitle');
  },
  //银行卡联动
  bankSelect: function bankSelect(bankEl, valueEl) {
    var bankLi = $(bankEl).find('li');
    var bankElLength = bankLi.length;
    var _valueE = $(valueEl);
    _valueE.val(bankLi.eq(0).attr('data'));
    for (var i = 0; i < bankElLength; i++) {
      (function (i) {
        bankLi.eq(i).click(function () {
          _valueE.val(bankLi.eq(i).attr('data'));
        });
      })(i);
    }
  }
});

window.onlyNumber = function (e) {
  //   var keynum = 0;
  // if (window.event) // IE
  // {
  //   keynum = e.keyCode;
  // } 
  // // else if (e.which) // Netscape/Firefox/Opera
  // // {
  // //   keynum = e.charCode;
  // // }
  // console.log('key code', e.keyCode);
  // console.log('char code', e.charCode);
  // if (!(keynum <= 57)) {
  //   e.preventDefault();
  // }


  switch (event.keyCode) {
    case 8: // Backspace
    case 9: // Tab
    case 13: // Enter
    case 37: // Left
    case 38: // Up
    case 39: // Right
    case 40:
      // Down
      break;
    default:
      var regex = new RegExp("^[0-9]");
      console.log('event', event.key);
      var key = event.key;
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
      break;
  }
};

window.beforePaste = function (event) {};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Zoom = Zoom;
//放大镜效果
function Zoom(element, parameter) {
    var $zoom = $(element),
        smallWidth = 0,
        smallHeight = 0,
        bigWidth = 0,
        bigHeight = 0,
        hovWidth = 0,
        hovHeight = 0,
        imgLeft = 0,
        imgTop = 0;
    var touch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        eventType = touch ? "touchmove" : "mousemove";
    $zoom.methods = {
        init: function init() {
            $zoom.moveEvent = parameter.moveEvent || null;
            $zoom.hoverEvent = parameter.hoverEvent || null;
            $zoom.smallImg = parameter.smallImg || ".sku-img";
            $zoom.bigImg = parameter.bigImg || ".sku-super";
            $zoom.hovImg = parameter.hovImg || ".sku-hover";
            $zoom.isZoom = parameter.isZoom || false;
            this.event();
        },
        updata: function updata(status) {
            $zoom.isZoom = status;
            $zoom.methods.status();
        },
        status: function status() {
            if ($zoom.isZoom) {
                if (!touch) {
                    $(element).find($zoom.hovImg).show();
                }
                $(element).find($zoom.bigImg).show();
            } else {
                $(element).find($zoom.hovImg).hide();
                $(element).find($zoom.bigImg).hide();
            }
        },
        event: function event() {
            $(element).find($zoom.smallImg).hover(function () {
                if ($(window).width() < 768) return;
                imgLeft = $(this).offset().left;
                imgTop = $(this).offset().top;
                $zoom.methods.status();
                if ($zoom.hoverEvent && !touch) $zoom.hoverEvent("over");
                $(document.body).bind(eventType, function (e) {
                    $zoom.methods.speed(e);return false;
                });
            }, function () {
                if ($(window).width() < 768) return;
                if ($zoom.hoverEvent && !touch) $zoom.hoverEvent("out");
                if (!$zoom.isZoom) return false;
                $(document.body).unbind(eventType);
                $(element).find($zoom.hovImg).hide();
                $(element).find($zoom.bigImg).hide();
            });
        },
        speed: function speed(e) {
            smallWidth = $(element).find($zoom.smallImg).width();
            smallHeight = $(element).find($zoom.smallImg).height();
            bigWidth = $(element).find($zoom.bigImg).find("img").width();
            bigHeight = $(element).find($zoom.bigImg).find("img").height();
            hovWidth = $(element).find($zoom.hovImg).width();
            hovHeight = $(element).find($zoom.hovImg).height();

            var e = e || window.event;
            var pageX = e.pageX || e.originalEvent.touches[0].pageX;
            var pageY = e.pageY || e.originalEvent.touches[0].pageY;
            var xpos = pageX - hovWidth / 2 - imgLeft;
            xpos = xpos < 0 ? 0 : xpos;
            xpos = xpos > smallWidth - hovWidth ? smallWidth - hovWidth : xpos;
            var ypos = pageY - hovHeight / 2 - imgTop;
            ypos = ypos < 0 ? 0 : ypos;
            ypos = ypos > smallHeight - hovHeight ? smallHeight - hovHeight : ypos;
            if ($zoom.moveEvent && !touch) $zoom.moveEvent({ smallWidth: smallWidth, smallHeight: smallHeight, spacingLeft: imgLeft, spacingTop: imgTop, pageX: pageX, pageY: pageY });
            if ($zoom.isZoom) {
                $(element).find($zoom.hovImg).css({ "left": xpos, "top": ypos });
                $(element).find($zoom.bigImg)[0].scrollLeft = xpos - hovWidth / 2;
                $(element).find($zoom.bigImg)[0].scrollTop = ypos - hovHeight / 2;
            }
        }
    };
    $zoom.methods.init();
    return $zoom;
};

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Data = {};
//个人中心ui配置
Data.personal = {
  //主账号菜单
  menu: [{
    lg: 'personalCenter',
    text: '个人中心',
    link: '',
    item: [{
      lg: 'accountInfo',
      text: '账户信息',
      link: 'accountInfo'
    }, {
      lg: 'ebayid-manage',
      text: 'eBayID管理',
      link: 'eBayIDManage'
    }, {
      lg: 'subuser-manage',
      text: '子账号管理',
      link: 'subManage'
    }, {
      lg: 'battery-verify',
      text: '带电认证信息',
      link: 'batteryVerify'
    }]
  }, {
    lg: 'finInfo',
    text: '财务信息',
    link: 'financeInfo'
  }, {
    lg: 'dataSta',
    text: '数据统计',
    link: 'dataStatistics'
  }, {
    lg: 'dev,management',
    text: '开发者管理',
    link: 'devManage'
  }],
  batteryAuthStates: { // 认证状态
    "TRUE": "TRUE", // 已认证            
    "BLOCK": "BLOCK", // 已停用
    "EXPIRED": "EXPIRED" // 已過期
  },
  batteryAuthTypes: { // 认证类型
    "001": "battery-state3", // 配套电池            
    "010": "battery-state4", // 纯电池
    "100": "battery-state2" // 内置电池
  },
  //子账号菜单
  menuSub: [{
    lg: 'personalCenter',
    text: '个人中心',
    link: '',
    item: [{
      lg: 'accountInfo',
      text: '账户信息',
      link: 'accountInfo'
    }]
  }, {
    lg: 'dataSta',
    text: '数据统计',
    link: 'dataStatistics'
  }],
  batteryState: {
    "000": "battery-000", // 未认证
    "111": "battery-111", // 已认证
    "001": "battery-001", // 纯电池已认证，内置电池和配套电池未认证
    "010": "battery-010", // 配套电池已认证，内置电池和纯电池未认证
    "011": "battery-011", // 配套电池和纯电池已认证，内置电池未认证
    "100": "battery-100", // 内置电池已认证，配套电池和纯电池未认证
    "101": "battery-101", // 内置电池和纯电池已认证，配套电池未认证
    "110": "battery-110" // 内置电池和配套电池已认证，纯电池未认证
  },
  //筛选流水
  billType: [{
    id: 'ALL',
    lg: 'all-record',
    text: '全部流水'
  }, {
    id: 'CHARGE',
    lg: 'charge-record',
    text: '充值流水'
  }, {
    id: 'COST',
    lg: 'cost-record',
    text: '消费流水'
  }],
  //筛选币种
  currency: [{
    id: 'ALL',
    lg: 'all-currency',
    text: '全部币种'
  }, {
    id: 'CNY',
    lg: 'CNY',
    text: '人民币'
  }, {
    id: 'TWD',
    lg: 'TWD',
    text: '新台币'
  }, {
    id: 'HKD',
    lg: 'HKD',
    text: '港币'
  }],
  //筛选时间
  offset: [{
    id: '0',
    lg: 'cur-month',
    text: '当月'
  }, {
    id: '1',
    lg: 'recent-onemonth',
    text: '最近一个月'
  }, {
    id: '2',
    lg: 'recent-twomonths',
    text: '最近二个月'
  }, {
    id: '3',
    lg: 'recent-threemonths',
    text: '最近三个月'
  }],
  //授权状态
  authorizeStatus: [{
    id: 'ALL',
    lg: 'all',
    text: '全部'
  }, {
    id: 'VALID',
    lg: 'effective',
    text: '有效'
  }, {
    id: 'EXPIRED',
    lg: 'beOverdue',
    text: '过期'
  }],
  //数据统计导出
  export: [{
    id: null,
    lg: 'dataOutput',
    text: '- 数据导出 -'
  }, {
    id: true,
    lg: 'exportExcel',
    text: '导出excel'
  }, {
    id: false,
    lg: 'exportCSV',
    text: '导出csv'
  }]
};
module.exports = Data;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(10).Object.assign;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.cookie = exports.istouch = exports.ScrollLoad = undefined;

var _assign = __webpack_require__(88);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(33);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(34);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.enter = enter;
exports.getUrlParam = getUrlParam;
exports.getUrlAllParam = getUrlAllParam;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 滚动刷新 add by gena
var ScrollLoad = exports.ScrollLoad = function () {
  function ScrollLoad(options) {
    (0, _classCallCheck3.default)(this, ScrollLoad);

    if (!options.target) return;
    this.$element = options.target;
    this.$scroll = options.scroll || $(window);
    this.options = (0, _assign2.default)({}, {
      distance: 0, // 加载数据的距离
      html: { // 默认文本显示
        start: '<div class="scroll-start">\u4E0B\u8F7D\u6570\u636E</div>',
        move: '<div class="scroll-move">\u52A0\u8F7D\u4E2D...</div>',
        end: '<div class="scroll-end">\u6682\u65E0\u6570\u636E</div>',
        callback: function callback() {} // 回调
      },
      uphtml: {
        start: '<div class="scroll-move">\u4E0B\u62C9\u52A0\u8F7D\u66F4\u591A</div>',
        move: '<div class="scroll-move">\u91CA\u653E\u5237\u65B0</div>',
        callback: function callback() {} // 回调
      }
    }, options);
    this.istouch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;
    this.init();
    this.init_event();
  }

  (0, _createClass3.default)(ScrollLoad, [{
    key: 'init',
    value: function init() {
      this.$element.append('<div class="scroll-down"/>');
      this.$down = $('.scroll-down', this.$element).html(this.options.html.start);
      this.isloading = false;
      this.hasData = true;
      this.isDown = false;
      this.getheight();
      if (this.contentHeight <= this.clientHeight) {
        this._loaddown();
      }
    }
    // 事件

  }, {
    key: 'init_event',
    value: function init_event() {
      var _this2 = this;

      var _this = this;
      this.isloading = false;
      $(window).on('resize.scrollload', function () {
        _this2.getheight();
      });
      // this.$element.on(this.istouch ? 'touchstart' : 'mousedown', function (e) {
      //   if (_this.isloading) return;
      //   if (_this.istouch) _this._settouch(e);
      //   _this.scrolllstart.call(_this, e);
      // });
      // this.$element.on(this.istouch ? 'touchmove' : 'mousemove', function (e) {
      //   if (_this.isloading) return;
      //   if (_this.istouch) _this._settouch(e);
      //   _this.scrolling.call(_this, e);
      // });
      // this.$element.on(this.istouch ? 'touchend' : 'mouseup', function (e) {
      //   if (_this.isloading) return;
      //   if (_this.istouch) _this._settouch(e);
      //   _this.scrollend.call(_this, e);
      // });
      this.$scroll.on('scroll.scrollload', function () {
        _this2.scrollTop = _this2.$scroll.scrollTop();
        if (_this2.options.distance) _this2.options.distance = Math.floor(_this2.$down.height() * 1 / 3);
        _this2.getheight();
        if (!_this2.isloading && _this2.clientHeight + _this2.scrollTop >= _this2.endposition) {
          _this2._loaddown();
        }
      });
    }
    // 获取高度

  }, {
    key: 'getheight',
    value: function getheight() {
      this.contentHeight = this.$element[0].scrollHeight;
      this.clientHeight = this.$scroll.height();
      this.endposition = this.$down.offset().top;
    }
  }, {
    key: '_settouch',
    value: function _settouch(e) {
      if (!e.touches) {
        e.touches = e.originalEvent.touches;
      }
    }
    // 开始滚动

  }, {
    key: 'scrolllstart',
    value: function scrolllstart(e) {
      this.isDown = true;
      this.scrollTop = this.$element.scrollTop(), this.top = this.$element.position().top;
      this.y = this.istouch ? e.touches[0].pageY - this.top : e.pageY - this.top;
      if (!this.SCROLLUP) {
        this.$element.prepend('<div class="scroll-up"></div>');
        this.SCROLLUP = true;
        this.$up = $('.scroll-up', this.$element);
        this._transition(this.$up, 300);
      }
      this.$up.html(this.options.uphtml.start);
    }
    // 滚动中

  }, {
    key: 'scrolling',
    value: function scrolling(e) {
      this.scrollTop = this.$element.scrollTop();
      if (!this.isDown) return;
      if (this.scrollTop > 0) return;
      var y = this.y,
          curY = this.istouch ? e.touches[0].pageY - this.top : e.pageY - this.top,
          moveY = curY - y;
      if (moveY < 0) return;
      if (moveY >= 50) {
        this.$up.html(this.options.uphtml.move);
        return;
      }
      this.$up.css({
        height: curY - y
      });
    }
    // 结束滚动

  }, {
    key: 'scrollend',
    value: function scrollend(e) {
      this.isDown = false;
      this.$up.css({
        height: 0
      });
      this.options.uphtml.callback(this);
    }
    // 外部已经完成加载，

  }, {
    key: 'handled',
    value: function handled(isData) {
      this.isloading = false;
      this.isData = isData;
      if (isData) {
        this.getheight();
        this.$down.empty().html(this.options.html.start).appendTo(this.$element);
      } else {
        this.$down.empty().html(this.options.html.end).appendTo(this.$element);
        this.$scroll.off('scroll.scrollload');
      }
    }
    // 加载数据

  }, {
    key: '_loaddown',
    value: function _loaddown() {
      this.isloading = true;
      this.options.html.callback(this);
    }
  }, {
    key: '_transition',
    value: function _transition($ele, num) {
      $ele.css({
        '-webkit-transition': 'all ' + num + 'ms',
        transition: 'all ' + num + 'ms',
        overflow: 'hidden'
      });
    }
  }]);
  return ScrollLoad;
}();

function enter() {}
var istouch = exports.istouch = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;

function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
function getUrlAllParam() {
  var obj = new Object();
  if (window.location.search.indexOf("?") == 0 && window.location.search.indexOf("=") > 1) {
    var strs = window.location.search.substring(1, window.location.search.length).split("&");
    for (var i = 0; i < strs.length; i++) {
      obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return obj;
}
var cookie = exports.cookie = {
  set: function set(name, value, expiresHours) {
    var cookieString = name + '=' + encodeURIComponent(value);
    if (expiresHours > 0) {
      var date = new Date();
      date.setTime(date.getTime + expiresHours * 3600 * 1000);
      cookieString = cookieString + '; expires=' + date.toGMTString();
    }
    document.cookie = cookieString;
  },
  get: function get(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split('; ');
    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=');
      if (arr[0] == name) {
        return arr[1];
      }
    }
    return '';
  },
  del: function del(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    var _value = this.get(name);
    document.cookie = name + "=" + _value + "; expires=" + date.toGMTString();
  }
};

var validate = exports.validate = {
  reg: {
    required: /^[^\s]+$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/ig, // 邮箱
    english: /^[A-Za-z\s0-9]+$/ig, // 英文
    tel: /^[0-9\s\*\#\-\+]{6,20}$/ig, // 手机号码（包括固定电话）
    phone: /^[1,3,5,7,9][0-9+]{10}$/ig, // 大陆
    dignum: function dignum(n) {
      // 浮点数位数
      if (n) return '/^([0-9]{0,' + n + '})(.[0-9]{1,2})?$/ig';else return (/^([0-9]+)(\.[0-9]{1,2})?$/ig
      );
    },
    num: function num(n) {
      //整数位数
      if (n) return '/^[0-9]{0,' + n + '}$/ig';else return '/^[0-9]+$/ig';
    },
    set: function set(key, value) {
      this[key] = value;
    },
    get: function get(key) {
      return this[key];
    }
  },
  msg: {
    required: '必填',
    email: '邮箱格式错误，请重新输入',
    english: '支持英文（不区分大小写）', // 英文
    tel: '支持数字和特殊字符（*#-+），且不能超过20位字符', // 手机号码（包括固定电话）
    phone: '中国大陆电话只支持11位数字', // 大陆
    phoneTW: /^[0-9+]{10}$/ig, // 台湾
    dignum: function dignum(n) {
      // 浮点数位数
      if (n) return '\u652F\u6301\u6D6E\u70B9\u6570 \u6574\u6570\u4F4D' + n + '\u4F4D \u6D6E\u70B9\u6570\u4E3A2\u4F4D';else return '\u652F\u6301\u6D6E\u70B9\u6570 \u6D6E\u70B9\u6570\u4E3A2\u4F4D';
    },
    num: function num(n) {
      // 整数位数
      if (n) return '\u652F\u6301' + n + '\u4F4D\u6574\u6570';else return '\u652F\u6301\u6574\u6570';
    }
  },
  test: function test() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { // 验证正则
      reg: /^[^\s]+$/,
      value: '',
      msg: '必填'
    };

    if (typeof option.value === 'undefined') return;
    if (!/\/.*\//.test(option.reg)) {
      // 如果是昵称
      option.msg = this.msg[option.reg];
      option.reg = this.reg[option.reg];
    }
    return !option.reg.test(option.value) && { bool: false, msg: option.msg } || { bool: true };
  },
  form: function form(target) {
    // 验证表单
    var arr = target.find('.required'),
        count = 0;
    if (arr.length == 0) return count;
    arr = Array.prototype.slice.call(arr);
    arr.forEach(function (element) {
      var ctrls = element.querySelectorAll('input');
      ctrls.forEach(function (ctrl) {
        var _reg = ctrl.dataset.reg,
            _value = ctrl.value,
            _msg = ctrl.dataset.msg;
        if (!_reg) return;
        if (/\/.*\//.test(_reg)) {
          // 如果传过来是正则，否则按系统自定义昵称处理
          _reg = new RegExp(_reg.replace(/(^\/)|(\/$)/ig, ''));
        }
        var result = this.test({ reg: _reg, value: _value, msg: _msg });
        if (!result.bool) {
          count++;
          ctrl.classList.add('error');
          ctrl.title = result.msg;
        } else {
          ctrl.classList.remove('error');
          ctrl.title = '';
        }
      }, this);
    }, this);
    return count;
  }
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(91) });


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(17);
var gOPS = __webpack_require__(32);
var pIE = __webpack_require__(19);
var toObject = __webpack_require__(46);
var IObject = __webpack_require__(44);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ })

},[120]);