var app = require('../tpls/me.string');
var Title = require('../tpls/Title.string');
var All = require('../tpls/All.string');
var Order = require('../tpls/Order.string');
var commonUtil = require('../utils/common')
commonUtil.renderBody(app);
commonUtil.render(".Title",Title)
commonUtil.render(".Order",Order)

var	myScroll = new IScroll('.Order', {
		probeType:3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		
	}
);

