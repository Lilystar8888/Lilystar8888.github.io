
function moveToRight() {
var scrollTop, scrollBottom, offsetSize;
if (isNS4) {
scrollTop = scroll.top;
scrollBottom = windows.pageoffsetSize + 0;//��W�U
} else if (isDOM) {
scrollTop = parseInt(scroll.style.top, 0);
scrollBottom = document.body.scrollTop +0//��W�U;
}

var nextTime = 500; 
if (scrollTop != scrollBottom) {
offsetSize = Math.ceil(Math.abs(scrollBottom - scrollTop) / 10);//�즲�t��
offsetSize = (scrollBottom > scrollTop) ? offsetSize : -offsetSize;
if (isNS4) {
scroll.top += offsetSize;
} else if (isDOM) {
scroll.style.top = parseInt(scroll.style.top, 10) + offsetSize;
}
nextTime = 10;//�t��
}
setTimeout("moveToRight()", nextTime);
}

var isDOM = (document.getElementById ? true : false); 
var isNS4 = (document.layers ? true : false);
var scroll;

function initScroll() {
if (isNS4) {
scroll = document["scroll"];
scroll.top = top.pageoffsetSize + 30;//�ƤU�t��
scroll.visibility = "visible";
moveToRight();
} else if (isDOM) {
scroll = document.getElementById('scroll');
scroll.style.top = document.body.scrollTop + 30;//�ƤU�t��
scroll.style.visibility = "visible";
moveToRight();
}
}
