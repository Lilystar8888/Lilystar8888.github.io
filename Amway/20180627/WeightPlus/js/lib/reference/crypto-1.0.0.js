/* 使用方法: 可參考 https://code.google.com/p/crypto-js/

當用方法:
取得字串的UTF8的ByteArray:
    CryptoJS.enc.Utf8.parse('字串').toByteArray()

取得字串的base64字串:
CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse('字串'));

取得字串(UTF8)以MD5 Hash後的字串:
CryptoJS.enc.Base64.stringify(CryptoJS.MD5(CryptoJS.enc.Utf8.parse('我在isobar的日子')))

RSA加密:
    CryptoJS.RSAEncrypt('我在isobar的日子', LEADS_PUBLIC_KEY);
    LEADS_PUBLIC_KEY: 為RSA Public Key (pem格式, 並且無頭尾標示的連續字串)
    例如:
    var LEADS_PUBLIC_KEY = 
'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq0quMUKn/bbdLCCSVF+C\
Wg31MsHqdk0fIjTjC3ZJI+SqAenfHIaKoUpcSZeaUaNfXletyU9hw/Ewwsq28xhT\
psvwicIfuDxb+V1hODCLfN0Jyu+QBtxCOEmeVAC81k8mDzAyZUGXZHVYazM5mNX9\
EZUJUy/cgw5sygjUqxPNIEg8o3qEYFb0H+yUfXLNWQIlZiJIizwLGqy91nDwD6Z2\
SikBmDzS3dsv6hvetWYbiWF0Nlm7Kdp91voKyfL83KqChTyO9YrxLe17AHSc09OG\
iYeIvge0cKoZXCnG2LWPjWVz4WilKqx4cyhDm7ju5ntJh2uRB3G6t3h2hjOSdfqw\
DwIDAQAB';

    回傳: { 
        key: base64 string -> 以RSA Key加密的隨機AES Key
        , encryptData: base64 string -> 以隨機AES Key加密後的內容
    }

*/

// core-min.js
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (h, o) {
    var f = {}, j = f.lib = {}, k = j.Base = function () { function a() { } return { extend: function (b) { a.prototype = this; var c = new a; b && c.mixIn(b); c.$super = this; return c }, create: function () { var a = this.extend(); a.init.apply(a, arguments); return a }, init: function () { }, mixIn: function (a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]); a.hasOwnProperty("toString") && (this.toString = a.toString) }, clone: function () { return this.$super.extend(this) } } } (), i = j.WordArray = k.extend({ init: function (a, b) {
        a =
this.words = a || []; this.sigBytes = b != o ? b : 4 * a.length
    }, toString: function (a) { return (a || p).stringify(this) }, concat: function (a) { var b = this.words, c = a.words, d = this.sigBytes, a = a.sigBytes; this.clamp(); if (d % 4) for (var e = 0; e < a; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4); else if (65535 < c.length) for (e = 0; e < a; e += 4) b[d + e >>> 2] = c[e >>> 2]; else b.push.apply(b, c); this.sigBytes += a; return this }, clamp: function () { var a = this.words, b = this.sigBytes; a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4); a.length = h.ceil(b / 4) }, clone: function () {
        var a =
k.clone.call(this); a.words = this.words.slice(0); return a
    }, random: function (a) { for (var b = [], c = 0; c < a; c += 4) b.push(4294967296 * h.random() | 0); return i.create(b, a) } 
    , toByteArray: function () {
    var baResult = [];
    for (var i = 0; i < this.sigBytes; i++) {
        baResult[i] = (this.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }
    return baResult;
}
    }), l = f.enc = {}, p = l.Hex = { stringify: function (a) { for (var b = a.words, a = a.sigBytes, c = [], d = 0; d < a; d++) { var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255; c.push((e >>> 4).toString(16)); c.push((e & 15).toString(16)) } return c.join("") }, parse: function (a) { for (var b = a.length, c = [], d = 0; d < b; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8); return i.create(c, b / 2) } }, n = l.Latin1 = { stringify: function (a) {
        for (var b =
a.words, a = a.sigBytes, c = [], d = 0; d < a; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255)); return c.join("")
    }, parse: function (a) { for (var b = a.length, c = [], d = 0; d < b; d++) c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4); return i.create(c, b) } 
    }, q = l.Utf8 = { stringify: function (a) { try { return decodeURIComponent(escape(n.stringify(a))) } catch (b) { throw Error("Malformed UTF-8 data"); } }, parse: function (a) { return n.parse(unescape(encodeURIComponent(a))) } }, m = j.BufferedBlockAlgorithm = k.extend({ reset: function () {
        this._data = i.create();
        this._nDataBytes = 0
    }, _append: function (a) { "string" == typeof a && (a = q.parse(a)); this._data.concat(a); this._nDataBytes += a.sigBytes }, _process: function (a) { var b = this._data, c = b.words, d = b.sigBytes, e = this.blockSize, f = d / (4 * e), f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0), a = f * e, d = h.min(4 * a, d); if (a) { for (var g = 0; g < a; g += e) this._doProcessBlock(c, g); g = c.splice(0, a); b.sigBytes -= d } return i.create(g, d) }, clone: function () { var a = k.clone.call(this); a._data = this._data.clone(); return a }, _minBufferSize: 0
    }); j.Hasher = m.extend({ init: function () { this.reset() },
        reset: function () { m.reset.call(this); this._doReset() }, update: function (a) { this._append(a); this._process(); return this }, finalize: function (a) { a && this._append(a); this._doFinalize(); return this._hash }, clone: function () { var a = m.clone.call(this); a._hash = this._hash.clone(); return a }, blockSize: 16, _createHelper: function (a) { return function (b, c) { return a.create(c).finalize(b) } }, _createHmacHelper: function (a) { return function (b, c) { return r.HMAC.create(a, c).finalize(b) } } 
    }); var r = f.algo = {}; return f
} (Math);

// cipher-core-min.js
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
CryptoJS.lib.Cipher || function (r) {
    var f = CryptoJS, e = f.lib, i = e.Base, j = e.WordArray, o = e.BufferedBlockAlgorithm, p = f.enc.Base64, s = f.algo.EvpKDF, l = e.Cipher = o.extend({ cfg: i.extend(), createEncryptor: function (a, b) { return this.create(this._ENC_XFORM_MODE, a, b) }, createDecryptor: function (a, b) { return this.create(this._DEC_XFORM_MODE, a, b) }, init: function (a, b, c) { this.cfg = this.cfg.extend(c); this._xformMode = a; this._key = b; this.reset() }, reset: function () { o.reset.call(this); this._doReset() }, process: function (a) {
        this._append(a);
        return this._process()
    }, finalize: function (a) { a && this._append(a); return this._doFinalize() }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function () { return function (a) { return { encrypt: function (b, c, d) { return ("string" == typeof c ? q : g).encrypt(a, b, c, d) }, decrypt: function (b, c, d) { return ("string" == typeof c ? q : g).decrypt(a, b, c, d) } } } } ()
    }); e.StreamCipher = l.extend({ _doFinalize: function () { return this._process(!0) }, blockSize: 1 }); var k = f.mode = {}, t = e.BlockCipherMode = i.extend({ createEncryptor: function (a,
b) { return this.Encryptor.create(a, b) }, createDecryptor: function (a, b) { return this.Decryptor.create(a, b) }, init: function (a, b) { this._cipher = a; this._iv = b } 
    }), k = k.CBC = function () {
        function a(a, b, m) { var h = this._iv; h ? this._iv = r : h = this._prevBlock; for (var e = 0; e < m; e++) a[b + e] ^= h[e] } var b = t.extend(); b.Encryptor = b.extend({ processBlock: function (b, d) { var m = this._cipher, e = m.blockSize; a.call(this, b, d, e); m.encryptBlock(b, d); this._prevBlock = b.slice(d, d + e) } }); b.Decryptor = b.extend({ processBlock: function (b, d) {
            var e = this._cipher,
h = e.blockSize, f = b.slice(d, d + h); e.decryptBlock(b, d); a.call(this, b, d, h); this._prevBlock = f
        } 
        }); return b
    } (), u = (f.pad = {}).Pkcs7 = { pad: function (a, b) { for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, e = [], f = 0; f < c; f += 4) e.push(d); c = j.create(e, c); a.concat(c) }, unpad: function (a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 } }; e.BlockCipher = l.extend({ cfg: l.cfg.extend({ mode: k, padding: u }), reset: function () {
        l.reset.call(this); var a = this.cfg, b = a.iv, a = a.mode; if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor;
        else c = a.createDecryptor, this._minBufferSize = 1; this._mode = c.call(a, this, b && b.words)
    }, _doProcessBlock: function (a, b) { this._mode.processBlock(a, b) }, _doFinalize: function () { var a = this.cfg.padding; if (this._xformMode == this._ENC_XFORM_MODE) { a.pad(this._data, this.blockSize); var b = this._process(!0) } else b = this._process(!0), a.unpad(b); return b }, blockSize: 4
    }); var n = e.CipherParams = i.extend({ init: function (a) { this.mixIn(a) }, toString: function (a) { return (a || this.formatter).stringify(this) } }), k = (f.format = {}).OpenSSL =
{ stringify: function (a) { var b = a.ciphertext, a = a.salt, b = (a ? j.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(p); return b = b.replace(/(.{64})/g, "$1\n") }, parse: function (a) { var a = p.parse(a), b = a.words; if (1398893684 == b[0] && 1701076831 == b[1]) { var c = j.create(b.slice(2, 4)); b.splice(0, 4); a.sigBytes -= 16 } return n.create({ ciphertext: a, salt: c }) } }, g = e.SerializableCipher = i.extend({ cfg: i.extend({ format: k }), encrypt: function (a, b, c, d) {
    var d = this.cfg.extend(d), e = a.createEncryptor(c, d), b = e.finalize(b), e = e.cfg;
    return n.create({ ciphertext: b, key: c, iv: e.iv, algorithm: a, mode: e.mode, padding: e.padding, blockSize: a.blockSize, formatter: d.format })
}, decrypt: function (a, b, c, d) { d = this.cfg.extend(d); b = this._parse(b, d.format); return a.createDecryptor(c, d).finalize(b.ciphertext) }, _parse: function (a, b) { return "string" == typeof a ? b.parse(a) : a } 
}), f = (f.kdf = {}).OpenSSL = { compute: function (a, b, c, d) {
    d || (d = j.random(8)); a = s.create({ keySize: b + c }).compute(a, d); c = j.create(a.words.slice(b), 4 * c); a.sigBytes = 4 * b; return n.create({ key: a, iv: c,
        salt: d
    })
} 
}, q = e.PasswordBasedCipher = g.extend({ cfg: g.cfg.extend({ kdf: f }), encrypt: function (a, b, c, d) { d = this.cfg.extend(d); c = d.kdf.compute(c, a.keySize, a.ivSize); d.iv = c.iv; a = g.encrypt.call(this, a, b, c.key, d); a.mixIn(c); return a }, decrypt: function (a, b, c, d) { d = this.cfg.extend(d); b = this._parse(b, d.format); c = d.kdf.compute(c, a.keySize, a.ivSize, b.salt); d.iv = c.iv; return g.decrypt.call(this, a, b, c.key, d) } })
} ();


