/// <reference path="js/config.js" />
$$('', function () {
    window.clickType = "";
    var querystring = $.queryString('type'), pdf = "", examplepdf = "";
    if (querystring.length == 0) { location.href = 'index.aspx'; return; }
    var gcenterInfoList = [];
    $('.btn-exam-prev,.btn-exam-next').click(function () {
        change($(this).data('type'));
        funGAPageView($(this).data('type'));
    });
    function funGAPageView(type) {
        switch (type) {
            case "01":
                ga('send', 'pageview', '/mobile/exam-type.aspx?type=01');
                break;
            case "02":
                ga('send', 'pageview', '/mobile/exam-type.aspx?type=02');
                break;
            case "03":
                ga('send', 'pageview', '/mobile/exam-type.aspx?type=03');
                break;
            case "04":
                ga('send', 'pageview', '/mobile/exam-type.aspx?type=04');
                break;
            case "05":
                ga('send', 'pageview', '/mobile/exam-type.aspx?type=05');
                break;
        }
    }

    function change(type) {
        var prev = "", next = "", prevtype = "", nexttype="";
        dlength = $('.exam div').length / 2;
        $this = $('.result' + type);
        thisindex = $('.exam div').index($this) / 2;
        console.log(dlength, thisindex);

        if (thisindex == 0) {
            prev = $('.kv-result.none').last().text();
            prevtype = $('.kv-result.none').last().data('type');
            next = $this.next().find('.kv-result.none').text();
            nexttype = $this.next().find('.kv-result.none').data('type');
        }
        else if ((dlength - 1) == thisindex) {
            prev = $this.prev().find('.kv-result.none').text();
            prevtype = $this.prev().find('.kv-result.none').data('type');
            next = $('.kv-result.none').first().text();
            nexttype = $('.kv-result.none').first().data('type');
        }
        else {
            prev = $this.prev().find('.kv-result.none').text();
            prevtype = $this.prev().find('.kv-result.none').data('type');
            next = $this.next().find('.kv-result.none').text();
            nexttype = $this.next().find('.kv-result.none').data('type');
        }
        $('.btn-exam-prev').text(prev).data('type', prevtype);
        $('.btn-exam-next').text(next).data('type', nexttype);
        $('.exam div').hide();
        $this.show().find('div').show();

        $.callAPI('../API/GetBodyTypeArticle.ashx', {BodyType: type}).done(function (AResult) {
            gcenterInfoList = AResult.Items;
            BindData(AResult.Items.length);
        }).fail(function (AErrMsg) {
            alert('Error');
        });
        clickType = type;
        switch (type) {
            case "01":
                //ga('send', 'pageview', '/mobile/exam-type.aspx?type=01');
                pdf = 'full-report1.pdf';
                examplepdf = "示範菜單_健康樂活型.pdf";
                break;
            case "02":
                //ga('send', 'pageview', '/mobile/exam-type.aspx?type=02');
                pdf = 'full-report2.pdf';
                examplepdf = "示範菜單_壓力多吃型.pdf";
                break;
            case "03":
                //ga('send', 'pageview', '/mobile/exam-type.aspx?type=03');
                pdf = 'full-report3.pdf';
                examplepdf = "示範菜單_暴飲暴食型.pdf";
                break;
            case "04":
                //ga('send', 'pageview', '/mobile/exam-type.aspx?type=04');
                pdf = 'full-report4.pdf';
                examplepdf = "示範菜單_糖心型.pdf";
                break;
            case "05":
                //ga('send', 'pageview', '/mobile/exam-type.aspx?type=05');
                pdf = 'full-report5.pdf';
                examplepdf = "示範菜單_代謝偏低型.pdf";
                break;
        }
        $('.btn-download').attr('href', '../pdf/' + pdf);
        $('.btn-cookbook').attr('href', '../pdf/' + examplepdf);
    }

    $('.btn-download').click(function () {
        switch (clickType) {
            case "01":
                ga('send', 'event', 'mobile', 'download.pdf', '健康樂活型');
                break;
            case "02":
                ga('send', 'event', 'mobile', 'download.pdf', '壓力多吃型');
                break;
            case "03":
                ga('send', 'event', 'mobile', 'download.pdf', '暴飲暴食型');
                break;
            case "04":
                ga('send', 'event', 'mobile', 'download.pdf', '糖心型');
                break;
            case "05":
                ga('send', 'event', 'mobile', 'download.pdf', '代謝偏低型');
                break;
        }
    });

    $('.btn-cookbook').click(function () {
        switch (clickType) {
            case "01":
                ga('send', 'event', 'mobile', 'download.pdf', '健康樂活型-菜單');
                break;
            case "02":
                ga('send', 'event', 'mobile', 'download.pdf', '壓力多吃型-菜單');
                break;
            case "03":
                ga('send', 'event', 'mobile', 'download.pdf', '暴飲暴食型-菜單');
                break;
            case "04":
                ga('send', 'event', 'mobile', 'download.pdf', '糖心型-菜單');
                break;
            case "05":
                ga('send', 'event', 'mobile', 'download.pdf', '代謝偏低型-菜單');
                break;
        }
    });

    function BindData(rowCount) {
        var str = "";
        for (var i = 0; i < rowCount; i++) {
            var oData = gcenterInfoList[i];
            var tempNutrient = "", tempBodyType = "", display = oData.IsHot ? "block" : "";
            for (var n = 0 ; n < oData.Nutrient.length; n++) {
                var trackingGA = "ga('send','event','mobile','label.nutrient','" + oData.Nutrient[n].Name + "');";
                tempNutrient += '<a href="tag-related.aspx?type=nutrient&p=' + oData.NutrientNO.split(',')[n] + '" class="btn-nutriment" data-tracking="' + trackingGA + '">' + oData.Nutrient[n].Name + '</a>';
            }
            for (var n = 0 ; n < oData.BodyType.length; n++) {
                var trackingGA = "ga('send','event','mobile','label.type','" + oData.BodyType[n].Name + "');";
                tempBodyType += '<a href="tag-related.aspx?type=bodytype&p=' + oData.BodyTypeNO.split(',')[n] + '" class="btn-kind" data-tracking="' + trackingGA + '">' + oData.BodyType[n].Name + '</a>';
            }

            //str = str.concat("<tr><td >Name:</td><td>") + oData.Name + "</td></tr><tr><td>GroupName:</td><td>" + oData.GroupName + "</td></tr><tr><td>BeforeWeight:</td><td>" + oData.BeforeWeight
            //+ "</td></tr><tr><td>AfterWeight:</td><td>" + oData.AfterWeight + "</td></tr>";
            str += '<li><div class="pic"><a href="detail.aspx?no=' + oData.UNO + '"><img src="../API/GetPic.ashx?Token=' + Config.Token + '&Type=Article&FileName=' + oData.LargePicName + '" height="639" width="960"  alt=""/></a></div>' +
                        '<div class="writings-detail"><div class="writings-new" style="display:' + display + '">NEW</div><a href="detail.aspx?no=' + oData.UNO + '">' + oData.Title + '</a></div>' +
                        '<div class="tag-area">' + tempBodyType + '</div>' +
                        '<div class="tag-area">' + tempNutrient + '</div></li>';
        }

        $('.writings-list').html(str);
    }

    change(querystring);

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