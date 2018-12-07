require(['config', 'vendor/owl.carousel.min'], function (config) {
    
    var detailContent = $('.product_detail');
    var product_detail_H =0;
    var product_group;
    var total;
    var select_product;
    var appendNum;
    
    var product_content_W;
    var product_item_W;
    var row_item;
	
	my_ready();
    
    resizeContent();
    
    $(window).on('resize',resizeContent)
    
    
    detailContent.on("mresize",function(){
        var contentH = detailContent.height();
        if(contentH>0){
            TweenMax.to($('.openArea'), 0,{height:detailContent.height()+50, ease:Power1.easeOut});
        }else{
            TweenMax.to($('.openArea'), 0,{height:detailContent.height(), ease:Power1.easeOut});
        }
    })
    
    $('.product_content').each(function(i){
        
        $(this).find(".product_box").each(function(j){
            $(this).find('.product_box_link').on('click',function(e){
                e.preventDefault();
                product_group = i;
                select_product = j;
                
                total = $('.product_content').eq(i).find(".product_box").length;
                appendNum = (parseInt(select_product/row_item)+1)*row_item-1 >= total ? total-1:(parseInt(select_product/row_item)+1)*row_item-1;
                var data_url = $(this).attr("href");
                
                //清空詳細資訊內容
                $('.product_detail_content').remove();
                
                //載入新的詳細資訊
                $.ajax({
                    url: data_url
                }).done(function (data) {
                    detailContent.append(data);
                    
                    //詳細資訊圖片slide
                    $("#owl-demo").owlCarousel({

                        navigation: true, // Show next and prev buttons
                        slideSpeed: 300,
                        paginationSpeed: 400,
                        singleItem: true,
                        navigation: false,
                        afterUpdate: setdetailPosition,
                    });
                    
                    setdetailPosition();
                });
                
                
                
            })
        })
    })
    
    $('.product_detail .close_btn').on('click',function(){
        
        TweenMax.to([detailContent, $('.openArea')], 0.5, {
            height: 0,
            ease: Power1.easeOut,
            onComplete: function() {
            $('.product_detail_content').remove();
            }
        });
        
        TweenMax.to(window, 1, {scrollTo:{y:$('.product_content').eq(product_group).find(".product_box").eq(select_product).offset().top-100}, ease:Power3.easeInOut});

    })
     
    
    $('body').on('click','.showDetail', function() {
        var t = $(this);
        t.closest('.infomation').find('.detailTable').slideToggle();
    });

    function resizeContent(){
        product_content_W = $(".product_content").width();
        product_item_W = $(".product_box").width();

        row_item = parseInt(product_content_W/product_item_W);
        
        appendNum = (parseInt(select_product/row_item)+1)*row_item-1 >= total ? total-1:(parseInt(select_product/row_item)+1)*row_item-1;
    }
    
    
    function setdetailPosition(){
        TweenMax.set(detailContent, {
          height: "auto"
        });
        TweenMax.set($('.openArea'), {
          height: detailContent.height()+50
        });
        
        TweenMax.from([detailContent,$('.openArea')], 0.5, {
          height: 0,
          ease: Power1.easeOut
        });
        $('.openArea').insertAfter($('.product_content').eq(product_group).find('.product_box').eq(appendNum));
        
        detailContent.css({'z-index':40,'top':($('.openArea').offset().top+50)+'px'})
        
        if(config.isMobile){
            TweenMax.to(window, 1, {scrollTo:{y:detailContent.offset().top-60}, ease:Power3.easeInOut,delay:0.2});
        }else{
            TweenMax.to(window, 1, {scrollTo:{y:detailContent.offset().top-100}, ease:Power3.easeInOut});
        }
    }

})
