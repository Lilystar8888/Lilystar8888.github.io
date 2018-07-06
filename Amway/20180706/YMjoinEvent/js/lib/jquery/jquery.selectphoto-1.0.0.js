/// <reference path="../../config.js" />

/*
Sample:

    $('a')
    .on($.fn.selectPhoto.events.CLICK, function (e) { // 按下綁定 element 時觸發
        console.log('CLICK');
    })
    .on($.fn.selectPhoto.events.PROGRESS, function (e, percentage) { // percentage: 上傳進度百分比(0~100) , 只有在使用 resumable 模式時才會觸發
        console.log('PROGRESS', percentage);
    })
    .on($.fn.selectPhoto.events.PHOTO, function (e, img) { // img: 選擇的照片 element, 其 data-source 為Server回傳的URL(含 ~/ 號的), 若為base64則無此屬性
        console.log('PHOTO');
        $('body').append(img);
    })
    .selectPhoto({
        maxLength: 1920 // 圖片最大邊長寬px
        , maxSize: 5 // MB
        , useType: 'auto' // auto resumable megapix flash -> auto --> resumable: Mobile, megapix: PC(IE 10以上), flash: IE9以下
        , token: 'a' + (Math.random() * (1 << 30)).toString(16).replace('.', '') --> 也可以由Server產GUID

        , isFlashShowPic: false // 使用Flash時, 其內部是否顯示圖片
        , isAPIShowLoading: true // Call API存圖時, 是否要顯示Loading畫面
        , isMegapixUseServer: true // 使用Megapix時, 是否傳base64回server存圖再取回
    });
*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend', 'exif', 'megapix', 'resumable', 'swfobject'], factory) : factory(jQuery);
} (function () {
    var PLUG_DATA_CODE = "isobar_selectphoto";

    $.fn.selectPhoto = function (settings) {
        if (typeof (settings) == 'string') {
            var otherArgs = Array.prototype.slice.call(arguments, 1);

            return this.each(function () {
                var o = $(this).data(PLUG_DATA_CODE);
                if (o && o[settings]) o[settings].apply(o, otherArgs);
            });
        } else {
            return this.each(function () {
                var o = new ISOBAR_SELECTPHOTO_CLASS();
                o._setting = $.extend(true, {}, $.fn.selectPhoto.settings, settings);
                o._element = this;
                o._init();

                $(this).data(PLUG_DATA_CODE, o);
            });
        };
    };

    $.fn.selectPhoto.settings = {
        maxLength: 1920 // 圖片最大邊長寬px
        , maxSize: 5 // MB
        , useType: 'auto' // auto resumable megapix flash
        , token: 'a' + (Math.random() * (1 << 30)).toString(16).replace('.', '')

        , isFlashShowPic: false // 是否顯示圖片
        , isAPIShowLoading: true // Call API存圖時, 是否要顯示Loading畫面
        , isMegapixUseServer: true // 若為true, 則會傳base64回server另存成檔案
    };

    $.fn.selectPhoto.events = {
        PHOTO: 'selectphoto:photo'          // function(e, img) {} 參數: img -> 選擇的照片
        , CLICK: 'selectphoto:click'        // function(e) {}
        , PROGRESS: 'selectphoto:progress'  // function(e, percentage) {} 參數: percentage -> 進度(0~100) , 只有在使用 resumable 模式時可以使用
    };

    function ISOBAR_SELECTPHOTO_CLASS() { }

    var giCount = 0;

    $.extend(ISOBAR_SELECTPHOTO_CLASS.prototype, {
        _setting: $.fn.selectPhoto.settings
        , _element: null
        , _elmMegapixFile: null

        , _b64ToServerURL: function (base64) {
            var obj = this;

            $.callAPI($.resolve('~/api/B64File.ashx'), { b64: base64 }, { isHideLoading: !obj._setting.isAPIShowLoading })
            .done(function (ret) {
                obj._triggerOnPhoto(ret.url);
            });
        }
        , _triggerOnPhoto: function (url) {
            var obj = this;

            $('<img />')
            .attr('data-source', url)
            .load(function () {
                $(obj._element).trigger($.fn.selectPhoto.events.PHOTO, [this]);
            })
            .error(function () {
                $(obj._element).trigger($.fn.selectPhoto.events.PHOTO, [this]);
            })
            .attr('src', $.resolve(url));
        }

        , _init: function () {
            var obj = this;

            giCount++;
            obj._setting.token += '_' + giCount

            if (obj._setting.useType == 'resumable' || (obj._setting.useType == 'auto' && $.isMobile)) {
                //#region resumable
                var r = window.resumable = new Resumable({
                    target: $.resolve('~/api/ResumableFile.ashx')
                    , query: { UploadToken: obj._setting.token, MaxLength: obj._setting.maxLength }
                    , testChunks: false
                    , chunkSize: 0.3 * (1024 * 1024)
                    , simultaneousUploads: 1
                    , maxFiles: 1
                    , maxFileSize: obj._setting.maxSize * (1024 * 1024)
                    , maxChunkRetries: 20
                    , chunkRetryInterval: 2000

                    , maxFilesErrorCallback: function (files, errorCount) {
                        console.log('maxFilesErrorCallback', files, errorCount);
                        alert('請選擇一個要上傳的照片!');
                    }
                    , maxFileSizeErrorCallback: function (files, errorCount) {
                        console.log('maxFileSizeErrorCallback', files, errorCount);
                        alert('檔案大小超過限制!');
                    }
                });
                r.assignBrowse(obj._element);
                $(obj._element).find('input[type="file"]').attr('accept', 'image/*').on('click', function () {
                    $(obj._element).trigger($.fn.selectPhoto.events.CLICK, []);
                });

                r.on('fileAdded', function (file) {
                    console.log('fileAdded', file);

                    if (file.chunks.length > 0 && file.chunks[0].fileObjType.indexOf('image') < 0) {
                        r.removeFile(file);
                        alert('請選擇一個要上傳的照片!');
                        return;
                    }

                    r.upload();
                });

                r.on('uploadStart', function () {
                    console.log('uploadStart');
                    if (obj._setting.isAPIShowLoading) $.loading();
                });
                r.on('fileProgress', function (file) {
                    $(obj._element).trigger($.fn.selectPhoto.events.PROGRESS, [~ ~(file.progress() * 100)]);
                });

                function processFail(file) {
                    r.removeFile(file);
                    if (obj._setting.isAPIShowLoading) $.loading('hide');
                    alert('上傳失敗請重新挑選照片上傳!');
                }

                r.on('fileError', function (file, message) {
                    console.log('fileError', message, file);

                    processFail(file);
                });
                r.on('fileSuccess', function (file, resultJSON) {
                    console.log('fileSuccess', file, JSON.parse(resultJSON));
                    r.removeFile(file);

                    var result = JSON.parse(resultJSON);
                    if (result.success && result.finished) {
                        obj._triggerOnPhoto(result.url);
                    } else {
                        processFail(file);
                    }

                    if (obj._setting.isAPIShowLoading) $.loading('hide');
                });

                obj._setting.useType = 'resumable';
                //#endregion
            } else {
                //#region 判斷是否支援Megapix
                var gbFileAPISupport = (
                    (typeof (FileReader) !== 'undefined') &&
                    (typeof (File) !== 'undefined') &&
                    (typeof (Blob) !== 'undefined') &&
                    (typeof (FileList) !== 'undefined') &&
                    (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
                );
                //#endregion

                if (obj._setting.useType == 'megapix' || (obj._setting.useType == 'auto' && gbFileAPISupport)) {
                    //#region Megapix
                    obj._elmMegapixFile = $('<input id="' + obj._setting.token + '" type="file" />')
                    .attr('accept', 'image/*')
                    .css({ 'position': 'absolute', 'top': '-9999px', 'display': 'none' })
                    .appendTo('body')
                    .on('change', function (e) {
                        if (e.target.files.length == 0) return;

                        var file = e.target.files[0];
                        var reader = new FileReader();
                        reader.onload = function (event) {
                            var exif = EXIF.readFromBinaryFile(new BinaryFile(this.result));
                            mpImg = new MegaPixImage(file);

                            var img = new Image();
                            img.onload = function () {
                                if (obj._setting.isMegapixUseServer) {
                                    var base64 = img.src.split(',')[1];
                                    if ((base64.length * 6) / 8 > obj._setting.maxSize * 1024 * 1024) {
                                        alert('上傳的照片超過檔案大小限制!');
                                        return;
                                    }

                                    obj._b64ToServerURL(base64);
                                } else {
                                    $(obj._element).trigger($.fn.selectPhoto.events.PHOTO, [this]);
                                }
                            };

                            mpImg.render(img, $.extend({ orientation: exif.Orientation }, obj._setting.maxLength > 0 ? { maxWidth: obj._setting.maxLength, maxHeight: obj._setting.maxLength} : {}));
                        };
                        reader.readAsText(file);

                        e.target.value = '';
                    })
                    .get(0);

                    $(obj._element).on('click', function () {
                        $(obj._element).trigger($.fn.selectPhoto.events.CLICK, []);
                        $(obj._elmMegapixFile).trigger('click');
                    });

                    obj._setting.useType = 'megapix';
                    //#endregion
                } else {
                    //#region Flash
                    var elmW = $(obj._element).outerWidth();
                    var elmH = $(obj._element).outerHeight();
                    var elmT = $(obj._element).offset().top;
                    var elmL = $(obj._element).offset().left;

                    $('<div class="flashbox" />')
                    .css({
                        'position': 'absolute'
                        , 'width': elmW + 'px'
                        , 'height': elmH + 'px'
                        , 'top': elmT + 'px'
                        , 'left': elmL + 'px'
                    })
                    .append('<div id="' + obj._setting.token + '"></div>')
                    .insertAfter(obj._element);

                    var params = {
                        quality: "high",
                        scale: "noscale",
                        wmode: "transparent",
                        allowscriptaccess: "always",
                        bgcolor: "#000000"
                    };
                    var flashvars = {
                        base: $.static('~/flash/'),
                        maxSize: obj._setting.maxSize,
                        maxLength: obj._setting.maxLength,
                        onClick: 'onFlashUploadClick_' + obj._setting.token,
                        onComplete: 'onFlashUploadComplete_' + obj._setting.token,
                        isShowPic: obj._setting.isFlashShowPic
                    };
                    var attributes = {
                        id: obj._setting.token,
                        name: obj._setting.token
                    };
                    swfobject.embedSWF($.static('~/flash/upload.swf'), obj._setting.token, "100%", "100%", "10.0.0", $.static('~/flash/expressInstall.swf'), flashvars, params, attributes, function (e) {

                    });

                    window['onFlashUploadClick_' + obj._setting.token] = function () {
                        $(obj._element).trigger($.fn.selectPhoto.events.CLICK, []);
                    };

                    window['onFlashUploadComplete_' + obj._setting.token] = function (base64) {
                        obj._b64ToServerURL(base64);
                    };

                    obj._setting.useType = 'flash';
                    //#endregion
                }
            }

            console.log('useType: ' + obj._setting.useType);
        }
    });


}));