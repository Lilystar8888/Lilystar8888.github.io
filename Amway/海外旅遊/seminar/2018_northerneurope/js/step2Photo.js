$(document).ready(function() {
    $(".doslick .imageSlick").slick({
        arrows:false,
        speed: 1000,
    });

    $(".doslick .imageSlick").on("afterChange",function (event, slick, currentSlide) {
        $(this).siblings(".titleAndPlace").find(".place").eq(currentSlide).click();
    });

    $('.preBtn').click(function(){
        $(this).siblings('.imageSlick').slick('slickPrev');
    })

    $('.nextBtn').click(function(){
        $(this).siblings('.imageSlick').slick('slickNext');
    })

    $(".doslick .place").on("click",function () {
        var placesDiv = $(this).parents(".placesDiv");
        var titleAndPlace = placesDiv.parents(".titleAndPlace");
        var slick = titleAndPlace.siblings(".imageSlick");
        var parent = placesDiv.children(".place");
        parent.removeClass("placePicked");
        placeBtnClick(this);
        var index = parent.index($(this));
        console.log(slick);
        slick.slick('slickGoTo', index);

    })

    $(".viewmoreCloseBtn").on("click",function () {
        var viewmoreDetails = $(this).parent();
        viewmoreDetails.siblings(".viewmoreMask").fadeOut();
        viewmoreDetails.fadeOut();
        $('body').removeClass('lock-scroll');
    })
    
    $(".viewmoreBtn").on("click",function () {
        var nowindex = $(this).siblings(".imageSlick").slick("slickCurrentSlide");
        $(this).siblings(".viewmoreMask").fadeIn();
        $(this).siblings(".viewmoreDetails").eq(nowindex).fadeIn();
        console.log(isMobile());
        if  (isMobile()){
            $('body').addClass('lock-scroll');
        }
    })

    function placeBtnClick(target) {
        $(target).addClass("placePicked");
    }

    $(document).on("touchmove",".viewmoreDetail",function(e){
        e.stopPropagation();
        console.log("move");
    });
})

function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e) {
        return false;
    }
}