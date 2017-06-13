var app = require('../tpls/find.string');
var findTop = require('../tpls/find_top.string');
var findCenter = require('../tpls/find_center.string');
var findBottom = require('../tpls/home_bottom.string');
var commonUtil = require('../utils/common')
commonUtil.renderBody(app);
commonUtil.render("#find_top",findTop)
commonUtil.render("#find_center",findCenter)
commonUtil.render("#bottom",findBottom)

$('#find_top .move a:first-child').css('color','#ff5e15');
$('#find_top .moveline').css('width','33%');
var	myScroll = new IScroll('#find_center', {
		probeType:3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		
	}
);
myScroll.scrollBy(0, -40);
$('#find_top .move a').each(function(index,value){
	$(value).tap(function(){
		$(this).css('color','#ff5e15');
		$(this).siblings().css('color','#666');
		switch (index){
			case 0:
				$('#find_top .moveline').animate({'margin-left':'0'},250)
				$('#find_center .scroll ul').html("");
				break;
			case 1:
				$('#find_center .scroll ul').html("");
				$('#find_top .moveline').animate({'margin-left':'33%'},250)
				getData({"autoInfoPageNo":1},'ajaxListAutoInfo.do');
				break;
			case 2:
				$('#find_center .scroll ul').html("");
				$('#find_top .moveline').animate({'margin-left':'66%'},250)
				getData({"articlePageNo":1},'ajaxListArticle.do');
				break;
			default:
				break;
		}
	})
})
	function getData(obj,url){
		$.ajax({
			type:"post",
			url:'/api/'+url, 
			data:obj,
			success:function(data){
				if (data !=null) {
					$('#find_center .scroll ul').html(data);
					myScroll.refresh();
				}
     		}
		});
	}
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
	


//上下拉刷新
    

    var head = $('#find_center .head img'),
        topImgHasClass = head.hasClass('up');
    var foot = $('#find_center .foot img'),
        bottomImgHasClass = head.hasClass('down');
    myScroll.on('scroll', function () {
        var y = this.y,
            maxY = this.maxScrollY - y;
        if (y >= 0) {
            !topImgHasClass && head.addClass('up');
            return '';
        }
        if (maxY >= 0) {
            !bottomImgHasClass && foot.addClass('down');
            return '';
        }
    });

    myScroll.on('scrollEnd', function () {
        if (this.y >= -40 && this.y < 0) {
            myScroll.scrollTo(0, -40);
            head.removeClass('up');
        } else if (this.y >= 0) {
            head.attr('src', './imgs/ajax-loader.gif');
            //TODO ajax下拉刷新数据
//
//          setTimeout(function () {
//              myScroll.scrollTo(0, -40);
//              head.removeClass('up');
//              head.attr('src', './imgs/arrow.png');
//          }, 1000);
			setTimeout(function () {
				getData({"autoInfoPageNo":2},'ajaxListAutoInfo.do');
				myScroll.scrollTo(0, -40);
                head.removeClass('up');
                head.attr('src', './imgs/arrow.png');
				
				
			}, 1000);
		
        }

        var maxY = this.maxScrollY - this.y;
        if (maxY > -40 && maxY < 0) {
            var self = this;
            myScroll.scrollTo(0, self.maxScrollY + 40);
            foot.removeClass('down')
        } else if (maxY >= 0) {
            foot.attr('src', './imgs/ajax-loader.gif');
            //TODO ajax上拉加载数据
            var self = this;
            setTimeout(function () {
                myScroll.refresh();
                myScroll.scrollTo(0, self.y + 40);
                foot.removeClass('down');
                foot.attr('src', './imgs/arrow.png');
            }, 1000);
        }
    })