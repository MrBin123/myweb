var app = require('../tpls/find.string');
var findTop = require('../tpls/find_top.string');
var findCenter = require('../tpls/find_center.string');
var findBottom = require('../tpls/home_bottom.string');
var commonUtil = require('../utils/common')
commonUtil.renderBody(app);
commonUtil.render("#find_top",findTop)
commonUtil.render("#find_center",findCenter)
commonUtil.render("#bottom",findBottom)









	$('#bottom ul li').css('color','#666');
	$('#bottom ul li p').removeClass('yofont1');
	$('#bottom ul li').eq(2).css('color','#fd9478');
	$('#bottom ul li p').eq(4).css('color','#fd9478');
	$('.footer li').each(function(index,value){
		$(value).tap(function(){
			switch (index){
				case 0:
					window.location.href="./index.html";
					break;
				case 1:
					window.location.href="./search.html";
					break;
				case 2:
					window.location.href="./find.html";
					break;
				case 3:
					break;
				case 4:
					break
				default:
					break;
			}
		})
	})