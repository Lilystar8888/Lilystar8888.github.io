/// <reference path="config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {
    $('html').toggleClass('hover', !$.isIOS);

    if (CONST.inFbApp && $('[data-fbapp]').length > 0) {
        var $tips = $('<div class="tips-' + ($.isIOS ? 'ios' : 'android') + '"><ul></ul></div>')
        .prependTo('body')
        .on('touchstart', function () { $(this).fadeOut(150); });

        $('[data-fbapp]').off('touchstart').on('touchstart', function (e) {
            var me = $(this);
            eval(me.data('fbapp'));
            e.isDefaultPrevented();
            $tips.fadeIn(150);
            return false;
        });
    }

    //#region 設定 - fb connect
    if ($.fb) {
        if ($.fb.connect) {
            $.fb.connect.settings = $.extend({}, $.fb.connect.settings, {
                loginOption: { scope: '' }
				, redirectAuthURL: $.isMobile ? $.resolve(location.pathname + location.search) : undefined
            });
        }
    }
    //#endregion

}));