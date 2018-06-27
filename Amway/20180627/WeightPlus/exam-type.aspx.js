/// <reference path="js/config.js" />

$$('', function () {
    window.clickType = "";
    var querystring = $.queryString('type'), pdf = "",examplepdf="",title="";
    if (querystring.length == 0) { location.href = 'index.aspx'; return; }
    var gcenterInfoList = [];

		// 先取得 .nike 及原始的 ul 項目
		// 接著產生三組 div 並各自包一個 ul 項目
		// 再來取得一些額外的參數、小圖及大圖的名稱
		var $etc = $('.exam-type-change'),
			$source = $etc.children('ul').remove(),
			$leftUl = $('<div class="exam-type-change_left"><ul></ul></div>').children(),
			$rightUl = $('<div class="exam-type-change_right"><ul></ul></div>').children(),
			$mainUl = $('<div class="exam-type-change_main"><ul></ul></div>').children(),
			$sourceLi = $source.children(),
			_liStr = $source.html(),
			_itemLen = $sourceLi.length,
			_middle = Math.ceil(_itemLen / 2),
			_small = /small/ig,
			_big = 'big',
			_smallWidth = 155, _bigWidth = 250;
		
		// 幫左邊 ul 清單加入 li 項目
		$leftUl.append(getLiItem(0, 5) + _liStr);
		// 幫右邊 ul 清單加入 li 項目
		$rightUl.append(getLiItem(_middle, _itemLen) + _liStr + getLiItem(0, _itemLen - _middle));
		// 幫中間 ul 清單加入 li 項目
		$mainUl.append((getLiItem(_middle - 1, _itemLen) + _liStr).replace(_small, _big));
		// 把 ul 清單部份都加到 .exam-type-change 中
		$etc.append($leftUl.parent(), $rightUl.parent(), $mainUl.parent());
		
		// 幫右邊 ul li a 加上 click 事件並產生透明度
		// 當點擊到時往左移動項目
    $rightUl.find('li a').click(function () {
            console.log($(this).parent().attr('class').replace('exam-type', ''));
            change($(this).parent().attr('class').replace('exam-type', ''));
			move(($(this).parent().index() + 1) % $rightUl.children().length);
			return false;
		}).fadeTo(200, 0.5);
		
		// 幫左邊 ul li a 加上 click 事件並產生 0.5 的透明度
		// 當點擊到時往右移動項目
    $leftUl.find('li a').click(function () {
        var _index = $(this).parent().index();
        console.log($(this).parent().attr('class').replace('exam-type',''));
        change($(this).parent().attr('class').replace('exam-type', ''));
			if(_index < 2){
				$leftUl.add($rightUl).add($('.exam-type-change_right.fake ul, .exam-type-change_left.fake ul')).css('left', _itemLen * _smallWidth * -1);
				$mainUl.add($('.exam-type-change_main.fake ul')).css('left', _itemLen * _bigWidth * -1);
				_index += _itemLen;
			}
			move((_index - 2) % $leftUl.children().length);
			return false;
		}).fadeTo(200, 0.5);
		
		// 控制移動的函式
		function move(i){
			// 移動左右清單
			// 移動時變成不透明
			$leftUl.add($rightUl).stop(false, true).animate({
				left: i * _smallWidth * -1
			}, changeLeft).find('li a').css('opacity', 1);
			
			// 移動中間清單
			$mainUl.stop(false, true).animate({
				left: i * _bigWidth * -1
			}, changeLeft);
		}
		
		// 當完成移動後的處理函式
		function changeLeft(){
			var $this = $(this),
				dis = $this.parent().attr('class') == 'exam-type-change_main' ? _bigWidth : _smallWidth,
				i = (parseInt($this.css('left'), 10) || 0) / dis * -1;
			
			// 處理左右清單的位移
			if(i >= _itemLen){
				$(this).css('left', dis * (i - 5) * -1);
			}
		}
		
		// 組成 li 項目的函式
		function getLiItem(startIndex, endIndex){
			var rtvl = '';
			for(var i=startIndex;i<endIndex;i++){
				rtvl += '<li' + ' class="exam-type0'+ (i+1) +'">' + $sourceLi.eq(i).html() + '</li>';
			}
			return rtvl;
		}	
		


		function change(type) {
		    $('.groupresult').hide();
		    $('.exam-result' + type).show();
		    clickType = type;
		    switch (type) {
		        case "01":
		            //ga('send', 'pageview', '/exam-type.aspx?type=01');
		            pdf = 'full-report1.pdf';
		            examplepdf = "示範菜單_健康樂活型.pdf";
		            title = "美型相關文章";
		            break;
		        case "02":
		            //ga('send', 'pageview', '/exam-type.aspx?type=02');
		            pdf = 'full-report2.pdf';
		            examplepdf = "示範菜單_壓力多吃型.pdf";
		            title = "淨化相關文章";
		            break;
		        case "03":
		            //ga('send', 'pageview', '/exam-type.aspx?type=03');
		            pdf = 'full-report3.pdf';
		            examplepdf = "示範菜單_暴飲暴食型.pdf";
		            title = "打底相關文章";
		            break;
		        case "04":
		            //ga('send', 'pageview', '/exam-type.aspx?type=04');
		            pdf = 'full-report4.pdf';
		            examplepdf = "示範菜單_糖心型.pdf";
		            title = "打底相關文章";
		            break;
		        case "05":
		            //ga('send', 'pageview', '/exam-type.aspx?type=05');
		            pdf = 'full-report5.pdf';
		            examplepdf = "示範菜單_代謝偏低型.pdf";
		            title = "代謝相關文章";
		            break;
		    }
		    $('.btn-exam-download').attr('href', 'pdf/' + pdf);
		    $('.btn-exam-menu').attr('href', 'pdf/' + examplepdf);
		    $('.title-right').text(title);

		    $.callAPI('API/GetBodyTypeArticle.ashx', { BodyType: type }).done(function (AResult) {
		        gcenterInfoList = AResult.Items;
		        BindData(AResult.Items.length);
		    }).fail(function (AErrMsg) {
		        alert('Error');
		    });
		}

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
		        str += '<li><div class="pic"><a href="detail.aspx?no=' + oData.UNO + '"><img src="API/GetPic.ashx?Token=' + Config.Token + '&Type=Article&FileName=' + oData.LargePicName + '"  alt=""/></a></div>' +
                            '<div class="writings-detail"><h3><a href="detail.aspx?no=' + oData.UNO + '">' + oData.Title + '</a></h3></div>' +
                            '<div class="tag-area">' + tempBodyType + '</div>' +
                            '<div class="tag-area">' + tempNutrient + '</div></li>';
		    }

		    $('.writings-list-right').html(str);
		}

		$('.btn-exam-download').click(function () {
		    switch (clickType) {
		        case "01":
		            ga('send','event','pc','download.pdf','健康樂活型');
		            break;
		        case "02":
		            ga('send','event','pc','download.pdf','壓力多吃型');
		            break;
		        case "03":
		            ga('send','event','pc','download.pdf','暴飲暴食型');
		            break;
		        case "04":
		            ga('send','event','pc','download.pdf','糖心型');
		            break;
		        case "05":
		            ga('send','event','pc','download.pdf','代謝偏低型');
		            break;
		    }
		});

		$('.btn-exam-menu').click(function () {
		    switch (clickType) {
		        case "01":
		            ga('send','event','pc','download.pdf','健康樂活型-菜單');
		            break;
		        case "02":
		            ga('send','event','pc','download.pdf','壓力多吃型-菜單');
		            break;
		        case "03":
		            ga('send','event','pc','download.pdf','暴飲暴食型-菜單');
		            break;
		        case "04":
		            ga('send','event','pc','download.pdf','糖心型-菜單');
		            break;
		        case "05":
		            ga('send','event','pc','download.pdf','代謝偏低型-菜單');
		            break;
		    }
		});

		function funGAPageView(type)
		{
		    switch (type) {
		        case "01":
		            ga('send', 'pageview', '/exam-type.aspx?type=01');
		            break;
		        case "02":
		            ga('send', 'pageview', '/exam-type.aspx?type=02');
		            break;
		        case "03":
		            ga('send', 'pageview', '/exam-type.aspx?type=03');
		            break;
		        case "04":
		            ga('send', 'pageview', '/exam-type.aspx?type=04');
		            break;
		        case "05":
		            ga('send', 'pageview', '/exam-type.aspx?type=05');
		            break;
		    }
		}

		$.when($('.exam-type-change_left li.exam-type' + querystring + ' a').trigger('click')).done(function () {
		    setTimeout(function () {
		        $('div.exam-type-change').show(function () {
		            //setTimeout(function () {
		                $leftUl.find('li a').click(function () {
		                    funGAPageView($(this).parent().attr('class').replace('exam-type', ''));
		                });
		                $rightUl.find('li a').click(function () {
		                    funGAPageView($(this).parent().attr('class').replace('exam-type', ''));
		                });
		            //}, 1000);
		        });

		    }, 200);
		});

});
