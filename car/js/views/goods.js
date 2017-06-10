var app = require('../tpls/search.string');
var searchTop = require('../tpls/search_top.string');
var searchCenter = require('../tpls/search_center.string');
var searchBottom = require('../tpls/search_bottom.string');
var commonUtil = require('../utils/common')

commonUtil.renderBody(app);
commonUtil.render("#search_top",searchTop)
commonUtil.render("#search_center",searchCenter)
commonUtil.render("#search_bottom",searchBottom)
//var	myScroll = new IScroll('#search_center', {
//		probeType:3,
//		scrollbars: true,
//		mouseWheel: true,
//		interactiveScrollbars: true,
//		shrinkScrollbars: 'scale',
//		fadeScrollbars: true
//		
//	}
//);