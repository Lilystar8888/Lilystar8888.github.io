define(['config', 'funs'], function(config) {
    return {
        /*for desktop*/
        //初始
        init: function() {
            if (config.isMobile) {
                $('.interactive_page').addClass('hideView')
            } else {
                initMaterailBg();
                
                $(window).bind('resize',initMaterailBg);
            }
        },
        
        //塞Qrcode
        changeQrcode: function(url){
            $('#interact_qrcode').empty();
            $('#interact_qrcode').append('<img src="'+url+'" />')
        },
        
        //desktop 跳過互動直接進入內頁
        skip: function() {
            $(window).unbind('resize',initMaterailBg);
            
            
            TweenMax.to($('.interactive_page'), 0.5, {
                    autoAlpha: 0
                })
            
            $(window).trigger('resize')
        },

        //手機掃描qrcode 連結上後desktop等待mobile loading
        wait: function() {
            $(window).unbind('resize',initMaterailBg);
            
            TweenMax.to($('.center_enter_qrcode'), 0.5, {
                autoAlpha: 0
            });
            TweenMax.to($('.interactive_page .wait'), 0.7, {
                autoAlpha: 1,
                yoyo: true,
                repeat: -1,
                ease: Power1.easeInOut
            })
        },

        //mobile loading完成後desktop開始動態
        play: function() {
            $(window).unbind('resize',initMaterailBg);
            
            TweenMax.to($('.center_enter_qrcode'), 0.5, {
                autoAlpha: 0
            });
            TweenMax.to($('.interactive_page .wait'), 0.5, {
                autoAlpha: 0
            });
            TweenMax.to($('.meterial_bg .item'), 0.7, {
                autoAlpha: 1,
                delay: 0.5,
                ease: Power2.easeInOut
            });

            queueMaterailBg();


            //蔬果滑落
            setTimeout(function() {
                $('.meterial_bg .item').each(function(i) {
                    TweenMax.to($(this), 3 + 0.2 * i % 2, {
                        y: 1500,
                        ease: Power3.easeInOut
                    })
                })
            }, 3000);


            //藥粒文字出現
            setTimeout(function() {
                TweenMax.to($('.medicine_stage'), 0.8, {
                    autoAlpha: 1
                });
                TweenMax.to($('.medicine_content'), 1.5, {
                    autoAlpha: 1
                });
                TweenMax.fromTo($('.medicine_stage .fullImg'), 0.8, {autoAlpha:0},{
                    autoAlpha: 1,
                    delay:1
                });
                
                

                $('.medicine_content .item').each(function(i) {
                    var item = $(this);

                    TweenMax.fromTo(item, i % 4 * 0.2 + 5, {
                        y: -400-i % 5*50,
                        autoAlpha: 1,
                    },{
                        y: 1100,
                        autoAlpha: 1,
                        ease: Power2.easeIn,
                        delay: i % 5 * 0.5
                    });
                })

                $('.medicine_stage .txt_1 span').each(function(i) {
                    var item = $(this);

                    TweenMax.fromTo(item, 1, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power3.easeInOut,
                        delay: i % 4 * 0.1 + 1,
                        onComplete: function() {
                            TweenMax.to(item, 1, {
                                autoAlpha: 0,
                                ease: Power3.easeInOut,
                                delay: 2
                            })
                        }
                    });
                })


                $('.medicine_stage .txt_2 span').each(function(i) {
                    var item = $(this);

                    TweenMax.fromTo(item, 1, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        ease: Power3.easeInOut,
                        delay: i % 5 * 0.1 + 4.5,
                        onComplete: function() {
                            TweenMax.to(item, 1, {
                                autoAlpha: 0,
                                ease: Power3.easeInOut,
                                delay: 2
                            });

                            if (item.text() == '則') {
                                var endAni = new TimelineMax({
                                    delay: 3
                                });

                                endAni.to($('.interactive_page'), 1, {
                                        autoAlpha: 0
                                    })
                            }
                        }
                    });
                })

                $('.medicine_stage .txt_1').removeClass('hideView');
                $('.medicine_stage .txt_2').removeClass('hideView')

            }, 4000);

        },

        /*for mobile*/
        //判斷如果不是手機就強制開啟science.html
        initM: function(){
            if(!config.isMobile){
                location.href="./science.html"
            }
        },
        
        //mobile準備好動態
        playM: function(){
            var mobileAni_1 = new TimelineMax({delay:1.5});
            
            mobileAni_1.from($('.interactive_1 .center'),2.5,{autoAlpha:0,rotation:-90,scale:0.5,ease:Power2.easeInOut})
                     .to($('.interactive_1 .center'),2,{autoAlpha:0,y:350,ease:Power2.easeInOut},'+=1');
            
            
             $('.interactive_2 .txt span').each(function(i) {
                 var item = $(this);
                 var itemAni = new TimelineMax({delay:6});
                 itemAni.to(item, 1,{alpha: 1,ease: Power3.easeInOut,delay: i % 5 * 0.1})
                        .to(item, 1,{alpha: 0,ease: Power3.easeInOut},'=+3');
             })
             
             
             $('.color_line div').each(function(i){
                 var item = $(this)
                 TweenMax.to(item,7+(i % 3 * 2),{y:1500+(i % 3 * 70),alpha:0,ease: Power1.easeInOut,delay:5})
             })
             
             TweenMax.to($('.interactive_page_m'),1.5,{autoAlpha:0,delay:12})
             
        }
    }



    function initMaterailBg() {

        var materialBg = $('.meterial_bg');
        var materialBgW = materialBg.width();
        var materialBgH = materialBg.height();

        var materailW = 165;
        var materailH = 160;

        var materialColumn = Math.ceil(materialBgW / materailW) + 1;
        var materialRow = Math.ceil(materialBgH / materailH) + 1;

//        console.log()

        var materialImg = [
            ["img/material_01.png", "img/material_02.png", "img/material_03.png", "img/material_04.png", "img/material_05.png", "img/material_06.png"],
            ["img/material_08.png", "img/material_09.png", "img/material_10.png", "img/material_11.png", "img/material_12.png", "img/material_13.png", "img/material_14.png", "img/material_15.png"],
            ["img/material_16.png", "img/material_17.png", "img/material_18.png", "img/material_19.png", "img/material_20.png", "img/material_21.png","img/material_22.png", "img/material_24.png"],
            ["img/material_25.png", "img/material_26.png","img/material_27.png", "img/material_28.png", "img/material_35.png"],
            [ "img/material_29.png", "img/material_30.png", "img/material_31.png", "img/material_32.png", "img/material_33.png", "img/material_34.png"]
        ];


        //清空Ｂg-------------------------
        materialBg.empty();


        //重新產生item
        for (var i = 0; i < materialColumn * materialRow - 2; i++) {
            materialBg.append('<div class="item type_' + i % 5 + '" data-type="' + i % 5 + '"><img src="' + materialImg[i % 5][randomItem(i % 5)] + '"></div>')
        }


        //重新排列item
        var centerBox = $(".center_enter_qrcode");
        var centerBoxT = centerBox.offset().top;
        var centerBoxL = centerBox.offset().left;


        materialBg.find('.item').each(function(i) {
            $(this).css('top', Math.floor((i + 2) / materialColumn) * materailH + "px").css('left', Math.floor((i + 2) % materialColumn) * materailW + "px");
            if (Math.floor((i + 2) / materialColumn) % 2 == 0) {
                $(this).css('left', Math.floor((i + 2) % materialColumn) * materailW + materailW / 2 + "px")
            }

            if ($(this).offset().top >= centerBoxT - 20 && $(this).offset().top <= centerBoxT + 530 && $(this).offset().left > centerBoxL - 70 && $(this).offset().left < centerBoxL + 320) {
                $(this).addClass('hideView')
            }
        })


        function randomItem(itemNum) {
            var min = 0;
            var max = materialImg[itemNum].length - 1;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }


    function queueMaterailBg() {
        var bgW = $('.meterial_bg').width();
        var line_1_L = bgW / 2 - 500;
        var line_2_L = bgW / 2 - 250;
        var line_3_L = bgW / 2;
        var line_4_L = bgW / 2 + 250;
        var line_5_L = bgW / 2 + 500;


        sortItem($('.meterial_bg').find('.type_0'), line_1_L);
        sortItem($('.meterial_bg').find('.type_1'), line_2_L);
        sortItem($('.meterial_bg').find('.type_2'), line_3_L);
        sortItem($('.meterial_bg').find('.type_3'), line_4_L);
        sortItem($('.meterial_bg').find('.type_4'), line_5_L);

        function sortItem(item, po) {
            item.each(function(i) {
                var topH = 0;

                for (var j = 0; j < i; j++) {
                    topH += (item.eq(j).children('img').height() + 10);
                }

                TweenMax.to($(this), 2.5, {
                    left: po,
                    top: topH - 300,
                    ease: Power3.easeInOut,
                    delay: 0.07 * i
                });
            })
        }

    }
})