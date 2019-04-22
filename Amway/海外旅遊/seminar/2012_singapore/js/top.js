
function moveToRight() {
var scrollTop, scrollBottom, offsetSize;
if (isNS4) {
scrollTop = scroll.top;
scrollBottom = windows.pageoffsetSize + 0;//改上下
} else if (isDOM) {
scrollTop = parseInt(scroll.style.top, 0);
scrollBottom = document.body.scrollTop +0//改上下;
}

var nextTime = 500; 
if (scrollTop != scrollBottom) {
offsetSize = Math.ceil(Math.abs(scrollBottom - scrollTop) / 10);//拖曳速度
offsetSize = (scrollBottom > scrollTop) ? offsetSize : -offsetSize;
if (isNS4) {
scroll.top += offsetSize;
} else if (isDOM) {
scroll.style.top = parseInt(scroll.style.top, 10) + offsetSize;
}
nextTime = 10;//速度
}
setTimeout("moveToRight()", nextTime);
}

var isDOM = (document.getElementById ? true : false); 
var isNS4 = (document.layers ? true : false);
var scroll;

function initScroll() {
if (isNS4) {
scroll = document["scroll"];
scroll.top = top.pageoffsetSize + 30;//滑下速度
scroll.visibility = "visible";
moveToRight();
} else if (isDOM) {
scroll = document.getElementById('scroll');
scroll.style.top = document.body.scrollTop + 30;//滑下速度
scroll.style.visibility = "visible";
moveToRight();
}
}
