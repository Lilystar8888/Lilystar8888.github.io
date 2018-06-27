/// <reference path="js/config.js" />

$$('simplePagination ', function () {
    var gQty = 1;
    var gPageSize = 10;
    var gInitalPageNo = 1;
    var gPageNumber = 1;
    var gcenterInfoList = [];
    var gdisplayedPages = 5;

    function BindData(rowCount) {
        $('body').css('font-size', '10px');
        var str = "";
        for (var i = 0; i < rowCount; i++) {
            var oData = gcenterInfoList[i];
            str = str.concat("<tr><td >Name:</td><td>") + oData.Name + "</td></tr><tr><td>GroupName:</td><td>" + oData.GroupName + "</td></tr><tr><td>BeforeWeight:</td><td>" + oData.BeforeWeight
            + "</td></tr><tr><td>AfterWeight:</td><td>" + oData.AfterWeight + "</td></tr>";
        }

        $('#content').html(str);

        if (gPageNumber == gQty / gPageSize ) {
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
        $.callAPI('API/GetSuccessfulCase.ashx', { Token: "",SuccessfulCaseCategoryNO:2, PageIndex: pageNumber, PageSize: gPageSize
        }).done(function (AResult) {
            gPageNumber = pageNumber;
            gcenterInfoList = AResult.Items;
            BindData(AResult.Items.length);
        }).fail(function (AErrMsg) {
            alert('Error');

        });
    }

    $.callAPI('API/GetSuccessfulCasePageQty.ashx', { PageSize: gPageSize,SuccessfulCaseCategoryNO:2
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
            onPageClick: function (pageNumber) { getSuccessfulCase(pageNumber) },
            onInit: function () { getSuccessfulCase(gInitalPageNo) }
        });
    }
});
