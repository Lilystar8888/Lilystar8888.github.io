(function(factory) {
	typeof define === 'function' && define.amd ? define(['jquery', 'fb', 'global'], factory) : factory(jQuery);
}(function() {

	var init = $.fb.init();

	var fbconnect = $.Deferred();
	//只有page load時檢查
	$.fb.Login = $.fb.getLoginStatus();

	//無論何時，確認有登入後觸發 (經由 .requireFB, $.requireFB)
	$.fb.Connected = fbconnect.promise();
	if ($.fn.requireFB) {
		$.requireFB = $('<a href="javascript:"></a>')
			.attr('requireFB', '')
			.hide()
			.one($.fn.requireFB.events.CONNECT_SUCCESS, fbconnect.resolve)
			.appendTo('body');

		$.fb.Login.always(function() {
			$.requireFB.requireFB();

			$('body').on('click', '.requireFB', function() {
				var me = $(this);
				$.requireFB.one($.fn.requireFB.events.REQUIRE_FB_SUCCESS, function() {
					me.trigger($.fn.requireFB.events.REQUIRE_FB_SUCCESS);
				})
				.click();
			});
		});
	}

	//只有page load時檢查, 必須在 requireFB 之後
	$.fb.Login.done(fbconnect.resolve);

	Config.needLogin && $.fb.Login.fail(function() {
		$.fb.connect.redirect();
	});

}));