/// <reference path="js/config.js" />

$$('', function () {
    if (window.location.hash) {
        $("body").scrollTop($(window.location.hash).offset().top - $('.header').height());
    }
});