/// <reference path="../../config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'fb', 'lightbox'], factory) : factory(jQuery);
} (function () {
    var gsFansPageElementID = 'FansPageLightbox';

    var gbIsInit = false;

    $.fb.fansPage = function (ASetting) {
        if (!gbIsInit)
            return init(ASetting);

        var deferred = $.Deferred();

        $.loading(500);
        $.fb.api(FB.getUserID() + '/likes/?limit=5000').done(function (AResponse) {
            $.loading('hide');
            function checkPageID(data) { return $(data).map(function () { if (this.id == goSetting.pageID) return true; }).length > 0; }

            if (AResponse.data && checkPageID(AResponse.data)) {
                deferred.resolve();
            } else {
                var $lightbox = createfansPage();

                var bIsSkip = false;
                var tmSkip = null;

                if (goSetting.autoSkipMS > 0) {
                    tmSkip = setTimeout(function () {
                        bIsSkip = true;
                        $lightbox.lightbox('hide');
                    }, goSetting.autoSkipMS);
                }

                $lightbox.lightbox({
                    overlayBgColor: goSetting.overlayBgColor
					, onOverlayEvent: $.noop
                    , overlayOpacity: goSetting.overlayOpacity
                    , zIndex: goSetting.zIndex
                    , width: goSetting.width
                    , height: goSetting.height
                    , onShow: goSetting.onShow
                    , onHide: function () {
                        clearTimeout(tmSkip);

                        $lightbox.remove();

                        if (bIsSkip) {
                            gaBeFan();
                            goSetting.onHide(true);
                            deferred.resolve();
                        } else {
                            $.loading(500);
                            $.fb.api(FB.getUserID() + '/likes/?limit=5000').done(function (AResponse) {
                                $.loading('hide');
                                if (AResponse.data && checkPageID(AResponse.data)) {
                                    gaBeFan();
                                    goSetting.onHide(true);
                                    deferred.resolve();
                                } else {
                                    goSetting.onHide(false);
                                    deferred.reject();
                                }
                            });
                        }
                    }
                });
            }
        }).fail(function () {
            $.loading('hide');
            deferred.reject();
        });

        return deferred.promise();
    };

    var goSetting = $.fb.fansPage.settings = {
        pageID: ''
        , pageURL: ''
        , title: '請先加入粉絲團'
        , 'class': ''
        , overlayBgColor: '#000'
        , overlayOpacity: 0.7
        , zIndex: 89999999
        , width: 270
        , height: 62
        , autoSkipMS: 0
        , ga: { befan: ['fb', 'be.fan', ''] }
        , onShow: function (ALightbox, AOverlay) { }
        , onHide: function (AIsJoin) { }
    };

    function gaBeFan() {
        window['ga'] ? ga.apply(null, ['send', 'event'].concat(goSetting.ga.befan)) :
        window['_gaq'] ? _gaq.push(['_trackEvent'].concat(goSetting.ga.befan)) : '';
    }

    function init(ASetting) {
        goSetting = $.extend({}, $.fb.fansPage.settings, ASetting);

        FB.Event.subscribe('edge.create', function (AResponse) {
            $('#' + gsFansPageElementID).lightbox('hide');
        });

        gbIsInit = true;
    }

    function createfansPage() {
        var container = $(
            '<div id="' + gsFansPageElementID + '" style="display:none">' +
                '<h2 class="pageFansDlg_h2"><span>' + goSetting.title + '</span></h2>' +
                '<div class="pageFansDlg_div_1">' +
                    '<div class="pageFansDlg_div_1_1">' +
                        '<div class="fb-like-box" ' +
                            'data-href="' + goSetting.pageURL + '" ' +
                            'data-height="' + goSetting.height + '" data-width="' + goSetting.width + '" ' +
                            'data-show-faces="false" data-stream="false" data-header="false"></div>' +
                    '</div>' +
                '</div>' +
            '</div>');

        if (goSetting['class'] != '') {
            container
                .css({
                    'width': (goSetting.width + 25) + 'px',
                    'position': 'relative'
                })
                .addClass(goSetting['class']);

        } else {
            if ($('#StylePageFansDlg').length == 0) {
                $(
                    '<style type="text/css" id="StylePageFansDlg">\r\n' +
                        '.pageFansDlg {\r\n' +
                            'border: 10px solid #666; border:10px solid rgba(82, 82, 82, 0.698);\r\n' +
                            'direction: ltr;\r\n' +
                            'font-family: "lucida grande",tahoma,verdana,arial,sans-serif";\r\n' +
                            '-moz-border-radius: 8px;\r\n' +
                            '-webkit-border-radius: 8px;\r\n' +
                        '}\r\n' +
                        '.pageFansDlg .pageFansDlg_h2 {\r\n' +
                            'color: #fff;\r\n' +
                            'background-color: #6d84b4;\r\n' +
                            'font-size: 15px;\r\n' +
                            'font-weight: bold;\r\n' +
                            'border-bottom: medium none;\r\n' +
                            'border-left: #3b5998 1px solid;\r\n' +
                            'border-right: #3b5998 1px solid;\r\n' +
                            'border-top: #3b5998 1px solid;\r\n' +
                            'margin: 0px;\r\n' +
                            'padding: 0px;\r\n' +
                            'width: auto;\r\n' +
                        '}\r\n' +
                        '.pageFansDlg .pageFansDlg_h2 span {\r\n' +
                            'display: block;\r\n' +
                            'padding-left: 10px;\r\n' +
                            'padding-right: 10px;\r\n' +
                            'padding-top: 5px;\r\n' +
                            'padding-bottom: 5px;\r\n' +
                        '}\r\n' +
                        '.pageFansDlg .pageFansDlg_div_1 {\r\n' +
                            'background-color: #fff;\r\n' +
                            'border-bottom: #555 1px solid;\r\n' +
                            'border-left: #555 1px solid;\r\n' +
                            'border-right: #555 1px solid;\r\n' +
                            'border-top: #555 1px solid;\r\n' +
                        '}\r\n' +
                        '.pageFansDlg .pageFansDlg_div_1_1 {\r\n' +
                            'padding: 0px;\r\n' +
                            'border-bottom: #ccc 1px solid;\r\n' +
                        '}\r\n' +
                    '</style>'
                ).appendTo('head');
            }

            container.css({
                'width': (goSetting.width + 25) + 'px',
                'position': 'relative'
            })
            .addClass('pageFansDlg');

            $('body').append(container);

            FB.XFBML.parse();

            return container;
        }
    }


}));