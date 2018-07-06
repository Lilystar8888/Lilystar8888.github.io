/// <reference path="../../config.js" />


/*
Sample:

$$('upload', function () {
    $('a').on($.fn.upload.events.UPLOAD_CHANGE, function (e, img) {
        $(img).appendTo('body');
    }).upload({ width: 620 });
});
*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'exif', 'megapix'], factory) : factory(jQuery);
} (function () {
    $.fn.upload = function (settings) {
        var oSettings = $.extend({}, settings, $.fn.upload.settings);

        var oTriggerElement = null;

        if ($('#fileupload').length == 0)
            $('<input id="fileupload" type="file" />').attr('accept', oSettings.accept).css({ 'position': 'absolute', 'top': oSettings.top }).appendTo('body');

        $('#fileupload').on('change', function (e) {
            if (e.target.files.length == 0) return;

            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function (event) {
                var exif = EXIF.readFromBinaryFile(new BinaryFile(this.result));
                mpImg = new MegaPixImage(file);

                var img = new Image();
                img.onload = function () {
                    if (oTriggerElement)
                        $(oTriggerElement).trigger($.fn.upload.events.UPLOAD_CHANGE, [img]);
                };

                mpImg.render(img, $.extend({ orientation: exif.Orientation }, oSettings));
            };
            reader.readAsText(file);
        });

        return this.each(function () {
            var THISOBJ = this;

            $(this).on(oSettings.bindingEvent, function () {
                oTriggerElement = this;
                $('#fileupload').trigger('click');
            });
        });
    };

    $.fn.upload.settings = {
        bindingEvent: window['CLICK'] ? window['CLICK'] : 'click'
        , accept: 'image/*'
        , top: '-9999px'
        , maxWidth: undefined
        , maxHeight: undefined
        , width: undefined
        , height: undefined
    };

    $.fn.upload.events = {
        UPLOAD_CHANGE: 'upload:change'
    };
}));