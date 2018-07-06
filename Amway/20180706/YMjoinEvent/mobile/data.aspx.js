/// <reference path="js/config.js" />
$$('fb form tinyscrollbar requireFB cookie', function () {
    var viewport = $('.viewport').height();
    var maxSize = 5;
    var fbStatus = '';
    var fbId = '';

    //tabs
    $('.tabs').on('click', 'li', function (e) {
        e.preventDefault();
        if ($(this).hasClass('tabs-item--active')) {
            return;
        }

        var pre = $(this).siblings('.tabs-item--active').index();
        var idx = $(this).addClass('tabs-item--active').siblings().removeClass('tabs-item--active').end().index();

        $(e.delegateTarget)
            .next('div')
            .children()
            .stop(true, true)
            .eq(idx)
            .fadeIn(300, function () {
                var h = $(this).height();
                //console.log(h);
                $('.tabsContentBox').height(h);
            })
            .end()
            .eq(pre)
            .fadeOut(300);
    });
    //tabs end




    $.fb.init().done(function () {
        FB.getLoginStatus(function (response) {
            fbStatus = response.status;
            if (response.authResponse) {
                //$('[name=FacebookId]').val(response.authResponse.userID);
                fbId = response.authResponse.userID;
            }

            CheckData($.cookie('cDistNo'), $.cookie('cMobile'), $.cookie('cIdentity'), $.cookie('cYear'));

            //加入社團
            $('.x-submit:not(.ocr)').once('click', function () {
                if (funvalid($('form:not(.ocr)'))) {
                    var mobile = $('#edtMobile').val();
                    var identity = $('#edtIdentity').val();

                    if (fbStatus === 'connected') {
                        CheckData("", mobile, identity, "");

                        //setTimeout(function () {
                        //    $('form:not(.ocr)').submit();
                        //}, 300);
                    }
                    else {
                        var date = new Date();

                        date.setTime(date.getTime() + (1000 * 60 * 10));
                        $.cookie('cMobile', "" + mobile, { path: '/', expires: date });
                        $.cookie('cIdentity', "" + identity, { path: '/', expires: date });
                        setTimeout(function () {
                            location.href = 'https://www.facebook.com/dialog/oauth?' + 'client_id=' + CONST.appID + '&redirect_uri=' + Config.URL + '&code=test';
                        }, 300);
                    }
                }
            });

            //直銷商會員
            $('.x-submit.ocr').once('click', function () {
                if (funvalid($('form.ocr'))) {
                    document.getElementById("fImage").click();
                }
            });

            if ($.queryString('tab') == 'ocr')
                setTimeout(function () { $('.tabs li:not(.tabs-item--active)').trigger('click'); }, 500);
        });
    });

    function CheckData(distNo, mobile, aid, year) {
        $.callAPI('../API/DataSubmit.ashx', { DistNo: distNo, Mobile: mobile, Identity: aid, Year: year, FbId: fbId }).done(function (result) {
            if (result.Result == "true") {
                if(year && year.length != 0){
                    alert('驗證成功！請繼續加入FB社團了解漾媽群組訊息');
                }
                location.href = Config.fbURL;
            } else {
                if (result.errMsg)
                    alert(result.errMsg);
                $('body').show();
            }
        });
    }

    function funvalid(form) {
        var msg = form.find('[required]').map(function () {
            var me = $(this);
            if (me.is(':checkbox')) {
                if (!me.is(':checked')) {
                    return me.data('label');
                }
            } else if (me.is(':radio')) {
                if (form.find('input[name=' + me.attr('name') + ']:checked').length == 0) {
                    return me.data('label');
                }
            } else if ($.trim(me.val()) == '') {
                return me.data('label');
            }
        }).get();
        if (msg.length) {
            return !!alert($.fn.send.settings.errorTitle + '：\n' + msg.join('\n'));
        }
        msg = form.find('[pattern]').map(function () {
            var reg = new RegExp($(this).attr('pattern'));
            var me = $(this);

            if (me.val() != '' && !reg.test(me.val())) {
                return $(this).data('message').replace(/\{label\}/g, me.data('label'));
            }
        }).get();
        if (msg.length) {
            return !!alert(msg.join('\n'));
        }

        return true;
    }

    function readFile() {
        if (this.files && this.files[0]) {
            var type = this.files[0].type;
            var size = this.files[0].size;
            var name = this.files[0].name;
            //var fbId = $('[name=FacebookId]').val();

            if (!type.match(/^image\//)) {
                alert('請上傳圖檔');
                return;
            }

            if (size > maxSize * 1024 * 1024) {
                alert('圖檔不可大於5mb');
                return;
            }

            var FR = new FileReader();
            FR.onload = function (e) {
                var OCRBitmap = e.target.result.substring(e.target.result.indexOf("base64,") + 7);
                var ext = name.indexOf('.') >= 0 ? name.split('.').reverse()[0] : "jpg";
                var parameters = JSON.stringify({ OCRBitmap: OCRBitmap, FileType: ext, Parameter: Config.token });

                $.callAPI(Config.apiURL, parameters, { type: 'POST', contentType: 'application/json', dataType: 'JSON' }).done(function (ocrResult) {
                    $('#fImage').val('');

                    if (ocrResult.code == "0") {
                        if (ocrResult.ocrResult.length == 0 || ocrResult.ocrResultAID.length != 5) {
                            alert('很抱歉，照片格式不符，請確認擺放方向依網頁圖示說明(手機拍照按鈕請朝向右方)');
                            return;
                        }
                        //console.log("ocrResult:" + result.ocrResult + ",ocrResultAID:" + result.ocrResultAID);
                        var year = 1911 + parseInt(ocrResult.ocrResult);
                        var age = new Date().getFullYear() - year;
                        var aid = ocrResult.ocrResultAID;

                        if (age > 6) {
                            alert('很抱歉，您的小孩年齡大於6歲，已超出會員條件');
                        } else {
                            $.callAPI('../API/OCRIdentify.ashx', { Year: year, AID: aid, FacebookId: fbId }).done(function (result) {
                                if (result.code == "0") {
                                    if (fbStatus === 'connected') {
                                        var distNo = $('#edtDistNo').val();
                                        //$('#edtYear').val(year);
                                        //$('#edtIdentity1').val(aid);

                                        CheckData(distNo,"",aid,year);

                                        //$.callAPI('../API/DataSubmit.ashx', { DistNo: distNo, Mobile: "", Identity: aid, Year: year, FbId: fbId }).done(function (result) {
                                        //    if (result.Result == "true") {
                                        //        alert('驗證成功！請繼續加入FB社團了解漾媽群組訊息');
                                        //        location.href = Config.fbURL;
                                        //    } else {
                                        //        alert(result.errMsg);
                                        //    }
                                        //});
                                    }
                                    else {
                                        var date = new Date();

                                        date.setTime(date.getTime() + (1000 * 60 * 10));
                                        $.cookie('cDistNo', "" + $('#edtDistNo').val(), { path: '/', expires: date });
                                        $.cookie('cYear', "" + year, { path: '/', expires: date });
                                        $.cookie('cIdentity', "" + aid, { path: '/', expires: date });
                                        setTimeout(function () {
                                            location.href = 'https://www.facebook.com/dialog/oauth?' + 'client_id=' + CONST.appID + '&redirect_uri=' + Config.URL + '&code=test';
                                        }, 300);
                                    }
                                }
                                else {
                                    alert(result.message);
                                }
                            });
                        }
                    } else {
                        alert('很抱歉，照片格式不符，請確認擺放方向依網頁圖示說明(手機拍照按鈕請朝向右方)');
                    }
                }).fail(function (e) {
                    alert(e);
                });
            };
            FR.readAsDataURL(this.files[0]);
        }
    }

    document.getElementById("fImage").addEventListener("change", readFile, false);
});