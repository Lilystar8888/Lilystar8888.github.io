$(function() {
    $(".zhishu-main-content table tbody tr:even").css("background-color", "#fff");
    $(".zhishu-main-content table tbody tr:odd").css("background-color", "#f2f2f2");
    $(".zouShi").hover(function() {
        $(this).find("i").toggleClass("icon-icon_datum_n icon-icon_datum_h")
    });
    $(".toggle-first").click(function() {
        $(this).find("i").toggleClass("icon-icon_choice_c icon-icon_choice_n");
        $(".zhishu-main-content table tbody tr td .first").toggleClass("hide unhide");
        event.stopPropagation()
    });
    var w = $(window).height(),
        d = $(".container").height();
    d > w ? (
        $(window).scroll(function() {
            var a = $(".navbar, .infobanner, .page-info, .info-banner, .zhishu-data-nav"),
                b = $("#breadnav"),
                d = $(".zhishu-main-content table.main"),
                e = $(".zhishu-main-content table.main thead"),
                f = $(".zhishu-func"),
                g = $("#SanheyiTable:not(.gogo)"),
                h = $("#SanheyiTable.gogo"),
                i = $("#fakethead");
            0 < $(window).scrollTop() ? (
                a.addClass("hide"),
                b.addClass("sticky"),
                d.addClass("sticky2"),
                e.addClass("hidden"),
                f.addClass("sticky2"),
                g.addClass("gogo"),
                g.prepend('<table id="fakethead"class="main"><thead><tr class="ssnav"><td width="163"class="bg-red"><div class="hide"><a href="javascript:;">全部公司<i class="icon-icon_dropMenu_arrow"></i></a></div><div class="company-slide hide"><ul><li><a href="javascript:;">全部公司</a></li><li><a href="javascript:;">主流公司</a></li><li><a href="javascript:;">交易所</a></li><li><a href="javascript:;">非交易所</a></li></ul></div></td><td width="270"class="show-chupei"><span>让球</span><a class="toggle-first"href="javascript:;"><span class=""><i class="icon-icon_choice_c"></i>显示初赔</span></a></td><td width="272">标准盘</td><td width="272">大小球</td><td class="zoushi">走势</td></tr><tr class="title"><td width="163"class="style-align">赔率公司</td><td><div class="css_table"><div class="tr"><div class="td tr-data">主队</div><div class="td tr-data">盘口</div><div class="td tr-data">客队</div></div></div></td><td><div class="css_table"><div class="tr"><div class="td tr-data">主胜</div><div class="td tr-data">和局</div><div class="td tr-data">客胜</div></div></div></td><td><div class="css_table"><div class="tr"><div class="td tr-data">大球</div><div class="td tr-data">盘口</div><div class="td tr-data">小球</div></div></div></td><td>&nbsp;</td></tr></thead></table>')
            ) : (
                a.removeClass("hide"),
                b.removeClass("sticky"),
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