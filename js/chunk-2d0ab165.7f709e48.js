(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab165"],{"147c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guide"},[n("div",{staticClass:"app-introduce"},[t._v("\n        "+t._s(t.$t("guide.description"))+"\n        "),n("a",{attrs:{href:"https://github.com/kamranahmedse/driver.js",target:"_blank"}},[t._v("driver.js")])]),n("el-button",{attrs:{icon:"el-icon-question",type:"primary"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.startGuide(e)}}},[t._v(t._s(t.$t("guide.button")))])],1)},a=[],o=(n("7f7f"),n("ac6a"),n("c24c")),r=n.n(o),c=(n("01d7"),[{element:"#cola",popover:{name:"Cola",title:"Cola",description:"Open && Close sidebar",position:"bottom"}},{element:"#app-breadcrumb",popover:{name:"Breadcrumb",title:"Breadcrumb",description:"Indicate the current page location",position:"bottom"}},{element:"#languageSelect",popover:{name:"Language",title:"Language",description:"Switch the system language",position:"left"}}]),s=c,p={name:"guide",data:function(){return{driver:null}},mounted:function(){this.driver=new r.a({padding:0})},methods:{startGuide:function(){var t=this;s.forEach(function(e){var n=e.popover.name;e.popover.title=t.$t("guide.".concat(n,".title")),e.popover.description=t.$t("guide.".concat(n,".description"))}),this.driver.defineSteps(s),this.driver.start()}}},u=p,d=n("2877"),l=Object(d["a"])(u,i,a,!1,null,null,null);e["default"]=l.exports}}]);