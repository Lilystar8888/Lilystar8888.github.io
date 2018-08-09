(function(b){b.fn.imagesLoaded=function(n){function k(){var c=b(a),l=b(e);h&&(e.length?h.reject(f,c,l):h.resolve(f));b.isFunction(n)&&n.call(g,f,c,l)}function m(d,l){"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="!==d.src&&-1===b.inArray(d,c)&&(c.push(d),l?e.push(d):a.push(d),b.data(d,"imagesLoaded",{isBroken:l,src:d.src}),p&&h.notifyWith(b(d),[l,f,b(a),b(e)]),f.length===c.length&&(window.setTimeout(k),f.unbind(".imagesLoaded")))}var g=this,h=b.isFunction(b.Deferred)?b.Deferred():
0,p=b.isFunction(h.notify),f=g.find("img").add(g.filter("img")),c=[],a=[],e=[];f.length?f.bind("load.imagesLoaded error.imagesLoaded",function(a){m(a.target,"error"===a.type)}).each(function(a,c){var e=c.src,d;if((d=b.data(c,"imagesLoaded"))&&d.src===e)m(c,d.isBroken);else if(c.complete&&void 0!==c.naturalWidth)m(c,0===c.naturalWidth||0===c.naturalHeight);else if(c.readyState||c.complete)c.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",c.src=e}):k();return h?h.promise(g):
g}})(jQuery);
(function(b){b.fn.cjImageVideoPreviewer=function(n){function k(){null!==a.timer&&(window.clearTimeout(a.timer),a.timer=null)}function m(){a.state&&(k(),a.idx=0,a.state=!1,b(a.elem).find("div.cjImageVideoPreviewer img:first").css({display:"block"}),b(a.elem).find("div.cjImageVideoPreviewer img:not(:first)").css({display:"none"}))}function g(){var e=b(a.elem).attr("id")+"_IMG_"+a.idx,d=b(a.elem).attr("id")+"_IMG_"+(a.idx+1>c.images.length-1?1:a.idx+1);a.idx=a.idx+1>c.images.length-1?1:a.idx+1;b(a.elem).find(".cjImageVideoPreviewer img#"+
d).css({display:"block"});b(a.elem).find(".cjImageVideoPreviewer img#"+e).css({display:"none"});k();c.autoPlay?a.timer=window.setTimeout(g,c.delay):a.mouseX>=b(a.elem).offset().left&&a.mouseX<=b(a.elem).offset().left+b(a.elem).width()&&a.mouseY>=b(a.elem).offset().top&&a.mouseY<=b(a.elem).offset().top+b(a.elem).height()?a.timer=window.setTimeout(g,c.delay):m()}function h(){var e=null;c.images.unshift(b(a.elem).find("img:first").attr("src"));0<b(a.elem).find("img").parents("A").length&&(e=b(a.elem).find("img").parents("A").get(0).href);
b(a.elem).append('<div class="cjImageVideoPreviewer">');b(a.elem).find(".cjImageVideoPreviewer").css({display:"none",width:b(a.elem).width()+"px",height:b(a.elem).height()+"px",overflow:"hidden",position:"absolute",top:"0px",left:"0px"});c.showProgress&&b(a.elem).find(".cjImageVideoPreviewer").append(b('<div class="cjImageVideoPreviewerProgress">').css({display:"none",width:b(a.elem).width()-4+"px",height:"8px",overflow:"hidden",position:"absolute",top:"0px",left:"0px","background-color":"string"===
typeof b(a.elem).css("border-top-color")?b(a.elem).css("border-top-color"):"#000","border-width":"2px","border-style":"solid","border-color":"string"===typeof b(a.elem).css("border-top-color")?b(a.elem).css("border-top-color"):"#000","z-index":"20"}).append(b('<div class="cjImageVideoPreviewerProgressBar">').css({display:"block",width:b(a.elem).width()-4+"px",height:"6px",overflow:"hidden",position:"absolute",top:"0",left:"-"+(b(a.elem).width()-4)+"px",background:"#6bc4f7 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAGCAIAAABSPBl5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANRJREFUeNpckUtyxDAIRGms8WIq+9lMTpzL5RC5QhYZ23QakCcfFaIQEo+P8Pb+5TDJAgzY8FOAi7ffANMi7aAFbQvbyV26Jf2MuhofnzFZTuGEWBesLoNrcvEPtwcfkUTpx8FCJ7SJQwe3WsywxTJJ5EkaLAPz/ulknM8O6+pSJ+52hXCLz2Yv3pKdjrId6HyFqHICWxYoG9vZ7BHQg3G/es/uz/iQCTS+9j+bDSKyEAVL49fgMGf3+pKPtVVCBeew+gcmy35w7B6J/pPSxTpvvwUYAKIhoZSkg7l0AAAAAElFTkSuQmCC) repeat-x top left",
"z-index":"21"})));b(c.images).each(function(e){var d=b(a.elem).attr("id")+"_IMG_"+e;b(a.elem).find(".cjImageVideoPreviewer:first").append(b('<img src="'+c.images[e]+'" id="'+d+'" />').css({display:"none",position:"absolute",top:"0px",left:"0px","z-index":10}));b("#"+d).imagesLoaded(function(){a.loaded++;if(a.loaded>c.images.length-2)b(a.elem).find("div.cjImageVideoPreviewerProgress").hide(),a.timer=window.setTimeout(g,c.delay);else if(c.showProgress){var e=b(a.elem).find("div.cjImageVideoPreviewerProgress"),
d=b(a.elem).find("div.cjImageVideoPreviewerProgress div.cjImageVideoPreviewerProgressBar");"block"!==b(e).css("display")&&b(e).show();b(d).css({left:parseInt(b(d).css("left"),10)+parseInt(b(d).width()/(c.images.length-2),10)+"px"})}})});e&&b(a.elem).find(".cjImageVideoPreviewer").append(b("<div>").css({display:"block",width:b(a.elem).width()+"px",height:b(a.elem).height()+"px",margin:0,padding:0,position:"absolute",top:"0px",left:"0px",cursor:c.autoPlay?"":"pointer","z-index":100}).click(function(){document.location.href=
e}));b(a.elem).find(".cjImageVideoPreviewer").css({display:"block"})}function p(){a.state=!0;k();0===b(a.elem).find(".cjImageVideoPreviewer:first").length?(h(),a.timer=window.setTimeout(p,100)):a.timer=window.setTimeout(g,c.delay)}function f(){1<c.images.length&&0<b(a.elem).find("img").length&&(c.delay=0>c.delay?0:parseInt(c.delay,10),"relative"!==b(a.elem).css("position")&&"absolute"!==b(a.elem).css("position")?alert("CJ Image Video Preview v"+a.version+" Error!\n\nYou parent element (#"+b(a.elem).attr("id")+
") must have it's positioning set to either RELATIVE or ABSOLUTE.\n\nPosition: "+b(a.elem).css("position")):c.autoPlay?p():(b(document).mousemove(function(b){a.mouseX=b.pageX;a.mouseY=b.pageY}),b(a.elem).hover(function(b){null===a.timer&&p()},function(){m()})))}var c={images:[],delay:450,autoPlay:!1,showProgress:!0},a={version:"1.1.1",elem:null,idx:1,timer:null,loaded:0,mouseX:null,mouseY:null,state:!1};n&&b.extend(c,n);return this.each(function(){a.elem=this;f()})}})(jQuery);