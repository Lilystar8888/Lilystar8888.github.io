$(document).ready(function(){
	// 監聽step2相簿

	// 相簿相片數量，必填，會根據這個來計算要關閉哪一張圖片
	// 可以改良成初始化直接計算相簿裡有幾張相片
	var albumSize = [4,6,3,4,6,3];

	// a click 顏色
	// var album_click_color = "RGBA(236, 235, 234, 1.00)";
	// var album_origin_color = "black";
	var album_click_color = "#AFAAA2";
	var album_origin_color = "#000000";

	var images = $(".scenic-left-image");
	var album_indexs = new Array(images.length+1);
	for (var i = 1; i<=images.length; i++) {
		album_indexs[i] = 1;
		console.log(album_indexs[i]);
	}

	// 左邊按鈕
	for(var k=0; k<$(".left-arrow").length; k++) {
		$(".left-arrow:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id + 1;
			var album_array = $("#album"+ album +" .album" + album + "-img");
			var pre = -1;
			// 抓出目前的照片上一筆的index
			for (var i=0;i<album_array.length;i++) {
				var index = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('index');
				if (album_indexs[album] == index) {
					pre = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('pre');
				}
			}
			// show上一筆index, 其他隱藏
			for (var i=0;i<album_array.length;i++) {
				if (pre == i+1) {
					$("#album"+album+" .album"+album+"-img:eq("+i+")").show();
				} else {
					$("#album"+album+" .album"+album+"-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<album_array.length;i++) {
				if (pre == i+1) {
					// album1-image-change
					$("#album"+album+"-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album"+album+"-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[album] = pre;
		});
	}

	// 右邊按鈕
	for(var k=0; k<$(".right-arrow").length; k++) {
		$(".right-arrow:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id + 1;
			var album_array = $("#album"+album+" .album"+album+"-img");
			var next = -1;
			// 抓出目前的照片上一筆的index
			for (var i=0;i<album_array.length;i++) {
				var index = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('index');
				if (album_indexs[album] == index) {
					next = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('next');
				}
			}
			// show上一筆index, 其他隱藏
			for (var i=0;i<album_array.length;i++) {
				if (next == i+1) {
					$("#album"+album+" .album"+album+"-img:eq("+i+")").show();
				} else {
					$("#album"+album+" .album"+album+"-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<album_array.length;i++) {
				if (next == i+1) {
					// album1-image-change
					$("#album"+album+"-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album"+album+"-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[album] = next;
			// console.log(album1_index);
		});
	}

	// 相簿1 viewmore
	for(var k=0; k<$(".viewmore").length; k++) {
		$(".viewmore:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id + 1;
			var album_array = $("#album"+album+" .album"+album+"-img");
			$(this).hide();
			for (var i=0;i<album_array.length;i++) {
				var index = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('index');
				if (album_indexs[album] == index) {
					var cover = $("#album"+album+" .album"+album+"-img .opacity-cover:eq("+i+")");
					var image = $("#album"+album+" .album"+album+"-img .image-card:eq("+i+")");
					cover.show();
					image.show();

					// TODO 檢查多少字來改變image_card的寬高
					var card_text = $("#album"+album+" .album"+album+"-img .image-card:eq("+i+") .image-card-text");
					console.log(card_text.text());
				}
			}
		});
	}

	var newSize = new Array(albumSize.length);
	// 相簿1 關閉相簿
	for(var k=0; k<$(".close").length; k++) {
		$(".close:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var closeNum = e.data.id + 1;
			var album = -1;
			var sum = 0;
			for (var j=0; j<albumSize.length; j++) {
				var size = albumSize[j];
				sum = sum + size;
				newSize[j] = sum;
			}
			console.log(newSize);

			for (var l=0; l < newSize.length; l++) {
				if (closeNum <= newSize[l]) {
					album = l+1;
					break;
				}
			}

			var album_array = $("#album"+album+" .album"+album+"-img");
			for (var i=0;i<album_array.length;i++) {
				var index = $("#album"+album+" .album"+album+"-img:eq("+i+")").attr('index');
				if (album_indexs[album] == index) {
					var cover = $("#album"+album+" .album"+album+"-img .opacity-cover:eq("+i+")");
					var image = $("#album"+album+" .album"+album+"-img .image-card:eq("+i+")");
					var viewmore = $("#album"+album+"-viewmore");
					cover.hide();
					image.hide();
					viewmore.show();
				}
			}
		});
	}

	// 相簿1 link click事件
	for(var k=0; k<$("#album1-image-change a").length; k++) {
		$("#album1-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album1 .album1-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album1 .album1-img:eq("+i+")").show();
				} else {
					$("#album1 .album1-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album1-image-change a").length;i++) {
				if (i == album) {
					$("#album1-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album1-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[1] = index;
		});
	}

	// 相簿2 link click事件
	for(var k=0; k<$("#album2-image-change a").length; k++) {
		$("#album2-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album2 .album2-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album2 .album2-img:eq("+i+")").show();
				} else {
					$("#album2 .album2-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album2-image-change a").length;i++) {
				if (i == album) {
					$("#album2-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album2-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[2] = index;
		});
	}

	// 相簿3 link click事件
	for(var k=0; k<$("#album3-image-change a").length; k++) {
		$("#album3-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album3 .album3-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album3 .album3-img:eq("+i+")").show();
				} else {
					$("#album3 .album3-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album3-image-change a").length;i++) {
				if (i == album) {
					$("#album3-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album3-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[3] = index;
		});
	}

	// 相簿4 link click事件
	for(var k=0; k<$("#album4-image-change a").length; k++) {
		$("#album4-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album4 .album4-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album4 .album4-img:eq("+i+")").show();
				} else {
					$("#album4 .album4-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album4-image-change a").length;i++) {
				if (i == album) {
					$("#album4-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album4-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[4] = index;
		});
	}

	// 相簿5 link click事件
	for(var k=0; k<$("#album5-image-change a").length; k++) {
		$("#album5-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album5 .album5-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album5 .album5-img:eq("+i+")").show();
				} else {
					$("#album5 .album5-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album5-image-change a").length;i++) {
				if (i == album) {
					$("#album5-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album5-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[5] = index;
		});
	}
	// 相簿6 link click事件
	for(var k=0; k<$("#album6-image-change a").length; k++) {
		$("#album6-image-change a:eq("+k+")").click({id:k},function(e) {
			console.log(e.data.id);
			var album = e.data.id;
			var album_array = $("#album6 .album6-img");
			for (var i=0;i<album_array.length;i++) {
				var index = album+1;
				if (index == i+1) {
					$("#album6 .album6-img:eq("+i+")").show();
				} else {
					$("#album6 .album6-img:eq("+i+")").hide();
				}
			}
			// 切換顏色
			for (var i=0;i<$("#album6-image-change a").length;i++) {
				if (i == album) {
					$("#album6-image-change a:eq("+i+")").css("color",album_click_color);
				} else {
					$("#album6-image-change a:eq("+i+")").css("color",album_origin_color);
				}
			}
			album_indexs[6] = index;
		});
	}
});