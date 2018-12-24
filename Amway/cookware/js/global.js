
// #region $ 的擴充 function
var ua = navigator.userAgent;
// 是否為 iPad
$.isiPad = /ipad;/i.test(ua);
$.isIOS = $.isiPad || /(iphone|ipod);/i.test(ua);
$.isAndroid = /(android)/i.test(ua);
// 是否為行動裝置
$.isMobile = $.isIOS || $.isAndroid;


$(function () {
	$('body').on('click', '*[data-tracking]', function () {
		eval($(this).data('tracking'));
	});
	if ($.isMobile && !$.isiPad) {
		$(window).resize(function () {
			var vw = $(this).width();
			$('html').css({ fontSize: vw });
		}).resize();
		//nav
		$('a.menu').on('touchend', function () {
			$('body').toggleClass('open');
		});
		//topÁä
		$('.top').hide();
		$(window).scroll(function(){
			if($(this).scrollTop() >20){
				$('.top').fadeIn();
			}else{
				$('.top').fadeOut();
			}
		});
		$('.top').on('touchend',function(){
			$('body').animate({scrollTop:0},'slow')
		});	

		
		//TAB
		var curr = null;
		$('.fittings>li>a').on('click', function () {
			var $this = $(this);
			
			if($(this).parent('li').index() !=curr){
				$('.fittings .box').slideUp(500);
				$('li').removeClass('active');

				var t = $this.data('tracking');
				if(typeof(t) != 'undefined' && t != null){
					eval(t);
				}
				$(this).next().slideDown(500, function () {
					$(this).parent('li').addClass('active');
					var headHeight = $('header').innerHeight();
					$('body').animate({
						scrollTop : $(this).parent('li').offset().top - headHeight
					}, 500);
				});
				curr = $(this).parent('li').index();
			}else{
				$(this).next().slideUp(500).parent('li').removeClass('active');
				curr = null;
			}
		});
		//select
		$('.select-gray').change(function(){
			var url = $( '.select-gray option:selected').data('url');
			location.href = url;
		});
		$('.Kitchenware').on('click', 'span', function(){
			if(typeof(Storage) !== "undefined"){
				sessionStorage.item = $(this).data('item');
			};
			window.location.assign('21set-package.html');
		});
		$('nav a').on('click', function(){
            sessionStorage.clear();
        });
	}else{
		if($('html').hasClass('ie7')){
			$('body').prepend('<div class="fixie7 text-center">為順暢瀏覽本網站，請<a href="http://windows.microsoft.com/zh-TW/internet-explorer/download-ie">更新您的瀏覽器版本 </a></div>');
		};
		$(window).resize(function(){
			var w = $(this).width();
			var s = $(this).scrollTop();
			if(w > 1200){
				$('html').addClass('wide');
			}else{
				$('html').removeClass('wide');
			};
			if(s > 200){
				$('.top').show();
			}else {
				$('.top').hide();
			};
			if(s == 0){
				$('.top').css('bottom','70px');
			}else{
				$('.top').css('bottom',0);
			};
		}).resize()
		.scroll(function(){
			if($('body').hasClass('index')) return;
			var s = $(this).scrollTop();
			var d = $('#footer').position().top - s;
			var tt = $('.top').position().top - 29;
			if(s > 200){
				$('.top').show();
			}else {
				$('.top').hide();
			};
			if(d <= tt+30){
				$('.top').css('bottom','70px');
			}else{
				$('.top').css('bottom',0);
			};
		});
		$('body').on('click', '.more', function(){
			$(this).parents('.list').toggleClass('open').next().slideToggle(400);
		}).on('click', '.top', function(){
			$('body, html').animate({scrollTop:0}, 500);
		});

		$('.recipe-notes').each(function(){
			$(this).find('li:even').addClass('odd');
		});
		$('.recipe-source table').each(function(){
			if($(this).find('tr').is(':has(th)')){
				$(this).find('tr:has(th)').each(function(){
					$(this).nextUntil('tr:has(th)', 'tr:even').addClass('odd');
				});
			}else{
				$(this).find('tr:even').addClass('odd');
			}
		});
		$('.Kitchenware').on('click', 'span', function(){
			if(typeof(Storage) !== "undefined"){
				sessionStorage.product = $(this).data('product');
				sessionStorage.item = $(this).data('item');
			};
			window.open('product-package.html','_blank');
		});
		$('#header a').on('click', function(){
            sessionStorage.clear();
        });
	};

	$('a.share').click(function () {
		setTimeout(function () { 
			if($.isMobile){
				location.href = 'https://www.facebook.com/share.php?u=' + encodeURIComponent(location.href);
			}else{
				var url = 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href);
				window.open(url, '', 'width=572, height=300');
			}
		}, 200);
	});
});