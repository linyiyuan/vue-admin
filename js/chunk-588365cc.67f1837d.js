(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-588365cc","chunk-2d0a2d1b"],{"0016":function(e,t,n){"use strict";n.r(t);var i=n("5530");t["default"]={functional:!0,props:{labelName:{type:String},component:{type:[Function,Object],default:null},label:{type:Object}},render:function(e,t){var n=t.props,r=t.parent,o=n.labelName;if(!n.label)return e("span",[o]);var a=n.component,c=n.label,l=c.handler,d=c.config,u=void 0===d?{}:d;if(a){var s=Object(i["a"])({labelName:o},u);return e(a,{props:Object(i["a"])({},s)})}return l?e("span",[l.call(r,o,u)]):void 0}}},"05dc":function(e,t,n){"use strict";var i=n("6d03"),r=n.n(i);r.a},"6d03":function(e,t,n){},7615:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",e._b({attrs:{visible:e.visible},on:{"update:visible":function(t){e.visible=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[n("el-button",e._b({on:{click:function(t){e.visible=!1}}},"el-button",e.cancelBtnConfig,!1),[e._v(" "+e._s(e.cancelBtnConfig.text)+" ")]),n("el-button",e._b({on:{click:e.doConfirm}},"el-button",e.confirmBtnConfig,!1),[e._v(" "+e._s(e.confirmBtnConfig.text)+" ")])]},proxy:!0}])},"el-dialog",e.dialogConfig,!1),[n("Editors",{ref:"editors",attrs:{fields:e.fields,"editable-fields":e.editableFields,"field-layout":e.fieldLayout,"effect-layout-fields":e.effectLayoutFields,record:e.record,"auto-validate":e.autoValidate,mode:e.mode,"record-watch":e.recordWatch}})],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return!e.hasInjectComponent||e.componentsInjected?n("MetaFieldsLayout",e._b({attrs:{fields:e.fields,mode:e.mode,"field-layout-list":e.fieldLayoutList},scopedSlots:e._u([{key:"label",fn:function(t){var i=t.field;return[n("Labels",{attrs:{"label-name":e.fields[i].labelName,component:e.injectedLabelComponents[i],label:e.labelMap[i]}})]}},{key:"default",fn:function(t){var i=t.field;return[n(e.fields[i].editor.name,e._b({ref:i,tag:"component",model:{value:e.localRecord[i],callback:function(t){e.$set(e.localRecord,i,t)},expression:"localRecord[field]"}},"component",e.generateEditorProp(i),!1)),e.fields[i].tip?n("div",{staticClass:"form-helper"},[e._v(" "+e._s(e.genTip(e.fields[i].tip))+" ")]):e._e(),e.validators[i]&&e.validators[i]["hasErr"]?n("p",{staticClass:"text-danger form-helper"},[e._v(" "+e._s(e.validators[i]["errMsg"])+" ")]):e._e()]}}],null,!1,1274746575)},"MetaFieldsLayout",e.fieldsLayoutConfig,!1)):e._e()},a=[],c=(n("4160"),n("d81d"),n("13d5"),n("a434"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("ade3")),l=n("5530"),d=n("2909"),u=n("2a95"),s=n("0016"),f=n("18cb"),h=n("cf84");n("4de4");function b(e,t){return t.filter((function(t){return e[t].editor&&e[t].editor.component})).map((function(t){return e[t].editor}))}var p={props:{editableFields:{type:Array,required:!0},fieldLayout:{type:[Function,Array],required:!0},effectLayoutFields:{type:Array,default:function(){return[]}},record:{type:Object,required:!0},fields:{type:Object,required:!0},autoValidate:{type:Boolean,default:!1},mode:{type:String,required:!0},recordWatch:{type:Function,default:function(){return[]}}}};u["a"].warning=function(){};var m={first:!0},y={name:"Editors",components:{Labels:s["default"],MetaFieldsLayout:function(){return n.e("chunk-2d0d6400").then(n.bind(null,"726e"))},EditorString:function(){return n.e("chunk-6bb5d5c5").then(n.bind(null,"2dc6"))},EditorText:function(){return n.e("chunk-0b09eea1").then(n.bind(null,"41f80"))},EditorPwd:function(){return n.e("chunk-6bb61708").then(n.bind(null,"4914"))},EditorNumber:function(){return n.e("chunk-202e3368").then(n.bind(null,"fd10"))},EditorInt:function(){return n.e("chunk-9443787e").then(n.bind(null,"7047"))},EditorTextrich:function(){return Promise.all([n.e("chunk-6e83591c"),n.e("chunk-10d9f0f5")]).then(n.bind(null,"8c95"))},EditorEnumRadio:function(){return n.e("chunk-af97a598").then(n.bind(null,"ab12"))},EditorEnumSelect:function(){return n.e("chunk-0cd929b0").then(n.bind(null,"d978"))},EditorEnumAutocomplete:function(){return n.e("chunk-3152db9e").then(n.bind(null,"5f1d"))},EditorEnumRemoteAutocomplete:function(){return n.e("chunk-64cde027").then(n.bind(null,"3c41"))},EditorEnumAsyncRadio:function(){return n.e("chunk-4e431f46").then(n.bind(null,"3c81"))},EditorEnumAsyncSelect:function(){return n.e("chunk-5782c48c").then(n.bind(null,"b7f7"))},EditorEnumAsyncAutocomplete:function(){return n.e("chunk-a3fd850c").then(n.bind(null,"b7d5"))},EditorEnumRelatesRadio:function(){return n.e("chunk-34784b0d").then(n.bind(null,"fde8"))},EditorEnumRelatesSelect:function(){return n.e("chunk-9b268f22").then(n.bind(null,"5517"))},EditorEnumRelatesAutocomplete:function(){return n.e("chunk-4abc83e4").then(n.bind(null,"574b"))},EditorBool:function(){return n.e("chunk-4688a24c").then(n.bind(null,"5ef3"))},EditorGender:function(){return n.e("chunk-6b52e016").then(n.bind(null,"6edd"))},EditorArrayCheckbox:function(){return n.e("chunk-dee08068").then(n.bind(null,"d5d4"))},EditorArrayAutocomplete:function(){return n.e("chunk-467c18bc").then(n.bind(null,"2bcc"))},EditorArrayAsyncCheckbox:function(){return n.e("chunk-4a47c879").then(n.bind(null,"5c71"))},EditorArrayAsyncAutocomplete:function(){return n.e("chunk-9cd7200c").then(n.bind(null,"84c0"))},EditorArrayRelatesCheckbox:function(){return n.e("chunk-2579d30f").then(n.bind(null,"a9a2"))},EditorArrayRelatesAutocomplete:function(){return n.e("chunk-5d6fdbc0").then(n.bind(null,"9256"))},EditorArrayJSONCheckbox:function(){return n.e("chunk-2b51413e").then(n.bind(null,"a36c"))},EditorArrayJSONAutocomplete:function(){return n.e("chunk-48590c94").then(n.bind(null,"52a6"))},EditorArrayJSONAsyncCheckbox:function(){return n.e("chunk-70d0e8aa").then(n.bind(null,"979c"))},EditorArrayJSONAsyncAutocomplete:function(){return n.e("chunk-17642cc2").then(n.bind(null,"1c8f"))},EditorArrayJSONRelatesCheckbox:function(){return n.e("chunk-e7fead1c").then(n.bind(null,"0efa"))},EditorArrayJSONRelatesAutocomplete:function(){return n.e("chunk-6290f8c7").then(n.bind(null,"c8d4"))},EditorFile:function(){return n.e("chunk-674598c0").then(n.bind(null,"6a46"))},EditorArrayFile:function(){return n.e("chunk-bf1b3dd8").then(n.bind(null,"3b02"))},EditorArrayJSONFile:function(){return n.e("chunk-7bbd655c").then(n.bind(null,"641c"))},EditorImage:function(){return n.e("chunk-7bf37c75").then(n.bind(null,"4028"))},EditorArrayImage:function(){return n.e("chunk-7c7e1616").then(n.bind(null,"8b39"))},EditorArrayJSONImage:function(){return n.e("chunk-52bc6ee0").then(n.bind(null,"4530"))}},mixins:[p],state:{labelMap:{},needInjectLabelComponentsList:[],hasInjectLabelComponents:!1,needInjectEditorComponentsList:[],hasInjectEditorComponents:!1,get hasInjectComponent(){return this.hasInjectLabelComponents||this.hasInjectEditorComponents},hasValidateListener:!1,recordUnwatchs:[]},props:{fieldsLayoutConfig:{type:Object,default:function(){return{}}}},data:function(){return{labelComponentsInjected:!1,editorComponentsInjected:!1,validators:{},localRecord:{},relatesDataByField:{}}},computed:{componentsInjected:function(){return this.labelComponentsInjected&&this.editorComponentsInjected},fieldLayoutList:function(){var e=this;if(Array.isArray(this.fieldLayout))return this.fieldLayout;var t=this.effectLayoutFields.reduce((function(t,n){return t[n]=e.localRecord[n],t}),Object.create(null));return this.fieldLayout(t)},curEditableFields:function(){return this.fieldLayoutList.reduce((function(e,t){return t.forEach((function(t){e[t]=!0})),e}),Object.create(null))}},watch:{record:{immediate:!0,handler:function(){this.localRecord=JSON.parse(JSON.stringify(this.record)),this.resetValidate(),this.resetRelates()}}},created:function(){var e=this;this.$watch((function(){return{fields:e.fields,editableFields:e.editableFields,mode:e.mode}}),this.init,{immediate:!0})},methods:{init:function(){this.labelMap=Object(h["a"])(this.fields,this.editableFields,this.mode),this.needInjectLabelComponentsList=Object(h["b"])(this.labelMap),this.needInjectEditorComponentsList=b(this.fields,this.editableFields),this.hasInjectLabelComponents=this.needInjectLabelComponentsList.length>0,this.hasInjectEditorComponents=this.needInjectEditorComponentsList.length>0,this.injectLabelComponents(),this.injectEditorComponents()},resetRelates:function(){var e,t=this;this.recordUnwatchs.forEach((function(e){e&&e()})),this.recordUnwatchs=[],this.relatesDataByField={},(e=this.recordUnwatchs).push.apply(e,Object(d["a"])(this.recordWatch(this.localRecord))),this.editableFields.forEach((function(e){var n=t.fields[e].editor.relates;Array.isArray(n)&&0!==n.length&&(t.$set(t.relatesDataByField,e,[]),n.forEach((function(n,i){var r=t.$watch((function(){return t.getRelateData(n)}),(function(n){t.relatesDataByField[e].splice(i,1,n)}),{immediate:!0});if(t.recordUnwatchs.push(r),"function"===typeof n.handler){var o=function t(i,r){var o=this;this.curEditableFields[e]&&(this.$refs[e]?n.handler.call(this.$refs[e],i,r,this.fields[e]):setTimeout((function(){t.call(o,i,r)}),0))},a=t.$watch((function(){return t.relatesDataByField[e][i]}),o,Object(l["a"])({},n.config));t.recordUnwatchs.push(a)}})))}))},generateEditorProp:function(e){var t=this,n=this.fields[e].editor,i=(n.relates||[]).reduce((function(n,i,r){return i.propField&&(n[i.propField]=t.relatesDataByField[e][r]),n}),Object.create(null)),r=n.config||{},o=n["".concat(this.mode,"Config")]||{};return Object.assign({},r,o,i)},getRelateData:function(e){var t=this;return Array.isArray(e.relateField)?e.relateField.reduce((function(e,n){return e[n]=t.localRecord[n],e}),{}):this.localRecord[e.relateField]},injectLabelComponents:function(){var e=this;this.injectedLabelComponents={},this.hasInjectLabelComponents?Object(f["a"])(this.needInjectLabelComponentsList,this.injectedLabelComponents).then((function(){e.labelComponentsInjected=!0})):this.labelComponentsInjected=!0},injectEditorComponents:function(){var e=this;this.hasInjectEditorComponents?Object(f["a"])(this.needInjectEditorComponentsList,this).then((function(){e.editorComponentsInjected=!0})):this.editorComponentsInjected=!0},resetValidate:function(){var e=this;Object.keys(this.validators).forEach((function(t){e.validators[t].unwatch&&e.validators[t].unwatch()})),this.validators={},this.hasValidateListener=!1,this.editableFields.forEach((function(t){var n=e.fields[t].validator;if(n){var i=e.autoValidate,r=e.fields[t].autoValidate;void 0!==r&&(i="function"===typeof r?r(e.mode):!!r);var o=new u["a"](Object(c["a"])({},t,"function"===typeof n?n.call(e,e.localRecord,e.mode):n));e.$set(e.validators,t,{hasErr:!1,errMsg:"",validator:o,unwatch:null}),i&&(e.validators[t].unwatch=e.addValidateInputListener(t))}}))},validate:function(){var e=this,t=Object.keys(this.validators),n=t.map((function(t){return e.validateField(t,e.localRecord[t])}));return this.hasValidateListener||(t.forEach((function(t){e.validators[t].unwatch||(e.validators[t].unwatch=e.addValidateInputListener(t))})),this.hasValidateListener=!0),Promise.all(n).then((function(){return JSON.parse(JSON.stringify(e.localRecord))}))},addValidateInputListener:function(e){var t=this;return this.$watch((function(){return t.localRecord[e]}),(function(n){t.validateField(e,n).catch((function(){}))}))},validateField:function(e,t){var n=this;return new Promise((function(i,r){var o=n.validators[e].validator;o.validate(Object(c["a"])({},e,t),m,(function(t,o){t?(n.validators[e].hasErr=!0,n.validators[e].errMsg=t[0].message,r(t[0].message)):(n.validators[e].hasErr=!1,n.validators[e].errMsg="",i())}))}))},genTip:function(e){return"function"===typeof e&&(e=e.call(this,this.mode)),e}}},v=y,E=(n("05dc"),n("2877")),g=Object(E["a"])(v,o,a,!1,null,"755d600c",null),C=g.exports,j={name:"SingletonDialogEditors",components:{Editors:C},mixins:[p],inheritAttrs:!1,props:{visible:{type:Boolean,default:!1},dialogConfig:{type:Object,default:function(){return{}}},cancelBtnConfig:{type:Object,default:function(){return{}}},confirmBtnConfig:{type:Object,default:function(){return{}}},handleConfirm:{type:Function,required:!0}},methods:{doConfirm:function(){var e=this;this.$refs.editors.validate().then((function(e){return console.log(e),e})).then(this.handleConfirm).catch((function(t){e.$message(t)}))}}},k=j,L=Object(E["a"])(k,i,r,!1,null,null,null);t["a"]=L.exports},cf84:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n("caad"),n("13d5"),n("b64b"),n("2532");function i(e,t,n){return t.reduce((function(t,i){var r=e[i].label;if(r)if(r[n])t[i]=r[n];else if(r.default){var o=r.default.exclude;Array.isArray(o)&&o.includes(n)||(t[i]=r.default)}return t}),{})}function r(e){return Object.keys(e).reduce((function(t,n){return e[n].component&&t.push({name:n,component:e[n].component}),t}),[])}},e933:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-button",e._b({on:{click:e.handleClick}},"el-button",e.triggerConfig,!1),[e._v(" "+e._s(e.triggerConfig.text)+" ")])},r=[],o=(n("13d5"),n("d3b7"),n("5530")),a=n("961b"),c=n("7615"),l={name:"CollectionOperatorCreate",inheritAttrs:!0,props:{fields:{type:Object,required:!0},getCreateFields:{type:Function,required:!0},doCreateRequest:{type:Function,required:!0},triggerConfig:{type:Object,default:function(){return{}}},transformData:{type:Function,default:function(e){return e}}},state:{editableFields:[],record:{},isCreating:!1},singleton:{singletonDialogEditors:null},methods:{showDialog:function(){this.singletonDialogEditors=this.$singleton(c["a"],Object(o["a"])({},this.$attrs,{visible:!0,fields:this.fields,editableFields:this.editableFields,record:this.record,handleConfirm:this.handleConfirm,mode:"create"}),this.$root)},resetRecord:function(){var e=this;this.record=this.editableFields.reduce((function(t,n){var i=e.fields[n].editor.default;return t[n]="function"===typeof i?i.call(e,n):i,t}),{})},handleClick:function(){var e=this;0===this.editableFields.length?new Promise((function(t,n){e.getCreateFields(t)})).then((function(t){e.editableFields=t,e.resetRecord(),e.showDialog()})).catch(a["d"]):(this.resetRecord(),this.showDialog())},handleConfirm:function(e){var t=this;this.isCreating||(this.isCreating=!0,new Promise((function(n){t.doCreateRequest(n,t.transformData(e))})).then((function(){t.singletonDialogEditors.visible=!1,t.$emit("update")})).catch(a["d"]).finally((function(){t.isCreating=!1})))}}},d=l,u=n("2877"),s=Object(u["a"])(d,i,r,!1,null,null,null);t["default"]=s.exports}}]);