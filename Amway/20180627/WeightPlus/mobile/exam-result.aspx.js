$$('', function () {
    $('.btn-download').bind('click', function () {
        switch (Config.type) {
            case '1':
                ga('send', 'event', 'mobile', 'download.pdf', '健康樂活型');
                break;
            case '2':
                ga('send', 'event', 'mobile', 'download.pdf', '壓力多吃型');
                break;
            case '3':
                ga('send', 'event', 'mobile', 'download.pdf', '暴飲暴食型');
                break;
            case '4':
                ga('send', 'event', 'mobile', 'download.pdf', '糖心型');
                break;
            case '5':
                ga('send', 'event', 'mobile', 'download.pdf', '代謝偏低型');
                break;
        }
        location = '../pdf/full-report' + Config.type + '.pdf';
    });
    $('.btn-cookbook').bind('click', function () {
        switch (Config.type) {
            case '1':
                ga('send', 'event', 'mobile', 'download.pdf', '健康樂活型-菜單');
                location = '../pdf/示範菜單_健康樂活型.pdf';
                break;
            case '2':
                ga('send', 'event', 'mobile', 'download.pdf', '壓力多吃型-菜單');
                location = '../pdf/示範菜單_壓力多吃型.pdf';
                break;
            case '3':
                ga('send', 'event', 'mobile', 'download.pdf', '暴飲暴食型-菜單');
                location = '../pdf/示範菜單_暴飲暴食型.pdf';
                break;
            case '4':
                ga('send', 'event', 'mobile', 'download.pdf', '糖心型-菜單');
                location = '../pdf/示範菜單_糖心型.pdf';
                break;
            case '5':
                ga('send', 'event', 'mobile', 'download.pdf', '代謝偏低型-菜單');
                location = '../pdf/示範菜單_代謝偏低型.pdf';
                break;
        }
    });

    //體驗中心連結及tracking
    $('[name=Center]').click(function () {
        $this = $(this);
        ga('send', 'event', 'mobile', 'link.out', '前往體驗中心');
        switch ($(this).attr('id')) {
            case 'aTaipeiCenter':
                window.open("https://www.amway.com.tw/AmwayStation/taipei.htm", "about:blank");
                break;
            case 'aTaichungCenter':
                window.open("https://www.amway.com.tw/AmwayStation/taichung.htm", "about:blank");
                break;
            case 'aKaohsiungCenter':
                window.open("https://www.amway.com.tw/AmwayStation/kaohsiung.htm", "about:blank");
                break;
        }
    });
});    