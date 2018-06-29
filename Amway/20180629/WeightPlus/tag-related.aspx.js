/// <reference path="js/config.js" />

$$('simplePagination ', function () {
    var gQty = 1;
    var gPageSize = 10;
    var gInitalPageNo = 1;
    var gPageNumber = 1;
    var gcenterInfoList = [];
    var gdisplayedPages = 5;
    var searchstr = $.queryString('p'),
        typestr = $.queryString('type');
    function BindData(rowCount) {
        var str = "";
        for (var i = 0; i < rowCount; i++) {
            var oData = gcenterInfoList[i];
            var tempNutrient = "", tempBodyType = "", display = oData.IsHot ? "block" : "";
            for (var n = 0 ; n < oData.Nutrient.length; n++) {
                var trackingGA = "ga('send','event','pc','label.nutrient','" + oData.Nutrient[n].Name + "');";
                tempNutrient += '<a href="tag-related.aspx?type=nutrient&p=' + oData.NutrientNO.split(',')[n] + '" class="btn-nutriment" data-tracking="' + trackingGA + '">' + oData.Nutrient[n].Name + '</a>';
            }
            for (var n = 0 ; n < oData.BodyType.length; n++) {
                var trackingGA = "ga('send','event','pc','label.type','" + oData.BodyType[n].Name + "');";
                tempBodyType += '<a href="tag-related.aspx?type=bodytype&p=' + oData.BodyTypeNO.split(',')[n] + '" class="btn-kind" data-tracking="' + trackingGA + '">' + oData.BodyType[n].Name + '</a>';
            }

            //str = str.concat("<tr><td >Name:</td><td>") + oData.Name + "</td></tr><tr><td>GroupName:</td><td>" + oData.GroupName + "</td></tr><tr><td>BeforeWeight:</td><td>" + oData.BeforeWeight
            //+ "</td></tr><tr><td>AfterWeight:</td><td>" + oData.AfterWeight + "</td></tr>";
            str += '<li><div class="pic box-inline"><a href="detail.aspx?no=' + oData.UNO + '"><img src="API/GetPic.ashx?Token=' + Config.Token + '&Type=Article&FileName=' + oData.LargePicName + '" alt=""/></a></div>' +
                        '<div class="writings-detail box-inline"><h3><a href="detail.aspx?no=' + oData.UNO + '">' + oData.Title + '</a></h3><p>' + oData.Description + '</p>' +
                        '<div class="tag-area">' + tempBodyType + '</div>' +
                        '<div class="tag-area">' + tempNutrient + '</div></div></li>';
        }

        $('.writings-list').html(str);

        //$('.content').html(str);

        if (typeof gQty == 'undefined' || gPageNumber >= gQty / gPageSize) {
            $('.last').hide();
            $('.next').hide();
        }
        else {
            $('.last').show();
            $('.next').show();
        }

        if (gPageNumber == 1) {
            $('.first').hide();
            $('.prev').hide();
        }
        else {
          
            $('.first').show();
            $('.prev').show();
        }
    }

    function getSuccessfulCase(pageNumber) {
        $.callAPI('API/GetTagArticle.ashx', {
            Token: "", Type: typestr, UNO: searchstr, PageIndex: pageNumber, PageSize: gPageSize
        }).done(function (AResult) {
            gPageNumber = pageNumber;
            gcenterInfoList = AResult.Items;
            BindData(AResult.Items.length);
        }).fail(function (AErrMsg) {
            alert('Error');

        });
    }

    $.callAPI('API/GetTagArticleQty.ashx', {
        PageSize: gPageSize, Type: typestr, UNO: searchstr
    }).done(function (AResult) {
        gQty = AResult.Qty;
        console.log(AResult.Qty);
        bindPagination(gQty);
    }).fail(function (AErrMsg) {
        alert('Error');
    });

    function bindPagination(qty) {
        $(selector).pagination({
            items: qty,
            itemsOnPage: gPageSize,
            cssStyle: 'light-theme',
            currentPage: gInitalPageNo,
            firstText: "<<",
            prevText: "<",
            nextText: ">",
            lastText: ">>",
            displayedPages: gdisplayedPages,
            edges: 0,
            //hrefTextPrefix: '?page=page-',
            onPageClick: function (pageNumber) { $('body,html').animate({ scrollTop: 0 }, 'slow'); getSuccessfulCase(pageNumber) },
            onInit: function () { getSuccessfulCase(gInitalPageNo) }
        });
    }
});
