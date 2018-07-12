$(document).ready(function() {
    $(".icon-nav_screen").click(function() { $("body").toggleClass("shujumode") });
    $(".icon-nav_more, .shaixuan").click(function() { $("#filterDiv").addClass("show") });
    $("#filterDiv .icon-close").click(function() { $("#filterDiv").removeClass("show") });
    $("#filterDiv .nav-tab .btn").click(function() { $(this).addClass("active").siblings().removeClass("active") });
    $("#checkit").click(function() { $("#filterDiv").removeClass("show") });
    $(".download-banner .icon-close").click(function() { $(".download-banner").remove() });
    $(".nav-panel .filterBtn2").click(function() { $(this).toggleClass("on");event.stopPropagation() });
    $(".list-item").length ? $(".empty-panel").addClass("hide") : $(".empty-panel").removeClass("hide");
    $(".empty-panel .tips").text("\u5f53\u524d\u65e0\u6bd4\u8d5b\u8d44\u6599");
    $(".icon_follow").click(function() { $(this).closest(".list-item").toggleClass("guanzhu") });
    $("#listlive").click(function() {
        $(this).addClass("active").siblings(".btn").removeClass("active");
        $('.list-item.live:not(".guanzhu")').removeClass("hide");
        $('.list-item:not(".live"), .live-state, .data-time').addClass("hide");
        $(".list-item.live").length ? $(".empty-panel").addClass("hide") : $(".empty-panel").removeClass("hide");
        $(".empty-panel .tips").text("\u5f53\u524d\u65e0\u8fdb\u884c\u4e2d\u7684\u6bd4\u8d5b")
    });
    $("#liststar").click(function() {
        $(this).addClass("active").siblings(".btn").removeClass("active");
        //$('.list-item.guanzhu:not(".live")').removeClass("hide");
        //$('.list-item:not(".guanzhu"), .live-state, .data-time').addClass("hide");
        //$(".list-item.guanzhu").length ? $(".empty-panel").addClass("hide") : $(".empty-panel").removeClass("hide");
        //$(".empty-panel .tips").text("\u5f53\u524d\u65e0\u5173\u6ce8\u7684\u6bd4\u8d5b")
    });

    $("#listall").click(function() {
        $(this).addClass("active").siblings(".btn").removeClass("active");
        $('.list-item').removeClass("hide");
        $(".list-item").length ? $(".empty-panel").addClass("hide") : $(".empty-panel").removeClass("hide");
        $(".empty-panel .tips").text("\u5f53\u524d\u65e0\u8fdb\u884c\u4e2d\u7684\u6bd4\u8d5b")
    });
    
});