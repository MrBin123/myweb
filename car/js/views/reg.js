var app = require('../tpls/reg.string');
var regTop = require('../tpls/reg_top.string');
var regCenter = require('../tpls/reg_center.string');
var commonUtil = require('../utils/common');


commonUtil.renderBody(app);
commonUtil.render(".reg-top",regTop)
commonUtil.render(".reg-center",regCenter)
$('.reg').tap(function(){
	window.location.href='./login.html';
})
