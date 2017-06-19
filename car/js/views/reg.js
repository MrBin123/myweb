var app = require('../tpls/reg.string');
var regTop = require('../tpls/reg_top.string');
var regCenter = require('../tpls/reg_center.string');
var commonUtil = require('../utils/common');


commonUtil.renderBody(app);
commonUtil.render(".reg-top",regTop)
commonUtil.render(".reg-center",regCenter)
$('.reg-top').tap(function(){
	window.location.href='./login.html';
})

$('.sub').tap(function(){
	$.ajax({
		type:"post",
		url:"/yoreg/api/users/signin",
		async:true,
		data:{
			username:$('#username').val(),
			password:$('#password').val()
		},
		success:function(data){
			alert(data)
		}
	});
	
	
})