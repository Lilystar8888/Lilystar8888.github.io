function fold() {
    $(".head-list").toggleClass("unfold")
}

function showChildren(n) {
    $(n).parents(".item").toggleClass("active").siblings(".item").not(".not").removeClass("active");
}

function showFd(n) {
    $(n).parents(".children").toggleClass("show");
}

function setCollection(n) {
    var i = this,
        a = $(n),
        e = a.parents("li").length > 0 ? a.parents("li") : a.parents(".item"),
        o = e.data("id"),
        l = $(".competitions-" + o),
        c = l.find(".icon-collecth"),
        p = $(".prompt"),
        fdlC = $(".fd-list.collection"),
        count = fdlC.find("li:not(.prompt)").length;
    a.hasClass("active") ? (
        c.removeClass("active animate"),
        fdlC.find(".competitions-" + o).slideUp(100, function() { $(this).remove() }),
        count > 1 ? p.addClass("hide") : p.removeClass("hide")
    ) : (
        c.addClass("active animate"),
        e.clone().appendTo(fdlC),
        count >= 0 ? p.addClass("hide") : p.removeClass("hide"),
        setTimeout(function() { c.removeClass("animate") }, 700)
    );
}

function DetailMatch(e) {
    var n = $(e),
        s = n.data("round");
    n.addClass("active").siblings(".link,li").removeClass("active"),
        $('.matches tr.data').each(function() {
            $(this).data("round") === s ? $(this).removeClass("hide") : $(this).addClass('hide');
        });
}

function ScreenMatch(e) {
    var n = $(e),
        s = n.data("screen");
    n.addClass("active").siblings(".link,li").removeClass("active"),
        $('.matches tr.data').each(function() {
            $(this).data("screen") === s ? $(this).removeClass("hide") : $(this).addClass('hide');
        });
}

function XScreenMatch(e) {
    var n = $(e),
        s = n.data("screen");
    n.addClass("active").siblings(".link,li").removeClass("active"),
        $('.groupttl, .league-match-screen, .matches, .jifen').each(function() {
            $(this).data("screen") === s ? $(this).removeClass("hide") : $(this).addClass('hide');
        });
}

function ScreenDetail(e) {
    var n = $(e),
        s = n.data("round"),
        x = n.data("screen");
    n.addClass("active").siblings(".link,li").removeClass("active"),
        $('.matches tr.data').each(function() {
            $(this).data("screen") === x ? ($(this).data("round") === s ?  $(this).removeClass("hide") : $(this).addClass('hide')):null
        });
}

function GroupDetail(e) {
    var n = $(e),
        s = n.data("group"),
        x = n.data("screen");
    n.addClass("active").siblings(".link,li").removeClass("active"),
        $('.matches tr.data, .jifen tr.data').each(function() {
            $(this).data("screen") === x ? ($(this).data("group") === s ? $(this).removeClass("hide") : $(this).addClass('hide')):null
        }),
        $('.groupttl').each(function() {
            $(this).data("screen") === x ? $(this).find('span').text(s) : null
        });
}

function tableListTdHover() {
    var n = this;
    $(".table-list").find(".table-one:not(.matches), .table-tow:not(.matches)").find("tr:not(.tips, .incident, .no-haver) td").each(function() {
        var n = $(this),
            i = n.index(),
            a = !1;
        n.stop().hover(function() {
            if (!a) {
                var e = n.parents("tr"),
                    o = e.siblings("tr");
                a = o.find("td:nth-child(" + (i + 1) + ")")
            }
            a.addClass("on")
        }, function() {
            a && a.removeClass("on")
        })
    })
}

function toggleTableList(n) {
    var i = $(n),
        a = i.data("id"),
        e = $(".match-nav-list .link-" + a),
        o = $(".select-" + a),
        s = $("#" + a),
        l = $("#" + i.data("go"));
    i.addClass("active").siblings(".link").removeClass("active"),
        e.addClass("active").siblings(".link").removeClass("active"),
        i.siblings(".select-box").addClass("hide"),
        e.siblings(".select-box").addClass("hide"),
        o.removeClass("hide"),
        s.removeClass("hide").siblings(".children.page-children").addClass("hide"),
        l.length && $('html, body').animate({ scrollTop: l.offset().top - 44 }, 1000);
}

function shooter(n) {
    var i = $(n),
        a = i.data("id"),
        e = i.parents(".children.page-children"),
        o = e.find(".table-page." + a);
    i.addClass("active").siblings(".link").removeClass("active"), o.removeClass("hide").siblings(".table-page").addClass("hide");
}

$("document").ready(function() {

    var SwitchClass = function(a, b) {
        $(a).click(function() {
            $(this).addClass("active").siblings(b).removeClass("active");
        });
    }

    SwitchClass(".database .data-type-check .link", ".link");

});