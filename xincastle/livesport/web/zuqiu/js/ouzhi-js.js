$(document).ready(function() {
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
                g = $("#europeTable:not(.gogo)"),
                h = $("#europeTable.gogo"),
                i = $("#fakethead1, #fakethead2");
            0 < $(window).scrollTop() ? (
                a.addClass("hide"),
                b.addClass("sticky"),
                c.css("margin-top", "200px"),
                d.addClass("sticky2"),
                e.addClass("hidden"),
                f.addClass("sticky2"),
                g.addClass("gogo"),
                g.prepend('<div id="fakethead1" class="css-table fakethead"><div class="thead"><div class="tr nav"><div class="td style-arrow js-chooseall"style="width:45px;"><a href="javascript:;">全选</a><i class="icon-arrow_subform"></i></div><div class="td"class="bg-red"style="width:194px;"><div class="hide"><a href="javascript:;">全部公司<i class="icon-icon_dropMenu_arrow"></i></a></div><div class="company-slide hide"><ul><li><a href="javascript:;">全部公司</a></li><li><a href="javascript:;">主流公司</a></li><li><a href="javascript:;">交易所</a></li><li><a href="javascript:;">非交易所</a></li></ul></div></div><div class="td show-chupei"style="width:215px;"><span>即时赔率</span><a class="toggle-first"href="javascript:;"><span><i class="icon-icon_choice_c"></i>显示初赔</span></a></div><div class="td"style="width:215px;">即时概率（%）</div><div class="td"style="width:65px;">返还率</div><div class="td"style="width:214px;">凯利指数</div><div class="td"style="width:127px;">走势</div></div></div></div><div id="fakethead2" class="css-table fakethead"><div class="thead"><div class="tr title"><div class="td"style="width:243px;">赔率公司</div><div class="td"style="width:215px;"><div class="css-table"style="width:213px;"><div class="tr"style="width:213px;"><div class="td tr-data"style="width:71px;">胜</div><div class="td tr-data"style="width:71px;">平</div><div class="td tr-data"style="width:71px;">负</div></div></div></div><div class="td"style="width:215px;"><div class="css-table"style="width:213px;"><div class="tr"style="width:213px;"><div class="td tr-data"style="width:71px;">胜</div><div class="td tr-data"style="width:71px;">平</div><div class="td tr-data"style="width:71px;">负</div></div></div></div><div class="td"style="width:65px;"></div><div class="td"style="width:215px;"><div class="css-table"style="width:213px;"><div class="tr"style="width:213px;"><div class="td tr-data"style="width:71px;">胜</div><div class="td tr-data"style="width:71px;">平</div><div class="td tr-data"style="width:71px;">负</div></div></div></div><div class="td"style="width:127px;">&nbsp;</div></div></div></div>')
            ) : (
                a.removeClass("hide"),
                b.removeClass("sticky"),
                c.css("margin-top", "30px"),
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