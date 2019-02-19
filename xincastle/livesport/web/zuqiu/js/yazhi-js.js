$(function() {
    $(".zhishu-main-content table tbody tr:nth-child(even)").css("background-color", "#f2f2f2");
    $(".zhishu-main-content table tbody tr:nth-child(odd)").css("background-color", "#ffffff");
    $("i.icon-icon_choice1_n").click(function() {
        $(this).toggleClass("icon-icon_choice1_n icon-icon_choice1_c")
    });
    $(".zouShi").hover(function() {
        $(this).find("i").toggleClass("icon-icon_datum_n icon-icon_datum_h")
    });
    $(".filter").hover(function() {
        $(".filter-slide").toggleClass("hide unhide");
        event.stopPropagation()
    });
    var w = $(window).height(),
        d = $(".container").height();
    d > w ? (
        $(window).scroll(function() {
            var a = $(".navbar, .infobanner, .page-info, .info-banner, .zhishu-data-nav"),
                b = $("#breadnav"),
                c = $(".zhishu-main-content"),
                d = $(".zhishu-main-content table.main"),
                e = $(".zhishu-main-content table.main thead"),
                f = $(".zhishu-func"),
                g = $("#asiaTable:not(.gogo), #bigsmallTable:not(.gogo)"),
                h = $("#asiaTable.gogo, #bigsmallTable.gogo"),
                i = $("#fakethead");
            0 < $(window).scrollTop() ? (
                a.addClass("hide"),
                b.addClass("sticky"),
                c.css("margin-top", "200px"),
                d.addClass("sticky2"),
                e.addClass("hidden"),
                f.addClass("sticky2"),
                g.addClass("gogo"),
                g.prepend('<table id="fakethead" class="main"><thead><tr class="nav"><td class="style-arrow js-chooseall"><a href="javascript:;">全选</a><i class="icon-arrow_subform"></i></td><td class="bg-red slide-text"><div class="hide"><span>全部公司</span><i class="icon-icon_dropMenu_arrow"></i></div><div class="company-slide hide"><ul><li><a href="javascript:;">全部公司</a></li><li><a href="javascript:;">主流公司</a></li><li><a href="javascript:;">交易所</a></li><li><a href="javascript:;">非交易所</a></li></ul></div></td><td colspan="3">即时盘口</td><td colspan="3">初始盘口</td><td>变化时间</td><td class="zoushi">走势</td></tr><tr class="title"><td colspan="2"class="style-align peilv"><div>赔率公司</div></td><td class="rate">主赔</td><td class="rate">让球</td><td class="rate">客赔</td><td class="rate">主赔</td><td class="rate">让球</td><td class="rate">客赔</td><td class="time"></td><td class="zoushi"></td></tr></thead></table>')
            ) : (
                a.removeClass("hide"),
                b.removeClass("sticky"),
                c.css("margin-top", "0"),
                d.removeClass("sticky2"),
                e.removeClass("hidden"),
                f.removeClass("sticky2"),
                h.removeClass("gogo"),
                i.remove()
            )
        })
    ) : (
        null
    )
});
$(function() {
    function a(a, b, c) {
        $(a).click(function() {
            $(b).hide();
            $(c).show()
        })
    }
    a(".ouzhi-pop .show-table .fold-btn", ".show-table", ".show-chart");
    a(".ouzhi-pop .show-chart .fold-btn", ".show-chart", ".show-table");
    a(".ouzhi-pop .content .tab-title .js-btn1", ".show-table", ".show-chart");
    a(".ouzhi-pop .content .tab-title .js-btn2", ".show-chart", ".show-table");
    $(".ouzhi-pop .close-btn").click(function() {
        $(this).parents(".ouzhi-pop").hide()
    });
    $(document).bind("click", function(a) {
        0 == $(a.target).closest(".zhishu-main-content .peilv").length &&
            $(".ouzhi-pop").hide()
    });
    $(".zhishu-main-content .peilv").click(function() {
        $(this).find(".ouzhi-pop").show();
        $(this).parents("tr").siblings("tr").find(".ouzhi-pop").hide()
    })
});