/// <reference path="js/config.js" />
var valA, valB, valC, valD, thispage = 1;
$$('', function () {
    ga('send', 'pageview', '/mobile/exam-step01.aspx');
    $('.rate').width('0%');
    $('.btn-ok').bind('click', function () { $('.box-exam-area').hide(); });

    $('.btn-inline,.ans').bind('touchstart mousedown', function () {
        $(this).siblings().removeClass('act')
        $(this).addClass('act');
        if ($('.page' + thispage).find('.act').length == 8 && (thispage != 1 || $('.gender').find('.act').length == 1)) {
            $('.next-page').removeClass('lightgray');
        }
        if ($('.act').length == 41) {
            $('.btn-finish').removeClass('lightgray');
        }
    });
    $('.next-page').bind('click', function () {
        if ($(this).hasClass('lightgray')) {
            $('.box-exam-area').show();
            $('.tips').show();
            $('.tips2').hide();
        } else {
            thispage++;
            initPage(thispage);
            var result = [];
            $('.act').each(function (index) {
                var val = $(this).attr('value');
                result.push(val);
            });
        }
    });
    $('.prev-page').bind('click', function () {
        thispage--;
        initPage(thispage);
        $('.btn-finish').hide().addClass('lightgray');
        $('.next-page').removeClass('lightgray');

    });
    $('.btn-finish').bind('click', function () {
        if ($(this).hasClass('lightgray')) {
            $('.box-exam-area').show();
            $('.tips').show();
            $('.tips2').hide();
        } else {
            if ($('.btn-men').hasClass('act')) {
                valA = 0.3;
                valB = 0.6;
                valC = 0;
                valD = 0.1;
            } else {
                valA = 0.1;
                valB = 0;
                valC = 0.3;
                valD = 0.6;
            }
            $('.act').slice(1).each(function (index) {
                var val = $(this).attr('value');
                var type = $(this).parent().attr('qtype');
                setVal(type, val);
            });
            showResult();

        }
    });
    $('.page').hide();
    $('.page1').show();

});

function setVal(type, val) {
   
    switch (type) {
        case "A":
            valA += val*1;
            break;
        case "B":
            valB += val * 1;
            break;
        case "C":
            valC += val * 1;
            break;
        case "D":
            valD += val * 1;
            break;
    }
    console.log(valA + "/" + valB + "/" + valC + "/" + valD);

}

function showResult() {
    var resultType = 1
    var maxVal = Math.max(valA, valB, valC, valD);
    if (maxVal >=25)
    {
        if (valA == maxVal)
        {
            resultType = 2;
        }
        if (valB == maxVal)
        {
            resultType =3;
        }
        if (valC == maxVal)
        {
            resultType = 4;
        }
        if (valD == maxVal)
        {
            resultType = 5;
        }
    }
    location = "exam-result.aspx?type=" + resultType;
}


function initPage(page) {
    ga('send', 'pageview', '/mobile/exam-step0' + page + '.aspx');
    $('.next-page').addClass('lightgray');
    $('.btn-finish').addClass('lightgray');
    $('.rate').width((page - 1) * 20 + '%');
    $('.percentage').text((page - 1) * 20 + '%');
    $('.page,.gender').hide();
    $('.page' + (page)).show();
    $('html, body').scrollTop(0);
    $('.next-page').text('下一頁(' + (page + 1) + '/5)');
    $('.prev-page').text('上一頁(' + (page - 1) + '/5)');
    if (page == 5) {
        $('.next-page').hide();
        $('.btn-finish').show();
    } else {
        $('.next-page').show();
    }
    if (page == 1) {
        $('.gender').show();
        $('.prev-page').hide();
    } else {
        $('.prev-page').show();
    }
    if ($('.page' + page).find('.act').length == 8 && (page != 1 || $('.gender').find('.act').length == 1)) {
        $('.next-page').removeClass('lightgray');
    }
    if ($('.act').length == 41) {
        $('.btn-finish').removeClass('lightgray');
    }
}