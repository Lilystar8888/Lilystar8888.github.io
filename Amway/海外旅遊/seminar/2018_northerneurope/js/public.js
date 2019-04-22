$(document).ready(function(){
    (function() {
        var title = document.title,
            url = "http://" + location.hostname + location.pathname,
            href


        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            href = "http://line.naver.jp/R/msg/text/?" + title + "%0D%0A" + url;
        } else {

            href = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(url);
        }

        $("#lineShare").attr("href",href);
    })();

    bannerImageFlow();

    $("body").on("click", "#navbar-menu span", function () {
    	var $this = $(this)
        $this.addClass("menuClicked");
        setTimeout(function () {
            $this.removeClass("menuClicked");
        },200)
    })

    // click 返回最上層
    $("#top-button").click(function() {
        $("html,body").animate({"scrollTop":"0"});
    });

	// 特製化 step2 ~ step6 前三個 a 跳轉首頁滾動
	var parameters = location.search.substring(1).split("&");
	var temp = parameters[0].split("=");
    var page_num = unescape(temp[1]);

    if (page_num == 'd1') {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-1").offset().top})
		}, 400);
	}
	if (page_num == 'd2') {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-2").offset().top})
		}, 400);
	}
	if (page_num == 'd3') {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-3").offset().top})
		}, 400);
	}

	if (page_num == 1) {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-1").offset().top - $("#top-navbar").height()})
		}, 400);
	}
	if (page_num == 2) {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-2").offset().top - $("#top-navbar").height()})
		}, 400);
	}
	if (page_num == 3) {
		setTimeout(function(){ 
			$("html,body").animate({"scrollTop":$("#about-3").offset().top - $("#top-navbar").height()})
		}, 400);
	}

	// menu button 控制
	$('#menu-button').click(function(){
		$(this).toggleClass('open');
		if ($(this).attr("status") == "false") {
			menu_open_animate();
            $('body').addClass('lock-scroll');
			$(this).attr("status","true");
		} else {
			menu_close_animate();
            $('body').removeClass('lock-scroll');
			$(this).attr('status','false');
		}
	});

	// menu button 控制 (舊)
	$("#menu-open").click(function() {
		menu_open_animate();
	});

	$("#menu-close").click(function() {
		menu_open_animate();
	});

	// step2 image-card的寬度會根據圖片大小做調整
	$(window).resize(function() {
		// console.log($(".album1-img img").prop("width"));
		// console.log($("#album-size-reader").prop("width"));
		var width = $("#album-size-reader").prop("width");
		var height = $("#album-size-reader").prop("height");
		// console.log("width = " + width);
		// console.log("height = " + height);
		$(".image-card").css("width",width);
		$(".image-card").css("height",height);

		if (width < 600 && width >=450) {
			// $(".opacity-cover").hide();
			$(".image-card").css("height",height*2);
		}
		else if (width < 450) {
			// $(".opacity-cover").hide();
			$(".image-card").css("height",height*3);
			console.log("height = " + height*3);
		}
    });
    $(window).scroll(function(){
    	var width = $("#album-size-reader").prop("width");
		var height = $("#album-size-reader").prop("height");
		// console.log("width = " + width);
		// console.log("height = " + height);
		$(".image-card").css("width",width);
		$(".image-card").css("height",height);

		if (width < 600 && width >=450) {
			// $(".opacity-cover").hide();
			$(".image-card").css("height",height*2);
		}
		else if (width < 450) {
			// $(".opacity-cover").hide();
			$(".image-card").css("height",height*3);
		}
    });

    var current_day = 1;
    for(var k=0; k<$("#top-tab-select a").length; k++) {
    	$("#top-tab-select a:eq("+k+")").click({id:k},function(e) {
            $("#top-tab-select").children("a").removeClass("focus");
            $("#top-tab-select").children("a").children(":nth-child(1)").fadeOut(0);
            $("#top-tab-select").children("a").children(":nth-child(2)").fadeIn(0);
            $(this).addClass("focus");
    		$(this).children().eq(0).fadeIn(0);
            $(this).children().eq(1).fadeOut(0);
    		var index = e.data.id + 1;
    		for (var i=1;i<=$("#top-tab-select a").length;i++) {
    			// console.log('i = '+i);
    			// console.log('index = ' + index);
    			if (i==index) {
    				current_day = index;
    				$("#about-6-cancel").show();
    				$("#about-6-day"+i).show();
    				$(this).css("transition","all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1)");
    				$(this).css("background-position","0%");
    			} else {
    				$("#about-6-day"+i).hide();
    				$("#top-tab-select a:eq("+(i-1)+")").css("transition","");
    				$("#top-tab-select a:eq("+(i-1)+")").css("background-position","");
    			}
    		}
    	});
    }

    $("#about-6-cancel").click(function() {
    	$(this).hide();
    	$("#about-6-day"+current_day).hide();
    	$("#top-tab-select a:eq("+(current_day-1)+")").css("transition","");
    	$("#top-tab-select a:eq("+(current_day-1)+")").css("background-position","");
    });

    // mark.js 套件
    var mark = function() {

	    // Read the keyword
	    var keyword = $("#search-bar input[name='keyword']").val();

	    // Determine selected options
	    var options = {};
	    // $("search-bar input[name='opt[]']").each(function() {
	    //     options[$(this).val()] = $(this).is(":checked");
	    // });

	    // Remove previous marked elements and mark
	    // the new keyword inside the context
	    $(".context").unmark({
	        done: function() {
	            $(".context").mark(keyword, options);
	        }
	    });
	    // console.log($("#search-content mark").length);
	    if ($("#search-content mark").length > 0) {
	    	// console.log($("#search-content mark:eq(0)").offset().top);
	    	var text_top = $("#search-content mark:eq(0)").offset().top - 150;

	    	var width = 1100;
	    	if ($(document).width() < width) {
	    		$("html,body").animate({"scrollTop":text_top - $("#top-navbar").height()});
	    	} else {
	    		$("html,body").animate({"scrollTop":text_top});
	    	}
	    }
	};
	// 控制 search-button click事件
	$("#search-button").click(mark);
	// $("input[type='checkbox']").click("change", mark);

	// search-bar 為空onblur事件	
	$("#search-bar input[name='keyword']").blur(function() {
		var keyword = $("#search-bar input[name='keyword']").val();
		console.log("keyword.length = " + keyword.length);
		if (keyword.length == 0) {
			var options = {};
		    $(".context").unmark({
		        done: function() {
		            $(".context").mark(keyword, options);
		        }
		    });
		}
	});

	// step5 文字換行
	if ($("#search-content").html() != null) {
		// var step5_break_text = $("#search-content").html().replace(/(?:\r\n|\r|\n)/g, '<br />');
		$("#search-content").html(step5_break_text);
	}
	

	// step6 文字換行
	if ($("#about-8-content").html() != null) {
		var step6_break_content_title = $("#about-8-content-title").html().replace(/(?:\r\n|\r|\n)/g, '<br />');
		// var step6_break_content_text = $("#about-8-content-text").html().replace(/(?:\r\n|\r|\n)/g, '<br />');
		$("#about-8-content-title").html(step6_break_content_title);
		// $("#about-8-content-text").html(step6_break_content_text);
	}

	// step3 手風琴
	$(".about-5-item").on('click', function(){
		// console.log($(this).find('.accordion-arrow'));
		// console.log($(this).attr('aria-selected'));
		// console.log($(this).parent());
		var isClose = $(this).attr('aria-selected');
		if (isClose == 'true') {
			$(this).find('.accordion-arrow').removeClass('arrow-down-graph');
			$(this).find('.accordion-arrow').addClass('arrow-up-graph');
		}
		if (isClose == 'false') {
			$(this).find('.accordion-arrow').removeClass('arrow-up-graph');
			$(this).find('.accordion-arrow').addClass('arrow-down-graph');
		}

	})
});

