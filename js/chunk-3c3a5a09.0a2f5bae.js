(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c3a5a09"],{"172e":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r("13d5"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0");var n=r("b85c"),a=r("2909"),o=r("e7a7"),i=r("d63b");function d(e,t){var r,o=new Set(t),i=new Set,d=Object(n["a"])(e);try{for(d.s();!(r=d.n()).done;){var c=r.value;o.has(c)&&i.add(c)}}catch(l){d.e(l)}finally{d.f()}return Object(a["a"])(i)}t["b"]={mixins:[o["a"],i["a"]],props:{isCandidateValid:{type:Boolean,default:!0},handleInvalidValue:{type:Function}},computed:{allValueSet:function(){var e=this;return this.candidate.reduce((function(t,r){return t.add(r[e.valuefield])}),new Set)},allValue:function(){return Object(a["a"])(this.allValueSet)}},created:function(){var e=this;this.handleInvalidValue&&this.$watch((function(){return e.candidate}),this.validateOption,{immediate:!0})}}},"1e3c":function(e,t,r){"use strict";t["a"]={props:{labelfield:{type:String,default:"label"},valuefield:{type:String,default:"value"}}}},6062:function(e,t,r){"use strict";var n=r("6d61"),a=r("6566");e.exports=n("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},6566:function(e,t,r){"use strict";var n=r("9bf2").f,a=r("7c73"),o=r("e2cc"),i=r("0366"),d=r("19aa"),c=r("2266"),l=r("7dd0"),u=r("2626"),s=r("83ab"),f=r("f183").fastKey,y=r("69f3"),A=y.set,h=y.getterFor;e.exports={getConstructor:function(e,t,r,l){var u=e((function(e,n){d(e,u,t),A(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),s||(e.size=0),void 0!=n&&c(n,e[l],e,r)})),y=h(t),v=function(e,t,r){var n,a,o=y(e),i=b(e,t);return i?i.value=r:(o.last=i={index:a=f(t,!0),key:t,value:r,previous:n=o.last,next:void 0,removed:!1},o.first||(o.first=i),n&&(n.next=i),s?o.size++:e.size++,"F"!==a&&(o.index[a]=i)),e},b=function(e,t){var r,n=y(e),a=f(t);if("F"!==a)return n.index[a];for(r=n.first;r;r=r.next)if(r.key==t)return r};return o(u.prototype,{clear:function(){var e=this,t=y(e),r=t.index,n=t.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;t.first=t.last=void 0,s?t.size=0:e.size=0},delete:function(e){var t=this,r=y(t),n=b(t,e);if(n){var a=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=a),a&&(a.previous=o),r.first==n&&(r.first=a),r.last==n&&(r.last=o),s?r.size--:t.size--}return!!n},forEach:function(e){var t,r=y(this),n=i(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:r.first){n(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),o(u.prototype,r?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return v(this,0===e?0:e,t)}}:{add:function(e){return v(this,e=0===e?0:e,e)}}),s&&n(u.prototype,"size",{get:function(){return y(this).size}}),u},setStrong:function(e,t,r){var n=t+" Iterator",a=h(t),o=h(n);l(e,t,(function(e,t){A(this,{type:n,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,r=e.last;while(r&&r.removed)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),u(t)}}},"6d61":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("94ca"),i=r("6eeb"),d=r("f183"),c=r("2266"),l=r("19aa"),u=r("861d"),s=r("d039"),f=r("1c7e"),y=r("d44e"),A=r("7156");e.exports=function(e,t,r){var h=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),b=h?"set":"add",p=a[e],E=p&&p.prototype,m=p,x={},k=function(e){var t=E[e];i(E,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return v&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(v&&!u(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(o(e,"function"!=typeof p||!(v||E.forEach&&!s((function(){(new p).entries().next()})))))m=r.getConstructor(t,e,h,b),d.REQUIRED=!0;else if(o(e,!0)){var C=new m,S=C[b](v?{}:-0,1)!=C,O=s((function(){C.has(1)})),g=f((function(e){new p(e)})),J=!v&&s((function(){var e=new p,t=5;while(t--)e[b](t,t);return!e.has(-0)}));g||(m=t((function(t,r){l(t,m,e);var n=A(new p,t,m);return void 0!=r&&c(r,n[b],n,h),n})),m.prototype=E,E.constructor=m),(O||J)&&(k("delete"),k("has"),h&&k("get")),(J||S)&&k(b),v&&E.clear&&delete E.clear}return x[e]=m,n({global:!0,forced:m!=p},x),y(m,e),v||r.setStrong(m,e,h),m}},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&a(e,i),e}},b1f0:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("table",{staticClass:"table"},[e._m(0),r("tbody",[r("tr",[r("td",[e._v("EditorArrayCheckbox")]),r("td",[e._v(e._s(e.EditorArrayCheckbox))]),r("td",[r("EditorArrayCheckbox",{attrs:{candidate:e.EditorArrayCheckboxCandidate,"handle-invalid-value":e.handleTagInvalid},on:{change:e.handleChange},model:{value:e.EditorArrayCheckbox,callback:function(t){e.EditorArrayCheckbox=t},expression:"EditorArrayCheckbox"}})],1)]),r("tr",[r("td",[e._v("EditorArrayJSONCheckbox")]),r("td",[e._v(e._s(e.EditorArrayJSONCheckbox)+" || "+e._s(typeof e.EditorArrayJSONCheckbox))]),r("td",[r("EditorArrayJSONCheckbox",{attrs:{candidate:e.EditorArrayCheckboxCandidate,"handle-invalid-value":e.handleTagInvalid},on:{change:e.handleChange},model:{value:e.EditorArrayJSONCheckbox,callback:function(t){e.EditorArrayJSONCheckbox=t},expression:"EditorArrayJSONCheckbox"}})],1)]),r("tr",[r("td",[e._v("EditorArrayAsyncCheckbox")]),r("td",[e._v(e._s(e.EditorArrayAsyncCheckbox))]),r("td",[r("EditorArrayAsyncCheckbox",{attrs:{"handle-invalid-value":e.handleTagInvalid,"get-candidate":e.getCandidate.EditorArrayAsyncCheckbox,valuefield:"id",labelfield:"name"},on:{change:e.handleChange},model:{value:e.EditorArrayAsyncCheckbox,callback:function(t){e.EditorArrayAsyncCheckbox=t},expression:"EditorArrayAsyncCheckbox"}})],1)]),r("tr",[r("td",[e._v("EditorArrayJSONAsyncCheckbox")]),r("td",[e._v(e._s(e.EditorArrayJSONAsyncCheckbox)+" || "+e._s(typeof e.EditorArrayJSONAsyncCheckbox))]),r("td",[r("EditorArrayJSONAsyncCheckbox",{attrs:{"handle-invalid-value":e.handleTagInvalid,"get-candidate":e.getCandidate.EditorArrayJSONAsyncCheckbox,valuefield:"id",labelfield:"name"},on:{change:e.handleChange},model:{value:e.EditorArrayJSONAsyncCheckbox,callback:function(t){e.EditorArrayJSONAsyncCheckbox=t},expression:"EditorArrayJSONAsyncCheckbox"}})],1)]),r("tr",[r("td",[e._v("EditorArrayAutocomplete")]),r("td",[e._v(e._s(e.EditorArrayAutocomplete))]),r("td",[r("EditorArrayAutocomplete",{attrs:{candidate:e.EditorArrayAutocompleteCandidate,placeholder:"placeholder2",labelfield:"name",valuefield:"id","handle-invalid-value":e.handleTagInvalid},model:{value:e.EditorArrayAutocomplete,callback:function(t){e.EditorArrayAutocomplete=t},expression:"EditorArrayAutocomplete"}})],1)]),r("tr",[r("td",[e._v("EditorArrayJSONAutocomplete")]),r("td",[e._v(e._s(e.EditorArrayJSONAutocomplete))]),r("td",[r("EditorArrayJSONAutocomplete",{attrs:{candidate:e.EditorArrayAutocompleteCandidate,placeholder:"placeholder2",labelfield:"name",valuefield:"id","handle-invalid-value":e.handleTagInvalid},model:{value:e.EditorArrayJSONAutocomplete,callback:function(t){e.EditorArrayJSONAutocomplete=t},expression:"EditorArrayJSONAutocomplete"}})],1)]),r("tr",[r("td",[e._v("EditorArrayAsyncAutocomplete")]),r("td",[e._v(e._s(e.EditorArrayAsyncAutocomplete))]),r("td",[r("EditorArrayAsyncAutocomplete",{attrs:{labelfield:"name",valuefield:"id","handle-invalid-value":e.handleTagInvalid,"get-candidate":e.getCandidate.EditorArrayAsyncAutocomplete},model:{value:e.EditorArrayAsyncAutocomplete,callback:function(t){e.EditorArrayAsyncAutocomplete=t},expression:"EditorArrayAsyncAutocomplete"}})],1)]),r("tr",[r("td",[e._v("EditorArrayJSONAsyncAutocomplete")]),r("td",[e._v(e._s(e.EditorArrayJSONAsyncAutocomplete)+" || "+e._s(typeof e.EditorArrayJSONAsyncAutocomplete))]),r("td",[r("EditorArrayJSONAsyncAutocomplete",{attrs:{labelfield:"name",valuefield:"id","handle-invalid-value":e.handleTagInvalid,"get-candidate":e.getCandidate.EditorArrayJSONAsyncAutocomplete},model:{value:e.EditorArrayJSONAsyncAutocomplete,callback:function(t){e.EditorArrayJSONAsyncAutocomplete=t},expression:"EditorArrayJSONAsyncAutocomplete"}})],1)])])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("组件名")]),r("th",[e._v("组件值")]),r("th",[e._v("组件实例")])])])}],o=(r("13d5"),r("d3b7"),r("172e")),i=["EditorArrayAsyncCheckbox","EditorArrayJSONAsyncCheckbox","EditorArrayAsyncAutocomplete","EditorArrayJSONAsyncAutocomplete"],d=[{id:1,name:"太年轻"},{id:2,name:"太天真"},{id:3,name:"亦可赛艇"},{id:4,name:"exciting"},{id:5,name:"simple"},{id:6,name:"naive"}],c=i.reduce((function(e,t){return e[t]=function(e){setTimeout((function(){e(d)}),2e3)},e}),{}),l={config:{EditorArrayCheckboxCandidate:[{value:1,label:"aaa"},{value:2,label:"bbb"},{value:3,label:"ccc"},{value:4,label:"ddd"},{value:5,label:"eee"}],EditorArrayAutocompleteCandidate:d,handleTagInvalid:function(e,t){this.$emit("input",Object(o["a"])(e,t))},getCandidate:c},components:{EditorArrayCheckbox:function(){return r.e("chunk-dcbe026e").then(r.bind(null,"d5d4"))},EditorArrayJSONCheckbox:function(){return r.e("chunk-1cbd97e8").then(r.bind(null,"a36c"))},EditorArrayAsyncCheckbox:function(){return r.e("chunk-b4b346ee").then(r.bind(null,"5c71"))},EditorArrayJSONAsyncCheckbox:function(){return r.e("chunk-49bc7ee3").then(r.bind(null,"979c"))},EditorArrayAutocomplete:function(){return r.e("chunk-5d10bbdc").then(r.bind(null,"2bcc"))},EditorArrayJSONAutocomplete:function(){return r.e("chunk-3b90938e").then(r.bind(null,"52a6"))},EditorArrayAsyncAutocomplete:function(){return r.e("chunk-29157c6c").then(r.bind(null,"84c0"))},EditorArrayJSONAsyncAutocomplete:function(){return r.e("chunk-04fd85cb").then(r.bind(null,"1c8f"))}},data:function(){return{EditorArrayCheckbox:[1,1,5,7],EditorArrayJSONCheckbox:"",EditorArrayAsyncCheckbox:[1,1,9],EditorArrayJSONAsyncCheckbox:"",EditorArrayAutocomplete:[2,2,8],EditorArrayJSONAutocomplete:"",EditorArrayAsyncAutocomplete:[2,2,8],EditorArrayJSONAsyncAutocomplete:""}},methods:{handleChange:function(){console.log("change")}}},u=l,s=r("2877"),f=Object(s["a"])(u,n,a,!1,null,null,null);t["default"]=f.exports},b85c:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");var n=r("06c5");function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n["a"])(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,d=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){d=!0,o=e},f:function(){try{i||null==a["return"]||a["return"]()}finally{if(d)throw o}}}}},bb2f:function(e,t,r){var n=r("d039");e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d63b:function(e,t,r){"use strict";var n=r("1e3c");t["a"]={mixins:[n["a"]],props:{candidate:{type:Array,required:!0}}}},e7a7:function(e,t,r){"use strict";t["a"]={props:{value:{required:!0}}}},f183:function(e,t,r){var n=r("d012"),a=r("861d"),o=r("5135"),i=r("9bf2").f,d=r("90e3"),c=r("bb2f"),l=d("meta"),u=0,s=Object.isExtensible||function(){return!0},f=function(e){i(e,l,{value:{objectID:"O"+ ++u,weakData:{}}})},y=function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,l)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[l].objectID},A=function(e,t){if(!o(e,l)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[l].weakData},h=function(e){return c&&v.REQUIRED&&s(e)&&!o(e,l)&&f(e),e},v=e.exports={REQUIRED:!1,fastKey:y,getWeakData:A,onFreeze:h};n[l]=!0}}]);