(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wallet-pay-payScanQR"],{"01a5":function(e,a,n){"use strict";var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-uni-view",{staticClass:"page-pay-scan-QR cm-wrap"},[n("cm-header",{attrs:{tit:"充值扫码",type:"black"}}),n("v-uni-view",{staticClass:"panel"},[n("v-uni-view",{staticClass:"tit cm-mg"},[e._v("支付通道")]),n("v-uni-view",{staticClass:"inner"},[n("v-uni-view",{staticClass:"cm-form-item"},[n("v-uni-view",{staticClass:"cm-mg flex cross-center"},[n("v-uni-view",{staticClass:"label"},[e._v("收款账户")]),n("v-uni-view",{staticClass:"flex-box-1"},[n("v-uni-view",{staticClass:"input"},[e._v(e._s(e.queryObject.accountName))])],1),n("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.queryObject.accountName,expression:"queryObject.accountName",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"icon icon-copy"})],1)],1),n("v-uni-view",{staticClass:"cm-form-item"},[n("v-uni-view",{staticClass:"cm-mg flex cross-center"},[n("v-uni-view",{staticClass:"label"},[e._v("收款人")]),n("v-uni-view",{staticClass:"flex-box-1"},[n("v-uni-view",{staticClass:"input"},[e._v(e._s(e.queryObject.accountNo))])],1),n("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.queryObject.accountNo,expression:"queryObject.accountNo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"icon icon-copy"})],1)],1),n("v-uni-view",{staticClass:"cm-form-item"},[n("v-uni-view",{staticClass:"cm-mg flex cross-center"},[n("v-uni-view",{staticClass:"label"},[e._v("收款方式")]),n("v-uni-view",{staticClass:"flex-box-1"},[n("v-uni-view",{staticClass:"input"},[e._v(e._s(e.queryObject.payType))])],1),n("v-uni-view",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.queryObject.payType,expression:"queryObject.payType",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticClass:"icon icon-copy"})],1)],1)],1)],1),n("v-uni-view",{staticClass:"scanQR"},[n("v-uni-image",{attrs:{src:e.queryObject.qrCodeUrl},on:{longpress:function(a){a=e.$handleEvent(a),e.longTabFunc(e.queryObject.qrCodeUrl)}}}),n("v-uni-view",{staticClass:"desc"},[n("v-uni-view",{staticClass:"text"},[e._v("请用"+e._s(e.payTypeName)+"扫二维码")]),n("v-uni-view",{staticClass:"text"},[e._v("或者保存到本地在"+e._s(e.payTypeName)+"中识别")])],1)],1),n("v-uni-view",{staticClass:"btm-btn cm-mg flex"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(a){a=e.$handleEvent(a),e.prevPage(a)}}},[e._v("上一步")]),n("v-uni-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(a){a=e.$handleEvent(a),e.submit(a)}}},[e._v("确定提交")])],1)],1)},r=[];n.d(a,"a",function(){return t}),n.d(a,"b",function(){return r})},"38e0":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.ApiscTransfer=a.Apionline=a.ApilistRecord=a.ApigetEnabledOnlinePayType=a.ApigetEnabledOnlinePayChannel=a.ApigetEnabledDueScAccount=a.ApigetEnabledDueBankCard=a.ApibankTransfer=void 0;var t=r(n("7578"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,a){return s(e)||o(e,a)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,a){var n=[],t=!0,r=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(t=(c=o.next()).done);t=!0)if(n.push(c.value),a&&n.length===a)break}catch(s){r=!0,i=s}finally{try{t||null==o["return"]||o["return"]()}finally{if(r)throw i}}return n}function s(e){if(Array.isArray(e))return e}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/bankTransfer")};a.ApibankTransfer=u;var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/getEnabledDueBankCard")};a.ApigetEnabledDueBankCard=l;var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/getEnabledDueScAccount")};a.ApigetEnabledDueScAccount=p;var b=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(arguments.length>1&&arguments[1],"?"),n=0,r=Object.entries(e);n<r.length;n++){var c=i(r[n],2),o=c[0],s=c[1];a+=o+"="+s+"&"}return t.default.POST({},"recharge/getEnabledOnlinePayChannel"+a)};a.ApigetEnabledOnlinePayChannel=b;var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/getEnabledOnlinePayType")};a.ApigetEnabledOnlinePayType=v;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/listRecord")};a.ApilistRecord=d;var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/online")};a.Apionline=f;var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return t.default.POST(e,"recharge/scTransfer")};a.ApiscTransfer=y},"50be":function(e,a,n){a=e.exports=n("2350")(!1),a.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*底部tabbar高度*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.page-pay-bank-confirm .panel .inner[data-v-bc84b2ec],.page-pay-scan-QR .panel .inner[data-v-bc84b2ec]{background:#fff}.page-pay-bank-confirm .panel .tit[data-v-bc84b2ec],.page-pay-scan-QR .panel .tit[data-v-bc84b2ec]{line-height:%?50?%;font-size:%?28?%;color:#b3b3b3}.page-pay-bank-confirm .panel .label[data-v-bc84b2ec],.page-pay-scan-QR .panel .label[data-v-bc84b2ec]{color:#b3b3b3}.page-pay-bank-confirm .panel .input[data-v-bc84b2ec],.page-pay-scan-QR .panel .input[data-v-bc84b2ec]{color:#333}.page-pay-bank-confirm .tip[data-v-bc84b2ec],.page-pay-scan-QR .tip[data-v-bc84b2ec]{font-size:%?24?%;color:#16afe9;line-height:%?57?%;margin-bottom:%?9?%}.page-pay-bank-confirm .btm-btn[data-v-bc84b2ec],.page-pay-scan-QR .btm-btn[data-v-bc84b2ec]{margin-top:%?50?%}.page-pay-bank-confirm .btm-btn uni-button[data-v-bc84b2ec],.page-pay-scan-QR .btm-btn uni-button[data-v-bc84b2ec]{width:%?339?%}.page-pay-bank-confirm .btm-btn uni-button+uni-button[data-v-bc84b2ec],.page-pay-scan-QR .btm-btn uni-button+uni-button[data-v-bc84b2ec]{margin-left:%?24?%}.page-pay-scan-QR .scanQR[data-v-bc84b2ec]{margin-top:%?86?%}.page-pay-scan-QR .scanQR uni-image[data-v-bc84b2ec]{width:%?400?%;height:%?400?%;display:block;margin:0 auto %?28?%;background:#fff}.page-pay-scan-QR .scanQR .desc[data-v-bc84b2ec]{font-size:%?28?%;color:#b3b3b3;line-height:1.2;text-align:center}',""])},"7f7a":function(e,a,n){var t=n("50be");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var r=n("4f06").default;r("0175d8c9",t,!0,{sourceMap:!1,shadowMode:!1})},"8ffd":function(e,a,n){"use strict";n.r(a);var t=n("01a5"),r=n("e512");for(var i in r)"default"!==i&&function(e){n.d(a,e,function(){return r[e]})}(i);n("bcd0");var c=n("2877"),o=Object(c["a"])(r["default"],t["a"],t["b"],!1,null,"bc84b2ec",null);a["default"]=o.exports},"963a":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=n("38e0"),r={data:function(){return{loading:!1,queryObject:{}}},computed:{payTypeName:function(){var e=this.queryObject.payType;switch(e){case"ZFB":return"支付宝";case"QQ":return"QQ";case"WX":return"微信"}}},onLoad:function(e){this.queryObject=this.Decode(e.queryString),console.log(" this.queryObject",this.queryObject)},methods:{onCopy:function(){uni.showToast({title:"复制成功",duration:1e3,icon:"none"})},onError:function(){uni.showToast({title:"复制失败",duration:1e3,icon:"none"})},longTabFunc:function(e){},submit:function(){var e=this;this.loading=!0,(0,t.ApiscTransfer)({amount:this.queryObject.money,dueScAccountId:this.queryObject.dueScAccountId}).then(function(a){if(e.loading=!1,"ERROR"!=a.code){var n=Object.assign({},{orderNo:a.data.orderNo,money:e.queryObject.money,qrcode:e.queryObject.qrCodeUrl}),t=JSON.stringify(n),r=encodeURIComponent(t);uni.redirectTo({url:"/pages/wallet/pay/payScanQRfinshed?queryString=".concat(r)})}})},prevPage:function(){uni.navigateBack({delta:1})}}};a.default=r},bcd0:function(e,a,n){"use strict";var t=n("7f7a"),r=n.n(t);r.a},e512:function(e,a,n){"use strict";n.r(a);var t=n("963a"),r=n.n(t);for(var i in t)"default"!==i&&function(e){n.d(a,e,function(){return t[e]})}(i);a["default"]=r.a}}]);