function bannerImageFlow() {
	$(".bannerFrame").each(function () {
		var nowTop = this.getBoundingClientRect().top;
		$(this).children(".bannerBG").css("top",-nowTop);
    })

}

function menu_open_animate() {
	// 陰影顯示
	$("#top-navbar").css("box-shadow","0 1px 3px rgba(20%,20%,40%,0.5)");
	$("#menu-open").hide();
	$("#menu-close").show();

	// $("#navbar-menu").show();
	$("#navbar-menu").css('display', 'block');
	// $("#navbar-menu").removeClass('animated fadeOutUp');
	// $("#navbar-menu").addClass('animated fadeInDown');
	$("#navbar-menu").removeClass('animated slideOutRight');
	$("#navbar-menu").addClass('animated slideInRight');

	/*
	// step6
	$("#about-8").removeClass('animated slideInLeft');
	$("#about-8").addClass('animated slideOutLeft');

	// step5
	$("#about-7").removeClass('animated slideInLeft');
	$("#about-7").addClass('animated slideOutLeft');

	// step4
	$("#about-6").removeClass('animated slideInLeft');
	$("#about-6").addClass('animated slideOutLeft');

	// step3
	$("#about-5").removeClass('animated slideInLeft');
	$("#about-5").addClass('animated slideOutLeft');

	// step2
	$("#about-4").removeClass('animated slideInLeft');
	$("#about-4").addClass('animated slideOutLeft');

	// step1
	$("#about-3").removeClass('animated slideInLeft');
	$("#about-3").addClass('animated slideOutLeft');
	$("#about-2").removeClass('animated slideInLeft');
	$("#about-2").addClass('animated slideOutLeft');
	$("#about-1").removeClass('animated slideInLeft');
	$("#about-1").addClass('animated slideOutLeft');
	$("#index-background").removeClass('animated slideInLeft');
	$("#index-background").addClass('animated slideOutLeft');
	$("#index-background-video").removeClass('animated slideInLeft');
	$("#index-background-video").addClass('animated slideOutLeft');
	*/

	// $("#footer").hide();
	$("#top-button").hide();

	// $("body").css("overflow-y","hidden");
}

function menu_close_animate() {
	// 陰影不顯示
	$("#top-navbar").css("box-shadow","");
	$("#menu-close").hide();
	$("#menu-open").show();

	// $("#navbar-menu").hide();
	$("#navbar-menu").removeClass('animated slideInRight');
	$("#navbar-menu").addClass('animated slideOutRight');

	/*
	// step6
	$("#about-8").removeClass('animated slideOutLeft');
	$("#about-8").addClass('animated slideInLeft');

	// step5
	$("#about-7").removeClass('animated slideOutLeft');
	$("#about-7").addClass('animated slideInLeft');

	// step4
	$("#about-6").removeClass('animated slideOutLeft');
	$("#about-6").addClass('animated slideInLeft');

	// step3
	$("#about-5").removeClass('animated slideOutLeft');
	$("#about-5").addClass('animated slideInLeft');

	// step2
	$("#about-4").removeClass('animated slideOutLeft');
	$("#about-4").addClass('animated slideInLeft');

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
	*/

	$("#footer").show();
	if ($(window).scrollTop() > 0) {
		$("#top-button").show();
	}

	// $("body").css("overflow-y","");
}

// 監聽index視窗滾動
$(window).scroll(function(){
    // console.log($("#about-2").offset());
    // console.log($(window).scrollTop());
	bannerImageFlow();

    if ($(window).scrollTop() > 0) {
        $("#top-button").show();
    } else {
        $("#top-button").hide();
    }
})