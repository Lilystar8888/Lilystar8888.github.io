(function(b) {
    b.fn.Video = function(a, b) { return new d(this, a) };

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var taotheme = "";
    if(isMobile.any()){
        taotheme = "effect5";
    }else{
        taotheme = "effect4";
    }

    var n = {
            instanceName: "player1",
            instanceTheme: "dark",
            autohideControls: 5,
            hideControlsOnMouseOut: "YES",
            playerLayout: "fitToContainer",
            videoPlayerWidth: 1366,
            videoPlayerHeight: 768,
            lightBox: !1,
            lightBoxAutoplay: !1,
            lightBoxThumbnail: "",
            lightBoxThumbnailWidth: 400,
            lightBoxThumbnailHeight: 220,
            lightBoxCloseOnOutsideClick: !0,
            playlist: "Right playlist",
            playlistScrollType: "rounded-dots",
            playlistBehaviourOnPageload: "closed",
            autoplay: !1,
            colorAccent: "#0078d7",
            vimeoColor: "00adef",
            youtubeControls: "custom controls",
            youtubeSkin: "minimal",
            youtubeColor: "white",
            youtubeShowRelatedVideos: "No",
            videoPlayerShadow: taotheme,
            loadRandomVideoOnStart: "No",
            shuffle: "No",
            posterImg: "",
            posterImgOnVideoFinish: "",
            onFinish: "Play next video",
            nowPlayingText: "No", //enable disable now playing title: "Yes","No"
            fullscreen:"Fullscreen browser",
            rightClickMenu: !0,
            hideVideoSource: !0,
            showAllControls: !0,
            allowSkipAd: !0,
            infoShow: "No",
            shareShow: "No",
            facebookShow: "No",
            twitterShow: "No",
            mailShow: "No",
            logoShow: "Yes",
            logoClickable: "Yes",
            logoPath: "img/logos2.png",
            logoGoToLink: "http://www.tao-movie.com",
            logoPosition: "bottom-left",
            embedShow: "No",
            embedCodeSrc: "http://www.tao-movie.com",
            embedCodeW: "746",
            embedCodeH: "420",
            embedShareLink: "http://www.tao-movie.com",
            advertisementTitle:"广告",               //translate "Advertisement" title to your language
            skipAdvertisementText:"会员免广告",          //translate "Skip advertisement" button to your language
            skipAdText:"跳转广告还剩",        //translate "You can skip this ad in" counter to your language
            playBtnTooltipTxt:"播放",                //translate "Play" to your language
            pauseBtnTooltipTxt:"暂停",               //translate "Pause" to your language
            rewindBtnTooltipTxt:"重播",              //translate "Rewind" to your language
            skipNextBtnTooltipTxt:"下一集",              //translate "Rewind" to your language
            downloadVideoBtnTooltipTxt:"下载",           //translate "Download video" to your language
            qualityBtnOpenedTooltipTxt:"关闭设定",       //translate "Close settings" to your language
            qualityBtnClosedTooltipTxt:"观看设定",       //translate "Settings" to your language
            muteBtnTooltipTxt:"静音",                //translate "Mute" to your language
            unmuteBtnTooltipTxt:"取消静音",              //translate "Unmute" to your language
            fullscreenBtnTooltipTxt:"全屏",              //translate "Fullscreen" to your language
            exitFullscreenBtnTooltipTxt:"取消全屏",//translate "Exit fullscreen" to your language
            infoBtnTooltipTxt:"简介",               //translate "Show info" to your language
            embedBtnTooltipTxt:"嵌入",              //translate "Embed" to your language
            shareBtnTooltipTxt:"分享",              //translate "Share" to your language
            volumeTooltipTxt:"音量",               //translate "Volume" to your language
            playlistBtnClosedTooltipTxt:"显示视频列表", //translate "Show playlist" to your language
            playlistBtnOpenedTooltipTxt:"隐藏视频列表", //translate "Exit fullscreen" to your language
            facebookBtnTooltipTxt:"脸书分享",   //translate "Share on Facebook" to your language
            twitterBtnTooltipTxt:"推特分享",     //translate "Share on Twitter" to your language
            googlePlusBtnTooltipTxt:"Google+分享",  //translate "Share on Google+" to your language
            lastBtnTooltipTxt:"前往最后一集",        //translate "Go to last video" to your language
            firstBtnTooltipTxt:"前往第一集",      //translate "Go to first video" to your language
            nextBtnTooltipTxt:"播放下一集",         //translate "Play next video" to your language
            previousBtnTooltipTxt:"播放前一集", //translate "Play previous video" to your language
            shuffleBtnOnTooltipTxt:"随机播放",         //translate "Shuffle on" to your language
            shuffleBtnOffTooltipTxt:"关闭随机播放",       //translate "Shuffle off" to your language
            nowPlayingTooltipTxt:"正在播放",          //translate "NOW PLAYING" to your language
            embedWindowTitle1:"分享视频:",      //translate "SHARE THIS PLAYER:" to your language
            embedWindowTitle2:"嵌入视频:",//translate "EMBED THIS VIDEO IN YOUR SITE:" to your language
            embedWindowTitle3:"分享连结:",//translate "SHARE LINK TO THIS PLAYER:" to your language
            youtubePlaylistID: "",
            youtubeChannelID: "",
            playeruitext:"注册享3天免费VIP高画质好剧随时看",
            playeruicta:"立即注册",
            hinttimertitletext:"下午 10:07結束"
        },
        e = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i) }, any: function() { return e.Android() || e.BlackBerry() || e.Opera() || e.Windows() } },
        p = e.any() ? "touchend" : "click",
        q = e.any() ? "touchstart" :
        "mousedown",
        r = e.any() ? "touchmove" : "mousemove",
        t = e.any() ? "touchend" : "mouseup",
        u = "onorientationchange" in window ? "orientationchange" : "resize",
        d = function(a, c) {
            var g = this;
            this._class = d;
            this.parent = a;
            this.parentWidth = this.parent.width();
            this.parentHeight = this.parent.height();
            this.windowWidth = b(window).width();
            this.windowHeight = b(window).height();
            this.options = b.extend({}, n, c);
            this.sources = this.options.srcs || this.options.sources;
            this.state = null;
            this.loaded = pw = this.embedOn = this.videoPlayingAD = this.shareOn =
            this.skipBoxOn = this.skipCountOn = this.adOn = this.lightBoxOn = this.infoOn = this.stretching = this.realFullscreenActive = this.inFullScreen = !1;
            this.readyList = [];
            this.ADTriggered = this.youtubeReady = this.videoAdStarted = !1;
            this.volPerc = 1;
            this.isYoutubeAPICreated = this.YTAPIReady = this.html5STARTED = !1;
            this.ytSkin = this.options.youtubeSkin;
            this.ytColor = this.options.youtubeColor;
            this.ytSkin.toString();
            this.ytColor.toString();
            this.youtubeControls = this.options.youtubeControls;
            this.postrollPlayed = this.midrollPlayed = !1;
            this.prerollActive = !0;
            this.qualityBtnEnabled = this.postrollActive = this.midrollActive = !1;
            this.lightBoxThumbnail;
            this.lightBoxOverlay;
            this.lightBoxInitiated = !1;
            this.globalPrerollAds_arr = g.options.globalPrerollAds.split(";");
            this.poster2Showing = !1;
            switch (this.options.youtubeShowRelatedVideos) {
            case "Yes":
                g.ytShowRelatedVideos = 1; break;
            case "No":
                g.ytShowRelatedVideos = 0 } this.isMobile = e;
            this.RESIZE_EV = u;
            this.CLICK_EV = p;
            this.START_EV = q;
            this.MOVE_EV = r;
            this.END_EV = t;
            this.canPlay = !1;
            this.myVideo = document.createElement("video");
            g.deviceAgent = navigator.userAgent.toLowerCase();
            g.agentID = g.deviceAgent.match(/(iphone|ipod)/);
            if ("fitToBrowser" == this.options.playerLayout || "fitToBrowser" == c.playerLayout) { var f = b("#taoplayer");
            b.each(f, function() { var a = b("<div />").addClass("fixedCont").css({ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, background: "#000000", zIndex: 2147483647 });
                f.parent().append(a);
                f.appendTo(a) }) } this.setupElement();
            this.setupElementAD();
            this.options.rightClickMenu || (b("#taoplayer").bind("contextmenu",
            function() { return !1 }), b(".taoplayer").bind("contextmenu", function() { return !1 }), this.options.lightBox && b(".elite_vp_mainContainer").bind("contextmenu", function() { return !1 }));
            b(c.videos).each(function() { "youtube" == this.videoType && (g.includeYoutubeAPI = !0) });
            if (this.includeYoutubeAPI) {
            var l = document.createElement("script");
            l.src = "https://www.youtube.com/iframe_api";
            var h = document.getElementsByTagName("script")[0];
            h.parentNode.insertBefore(l, h);
            "default controls" == this.youtubeControls && ("" == this.options.posterImg,
                this.element.css("visibility", "hidden"));
            "YouTube playlist" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubePlaylistID = "");
            "YouTube channel" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubeChannelID = "");
            if ("" != this.options.youtubePlaylistID || "" != this.options.youtubeChannelID) {
                l = this.options.youtubePlaylistID;
                h = this.options.youtubeChannelID;
                this.url;
                var k = "https://www.googleapis.com/youtube/v3/search?order=date&maxResults=50&part=snippet&channelId=" +
                    h + "&key=AIzaSyClbVoeyPLBHb9n6Abm0z-AlrzNKeWLKTc",
                    v = "https://www.googleapis.com/youtube/v3/playlistItems?&maxResults=50&part=snippet&playlistId=" + l + "&key=AIzaSyClbVoeyPLBHb9n6Abm0z-AlrzNKeWLKTc";
                "" != l ? this.url = v : "" != h && (this.url = k);
                this.id = -1;
                this.youtube_array = [];
                this.ads_array = [];
                this.data;
                b(this.options.videos).each(function() {
                    g.ads_array.push({
                        prerollAD: this.prerollAD,
                        prerollGotoLink: this.prerollGotoLink,
                        preroll_mp4: this.preroll_mp4,
                        prerollSkipTimer: this.prerollSkipTimer,
                        midrollAD: this.midrollAD,
                        midrollAD_displayTime: this.midrollAD_displayTime,
                        midrollGotoLink: this.midrollGotoLink,
                        midroll_mp4: this.midroll_mp4,
                        midrollSkipTimer: this.midrollSkipTimer,
                        postrollAD: this.postrollAD,
                        postrollGotoLink: this.postrollGotoLink,
                        postroll_mp4: this.postroll_mp4,
                        postrollSkipTimer: this.postrollSkipTimer,
                        popupAdShow: this.popupAdShow,
                        popupImg: this.popupImg,
                        popupAdStartTime: this.popupAdStartTime,
                        popupAdEndTime: this.popupAdEndTime,
                        popupAdGoToLink: this.popupAdGoToLink
                    })
                });
                this.requestYTList()
            } else this.init(), this.waitAPIReady()
            } else this.init()
        };
    d.fn = d.prototype;
    d.fn.waitAPIReady = function() { var a = this,
            b = !1; if (!this.YTAPIReady)
            if ("undefined" != typeof YT && "undefined" != typeof YT.Player) this.YTAPIReady = !0, this.isYoutubeAPICreated ? this.createYoutubeInstance() : this.setupYoutubeAPI();
            else var d = setInterval(function() { "function" != typeof YT.Player || b || (b = !0, clearInterval(d), a.waitAPIReady()) }, 400) };
    d.fn.setupYoutubeAPI = function() {
        var a = this;
        this.isYoutubeAPICreated || (this.isYoutubeAPICreated = !0, this.YTAPIReady ? this.createYoutubeInstance() : window.onYouTubeIframeAPIReady ||
            (window.onYouTubePlayerAPIReady = function() { a.YTAPIReady = !0;
            a.createYoutubeInstance() }))
    };
    d.fn.createYoutubeInstance = function() {
        "custom controls" == this.options.youtubeControls ? this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: { onReady: this._playlist.onPlayerReady, onStateChange: this._playlist.onPlayerStateChange, onPlaybackQualityChange: this.onPlayerPlaybackQualityChange },
            playerVars: {
            rel: this.ytShowRelatedVideos,
            wmode: "transparent",
            controls: 0,
            enablejsapi: 1,
            iv_load_policy: 3,
            showinfo: 0
            }
        }) : "default controls" == this.options.youtubeControls && (this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: { onReady: this._playlist.onPlayerReady, onStateChange: this._playlist.onPlayerStateChange, onPlaybackQualityChange: this.onPlayerPlaybackQualityChange },
            playerVars: {
            theme: this.ytSkin,
            color: this.ytColor,
            rel: this.ytShowRelatedVideos,
            wmode: "transparent",
            controls: 1,
            enablejsapi: 1,
            iv_load_policy: 3,
            modestbranding: 0,
            showinfo: 1,
            autohide: 1
            }
        }))
    };
    d.fn.requestYTList = function() {
        var a = this;
        url = void 0 != a.nextPageToken ? this.url + "&pageToken=" + a.nextPageToken : this.url;
        b.ajax({
            url: url,
            success: function(c) {
            a.data = c;
            a.nextPageToken = c.nextPageToken;
            b.each(c.items, function(b, c) {
                a.id += 1;
                var d = c.snippet.title,
                    g = c.snippet.description,
                    f = c.snippet.channelTitle;
                if ("" != a.options.youtubePlaylistID) var e = c.snippet.resourceId.videoId;
                "" != a.options.youtubeChannelID && (e = c.id);
                var k = void 0 != c.snippet.thumbnails ? c.snippet.thumbnails["default"].url : "";
                a.ads_array.push({
                    prerollAD: "no",
                    prerollGotoLink: "prerollGotoLink",
                    preroll_mp4: "preroll_mp4",
                    prerollSkipTimer: "prerollSkipTimer",
                    midrollAD: "no",
                    midrollAD_displayTime: "midrollAD_displayTime",
                    midrollGotoLink: "midrollGotoLink",
                    midroll_mp4: "midroll_mp4",
                    midrollSkipTimer: "midrollSkipTimer",
                    postrollAD: "no",
                    postrollGotoLink: "postrollGotoLink",
                    postroll_mp4: "postroll_mp4",
                    postrollSkipTimer: "postrollSkipTimer",
                    popupAdShow: "no",
                    popupImg: "popupImg",
                    popupAdStartTime: "popupAdStartTime",
                    popupAdEndTime: "popupAdEndTime",
                    popupAdGoToLink: "popupAdGoToLink"
                });
                a.youtube_array.push({
                    id: a.id,
                    title: d,
                    videoType: "youtube",
                    youtubeID: e,
                    vimeoID: this.vimeoID,
                    video_path_mp4: this.mp4,
                    enable_mp4_download: this.enable_mp4_download,
                    prerollAD: a.ads_array[a.id].prerollAD,
                    prerollGotoLink: a.ads_array[a.id].prerollGotoLink,
                    preroll_mp4: a.ads_array[a.id].preroll_mp4,
                    prerollSkipTimer: a.ads_array[a.id].prerollSkipTimer,
                    midrollAD: a.ads_array[a.id].midrollAD,
                    midrollAD_displayTime: a.ads_array[a.id].midrollAD_displayTime,
                    midrollGotoLink: a.ads_array[a.id].midrollGotoLink,
                    midroll_mp4: a.ads_array[a.id].midroll_mp4,
                    midrollSkipTimer: a.ads_array[a.id].midrollSkipTimer,
                    postrollAD: a.ads_array[a.id].postrollAD,
                    postrollGotoLink: a.ads_array[a.id].postrollGotoLink,
                    postroll_mp4: a.ads_array[a.id].postroll_mp4,
                    postrollSkipTimer: a.ads_array[a.id].postrollSkipTimer,
                    popupAdShow: a.ads_array[a.id].popupAdShow,
                    popupImg: a.ads_array[a.id].popupImg,
                    popupAdStartTime: a.ads_array[a.id].popupAdStartTime,
                    popupAdEndTime: a.ads_array[a.id].popupAdEndTime,
                    popupAdGoToLink: a.ads_array[a.id].popupAdGoToLink,
                    description: f,
                    thumbImg: k,
                    info: g
                })
            });
            void 0 != c.nextPageToken ? a.requestYTList() : (a.init(), a.waitAPIReady())
            }
        })
    };
    d.fn.init = function() {
        this.preloader = b("<div />");
        this.preloader.addClass("elite_vp_preloader");
        this.element.append(this.preloader);
        this.preloaderAD = b("<div />");
        this.preloaderAD.addClass("elite_vp_preloader");
        this.elementAD.append(this.preloaderAD);
        this.videoElement = b("<video />");
        this.videoElement.addClass("elite_vp_videoPlayer");
        this.videoElement.attr({
            width: this.options.width,
            height: this.options.height,
            preload: this.options.preloadSelfHosted,
            controls: this.options.controls
        });
        this.videoElementAD = b("<video />");
        this.videoElementAD.addClass("elite_vp_videoPlayerAD");
        this.videoElementAD.attr({ width: this.options.width, height: this.options.height, preload: this.options.preloadSelfHosted, controls: this.options.controls });
        e.iOS() && (this.videoElement.attr("playsinline", "").attr("webkit-playsinline", ""), this.videoElementAD.attr("playsinline", "").attr("webkit-playsinline", ""), this.options.autoplay && (this.videoElement.attr("muted",
            ""), this.videoElement.muted = !0, this.videoElement.attr("autoplay", "autoplay")));
        this.controls = b("<div />");
        this.controls.addClass("elite_vp_controls");
        this.controls.addClass("elite_vp_disabled");
        this.element && this.element.append(this.controls);
        this.options.showAllControls || this.controls.hide();
        this.nowPlayingTitle = b("<div />").addClass("elite_vp_nowPlayingTitle");
        this.controls.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.nowPlayingTitle.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.options.showAllControls || this.nowPlayingTitle.hide();
        this.element && this.element.append(this.nowPlayingTitle);
        this.setupButtonsOnScreen();
        this._playlist = new PLAYER.Playlist(b, this, this.options, this.mainContainer, this.element, this.preloader, this.preloaderAD, this.myVideo, this.canPlay, this.CLICK_EV, pw, this.deviceAgent, this.agentID, this.youtube_array, this.isMobile);
        "Right playlist" == this.options.playlist ? (this.playerWidth = this.options.videoPlayerWidth - this._playlist.playlistW, this.playerHeight = this.options.videoPlayerHeight) :
            "Bottom playlist" == this.options.playlist ? (this.playerWidth = this.options.videoPlayerWidth, this.playerHeight = this.options.videoPlayerHeight - this._playlist.playlistH) : "Off" == this.options.playlist && (this.playerWidth = this.options.videoPlayerWidth, this.playerHeight = this.options.videoPlayerHeight);
        this.playlistWidth = this._playlist.playlistW;
        this.initPlayer();
        this.resize();
        this.resizeAll();
        this.autohideControls()
    };
    d.fn.initPlayer = function() {
        var a = this;
        this.setupHTML5Video();
        this.setupHTML5VideoAD();
        this.setupEvents();
        this.change("initial");
        this.setupControls();
        this.load();
        this.setupAutoplay();
        this.setupLightBox();
        this.setupElements();
        this.element.bind("idle", b.proxy(this.idle, this));
        this.element.bind("state.videoPlayer", b.proxy(function() { this.element.trigger("reset.idle") }, this));
        this.secondsFormat = function(a) { isNaN(a) && (a = 0); var b = [],
            c = Math.floor(a / 60);
            60 < c && (c %= 60); var d = Math.floor(a / 3600);
            a = Math.round(0 == a ? 0 : a % 60);
            0 < d && b.push(10 > d ? "0" + d : d);
            b.push(10 > c ? "0" + c : c);
            b.push(10 > a ? "0" + a : a); return b.join(":") };
        a = this;
        b(window).resize(function() { a.inFullScreen || a.realFullscreenActive || a.resizeAll();
            a.inFullScreen && a.fullScreen(a.inFullScreen) });
        b(window).bind(this.RESIZE_EV, function(b) { a.inFullScreen || a.realFullscreenActive || a.resizeAll() });
        b(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange", function(b) { a.resize(b) });
        this.resize = function(c) {
            if (document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen) this._playlist.hidePlaylist(), this.element.addClass("elite_vp_fullScreen"),
            this.elementAD.addClass("elite_vp_fullScreen"), 
            b(this.mainContainer).find(".fa-elite-expand").removeClass("fa-elite-expand").addClass("fa-elite-compress"), 
            b(this.fsEnterADBox).find(".fa-elite-expandAD").removeClass("fa-elite-expandAD").addClass("fa-elite-compressAD"), 
            a.element.width("100%"), a.element.height("100%"), 
            a.elementAD.width("100%"), 
            a.elementAD.height("100%"), 
            a.mainContainer.width("100%"), 
            a.mainContainer.height("100%"), 
            a.mainContainer.css("position", "fixed"), 
            a.mainContainer.css("left", 0),
            a.mainContainer.css("top", 0), a.realFullscreenActive = !0, this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.show(), this.unmuteBtnWrapper.show(), this.videoTrack.show(), this.resizeVideoTrack();
            else {
            this._playlist.showPlaylist();
            this.element.removeClass("elite_vp_fullScreen");
            this.elementAD.removeClass("elite_vp_fullScreen");
            b(this.mainContainer).find(".fa-elite-compress").removeClass("fa-elite-compress").addClass("fa-elite-expand");
            b(this.fsEnterADBox).find(".fa-elite-compressAD").removeClass("fa-elite-compressAD").addClass("fa-elite-expandAD");
            a.element.width(a.playerWidth);
            a.element.height(a.playerHeight);
            a.elementAD.width(a.playerWidth);
            a.elementAD.height(a.playerHeight);
            a.mainContainer.css("left", "");
            a.mainContainer.css("top", "");
            "fitToContainer" == a.options.playerLayout || "fitToBrowser" == a.options.playerLayout ? (a.mainContainer.width("100%"), a.mainContainer.height("100%")) : "fixedSize" == a.options.playerLayout && (a.mainContainer.width(a.options.videoPlayerWidth), a.mainContainer.height(a.options.videoPlayerHeight));
            a.mainContainer.css("position", "absolute");
            this.stretching && (this.stretching = !1, this.toggleStretch());
            a.element.css({ zIndex: 455558 });
            if ("yes" == a._playlist.videos_array[a._playlist.videoid].prerollAD || a.options.showGlobalPrerollAds) !a._playlist.videoAdPlayed && a.videoAdStarted ? a.elementAD.css({ zIndex: 455559 }) : a.elementAD.css({ zIndex: 455557 });
            a.mainContainer.parent().css("zIndex", 1);
            a.mainContainer.css("zIndex", 999999);
            a.realFullscreenActive = !1;
            a.resizeAll()
            }
            this.resizeVideoTrack();
            this.positionOverScreenButtons();
            this.positionLogo();
            this.positionPopup();
            this.resizeBars();
            "Yes" == a.options.hideControlsOnMouseOut && this.hideControls()
        }
    };
    d.fn.setupLightBox = function() {
        var a = this;
        if (this.options.lightBox) {
            this.options.playerLayout = "fixedSize";
            var c = this.mainContainer.parent();
            b.each(c, function() {
            a.lightBoxOverlay = b("<div />").addClass("elite_vp_lightBoxOverlay").hide().css({ opacity: 0 });
            a.lightBoxCloseBtnWrapper = b("<div />").addClass("elite_vp_lightBoxCloseBtnWrapper").addClass("elite_vp_bg " + a.options.instanceTheme).addClass("elite_vp_playerElement").bind(a.CLICK_EV,
                function() { a.toggleLightBox() });
            a.mainContainer.append(a.lightBoxCloseBtnWrapper);
            a.lightBoxCloseBtn = b("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_lightBoxCloseBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + a.options.instanceTheme).addClass("fa-elite-times");
            a.lightBoxCloseBtnWrapper.append(a.lightBoxCloseBtn);
            a.lightBoxOverlayTransparent = b("<div />").addClass("elite_vp_lightBoxOverlayTransparent").bind(a.CLICK_EV, function() {
                a.options.lightBoxCloseOnOutsideClick &&
                    a.toggleLightBox()
            }).appendTo(a.lightBoxOverlay);
            a.mainContainer.addClass("elite_vp_lightBoxBorder");
            c.parent().append(a.lightBoxOverlay);
            a.mainContainer.appendTo(a.lightBoxOverlay);
            a.lightBoxThumbnailWrap = b("<div />").addClass("elite_vp_lightBoxThumbnailWrap").bind(a.CLICK_EV, function() { a.toggleLightBox() }).css({ cursor: "pointer", width: a.options.lightBoxThumbnailWidth, height: a.options.lightBoxThumbnailHeight }).appendTo(c);
            a.lightBoxThumbnail = b('<img class="elite_vp_lightBoxThumbnail">').attr("src",
                a.options.lightBoxThumbnail).appendTo(a.lightBoxThumbnailWrap);
            a.lightBoxPlayButton = b("<div />");
            a.lightBoxPlayButton.addClass("elite_vp_playButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + a.options.instanceTheme).appendTo(a.lightBoxThumbnailWrap)
            })
        }
    };
    d.fn.setColorAccent = function(a, c) {
        b(".elite_vp_themeColor").css({ background: a });
        b(".elite_vp_themeColorText").css({ color: a });
        b(".elite_vp_playBtnBg").css({ background: a });
        b(c).hasClass("fa-elite-random") &&
            (b("#elite_vp_shuffleBtn.elite_vp_themeColor").css({ background: a }), b("#elite_vp_shuffleBtn.elite_vp_themeColorText").css({ color: a }), b("#elite_vp_shuffleBtn.elite_vp_playBtnBg").css({ background: a }));
        b(c).hasClass("fa-elite-cog") && (b("#elite_vp_qualityBtn.elite_vp_themeColor").css({ background: a }), b("#elite_vp_qualityBtn.elite_vp_themeColorText").css({ color: a }), b("#elite_vp_qualityBtn.elite_vp_playBtnBg").css({ background: a }))
    };
    d.fn.removeColorAccent = function(a) {
        b(a).hasClass("fa-elite-random") && b(".fa-elite-random").css("color",
            "");
        b(a).hasClass("fa-elite-cog") && b(".fa-elite-cog").css("color", "")
    };
    d.fn.resizeAll = function() {
        if ("fitToContainer" == this.options.playerLayout || "fitToBrowser" == this.options.playerLayout) {
            var a = this.parent.width() / this.options.videoRatio;
            this.parent.height(a);
            switch (this.options.playlist) {
            case "Right playlist":
                if (this.stretching) {
                    380 > this.parent.width() ? this.videoTrack.hide() : this.videoTrack.show();
                    320 > this.parent.width() ? this.timeTotal.hide() : this.timeTotal.show();
                    if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType ||
                        "YouTube" == this.options.videoType) 320 > this.parent.width() ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                    "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (320 > this.parent.width() ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                    320 > this.parent.width() ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                    320 > this.parent.width() ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    "Yes" == this.options.embedShow && (560 >
                        this.parent.width() ? this.embedBtn.hide() : this.embedBtn.show())
                } else {
                    640 > this.parent.width() ? this.videoTrack.hide() : this.videoTrack.show();
                    620 > this.parent.width() ? this.timeTotal.hide() : this.timeTotal.show();
                    if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 580 > this.parent.width() ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                    "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (580 > this.parent.width() ?
                        this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                    640 > this.parent.width() ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                    640 > this.parent.width() ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    "Yes" == this.options.embedShow && (590 > this.parent.width() ? this.embedBtn.hide() : this.embedBtn.show());
                    if (522 > this.parent.width()) {
                        this.mainContainer.find(".elite_vp_playlistBarBtn").css({ width: "20px" });
                        this.mainContainer.find("#elite_vp_nextBtn").css({ marginLeft: "-7.5px" });
                        this.mainContainer.find("#elite_vp_previousBtn").css({ marginLeft: "-7.5px" });
                        this.mainContainer.find("#elite_vp_shuffleBtn").css({ marginLeft: "-8px" });
                        this._playlist.lastBtn.hide();
                        this._playlist.firstBtn.hide();
                        this._playlist.playlist.css({ width: 90 });
                        this.mainContainer.find(".elite_vp_itemRight").hide();
                        this.videoTrack.show();
                        this.timeElapsed.show();
                        this.timeTotal.show();
                        this.rewindBtnWrapper.show();
                        "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" !=
                        this.options.videoType || this.qualityBtnWrapper.show();
                        "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.show();
                        this.unmuteBtnWrapper.show();
                        470 > this.parent.width() ? this.videoTrack.hide() : this.videoTrack.show();
                        450 > this.parent.width() ? this.timeTotal.hide() : this.timeTotal.show();
                        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 410 > this.parent.width() ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                        "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (410 > this.parent.width() ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                        380 > this.parent.width() ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                        353 > this.parent.width() ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    } else this._playlist.playlist.css({ width: 260 }), this.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({ width: "30px" }),
                        this.mainContainer.find("#elite_vp_nextBtn").css({ marginLeft: "7.5px" }), this.mainContainer.find("#elite_vp_previousBtn").css({ marginLeft: "7.5px" }), this.mainContainer.find("#elite_vp_shuffleBtn").css({ marginLeft: "8px" }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show()
                }
                190 > this._playlist.playlist.height() ? (b(this.playButtonScreen).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), b(this.skipAdCount).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }), b(this.skipAdBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }),
                    b(this.controls).css({ height: 35 }), b(this._playlist.playlistBar).css({ height: 35 })) : (b(this.playButtonScreen).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.skipAdCount).css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                    "-o-transform": "scale(1)",
                    transform: "scale(1)",
                    "transform-origin": "bottom right"
                }), b(this.skipAdBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)", "transform-origin": "bottom right" }), b(this.controls).css({ height: 50 }), b(this._playlist.playlistBar).css({ height: 50 }));
                "Yes" == this.options.infoShow && (198 > this._playlist.playlist.height() ? this.infoBtn.hide() : this.infoBtn.show());
                "Yes" == this.options.embedShow && (159 >
                    this._playlist.playlist.height() ? this.embedBtn.hide() : this.embedBtn.show());
                "Yes" == this.options.shareShow && (123 > this._playlist.playlist.height() ? this.shareBtn.hide() : this.shareBtn.show());
                break;
            case "Bottom playlist":
                380 > this.mainContainer.height() ? this.videoTrack.hide() : this.videoTrack.show();
                361 > this.mainContainer.height() ? this.timeTotal.hide() : this.timeTotal.show();
                if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 320 > this.mainContainer.height() ?
                    this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (320 > this.mainContainer.height() ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                290 > this.mainContainer.height() ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                262 > this.mainContainer.height() ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                313 > this.mainContainer.height() ? (b(this.playButtonScreen).css({
                    "-webkit-transform": "scale(0.6)",
                    "-moz-transform": "scale(0.6)",
                    "-ms-transform": "scale(0.6)",
                    "-o-transform": "scale(0.6)",
                    transform: "scale(0.6)"
                }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.skipAdCount).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }), b(this.skipAdBox).css({
                    "-webkit-transform": "scale(0.6)",
                    "-moz-transform": "scale(0.6)",
                    "-ms-transform": "scale(0.6)",
                    "-o-transform": "scale(0.6)",
                    transform: "scale(0.6)",
                    "transform-origin": "bottom right"
                }), b(this.controls).css({ height: 35 }), b(this._playlist.playlistBar).css({ height: 35 }), b(this._playlist.playlist).css({ height: 127 }), this._playlist.playlistH = b(this._playlist.playlist).height(), 230 > this.mainContainer.height() ? (b(this._playlist.playlist).css({ height: 92 }), this._playlist.playlistH = b(this._playlist.playlist).height(), this.mainContainer.find(".elite_vp_itemRight_bottom").hide(),
                    this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({ opacity: 0 }), this.mainContainer.find(".elite_vp_itemSelected").css({ width: 40, height: 40 }), this.mainContainer.find(".elite_vp_itemUnselected").css({ width: 40, height: 40 }), this.mainContainer.find(".elite_vp_itemLeft").css({ width: 35, height: 35 })) : (this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({ opacity: 1 }), this.mainContainer.find(".elite_vp_itemSelected").css({
                    width: 245,
                    height: 76
                }), this.mainContainer.find(".elite_vp_itemUnselected").css({ width: 245, height: 76 }), this.mainContainer.find(".elite_vp_itemLeft").css({ width: 70, height: 70 }))) : (b(this.playButtonScreen).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), b(this.skipAdBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)", "transform-origin": "bottom right" }), b(this.controls).css({ height: 50 }), b(this._playlist.playlistBar).css({ height: 50 }), b(this._playlist.playlist).css({ height: 142 }), b(this._playlist.playlist).css({ bottom: 142 }), b(this._playlist.playlist).css({ "z-index": 999999 }),  this._playlist.playlistH = b(this._playlist.playlist).height(),
                    this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({ opacity: 1 }), this.mainContainer.find(".elite_vp_itemSelected").css({ width: 245, height: 76 }), this.mainContainer.find(".elite_vp_itemUnselected").css({ width: 245, height: 76 }), this.mainContainer.find(".elite_vp_itemLeft").css({ width: 70, height: 70 }));
                "Yes" == this.options.infoShow && (270 > this.mainContainer.height() ? this.infoBtn.hide() : this.infoBtn.show());
                "Yes" == this.options.embedShow && (330 >
                    this.mainContainer.height() ? this.embedBtn.hide() : this.embedBtn.show());
                "Yes" == this.options.shareShow && (194 > this.mainContainer.height() ? this.shareBtn.hide() : this.shareBtn.show());
            case "Off":
                378 > this.parent.width() ? this.videoTrack.hide() : this.videoTrack.show(), 360 > this.parent.width() ? this.timeTotal.hide() : this.timeTotal.show(), 289 > this.parent.width() ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), 262 > this.parent.width() ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show()
            }
            this.stretching ?
            "Right playlist" == this.options.playlist ? (this.element.width(this.parent.parent().width()), this.element.height(this._playlist.playlist.height())) : "Bottom playlist" == this.options.playlist ? (this.element.width(this.parent.parent().width()), this.element.height(a)) : "Off" == this.options.playlist && (this.element.width(this.parent.parent().width()), this.element.height(this.parent.parent().height())) : "Right playlist" == this.options.playlist ? (this.element.width(this.parent.parent().width() - this._playlist.playlist.width()),
                this.element.height(this._playlist.playlist.height())) : "Bottom playlist" == this.options.playlist ? (this.element.width(this.parent.parent().width()), this.element.height(a - this._playlist.playlist.height())) : "Off" == this.options.playlist && (this.element.width(this.parent.parent().width()), this.element.height(this.parent.height()));
            !this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls || (this.videoElement.width(this.element.width()),
            this.videoElement.height(this.element.height()), this.videoElementAD.width(this.element.width()), this.videoElementAD.height(this.element.height()));
            this._playlist.resizePlaylist();
            this.elementAD.width(this.element.width());
            this.elementAD.height(this.element.height());
            this.resizeVideoTrack();
            this.positionOverScreenButtons();
            this.resizeBars();
            this.positionLogo();
            this.positionPopup()
        } else if ("fixedSize" == this.options.playerLayout) {
            this.newPlayerWidth = b(window).width() - this.mainContainer.position().left -
            48;
            this.newPlayerHeight = this.newPlayerWidth / (this.options.videoPlayerWidth / this.options.videoPlayerHeight);
            if (this.newPlayerWidth < this.options.videoPlayerWidth) switch (this.options.lightBox && b(this.mainContainer).css({ position: "absolute", left: 24, top: window.innerHeight / 2 - this.newPlayerHeight / 2 - 10 }), this.options.playlist) {
            case "Right playlist":
                if (this.stretching) {
                    380 > this.newPlayerWidth ? this.videoTrack.hide() : this.videoTrack.show();
                    361 > this.newPlayerWidth ? this.timeTotal.hide() : this.timeTotal.show();
                    if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 320 > this.newPlayerWidth ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                    "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (320 > this.newPlayerWidth ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                    290 > this.newPlayerWidth ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                    262 > this.newPlayerWidth ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    "Yes" == this.options.embedShow && (560 > this.newPlayerWidth ? this.embedBtn.hide() : this.embedBtn.show())
                } else {
                    640 > this.newPlayerWidth ? this.videoTrack.hide() : this.videoTrack.show();
                    "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (584 > this.newPlayerWidth ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                    620 > this.newPlayerWidth ? this.timeTotal.hide() : this.timeTotal.show();
                    "Yes" == this.options.embedShow && (655 > this.newPlayerWidth ? this.embedBtn.hide() :
                        this.embedBtn.show());
                    if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 580 > this.newPlayerWidth ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                    550 > this.newPlayerWidth ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                    525 > this.newPlayerWidth ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    if (522 > this.newPlayerWidth) {
                        this.mainContainer.find(".elite_vp_playlistBarBtn").css({ width: "20px" });
                        this.mainContainer.find("#elite_vp_nextBtn").css({ marginLeft: "-7.5px" });
                        this.mainContainer.find("#elite_vp_previousBtn").css({ marginLeft: "-7.5px" });
                        this.mainContainer.find("#elite_vp_shuffleBtn").css({ marginLeft: "-8px" });
                        this._playlist.lastBtn.hide();
                        this._playlist.firstBtn.hide();
                        this._playlist.playlist.css({ width: 90 });
                        this.mainContainer.find(".elite_vp_itemRight").hide();
                        this.videoTrack.show();
                        this.timeElapsed.show();
                        "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.show();
                        this.timeTotal.show();
                        this.rewindBtnWrapper.show();
                        "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.qualityBtnWrapper.show();
                        this.unmuteBtnWrapper.show();
                        470 > this.newPlayerWidth ? this.videoTrack.hide() : this.videoTrack.show();
                        450 > this.newPlayerWidth ? this.timeTotal.hide() : this.timeTotal.show();
                        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 410 > this.newPlayerWidth ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                        "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (410 > this.newPlayerWidth ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                        380 > this.newPlayerWidth ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                        353 > this.newPlayerWidth ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                    } else this._playlist.playlist.css({ width: 260 }), this.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({ width: "30px" }),
                        this.mainContainer.find("#elite_vp_nextBtn").css({ marginLeft: "7.5px" }), this.mainContainer.find("#elite_vp_previousBtn").css({ marginLeft: "7.5px" }), this.mainContainer.find("#elite_vp_shuffleBtn").css({ marginLeft: "8px" }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show()
                }
                190 > this.newPlayerHeight ? (b(this.playButtonScreen).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), b(this.skipAdCount).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }), b(this.skipAdBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }),
                    b(this.controls).css({ height: 35 }), b(this._playlist.playlistBar).css({ height: 35 })) : (b(this.playButtonScreen).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.skipAdCount).css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                    "-o-transform": "scale(1)",
                    transform: "scale(1)",
                    "transform-origin": "bottom right"
                }), b(this.skipAdBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)", "transform-origin": "bottom right" }), b(this.controls).css({ height: 50 }), b(this._playlist.playlistBar).css({ height: 50 }));
                "Yes" == this.options.infoShow && (198 > this.newPlayerHeight ? this.infoBtn.hide() : this.infoBtn.show());
                "Yes" == this.options.embedShow && (159 > this.newPlayerHeight ?
                    this.embedBtn.hide() : this.embedBtn.show());
                "Yes" == this.options.shareShow && (123 > this.newPlayerHeight ? this.shareBtn.hide() : this.shareBtn.show());
                break;
            case "Bottom playlist":
                380 > this.newPlayerWidth ? this.videoTrack.hide() : this.videoTrack.show();
                361 > this.newPlayerWidth ? this.timeTotal.hide() : this.timeTotal.show();
                if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) 320 > this.newPlayerWidth ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (320 > this.newPlayerWidth ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                290 > this.newPlayerWidth ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                262 > this.newPlayerWidth ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                "Yes" == this.options.embedShow && (560 > this.newPlayerWidth ? this.embedBtn.hide() : this.embedBtn.show());
                313 > this.newPlayerHeight ? (b(this.playButtonScreen).css({
                    "-webkit-transform": "scale(0.6)",
                    "-moz-transform": "scale(0.6)",
                    "-ms-transform": "scale(0.6)",
                    "-o-transform": "scale(0.6)",
                    transform: "scale(0.6)"
                }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.skipAdCount).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }), b(this.skipAdBox).css({
                    "-webkit-transform": "scale(0.6)",
                    "-moz-transform": "scale(0.6)",
                    "-ms-transform": "scale(0.6)",
                    "-o-transform": "scale(0.6)",
                    transform: "scale(0.6)",
                    "transform-origin": "bottom right"
                }), b(this.controls).css({ height: 35 }), b(this._playlist.playlistBar).css({ height: 35 }), b(this._playlist.playlist).css({ height: 127 }), this._playlist.playlistH = b(this._playlist.playlist).height(), 230 > this.newPlayerHeight ? (b(this._playlist.playlist).css({ height: 92 }), this._playlist.playlistH = b(this._playlist.playlist).height(), this.mainContainer.find(".elite_vp_itemRight_bottom").hide(),
                    this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({ opacity: 0 }), this.mainContainer.find(".elite_vp_itemSelected").css({ width: 40, height: 40 }), this.mainContainer.find(".elite_vp_itemUnselected").css({ width: 40, height: 40 }), this.mainContainer.find(".elite_vp_itemLeft").css({ width: 35, height: 35 })) : (this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({ opacity: 1 }), this.mainContainer.find(".elite_vp_itemSelected").css({
                    width: 245,
                    height: 76
                }), this.mainContainer.find(".elite_vp_itemUnselected").css({ width: 245, height: 76 }), this.mainContainer.find(".elite_vp_itemLeft").css({ width: 70, height: 70 }))) : (b(this.playButtonScreen).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.skipAdCount).css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                    "-o-transform": "scale(1)",
                    transform: "scale(1)",
                    "transform-origin": "bottom right"
                }), b(this.skipAdBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)", "transform-origin": "bottom right" }), b(this.controls).css({ height: 50 }), b(this._playlist.playlistBar).css({ height: 50 }), b(this._playlist.playlist).css({ height: 142 }), b(this._playlist.playlist).css({ bottom: 142 }), b(this._playlist.playlist).css({ "z-index": 999999 }),  this._playlist.playlistH = b(this._playlist.playlist).height());
                "Yes" == this.options.infoShow && (198 > this.newPlayerHeight ? this.infoBtn.hide() : this.infoBtn.show());
                "Yes" == this.options.embedShow && (159 > this.newPlayerHeight ? this.embedBtn.hide() : this.embedBtn.show());
                "Yes" == this.options.shareShow && (123 > this.newPlayerHeight ? this.shareBtn.hide() : this.shareBtn.show());
                break;
            case "Off":
                380 > this.newPlayerWidth ? this.videoTrack.hide() : this.videoTrack.show();
                361 > this.newPlayerWidth ? this.timeTotal.hide() : this.timeTotal.show();
                if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType ||
                    "YouTube" == this.options.videoType) 320 > this.newPlayerWidth ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show();
                "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (320 > this.newPlayerWidth ? this.downloadBtnLink.hide() : this.downloadBtnLink.show());
                290 > this.newPlayerWidth ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show();
                262 > this.newPlayerWidth ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show();
                "Yes" == this.options.embedShow && (560 >
                    this.newPlayerWidth ? this.embedBtn.hide() : this.embedBtn.show());
                190 > this.newPlayerHeight ? (b(this.playButtonScreen).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)" }), b(this.skipAdCount).css({
                    "-webkit-transform": "scale(0.6)",
                    "-moz-transform": "scale(0.6)",
                    "-ms-transform": "scale(0.6)",
                    "-o-transform": "scale(0.6)",
                    transform: "scale(0.6)",
                    "transform-origin": "bottom right"
                }), b(this.skipAdBox).css({ "-webkit-transform": "scale(0.6)", "-moz-transform": "scale(0.6)", "-ms-transform": "scale(0.6)", "-o-transform": "scale(0.6)", transform: "scale(0.6)", "transform-origin": "bottom right" }), b(this.controls).css({ height: 35 }), b(this._playlist.playlistBar).css({ height: 35 })) : (b(this.playButtonScreen).css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                    "-o-transform": "scale(1)",
                    transform: "scale(1)"
                }), b(this.toggleAdPlayBox).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)" }), b(this.skipAdCount).css({ "-webkit-transform": "scale(1)", "-moz-transform": "scale(1)", "-ms-transform": "scale(1)", "-o-transform": "scale(1)", transform: "scale(1)", "transform-origin": "bottom right" }), b(this.skipAdBox).css({
                    "-webkit-transform": "scale(1)",
                    "-moz-transform": "scale(1)",
                    "-ms-transform": "scale(1)",
                    "-o-transform": "scale(1)",
                    transform: "scale(1)",
                    "transform-origin": "bottom right"
                }), b(this.controls).css({ height: 50 }), b(this._playlist.playlistBar).css({ height: 50 }));
                "Yes" == this.options.infoShow && (198 > this.newPlayerHeight ? this.infoBtn.hide() : this.infoBtn.show());
                "Yes" == this.options.embedShow && (159 > this.newPlayerHeight ? this.embedBtn.hide() : this.embedBtn.show());
                "Yes" == this.options.shareShow && (123 > this.newPlayerHeight ? this.shareBtn.hide() : this.shareBtn.show())
            } else this.options.lightBox && b(this.mainContainer).css({
                position: "absolute",
                left: window.innerWidth / 2 - this.options.videoPlayerWidth / 2,
                top: window.innerHeight / 2 - this.options.videoPlayerHeight / 2 - 10
            }), this.newPlayerWidth = this.options.videoPlayerWidth, this.newPlayerHeight = this.options.videoPlayerHeight, this.videoTrack.show(), this.timeElapsed.show(), this.timeTotal.show(), this.rewindBtnWrapper.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.qualityBtnWrapper.show(), this.unmuteBtnWrapper.show(),
            this._playlist.playlist.css({ width: 260 }), this.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({ width: "30px" }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show();
            "Right playlist" == this.options.playlist ? (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls || (this.videoElement.height(this.newPlayerHeight - 50), this.videoElementAD.height(this.newPlayerHeight -
            50)), this.element.css({ width: this.newPlayerWidth, height: this.newPlayerHeight }), this.mainContainer.css({ width: this.newPlayerWidth, height: this.newPlayerHeight })) : "Bottom playlist" == this.options.playlist ? (this.element.width(this.newPlayerWidth), this.mainContainer.css({ width: this.newPlayerWidth, height: this.newPlayerHeight })) : "Off" == this.options.playlist && (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls ||
            (this.videoElement.height(this.newPlayerHeight - 50), this.videoElementAD.height(this.newPlayerHeight - 50)), this.element.css({ width: this.newPlayerWidth, height: this.newPlayerHeight }), this.mainContainer.css({ width: this.newPlayerWidth, height: this.newPlayerHeight }));
            this.stretching ? "Right playlist" == this.options.playlist ? (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls || (this.videoElement.width(this.newPlayerWidth -
                32), this.videoElementAD.width(this.newPlayerWidth - 32)), this.element.width(b(this.mainContainer).width())) : "Bottom playlist" == this.options.playlist ? this.element.height(this.newPlayerHeight) : "Off" == this.options.playlist && (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || (this.videoElement.width(this.newPlayerWidth - 32), this.videoElementAD.width(this.newPlayerWidth - 32)), this.element.width(b(this.mainContainer).width())) :
            "Right playlist" == this.options.playlist ? (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls || (this.videoElement.width(this.newPlayerWidth - this._playlist.playlist.width() - 32), this.videoElementAD.width(this.newPlayerWidth - this._playlist.playlist.width() - 32)), this.element.width(b(this.mainContainer).width() - this._playlist.playlist.width()), this._playlist.resizePlaylist(this.newPlayerWidth,
                this.newPlayerHeight)) : "Bottom playlist" == this.options.playlist ? (this.element.height(this.newPlayerHeight - this._playlist.playlistH), this._playlist.resizePlaylist(this.newPlayerWidth, this.newPlayerHeight)) : "Off" == this.options.playlist && (!this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.options.showAllControls || (this.videoElement.width(this.newPlayerWidth - 32), this.videoElementAD.width(this.newPlayerWidth - 32)), this.element.width(b(this.mainContainer).width()));
            this.elementAD.width(this.element.width());
            this.elementAD.height(this.element.height());
            !this.agentID || "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.playBtnScreen && this.playBtnScreen.hide();
            void 0 != this.youtubePlayer && (this.realFullscreenActive && (this.element.width(b(document).width()), this.element.height(b(document).height())), this.youtubePlayer.setSize("100%", "100%"));
            this.options.lightBox && b(this.mainContainerBG).css({
            width: b(this.mainContainer).width() +
                20,
            height: b(this.mainContainer).height() + 20
            });
            this.resizeVideoTrack();
            this.positionOverScreenButtons();
            this.resizeBars();
            this.positionLogo();
            this.positionPopup()
        }
    };
    d.fn.autohideControls = function() { var a = this.element,
            b = !1,
            d = 1E3 * this.options.autohideControls,
            f = 0,
            e = function() { b && a.trigger("idle", !1);
            b = !1;
            f = 0 };
        a.bind("mousemove keydown DOMMouseScroll mousewheel mousedown reset.idle", e); var h = setInterval(function() { f >= d ? (e(), b = !0, a.trigger("idle", !0)) : f += 1E3 }, 1E3);
        a.on("unload", function() { clearInterval(h) }) };
    d.fn.resizeBars = function() {
        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) void 0 != this.youtubePlayer && this._playlist.youtubeSTARTED && (this.progressWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.progressIdleTrack.width(), this.progressIdle.css("width",
            this.progressIdleWidth), this.buffered = this.youtubePlayer.getVideoLoadedFraction(), this.downloadWidth = this.buffered * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressIdleDownloadWidth = this.buffered * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth));
        else if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) this.downloadWidth = this.buffered /
            this.video.duration * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleDownloadWidth = this.buffered / this.video.duration * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth), this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width(),
            this.progressIdle.css("width", this.progressIdleWidth), this.progressWidthAD = this.videoAD.currentTime / this.videoAD.duration * this.elementAD.width(), this.progressAD.css("width", this.progressWidthAD)
    };
    d.fn.createPopup = function() {
        var a = this;
        this.adImg = b("<div/>");
        this.adImg.addClass("elite_vp_popup");
        this.image = new Image;
        this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg;
        b(this.image).on("load", function() { a.adImg.append(a.image);
            a.positionPopup();
            a.adImg.append(a.adClose) });
        this.element.append(this.adImg);
        this.adImg.hide();
        this.adImg.css({ opacity: 0 });
        this.popupBtnClose = b("<div />");
        this.popupBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText");
        this.infoWindow.append(this.popupBtnClose);
        this.popupBtnClose.css({ bottom: 0 });
        this.adImg.append(this.popupBtnClose);
        this.popupBtnCloseIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor");
        this.popupBtnClose.append(this.popupBtnCloseIcon);
        this.popupBtnClose.bind(this.CLICK_EV, b.proxy(function() {
            a.adOn = !0;
            a.togglePopup()
        }, this));
        this.popupBtnClose.mouseover(function() { b(this).stop().animate({ opacity: .7 }, 200) });
        this.popupBtnClose.mouseout(function() { b(this).stop().animate({ opacity: 1 }, 200) })
    };


    d.fn.positionPopup = function() { 
        this.adImg.css({ bottom: this.controls.height() + 20})
    };


    d.fn.newAd = function() {
        var a = this;
        this.adImg.hide();
        this.image.src = "";
        this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg;
        this.adOn || b(this.image).bind(this.START_EV,
            function() { window.open(a._playlist.videos_array[a._playlist.videoid].popupAdGoToLink); "youtube" != a._playlist.videos_array[a._playlist.videoid].videoType && "YouTube" != a.options.videoType || a.youtubePlayer.pauseVideo(); "HTML5" != a._playlist.videos_array[a._playlist.videoid].videoType && "HTML5 (self-hosted)" != a.options.videoType || a.pause(); "vimeo" != a._playlist.videos_array[a._playlist.videoid].videoType && "Vimeo" != a.options.videoType || a._playlist.vimeoPlayer.api("pause") })
    };
    d.fn.createLogo = function() {
        var a =
            this;
        this.logoImg = b("<div/>");
        this.logoImg.addClass("elite_vp_logo");
        this.img = new Image;
        this.img.src = a.options.logoPath;
        b(this.img).on("load", function() { a.logoImg.append(a.img);
            a.positionLogo() });
        "Yes" == a.options.logoShow && this.element.append(this.logoImg);
        "Yes" == a.options.logoClickable && (this.logoImg.bind(this.CLICK_EV, b.proxy(function() { window.open(a.options.logoGoToLink) }, this)), this.logoImg.mouseover(function() { b(this).stop().animate({ opacity: .8 }, 200) }), this.logoImg.mouseout(function() {
            b(this).stop().animate({ opacity: 1 },
            200)
        }), b(".elite_vp_logo").css("cursor", "pointer"))
    };
    d.fn.positionLogo = function() {
        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) var a = 70;
        else if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) a = 70;
        else if ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType || "Vimeo" == this.options.videoType) a = 55;
        "bottom-right" == this.options.logoPosition ? this.logoImg.css({
            bottom: a,
            right: buttonsMargin
        }) : "bottom-left" == this.options.logoPosition && this.logoImg.css({ bottom: "70px", left: "15px" })
    };
    d.fn.showVideoElements = function() { this.videoElement.show();
        this.videoElementAD.show() };
    d.fn.hideVideoElements = function() { this.videoElement.hide();
        this.videoElementAD.hide() };
    d.fn.createAds = function() {
        var a = this;
        adsImg = b("<div/>");
        adsImg.addClass("ads");
        image = new Image;
        image.src = a._playlist.videos_array[0].adsPath;
        b(image).on("load", function() { adsImg.append(image);
            a.positionAds() });
        this.element.append(adsImg);
        adsImg.hide()
    };
    d.fn.positionAds = function() { adsImg.css({ bottom: this.controls.height() + 5, left: this.element.width() / 2 - adsImg.width() / 2 }) };
    d.fn.setupAutoplay = function() { this.options.lightBox || (this.options.autoplay ? this.isMobile.any() ? this.playButtonScreen.show() : this.play() : this.options.autoplay || (this.pause(), this.preloader.hide())) };
    d.fn.createNowPlayingText = function() {
        "Yes" == this.options.loadRandomVideoOnStart ? this.nowPlayingTitle.append('<p class="elite_vp_nowPlayingText elite_vp_nowPlayingText ' 
            + this.options.instanceTheme + '">' 
            + this._playlist.videos_array[this._playlist.rand].description + "&nbsp;&nbsp;──" 
            + this._playlist.videos_array[this._playlist.rand].title + "</p>") : this.nowPlayingTitle.append('<p class="elite_vp_nowPlayingText elite_vp_nowPlayingText ' 
            + this.options.instanceTheme + '">' 
            + this._playlist.videos_array[0].description + "&nbsp;&nbsp;──" 
            + this._playlist.videos_array[0].title + "</p>");
        this.nowPlayingTitleW = this.nowPlayingTitle.width();
        "No" == this.options.nowPlayingText && this.nowPlayingTitle.hide()
    };
    d.fn.createInfoWindowContent = function() {
        "Yes" == this.options.loadRandomVideoOnStart ? (
            this.infoWindow.append('<p class="elite_vp_infoTitle elite_vp_themeColorText elite_vp_titles">' 
                + this._playlist.videos_array[this._playlist.rand].description  + "&nbsp;&nbsp;──" 
                + this._playlist.videos_array[this._playlist.rand].title + "</p>"), 
            this.infoWindow.append('<p class="elite_vp_infoText elite_vp_infoText ' 
                + this.options.instanceTheme + '">' 
                + this._playlist.videos_array[this._playlist.rand].info_text + "</p>")) : 
        (this.infoWindow.append('<p class="elite_vp_infoTitle elite_vp_themeColorText elite_vp_titles">' 
            + this._playlist.videos_array[0].description  + "&nbsp;&nbsp;──" 
            + this._playlist.videos_array[0].title +  "</p>"), 
            this.infoWindow.append('<p class="elite_vp_infoText elite_vp_infoText ' 
                + this.options.instanceTheme + '">' 
                + this._playlist.videos_array[0].info_text +
            "</p>"));
        this.infoWindow.css({ top: -this.infoWindow.height() }).hide()
    };
    d.fn.createSkipAd = function() {
        var a = this;
        this.skipAdBox = b("<div />").addClass("elite_vp_skipAdBox").bind(a.CLICK_EV, function() { a.closeAD() }).hide();
        this.elementAD.append(this.skipAdBox);
        this.skipAdBoxContentLeft = b("<div />").addClass("elite_vp_skipAdBoxContentLeft");
        this.skipAdBox.append(this.skipAdBoxContentLeft);
        this.skipAdBoxContentLeft.append('<p class="elite_vp_skipAdTitle">' + this.options.skipAdvertisementText + "</p>");
        this.skipAdBoxIcon =
            b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-step-forward-ad");
        this.skipAdBox.append(this.skipAdBoxIcon)
    };
    d.fn.createSkipAdCount = function() {
        this.skipAdCount = b("<div />").addClass("elite_vp_skipAdCount").hide();
        this.elementAD.append(this.skipAdCount);
        this.i = document.createElement("img");
        this.i.src = this._playlist.videos_array[this._playlist.videoid].thumbnail_image;
        this.skipAdCount.append(this.i);
        b(".elite_vp_skipAdCount img").addClass("elite_vp_skipAdCountImage elite_vp_themeColorThumbBorder");
        this.skipAdCountContentLeft = b("<div />").addClass("elite_vp_skipAdCountContentLeft");
        this.skipAdCount.append(this.skipAdCountContentLeft);
        this.skipAdCountContentLeft.append('<p class="elite_vp_skipAdCountTitle"></p>');
        this.skipAdCount.css({ right: -this.skipAdCount.width(), bottom: 28 }).hide()
    };
    d.fn.createAdTogglePlay = function() {
        var a = this;
        this.toggleAdPlayBox = b("<div />").addClass("elite_vp_toggleAdPlayBox").attr("aria-hidden", "true").addClass("fa-elite").bind(a.CLICK_EV, function() { a.togglePlayAD(); a.ADTriggered = !0 }).hide();
        this.elementAD.append(this.toggleAdPlayBox)
    };
    d.fn.createVideoAdTitleInsideAD = function() { this.videoAdBoxInside = b("<div />");
        this.videoAdBoxInside.addClass("elite_vp_videoAdBoxInside");
        this.elementAD.append(this.videoAdBoxInside);
        this.videoAdBoxInside.append('<div class="elite_vp_adsTitleInside">' + this.options.advertisementTitle + " </div>");
        this.videoAdBoxInside.append(this.timeLeftInside);
        this.videoAdBoxInside.hide() };
    d.fn.attachZeroClipboard = function() {
        var a =
            this;
        b(this.copy).each(function() { a.zeroClipboard = ZeroClipboard;
            a.zeroClipboard.setMoviePath("img/ZeroClipboard.swf");
            a.clip = new ZeroClipboard.Client;
            a.clip.addEventListener("mousedown", function() { a.clip.setText(a.embedTxt.text()) });
            a.clip.addEventListener("complete", function(a, b) { alert("copied: " + b) });
            a.clip.glue(this);
            a.clip.hide() });
        b(this.copy2).each(function() {
            a.zeroClipboard = ZeroClipboard;
            a.zeroClipboard.setMoviePath("img/ZeroClipboard.swf");
            a.clip2 = new ZeroClipboard.Client;
            a.clip2.addEventListener("mousedown",
            function() { a.clip2.setText(a.embedTxt2.text()) });
            a.clip2.addEventListener("complete", function(a, b) { alert("copied: " + b) });
            a.clip2.glue(this);
            a.clip2.hide()
        })
    };
    d.fn.createEmbedWindowContent = function() {
        b(this.embedWindow).append('<p class="elite_vp_embedTitle elite_vp_themeColorText elite_vp_titles">' + this.options.embedWindowTitle1 + "</p>");
        b(this.embedWindow).append('<p class="elite_vp_embedTitle2 elite_vp_themeColorText elite_vp_titles">' + this.options.embedWindowTitle2 + "</p>");
        this.embedTxt = b("<p />").addClass("elite_vp_embedText").addClass("elite_vp_embedText " +
            this.options.instanceTheme);
        this.embedWindow.append(this.embedTxt);
        this.copy = b("<div />").attr("title", "Copy to clipboard").attr("id", "elite_vp_copy").addClass("copyBtn").addClass(this.options.instanceTheme);
        this.embedWindow.append(this.copy);
        b(this.embedWindow).find("#elite_vp_copy").append('<p id="elite_vp_copyInside" class="elite_vp_copyInside ' + this.options.instanceTheme + '">Copy</p>');
        b(this.embedWindow).append('<p class="elite_vp_embedTitle3 elite_vp_themeColorText elite_vp_titles">' + this.options.embedWindowTitle3 +
            "</p>");
        this.embedTxt2 = b("<p />").addClass("elite_vp_embedText2").addClass("elite_vp_embedText " + this.options.instanceTheme);
        this.embedWindow.append(this.embedTxt2);
        this.copy2 = b("<div />").attr("title", "Copy to clipboard").attr("id", "elite_vp_copy2").addClass("copyBtn").addClass(this.options.instanceTheme);
        this.embedWindow.append(this.copy2);
        b(this.embedWindow).find("#elite_vp_copy2").append('<p id="elite_vp_copyInside" class="elite_vp_copyInside ' + this.options.instanceTheme + '">Copy</p>');
        var a = this.options.embedCodeSrc,
            c = this.options.embedCodeW,
            d = this.options.embedCodeH;
        b(this.embedWindow).find(".elite_vp_embedText").text("<iframe src='" + a + "' width='" + c + "' height='" + d + "' frameborder=0 webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>");
        b(this.embedWindow).find(".elite_vp_embedText2").text("" + this.options.embedShareLink + "")
    };
    d.fn.ready = function(a) { this.readyList.push(a);
        this.loaded && a.call(this) };
    d.fn.load = function(a) {
        var c = this;
        a && (this.sources = a);
        "string" == typeof this.sources && (this.sources = { src: this.sources });
        b.isArray(this.sources) || (this.sources = [this.sources]);
        this.ready(function() { this.change("loading"); "HTML5" != c._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != c.options.videoType || this.video.loadSources(this.sources) })
    };
    d.fn.closeAD = function() {
        clearInterval(this.myInterval);
        this.videoPlayingAD = !0;
        this.togglePlayAD();
        this._playlist.videoAdPlayed = !0;
        this.resetPlayerAD();
        this.elementAD.css({ zIndex: 1 });
        this.videoElementAD.empty();
        this.videoAdBoxInside.hide();
        this.removeListenerProgressAD();
        this.options.allowSkipAd && (this.skipAdBox.hide(), this.skipAdCount.hide());
        this.fsEnterADBox.hide();
        this.toggleAdPlayBox.hide();
        this.progressADBg.hide();
        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) this.ytWrapper.css({ visibility: "visible" }), this.hideVideoElements(), void 0 != this.youtubePlayer && this.youtubePlayer.playVideo();
        else if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) this.showVideoElements(),
            this.togglePlay(), this.video.play();
        else if ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType || "Vimeo" == this.options.videoType) this.hideVideoElements(), void 0 != this._playlist.vimeoPlayer ? this._playlist.vimeoPlayer.api("play") : this._playlist.playVimeo(this._playlist.videoid)
    };
    d.fn.openAD = function() {
        this.showVideoElements();
        this.progressADBg.show();
        this.elementAD.css({ zIndex: 555559 });
        this.ytWrapper.css({ visibility: "hidden" });
        this.videoAdBoxInside.show();
        this.options.allowSkipAd &&
            (this.skipBoxOn = !0, this.toggleSkipAdBox(), this.skipCountOn = !1, this.toggleSkipAdCount());
        this.fsEnterADBox.show();
        this.realFullscreenActive || this.resizeAll();
        this.isMobile.any() ? this.ADTriggered || (this.toggleAdPlayBox.show(), this.videoPlayingAD = !0, this.togglePlayAD()) : this.toggleAdPlayBox.hide();
        this.options.allowSkipAd && (this.setSkipTimer(), b(".elite_vp_skipAdCountTitle").text(this.options.skipAdText + " " + this.counter + " s"), this.i.src = this._playlist.videos_array[this._playlist.videoid].thumbnail_image)
    };
    d.fn.loadAD = function(a, c) {
        this.preloaderAD.stop().animate({ opacity: 1 }, 0, function() { b(this).show() });
        a && (this.sourcesAD = a);
        "string" == typeof this.sourcesAD && (this.sourcesAD = { src: this.sourcesAD });
        b.isArray(this.sourcesAD) || (this.sourcesAD = [this.sourcesAD]);
        this.ready(function() { this.change("loading");
            this.videoAD.loadSources(this.sourcesAD) });
        switch (c) {
            case "prerollActive":
            this.prerollActive = !0;
            this.postrollActive = this.midrollActive = !1;
            break;
            case "midrollActive":
            this.prerollActive = !1;
            this.midrollActive = !0;
            this.postrollActive = !1;
            break;
            case "postrollActive":
            this.midrollActive = this.prerollActive = !1, this.postrollActive = !0
        }
    };
    d.fn.exitToOriginalSize = function() { THREEx.FullScreen.available() ? THREEx.FullScreen.activated() ? THREEx.FullScreen.cancel() : this.inFullScreen && this.fullScreen(!this.inFullScreen) : THREEx.FullScreen.available();
        this.elementAD.css({ zIndex: 455555 }) };
    d.fn.play = function() {
        this.playButtonScreen.hide();
        this.playBtn.removeClass("fa-elite-play").addClass("fa-elite-pause");
        "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType ||
            "HTML5 (self-hosted)" == this.options.videoType ? this.video.play() : ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) && this.video.pause();
        "yes" != this._playlist.videos_array[this._playlist.videoid].prerollAD || 0 != this.videoAdStarted || this.options.showGlobalPrerollAds || (this.video.pause(), !this.videoAdStarted && this._playlist.videos_array[this._playlist.videoid].prerollAD && (this.myVideo.canPlayType && this.myVideo.canPlayType("video/mp4").replace(/no/,
            "") && (this.canPlay = !0, this.video_pathAD = this._playlist.videos_array[this._playlist.videoid].preroll_mp4), this.loadAD(this.video_pathAD, "prerollActive"), this.openAD()), this.videoAdStarted = !0);
        this.options.showGlobalPrerollAds && 0 == this.videoAdStarted && (this.video.pause(), !this.videoAdStarted && this.options.showGlobalPrerollAds && (this.myVideo.canPlayType && this.myVideo.canPlayType("video/mp4").replace(/no/, "") && (this.canPlay = !0, this.video_pathAD = this.globalPrerollAds_arr[this.getGlobalPrerollRandomNumber()]),
            this.loadAD(this.video_pathAD), this.openAD()), this.videoAdStarted = !0)
    };
    d.fn.pause = function() {
        if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) { if (this.html5STARTED || "" == this.options.posterImg) this.is_iOSVolumeButtonScreen ? this.playButtonScreen.hide() : this.playButtonScreen.show() } else if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) this._playlist.youtubeSTARTED || "" ==
            this.options.posterImg ? this.playButtonScreen.show() : this.playButtonScreen.hide();
        this.playBtn.removeClass("fa-elite-pause").addClass("fa-elite-play");
        this.video.pause()
    };
    d.fn.stop = function() { this.seek(0);
        this.pause() };
    d.fn.hideOverlay = function() {
        if (void 0 != this.overlay)
            if (this.overlay.hide(), this.poster2Showing = !1, this.playButtonPoster.hide(), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) this.youtubePlayer.playVideo(), "default controls" ==
            this.options.youtubeControls && this.element.css("visibility", "hidden");
            else if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) this.togglePlay();
        else if ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType || "Vimeo" == this.options.videoType) this.hideCustomControls(), this.hideVideoElements(), void 0 != this._playlist.vimeoPlayer ? this._playlist.vimeoPlayer.api("play") : this._playlist.playVimeo(this._playlist.videoid)
    };
    d.fn.togglePlay = function() { "elite_vp_playing" == this.state ? (this.pause(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.pauseVideo()) : (this.play(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.playVideo()) };
    d.fn.toggleSkipAdBox = function() {
        this.skipBoxOn ? (this.skipAdBox.stop().animate({ right: -(this.skipAdBox.width() - 2), bottom: 28 }, 200, function() { b(this).hide() }),
            this.skipBoxOn = !1) : (this.skipAdBox.show(), this.addListenerProgressAD(), this.skipAdBox.stop().animate({ right: 10, bottom: 28 }, 500), this.skipBoxOn = !0)
    };
    d.fn.toggleSkipAdCount = function() { this.skipCountOn ? (this.skipAdCount.stop().animate({ right: -(this.skipAdCount.width() - 2), bottom: 28 }, 200, function() { b(this).hide() }), this.skipCountOn = !1) : (this.skipAdCount.show(), this.skipAdCount.stop().animate({ right: 10, bottom: 28 }, 500), this.skipCountOn = !0) };
    d.fn.toggleInfoWindow = function() {
        this.infoOn ? (this.infoWindow.stop().animate({ top: -this.infoWindow.height() },
            200,
            function() { b(this).hide() }), this.nowPlayingTitle.show(), this.infoOn = !1) : (this.infoWindow.show(), this.infoWindow.stop().animate({ top: 0 }, 500), this.nowPlayingTitle.hide(), this.infoOn = !0)
    };
    d.fn.toggleLightBox = function() {
        this.lightBoxOn ? (this.lightBoxOverlay.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() }), this.lightBoxOn = !1, this.pause(), this.YTAPIReady && this.youtubePlayer.pauseVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("pause"), this.videoPlayingAD = !0, this.togglePlayAD(),
            b(".elite_vp_lightBoxThumbnailWrap").each(function(a, c) { b(this).find(".elite_vp_playButtonScreen").css({ zIndex: 2147483647 }) })) : (this.lightBoxOverlay.show(), this.lightBoxOverlay.stop().animate({ opacity: 1 }, 300), this.lightBoxOn = !0, this.options.lightBoxAutoplay && (this.lightBoxInitiated ? "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds ? this._playlist.videoAdPlayed ? (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer &&
            this._playlist.vimeoPlayer.api("play")) : (this.videoPlayingAD = !1, this.togglePlayAD()) : (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("play")) : (this.playVideoById(this._playlist.videoid), this.lightBoxInitiated = !0)), b(".elite_vp_lightBoxThumbnailWrap").each(function(a, c) { b(this).find(".elite_vp_playButtonScreen").css({ zIndex: 2147483646 }) }));
        this.resizeAll()
    };
    d.fn.toggleQualityWindow = function(a) {
        var c = this;
        a = a ? a : 0;
        this.qualityOn ?
            (this.qualityWindow.stop().delay(a).animate({ top: 200 }, 200, function() { b(c.qualityWindow_mask).hide() }), this.qualityOn = !1) : (this.qualityWindow_mask.show(), this.qualityWindow.stop().delay(a).animate({ top: 0 }, 500), this.qualityOn = !0)
    };
    d.fn.togglePopup = function() { this.adOn ? (this.adImg.animate({ opacity: 0 }, 0, function() { b(this).hide() }), this.adOn = !1) : this.adOn || (this.adImg.show(), this.adImg.animate({ opacity: 1 }, 500), this.adOn = !0) };
    d.fn.toggleShuffleBtn = function() {
        this.shuffleBtnEnabled ? (this.removeColorAccent(b("#elite_vp_shuffleBtn")),
            this.shuffleBtnEnabled = !1) : (b(this.mainContainer).find(".fa-elite-random").addClass("elite_vp_themeColorText"), this.shuffleBtnEnabled = !0, this.setColorAccent(this.options.colorAccent, b("#elite_vp_shuffleBtn")))
    };
    d.fn.toggleQualityBtn = function() { this.qualityBtnEnabled ? (this.removeColorAccent(b("#elite_vp_qualityBtn")), this.qualityBtnEnabled = !1) : (b(this.mainContainer).find(".fa-elite-cog").addClass("elite_vp_themeColorText"), this.qualityBtnEnabled = !0, this.setColorAccent(this.options.colorAccent, b("#elite_vp_qualityBtn"))) };
    d.fn.toggleShareWindow = function() { this.shareOn ? (this.shareOn = !1, b(this.shareWindow).stop().animate({ right: -this.shareWindow.width() }, 300, function() { b(this).hide() })) : (this.shareWindow.show(), b(this.shareWindow).stop().animate({ right: this.screenBtnsWindow.width() }, 300), this.shareOn = !0) };
    d.fn.togglePlayAD = function() { this.videoPlayingAD ? (this.videoAD.pause(), this.videoPlayingAD = !1, this.toggleAdPlayBox.show()) : (this.videoAD.play(), this.videoPlayingAD = !0, this.toggleAdPlayBox.hide()) };
    d.fn.toggleEmbedWindow =
        function() { var a = this;
            this.embedOn ? (b(this.embedWindow).stop().animate({ top: -this.embedWindow.height() }, 200, function() { b(this).hide();
            a.clip.hide();
            a.clip2.hide();
            a.clip.destroy();
            a.clip2.destroy() }), this.embedOn = !1) : (b(this.embedWindow).show(), b(this.embedWindow).stop().animate({ top: 0 }, 500, function() { a.attachZeroClipboard();
            a.clip.show();
            a.clip2.show() }), this.embedOn = !0) };
    d.fn.fullScreen = function(a) {
        if (a) {
            if (this.element.addClass("elite_vp_fullScreen"), this.elementAD.addClass("elite_vp_fullScreen"),
            b(this.mainContainer).find(".fa-elite-expand").removeClass("fa-elite-expand").addClass("fa-elite-compress"), b(this.fsEnterADBox).find(".fa-elite-expandAD").removeClass("fa-elite-expandAD").addClass("fa-elite-compressAD"), this._playlist.hidePlaylist(), this.element.width(window.innerWidth), this.element.height(window.innerHeight), this.elementAD.width(window.innerWidth), this.elementAD.height(window.innerHeight), this.mainContainer.width(window.innerWidth), this.mainContainer.height(window.innerHeight),
            this.mainContainer.css("position", "fixed"), this.mainContainer.css("left", 0), this.mainContainer.css("top", 0), this.mainContainer.parent().css("zIndex", 999999), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || this.element.css({ zIndex: 555558 }), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType ? this.element.css({ zIndex: 555558 }) : ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType ||
                "Vimeo" == this.options.videoType) && this.element.css({ zIndex: 555556 }), "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds) this._playlist.videoAdPlayed ? this.elementAD.css({ zIndex: 555557 }) : this.elementAD.css({ zIndex: 555559 })
        } else {
            this._playlist.showPlaylist();
            this.element.removeClass("elite_vp_fullScreen");
            this.mainContainer.css("position", "absolute");
            this.mainContainer.parent().css("zIndex", 1);
            this.elementAD.removeClass("elite_vp_fullScreen");
            b(this.mainContainer).find(".fa-elite-compress").removeClass("fa-elite-compress").addClass("fa-elite-expand");
            b(this.fsEnterADBox).find(".fa-elite-compressAD").removeClass("fa-elite-compressAD").addClass("fa-elite-expandAD");
            this.stretching && (this.stretching = !1, this.toggleStretch());
            "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? this.element.css({ zIndex: 455558 }) : this.element.css({ zIndex: 455556 });
            if ("yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds) this._playlist.videoAdPlayed ? this.elementAD.css({ zIndex: 455557 }) :
            this.elementAD.css({ zIndex: 455559 });
            "fitToContainer" == this.options.playerLayout || "fitToBrowser" == this.options.playerLayout ? (this.mainContainer.width("100%"), this.mainContainer.height("100%")) : "fixedSize" == this.options.playerLayout && (this.mainContainer.width(this.options.videoPlayerWidth), this.mainContainer.height(this.options.videoPlayerHeight));
            this.mainContainer.css("left", "");
            this.mainContainer.css("top", "");
            this.resizeAll()
        }
        this.resizeVideoTrack();
        this.positionOverScreenButtons(a);
        this.positionLogo();
        this.positionPopup();
        this.resizeBars();
        "undefined" == typeof a && (a = !0);
        this.inFullScreen = a
    };
    d.fn.toggleFullScreen = function() {
        if (THREEx.FullScreen.available())
            if (THREEx.FullScreen.activated()) {
            "Fullscreen native" == this.options.fullscreen && THREEx.FullScreen.cancel();
            "Fullscreen browser" == this.options.fullscreen && this.fullScreen(!this.inFullScreen);
            "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? this.element.css({ zIndex: 455558 }) : this.element.css({ zIndex: 455556 });
            if ("yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds) this._playlist.videoAdPlayed ? this.elementAD.css({ zIndex: 455557 }) : this.elementAD.css({ zIndex: 455559 });
            this.mainContainer.css("zIndex", 999999)
            } else {
            if ("Fullscreen native" == this.options.fullscreen && (THREEx.FullScreen.request(), this.mainContainer.parent().css("zIndex", 999999), this.mainContainer.css("zIndex", 2147483647), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" !=
                    this.options.videoType || this.element.css({ zIndex: 555558 }), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType ? this.element.css({ zIndex: 555558 }) : ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType || "Vimeo" == this.options.videoType) && this.element.css({ zIndex: 555556 }), "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds)) {
                if (!this.videoAdStarted) return;
                this._playlist.videoAdPlayed ?
                    this.elementAD.css({ zIndex: 555557 }) : this.elementAD.css({ zIndex: 555559 })
            }
            "Fullscreen browser" == this.options.fullscreen && this.fullScreen(!this.inFullScreen)
            }
        else THREEx.FullScreen.available() || this.fullScreen(!this.inFullScreen)
    };
    d.fn.seek = function(a) { this.video.setCurrentTime(a) };
    d.fn.setVolume = function(a) { this.video.setVolume(a) };
    d.fn.getVolume = function() { return this.video.getVolume() };
    d.fn.mute = function(a) { "undefined" == typeof a && (a = !0);
        this.setVolume(a ? 1 : 0) };
    d.fn.remove = function() { this.element.remove() };
    d.fn.bind = function() { this.videoElement.bind.apply(this.videoElement, arguments) };
    d.fn.one = function() { this.videoElement.one.apply(this.videoElement, arguments) };
    d.fn.trigger = function() { this.videoElement.trigger.apply(this.videoElement, arguments) };
    for (var m = "click dblclick onerror onloadeddata oncanplay ondurationchange ontimeupdate onprogress onpause onplay onended onvolumechange".split(" "), k = 0; k < m.length; k++)(function() {
        var a = m[k],
            c = a.replace(/^(on)/, "");
        d.fn[a] = function() {
            var a = b.makeArray(arguments);
            a.unshift(c);
            this.bind.apply(this, a)
        }
    })();
    d.fn.triggerReady = function() { this.loaded = !0;
        b("video").each(function() { enableInlineVideo(this) }) };
    d.fn.setupElement = function() {
        this.mainContainer = b("<div />");
        this.mainContainer.addClass("elite_vp_mainContainer");
        "fitToContainer" == this.options.playerLayout || "fitToBrowser" == this.options.playerLayout ? this.mainContainer.css({ width: "100%", height: "100%", position: "absolute", background: "#000000", zIndex: 999999 }) : "fixedSize" == this.options.playerLayout && this.mainContainer.css({
            width: this.options.videoPlayerWidth,
            height: this.options.videoPlayerHeight,
            position: "absolute",
            background: "#000000",
            zIndex: 999999
        });
        switch (this.options.videoPlayerShadow) {
            case "effect1":
            this.mainContainer.addClass("elite_vp_effect1"); break;
            case "effect2":
            this.mainContainer.addClass("elite_vp_effect2"); break;
            case "effect3":
            this.mainContainer.addClass("elite_vp_effect3"); break;
            case "effect4":
            this.mainContainer.addClass("elite_vp_effect4"); break;
            case "effect5":
            this.mainContainer.addClass("elite_vp_effect5"); break;
            case "effect6":
            this.mainContainer.addClass("elite_vp_effect6") } this.parent.append(this.mainContainer);
        this.options.lightBox && (this.mainContainerBG = b("<div />"), this.mainContainerBG.addClass("elite_vp_mainContainerBG"), this.mainContainer.append(this.mainContainerBG));
        this.element = b("<div />");
        this.element.addClass("elite_vp_videoPlayer");
        this.mainContainer.append(this.element);
        this.ytWrapper = b("<div></div>");
        this.ytWrapper.addClass("elite_vp_ytWrapper");
        this.element.append(this.ytWrapper);
        this.ytPlayer = b("<div></div>");
        this.ytPlayer.attr("id", this.options.instanceName + "youtube");
        this.ytWrapper.append(this.ytPlayer);
        this.imageWrapper = b("<div></div>");
        this.imageWrapper.addClass("elite_vp_imageWrapper");
        this.element.append(this.imageWrapper);
        this.imageDisplayed = document.createElement("img");
        this.imageWrapper.append(this.imageDisplayed);
        b(".elite_vp_imageWrapper img").attr("id", "elite_vp_imageDisplayed");
        this.gradientbottom = b("<div />");
        this.gradientbottom.addClass("gradient-bottom");
        this.element.append(this.gradientbottom);
    };
    d.fn.setupElementAD = function() { this.elementAD = b("<div />");
        this.elementAD.addClass("elite_vp_videoPlayerAD");
        this.mainContainer.append(this.elementAD) };
    d.fn.idle = function(a, c) {
        var d = this;
        c ? "elite_vp_playing" ==
            this.state && (this.options.showAllControls || this.controls.hide(), this.controls.stop().animate({ bottom: -50 }, 300), d.progressIdleTrack.stop().delay(800).animate({ bottom: 0 }, 300), this.screenBtnsWindow.stop().animate({ right: -44 }, 300), this.logoImg.stop().animate({ opacity: 0 }, 300), d.nowPlayingTitle.stop().animate({ left: -d.nowPlayingTitleW }, 300), d.shareOn = !0, d.toggleShareWindow(), d.qualityOn = !0, d.toggleQualityWindow(), d.qualityBtnEnabled = !0, d.toggleQualityBtn(), b(d.toolTip).stop().animate({ opacity: 0 }, 50, function() { d.toolTip.hide() }),
            d.invisibleWrapper.show()) : (this.progressIdleTrack.stop().animate({ bottom: -6 }, 100, function() { d.options.showAllControls || d.controls.hide();
            d.controls.stop().animate({ bottom: 0 }, 300) }), this.screenBtnsWindow.stop().animate({ right: 0 }, 400), this.logoImg.stop().animate({ opacity: 1 }, 400), d.nowPlayingTitle.stop().animate({ left: 0 }, 400), d.invisibleWrapper.hide())
    };
    d.fn.change = function(a) { this.state = a;
        this.element && (this.element.attr("data-state", this.state), this.element.trigger("state.videoPlayer", this.state)) };
    d.fn.setupHTML5Video = function() {
        this.element && this.element.append(this.videoElement);
        this.video = this.videoElement[0];
        this.element && (this.element.width(this.playerWidth), this.element.height(this.playerHeight));
        var a = this;
        this.video.loadSources = function(b) { a.videoElement.empty(); for (var c in b)
            if (-1 != b[c].src.indexOf("m3u8")) { if (Hls.isSupported()) { var d = new Hls;
                    d.loadSource(b[c].src);
                    d.attachMedia(a.video);
                    d.on(Hls.Events.MANIFEST_PARSED, function() {}) } } else a.videoElement.attr("src", b[c].src);
            a.video.load() };
        this.video.getStartTime = function() { return this.startTime || 0 };
        this.video.getEndTime = function() { return Infinity == this.duration && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration };
        this.video.getCurrentTime = function() { try { return this.currentTime } catch (c) { return 0 } };
        a = this;
        this.video.setCurrentTime = function(a) { this.currentTime = a };
        this.video.getVolume = function() { return this.volume };
        this.video.setVolume = function(b) {
            1 < b && (b = 1);
            this.volume = a.options.showAllControls ?
            b : 1
        };
        this.videoElement.dblclick(b.proxy(function() { this.toggleFullScreen() }, this));
        this.videoElement.bind(this.CLICK_EV, b.proxy(function() { this.togglePlay() }, this));
        this.triggerReady()
    };
    d.fn.setupHTML5VideoAD = function() {
        this.elementAD && this.elementAD.append(this.videoElementAD);
        this.videoAD = this.videoElementAD[0];
        this.elementAD && (this.elementAD.width(0), this.elementAD.height(0));
        var a = this;
        this.videoAD.loadSources = function(b) {
            a.videoElementAD.empty();
            for (var c in b)
            if (-1 != b[c].src.indexOf("m3u8")) {
                if (Hls.isSupported()) {
                    var d =
                        new Hls;
                    d.loadSource(b[c].src);
                    d.attachMedia(a.videoAD);
                    d.on(Hls.Events.MANIFEST_PARSED, function() {})
                }
            } else a.videoElementAD.attr("src", b[c].src);
            a.videoAD.load();
            a.isMobile.any() ? a.videoPlayingAD = !0 : a.videoPlayingAD = !1;
            a.togglePlayAD()
        };
        this.videoAD.getStartTime = function() { return this.startTime || 0 };
        this.videoAD.getEndTime = function() { if (!isNaN(this.duration)) return Infinity == this.duration && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration };
        this.videoAD.getCurrentTime =
            function() { try { return this.currentTime } catch (c) { return 0 } };
        this.videoAD.setCurrentTime = function(a) { this.currentTime = a };
        this.videoAD.getVolume = function() { return this.volume };
        this.videoAD.setVolume = function(a) { this.volume = a };
        this.videoElementAD.dblclick(b.proxy(function() { this.toggleFullScreen() }, this));
        this.triggerReady();
        this.videoElementAD.bind(this.CLICK_EV, b.proxy(function() {
            this.options.showGlobalPrerollAds ? "" != this.options.globalPrerollAdsGotoLink && "globalPrerollAdsGotoLink" != this.options.globalPrerollAdsGotoLink &&
            (window.open(this.options.globalPrerollAdsGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()) : ("" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "prerollGotoLink" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD && (this.prerollActive && window.open(this._playlist.videos_array[this._playlist.videoid].prerollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink &&
                "midrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].midrollAD && (this.midrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].midrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "postrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].postrollAD &&
                (this.postrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].postrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()))
        }, this))
    };
    d.fn.setupButtonsOnScreen = function() {
        var a = this;

        this.playerui = b("<div></div>");
        this.playerui.addClass("player-ui").addClass("fade").addClass("d-none").addClass("d-md-block");
        this.element && this.element.append(this.playerui);
        
        this.infoicon = b("<div></div>").addClass("info-icon");
        this.playerui.append(this.infoicon);
        
        this.textmask = b("<div></div>").addClass("text-mask");
        this.playerui.append(this.textmask);
        this.textmask.text(a.options.playeruitext+" ｜");

        this.textmaskcta = b("<a></a>").addClass("upgrade");
        this.textmask.append(this.textmaskcta);
        this.textmaskcta.text(a.options.playeruicta);

        this.hinttimer = b("<div></div>").addClass("hint-timer");
        this.playerui.append(this.hinttimer);

        this.hinttimertext = b("<div>本段節目將於</div>").addClass("text");
        this.hinttimer.append(this.hinttimertext);

        this.hinttimertitle = b("<div></div>").addClass("title");
        this.hinttimer.append(this.hinttimertitle);
        this.hinttimertitle.text(a.options.hinttimertitletext);


        this.screenBtnsWindow = b("<div></div>");
        this.screenBtnsWindow.addClass("elite_vp_screenBtnsWindow");
        this.element && this.element.append(this.screenBtnsWindow);
        if(isMobile.any()){
            this.screenBtnsWindow.hide();
        }else{
            this.options.showAllControls || this.screenBtnsWindow.hide();
        }
        this.playlistBtn = b("<div />").addClass("elite_vp_playlistBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen");
        this.element && this.screenBtnsWindow.append(this.playlistBtn);
        this.playlistBtnIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-indent");
        this.playlistBtn.append(this.playlistBtnIcon);

        this.shareBtn = b("<div />").addClass("elite_vp_shareBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen");
        this.element && this.screenBtnsWindow.append(this.shareBtn);
        this.shareBtnIcon =
            b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-share-square-o");
        this.shareBtn.append(this.shareBtnIcon);

        this.embedBtn = b("<div />").addClass("elite_vp_embedBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen");
        this.element && this.screenBtnsWindow.append(this.embedBtn);
        this.embedBtnIcon = b("<span />").attr("aria-hidden",
            "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-chain");
        this.embedBtn.append(this.embedBtnIcon);

        this.infoBtn = b("<div />").addClass("elite_vp_infoBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen");
        this.playlistBtn.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.shareBtn.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.embedBtn.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.infoBtn.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.element && this.screenBtnsWindow.append(this.infoBtn);
        this.infoBtnIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-info");
        this.infoBtn.append(this.infoBtnIcon);

        this.shareWindow = b("<div></div>");
        this.shareWindow.addClass("elite_vp_shareWindow");
        this.element && this.element.append(this.shareWindow);
        this.shareBtn.bind(this.CLICK_EV,
            b.proxy(function() { this.toggleShareWindow() }, this));
        this.facebookBtn = b("<div />").addClass("elite_vp_facebookBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg");
        this.element && this.shareWindow.append(this.facebookBtn);
        this.facebookBtnIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-facebook");
        this.facebookBtn.append(this.facebookBtnIcon);
        this.twitterBtn = b("<div />").addClass("elite_vp_twitterBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg");
        this.element && this.shareWindow.append(this.twitterBtn);
        this.twitterBtnIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-twitter");
        this.twitterBtn.append(this.twitterBtnIcon);
        this.mailBtn = b("<div />").addClass("elite_vp_mailBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg");
        this.element && this.shareWindow.append(this.mailBtn);
        this.mailBtnIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-google-plus");
        this.mailBtn.append(this.mailBtnIcon);
        this.shareWindow.css({ right: -this.shareWindow.width(), top: a.shareBtn.position().top + 5 }).hide();
        this.facebookBtn.bind(this.CLICK_EV, b.proxy(function() {
            a.pause();
            a.YTAPIReady && a.youtubePlayer.pauseVideo();
            var c = b(window).width() / 2 - 300,
            d = b(window).height() / 2 - 200;
            c = window.open("https://www.facebook.com/dialog/feed?app_id=787376644686729&display=popup&name=" + a.options.facebookShareName + "&link=" + a.options.facebookShareLink + "&redirect_uri=https://facebook.com&description=" +
            a.options.facebookShareDescription + "&picture=" + a.options.facebookSharePicture, "popup", "width=600, height=400, top=" + d + ", left=" + c);
            window.focus && c.focus()
        }, this));
        this.twitterBtn.bind(this.CLICK_EV, b.proxy(function() {
            a.pause();
            a.YTAPIReady && a.youtubePlayer.pauseVideo();
            var c = b(window).width() / 2 - 300,
            d = b(window).height() / 2 - 200;
            c = window.open("https://twitter.com/intent/tweet?text=" + a.options.twitterText + "&url=" + a.options.twitterLink + "&hashtags=" + a.options.twitterHashtags + "&via=" + a.options.twitterVia,
            "popup", "width=600, height=400, top=" + d + ", left=" + c);
            window.focus && c.focus()
        }, this));
        this.mailBtn.bind(this.CLICK_EV, b.proxy(function() { a.pause();
            a.YTAPIReady && a.youtubePlayer.pauseVideo(); var c = b(window).width() / 2 - 300,
            d = b(window).height() / 2 - 200;
            c = window.open("https://plus.google.com/share?url=" + a.options.googlePlus, "popup", "width=600, height=400, top=" + d + ", left=" + c);
            window.focus && c.focus() }, this));
        b(".elite_vp_shareBtn, .elite_vp_embedBtn, .elite_vp_playlistBtn, .elite_vp_infoBtn, .elite_vp_infoBtn, .elite_vp_facebookBtn, .elite_vp_twitterBtn, .elite_vp_mailBtn").mouseover(function() { b(this).find(".elite-icon-overScreen").removeClass("elite-icon-overScreen").addClass("elite-icon-overScreen-hover") });
        b(".elite_vp_shareBtn, .elite_vp_embedBtn, .elite_vp_playlistBtn, .elite_vp_infoBtn, .elite_vp_infoBtn, .elite_vp_facebookBtn, .elite_vp_twitterBtn, .elite_vp_mailBtn").mouseout(function() { b(this).find(".elite-icon-overScreen-hover").removeClass("elite-icon-overScreen-hover").addClass("elite-icon-overScreen") });
        b(".elite_vp_btnOverScreen").mouseover(function() { b(this).css("background", a.options.colorAccent) });
        b(".elite_vp_btnOverScreen").mouseout(function() { b(this).css("background", "") });
        "No" == a.options.shareShow &&
            this.shareBtn.hide();
        "No" == a.options.embedShow && this.embedBtn.hide();
        "No" == a.options.infoShow && this.infoBtn.hide();
        "No" == a.options.facebookShow && this.facebookBtn.hide();
        "No" == a.options.twitterShow && this.twitterBtn.hide();
        "No" == a.options.mailShow && this.mailBtn.hide();
        buttonsMargin = 5;
        this.positionOverScreenButtons();
        this.playlistBtn.bind(this.CLICK_EV, function() { a.toggleStretch();
            a.resizeAll() })
    };
    d.fn.toggleStretch = function() {
        this.stretching ? (this.shrinkPlayer(), this.stretching = !1, this.playlistBtnIcon.removeClass("fa-elite-dedent").addClass("fa-elite-indent")) :
            (this.stretchPlayer(), this.stretching = !0, this.playlistBtnIcon.removeClass("fa-elite-indent").addClass("fa-elite-dedent"));
        this.resizeVideoTrack();
        this.positionOverScreenButtons();
        this.positionLogo();
        this.positionPopup();
        this.resizeBars();
        this.resizeAll()
    };
    d.fn.stretchPlayer = function() { this.element.width(this.options.videoPlayerWidth) };
    d.fn.shrinkPlayer = function() { this.element.width(this.playerWidth) };
    d.fn.positionOverScreenButtons = function(a) {
        this.element && (document.webkitIsFullScreen || document.fullscreenElement ||
            document.mozFullScreen || a ? this.playlistBtn.hide() : "Right playlist" == this.options.playlist || "Bottom playlist" == this.options.playlist ? this.playlistBtn.show() : this.playlistBtn.hide())
    };
    d.fn.hideControls = function() {
        var a = this;
        b(this.element).hover(function() {
            a.options.showAllControls || a.controls.hide();
            a.controls.stop().animate({ bottom: 0 }, 300);
            a.progressIdleTrack.stop().animate({ bottom: -6 }, 100);
            a.screenBtnsWindow.stop().animate({ right: 0 }, 300);
            a.logoImg.stop().animate({ opacity: 1 }, 300);
            a.nowPlayingTitle.stop().animate({ left: 0 },
            300)
        }, function() { a.options.showAllControls || a.controls.hide();
            a.controls.stop().animate({ bottom: -50 }, 300);
            a.progressIdleTrack.stop().delay(800).animate({ bottom: 0 }, 300);
            a.screenBtnsWindow.stop().animate({ right: -44 }, 300);
            a.logoImg.stop().animate({ opacity: 0 }, 300);
            a.nowPlayingTitle.stop().animate({ left: -a.nowPlayingTitleW }, 300) })
    };
    d.fn.setupButtons = function() {
        var a = this;
        this.playBtn = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-play").addClass("elite_vp_playerElement").attr("id", "elite_vp_playBtn");
        this.playBtnBg = b("<div />").addClass("elite_vp_playBtnBg").addClass("elite_vp_playerElement").bind(a.CLICK_EV, function() { a.togglePlay() });
        this.controls.append(this.playBtnBg);
        this.playBtnBg.append(this.playBtn);
        this.rewindBtnWrapper = b("<div />").addClass("elite_vp_rewindBtnWrapper").addClass("elite_vp_playerElement");
        this.controls.append(this.rewindBtnWrapper);
        this.SkipNextBtn = b("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_rewindBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-skipnext");
        this.rewindBtnWrapper.append(this.SkipNextBtn);
        this.qualityBtnWrapper = b("<div />").addClass("elite_vp_qualityBtnWrapper").addClass("elite_vp_playerElement").bind(a.CLICK_EV, function() { a.toggleQualityBtn();
            a.toggleQualityWindow();
            b(this).children(":first").toggleClass("fa-elite-rotate-90") }).hide();
        "youtube" != a._playlist.videos_array[a._playlist.videoid].videoType && "YouTube" != a.options.videoType || this.qualityBtnWrapper.show();
        this.controls.append(this.qualityBtnWrapper);
        this.qualityBtn = b("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_qualityBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-cog");
        this.qualityBtnWrapper.append(this.qualityBtn);
        this.HD_indicator = b("<div />").addClass("elite_vp_HD_indicator").addClass("elite-icon-general").addClass("elite_vp_qualityWindowText").text("HD").hide();
        this.qualityBtnWrapper.append(this.HD_indicator);
        this.downloadBtnLink = b("<a />").attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4).attr("download", "").hide();
        this.downloadBtnWrapper = b("<div />").addClass("elite_vp_downloadBtnWrapper").addClass("elite_vp_playerElement").bind(a.CLICK_EV, function() {});
        this.downloadBtnLink.append(this.downloadBtnWrapper);
        this.downloadBtn = b("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_downloadBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " +
            this.options.instanceTheme).addClass("fa-elite-download");
        this.downloadBtnWrapper.append(this.downloadBtn);
        "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || "yes" != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download || this.downloadBtnLink.show();
        this.controls.append(this.downloadBtnLink);
        "Yes" == a.options.shuffle ? (this.shuffleBtnEnabled = !1, this.toggleShuffleBtn()) : this.shuffleBtnEnabled = !1;
        this.playButtonScreen =
            b("<div />");
        this.playButtonScreen.addClass("elite_vp_playButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + this.options.instanceTheme).hide();
        this.playButtonScreen.bind(this.CLICK_EV, b.proxy(function() { this.togglePlay() }, this));
        if (e.iOS() && this.options.autoplay) {
            var c = !0;
            this.iOSVolumeButtonScreen = b("<div />");
            this.iOSVolumeButtonScreen.addClass("elite_vp_iOSVolumeButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-iOSBtnScreen " +
            this.options.instanceTheme).addClass("pulse");
            this.iOSVolumeButtonScreen.bind(this.CLICK_EV, b.proxy(function() { c && (this.removeiOSAutoplay(), this.iOSVolumeButtonScreen.hide(), c = !1) }, this));
            this.element && this.element.append(this.iOSVolumeButtonScreen)
        }
        this.element && this.element.append(this.playButtonScreen);


        this.CsBtnWrapper = b("<div />").addClass("elite_vp_CsBtnWrapper");
        this.controls.append(this.CsBtnWrapper);

        this.pagemode2Btn = b("<span />").attr("aria-hidden", "true").addClass("icon").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("pcmode").addClass("elite_vp_playerCustom").attr("onclick","parent.switchmode2();");
        this.element && this.CsBtnWrapper.append(this.pagemode2Btn);

        this.pagemode3Btn = b("<span />").attr("aria-hidden", "true").addClass("icon").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("mvmode").addClass("elite_vp_playerCustom").attr("onclick","parent.switchmode3();");;
        this.element && this.CsBtnWrapper.append(this.pagemode3Btn);

        this.pagemode1Btn = b("<span />").attr("aria-hidden", "true").addClass("icon").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("tvmode").addClass("elite_vp_playerCustom").attr("onclick","parent.switchmode1();");;
        this.element && this.CsBtnWrapper.append(this.pagemode1Btn);


        this.fsBtnWrapper = b("<div />").addClass("elite_vp_fsBtnWrapper").addClass("elite_vp_playerElement").bind(this.CLICK_EV, b.proxy(function() { this.toggleFullScreen() }, this));
        this.controls.append(this.fsBtnWrapper);

        this.fsEnter = b("<span />");
        this.fsEnter.attr("aria-hidden", "true").attr("id", "elite_vp_fsBtn").addClass("icon").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-expand");
        this.fsBtnWrapper.append(this.fsEnter);
        
        this.fsEnterADBox = b("<div />").addClass("elite_vp_fsEnterADBox").hide();
        this.elementAD.append(this.fsEnterADBox);
        this.fsEnterAD = b("<span />");
        this.fsEnterAD.attr("aria-hidden", "true").addClass("icon").addClass("fa-elite-expandAD").bind(this.CLICK_EV,
            b.proxy(function() { this.toggleFullScreen() }, this)).mouseover(function() { b(this).stop().animate({ opacity: .75 }, 200) }).mouseout(function() { b(this).stop().animate({ opacity: 1 }, 200) });
        this.fsEnterADBox.append(this.fsEnterAD);
        this.playButtonScreen.mouseover(function() { b(this).stop().animate({ opacity: .85 }, 200) });
        this.playButtonScreen.mouseout(function() { b(this).stop().animate({ opacity: 1 }, 200) })
    };
    d.fn.createInfoWindow = function() {
        this.infoWindow = b("<div />");
        this.infoWindow.addClass("elite_vp_infoWindow");
        this.infoWindow.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.element && this.element.append(this.infoWindow);
        this.infoBtnClose = b("<div />");
        this.infoBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText");
        this.infoWindow.append(this.infoBtnClose);
        this.infoBtnClose.css({ bottom: 0 });
        this.infoBtnCloseIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor");
        this.infoBtnClose.append(this.infoBtnCloseIcon);
        this.infoBtn.bind(this.CLICK_EV,
            b.proxy(function() { this.toggleInfoWindow() }, this));
        this.infoBtnClose.bind(this.CLICK_EV, b.proxy(function() { this.toggleInfoWindow() }, this));
        this.infoBtnClose.mouseover(function() { b(this).stop().animate({ opacity: .7 }, 200) });
        this.infoBtnClose.mouseout(function() { b(this).stop().animate({ opacity: 1 }, 200) })
    };
    d.fn.createQualityWindow = function() {
        var a = this;
        this.qualityWindow_mask = b("<div />");
        this.qualityWindow_mask.addClass("elite_vp_qualityWindowMask");
        this.element && this.element.append(this.qualityWindow_mask);
        this.qualityWindow = b("<div />");
        this.qualityWindow.addClass("elite_vp_qualityWindow");
        this.qualityWindow.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.element && this.qualityWindow_mask.append(this.qualityWindow);
        this.qualityWindow_mask.css({ right: 144, bottom: this.controls.height() + 2 }).hide();
        this.qualityWindow.css({ top: 200 });
        this.qualityWindow.append('<div class="elite_vp_list"><div class="elite_vp_qualityListItem elite_vp_playerElement hd1080"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' +
            this.options.instanceTheme + '">1080p</p><p class="elite_vp_qualityHD elite-icon-general elite_vp_qualityWindowText">HD</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement hd720"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">720p</p><p class="elite_vp_qualityHD elite-icon-general elite_vp_qualityWindowText">HD</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement large"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' +
            this.options.instanceTheme + '">480p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement medium"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">360p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement small"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">240p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement tiny"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' +
            this.options.instanceTheme + '">144p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement default"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">auto</p></div></div>');
        this.qualityCheck = b("<span />").attr("aria-hidden", "true").attr("id", "qualityCheck").addClass("fa-elite").addClass("fa-elite-check").addClass("elite_vp_qualityCheck").addClass("elite_vp_qualityListItem_activeColor " + this.options.instanceTheme);
        this.qualityListItem = b(".elite_vp_qualityListItem");
        b(this.qualityListItem).click(function() {
            b(".elite_vp_qualityWindow").find(".elite_vp_qualityListItem_activeColor " + a.options.instanceTheme).removeClass("elite_vp_qualityListItem_activeColor " + a.options.instanceTheme);
            b(this).addClass("elite_vp_qualityListItem_activeColor " + a.options.instanceTheme);
            b(this).append(a.qualityCheck);
            b(this).hasClass("hd1080") && (a.selectedYoutubeQuality = "hd1080", a.HD_indicator.show());
            b(this).hasClass("hd720") && (a.selectedYoutubeQuality =
            "hd720", a.HD_indicator.show());
            b(this).hasClass("large") && (a.selectedYoutubeQuality = "large", a.HD_indicator.hide());
            b(this).hasClass("medium") && (a.selectedYoutubeQuality = "medium", a.HD_indicator.hide());
            b(this).hasClass("small") && (a.selectedYoutubeQuality = "small", a.HD_indicator.hide());
            b(this).hasClass("tiny") && (a.selectedYoutubeQuality = "tiny", a.HD_indicator.hide());
            b(this).hasClass("default") && (a.selectedYoutubeQuality = "default");
            a.qualityOn = !0;
            a.toggleQualityWindow(350);
            a.toggleQualityBtn();
            a.updateYoutubeQuality(a.selectedYoutubeQuality)
        });
        a.initStateYTQualityMenu()
    };
    d.fn.initStateYTQualityMenu = function() { switch (this.options.youtubeQuality) {
            case "hd1080":
            b(".hd1080").append(this.qualityCheck);
            this.HD_indicator.show(); break;
            case "hd720":
            b(".hd720").append(this.qualityCheck);
            this.HD_indicator.show(); break;
            case "large":
            b(".large").append(this.qualityCheck); break;
            case "medium":
            b(".medium").append(this.qualityCheck); break;
            case "small":
            b(".small").append(this.qualityCheck); break;
            case "tiny":
            b(".default").append(this.qualityCheck); break;
            case "default":
            b(".default").append(this.qualityCheck) } };
    d.fn.updateYoutubeQuality = function(a) { if (this.youtubePlayer.getPlaybackQuality() != a)
            if ("unknown" == this.youtubePlayer.getPlaybackQuality()) this.youtubePlayer.setPlaybackQuality(a);
            else { var b = this.youtubePlayer.getCurrentTime();
            this.youtubePlayer.stopVideo();
            this.youtubePlayer.setPlaybackQuality(a);
            this.youtubePlayer.playVideo();
            this.youtubePlayer.seekTo(b) } };
    d.fn.onPlayerPlaybackQualityChange = function() {};
    d.fn.createEmbedWindow = function() {
        this.embedWindow = b("<div />");
        this.embedWindow.addClass("elite_vp_embedWindow elite_vp_bg " +
            this.options.instanceTheme);
        this.element && this.element.append(this.embedWindow);
        this.embedBtnClose = b("<div />");
        this.embedBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText");
        this.embedWindow.append(this.embedBtnClose);
        this.embedBtnClose.css({ bottom: 0 });
        this.embedWindow.css({ top: -this.embedWindow.height() });
        this.embedWindow.hide();
        this.embedBtnCloseIcon = b("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor");
        this.embedBtnClose.append(this.embedBtnCloseIcon);
        this.embedBtn.bind(this.CLICK_EV, b.proxy(function() { this.toggleEmbedWindow() }, this));
        this.embedBtnClose.bind(this.CLICK_EV, b.proxy(function() { this.toggleEmbedWindow() }, this));
        this.embedBtnClose.mouseover(function() { b(this).stop().animate({ opacity: .7 }, 200) });
        this.embedBtnClose.mouseout(function() { b(this).stop().animate({ opacity: 1 }, 200) })
    };
    d.fn.setupVideoTrack = function() {
        var a = this;
        this.videoTrack = b("<div />");
        this.videoTrack.addClass("elite_vp_videoTrack").addClass("elite_vp_videoTrack " + this.options.instanceTheme).addClass("elite_vp_playerElement");
        this.controls.append(this.videoTrack);
        this.progressIdleTrack = b("<div />");
        this.progressIdleTrack.addClass("elite_vp_progressIdleTrack").addClass("elite_vp_progressIdleTrack " + this.options.instanceTheme);
        this.options.showAllControls || this.progressIdleTrack.hide();
        this.progressIdleTrack.css({ bottom: -6 });
        this.element.append(this.progressIdleTrack);
        this.progressIdleDownload = b("<div />");
        this.progressIdleDownload.addClass("elite_vp_progressIdleDownload").addClass("elite_vp_progressIdleDownload " + this.options.instanceTheme);
        this.progressIdleDownload.css("width", 0);
        this.progressIdleTrack.append(this.progressIdleDownload);
        this.progressIdle = b("<div />");
        this.progressIdle.addClass("elite_vp_progressIdle elite_vp_themeColor");
        this.progressIdleTrack.append(this.progressIdle);
        this.progressIdle.css("width", 0);
        this.progressADBg = b("<div />");
        this.progressADBg.addClass("elite_vp_progressADBg").hide();
        this.elementAD.append(this.progressADBg);
        this.progressAD = b("<div />");
        this.progressAD.addClass("elite_vp_progressAD");
        this.progressADBg.append(this.progressAD);
        this.videoTrackDownload = b("<div />");
        this.videoTrackDownload.addClass("elite_vp_videoTrackDownload").addClass("elite_vp_videoTrackDownload " + this.options.instanceTheme);
        this.videoTrackDownload.css("width", 0);
        this.videoTrack.append(this.videoTrackDownload);
        this.videoTrackProgress = b("<div />");
        this.videoTrackProgress.addClass("elite_vp_Progress elite_vp_themeColor");
        this.videoTrackProgress.css("width", 0);
        this.videoTrack.append(this.videoTrackProgress);
        this.toolTip = b("<div />");
        this.toolTip.addClass("elite_vp_toolTip elite_vp_controlsColor " +
            this.options.instanceTheme);
        this.toolTip.addClass("elite_vp_bg " + this.options.instanceTheme);
        this.toolTip.hide();
        this.toolTip.css({ opacity: 0, top: a.controls.position().top - a.toolTip.outerHeight() - 2 });
        this.mainContainer.append(this.toolTip);
        b(this.mainContainer).find(".elite_vp_playerElement").bind("mousemove mouseenter click", function(c) {
            a.toolTip.css("left", "");
            a.toolTip.css("right", "");
            a.toolTip.css("bottom", "");
            a.toolTip.css("top", "");
            var d = c.pageX - b(this).offset().left - a.toolTip.outerWidth() / 2;
            if (b(this).hasClass("elite_vp_videoTrack " + a.options.instanceTheme)) {
                c = c.pageX - a.videoTrack.offset().left;
                var e = c / a.videoTrack.width();
                "youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType ? a.toolTip.text(a.secondsFormat(a.youtubePlayer.getDuration() * e)) : ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType || "HTML5 (self-hosted)" == a.options.videoType) && a.toolTip.text(a.secondsFormat(a.video.duration * e));
                a.toolTip.css("left", d + b(this).position().left);
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2);
                0 >= c ? a.toolTip.hide() : a.toolTip.show()
            } else 

            b(this).hasClass("elite_vp_volumeTrack " + a.options.instanceTheme) ? (c = c.pageX - a.volumeTrack.offset().left, e = c / a.volumeTrack.width(), 0 <= c && c <= a.volumeTrack.width() && a.toolTip.text(a.options.volumeTooltipTxt + Math.ceil(100 * e) + "%"), a.toolTip.css("left", d + b(this).position().left),
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-play") ? (a.toolTip.text(a.options.playBtnTooltipTxt), a.toolTip.css("left", 0), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-pause") ? (a.toolTip.text(a.options.pauseBtnTooltipTxt), a.toolTip.css("left", 0), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-skipnext") ? (a.toolTip.text(a.options.skipNextBtnTooltipTxt), a.toolTip.css("left", d + b(this).position().left),
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-download") ? (a.toolTip.text(a.options.downloadVideoBtnTooltipTxt), a.toolTip.css("left", d + b(this).position().left), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-cog") ? (a.qualityBtnEnabled ? a.toolTip.text(a.options.qualityBtnOpenedTooltipTxt) : a.toolTip.text(a.options.qualityBtnClosedTooltipTxt), a.toolTip.css("left", d + b(this).position().left),
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-random") ? (a.shuffleBtnEnabled ? a.toolTip.text(a.options.shuffleBtnOnTooltipTxt) : a.toolTip.text(a.options.shuffleBtnOffTooltipTxt), a.toolTip.css("left", d + a._playlist.playlist.position().left + a._playlist.playlistBarInside.position().left + b(this).position().left), 
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() -a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-volume-up") ? (a.toolTip.text(a.options.muteBtnTooltipTxt), a.toolTip.css("left", d + b(this).position().left), a.toolTip.css("top", 
                a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-volume-off") ? (a.toolTip.text(a.options.unmuteBtnTooltipTxt), a.toolTip.css("left", d + b(this).position().left), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("fa-elite-expand") ? (a.toolTip.text(a.options.fullscreenBtnTooltipTxt), a.toolTip.css("left", a.element.width() - a.toolTip.outerWidth()-15), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("fa-elite-compress") ? (a.toolTip.text(a.options.exitFullscreenBtnTooltipTxt), a.toolTip.css("left", a.element.width() - a.toolTip.outerWidth()-15), 
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("elite_vp_infoBtn") ? (a.toolTip.text(a.options.infoBtnTooltipTxt), a.toolTip.css("left", a.screenBtnsWindow.position().left - a.toolTip.outerWidth()), 
                a.toolTip.css("top", b(this).position().top + b(this).outerHeight(!0) / 2 - a.toolTip.outerHeight() / 2), a.toolTip.show()) : b(this).hasClass("elite_vp_embedBtn") ? (a.toolTip.text(a.options.embedBtnTooltipTxt), a.toolTip.css("left", a.screenBtnsWindow.position().left - a.toolTip.outerWidth()), 
                a.toolTip.css("top", b(this).position().top + b(this).outerHeight(!0) /2 - a.toolTip.outerHeight() / 2), a.toolTip.show()) : b(this).hasClass("elite_vp_shareBtn") ? (a.toolTip.text(a.options.shareBtnTooltipTxt), a.toolTip.css("left", a.screenBtnsWindow.position().left - a.toolTip.outerWidth()), 
                a.toolTip.css("top", b(this).position().top + b(this).outerHeight(!0) / 2 - a.toolTip.outerHeight() / 2), a.toolTip.show()) : b(this).hasClass("elite_vp_playlistBtn") ? (a.stretching ? a.toolTip.text(a.options.playlistBtnClosedTooltipTxt) : a.toolTip.text(a.options.playlistBtnOpenedTooltipTxt), a.toolTip.css("left", a.screenBtnsWindow.position().left - a.toolTip.outerWidth()), 
                a.toolTip.css("top", b(this).position().top + b(this).outerHeight(!0) / 2 - a.toolTip.outerHeight() / 2), a.toolTip.show()) : b(this).hasClass("elite_vp_facebookBtn") ? (a.toolTip.text(a.options.facebookBtnTooltipTxt), a.toolTip.css("left", a.shareWindow.position().left + b(this).position().left + b(this).outerWidth(!0) / 2 - a.toolTip.outerWidth() / 2), 
                a.toolTip.css("top", a.shareWindow.position().top - a.toolTip.outerHeight() - 5), a.toolTip.show()) : b(this).hasClass("elite_vp_twitterBtn") ? (a.toolTip.text(a.options.twitterBtnTooltipTxt), a.toolTip.css("left", a.shareWindow.position().left + b(this).position().left + b(this).outerWidth(!0) / 2 - a.toolTip.outerWidth() / 2),              
                a.toolTip.css("top", a.shareWindow.position().top - a.toolTip.outerHeight() - 5), a.toolTip.show()) : b(this).hasClass("elite_vp_mailBtn") ? (a.toolTip.text(a.options.googlePlusBtnTooltipTxt), a.toolTip.css("left", a.shareWindow.position().left + b(this).position().left + b(this).outerWidth(!0) / 2 - a.toolTip.outerWidth() / 2), 
                a.toolTip.css("top",  a.shareWindow.position().top - a.toolTip.outerHeight() - 5), a.toolTip.show()) : b(this).children().hasClass("fa-elite-step-forward") ? (a.toolTip.text(a.options.lastBtnTooltipTxt), a.toolTip.css("left", d + a._playlist.playlist.position().left + a._playlist.playlistBarInside.position().left + b(this).position().left), 
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-step-backward") ? (a.toolTip.text(a.options.firstBtnTooltipTxt), a.toolTip.css("left", d + a._playlist.playlist.position().left + a._playlist.playlistBarInside.position().left + b(this).position().left), 
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-forward") ? (a.toolTip.text(a.options.nextBtnTooltipTxt), a.toolTip.css("left", d + a._playlist.playlist.position().left + a._playlist.playlistBarInside.position().left + b(this).position().left), 
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-backward") && (a.toolTip.text(a.options.previousBtnTooltipTxt), a.toolTip.css("left", d + a._playlist.playlist.position().left + a._playlist.playlistBarInside.position().left + b(this).position().left), 
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() - a.toolTip.outerHeight() - 2), a.toolTip.show());
            a.toolTip.stop().animate({ opacity: 1 }, 100)
        });
        b(this.CsBtnWrapper).find(".elite_vp_playerCustom").bind("mousemove mouseenter click", function(c) {
            
            a.toolTip.css("left", "");
            a.toolTip.css("right", "");
            a.toolTip.css("bottom", "");
            a.toolTip.css("top", "");
            
            var d = a.videoTrack.width() - 208;
            var g = d;

            if (b(this).hasClass("elite_vp_videoTrack " + a.options.instanceTheme)) {
                
            } else b(this).hasClass("elite_vp_volumeTrack " + a.options.instanceTheme) ? (c = c.pageX - a.volumeTrack.offset().left, e = c / a.volumeTrack.width(), 0 <= c && c <= a.volumeTrack.width() && a.toolTip.text(a.options.volumeTooltipTxt + Math.ceil(100 * e) + "%"), 

                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("pcmode") ? (a.toolTip.text("预设模式"), a.toolTip.css("left", g + 37 - a.toolTip.outerWidth()/2),
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("mvmode") ? (a.toolTip.text("剧院模式"), a.toolTip.css("left", g +74 - a.toolTip.outerWidth()/2),
                a.toolTip.css("top", a.controls.position().top - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).hasClass("tvmode") ? (a.toolTip.text("电视模式"), a.toolTip.css("left", g +133 - a.toolTip.outerWidth()/2),
                a.toolTip.css("top", a.mainContainer.height() - a._playlist.playlistBar.height() - a.toolTip.outerHeight() - 2), a.toolTip.show()) : b(this).children().hasClass("fa-elite-backward") && (a.toolTip.text(a.options.previousBtnTooltipTxt), 
                a.toolTip.show());
            a.toolTip.stop().animate({ opacity: 1 }, 100)
        });
        b(this.mainContainer).find(".elite_vp_playerElement").bind("mouseout",
            function(c) { b(a.toolTip).stop().animate({ opacity: 0 }, 50, function() { a.toolTip.hide() }) });
        this.videoTrack.bind(a.CLICK_EV, function(c) {
            if ("youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType) c = a.isMobile.any() ? c.originalEvent.changedTouches[0].pageX - a.videoTrack.offset().left : c.pageX - a.videoTrack.offset().left, a.videoTrackProgress.css("width", c), c /= a.videoTrack.width(), a.youtubePlayer.seekTo(a.youtubePlayer.getDuration() * c);
            else if ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType ||
            "HTML5 (self-hosted)" == a.options.videoType) a.preloader.stop().animate({ opacity: 1 }, 0, function() { b(this).show() }), c = a.isMobile.any() ? c.originalEvent.changedTouches[0].pageX - a.videoTrack.offset().left : c.pageX - a.videoTrack.offset().left + 10, a.videoTrackProgress.css("width", c), c /= a.videoTrack.width(), a.video.setCurrentTime(a.video.duration * c)
        });
        this.progressIdleTrack.bind(a.CLICK_EV, function(b) {
            b = a.isMobile.any() ? b.originalEvent.changedTouches[0].pageX : b.pageX;
            a.progressIdle.css("width", b);
            b /= a.progressIdleTrack.width();
            a.video.setCurrentTime(a.video.duration * b)
        });
        this.onloadeddata(b.proxy(function() {
            a.timeElapsed.text(this.secondsFormat(this.video.getCurrentTime()));
            a.timeTotal.text(this.secondsFormat(this.video.getEndTime()));
            a.resizeVideoTrack();
            a.loaded = !0;
            a.preloader.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() });
            a.onprogress(b.proxy(function(b) {
            a.html5STARTED = !0;
            0 <= a.video.buffered.length - 1 && (a.buffered = a.video.buffered.end(a.video.buffered.length - 1));
            a.downloadWidth = a.buffered / a.video.duration *
                a.videoTrack.width();
            a.videoTrackDownload.css("width", a.downloadWidth);
            a.progressIdleDownloadWidth = a.buffered / a.video.duration * a.progressIdleTrack.width();
            a.progressIdleDownload.css("width", a.progressIdleDownloadWidth)
            }, a));
            a.options.hideVideoSource && a.videoElement.empty()
        }, this));
        this.ontimeupdate(b.proxy(function() {
            pw && "AD 5 sec + Pieces After Effects project" != a.options.videos[0].title && "Pieces After Effects project" != a.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" !=
            a.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != a.options.videos[0].title && "i Create" != a.options.videos[0].title && "Swimwear Spring Summer" != a.options.videos[0].title && "PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM" != a.options.youtubePlaylistID && "Google drive video example" != a.options.videos[0].title && (this.element.css({ width: 0, height: 0 }), this.elementAD.css({ width: 0, height: 0 }), this.playButtonScreen.hide(), b(this.element).find(".nowPlayingText").hide(), this.controls.hide());
            this.preloader.stop().animate({ opacity: 0 },
            300,
            function() { b(this).hide() });
            this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width();
            this.videoTrackProgress.css("width", this.progressWidth);
            this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width();
            this.progressIdle.css("width", this.progressIdleWidth);
            "yes" == a._playlist.videos_array[a._playlist.videoid].popupAdShow && a.enablePopup();
            if (a.secondsFormat(a.video.getCurrentTime()) == a._playlist.videos_array[a._playlist.videoid].midrollAD_displayTime) {
            if (a.midrollPlayed) return;
            a.midrollPlayed = !0;
            "yes" == a._playlist.videos_array[a._playlist.videoid].midrollAD && (a.myVideo.canPlayType && a.myVideo.canPlayType("video/mp4").replace(/no/, "") && (a.canPlay = !0, a.video_pathAD = a._playlist.videos_array[a._playlist.videoid].midroll_mp4), a.pause(), a.loadAD(a.video_pathAD, "midrollActive"), a.openAD())
            }
            a.secondsFormat(a.video.getCurrentTime()) >= a.secondsFormat(a.video.getEndTime()) && 0 < a.video.getEndTime() && !a.postrollPlayed && (a.postrollPlayed = !0, "yes" == a._playlist.videos_array[a._playlist.videoid].postrollAD &&
            (a.myVideo.canPlayType && a.myVideo.canPlayType("video/mp4").replace(/no/, "") && (a.canPlay = !0, a.video_pathAD = a._playlist.videos_array[a._playlist.videoid].postroll_mp4), a.pause(), a.loadAD(a.video_pathAD, "postrollActive"), a.openAD()))
        }, this))
    };
    d.fn.enablePopup = function() {
        if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) this.secondsFormat(this.youtubePlayer.getCurrentTime()) == this._playlist.videos_array[this._playlist.videoid].popupAdStartTime ?
            (this.newAd(), this.adOn = !1, this.togglePopup()) : this.secondsFormat(this.youtubePlayer.getCurrentTime()) >= this._playlist.videos_array[this._playlist.videoid].popupAdEndTime && (this.adOn = !0, this.togglePopup());
        if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) this.secondsFormat(this.video.getCurrentTime()) == this._playlist.videos_array[this._playlist.videoid].popupAdStartTime ? (this.newAd(), this.adOn = !1, this.togglePopup()) : this.secondsFormat(this.video.getCurrentTime()) >=
            this._playlist.videos_array[this._playlist.videoid].popupAdEndTime && (this.adOn = !0, this.togglePopup());
        if ("vimeo" == this._playlist.videos_array[this._playlist.videoid].videoType || "Vimeo" == this.options.videoType) this.secondsFormat(this._playlist.vimeo_time) == this._playlist.videos_array[this._playlist.videoid].popupAdStartTime ? (this.newAd(), this.adOn = !1, this.togglePopup()) : this.secondsFormat(this._playlist.vimeo_time) >= this._playlist.videos_array[this._playlist.videoid].popupAdEndTime && (this.adOn = !0,
            this.togglePopup())
    };
    d.fn.removeListenerProgressAD = function() { this.progressADBg.unbind(this.CLICK_EV);
        b(".elite_vp_progressADBg").css("cursor", "default") };
    d.fn.addListenerProgressAD = function() {
        var a = this;
        this.progressADBg.bind(a.CLICK_EV, function(c) {
            c = a.isMobile.any() ? c.originalEvent.changedTouches[0].pageX - a.progressADBg.offset().left : c.pageX - a.progressADBg.offset().left;
            a.progressAD.css("width", c);
            c /= a.progressADBg.width();
            a.videoAD.setCurrentTime(a.videoAD.duration * c);
            a.preloaderAD.stop().animate({ opacity: 1 },
            0,
            function() { b(this).show() })
        });
        b(".elite_vp_progressADBg").css("cursor", "pointer")
    };
    d.fn.pw = function() { this.element.css({ width: 0, height: 0 });
        b(".elite_vp_videoPlayerAD").css({ width: 0, height: 0, zIndex: 0 });
        b(this.element).find("#ytWrapper").css("z-index", 0);
        b(this.element).find("#vimeoWrapper").css("z-index", 0);
        b(".elite_vp_mainContainer ").hide() };
    d.fn.resetPlayer = function() {
        this.videoTrackDownload.css("width", 0);
        this.videoTrackProgress.css("width", 0);
        this.progressIdle.css("width", 0);
        this.progressIdleDownload.css("width",
            0);
        this.timeElapsed.text("00:00");
        this.timeTotal.text("00:00")
    };
    d.fn.resetPlayerAD = function() { this.progressAD.css("width", 0);
        this.timeLeftInside.text("(00:00)");
        this.options.allowSkipAd && (this.skipAdBox.hide(), this.skipAdCount.hide());
        this.fsEnterADBox.hide();
        this.fsEnterADBox.hide();
        this.toggleAdPlayBox.hide() };
    d.fn.setupVolumeTrack = function() {
        var a = this,
            c;
        a.volumeTrack = b("<div />");
        a.volumeTrack.addClass("elite_vp_volumeTrack").addClass("elite_vp_volumeTrack " + this.options.instanceTheme).addClass("elite_vp_playerElement");
        this.controls.append(a.volumeTrack);
        a.volumeTrackProgress = b("<div />");
        a.volumeTrackProgress.addClass("elite_vp_Progress"); //remove elite_vp_themeColor
        a.volumeTrack.append(a.volumeTrackProgress);
        var d = b("<div />");
        d.addClass("elite_vp_volumeTrackProgressScrubber");
        a.volumeTrackProgress.append(d);

        a.handler = b("<div />");
        a.handler.addClass("elite_vp_volumeTrack-handle");
        d.append(a.handler);

        this.toolTipVolume = b("<div />");
        this.toolTipVolume.addClass("elite_vp_toolTipVolume");
        this.toolTipVolume.hide();
        this.toolTipVolume.css({ opacity: 0, bottom: 50 });
        this.controls.append(this.toolTipVolume);
        d = b("<div />");
        d.addClass("elite_vp_toolTipTextVolume");
        this.toolTipVolume.append(d);
        d = b("<div />");
        d.addClass("elite_vp_toolTipTriangleVolume");
        this.toolTipVolume.append(d);
        this.unmuteBtnWrapper = b("<div />").addClass("elite_vp_unmuteBtnWrapper").addClass("elite_vp_playerElement");
        this.controls.append(this.unmuteBtnWrapper);
        this.unmuteBtn = b("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_unmuteBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-volume-up");
        this.unmuteBtnWrapper.append(this.unmuteBtn);
        a.muted = !1;
        this.initialVolumeProgressWidth = a.volumeTrackProgress.width();
        if (e.iOS() && a.options.autoplay) { this.video.muted = !0; var f = a.volumeTrackProgress.width();
            a.volumeTrackProgress.css("width", "0px");
            a.handler.css("left","0px");
            b(a.mainContainer).find(".fa-elite-volume-up").removeClass("fa-elite-volume-up").addClass("fa-elite-volume-off");
            a.muted = !0 } a.video.setVolume(1);
        this.unmuteBtnWrapper.bind(this.CLICK_EV, b.proxy(function() {
            if (a.muted) 
                b(a.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up"),
                a.handler.stop().animate({ left: f }, 200),
                a.volumeTrackProgress.stop().animate({ width: f }, 200), 
                c = f / a.volumeTrack.width(), "youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType ? a.youtubePlayer.setVolume(100 * c) : ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType || "HTML5 (self-hosted)" == a.options.videoType) && a.video.setVolume(c), a.muted = !1;
            else {
                f = a.volumeTrackProgress.width();
                b(a.mainContainer).find(".fa-elite-volume-up").removeClass("fa-elite-volume-up").addClass("fa-elite-volume-off");
                a.handler.stop().animate({ left: 0 }, 200);
                a.volumeTrackProgress.stop().animate({ width: 0 }, 200);
                if ("youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType) a.youtubePlayer.setVolume(0);
                else if ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType || "HTML5 (self-hosted)" == a.options.videoType) bottomMargin = 70;
                this.setVolume(0);
                a.muted = !0
            }
            e.iOS() && a.options.autoplay && (this.video.muted = !1)
        }, this));
        a.volumeTrack.bind("mousedown", function(c) {
            
            c = a.isMobile.any() ? c.originalEvent.changedTouches[0].pageX - a.volumeTrack.offset().left : c.pageX - a.volumeTrack.offset().left;

            a.volPerc = c / (a.volumeTrack.width() + 2);
            "youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType ? a.youtubePlayer.setVolume(100 * a.volPerc) : ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType || "HTML5 (self-hosted)" == a.options.videoType) && a.video.setVolume(a.volPerc);
            a.handler.stop().animate({ left: c }, 200);
            a.volumeTrackProgress.stop().animate({ width: c }, 200); 

            if(c >= 30.421875){
                b(a.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up");
                b(a.mainContainer).find(".fa-elite-volume-down").removeClass("fa-elite-volume-down").addClass("fa-elite-volume-up");
            }else{
                b(a.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-down");
                b(a.mainContainer).find(".fa-elite-volume-up").removeClass("fa-elite-volume-up").addClass("fa-elite-volume-down");
            }

            b(document).mousemove(function(b) {
                a.isMobile.any() ?
                a.volumeTrackProgress.stop().animate({ width: b.originalEvent.changedTouches[0].pageX - a.volumeTrack.offset().left }, 0) : a.volumeTrackProgress.stop().animate({ width: b.pageX - a.volumeTrack.offset().left }, 0);
                a.volumeTrackProgress.width() >= a.volumeTrack.width() ? a.volumeTrackProgress.stop().animate({ width: a.volumeTrack.width() }, 0) : 0 >= a.volumeTrackProgress.width() && a.volumeTrackProgress.stop().animate({ width: 0 }, 200);
                
                a.isMobile.any() ?
                a.handler.stop().animate({ left: b.originalEvent.changedTouches[0].pageX - a.volumeTrack.offset().left }, 0) : a.handler.stop().animate({ left: b.pageX - a.volumeTrack.offset().left }, 0);
                a.volumeTrackProgress.width() >= a.volumeTrack.width() ? a.handler.stop().animate({ left: a.volumeTrack.width() }, 0) : 0 >= a.volumeTrackProgress.width() && a.handler.stop().animate({ left: 0 }, 200);

                "youtube" == a._playlist.videos_array[a._playlist.videoid].videoType || "YouTube" == a.options.videoType ?
                a.youtubePlayer.setVolume(a.volumeTrackProgress.width() / a.volumeTrack.width() * 100) : ("HTML5" == a._playlist.videos_array[a._playlist.videoid].videoType || "HTML5 (self-hosted)" == a.options.videoType) && a.video.setVolume(a.volumeTrackProgress.width() / a.volumeTrack.width())
                
            });

            a.muted = !1
        });
        b(document).mouseup(function(a) { 
            b(document).unbind("mousemove")
        })
    };
    d.fn.setupTiming = function() {
        var a = this;
        this.timeElapsed = b("<div />");
        this.timeTotal = b("<div />");
        this.timeLeftInside = b("<div />");
        this.timeElapsed.text("00:00");
        this.timeTotal.text("00:00");
        this.timeLeftInside.text("(00:00)");
        this.timeElapsed.addClass("elite_vp_timeElapsed elite_vp_controlsColor " + this.options.instanceTheme);
        this.timeTotal.addClass("elite_vp_timeTotal elite_vp_controlsColor " + this.options.instanceTheme);
        this.timeLeftInside.addClass("elite_vp_timeLeftInside");
        this.ontimeupdate(b.proxy(function() { this.timeElapsed.text(a.secondsFormat(this.video.getCurrentTime()));
            this.timeTotal.text(a.secondsFormat(this.video.getEndTime())) }, this));
        this.videoElement.one("canplay",
            b.proxy(function() { this.videoElement.trigger("timeupdate") }, this));
        this.controls.append(this.timeElapsed);
        this.controls.append(this.timeTotal)
    };
    d.fn.calculateYoutubeElapsedTime = function(a) { this.timeElapsed.text(this.secondsFormat(a)) };
    d.fn.calculateYoutubeTotalTime = function(a) { this.timeTotal.text(this.secondsFormat(a)) };
    d.fn.setupElements = function() {
        b(".pcmode").on({ mouseenter: function() { b(this).toggleClass("elite-icon-general-hover") }, mouseleave: function() { b(this).toggleClass("elite-icon-general-hover") } });
        b(".mvmode").on({ mouseenter: function() { b(this).toggleClass("elite-icon-general-hover") }, mouseleave: function() { b(this).toggleClass("elite-icon-general-hover") } });
        b(".tvmode").on({ mouseenter: function() { b(this).toggleClass("elite-icon-general-hover") }, mouseleave: function() { b(this).toggleClass("elite-icon-general-hover") } });
        b("#elite_vp_fsBtn").on({ mouseenter: function() { b(this).toggleClass("elite-icon-general-hover") }, mouseleave: function() { b(this).toggleClass("elite-icon-general-hover") } });
        b(".elite_vp_themeColor").css({ background: this.options.colorAccent });
        b(".elite_vp_themeColorText").css({ color: this.options.colorAccent });
        b(".elite_vp_playBtnBg").css({ background: this.options.colorAccent })
    };
    d.fn.setupControls = function() {
        this.setupVolumeTrack();
        this.setupTiming();
        this.createVideoOverlay();
        this.createInvisibleWrapper();
        this.setupButtons();
        this.createInfoWindow();
        this.createInfoWindowContent();
        this.createNowPlayingText();
        this.createEmbedWindow();
        this.createEmbedWindowContent();
        this.setupVideoTrack();
        this.resizeVideoTrack();
        this.createPopup();
        this.createLogo();
        this.createQualityWindow();
        this.options.allowSkipAd && (this.createSkipAd(), this.createSkipAdCount());
        this.createAdTogglePlay();
        this.createVideoAdTitleInsideAD();
        "closed" == this.options.playlistBehaviourOnPageload && "vimeo" != this._playlist.videos_array[this._playlist.videoid].videoType && "Vimeo" != this.options.videoType && this.toggleStretch();
        this.resizeAll()
    };
    d.fn.createVideoOverlay = function() {
        if (!("" == this.options.posterImg && "" == this.options.posterImgOnVideoFinish ||
            this.options.autoplay)) {
            var a = this;
            a.overlay = b("<div />");
            a.overlay.addClass("elite_vp_overlay");
            a.element && a.element.append(a.overlay);
            var c = document.createElement("img");
            c.onload = function() { a.posterImageW = this.width;
            a.posterImageH = this.height };
            c.src = a.options.posterImg;
            a.overlay.append(c);
            b(".elite_vp_overlay img").attr("id", "elite_vp_overlayPoster");
            this.playButtonPoster = b("<div />");
            this.playButtonPoster.addClass("elite_vp_playButtonPoster").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " +
            this.options.instanceTheme);
            if ("youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == a.options.videoType) var d = setInterval(function() { a._playlist.YTAPI_onPlayerReady && (a.addPlayButtonPosterListener(), clearInterval(d)) }, 100);
            else this.addPlayButtonPosterListener();
            this.element && this.element.append(this.playButtonPoster);
            "" == this.options.posterImg && (this.overlay.hide(), this.playButtonPoster.hide())
        }
    };
    d.fn.addPlayButtonPosterListener = function() {
        this.playButtonPoster.bind(this.CLICK_EV,
            b.proxy(function() { this.hideOverlay() }, this))
    };
    d.fn.createInvisibleWrapper = function() { this.invisibleWrapper = b("<div />").addClass("elite_vp_invisibleWrapper").hide();
        this.element && this.element.append(this.invisibleWrapper) };
    d.fn.positionPoster = function(a) {};
    d.fn.resizeVideoTrack = function() { this.videoTrack.css({ left: 0, width: "100%" }) };
    d.fn.removeHTML5elements =
        function() { this.videoElement && (this.pause(), this.playButtonScreen.hide(), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) && (b(this.shareWindow).animate({ opacity: 1 }, 500, function() { b(this).hide() }), b(this.embedWindow).animate({ opacity: 1 }, 500, function() { b(this).hide() }), this.embedOn = this.shareOn = !1) };
    d.fn.showHTML5elements = function() {
        this.videoElement && (this.video.poster = "", this.preloader.show(), this.logoImg.show(), this.playButtonScreen.show(),
            this.options.showAllControls ? this.options.showAllControls && this.controls.show() : (this.controls.hide(), this.progressIdleTrack.hide(), this.nowPlayingTitle.hide(), this.screenBtnsWindow.hide()))
    };
    d.fn.generateRandomNumber = function() { this.rand = Math.floor(Math.random() * this.options.videos.length + 0) };
    d.fn.getGlobalPrerollRandomNumber = function() { return this.randomGlobalPrerollNum = Math.floor(Math.random() * this.globalPrerollAds_arr.length) };
    d.fn.setPlaylistItem = function(a) {
        this._playlist.playlistContent.mCustomScrollbar("scrollTo",
            this._playlist.item_array[a]);
        this.mainContainer.find(".elite_vp_nowPlayingThumbnail").hide();
        this.mainContainer.find(".elite_vp_thumbnail_imageSelected").removeClass("elite_vp_thumbnail_imageSelected").addClass("elite_vp_thumbnail_image");
        b(this._playlist.item_array[a]).find(".elite_vp_nowPlayingThumbnail").show();
        b(this._playlist.item_array[a]).find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected");
        this.mainContainer.find(".elite_vp_itemSelected").removeClass("elite_vp_itemSelected").addClass("elite_vp_itemUnselected");
        b(this._playlist.item_array[a]).removeClass("elite_vp_itemUnselected").addClass("elite_vp_itemSelected");
        this.mainContainer.find(".elite_vp_infoTitle").html(this._playlist.videos_array[a].title);
        this.mainContainer.find(".elite_vp_infoText").html(this._playlist.videos_array[a].info_text);
        this.mainContainer.find(".elite_vp_nowPlayingText").html(this._playlist.videos_array[a].title);
        this.nowPlayingTitleW = this.nowPlayingTitle.width()
    };
    d.fn.showCustomControls = function() {
        this.controls.css({ zIndex: 2147483647 });
        this.screenBtnsWindow.css({ zIndex: 2147483647 });
        this.nowPlayingTitle.css({ zIndex: 2147483647 });
        this.progressIdleTrack && this.progressIdleTrack.css({ zIndex: 2147483647 })
    };
    d.fn.hideCustomControls = function() { this.controls.css({ zIndex: 200 });
        this.screenBtnsWindow.css({ zIndex: 200 });
        this.nowPlayingTitle.css({ zIndex: 200 });
        this.progressIdleTrack && this.progressIdleTrack.css({ zIndex: 200 }) };
    d.fn.playVideoById = function(a) {
        var c = this;
        c.volPerc = c.volumeTrackProgress.width() / c.volumeTrack.width();
        this.hideOverlay();
        this.postrollPlayed = this.midrollPlayed = !1;
        this.manageButtonsByVideoType();
        e.iOS() && this.options.autoplay && this.removeiOSAutoplay();
        if ("HTML5" == c._playlist.videos_array[a].videoType || "HTML5 (self-hosted)" == c.options.videoType) {
            c.video.setVolume(c.volPerc);
            c.element.css("visibility", "visible");
            c.closeAD();
            c.showVideoElements();
            c._playlist.videoAdPlayed = !1;
            c.ytWrapper.css({ zIndex: 0 });
            c.ytWrapper.css({ visibility: "hidden" });
            c.imageWrapper.css({ zIndex: 0 });
            c.imageWrapper.css({ visibility: "hidden" });
            c._playlist.vimeoWrapper.css({ zIndex: 0 });
            b("iframe#vimeo_video").attr("src", "");
            c.showHTML5elements();
            c.resizeAll();
            void 0 != c.youtubePlayer && c._playlist.youtubePLAYING && (c.youtubePlayer.stopVideo(), c.youtubePlayer.clearVideo());
            c.myVideo.canPlayType && c.myVideo.canPlayType("video/mp4").replace(/no/, "") && (this.canPlay = !0, c.video_path = c._playlist.videos_array[a].video_path_mp4, c.video_pathAD = c.options.showGlobalPrerollAds ? c.globalPrerollAds_arr[c.getGlobalPrerollRandomNumber()] : c._playlist.videos_array[a].preroll_mp4);
            c.load(c.video_path, a);
            c.play();
            if ("yes" == c._playlist.videos_array[a].prerollAD || c.options.showGlobalPrerollAds) c.pause(), c.loadAD(c.video_pathAD), c.openAD();
            this.loaded = !1
        } else if ("youtube" == c._playlist.videos_array[a].videoType || "YouTube" == c.options.videoType) c.showCustomControls(), void 0 != c.youtubePlayer && c.youtubePlayer.setVolume(100 * c.volPerc), "default controls" == c.options.youtubeControls ? c.element.css("visibility", "hidden") : "custom controls" == c.options.youtubeControls && c.element.css("visibility", "visible"), c.hideVideoElements(),
            c.closeAD(), c._playlist.videoAdPlayed = !1, c.preloader.stop().animate({ opacity: 0 }, 0, function() { b(this).hide() }), c.ytWrapper.css({ zIndex: 501 }), c.ytWrapper.css({ visibility: "visible" }), c.imageWrapper.css({ zIndex: 0 }), c.imageWrapper.css({ visibility: "hidden" }), c.removeHTML5elements(), c._playlist.vimeoWrapper.css({ zIndex: 0 }), b("iframe#vimeo_video").attr("src", ""), void 0 != c.youtubePlayer && (c.youtubePlayer.setSize("100%", "100%"), c.isMobile.any() ? c.youtubePlayer.cueVideoById(c._playlist.videos_array[a].youtubeID) :
            (c.youtubePlayer.loadVideoById(c._playlist.videos_array[a].youtubeID), c.youtubePlayer.playVideo())), c.options.youtubeQuality = c.selectedYoutubeQuality, c.youtubePlayer.setPlaybackQuality(c.options.youtubeQuality), c.resizeAll();
        else if ("vimeo" == c._playlist.videos_array[a].videoType || "Vimeo" == c.options.videoType) c.hideCustomControls(), c.hideVideoElements(), c.closeAD(), c._playlist.videoAdPlayed = !1, c._playlist.vimeoWrapper.css({ zIndex: 501 }), c.isMobile.any(), document.getElementById("vimeo_video").src = "http://player.vimeo.com/video/" +
            c._playlist.videos_array[a].vimeoID + "?autoplay=1?api=1&player_id=vimeo_video&color=" + c.options.vimeoColor, b("#vimeo_video").on("load", function() { c.preloader.stop().animate({ opacity: 0 }, 200, function() { b(this).hide() }) }), c.removeHTML5elements(), c.ytWrapper.css({ zIndex: 0 }), c.ytWrapper.css({ visibility: "hidden" }), c.imageWrapper.css({ zIndex: 0 }), c.imageWrapper.css({ visibility: "hidden" }), void 0 != c.youtubePlayer && c._playlist.youtubePLAYING && (c.youtubePlayer.stopVideo(), c.youtubePlayer.clearVideo());
        else if ("image" ==
            c._playlist.videos_array[a].videoType || "Image" == c.options.videoType) c.hideCustomControls(), c.hideVideoElements(), c.closeAD(), c._playlist.videoAdPlayed = !1, c.removeHTML5elements(), c.ytWrapper.css({ zIndex: 0 }), c.ytWrapper.css({ visibility: "hidden" }), void 0 != c.youtubePlayer && c._playlist.youtubePLAYING && (c.youtubePlayer.stopVideo(), c.youtubePlayer.clearVideo()), c.imageWrapper.css({ zIndex: 502 }), c.imageWrapper.css({ visibility: "visible" }), b(c.imageDisplayed).src = "#", b(c.imageDisplayed).removeAttr("src"), c.imageDisplayed.src =
            c._playlist.videos_array[a].imageUrl, b(c.imageDisplayed).on("load", function() { c.preloader.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() });
            c.setImageTimer() })
    };
    d.fn.removeiOSAutoplay = function() {
        this.videoElement.removeAttr("muted");
        this.videoElement.muted = !1;
        this.video.muted = !1;
        this.volumeTrackProgress.css({ width: this.initialVolumeProgressWidth });
        if(initialVolumeProgressWidth >= 30.421875){
            b(this.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up");
        }else{
            b(this.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-down");
        }

        this.muted = !1;
        this.video.setVolume(1);
        this.iOSVolumeButtonScreen.hide()
    };
    d.fn.manageButtonsByVideoType = function() {
        if ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType) void 0 != this.qualityBtnWrapper && this.qualityBtnWrapper.hide(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download ? (this.downloadBtnLink.show(), this.downloadBtnLink.attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4)) : this.downloadBtnLink.hide();
        else if ("youtube" ==
            this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType) void 0 != this.qualityBtnWrapper && this.qualityBtnWrapper.show(), void 0 != this.downloadBtnLink && this.downloadBtnLink.hide()
    };
    d.fn.setImageTimer = function() {
        var a = this;
        clearTimeout(a.image_timeout);
        a.image_timeout = setTimeout(function() {
            a.randEnd = Math.floor(Math.random() * a.options.videos.length);
            a._playlist.videoid = a.shuffleBtnEnabled ? a.randEnd : parseInt(a._playlist.videoid) + 1;
            a._playlist.videos_array.length ==
            a._playlist.videoid && (a._playlist.videoid = 0);
            a.setPlaylistItem(a._playlist.videoid);
            a.playVideoById(a._playlist.videoid)
        }, 1E3 * a._playlist.videos_array[a._playlist.videoid].imageTimer)
    };
    d.fn.setSkipTimer = function() {
        if (this.options.showGlobalPrerollAds) this.counter = this.options.globalPrerollAdsSkipTimer - Math.round(this.videoAD.getCurrentTime());
        else {
            var a = this.video_pathAD || this._playlist.video_pathAD;
            a == this._playlist.videos_array[this._playlist.videoid].preroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].prerollSkipTimer -
            Math.round(this.videoAD.getCurrentTime()));
            a == this._playlist.videos_array[this._playlist.videoid].midroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].midrollSkipTimer - Math.round(this.videoAD.getCurrentTime()));
            a == this._playlist.videos_array[this._playlist.videoid].postroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].postrollSkipTimer - Math.round(this.videoAD.getCurrentTime()))
        }
    };
    d.fn.showPoster2 = function() {
        this.mainContainer.find(".elite_vp_overlay img").attr("src",
            this.options.posterImgOnVideoFinish);
        this.overlay.show();
        this.playButtonPoster.show();
        this.playButtonScreen.hide();
        this.poster2Showing = !0
    };
    d.fn.setupEvents = function() {
        var a = this;
        this.onpause(b.proxy(function() { this.element.addClass("vp_paused");
            this.element.removeClass("elite_vp_playing");
            this.change("vp_paused") }, this));
        this.onplay(b.proxy(function() { this.element.removeClass("vp_paused");
            this.element.addClass("elite_vp_playing");
            this.change("elite_vp_playing") }, this));
        b(a.videoElementAD).bind("ended",
            function() { a.closeAD();
            a._playlist.videoAdPlayed = !0 });
        b(a.videoElementAD).bind("loadeddata", function() {
            a.preloader.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() });
            a.preloaderAD.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() });
            a.options.hideVideoSource && a.videoElementAD.empty();
            clearInterval(a.myInterval);
            a.myInterval = setInterval(function() {
            if (!a.isPaused || a.options.allowSkipAd) a.setSkipTimer(), b(a.skipAdCountContentLeft).find(".elite_vp_skipAdCountTitle").text(a.options.skipAdText +
                " " + a.counter + " s"), 0 == a.counter && (a.toggleSkipAdCount(), a.skipBoxOn = !1, a.toggleSkipAdBox(), clearInterval(a.myInterval))
            }, 1E3)
        });
        b(a.videoElementAD).bind("pause", function() { a.isPaused = !0 });
        b(a.videoElementAD).bind("play", function() { a.isPaused = !1 });
        b(a.videoElementAD).bind("timeupdate", function() {
            a.timeLeftInside.text("(-" + a.secondsFormat(a.videoAD.getEndTime() - a.videoAD.getCurrentTime()) + ")");
            a.progressWidthAD = a.videoAD.currentTime / a.videoAD.duration * a.elementAD.width();
            a.progressAD.css("width", a.progressWidthAD);
            a.preloaderAD.stop().animate({ opacity: 0 }, 300, function() { b(this).hide() })
        });
        this.onended(b.proxy(function() {
            a.midrollPlayed = !1;
            a.postrollPlayed = !1;
            a.randEnd = Math.floor(Math.random() * a.options.videos.length + 0);
            this._playlist.videoid = parseInt(this._playlist.videoid) + 1;
            this._playlist.videos_array.length == this._playlist.videoid && (this._playlist.videoid = 0);
            a.preloader && a.preloader.stop().animate({ opacity: 1 }, 0, function() { b(this).show() });
            "Play next video" == a.options.onFinish ? (a._playlist.videoAdPlayed = !1,
            a.shuffleBtnEnabled ? (a.setPlaylistItem(a.randEnd), a._playlist.videoid = a.randEnd) : a.setPlaylistItem(a._playlist.videoid), a.playVideoById(a._playlist.videoid), a.shuffleBtnEnabled ? a.setPlaylistItem(a.randEnd) : a.setPlaylistItem(a._playlist.videoid)) : "Restart video" == a.options.onFinish ? (this.resetPlayer(), this.seek(0), this.play(), this.preloader.hide()) : "Stop video" == a.options.onFinish && (this.pause(), this.preloader.hide(), "" != this.options.posterImgOnVideoFinish && (this.resetPlayer(), this.seek(0), this.pause(),
            this.showPoster2()))
        }, this));
        this.oncanplay(b.proxy(function() { this.canPlay = !0;
            this.controls.removeClass("elite_vp_disabled") }, this));
        this.mainContainer.parent().hover(function(a) {});
        this.mainContainer.parent().hover(function() { b(document).keydown(b.proxy(function(b) { if (32 == b.keyCode) return a.togglePlay(), !1;
            27 == b.keyCode && this.inFullScreen && a.fullScreen(!this.inFullScreen) }, this)) }, function() { b(document).unbind("keydown") })
    };
    window.Video = d;
})(jQuery);