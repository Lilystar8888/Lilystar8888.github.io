/// <reference path="facebook-1.0.7.js" />

(function(factory) {
	typeof define === 'function' && define.amd ? define(['jquery', 'fb'], factory) : factory(jQuery);
}(function() {

	$.fb.fbapi = {
		_api: function(AName, AApi, AParams, ADoneFun, AFailFun) {
			var oDeferred = $.Deferred();

			$.fb.init().done(function() {
				$.fb.api(AApi, AParams)
					.done(function(AResponse) {
						ADoneFun(AResponse, oDeferred);
					})
					.fail(function(AErrMsg, AErr) {
						AFailFun(AErrMsg, AErr, oDeferred);
					});
			});

			var oPromise = oDeferred.promise();
			oPromise['ResultName'] = AName;
			return oPromise;
		},

		_fql: function(AName, AFQL, ADoneFun, AFailFun) {
			return this._api(AName, '/fql', { q: AFQL }, ADoneFun, AFailFun);
		},

		// 名稱，若無參數則回傳自己的名字
		// 有參數 傳回 [ {id,name} ]
		// kv : boolean , 以 key(id) value(name) 方式回傳
		name : function(ids, kv) {
			var qme = (arguments.length == 0 || ids == null || ids.length == 0)
			var fql = qme
				? 'select name from user where uid = me()'
				: 'select uid, name from user where uid in ('+ids.join(',')+')';

			return this._fql('name', fql, function(AResponse, ADeferred) {
				if (qme) {
					ADeferred.resolve($.val(AResponse,'data.0.name'))
				} else if (kv) {
					var ls = {};
					$.each(AResponse.data, function(i,o){ ls[o.uid] = o.name; });
					ADeferred.resolve(ls);
				} else {
					ADeferred.resolve(AResponse.data);
				}
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(qme ? '' : []); });
		},

		pictureUrl : function(id, param) {
			if (typeof(id)!==typeof('')&&typeof(id)!==typeof(1)) {
				param = id;
				id = FB.getUserID();
			}
			return '//graph.facebook.com/'+id+'/picture?'+$.param(param||{});
		},

		get: function() {
			var oResult = {};
			var oStatus = {};

			$(arguments).each(function(i, v) {
				oResult[v.ResultName] = 0;
				oStatus[v.ResultName] = 'running';
			});

			$(arguments).each(function(i, v) {
				v.done(function(AResult) {
					oResult[v.ResultName] = AResult;
					oStatus[v.ResultName] = 'ok';
				})
				.fail(function(AErrMsg, AErr, ADeferred) {
					oStatus[v.ResultName] = AErrMsg;
				});
			});

			return {
				result: oResult,
				status: oStatus,
				check: function() {
					for (var key in oStatus)
						if (oStatus[key] == 'running')
							return false;
					return true;
				}
			};
		},

		// 朋友數
		getFirendCount: function() {
			var sFQL = 'select uid2 from friend where uid1 = me()';

			return this._fql('getFirendCount', sFQL, function(AResponse, ADeferred) {
				ADeferred.resolve(AResponse.data ? AResponse.data.length : 0);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		// 朋友是粉絲數
		getFriendWhosFanCount: function(APageID) {
			var sFQL = 'select uid from page_fan where page_id = ' + APageID + ' AND uid in (select uid2 from friend where uid1 = me())';

			return this._fql('getFriendWhosFanCount', sFQL, function(AResponse, ADeferred) {
				ADeferred.resolve(AResponse.data ? AResponse.data.length : 0);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		// 加入酒類相關或競品粉絲團的數目
		getJoinCompetingProductCount: function(APageIDs) {
			var sPageIDs = APageIDs.join(',');
			var sFQL = 'select uid from page_fan where page_id in (' + sPageIDs + ') AND uid = me()';

			return this._fql('getJoinCompetingProductCount', sFQL, function(AResponse, ADeferred) {
				ADeferred.resolve(AResponse.data ? AResponse.data.length : 0);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		// 過去N篇有在指定地點打卡的次數
		getCheckinCount: function(APlaces, ALimit) {
			var sFQL = 'SELECT place FROM stream  WHERE source_id = me() and with_location > 0 limit ' + ALimit;

			return this._fql('getCheckinCount', sFQL, function(AResponse, ADeferred) {
				var result = 0;
				if (AResponse.data) {
					$(AResponse.data).each(function(i, v) {
						if ($.inArray('' + v.place, APlaces) > -1)
							result++;
					});
				}
				ADeferred.resolve(result);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		// 過去N篇塗鴉牆提到關鍵字的次數
		getKeywordMentionedCount: function(AKeywords, ALimit) {
			return this._api('getKeywordMentionedCount', '/me/statuses', { fields: 'message', limit: ALimit }, function(AResponse, ADeferred) {
				var result = 0;
				if (AResponse.data) {
					$(AResponse.data).each(function(i, v) {
						if (typeof (v.message) == 'string') {
							$(AKeywords).each(function(ii, vv) {
								if (v.message.indexOf(vv) > -1)
									result++;
							});
						}
					});
				}
				ADeferred.resolve(result);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		// 過去N篇狀態中, (留言、讚、分享)超過M則以上的文章數 
		getPopularPostCount: function(ALimit, AUpon) {
			return this._api('getPopularPostCount', '/me/statuses', { fields: 'likes.fields(id),comments.fields(id)', limit: ALimit }, function(AResponse, ADeferred) {
				var result = 0;
				if (AResponse.data) {
					$(AResponse.data).each(function(i, v) {
						if (typeof (v.likes) == 'undefined') {
							v.likes = { data: [] };
						}
						if (typeof (v.comments) == 'undefined') {
							v.comments = { data: [] };
						}

						if ((v.likes.data.length + v.comments.data.length) >= AUpon)
							result++;
					});
				}
				ADeferred.resolve(result);
			}, function(AErrMsg, AErr, ADeferred) { ADeferred.resolve(0); });
		},

		//取得最近互動的朋友
		//limit:常互動篇數限制
		getRecentlyFriends: function(limit) {
			var me = this;
			var defer = $.Deferred();
			limit = Math.max(~~limit || 50, 1);
			$.fb.api('me/posts', { limit: limit || 50 })
				.then(function(d) {
					var recent = {};
					//計算最常互動fid
					$.each(d.data || [], function(i, o) {
						o = o || {};
						var d = o.likes || {};
						$.each(d.data || [], function(i, o) {
							var id = o.id || '0';
							var tmp = recent[id] || { id: id, cnt: 0 };
							tmp.cnt++;
							recent[id] = tmp;
						});
						d = o.comments || {};
						$.each(d.data || [], function(i, o) {
							o = o || {};
							o.form = o.form || {};
							var id = o.from.id || '0';
							var tmp = recent[id] || { id: id, cnt: 0 };
							tmp.cnt++;
							recent[id] = tmp;
						});
					});

					var ids = $.map(recent, function(o, id) { return id });
					if (ids.length == 0) { return defer.resolve([], 'no posts found.'); }
					// 確認最常互動是朋友
					$.fb.fql('select uid2 from friend where uid1=me() and uid2 in (' + ids.join(',') + ')')
						.done(function(r) {
							var r2 = [];
							$.each(r.data, function(i, o) {
								var f = recent[o.uid2];
								if (f) { r2.push(f) };
							});
							r2.sort(function(a, b) { return b.cnt - a.cnt });
							var result = $.map(r2, function(o) { return o.id });
							defer.resolve(result);
						})
						.fail(function(msg) {
							defer.resolve([], msg);
						});
				});
			return defer.promise();
		}
	}
}));