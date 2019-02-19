
	//captcha.js
/*	!function(e){var t=0,s=["/livesport/web/base/js/captcha/001.jpg","/livesport/web/base/js/captcha/002.jpg","/livesport/web/base/js/captcha/003.jpg","/livesport/web/base/js/captcha/004.jpg","/livesport/web/base/js/captcha/005.jpg","/livesport/web/base/js/captcha/006.jpg","/livesport/web/base/js/captcha/007.jpg","/livesport/web/base/js/captcha/008.jpg","/livesport/web/base/js/captcha/009.jpg","/livesport/web/base/js/captcha/010.jpg","/livesport/web/base/js/captcha/011.jpg","/livesport/web/base/js/captcha/012.jpg","/livesport/web/base/js/captcha/013.jpg","/livesport/web/base/js/captcha/014.jpg","/livesport/web/base/js/captcha/015.jpg"];function i(e,t){var s=document.createElement(e);return s.className=t,s}function n(){var e=Math.floor(Math.random()*s.length);return s[e]}function a(e,t,s,i){e.beginPath(),e.moveTo(t,s),e.arc(t+21,s-9+2,9,.72*c,2.26*c),e.lineTo(t+42,s),e.arc(t+42+9-2,s+21,9,1.21*c,2.78*c),e.lineTo(t+42,s+42),e.lineTo(t,s+42),e.arc(t+9-2,s+21,9.4,2.76*c,1.24*c,!0),e.lineTo(t,s),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e[i](),e.globalCompositeOperation="overlay"}function r(e,t){return e+t}function o(e){return e*e}var c=Math.PI,l=function(e){var t=e.el,s=e.onSuccess,i=e.onFail;e=e.onRefresh,t.style.position=t.style.position||"relative",this.el=t,this.onSuccess=s,this.onFail=i,this.onRefresh=e};l.prototype.init=function(){this.initDOM(),this.initImg(),this.bindEvents()},l.prototype.initDOM=function(){var e=i("canvas");e.width=261,e.height=133;var t=e.cloneNode(!0),s=i("div","sliderContainer"),n=i("div","refreshIcon"),a=i("div","sliderMask"),r=i("div","slider"),o=i("span","sliderIcon"),c=i("span","sliderText"),l=i("div","canvasWrap");t.className="block",c.innerHTML="向右滑动填充拼图";var d=this.el;l.appendChild(e),d.appendChild(l),d.appendChild(n),d.appendChild(t),r.appendChild(o),a.appendChild(r),s.appendChild(a),s.appendChild(c),d.appendChild(s),Object.assign(this,{wrap:l,canvas:e,block:t,sliderContainer:s,refreshIcon:n,slider:r,sliderMask:a,sliderIcon:o,text:c,canvasCtx:e.getContext("2d"),blockCtx:t.getContext("2d")})},l.prototype.initImg=function(){var e,t,s=this,a=(e=function(){s.draw(),s.canvasCtx.drawImage(a,0,0,261,133),s.blockCtx.drawImage(a,0,0,261,133);var e=s.y-18-1,t=s.blockCtx.getImageData(s.x-3,e,63,63);s.block.width=63,s.blockCtx.putImageData(t,0,e)},(t=i("img")).crossOrigin="Anonymous",t.onload=e,t.onerror=function(){t.src=n()},t.src=n(),t);this.img=a},l.prototype.draw=function(){this.x=Math.round(144*Math.random()+33),this.y=Math.round(44*Math.random()+28),a(this.canvasCtx,this.x,this.y,"fill"),a(this.blockCtx,this.x,this.y,"clip")},l.prototype.clean=function(){this.canvasCtx.clearRect(0,0,261,133),this.blockCtx.clearRect(0,0,261,133),this.block.width=261},l.prototype.bindEvents=function(){var e=this;this.el.onselectstart=function(){return e.wrap.classList.add("active"),e.block.classList.add("active"),e.refreshIcon.classList.add("active"),!1},this.refreshIcon.onclick=function(){e.reset(),"function"==typeof e.onRefresh&&e.onRefresh()};var s,i,n=[],a=!1,r=function(e){t=1,s=e.clientX||e.touches[0].clientX,i=e.clientY||e.touches[0].clientY,a=!0},o=function(){e.wrap.classList.add("active"),e.block.classList.add("active"),e.refreshIcon.classList.add("active")},c=function(t){if(!a)return!1;var r=(t.clientX||t.touches[0].clientX)-s;if(t=(t.clientY||t.touches[0].clientY)-i,0>r||261<=r-30)return!1;e.slider.style.left=r+"px",e.block.style.left=210/235*r+"px",e.sliderContainer.classList.add("sliderContainer_active"),e.sliderMask.style.width=r+"px",n.push(t)},l=function(i){if(t=0,!a)return!1;if(a=!1,(i.clientX||i.changedTouches[0].clientX)==s)return!1;e.sliderContainer.classList.remove("sliderContainer_active"),e.trail=n;var r=(i=e.verify()).verified;i.spliced?r?(e.sliderContainer.classList.add("sliderContainer_success"),"function"==typeof e.onSuccess&&e.onSuccess(),e.wrap.classList.remove("active"),e.block.classList.remove("active"),e.refreshIcon.classList.remove("active"),e.el.removeEventListener("mouseover",o)):(e.sliderContainer.classList.add("sliderContainer_fail"),e.text.innerHTML="验证失败:拖动滑块将悬浮图像正确拼合",e.reset()):(e.sliderContainer.classList.add("sliderContainer_fail"),"function"==typeof e.onFail&&e.onFail(),setTimeout(function(){e.text.innerHTML="拖动滑块将悬浮图像正确拼合",e.reset()},1e3))};this.slider.addEventListener("mousedown",r),this.slider.addEventListener("touchstart",r),this.el.addEventListener("mouseenter",o),this.el.addEventListener("mouseleave",function(){0==t&&(e.wrap.classList.remove("active"),e.block.classList.remove("active"),e.refreshIcon.classList.remove("active"))}),document.addEventListener("mousemove",c),document.addEventListener("touchmove",c),document.addEventListener("mouseup",l),document.addEventListener("touchend",l)},l.prototype.verify=function(){var e=this.trail,t=e.reduce(r)/e.length,s=e.map(function(e){return e-t});return e=.84*Math.sqrt(s.map(o).reduce(r)/e.length),s=.84*parseInt(this.block.style.left),{spliced:20>Math.abs(s-this.x),verified:0!==e}},l.prototype.reset=function(){this.sliderContainer.className="sliderContainer",this.slider.style.left=0,this.block.style.left=0,this.sliderMask.style.width=0,this.clean(),this.img.src=n()},e.jigsaw={init:function(e){return new l(e).init()}}}(window);*/

    //启动验证码程序
