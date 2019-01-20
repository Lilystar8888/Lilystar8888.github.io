require(['config'],function(config){
    
    $(function(){
		
		my_ready();

        $('.fadinPage').trigger('pagescroll');
        
        
        if(!config.isMobile){
            $(".video_area").on('click',function(e){
                e.preventDefault();
                
                openVideo($(this).attr('data-youtube'));
            })
        }
        
        $(".video_lightbox .close").on('click',function(e){
            $(".video_lightbox .video_box").empty();
            $('.video_lightbox').fadeOut();
        })
    })
    
    function openVideo(url){
        $('.video_lightbox').fadeIn();
        $('.video_lightbox .video_box').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+url+'?rel=0&autoplay=1&wmode=transparent&showinfo=0" frameborder="0" allowfullscreen></iframe>')
    }
})

