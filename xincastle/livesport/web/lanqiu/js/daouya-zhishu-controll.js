$(function(){function K(){if(0!=$("#europeTable").size()){var b,c,a=$(".zhishu-main-content .main>tbody>tr:visible").size(),e=[0,0,0],f=[0,0,0],E=[0,0,0],t=[0,0,0],u=[0,0,0],F=[0,0,0],v=[0,0,0],w=[0,0,0],G=[0,0,0],x=[0,0,0],y=[0,0,0],H=[0,0,0],z=[0,0,0],A=[0,0,0],I=[0,0,0],B=[0,0,0],C=[0,0,0],J=[0,0,0],D=0;$(".zhishu-main-content .main>tbody>tr:visible").each(function(L){var m=$(this).find("td.peilv .css-table .tr").eq(0).find(".td").map(function(){return Number($(this).text())}),n=$(this).find("td.peilv .css-table .tr").eq(1).find(".td").map(function(){return Number($(this).text())}),
q=$(this).find(".gailv .css-table .tr").eq(0).data("rate"),r=$(this).find(".gailv .css-table .tr").eq(1).data("rate"),g=$(this).find(".fanhuan").data("rate");d=$(this).find("td.kelly>.css-table>.tr>.td").map(function(){return Number($(this).text())});p=$(this).find("td.kelly>.css-table>.tr>.td").map(function(){return Number($(this).text())});0==L?(e=n.slice(0),x=m.slice(0),f=n.slice(0),y=m.slice(0),t=r.slice(0),z=q.slice(0),u=r.slice(0),A=q.slice(0),v=d.slice(0),B=p.slice(0),w=d.slice(0),C=p.slice(0),
b=c=g):(h(e,n),h(x,m),k(f,n),k(y,m),h(t,r),h(z,q),k(u,r),k(A,q),h(v,d),h(B,p),k(w,d),k(C,p),g>b&&(b=g),g<c&&(c=g));l(E,n,a);l(H,m,a);l(F,r,a);l(I,q,a);l(G,d,a);l(J,p,a);D+=g/a});var d=function(a,b,c,e,d){a=a.find("td");a.eq(0).text(Number(b[0].toFixed(2)));a.eq(1).text(Number(b[1].toFixed(2)));a.eq(2).text(Number((100*c[0]).toFixed(2))+"%");a.eq(3).text(Number((100*c[1]).toFixed(2))+"%");a.eq(4).text(Number((100*c[2]).toFixed(2))+"%");a.eq(5).text(Number(d[0].toFixed(2)));a.eq(6).text(Number(d[1].toFixed(2)))};
d($("#europeStats").find("tr").eq(0),H,I,D,G);d($("#europeStats").find("tr").eq(1),E,F,D,J);d($("#europeStats").find("tr").eq(2),x,z,b,B);d($("#europeStats").find("tr").eq(3),e,t,b,v);d($("#europeStats").find("tr").eq(4),y,A,c,C);d($("#europeStats").find("tr").eq(5),f,u,c,w)}}function f(){var b=$(".zhishu-main-content .main>tbody>tr:visible").size();$(".total-tr").text(b);K()}var h=function(b,c){for(var a=0;a<c.length;a++)c[a]>b[a]&&(b[a]=c[a])},k=function(b,c){for(var a=0;a<c.length;a++)c[a]<b[a]&&
(b[a]=c[a])},l=function(b,c,a){for(var e=0;e<c.length;e++)b[e]+=c[e]/a};$(".all-tr").text($(".zhishu-main-content .main>tbody>tr").length);$(".js-chooseall").click(function(){$(".zhishu-main-content tbody tr").find(".choose i").toggleClass("icon-icon_choice1_c").toggleClass("icon-icon_choice1_n")});$(".baoliu").click(function(){$(".zhishu-main-content .choose i").hasClass("icon-icon_choice1_c")&&($(".icon-icon_choice1_n").parents().filter("tr").hide(),f())});$(".yincang").click(function(){$(".icon-icon_choice1_c").parents().filter("tr").hide();
f()});$(".xianshi").click(function(){$(".zhishu-main-content").find("tr").show();$(".zhishu-main-content .choose i").removeClass("icon-icon_choice1_c").addClass("icon-icon_choice1_n");f()});$(".company-slide li").click(function(){var b=$(this).find("a").text();$(".bg-red .slide-text").find("a").html(b+"<i class='icon-icon_dropMenu_arrow'></i>")});$(".filter-slide li").click(function(){var b=$(this).find("a").text();$(".filter").find("span.slide-text").html(b+"&#9660");$(".filter").data("type",$(this).data("value"))});
$("#oddFilter").click(function(){var b=Number($("[name=start]").val()),c=Number($("[name=end]").val()),a=Number($(".filter").data("type"));isNaN(a)||5<a||0>a||$(".zhishu-main-content .main>tbody>tr").each(function(){var e=$(this).find("td.peilv .css-table").find(".td").map(function(){return Number($(this).text())});e[a]>c||e[a]<b?$(this).hide():$(this).show();f()})});f();$(".toggle-first").click(function(){var b=$(this).find("i");b.hasClass("icon-icon_choice_c")?(b.removeClass("icon-icon_choice_c").addClass("icon-icon_choice_n"),
$(".rangQiu .first,.biaoZhunPan .first,.daXiaoQiu .first,.peilv .first,.gailv .first,.kelly .first, .fanhuan .first").hide()):(b.removeClass("icon-icon_choice_n").addClass("icon-icon_choice_c"),$(".rangQiu .first,.biaoZhunPan .first,.daXiaoQiu .first,.peilv .first,.gailv .first, .kelly .first, .fanhuan .first").show())});$(".ouzhi-pop .close-btn").click(function(){return $(this).parents(".ouzhi-pop").hide(),!1})});