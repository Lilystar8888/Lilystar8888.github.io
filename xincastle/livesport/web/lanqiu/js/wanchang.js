$(document).ready(function(){var b=$(window).height();$(document).height()>b&&$(window).scroll(function(){0<$(window).scrollTop()?$(".wc-nav-info").addClass("sticky"):$(".wc-nav-info").removeClass("sticky")});b=[{from:new Date(1991,1,1),to:new Date}];$(".calender-btn").glDatePicker({format:"yyyy-mm-dd",selectableDateRange:b,onClick:function(a,b,c,d){a=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();location.href=""+a},onShow:function(a){$(".calender-btn").addClass("active");a.show()},onHide:function(a){a.hide();
$(".calender-btn").removeClass("active")}});$(".js-competSlide").click(function(){$("#choose-compet").toggleClass("hide unhide");$("#choose-compet").addClass("animated fadeIn");event.stopPropagation()});$(".compet-name").closest("li").click(function(){$(this).find("i").toggleClass("icon-icon_choice_c icon-icon_choice_n");event.stopPropagation()});$(".choose-all").click(function(){$("#choose-compet").find("i.icon-icon_choice_n").removeClass("icon-icon_choice_n").addClass("icon-icon_choice_c");event.stopPropagation()});
$(".back-choose").click(function(){$("#choose-compet").find("i").toggleClass("icon-icon_choice_c icon-icon_choice_n");event.stopPropagation()});$(document).on("click",function(){$("#choose-compet").removeClass("unhide").addClass("hide")})});