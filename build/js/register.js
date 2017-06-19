/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var datas = "";
	var common = {
	  renderBody: function (tpl) {
	//  var body = document.body
	//  body.innerHTML = tpl + body.innerHTML
			$('body').html(tpl);
	  },
	  render: function (obj, tpl) {
	//  obj.innerHTML = tpl
			$(obj).html(tpl);
	//		console.log($(obj));
	//		console.log(tpl);
	  }
	}

	module.exports = common



/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 __webpack_require__(31);




/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(32);
	var regTop = __webpack_require__(33);
	var regCenter = __webpack_require__(34);
	var commonUtil = __webpack_require__(6);


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


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

	module.exports = "<div class=\"reg\">	<div class=\"reg-top\"></div>	<div class=\"reg-center\"></div></div>"

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

	module.exports = "<a href=\"\"><img src=\"./imgs/back.png\"/></a><p>快速注册</p><b></b>"

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

	module.exports = "<form method=\"post\" enctype=\"multipart/form-data\">	<div class=\"user\">		<label for=\"username\">登录用户名</label><input type=\"text\" id=\"username\" placeholder=\"输入5-20个字符，以字母开头、可带数字、“_”\" />	</div>	<div class=\"pwd\">		<label for=\"password\">登陆密码</label><input type=\"text\" id=\"password\" placeholder=\"最少5个字符\" />	</div>	<div class=\"confirm\">		<label for=\"conPassword\">确认密码</label><input type=\"text\" id=\"conPassword\" placeholder=\"输入登录密码\" />	</div>	<!--<div class=\"head\">		<label for=\"upload\">上传头像</label><input type=\"file\" name=\"upload\" id=\"upload\" value=\"上传头像\" accept=\"image/png, image/jpeg, image/gif, image/jpg\"/>	</div>-->	<div class=\"sub\">		<input type=\"button\" value=\"加盟入驻\"/>	</div></form>"

/***/ })

/******/ });