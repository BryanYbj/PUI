!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports.PUI=t(require("vue")):e.PUI=t(e.vue)}(self,(e=>(()=>{"use strict";var t={748:t=>{t.exports=e}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var u=o[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{Button:()=>u,default:()=>p});var e=r(748);const t={name:"PButton"},o=Object.assign(t,{props:{type:{required:!0,type:String,default:"default"},size:{required:!1,type:String,default:"default"}},setup(t){const o=t,r=(0,e.computed)((()=>"p-button--"+o.type)),n=(0,e.computed)((()=>"p-button--"+o.size));return(t,o)=>((0,e.openBlock)(),(0,e.createElementBlock)("button",{class:(0,e.normalizeClass)(["p-button",[r.value,n.value]])},[(0,e.renderSlot)(t.$slots,"default")],2))}});o.install=e=>{e.component(o.name,o)};const u=o,p=o})(),n})()));
//# sourceMappingURL=button.js.map