/// <reference path="../../config.js" />

/*
使用範例:

HTML:
<link href="css/photoPicker.css" rel="stylesheet" type="text/css" />
<div id="x-photo-picker"></div>

JS:
$$('fb, photoPicker', function () {
    $.fb.init().done(function () {
        $.fb.getLoginStatus().always(function (AResponse) {
            $('#x-photo-picker').photoPicker({
                photoSelected: function (t) {
                    console.log($(this).data('src_big'));
                }
            });
        });
    });
});

*/

(function (factory) {
    typeof define === 'function' && define.amd ? define(['jquery', 'tinyscrollbar'], factory) : factory(jQuery);
} (function ($) {
    $.fn.photoPicker = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.photoPicker');
        }
    };

    $.fn.photoPicker.defaultSettings = {
        albumUseBackground: true,
        photoUseBackground: true,
        albumPageSize: 1000,
        photoPageSize: 5000,
        albumImageType: 'album', //thumbnail, small, album
        photoImageType: 'thumbnail', //thumbnail, album, normal
        loadingPic: '//www.facebook.com/images/loaders/indicator_blue_large.gif',
        albumPrevText: '&laquo;prev',
        albumNextText: 'next&raquo',
        photoNextText: '&laquo;prev',
        photoNextText: 'next&laquo;',
        albumSelected: function () { },
        prevAlbumPage: function () { },
        nextAlbumPage: function () { },
        photoSelected: function () { },
        prevPhotoPage: function () { },
        nextPhotoPage: function () { }
    };

    var methods =
	{
	    init: function (settings) {
	        var _settings = $.extend({}, $.fn.photoPicker.defaultSettings, settings);
	        var _state = {
	            currentAlbumPage: 1,
	            maxAlbumPage: 1,
	            currentPhotoPage: 1,
	            maxPhotoPage: 1
	        };

	        var _handler = function () {
	            var _this = this;
	            var $container = $(_this).empty()
					.data('settings', _settings)
					.data('state', _state);
	            //init html

	            var $albumArea = $('<div class="album-area"/>').append('<div class="scroll"><div class="scrollbar"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>').appendTo($container);
	            $('.album-area .overview').append('<ul class="albums"/>').append('<a class="album-prev" href="#">prev</a>').append('<a class="album-next" href="#">next</a>');
	            $(this).data('albumArea', $albumArea);
	            var $photoArea = $('<div class="photo-area"/>').append('<div class="scroll"><div class="scrollbar disable"><div class="track"><div class="thumb"><div class="end"></div></div></div></div><div class="viewport"><div class="overview"></div></div></div>').appendTo($container);
	            $('.photo-area .overview').append('<ul class="photos"/>').append('<a class="photo-prev" href="#">prev</a>').append('<a class="photo-next" href="#">next</a>');
	            $(this).data('photoArea', $photoArea);


	            $albumArea.find('.scroll').tinyscrollbar();
	            $photoArea.find('.scroll').tinyscrollbar();

	            $container.on('click', '.album-prev', function (event) {
	                event.preventDefault();
	                var state = $container.data('state');
	                if (state.currentAlbumPage > 1) {
	                    if (jQuery.isFunction(_settings.prevAlbumPage)) { _settings.prevAlbumPage.call(this, event); }
	                    state.currentAlbumPage -= 1;
	                    __renderAlbums($container);
	                }
	            })
				.on('click', '.album-next', function (event) {
				    event.preventDefault();
				    var state = $container.data('state');
				    if (state.currentAlbumPage < state.maxAlbumPage) {
				        if (jQuery.isFunction(_settings.nextAlbumPage)) { _settings.nextAlbumPage.call(this, event); }
				        state.currentAlbumPage += 1;
				        __renderAlbums($container);
				    }
				})
				.on('click', '.album-area .albums li', function (event) {
				    event.preventDefault();
				    var state = $container.data('state');
				    var albumID = $(this).data('aid');
				    $(this).siblings().removeClass('active').end().addClass('active');
				    if (jQuery.isFunction(_settings.albumSelected)) { _settings.albumSelected.call(this, event); }
				    __refreshPhotos($container, albumID);
				})
				.on('click', '.photo-prev', function (event) {
				    event.preventDefault();
				    var state = $container.data('state');
				    if (state.currentPhotoPage > 1) {
				        if (jQuery.isFunction(_settings.prevPhotoPage)) { _settings.prevPhotoPage.call(this, event); }
				        state.currentPhotoPage -= 1;
				        __renderPhotos($container);
				    }
				})
				.on('click', '.photo-next', function (event) {
				    event.preventDefault();
				    var state = $container.data('state');
				    if (state.currentPhotoPage < state.maxPhotoPage) {
				        if (jQuery.isFunction(_settings.nextPhotoPage)) { _settings.nextPhotoPage.call(this, event); }
				        state.currentPhotoPage += 1;
				        __renderPhotos($container);
				    }
				})
				.on('click', '.photo-area .photos li', function (event) {
				    event.preventDefault();
				    $(this).siblings().removeClass('active').end().addClass('active');
				    if (jQuery.isFunction(_settings.photoSelected)) { _settings.photoSelected.call(this, event); }
				});


	            FB.getLoginStatus(function (response) {
	                if (response.status == 'connected') {
	                    $container.data('access_token', encodeURIComponent(response.authResponse.accessToken));
	                    methods['refresh'].apply(_this, Array.prototype.slice.call(arguments, 1));
	                }
	            });

	        };
	        return this.each(_handler);
	    },

	    refresh: function () {
	        var $container = $(this);
	        var _settings = $container.data('settings');
	        var state = $container.data('state');
	        var $albumArea = $container.data('albumArea');
	        var $photoArea = $container.data('photoArea');

	        FB.api('/fql', { q: 'select aid, cover_pid, name from album where owner = me()' }, function (albums) {
	            if (albums && !albums.error) {
	                albums = albums.data;
	                state.maxAlbumPage = Math.ceil(albums.length / _settings.albumPageSize);
	                if (albums.length > 0) {
	                    state.currentAlbumPage = 1
	                    $container.data('albums', albums);
	                    FB.api('/fql', { q: 'select pid, src_small from photo where pid in (select cover_pid from album where owner = me())' }, function (covers) {
	                        if (covers && !covers.error) {
	                            covers = covers.data;
	                            var dic = {};
	                            console.log()
	                            $.each(covers, function (i, v) {
	                                dic[v.pid] = v.src_small;
	                            });
	                            $container.data('covers', dic);

	                            __renderAlbums($container);
	                        }
	                        else {
	                            if (console) { console.log(covers.error.message); }
	                        }
	                    });
	                }
	                else {
	                    state.currentAlbumPage = 0;
	                }
	            }
	            else {
	                if (console) { console.log(albums.error.message); }
	            }
	        });
	    },

	    getAlbums: function () {
	        var $container = $(this);
	        return $container.data('albums');
	    },
	    getPhotos: function () {
	        var $container = $(this);
	        var _settings = $container.data('settings');

	    },
	    destroy: function () {
	        return $(this).empty();
	    }
	};

    var __renderAlbums = function ($container) {
        var _settings = $container.data('settings');
        var state = $container.data('state');
        var access_token = $container.data('access_token');
        var albumPageSize = _settings.albumPageSize;
        var albums = $container.data('albums');
        var covers = $container.data('covers');
        var $albumUL = $container.data('albumArea').find('ul.albums').empty();

        var start = (albumPageSize * (state.currentAlbumPage - 1));
        var end = start + albumPageSize;
        //		console.log(state.currentAlbumPage);
        //		console.log('start:' + start);
        //		console.log('end:' + end);
        var currentPageAlbums = albums.slice(start, end);
        $(currentPageAlbums).each(function (index, o) {
            if (!covers[o.cover_pid]) return true;

            img_src = covers[o.cover_pid] || '//www.facebook.com/images/photos/empty-album.png';

            var $li = $('<li/>').data('aid', o.aid)

            if (_settings.albumUseBackground) {
                $li.append($('<div class="item"/>').css('background-image', 'url(' + img_src + ')'));
            } else {
                $li.append($('<img/>').attr('src', img_src));
            }
            $albumUL.append($li.append($('<span class="alubmName"/>').text(this.name)));
        });
        $container.find('.album-area .scroll').tinyscrollbar_update();
        if (currentPageAlbums.length > 0)
            $container.find('.album-area .albums li:eq(0)').click();
    }

    var __refreshPhotos = function ($container, albumID) {
        var _settings = $container.data('settings');
        var state = $container.data('state');
        var $photoArea = $container.data('photoArea');
        $photoArea.css('background', '#fff no-repeat url(' + _settings.loadingPic + ') center center').find('ul.photos').empty();

        FB.api('/fql', { q: 'select pid, src_small,src_big,src,caption from photo where aid = "' + albumID + '" limit ' + ~ ~_settings.photoPageSize }, function (response) {
            if (response && !response.error) {
                var photos = response.data;

                $container.data('photos', photos);
                state.maxPhotoPage = Math.ceil(photos.length / _settings.photoPageSize);
                if (photos.length > 0) {
                    state.currentPhotoPage = 1
                    __renderPhotos($container);
                } else {
                    state.currentPhotoPage = 0;
                }
            }
            else {
                if (window.console) { console.log(response.error.message); }
            }
        });

    }
    var __renderPhotos = function ($container) {
        var _settings = $container.data('settings');
        var state = $container.data('state');
        var access_token = $container.data('access_token');
        var photoPageSize = _settings.photoPageSize;
        var photos = $container.data('photos');
        var $photoUL = $container.data('photoArea').css('background-image', 'none').find('ul.photos').empty();

        var start = (photoPageSize * (state.currentPhotoPage - 1));
        var end = start + photoPageSize;
        var currentPagePhotos = photos.slice(start, end);
        $(currentPagePhotos).each(function (index, o) {
            var img_src = o.src_small;
            var $li = $('<li/>').data('src_big', o.src_big);
            if (_settings.photoUseBackground) {
                $li.append($('<div class="item"/>').css('background-image', 'url(' + img_src + ')'));
            } else {
                $li.append($('<img/>').attr('src', img_src))
            }

            $photoUL.append($li);
        });
        $container.find('.photo-area .scroll').tinyscrollbar_update();
    }

}));