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


	 __webpack_require__(9);




/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(10);
	var homeAdv = __webpack_require__(11);
	var homeTop = __webpack_require__(12);
	var homeCenter = __webpack_require__(13);
	var homeBottom = __webpack_require__(14);
	var commonUtil = __webpack_require__(7)

	commonUtil.renderBody(app);
	commonUtil.render("#top",homeTop)
	commonUtil.render("#center",homeCenter)
	commonUtil.render("#bottom",homeBottom)

	var	myScroll = new IScroll('#center', {
			probeType:3,
			scrollbars: true,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			fadeScrollbars: true
		}
	);
	myScroll.on('scroll',function(){
	if (Math.abs(myScroll.y)/100<=0.85 && Math.abs(myScroll.y)/100>0 && myScroll.y<0) {
		$('#top').css({'opacity':Math.abs(myScroll.y)/100,'background':'#ff5630'});
	}
	if (Math.abs(myScroll.y)<=0.1) {
		$('#top').css({'opacity':'1','background':'transparent'});
	}
	if (Math.abs(myScroll.y)/100>0.85) {
		$('#top').css({'background':'#ff5630'});
	}
		
	})

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

	module.exports = "  <div id=\"home\">  	  <div id=\"top\"></div>  	  <div id=\"center\"></div>  	  <div id=\"bottom\"></div>  </div>"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = ""

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "	<span id=\"user\" class=\"yofont\">&#xe60f;</span>		<div id=\"search\">			<span>关键词</span>			<span class=\"yofont\" id=\"down\">&#xe67c;</span>			<span >名称/型号/品牌/车型</span>			<span class=\"yofont\" id=\"se\">&#xe611;</span>		</div>	<span id=\"info\" class=\"yofont\">&#xe649;</span>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"home_scroll\">	<div id=\"big_banner\">		<img src=\"http://adimage1.autozi.com//banner/1704071632075961/images/163207302_161872034.jpg\">	</div>	<ul id=\"sel\">		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1504132000360019-img.png\">				<p>雨刮片</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1504132000250018-img.png\">				<p>滤清器</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1507162246320012-img.png\">				<p>油品</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1507162245570011-img.png\">				<p>蓄电池</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1504132001010020-img.png\">				<p>皮带紧张轮</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1504132002040022-img.png\">				<p>照明</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://image.autozi.com//b2cMobile/mbItem0/1507162234490000-img.png\">				<p>制动系</p>			</a>		</li>		<li>			<a class=\"frm-a-block\" href=\"###\">				<img class=\"frm-icon-block\" src=\"http://style1.autozi.com/msite/images/common/more.png?version=20161020213727\">				<p>更多</p>			</a>		</li>	</ul>	<a href=\"###\" class=\"show\">		<img src=\"http://image.autozi.com/proPage/PPH2017041900227227/htmlImage/m-askPrice.png\" />	</a>	<a href=\"###\" class=\"go\">		<img src=\"http://image.autozi.com/proPage/PPH2017041900227227/htmlImage/gift-enter.png\" />	</a>	<div class=\"jingpin\">		<p>精品专区</p>	</div>	<div class=\"hot\">		<div class=\"hot_title\">			<p>热门品牌</p>			<a href=\"###\">更多</a>		</div>		<ul>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_629-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_672-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_598-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_600-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_599-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_618-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_703-logo.png\" /></a>			</li>			<li>				<a href=\"###\"><img src=\"http://image.autozi.com//brand/200_653-logo.png\" /></a>			</li>		</ul>	</div>	<p class=\"line\">		<span class=\"line1\"></span>		<span class=\"line2\">热销商品推荐</span>		<span class=\"line1\"></span>	</p>	<ul class=\"goods\">		<li>			<img src=\"http://image.autozi.com/goods/6993/585/1309051537493586/thumb_350/thumb_350_350366261e9-98b7-449b-afb1-b29a8501f752.jpg\" />			<div class=\"content\">美孚 美孚1号 SN 0W-40 1L</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goodsImage/product/c130660026/350_1%20(1).JPG\" />			<div class=\"content\">瓦尔塔 免维护蓄电池（M） L2-400 H5-60-L-T2-M</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6034/586/1311111552524734/thumb_350/thumb_350_35079062dd8-ac58-4c16-8df1-33a8d3c22728.jpg\" />			<div class=\"content\">壳牌 黄壳 HX5 SN/CF 10W-40 4L SN 10W40 4L</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6097/600/1309051536582609/thumb_350/thumb_350_3508441a795-a9e8-40ed-907e-eeda1fbba9af.jpg\" />			<div class=\"content\">NGK 火花塞（CX烈焰系列） 116CX(465) 116CX</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods2/6098/629/1507142010295376/thumb_350/thumb_350_3500fca26f8-8ad8-4898-a5c3-45192d950001.jpg\" />			<div class=\"content\">TRW 前刹车片 GDB1308</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goodsImage/product/d110L20014/350_01.jpg\" />			<div class=\"content\">马勒 机油滤清器 OC 555 OC555</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goodsImage/250/2500000353/350_960_01.jpg\" />			<div class=\"content\">欧司朗 灯泡 H4 12V 100/90W P43T 62204</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6118/618/1309051540076191/thumb_350/thumb_350_350f23d8e16-9e86-4a3f-96cd-860b42359852.jpg\" />			<div class=\"content\">盖茨 正时套装 K0290150 8500-0018</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6033/598/1407151708190678/thumb_350/thumb_350_35041f25d76-6fc1-401e-a145-53af61ce5d16.jpg\" />			<div class=\"content\">U2 玻璃水 -25度 2L -25度X2LX9桶</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6100/599/1309051539285440/thumb_350/thumb_350_3501328b819-405b-4eac-aef4-ad6449263c07.jpg\" />			<div class=\"content\">博世 刹车油 DOT4 1L（国产） 0986AB8999</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6105/599/1309051538043853/thumb_350/thumb_350_35026fe341f-fa46-4fea-a9e6-562aa3767534.jpg\" />			<div class=\"content\">博世 雨刮片（火翼有骨单支） 21寸 3397011174</div>			<p class=\"rexiao\">￥热销中</p>		</li>		<li>			<img src=\"http://image.autozi.com/goods/6034/593/1310111432200016/thumb_350/thumb_350_3500a593720-c3b2-4182-8033-9e9146060e2d.jpg\" />			<div class=\"content\">嘉实多 磁护 SN/CF 5W-40 4L SN/CF 5W40 4L</div>			<p class=\"rexiao\">￥热销中</p>		</li>	</ul>	<div class=\"foot\">		<ul class=\"logins\">			<li>				<a href=\"###\">登陆</a>			</li><span class=\"col\"></span>			<li>				<a href=\"###\">注册</a>			</li><span class=\"col\"></span>			<li>				<a href=\"###\">反馈</a>			</li><span class=\"col\"></span>			<li>				<a href=\"###\">回到顶部</a>			</li>		</ul>		<ul class=\"download\">			<li>				<p class=\"one\">					<a href=\"###\">						APP					</a>				</p>				<p>客户端</p>			</li>			<li>				<p class=\"one one2\">					<a href=\"###\">						<img src=\"http://style1.autozi.com/msite/images/common/iconfont-shouji.png?version=20170606184002\" />					</a>				</p>				<p class=\"one1\">触屏版</p>			</li>			<li>				<p class=\"one\">					<a href=\"###\">						<img src=\"http://style1.autozi.com/msite/images/common/iconfont-diannao.png?version=20170606184002\" />					</a>				</p>				<p>电脑版</p>			</li>		</ul>		<p class=\"copyright\">Copyright &copy; Autozi.com 2017 版权所有</p>	</div></div>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "	<ul class=\"footer\">		<li>			<p class=\"yofont yofont1\">&#xe635;</p>			<p class=\"wenzi\">首页</p>		</li>		<li>			<p class=\"yofont\">&#xe714;</p>			<p class=\"wenzi\">查找</p>		</li>		<li>			<p class=\"yofont\">&#xe63b;</p>			<p class=\"wenzi\">发现</p>		</li>		<li>			<p class=\"yofont\">&#xe790;</p>			<p class=\"wenzi\">购物车</p>		</li>		<li>			<p class=\"yofont\">&#xe60f;</p>			<p class=\"wenzi\">我的</p>		</li>		</ul>			"

/***/ })
/******/ ]);