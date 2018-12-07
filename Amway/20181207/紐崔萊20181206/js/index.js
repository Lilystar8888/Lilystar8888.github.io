define(['config','funs'],function(config){
//    console.log(return (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera))
    
    $(function(){
		my_ready();
        $('.slide_bg_img').tofullBg();
        
        var centerMenu = {
            init: function(){
                TweenMax.set($(".center_nav li"),{alpha:0.6});
                TweenMax.set($(".center_nav li .ch"),{autoAlpha:0});
            }(),

            btnAni: function(){
                $(".center_nav li").bind("mouseover",function(){
                    TweenMax.to($(this),0.3,{alpha:1});
                    TweenMax.to($(this).find('.en'),0.3,{y:-15});
                    TweenMax.to($(this).find('.ch'),0.3,{y:10,autoAlpha:1});
                    TweenMax.to($(this).siblings(),0.3,{alpha:0.6});
                    TweenMax.to($(this).siblings().find('.en'),0.3,{y:0});
                    TweenMax.to($(this).siblings().find('.ch'),0.3,{y:0,autoAlpha:0});
                    
                    slideBg.nowshow = $(this).index();
                    slideBg.show();
                })
            }()
        }
        
        
        var slideBg = {
            nowshow:0,
            
            count:0,
            
            init: function(){
                if(config.isMobile){
                    $('.video_iframe').remove();
                }
//                console.log(config.isMobile)
            }(),
            
            show: function(){
                var self = this;
                var slideBg = $('.slide_bg').find("li");
                var slideDot = $('.slide_dot a');
                var now = slideBg.filter(".show").index();
                
                slideBg.eq(self.nowshow).css("z-index","10").addClass("show").siblings().css("z-index","0").removeClass("show")
                
                if(self.nowshow!==now){
                    TweenMax.to(slideBg.eq(self.nowshow).siblings(),0.5,{autoAlpha:0});
                    TweenMax.to(slideBg.eq(self.nowshow),0.6,{autoAlpha:1,ease:Power1.easeOut});
                    
                    if(config.isMobile && self.nowshow==0){
                        TweenMax.fromTo(slideBg.eq(self.nowshow),10,{scale:1},{scale:1.15});
                    }else if(self.nowshow!==0){
                        TweenMax.fromTo(slideBg.eq(self.nowshow),10,{scale:1},{scale:1.15});
                    }
                    
                    slideDot.eq(self.nowshow).addClass('active').siblings().removeClass('active');
                }
                
                self.nowshow+=1;
                if(self.nowshow>3){
                   self.nowshow=0;
                }
            },
            
            starCount: function(){
                var self = this;
                
                count = setInterval(function(){
//                    self.show();
                    $(".center_nav li").eq(self.nowshow).trigger("mouseover");
                },5500)
            },
            
            stopCount: function(){
                clearInterval(count)
            }
        }
        
        
        
        $(".center_nav li").eq(slideBg.nowshow).trigger("mouseover");
        
        if(config.isMobile){
            slideBg.starCount();
        }
        
    })
    
    
    
})