// enc-base64-min.js
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    var h = CryptoJS, i = h.lib.WordArray; h.enc.Base64 = { stringify: function (b) { var e = b.words, f = b.sigBytes, c = this._map; b.clamp(); for (var b = [], a = 0; a < f; a += 3) for (var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++) b.push(c.charAt(d >>> 6 * (3 - g) & 63)); if (e = c.charAt(64)) for (; b.length % 4; ) b.push(e); return b.join("") }, parse: function (b) {
        var b = b.replace(/\s/g, ""), e = b.length, f = this._map, c = f.charAt(64); c && (c = b.indexOf(c), -1 != c && (e = c));
        for (var c = [], a = 0, d = 0; d < e; d++) if (d % 4) { var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4), h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4); c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4); a++ } return i.create(c, a)
    }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();


// md5-min.js
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (q) {
    function k(b, c, a, f, d, e, g) { b = b + (c & a | ~c & f) + d + g; return (b << e | b >>> 32 - e) + c } function l(b, c, a, f, d, e, g) { b = b + (c & f | a & ~f) + d + g; return (b << e | b >>> 32 - e) + c } function m(b, c, a, f, d, e, g) { b = b + (c ^ a ^ f) + d + g; return (b << e | b >>> 32 - e) + c } function n(b, c, a, f, d, e, g) { b = b + (a ^ (c | ~f)) + d + g; return (b << e | b >>> 32 - e) + c } var o = CryptoJS, j = o.lib, r = j.WordArray, j = j.Hasher, p = o.algo, i = []; (function () { for (var b = 0; 64 > b; b++) i[b] = 4294967296 * q.abs(q.sin(b + 1)) | 0 })(); p = p.MD5 = j.extend({ _doReset: function () {
        this._hash = r.create([1732584193, 4023233417,
2562383102, 271733878])
    }, _doProcessBlock: function (b, c) {
        for (var a = 0; 16 > a; a++) { var f = c + a, d = b[f]; b[f] = (d << 8 | d >>> 24) & 16711935 | (d << 24 | d >>> 8) & 4278255360 } for (var f = this._hash.words, d = f[0], e = f[1], g = f[2], h = f[3], a = 0; 64 > a; a += 4) 16 > a ? (d = k(d, e, g, h, b[c + a], 7, i[a]), h = k(h, d, e, g, b[c + a + 1], 12, i[a + 1]), g = k(g, h, d, e, b[c + a + 2], 17, i[a + 2]), e = k(e, g, h, d, b[c + a + 3], 22, i[a + 3])) : 32 > a ? (d = l(d, e, g, h, b[c + (a + 1) % 16], 5, i[a]), h = l(h, d, e, g, b[c + (a + 6) % 16], 9, i[a + 1]), g = l(g, h, d, e, b[c + (a + 11) % 16], 14, i[a + 2]), e = l(e, g, h, d, b[c + a % 16], 20, i[a + 3])) : 48 > a ? (d =
m(d, e, g, h, b[c + (3 * a + 5) % 16], 4, i[a]), h = m(h, d, e, g, b[c + (3 * a + 8) % 16], 11, i[a + 1]), g = m(g, h, d, e, b[c + (3 * a + 11) % 16], 16, i[a + 2]), e = m(e, g, h, d, b[c + (3 * a + 14) % 16], 23, i[a + 3])) : (d = n(d, e, g, h, b[c + 3 * a % 16], 6, i[a]), h = n(h, d, e, g, b[c + (3 * a + 7) % 16], 10, i[a + 1]), g = n(g, h, d, e, b[c + (3 * a + 14) % 16], 15, i[a + 2]), e = n(e, g, h, d, b[c + (3 * a + 5) % 16], 21, i[a + 3])); f[0] = f[0] + d | 0; f[1] = f[1] + e | 0; f[2] = f[2] + g | 0; f[3] = f[3] + h | 0
    }, _doFinalize: function () {
        var b = this._data, c = b.words, a = 8 * this._nDataBytes, f = 8 * b.sigBytes; c[f >>> 5] |= 128 << 24 - f % 32; c[(f + 64 >>> 9 << 4) + 14] = (a << 8 | a >>>
24) & 16711935 | (a << 24 | a >>> 8) & 4278255360; b.sigBytes = 4 * (c.length + 1); this._process(); b = this._hash.words; for (c = 0; 4 > c; c++) a = b[c], b[c] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360
    } 
    }); o.MD5 = j._createHelper(p); o.HmacMD5 = j._createHmacHelper(p)
})(Math);


// AES
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    var r = CryptoJS, u = r.lib.BlockCipher, o = r.algo, g = [], v = [], w = [], x = [], y = [], z = [], p = [], q = [], s = [], t = []; (function () { for (var b = [], c = 0; 256 > c; c++) b[c] = 128 > c ? c << 1 : c << 1 ^ 283; for (var a = 0, f = 0, c = 0; 256 > c; c++) { var d = f ^ f << 1 ^ f << 2 ^ f << 3 ^ f << 4, d = d >>> 8 ^ d & 255 ^ 99; g[a] = d; v[d] = a; var e = b[a], A = b[e], h = b[A], i = 257 * b[d] ^ 16843008 * d; w[a] = i << 24 | i >>> 8; x[a] = i << 16 | i >>> 16; y[a] = i << 8 | i >>> 24; z[a] = i; i = 16843009 * h ^ 65537 * A ^ 257 * e ^ 16843008 * a; p[d] = i << 24 | i >>> 8; q[d] = i << 16 | i >>> 16; s[d] = i << 8 | i >>> 24; t[d] = i; a ? (a = e ^ b[b[b[h ^ e]]], f ^= b[b[f]]) : a = f = 1 } })();
    var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], o = o.AES = u.extend({ _doReset: function () {
        for (var b = this._key, c = b.words, a = b.sigBytes / 4, b = 4 * ((this._nRounds = a + 6) + 1), f = this._keySchedule = [], d = 0; d < b; d++) if (d < a) f[d] = c[d]; else { var e = f[d - 1]; d % a ? 6 < a && 4 == d % a && (e = g[e >>> 24] << 24 | g[e >>> 16 & 255] << 16 | g[e >>> 8 & 255] << 8 | g[e & 255]) : (e = e << 8 | e >>> 24, e = g[e >>> 24] << 24 | g[e >>> 16 & 255] << 16 | g[e >>> 8 & 255] << 8 | g[e & 255], e ^= B[d / a | 0] << 24); f[d] = f[d - a] ^ e } c = this._invKeySchedule = []; for (a = 0; a < b; a++) d = b - a, e = a % 4 ? f[d] : f[d - 4], c[a] = 4 > a || 4 >= d ? e : p[g[e >>> 24]] ^ q[g[e >>>
16 & 255]] ^ s[g[e >>> 8 & 255]] ^ t[g[e & 255]]
    }, encryptBlock: function (b, c) { this._doCryptBlock(b, c, this._keySchedule, w, x, y, z, g) }, decryptBlock: function (b, c) { var a = b[c + 1]; b[c + 1] = b[c + 3]; b[c + 3] = a; this._doCryptBlock(b, c, this._invKeySchedule, p, q, s, t, v); a = b[c + 1]; b[c + 1] = b[c + 3]; b[c + 3] = a }, _doCryptBlock: function (b, c, a, f, d, e, g, h) {
        for (var i = this._nRounds, k = b[c] ^ a[0], l = b[c + 1] ^ a[1], m = b[c + 2] ^ a[2], j = b[c + 3] ^ a[3], n = 4, r = 1; r < i; r++) var o = f[k >>> 24] ^ d[l >>> 16 & 255] ^ e[m >>> 8 & 255] ^ g[j & 255] ^ a[n++], p = f[l >>> 24] ^ d[m >>> 16 & 255] ^ e[j >>> 8 & 255] ^
g[k & 255] ^ a[n++], q = f[m >>> 24] ^ d[j >>> 16 & 255] ^ e[k >>> 8 & 255] ^ g[l & 255] ^ a[n++], j = f[j >>> 24] ^ d[k >>> 16 & 255] ^ e[l >>> 8 & 255] ^ g[m & 255] ^ a[n++], k = o, l = p, m = q; o = (h[k >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[m >>> 8 & 255] << 8 | h[j & 255]) ^ a[n++]; p = (h[l >>> 24] << 24 | h[m >>> 16 & 255] << 16 | h[j >>> 8 & 255] << 8 | h[k & 255]) ^ a[n++]; q = (h[m >>> 24] << 24 | h[j >>> 16 & 255] << 16 | h[k >>> 8 & 255] << 8 | h[l & 255]) ^ a[n++]; j = (h[j >>> 24] << 24 | h[k >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[m & 255]) ^ a[n++]; b[c] = o; b[c + 1] = p; b[c + 2] = q; b[c + 3] = j
    }, keySize: 8
    }); r.AES = u._createHelper(o)
})();


