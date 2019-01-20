(function() {
	require.config({
		baseUrl: 'js',
		paths: {
			"jquery": 'vendor/jquery-1.11.1.min'
		}
	});

	require(['jquery','greensock/TweenMax.min','greensock/TimelineMax.min','greensock/plugins/ScrollToPlugin.min','vendor/pace.min','vendor/mresize'],function(Pace){
		require(['stage'])
	});
})();