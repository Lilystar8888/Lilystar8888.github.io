define(['config','science_stage_ani','funs'],function(config,scienceStage){
    
    
    $(function(){
		
		my_ready();
		
        scienceStage.init();
        
        //替換qrcode
        //qrcode的link要連到“science_m.html”這個路徑
        scienceStage.changeQrcode('img/8EZJT7G1TS.png');
        
        $('#open_science').on('click',function(){
            $('.science_landing_page').fadeOut(500);
        })

        $('.qrcode_content').click(function(){
            //手機連結上後先等待手機loading
            scienceStage.wait();
            
            //手機loading完成後執行動畫
            setTimeout(function(){scienceStage.play()},3000)
            
        })

        $('#skipBtn').click(function(){
            scienceStage.skip();
        })
        
        

    })
})








