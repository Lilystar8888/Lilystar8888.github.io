/// <reference path="../../config.js" />

/*
Sample:

    var gbIsIFrameAPI = !($('html').hasClass('ie6') || $('html').hasClass('ie7') || $('html').hasClass('ie8') || $('html').hasClass('ie9'));
    console.log('youtube player -> ', gbIsIFrameAPI ? 'iframe' : 'flash');
    $.youtube.init(gbIsIFrameAPI).done(function () {
        $('.video')
        .on($.fn.youtube.events.READY, function () {
            console.log(index, sVideoID, 'READY');

        })
        .on($.fn.youtube.events.START, function () {
            console.log(index, sVideoID, 'START');

            var iVideoTotalSec = $item.youtube('getDuration');
            var tmCheck = setInterval(function () {
                var iCurr = $('.video').youtube('getCurrentTime');

                if (iCurr > iVideoTotalSec - 0.5) {
                    clearInterval(tmCheck);
                    $('.video').youtube('pause');
                }
            }, 30);
        })
        .youtube({
            videoId: 'xxxxxxxxx'
            , quality: 'hd720'
            , playerVars: {
                autoplay: 0
                , start: 0
                , controls: 0
                , autohide: 0
                , fs: 0
                , cc_load_policy: 0
                , hl: 'zh'
            }
        });
    });

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'swfobject'], factory) : factory(jQuery);
} (function () {
    function guid() { return 'f' + (Math.random() * (1 << 30)).toString(16).replace('.', ''); }

    var PLUG_DATA_CODE = "isobar_youtube";

    $.youtube = $.youtube || {};

    var gbIsUseIFrameAPI = false;

    window.onYouTubePlayerReady = function (playerId) {
        $('#' + playerId).parent().youtube('setReady');
        $('#' + playerId).parent().youtube('setPlayer', swfobject.getObjectById(playerId));
        $('#' + playerId).parent().trigger($.fn.youtube.events.READY, []);
        swfobject.getObjectById(playerId).addEventListener("onStateChange", 'on_' + playerId + '_StateChange');
    }

    $.fn.youtube = function (settings, getcmd) {
        if (typeof (settings) == 'string') {
            var otherArgs = Array.prototype.slice.call(arguments, 1);

            if (settings.substr(0, 3) == 'get') {
                if (this.length == 0) return null;

                var o = this.eq(0).data(PLUG_DATA_CODE);
                if (o && o[settings])
                    return o[settings].apply(o, otherArgs);
                else
                    return null;
            } else {
                return this.each(function () {
                    var o = $(this).data(PLUG_DATA_CODE);
                    if (o && o[settings]) o[settings].apply(o, otherArgs);
                });
            }
        } else {
            return this.each(function () {
                var o = new ISOBAR_YOUTUBE_CLASS();
                o._setting = $.extend(true, {}, $.fn.youtube.settings, settings);
                o._element = this;
                o._init();

                $(this).data(PLUG_DATA_CODE, o);
            });
        };
    };

    $.fn.youtube.settings = {
        videoId: undefined
        , css: { 'position': 'absolute' }
        , width: '100%'
        , height: '100%'
        , quality: null // "hd1080", "hd720", "large", "medium", "small"
        , playerVars: {
            // https://developers.google.com/youtube/player_parameters?playerVersion=HTML5&hl=zh-tw
            rel: 0
            , autoplay: 0
            , controls: 0
            , disablekb: 1
            , showinfo: 0
            , iv_load_policy: 3
            , modestbranding: 1
            , autohide: 1
            , loop: 1
            , border: 0
            , start: 0
            , wmode: 'opaque'
            , theme: 'light'
        }
    };

    $.fn.youtube.events = {
        READY: 'youtube:ready'
        , STATE_CHANGE: 'youtube:statechange'

        , START: 'youtube:start'
        , PLAY: 'youtube:play'
        , PAUSE: 'youtube:pause'
        , BUFFER: 'youtube:buffer'
        , STOP: 'youtube:stop'
        , CUED: 'youtube:cued'
        , UNSTARTED: 'youtube:unstarted'
    };

    function ISOBAR_YOUTUBE_CLASS() { }

    $.extend(ISOBAR_YOUTUBE_CLASS.prototype, {
        _setting: $.fn.youtube.settings
        , _element: null
        , _playerElementID: 'a'
        , _playerMaskElement: null
        , _player: null
        , _isReady: false
        , _isStart: false
        , _currVideoId: null

        //#region Method
        , mute: function () {
            var me = this;
            me._player.mute();
        }
        , unMute: function () {
            var me = this;
            me._player.unMute();
        }
        , pause: function () {
            var me = this;
            me._player.pauseVideo();
        }
        , stop: function () {
            var me = this;
            me._player.stopVideo();
        }
        , play: function (AVideoID, AStart) {
            var me = this;
            if (AVideoID) {
                me._currVideoId = AVideoID;
                me._player.loadVideoById(AVideoID, AStart);
            } else
                me._player.playVideo();
        }
        , seekTo: function (ASec) {
            var me = this;
            me._player.seekTo(ASec);
        }
        , change: function (AVideoID) {
            var me = this;
            me._currVideoId = AVideoID;
            me._player.cueVideoById(AVideoID);
        }
        , resetStauts: function () {
            var me = this;
            me._isReady = false;
            me._isStart = false;
        }
        , setReady: function () {
            var me = this;
            me._isReady = true;
        }
        , resetReady: function () {
            var me = this;
            me._isReady = false;
        }
        , resetStart: function () {
            var me = this;
            me._isStart = false;
        }
        , setPlayer: function (APlayer) {
            var me = this;
            me._player = APlayer;
        }
        //#endregion

        //#region get
        , getIsMute: function () {
            var me = this;
            return me._player.isMuted();
        }
        , getPlayer: function () {
            var me = this;
            return me._player;
        }
        , getDuration: function () {
            var me = this;
            return me._player.getDuration();
        }
        , getPlayerState: function () {
            var me = this;
            return me._player.getPlayerState();
        }
        , getCurrentTime: function () {
            var me = this;
            return me._player.getCurrentTime();
        }
        , getVideoData: function () {
            var me = this;
            return me._player.getVideoData();
        }
        , getBufferDuration: function () {
            var me = this;
            return me._player.getDuration() * (me._player.getVideoBytesLoaded() / me._player.getVideoBytesTotal());
        }
        , getIsReady: function () {
            var me = this;
            return me._isReady;
        }
        , getIsStart: function () {
            var me = this;
            return me._isStart;
        }
        , getVideoID: function () {
            var me = this;
            return me._currVideoId;
        }
        //#endregion

        , _processStateChange: function (AState) {
            var me = this;
            switch (AState) {
                case -1:
                    //#region unstarted
                    $(me._element).trigger($.fn.youtube.events.UNSTARTED, []);
                    //#endregion
                    break;
                case 5:
                    //#region cued
                    $(me._element).trigger($.fn.youtube.events.CUED, []);
                    //#endregion
                    break;
                case 1:
                    //#region play
                    if (!me._isStart) {
                        me._isStart = true;
                        $(me._element).trigger($.fn.youtube.events.START, []);
                    }
                    $(me._element).trigger($.fn.youtube.events.PLAY, []);
                    //#endregion
                    break;
                case 2:
                    //#region pause
                    $(me._element).trigger($.fn.youtube.events.PAUSE, []);
                    //#endregion
                    break;
                case 3:
                    //#region buffer
                    $(me._element).trigger($.fn.youtube.events.BUFFER, []);
                    if (me._setting.quality && !me._isStart)
                        me._player.setPlaybackQuality(me._setting.quality);
                    //#endregion
                    break;
                case 0:
                    //#region end
                    $(me._element).trigger($.fn.youtube.events.STOP, []);
                    //#endregion
                    break;
            }
        }

        , _init: function () {
            var me = this;

            me._playerElementID += guid();

            $.extend(me._setting.css, {
                width: typeof (me._setting.width) == 'string' && me._setting.width.indexOf('%') > -1 ? me._setting.width : parseInt(me._setting.width) + 'px'
                , height: typeof (me._setting.height) == 'string' && me._setting.height.indexOf('%') > -1 ? me._setting.height : parseInt(me._setting.height) + 'px'
            });

            $('<div />').css(me._setting.css).attr('id', me._playerElementID).appendTo(me._element);

            var oParam = { videoId: me._setting.videoId, width: me._setting.width, height: me._setting.height, playerVars: me._setting.playerVars };

            me._currVideoId = me._setting.videoId;

            if (gbIsUseIFrameAPI) {
                oParam.events = {
                    'onReady': function (event) {
                        me._isReady = true;
                        $(me._element).trigger($.fn.youtube.events.READY, [event]);
                    }
                    , 'onStateChange': function (event) {
                        $(me._element).trigger($.fn.youtube.events.STATE_CHANGE, [event]);
                        me._processStateChange(event.data);
                    }
                };

                me._player = new YT.Player(me._playerElementID, oParam);
            } else {
                window['on_' + me._playerElementID + '_StateChange'] = function (newState) {
                    $(me._element).trigger($.fn.youtube.events.STATE_CHANGE, [{ data: newState}]);
                    me._processStateChange(newState);
                };

                var params = {
                    quality: "high",
                    scale: "noscale ",
                    wmode: "opaque",
                    allowscriptaccess: "always",
                    bgcolor: "#FFFFFF"
                };
                var flashvars = $.extend({ enablejsapi: 1, playerapiid: me._playerElementID }, oParam.playerVars);

                var attributes = { id: me._playerElementID, name: me._playerElementID };

                var p = '';
                for (var k in flashvars) {
                    //flashvars[k] = encodeURIComponent(flashvars[k]);
                    if (p != '') p += '&';
                    p += encodeURIComponent(k) + '=' + encodeURIComponent(flashvars[k]);
                }


                swfobject.embedSWF('http://www.youtube.com/v/' + me._setting.videoId + '?' + p, me._playerElementID, me._setting.height, "100%", "10.0.0", null, null, params, attributes);
            }
        }
    });

    $.youtube.init = function (AIsUseIFrameAPI) {
        var def = $.Deferred();
        if (AIsUseIFrameAPI) {
            gbIsUseIFrameAPI = true;

            window.onYouTubeIframeAPIReady = function () {
                def.resolve();
            };

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
            def.resolve();
        }
        return def.promise();
    };

}));