var app = require('../tpls/home.string');
var homeAdv = require('../tpls/home_adv.string');
var homeTop = require('../tpls/home_top.string');
var homeCenter = require('../tpls/home_center.string');
var homeBottom = require('../tpls/home_bottom.string');
var commonUtil = require('../utils/common')

commonUtil.renderBody(app);
commonUtil.render("#top",homeTop)
commonUtil.render("#center",homeCenter)
commonUtil.render("#bottom",homeBottom)

var	myScroll = new IScroll('#center', {
		probeType:3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		
	}
);
myScroll.on('scroll',function(){
if (Math.abs(myScroll.y)/100<=1 && Math.abs(myScroll.y)/100>0 && myScroll.y<0) {
	$('#top').css({'opacity':Math.abs(myScroll.y)/100,'background':'#ff5630'});
}
if (Math.abs(myScroll.y)<=0.1) {
	$('#top').css({'opacity':'1','background':'transparent'});
}
if (Math.abs(myScroll.y)/100>1) {
	$('#top').css({'background':'#ff5630'});
}
	
})

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

$('#top #search').tap(function(){
	
	window.location.href="/lookfor.html";
	
})

$('#user').tap(function(){
	window.location.href="/login.html";
})
	