// sha256-min.js
/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (k) {
    var h = CryptoJS, i = h.lib, r = i.WordArray, i = i.Hasher, c = h.algo, p = [], q = []; (function () { function g(a) { for (var b = k.sqrt(a), d = 2; d <= b; d++) if (!(a % d)) return !1; return !0 } function d(a) { return 4294967296 * (a - (a | 0)) | 0 } for (var a = 2, b = 0; 64 > b; ) g(a) && (8 > b && (p[b] = d(k.pow(a, 0.5))), q[b] = d(k.pow(a, 1 / 3)), b++), a++ })(); var g = [], c = c.SHA256 = i.extend({ _doReset: function () { this._hash = r.create(p.slice(0)) }, _doProcessBlock: function (i, d) {
        for (var a = this._hash.words, b = a[0], m = a[1], n = a[2], h = a[3], f = a[4], c = a[5], o = a[6], k = a[7], e = 0; 64 >
e; e++) { if (16 > e) g[e] = i[d + e] | 0; else { var j = g[e - 15], l = g[e - 2]; g[e] = ((j << 25 | j >>> 7) ^ (j << 14 | j >>> 18) ^ j >>> 3) + g[e - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + g[e - 16] } j = k + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & c ^ ~f & o) + q[e] + g[e]; l = ((b << 30 | b >>> 2) ^ (b << 19 | b >>> 13) ^ (b << 10 | b >>> 22)) + (b & m ^ b & n ^ m & n); k = o; o = c; c = f; f = h + j | 0; h = n; n = m; m = b; b = j + l | 0 } a[0] = a[0] + b | 0; a[1] = a[1] + m | 0; a[2] = a[2] + n | 0; a[3] = a[3] + h | 0; a[4] = a[4] + f | 0; a[5] = a[5] + c | 0; a[6] = a[6] + o | 0; a[7] = a[7] + k | 0
    }, _doFinalize: function () {
        var c = this._data, d = c.words, a = 8 * this._nDataBytes,
b = 8 * c.sigBytes; d[b >>> 5] |= 128 << 24 - b % 32; d[(b + 64 >>> 9 << 4) + 15] = a; c.sigBytes = 4 * d.length; this._process()
    } 
    }); h.SHA256 = i._createHelper(c); h.HmacSHA256 = i._createHmacHelper(c)
})(Math);


