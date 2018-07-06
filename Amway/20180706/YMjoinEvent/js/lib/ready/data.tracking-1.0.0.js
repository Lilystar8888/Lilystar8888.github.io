/*
	加入 attribute 自動送出 tracking 指令後轉到
	例如 <a href="test.html" data-tracking="_gaq.push(['trackPageView'])"></a>
	會排除 [requireFB] .requireFB
*/
(function(factory) {
	typeof define === 'function' && define.amd ? define(['jquery','extend'], factory) : factory(jQuery);
}(function() {
	if (!window.CLICK) { CLICK = $.isMobile ? 'touchstart' : 'click'; }

	$('body').on(CLICK, 'area[data-tracking],a[data-tracking]', function(e) {
		var me = $(this);
		eval(me.data('tracking'));
		if (me.attr('requireFB') != undefined || me.hasClass('requireFB')) { return; }
		var href = me.attr('href');
		if (/^javascript:/.test(href)) { return; }

		var target = me.attr('target');
		if (target && target != '_top') { return; }
		target = target == '_top' ? top : window;
		e.preventDefault();
		setTimeout(function() { target.location.href = href; }, 200);
	});

}));