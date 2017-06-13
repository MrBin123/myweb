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


	 __webpack_require__(2)




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(3);
	var findTop = __webpack_require__(4);
	var findCenter = __webpack_require__(5);
	var findBottom = __webpack_require__(6);
	var commonUtil = __webpack_require__(7)
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "  <div id=\"find\">  	  <div id=\"find_top\"></div>  	  <div id=\"find_center\"></div>  	  <div id=\"bottom\"></div>  </div>"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header><p>发现</p></header><div class=\"move\">	<a href=\"###\">促销</a>	<a href=\"###\">资讯</a>	<a href=\"###\">公告</a></div><div class=\"moveline\"></div>"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"scroll\">	<div class=\"head\">        <img src=\"/imgs/arrow.png\" width=\"40\" height=\"40\"/>            <span>下拉刷新...</span>    </div>         <ul>         </ul>    <div class=\"foot\">        <img src=\"/imgs/arrow.png\" width=\"40\" height=\"40\"/>        <span>上拉加载更多...</span>   </div></div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "	<ul class=\"footer\">		<li>			<p class=\"yofont yofont1\">&#xe635;</p>			<p class=\"wenzi\">首页</p>		</li>		<li>			<p class=\"yofont\">&#xe714;</p>			<p class=\"wenzi\">查找</p>		</li>		<li>			<p class=\"yofont\">&#xe63b;</p>			<p class=\"wenzi\">发现</p>		</li>		<li>			<p class=\"yofont\">&#xe790;</p>			<p class=\"wenzi\">购物车</p>		</li>		<li>			<p class=\"yofont\">&#xe60f;</p>			<p class=\"wenzi\">我的</p>		</li>		</ul>			"

/***/ }),
/* 7 */
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



/***/ })
/******/ ]);