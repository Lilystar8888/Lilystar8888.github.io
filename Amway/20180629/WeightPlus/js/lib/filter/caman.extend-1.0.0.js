/// <reference path="../../config.js" />

/*
	備註:
	預設會依照 devicePixelRatio 改變圖片大小，只要在element加上 data-caman-hidpi-disabled 就可關閉

	<img id="result" data-caman-hidpi-disabled />


    使用方法:

    $$('filter', function () {

        var gCaman = Caman('#camanImg', function () {
            // 建立完成後執行
        });

        // Method: execHistory - 執行記錄檔中的資料
        gCaman.execHistory([
	        {"api":"greyscale","params":[]}
	        ,{"api":"brightness","params":[63]}
        ], function () {
            // callback
        });

        // Method: backup - 備份目前畫面 (無堆疊作用)
        gCaman.backup();

        // Method: restore - 回復備份的畫面
        gCaman.restore();
    });

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'caman_base'], factory) : factory(jQuery);
} (function () {

    //#region Method: backup, restore - 暫存及回復照片
    var gOldImageData = null;
    Caman.prototype.backup = function () {
        gOldImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    };

    Caman.prototype.restore = function () {
        this.context.putImageData(gOldImageData, 0, 0);
        this.reloadCanvasData();
    };
    //#endregion

    //#region Method: execHistory - 執行記錄檔中的資料
    Caman.prototype.execHistory = function (history, callback) {
        var caman = this;

        $(history).each(function (i, v) {
            caman[v.api].apply(caman, v.params);
        });

        caman.render(callback);
    };
    //#endregion
    

    //#region ColorMatrixFilter
    Caman.Filter.register('ColorMatrixFilter', function (matrix) {
        var r, g, b, a;
        var m0 = matrix[0], m1 = matrix[1], m2 = matrix[2], m3 = matrix[3], m4 = matrix[4];
        var m5 = matrix[5], m6 = matrix[6], m7 = matrix[7], m8 = matrix[8], m9 = matrix[9];
        var m10 = matrix[10], m11 = matrix[11], m12 = matrix[12], m13 = matrix[13], m14 = matrix[14];
        var m15 = matrix[15], m16 = matrix[16], m17 = matrix[17], m18 = matrix[18], m19 = matrix[19];

        return this.process("ColorMatrixFilter", function (rgba) {
            r = rgba.r;
            g = rgba.g;
            b = rgba.b;
            a = rgba.a;
            rgba.r = r * m0 + g * m1 + b * m2 + a * m3 + m4; // red
            rgba.g = r * m5 + g * m6 + b * m7 + a * m8 + m9; // green
            rgba.b = r * m10 + g * m11 + b * m12 + a * m13 + m14; // blue
            rgba.a = r * m15 + g * m16 + b * m17 + a * m18 + m19; // alpha
            return rgba;
        });
    });
    //#endregion

    //#region ColorMatrix & override brightness, contrast, saturation, hue
    window.ColorMatrix = (function () {

        function ColorMatrix() {
            this.copyMatrix(ColorMatrix.IDENTITY_MATRIX);
        }

        ColorMatrix.DELTA_INDEX = [
		    0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11,
		    0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
		    0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
		    0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
		    0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
		    1.0, 1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
		    1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0, 2.12, 2.25,
		    2.37, 2.50, 2.62, 2.75, 2.87, 3.0, 3.2, 3.4, 3.6, 3.8,
		    4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0,
		    7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4, 9.6, 9.8,
		    10.0
	    ];

        ColorMatrix.IDENTITY_MATRIX = [
		    1, 0, 0, 0, 0,
		    0, 1, 0, 0, 0,
		    0, 0, 1, 0, 0,
		    0, 0, 0, 1, 0,
		    0, 0, 0, 0, 1
	    ];

        ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;

        ColorMatrix.prototype.adjustBrightness = function (value) {
            if (value == 0 || isNaN(value)) { return this; }
            value = this._cleanValue(value, 255);
            this._multiplyMatrix([
			    1, 0, 0, 0, value,
			    0, 1, 0, 0, value,
			    0, 0, 1, 0, value,
			    0, 0, 0, 1, 0,
			    0, 0, 0, 0, 1
		    ]);
            return this;
        };

        ColorMatrix.prototype.adjustContrast = function (value) {
            if (value == 0 || isNaN(value)) { return this; }
            value = this._cleanValue(value, 100);
            var x;
            if (value < 0) {
                x = 127 + value / 100 * 127;
            } else {
                x = value % 1;
                if (x == 0) {
                    x = ColorMatrix.DELTA_INDEX[value];
                } else {
                    x = ColorMatrix.DELTA_INDEX[(value << 0)] * (1 - x) + ColorMatrix.DELTA_INDEX[(value << 0) + 1] * x; // use linear interpolation for more granularity.
                }
                x = x * 127 + 127;
            }
            this._multiplyMatrix([
			    x / 127, 0, 0, 0, 0.5 * (127 - x),
			    0, x / 127, 0, 0, 0.5 * (127 - x),
			    0, 0, x / 127, 0, 0.5 * (127 - x),
			    0, 0, 0, 1, 0,
			    0, 0, 0, 0, 1
		    ]);
            return this;
        };

        ColorMatrix.prototype.adjustSaturation = function (value) {
            if (value == 0 || isNaN(value)) { return this; }
            value = this._cleanValue(value, 100);
            var x = 1 + ((value > 0) ? 3 * value / 100 : value / 100);
            var lumR = 0.3086;
            var lumG = 0.6094;
            var lumB = 0.0820;
            this._multiplyMatrix([
			    lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0,
			    lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0,
			    lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0,
			    0, 0, 0, 1, 0,
			    0, 0, 0, 0, 1
		    ]);
            return this;
        };

        ColorMatrix.prototype.adjustHue = function (value) {
            if (value == 0 || isNaN(value)) { return this; }
            value = this._cleanValue(value, 180) / 180 * Math.PI;
            var cosVal = Math.cos(value);
            var sinVal = Math.sin(value);
            var lumR = 0.213;
            var lumG = 0.715;
            var lumB = 0.072;
            this._multiplyMatrix([
			    lumR + cosVal * (1 - lumR) + sinVal * (-lumR), lumG + cosVal * (-lumG) + sinVal * (-lumG), lumB + cosVal * (-lumB) + sinVal * (1 - lumB), 0, 0,
			    lumR + cosVal * (-lumR) + sinVal * (0.143), lumG + cosVal * (1 - lumG) + sinVal * (0.140), lumB + cosVal * (-lumB) + sinVal * (-0.283), 0, 0,
			    lumR + cosVal * (-lumR) + sinVal * (-(1 - lumR)), lumG + cosVal * (-lumG) + sinVal * (lumG), lumB + cosVal * (1 - lumB) + sinVal * (lumB), 0, 0,
			    0, 0, 0, 1, 0,
			    0, 0, 0, 0, 1
		    ]);
            return this;
        };

        ColorMatrix.prototype.copyMatrix = function (matrix) {
            var l = ColorMatrix.LENGTH;
            for (var i = 0; i < l; i++) {
                this[i] = matrix[i];
            }
            return this;
        };

        ColorMatrix.prototype.toArray = function () {
            var arr = [];
            for (var i = 0, l = ColorMatrix.LENGTH; i < l; i++) {
                arr[i] = this[i];
            }
            return arr;
        }

        ColorMatrix.prototype._multiplyMatrix = function (matrix) {
            var col = [];

            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 5; j++) {
                    col[j] = this[j + i * 5];
                }
                for (var j = 0; j < 5; j++) {
                    var val = 0;
                    for (var k = 0; k < 5; k++) {
                        val += matrix[j + k * 5] * col[k];
                    }
                    this[j + i * 5] = val;
                }
            }
        }

        ColorMatrix.prototype._cleanValue = function (value, limit) {
            return Math.min(limit, Math.max(-limit, value));
        };

        return ColorMatrix;
    })();

    Caman.Filter.register("brightness", function (adjust) {
        return this.ColorMatrixFilter((new ColorMatrix()).adjustBrightness(adjust));
    });

    Caman.Filter.register("contrast", function (adjust) {
        return this.ColorMatrixFilter((new ColorMatrix()).adjustContrast(adjust));
    });

    Caman.Filter.register("saturation", function (adjust) {
        return this.ColorMatrixFilter((new ColorMatrix()).adjustSaturation(adjust));
    });

    Caman.Filter.register("hue", function (adjust) {
        return this.ColorMatrixFilter((new ColorMatrix()).adjustHue(adjust));
    });
    //#endregion

    //#region ConvolutionFilter
    Caman.Plugin.register("ConvolutionFilter", function (matrix, factor, offset) {
        var data = JSON.parse(JSON.stringify(this.pixelData)); // this.pixelData;

        var matrixhalf = Math.floor(matrix.length / 2);
        var r = 0, g = 1, b = 2, a = 3;
        var x = 0, y = 0, width = this.width, height = this.height;

        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var pixel = (y * width + x) * 4,
                    sumr = 0, sumg = 0, sumb = 0;
                for (var matrixy in matrix) {
                    for (var matrixx in matrix[matrixy]) {
                        var convpixel = ((y + (matrixy - matrixhalf)) * width + (x + (matrixx - matrixhalf))) * 4;
                        sumr += data[convpixel + r] * matrix[matrixy][matrixx];
                        sumg += data[convpixel + g] * matrix[matrixy][matrixx];
                        sumb += data[convpixel + b] * matrix[matrixy][matrixx];
                    }
                }
                this.pixelData[pixel + r] = factor * sumr + offset;
                this.pixelData[pixel + g] = factor * sumg + offset;
                this.pixelData[pixel + b] = factor * sumb + offset;
                this.pixelData[pixel + a] = data[pixel + a];
            }
        }
        return this;
    });

    Caman.Filter.register("ConvolutionFilter", function () {
        return this.processPlugin("ConvolutionFilter", Array.prototype.slice.call(arguments, 0));
    });
    //#endregion


    //#region radialBlur2 - 修改參數以符合編輯器
    Caman.Filter.register("radialBlur2", function (opts) {
        var newOpts = $.extend({}, opts);
        if (typeof newOpts.size != 'undefined')
            newOpts.size = (this.width / 2) * (newOpts.size / 100);
        if (newOpts.center && typeof newOpts.center.x != 'undefined')
            newOpts.center.x = this.width * (newOpts.center.x / 100);
        if (newOpts.center && typeof newOpts.center.y != 'undefined')
            newOpts.center.y = this.height * (newOpts.center.y / 100);
        if (typeof newOpts.focusWidth != 'undefined')
            newOpts.focusWidth = (this.width * 3) * (newOpts.focusWidth / 100);

        this.radialBlur(newOpts);
    });
    //#endregion

    //#region tiltShift2 - 修改參數以符合編輯器
    Caman.Filter.register("tiltShift2", function (opts) {
        var newOpts = $.extend({}, opts);
        if (newOpts.center && typeof newOpts.center.x != 'undefined')
            newOpts.center.x = this.width * (newOpts.center.x / 100);
        if (newOpts.center && typeof newOpts.center.y != 'undefined')
            newOpts.center.y = this.height * (newOpts.center.y / 100);
        if (typeof newOpts.focusWidth != 'undefined')
            newOpts.focusWidth = (this.width * 3) * (newOpts.focusWidth / 100);

        this.tiltShift(newOpts);
    });
    //#endregion

    //#region vignette2 - 修改參數以符合編輯器
    Caman.Filter.register("vignette2", function (size, strength) {
        this.vignette('' + size + '%', strength);
    });
    //#endregion


    //#region mosaic - 馬賽克
    Caman.Plugin.register("mosaic", function (mosaicSize) {
        function findColorDifference(dif, dest, src) {
            return (dif * dest + (1 - dif) * src);
        }

        for (var i = 0, data = this.pixelData, length = data.length; i < length >> 2; i++) {
            var index = i << 2;

            // get each colour value of current pixel
            var thisPixel = { r: data[index], g: data[index + 1], b: data[index + 2] };

            // the biggie: if we're here, let's get some filter action happening
            var pos = index >> 2;
            var stepY = Math.floor(pos / this.width);
            var stepY1 = stepY % mosaicSize;
            var stepX = pos - (stepY * this.width);
            var stepX1 = stepX % mosaicSize;

            if (stepY1) pos -= stepY1 * this.width;
            if (stepX1) pos -= stepX1;
            pos = pos << 2;

            data[index] = findColorDifference(1, data[pos], thisPixel.r);
            data[index + 1] = findColorDifference(1, data[pos + 1], thisPixel.g);
            data[index + 2] = findColorDifference(1, data[pos + 2], thisPixel.b);
        }
        return this;
    });

    Caman.Filter.register("mosaic", function () {
        return this.processPlugin("mosaic", Array.prototype.slice.call(arguments, 0));
    });
    //#endregion

    //#region sketch - 素描
    Caman.Filter.register('sketch', function (matrix) {
        return this.greyscale().stackBlur(2).contrast(40).ConvolutionFilter([[0, 20, 0], [20, -80, 20], [0, 20, 0]], 1.0, 0.0).invert();
    });
    //#endregion
}));