var ZeroClipboard={version:"1.0.4",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){"string"==typeof a&&(a=document.getElementById(a));a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a);this.className+=" "+a},a.removeClass=function(a){this.className=this.className.replace(new RegExp("\\s*"+a+"\\s*")," ").replace(/^\s+/,"").replace(/\s+$/,"")},a.hasClass=function(a){return!!this.className.match(new RegExp("\\s*"+
a+"\\s*"))});return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){(a=this.clients[a])&&a.receiveEvent(b,c)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a){for(var b={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};a;)b.left+=a.offsetLeft,b.top+=a.offsetTop,a=a.offsetParent;return b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,
this);a&&this.glue(a)}};
ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(a){this.domElement=ZeroClipboard.$(a);a=999999;this.domElement.style.zIndex&&(a=parseInt(this.domElement.style.zIndex)+1);var b=ZeroClipboard.getDOMObjectPosition(this.domElement);this.div=document.createElement("div");var c=this.div.style;c.position="absolute";c.left=""+b.left+"px";c.top=""+b.top+"px";c.width=""+b.width+"px";c.height=""+b.height+"px";c.zIndex=a;document.getElementsByTagName("body")[0].appendChild(this.div);
this.div.innerHTML=this.getHTML(b.width,b.height)},getHTML:function(a,b){var c="",e="id="+this.id+"&width="+a+"&height="+b;if(navigator.userAgent.match(/MSIE/)){var f=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+f+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+
ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+e+'"/><param name="wmode" value="transparent"/></object>'}else c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+
e+'" wmode="transparent" />';return c},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.div=this.domElement=null}},reposition:function(a){a&&((this.domElement=ZeroClipboard.$(a))||this.hide());if(this.domElement&&this.div){a=ZeroClipboard.getDOMObjectPosition(this.domElement);var b=
this.div.style;b.left=""+a.left+"px";b.top=""+a.top+"px"}},setText:function(a){this.clipText=a;this.ready&&this.movie.setText(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");this.handlers[a]||(this.handlers[a]=[]);this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");switch(a){case "load":this.movie=
document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=!0;return}this.ready=!0;this.movie.setText(this.clipText);this.movie.setHandCursor(this.handCursorEnabled);break;case "mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&
this.domElement.addClass("active"));break;case "mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case "mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case "mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a])for(var e=0,f=this.handlers[a].length;e<
f;e++){var d=this.handlers[a][e];if("function"==typeof d)d(this,b);else if("object"==typeof d&&2==d.length)d[0][d[1]](this,b);else if("string"==typeof d)window[d](this,b)}}};