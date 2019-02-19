//切换到视频
function openvideo() {
    $(".animation-tab, .animation-content").removeClass("current");
    $(".video-tab, .video-content").addClass("current")
}

//切换到动画
function openanima() {
    $(".video-tab, .video-content").removeClass("current");
    $(".animation-tab, .animation-content").addClass("current")
}

//暂无视频直播
function novideo() {
    $('.live-container').append('<div class="util-dialog-cda alt video-alt absolute show" style="border-radius: 5px; margin-left: -65px; margin-top: -80px;"><div class="dialog-content left">暂无视频直播</div></div>');
    setTimeout(function() {
        $(".video-alt").addClass("hide").removeClass("show");
    }, 600);
}

function getBoxScoreItem(t) {
    var o = isNaN(parseInt(t)) ? t : $("#player-" + t);
    return o.length > 0 && {
        player: o,
        number: o.find(".number"),
        playerHead: o.find(".player-head"),
        name: o.find(".name"),
        position: o.find(".position"),
        time: o.find(".time"),
        shoot: o.find(".shoot"),
        threePoints: o.find(".three-points"),
        freeThrow: o.find(".free-throw"),
        frontRebound: o.find(".front-rebound"),
        postRebound: o.find(".post-rebound"),
        totalRebounds: o.find(".total-rebounds"),
        assists: o.find(".assists"),
        steals: o.find(".steals"),
        blockShot: o.find(".block-shot"),
        anError: o.find(".an-error"),
        foul: o.find(".foul"),
        score: o.find(".score")
    }
}

$(function() {
    //解析网址后跟的tab
    var a = function(a, b) {
            b || (b = window.location.href);
            a = a.replace(/[\[\]]/g, "\\$&");
            var c = (new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)")).exec(b);
            return c ? c[2] ? decodeURIComponent(c[2].replace(/\+/g, " ")) : "" : null
        }("tab"),
        b = "";
    $(".live-tab .tab\u311d, .content").removeClass("current");
    "stream" === a ? (
        b = $(".video-content"), $(".live-tab .tab.video-tab").addClass("current")
    ) : (
        b = $(".animation-content"), $(".live-tab .tab.animation-tab").addClass("current")
    );

    b.addClass("current").siblings().removeClass("current");

    //切换线路
    $(".video-panel>a").click(function() {
        $(this).addClass("active").siblings().removeClass("active")
    });

    //会员专属
    $(".ssmbonly").click(function() {
        $(".login-sign-box, #loginBox").removeClass("hide");
        $(".exit-login").addClass("hide")
    });

    //向下滑
    a = $(window).height();
    $(document).height() > a && $(window).scroll(function() {
        0 < $(window).scrollTop() ? ($(".navbar").addClass("hide"), $("#breadnav").addClass("sticky"), $(".layout-score-top").css("margin-top", "120px")) : ($(".navbar").removeClass("hide"), $("#breadnav").removeClass("sticky"), $(".layout-score-top").css("margin-top", "0px"))
    })
    //切换页签
    $("ul.live-code-nav>li").click(function() {
        event.preventDefault();
        $(this).addClass("active").siblings("li").removeClass("active");
        var a = $(this).index();
        $("#animation-broadcast-match .nano").eq(a).removeClass("hide").siblings(".nano").addClass("hide")
    });

    $(".box-score").each(function() {
        var o, a = $(this),
            n = a.hasClass("box-score-0") ? "home" : "away",
            s = a.find(".transverse"),
            i = a.find(".portrait"),
            h = a.find(".sp-tb").height()-100;
            a.find(".list .row .rol").hover(function() {
                var t = $(this), a = t.parents(".row");
                a.hasClass("no") || (
                    clearTimeout(o),
                    s.removeClass("hide").stop().animate({top: t.position().top,height: a.height()}, 100),
                    i.removeClass("hide").stop().animate({left: t.position().left,width: t.width(), height: h}, 100)
                )
            }, function() {
                o = setTimeout(function() {
                    s.addClass("hide").stop().animate({top: 0, height: 0}, 100),
                    i.addClass("hide").stop().animate({left: 0,width: 0, height: 0}, 100)
                }, 50)
            })
    });

});