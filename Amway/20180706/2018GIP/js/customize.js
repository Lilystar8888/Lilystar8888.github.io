!
function(o) {
	"use strict";
	o("a.page-scroll").bind("click",
	function(t) {
		var l = o(this);
		o("html, body").stop().animate({
			scrollTop: o(l.attr("href")).offset().top - 50
		},
		1250, "easeInOutExpo"),
		t.preventDefault()
	}),
	o("body").scrollspy({
		target: ".navbar-fixed-top",
		offset: 51
	}),
	o(".navbar-collapse ul li a").click(function() {
		o(".navbar-toggle:visible").click()
	}),
	o("#mainNav").affix({
		offset: {
			top: 100
		}
	}),
	o(function() {
		o("body").on("input propertychange", ".floating-label-form-group",
		function(t) {
			o(this).toggleClass("floating-label-form-group-with-value", !!o(t.target).val())
		}).on("focus", ".floating-label-form-group",
		function() {
			o(this).addClass("floating-label-form-group-with-focus")
		}).on("blur", ".floating-label-form-group",
		function() {
			o(this).removeClass("floating-label-form-group-with-focus")
		})
	})
} (jQuery);

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#totop').fadeIn();
		} else {
			$('#totop').fadeOut();
		}
	});

	$('#totop').click(function() {
		$("html, body").animate({
			scrollTop: 0
		},
		600);
		return false;
	});
});
function myFunction() {
	alert("敬請期待!");
}
