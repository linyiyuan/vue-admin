(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9557"],{3301:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",[n("el-form-item",{attrs:{label:"手机号"}},[n("el-input",{model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password"},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}})],1),n("el-button",{attrs:{type:"success"},on:{click:e.doLogin}},[e._v(" 登录 ")])],1)},l=[],s={data:function(){return{phone:"",pwd:""}},methods:{doLogin:function(){var e=this.phone;if(e){var t=this.pwd;if(t){var n={phone:e,pwd:t};this.$store.dispatch("doLogin",n)}else alert("请输入手机号")}else alert("请输入手机号")}}},a=s,i=n("2877"),p=Object(i["a"])(a,o,l,!1,null,null,null);t["default"]=p.exports}}]);