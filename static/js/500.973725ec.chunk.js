"use strict";(self.webpackChunkmy_todo=self.webpackChunkmy_todo||[]).push([[500],{8959:(e,r,t)=>{t.d(r,{Z:()=>i});var o=t(2791),s=t(1134),a=t(184);const i=function(e){let{submitForm:r,defaultValues:t=null}=e;const{register:i,handleSubmit:l,setValue:d,formState:{errors:n}}=(0,s.cI)();return(0,o.useEffect)((()=>{t&&(d("todoName",null===t||void 0===t?void 0:t.todoName),d("todoDescription",null===t||void 0===t?void 0:t.todoDescription))}),[t]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("form",{autoComplete:"off",onSubmit:l((e=>{r(e)})),noValidate:!0,children:[(0,a.jsxs)("div",{className:"w-100",children:[(0,a.jsxs)("div",{className:"relative py-1",children:[(0,a.jsxs)("label",{htmlFor:"todoName",children:["TODO Name ",(0,a.jsx)("span",{className:"required",children:"*"})]}),(0,a.jsx)("input",{...i("todoName",{required:!0}),type:"text",className:"w-100 p-2 mt-1 form-control ".concat(n.todoName?"error":""),placeholder:"Enter your TODO Name"}),n.todoName&&(0,a.jsx)("span",{className:"required-error",children:"TODO Name is required"})]}),(0,a.jsxs)("div",{className:"relative py-1",children:[(0,a.jsxs)("label",{htmlFor:"todoDescription",children:["TODO Description ",(0,a.jsx)("span",{className:"required",children:"*"})]}),(0,a.jsx)("textarea",{...i("todoDescription",{required:!0}),className:"w-100 p-2 mt-1 form-control ".concat(n.todoDescription?"error":""),placeholder:"Enter your TODO Description"}),n.todoDescription&&(0,a.jsx)("span",{className:"required-error",children:"TODO Description is required"})]})]}),(0,a.jsx)("div",{className:"form-footer text-center",children:(0,a.jsx)("button",{className:"btn-primary mt-2",children:t?"Update TODO":"Add TODO"})})]})})}},7500:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var o=t(8959),s=t(7689),a=t(184);const i=function(){let e=localStorage.todoList?JSON.parse(localStorage.todoList):[];const r=(0,s.s0)(),t=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let t=0;t<8;t++){const t=Math.floor(62*Math.random());r+=e.charAt(t)}return r};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,a.jsx)("div",{className:"page-head",children:"Add TODO"})}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"todo",children:(0,a.jsx)(o.Z,{submitForm:o=>{e.push({...o,id:t()}),localStorage.todoList=JSON.stringify(e),r("/home")}})})})]})}}}]);
//# sourceMappingURL=500.973725ec.chunk.js.map