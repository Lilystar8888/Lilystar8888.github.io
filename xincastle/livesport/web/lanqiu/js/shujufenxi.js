// JavaScript Document

$(document).ready(function () {

	//關閉lightbox
	$('body').click(function () {
		$('[data-lity-close]').trigger('click');
	});

	//盤路走勢比分彈框
	$('.shuju-main-content .compet-panlu .panlu-content .bifen, .shuju-main-content .history-compet table tr .score, .shuju-main-content .recent-compet .recent-content .vsl-content table tr .score, .shuju-main-content .recent-compet .recent-content .vsr-content table tr .score')
	  .mouseenter(function(){
		$(this).find('.bfTooltip').removeClass('hide');
	}).mouseleave(function(){
		$(this).find('.bfTooltip').addClass('hide');
	});

	$('.bfTooltip').mouseenter(function(){
		$(this).addClass('hide');
	});

	//侦测各区块隐藏时 右边选单变暗
        $("#columns .content-wrap:hidden").each(function() {
            var t = $(this).data('index')-1;
            $(".tool-box ul li").eq(t).addClass("disabled");
    });

	//侦测近期战绩主客队显示隐藏 20170904
	var rvsl = $('.shuju-main-content .recent-compet .recent-content .vsl-content');
	var rvsr = $('.shuju-main-content .recent-compet .recent-content .vsr-content');
	var vslb = $('.shuju-main-content .title-box .func-btn-wrap .showvsl');
	var vsrb = $('.shuju-main-content .title-box .func-btn-wrap .showvsr');

	if(rvsl.is(":hidden")){
		vslb.removeClass('hide');
		vslb.click(function(){
			rvsl.toggleClass('hide');vslb.toggleClass('active');
		});
	}

	if(rvsr.is(":hidden")){
		vsrb.removeClass('hide');
		vsrb.click(function(){
			rvsr.toggleClass('hide');vsrb.toggleClass('active');
		});
	}

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
	if(vslq1>vsrq1){$('#vsl1').addClass('highlight');}else{$('#vsr1').addClass('highlight');}
	
	//以往盘路（下盘场数）大者加粗
	var vslq2 = $('#vslq2').text();
	var vsrq2 = $('#vsrq2').text();
	if(vslq2>vsrq2){$('#vsl2').addClass('highlight');}else{$('#vsr2').addClass('highlight');}
	
	//使上一场阵容左右表格等高
	 var height = 0;
     $('tr.zhenrongl, tr.zhenrongr').each(function(){
        height = $(this).height() > height ? $(this).height() : height;
     }).height(height+50);
	
	//放大表格中數字 20171218
	$('.history-info div span, .chartinfo div span').not('.pp').html(function(index, value) {
	    return value.replace(/(\d+)/g, '<span>$1</span>');
	});

	//20171218
	var vhk = $('.shuju-main-content .history-compet .history-info div .title').width();
	$('.shuju-main-content .history-compet .history-info div .title.empty').css('width',vhk);

	var vhl = $('.vsl-content .chartwrap .chartinfo div .title').width();
	$('.vsl-content .chartwrap .chartinfo div .title.empty').css('width',vhl);

	var vhr = $('.vsr-content .chartwrap .chartinfo div .title').width();
	$('.vsr-content .chartwrap .chartinfo div .title.empty').css('width',vhr);

	
    //全部赛事 & 5场 & 赛事筛选 滑动开启选单 20170731
	$('.all-compet, .changci, .choose-compet, .fullhalf')
		.mouseenter(function() {$(this).find('.choose-wrap-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$(this).find('.choose-wrap-slide').removeClass('unhide').addClass('hide');});
	
    //欧洲指数 滑动开启选单  20170731
	$('.history-compet .ouzhi')
		.mouseenter(function() {$('.history-compet .ouzhi .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.history-compet .ouzhi .ouzhi-slide').removeClass('unhide').addClass('hide');}); 

	//欧洲指数 滑动开启选单  20170830
	$('.recent-compet .vsl-content .ouzhi')
		.mouseenter(function() {$('.recent-compet .vsl-content .ouzhi .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.recent-compet .vsl-content .ouzhi .ouzhi-slide').removeClass('unhide').addClass('hide');}); 

	$('.recent-compet .vsr-content .ouzhi')
		.mouseenter(function() {$('.recent-compet .vsr-content .ouzhi .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.recent-compet .vsr-content .ouzhi .ouzhi-slide').removeClass('unhide').addClass('hide');}); 


	//歷史對戰-欧賠
	$('table.recent-rival > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){
				
				var a_1 = '';
				var b_1 = '';
				var c_1 = '';
				
				a_1=( euodds[0][0] == undefined || euodds[0][0] == 0 )?(''):(euodds[0][0]);
				b_1=( euodds[0][1] == undefined || euodds[0][1] == 0 )?(''):(euodds[0][1]);
				c_1=( euodds[0][2] == undefined || euodds[0][2] == 0 )?(''):(euodds[0][2]);
				
				$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
				$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
				//$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
	});
	
	//近期對戰-主 欧賠
	$('.recent-compet .vsl-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){
				
				var a_1 = '';
				var b_1 = '';
				var c_1 = '';
				a_1=( euodds[0][0] == undefined || euodds[0][0] == 0 )?(''):(euodds[0][0]);
				b_1=( euodds[0][1] == undefined || euodds[0][1] == 0 )?(''):(euodds[0][1]);
				c_1=( euodds[0][2] == undefined || euodds[0][2] == 0 )?(''):(euodds[0][2]);
				
				$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
				$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
				//$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
	});
	
	//近期對戰-客 欧賠
	$('.recent-compet .vsr-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){	
				
				var a_1 = '';
				var b_1 = '';
				var c_1 = '';
				a_1=( euodds[0][0] == undefined || euodds[0][0] == 0 )?(''):(euodds[0][0]);
				b_1=( euodds[0][1] == undefined || euodds[0][1] == 0 )?(''):(euodds[0][1]);
				c_1=( euodds[0][2] == undefined || euodds[0][2] == 0 )?(''):(euodds[0][2]);	
				
				$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
				$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
				//$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
	});


	//歷史戰積 - 欧洲指数 切换公司 
	$('.history-compet .ouzhi .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.history-compet .ouzhi>span').text(company);
		var cid = $(this).data('value');
		$('table.recent-rival > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){
				
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( euodds[cid][0] == undefined || euodds[cid][0] == 0 )?(''):(euodds[cid][0]);
			b_1=( euodds[cid][1] == undefined || euodds[cid][1] == 0 )?(''):(euodds[cid][1]);
			c_1=( euodds[cid][2] == undefined || euodds[cid][2] == 0 )?(''):(euodds[cid][2]);	
				
			$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
		});
	});	

	//近期對戰 - 主 - 欧洲指数 切换公司 20170830
	$('.recent-compet .vsl-content .ouzhi .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.recent-compet .vsl-content .ouzhi>span').text(company);
		var cid = $(this).data('value');
		$('.recent-compet .vsl-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){
				
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( euodds[cid][0] == undefined || euodds[cid][0] == 0 )?(''):(euodds[cid][0]);
			b_1=( euodds[cid][1] == undefined || euodds[cid][1] == 0 )?(''):(euodds[cid][1]);
			c_1=( euodds[cid][2] == undefined || euodds[cid][2] == 0 )?(''):(euodds[cid][2]);		
				
			$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
		});
	});	
	
	//近期對戰 - 客 - 欧洲指数 切换公司 
	$('.recent-compet .vsr-content .ouzhi .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.recent-compet .vsr-content .ouzhi>span').text(company);
		var cid = $(this).data('value');
		$('.recent-compet .vsr-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var euodds = $(this).data('eu-odds');
			if(euodds != null && euodds[0]){
				
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( euodds[cid][0] == undefined || euodds[cid][0] == 0 )?(''):(euodds[cid][0]);
			b_1=( euodds[cid][1] == undefined || euodds[cid][1] == 0 )?(''):(euodds[cid][1]);
			c_1=( euodds[cid][2] == undefined || euodds[cid][2] == 0 )?(''):(euodds[cid][2]);		
				
			$(this).find('td:eq(5)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(6)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(7)').html("<span>"+c_1+"</sapn>");
			}
		});
	});	
	
	
	
	

    //亚洲盘口 滑动开启选单 点选关闭选单 20170731
	$('.history-compet .zhongpan')
		.mouseenter(function() {$('.history-compet .zhongpan .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.history-compet .zhongpan .ouzhi-slide').removeClass('unhide').addClass('hide');}); 

	$('.recent-compet .vsl-content .zhongpan')
		.mouseenter(function() {$('.recent-compet .vsl-content .zhongpan .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.recent-compet .vsl-content .zhongpan .ouzhi-slide').removeClass('unhide').addClass('hide');}); 

	$('.recent-compet .vsr-content .zhongpan')
		.mouseenter(function() {$('.recent-compet .vsr-content .zhongpan .ouzhi-slide').removeClass('hide').addClass('unhide');})
		.mouseleave(function() {$('.recent-compet .vsr-content .zhongpan .ouzhi-slide').removeClass('unhide').addClass('hide');}); 

	//点选关闭选单  20170731
	$('.choose-wrap-slide, .ouzhi .ouzhi-slide, .zhongpan .ouzhi-slide').click(function(e) {e.preventDefault();$(this).removeClass('unhide').addClass('hide');});

	
	
	
	var pkn = 0;//開幾場盤
	
	var d1 = 0 ;//勝
	var d2 = 0 ;//平
	var d3 = 0 ;//負

	var e1 = 0 ;//贏
	var e2 = 0 ;//輸
	var e3 = 0 ;//走

	var f1 = 0 ;//大
	var f2 = 0 ;//小
	var f3 = 0 ;//走
	
	var d1_p = 0 ;//贏
	var d2_p = 0 ;//輸
	var d3_p = 0 ;//走
	
	var e1_p = 0 ;//大
	var e2_p = 0 ;//小
	var e3_p = 0 ;//走
	
	//歷史對戰  亞賠下拉 - 初始化 
	$('table.recent-rival > tbody > tr').not('.no-record').each(function () {
		var asiaodds = $(this).data('asia-odds');
		var bsodds   = $(this).data('bigsmall-odds');
		
		var dd = '';
		var ee = '';
		var ff = '';
		if(asiaodds != null && asiaodds[0]){
			//if(asiaodds[0].d1=='勝'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++; }
			//if(asiaodds[0].d1=='負'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++; }
			//if(asiaodds[0].d1=='平'){ dd = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++; }
			
			if(asiaodds[0].d1=='赢'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++  }
			if(asiaodds[0].d1=='輸'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++  }
			if(asiaodds[0].d1=='走'){ dd = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++  }
			
			if(bsodds[0].d1=='大'){ ee = '<span class="win">'+bsodds[0].d1+"</span>";  e1++	}
			if(bsodds[0].d1=='小'){ ee = '<span class="lose">'+bsodds[0].d1+"</span>"; e2++	}
			if(bsodds[0].d1=='走'){ ee = '<span class="even">'+bsodds[0].d1+"</span>"; e3++	}
			
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[0].a1 == undefined || asiaodds[0].a1 == -99 )?(''):(asiaodds[0].a1);
			b_1=( asiaodds[0].b1 == undefined || asiaodds[0].b1 == -99 )?(''):(asiaodds[0].b1);
			c_1=( asiaodds[0].c1 == undefined || asiaodds[0].c1 == -99 )?(''):(asiaodds[0].c1);
			
			var a_2 = '';
			var b_2 = '';
			var c_2 = '';
			a_2=( bsodds[0].a1 == undefined || bsodds[0].a1 == -99 )?(''):(bsodds[0].a1);
			b_2=( bsodds[0].b1 == undefined || bsodds[0].b1 == -99 )?(''):(bsodds[0].b1);
			c_2=( bsodds[0].c1 == undefined || bsodds[0].c1 == -99 )?(''):(bsodds[0].c1);
			
			
			
			//$(this).find('td:eq(8)').html(dd);
			$(this).find('td:eq(8)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(9)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(dd);
			
			$(this).find('td:eq(13)').html("<span>"+a_2+"</sapn>");
			$(this).find('td:eq(14)').html("<span>"+b_2+"</sapn>");
			$(this).find('td:eq(15)').html("<span>"+c_2+"</sapn>");
			$(this).find('td:eq(16)').html(ee);
			//$(this).find('td:eq(13)').html(ff);
			
			if( asiaodds[0].b1 != 0 )pkn++;
			
			
			if( pkn != 0 )
			{
				d1_p = Number((d1/pkn)*100).toFixed(2);
				d2_p = Number((d2/pkn)*100).toFixed(2);
				d3_p = Number((d3/pkn)*100).toFixed(2);
				
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
			}
			
		}
		//console.log(d1+"-"+d2+"-"+d3)
		
		//
	});
	var tn = $('.history-info').eq(0).find('.t2').text().split('，')[1];
	$('.history-info .t2').html("<span>"+parseInt(pkn)+"</span>场开盘，"+tn);//20171218
	$('.history-info .win').eq(1).html("<span>"+d1+'</span>赢盘 <span class="pp">('+d1_p+'%)</span> 、');
	$('.history-info .even').eq(1).html("<span>"+d3+'</span>走水 <span class="pp">('+d3_p+'%)</span> 、');
	$('.history-info .lose').eq(1).html("<span>"+d2+'</span>输盘 <span class="pp">('+d2_p+'%)</span> ');
	
	$('.history-info .win').eq(2).html("<span>"+e1+'</span>场大 <span class="pp">('+e1_p+'%)</span>、');
	$('.history-info .even').eq(2).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span>、');
	$('.history-info .lose').eq(2).html("<span>"+e2+'</span>场小 <span class="pp">('+e2_p+'%)</span>');
	
	
	
	//近期對戰 主隊 - 亞賠初始化
	pkn = 0 ; d1 = 0 ;d2 = 0 ;d3 = 0 ;e1 = 0 ;e2 = 0 ;e3 = 0 ;f1 = 0 ;f2 = 0 ;f3 = 0 ;
	d1_p = 0 ;d2_p = 0 ;d3_p = 0 ;e1_p = 0 ;e2_p = 0 ;e3_p = 0 ;
	$('.recent-compet .vsl-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
		var asiaodds = $(this).data('asia-odds');
		var bsodds   = $(this).data('bigsmall-odds');
		
		var dd = '';
		var ee = '';
		var ff = '';
		if(asiaodds != null && asiaodds[0]){
			//if(asiaodds[0].d1=='勝'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++; }
			//if(asiaodds[0].d1=='負'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++; }
			//if(asiaodds[0].d1=='平'){ dd = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++; }
			
			if(asiaodds[0].d1=='赢'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++  }
			if(asiaodds[0].d1=='输'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++  }
			if(asiaodds[0].d1=='走'){ dd = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++  }
			
			if(bsodds[0].d1=='大'){ ee = '<span class="win">'+bsodds[0].d1+"</span>";  e1++	}
			if(bsodds[0].d1=='小'){ ee = '<span class="lose">'+bsodds[0].d1+"</span>"; e2++	}
			if(bsodds[0].d1=='走'){ ee = '<span class="even">'+bsodds[0].d1+"</span>"; e3++	}
			
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[0].a1 == undefined || asiaodds[0].a1 == -99 )?(''):(asiaodds[0].a1);
			b_1=( asiaodds[0].b1 == undefined || asiaodds[0].b1 == -99 )?(''):(asiaodds[0].b1);
			c_1=( asiaodds[0].c1 == undefined || asiaodds[0].c1 == -99 )?(''):(asiaodds[0].c1);
			
			var a_2 = '';
			var b_2 = '';
			var c_2 = '';
			a_2=( bsodds[0].a1 == undefined || bsodds[0].a1 == -99 )?(''):(bsodds[0].a1);
			b_2=( bsodds[0].b1 == undefined || bsodds[0].b1 == -99 )?(''):(bsodds[0].b1);
			c_2=( bsodds[0].c1 == undefined || bsodds[0].c1 == -99 )?(''):(bsodds[0].c1);
			
			
			$(this).find('td:eq(8)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(9)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(dd);

			$(this).find('td:eq(13)').html("<span>"+a_2+"</sapn>");
			$(this).find('td:eq(14)').html("<span>"+b_2+"</sapn>");
			$(this).find('td:eq(15)').html("<span>"+c_2+"</sapn>");
			$(this).find('td:eq(16)').html(ee);
			
			
			if( asiaodds[0].b1 != 0 )pkn++;
			
			if( pkn != 0 )
			{
				d1_p = Number((d1/pkn)*100).toFixed(2);
				d2_p = Number((d2/pkn)*100).toFixed(2);
				d3_p = Number((d3/pkn)*100).toFixed(2);
				
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
				
			}
			
		}
		//console.log(d1+"-"+d2+"-"+d3)
		
	});
	
	//ctvsl1.series[0].update( { data:JSON.parse('[["胜",'+d1+'],["平",'+ d2+'],["负",'+ d3+']]') });
	
	ctvsl2.series[0].update( { data:JSON.parse('[["赢",'+d1+'],["走",'+ d3+'],["输",'+ d2+']]') });
	ctvsl3.series[0].update( { data:JSON.parse('[["大",'+e1+'],["走", 0],["小",'+ e2+']]') });
	
	if( d1 == 0 && d2 == 0 && d3 == 0 )$(".vslct .panlu-chart").hide();
	if( e1 == 0 && e2 == 0 && e3 == 0 )$(".vslct .daxiao-chart").hide();
	
	var tn = $('.chartinfo').eq(0).find('.t2').text().split('，')[1];
	//console.log(tn);
	$('.chartinfo').eq(0).find('.t2').html("<span>"+pkn+"</span>场开盘，"+tn);
	$('.chartinfo').eq(0).find('.win').eq(1).html("<span>"+d1+'</span>赢盘 <span class="pp">('+d1_p+'%)</span> 、');
	$('.chartinfo').eq(0).find('.even').eq(1).html("<span>"+d3+'</span>走水 <span class="pp">('+d3_p+'%)</span> 、');
	$('.chartinfo').eq(0).find('.lose').eq(1).html("<span>"+d2+'</span>输盘 <span class="pp">('+d2_p+'%)</span> ');

	$('.chartinfo').eq(0).find('.win').eq(2).html("<span>"+e1+'</span>场大 <span class="pp">('+e1_p+'%)</span>、');
	$('.chartinfo').eq(0).find('.lose').eq(2).html("<span>"+e2+'</span>场小 <span class="pp">('+e2_p+'%)</span>');
	$('.chartinfo').eq(0).find('.even').eq(2).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span>、');
	
	
	
	
	
	
	
	
	
	//近期對戰 客隊 - 亞賠初始化
	pkn = 0 ; d1 = 0 ;d2 = 0 ;d3 = 0 ;e1 = 0 ;e2 = 0 ;e3 = 0 ;f1 = 0 ;f2 = 0 ;f3 = 0 ;
	d1_p = 0 ;d2_p = 0 ;d3_p = 0 ;e1_p = 0 ;e2_p = 0 ;e3_p = 0 ;
	$('.recent-compet .vsr-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
		var asiaodds = $(this).data('asia-odds');
		var bsodds   = $(this).data('bigsmall-odds');
		
		var dd = '';
		var ee = '';
		var ff = '';
		if(asiaodds != null && asiaodds[0]){
			//if(asiaodds[0].d1=='勝'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++; }
			//if(asiaodds[0].d1=='負'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++; }
			//if(asiaodds[0].d1=='平'){ dd = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++; }
			
			if(asiaodds[0].d1=='赢'){ dd = '<span class="win">'+asiaodds[0].d1+"</span>";  d1++  }
			if(asiaodds[0].d1=='输'){ dd = '<span class="lose">'+asiaodds[0].d1+"</span>"; d2++  }
			if(asiaodds[0].d1=='走'){ ee = '<span class="even">'+asiaodds[0].d1+"</span>"; d3++  }
			
			if(bsodds[0].d1=='大'){ ee = '<span class="win">'+bsodds[0].d1+"</span>";  e1++	}
			if(bsodds[0].d1=='小'){ ee = '<span class="lose">'+bsodds[0].d1+"</span>"; e2++	}
			if(bsodds[0].d1=='走'){ ee = '<span class="even">'+bsodds[0].d1+"</span>"; e3++	}
			
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[0].a1 == undefined || asiaodds[0].a1 == -99 )?(''):(asiaodds[0].a1);
			b_1=( asiaodds[0].b1 == undefined || asiaodds[0].b1 == -99 )?(''):(asiaodds[0].b1);
			c_1=( asiaodds[0].c1 == undefined || asiaodds[0].c1 == -99 )?(''):(asiaodds[0].c1);
			
			var a_2 = '';
			var b_2 = '';
			var c_2 = '';
			a_2=( bsodds[0].a1 == undefined || bsodds[0].a1 == -99 )?(''):(bsodds[0].a1);
			b_2=( bsodds[0].b1 == undefined || bsodds[0].b1 == -99 )?(''):(bsodds[0].b1);
			c_2=( bsodds[0].c1 == undefined || bsodds[0].c1 == -99 )?(''):(bsodds[0].c1);
			
			$(this).find('td:eq(8)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(9)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(dd);

			$(this).find('td:eq(13)').html("<span>"+a_2+"</sapn>");
			$(this).find('td:eq(14)').html("<span>"+b_2+"</sapn>");
			$(this).find('td:eq(15)').html("<span>"+c_2+"</sapn>");
			$(this).find('td:eq(16)').html(ee);
			
			if( asiaodds[0].b1 != 0  )pkn++;
			
			if( pkn != 0 )
			{
				d1_p = Number((d1/pkn)*100).toFixed(2);
				d2_p = Number((d2/pkn)*100).toFixed(2);
				d3_p = Number((d3/pkn)*100).toFixed(2);
				
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
				
			}
			
		}
		//console.log(d1+"-"+d2+"-"+d3)
		
	});
	
	//ctvsr1.series[0].update( { data:JSON.parse('[["胜",'+d1+'],["平",'+ d2+'],["负",'+ d3+']]') });
	ctvsr2.series[0].update( { data:JSON.parse('[["赢",'+d1+'],["走",'+ d3+'],["输",'+ d2+']]') });
	ctvsr3.series[0].update( { data:JSON.parse('[["大",'+e1+'],["走", 0],["小",'+ e2+']]') });
	
	//if( d1 == 0 && d2 == 0 && d3 == 0 )$(".vsrct .saiguo-chart").hide();
	if( d1 == 0 && d2 == 0 && d3 == 0 )$(".vsrct .panlu-chart").hide();
	if( e1 == 0 && e2 == 0 && e3 == 0 )$(".vsrct .daxiao-chart").hide();
	
	var tn = $('.chartinfo').eq(1).find('.t2').text().split('，')[1];
	//console.log(tn);
	$('.chartinfo').eq(1).find('.t2').html("<span>"+pkn+"</span>场开盘，"+tn);
	$('.chartinfo').eq(1).find('.win').eq(1).html("<span>"+d1+'</span>赢盘 <span class="pp">('+d1_p+'%)</span> 、');
	$('.chartinfo').eq(1).find('.even').eq(1).html("<span>"+d3+'</span>走水 <span class="pp">('+d3_p+'%)</span> 、');
	$('.chartinfo').eq(1).find('.lose').eq(1).html("<span>"+d2+'</span>输盘 <span class="pp">('+d2_p+'%)</span> ');

	$('.chartinfo').eq(1).find('.win').eq(2).html("<span>"+e1+'</span>场大 <span class="pp">('+e1_p+'%)</span>、');
	$('.chartinfo').eq(1).find('.lose').eq(2).html("<span>"+e2+'</span>场小 <span class="pp">('+e2_p+'%)</span>');
	$('.chartinfo').eq(1).find('.even').eq(2).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span>、');
	
	
	
	
	
	
    //歷史交鋒 - 亚洲盘口 切换公司 20170728
	$('.history-compet .zhongpan .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.history-compet .zhongpan>span').text(company);
		var cid = $(this).data('value');
		
		pkn = 0; d1 = 0 ;d2 = 0 ;d3 = 0 ;e1 = 0 ;e2 = 0 ;e3 = 0 ;f1 = 0 ;f2 = 0 ;f3 = 0 ;
		e1_p = 0 ;e2_p = 0 ;e3_p = 0 ;f1_p = 0 ;f2_p = 0 ;f3_p = 0 ;
		
		$('table.recent-rival > tbody > tr').not('.no-record').each(function () {
			var asiaodds = $(this).data('asia-odds');
			var dd = '';
			var ee = '';
			var ff = '';
			if(asiaodds != null && asiaodds[0]){
			if(asiaodds[cid].d1=='勝'){ dd = '<span class="win">'+asiaodds[cid].d1+"</span>";  d1++	} 
			if(asiaodds[cid].d1=='負'){ dd = '<span class="lose">'+asiaodds[cid].d1+"</span>"; d2++	}
			if(asiaodds[cid].d1=='平'){ dd = '<span class="even">'+asiaodds[cid].d1+"</span>"; d3++	}
			
			if(asiaodds[cid].e1=='贏'){ ee = '<span class="win">'+asiaodds[cid].e1+"</span>";  e1++	} 
			if(asiaodds[cid].e1=='輸'){ ee = '<span class="lose">'+asiaodds[cid].e1+"</span>"; e2++	}
			if(asiaodds[cid].e1=='走'){ ee = '<span class="even">'+asiaodds[cid].e1+"</span>"; e3++	}
			
			if(asiaodds[cid].f1=='大'){ ff = '<span class="win">'+asiaodds[cid].f1+"</span>";  f1++	}
			if(asiaodds[cid].f1=='小'){ ff = '<span class="lose">'+asiaodds[cid].f1+"</span>"; f2++	}
			if(asiaodds[cid].f1=='走'){ ff = '<span class="even">'+asiaodds[cid].f1+"</span>"; f3++	}		
				
			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[cid].a1 == undefined || asiaodds[cid].a1 == -99 )?(''):(asiaodds[cid].a1);
			b_1=( asiaodds[cid].b1 == undefined || asiaodds[cid].b1 == -99 )?(''):(asiaodds[cid].b1);
			c_1=( asiaodds[cid].c1 == undefined || asiaodds[cid].c1 == -99 )?(''):(asiaodds[cid].c1);		
				
				
			$(this).find('td:eq(8)').html(dd);
			$(this).find('td:eq(9)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(11)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(ee);
			$(this).find('td:eq(13)').html(ff);
				
			if( asiaodds[cid].a1 != 0 && asiaodds[cid].c1 != 0 )pkn++;
				
			if( pkn != 0 )
			{
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
				
				f1_p = Number((f1/pkn)*100).toFixed(2);
				f2_p = Number((f2/pkn)*100).toFixed(2);
				f3_p = Number((f3/pkn)*100).toFixed(2);
				
			}	
				
			}
			
		});
		
		var tn1 = $('.history-info').eq(0).find('.t2').text().split('，')[1];

		$('.history-info .t2').html("<span>"+parseInt(pkn)+"</span>场开盘，"+tn1);
		$('.history-info .win').eq(1).html("<span>"+e1+'</span>赢盘 <span class="pp">('+e1_p+'%)</span> 、');
		$('.history-info .even').eq(1).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span> 、');
		$('.history-info .lose').eq(1).html("<span>"+e2+'</span>输盘 <span class="pp">('+e2_p+'%)</span> ');

		//$('.history-info .win').eq(2).html("<span>"+f1+'</span>场大 <span class="pp">('+f1_p+'%)</span>、');
		//$('.history-info .even').eq(2).html("<span>"+f3+'</span>走水 <span class="pp">('+f3_p+'%)</span>、');
		//$('.history-info .lose').eq(2).html("<span>"+f2+'</span>场小 <span class="pp">('+f2_p+'%)</span>');
		
		
	});	
	
	
	
	
	
	
    //近期對戰 主 - 亚洲盘口 切换公司 20170830
	$('.recent-compet .vsl-content .zhongpan .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.recent-compet .vsl-content .zhongpan>span').text(company);
		var cid = $(this).data('value');
		
		pkn = 0; d1 = 0 ;d2 = 0 ;d3 = 0 ;e1 = 0 ;e2 = 0 ;e3 = 0 ;f1 = 0 ;f2 = 0 ;f3 = 0 ;
		e1_p = 0 ;e2_p = 0 ;e3_p = 0 ;f1_p = 0 ;f2_p = 0 ;f3_p = 0 ;
		$('.recent-compet .vsl-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var asiaodds = $(this).data('asia-odds');
			var dd = '';
			var ee = '';
			var ff = '';
		if(asiaodds != null && asiaodds[cid]){
			if(asiaodds[cid].d1=='勝'){ dd = '<span class="win">'+asiaodds[cid].d1+"</span>";  d1++; }
			if(asiaodds[cid].d1=='負'){ dd = '<span class="lose">'+asiaodds[cid].d1+"</span>"; d2++; }
			if(asiaodds[cid].d1=='平'){ dd = '<span class="even">'+asiaodds[cid].d1+"</span>"; d3++; }
			
			if(asiaodds[cid].e1=='贏'){ ee = '<span class="win">'+asiaodds[cid].e1+"</span>";  e1++  }
			if(asiaodds[cid].e1=='輸'){ ee = '<span class="lose">'+asiaodds[cid].e1+"</span>"; e2++  }
			if(asiaodds[cid].e1=='走'){ ee = '<span class="even">'+asiaodds[cid].e1+"</span>"; e3++  }
			
			if(asiaodds[cid].f1=='大'){ ff = '<span class="win">'+asiaodds[cid].f1+"</span>";  f1++	}
			if(asiaodds[cid].f1=='小'){ ff = '<span class="lose">'+asiaodds[cid].f1+"</span>"; f2++	}
			if(asiaodds[cid].f1=='走'){ ff = '<span class="even">'+asiaodds[cid].f1+"</span>"; f3++	}
			//$('.vslct .saiguo-chart').data('percent','[["胜", 16],["平", 3],["负", 6]]');
			//console.log( $('.vslct .saiguo-chart').data('percent') );

			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[cid].a1 == undefined || asiaodds[cid].a1 == -99 )?(''):(asiaodds[cid].a1);
			b_1=( asiaodds[cid].b1 == undefined || asiaodds[cid].b1 == -99 )?(''):(asiaodds[cid].b1);
			c_1=( asiaodds[cid].c1 == undefined || asiaodds[cid].c1 == -99 )?(''):(asiaodds[cid].c1);
			
			$(this).find('td:eq(8)').html(dd);
			$(this).find('td:eq(9)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(11)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(ee);
			$(this).find('td:eq(13)').html(ff);
			
			if( asiaodds[cid].a1 != 0 && asiaodds[cid].c1 != 0 )pkn++;
			
			if( pkn != 0 )
			{
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
				
				f1_p = Number((f1/pkn)*100).toFixed(2);
				f2_p = Number((f2/pkn)*100).toFixed(2);
				f3_p = Number((f3/pkn)*100).toFixed(2);
				
			}	
			
			}
		});
		
		$(".vslct .saiguo-chart").show();
		$(".vslct .panlu-chart").show();
		$(".vslct .daxiao-chart").show();
		
		ctvsl1.series[0].update( { data:JSON.parse('[["胜",'+d1+'],["平",'+ d2+'],["负",'+ d3+']]') });
		ctvsl2.series[0].update( { data:JSON.parse('[["赢",'+e1+'],["输",'+ e2+'],["走",'+ e3+']]') });
		ctvsl3.series[0].update( { data:JSON.parse('[["大",'+f1+'],["小",'+ f2+']]') });

		if( d1 == 0 && d2 == 0 && d3 == 0 )$(".vslct .saiguo-chart").hide();
		if( e1 == 0 && e2 == 0 && e3 == 0 )$(".vslct .panlu-chart").hide();
		if( f1 == 0 && f2 == 0 )$(".vslct .daxiao-chart").hide();
		
		var tn = $('.chartinfo').eq(0).find('.t2').text().split('，')[1];
		//console.log(tn);
		$('.chartinfo').eq(0).find('.t2').html("<span>"+pkn+"</span>场开盘，"+tn);
		$('.chartinfo').eq(0).find('.win').eq(1).html("<span>"+e1+'</span>赢盘 <span class="pp">('+e1_p+'%)</span> 、');
		$('.chartinfo').eq(0).find('.even').eq(1).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span> 、');
		$('.chartinfo').eq(0).find('.lose').eq(1).html("<span>"+e2+'</span>输盘 <span class="pp">('+e2_p+'%)</span> ');

		//$('.chartinfo').eq(0).find('.win').eq(2).html("<span>"+f1+'</span>场大 <span class="pp">('+f1_p+'%)</span>、');
		//$('.chartinfo').eq(0).find('.lose').eq(2).html("<span>"+f2+'</span>场小 <span class="pp">('+f2_p+'%)</span>');
		//$('.chartinfo').eq(0).find('.even').eq(2).html("<span>"+f3+'</span>走水 <span class="pp">('+f3_p+'%)</span>、');
		
		
	});	

	
	
    //近期對戰 客 - 亚洲盘口 切换公司 20170830
	$('.recent-compet .vsr-content .zhongpan .ouzhi-slide ul li').click(function () {
		var company = $(this).text();$('.recent-compet .vsr-content .zhongpan>span').text(company);
		var cid = $(this).data('value');
		
		
		
		pkn = 0; d1 = 0 ;d2 = 0 ;d3 = 0 ;e1 = 0 ;e2 = 0 ;e3 = 0 ;f1 = 0 ;f2 = 0 ;f3 = 0 ;
		e1_p = 0 ;e2_p = 0 ;e3_p = 0 ;f1_p = 0 ;f2_p = 0 ;f3_p = 0 ;
		$('.recent-compet .vsr-content table.team-recent-match > tbody > tr').not('.no-record').each(function () {
			var asiaodds = $(this).data('asia-odds');
			
		var dd = '';
		var ee = '';
		var ff = '';
		if(asiaodds != null && asiaodds[cid]){
			if(asiaodds[cid].d1=='勝'){ dd = '<span class="win">'+asiaodds[cid].d1+"</span>";  d1++; }
			if(asiaodds[cid].d1=='負'){ dd = '<span class="lose">'+asiaodds[cid].d1+"</span>"; d2++; }
			if(asiaodds[cid].d1=='平'){ dd = '<span class="even">'+asiaodds[cid].d1+"</span>"; d3++; }
			
			if(asiaodds[cid].e1=='贏'){ ee = '<span class="win">'+asiaodds[cid].e1+"</span>";  e1++  }
			if(asiaodds[cid].e1=='輸'){ ee = '<span class="lose">'+asiaodds[cid].e1+"</span>"; e2++  }
			if(asiaodds[cid].e1=='走'){ ee = '<span class="even">'+asiaodds[cid].e1+"</span>"; e3++  }
			
			if(asiaodds[cid].f1=='大'){ ff = '<span class="win">'+asiaodds[cid].f1+"</span>";  f1++	}
			if(asiaodds[cid].f1=='小'){ ff = '<span class="lose">'+asiaodds[cid].f1+"</span>"; f2++	}
			if(asiaodds[cid].f1=='走'){ ff = '<span class="even">'+asiaodds[cid].f1+"</span>"; f3++	}

			var a_1 = '';
			var b_1 = '';
			var c_1 = '';
			a_1=( asiaodds[cid].a1 == undefined || asiaodds[cid].a1 == -99 )?(''):(asiaodds[cid].a1);
			b_1=( asiaodds[cid].b1 == undefined || asiaodds[cid].b1 == -99 )?(''):(asiaodds[cid].b1);
			c_1=( asiaodds[cid].c1 == undefined || asiaodds[cid].c1 == -99 )?(''):(asiaodds[cid].c1);
			
			
			$(this).find('td:eq(8)').html(dd);
			$(this).find('td:eq(9)').html("<span>"+a_1+"</sapn>");
			$(this).find('td:eq(10)').html("<span>"+b_1+"</sapn>");
			$(this).find('td:eq(11)').html("<span>"+c_1+"</sapn>");
			$(this).find('td:eq(12)').html(ee);
			$(this).find('td:eq(13)').html(ff);
			
			if( asiaodds[cid].a1 != 0 && asiaodds[cid].c1 != 0 )pkn++;
			
			if( pkn != 0 )
			{
				e1_p = Number((e1/pkn)*100).toFixed(2);
				e2_p = Number((e2/pkn)*100).toFixed(2);
				e3_p = Number((e3/pkn)*100).toFixed(2);
				
				f1_p = Number((f1/pkn)*100).toFixed(2);
				f2_p = Number((f2/pkn)*100).toFixed(2);
				f3_p = Number((f3/pkn)*100).toFixed(2);
				
			}	
			
		}
		});
		
		$(".vsrct .saiguo-chart").show();
		$(".vsrct .panlu-chart").show();
		$(".vsrct .daxiao-chart").show();
		
		ctvsr1.series[0].update( { data:JSON.parse('[["胜",'+d1+'],["平",'+ d2+'],["负",'+ d3+']]') });
		ctvsr2.series[0].update( { data:JSON.parse('[["赢",'+e1+'],["输",'+ e2+'],["走",'+ e3+']]') });
		ctvsr3.series[0].update( { data:JSON.parse('[["大",'+f1+'],["小",'+ f2+']]') });

		if( d1 == 0 && d2 == 0 && d3 == 0 )$(".vsrct .saiguo-chart").hide();
		if( e1 == 0 && e2 == 0 && e3 == 0 )$(".vsrct .panlu-chart").hide();
		if( f1 == 0 && f2 == 0 )$(".vsrct .daxiao-chart").hide();
		
		var tn = $('.chartinfo').eq(1).find('.t2').text().split('，')[1];
		//console.log(tn);
		$('.chartinfo').eq(1).find('.t2').html("<span>"+pkn+"</span>场开盘，"+tn);
		$('.chartinfo').eq(1).find('.win').eq(1).html("<span>"+e1+'</span>赢盘 <span class="pp">('+e1_p+'%)</span> 、');
		$('.chartinfo').eq(1).find('.even').eq(1).html("<span>"+e3+'</span>走水 <span class="pp">('+e3_p+'%)</span> 、');
		$('.chartinfo').eq(1).find('.lose').eq(1).html("<span>"+e2+'</span>输盘 <span class="pp">('+e2_p+'%)</span> ');

		//$('.chartinfo').eq(1).find('.win').eq(2).html("<span>"+f1+'</span>场大 <span class="pp">('+f1_p+'%)</span>、');
		//$('.chartinfo').eq(1).find('.lose').eq(2).html("<span>"+f2+'</span>场小 <span class="pp">('+f2_p+'%)</span>');
		//$('.chartinfo').eq(1).find('.even').eq(2).html("<span>"+f3+'</span>走水 <span class="pp">('+f3_p+'%)</span>、');
		
		
	});	


	
	
	//切换选项标题
	$('.choose-wrap-slide ul li').on('click', function(){
		var showtext = $(this).html();
		$(this).parent().parent().parent().parent().find('span').text(showtext);
	});
	
	
	//历史交锋 只显示最近5 10 15场 
    $('table.recent-rival > tbody > tr, table.team-recent-match > tbody > tr').not('.no-record').hide().slice(0, 5).show();
    $('#jiaofeng .changci ul li').on('click', function(){
        var showrow = $(this).data('value');
		var showtext = $(this).html();
        $('table.recent-rival > tbody > tr').not('.no-record').hide().slice(0, showrow).show();
		$('#shengfu .changci span').text(showtext);
	});
	
    //近期战绩左队 只显示最近5 10 15场
    $('.vsl-content table.team-recent-match > tbody > tr').not('.no-record').hide().slice(0, 5).show();
    $('#zhanji .vsl-content .changci ul li').on('click', function(){
        var showrow = $(this).data('value');
		var showtext = $(this).html();
        $('.vsl-content table.team-recent-match > tbody > tr').not('.no-record').hide().slice(0, showrow).show();
		$('#zhanji .vsl-content .changci span').text(showtext);
    });

    //近期战绩右队 只显示最近5 10 15场
    $('.vsr-content table.team-recent-match > tbody > tr').not('.no-record').hide().slice(0, 5).show();
    $('#zhanji .vsr-content .changci ul li').on('click', function(){
        var showrow = $(this).data('value');
		var showtext = $(this).html();
        $('.vsr-content table.team-recent-match > tbody > tr').not('.no-record').hide().slice(0, showrow).show();
		$('#zhanji .vsr-content .changci span').text(showtext);
    });	
	
}); //最後的括號勿刪除