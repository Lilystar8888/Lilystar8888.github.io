function circlereset(b,a,c){$(".chart").empty().removeData();$("#statistics-chart-23").attr("data-percent",b);$("#statistics-chart-24").attr("data-percent",a);$("#statistics-chart-25").attr("data-percent",c);$("#statistics-chart-23").circliful({animation:1,animationStep:5,foregroundBorderWidth:12,backgroundBorderWidth:10,percent:b,foregroundColor:"#ffa03b",percentageTextSize:32,textX:100,textY:120,textStyle:"font-size: 1.6em;",textColor:"#666",multiPercentage:1,percentages:[10,20,30]});$("#statistics-chart-24").circliful({animation:1,
animationStep:5,foregroundBorderWidth:12,backgroundBorderWidth:10,percent:a,foregroundColor:"#ffa03b",percentageTextSize:32,textX:100,textY:120,textStyle:"font-size: 1.6em;",textColor:"#666",multiPercentage:1,percentages:[10,20,30]});$("#statistics-chart-25").circliful({animation:1,animationStep:5,foregroundBorderWidth:12,backgroundBorderWidth:10,percent:c,foregroundColor:"#ffa03b",percentageTextSize:32,textX:100,textY:120,textStyle:"font-size: 1.6em;",textColor:"#666",multiPercentage:1,percentages:[10,
20,30]})}function switchtab(){$(".fixed-top .detail-nav li").not(".disabled").click(function(){event.preventDefault();$(".download-banner").remove();$(this).addClass("active").siblings("li").removeClass("active");var b=$(this).index();$(".detail-nav-content .js-content").eq(b).addClass("active-obj").removeClass("hide").siblings().addClass("hide").removeClass("active-obj");$(window).scrollTop(0);3==b&&($(".nano").nanoScroller(),$(".nano").nanoScroller({alwaysVisible:!0,scroll:"top"}))})}
$(document).ready(function(){function b(){var a=$(".detail-nav").outerHeight();a=Math.round($(parent.window).width()/790*460)+a;$(".fixed-top").outerHeight(a);$(".fixed-top-panel").outerHeight(a)}var a=location.href;a=a.substring(a.indexOf("?")+1);!isNaN(a)&&"undefined"!==a&&5>a&&($(".fixed-top .detail-nav li").eq(a).addClass("active").siblings("li").removeClass("active"),$(".detail-nav-content .js-content").eq(a).addClass("active-obj").removeClass("hide").siblings().addClass("hide").removeClass("active-obj"));
b();$(window).resize(function(){b()});a=$(".chart").attr("data-percent");$(".chart").circliful({animation:1,animationStep:5,foregroundBorderWidth:12,backgroundBorderWidth:10,percent:a,foregroundColor:"#ffa03b",percentageTextSize:32,textX:100,textY:120,textStyle:"font-size: 1.6em;",textColor:"#666",multiPercentage:1,percentages:[10,20,30]});switchtab();$(".fixed-top .mask").click(function(){$(".fixed-top .detail-header").toggleClass("hide");$(".fixed-top .detail-header .head-btn").attr("onclick","closeiframe();")});
$(".fixed-top .detail-header .head-btn").click(function(){$(".watch-live .link:nth-child(1), .watch-live .link:nth-child(2)").removeClass("active")});$(".analysis .live-code-nav li").click(function(){event.preventDefault();$(this).addClass("active").siblings("li").removeClass("active");var a=$(this).index();$(".analysis-block .list-content").eq(a).removeClass("hide").siblings().addClass("hide");$(window).scrollTop(0)});$(".odds .live-code-nav li").click(function(){event.preventDefault();$(this).addClass("active").siblings("li").removeClass("active");
var a=$(this).index();$(".odds-block .list-content").eq(a).removeClass("hide").siblings().addClass("hide");$(window).scrollTop(0)});$(".t1").click(function(){$(this).addClass("hide");$(".t2").removeClass("hide");$(".detail-nav-content .field .field-view.analysis .tabbed-one .td.hide").removeClass("hide").addClass("unhide")});$(".t2").click(function(){$(this).addClass("hide");$(".t1").removeClass("hide");$(".detail-nav-content .field .field-view.analysis .tabbed-one .td.unhide").removeClass("unhide").addClass("hide")});
$(".download-banner .icon-close").click(function(){$(".download-banner").remove()});$(".zhubo>iframe").click(function(){$(".zhubo .zhubo-header").toggleClass("hide")})});