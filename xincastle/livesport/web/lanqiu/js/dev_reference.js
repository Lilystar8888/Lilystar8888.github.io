$(function () {
	var attack = $('.attacking');             //进攻
	var dattack = $('.dangerousattacking');   //危险进攻
	var layup  = $('.layup');                 //1分球 带球上篮
	var taiotou  = $('.taiotou');             //2分球 跳投
	var sanfen  = $('.sanfen');               //3分球 倒退跳投
	var guanlan  = $('.guanlan');             //灌篮
	var goalshot = $('.goalshot');            //进球
    var faqiu1 = $('.faqiu1');                //罚球1 球进shot 大西瓜投篮
    var faqiu2 = $('.faqiu2');                //罚球2 罚球未进miss 大西瓜投篮
    var fangui  = $('.fangui');               //犯规
    var zhanting = $('.zhanting');            //暂停
	var homesc = $('.home-score')
	var awaysc = $('.away-score')


	function stopmv(h){setTimeout(function () { h.addClass('hide').removeClass('home').removeClass('away');h.find('.team-name').text('');}, 5600);} //停止播放动画

	function home(e){e.addClass('home').removeClass('hide');var teamhome = $('.animate-team-bottom .left .name').text();$('.home .team-name').text(teamhome);stopmv(e);} //播放主队
	function away(e){e.addClass('away').removeClass('hide');var teamaway = $('.animate-team-bottom .right .name').text();$('.away .team-name').text(teamaway);stopmv(e);} //播放客队
	function scorechange(e){e.addClass('change');setTimeout(function(){e.removeClass('change');}, 5600);} //得分变色

	//动画加载中
	setTimeout(function(){$('#animation-loading').removeClass('hide');setTimeout(function () { $('#animation-loading').addClass('hide');}, 1500);}, 0); 

	//未开赛 201902
	setTimeout(function(){
    	//$('.animation-live').append('');
    	$('.animation-live').append('<div id="newboard"class="swiper-panel"><div class="example-swiper"><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide-active"style="width: 780px;"><div class="children score-panel"><div class="head"><div class="event-name"></div><div class="match-time"></div></div><div class="tema"><div class="starts"><span class="code">未开赛</span><span class="time hide"></span><span class="vs">VS</span></div><div class="left"><p class="away logo"></p><p class="away name o-hidden"></p><p class="away ranking"></p></div><div class="right"><p class="home logo"></p><p class="home name o-hidden"></p><p class="home ranking"></p></div><div class="mobile"><div class="clearfix-row f-s-29"><div class="display-i-b position-r"><div class="away one full-court"></div><div class="or">:</div><div class="home tow full-court"></div></div></div><div class="clearfix-row f-s-12 color-666 m-t-20"><div class="display-i-b position-r"><div class="away one half-court"></div><div class="or">-</div><div class="home tow half-court"></div></div></div></div></div></div></div><div class="swiper-slide swiper-slide-next"style="width: 780px;"><div class="children est statistics-one"><div class="head"><div class="event-name"></div><div class="match-time"></div></div><div class="box"><div class="tema"><div class="left"><p class="away logo"></p><p class="away name o-hidden"></p></div><div class="right"><p class="home logo"></p><p class="home name o-hidden"></p></div></div><div class="statistics-list"><div class="left"><div class="item stat-ele-4"><div class="title">暂停</div><div class="away num">0</div></div><div class="item m-t-20 stat-ele-5"><div class="title">犯规</div><div class="away num">0</div></div></div><ul class="list"><li><div class="bar-panel stat-ele-1"><div class="left away num">0</div><div class="text">3分球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num">0</div></div></li><li><div class="bar-panel stat-ele-2"><div class="left away num">0</div><div class="text">2分球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num">0</div></div></li><li><div class="bar-panel stat-ele-3"><div class="left away num">0</div><div class="text">罚球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num">0</div></div></li></ul><div class="right"><div class="item stat-ele-4"><div class="title">暂停</div><div class="home num">0</div></div><div class="item m-t-20 stat-ele-5"><div class="title">犯规</div><div class="home num">0</div></div></div></div></div></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div></div></div></div>');
    	//初始化Swipe
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
        });
        $('#newboard .head .event-name').html('2019赛季&nbsp;VTB联赛 21岁以下'),//赛季
        $('#newboard .head .match-time').html('2019/01/30&nbsp;18:00'),//时间
        $('#newboard .left .logo').html('<img src="img/teamflag_s/b4cbdb06a1ea417990543fa87cc7c995.png">'),//[客]队徽
        $('#newboard .right .logo').html('<img src="img/teamflag_s/c2abc5f988be409792d1f7bbc8c9c7ba.png">'),//[主]队徽
        $('#newboard .left .name').html('勇士勇士勇士勇士勇士勇士勇士'),//[客]队名
        $('#newboard .right .name').html('湖人湖人湖人湖人湖人湖人湖人'),//[主]队名
        $('#newboard .left .ranking').html('一'),//[客]联赛排名
        $('#newboard .right .ranking').html('一');//[主]联赛排名
	}, 2500);

	//移除未开赛 201902
	setTimeout(function () {
		$('#newboard').remove();
	}, 11000);

	setTimeout(function(){home(attack);}, 11200);     //[主]进攻
	setTimeout(function(){home(dattack);}, 16800);    //[主]危险进攻
	setTimeout(function(){home(guanlan);}, 22400);    //[主]灌篮
	setTimeout(function(){home(layup);}, 28000);      //[主]1分球 带球上篮
	setTimeout(function(){home(taiotou);}, 33600);    //[主]2分球 跳投
	setTimeout(function(){home(sanfen);}, 39200);     //[主]3分球 倒退跳投
	setTimeout(function(){home(goalshot);scorechange(homesc);}, 44800);   //[主]进球 得分变色
	setTimeout(function(){home(faqiu1);}, 50400);    //[主]罚球1 球进shot 大西瓜投篮
	setTimeout(function(){home(faqiu2);}, 56000);    //[主]罚球2 罚球未进miss 大西瓜投篮
	setTimeout(function(){home(fangui);}, 61600);     //[主]犯规
	setTimeout(function(){home(zhanting);}, 67200);   //[主]暂停

	setTimeout(function(){away(attack);}, 72800);      //[客]进攻
	setTimeout(function(){away(dattack);}, 78400);    //[客]危险进攻
	setTimeout(function(){away(guanlan);}, 84000);    //[主]灌篮
	setTimeout(function(){away(layup);}, 89600);      //[客]1分球 带球上篮
	setTimeout(function(){away(taiotou);}, 95200);    //[客]2分球 跳投
	setTimeout(function(){away(sanfen);}, 100800);     //[客]3分球 倒退跳投
	setTimeout(function(){away(goalshot);scorechange(awaysc);}, 106400);   //[客]进球 得分变色
	setTimeout(function(){away(faqiu1);}, 112000);    //[客]罚球1 罚球球进shot 大西瓜投篮
	setTimeout(function(){away(faqiu2);}, 117600);    //[客]罚球2 罚球未进miss 大西瓜投篮
	setTimeout(function(){away(fangui);}, 123200);     //[客]犯规
	setTimeout(function(){away(zhanting);}, 128800);   //[客]暂停

	//比赛结束 201902
	setTimeout(function(){
    	//$('.animation-live').append('');
    	$('.animation-live').append('<div id="finishboard"class="swiper-panel"><div class="example-swiper"><div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide swiper-slide-prev"style="width: 780px;"><div class="children score-panel start"><!--no-start--><div class="head"><div class="event-name"></div><div class="match-time"></div></div><div class="tema"><div class="starts"><span class="code">已完赛</span><span class="time hide"></span><span class="vs">VS</span></div><div class="left"><p class="away logo"></p><p class="away name o-hidden"></p><p class="away ranking"></p></div><div class="right"><p class="home logo"></p><p class="home name o-hidden"></p><p class="home ranking"></p></div><div class="mobile"><div class="clearfix-row f-s-29"><div class="display-i-b position-r"><div class="away one full-court"></div><div class="or">:</div><div class="home tow full-court"></div></div></div><div class="clearfix-row f-s-12 color-666 m-t-20"><div class="display-i-b position-r"><div class="away one half-court"></div><div class="or">-</div><div class="home tow half-court"></div></div></div></div></div></div></div><div class="swiper-slide swiper-slide-active"style="width: 780px;"><div class="children score-panel score-panel-tow start"><!--no-start--><div class="head"><div class="event-name"></div><div class="match-time"></div></div><div class="tema"><div class="starts"><span class="code">已完赛</span><span class="time hide"></span><span class="vs">VS</span></div><div class="left"><p class="away logo"></p></div><div class="right"><p class="home logo"></p></div></div><div class="tb-bottom"><div class="th row"><div class="name-p">&nbsp;</div><div class="theads race-node"><div class="float-left col-4 ">1</div><div class="float-left col-4 ">2</div><div class="float-left col-4 ">3</div><div class="float-left col-4 ">4</div></div></div><div class="one row"><div class="name-p">客</div><div class="away race-node"><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div></div></div><div class="tow row"><div class="name-p">主</div><div class="home race-node"><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div><div class="float-left col-4 color-white"></div></div></div></div></div></div><div class="swiper-slide swiper-slide-next"style="width: 780px;"><div class="children est statistics-one"><div class="head"><div class="event-name"></div><div class="match-time"></div></div><div class="box"><div class="tema"><div class="left"><p class="away logo"></p><p class="away name o-hidden"></p></div><div class="right"><p class="home logo"></p><p class="home name o-hidden"></p></div></div><div class="statistics-list"><div class="left"><div class="item stat-ele-4"><div class="title">暂停</div><div class="away num">-1</div></div><div class="item m-t-20 stat-ele-5"><div class="title">犯规</div><div class="away num">3</div></div></div><ul class="list"><li><div class="bar-panel stat-ele-1"><div class="left away num"></div><div class="text">3分球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num"></div></div></li><li><div class="bar-panel stat-ele-2"><div class="left away num"></div><div class="text">2分球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num"></div></div></li><li><div class="bar-panel stat-ele-3"><div class="left away num"></div><div class="text">罚球得分</div><div class="bar yellow"><div class="count"></div></div><div class="right home num"></div></div></li></ul><div class="right"><div class="item stat-ele-4"><div class="title">暂停</div><div class="home num"></div></div><div class="item m-t-20 stat-ele-5"><div class="title">犯规</div><div class="home num"></div></div></div></div></div></div></div></div><div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div></div></div></div>');
      	$('#finishboard .head .event-name').html('2019赛季&nbsp;VTB联赛 21岁以下'),//赛季
        $('#finishboard .head .match-time').html('2019/01/30&nbsp;18:00'),//时间
        $('#finishboard .left .logo').html('<img src="img/teamflag_s/b4cbdb06a1ea417990543fa87cc7c995.png">'),//[客]队徽
        $('#finishboard .right .logo').html('<img src="img/teamflag_s/c2abc5f988be409792d1f7bbc8c9c7ba.png">'),//[主]队徽
        $('#finishboard .left .name').html('勇士勇士勇士勇士勇士勇士'), //[客]队名
        $('#finishboard .right .name').html('湖人湖人湖人湖人湖人湖人'),//[主]队名
        $('#finishboard .left .ranking').html('一'),//[客]联赛排名
        $('#finishboard .right .ranking').html('一'),//[客]联赛排名
        $('#finishboard .mobile .away.full-court').html('124'),//[客]全场分数
        $('#finishboard .mobile .home.full-court').html('126'),//[主]全场分数
        $('#finishboard .mobile .away.half-court').html('67'),//[客]半场分数
        $('#finishboard .mobile .home.half-court').html('70'),//[主]半场分数
        $('#finishboard .tb-bottom .away div:nth-child(1)').html('33'),//[客]第1节分数
        $('#finishboard .tb-bottom .away div:nth-child(2)').html('34'),//[客]第2节分数
        $('#finishboard .tb-bottom .away div:nth-child(3)').html('24'),//[客]第3节分数
        $('#finishboard .tb-bottom .away div:nth-child(4)').html('33'),//[客]第4节分数
        $('#finishboard .tb-bottom .home div:nth-child(1)').html('33'),//[主]第1节分数
        $('#finishboard .tb-bottom .home div:nth-child(2)').html('37'),//[主]第2节分数
        $('#finishboard .tb-bottom .home div:nth-child(3)').html('26'),//[主]第3节分数
        $('#finishboard .tb-bottom .home div:nth-child(4)').html('30'),//[主]第4节分数
        $('#finishboard .statistics-list .left .stat-ele-4 .num').html('-1'),//[客]暂停
        $('#finishboard .statistics-list .left .stat-ele-5 .num').html('3'), //[客]犯规
        $('#finishboard .statistics-list .stat-ele-1 .left').html('13'),//[客]3分球得分
        $('#finishboard .statistics-list .stat-ele-1 .count').css('width','46.4286%'),//[图表]3分球得分
        $('#finishboard .statistics-list .stat-ele-1 .right').html('15'),//[主]3分球得分
        $('#finishboard .statistics-list .stat-ele-2 .left').html('35'),//[客]2分球得分
        $('#finishboard .statistics-list .stat-ele-2 .count').css('width','52.2388%'),//[图表]2分球得分
        $('#finishboard .statistics-list .stat-ele-2 .right').html('32'),//[主]2分球得分
        $('#finishboard .statistics-list .stat-ele-3 .left').html('15'),//[客]罚球得分
        $('#finishboard .statistics-list .stat-ele-3 .count').css('width','46.875%'),//[图表]罚球得分
        $('#finishboard .statistics-list .stat-ele-3 .right').html('17'),//[主]罚球得分
        $('#finishboard .statistics-list .right .stat-ele-4 .num').html('-1'), //[主]暂停
        $('#finishboard .statistics-list .right .stat-ele-5 .num').html('3'); //[主]犯规

    	//初始化Swipe
        var mySwiper1 = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
        });

	}, 134400);

}); //最後的括號勿刪除