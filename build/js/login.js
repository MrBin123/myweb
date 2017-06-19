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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 __webpack_require__(20);




/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(21);
	var loginTop = __webpack_require__(22);
	var loginCenter = __webpack_require__(23);
	var commonUtil = __webpack_require__(6);


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


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"login\">	<div class=\"login-top\"></div>	<div class=\"login-center\"></div></div>"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<a href=\"\"><img src=\"./imgs/back.png\"/></a><p>登录</p><b></b>"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<form method=\"post\" >	<div class=\"user\">		<label for=\"username\">账号</label><input type=\"text\" id=\"username\" placeholder=\"请输入您的用户名\" />	</div>	<div class=\"pwd\">		<label for=\"password\">密码</label><input type=\"text\" id=\"password\" placeholder=\"请输入密码\" />	</div>	<div class=\"sub\">		<input type=\"button\" value=\"登陆\" class=\"gologin\"/>	</div></form><div class=\"regOrforget\">	<a href=\"###\">快速注册</a>	<p></p>	<a href=\"###\">忘记密码？</a></div>"

/***/ })
/******/ ]);