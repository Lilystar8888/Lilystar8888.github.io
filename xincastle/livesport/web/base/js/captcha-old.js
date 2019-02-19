(function(q) {
    function r(a) {
        var b = d("img");
        b.crossOrigin = "Anonymous";
        b.onload = a;
        b.onerror = function() {
            b.src = m()
        };
        b.src = m();
        return b
    }

    function d(a, b) {
        var c = document.createElement(a);
        c.className = b;
        return c
    }

    function m() {
        return "https://picsum.photos/300/150/?image=" + Math.round(1084 * Math.random())
    }

    function n(a, b, c, h) {
        a.beginPath();
        a.moveTo(b, c);
        a.arc(b + 21, c - 9 + 2, 9, .72 * f, 2.26 * f);
        a.lineTo(b + 42, c);
        a.arc(b + 42 + 9 - 2, c + 21, 9, 1.21 * f, 2.78 * f);
        a.lineTo(b + 42, c + 42);
        a.lineTo(b, c + 42);
        a.arc(b + 9 - 2, c + 21, 9.4, 2.76 * f, 1.24 * f, !0);
        a.lineTo(b, c);
        a.lineWidth = 2;
        a.fillStyle = "rgba(255, 255, 255, 0.7)";
        a.strokeStyle = "rgba(255, 255, 255, 0.7)";
        a.stroke();
        a[h]();
        a.globalCompositeOperation = "overlay"
    }

    function p(a, b) {
        return a + b
    }

    function t(a) {
        return a * a
    }
    var f = Math.PI,
        e = function(a) {
            var b = a.el,
                c = a.onSuccess,
                h = a.onFail;
            a = a.onRefresh;
            b.style.position = b.style.position || "relative";
            this.el = b;
            this.onSuccess = c;
            this.onFail = h;
            this.onRefresh = a
        };
    e.prototype.init = function() {
        this.initDOM();
        this.initImg();
        this.bindEvents()
    };
    e.prototype.initDOM = function() {
        var a =
            d("canvas");
        a.width = 310;
        a.height = 155;
        var b = a.cloneNode(!0),
            c = d("div", "sliderContainer"),
            h = d("div", "refreshIcon"),
            e = d("div", "sliderMask"),
            f = d("div", "slider"),
            l = d("span", "sliderIcon"),
            k = d("span", "sliderText");
        b.className = "block";
        k.innerHTML = "\u5411\u53f3\u6ed1\u52a8\u586b\u5145\u62fc\u56fe";
        var g = this.el;
        g.appendChild(a);
        g.appendChild(h);
        g.appendChild(b);
        f.appendChild(l);
        e.appendChild(f);
        c.appendChild(e);
        c.appendChild(k);
        g.appendChild(c);
        Object.assign(this, {
            canvas: a,
            block: b,
            sliderContainer: c,
            refreshIcon: h,
            slider: f,
            sliderMask: e,
            sliderIcon: l,
            text: k,
            canvasCtx: a.getContext("2d"),
            blockCtx: b.getContext("2d")
        })
    };
    e.prototype.initImg = function() {
        var a = this,
            b = r(function() {
                a.draw();
                a.canvasCtx.drawImage(b, 0, 0, 310, 155);
                a.blockCtx.drawImage(b, 0, 0, 310, 155);
                var c = a.y - 18 - 1,
                    e = a.blockCtx.getImageData(a.x - 3, c, 63, 63);
                a.block.width = 63;
                a.blockCtx.putImageData(e, 0, c)
            });
        this.img = b
    };
    e.prototype.draw = function() {
        this.x = Math.round(164 * Math.random() + 73);
        this.y = Math.round(54 * Math.random() + 28);
        n(this.canvasCtx, this.x, this.y, "fill");
        n(this.blockCtx, this.x, this.y, "clip")
    };
    e.prototype.clean = function() {
        this.canvasCtx.clearRect(0, 0, 310, 155);
        this.blockCtx.clearRect(0, 0, 310, 155);
        this.block.width = 310
    };
    e.prototype.bindEvents = function() {
        var a = this;
        this.el.onselectstart = function() {
            return !1
        };
        this.refreshIcon.onclick = function() {
            a.reset();
            "function" === typeof a.onRefresh && a.onRefresh()
        };
        var b, c, e = [],
            f = !1,
            d = function(a) {
                b = a.clientX || a.touches[0].clientX;
                c = a.clientY || a.touches[0].clientY;
                f = !0
            },
            l = function(g) {
                if (!f) return !1;
                var d = (g.clientX || g.touches[0].clientX) -
                    b;
                g = (g.clientY || g.touches[0].clientY) - c;
                if (0 > d || 310 <= d + 38) return !1;
                a.slider.style.left = d + "px";
                a.block.style.left = 250 / 270 * d + "px";
                a.sliderContainer.classList.add("sliderContainer_active");
                a.sliderMask.style.width = d + "px";
                e.push(g)
            },
            k = function(c) {
                if (!f) return !1;
                f = !1;
                if ((c.clientX || c.changedTouches[0].clientX) == b) return !1;
                a.sliderContainer.classList.remove("sliderContainer_active");
                a.trail = e;
                c = a.verify();
                var d = c.verified;
                c.spliced ? d ? (a.sliderContainer.classList.add("sliderContainer_success"), "function" ===
                    typeof a.onSuccess && a.onSuccess()) : (a.sliderContainer.classList.add("sliderContainer_fail"), a.text.innerHTML = "\u518d\u8bd5\u4e00\u6b21", a.reset()) : (a.sliderContainer.classList.add("sliderContainer_fail"), "function" === typeof a.onFail && a.onFail(), setTimeout(function() {
                    a.reset()
                }, 1E3))
            };
        this.slider.addEventListener("mousedown", d);
        this.slider.addEventListener("touchstart", d);
        document.addEventListener("mousemove", l);
        document.addEventListener("touchmove", l);
        document.addEventListener("mouseup", k);
        document.addEventListener("touchend",
            k)
    };
    e.prototype.verify = function() {
        var a = this.trail,
            b = a.reduce(p) / a.length,
            c = a.map(function(a) {
                return a - b
            });
        a = Math.sqrt(c.map(t).reduce(p) / a.length);
        c = parseInt(this.block.style.left);
        return {
            spliced: 10 > Math.abs(c - this.x),
            verified: 0 !== a
        }
    };
    e.prototype.reset = function() {
        this.sliderContainer.className = "sliderContainer";
        this.slider.style.left = 0;
        this.block.style.left = 0;
        this.sliderMask.style.width = 0;
        this.clean();
        this.img.src = m()
    };
    q.jigsaw = {
        init: function(a) {
            return (new e(a)).init()
        }
    }
})(window);