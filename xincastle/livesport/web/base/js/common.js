function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(location.search);return null==a?"":decodeURIComponent(a[1])}$(window).scroll(function(){0<$(window).scrollTop()?$("#ss-tool-float").css("display","block"):$("#ss-tool-float").css("display","none")});
$(document).ready(function(){$('[class^="icon-btn"]').click(function(){$(this).toggleClass("selected")});$(".btn-login").click(function(){$(".login-sign-box, #loginBox").removeClass("hide");$(".exit-login").addClass("hide")});$(".close-login").click(function(){$(".login-sign-box, #loginBox, .exit-login").addClass("hide")});$(".btn-logout").click(function(){$(".login-sign-box, .exit-login").removeClass("hide");$("#loginBox").addClass("hide")});$(".user-exit-btn, .exit-login .btn-box .cancel-btn").click(function(){$(".login-sign-box, .exit-login").addClass("hide");
$("#loginBox").removeClass("hide")});$(".back-remark").hover(function(){$("i.icon-btn_feedback_n, .back-remark a span").toggleClass("hide unhide")});$(".back-top").hover(function(){$("i.icon-btn_backtop_n, .back-top a span").toggleClass("hide unhide")});$(".back-top").click(function(){$("html,body").animate({scrollTop:0},300)});$(".back-remark").click(function(){$(".feedback-wrap").toggleClass("hide unhide")});$(".feedback-box .box-bd .text-box .tab-con span").click(function(){$(this).parent().find("span").removeClass("current");
$(this).addClass("current")});$(".feedback-bg, .close-feedback").click(function(){$(".feedback-wrap").toggleClass("hide unhide")})});