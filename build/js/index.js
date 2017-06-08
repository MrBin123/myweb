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

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 __webpack_require__(2);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(3);
	var homeAdv = __webpack_require__(4);
	var homeTop = __webpack_require__(5);
	var homeCenter = __webpack_require__(6);
	var homeBottom = __webpack_require__(7);
	var commonUtil = __webpack_require__(8)

	commonUtil.renderBody(app);
	commonUtil.render("#top",homeTop)



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "  <div id=\"home\">  	  <div id=\"top\"></div>  	  <div id=\"center\"></div>  	  <div id=\"bottom\"></div>  </div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ""

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "	<span id=\"user\" class=\"yofont\">&#xe60f;</span>		<div id=\"search\">			<span>关键词</span>			<span class=\"yofont\">&#xe67c;</span>			<span >名称/型号/品牌/车型</span>			<span class=\"yofont\">&#xe601;</span>		</div>	<span id=\"info\" class=\"yofont\">&#xe601;</span>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"home_bottom\"></div>"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"home_center\">							</div>"

/***/ }),
/* 8 */
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



/***/ })
/******/ ]);