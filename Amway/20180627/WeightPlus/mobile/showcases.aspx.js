/// <reference path="js/config.js" />

$$('simplePagination fb', function () {
    var gQty = 1;
    var gPageSize = 5; 
    var gInitalPageNo = 1;
    var gPageNumber = 1;
    var gcenterInfoList = [];
    var gdisplayedPages = 5;

    function BindData(rowCount) {
        var str = "";
        for (var i = 0; i < rowCount; i++) {
            var oData = gcenterInfoList[i];
            str += '<li><div class="pic-show">';
            if(oData.IsChosen) str += '<div class="sift">精選案例</div>';
            str += '<img src="../API/GetPic.ashx?Token=' + Config.Token + '&Type=SuccessfulCase&FileName=' + oData.SmallPicName + '"  alt=""/></div><div class="show-results">';
            str += '<p class="name-show">' + oData.Name + '</p>';
            if(oData.Uid.length != 0)   str += '<p>編號：' + oData.Uid + '</p>';
            str += '<p>減重前<span>' + oData.BeforeWeight + '公斤</span></p><p>減重後<span>' + oData.AfterWeight + '公斤</span></p><p class="fat">體脂減 ' + oData.BodyFat + '%</p>';
            str += '<div class="lose"><span>-' + oData.WeightDiff + '</span>公斤</div></div>';
            str += '<div class="introduce">';
            if (oData.IsChosen) str += '<div class="time-detail"><a href="javascript:;" class="fb-share" data-uno="' + oData.UNO + '">FB分享</a><a href="javascript:;" class="line-share" data-uno="' + oData.UNO + '">LINE分享</a></div>';
            str += '<p>' + oData.FirstParagraph + '</p></div></li>';
        }

        $('.showcaseslist').html(str);

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

    function getSuccessfulCase(pageNumber, CategoryNO, Name) {
        $.loading();
        console.log(pageNumber, CategoryNO,$.trim(Name));
        $.callAPI('../API/GetSuccessfulCase.ashx', { Token: "",CategoryNO:CategoryNO, Name:Name, PageIndex: pageNumber, PageSize: gPageSize
        }).done(function (AResult) {
            gPageNumber = pageNumber;
            gcenterInfoList = AResult.Items;
            BindData(AResult.Items.length);
        }).fail(function (AErrMsg) {
            alert('Error');

        });
        $.loading('hide');
    }

    function InitPagination(CategoryNO, Name) {
        $.callAPI('../API/GetSuccessfulCasePageQty.ashx', {
            CategoryNO: CategoryNO, Name: Name, PageSize: gPageSize
        }).done(function (AResult) {
            gQty = AResult.Qty;
            console.log(AResult.Qty);
            bindPagination(gQty);
        }).fail(function (AErrMsg) {
            alert('Error');
        });
    }

    function InitCategory(Name)
    {

        $.callAPI('../API/GetSuccessfulCategory.ashx', {
            Name: Name
        }).done(function (AResult) {
            console.log('TotalCount:', AResult.TotalCount, 'Items:', AResult.Items);
            var str = "";
            str += '<option value="0">全部文章(' + AResult.TotalCount + '篇)</option>';

            for (var item in AResult.Items) {
                str += '<option value="' + AResult.Items[item].UNO + '">' + AResult.Items[item].Name + '(' + AResult.Items[item].Count + '篇)</option>';
            }
            $('div.select select').html(str);
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
            onPageClick: function (pageNumber) { getSuccessfulCase(pageNumber, $('div.select select').val(), $('div.searchbar input[type=text]').val()); $('body,html').animate({ scrollTop: 0 }, 'slow'); },
            onInit: function () { getSuccessfulCase(gInitalPageNo, $('div.select select').val(), $('div.searchbar input[type=text]').val()) }
        });
    }

    //選擇類別
    $('div.select select').change(function () {
        var val = $(this).val();
        console.log('test',val, $('div.searchbar input[type=text]').val());
        //getSuccessfulCase(gInitalPageNo, $('div.select select').val(), $('div.searchbar input[type=text]').val())
        InitPagination(val, $('div.searchbar input[type=text]').val());
    });
    //點選搜尋
    $('.search-btn.btn').click(function () {
        InitPagination('', $('div.searchbar input[type=text]').val());
        InitCategory($('div.searchbar input[type=text]').val());
    });
    $('div.searchbar input[type=text]').bind("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode                        
            e.preventDefault();
            $('.search-btn.btn').click();
        }
    });

    //開啟登入畫面
    $('.login .offline a').click(function () {
        $('.box-exam-area').show();
    });
    //點擊登入
    $('a.btn-ok').click(function () {
        var acc = $('.data-tips input[type=text]').val(),
            pw = $('.data-tips input[type=password]').val();
        if ($.trim(acc).length <= 6 || $.trim(pw).length == 0 || $.trim(acc).length >= 9) {
            alert('請填寫帳號和密碼');
            $('.icon-i').show();
            return;
        }
        $.callAPI('../API/GetUserInfo.ashx', {
            Account: $('.data-tips input[type=text]').val(), PWD: $('.data-tips input[type=password]').val()
        }).done(function (AResult) {
            if (AResult.result == '1')
                location.href = 'showcases.aspx';
            else {
                var Msg = AResult.ErrorMsg || '帳號或密碼錯誤!';
                alert(Msg);
                $('.icon-i').show();
            }
        }).fail(function (AErrMsg) {
            alert('Error');

        });
    });
    //取消登入
    $('.close-tips').click(function () {
        $('.box-exam-area').hide();
        $('.icon-i').hide();
        $('.data-tips input[type=text]').val('');
        $('.data-tips input[type=password]').val('');
    });

    //點擊登出
    $('.online a').click(function () {
        $.callAPI('../API/Logout.ashx').done(function (AResult) {
                location.href = 'showcases.aspx';
        }).fail(function (AErrMsg) {
            alert('Error');
        });
    });

    //fb share
    $(document).on('click', '.time-detail .fb-share', function () {
        var uno = $(this).data('uno');
        $.fb.share(Config.ShareURL + "?q=" + uno);
        //$.callAPI(Config.CreateFBPicUrl, {
        //    Type: 'SuccessfulCase', UNO: uno
        //}).done(function (AResult) {

        //}).fail(function (AErrMsg) {
        //    alert('Error');

        //});
    });
    $(document).on('click', '.time-detail .line-share', function () {
        var uno = $(this).data('uno');

        $.callAPI(Config.CreateFBPicUrl, {
            Type: 'SuccessfulCase', UNO: uno
        }).done(function (AResult) {
            var str = '營養減重成功見證 ' + Config.ShareURL + "?q=" + uno;
            location.href = 'line://msg/text/' + encodeURIComponent(str);
        }).fail(function (AErrMsg) {
            alert('Error');

        });
    });

    var str = $.queryString('q');
    //init
    $('div.searchbar input[type=text]').val($.trim(str));
    InitPagination('0', $.trim(str));
    InitCategory($.trim(str));
});
