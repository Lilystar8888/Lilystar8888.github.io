/// <reference path="../../config.js" />

/*
Author: Ammon Lin

判斷 element 是否被看到, 判斷方法為以該 element 絕對位置(top,left)是否出現在 window 內

PS: Mobile上要加viewport才會準

使用範例:

$('....').viewed(function() {
    // this: 為新被看到的 element
});
*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {
    $.fn.viewed = function (threadhold, action) {
        if ($.isFunction(threadhold)) {
            action = threadhold; threadhold = 1000;
        }
        var jq = this.filter(function () {
            return !$(this).data('viewed');
        }).data('viewed', !0);
        function scroll() {
            jq.each(function () {
                var me = $(this);
                var st = $(document).scrollTop();
                var sl = $(document).scrollLeft();
                var h = $(window).height();
                var w = $(window).width();
                var offset = me.offset();
                var p = me.data('cur-viewed');
                me.data('pre-viewed', p);
                var c = st <= offset.top && offset.top < st + h && sl <= offset.left && offset.left < sl + w;
                me.data('cur-viewed', c);
                if (!p && c) {
                    action.apply(this);
                }
            });
        };

        var timeoutId;
        $(window).bind('scroll resize' + ($.isMobile ? ' touchend' : ''), function () {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(scroll, threadhold);
        }).scroll();
    };
}));
