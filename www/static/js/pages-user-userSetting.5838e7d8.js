(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-userSetting"],{"1f18":function(n,t,i){"use strict";i.r(t);var e=i("4569"),o=i("9c51");for(var a in o)"default"!==a&&function(n){i.d(t,n,function(){return o[n]})}(a);i("62f8");var s=i("2877"),c=Object(s["a"])(o["default"],e["a"],e["b"],!1,null,"fc9dcb12",null);t["default"]=c.exports},4569:function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"cm-wrap"},[i("cm-header",{attrs:{type:"black",tit:"用户设置"}}),i("v-uni-view",{staticStyle:{height:"24upx"}}),i("v-uni-navigator",{attrs:{url:"/pages/user/personalInfomation","hover-class":"none"}},[i("v-uni-view",{staticClass:"setting-bar flex cross-center"},[i("v-uni-view",{staticClass:"title"},[n._v("个人资料")])],1)],1),i("v-uni-navigator",{attrs:{url:"/pages/user/aboutUs","hover-class":"none"}},[i("v-uni-view",{staticClass:"setting-bar flex cross-center"},[i("v-uni-view",{staticClass:"title"},[n._v("关于我们")])],1)],1),n.version?i("v-uni-view",{staticClass:"setting-bar version flex cross-center"},[i("v-uni-view",{staticClass:"title"},[n._v("当前版本："+n._s(n.version))])],1):n._e(),i("v-uni-view",{staticStyle:{height:"24upx"}}),i("v-uni-button",{staticClass:"login-out",on:{click:function(t){t=n.$handleEvent(t),n.logoutComfirm(t)}}},[n._v("退出登录")])],1)},o=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return o})},"62f8":function(n,t,i){"use strict";var e=i("6a4d"),o=i.n(e);o.a},6496:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0IzOTEzNzkxN0YzMTFFOUFCNUJEREU4QUNBNEU5OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0IzOTEzN0ExN0YzMTFFOUFCNUJEREU4QUNBNEU5OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QjM5MTM3NzE3RjMxMUU5QUI1QkRERThBQ0E0RTk4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QjM5MTM3ODE3RjMxMUU5QUI1QkRERThBQ0E0RTk4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pips/BkAAAE2SURBVHjajNQ/KEVhHMbxc49SlGRQikExWkxGAykDSbLIpKQ7ECJSuAb/opQSm8JkMJxJlMFmNTGw3AmRRbHw/dUznMX7e5/61O8dns4973nfW8iy7ChJklGM4zSJSIpBVOEYw7GlOfyiAifojynZE4oqVuIcPV7JcoipXPECnV7Jso8ZzdXI0OGVLHt6R0sNLtHulSw7WNRcq2KbV7JsYkVzPa7Q6pUsayhpbsANmr2SZRXrmptwjcY04gAs6T0tLdiOKRVQl1t/pxGFA4xpfY/Z1CnYd5vQ+hHd+AiVdjGp+RldeAnt3hamNZf1hHLoO9m3mdf8qsJT6EQsi+VdP+khdPYWcifgE73arX9PuV2JDc1f6MNd6D4VtVOWHwzg1ru5pVxhSCfa/Y84wxtGdFvd/AkwAIAZPC2vsW0WAAAAAElFTkSuQmCC"},"6a4d":function(n,t,i){var e=i("cf1c");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var o=i("4f06").default;o("e02d355a",e,!0,{sourceMap:!1,shadowMode:!1})},"9c51":function(n,t,i){"use strict";i.r(t);var e=i("ca79"),o=i.n(e);for(var a in e)"default"!==a&&function(n){i.d(t,n,function(){return e[n]})}(a);t["default"]=o.a},ca79:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("9d81"),o={data:function(){return{version:""}},methods:{m:function(){uni.showToast({title:"该功能正在开发中，敬请期待！",duration:2e3,icon:"none"})},logoutComfirm:function(){var n=this;uni.showModal({title:"提示",content:"是否退出?",success:function(t){t.confirm&&(n.$store.commit("user/reset"),n.logout())}})},logout:function(){(0,e.ApiLogout)().then(function(n){"12200"==n.code&&uni.reLaunch({url:"/pages/login/login"})})},getVersion:function(){var n=this;try{plus.runtime.getProperty(plus.runtime.appid,function(t){n.version=t.version,console.log("当前应用版本："+t.version)})}catch(t){console.log("=========获取用户版本号失败(网页请忽略)==============")}}},onLoad:function(){this.getVersion()}};t.default=o},cf1c:function(n,t,i){var e=i("b041");t=n.exports=i("2350")(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*底部tabbar高度*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*换行*/\n/*\n\t主轴方向：从左到右(默认)\n*/\n/*\n\t主轴方向：从右到左\n*/\n/*\n\t主轴方向：从上到下\n*/\n/*\n\t主轴方向：从下到上\n*/\n/*\n\t主轴对齐方式：从左到右(默认)\n*/\n/*\n\t主轴对齐方式：从右到左\n*/\n/*\n\t主轴对齐方式：两端对齐\n*/\n/*\n\t主轴对齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：从上到下(默认)\n*/\n/*\n\t交叉轴齐方式：从下到上\n*/\n/*\n\t交叉轴齐方式：居中对齐\n*/\n/*\n\t交叉轴齐方式：跟随内容高度对齐\n*/\n/*\n\t交叉轴齐方式：高度并排铺满\n*/\n/*\n\t子元素平分宽度\n*/.setting-bar[data-v-fc9dcb12]{height:%?88?%;padding:0 %?24?%;background-color:#fff;position:relative;position:relative}.setting-bar[data-v-fc9dcb12]:after{position:absolute;bottom:0;right:0;left:0;height:%?2?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#e6e6e6;z-index:10}.setting-bar[data-v-fc9dcb12]:before{content:"";width:%?14?%;height:%?26?%;position:absolute;right:%?20?%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);background:url('+e(i("6496"))+") no-repeat 50%;background-size:contain}.setting-bar .title[data-v-fc9dcb12]{font-size:%?30?%;color:#333}.login-out[data-v-fc9dcb12]{height:%?88?%;line-height:%?88?%;font-size:%?30?%;color:#333;border:0 none;background-color:#fff;border-radius:0;text-align:center}.login-out[data-v-fc9dcb12]:after{display:none}.version[data-v-fc9dcb12]:before{display:none}",""])}}]);