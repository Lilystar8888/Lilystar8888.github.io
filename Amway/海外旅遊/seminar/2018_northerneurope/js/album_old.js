$(document).ready(function(){

	// 監聽step2相簿1
	var album1_index=1;
	// 左邊按鈕
	$("#album1-left-arrow").click(function(){
		var album_array = $("#album1 .album1-img");
		var pre = -1;
		// 抓出目前的照片上一筆的index
		for (var i=0;i<album_array.length;i++) {
			var index = $("#album1 .album1-img:eq("+i+")").attr('index');
			if (album1_index == index) {
				pre = $("#album1 .album1-img:eq("+i+")").attr('pre');
			}
		}
		// show上一筆index, 其他隱藏
		for (var i=0;i<album_array.length;i++) {
			if (pre == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = pre;
		// console.log(album1_index);
	});
	// 右邊按鈕
	$("#album1-right-arrow").click(function(){
		var album_array = $("#album1 .album1-img");
		var next = -1;
		// 抓出目前的照片上一筆的index
		for (var i=0;i<album_array.length;i++) {
			var index = $("#album1 .album1-img:eq("+i+")").attr('index');
			if (album1_index == index) {
				next = $("#album1 .album1-img:eq("+i+")").attr('next');
			}
		}
		// show上一筆index, 其他隱藏
		for (var i=0;i<album_array.length;i++) {
			if (next == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = next;
		// console.log(album1_index);
	});

	// 相簿1 viewmore
	$("#album1-viewmore").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = $("#album1 .album1-img:eq("+i+")").attr('index');
			if (album1_index == index) {
				var cover = $("#album1 .album1-img .opacity-cover:eq("+i+")");
				var image = $("#album1 .album1-img .image-card:eq("+i+")");
				cover.show();
				image.show();
			}
		}
	});
	// 相簿1 關閉相簿
	$(".album1-close").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = $("#album1 .album1-img:eq("+i+")").attr('index');
			if (album1_index == index) {
				var cover = $("#album1 .album1-img .opacity-cover:eq("+i+")");
				var image = $("#album1 .album1-img .image-card:eq("+i+")");
				cover.hide();
				image.hide();
			}
		}
	});


	// 相簿 link click事件
	$("#album1-image-change a:eq(0)").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = 1;
			if (index == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = index;
	});

	$("#album1-image-change a:eq(1)").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = 2;
			if (index == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = index;
	});

	$("#album1-image-change a:eq(2)").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = 3;
			if (index == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = index;
	});

	$("#album1-image-change a:eq(3)").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = 4;
			if (index == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = index;
	});

	$("#album1-image-change a:eq(4)").click(function() {
		var album_array = $("#album1 .album1-img");
		for (var i=0;i<album_array.length;i++) {
			var index = 5;
			if (index == i+1) {
				$("#album1 .album1-img:eq("+i+")").show();
			} else {
				$("#album1 .album1-img:eq("+i+")").hide();
			}
		}
		album1_index = index;
	});

});