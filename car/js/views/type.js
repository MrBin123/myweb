var app = require('../tpls/lookfor.string');
var findTop = require('../tpls/lookfor_top.string');
var findCenter = require('../tpls/lookfor_center.string');
var show = require('../tpls/lookfor_show.string');
var commonUtil = require('../utils/common');

commonUtil.renderBody(app);
commonUtil.render("#lookfor_top",findTop)
commonUtil.render("#lookfor_center",findCenter)
commonUtil.render("#lookfor_show",show)
$('#lookfor_show').hide();
$('.clear').hide();
$('#text').bind('input propertychange',function(){
	if ($(this).val() != "") {
		ajaxTo($(this).val());
	}else{
		$('#lookfor_show').hide();
	}
	
})

function ajaxTo(keyWord){
	$.ajax({
		type:"get",
		url:"/go/getSearchFacetData.do",
		data:{
			keyWords:keyWord
		},
		success:function(data){
			$('#lookfor_show').show();
			change(data);
		}
	});
}

function change(data){
	$('#lookfor_show').html(template('data',JSON.parse(data)));
}  

$('#hot_search .hot li').each(function(){
	$(this).tap(function(){
		ajaxTo($(this).text())
		$('#text').val($(this).text())
	})
})

var	myScroll = new IScroll('.scroller', {
		probeType:3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
	}
);
//添加历史搜索
function addHistory(keywords){
	console.log(keywords)
	$('#history').append($('<p>'+keywords+'</p>'))
	$('#history p:not(:first-child)').each(function(index,value){
		$(this).tap(function(){
			ajaxTo($(this).text())
			$('#text').val($(this).text())
		})
	})
	$('.clear').show();
	myScroll.refresh();
}

$('#lookfor_center .clear a').eq(0).tap(function(){
//	console.log(13515)
	$('#history p:not(:first-child)').each(function(index,value){
		$(this).remove();
	})
	$('.clear').hide();
})

$('#search .myse').tap(function(e){
	addHistory($('#text').val());
})

$(document).keypress(function(event){  
    var keycode = (event.keyCode ? event.keyCode : event.which);  
    if(keycode == '13'){  
       addHistory($('#text').val());     
    }  
}); 


