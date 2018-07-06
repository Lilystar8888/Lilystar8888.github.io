/// <reference path="../../config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {

    function _valid(form) {
        var msg = form.find('[required]').map(function () {
            var me = $(this);
            if (me.is(':checkbox')) {
                if (!me.is(':checked')) {
                    return me.data('label');
                }
            }
            else if (me.is(':radio')) {
                if (form.find('input[name=' + me.attr('name') + ']:checked').length == 0) {
                    return me.data('label');
                }
            }
            else if ($.trim(me.val()) == '') {
                return me.data('label');
            }
        }).get();
        if (msg.length) {
            return !!alert($.fn.send.settings.errorTitle + '：\n' + msg.join('\n'));
        }
        msg = form.find('[pattern]').map(function () {
            var reg = new RegExp($(this).attr('pattern'));
            var me = $(this);

            if (me.val() != '' && !reg.test(me.val())) {
                return $(this).data('message').replace(/\{label\}/g, me.data('label'));
            }
        }).get();
        if (msg.length) {
            return !!alert(msg.join('\n'));
        }

        return true;
    }

    $.fn.send = function (validation) {
        var form = this.is('form') ? this : this.closest('form');
        if (!(form.length || (form = $('form:eq(0)')).length))
            return $.Deferred().reject();

        validation = validation || function () { return true; };

        if (_valid(form) && validation()) {

            if (window['FB'] && FB.getAccessToken()) {
                var $sr = form.find('input[name="SignedRequest"]');
                if ($sr.length == 0)
                    $('<input type="hidden" name="SignedRequest" />').val(FB.getAuthResponse().signedRequest).appendTo(form);
                else
                    $sr.val(FB.getAuthResponse().signedRequest);
            }

            var def = $.callAPI(form.attr('action'), form.serialize());

            if ($('.x-captcha').length > 0) {
                var newDef = $.Deferred();

                def.done(function (ret) {
                    if (ret.message == 'Invalid Captcha') {
                        refreshCaptcha();
                        newDef.reject.apply(newDef, ['驗証碼不正確!'].concat(Array.prototype.slice.call(arguments, 1)));
                        return;
                    }
                    newDef.resolve.apply(newDef, Array.prototype.slice.call(arguments, 0));
                }).fail(function (err) {
                    refreshCaptcha();
                    newDef.reject.apply(newDef, Array.prototype.slice.call(arguments, 0));
                });

                def = newDef;
            }

            return def;
        } else
            return $.Deferred().reject();
    };

    $.fn.send.settings = {
        errorTitle: '下列項目尚未填寫，請重新輸入'
    };

    function refreshCaptcha() {
        var src = $('.x-captcha').attr('src');
        $('.x-captcha').attr('src', src.substr(0, src.indexOf('&t=') + 3) + (new Date()).getTime());
        $('.x-captcha-code').val('');
    }

    $('.x-captcha-refresh').on('click', refreshCaptcha);

}));