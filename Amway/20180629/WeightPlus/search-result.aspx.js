/// <reference path="js/config.js" />

$$('simplePagination ', function () {
    var gQty = 1;
    var gPageSize = 10;
    var gInitalPageNo = 1;
    var gPageNumber = 1;
    var gcenterInfoList = [];
    var gdisplayedPages = 5;
    var searchstr = $.queryString('search');

    function BindData(rowCount) {
        var str = "";

        for (var i = 0; i < rowCount; i++) {
            var oData = gcenterInfoList[i];
            str += '<h2 class="search-subtitle"><a href="' + oData.Url + '">' + oData.Title.replace(eval('/' + searchstr + '/g'), '<span>' + searchstr + '</span>') + '</a></h2>' +
                   '<p class="search-content"><a href="' + oData.Url + '">' + oData.Description.replace(eval('/' + searchstr + '/g'), '<span class="txt-green">' + searchstr + '</span>') + '</a></p>';
        }

        $('.search-box').html(str);

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
        $.callAPI('API/GetSearchArticle.ashx', {
            Token: "", Search: searchstr, Device: 'pc', PageIndex: pageNumber, PageSize: gPageSize
        }).done(function (AResult) {
            gPageNumber = pageNumber;
            gcenterInfoList = AResult.Items;
            BindData(AResult.Items.length);
        }).fail(function (AErrMsg) {
            alert('Error');

        });
    }

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

    function search() {
        $.callAPI('API/GetSearchArticleQty.ashx', {
            PageSize: gPageSize, Search: searchstr, Device: 'pc'
        }).done(function (AResult) {
            gQty = AResult.Qty;
            console.log(AResult.Qty);
            bindPagination(gQty);
        }).fail(function (AErrMsg) {
            alert('Error');
        });
    }
    $(document).on("click", '.search-btn.box-inline', function () {
    //$('.search-btn.btn').click(function () {
        var str = $.trim($('input[type=text].box-inline').val());
        if(str.length == 0) return;
        searchstr = str;
        search();
    });

    $('input[type=text].box-inline').bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode                        
            e.preventDefault();
            $('.search-btn.box-inline').click();
        }
    });

    $('input[type=text].box-inline').val(searchstr);
    search();
});
