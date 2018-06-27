/*
	Author: Ammon Lin
	version : 0.4
*/
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function($) {
	$.fn.niceSelect = function(restore) {
		return this.each(function() {
			var me = $(this);
			if (me.parent().hasClass('nc-select')) { return; }

			function getText(o) {
				var ls = $('option', o);
				var selected = ls.filter(':selected');
				var txt = selected.length ? selected.text() : ls.eq(0).text() || '';
				return txt;
			}

			me.css({ position: 'absolute', top: 0, left: 0, opacity: 0 })
				.on('change', function() {
					text.text(getText(this));
				});
			var text = $('<span class="nc-text" />').text(getText(me));
			var container = $('<div class="nc-select" />').css({ position: 'relative' })
				.insertBefore(this).append(this).append(text);
		})
	};
}));
