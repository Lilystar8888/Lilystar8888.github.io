﻿/// <reference path="js/config.js" />

$$('fb', function () {
    var shareURL = $.resolve("~/article-1.aspx");

    $('div.content-share .nav-item.nav-item--fb').click(function (e) {
        e.preventDefault();
        $.fb.share(shareURL);
    });
});