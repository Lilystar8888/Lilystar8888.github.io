webpackJsonp([14],{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(0);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _page2.default({
    data: {},
    init: function init(page, system, dev, data) {
        this.page = page;
        this.Dev = dev;
        this.init_event();
    },
    init_event: function init_event() {
        var _this = this;
        $('.btn-login').on('click', function () {
            _this.login();
        });
        // 回车
        $("#account, #password").on('keydown', function (event) {
            if (event.keyCode === 13) {
                _this.login();
            }
        });
        this.page.resize(function (pageChanged, platform) {
            if (pageChanged) {
                // alert(platform);
            }
        });
        // 編號输入框失去焦点
        $('#account').blur(function () {
            var num = /^\d{0,6}$/g;
            var noNum = /\D/g;
            if (num.test($('#account').val()) || noNum.test($('#account').val())) {
                console.log(num.test($('#account').val()));
                console.log(noNum.test($('#account').val()));
                $('#account').next().text('請輸入正確編號').removeClass("hidden");
            };
        });
        // 密码输入框失去焦点
        $('#password').blur(function () {
            var num = /^[A-Za-z0-9]{0,5}$/g;
            var noNum = /[^A-Za-z0-9]/g;
            if (num.test($('#password').val()) || noNum.test($('#password').val())) {
                $('#password').next().text('請輸入正確密碼').removeClass("hidden");
            };
        });
    },
    login: function login() {
        var account = $('#account').val(),
            password = $('#password').val(),
            check = true;
        if (!account) {
            check = false;
            $('#account').next().text('請輸入編號').removeClass("hidden");
        }
        if (!password) {
            check = false;
            $('#password').next().text('請輸入密碼').removeClass("hidden");
            return;
        }
        if ($('#account').hasClass('hidden') && $('#account').hasClass('hidden')) {
            this.Dev.login();
        }
    }
}); // login page

/***/ })

},[97]);