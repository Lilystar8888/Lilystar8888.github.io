var isMobile = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) }, any: function() { return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() } },
    scrollTop = 0,
    placeit = "";
placeit = isMobile.any() ? "top" : "bottom";
var screenwidth = $(window).width();
if (navigator.userAgent.match(/Tablet/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Kindle/i) || navigator.userAgent.match(/Playbook/i) || navigator.userAgent.match(/Nexus/i) || navigator.userAgent.match(/Xoom/i) || navigator.userAgent.match(/SM-N900T/i) || navigator.userAgent.match(/GT-N7100/i) || navigator.userAgent.match(/SAMSUNG-SGH-I717/i) || navigator.userAgent.match(/SM-T330NU/i)) var tablet_device = !0,
    touch_device = !0;

function showintro() { $(".expand-text").toggleClass("active");
    $(".showMoreText p").toggleClass("shorter") } $(function() { $(document).on("click", ".toolbar a[data-target]", function(a) { a.preventDefault();
        a = $(this).data("target");
        $(".widget-box.visible").removeClass("visible");
        $(a).addClass("visible") }) });
$(function() { $('[data-toggle="tooltip"]').tooltip({ placement: placeit }) });

function to(a) { document.body.scrollTop = document.documentElement.scrollTop = a }

function getScrollTop() { return document.body.scrollTop || document.documentElement.scrollTop }
$(window).load(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3;
    var a = $("#manpo img.show"),
        b = a.attr("src"),
        e = a.attr("alt"),
        d = !1,
        f = a.outerHeight(),
        c;
    a.attr("alt", "");
    $("#manpo .control").css({ backgroundColor: "#fff", opacity: 0 });
    $('<img class="big" />').load(function() {
        c = this.height;
        $("#manpo .control").click(function() {
            d ? $("#manpo").animate({ height: f }, 800, function() { $("#manpo img.show").attr("src", b) }) : (0 >= c && (c = $("img.big").outerHeight()), $("#manpo img.show").attr("src", e), $("#manpo").animate({ height: c },
                800), setTimeout(function() { var a = $("#manpolink").attr("href");
                window.open(a, "_blank") }, 2E3));
            d = !d;
            return !1
        })
    }).attr("src", e).hide().appendTo("body")
});
if (tablet_device) $(window).on("orientationchange", function() { var a = $(".mod_sear_menu");
    a.not(":visible") && window.innerWidth < window.innerHeight ? $(a).addClass("d-flex").removeClass("d-none") : $(a).addClass("d-none").removeClass("d-flex") });
$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 3;
    $(".btn").click(function() { $(this).toggleClass("active") });
    $("#toggle").click(function() { $(this).toggleClass("active") });
    isMobile.any() && 1024 > screenwidth ? ($("#msearch").click(function() {
        var a = $(".mod_sear_menu");
        a.is(":hidden") ? (scrollTop = getScrollTop(), $("body").addClass("dialog-open"), $("body").css("top", -scrollTop), $(a).addClass("d-flex").removeClass("d-none"), $("#keyvisaul, .site-piclist").addClass("blur")) : ($("body").removeClass("dialog-open"), to(scrollTop), $(a).addClass("d-none").removeClass("d-flex"),
            $("#keyvisaul, .site-piclist").removeClass("blur"))
    }), $(".mod_sear_menu .icon-close, .mod_sear_menu .modbtn, .mod_sear_menu .mask").click(function() { $("body").removeClass("dialog-open");
        to(scrollTop);
        $(".mod_sear_menu").addClass("d-none").removeClass("d-flex");
        $("#keyvisaul, .site-piclist").removeClass("blur") })) : $(window).scroll(function() {
        150 < $(this).scrollTop() ? ($("#tpnav .navbar").addClass("showbg"), $("body").hasClass("playmode2") && $("#tpnav .navbar-brand").find("img").attr("src", "img/logos.png"),
            $("#goTop").fadeIn("fast")) : ($("#tpnav .navbar").removeClass("showbg"), $("body").hasClass("playmode2") && $("#tpnav .navbar-brand").find("img").attr("src", "img/logobs.png"), $("#goTop").stop().fadeOut("fast"))
    });
    $("#avhome .mod_sear_list.biaoqian.toolong").bind("mouseenter", function() { $(this).removeClass("thick") }).bind("mouseleave", function() { $(this).addClass("thick") });
    $(".nav-item").click(function() { $(this).addClass("active").siblings("li").removeClass("active") });
    $(".xihuan").click(function() { $(this).toggleClass("icon-favorite_border icon-favorite") });
    $(".btnpanel .likebtn").click(function() { var a = $(this).find(".icon-thumb_up"),
            b = $(this).parent().find(".icon-thumb_down");
        $(a).toggleClass("active");
        $(a).hasClass("active") && $(b).removeClass("active") });
    $(".btnpanel .unlikebtn").click(function() { var a = $(this).find(".icon-thumb_down"),
            b = $(this).parent().find(".icon-thumb_up");
        $(a).toggleClass("active");
        $(a).hasClass("active") && $(b).removeClass("active") });
    $(".icon-reply").click(function() { $(this).toggleClass("active") });
    $("#mcover").click(function() { $(this).removeClass("d-sm-none").addClass("d-none") });
    $(".checkBox-item").click(function() { $(this).addClass("selected").siblings().removeClass("selected") });
    $(".mod_category_item li").click(function() { $(this).addClass("selected").siblings().removeClass("selected") });
    $("#goTop").click(function() { $("html,body").animate({ scrollTop: 0 }, 500) });
});