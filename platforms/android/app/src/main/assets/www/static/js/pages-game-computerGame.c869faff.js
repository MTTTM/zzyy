(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-game-computerGame"],{"0e4a":function(a,e,t){"use strict";var i=t("8088"),n=t.n(i);n.a},"3fc3":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(t("a34a")),n=o(t("cfed")),r=t("8673"),c=o(t("e482")),d=o(t("a7c6"));function o(a){return a&&a.__esModule?a:{default:a}}function s(a){return u(a)||m(a)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function u(a){if(Array.isArray(a)){for(var e=0,t=new Array(a.length);e<a.length;e++)t[e]=a[e];return t}}function f(a,e,t,i,n,r,c){try{var d=a[r](c),o=d.value}catch(s){return void t(s)}d.done?e(o):Promise.resolve(o).then(i,n)}function p(a){return function(){var e=this,t=arguments;return new Promise(function(i,n){var r=a.apply(e,t);function c(a){f(r,i,n,c,d,"next",a)}function d(a){f(r,i,n,c,d,"throw",a)}c(void 0)})}}var g={mixins:[n.default,c.default],components:{uniLoadMore:d.default},computed:{selectedGame:function(){var a=this,e=this.platformList.filter(function(e){return e.platformCode==a.gameParams.platformCode});return e.length>0?e[0]:{}}},data:function(){return{pfIndex:void 0,classIndex:0,classArray:[{label:"全部",key:void 0},{label:"最热",key:"isHot",active:!1},{label:"最新",key:"isNew",active:!1},{label:"老虎机",key:"tiger"},{label:"捕鱼",key:"fish"},{label:"街机",key:"arcade"}],gameParams:{gameTypeCode:"elegame",limit:20,page:0,platformCode:void 0,gameSubTypeCode:void 0,gameName:void 0,isHot:void 0,isNew:void 0},gameList:{list:[]},bannerArray:[{imgUrl:"/static/pages/games/electr0.png"},{imgUrl:"/static/pages/games/electr1.png"},{imgUrl:"/static/pages/games/electr2.png"},{imgUrl:"/static/pages/games/electr3.png"},{imgUrl:"/static/pages/games/electr4.png"}],bannerSwiperCurrIndex:0,platformList:[{creationTime:"2019-03-07 14:08:27",creationBy:"system",lastUpdatedTime:"2019-03-30 14:18:56",lastUpdatedBy:"hayden",platformId:1,platformCode:"AG",platformName:"AG亚游",enableQuota:99999795750,isEnable:1,balance:"加载中"},{creationTime:"2019-03-27 21:55:46",lastUpdatedTime:"2019-03-30 09:38:46",lastUpdatedBy:"xiaoze",platformId:6,platformCode:"BBIN",platformName:"BBIN宝盈",enableQuota:999999e5,isEnable:1,balance:"加载中"},{creationTime:"2019-03-07 14:08:27",creationBy:"system",lastUpdatedTime:"2019-03-30 18:45:48",lastUpdatedBy:"xiaoze",platformId:3,platformCode:"FG",platformName:"FG乐游",enableQuota:9999997e4,isEnable:1,balance:"加载中"},{creationTime:"2019-03-27 21:55:46",lastUpdatedTime:"2019-03-30 09:38:46",lastUpdatedBy:"xiaoze",platformId:6,platformCode:"VG",platformName:"VG平台",enableQuota:999999e5,isEnable:1,balance:"加载中"}],userBalance:0}},onLoad:function(a){a.platformCode&&(this.gameParams.platformCode=a.platformCode),this.getGameList("init")},onShow:function(){this.updatedsfPfBalance(this.gameParams.platformCode)},methods:{jump:function(){},bannerSwiperChange:function(a){this.bannerSwiperCurrIndex=a.detail.current},transferFuc:function(a){"in"==a?uni.navigateTo({url:"/pages/game/transfer?platformCode="+this.selectedGame.platformCode}):uni.navigateTo({url:"/pages/game/transfer?platformCode=".concat(this.selectedGame.platformCode,"&type=out")})},walletZero:function(){return 0==this.userBalance&&uni.showModal({title:"温馨提示",content:"主账号余额为零,是否去充值",cancelText:"取消",cancelColor:"#16AFE9",confirmText:"去充值",confirmColor:"#16AFE9",success:function(a){a.confirm&&uni.navigateTo({url:"/pages/wallet/wallet"})}}),!this.userBalance},updatedsfPfBalance:function(){var a=p(i.default.mark(function a(e,t){var n,r=this;return i.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return this.$store.dispatch("user/getUserBalance").then(function(a){r.userBalance=a.data.balance}),a.next=3,this.$store.dispatch("transfer/getBalance",{platformCode:e});case 3:n=a.sent,"ERROR"!==n.code&&(console.log("this.platformList",this.platformList,n),this.platformList.forEach(function(a){console.log("item******",a),a.platformCode===e&&(a.balance=n.balance)})),uni.hideLoading(),t&&uni.showToast({title:"转账成功",duration:1e3,icon:"none"});case 7:case"end":return a.stop()}},a,this)}));function e(e,t){return a.apply(this,arguments)}return e}(),clickSubType:function(a,e){"isHot"!=a&&"isNew"!=a?(this.classIndex=e,this.gameParams.gameSubTypeCode=a):"isHot"==a?1==this.classArray[e].active?(this.gameParams.isHot=void 0,this.classArray[e].active=!1):(this.gameParams.isHot=1,this.classArray[e].active=!0):"isNew"==a&&(1==this.classArray[e].active?(this.gameParams.isNew=void 0,this.classArray[e].active=!1):(this.gameParams.isNew=1,this.classArray[e].active=!0)),this.gameParams=Object.assign({},this.gameParams,{page:0}),console.log("this.gameParams",this.gameParams),this.getGameList("init")},pfClickCallBack:function(a,e){this.pfIndex=e,this.gameParams=Object.assign({},this.gameParams,{page:0,platformCode:a}),this.gameList.totalPage=0,this.getGameList("init"),this.updatedsfPfBalance(this.gameParams.platformCode)},getGameList:function(a){var e=this;if(this.gameList.totalPage<=this.gameParams.page&&!a)this.LoadingType=2;else{this.gameParams.page++,this.LoadingType=1;var t="fish"==this.gameParams.gameSubTypeCode?r.ApiquerygetFishPage:r.ApiGetElegamePage;t(this.gameParams).then(function(t){e.LoadingType=0,"ERROR"!==t.code&&(a?e.gameList.list=t.data.list:(console.log("更新****************"),e.gameList.list=[].concat(s(e.gameList.list),s(t.data.list))),e.gameList.totalPage=t.data.totalPage,e.gameList.totalPage<=e.gameParams.page&&(e.LoadingType=2))})}},search:function(){uni.navigateTo({url:"/pages/game/computerGameSearch?type=electr"})}}};e.default=g},"413e":function(a,e,t){var i=t("b041");e=a.exports=t("2350")(!1),e.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*底部tabbar高度*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*换行*/\n/*\n\t主轴方向：从左到右(默认)\n*/\n/*\n\t主轴方向：从右到左\n*/\n/*\n\t主轴方向：从上到下\n*/\n/*\n\t主轴方向：从下到上\n*/\n/*\n\t主轴对齐方式：从左到右(默认)\n*/\n/*\n\t主轴对齐方式：从右到左\n*/\n/*\n\t主轴对齐方式：两端对齐\n*/\n/*\n\t主轴对齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：从上到下(默认)\n*/\n/*\n\t交叉轴齐方式：从下到上\n*/\n/*\n\t交叉轴齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：跟随内容高度对齐\n*/\n/*\n\t交叉轴齐方式：高度并排铺满\n*/\n/*\n\t子元素平分宽度\n*/.pagecomputerGame[data-v-f3a62db8]{background:#fff}.pagecomputerGame .scroll-box[data-v-f3a62db8]{position:absolute;width:100%;height:100%;left:0;top:0}.pagecomputerGame .search[data-v-f3a62db8]{width:%?38?%;height:%?38?%;background-image:url('+i(t("fc8c"))+");background-size:contain}@media screen and (-webkit-device-pixel-ratio:1){.pagecomputerGame .search[data-v-f3a62db8]{background-image:url("+i(t("2d20"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.pagecomputerGame .search[data-v-f3a62db8]{background-image:url("+i(t("fc8c"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.pagecomputerGame .search[data-v-f3a62db8]{background-image:url("+i(t("cc28"))+')}}.pagecomputerGame .banner[data-v-f3a62db8]{height:%?320?%;position:relative}.pagecomputerGame .banner .imageContainer[data-v-f3a62db8],.pagecomputerGame .banner .swiperitem[data-v-f3a62db8],.pagecomputerGame .banner img[data-v-f3a62db8]{width:%?750?%;height:%?320?%}.pagecomputerGame .banner .dot-wrap[data-v-f3a62db8]{bottom:%?15?%;position:absolute;left:0;width:100%;bottom:%?10?%}.pagecomputerGame .banner .dot-wrap .dot[data-v-f3a62db8]{width:%?16?%;height:%?16?%;background:#b3b3b3;border-radius:%?16?%;-webkit-transform:all .5s;-ms-transform:all .5s;transform:all .5s}.pagecomputerGame .banner .dot-wrap .dot+.dot[data-v-f3a62db8]{margin-left:%?10?%}.pagecomputerGame .banner .dot-wrap .dot.active[data-v-f3a62db8]{width:%?25?%;background:#969696}.pagecomputerGame .chancel[data-v-f3a62db8]{padding:%?21?% %?24?%}.pagecomputerGame .chancel .item[data-v-f3a62db8],.pagecomputerGame .chancel uni-image[data-v-f3a62db8]{width:%?86?%;height:%?86?%}.pagecomputerGame .chancel .inner[data-v-f3a62db8]{white-space:nowrap;line-height:1}.pagecomputerGame .chancel .item[data-v-f3a62db8]{opacity:.5;-webkit-transform:.5s;-ms-transform:.5s;transform:.5s;display:inline-block;border-radius:100%;overflow:hidden}.pagecomputerGame .chancel .item.active[data-v-f3a62db8]{opacity:1}.pagecomputerGame .chancel .item+.item[data-v-f3a62db8]{margin-left:%?68?%}.pagecomputerGame .class-filter[data-v-f3a62db8]{height:%?94?%;margin:0 %?24?%}.pagecomputerGame .class-filter .item[data-v-f3a62db8]{color:#333;font-size:%?28?%}.pagecomputerGame .class-filter .item+.item[data-v-f3a62db8]{margin-left:%?15?%}.pagecomputerGame .class-filter .item.active[data-v-f3a62db8]{color:#16afe9;font-size:%?40?%}.pagecomputerGame .transfer[data-v-f3a62db8]{position:relative}.pagecomputerGame .transfer[data-v-f3a62db8]:after{position:absolute;bottom:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#e6e6e6;z-index:10}.pagecomputerGame .transfer .game[data-v-f3a62db8]{font-size:%?34?%;color:#333;margin-right:%?40?%}.pagecomputerGame .transfer .label[data-v-f3a62db8]{color:#666;font-size:%?28?%;margin-right:%?10?%}.pagecomputerGame .transfer .balance[data-v-f3a62db8]{font-size:%?28?%;color:#ffa800}.pagecomputerGame .transfer .right uni-text[data-v-f3a62db8]{text-decoration:underline;color:%?28?%;color:#16afe9}.pagecomputerGame .transfer .right uni-text+uni-text[data-v-f3a62db8]{margin-left:%?20?%}.pagecomputerGame .transfer .right uni-text.transferin[data-v-f3a62db8]:before{content:"";display:inline-block;width:%?26?%;height:%?26?%;background-image:url('+i(t("6f98"))+");background-size:100% 100%;margin-right:%?5?%}@media screen and (-webkit-device-pixel-ratio:1){.pagecomputerGame .transfer .right uni-text.transferin[data-v-f3a62db8]:before{background-image:url("+i(t("cc0b"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.pagecomputerGame .transfer .right uni-text.transferin[data-v-f3a62db8]:before{background-image:url("+i(t("6f98"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.pagecomputerGame .transfer .right uni-text.transferin[data-v-f3a62db8]:before{background-image:url("+i(t("cf76"))+')}}.pagecomputerGame .transfer .right uni-text.transferOut[data-v-f3a62db8]:before{content:"";display:inline-block;width:%?26?%;height:%?26?%;background-image:url('+i(t("5d68"))+");background-size:100% 100%;margin-right:%?5?%}@media screen and (-webkit-device-pixel-ratio:1){.pagecomputerGame .transfer .right uni-text.transferOut[data-v-f3a62db8]:before{background-image:url("+i(t("ef76"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.pagecomputerGame .transfer .right uni-text.transferOut[data-v-f3a62db8]:before{background-image:url("+i(t("5d68"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.pagecomputerGame .transfer .right uni-text.transferOut[data-v-f3a62db8]:before{background-image:url("+i(t("af74"))+')}}.pagecomputerGame .search-tit[data-v-f3a62db8]{position:relative;padding:0 %?24?%;font-size:%?36?%;color:#333;line-height:%?88?%;position:relative}.pagecomputerGame .search-tit[data-v-f3a62db8]:after{position:absolute;bottom:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#e6e6e6;z-index:10}.pagecomputerGame .transfer[data-v-f3a62db8]{height:%?86?%}.pagecomputerGame .list[data-v-f3a62db8]{margin:0 %?24?% 0;padding:%?20?% 0 0}.pagecomputerGame .list .item[data-v-f3a62db8]{margin-left:%?34?%;margin-top:%?10?%;text-align:center;width:%?150?%}.pagecomputerGame .list .item[data-v-f3a62db8]:nth-of-type(4n+1){margin-left:0}.pagecomputerGame .list .item uni-image[data-v-f3a62db8]{width:%?150?%;height:%?150?%;display:block;border-radius:%?32?%}.pagecomputerGame .list .item uni-text[data-v-f3a62db8]{font-size:%?28?%;color:#666;line-height:%?50?%}\n/*换行*/\n/*\n\t主轴方向：从左到右(默认)\n*/\n/*\n\t主轴方向：从右到左\n*/\n/*\n\t主轴方向：从上到下\n*/\n/*\n\t主轴方向：从下到上\n*/\n/*\n\t主轴对齐方式：从左到右(默认)\n*/\n/*\n\t主轴对齐方式：从右到左\n*/\n/*\n\t主轴对齐方式：两端对齐\n*/\n/*\n\t主轴对齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：从上到下(默认)\n*/\n/*\n\t交叉轴齐方式：从下到上\n*/\n/*\n\t交叉轴齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：跟随内容高度对齐\n*/\n/*\n\t交叉轴齐方式：高度并排铺满\n*/\n/*\n\t子元素平分宽度\n*/.cm-pf-AG[data-v-f3a62db8]{background-image:url('+i(t("19b5"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-AG[data-v-f3a62db8]{background-image:url("+i(t("fb16"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-AG[data-v-f3a62db8]{background-image:url("+i(t("19b5"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-AG[data-v-f3a62db8]{background-image:url("+i(t("5a9f"))+")}}.cm-pf-BINN[data-v-f3a62db8]{background-image:url("+i(t("858e"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-BINN[data-v-f3a62db8]{background-image:url("+i(t("a96f"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-BINN[data-v-f3a62db8]{background-image:url("+i(t("858e"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-BINN[data-v-f3a62db8]{background-image:url("+i(t("9e20"))+")}}.cm-pf-DS[data-v-f3a62db8]{background-image:url("+i(t("3550"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-DS[data-v-f3a62db8]{background-image:url("+i(t("474b"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-DS[data-v-f3a62db8]{background-image:url("+i(t("3550"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-DS[data-v-f3a62db8]{background-image:url("+i(t("24d1"))+")}}.cm-pf-FG[data-v-f3a62db8]{background-image:url("+i(t("680e"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-FG[data-v-f3a62db8]{background-image:url("+i(t("6e10"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-FG[data-v-f3a62db8]{background-image:url("+i(t("680e"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-FG[data-v-f3a62db8]{background-image:url("+i(t("1102"))+")}}.cm-pf-MG[data-v-f3a62db8]{background-image:url("+i(t("8826"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-MG[data-v-f3a62db8]{background-image:url("+i(t("2c38"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-MG[data-v-f3a62db8]{background-image:url("+i(t("8826"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-MG[data-v-f3a62db8]{background-image:url("+i(t("fc7d"))+")}}.cm-pf-KY[data-v-f3a62db8]{background-image:url("+i(t("e745"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-KY[data-v-f3a62db8]{background-image:url("+i(t("9bd8"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-KY[data-v-f3a62db8]{background-image:url("+i(t("e745"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-KY[data-v-f3a62db8]{background-image:url("+i(t("a827"))+")}}.cm-pf-mySelf[data-v-f3a62db8]{background-image:url("+i(t("dca5"))+");background-size:100% 100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-mySelf[data-v-f3a62db8]{background-image:url("+i(t("616b"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-mySelf[data-v-f3a62db8]{background-image:url("+i(t("dca5"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-mySelf[data-v-f3a62db8]{background-image:url("+i(t("8ca6"))+")}}.cm-pf-BBIN[data-v-f3a62db8]{background:url(/static/pages/games/bbin.png) no-repeat;background-size:100%}.cm-pf-LC[data-v-f3a62db8]{background-image:url("+i(t("d05c"))+");background-size:100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-LC[data-v-f3a62db8]{background-image:url("+i(t("57b8"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-LC[data-v-f3a62db8]{background-image:url("+i(t("d05c"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-LC[data-v-f3a62db8]{background-image:url("+i(t("0785"))+")}}.cm-pf-VG[data-v-f3a62db8]{background-image:url("+i(t("c390"))+");background-size:100%}@media screen and (-webkit-device-pixel-ratio:1){.cm-pf-VG[data-v-f3a62db8]{background-image:url("+i(t("8da1"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.cm-pf-VG[data-v-f3a62db8]{background-image:url("+i(t("c390"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.cm-pf-VG[data-v-f3a62db8]{background-image:url("+i(t("3bfc"))+")}}",""])},5175:function(a,e,t){"use strict";t.r(e);var i=t("ccd5"),n=t("e114");for(var r in n)"default"!==r&&function(a){t.d(e,a,function(){return n[a]})}(r);t("0e4a");var c=t("2877"),d=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,"f3a62db8",null);e["default"]=d.exports},8088:function(a,e,t){var i=t("413e");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var n=t("4f06").default;n("034a1874",i,!0,{sourceMap:!1,shadowMode:!1})},ccd5:function(a,e,t){"use strict";var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"cm-wrap pagecomputerGame"},[t("cm-header",{attrs:{tit:"电子游艺",type:"black"}},[t("template",{slot:"right"},[t("v-uni-view",{staticClass:"search",on:{click:function(e){e=a.$handleEvent(e),a.search(e)}}})],1)],2),t("v-uni-scroll-view",{staticClass:"scroll-box",attrs:{"scroll-y":"true"},on:{scrolltolower:function(e){e=a.$handleEvent(e),a.getGameList(void 0)}}},[t("v-uni-view",{staticClass:"cm-head-placeholder"}),t("v-uni-view",{staticClass:"search-bar-holder",style:{paddingTop:a.APPSTATUSBARHEIGHT}}),t("v-uni-view",{staticClass:"banner"},[t("v-uni-swiper",{staticClass:"imageContainer",attrs:{circular:"",autoplay:""},on:{change:function(e){e=a.$handleEvent(e),a.bannerSwiperChange(e)}}},a._l(a.bannerArray,function(e,i){return t("v-uni-swiper-item",{key:i,staticClass:"swiperitem"},[t("img",{attrs:{src:e.imgUrl},on:{click:function(t){t=a.$handleEvent(t),a.jump(e.jumpUrl)}}})])}),1),t("v-uni-view",{staticClass:"dot-wrap flex main-center"},a._l(a.bannerArray,function(e,i){return t("v-uni-view",{key:i,staticClass:"dot",class:[a.bannerSwiperCurrIndex==i?"active":""]})}),1)],1),t("v-uni-view",{staticClass:"chancel"},[t("v-uni-view",{staticClass:"inner flex main-center"},[a._l(a.platformList,function(e,i){return[t("v-uni-view",{key:e.platformCode+"_"+i,staticClass:"item",class:["cm-pf-"+e.platformCode,e.platformCode==a.gameParams.platformCode?"active":""],on:{click:function(t){t=a.$handleEvent(t),a.pfClickCallBack(e.platformCode,i)}}})]})],2)],1),t("v-uni-view",{staticClass:"transfer flex cross-center main-justify cm-mg"},[t("v-uni-view",{staticClass:"left"},[t("v-uni-text",{staticClass:"game"},[a._v(a._s(a.selectedGame.platformName))]),t("v-uni-text",{staticClass:"label"},[a._v("平台余额")]),t("v-uni-text",{staticClass:"balance"},[a._v("￥"+a._s(a.selectedGame.balance))])],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-text",{staticClass:"transferin",on:{click:function(e){e=a.$handleEvent(e),a.transferFuc("in")}}},[a._v("转入")]),t("v-uni-text",{staticClass:"transferOut",on:{click:function(e){e=a.$handleEvent(e),a.transferFuc("out")}}},[a._v("转出")])],1)],1),t("v-uni-view",{staticClass:"class-filter flex cross-center main-justify"},[a._l(a.classArray,function(e,i){return[t("v-uni-view",{key:e.label,staticClass:"item",class:[i==a.classIndex||"isHot"==e.key&&1==e.active||"isNew"==e.key&&1==e.active?"active":""],on:{click:function(t){t=a.$handleEvent(t),a.clickSubType(e.key,i)}}},[a._v(a._s(e.label))])]})],2),t("v-uni-view",{staticClass:"list flex flex-wrap "},[a._l(a.gameList.list,function(e,i){return[t("v-uni-view",{key:e.dsfGameId+"_"+i,staticClass:"item",on:{click:function(t){t=a.$handleEvent(t),a.BeforeJump(e)}}},[t("v-uni-image",{staticClass:"cm-img-placehold",attrs:{mode:"scaleToFill",src:e.picHost+e.mainPicUrl}}),t("v-uni-text",[a._v(a._s(e.gameName))])],1)]})],2),t("uni-load-more",{attrs:{loadingType:a.LoadingType}}),t("game-balance-tip",{ref:"gameBalanceTip",attrs:{jumpUrl:a.JumpUrl,ajaxUrl:a.AjaxUrl}})],1)],1)},n=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return n})},e114:function(a,e,t){"use strict";t.r(e);var i=t("3fc3"),n=t.n(i);for(var r in i)"default"!==r&&function(a){t.d(e,a,function(){return i[a]})}(r);e["default"]=n.a}}]);