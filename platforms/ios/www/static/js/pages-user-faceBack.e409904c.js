(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-faceBack"],{"46f7":function(t,e,n){"use strict";n.r(e);var a=n("98a9"),i=n("e85f");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("b856");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"83546e54",null);e["default"]=c.exports},"55cb":function(t,e,n){var a=n("c4f2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4ffc624b",a,!0,{sourceMap:!1,shadowMode:!1})},6056:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("9d81"),i=n("e7c9"),s={data:function(){return{params:{title:"",content:"",feedbackType:1},winHeight:0,loading:!1,feedBackType:[{type:1,label:"充值类型"},{type:2,label:"提款问题"},{type:3,label:"彩票相关问题"},{type:4,label:"真人游戏问题"},{type:5,label:"登录注册问题"}],feedBackIndex:0}},created:function(){try{this.winHeight=uni.getSystemInfoSync().windowHeight+"px"}catch(t){this.winHeight="100%"}},methods:{bindPickerChange:function(t){var e=t.target.value;console.log(this.feedBackType[e]),this.params.feedbackType=this.feedBackType[e].type,this.feedBackIndex=e},submit:function(){this.params.title.length>25?uni.showToast({title:"请输入25字以内的标题",duration:1e3,mask:!0,icon:"none"}):0!=this.params.title.length?0!=this.params.content.length?this.params.content.length>100?uni.showToast({title:"请输入100字以内的反馈内容",duration:1e3,mask:!0,icon:"none"}):(uni.showLoading({title:"提交中，请耐心等待.."}),(0,a.Apifeedback)(this.params).then(function(t){"ERROR"!==t.code&&(uni.hideLoading(),uni.showToast({title:t.msg,duration:1e3,mask:!0,icon:"none"}),setTimeout(function(){(0,i.backOrNavToPage)("pages/user/feedbackList")},800))})):uni.showToast({title:"请输入反馈内容",duration:1e3,mask:!0,icon:"none"}):uni.showToast({title:"请输入标题",duration:1e3,mask:!0,icon:"none"})}}};e.default=s},"98a9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cm-wrap faceBack"},[n("cm-header",{attrs:{type:"black",tit:"意见反馈"}}),n("v-uni-scroll-view",{staticClass:"content",style:{height:t.winHeight},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"cm-head-placeholder"}),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"tit"},[t._v("标题")]),n("v-uni-input",{attrs:{"placeholder-style":"color:#B3B3B3;font-size:28upx;",placeholder:"请输入25字以内的标题"},model:{value:t.params.title,callback:function(e){t.$set(t.params,"title","string"===typeof e?e.trim():e)},expression:"params.title"}})],1),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"tit"},[t._v("类型")]),n("v-uni-picker",{attrs:{range:t.feedBackType,value:t.feedBackIndex,"range-key":"label"},on:{change:function(e){e=t.$handleEvent(e),t.bindPickerChange(e)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.feedBackType[t.feedBackIndex].label))])],1)],1),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"tit"},[t._v("内容")]),n("v-uni-textarea",{attrs:{"placeholder-style":"color:#B3B3B3;font-size:28upx;",placeholder:"请输入100字以内的反馈内容"},model:{value:t.params.content,callback:function(e){t.$set(t.params,"content","string"===typeof e?e.trim():e)},expression:"params.content"}})],1),n("v-uni-view",{staticClass:"tip"},[n("v-uni-view",{staticClass:"txt"},[t._v("非常谢谢您的宝贵意见")]),n("v-uni-view",{staticClass:"txt"},[t._v("我们会尽快采纳并提交您提交的内容")])],1),n("v-uni-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.submit(e)}}},[t._v("提交")])],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b856:function(t,e,n){"use strict";var a=n("55cb"),i=n.n(a);i.a},c4f2:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*底部tabbar高度*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.faceBack .content[data-v-83546e54]{height:100%;width:100%;position:absolute;left:0;top:0;padding:0 %?24?%;-webkit-box-sizing:border-box;box-sizing:border-box}.faceBack uni-input[data-v-83546e54]{height:%?88?%;width:100%;background:#fff;font-size:%?28?%;padding:0 %?20?% 0;border-radius:%?8?%;-webkit-box-sizing:border-box;box-sizing:border-box}.faceBack .tit[data-v-83546e54]{line-height:%?84?%;color:#666;font-size:%?28?%}.faceBack uni-textarea[data-v-83546e54]{height:%?375?%;background:#fff;font-size:%?28?%;padding:%?20?%;border-radius:%?8?%;-webkit-box-sizing:border-box;box-sizing:border-box}.faceBack .tip[data-v-83546e54]{margin-top:%?20?%}.faceBack .tip .txt[data-v-83546e54]{font-size:%?28?%;color:#b3b3b3;line-height:1.2}.faceBack .btn[data-v-83546e54]{position:absolute;bottom:%?30?%;left:0;width:100%;height:%?88?%;line-height:%?88?%;border-radius:%?10?%}',""])},e7c9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.backOrNavToPage=void 0;var a=function(t){var e=getCurrentPages(),n=e[e.length-2],a=e[e.length-3];n&&n.route==t?uni.navigateBack({delta:1}):a&&a.route==t?uni.navigateBack({delta:2}):(console.error("跳转的"),uni.navigateTo({url:"/"+t}))};e.backOrNavToPage=a},e85f:function(t,e,n){"use strict";n.r(e);var a=n("6056"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a}}]);