/// <reference path="js/config.js" />

$$('fb form tinyscrollbar requireFB cookie', function () {
    var viewport = $('.viewport').height();
    $('.scroll').tinyscrollbar({
        trackSize: viewport - 10
    });

    if ($('.temp').length) return;

    $.fb.init().done(function () {
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                ///response.authResponse.userID
                $('[name=FacebookId]').val(response.authResponse.userID);
                $('.x-submit').once('click', function () {
                    if (funvalid($('form')))
                    {
                        var year = new Date().getFullYear();
                        var childYear = $('#edtYear').val();

                        if (childYear.length != 0 && ((year - childYear) > 6 || (year - childYear) < 0)) {
                            alert('您輸入的小孩年齡已超出0-6歲，請重新輸入。');
                            return;
                        }
                            

                        $('form').submit();
                    }
                        
                });
            } else {
                $('.x-submit').once('click', function () {
                    if (funvalid($('form'))) {
                        var year = new Date().getFullYear();
                        var childYear = $('#edtYear').val();

                        if (childYear.length != 0 && ((year - childYear) > 6 || (year - childYear) < 0)) {
                            alert('您輸入的小孩年齡已超出0-6歲，請重新輸入。');
                            return;
                        }

                        var date = new Date();
                        date.setTime(date.getTime() + (1000 * 60 * 10));

                        $.cookie('cDistNo', "" + $('#edtDistNo').val(), { path: '/', expires: date });
                        $.cookie('cMobile', "" + $('#edtMobile').val(), { path: '/', expires: date });
                        $.cookie('cIdentity', "" + $('#edtIdentity').val(), { path: '/', expires: date });
                        $.cookie('cYear', "" + $('#edtYear').val(), { path: '/', expires: date });

                        location.href = 'https://www.facebook.com/dialog/oauth?' + 'client_id=' + CONST.appID + '&redirect_uri=' + Config.URL + '&code=test';
                    }                        
                });

            }
        });
    });




    function funvalid(form) {
        var msg = form.find('[required]').map(function () {
            var me = $(this);
            if (me.is(':checkbox')) {
                if (!me.is(':checked')) {
                    return me.data('label');
                }
            }
            else if (me.is(':radio')) {
                if (form.find('input[name=' + me.attr('name') + ']:checked').length == 0) {
                    return me.data('label');
                }
            }
            else if ($.trim(me.val()) == '') {
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
});