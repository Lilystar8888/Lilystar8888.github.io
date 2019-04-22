/**
 * Created by arielyih on 2/1/16.
 */
function hamburgerInit(){
    var $hamNav = $('#ham-nav'), $main = $('#main'), $mask = $('.mask'), $wrap = $('#wrap');
    $hamNav.css('height', screenHeight);
    //Open the menu
    $("#hamburger").click(function () {
        $main.css('min-height', $(window).height());
        $mask.show();

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = $main.width();

        //set the content with the width that it has originally
        $main.css('width', contentWidth);

        //disable all scrolling on mobile devices while menu is shown
        $main.bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        if (screenWidth<768){
            $wrap.css('position', 'fixed').animate({"right": ["70%", 'easeOutExpo']}, { duration: 700});
            $('nav').animate({"right": ["0", 'easeOutExpo']}, { duration: 700});
        }
        else{
            $wrap.css('position', 'fixed').animate({"right": [wrapRight+250, 'easeOutExpo']}, { duration: 700});
            $('nav').animate({"right": [wrapRight, 'easeOutExpo']}, { duration: 700});
        }
    });
    //close the menu
    $mask.click(function () {
        $mask.hide();
        //enable all scrolling on mobile devices when menu is closed
        $main.unbind('touchmove');

        //set margin for the whole container back to original state with a jquery UI animation
        if (screenWidth<768) wrapRight = 0;
        $wrap.animate({"right": [wrapRight, 'easeOutExpo']}, {
            duration: 700,
            complete: function () {
                $main.css('width', 'auto');
                $main.css('min-height', 'auto');
                $wrap.css('position', 'static')
            }
        });
        if (screenWidth<768) $('nav').animate({"right": ["-70%", 'easeOutExpo']}, { duration: 700});
        else $('nav').animate({"right": ["-250px", 'easeOutExpo']}, { duration: 700});
    });
}

// when mobile resize height
$(window).resize(function(){
    var $hambuergerInfo = $('#ham-nav'), $mHeadTop = $('.mHeadTop'), $mask = $('.mask');
    $hambuergerInfo.css({'height': $(window).height()});
    $mask.css({'height': $(window).height()});
});
