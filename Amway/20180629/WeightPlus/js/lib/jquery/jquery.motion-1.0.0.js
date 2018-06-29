/// <reference path="../../config.js" />

/* 範例:

$$('motion', function () {

    $.motion.shake(function (info) {
        $('<div/>').html(
            'shake'
            + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:' + info.x
            + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:' + info.y
            + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z:' + info.z
            + '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max:' + info.max
            ).appendTo('#wrap');
    });

    $.motion.sideUpDown(function (side) {
        $('#wrap').html(side);
    });

    $.motion.rotate(function (angle) {
        $('#wrap').html(angle);
    });
});

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {

    var NOT_SUPPORT = 'Your browser does not support Device Orientation and Motion API.';

    $.motion = {
        // 監測手機旋轉(使用者拿著自轉), callback 參數在被呼叫時會帶目前的角度(啟動角度的相對角度)參數
        rotate: function (callback) {
            if (window.DeviceOrientationEvent === undefined) { console.log(NOT_SUPPORT); return; }

            var iDefaultAlpha = $.isIOS ? 0 : null;

            $(window).on('deviceorientation', function (event) {
                var alpha = event.originalEvent.alpha;

                if (iDefaultAlpha == null) {
                    iDefaultAlpha = alpha;
                    return;
                }


                alpha = alpha - iDefaultAlpha;
                if (alpha < 0)
                    alpha = 360 + alpha;

                 //順時針為加, 逆時針為減
                if (callback) callback(360 - alpha);
            });
        }

        // 監測手機翻面, settings參數中的 callback 屬性在被呼叫時會帶入目前是正面(up), 還是背面(down)
        // 可直接使用 callback function 為參數, 其他設定值會使用預設值
        , sideUpDown: function (settings) {
            if (window.DeviceMotionEvent === undefined) { console.log(NOT_SUPPORT); return; }

            var opts = jQuery.extend({}, $.motion.sideUpDown.settings, typeof settings == 'function' ? { callback: settings} : settings);

            var isUp = null;

            $(window).on('devicemotion', function (event) {
                var z = event.originalEvent.accelerationIncludingGravity.z;
                if ($.isAndroid)
                    z = 0 - z;

                if (isUp == null) {
                    if (z > opts.downAngle) isUp = false;
                    if (z < opts.upAngle) isUp = true;
                    if (opts.firstTrigger != '') {
                        if (opts.firstTrigger == 'up' && isUp) { if (opts.callback) opts.callback('up'); }
                        if (opts.firstTrigger == 'down' && !isUp) { if (opts.callback) opts.callback('down'); }
                    }
                    return;
                }

                if (isUp === true && z > opts.downAngle) { isUp = false; if (opts.callback) opts.callback('down'); return; }
                if (isUp === false && z < opts.upAngle) { isUp = true; ; if (opts.callback) opts.callback('up'); return; }

            });
        }

        // 監測手機搖動, settings參數中的 callback 屬性在被呼叫時會被帶入目前三軸的資訊(x,y,z), 以及最大值(max)
        // 可直接使用 callback function 為參數, 其他設定值會使用預設值
        , shake: function (settings) {
            if (window.DeviceMotionEvent === undefined) { console.log(NOT_SUPPORT); return; }

            var opts = jQuery.extend({}, $.motion.shake.settings, typeof settings == 'function' ? { callback: settings} : settings);

            // initialize acceleration variables
            var ax = 0;
            var ay = 0;
            var az = 0;
            var axa = 0;
            var aya = 0;
            var aza = 0;

            // initialize misc internal variables
            var shakeaccum = 0;
            var curtime = new Date();
            var prevtime = new Date();
            var timeout = false;
            var max = 0;

            $(window).on('devicemotion', function (event) {
                var acc = event.originalEvent.accelerationIncludingGravity;
                ax = acc.x;
                ay = acc.y;
                az = acc.y;

                axa = ax - ((ax * opts.hf) + (axa * (1.0 - opts.hf)));
                aya = ay - ((ay * opts.hf) + (aya * (1.0 - opts.hf)));
                aza = az - ((az * opts.hf) + (aza * (1.0 - opts.hf)));

                var beenhere = false;
                var shake = false;
                if (beenhere) {
                    return;
                }
                beenhere = true;
                var xx = Math.abs(ax - 2 * axa);
                var yy = Math.abs(ax - 2 * axa);
                var zz = Math.abs(ax - 2 * axa);
                if (xx > opts.violence * 1.5 && timeout === false) {
                    shakeaccum += 1;
                    max = Math.max(max, xx - (opts.violence * 1.5));
                }
                if (yy > opts.violence * 2 && timeout === false) {
                    shakeaccum += 1;
                    max = Math.max(max, yy - (opts.violence * 2));
                }
                if (zz > opts.violence * 3 && timeout === false) {
                    shakeaccum += 1;
                    max = Math.max(max, zz - (opts.violence * 3));
                }

                curtime = new Date();
                var timedelta = curtime.getTime() - prevtime.getTime();

                if (timeout) {
                    if (timedelta >= opts.debounce) {
                        timeout = false;
                    } else {
                        timeout = true;
                    }
                    shakeaccum = 0;
                }

                if (shakeaccum >= opts.shakethreshold && timeout === false) {
                    prevtime = curtime;
                    timeout = true;
                    if (opts.callback) opts.callback({
                        x: Math.abs(ax - 2 * axa)
                        , y: Math.abs(ay - 2 * aya)
                        , z: Math.abs(az - 2 * aza)
                        , max: max
                    });
                    max = 0;
                    axa = 0;
                    aya = 0;
                    aza = 0;
                }
                beenhere = true;
            });


        }


    }

    $.motion.sideUpDown.settings = {
        // 判定為朝上的角度 (0~180)
        upAngle: -6
        // 判定為朝下的角度 (0~180)
        , downAngle: 7
        // 若設定為 'up', 若開始時畫面是朝上則會直接觸發callback, 當改變時也會觸發
        // 若設定為 'down', 若開始時畫面是朝下則會直接觸發callback, 當改變時也會觸發
        // 若設定為 '', 若不一開始就直接觸發, 當改變時才會觸發
        , firstTrigger: ''
        // sideUpDown callback - status 為 'up' or 'down'
        , callback: function (status) { }
    };

    $.motion.shake.settings = {
        // single shake sensitivity
        violence: 3.0,
        // high-pass filter constant
        hf: 0.2,
        // number of single shakes required to fire a shake event
        shakethreshold: 5,
        // delay between shake events (in ms)
        debounce: 1000,
        // shake callback - acc 為 acc.x, acc.y, acc.z 的三軸加速器值, 及 acc.max 最大值
        callback: function (acc) { }
    };
}));