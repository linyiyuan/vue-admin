(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78869c5a"],{"7b19":function(e,r,t){"use strict";t.r(r);t("a15b"),t("13d5"),t("b64b");var n=t("5530"),c=t("ade3"),a=t("53ca"),i=t("961b");function o(e){return e}r["default"]={name:"Views",functional:!0,props:{view:{type:Object},record:{type:Object,required:!0},field:{type:String,required:!0},component:{type:[Function,Object],default:null}},render:function(e,r){var t=r.props,d=r.parent,u=t.record[t.field];if(!t.view)return e("span",[u]);var p=t.view,b=p.config,f=void 0===b?{}:b,l=p.join,j=p.handler,s=p.getViewValue,v=void 0===s?o:s,w=t.component,O=l&&"object"===Object(a["a"])(l);if(O){var y=Object(i["c"])(t.record,t.field)?Object(c["a"])({},t.field,u):{};u=Array.isArray(l)?l.reduce((function(e,r){return e[r]=t.record[r],e}),y):Object.keys(l).reduce((function(e,r){return e[l[r]]=t.record[r],e}),y)}if(u=v.call(d,u),w){var g=O?Object(n["a"])({},u,{},f):Object(n["a"])({data:u},f);return e(w,{props:Object(n["a"])({},g)})}return j?e("span",[j.call(d,u,f)]):void 0}}},a15b:function(e,r,t){"use strict";var n=t("23e7"),c=t("44ad"),a=t("fc6a"),i=t("a640"),o=[].join,d=c!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:d||!u},{join:function(e){return o.call(a(this),void 0===e?",":e)}})}}]);