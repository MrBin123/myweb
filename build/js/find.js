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

	module.exports = __webpack_require__(8);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 __webpack_require__(9)




/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(10);
	var findTop = __webpack_require__(11);
	var findCenter = __webpack_require__(12);
	var findBottom = __webpack_require__(13);
	var commonUtil = __webpack_require__(7)
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


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "  <div id=\"find\">  	  <div id=\"find_top\"></div>  	  <div id=\"find_center\"></div>  	  <div id=\"bottom\"></div>  </div>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "<header><p>发现</p></header>"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "12561651156155115"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "	<ul class=\"footer\">		<li>			<p class=\"yofont yofont1\">&#xe635;</p>			<p class=\"wenzi\">首页</p>		</li>		<li>			<p class=\"yofont\">&#xe714;</p>			<p class=\"wenzi\">查找</p>		</li>		<li>			<p class=\"yofont\">&#xe63b;</p>			<p class=\"wenzi\">发现</p>		</li>		<li>			<p class=\"yofont\">&#xe790;</p>			<p class=\"wenzi\">购物车</p>		</li>		<li>			<p class=\"yofont\">&#xe60f;</p>			<p class=\"wenzi\">我的</p>		</li>		</ul>			"

/***/ })
/******/ ]);