/*
    function VerityInit() {
	     jigsaw.init({
	        el: document.getElementById('captcha'),
	        onSuccess: function() {
	          document.getElementById('msg').innerHTML = '<i class="iconfont icon-icosucceed"></i> \u9a8c\u8bc1\u6210\u529f！',
	          document.getElementById('msg').classList.remove("hide")

	        },
	        onFail: cleanMsg,
	        onRefresh: cleanMsg
	    })
	    function cleanMsg() {
	        document.getElementById('msg').innerHTML = '',
	        document.getElementById('msg').classList.add("hide")
	    }
    }
*/

	//倒数
	$.fn.countdown = function (callback, duration, message) {
	    message = message || "";
	    var container = $(this[0]).html(duration + message);
	    var countdown = setInterval(function () {
	        if (--duration) {
	            container.html(duration + message);
	        } else {
	            clearInterval(countdown);
	            callback.call(container);
	        }
	    }, 1000);
	};


    //点叉叉关闭登入视窗
    function hideLogin() {
        $(".login-panel").addClass("hide").removeClass("show");
        $('#loginBox-panel').hide(600, function(){
        	$(this).remove();
        });
    }

    //点叉叉关闭登出视窗
    function hideLogout() {
        $(".exit-login").addClass("hide").removeClass("show");
        $('#logoutBox-panel').hide(600, function(){
        	$(this).remove();
        });
    }

    //打勾一个月内免登录
/*    function LoginCheck() {
        $("#checks").prop("checked") === true ? (
            $("#checks").prop("checked", false),
            $(".check").removeClass("checked")
        ) : (
            $("#checks").prop("checked", true),
            $(".check").addClass("checked")
        );
    }*/

    //跑马灯
    function slideLine(box, stf, delay, speed, h) {
        var slideBox = document.getElementById(box);
        console.log(slideBox);
            var delay = delay || 5600,
                speed = speed || 20,
                h = h || 20;
            var tid = null,
                pause = false;
            var s = function() { tid = setInterval(slide, speed); }
            var slide = function() {
                if (pause) return;
                slideBox.scrollTop += 1;
                if (slideBox.scrollTop % h == 0) {
                    clearInterval(tid);
                    slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
                    slideBox.scrollTop = 0;
                    setTimeout(s, delay);
                }
            }
            if(slideBox){
            slideBox.onmouseover = function() { pause = true; }
            slideBox.onmouseout = function() { pause = false; }
            setTimeout(s, delay);
            }
    }

    function getParameterByName(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        a = (new RegExp("[\\?&]" + a + "=([^&#]*)")).exec(location.search);
        return null == a ? "" : decodeURIComponent(a[1])
    }

    function goTop() {
        $("html,body").animate({
            scrollTop: 0
        }, 300)
    }

    function feedbackOpen() {
        $(".feedback-wrap").toggleClass("hide")
    }

    function feedbackClose() {
        $(".forms-ok").addClass("hide");
        $(".feedback-wrap").addClass("hide");
        $(".feedback-box").removeClass("hide")
    }

    function feedbackSend() {
        $(".feedback-box").addClass("hide");
        $(".forms-ok").removeClass("hide");
        setTimeout(function() {
            feedbackClose()
        }, 3E3)
    }

    function closeZhubo() {
        $(".zhubo-content").hide()
    }

    function showZhubo() {
        $(".zhubo-content").toggle()
    }

    function volumeControl() {
        var a = $("#zhuboPlayer");
        $("#volume-control").find(".svgbtn").toggleClass("hide");
        a[0].contentWindow.toggleVolume()
    }

    $(document).ready(function() {
        $('[class^="icon-btn"]').click(function() {
            $(this).toggleClass("selected")
        });
        $(".feedback-box .box-bd .text-box .tab-con span").click(function() {
            $(this).parent().find("span").removeClass("current");
            $(this).addClass("current")
        })
    })