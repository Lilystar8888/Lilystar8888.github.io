/*
Copyright by Audi 2006
http://audi.tw
http://www.carousel.com.tw
歡迎應用於無償用途散播，並請勿移除本版權宣告

*/

/*
以 HTML 標籤 <blockquote> 作為標題內容,並以title標記為 _news_list
*/

function init(){
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName('blockquote')[i]); i++) {
		if (a.getAttribute('title')=='_news_list'){
			eval('document.getElementById(\''+a.getAttribute('id')+'\').style.display=\'none\'');
		}
	}
}

function showStep(layerName){
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName('blockquote')[i]); i++) {
		if (a.getAttribute('title')=='_news_list'){
			eval('document.getElementById(\''+a.getAttribute('id')+'\').style.display=\'none\'');
		}
	}

	if (eval('document.getElementById(\''+layerName+'\').style.display==\'inline\'')){
		method='hide';
	}else{
		method='show';
	}

	if (method=='show'){method='inline';}
	if (method=='hide'){method='none';}

	eval('document.getElementById(\''+layerName+'\').style.display=\''+method+'\'');
}

onload=init