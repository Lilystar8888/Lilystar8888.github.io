// JavaScript Document

$(document).ready(function() {

    //侦测各区块隐藏时 右边选单变暗
    $("#columns .content-wrap:hidden").each(function() {
        var t = $(this).data('index') - 1;
        $(".tool-box ul li").eq(t).addClass("disabled");
    });

    //侦测近期战绩主客队显示隐藏 20181019
    var HomeGuest = function(a,b){
        if ($(a).is(":hidden")) {
            $(b).removeClass('hide');
            $(b).click(function() {
                $(a).toggleClass('hide');
                $(b).toggleClass('active');
            });
        }
    };

    var rvsl = '.recent-compet .recent-content .vsl-content',
        rvsr = '.recent-compet .recent-content .vsr-content',
        vslb = '.title-box .func-btn-wrap .showvsl',
        vsrb = '.title-box .func-btn-wrap .showvsr';

    HomeGuest(rvsl,vslb),
    HomeGuest(rvsr,vsrb);

    //图表初始化
    var ctvsl1 = $("#recent-saiguo-vsl").highcharts();
    var ctvsl2 = $("#recent-panlu-vsl").highcharts();
    var ctvsl3 = $("#recent-daxiao-vsl").highcharts();
    var ctvsl4 = $("#recent-danshuang-vsl").highcharts();

    var ctvsr1 = $("#recent-saiguo-vsr").highcharts();
    var ctvsr2 = $("#recent-panlu-vsr").highcharts();
    var ctvsr3 = $("#recent-daxiao-vsr").highcharts();
    var ctvsr4 = $("#recent-danshuang-vsr").highcharts();

    //以往盘路（上盘场数）大者加粗
    var vslq1 = $('#vslq1').text();
    var vsrq1 = $('#vsrq1').text();
    vslq1 > vsrq1 ? $('#vsl1').addClass('highlight'):$('#vsr1').addClass('highlight');

    //以往盘路（下盘场数）大者加粗
    var vslq2 = $('#vslq2').text();
    var vsrq2 = $('#vsrq2').text();
    vslq2 > vsrq2 ? $('#vsl2').addClass('highlight'):$('#vsr2').addClass('highlight');

    //使上一场阵容左右表格等高
    var height = 0;
    $('tr.zhenrongl, tr.zhenrongr').each(function() {
        height = $(this).height() > height ? $(this).height() : height;
    }).height(height + 50);

    //阵容数字圈圈
    $('.compet-zhenrong table tr td').not('.pp').html(function(index, value) {
        return value.replace(/(\d+)/g, '<span>$1</span>');
    });

    //全部赛事 5场 赛事筛选 全半场 欧洲指数 亚洲盘口 滑动开启选单 20181019
    var toggleMenu = function(a,b){
        $(a).mouseenter(function() { $(this).find(b).removeClass('hide').addClass('unhide'); })
            .mouseleave(function() { $(this).find(b).removeClass('unhide').addClass('hide'); });
    };

    var m1 = '.all-compet, .changci, .choose-compet, .fullhalf',
        t1 = '.choose-wrap-slide',
        m2 = '.ouzhi, .zhongpan',
        t2 = '.ouzhi-slide';

    toggleMenu(m1,t1),
    toggleMenu(m2,t2);

    //切换选项标题
    $('.choose-wrap-slide ul li').on('click', function() {
        var showtext = $(this).html();
        $(this).parent().parent().parent().parent().find('span').text(showtext);
    });

    //点选关闭选单  20170731
    $('.choose-wrap-slide, .ouzhi .ouzhi-slide, .zhongpan .ouzhi-slide').click(function(e) { e.preventDefault();
        $(this).removeClass('unhide').addClass('hide'); });


    //欧賠初始化 20181019
    var ShowOuzhi = function(a){
        $(a).not('.no-record').each(function() {
            var euodds = $(this).data('eu-odds');
            if (euodds != null && euodds[0]) {
                var a_1 = '';
                var b_1 = '';
                var c_1 = '';
                a_1 = (euodds[0][0] == undefined || euodds[0][0] == 0) ? ('') : (euodds[0][0]);
                b_1 = (euodds[0][1] == undefined || euodds[0][1] == 0) ? ('') : (euodds[0][1]);
                c_1 = (euodds[0][2] == undefined || euodds[0][2] == 0) ? ('') : (euodds[0][2]);
                $(this).find('td:eq(5)').html("<span>" + a_1 + "</sapn>");
                $(this).find('td:eq(6)').html("<span>" + b_1 + "</sapn>");
                $(this).find('td:eq(7)').html("<span>" + c_1 + "</sapn>");
            }
        });
    }

    var s1 = 'table.recent-rival > tbody > tr',
        s2 = '.recent-compet .vsl-content table.team-recent-match > tbody > tr',
        s3 = '.recent-compet .vsr-content table.team-recent-match > tbody > tr';


    ShowOuzhi(s1),ShowOuzhi(s2),ShowOuzhi(s3);

    var UpdateOuzhi = function(cid,a){
        $(a).not('.no-record').each(function() {
            var euodds = $(this).data('eu-odds');
            if (euodds != null && euodds[0]) {

                var a_1 = '';
                var b_1 = '';
                var c_1 = '';
                a_1 = (euodds[cid][0] == undefined || euodds[cid][0] == 0) ? ('') : (euodds[cid][0]);
                b_1 = (euodds[cid][1] == undefined || euodds[cid][1] == 0) ? ('') : (euodds[cid][1]);
                c_1 = (euodds[cid][2] == undefined || euodds[cid][2] == 0) ? ('') : (euodds[cid][2]);

                $(this).find('td:eq(5)').html("<span>" + a_1 + "</sapn>");
                $(this).find('td:eq(6)').html("<span>" + b_1 + "</sapn>");
                $(this).find('td:eq(7)').html("<span>" + c_1 + "</sapn>");
            }
        });
    }


    //欧賠 切换公司 20181019
    var OuzhiClick = function(a,b,c){
        $(a).click(function() {
            var company = $(this).text(), cid = $(this).data('value');
            $(b).text(company),
            UpdateOuzhi(cid,c);
        });
    }

    var x1 = '.history-compet .ouzhi .ouzhi-slide ul li',
        y1 = '.history-compet .ouzhi>span',
        x2 = '.recent-compet .vsl-content .ouzhi .ouzhi-slide ul li',
        y2 = '.recent-compet .vsl-content .ouzhi>span',
        x3 = '.recent-compet .vsr-content .ouzhi .ouzhi-slide ul li',
        y3 = '.recent-compet .vsr-content .ouzhi>span';

    OuzhiClick(x1,y1,s1),OuzhiClick(x2,y2,s2),OuzhiClick(x3,y3,s3);


    var pkn, //開幾場盤
        d1, //勝
        d2, //平
        d3, //負

        e1, //贏
        e2, //輸
        e3, //走

        f1, //大
        f2, //小
        f3, //走

        e1_p, //贏
        e2_p, //輸
        e3_p, //走

        f1_p, //大
        f2_p, //小
        f3_p; //走


    //亞賠初始化
    var InitYazhi  = function(){
        pkn = 0;
        d1 = 0;
        d2 = 0;
        d3 = 0;
        e1 = 0;
        e2 = 0;
        e3 = 0;
        f1 = 0;
        f2 = 0;
        f3 = 0;
        e1_p = 0;
        e2_p = 0;
        e3_p = 0;
        f1_p = 0;
        f2_p = 0;
        f3_p = 0;
    };

    //更新图表
    var UpdateGraph = function(a,b,c,d){

        b.series[0].update({ data: JSON.parse('[["胜",' + d1 + '],["平",' + d2 + '],["负",' + d3 + ']]') });
        c.series[0].update({ data: JSON.parse('[["赢",' + e1 + '],["走",' + e3 + '],["输",' + e2 + ']]') });
        d.series[0].update({ data: JSON.parse('[["大",' + f1 + '],["走",' + f3 + '],["小",' + f2 + ']]') });

        var q = $(a).find(".saiguo-chart"), r = $(a).find(".panlu-chart"), s = $(a).find(".daxiao-chart");

        d1 == 0 && d2 == 0 && d3 == 0 ? q.addClass('hide') : q.removeClass('hide');
        e1 == 0 && e2 == 0 && e3 == 0 ? r.addClass('hide') : r.removeClass('hide');
        f1 == 0 && f2 == 0 ? s.addClass('hide') : s.removeClass('hide');
    }

    //亞賠
    var ShowYazhi = function(a,b,c){
        InitYazhi(),
        $(a).not('.no-record').each(function() {
            var asiaodds = $(this).data('asia-odds'),dd = '',ee = '',ff = '';
            if (asiaodds != null && asiaodds[0]) {
                if (asiaodds[0].d1 == '勝') { dd = '<span class="win">' + asiaodds[0].d1 + "</span>";d1++;}
                if (asiaodds[0].d1 == '負') { dd = '<span class="lose">' + asiaodds[0].d1 + "</span>";d2++;}
                if (asiaodds[0].d1 == '平') { dd = '<span class="even">' + asiaodds[0].d1 + "</span>";d3++;}
                if (asiaodds[0].e1 == '贏') { ee = '<span class="win">' + asiaodds[0].e1 + "</span>";e1++}
                if (asiaodds[0].e1 == '輸') { ee = '<span class="lose">' + asiaodds[0].e1 + "</span>";e2++}
                if (asiaodds[0].e1 == '走') { ee = '<span class="even">' + asiaodds[0].e1 + "</span>";e3++}
                if (asiaodds[0].f1 == '大') { ff = '<span class="win">' + asiaodds[0].f1 + "</span>";f1++}
                if (asiaodds[0].f1 == '小') { ff = '<span class="lose">' + asiaodds[0].f1 + "</span>";f2++}
                if (asiaodds[0].f1 == '走') { ff = '<span class="even">' + asiaodds[0].f1 + "</span>";f3++}
                var a_1 = '';
                var b_1 = '';
                var c_1 = '';
                a_1 = (asiaodds[0].a1 == undefined || asiaodds[0].a1 == -99) ? ('') : (asiaodds[0].a1);
                b_1 = (asiaodds[0].b1 == undefined || asiaodds[0].b1 == -99) ? ('') : (asiaodds[0].b1);
                c_1 = (asiaodds[0].c1 == undefined || asiaodds[0].c1 == -99) ? ('') : (asiaodds[0].c1);

                $(this).find('td:eq(8)').html(dd);
                $(this).find('td:eq(9)').html("<span>" + a_1 + "</sapn>");
                $(this).find('td:eq(10)').html("<span>" + b_1 + "</sapn>");
                $(this).find('td:eq(11)').html("<span>" + c_1 + "</sapn>");
                $(this).find('td:eq(12)').html(ee);
                $(this).find('td:eq(13)').html(ff);

                if (asiaodds[0].a1 != 0 && asiaodds[0].c1 != 0) pkn++;

                if (pkn != 0) {
                    e1_p = Number((e1 / pkn) * 100).toFixed(2);
                    e2_p = Number((e2 / pkn) * 100).toFixed(2);
                    e3_p = Number((e3 / pkn) * 100).toFixed(2);

                    f1_p = Number((f1 / pkn) * 100).toFixed(2);
                    f2_p = Number((f2 / pkn) * 100).toFixed(2);
                    f3_p = Number((f3 / pkn) * 100).toFixed(2);
                }
            }
        });
        var tn = $(b).eq(0).find('.t2').text().split('，')[1];
        $(b).find('.t2').html("<span>" + parseInt(e1 + e2 + e3) + "</span>场开盘，" + tn);
        $(b).find('.win').eq(1).html("<span>" + e1 + '</span>赢盘 <span class="pp">(' + e1_p + '%)</span>');
        $(b).find('.even').eq(1).html("<span>" + e3 + '</span>走水 <span class="pp">(' + e3_p + '%)</span>');
        $(b).find('.lose').eq(1).html("<span>" + e2 + '</span>输盘 <span class="pp">(' + e2_p + '%)</span>');
        $(b).find('.win').eq(2).html("<span>" + f1 + '</span>场大 <span class="pp">(' + f1_p + '%)</span>');
        $(b).find('.even').eq(2).html("<span>" + f3 + '</span>走水 <span class="pp">(' + f3_p + '%)</span>');
        $(b).find('.lose').eq(2).html("<span>" + f2 + '</span>场小 <span class="pp">(' + f2_p + '%)</span>');
        c === '.vslct' ? UpdateGraph(c,ctvsl1,ctvsl2,ctvsl3) : UpdateGraph(c,ctvsr1,ctvsr2,ctvsr3);
    };

    var z1 = 'table.recent-rival > tbody > tr',
        g1 = '.history-info',
        z2 = '.recent-compet .vsl-content table.team-recent-match > tbody > tr',
        g2 = '.recent-compet .vsl-content .chartinfo',
        h1 = '.vslct',
        z3 = '.recent-compet .vsr-content table.team-recent-match > tbody > tr',
        g3 = '.recent-compet .vsr-content .chartinfo',
        h2 = '.vsrct';

    ShowYazhi(z1,g1),ShowYazhi(z2,g2,h1),ShowYazhi(z3,g3,h2);

    var UpdateYazhi = function(cid,a,b,c){
        InitYazhi(),
        $(a).not('.no-record').each(function() {
            var asiaodds = $(this).data('asia-odds'),dd = '',ee = '',ff = '';
            if (asiaodds != null && asiaodds[0]) {
                if (asiaodds[cid].d1 == '勝') { dd = '<span class="win">' + asiaodds[cid].d1 + "</span>";
                    d1++ }
                if (asiaodds[cid].d1 == '負') { dd = '<span class="lose">' + asiaodds[cid].d1 + "</span>";
                    d2++ }
                if (asiaodds[cid].d1 == '平') { dd = '<span class="even">' + asiaodds[cid].d1 + "</span>";
                    d3++ }

                if (asiaodds[cid].e1 == '贏') { ee = '<span class="win">' + asiaodds[cid].e1 + "</span>";
                    e1++ }
                if (asiaodds[cid].e1 == '輸') { ee = '<span class="lose">' + asiaodds[cid].e1 + "</span>";
                    e2++ }
                if (asiaodds[cid].e1 == '走') { ee = '<span class="even">' + asiaodds[cid].e1 + "</span>";
                    e3++ }

                if (asiaodds[cid].f1 == '大') { ff = '<span class="win">' + asiaodds[cid].f1 + "</span>";
                    f1++ }
                if (asiaodds[cid].f1 == '小') { ff = '<span class="lose">' + asiaodds[cid].f1 + "</span>";
                    f2++ }
                if (asiaodds[cid].f1 == '走') { ff = '<span class="even">' + asiaodds[cid].f1 + "</span>";
                    f3++ }

                var a_1 = '';
                var b_1 = '';
                var c_1 = '';
                a_1 = (asiaodds[cid].a1 == undefined || asiaodds[cid].a1 == -99) ? ('') : (asiaodds[cid].a1);
                b_1 = (asiaodds[cid].b1 == undefined || asiaodds[cid].b1 == -99) ? ('') : (asiaodds[cid].b1);
                c_1 = (asiaodds[cid].c1 == undefined || asiaodds[cid].c1 == -99) ? ('') : (asiaodds[cid].c1);


                $(this).find('td:eq(8)').html(dd);
                $(this).find('td:eq(9)').html("<span>" + a_1 + "</sapn>");
                $(this).find('td:eq(10)').html("<span>" + b_1 + "</sapn>");
                $(this).find('td:eq(11)').html("<span>" + c_1 + "</sapn>");
                $(this).find('td:eq(12)').html(ee);
                $(this).find('td:eq(13)').html(ff);

                if (asiaodds[cid].a1 != -99 && asiaodds[cid].c1 != -99) pkn++;

                if (pkn != 0) {
                    e1_p = Number((e1 / pkn) * 100).toFixed(2);
                    e2_p = Number((e2 / pkn) * 100).toFixed(2);
                    e3_p = Number((e3 / pkn) * 100).toFixed(2);

                    f1_p = Number((f1 / pkn) * 100).toFixed(2);
                    f2_p = Number((f2 / pkn) * 100).toFixed(2);
                    f3_p = Number((f3 / pkn) * 100).toFixed(2);

                }
            }
        });
        var tn1 = $(b).eq(0).find('.t2').text().split('，')[1];
        console.log($(b).eq(0).find('.t2').text());
        console.log('tn1 : ' + tn1);
        $(b).find('.t2').html("<span>" + parseInt(e1 + e2 + e3) + "</span>场开盘，" + tn1);
        $(b).find('.win').eq(1).html("<span>" + e1 + '</span>赢盘 <span class="pp">(' + e1_p + '%)</span>');
        $(b).find('.even').eq(1).html("<span>" + e3 + '</span>走水 <span class="pp">(' + e3_p + '%)</span>');
        $(b).find('.lose').eq(1).html("<span>" + e2 + '</span>输盘 <span class="pp">(' + e2_p + '%)</span>');
        $(b).find('.win').eq(2).html("<span>" + f1 + '</span>场大 <span class="pp">(' + f1_p + '%)</span>');
        $(b).find('.even').eq(2).html("<span>" + f3 + '</span>走水 <span class="pp">(' + f3_p + '%)</span>');
        $(b).find('.lose').eq(2).html("<span>" + f2 + '</span>场小 <span class="pp">(' + f2_p + '%)</span>');
        c === '.vslct' ? UpdateGraph(c,ctvsl1,ctvsl2,ctvsl3) : UpdateGraph(c,ctvsr1,ctvsr2,ctvsr3);
    }

    //亚洲盘口 切换公司

    var n1 = '.history-compet .zhongpan .ouzhi-slide ul li',
        o1 = '.history-compet .zhongpan>span',
        n2 = '.recent-compet .vsl-content .zhongpan .ouzhi-slide ul li',
        o2 = '.recent-compet .vsl-content .zhongpan>span',
        n3 = '.recent-compet .vsr-content .zhongpan .ouzhi-slide ul li',
        o3 = '.recent-compet .vsr-content .zhongpan>span';

    //歷史交鋒 - 亚洲盘口 切换公司 20170728

    var YazhiClick = function(a,b,c,d,e){
        $(a).click(function() {
            var company = $(this).text();
            $(b).text(company);
            var cid = $(this).data('value');
            UpdateYazhi(cid,c,d,e);
        });
    }

    YazhiClick(n1,o1,z1,g1),YazhiClick(n2,o2,z2,g2,h1),YazhiClick(n3,o3,z3,g3,h2);

}); //最後的括號勿刪除