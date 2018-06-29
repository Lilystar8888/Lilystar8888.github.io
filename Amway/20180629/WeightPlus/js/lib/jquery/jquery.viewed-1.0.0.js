/// <reference path="../../config.js" />

/*
Author: Ammon Lin

�P�_ element �O�_�Q�ݨ�, �P�_��k���H�� element �����m(top,left)�O�_�X�{�b window ��

PS: Mobile�W�n�[viewport�~�|��

�ϥνd��:

$('....').viewed(function() {
    // this: ���s�Q�ݨ쪺 element
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
