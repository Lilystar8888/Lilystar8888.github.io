/// <reference path="js/config.js" />

$$('fb', function () {
    $('.fb-share,.fb-share-big').click(function () {
        var title = $(".title-detail").text();
        ga('send', 'event', 'mobile', 'fb.share', title);

        $.fb.share(location.href);
    });

    $('.line-share,.line-share-big').click(function () {
        var title = $(".title-detail").text();
        ga('send', 'event', 'mobile', 'line.share', title);

    });
});
