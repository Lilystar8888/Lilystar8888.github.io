$(document).ready(function(){
	check_image_place();
});

$(window).resize(function() {
	check_image_place();
});

function check_image_place() {
	var width = 1100;
	if ($(document).width() < width) {
		$("#scenic2-text").insertBefore($("#scenic2-image"));
	} else {
		$("#scenic2-image").insertBefore($("#scenic2-text"));
	}

	if ($(document).width() < width) {
		$("#scenic4-text").insertBefore($("#scenic4-image"));
	} else {
		$("#scenic4-image").insertBefore($("#scenic4-text"));
	}

	if ($(document).width() < width) {
		$("#scenic6-text").insertBefore($("#scenic6-image"));
	} else {
		$("#scenic6-image").insertBefore($("#scenic6-text"));
	}

	if ($(document).width() < width) {
		$("#scenic8-text").insertBefore($("#scenic8-image"));
	} else {
		$("#scenic8-image").insertBefore($("#scenic8-text"));
	}

	if ($(document).width() < width) {
		$("#scenic10-text").insertBefore($("#scenic10-image"));
	} else {
		$("#scenic10-image").insertBefore($("#scenic10-text"));
	}

	if ($(document).width() < width) {
		$("#scenic12-text").insertBefore($("#scenic12-image"));
	} else {
		$("#scenic12-image").insertBefore($("#scenic12-text"));
	}
}