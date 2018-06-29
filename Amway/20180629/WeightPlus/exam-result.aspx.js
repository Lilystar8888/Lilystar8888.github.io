$$('', function () {
    $('.btn-exam-download').bind('click', function () {
        switch (Config.type) {
            case '1':
                ga('send', 'event', 'pc', 'download.pdf', '健康樂活型');
                break;
            case '2':
                ga('send', 'event', 'pc', 'download.pdf', '壓力多吃型');
                break;
            case '3':
                ga('send', 'event', 'pc', 'download.pdf', '暴飲暴食型');
                break;
            case '4':
                ga('send', 'event', 'pc', 'download.pdf', '糖心型');
                break;
            case '5':
                ga('send', 'event', 'pc', 'download.pdf', '代謝偏低型');
                break;
        }
        window.open('pdf/full-report' + Config.type + '.pdf');
        //location = '../pdf/full-report' + Config.type + '.pdf';
    });

    $('.btn-exam-menu').bind('click', function () {
        switch (Config.type) {
            case '1':
                ga('send', 'event', 'pc', 'download.pdf', '健康樂活型-菜單');
                window.open('pdf/示範菜單_健康樂活型.pdf');
                //location = '../pdf/示範菜單_健康樂活型.pdf';
                break;
            case '2':
                ga('send', 'event', 'pc', 'download.pdf', '壓力多吃型-菜單');
                window.open('pdf/示範菜單_壓力多吃型.pdf');
                //location = '../pdf/示範菜單_壓力多吃型.pdf';
                break;
            case '3':
                ga('send', 'event', 'pc', 'download.pdf', '暴飲暴食型-菜單');
                window.open('pdf/示範菜單_暴飲暴食型.pdf');
                //location = '../pdf/示範菜單_暴飲暴食型.pdf';
                break;
            case '4':
                ga('send', 'event', 'pc', 'download.pdf', '糖心型-菜單');
                window.open('pdf/示範菜單_糖心型.pdf');
                //location = '../pdf/示範菜單_糖心型.pdf';
                break;
            case '5':
                ga('send', 'event', 'pc', 'download.pdf', '代謝偏低型-菜單');
                window.open('pdf/示範菜單_代謝偏低型.pdf');
                //location = '../pdf/示範菜單_代謝偏低型.pdf';
                break;
        }
    });
});    