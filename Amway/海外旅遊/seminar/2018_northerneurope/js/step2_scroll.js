// $(document).ready(function(){
// 	$("#scenic2").hide();
// });
var album1_check = 0;
var album2_check = 0;
var album3_check = 0;
var album4_check = 0;
var album5_check = 0;
var album6_check = 0;
$(window).scroll(function(){
	// 相簿浮出控制
	var animate_style = 'animated fadeInUp';
	if ($(window).scrollTop() >= ($("#scenic1").offset().top - 400) && album1_check == 0) {
		$("#album1").addClass(animate_style);
		setTimeout(function(){
			$("#album1").removeClass(animate_style); // 移除animate避免元素重疊
			album1_check = 1;
		}, 1000);
	}
	if ($(window).scrollTop() >= ($("#scenic3").offset().top - 400) && album2_check == 0) {
		$("#album2").addClass(animate_style);
		setTimeout(function(){
			$("#album2").removeClass(animate_style);
			album2_check = 1;
		}, 1000);
	}
	if ($(window).scrollTop() >= ($("#scenic5").offset().top - 400) && album3_check == 0) {
		$("#album3").addClass(animate_style);
		setTimeout(function(){
			$("#album3").removeClass(animate_style);
			album3_check = 1;
		}, 1000);
	}
	if ($(window).scrollTop() >= ($("#scenic6").offset().top - 400) && album4_check == 0) {
		$("#album4").addClass(animate_style);
		setTimeout(function(){
			$("#album4").removeClass(animate_style);
			album4_check = 1;
		}, 1000);
	}
	if ($(window).scrollTop() >= ($("#scenic7").offset().top - 400) && album5_check == 0) {
		$("#album5").addClass(animate_style);
		setTimeout(function(){
			$("#album5").removeClass(animate_style);
			album5_check = 1;
		}, 1000);
	}
	if ($(window).scrollTop() >= ($("#scenic9").offset().top - 400) && album6_check == 0) {
		$("#album6").addClass(animate_style);
		setTimeout(function(){
			$("#album6").removeClass(animate_style);
			album6_check = 1;
		}, 1000);
	}
});