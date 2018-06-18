function showsearch() {
	$(".topnav>.btn, .search").toggleClass("active");
}

$(document).ready(function(){
	$("#datepicker1, #datepicker2").datepicker();
	$(".panel>h3").click(function(){	
		var width = $(window).width();
		if(width<768){$(this).parent('.panel').toggleClass('active');}
	});
});