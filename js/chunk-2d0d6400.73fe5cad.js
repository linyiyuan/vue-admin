(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6400"],{"726e":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return!t.hasInjectComponent||t.componentsInjected?n(t.layoutComponentName,t._b({tag:"component",scopedSlots:t._u([{key:"label",fn:function(e){return[t._t("label",null,null,e)]}},{key:"default",fn:function(e){return[t._t("default",null,null,e)]}}],null,!0)},"component",t.$attrs,!1)):t._e()},a=[],o=n("18cb"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table"},[n("tbody",t._l(t.fieldLayoutList,(function(e,l){return n("tr",{key:l},[t._l(e,(function(e){return[n("th",{key:e+"_th",attrs:{colspan:t.colspanMapByField[e].label}},[t._t("label",null,{field:e})],2),n("td",{key:e+"_td",attrs:{colspan:t.colspanMapByField[e].field}},[t._t("default",null,{field:e})],2)]})),t.restCols[l]>0?n("td",{attrs:{colspan:t.restCols[l]}}):t._e()],2)})),0)])},r=[],s=(n("caad"),n("d81d"),n("13d5"),n("b64b"),n("2532"),n("2909")),c=n("53ca"),i={label:1,field:1},d={name:"MetaTable",props:{fieldLayoutList:{type:Array,required:!0},mode:{type:String,required:!0},fields:{type:Object,required:!0}},computed:{colspanMapByField:function(){var t=this;return Object.keys(this.fields).reduce((function(e,n){var l=i,a=t.fields[n].colspan;if(a){if(a[t.mode])l=a[t.mode];else if(a.default&&(l=a.default,"object"===Object(c["a"])(a.default))){var o=a.default.exclude;Array.isArray(o)&&o.includes(t.mode)&&(l=i)}"object"!==Object(c["a"])(l)&&(l={label:1,field:l})}return e[n]=l,e}),Object.create(null))},rowColspans:function(){var t=this;return this.fieldLayoutList.map((function(e){return e.reduce((function(e,n){var l=t.colspanMapByField[n];return e+l.label+l.field}),0)}))},maxCol:function(){return Math.max.apply(Math,Object(s["a"])(this.rowColspans))},restCols:function(){var t=this;return this.rowColspans.map((function(e){return t.maxCol-e}))}}},p=d,f=n("2877"),m=Object(f["a"])(p,u,r,!1,null,null,null),b=m.exports,h={name:"MetaFieldsLayout",components:{MetaTable:b},inheritAttrs:!0,props:{layoutComponentName:{type:String,default:"MetaTable"},layoutComponent:{type:[Function,Object],default:null}},data:function(){return{hasInjectComponent:!1,componentsInjected:!1}},watch:{layoutComponent:{handler:function(){var t=this;this.layoutComponent?(this.hasInjectComponent=!0,this.componentsInjected=!1,Object(o["a"])([{name:this.layoutComponentName,component:this.layoutComponent}],this).then((function(){t.componentsInjected=!0}))):this.hasInjectComponent=!1},immediate:!0}}},y=h,j=Object(f["a"])(y,l,a,!1,null,null,null);e["default"]=j.exports}}]);