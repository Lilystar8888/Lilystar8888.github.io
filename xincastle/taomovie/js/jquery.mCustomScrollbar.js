(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):"undefined"!==typeof module&&module.exports?module.exports=d:d(jQuery,window,document)})(function(d){(function(S){var aa="undefined"!==typeof module&&module.exports,C="https:"==document.location.protocol?"https:":"http:";"function"===typeof define&&define.amd||(aa?require("jquery-mousewheel")(d):d.event.special.mousewheel||d("head").append(decodeURI("%3Cscript src="+C+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E")));
S()})(function(){var S={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},aa=0,C={},K=window.attachEvent&&!window.addEventListener?1:0,B=!1,L,p="mCSB_dragger_onDrag mCSB_scrollTools_onDrag mCS_img_loaded mCS_disabled mCS_destroyed mCS_no_scrollbar mCS-autoHide mCS-dir-rtl mCS_no_scrollbar_y mCS_no_scrollbar_x mCS_y_hidden mCS_x_hidden mCSB_draggerContainer mCSB_buttonUp mCSB_buttonDown mCSB_buttonLeft mCSB_buttonRight".split(" "),
z={init:function(a){a=d.extend(!0,{},S,a);var c=D.call(this);if(a.live){var b=a.liveSelector||this.selector||".mCustomScrollbar",h=d(b);if("off"===a.live){T(b);return}C[b]=setTimeout(function(){h.mCustomScrollbar(a);"once"===a.live&&h.length&&T(b)},500)}else T(b);a.setWidth=a.set_width?a.set_width:a.setWidth;a.setHeight=a.set_height?a.set_height:a.setHeight;a.axis=a.horizontalScroll?"x":na(a.axis);a.scrollInertia=0<a.scrollInertia&&17>a.scrollInertia?17:a.scrollInertia;"object"!==typeof a.mouseWheel&&
1==a.mouseWheel&&(a.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1});a.mouseWheel.scrollAmount=a.mouseWheelPixels?a.mouseWheelPixels:a.mouseWheel.scrollAmount;a.mouseWheel.normalizeDelta=a.advanced.normalizeMouseWheelDelta?a.advanced.normalizeMouseWheelDelta:a.mouseWheel.normalizeDelta;a.scrollButtons.scrollType=oa(a.scrollButtons.scrollType);ha(a);return d(c).each(function(){var b=d(this);if(!b.data("mCS")){b.data("mCS",{idx:++aa,
opt:a,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:b.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var c=b.data("mCS"),h=c.opt,e=b.data("mcs-axis"),m=b.data("mcs-scrollbar-position"),g=b.data("mcs-theme");e&&(h.axis=e);m&&(h.scrollbarPosition=m);g&&(h.theme=g,ha(h));m=d(this);e=m.data("mCS");g=e.opt;var n=g.autoExpandScrollbar?" "+p[1]+"_expand":"";n=["<div id='mCSB_"+
e.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+e.idx+"_scrollbar mCS-"+g.theme+" mCSB_scrollTools_vertical"+n+"'><div class='"+p[12]+"'><div id='mCSB_"+e.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+e.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+e.idx+"_scrollbar mCS-"+g.theme+" mCSB_scrollTools_horizontal"+n+"'><div class='"+p[12]+"'><div id='mCSB_"+
e.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"];var v="yx"===g.axis?"mCSB_vertical_horizontal":"x"===g.axis?"mCSB_horizontal":"mCSB_vertical";n="yx"===g.axis?n[0]+n[1]:"x"===g.axis?n[1]:n[0];var U="yx"===g.axis?"<div id='mCSB_"+e.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",q=g.autoHideScrollbar?" "+p[6]:"",M="x"!==g.axis&&"rtl"===e.langDir?" "+p[7]:"";g.setWidth&&m.css("width",
g.setWidth);g.setHeight&&m.css("height",g.setHeight);g.setLeft="y"!==g.axis&&"rtl"===e.langDir?"989999px":g.setLeft;m.addClass("mCustomScrollbar _mCS_"+e.idx+q+M).wrapInner("<div id='mCSB_"+e.idx+"' class='mCustomScrollBox mCS-"+g.theme+" "+v+"'><div id='mCSB_"+e.idx+"_container' class='mCSB_container' style='position:relative; top:"+g.setTop+"; left:"+g.setLeft+";' dir='"+e.langDir+"' /></div>");v=d("#mCSB_"+e.idx);q=d("#mCSB_"+e.idx+"_container");"y"===g.axis||g.advanced.autoExpandHorizontalScroll||
q.css("width",ia(q));"outside"===g.scrollbarPosition?("static"===m.css("position")&&m.css("position","relative"),m.css("overflow","visible"),v.addClass("mCSB_outside").after(n)):(v.addClass("mCSB_inside").append(n),q.wrap(U));g=d(this).data("mCS");m=g.opt;g=d(".mCSB_"+g.idx+"_scrollbar:first");n=V(m.scrollButtons.tabindex)?"tabindex='"+m.scrollButtons.tabindex+"'":"";n=["<a href='#' class='"+p[13]+"' "+n+" />","<a href='#' class='"+p[14]+"' "+n+" />","<a href='#' class='"+p[15]+"' "+n+" />","<a href='#' class='"+
p[16]+"' "+n+" />"];n=["x"===m.axis?n[2]:n[0],"x"===m.axis?n[3]:n[1],n[2],n[3]];m.scrollButtons.enable&&g.prepend(n[0]).append(n[1]).next(".mCSB_scrollTools").prepend(n[2]).append(n[3]);e=[d("#mCSB_"+e.idx+"_dragger_vertical"),d("#mCSB_"+e.idx+"_dragger_horizontal")];e[0].css("min-height",e[0].height());e[1].css("min-width",e[1].width());c&&h.callbacks.onCreate&&"function"===typeof h.callbacks.onCreate&&h.callbacks.onCreate.call(this);d("#mCSB_"+c.idx+"_container img:not(."+p[2]+")").addClass(p[2]);
z.update.call(null,b)}})},update:function(a,c){var b=a||D.call(this);return d(b).each(function(){var a=d(this);if(a.data("mCS")){var b=a.data("mCS"),f=b.opt,k=d("#mCSB_"+b.idx+"_container"),e=d("#mCSB_"+b.idx),m=[d("#mCSB_"+b.idx+"_dragger_vertical"),d("#mCSB_"+b.idx+"_dragger_horizontal")];if(k.length){b.tweenRunning&&E(a);c&&b&&f.callbacks.onBeforeUpdate&&"function"===typeof f.callbacks.onBeforeUpdate&&f.callbacks.onBeforeUpdate.call(this);a.hasClass(p[3])&&a.removeClass(p[3]);a.hasClass(p[4])&&
a.removeClass(p[4]);e.css("max-height","none");e.height()!==a.height()&&e.css("max-height",a.height());var g=d(this).data("mCS");e=g.opt;g=d("#mCSB_"+g.idx+"_container");if(e.advanced.autoExpandHorizontalScroll&&"y"!==e.axis){g.css({width:"auto","min-width":0,"overflow-x":"scroll"});var n=Math.ceil(g[0].scrollWidth);3===e.advanced.autoExpandHorizontalScroll||2!==e.advanced.autoExpandHorizontalScroll&&n>g.parent().width()?g.css({width:n,"min-width":"100%","overflow-x":"inherit"}):g.css({"overflow-x":"inherit",
position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(g[0].getBoundingClientRect().right+.4)-Math.floor(g[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}"y"===f.axis||f.advanced.autoExpandHorizontalScroll||k.css("width",ia(k));var v=d(this).data("mCS");e=d("#mCSB_"+v.idx);n=d("#mCSB_"+v.idx+"_container");g=null==v.overflowed?n.height():n.outerHeight(!1);v=null==v.overflowed?n.width():
n.outerWidth(!1);var U=n[0].scrollHeight;n=n[0].scrollWidth;U>g&&(g=U);n>v&&(v=n);e=[g>e.height(),v>e.width()];b.overflowed=e;ja.call(this);f.autoDraggerLength&&(e=d(this).data("mCS"),g=d("#mCSB_"+e.idx),n=d("#mCSB_"+e.idx+"_container"),e=[d("#mCSB_"+e.idx+"_dragger_vertical"),d("#mCSB_"+e.idx+"_dragger_horizontal")],g=[g.height()/n.outerHeight(!1),g.width()/n.outerWidth(!1)],g=[parseInt(e[0].css("min-height")),Math.round(g[0]*e[0].parent().height()),parseInt(e[1].css("min-width")),Math.round(g[1]*
e[1].parent().width())],n=K&&g[3]<g[2]?g[2]:g[3],e[0].css({height:K&&g[1]<g[0]?g[0]:g[1],"max-height":e[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":g[0]+"px"}),e[1].css({width:n,"max-width":e[1].parent().width()-10}));e=d(this).data("mCS");n=d("#mCSB_"+e.idx);v=d("#mCSB_"+e.idx+"_container");g=[d("#mCSB_"+e.idx+"_dragger_vertical"),d("#mCSB_"+e.idx+"_dragger_horizontal")];n=[v.outerHeight(!1)-n.height(),v.outerWidth(!1)-n.width()];g=[n[0]/(g[0].parent().height()-g[0].height()),
n[1]/(g[1].parent().width()-g[1].width())];e.scrollRatio={y:g[0],x:g[1]};pa.call(this);k=[Math.abs(k[0].offsetTop),Math.abs(k[0].offsetLeft)];"x"!==f.axis&&(b.overflowed[0]?m[0].height()>m[0].parent().height()?H.call(this):(x(a,k[0].toString(),{dir:"y",dur:0,overwrite:"none"}),b.contentReset.y=null):(H.call(this),"y"===f.axis?W.call(this):"yx"===f.axis&&b.overflowed[1]&&x(a,k[1].toString(),{dir:"x",dur:0,overwrite:"none"})));"y"!==f.axis&&(b.overflowed[1]?m[1].width()>m[1].parent().width()?H.call(this):
(x(a,k[1].toString(),{dir:"x",dur:0,overwrite:"none"}),b.contentReset.x=null):(H.call(this),"x"===f.axis?W.call(this):"yx"===f.axis&&b.overflowed[0]&&x(a,k[0].toString(),{dir:"y",dur:0,overwrite:"none"})));c&&b&&(2===c&&f.callbacks.onImageLoad&&"function"===typeof f.callbacks.onImageLoad?f.callbacks.onImageLoad.call(this):3===c&&f.callbacks.onSelectorChange&&"function"===typeof f.callbacks.onSelectorChange?f.callbacks.onSelectorChange.call(this):f.callbacks.onUpdate&&"function"===typeof f.callbacks.onUpdate&&
f.callbacks.onUpdate.call(this));ba.call(this)}}})},scrollTo:function(a,c){if("undefined"!=typeof a&&null!=a){var b=D.call(this);return d(b).each(function(){var b=d(this);if(b.data("mCS")){var l=b.data("mCS"),f=l.opt,k=d.extend(!0,{},{trigger:"external",scrollInertia:f.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},c),e=ca.call(this,a),m=0<k.scrollInertia&&17>k.scrollInertia?17:k.scrollInertia;e[0]=ka.call(this,e[0],"y");e[1]=
ka.call(this,e[1],"x");k.moveDragger&&(e[0]*=l.scrollRatio.y,e[1]*=l.scrollRatio.x);k.dur=qa()?0:m;setTimeout(function(){null!==e[0]&&"undefined"!==typeof e[0]&&"x"!==f.axis&&l.overflowed[0]&&(k.dir="y",k.overwrite="all",x(b,e[0].toString(),k));null!==e[1]&&"undefined"!==typeof e[1]&&"y"!==f.axis&&l.overflowed[1]&&(k.dir="x",k.overwrite="none",x(b,e[1].toString(),k))},k.timeout)}})}},stop:function(){var a=D.call(this);return d(a).each(function(){var a=d(this);a.data("mCS")&&E(a)})},disable:function(a){var c=
D.call(this);return d(c).each(function(){var b=d(this);b.data("mCS")&&(b.data("mCS"),ba.call(this,"remove"),W.call(this),a&&H.call(this),ja.call(this,!0),b.addClass(p[3]))})},destroy:function(){var a=D.call(this);return d(a).each(function(){var c=d(this);if(c.data("mCS")){var b=c.data("mCS"),h=b.opt,l=d("#mCSB_"+b.idx),f=d("#mCSB_"+b.idx+"_container"),k=d(".mCSB_"+b.idx+"_scrollbar");h.live&&T(h.liveSelector||d(a).selector);ba.call(this,"remove");W.call(this);H.call(this);c.removeData("mCS");F(this,
"mcs");k.remove();f.find("img."+p[2]).removeClass(p[2]);l.replaceWith(f.contents());c.removeClass("mCustomScrollbar _mCS_"+b.idx+" "+p[6]+" "+p[7]+" "+p[5]+" "+p[3]).addClass(p[4])}})}},D=function(){return"object"!==typeof d(this)||1>d(this).length?".mCustomScrollbar":this},ha=function(a){a.autoDraggerLength=-1<d.inArray(a.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"])?!1:a.autoDraggerLength;a.autoExpandScrollbar=-1<d.inArray(a.theme,"rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" "))?
!1:a.autoExpandScrollbar;a.scrollButtons.enable=-1<d.inArray(a.theme,["minimal","minimal-dark"])?!1:a.scrollButtons.enable;a.autoHideScrollbar=-1<d.inArray(a.theme,["minimal","minimal-dark"])?!0:a.autoHideScrollbar;a.scrollbarPosition=-1<d.inArray(a.theme,["minimal","minimal-dark"])?"outside":a.scrollbarPosition},T=function(a){C[a]&&(clearTimeout(C[a]),F(C,a))},na=function(a){return"yx"===a||"xy"===a||"auto"===a?"yx":"x"===a||"horizontal"===a?"x":"y"},oa=function(a){return"stepped"===a||"pixels"===
a||"step"===a||"click"===a?"stepped":"stepless"},ia=function(a){var c=[a[0].scrollWidth,Math.max.apply(Math,a.children().map(function(){return d(this).outerWidth(!0)}).get())];a=a.parent().width();return c[0]>a?c[0]:c[1]>a?c[1]:"100%"},X=function(a,c,b){b=b?p[0]+"_expanded":"";var d=a.closest(".mCSB_scrollTools");"active"===c?(a.toggleClass(p[0]+" "+b),d.toggleClass(p[1]),a[0]._draggable=a[0]._draggable?0:1):a[0]._draggable||("hide"===c?(a.removeClass(p[0]),d.removeClass(p[1])):(a.addClass(p[0]),
d.addClass(p[1])))},H=function(){var a=d(this),c=a.data("mCS"),b=c.opt,h=d("#mCSB_"+c.idx),l=d("#mCSB_"+c.idx+"_container"),f=[d("#mCSB_"+c.idx+"_dragger_vertical"),d("#mCSB_"+c.idx+"_dragger_horizontal")];E(a);if("x"!==b.axis&&!c.overflowed[0]||"y"===b.axis&&c.overflowed[0])f[0].add(l).css("top",0),x(a,"_resetY");if("y"!==b.axis&&!c.overflowed[1]||"x"===b.axis&&c.overflowed[1])b=dx=0,"rtl"===c.langDir&&(b=h.width()-l.outerWidth(!1),dx=Math.abs(b/c.scrollRatio.x)),l.css("left",b),f[1].css("left",
dx),x(a,"_resetX")},pa=function(){var a=d(this),c=a.data("mCS"),b=c.opt;if(!c.bindEvents){ra.call(this);b.contentTouchScroll&&sa.call(this);ta.call(this);if(b.mouseWheel.enable){var h=function(){l=setTimeout(function(){d.event.special.mousewheel?(clearTimeout(l),ua.call(a[0])):h()},100)},l;h()}va.call(this);wa.call(this);b.advanced.autoScrollOnFocus&&xa.call(this);b.scrollButtons.enable&&ya.call(this);b.keyboard.enable&&za.call(this);c.bindEvents=!0}},W=function(){var a=d(this),c=a.data("mCS"),b=
c.opt,h="mCS_"+c.idx,l=".mCSB_"+c.idx+"_scrollbar";l=d("#mCSB_"+c.idx+",#mCSB_"+c.idx+"_container,#mCSB_"+c.idx+"_container_wrapper,"+l+" ."+p[12]+",#mCSB_"+c.idx+"_dragger_vertical,#mCSB_"+c.idx+"_dragger_horizontal,"+l+">a");var f=d("#mCSB_"+c.idx+"_container");b.advanced.releaseDraggableSelectors&&l.add(d(b.advanced.releaseDraggableSelectors));b.advanced.extraDraggableSelectors&&l.add(d(b.advanced.extraDraggableSelectors));c.bindEvents&&(d(document).add(d(!N()||top.document)).unbind("."+h),l.each(function(){d(this).unbind("."+
h)}),clearTimeout(a[0]._focusTimeout),F(a[0],"_focusTimeout"),clearTimeout(c.sequential.step),F(c.sequential,"step"),clearTimeout(f[0].onCompleteTimeout),F(f[0],"onCompleteTimeout"),c.bindEvents=!1)},ja=function(a){var c=d(this),b=c.data("mCS"),h=b.opt,l=d("#mCSB_"+b.idx+"_container_wrapper");l=l.length?l:d("#mCSB_"+b.idx+"_container");var f=[d("#mCSB_"+b.idx+"_scrollbar_vertical"),d("#mCSB_"+b.idx+"_scrollbar_horizontal")],k=[f[0].find(".mCSB_dragger"),f[1].find(".mCSB_dragger")];"x"!==h.axis&&(b.overflowed[0]&&
!a?(f[0].add(k[0]).add(f[0].children("a")).css("display","block"),l.removeClass(p[8]+" "+p[10])):(h.alwaysShowScrollbar?(2!==h.alwaysShowScrollbar&&k[0].css("display","none"),l.removeClass(p[10])):(f[0].css("display","none"),l.addClass(p[10])),l.addClass(p[8])));"y"!==h.axis&&(b.overflowed[1]&&!a?(f[1].add(k[1]).add(f[1].children("a")).css("display","block"),l.removeClass(p[9]+" "+p[11])):(h.alwaysShowScrollbar?(2!==h.alwaysShowScrollbar&&k[1].css("display","none"),l.removeClass(p[11])):(f[1].css("display",
"none"),l.addClass(p[11])),l.addClass(p[9])));b.overflowed[0]||b.overflowed[1]?c.removeClass(p[5]):c.addClass(p[5])},r=function(a){var c=a.type,b=a.target.ownerDocument!==document&&null!==frameElement?[d(frameElement).offset().top,d(frameElement).offset().left]:null,h=N()&&a.target.ownerDocument!==top.document&&null!==frameElement?[d(a.view.frameElement).offset().top,d(a.view.frameElement).offset().left]:[0,0];switch(c){case "pointerdown":case "MSPointerDown":case "pointermove":case "MSPointerMove":case "pointerup":case "MSPointerUp":return b?
[a.originalEvent.pageY-b[0]+h[0],a.originalEvent.pageX-b[1]+h[1],!1]:[a.originalEvent.pageY,a.originalEvent.pageX,!1];case "touchstart":case "touchmove":case "touchend":return c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0],b=a.originalEvent.touches.length||a.originalEvent.changedTouches.length,a.target.ownerDocument!==document?[c.screenY,c.screenX,1<b]:[c.pageY,c.pageX,1<b];default:return b?[a.pageY-b[0]+h[0],a.pageX-b[1]+h[1],!1]:[a.pageY,a.pageX,!1]}},ra=function(){function a(a,
d,e,g){k[0].idleTimer=233>h.scrollInertia?250:0;if(m.attr("id")===f[1]){var n="x";a=(m[0].offsetLeft-d+g)*b.scrollRatio.x}else n="y",a=(m[0].offsetTop-a+e)*b.scrollRatio.y;x(c,a.toString(),{dir:n,drag:!0})}var c=d(this),b=c.data("mCS"),h=b.opt,l="mCS_"+b.idx,f=["mCSB_"+b.idx+"_dragger_vertical","mCSB_"+b.idx+"_dragger_horizontal"],k=d("#mCSB_"+b.idx+"_container"),e=d("#"+f[0]+",#"+f[1]),m,g,n,v=h.advanced.releaseDraggableSelectors?e.add(d(h.advanced.releaseDraggableSelectors)):e,p=h.advanced.extraDraggableSelectors?
d(!N()||top.document).add(d(h.advanced.extraDraggableSelectors)):d(!N()||top.document);e.bind("contextmenu."+l,function(a){a.preventDefault()}).bind("mousedown."+l+" touchstart."+l+" pointerdown."+l+" MSPointerDown."+l,function(a){a.stopImmediatePropagation();a.preventDefault();if(!a.which||1===a.which){B=!0;K&&(document.onselectstart=function(){return!1});la.call(k,!1);E(c);m=d(this);var b=m.offset(),e=r(a)[0]-b.top;a=r(a)[1]-b.left;var f=m.height()+b.top;b=m.width()+b.left;e<f&&0<e&&a<b&&0<a&&(g=
e,n=a);X(m,"active",h.autoExpandScrollbar)}}).bind("touchmove."+l,function(b){b.stopImmediatePropagation();b.preventDefault();var c=m.offset(),d=r(b)[0]-c.top;b=r(b)[1]-c.left;a(g,n,d,b)});d(document).add(p).bind("mousemove."+l+" pointermove."+l+" MSPointerMove."+l,function(b){if(m){var c=m.offset(),d=r(b)[0]-c.top;b=r(b)[1]-c.left;g===d&&n===b||a(g,n,d,b)}}).add(v).bind("mouseup."+l+" touchend."+l+" pointerup."+l+" MSPointerUp."+l,function(a){m&&(X(m,"active",h.autoExpandScrollbar),m=null);B=!1;
K&&(document.onselectstart=null);la.call(k,!0)})},sa=function(){function a(a){if(!Y(a)||B||r(a)[2])L=0;else{L=1;D=C=0;q=1;k.removeClass("mCS_touch_action");var b=v.offset();M=r(a)[0]-b.top;w=r(a)[1]-b.left;I=[r(a)[0],r(a)[1]]}}function c(a){if(Y(a)&&!B&&!r(a)[2]&&(m.documentTouchScroll||a.preventDefault(),a.stopImmediatePropagation(),(!D||C)&&q)){Q=R();var b=n.offset(),c=r(a)[0]-b.top;b=r(a)[1]-b.left;Z.push(c);t.push(b);I[2]=Math.abs(r(a)[0]-I[0]);I[3]=Math.abs(r(a)[1]-I[1]);if(e.overflowed[0]){var d=
p[0].parent().height()-p[0].height();d=0<M-c&&c-M>-(d*e.scrollRatio.y)&&(2*I[3]<I[2]||"yx"===m.axis)}if(e.overflowed[1]){var g=p[1].parent().width()-p[1].width();g=0<w-b&&b-w>-(g*e.scrollRatio.x)&&(2*I[2]<I[3]||"yx"===m.axis)}d||g?(K||a.preventDefault(),C=1):(D=1,k.addClass("mCS_touch_action"));K&&a.preventDefault();G="yx"===m.axis?[M-c,w-b]:"x"===m.axis?[null,w-b]:[M-c,null];v[0].idleTimer=250;e.overflowed[0]&&f(G[0],0,"mcsLinearOut","y","all",!0);e.overflowed[1]&&f(G[1],0,"mcsLinearOut","x",F,!0)}}
function b(a){if(!Y(a)||B||r(a)[2])L=0;else{L=1;a.stopImmediatePropagation();E(k);u=R();var b=n.offset();y=r(a)[0]-b.top;A=r(a)[1]-b.left;Z=[];t=[]}}function h(a){if(Y(a)&&!B&&!r(a)[2]){q=0;a.stopImmediatePropagation();D=C=0;da=R();var b=n.offset(),c=r(a)[0]-b.top;b=r(a)[1]-b.left;if(!(30<da-Q)){J=1E3/(da-u);var d=(a=2.5>J)?[Z[Z.length-2],t[t.length-2]]:[0,0];O=a?[c-d[0],b-d[1]]:[c-y,b-A];c=[Math.abs(O[0]),Math.abs(O[1])];J=a?[Math.abs(O[0]/4),Math.abs(O[1]/4)]:[J,J];a=[Math.abs(v[0].offsetTop)-O[0]*
l(c[0]/J[0],J[0]),Math.abs(v[0].offsetLeft)-O[1]*l(c[1]/J[1],J[1])];G="yx"===m.axis?[a[0],a[1]]:"x"===m.axis?[null,a[1]]:[a[0],null];z=[4*c[0]+m.scrollInertia,4*c[1]+m.scrollInertia];a=parseInt(m.contentTouchScroll)||0;G[0]=c[0]>a?G[0]:0;G[1]=c[1]>a?G[1]:0;e.overflowed[0]&&f(G[0],z[0],"mcsEaseOut","y",F,!1);e.overflowed[1]&&f(G[1],z[1],"mcsEaseOut","x",F,!1)}}}function l(a,b){var c=[1.5*b,2*b,b/1.5,b/2];return 90<a?4<b?c[0]:c[3]:60<a?3<b?c[3]:c[2]:30<a?8<b?c[1]:6<b?c[0]:4<b?b:c[2]:8<b?b:c[3]}function f(a,
b,c,d,e,g){a&&x(k,a.toString(),{dur:b,scrollEasing:c,dir:d,overwrite:e,drag:g})}var k=d(this),e=k.data("mCS"),m=e.opt,g="mCS_"+e.idx,n=d("#mCSB_"+e.idx),v=d("#mCSB_"+e.idx+"_container"),p=[d("#mCSB_"+e.idx+"_dragger_vertical"),d("#mCSB_"+e.idx+"_dragger_horizontal")],q,M,w,y,A,Z=[],t=[],u,Q,da,O,J,G,z,F="yx"===m.axis?"none":"all",I=[],C,D,H=v.find("iframe"),P=["touchstart."+g+" pointerdown."+g+" MSPointerDown."+g,"touchmove."+g+" pointermove."+g+" MSPointerMove."+g,"touchend."+g+" pointerup."+g+" MSPointerUp."+
g],K=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;v.bind(P[0],function(b){a(b)}).bind(P[1],function(a){c(a)});n.bind(P[0],function(a){b(a)}).bind(P[2],function(a){h(a)});H.length&&H.each(function(){d(this).bind("load",function(){N(this)&&d(this.contentDocument||this.contentWindow.document).bind(P[0],function(c){a(c);b(c)}).bind(P[1],function(a){c(a)}).bind(P[2],function(a){h(a)})})})},ta=function(){function a(a,b,d){l.type=d&&m?"stepped":"stepless";l.scrollAmount=
10;ea(c,a,b,"mcsLinearOut",d?60:null)}var c=d(this),b=c.data("mCS"),h=b.opt,l=b.sequential,f="mCS_"+b.idx,k=d("#mCSB_"+b.idx+"_container"),e=k.parent(),m;k.bind("mousedown."+f,function(a){L||m||(m=1,B=!0)}).add(document).bind("mousemove."+f,function(c){if(!L&&m&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var d=k.offset(),g=r(c)[0]-d.top+k[0].offsetTop;c=r(c)[1]-d.left+k[0].offsetLeft;0<g&&g<
e.height()&&0<c&&c<e.width()?l.step&&a("off",null,"stepped"):("x"!==h.axis&&b.overflowed[0]&&(0>g?a("on",38):g>e.height()&&a("on",40)),"y"!==h.axis&&b.overflowed[1]&&(0>c?a("on",37):c>e.width()&&a("on",39)))}}).bind("mouseup."+f+" dragend."+f,function(b){L||(m&&(m=0,a("off",null)),B=!1)})},ua=function(){function a(a,e){E(c);var g=c,m=a.target,l=m.nodeName.toLowerCase();g=g.data("mCS").opt.mouseWheel.disableOver;var q=["select","textarea"];if(!(-1<d.inArray(l,g))||-1<d.inArray(l,q)&&!d(m).is(":focus")){g=
"auto"!==h.mouseWheel.deltaFactor?parseInt(h.mouseWheel.deltaFactor):K&&100>a.deltaFactor?100:a.deltaFactor||100;m=h.scrollInertia;if("x"===h.axis||"x"===h.mouseWheel.axis){l="x";g=[Math.round(g*b.scrollRatio.x),parseInt(h.mouseWheel.scrollAmount)];g="auto"!==h.mouseWheel.scrollAmount?g[1]:g[0]>=f.width()?.9*f.width():g[0];q=Math.abs(d("#mCSB_"+b.idx+"_container")[0].offsetLeft);var p=k[1][0].offsetLeft,w=k[1].parent().width()-k[1].width(),y="y"===h.mouseWheel.axis?a.deltaY||e:a.deltaX}else l="y",
g=[Math.round(g*b.scrollRatio.y),parseInt(h.mouseWheel.scrollAmount)],g="auto"!==h.mouseWheel.scrollAmount?g[1]:g[0]>=f.height()?.9*f.height():g[0],q=Math.abs(d("#mCSB_"+b.idx+"_container")[0].offsetTop),p=k[0][0].offsetTop,w=k[0].parent().height()-k[0].height(),y=a.deltaY||e;if(("y"!==l||b.overflowed[0])&&("x"!==l||b.overflowed[1])){if(h.mouseWheel.invert||a.webkitDirectionInvertedFromDevice)y=-y;h.mouseWheel.normalizeDelta&&(y=0>y?-1:1);if(0<y&&0!==p||0>y&&p!==w||h.mouseWheel.preventDefault)a.stopImmediatePropagation(),
a.preventDefault();5>a.deltaFactor&&!h.mouseWheel.normalizeDelta&&(g=a.deltaFactor,m=17);x(c,(q-y*g).toString(),{dir:l,dur:m})}}}if(d(this).data("mCS")){var c=d(this),b=c.data("mCS"),h=b.opt,l="mCS_"+b.idx,f=d("#mCSB_"+b.idx),k=[d("#mCSB_"+b.idx+"_dragger_vertical"),d("#mCSB_"+b.idx+"_dragger_horizontal")],e=d("#mCSB_"+b.idx+"_container").find("iframe");e.length&&e.each(function(){d(this).bind("load",function(){N(this)&&d(this.contentDocument||this.contentWindow.document).bind("mousewheel."+l,function(b,
c){a(b,c)})})});f.bind("mousewheel."+l,function(b,c){a(b,c)})}},fa={},N=function(a){var c=!1,b=null;void 0===a?c="#empty":void 0!==d(a).attr("id")&&(c=d(a).attr("id"));if(!1!==c&&void 0!==fa[c])return fa[c];if(a)try{h=a.contentDocument||a.contentWindow.document,b=h.body.innerHTML}catch(l){}else try{var h=top.document;b=h.body.innerHTML}catch(l){}a=null!==b;!1!==c&&(fa[c]=a);return a},la=function(a){var c=this.find("iframe");c.length&&c.css("pointer-events",a?"auto":"none")},va=function(){var a=d(this),
c=a.data("mCS"),b="mCS_"+c.idx,h=d("#mCSB_"+c.idx+"_container"),l=h.parent(),f;d(".mCSB_"+c.idx+"_scrollbar ."+p[12]).bind("mousedown."+b+" touchstart."+b+" pointerdown."+b+" MSPointerDown."+b,function(a){B=!0;d(a.target).hasClass("mCSB_dragger")||(f=1)}).bind("touchend."+b+" pointerup."+b+" MSPointerUp."+b,function(a){B=!1}).bind("click."+b,function(b){if(f&&(f=0,d(b.target).hasClass(p[12])||d(b.target).hasClass("mCSB_draggerRail"))){E(a);var e=d(this),k=e.find(".mCSB_dragger");if(0<e.parent(".mCSB_scrollTools_horizontal").length){if(!c.overflowed[1])return;
e="x";b=b.pageX>k.offset().left?-1:1;b=Math.abs(h[0].offsetLeft)-.9*b*l.width()}else{if(!c.overflowed[0])return;e="y";b=b.pageY>k.offset().top?-1:1;b=Math.abs(h[0].offsetTop)-.9*b*l.height()}x(a,b.toString(),{dir:e,scrollEasing:"mcsEaseInOut"})}})},xa=function(){var a=d(this),c=a.data("mCS"),b=c.opt,h="mCS_"+c.idx,l=d("#mCSB_"+c.idx+"_container"),f=l.parent();l.bind("focusin."+h,function(c){var e=d(document.activeElement);c=l.find(".mCustomScrollBox").length;e.is(b.advanced.autoScrollOnFocus)&&(E(a),
clearTimeout(a[0]._focusTimeout),a[0]._focusTimer=c?17*c:0,a[0]._focusTimeout=setTimeout(function(){var c=[u(e)[0],u(e)[1]],d=[l[0].offsetTop,l[0].offsetLeft];d=[0<=d[0]+c[0]&&d[0]+c[0]<f.height()-e.outerHeight(!1),0<=d[1]+c[1]&&d[0]+c[1]<f.width()-e.outerWidth(!1)];var h="yx"!==b.axis||d[0]||d[1]?"all":"none";"x"===b.axis||d[0]||x(a,c[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:h,dur:0});"y"===b.axis||d[1]||x(a,c[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:h,dur:0})},
a[0]._focusTimer))})},wa=function(){var a=d(this).data("mCS"),c="mCS_"+a.idx,b=d("#mCSB_"+a.idx+"_container").parent();b.bind("scroll."+c,function(c){0===b.scrollTop()&&0===b.scrollLeft()||d(".mCSB_"+a.idx+"_scrollbar").css("visibility","hidden")})},ya=function(){var a=d(this),c=a.data("mCS"),b=c.opt,h=c.sequential,l="mCS_"+c.idx;d(".mCSB_"+c.idx+"_scrollbar>a").bind("contextmenu."+l,function(a){a.preventDefault()}).bind("mousedown."+l+" touchstart."+l+" pointerdown."+l+" MSPointerDown."+l+" mouseup."+
l+" touchend."+l+" pointerup."+l+" MSPointerUp."+l+" mouseout."+l+" pointerout."+l+" MSPointerOut."+l+" click."+l,function(f){function k(c,d){h.scrollAmount=b.scrollButtons.scrollAmount;ea(a,c,d)}f.preventDefault();if(!f.which||1===f.which){var e=d(this).attr("class");h.type=b.scrollButtons.scrollType;switch(f.type){case "mousedown":case "touchstart":case "pointerdown":case "MSPointerDown":if("stepped"===h.type)break;B=!0;c.tweenRunning=!1;k("on",e);break;case "mouseup":case "touchend":case "pointerup":case "MSPointerUp":case "mouseout":case "pointerout":case "MSPointerOut":if("stepped"===
h.type)break;B=!1;h.dir&&k("off",e);break;case "click":"stepped"!==h.type||c.tweenRunning||k("on",e)}}})},za=function(){function a(a){function g(a,d){l.type=h.keyboard.scrollType;l.scrollAmount=h.keyboard.scrollAmount;"stepped"===l.type&&b.tweenRunning||ea(c,a,d)}switch(a.type){case "blur":b.tweenRunning&&l.dir&&g("off",null);break;case "keydown":case "keyup":var f=a.keyCode?a.keyCode:a.which,k="on";if("x"!==h.axis&&(38===f||40===f)||"y"!==h.axis&&(37===f||39===f))(38!==f&&40!==f||b.overflowed[0])&&
(37!==f&&39!==f||b.overflowed[1])&&("keyup"===a.type&&(k="off"),d(document.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']")||(a.preventDefault(),a.stopImmediatePropagation(),g(k,f)));else if(33===f||34===f){if(b.overflowed[0]||b.overflowed[1])a.preventDefault(),a.stopImmediatePropagation();"keyup"===a.type&&(E(c),f=34===f?-1:1,"x"===h.axis||"yx"===h.axis&&b.overflowed[1]&&!b.overflowed[0]?(a="x",f=Math.abs(e[0].offsetLeft)-.9*f*m.width()):(a="y",f=Math.abs(e[0].offsetTop)-
.9*f*m.height()),x(c,f.toString(),{dir:a,scrollEasing:"mcsEaseInOut"}))}else if((35===f||36===f)&&!d(document.activeElement).is("input,textarea,select,datalist,keygen,[contenteditable='true']")){if(b.overflowed[0]||b.overflowed[1])a.preventDefault(),a.stopImmediatePropagation();"keyup"===a.type&&("x"===h.axis||"yx"===h.axis&&b.overflowed[1]&&!b.overflowed[0]?(a="x",f=35===f?Math.abs(m.width()-e.outerWidth(!1)):0):(a="y",f=35===f?Math.abs(m.height()-e.outerHeight(!1)):0),x(c,f.toString(),{dir:a,scrollEasing:"mcsEaseInOut"}))}}}
var c=d(this),b=c.data("mCS"),h=b.opt,l=b.sequential,f="mCS_"+b.idx,k=d("#mCSB_"+b.idx),e=d("#mCSB_"+b.idx+"_container"),m=e.parent(),g=e.find("iframe"),n=["blur."+f+" keydown."+f+" keyup."+f];g.length&&g.each(function(){d(this).bind("load",function(){N(this)&&d(this.contentDocument||this.contentWindow.document).bind(n[0],function(b){a(b)})})});k.attr("tabindex","0").bind(n[0],function(b){a(b)})},ea=function(a,c,b,h,l){function f(b){e.snapAmount&&(m.scrollAmount=e.snapAmount instanceof Array?"x"===
m.dir[0]?e.snapAmount[1]:e.snapAmount[0]:e.snapAmount);var c="stepped"!==m.type,d=l?l:b?c?v/1.5:r:1E3/60,n=b?c?7.5:40:2.5,p=[Math.abs(g[0].offsetTop),Math.abs(g[0].offsetLeft)],q=[10<k.scrollRatio.y?10:k.scrollRatio.y,10<k.scrollRatio.x?10:k.scrollRatio.x];n="x"===m.dir[0]?p[1]+m.dir[1]*q[1]*n:p[0]+m.dir[1]*q[0]*n;q="x"===m.dir[0]?p[1]+m.dir[1]*parseInt(m.scrollAmount):p[0]+m.dir[1]*parseInt(m.scrollAmount);n="auto"!==m.scrollAmount?q:n;c=h?h:b?c?"mcsLinearOut":"mcsEaseInOut":"mcsLinear";b&&17>d&&
(n="x"===m.dir[0]?p[1]:p[0]);x(a,n.toString(),{dir:m.dir[0],scrollEasing:c,dur:d,onComplete:b?!0:!1});b?m.dir=!1:(clearTimeout(m.step),m.step=setTimeout(function(){f()},d))}var k=a.data("mCS"),e=k.opt,m=k.sequential,g=d("#mCSB_"+k.idx+"_container"),n="stepped"===m.type?!0:!1,v=26>e.scrollInertia?26:e.scrollInertia,r=1>e.scrollInertia?17:e.scrollInertia;switch(c){case "on":m.dir=[b===p[16]||b===p[15]||39===b||37===b?"x":"y",b===p[13]||b===p[15]||38===b||37===b?-1:1];E(a);if(V(b)&&"stepped"===m.type)break;
f(n);break;case "off":clearTimeout(m.step),F(m,"step"),E(a),(n||k.tweenRunning&&m.dir)&&f(!0)}},ca=function(a){var c=d(this).data("mCS").opt,b=[];"function"===typeof a&&(a=a());a instanceof Array?b=1<a.length?[a[0],a[1]]:"x"===c.axis?[null,a[0]]:[a[0],null]:(b[0]=a.y?a.y:a.x||"x"===c.axis?null:a,b[1]=a.x?a.x:a.y||"y"===c.axis?null:a);"function"===typeof b[0]&&(b[0]=b[0]());"function"===typeof b[1]&&(b[1]=b[1]());return b},ka=function(a,c){if(null!=a&&"undefined"!=typeof a){var b=d(this),h=b.data("mCS"),
l=h.opt;h=d("#mCSB_"+h.idx+"_container");var f=h.parent(),k=typeof a;c||(c="x"===l.axis?"x":"y");l="x"===c?h.outerWidth(!1)-f.width():h.outerHeight(!1)-f.height();var e="x"===c?h[0].offsetLeft:h[0].offsetTop,m="x"===c?"left":"top";switch(k){case "function":return a();case "object":b=a.jquery?a:d(a);if(!b.length)break;return"x"===c?u(b)[1]:u(b)[0];case "string":case "number":if(V(a))return Math.abs(a);if(-1!==a.indexOf("%"))return Math.abs(l*parseInt(a)/100);if(-1!==a.indexOf("-="))return Math.abs(e-
parseInt(a.split("-=")[1]));if(-1!==a.indexOf("+="))return b=e+parseInt(a.split("+=")[1]),0<=b?0:Math.abs(b);if(-1!==a.indexOf("px")&&V(a.split("px")[0]))return Math.abs(a.split("px")[0]);if("top"===a||"left"===a)return 0;if("bottom"===a)return Math.abs(f.height()-h.outerHeight(!1));if("right"===a)return Math.abs(f.width()-h.outerWidth(!1));if("first"===a||"last"===a)return b=h.find(":"+a),"x"===c?u(b)[1]:u(b)[0];if(d(a).length)return"x"===c?u(d(a))[1]:u(d(a))[0];h.css(m,a);z.update.call(null,b[0])}}},
ba=function(a){function c(){clearTimeout(m[0].autoUpdate);0===f.parents("html").length?f=null:m[0].autoUpdate=setTimeout(function(){if(e.advanced.updateOnSelectorChange&&(k.poll.change.n=h(),k.poll.change.n!==k.poll.change.o)){k.poll.change.o=k.poll.change.n;l(3);return}if(e.advanced.updateOnContentResize&&(k.poll.size.n=f[0].scrollHeight+f[0].scrollWidth+m[0].offsetHeight+f[0].offsetHeight+f[0].offsetWidth,k.poll.size.n!==k.poll.size.o)){k.poll.size.o=k.poll.size.n;l(1);return}if(e.advanced.updateOnImageLoad&&
("auto"!==e.advanced.updateOnImageLoad||"y"!==e.axis)&&(k.poll.img.n=m.find("img").length,k.poll.img.n!==k.poll.img.o)){k.poll.img.o=k.poll.img.n;m.find("img").each(function(){b(this)});return}(e.advanced.updateOnSelectorChange||e.advanced.updateOnContentResize||e.advanced.updateOnImageLoad)&&c()},e.advanced.autoUpdateTimeout)}function b(a){if(d(a).hasClass(p[2]))l();else{var b=new Image;b.onload=function(a,b){return function(){return b.apply(a,arguments)}}(b,function(){this.onload=null;d(a).addClass(p[2]);
l(2)});b.src=a.src}}function h(){!0===e.advanced.updateOnSelectorChange&&(e.advanced.updateOnSelectorChange="*");var a=0,b=m.find(e.advanced.updateOnSelectorChange);e.advanced.updateOnSelectorChange&&0<b.length&&b.each(function(){a+=this.offsetHeight+this.offsetWidth});return a}function l(a){clearTimeout(m[0].autoUpdate);z.update.call(null,f[0],a)}var f=d(this),k=f.data("mCS"),e=k.opt,m=d("#mCSB_"+k.idx+"_container");a?(clearTimeout(m[0].autoUpdate),F(m[0],"autoUpdate")):c()},E=function(a){a=a.data("mCS");
d("#mCSB_"+a.idx+"_container,#mCSB_"+a.idx+"_container_wrapper,#mCSB_"+a.idx+"_dragger_vertical,#mCSB_"+a.idx+"_dragger_horizontal").each(function(){this._mTween||(this._mTween={top:{},left:{}});for(var a=["top","left"],b=0;b<a.length;b++){var d=a[b];this._mTween[d].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(this._mTween[d].id):clearTimeout(this._mTween[d].id),this._mTween[d].id=null,this._mTween[d].stop=1)}})},x=function(a,c,b){function h(a){return f&&k.callbacks[a]&&"function"===
typeof k.callbacks[a]}function l(){var c=[g[0].offsetTop,g[0].offsetLeft],d=[q[0].offsetTop,q[0].offsetLeft],e=[g.outerHeight(!1),g.outerWidth(!1)],f=[m.height(),m.width()];a[0].mcs={content:g,top:c[0],left:c[1],draggerTop:d[0],draggerLeft:d[1],topPct:Math.round(100*Math.abs(c[0])/(Math.abs(e[0])-f[0])),leftPct:Math.round(100*Math.abs(c[1])/(Math.abs(e[1])-f[1])),direction:b.dir}}var f=a.data("mCS"),k=f.opt;b=d.extend({trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:k.scrollInertia,
overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},b);var e=[b.dur,b.drag?0:b.dur],m=d("#mCSB_"+f.idx),g=d("#mCSB_"+f.idx+"_container"),n=g.parent(),p=k.callbacks.onTotalScrollOffset?ca.call(a,k.callbacks.onTotalScrollOffset):[0,0],r=k.callbacks.onTotalScrollBackOffset?ca.call(a,k.callbacks.onTotalScrollBackOffset):[0,0];f.trigger=b.trigger;if(0!==n.scrollTop()||0!==n.scrollLeft())d(".mCSB_"+f.idx+"_scrollbar").css("visibility","visible"),n.scrollTop(0).scrollLeft(0);"_resetY"!==c||
f.contentReset.y||(h("onOverflowYNone")&&k.callbacks.onOverflowYNone.call(a[0]),f.contentReset.y=1);"_resetX"!==c||f.contentReset.x||(h("onOverflowXNone")&&k.callbacks.onOverflowXNone.call(a[0]),f.contentReset.x=1);if("_resetY"!==c&&"_resetX"!==c){!f.contentReset.y&&a[0].mcs||!f.overflowed[0]||(h("onOverflowY")&&k.callbacks.onOverflowY.call(a[0]),f.contentReset.x=null);!f.contentReset.x&&a[0].mcs||!f.overflowed[1]||(h("onOverflowX")&&k.callbacks.onOverflowX.call(a[0]),f.contentReset.x=null);k.snapAmount&&
(n=k.snapAmount instanceof Array?"x"===b.dir?k.snapAmount[1]:k.snapAmount[0]:k.snapAmount,c=Math.round(c/n)*n-k.snapOffset);switch(b.dir){case "x":var q=d("#mCSB_"+f.idx+"_dragger_horizontal"),x="left",w=g[0].offsetLeft,y=[m.width()-g.outerWidth(!1),q.parent().width()-q.width()],A=[c,0===c?0:c/f.scrollRatio.x],u=p[1],t=r[1],z=0<u?u/f.scrollRatio.x:0,Q=0<t?t/f.scrollRatio.x:0;break;case "y":q=d("#mCSB_"+f.idx+"_dragger_vertical"),x="top",w=g[0].offsetTop,y=[m.height()-g.outerHeight(!1),q.parent().height()-
q.height()],A=[c,0===c?0:c/f.scrollRatio.y],u=p[0],t=r[0],z=0<u?u/f.scrollRatio.y:0,Q=0<t?t/f.scrollRatio.y:0}0>A[1]||0===A[0]&&0===A[1]?A=[0,0]:A[1]>=y[1]?A=[y[0],y[1]]:A[0]=-A[0];a[0].mcs||(l(),h("onInit")&&k.callbacks.onInit.call(a[0]));clearTimeout(g[0].onCompleteTimeout);ma(q[0],x,Math.round(A[1]),e[1],b.scrollEasing);!f.tweenRunning&&(0===w&&0<=A[0]||w===y[0]&&A[0]<=y[0])||ma(g[0],x,Math.round(A[0]),e[0],b.scrollEasing,b.overwrite,{onStart:function(){b.callbacks&&b.onStart&&!f.tweenRunning&&
(h("onScrollStart")&&(l(),k.callbacks.onScrollStart.call(a[0])),f.tweenRunning=!0,X(q),f.cbOffsets=[k.callbacks.alwaysTriggerOffsets||w>=y[0]+u,k.callbacks.alwaysTriggerOffsets||w<=-t])},onUpdate:function(){b.callbacks&&b.onUpdate&&h("whileScrolling")&&(l(),k.callbacks.whileScrolling.call(a[0]))},onComplete:function(){b.callbacks&&b.onComplete&&("yx"===k.axis&&clearTimeout(g[0].onCompleteTimeout),g[0].onCompleteTimeout=setTimeout(function(){h("onScroll")&&(l(),k.callbacks.onScroll.call(a[0]));h("onTotalScroll")&&
A[1]>=y[1]-z&&f.cbOffsets[0]&&(l(),k.callbacks.onTotalScroll.call(a[0]));h("onTotalScrollBack")&&A[1]<=Q&&f.cbOffsets[1]&&(l(),k.callbacks.onTotalScrollBack.call(a[0]));f.tweenRunning=!1;g[0].idleTimer=0;X(q,"hide")},g[0].idleTimer||0))}})}},ma=function(a,c,b,d,l,f,k){function e(){t.stop||(w||n.call(),w=R()-q,h(),w>=t.time&&(t.time=w>t.time?w+u-(w-t.time):w+u-1,t.time<w+1&&(t.time=w+1)),t.time<d?t.id=z(e):r.call())}function h(){0<d?(t.currVal=g(t.time,y,B,d,l),x[c]=Math.round(t.currVal)+"px"):x[c]=
b+"px";p.call()}function g(a,b,c,d,e){switch(e){case "linear":case "mcsLinear":return c*a/d+b;case "mcsLinearOut":return a/=d,a--,c*Math.sqrt(1-a*a)+b;case "easeInOutSmooth":a/=d/2;if(1>a)return c/2*a*a+b;a--;return-c/2*(a*(a-2)-1)+b;case "easeInOutStrong":a/=d/2;if(1>a)return c/2*Math.pow(2,10*(a-1))+b;a--;return c/2*(-Math.pow(2,-10*a)+2)+b;case "easeInOut":case "mcsEaseInOut":a/=d/2;if(1>a)return c/2*a*a*a+b;a-=2;return c/2*(a*a*a+2)+b;case "easeOutSmooth":return a/=d,a--,-c*(a*a*a*a-1)+b;case "easeOutStrong":return c*
(-Math.pow(2,-10*a/d)+1)+b;default:return d=(a/=d)*a,e=d*a,b+c*(.499999999999997*e*d+-2.5*d*d+5.5*e+-6.5*d+4*a)}}a._mTween||(a._mTween={top:{},left:{}});k=k||{};var n=k.onStart||function(){},p=k.onUpdate||function(){},r=k.onComplete||function(){},q=R(),u,w=0,y=a.offsetTop,x=a.style,z,t=a._mTween[c];"left"===c&&(y=a.offsetLeft);var B=b-y;t.stop=0;"none"!==f&&null!=t.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(t.id):clearTimeout(t.id),t.id=null);(function(){u=1E3/60;t.time=w+u;z=window.requestAnimationFrame?
window.requestAnimationFrame:function(a){h();return setTimeout(a,.01)};t.id=z(e)})()},R=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},F=function(a,c){try{delete a[c]}catch(b){a[c]=null}},Y=function(a){a=a.originalEvent.pointerType;return!(a&&"touch"!==a&&2!==a)},V=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},u=function(a){var c=
a.parents(".mCSB_container");return[a.offset().top-c.offset().top,a.offset().left-c.offset().left]},qa=function(){var a=function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)if(a[b]+"Hidden"in document)return a[b]+"Hidden";return null}();return a?document[a]:!1};d.fn.mCustomScrollbar=function(a){if(z[a])return z[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)d.error("Method "+a+" does not exist");else return z.init.apply(this,
arguments)};d.mCustomScrollbar=function(a){if(z[a])return z[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)d.error("Method "+a+" does not exist");else return z.init.apply(this,arguments)};d.mCustomScrollbar.defaults=S;window.mCustomScrollbar=!0;d(window).bind("load",function(){d(".mCustomScrollbar").mCustomScrollbar();d.extend(d.expr[":"],{mcsInView:d.expr[":"].mcsInView||function(a){a=d(a);var c=a.parents(".mCSB_container");if(c.length){var b=c.parent();c=[c[0].offsetTop,
c[0].offsetLeft];return 0<=c[0]+u(a)[0]&&c[0]+u(a)[0]<b.height()-a.outerHeight(!1)&&0<=c[1]+u(a)[1]&&c[1]+u(a)[1]<b.width()-a.outerWidth(!1)}},mcsInSight:d.expr[":"].mcsInSight||function(a,c,b){c=d(a);a=c.parents(".mCSB_container");var h="exact"===b[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(a.length)return b=[c.outerHeight(!1),c.outerWidth(!1)],c=[a[0].offsetTop+u(c)[0],a[0].offsetLeft+u(c)[1]],a=[a.parent()[0].offsetHeight,a.parent()[0].offsetWidth],h=[b[0]<a[0]?h[0]:h[1],b[1]<a[1]?h[0]:h[1]],0>c[0]-
a[0]*h[0][0]&&0<=c[0]+b[0]-a[0]*h[0][1]&&0>c[1]-a[1]*h[1][0]&&0<=c[1]+b[1]-a[1]*h[1][1]},mcsOverflow:d.expr[":"].mcsOverflow||function(a){if(a=d(a).data("mCS"))return a.overflowed[0]||a.overflowed[1]}})})})});