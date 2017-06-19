var app = require('../tpls/login.string');
var loginTop = require('../tpls/login_top.string');
var loginCenter = require('../tpls/login_center.string');
var commonUtil = require('../utils/common');


commonUtil.renderBody(app);
commonUtil.render(".login-top",loginTop)
commonUtil.render(".login-center",loginCenter)

$('.login-top').tap(function(){
	window.location.href="./index.html"
})
$('.regOrforget a:first-child').tap(function(){
	window.location.href="./reg.html"
})
///gologin/api/users/signin

$('.gologin').tap(function(){
	$.ajax({
		type:"post",
		url:"/yologin/api/users/signin",
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