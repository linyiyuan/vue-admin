(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b09eea1"],{2638:function(n,e,r){"use strict";function t(){return t=Object.assign||function(n){for(var e,r=1;r<arguments.length;r++)for(var t in e=arguments[r],e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n},t.apply(this,arguments)}var i=["attrs","props","domProps"],a=["class","style","directives"],o=["on","nativeOn"],s=function(n){return n.reduce((function(n,e){for(var r in e)if(n[r])if(-1!==i.indexOf(r))n[r]=t({},n[r],e[r]);else if(-1!==a.indexOf(r)){var s=n[r]instanceof Array?n[r]:[n[r]],c=e[r]instanceof Array?e[r]:[e[r]];n[r]=s.concat(c)}else if(-1!==o.indexOf(r))for(var u in e[r])if(n[r][u]){var p=n[r][u]instanceof Array?n[r][u]:[n[r][u]],l=e[r][u]instanceof Array?e[r][u]:[e[r][u]];n[r][u]=p.concat(l)}else n[r][u]=e[r][u];else if("hook"==r)for(var d in e[r])n[r][d]=n[r][d]?f(n[r][d],e[r][d]):e[r][d];else n[r]=e[r];else n[r]=e[r];return n}),{})},f=function(n,e){return function(){n&&n.apply(this,arguments),e&&e.apply(this,arguments)}};n.exports=s},"41f80":function(n,e,r){"use strict";r.r(e);var t=r("2638"),i=r.n(t);e["default"]={name:"EditorText",functional:!0,props:{value:{type:String,required:!0}},render:function(n,e){return n("el-input",i()([{attrs:{type:"textarea"}},e.data]))}}}}]);