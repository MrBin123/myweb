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


	 __webpack_require__(20)
	 


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(21);
	var findTop = __webpack_require__(22);
	var findCenter = __webpack_require__(23);
	var show = __webpack_require__(24);
	var commonUtil = __webpack_require__(6);

	commonUtil.renderBody(app);
	commonUtil.render("#lookfor_top",findTop)
	commonUtil.render("#lookfor_center",findCenter)
	commonUtil.render("#lookfor_show",show)
	$('#lookfor_show').hide();
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
				addHistory($('#text').val())
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

	$('#history p:not(first-child)').each(function(){
		$(this).tap(function(){
			ajaxTo($(this).text())
			$('#text').val($(this).text())
		})
	})

	//添加历史搜索
	function addHistory(keywords){
		console.log(keywords)
		$('#history').append($('<p>'+keywords+'</p>'))
	}



/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = "  <div id=\"lookfor\">  	  <div id=\"lookfor_top\"></div>  	  <div id=\"lookfor_center\"></div>  	  <div id=\"lookfor_show\"></div>  </div>"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<a href=\"index.html\" class=\"back\">取消</a><div id=\"search\">	<span>关键词</span>	<span class=\"yofont\" id=\"down\">&#xe67c;</span>	<input type=\"text\" id=\"text\" placeholder=\"名称/型号/品牌/车型\"/>	<p id=\"se\"><span class=\"yofont\">&#xe611;</span></p>	</div>"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"hot_search\">	<p>热搜</p>	<ul class=\"hot\">		<li><a href=\"###\">马勒</a></li>		<li><a href=\"###\">冷媒</a></li>		<li><a href=\"###\">耐诺思</a></li>		<li><a href=\"###\">瓦尔塔</a></li>		<li><a href=\"###\">DENSO电装</a></li>		<li><a href=\"###\">飞利浦</a></li>		<li><a href=\"###\">NGK</a></li>		<li><a href=\"###\">FSL</a></li>	</ul>	<div id=\"history\">		<p>历史搜索</p>	</div>		</div>"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "<script id=\"data\" type=\"text/html\">{{each $data }}   <a href=\"###\"><p> {{$value.title}}</p><p>约{{$value.count}}条</p></a>{{/each}}</script>"

/***/ })
/******/ ]);