/// <reference path="js/config.js" />
var valA, valB, valC, valD, thispage = 1;
$$('fb', function () {
    $('.fb-share').click(function () {
        var title = $(".title-detail-writings").text();
        ga('send', 'event', 'pc', 'fb.share', title);
        $.fb.share(location.href);
    });

    $('.wechat-share.btn-inline.misc').click(function () {
        var title = $(this).parents(".detail-writings.box-inline").find(".title-detail-writings").text();
        ga('send', 'event', 'pc', 'wechat.share', title);

        $('.box-exam-area').show();
    });
    $('.close-tips').click(function () {
        $('.box-exam-area').hide();
    });

    var ale = $('.detail-writings-content').html();
    replaceTag(ale);
    function replaceTag(article) {
        console.log(article);
        var temphtml = '';
        var split_c = article.split('/c');

        for (var num = 0; num < split_c.length; num++) {
            if (num == 0) {
                temphtml += split_c[0];
                continue;
            }

            if (num % 2 == 1)
                temphtml += '<span style="color:#' + split_c[num].substring(0, 6) + '">' + split_c[num].substring(6);
            else
                temphtml += '</span>' + split_c[num];
        }

        
        var split_b = temphtml.split('/b');


        for (var num = 0; num < split_b.length; num++) {
            if (num == 0) {
                temphtml = split_b[0];
                continue;
            }

            if (num % 2 == 1) temphtml += '<b>' + split_b[num];
            else temphtml += '</b>' + split_b[num];
        }


        $('.detail-writings-content').html(temphtml.replace(/\/n/g, '<br />'));

    }
});