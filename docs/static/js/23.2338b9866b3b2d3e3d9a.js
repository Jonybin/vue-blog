webpackJsonp([23],{TU2d:function(e,t,n){var i=n("ec50");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("rjj0")("66c3a93e",i,!0)},ec50:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n#i18nView .i18n-card {\n  width: 480px;\n}\n#i18nView .i18n-card .i18n-card-header i {\n  margin-right: 10px;\n  font-size: 20px;\n}\n#i18nView .i18n-card .i18n-card-header span {\n  font-size: 16px;\n  vertical-align: middle;\n}\n#i18nView .i18n-card .languageOption {\n  margin-bottom: 20px;\n}\n#i18nView .i18n-content {\n  margin-top: 40px;\n}\n#i18nView .i18n-content > div {\n  margin-bottom: 30px;\n}\n#i18nView .i18n-content .alert {\n  width: 60%;\n}\n#i18nView .i18n-content .alert .el-alert {\n  margin-bottom: 10px;\n}\n",""])},qu0j:function(e,t,n){"use strict";function i(e){n("TU2d")}Object.defineProperty(t,"__esModule",{value:!0});var a={zh:{i18nView:{note:"目前只翻译了部分内容，往后将会全部实现",button:{round:"圆形按钮",primary:"主要按钮",success:"成功按钮",info:"信息按钮",warning:"警告按钮",danger:"危险按钮"},alert:{success:"成功提示的文案",info:"消息提示的文案",warning:"警告提示的文案",error:"错误提示的文案"},datePickr:"选择日期"}},en:{i18nView:{note:"Only part of the translation at now, and then all will be realized",button:{round:"Round",primary:"Primary",success:"Success",info:"Info",warning:"Warning",danger:"Danger"},alert:{success:"success alert",info:"info alert",warning:"warning alert",error:"error alert"},datePickr:"Pick a day"}}},r={name:"i18nView",data:function(){return{datePickr:"",paginaction:1}},computed:{lang:{get:function(){return this.$store.state.language},set:function(e){this.$store.commit("set_language",e)}}},methods:{handleSizeChange:function(e){console.log(e+" items per page")},handleCurrentChange:function(e){console.log("current page: "+e)},initLocal:function(){this.$te("i18nView")||(this.$i18n.mergeLocaleMessage("zh",a.zh),this.$i18n.mergeLocaleMessage("en",a.en))}},created:function(){this.initLocal()}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"i18nView"}},[n("el-card",{staticClass:"i18n-card"},[n("div",{staticClass:"i18n-card-header",attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"el-icon-fa-globe"}),n("span",[e._v(e._s(e.$t("translations")))])]),e._v(" "),n("div",{staticClass:"languageOption"},[n("el-radio-group",{model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},[n("el-radio",{attrs:{border:"",size:"small",label:"zh"}},[e._v("中文")]),e._v(" "),n("el-radio",{attrs:{border:"",size:"small",label:"en"}},[e._v("English")])],1)],1),e._v(" "),n("el-tag",{attrs:{type:"info"}},[e._v(e._s(e.$t("i18nView.note")))])],1),e._v(" "),n("div",{staticClass:"i18n-content"},[n("div",{staticClass:"button"},[n("el-button",{attrs:{size:"small",round:""}},[e._v(e._s(e.$t("i18nView.button.round")))]),e._v(" "),n("el-button",{attrs:{size:"small",round:"",type:"primary"}},[e._v(e._s(e.$t("i18nView.button.primary")))]),e._v(" "),n("el-button",{attrs:{size:"small",round:"",type:"success"}},[e._v(e._s(e.$t("i18nView.button.success")))]),e._v(" "),n("el-button",{attrs:{size:"small",round:"",type:"info"}},[e._v(e._s(e.$t("i18nView.button.info")))]),e._v(" "),n("el-button",{attrs:{size:"small",round:"",type:"warning"}},[e._v(e._s(e.$t("i18nView.button.warning")))]),e._v(" "),n("el-button",{attrs:{size:"small",round:"",type:"danger"}},[e._v(e._s(e.$t("i18nView.button.danger")))])],1),e._v(" "),n("div",{staticClass:"alert"},[n("el-alert",{attrs:{closable:!1,title:e.$t("i18nView.alert.success"),type:"success"}}),e._v(" "),n("el-alert",{attrs:{closable:!1,title:e.$t("i18nView.alert.info"),type:"info"}}),e._v(" "),n("el-alert",{attrs:{closable:!1,title:e.$t("i18nView.alert.warning"),type:"warning"}}),e._v(" "),n("el-alert",{attrs:{closable:!1,title:e.$t("i18nView.alert.error"),type:"error"}})],1),e._v(" "),n("div",{staticClass:"datePickr"},[n("el-date-picker",{attrs:{type:"date",placeholder:e.$t("i18nView.datePickr")},model:{value:e.datePickr,callback:function(t){e.datePickr=t},expression:"datePickr"}})],1),e._v(" "),n("div",{staticClass:"paginaction"},[n("el-pagination",{attrs:{"current-page":e.paginaction,"page-sizes":[100,200,300,400],"page-size":100,total:1e3,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)},l=[],o={render:s,staticRenderFns:l},c=o,d=n("VU/8"),u=i,g=d(r,c,!1,u,null,null);t.default=g.exports}});