// ASN.1 JavaScript decoder
// Copyright (c) 2008-2009 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// 
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
function Stream(a, d) { if (a instanceof Stream) { this.enc = a.enc; this.pos = a.pos } else { this.enc = a; this.pos = d } } Stream.prototype.get = function (a) { if (a == undefined) a = this.pos++; if (a >= this.enc.length) throw "Requesting byte offset " + a + " on a stream of length " + this.enc.length; return this.enc[a] }; Stream.prototype.hexDigits = "0123456789ABCDEF"; Stream.prototype.hexByte = function (a) { return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(a & 15) };
Stream.prototype.hexDump = function (a, d) { for (var b = "", c = a; c < d; ++c) { b += this.hexByte(this.get(c)); switch (c & 15) { case 7: b += "  "; break; case 15: b += "\n"; break; default: b += " " } } return b }; Stream.prototype.parseStringISO = function (a, d) { for (var b = "", c = a; c < d; ++c) b += String.fromCharCode(this.get(c)); return b };
Stream.prototype.parseStringUTF = function (a, d) { for (var b = "", c = 0, e = a; e < d; ) { c = this.get(e++); b += c < 128 ? String.fromCharCode(c) : c > 191 && c < 224 ? String.fromCharCode((c & 31) << 6 | this.get(e++) & 63) : String.fromCharCode((c & 15) << 12 | (this.get(e++) & 63) << 6 | this.get(e++) & 63) } return b }; Stream.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
Stream.prototype.parseTime = function (a, d) { var b = this.parseStringISO(a, d), c = this.reTime.exec(b); if (!c) return "Unrecognized time: " + b; b = c[1] + "-" + c[2] + "-" + c[3] + " " + c[4]; if (c[5]) { b += ":" + c[5]; if (c[6]) { b += ":" + c[6]; if (c[7]) b += "." + c[7] } } if (c[8]) { b += " UTC"; if (c[8] != "Z") { b += c[8]; if (c[9]) b += ":" + c[9] } } return b }; Stream.prototype.parseInteger = function (a, d) { var b = d - a; if (b > 4) { b <<= 3; var c = this.get(a); if (c == 0) b -= 8; else for (; c < 128; ) { c <<= 1; --b } return "(" + b + " bit)" } b = 0; for (c = a; c < d; ++c) b = b << 8 | this.get(c); return b };
Stream.prototype.parseBitString = function (a, d) { var b = this.get(a), c = (d - a - 1 << 3) - b, e = "(" + c + " bit)"; if (c <= 20) { var f = b; e += " "; for (b = d - 1; b > a; --b) { for (c = this.get(b); f < 8; ++f) e += c >> f & 1 ? "1" : "0"; f = 0 } } return e }; Stream.prototype.parseOctetString = function (a, d) { var b = d - a, c = "(" + b + " byte) "; if (b > 20) d = a + 20; for (var e = a; e < d; ++e) c += this.hexByte(this.get(e)); if (b > 20) c += String.fromCharCode(8230); return c };
Stream.prototype.parseOID = function (a, d) { for (var b, c = 0, e = 0, f = a; f < d; ++f) { var g = this.get(f); c = c << 7 | g & 127; e += 7; if (!(g & 128)) { if (b == undefined) b = parseInt(c / 40) + "." + c % 40; else b += "." + (e >= 31 ? "bigint" : c); c = e = 0 } b += String.fromCharCode() } return b }; function ASN1(a, d, b, c, e) { this.stream = a; this.header = d; this.length = b; this.tag = c; this.sub = e }
ASN1.prototype.typeName = function () {
    if (this.tag == undefined) return "unknown"; var a = this.tag & 31; switch (this.tag >> 6) {
        case 0: switch (a) {
                case 0: return "EOC"; case 1: return "BOOLEAN"; case 2: return "INTEGER"; case 3: return "BIT_STRING"; case 4: return "OCTET_STRING"; case 5: return "NULL"; case 6: return "OBJECT_IDENTIFIER"; case 7: return "ObjectDescriptor"; case 8: return "EXTERNAL"; case 9: return "REAL"; case 10: return "ENUMERATED"; case 11: return "EMBEDDED_PDV"; case 12: return "UTF8String"; case 16: return "SEQUENCE"; case 17: return "SET";
                case 18: return "NumericString"; case 19: return "PrintableString"; case 20: return "TeletexString"; case 21: return "VideotexString"; case 22: return "IA5String"; case 23: return "UTCTime"; case 24: return "GeneralizedTime"; case 25: return "GraphicString"; case 26: return "VisibleString"; case 27: return "GeneralString"; case 28: return "UniversalString"; case 30: return "BMPString"; default: return "Universal_" + a.toString(16)
            } case 1: return "Application_" + a.toString(16); case 2: return "[" + a + "]"; case 3: return "Private_" + a.toString(16)
    } 
};
ASN1.prototype.content = function () {
    if (this.tag == undefined) return null; if (this.tag >> 6 != 0) return this.sub == null ? null : "(" + this.sub.length + ")"; var a = this.tag & 31, d = this.posContent(), b = Math.abs(this.length); switch (a) {
        case 1: return this.stream.get(d) == 0 ? "false" : "true"; case 2: return this.stream.parseInteger(d, d + b); case 3: return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(d, d + b); case 4: return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(d, d + b); case 6: return this.stream.parseOID(d,
d + b); case 16: case 17: return "(" + this.sub.length + " elem)"; case 12: return this.stream.parseStringUTF(d, d + b); case 18: case 19: case 20: case 21: case 22: case 26: return this.stream.parseStringISO(d, d + b); case 23: case 24: return this.stream.parseTime(d, d + b)
    } return null
}; ASN1.prototype.toString = function () { return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub == null ? "null" : this.sub.length) + "]" };
ASN1.prototype.print = function (a) { if (a == undefined) a = ""; document.writeln(a + this); if (this.sub != null) { a += "  "; for (var d = 0, b = this.sub.length; d < b; ++d) this.sub[d].print(a) } }; ASN1.prototype.toPrettyString = function (a) { if (a == undefined) a = ""; var d = a + this.typeName() + " @" + this.stream.pos; if (this.length >= 0) d += "+"; d += this.length; if (this.tag & 32) d += " (constructed)"; else if ((this.tag == 3 || this.tag == 4) && this.sub != null) d += " (encapsulates)"; d += "\n"; if (this.sub != null) { a += "  "; for (var b = 0, c = this.sub.length; b < c; ++b) d += this.sub[b].toPrettyString(a) } return d };
ASN1.prototype.toDOM = function () {
    var a = document.createElement("div"); a.className = "node"; a.asn1 = this; var d = document.createElement("div"); d.className = "head"; var b = this.typeName().replace(/_/g, " "); d.innerHTML = b; var c = this.content(); if (c != null) { c = String(c).replace(/</g, "&lt;"); b = document.createElement("span"); b.className = "preview"; b.innerHTML = c; d.appendChild(b) } a.appendChild(d); this.node = a; this.head = d; var e = document.createElement("div"); e.className = "value"; b = "Offset: " + this.stream.pos + "<br/>"; b += "Length: " +
this.header + "+"; b += this.length >= 0 ? this.length : -this.length + " (undefined)"; if (this.tag & 32) b += "<br/>(constructed)"; else if ((this.tag == 3 || this.tag == 4) && this.sub != null) b += "<br/>(encapsulates)"; if (c != null) { b += "<br/>Value:<br/><b>" + c + "</b>"; if (typeof oids == "object" && this.tag == 6) if (c = oids[c]) { if (c.d) b += "<br/>" + c.d; if (c.c) b += "<br/>" + c.c; if (c.w) b += "<br/>(warning!)" } } e.innerHTML = b; a.appendChild(e); b = document.createElement("div"); b.className = "sub"; if (this.sub != null) { c = 0; for (e = this.sub.length; c < e; ++c) b.appendChild(this.sub[c].toDOM()) } a.appendChild(b);
    d.switchNode = a; d.onclick = function () { var f = this.switchNode; f.className = f.className == "node collapsed" ? "node" : "node collapsed" }; return a
}; ASN1.prototype.posStart = function () { return this.stream.pos }; ASN1.prototype.posContent = function () { return this.stream.pos + this.header }; ASN1.prototype.posEnd = function () { return this.stream.pos + this.header + Math.abs(this.length) }; ASN1.prototype.fakeHover = function (a) { this.node.className += " hover"; if (a) this.head.className += " hover" };
ASN1.prototype.fakeOut = function (a) { var d = / ?hover/; this.node.className = this.node.className.replace(d, ""); if (a) this.head.className = this.head.className.replace(d, "") }; ASN1.prototype.toHexDOM_sub = function (a, d, b, c, e) { if (!(c >= e)) { var f = document.createElement("span"); f.className = d; f.appendChild(document.createTextNode(b.hexDump(c, e))); a.appendChild(f) } };
ASN1.prototype.toHexDOM = function (a) {
    var d = document.createElement("span"); d.className = "hex"; if (a == undefined) a = d; this.head.hexNode = d; this.head.onmouseover = function () { this.hexNode.className = "hexCurrent" }; this.head.onmouseout = function () { this.hexNode.className = "hex" }; d.asn1 = this; d.onmouseover = function () { var f = !a.selected; if (f) { a.selected = this.asn1; this.className = "hexCurrent" } this.asn1.fakeHover(f) }; d.onmouseout = function () {
        var f = a.selected == this.asn1; this.asn1.fakeOut(f); if (f) {
            a.selected = null; this.className =
"hex"
        } 
    }; this.toHexDOM_sub(d, "tag", this.stream, this.posStart(), this.posStart() + 1); this.toHexDOM_sub(d, this.length >= 0 ? "dlen" : "ulen", this.stream, this.posStart() + 1, this.posContent()); if (this.sub == null) d.appendChild(document.createTextNode(this.stream.hexDump(this.posContent(), this.posEnd()))); else if (this.sub.length > 0) {
        var b = this.sub[0], c = this.sub[this.sub.length - 1]; this.toHexDOM_sub(d, "intro", this.stream, this.posContent(), b.posStart()); b = 0; for (var e = this.sub.length; b < e; ++b) d.appendChild(this.sub[b].toHexDOM(a));
        this.toHexDOM_sub(d, "outro", this.stream, c.posEnd(), this.posEnd())
    } return d
}; ASN1.decodeLength = function (a) { var d = a.get(), b = d & 127; if (b == d) return b; if (b > 3) throw "Length over 24 bits not supported at position " + (a.pos - 1); if (b == 0) return -1; for (var c = d = 0; c < b; ++c) d = d << 8 | a.get(); return d }; ASN1.hasContent = function (a, d, b) { if (a & 32) return true; if (a < 3 || a > 4) return false; var c = new Stream(b); a == 3 && c.get(); if (c.get() >> 6 & 1) return false; try { var e = ASN1.decodeLength(c); return c.pos - b.pos + e == d } catch (f) { return false } };
ASN1.decode = function (a) {
    a instanceof Stream || (a = new Stream(a, 0)); var d = new Stream(a), b = a.get(), c = ASN1.decodeLength(a), e = a.pos - d.pos, f = null; if (ASN1.hasContent(b, c, a)) { var g = a.pos; b == 3 && a.get(); f = []; if (c >= 0) { for (var h = g + c; a.pos < h; ) f[f.length] = ASN1.decode(a); if (a.pos != h) throw "Content size is not correct for container starting at offset " + g; } else try { for (; ; ) { h = ASN1.decode(a); if (h.tag == 0) break; f[f.length] = h } c = g - a.pos } catch (i) { throw "Exception while decoding undefined length content: " + i; } } else a.pos += c;
    return new ASN1(d, e, c, b, f)
}; ASN1.test = function () { for (var a = [{ value: [39], expected: 39 }, { value: [129, 201], expected: 201 }, { value: [131, 254, 220, 186], expected: 16702650}], d = 0, b = a.length; d < b; ++d) { var c = new Stream(a[d].value, 0); c = ASN1.decodeLength(c); c != a[d].expected && document.write("In test[" + d + "] expected " + a[d].expected + " got " + c + "\n") } };


