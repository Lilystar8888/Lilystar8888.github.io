//*檢查是否為 ipad , iphone 或者是 ipod
// 如果是 切換到 HTML5 模式
//  Element 加上 isFlash 屬性
//  Element 加上 isHTML5 屬性
// 如果是Apple 會show 出所有 isFlash 的Element 並且隱藏 isFlash 的Element
// 2011/12/16

 
 
var JY = {};
var _Detector = {

    CheckMobile: function() {

        var maxSide = Math.max(window.screen.availWidth, window.screen.availHeight);
        if (this.ImpersonateMobile) {
            return true;
        }

        if (maxSide > 970) {
            return false;
        }
        return true;

    },
    MobileUrl: '',
    GoMobileSite: function(url) {
        if (url != '') {
            this.MobileUrl = url;
        }
        if (this.CheckMobile()) {
            // alert(url);
            alert(this.MobileUrl);
            location.href = this.MobileUrl;
        }
    },

    ImpersonateMobile: false,
    IsDebug: false,
    ImpersonateIOS: false,
    RunVideo: true,
    IsiPhone: function() {
        return (navigator.userAgent.indexOf("iPhone") != -1);
    },

    IsiPad: function() {
        return (navigator.userAgent.indexOf("iPad") != -1);
    },
    IsiPod: function() {
        return (navigator.userAgent.indexOf("iPod") != -1);
    },

    DetectIOS: function() {

        if (this.IsiPhone() || this.IsiPad() || this.IsiPod()) {
            return true;
        }
        return this.ImpersonateIOS;
    },
    SwitchFlashToHTML5: function() {
        $('[NotApple]').each(function() { $(this).hide(); });
        $('[Apple]').each(function() { $(this).show(); });


    },
    SwitchHTML5ToFlash: function() {

        $('[NotApple]').each(function() { $(this).show(); });
        $('[Apple]').each(function() { $(this).hide(); });
    },
    RunVideoPlayer: function() {
        try {

            $('video').mediaelementplayer({
                success: function(player, node) {
                    $('#' + node.id + '-mode').html('mode: ' + player.pluginType);
                }
            });

        } catch (ex) { }

    },
    RunIOS: function() {
        if (this.DetectIOS()) {
            this.SwitchFlashToHTML5();
            if (this.RunVideo) { this.RunVideoPlayer(); }
        } else {
            this.SwitchHTML5ToFlash();

        }
        if (this.IsDebug) {

            $('body').append(this.DebugButton);
            this.IsDebug = false;

        }



    },
    DebugButton: "<input type='button' value='Apple' onclick='JY.Detector.ImpersonateIOS = true;JY.Detector.RunIOS();' /><input type='button' value='NotApple' onclick='JY.Detector.ImpersonateIOS = false;JY.Detector.RunIOS();' />"

};

JY.Detector = _Detector;
$(function() { JY.Detector.RunIOS(); });