/// <reference path="../../config.js" />

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {
    var PLUG_DATA_CODE = "isobar_lightbox";

    $.fn.lightbox = function (settings) {
        if (typeof (settings) == 'string') {
            var otherArgs = Array.prototype.slice.call(arguments, 1);

            return this.each(function () {
                var o = $(this).data(PLUG_DATA_CODE);
                if (o && o[settings]) o[settings].apply(o, otherArgs);
            });
        } else {
            return this.each(function () {
                var o = new ISOBAR_LIGHTBOX_CLASS();
                o._setting = $.extend(true, {}, $.fn.lightbox.settings, settings);
                o._element = this;
                o._init();

                $(this).data(PLUG_DATA_CODE, o);
            });
        };
    };

    $.fn.lightbox.settings = {
        overlayBindingEvent: 'click',   // 遮罩要挷定的事件
        overlayBgColor: '#000',         // 遮罩顏色
        overlayOpacity: 0.7,            // 遮罩透明度
        zIndex: 89999999,               // z-index
        show: true,                     // 是否在套用 plugin 後直接顯示
        width: 0,                       // lightbox 的寬, 0 則自動計算
        height: 0,                      // lightbox 的寬, 0 則自動計算
        onOverlayEvent: null,           // 當觸發遮罩所挷定的事件時執行, 若未設定則為隱藏 lightbox, this: 遮罩 element
        onShow: null,                   // 當 lightbox 顯示後執行, this: plugin, 參數1: lightbox element, 參數2: 遮罩 element
        onHide: null,                   // 當 lightbox 隱藏後執行, this: plugin, 參數1: lightbox element
        onBeforeShow: null,             // 當 lightbox 顯示前執行, this: plugin, 參數1: { cancel: false (是否取消), ligbox: lightbox element, overlay: 遮罩 element }
        onBeforeHide: null,             // 當 lightbox 隱藏前執行, this: plugin, 參數1: { cancel: false (是否取消), ligbox: lightbox element, overlay: 遮罩 element }
        onCustAnimateShow: null,        // 客製顯示的方式, 預設為 lightbox -> fadeIn, 遮罩 -> show, this: plugin, 參數1: lightbox element, 參數2: 遮罩 element
        onCustAnimateHide: null         // 客製隱藏的方式, 預設為 lightbox -> fadeOut, 遮罩 -> hide, this: plugin, 參數1: lightbox element, 參數2: 遮罩 element
    };


    function ISOBAR_LIGHTBOX_CLASS() { }

    $.extend(ISOBAR_LIGHTBOX_CLASS.prototype, {
        _setting: $.fn.lightbox.settings,
        _element: null,

        _overlayElement: null,

        show: function () {
            var THISOBJ = this;

            if (this._setting.onBeforeShow) {
                var oEventArgs = { cancel: false, ligbox: this._element, overlay: this._overlayElement };
                this._setting.onBeforeShow(oEventArgs);
                if (oEventArgs.cancel)
                    return;
            }

            this._overlayElement = $('<div/>').css({
                display: 'none'
                , position: 'fixed'
                , 'background-color': this._setting.overlayBgColor
                , 'z-index': this._setting.zIndex - 1
                , opacity: this._setting.overlayOpacity
                , top: 0, left: 0, width: '100%', height: '100%'
            }).on(this._setting.overlayBindingEvent, (this._setting.onOverlayEvent) ? this._setting.onOverlayEvent : function () {
                THISOBJ.hide();
            });
            $(this._element).before(this._overlayElement);

            $(this._element).css({ 'left': '50%', 'margin-left': '-' + (this._setting.width / 2) + 'px' });
            $(this._element).css({ 'top': '50%', 'margin-top': '-' + (this._setting.height / 2) + 'px' });

            if (this._setting.onCustAnimateShow)
                this._setting.onCustAnimateShow(this._element, this._overlayElement);
            else {
                $(this._overlayElement).show();
                $(this._element).fadeIn(function () {
                    if (THISOBJ._setting.onShow)
                        THISOBJ._setting.onShow(THISOBJ._element, THISOBJ._overlayElement);
                });
            }
        },

        hide: function () {
            var THISOBJ = this;

            if (this._setting.onBeforeHide) {
                var oEventArgs = { cancel: false, ligbox: this._element, overlay: this._overlayElement };
                this._setting.onBeforeHide(oEventArgs);
                if (oEventArgs.cancel)
                    return;
            }

            if (this._setting.onCustAnimateHide)
                this._setting.onCustAnimateHide(this._element, this._overlayElement);
            else {
                $(this._element).fadeOut(function () {
                    $(THISOBJ._overlayElement).hide();
                    $(THISOBJ._overlayElement).remove();

                    if (THISOBJ._setting.onHide)
                        THISOBJ._setting.onHide(THISOBJ._element);
                });
            }
        },

        _init: function () {
            var THISOBJ = this;

            if (this._setting.width == 0 || this._setting.height == 0) {
                $(this._element).css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'z-index': this._setting.zIndex, opacity: 0 }).show();

                this._setting.width = this._setting.width || $(this._element).outerWidth();
                this._setting.height = this._setting.height || $(this._element).outerHeight();

                $(this._element).hide().css({ opacity: 1 });
            } else
                $(this._element).hide().css({ 'position': 'fixed', 'top': '0px', 'left': '0px', 'z-index': this._setting.zIndex });

            $(this._element).hide();

            if (this._setting.show)
                this.show();
        }
    });


}));