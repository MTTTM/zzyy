(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-messageCenter"],{"61f4":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n={data:function(){return{}},components:{},computed:{},methods:{},onLoad:function(e){}};r.default=n},"80de":function(e,r,a){"use strict";var n=a("cf18"),t=a.n(n);t.a},"8f17":function(e,r,a){"use strict";a.r(r);var n=a("61f4"),t=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(r,e,function(){return n[e]})}(i);r["default"]=t.a},cf18:function(e,r,a){var n=a("cfec");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var t=a("4f06").default;t("008d1645",n,!0,{sourceMap:!1,shadowMode:!1})},cf44:function(e,r,a){"use strict";var n=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-uni-view",{staticClass:"cm-wrap"},[a("cm-header",{attrs:{type:"black",tit:"消息中心"}}),a("v-uni-view",{staticClass:"cm-mg"},[a("v-uni-view",{staticStyle:{height:"24upx"}}),a("v-uni-view",{staticClass:"record-container"},[a("v-uni-navigator",{attrs:{url:"/pages/user/noticeList","hover-class":"none"}},[a("v-uni-view",{staticClass:"record-item btmline flex cross-center"},[a("v-uni-view",{staticClass:"icon notice"}),a("v-uni-view",{staticClass:"title"},[e._v("公告")])],1)],1),a("v-uni-navigator",{attrs:{url:"/pages/user/message","hover-class":"none"}},[a("v-uni-view",{staticClass:"record-item btmline flex cross-center"},[a("v-uni-view",{staticClass:"icon message"}),a("v-uni-view",{staticClass:"title"},[e._v("站内信")])],1)],1)],1)],1)],1)},t=[];a.d(r,"a",function(){return n}),a.d(r,"b",function(){return t})},cfec:function(e,r,a){var n=a("b041");r=e.exports=a("2350")(!1),r.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*底部tabbar高度*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*换行*/\n/*\n\t主轴方向：从左到右(默认)\n*/\n/*\n\t主轴方向：从右到左\n*/\n/*\n\t主轴方向：从上到下\n*/\n/*\n\t主轴方向：从下到上\n*/\n/*\n\t主轴对齐方式：从左到右(默认)\n*/\n/*\n\t主轴对齐方式：从右到左\n*/\n/*\n\t主轴对齐方式：两端对齐\n*/\n/*\n\t主轴对齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：从上到下(默认)\n*/\n/*\n\t交叉轴齐方式：从下到上\n*/\n/*\n\t交叉轴齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：跟随内容高度对齐\n*/\n/*\n\t交叉轴齐方式：高度并排铺满\n*/\n/*\n\t子元素平分宽度\n*/.record-container[data-v-6a08d588]{background-color:#fff;border-radius:%?12?%}.record-container .record-item[data-v-6a08d588]{height:%?96?%;position:relative}.record-container .record-item.btmline[data-v-6a08d588]{position:relative}.record-container .record-item.btmline[data-v-6a08d588]:after{position:absolute;bottom:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#e6e6e6;z-index:10}.record-container .record-item[data-v-6a08d588]:before{content:"";width:%?14?%;height:%?26?%;position:absolute;right:%?40?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background:url('+n(a("6496"))+") no-repeat 50%;background-size:contain}.record-container .record-item .icon[data-v-6a08d588]{width:%?50?%;height:%?50?%;margin:0 %?32?% 0 %?44?%;background-size:contain;background-repeat:no-repeat}.record-container .record-item .icon.recharge[data-v-6a08d588]{background-image:url("+n(a("b13a"))+")}@media screen and (-webkit-device-pixel-ratio:1){.record-container .record-item .icon.recharge[data-v-6a08d588]{background-image:url("+n(a("a978"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.record-container .record-item .icon.recharge[data-v-6a08d588]{background-image:url("+n(a("b13a"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.record-container .record-item .icon.recharge[data-v-6a08d588]{background-image:url("+n(a("ae5d"))+")}}.record-container .record-item .icon.Withdraw[data-v-6a08d588]{background-image:url("+n(a("02f3"))+")}@media screen and (-webkit-device-pixel-ratio:1){.record-container .record-item .icon.Withdraw[data-v-6a08d588]{background-image:url("+n(a("6ec4"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.record-container .record-item .icon.Withdraw[data-v-6a08d588]{background-image:url("+n(a("02f3"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.record-container .record-item .icon.Withdraw[data-v-6a08d588]{background-image:url("+n(a("debe"))+")}}.record-container .record-item .icon.transfer[data-v-6a08d588]{background-image:url("+n(a("34a8"))+")}@media screen and (-webkit-device-pixel-ratio:1){.record-container .record-item .icon.transfer[data-v-6a08d588]{background-image:url("+n(a("ee9e"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.record-container .record-item .icon.transfer[data-v-6a08d588]{background-image:url("+n(a("34a8"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.record-container .record-item .icon.transfer[data-v-6a08d588]{background-image:url("+n(a("cd96"))+")}}.record-container .record-item .icon.notice[data-v-6a08d588]{background-image:url("+n(a("ecf4"))+")}@media screen and (-webkit-device-pixel-ratio:1){.record-container .record-item .icon.notice[data-v-6a08d588]{background-image:url("+n(a("b3fb"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.record-container .record-item .icon.notice[data-v-6a08d588]{background-image:url("+n(a("ecf4"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.record-container .record-item .icon.notice[data-v-6a08d588]{background-image:url("+n(a("794f"))+")}}.record-container .record-item .icon.message[data-v-6a08d588]{background-image:url("+n(a("e7a7"))+")}@media screen and (-webkit-device-pixel-ratio:1){.record-container .record-item .icon.message[data-v-6a08d588]{background-image:url("+n(a("0a57"))+")}}@media screen and (-webkit-device-pixel-ratio:2){.record-container .record-item .icon.message[data-v-6a08d588]{background-image:url("+n(a("e7a7"))+")}}@media screen and (-webkit-device-pixel-ratio:3){.record-container .record-item .icon.message[data-v-6a08d588]{background-image:url("+n(a("ec88"))+")}}.record-container .record-item .title[data-v-6a08d588]{font-size:%?26?%;color:#333;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}",""])},d7cf:function(e,r,a){"use strict";a.r(r);var n=a("cf44"),t=a("8f17");for(var i in t)"default"!==i&&function(e){a.d(r,e,function(){return t[e]})}(i);a("80de");var c=a("2877"),o=Object(c["a"])(t["default"],n["a"],n["b"],!1,null,"6a08d588",null);r["default"]=o.exports}}]);