// 滾動顯示誤差
var srollHigh = 300;
// index 監聽螢幕的寬
var window_width = 0;
$(window).resize(function() {
	window_width = $(document).width();

	if (window_width < 1100) {
		$("#ship-nav").removeClass("ship-nav-display-block");
		$("#ship-nav").addClass("ship-nav-display-none");
	} else {
		ship_animate();
	}
});

$(document).ready(function(){

	// 監聽螢幕寬度初始化
	window_width = $(document).width();

	// 小船nav初始化隱藏
	$(".nav-ship").hide();

	// 上方nav click事件
	$("#nav-container a:eq(0)").click(function() {
		$("html,body").animate({"scrollTop":$("#about-1").offset().top})
	});
	$("#nav-container a:eq(1)").click(function() {
		$("html,body").animate({"scrollTop":$("#about-2").offset().top})
	});
	$("#nav-container a:eq(2)").click(function() {
		$("html,body").animate({"scrollTop":$("#about-3").offset().top})
	});

	// navbar-menu
	$("#navbar-menu a:eq(0)").click(function() {
		// console.log($("#top-navbar").height());
		$('#menu-button').toggleClass('open');
		$('#menu-button').attr("status","false");
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-1").offset().top - $("#top-navbar").height()})
			$("#navbar-menu").hide();
			// $("#menu-close").hide();
			// $("#menu-open").show();
			$("#top-navbar").css("box-shadow","");
		}, 1000);
		slide_aninate();
        $('body').removeClass('lock-scroll');
	});
	$("#navbar-menu a:eq(1)").click(function() {
		$('#menu-button').toggleClass('open');
		$('#menu-button').attr("status","false");
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-2").offset().top - $("#top-navbar").height()})
			$("#navbar-menu").hide();
			// $("#menu-close").hide();
			// $("#menu-open").show();
			$("#top-navbar").css("box-shadow","");
		}, 1000);
		slide_aninate();
        $('body').removeClass('lock-scroll');
	});
	$("#navbar-menu a:eq(2)").click(function() {
		$('#menu-button').toggleClass('open');
		$('#menu-button').attr("status","false");
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-3").offset().top - $("#top-navbar").height()})
			$("#navbar-menu").hide();
			// $("#menu-close").hide();
			// $("#menu-open").show();
			$("#top-navbar").css("box-shadow","");
		}, 1000);
		slide_aninate();
        $('body').removeClass('lock-scroll');
	});

	function slide_aninate() {
		// $("#navbar-menu").hide();
		$("#navbar-menu").removeClass('animated slideInRight');
		$("#navbar-menu").addClass('animated slideOutRight');
		// step1
		$("#about-3").removeClass('animated slideOutLeft');
		$("#about-3").addClass('animated slideInLeft');
		$("#about-2").removeClass('animated slideOutLeft');
		$("#about-2").addClass('animated slideInLeft');
		$("#about-1").removeClass('animated slideOutLeft');
		$("#about-1").addClass('animated slideInLeft');
		$("#index-background").removeClass('animated slideOutLeft');
		$("#index-background").addClass('animated slideInLeft');
		$("#index-background-video").removeClass('animated slideOutLeft');
		$("#index-background-video").addClass('animated slideInLeft');
	}
});

// 監聽index視窗滾動
$(window).scroll(function(){
	// console.log($("#about-2").offset());
	// console.log($(window).scrollTop());

	// if ($(window).scrollTop() > 0) {
	// 	$("#top-button").show();
	// } else {
	// 	$("#top-button").hide();
	// }

	// 如果螢幕寬度太小則隱藏小船
	// if (window_width < 1100) {
	// 	$("#ship-nav").hide();
	// } else {
	// 	$("#ship-nav").show();
	// }

	if (window_width >= 1100) {
		ship_animate();
		showHeaderOnTop();
	}

	// 動畫浮出控制
	if ($(window).scrollTop() >= ($("#about-1").offset().top)-700) {
		// 關於北歐 左右浮出動畫
		$("#about-1-img-animate-1").addClass('animated fadeInLeft');
		$("#about-1-img-animate-2").addClass('animated fadeInRight');
	}
	if ($(window).scrollTop() >= $("#about-2").offset().top - 500) {
		// 關於郵輪 下往上浮出動畫
		$("#about-2-animate-01").addClass('animated fadeInUp');
	}
	if ($(window).scrollTop() >= $("#about-3").offset().top - 500) {
		// 關於郵輪 下往上浮出動畫
		$("#about-3-animate-01").addClass('animated fadeInUp');
	}
});

function showHeaderOnTop() {
   if ($(window).scrollTop()>=($("#about-1").offset().top -100)){
   		$("#topHeader").addClass("headerFixed")
   }else{
       $("#topHeader").removeClass("headerFixed")
   }
}

// 小船動畫
function ship_animate() {
	if ($(window).scrollTop() < ($("#about-1").offset().top - srollHigh)) {
		$("#ship-nav").removeClass("ship-nav-display-block");
		$("#ship-nav").addClass("ship-nav-display-none");
	}
	if ($(window).scrollTop() >= ($("#about-1").offset().top - srollHigh) && $(window).scrollTop() < $("#about-2").offset().top) {
		// 小船左往右浮出動畫
		$("#ship-nav").removeClass("ship-nav-display-none");
		$("#ship-nav").addClass("ship-nav-display-block");

		for (var i = 1; i <= 3; i++) {
			$("#nav-ship-1").show();
			$("#nav-dot-1").hide();
			if (i != 1) {
				$("#nav-dot-" + i).show();
				$("#nav-ship-" + i).hide();
			}
		}
	}
	if ($(window).scrollTop() >= ($("#about-2").offset().top - srollHigh) && $(window).scrollTop() < $("#about-3").offset().top) {
		$("#ship-nav").removeClass("ship-nav-display-none");
		$("#ship-nav").addClass("ship-nav-display-block");

		for (var i = 1; i <= 3; i++) {
			$("#nav-ship-2").show();
			$("#nav-dot-2").hide();
			if (i != 2) {
				$("#nav-dot-" + i).show();
				$("#nav-ship-" + i).hide();
			}
		}
	}
	if ($(window).scrollTop() >= ($("#about-3").offset().top - srollHigh) && $(window).scrollTop() < $("#footer").offset().top) {
		$("#ship-nav").removeClass("ship-nav-display-none");
		$("#ship-nav").addClass("ship-nav-display-block");

		for (var i = 1; i <= 3; i++) {
			$("#nav-ship-3").show();
			$("#nav-dot-3").hide();
			if (i != 3) {
				$("#nav-dot-" + i).show();
				$("#nav-ship-" + i).hide();
			}
		}
	}
}