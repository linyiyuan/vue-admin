(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b51413e"],{"22c8":function(t,e,n){"use strict";var r=n("c5f5");e["a"]={mixins:[r["a"]],props:{struct:{type:Function,default:function(){return[]}},value:{required:!0}},computed:{model:{get:function(){try{return JSON.parse(this.value)}catch(e){var t=this.struct();return this.model=t,t}},set:function(t){this.$emit("input",JSON.stringify(t))}}}}},a36c:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("EditorArrayCheckbox",t._g(t._b({model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},"EditorArrayCheckbox",t.$attrs,!1),t.listenersWithoutInput))},i=[],u=(n("d3b7"),n("22c8")),c={name:"EditorArrayJSONCheckbox",components:{EditorArrayCheckbox:function(){return n.e("chunk-7f08d1d8").then(n.bind(null,"d5d4"))}},mixins:[u["a"]],inheritAttrs:!0},o=c,s=n("2877"),a=Object(s["a"])(o,r,i,!1,null,null,null);e["default"]=a.exports},c5f5:function(t,e,n){"use strict";var r=n("5530");e["a"]={computed:{listenersWithoutInput:function(){var t=Object(r["a"])({},this.$listeners);return delete t.input,t}}}}}]);