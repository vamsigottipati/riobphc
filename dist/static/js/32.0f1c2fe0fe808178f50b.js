webpackJsonp([32],{"8DIl":function(e,t,a){var s=a("B4Ym");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("64089f48",s,!0)},B4Ym:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".form-group[data-v-6f7789b7]{min-width:200px;max-width:360px;width:80%}@media (min-width:768px){.wizard-completed-tab[data-v-6f7789b7]{margin-top:-3.125rem}}","",{version:3,sources:["/Users/vamsikrishna/Documents/unclebob/rio/src/components/dashboard/setup-profile-tab/SetupProfileTab.vue"],names:[],mappings:"AACA,6BACE,gBAAiB,AACjB,gBAAiB,AACjB,SAAW,CACZ,AACD,yBACA,uCACI,oBAAsB,CACzB,CACA",file:"SetupProfileTab.vue",sourcesContent:["\n.form-group[data-v-6f7789b7] {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n@media (min-width: 768px) {\n.wizard-completed-tab[data-v-6f7789b7] {\n    margin-top: -3.125rem;\n}\n}\n"],sourceRoot:""}])},QaxN:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setup-profile-tab dashboard-tab"},[a("vuestic-wizard",{attrs:{steps:e.steps,"wizard-layout":"vertical","wizard-type":e.wizardType}},[a("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page1"},slot:"page1"},[a("h4",[e._v("Type your name")]),e._v(" "),a("p",[e._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),e._v(" "),a("div",{staticClass:"form-group with-icon-right",class:{"has-error":e.errors.has("name"),valid:e.isFormFieldValid("name")}},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",name:"name",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("i",{staticClass:"fa fa-exclamation-triangle error-icon icon-right input-icon"}),e._v(" "),a("i",{staticClass:"fa fa-check valid-icon icon-right input-icon"}),e._v(" "),a("label",{staticClass:"control-label"},[e._v("Name")]),a("i",{staticClass:"bar"}),e._v(" "),a("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[e._v(e._s(e.errors.first("name"))+"\n          ")])])])]),e._v(" "),a("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page2"},slot:"page2"},[a("h4",[e._v("Select your country")]),e._v(" "),a("p",[e._v('Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"')]),e._v(" "),a("vuestic-simple-select",{ref:"selectedCountrySelect",attrs:{label:"Select country",name:"country",required:!0,options:e.countriesList},model:{value:e.selectedCountry,callback:function(t){e.selectedCountry=t},expression:"selectedCountry"}})],1),e._v(" "),a("div",{staticClass:"form-wizard-tab-content",attrs:{slot:"page3"},slot:"page3"},[a("h4",[e._v("Confirm selection")]),e._v(" "),a("p",[e._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])]),e._v(" "),a("div",{staticClass:"form-wizard-tab-content wizard-completed-tab",attrs:{slot:"wizardCompleted"},slot:"wizardCompleted"},[a("h4",[e._v("Wizard completed!")]),e._v(" "),a("p",[e._v('\n        Zebras communicate with facial expressions and sounds. They make loud\n        braying or barking sounds and\n        soft snorting sounds. The position of their ears, how wide open their\n        eyes are, and whether they show\n        their teeth all send a signal. For example, ears flat back means\n        trouble, or "you better follow orders!"\n      ')])])])],1)},r=[],n={render:s,staticRenderFns:r};t.a=n},b32I:function(e,t,a){"use strict";var s=a("LmFp");t.a={name:"setup-profile-tab",props:{wizardType:{default:"rich"}},data:function(){var e=this;return{steps:[{label:"Step 1. Name",slot:"page1",onNext:function(){e.validateFormField("name")},isValid:function(){return e.isFormFieldValid("name")}},{label:"Step 2. Country",slot:"page2",onNext:function(){e.$refs.selectedCountrySelect.validate()},isValid:function(){return e.$refs.selectedCountrySelect.isValid()}},{label:"Step 3. Confirm",slot:"page3"}],selectedCountry:"",name:"",countriesList:s.a}},methods:{isFormFieldValid:function(e){var t=!1;return this.formFields[e]&&(t=this.formFields[e].validated&&this.formFields[e].valid),t},validateFormField:function(e){this.$validator.validate(e,this[e])}}}},hnAi:function(e,t,a){"use strict";function s(e){a("8DIl")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("b32I"),n=a("QaxN"),i=a("VU/8"),o=s,l=i(r.a,n.a,!1,o,"data-v-6f7789b7",null);t.default=l.exports}});
//# sourceMappingURL=32.0f1c2fe0fe808178f50b.js.map