"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[592],{7913:(d,h,n)=>{n.d(h,{c:()=>c});var i=n(6814),t=n(4769);let c=(()=>{class u{static#t=this.\u0275fac=function(s){return new(s||u)};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-footer"]],standalone:!0,features:[t.jDz],decls:13,vars:0,consts:[[1,"bg-main-light","py-4"],[1,"container"],[1,"text-muted"],[1,"d-flex","gap-3"],["type","email","placeholder","Email....",1,"form-control"],[1,"main-btn","flex-shrink-0"],[1,"h6","text-center"]],template:function(s,r){1&s&&(t.TgZ(0,"footer",0)(1,"div",1)(2,"h2"),t._uU(3,"Get The FreshCart App"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,"We Well Send You A Link"),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"input",4),t.TgZ(8,"button",5),t._uU(9,"Share App Link"),t.qZA()(),t._UZ(10,"hr"),t.TgZ(11,"h3",6),t._uU(12," \xa9 2024 Amira Amr All Rights Reserved"),t.qZA()()())},dependencies:[i.ez],styles:["[_nghost-%COMP%]{margin-top:auto}"]})}return u})()},8129:(d,h,n)=>{n.d(h,{r:()=>t});var i=n(4769);let t=(()=>{class c{transform(a,p){return a.split(" ").slice(0,p).join(" ")}static#t=this.\u0275fac=function(p){return new(p||c)};static#e=this.\u0275pipe=i.Yjl({name:"cuttext",type:c,pure:!0,standalone:!0})}return c})()},9410:(d,h,n)=>{n.d(h,{e:()=>s});class i extends Error{}i.prototype.name="InvalidTokenError";var a=n(4769),p=n(9862);let s=(()=>{class r{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}register(e){return this._HttpClient.post(this.baseUrl+"signup",e)}login(e){return this._HttpClient.post(this.baseUrl+"signin",e)}decodeUser(){const e=localStorage.getItem("eToken");if(null!==e){const o=function u(r,l){if("string"!=typeof r)throw new i("Invalid token specified: must be a string");l||(l={});const e=!0===l.header?0:1,o=r.split(".")[e];if("string"!=typeof o)throw new i(`Invalid token specified: missing part #${e+1}`);let f;try{f=function c(r){let l=r.replace(/-/g,"+").replace(/_/g,"/");switch(l.length%4){case 0:break;case 2:l+="==";break;case 3:l+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(r){return decodeURIComponent(atob(r).replace(/(.)/g,(l,e)=>{let o=e.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(l)}catch{return atob(l)}}(o)}catch(_){throw new i(`Invalid token specified: invalid base64 for part #${e+1} (${_.message})`)}try{return JSON.parse(f)}catch(_){throw new i(`Invalid token specified: invalid json for part #${e+1} (${_.message})`)}}(e);this.userInfo=o,console.log(o)}}static#t=this.\u0275fac=function(o){return new(o||r)(a.LFG(p.eN))};static#e=this.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},9196:(d,h,n)=>{n.d(h,{M:()=>u});var i=n(5619),t=n(4769),c=n(9862);let u=(()=>{class a{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.wishListNum=new i.X(0)}addToWishList(s){return this._HttpClient.post(this.baseUrl+"wishlist",{productId:s})}getWiwhList(){return this._HttpClient.get(this.baseUrl+"wishlist")}removeWishList(s){return this._HttpClient.delete(this.baseUrl+`wishlist/${s}`)}static#t=this.\u0275fac=function(r){return new(r||a)(t.LFG(c.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()}}]);