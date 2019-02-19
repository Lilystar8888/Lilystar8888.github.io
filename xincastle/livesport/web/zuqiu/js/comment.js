$(function() {
    $(".pl_replyicon").click(function(e) {
        var that = $(this);
        var parentId = that.attr("parentId"); console.log('parentId:'+parentId);
        var floorId = that.attr("floorId"); console.log('floorId:'+floorId);
        $(".commentArea").addClass("hide"),
        $("[name='commentArea'][parentId='" + parentId + "'][floorId='" + floorId + "']").removeClass("hide")
    });
    $("[name='emoj_chose_button']").click(function(e) {
        var that = $(this);
        e.stopPropagation();
        var parentId = that.attr("parentId");
        var floorId = that.attr("floorId");
        var dialog = $("[name='emoj'][parentId='" + parentId + "'][floorId='" + floorId + "']");
        if(dialog.get(0).style.display === "none") {
            dialog.show();
        } else {
           dialog.hide();
        }
    });

    $("[name='emoj']").click(function(e) {
        var title = e.target.title;
        var that = $(this);
        var parentId = that.attr("parentId");
        var floorId = that.attr("floorId");
        var showType = that.attr("showType");

        if(title) {
            if(showType) {
                var txt = $("[name='commentArea'][parentId='" + parentId + "'][floorId='" + floorId + "'][showType='" + showType + "'] textarea");
            } else {
                var txt = $("[name='commentArea'][parentId='" + parentId + "'][floorId='" + floorId + "'] textarea");
            }
            var value = txt.val();
            txt.val(value + title);
        }
        $(this).hide();
    });

    $("[name='uploadImgButton']").unbind().click(function() {
        $(this).find("[name='imgFile']").get(0).click();
    });

    var e = $(window).height();
    if ($(document).height() > e) {
        var a = $(".navbar, .infobanner, .page-info, .info-banner, .zhishu-data-nav"),
            b = $("#breadnav"),
            c = $(".shuju-main-content"),
            d = $(".float-box");
        $(window).scroll(function() {
            0 < $(window).scrollTop() ?(
                a.addClass("hide"), b.addClass("sticky"), c.css("margin-top", "20px"), d.css("top", "5%")
            ):(
                a.removeClass("hide"), b.removeClass("sticky"), c.css("margin-top", "0px"), d.css("top", "17%")
            )
        })
    }

    $(".go-top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 900)
    });
});