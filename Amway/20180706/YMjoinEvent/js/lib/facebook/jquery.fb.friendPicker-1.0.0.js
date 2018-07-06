/// <reference path="../../config.js" />

/*
Friend Picker ver 0.0.0.1e
event:
	item-click
	item-double-click
	item-picked
	item-unpicked
	item-over-pick
	after-search
	list-ready
*/

/*
使用範例:

HTML:
<link href="css/friendPicker.css" rel="stylesheet" type="text/css" />
<div id="x-friend-picker"></div>

JS:
$$('fb, friendPicker', function () {
    $.fb.init().done(function () {
        $.fb.getLoginStatus().always(function (AResponse) {
            $('#x-friend-picker').on('item-picked', function (event, item) {
                console.log($(item).data('fid'), $(item).data('fname'));
            }).friendPicker({});
        });
    });
});

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'tinyscrollbar'], factory) : factory(jQuery);
} (function ($) {
    var methods = {
        init: function (settings) {
            var _settings = $.extend(true, {}, $.fn.friendPicker.settings, settings);

            return this.each(function () {
                var box = this;
                var me = $(this).data('settings', _settings);

                $.each('itemClick itemDoubleClick itemPicked itemUnpicked itemOverPick listReady afterSearch ready'.split(' '), function (i, v) {
                    var e = v.replace(/[A-Z]/g, function (x) { return '-' + x.toLowerCase(); });
                    if ($.isFunction(_settings[v])) {
                        me.on(e, _settings[v]);
                    }
                });

                //init html
                var $container = $(this).empty();
                var $friendBox = $('<div class="' + _settings.frienBoxClass + '">');

                if (_settings.customScroll) {
                    $container.append('<div class="searchbox clearfix"><span>朋友搜尋</span> <input type="text" class="' + _settings.searchBoxClass + '" /></div>')
						.append('<div class="scroll"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>');
                    $('.overview').append($friendBox);
                    $container.find('.scroll').tinyscrollbar();
                }
                else {
                    $container.append('<input type="text" class="' + _settings.searchBoxClass + '" placeholder="朋友搜尋" />')
							.append($friendBox);
                }

                $container.data('friendBox', $friendBox)
				.on('click', '.' + _settings.itemClass, function (event) {
				    if (_settings.multiSelect) {
				        var $item = $(this);
				        var $pickedItems = methods['getPickedItems'].apply($container, Array.prototype.slice.call(arguments, 1));

				        if (_settings.max == 1 && $pickedItems.length > 0) {
				            if (!$item.hasClass('picked')) {
				                $($pickedItems[0]).removeClass('picked');
				                $item.addClass('picked');
				                me.trigger('item-picked', [this]);
				            }
				            else {
				                $item.removeClass('picked');
				                me.trigger('item-unpicked', [this]);
				            }
				        }
				        else if ($item.hasClass(_settings.pickedClass) || $pickedItems.length < _settings.max) {
				            if (!$item.hasClass('picked')) {
				                $item.addClass('picked');
				                me.trigger('item-picked', [this]);
				            }
				            else {
				                $item.removeClass('picked');
				                me.trigger('item-unpicked', [this]);
				            }
				        }
				        else {
				            me.trigger('item-over-pick', [this]);
				        }
				    }
				    else {
				        if ($.isFunction(_settings.itemClick)) { return _settings.itemClick.call(box, event); }
				        me.trigger('item-click', [this]);
				    }
				})
				.on('dblclick', '.' + _settings.itemClass, function (event) {
				    me.trigger('item-double-click', [this]);
				})
				.on('mouseenter', '.' + _settings.itemClass, function () {
				    $(this).addClass(_settings.mouseenterClass);
				})
				.on('mouseleave', '.' + _settings.itemClass, function () {
				    $(this).removeClass(_settings.mouseenterClass);
				})
				.on('keyup blur focus', '.' + _settings.searchBoxClass, function () {
				    var v = $(this).val().toLowerCase();
				    var s = $container.find('.' + _settings.itemClass).filter(function () {
				        var $item = $(this);
				        var b = $item.text().toLowerCase().indexOf(v) > -1;
				        $item.toggle(b);
				        return b;
				    }).size();
				    if (s != $container.data('last-count')) {
				        $container.data('last-count', s);
				        me.trigger('after-search', [this]);
				    }
				    if (_settings.customScroll)
				        $container.find('.scroll').tinyscrollbar_update();
				})
				.trigger('ready');

                //load friends from Facebook api
                methods['refresh'].apply(this, Array.prototype.slice.call(arguments, 1));

            });
        },

        refresh: function () {
            var me = $(this);
            var _settings = me.data('settings');
            var $friendBox = me.data('friendBox');
            if (_settings && $friendBox) {
                $friendBox.empty().append($('<div class="' + _settings.loadingClass + '"/>'));
                var pic = 'pic' + (_settings.avatarType == '' ? '' : '_' + _settings.avatarType);
                FB.api('/fql', { q: 'select name, uid, ' + pic + ' from user where uid in (select uid2 from friend where uid1 = me()) order by name limit ' + ~ ~_settings.friendLimit }, function (response) {
                    if ((!response || response.error) && console) { return console.log(response.error.message); }
                    var $ul = $('<ul class="' + _settings.ulClass + '">');

                    var def = $.Deferred();

                    if (_settings.recentlyFirst) {
                        var t = setTimeout(function () { def.resolve({}); }, _settings.recentlyTimeout * 1000);
                        FB.api('me/posts?limit=' + _settings.recentlyLimit, function (d) {
                            clearTimeout(t);
                            var recent = {};
                            $.each((d || {}).data || [], function (i, o) {
                                o = o || {};
                                var d = o.likes || {};
                                $.each(d.data || [], function (i, o) {
                                    var id = o.id || '0';
                                    var tmp = recent[id] || { id: id, cnt: 0 };
                                    tmp.cnt++;
                                    recent[id] = tmp;
                                });
                                d = o.comments || {};
                                $.each(d.data || [], function (i, o) {
                                    o = o || {};
                                    o.form = o.form || {};
                                    var id = o.from.id || '0';
                                    var tmp = recent[id] || { id: id, cnt: 0 };
                                    tmp.cnt++;
                                    recent[id] = tmp;
                                });
                            });
                            def.resolve(recent);
                        });
                    } else {
                        def.resolve({});
                    }

                    def.done(function (recent) {
                        $.each(response.data || [], function (index, o) {
                            var li = $('<li />').addClass(_settings.itemClass).data('fid', o.uid).data('fname', o.name)
								.append($('<img />').attr({ alt: o.uid, src: o[pic] }).addClass(_settings.avatarClass))
								.append($('<div />').text(o.name).addClass(_settings.nameClass));
                            var o = recent[this.uid];
                            if (o) {
                                o.li = li.addClass('recently');
                            } else {
                                li.appendTo($ul);
                            }
                        });
                        recent = $.map(recent, function (o, i) { if (o.li) { return o; } });
                        recent.sort(function (a, b) { return b.cnt - a.cnt });
                        $ul.prepend($.map(recent, function (o, i) { return o.li }))
							.appendTo($friendBox.empty());
                        me.trigger('list-ready');
                        if (_settings.customScroll)
                            me.find('.scroll').tinyscrollbar_update();
                    });

                });
            }
        },

        getItems: function () {
            var _settings = $(this).data('settings');
            var $friendBox = $(this).data('friendBox');
            return $friendBox.find('li');
        },
        getPickedItems: function () {
            var _settings = $(this).data('settings');
            var $friendBox = $(this).data('friendBox');
            return $friendBox.find('.' + _settings.pickedClass);
        },
        destroy: function () {
            return $(this).empty();
        }
    };

    $.fn.friendPicker = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.friendPicker');
        }
    };

    $.fn.friendPicker.settings = {
        frienBoxClass: 'friends',
        ulClass: 'clearfix',
        searchBoxClass: 'search',
        pickedClass: 'picked',
        avatarClass: 'avatar',
        avatarType: 'square',
        itemClass: 'item',
        nameClass: 'name',
        mouseenterClass: 'select',
        loadingClass: 'loading',
        max: 1, // 最多可選
        multiSelect: true, // 多選
        friendLimit: 3000,
        recentlyFirst: false, // 常互動的放前面
        recentlyLimit: 100,  // 常互動篇數限制
        recentlyTimeout: 15, // 超過秒數沒回應就不顯示常互動
        customScroll: true //產生tinyscrollbar需要的element
    };
}));