// BigInteger
/*
* Copyright (c) 2003-2005  Tom Wu
* All Rights Reserved.
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,
* EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY
* WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.
*
* IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
* INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
* RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
* THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
* OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*
* In addition, the following condition applies:
*
* All redistributions must retain an intact copy of this copyright notice
* and disclaimer.
*/
//Address all questions regarding this license to:
//  Tom Wu
//  tjw@cs.Stanford.EDU
// Basic JavaScript BN library - subset useful for RSA encryption.
var dbits, canary = 244837814094590, j_lm = (canary & 16777215) == 15715070; function BigInteger(a, b, c) { if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c); else b == null && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b) } function nbi() { return new BigInteger(null) } function am1(a, b, c, d, e, f) { for (; --f >= 0; ) { var h = b * this[a++] + c[d] + e; e = Math.floor(h / 67108864); c[d++] = h & 67108863 } return e }
function am2(a, b, c, d, e, f) { var h = b & 32767; for (b >>= 15; --f >= 0; ) { var g = this[a] & 32767, i = this[a++] >> 15, m = b * g + i * h; g = h * g + ((m & 32767) << 15) + c[d] + (e & 1073741823); e = (g >>> 30) + (m >>> 15) + b * i + (e >>> 30); c[d++] = g & 1073741823 } return e } function am3(a, b, c, d, e, f) { var h = b & 16383; for (b >>= 14; --f >= 0; ) { var g = this[a] & 16383, i = this[a++] >> 14, m = b * g + i * h; g = h * g + ((m & 16383) << 14) + c[d] + e; e = (g >> 28) + (m >> 14) + b * i; c[d++] = g & 268435455 } return e }
if (j_lm && navigator.appName == "Microsoft Internet Explorer") { BigInteger.prototype.am = am2; dbits = 30 } else if (j_lm && navigator.appName != "Netscape") { BigInteger.prototype.am = am1; dbits = 26 } else { BigInteger.prototype.am = am3; dbits = 28 } BigInteger.prototype.DB = dbits; BigInteger.prototype.DM = (1 << dbits) - 1; BigInteger.prototype.DV = 1 << dbits; var BI_FP = 52; BigInteger.prototype.FV = Math.pow(2, BI_FP); BigInteger.prototype.F1 = BI_FP - dbits; BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz", BI_RC = [], rr, vv; rr = "0".charCodeAt(0); for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv; rr = "a".charCodeAt(0); for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv; rr = "A".charCodeAt(0); for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv; function int2char(a) { return BI_RM.charAt(a) } function intAt(a, b) { var c = BI_RC[a.charCodeAt(b)]; return c == null ? -1 : c } function bnpCopyTo(a) { for (var b = this.t - 1; b >= 0; --b) a[b] = this[b]; a.t = this.t; a.s = this.s }
function bnpFromInt(a) { this.t = 1; this.s = a < 0 ? -1 : 0; if (a > 0) this[0] = a; else if (a < -1) this[0] = a + DV; else this.t = 0 } function nbv(a) { var b = nbi(); b.fromInt(a); return b }
function bnpFromString(a, b) {
    var c; if (b == 16) c = 4; else if (b == 8) c = 3; else if (b == 256) c = 8; else if (b == 2) c = 1; else if (b == 32) c = 5; else if (b == 4) c = 2; else { this.fromRadix(a, b); return } this.s = this.t = 0; for (var d = a.length, e = false, f = 0; --d >= 0; ) { var h = c == 8 ? a[d] & 255 : intAt(a, d); if (h < 0) { if (a.charAt(d) == "-") e = true } else { e = false; if (f == 0) this[this.t++] = h; else if (f + c > this.DB) { this[this.t - 1] |= (h & (1 << this.DB - f) - 1) << f; this[this.t++] = h >> this.DB - f } else this[this.t - 1] |= h << f; f += c; if (f >= this.DB) f -= this.DB } } if (c == 8 && (a[0] & 128) != 0) {
        this.s =
-1; if (f > 0) this[this.t - 1] |= (1 << this.DB - f) - 1 << f
    } this.clamp(); e && BigInteger.ZERO.subTo(this, this)
} function bnpClamp() { for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a; ) --this.t }
function bnToString(a) { if (this.s < 0) return "-" + this.negate().toString(a); if (a == 16) a = 4; else if (a == 8) a = 3; else if (a == 2) a = 1; else if (a == 32) a = 5; else if (a == 4) a = 2; else return this.toRadix(a); var b = (1 << a) - 1, c, d = false, e = "", f = this.t, h = this.DB - f * this.DB % a; if (f-- > 0) { if (h < this.DB && (c = this[f] >> h) > 0) { d = true; e = int2char(c) } for (; f >= 0; ) { if (h < a) { c = (this[f] & (1 << h) - 1) << a - h; c |= this[--f] >> (h += this.DB - a) } else { c = this[f] >> (h -= a) & b; if (h <= 0) { h += this.DB; --f } } if (c > 0) d = true; if (d) e += int2char(c) } } return d ? e : "0" }
function bnNegate() { var a = nbi(); BigInteger.ZERO.subTo(this, a); return a } function bnAbs() { return this.s < 0 ? this.negate() : this } function bnCompareTo(a) { var b = this.s - a.s; if (b != 0) return b; var c = this.t; b = c - a.t; if (b != 0) return b; for (; --c >= 0; ) if ((b = this[c] - a[c]) != 0) return b; return 0 } function nbits(a) { var b = 1, c; if ((c = a >>> 16) != 0) { a = c; b += 16 } if ((c = a >> 8) != 0) { a = c; b += 8 } if ((c = a >> 4) != 0) { a = c; b += 4 } if ((c = a >> 2) != 0) { a = c; b += 2 } if (a >> 1 != 0) b += 1; return b }
function bnBitLength() { if (this.t <= 0) return 0; return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM) } function bnpDLShiftTo(a, b) { var c; for (c = this.t - 1; c >= 0; --c) b[c + a] = this[c]; for (c = a - 1; c >= 0; --c) b[c] = 0; b.t = this.t + a; b.s = this.s } function bnpDRShiftTo(a, b) { for (var c = a; c < this.t; ++c) b[c - a] = this[c]; b.t = Math.max(this.t - a, 0); b.s = this.s }
function bnpLShiftTo(a, b) { var c = a % this.DB, d = this.DB - c, e = (1 << d) - 1, f = Math.floor(a / this.DB), h = this.s << c & this.DM, g; for (g = this.t - 1; g >= 0; --g) { b[g + f + 1] = this[g] >> d | h; h = (this[g] & e) << c } for (g = f - 1; g >= 0; --g) b[g] = 0; b[f] = h; b.t = this.t + f + 1; b.s = this.s; b.clamp() }
function bnpRShiftTo(a, b) { b.s = this.s; var c = Math.floor(a / this.DB); if (c >= this.t) b.t = 0; else { var d = a % this.DB, e = this.DB - d, f = (1 << d) - 1; b[0] = this[c] >> d; for (var h = c + 1; h < this.t; ++h) { b[h - c - 1] |= (this[h] & f) << e; b[h - c] = this[h] >> d } if (d > 0) b[this.t - c - 1] |= (this.s & f) << e; b.t = this.t - c; b.clamp() } }
function bnpSubTo(a, b) { for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e; ) { d += this[c] - a[c]; b[c++] = d & this.DM; d >>= this.DB } if (a.t < this.t) { for (d -= a.s; c < this.t; ) { d += this[c]; b[c++] = d & this.DM; d >>= this.DB } d += this.s } else { for (d += this.s; c < a.t; ) { d -= a[c]; b[c++] = d & this.DM; d >>= this.DB } d -= a.s } b.s = d < 0 ? -1 : 0; if (d < -1) b[c++] = this.DV + d; else if (d > 0) b[c++] = d; b.t = c; b.clamp() }
function bnpMultiplyTo(a, b) { var c = this.abs(), d = a.abs(), e = c.t; for (b.t = e + d.t; --e >= 0; ) b[e] = 0; for (e = 0; e < d.t; ++e) b[e + c.t] = c.am(0, d[e], b, e, 0, c.t); b.s = 0; b.clamp(); this.s != a.s && BigInteger.ZERO.subTo(b, b) } function bnpSquareTo(a) { for (var b = this.abs(), c = a.t = 2 * b.t; --c >= 0; ) a[c] = 0; for (c = 0; c < b.t - 1; ++c) { var d = b.am(c, b[c], a, 2 * c, 0, 1); if ((a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV) { a[c + b.t] -= b.DV; a[c + b.t + 1] = 1 } } if (a.t > 0) a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1); a.s = 0; a.clamp() }
function bnpDivRemTo(a, b, c) {
    var d = a.abs(); if (!(d.t <= 0)) {
        var e = this.abs(); if (e.t < d.t) { b != null && b.fromInt(0); c != null && this.copyTo(c) } else {
            if (c == null) c = nbi(); var f = nbi(), h = this.s; a = a.s; var g = this.DB - nbits(d[d.t - 1]); if (g > 0) { d.lShiftTo(g, f); e.lShiftTo(g, c) } else { d.copyTo(f); e.copyTo(c) } d = f.t; e = f[d - 1]; if (e != 0) {
                var i = e * (1 << this.F1) + (d > 1 ? f[d - 2] >> this.F2 : 0), m = this.FV / i; i = (1 << this.F1) / i; var l = 1 << this.F2, k = c.t, n = k - d, j = b == null ? nbi() : b; f.dlShiftTo(n, j); if (c.compareTo(j) >= 0) { c[c.t++] = 1; c.subTo(j, c) } BigInteger.ONE.dlShiftTo(d,
j); for (j.subTo(f, f); f.t < d; ) f[f.t++] = 0; for (; --n >= 0; ) { var o = c[--k] == e ? this.DM : Math.floor(c[k] * m + (c[k - 1] + l) * i); if ((c[k] += f.am(0, o, c, n, 0, d)) < o) { f.dlShiftTo(n, j); for (c.subTo(j, c); c[k] < --o; ) c.subTo(j, c) } } if (b != null) { c.drShiftTo(d, b); h != a && BigInteger.ZERO.subTo(b, b) } c.t = d; c.clamp(); g > 0 && c.rShiftTo(g, c); h < 0 && BigInteger.ZERO.subTo(c, c)
            } 
        } 
    } 
} function bnMod(a) { var b = nbi(); this.abs().divRemTo(a, null, b); this.s < 0 && b.compareTo(BigInteger.ZERO) > 0 && a.subTo(b, b); return b } function Classic(a) { this.m = a }
function cConvert(a) { return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a } function cRevert(a) { return a } function cReduce(a) { a.divRemTo(this.m, null, a) } function cMulTo(a, b, c) { a.multiplyTo(b, c); this.reduce(c) } function cSqrTo(a, b) { a.squareTo(b); this.reduce(b) } Classic.prototype.convert = cConvert; Classic.prototype.revert = cRevert; Classic.prototype.reduce = cReduce; Classic.prototype.mulTo = cMulTo; Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() { if (this.t < 1) return 0; var a = this[0]; if ((a & 1) == 0) return 0; var b = a & 3; b = b * (2 - (a & 15) * b) & 15; b = b * (2 - (a & 255) * b) & 255; b = b * (2 - ((a & 65535) * b & 65535)) & 65535; b = b * (2 - a * b % this.DV) % this.DV; return b > 0 ? this.DV - b : -b } function Montgomery(a) { this.m = a; this.mp = a.invDigit(); this.mpl = this.mp & 32767; this.mph = this.mp >> 15; this.um = (1 << a.DB - 15) - 1; this.mt2 = 2 * a.t }
function montConvert(a) { var b = nbi(); a.abs().dlShiftTo(this.m.t, b); b.divRemTo(this.m, null, b); a.s < 0 && b.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(b, b); return b } function montRevert(a) { var b = nbi(); a.copyTo(b); this.reduce(b); return b }
function montReduce(a) { for (; a.t <= this.mt2; ) a[a.t++] = 0; for (var b = 0; b < this.m.t; ++b) { var c = a[b] & 32767, d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM; c = b + this.m.t; for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV; ) { a[c] -= a.DV; a[++c]++ } } a.clamp(); a.drShiftTo(this.m.t, a); a.compareTo(this.m) >= 0 && a.subTo(this.m, a) } function montSqrTo(a, b) { a.squareTo(b); this.reduce(b) } function montMulTo(a, b, c) { a.multiplyTo(b, c); this.reduce(c) } Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert; Montgomery.prototype.reduce = montReduce; Montgomery.prototype.mulTo = montMulTo; Montgomery.prototype.sqrTo = montSqrTo; function bnpIsEven() { return (this.t > 0 ? this[0] & 1 : this.s) == 0 } function bnpExp(a, b) { if (a > 4294967295 || a < 1) return BigInteger.ONE; var c = nbi(), d = nbi(), e = b.convert(this), f = nbits(a) - 1; for (e.copyTo(c); --f >= 0; ) { b.sqrTo(c, d); if ((a & 1 << f) > 0) b.mulTo(d, e, c); else { var h = c; c = d; d = h } } return b.revert(c) }
function bnModPowInt(a, b) { var c; c = a < 256 || b.isEven() ? new Classic(b) : new Montgomery(b); return this.exp(a, c) } BigInteger.prototype.copyTo = bnpCopyTo; BigInteger.prototype.fromInt = bnpFromInt; BigInteger.prototype.fromString = bnpFromString; BigInteger.prototype.clamp = bnpClamp; BigInteger.prototype.dlShiftTo = bnpDLShiftTo; BigInteger.prototype.drShiftTo = bnpDRShiftTo; BigInteger.prototype.lShiftTo = bnpLShiftTo; BigInteger.prototype.rShiftTo = bnpRShiftTo; BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo; BigInteger.prototype.squareTo = bnpSquareTo; BigInteger.prototype.divRemTo = bnpDivRemTo; BigInteger.prototype.invDigit = bnpInvDigit; BigInteger.prototype.isEven = bnpIsEven; BigInteger.prototype.exp = bnpExp; BigInteger.prototype.toString = bnToString; BigInteger.prototype.negate = bnNegate; BigInteger.prototype.abs = bnAbs; BigInteger.prototype.compareTo = bnCompareTo; BigInteger.prototype.bitLength = bnBitLength; BigInteger.prototype.mod = bnMod; BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0); BigInteger.ONE = nbv(1); function bnClone() { var a = nbi(); this.copyTo(a); return a } function bnIntValue() { if (this.s < 0) if (this.t == 1) return this[0] - this.DV; else { if (this.t == 0) return -1 } else if (this.t == 1) return this[0]; else if (this.t == 0) return 0; return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0] } function bnByteValue() { return this.t == 0 ? this.s : this[0] << 24 >> 24 } function bnShortValue() { return this.t == 0 ? this.s : this[0] << 16 >> 16 }
function bnpChunkSize(a) { return Math.floor(Math.LN2 * this.DB / Math.log(a)) } function bnSigNum() { return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1 } function bnpToRadix(a) { if (a == null) a = 10; if (this.signum() == 0 || a < 2 || a > 36) return "0"; var b = this.chunkSize(a); b = Math.pow(a, b); var c = nbv(b), d = nbi(), e = nbi(), f = ""; for (this.divRemTo(c, d, e); d.signum() > 0; ) { f = (b + e.intValue()).toString(a).substr(1) + f; d.divRemTo(c, d, e) } return e.intValue().toString(a) + f }
function bnpFromRadix(a, b) { this.fromInt(0); if (b == null) b = 10; for (var c = this.chunkSize(b), d = Math.pow(b, c), e = false, f = 0, h = 0, g = 0; g < a.length; ++g) { var i = intAt(a, g); if (i < 0) { if (a.charAt(g) == "-" && this.signum() == 0) e = true } else { h = b * h + i; if (++f >= c) { this.dMultiply(d); this.dAddOffset(h, 0); h = f = 0 } } } if (f > 0) { this.dMultiply(Math.pow(b, f)); this.dAddOffset(h, 0) } e && BigInteger.ZERO.subTo(this, this) }
function bnpFromNumber(a, b, c) { if ("number" == typeof b) if (a < 2) this.fromInt(1); else { this.fromNumber(a, c); this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this); for (this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(b); ) { this.dAddOffset(2, 0); this.bitLength() > a && this.subTo(BigInteger.ONE.shiftLeft(a - 1), this) } } else { c = []; var d = a & 7; c.length = (a >> 3) + 1; b.nextBytes(c); if (d > 0) c[0] &= (1 << d) - 1; else c[0] = 0; this.fromString(c, 256) } }
function bnToByteArray() { var a = this.t, b = []; b[0] = this.s; var c = this.DB - a * this.DB % 8, d, e = 0; if (a-- > 0) { if (c < this.DB && (d = this[a] >> c) != (this.s & this.DM) >> c) b[e++] = d | this.s << this.DB - c; for (; a >= 0; ) { if (c < 8) { d = (this[a] & (1 << c) - 1) << 8 - c; d |= this[--a] >> (c += this.DB - 8) } else { d = this[a] >> (c -= 8) & 255; if (c <= 0) { c += this.DB; --a } } if ((d & 128) != 0) d |= -256; e == 0 && (this.s & 128) != (d & 128) && ++e; if (e > 0 || d != this.s) b[e++] = d } } return b } function bnEquals(a) { return this.compareTo(a) == 0 } function bnMin(a) { return this.compareTo(a) < 0 ? this : a }
function bnMax(a) { return this.compareTo(a) > 0 ? this : a } function bnpBitwiseTo(a, b, c) { var d, e, f = Math.min(a.t, this.t); for (d = 0; d < f; ++d) c[d] = b(this[d], a[d]); if (a.t < this.t) { e = a.s & this.DM; for (d = f; d < this.t; ++d) c[d] = b(this[d], e); c.t = this.t } else { e = this.s & this.DM; for (d = f; d < a.t; ++d) c[d] = b(e, a[d]); c.t = a.t } c.s = b(this.s, a.s); c.clamp() } function op_and(a, b) { return a & b } function bnAnd(a) { var b = nbi(); this.bitwiseTo(a, op_and, b); return b } function op_or(a, b) { return a | b }
function bnOr(a) { var b = nbi(); this.bitwiseTo(a, op_or, b); return b } function op_xor(a, b) { return a ^ b } function bnXor(a) { var b = nbi(); this.bitwiseTo(a, op_xor, b); return b } function op_andnot(a, b) { return a & ~b } function bnAndNot(a) { var b = nbi(); this.bitwiseTo(a, op_andnot, b); return b } function bnNot() { for (var a = nbi(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b]; a.t = this.t; a.s = ~this.s; return a } function bnShiftLeft(a) { var b = nbi(); a < 0 ? this.rShiftTo(-a, b) : this.lShiftTo(a, b); return b }
function bnShiftRight(a) { var b = nbi(); a < 0 ? this.lShiftTo(-a, b) : this.rShiftTo(a, b); return b } function lbit(a) { if (a == 0) return -1; var b = 0; if ((a & 65535) == 0) { a >>= 16; b += 16 } if ((a & 255) == 0) { a >>= 8; b += 8 } if ((a & 15) == 0) { a >>= 4; b += 4 } if ((a & 3) == 0) { a >>= 2; b += 2 } (a & 1) == 0 && ++b; return b } function bnGetLowestSetBit() { for (var a = 0; a < this.t; ++a) if (this[a] != 0) return a * this.DB + lbit(this[a]); if (this.s < 0) return this.t * this.DB; return -1 } function cbit(a) { for (var b = 0; a != 0; ) { a &= a - 1; ++b } return b }
function bnBitCount() { for (var a = 0, b = this.s & this.DM, c = 0; c < this.t; ++c) a += cbit(this[c] ^ b); return a } function bnTestBit(a) { var b = Math.floor(a / this.DB); if (b >= this.t) return this.s != 0; return (this[b] & 1 << a % this.DB) != 0 } function bnpChangeBit(a, b) { var c = BigInteger.ONE.shiftLeft(a); this.bitwiseTo(c, b, c); return c } function bnSetBit(a) { return this.changeBit(a, op_or) } function bnClearBit(a) { return this.changeBit(a, op_andnot) } function bnFlipBit(a) { return this.changeBit(a, op_xor) }
function bnpAddTo(a, b) { for (var c = 0, d = 0, e = Math.min(a.t, this.t); c < e; ) { d += this[c] + a[c]; b[c++] = d & this.DM; d >>= this.DB } if (a.t < this.t) { for (d += a.s; c < this.t; ) { d += this[c]; b[c++] = d & this.DM; d >>= this.DB } d += this.s } else { for (d += this.s; c < a.t; ) { d += a[c]; b[c++] = d & this.DM; d >>= this.DB } d += a.s } b.s = d < 0 ? -1 : 0; if (d > 0) b[c++] = d; else if (d < -1) b[c++] = this.DV + d; b.t = c; b.clamp() } function bnAdd(a) { var b = nbi(); this.addTo(a, b); return b } function bnSubtract(a) { var b = nbi(); this.subTo(a, b); return b }
function bnMultiply(a) { var b = nbi(); this.multiplyTo(a, b); return b } function bnDivide(a) { var b = nbi(); this.divRemTo(a, b, null); return b } function bnRemainder(a) { var b = nbi(); this.divRemTo(a, null, b); return b } function bnDivideAndRemainder(a) { var b = nbi(), c = nbi(); this.divRemTo(a, b, c); return [b, c] } function bnpDMultiply(a) { this[this.t] = this.am(0, a - 1, this, 0, 0, this.t); ++this.t; this.clamp() }
function bnpDAddOffset(a, b) { for (; this.t <= b; ) this[this.t++] = 0; for (this[b] += a; this[b] >= this.DV; ) { this[b] -= this.DV; if (++b >= this.t) this[this.t++] = 0; ++this[b] } } function NullExp() { } function nNop(a) { return a } function nMulTo(a, b, c) { a.multiplyTo(b, c) } function nSqrTo(a, b) { a.squareTo(b) } NullExp.prototype.convert = nNop; NullExp.prototype.revert = nNop; NullExp.prototype.mulTo = nMulTo; NullExp.prototype.sqrTo = nSqrTo; function bnPow(a) { return this.exp(a, new NullExp) }
function bnpMultiplyLowerTo(a, b, c) { var d = Math.min(this.t + a.t, b); c.s = 0; for (c.t = d; d > 0; ) c[--d] = 0; var e; for (e = c.t - this.t; d < e; ++d) c[d + this.t] = this.am(0, a[d], c, d, 0, this.t); for (e = Math.min(a.t, b); d < e; ++d) this.am(0, a[d], c, d, 0, b - d); c.clamp() } function bnpMultiplyUpperTo(a, b, c) { --b; var d = c.t = this.t + a.t - b; for (c.s = 0; --d >= 0; ) c[d] = 0; for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b); c.clamp(); c.drShiftTo(1, c) }
function Barrett(a) { this.r2 = nbi(); this.q3 = nbi(); BigInteger.ONE.dlShiftTo(2 * a.t, this.r2); this.mu = this.r2.divide(a); this.m = a } function barrettConvert(a) { if (a.s < 0 || a.t > 2 * this.m.t) return a.mod(this.m); else if (a.compareTo(this.m) < 0) return a; else { var b = nbi(); a.copyTo(b); this.reduce(b); return b } } function barrettRevert(a) { return a }
function barrettReduce(a) { a.drShiftTo(this.m.t - 1, this.r2); if (a.t > this.m.t + 1) { a.t = this.m.t + 1; a.clamp() } this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3); for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0; ) a.dAddOffset(1, this.m.t + 1); for (a.subTo(this.r2, a); a.compareTo(this.m) >= 0; ) a.subTo(this.m, a) } function barrettSqrTo(a, b) { a.squareTo(b); this.reduce(b) } function barrettMulTo(a, b, c) { a.multiplyTo(b, c); this.reduce(c) } Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert; Barrett.prototype.reduce = barrettReduce; Barrett.prototype.mulTo = barrettMulTo; Barrett.prototype.sqrTo = barrettSqrTo;
function bnModPow(a, b) {
    var c = a.bitLength(), d, e = nbv(1), f; if (c <= 0) return e; else d = c < 18 ? 1 : c < 48 ? 3 : c < 144 ? 4 : c < 768 ? 5 : 6; f = c < 8 ? new Classic(b) : b.isEven() ? new Barrett(b) : new Montgomery(b); var h = [], g = 3, i = d - 1, m = (1 << d) - 1; h[1] = f.convert(this); if (d > 1) { c = nbi(); for (f.sqrTo(h[1], c); g <= m; ) { h[g] = nbi(); f.mulTo(c, h[g - 2], h[g]); g += 2 } } var l = a.t - 1, k, n = true, j = nbi(); for (c = nbits(a[l]) - 1; l >= 0; ) {
        if (c >= i) k = a[l] >> c - i & m; else { k = (a[l] & (1 << c + 1) - 1) << i - c; if (l > 0) k |= a[l - 1] >> this.DB + c - i } for (g = d; (k & 1) == 0; ) { k >>= 1; --g } if ((c -= g) < 0) {
            c += this.DB;
            --l
        } if (n) { h[k].copyTo(e); n = false } else { for (; g > 1; ) { f.sqrTo(e, j); f.sqrTo(j, e); g -= 2 } if (g > 0) f.sqrTo(e, j); else { g = e; e = j; j = g } f.mulTo(j, h[k], e) } for (; l >= 0 && (a[l] & 1 << c) == 0; ) { f.sqrTo(e, j); g = e; e = j; j = g; if (--c < 0) { c = this.DB - 1; --l } } 
    } return f.revert(e)
}
function bnGCD(a) { var b = this.s < 0 ? this.negate() : this.clone(); a = a.s < 0 ? a.negate() : a.clone(); if (b.compareTo(a) < 0) { var c = b; b = a; a = c } c = b.getLowestSetBit(); var d = a.getLowestSetBit(); if (d < 0) return b; if (c < d) d = c; if (d > 0) { b.rShiftTo(d, b); a.rShiftTo(d, a) } for (; b.signum() > 0; ) { if ((c = b.getLowestSetBit()) > 0) b.rShiftTo(c, b); if ((c = a.getLowestSetBit()) > 0) a.rShiftTo(c, a); if (b.compareTo(a) >= 0) { b.subTo(a, b); b.rShiftTo(1, b) } else { a.subTo(b, a); a.rShiftTo(1, a) } } d > 0 && a.lShiftTo(d, a); return a }
function bnpModInt(a) { if (a <= 0) return 0; var b = this.DV % a, c = this.s < 0 ? a - 1 : 0; if (this.t > 0) if (b == 0) c = this[0] % a; else for (var d = this.t - 1; d >= 0; --d) c = (b * c + this[d]) % a; return c }
function bnModInverse(a) {
    var b = a.isEven(); if (this.isEven() && b || a.signum() == 0) return BigInteger.ZERO; for (var c = a.clone(), d = this.clone(), e = nbv(1), f = nbv(0), h = nbv(0), g = nbv(1); c.signum() != 0; ) {
        for (; c.isEven(); ) { c.rShiftTo(1, c); if (b) { if (!e.isEven() || !f.isEven()) { e.addTo(this, e); f.subTo(a, f) } e.rShiftTo(1, e) } else f.isEven() || f.subTo(a, f); f.rShiftTo(1, f) } for (; d.isEven(); ) {
            d.rShiftTo(1, d); if (b) { if (!h.isEven() || !g.isEven()) { h.addTo(this, h); g.subTo(a, g) } h.rShiftTo(1, h) } else g.isEven() || g.subTo(a, g); g.rShiftTo(1,
g)
        } if (c.compareTo(d) >= 0) { c.subTo(d, c); b && e.subTo(h, e); f.subTo(g, f) } else { d.subTo(c, d); b && h.subTo(e, h); g.subTo(f, g) } 
    } if (d.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO; if (g.compareTo(a) >= 0) return g.subtract(a); if (g.signum() < 0) g.addTo(a, g); else return g; return g.signum() < 0 ? g.add(a) : g
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509], lplim = 67108864 / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(a) { var b, c = this.abs(); if (c.t == 1 && c[0] <= lowprimes[lowprimes.length - 1]) { for (b = 0; b < lowprimes.length; ++b) if (c[0] == lowprimes[b]) return true; return false } if (c.isEven()) return false; for (b = 1; b < lowprimes.length; ) { for (var d = lowprimes[b], e = b + 1; e < lowprimes.length && d < lplim; ) d *= lowprimes[e++]; for (d = c.modInt(d); b < e; ) if (d % lowprimes[b++] == 0) return false } return c.millerRabin(a) }
function bnpMillerRabin(a) { var b = this.subtract(BigInteger.ONE), c = b.getLowestSetBit(); if (c <= 0) return false; var d = b.shiftRight(c); a = a + 1 >> 1; if (a > lowprimes.length) a = lowprimes.length; for (var e = nbi(), f = 0; f < a; ++f) { e.fromInt(lowprimes[f]); var h = e.modPow(d, this); if (h.compareTo(BigInteger.ONE) != 0 && h.compareTo(b) != 0) { for (var g = 1; g++ < c && h.compareTo(b) != 0; ) { h = h.modPowInt(2, this); if (h.compareTo(BigInteger.ONE) == 0) return false } if (h.compareTo(b) != 0) return false } } return true } BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix; BigInteger.prototype.fromRadix = bnpFromRadix; BigInteger.prototype.fromNumber = bnpFromNumber; BigInteger.prototype.bitwiseTo = bnpBitwiseTo; BigInteger.prototype.changeBit = bnpChangeBit; BigInteger.prototype.addTo = bnpAddTo; BigInteger.prototype.dMultiply = bnpDMultiply; BigInteger.prototype.dAddOffset = bnpDAddOffset; BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo; BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo; BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin; BigInteger.prototype.clone = bnClone; BigInteger.prototype.intValue = bnIntValue; BigInteger.prototype.byteValue = bnByteValue; BigInteger.prototype.shortValue = bnShortValue; BigInteger.prototype.signum = bnSigNum; BigInteger.prototype.toByteArray = bnToByteArray; BigInteger.prototype.equals = bnEquals; BigInteger.prototype.min = bnMin; BigInteger.prototype.max = bnMax; BigInteger.prototype.and = bnAnd; BigInteger.prototype.or = bnOr; BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot; BigInteger.prototype.not = bnNot; BigInteger.prototype.shiftLeft = bnShiftLeft; BigInteger.prototype.shiftRight = bnShiftRight; BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit; BigInteger.prototype.bitCount = bnBitCount; BigInteger.prototype.testBit = bnTestBit; BigInteger.prototype.setBit = bnSetBit; BigInteger.prototype.clearBit = bnClearBit; BigInteger.prototype.flipBit = bnFlipBit; BigInteger.prototype.add = bnAdd; BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply; BigInteger.prototype.divide = bnDivide; BigInteger.prototype.remainder = bnRemainder; BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder; BigInteger.prototype.modPow = bnModPow; BigInteger.prototype.modInverse = bnModInverse; BigInteger.prototype.pow = bnPow; BigInteger.prototype.gcd = bnGCD; BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

// Prng4
//  Author: Tom Wu
//  tjw@cs.Stanford.EDU
// prng4.js - uses Arcfour as a PRNG
function Arcfour() { this.j = this.i = 0; this.S = [] } function ARC4init(b) { var a, c, d; for (a = 0; a < 256; ++a) this.S[a] = a; for (a = c = 0; a < 256; ++a) { c = c + this.S[a] + b[a % b.length] & 255; d = this.S[a]; this.S[a] = this.S[c]; this.S[c] = d } this.j = this.i = 0 } function ARC4next() { var b; this.i = this.i + 1 & 255; this.j = this.j + this.S[this.i] & 255; b = this.S[this.i]; this.S[this.i] = this.S[this.j]; this.S[this.j] = b; return this.S[b + this.S[this.i] & 255] } Arcfour.prototype.init = ARC4init; Arcfour.prototype.next = ARC4next;
function prng_newstate() { return new Arcfour } var rng_psize = 256;


// SecureRandom
//  Author: Tom Wu
//  tjw@cs.Stanford.EDU
// Random number generator - requires a PRNG backend, e.g. prng4.js
// For best results, put code like
// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
// in your main HTML document.
function SecureRandom() {
    this.rng_seed_int = function (a) { this.rng_pool[this.rng_pptr++] ^= a & 255; this.rng_pool[this.rng_pptr++] ^= a >> 8 & 255; this.rng_pool[this.rng_pptr++] ^= a >> 16 & 255; this.rng_pool[this.rng_pptr++] ^= a >> 24 & 255; if (this.rng_pptr >= rng_psize) this.rng_pptr -= rng_psize }; this.rng_seed_time = function () { this.rng_seed_int((new Date).getTime()) }; if (this.rng_pool == null) {
        this.rng_pool = []; this.rng_pptr = 0; var b; if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
            var d = window.crypto.random(32);
            for (b = 0; b < d.length; ++b) this.rng_pool[this.rng_pptr++] = d.charCodeAt(b) & 255
        } for (; this.rng_pptr < rng_psize; ) { b = Math.floor(65536 * Math.random()); this.rng_pool[this.rng_pptr++] = b >>> 8; this.rng_pool[this.rng_pptr++] = b & 255 } this.rng_pptr = 0; this.rng_seed_time()
    } this.rng_get_byte = function () {
        if (this.rng_state == null) {
            this.rng_seed_time(); this.rng_state = prng_newstate(); this.rng_state.init(this.rng_pool); for (this.rng_pptr = 0; this.rng_pptr < this.rng_pool.length; ++this.rng_pptr) this.rng_pool[this.rng_pptr] = 0; this.rng_pptr =
0
        } return this.rng_state.next()
    }; this.nextBytes = function (a) { var c; for (c = 0; c < a.length; ++c) a[c] = this.rng_get_byte() } 
};


