var isMobile;

require(['config', 'vendor/skrollr.min', 'vendor/skrollr.stylesheets.min', 'https://www.youtube.com/iframe_api?noext'], function (config, skrollr) {

    isMobile = config.isMobile;
    if (!config.isMobile) {
        var s = skrollr.init();
        $('.about_video').removeClass('mobile')
    }else{
        isMobile = config.isMobile
        $('.about_video').addClass('mobile')
    }


    $(function () {
        
		my_ready();

        $('.fadinPage').trigger('pagescroll');

        

        if (!config.isMobile) {
            s.refresh();
        }


        $('#btn_about_history').click(function () {
            $('.section_about_6_detail').slideDown(500);

            if (!config.isMobile) {
                s.refresh();
            }
        })
        $('#section_about_8_detail').click(function () {
            $('.section_about_8_detail').slideDown(500);

            if (!config.isMobile) {
                s.refresh();
            }

        })
        
        $('.close_btn').click(function(){
            setTimeout(function(){
                if (!config.isMobile) {
                    s.refresh();
                }
            },900)
            
        })
        
        
        //lightbox影片
        if(!config.isMobile){
            $(".video_area").on('click',function(e){
                e.preventDefault();
                openVideo($(this).attr('data-youtube'));
            })
        }
        
        $(".video_lightbox .close").on('click',function(e){
            $(".video_lightbox .video_box").empty();
            $('.video_lightbox').fadeOut();
            $('.fadinPage').trigger('pagescroll');
        })


        $('.about_video .close').on('click',function(){
           $('#videoPlayer').remove();
           $('.about_video').fadeOut(500);
            
        });

    })

    function openVideo(url){
        $('.video_lightbox').fadeIn();
        $('.video_lightbox .video_box').append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+url+'?rel=0&autoplay=1&wmode=transparent&showinfo=0" frameborder="0" allowfullscreen></iframe>')
    }
})


//處理youtube player
var player;
var time_update_interval;


function onYouTubePlayerAPIReady() {
//    console.log(isMobile)
    
    if(!isMobile){
        player = new YT.Player('ytplayer', {
            height: '100%',
            width: '100%',
            videoId: 'MmoyhuUZc2A',
            wmode: 'transparent',
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'showinfo': 0,
                'loop': 0,
                'rel': 0,
                'playlist': 'MmoyhuUZc2A',
                'enablejsapi':1,
                modestbranding: 1,
            wmode: "opaque"
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }else{
        player = new YT.Player('ytplayer', {
            width: '100%',
            height: '100%',
            videoId: 'MmoyhuUZc2A',
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                'showinfo': 0,
                'loop': 0,
                'rel': 0,
                'playlist': 'MmoyhuUZc2A',
                modestbranding: 1,
            wmode: "opaque"
                 
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
    
}

function onPlayerReady(event) {

    
    
    // Update the controls on load
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateProgressBar();
    }, 100)

    $('.about_video_content .close').on('click',function(){
        player.stopVideo();
        $('.about_video').fadeOut(500);
    })

    $('.controlButton.play').on('click', function () {
        player.playVideo();
    });

    $('.controlButton.stop').on('click', function () {
        player.pauseVideo();
    });

    $('.controlButton.volumeOn, .controlButton.volumeOff').on('click', function () {
        if (player.isMuted()) {
            player.unMute();
            $('.controlButton.volumeOn').hide();
            $('.controlButton.volumeOff').show();
        } else {
            player.mute();
            $('.controlButton.volumeOn').show();
            $('.controlButton.volumeOff').hide();
        }
    });

    $('.player_controler .progressBar').on('click', function (event) {
        var perscent = (event.pageX - $(this).offset().left) / $(this).width()
        var newTime = player.getDuration() * perscent;

        player.seekTo(parseInt(newTime));
    })

    $('.controler').show();
    $('.controlButton.play').hide();
    $('.controlButton.stop').show();
    $('.controlButton.volumeOn').hide();
    $('.controlButton.volumeOff').show();
}

function onPlayerStateChange(event) {
    if (event.data == 1) {
        $('.controlButton.play').hide();
        $('.controlButton.stop').show();
    } else if (event.data == 2) {
        $('.controlButton.play').show();
        $('.controlButton.stop').hide();
    } else if (event.data == 0) {
        $('.controlButton.play').show();
        $('.controlButton.stop').hide();
        player.stopVideo();

        $('.about_video').fadeOut(500);
    }
}

function stopVideo() {
    player.stopVideo();
}

function updateProgressBar() {
    // Update the value of our progress bar accordingly.
    $('.player_controler .progress_handle').css('width', (player.getCurrentTime() / player.getDuration()) * 100 + '%');
}
