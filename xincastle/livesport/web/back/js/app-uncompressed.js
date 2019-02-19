function ssNav() {
    var x = document.getElementById("ssNav");
    x.className === "topnav" ? (
        x.className += " responsive"
    ):(
        x.className = "topnav"
    );
}

function circlereset(b, a, c) {
    $(".chart").empty().removeData(),
    $("#chart1").attr("data-percent", b),
    $("#chart2").attr("data-percent", a),
    $("#chart3").attr("data-percent", c),
    $("#chart1").circliful({percent: b,}),
    $("#chart2").circliful({percent: a,}),
    $("#chart3").circliful({percent: c,});
}

//PC偵測捲到哪一屏了
function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
}

function ClearEffect(e) {
    $(e).removeClass('animated')
        .removeClass('infinite')
        .removeClass('slow')
        .removeClass('slower')
        .removeClass('delay-1s')
        .removeClass('delay-2s')
        .removeClass('delay-3s')
        .removeClass('delay-4s')
        .removeClass('delay-5s')
        .removeClass('delay-6s')
        .removeClass('fadeIn')
        .removeClass('fadeInDown')
        .removeClass('fadeInUpBig')
        .removeClass('fadeInDownBig')
        .removeClass('tada')
        .removeClass('pulse')
        .removeClass('zoomOut')
        .removeClass('lightSpeedIn')
        .removeClass('rotateIn');
}

function SlideIntoView(e) {
    $(e).css('opacity', '1');
}

function EMS1A1(e){
    $(e).addClass('animated fadeInDown slow');
}

function EMS1A2(e){
    $(e).addClass('animated fadeInUpBig');
}

function EMS1A3(e){
    $(e).addClass('animated fadeIn delay-4s');
}

function EMS1A4(e){
    $(e).addClass('animated rotateIn delay-1s');
}

function EMS1A5(e){
    $(e).addClass('animated fadeIn delay-5s');
}

function EMS1A6(e){
    $(e).addClass('animated fadeIn delay-1s');
}

function EMS1A7(e){
    $(e).addClass('animated fadeIn delay-2s');
}

function EMS1A8(e){
    $(e).addClass('animated fadeIn delay-3s');
}

function EMS1A9(e){
    $(e).addClass('animated infinite tada delay-6s');
}

function EMS1A10(e){
    $(e).addClass('animated infinite tada slower delay-6s');
}

function EMS1A11(e){
    $(e).addClass('animated infinite pulse delay-4s');
}

function EMS1A12(e){
    $(e).addClass('animated infinite zoomOut slow delay-3s');
}

function EMS1A13(a) {
    $(a).addClass("animated tada delay-6s");
}

function EMS2A1(e) {
    $(e).addClass('animated fadeIn slow delay-1s');
}

function EMS2A2(e) {
    $(e).addClass('animated fadeIn slow delay-2s');
}

function EMS2A3(e) {
    $(e).addClass('animated fadeIn slow delay-3s');
}

function EMS2A4(e) {
    $(e).addClass('animated fadeIn slow delay-4s');
}

function EMS2A4(e) {
    $(e).addClass('animated fadeInUpBig slow delay-1s');
}

function EMS2A5(e) {
    $(e).addClass('animated fadeInDownBig slow delay-2s');
}

function EMS3A1(e) {
    $(e).addClass('animated lightSpeedIn slow delay-2s');
}

function goTop() {
    $("html,body").animate({ scrollTop: 0 }, 300);
}

function feedbackOpen() {
    $(".feedback-wrap").toggleClass("hide");
}

function feedbackClose() {
    $(".forms-ok").addClass("hide"),
    $(".feedback-wrap").addClass("hide"),
    $(".feedback-box").removeClass("hide");
}

function feedbackSend() {
    $(".feedback-box").addClass("hide"),
    $(".forms-ok").removeClass("hide"),
    setTimeout(function() { feedbackClose() }, 3E3);
}

$(document).ready(function() {

    SlideIntoView('#slide2'),SlideIntoView('#slide3'),SlideIntoView('#slide4');

    $(".chart").circliful();

    $(window).scroll(function() {

        //一開始隱藏tool-tips-fixed
        300 > $(window).scrollTop()?
        $(".tool-tips-fixed").addClass("fadeOut").removeClass("fadeIn")
        :
        $(".tool-tips-fixed").addClass("fadeIn").removeClass("fadeOut");


        //捲到第一屏
        elementScrolled('#slide1') ? (
            SlideIntoView('#slide1'),
            EMS1A1('.ttl'),
            EMS1A2('.findphone'),
            EMS1A3('.findqrcode'),
            EMS1A11('.qrcode'),
            EMS1A4('.findglow'),
            EMS1A12('.glow'),
            EMS1A5('.findpop'),
            EMS1A13(".pop"),
            EMS1A6('.icowrap'),
            EMS1A7('.findico1, .findico13, .findico15'),
            EMS1A8('.findico3, .findico14'),
            EMS1A9('.ico1, .ico2, .ico3, .ico5'),
            EMS1A10('.ico4')
        ) : (
            ClearEffect('#slide1 div')
        );

        //捲到第二屏
        elementScrolled('#slide2') ? (
            SlideIntoView('#slide2'),
            EMS2A1('.phone2'),
            EMS2A2('.textwrap'),
            EMS2A3('.textwrap .text'),
            EMS2A4('.pb1, .pb3'),
            EMS2A5('.pb2, .pb4')
        ) : (
            ClearEffect('#slide2 div:not(".findpb1,.findpb2,.findpb3,.findpb4")')
        );
        //捲到第三屏
        elementScrolled('#slide3') ? (
            SlideIntoView('#slide3'),
            EMS2A1('.phone3'),
            EMS3A1('.textwrap2'),
            EMS2A3('.textwrap2 .text2'),
            circlereset(62, 36, 75)
        ) : (
            ClearEffect('#slide3 div')
        );
        //捲到最後一屏
        elementScrolled('#slide4') ? (
            SlideIntoView('#slide4'),
            EMS2A1('.phone4'),
            EMS2A2('.girl'),
            EMS2A3('.textwrap3'),
            EMS2A4('.textwrap3 .text3'),
            EMS4A1('.player5')
        ) : (
            ClearEffect('#slide4 div:not(".player5")')
        );
    });

    $(".feedback-box .box-bd .text-box .tab-con span").click(function() {
        $(this).parent().find("span").removeClass("current");
        $(this).addClass("current")
    });

});