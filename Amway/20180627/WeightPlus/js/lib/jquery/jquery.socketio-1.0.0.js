/// <reference path="../../config.js" />

/*
Sample:

$$('socketio', function () {
    // 載入js
    $.socketio();

    ....
    ....

    // 要接收的訊息
    $.socketio.bind({
        'test1': function (data) { console.log('test1', data); }
        , 'test2': function (data) { console.log('test2', data); }
        , 'test3': function (data) { console.log('test3', data); }
    });

    // 連接 socket.io Server
    // Param1: Connect 後 callback
    // Param2: Disconnect 後 callback
    $.socketio.connect(
        function () {
            console.log('connect', $.socketio.getID());
        }
        , function () {
            console.log('disconnect');
        }
    );
});
*/

/*
Sample 傳送訊息
$.socketio.sendTo(AToID, AMsg, AData)
Params:
    AToID: string -> 對方的 SocketID
    AMsg: string -> 訊息名稱
    AData: int, string, json -> 要傳送的資料
例如:
    $.socketio.sendTo('4g_N6K5mhX1D2qlkAAXw', 'test2', { aa: 2});
*/



(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'extend'], factory) : factory(jQuery);
} (function () {
    function _log() { if (!CONST.isRelease) console.log.apply(console, Array.prototype.slice.call(arguments, 0)); }

    var _io = null;

    var _defLoad = $.Deferred();
    var _defConnect = $.Deferred();

    $.socketio = function (ASettings) {
        $.extend($.socketio.settings, ASettings);

        require([$.socketio.settings.ioServer + '/socket.io/socket.io.js'], function (io) {
            _io = io;
            _defLoad.resolve();
        });
    };

    $.socketio.connect = function (AConnect, ADisconnect) {
        _defLoad.done(function () {
            try {
                _socket = _io($.socketio.settings.ioServer + '/' + $.socketio.settings.ioServerNS);

                _socket.on('connect', function () {
                    _log('socket.io', 'connect', $.socketio.getID());

                    if (AConnect) AConnect();
                });

                _socket.on('disconnect', function () {
                    _log('socket.io', 'disconnect');

                    if (ADisconnect) ADisconnect();
                });

                _defConnect.resolve();
            } catch (ex) {
                _log('socket.io', 'connect_error', ex);
            }
        });
    };

    $.socketio.getID = function () {
        return (_socket) ? _socket.io.engine.id : null;
    };

    $.socketio.bind = function (AMsgAFunMapObj) {
        _defConnect.done(function () {
            $.each(AMsgAFunMapObj, function (k, v) {
                _socket.on(k, v);
            });
        });
    };

    $.socketio.sendTo = function (AToID, AMsg, AData) {
        _log('socket.io', 'send', AToID, AMsg, AData);

        _socket.emit('sendTo', { ns: $.socketio.settings.ioServerNS, msg: AMsg, to: AToID, data: AData });
    };

    $.socketio.settings = {
        ioServer: CONST.ioServer
        , ioServerNS: CONST.ioServerNS
    };


}));