CryptoJS.RSAEncrypt = function (AData, AKey) {
    function _getKeyParams(AKeyByteArray) {
        var oASN1Key = ASN1.decode(AKeyByteArray);

        var iaKeyINTEGER = [];

        function find(AASN1) {
            if (AASN1.tag == 2)
                iaKeyINTEGER.push(AASN1.stream.hexDump(AASN1.stream.pos + AASN1.header, AASN1.stream.pos + AASN1.length + AASN1.header).replace(/( )|(\n)/g, ''));

            if (AASN1.sub)
                for (var i = 0; i < AASN1.sub.length; i++)
                    find(AASN1.sub[i]);
        };

        find(oASN1Key);

        var keyParamKey = ['modulus', 'publicExponent', 'privateExponent', 'prime1', 'prime2', 'exponent1', 'exponent2', 'coefficient'];
        var keyParams = {};

        for (var i = 0; i < oASN1Key.length; i++)
            keyParams[keyParamKey[i]] = iaKeyINTEGER[i];

        return keyParams;
    }

    function _padForPKCS1(ADataByteArray, AModulus) {
        var baResult = [0, 2];
        var pos = (AModulus.bitLength() + 7) >> 3

        if (ADataByteArray.length + 11 > pos)
            throw '要處理的資料過長!';

        for (var i = 0; i < ADataByteArray.length; i++)
            baResult[--pos] = ADataByteArray[i];

        baResult[--pos] = 0;

        var oSR = new SecureRandom();
        while (pos > 2) {
            var temp = [0];
            do {
                oSR.nextBytes(temp);
            } while (temp[0] == 0);
            baResult[--pos] = temp[0];
        }

        return baResult;
    }

    function _rsaEncrypt(ADataWordArray, AKey) {
        var baData = [];
        if (typeof ADataWordArray == 'string')
            baData = CryptoJS.enc.Utf8.parse(ADataWordArray).toByteArray();
        else
            baData = ADataWordArray;

        var oKeyParams = _getKeyParams(CryptoJS.enc.Base64.parse(AKey).toByteArray());

        if (!oKeyParams.modulus || !oKeyParams.publicExponent)
            throw '不正確的 RSA 公鑰!';

        var iModulus = new BigInteger(oKeyParams.modulus, 16);
        var iPublicExponent = parseInt(oKeyParams.publicExponent, 16);

        var iData = new BigInteger(_padForPKCS1(baData, iModulus));
        var sHexEncryptData = iData.modPowInt(iPublicExponent, iModulus).toString(16);
        if (sHexEncryptData.length % 2 == 1)
            sHexEncryptData = '0' + sHexEncryptData;

        var sB64EncryptData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(sHexEncryptData));

        return sB64EncryptData;
    }

    var waAESKey = CryptoJS.SHA256(CryptoJS.lib.WordArray.random(100));
    var waAESIV = CryptoJS.MD5(CryptoJS.lib.WordArray.random(100));

    var baKeyAndIV = waAESKey.toByteArray().concat(waAESIV.toByteArray());

    return {
        key: _rsaEncrypt(baKeyAndIV, AKey)
        , encryptData: CryptoJS.enc.Base64.stringify(CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(AData), waAESKey, { iv: waAESIV }).ciphertext)
    };
}