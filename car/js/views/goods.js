var app = require('../tpls/search.string');
var searchTop = require('../tpls/search_top.string');
var searchCenter = require('../tpls/search_center.string');
//var searchBottom = require('../tpls/search_bottom.string');
var searchBottom = require('../tpls/home_bottom.string');
var commonUtil = require('../utils/common')
commonUtil.renderBody(app);
commonUtil.render("#search_top",searchTop)
commonUtil.render("#search_center",searchCenter)
commonUtil.render("#bottom",searchBottom)
var	myScroll = new IScroll('#search_center', {
		probeType:3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		
	}
)
	$('#bottom ul li').css('color','#666');
	$('#bottom ul li p').removeClass('yofont1');
	$('#bottom ul li').eq(1).css('color','#fd9478');
	$('#bottom ul li p').eq(2).css('color','#fd9478');
	$('.footer li').each(function(index,value){
		$(value).tap(function(){
			switch (index){
				case 0:
					window.location.href="/index.html";
					break;
				case 1:
					window.location.href="/search.html";
					break;
				case 2:
					window.location.href="/find.html";
					break;
				case 3:
					break;
				case 4:
				window.location.href="/Me.html";
					break;
				default:
					break;
			}
		})
	})
	
