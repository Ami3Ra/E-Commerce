"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[680],{3680:(C,l,n)=>{n.r(l),n.d(l,{DetailesComponent:()=>x});var r=n(6814),_=n(756),t=n(4769),u=n(1120),d=n(0),p=n(6286),m=n(2425);function g(s,a){if(1&s&&t._UZ(0,"img",15),2&s){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function D(s,a){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",14),t.BQk())}function f(s,a){if(1&s&&t._UZ(0,"i",16),2&s){const e=a.$implicit,o=t.oxw(2);t.ekj("rating-color",o.productDetailes.ratingsAverage>=e)}}const v=function(){return[1,2,3,4,5]};function h(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,D,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2"),t._uU(8),t.qZA(),t.TgZ(9,"p",7),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",8)(14,"span",9),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",10),t.YNc(18,f,1,2,"i",11),t._uU(19),t.qZA()(),t.TgZ(20,"button",12,13),t.NdJ("click",function(){t.CHM(e);const i=t.MAs(21),c=t.oxw();return t.KtG(c.addProduct(c.productDetailes._id,i))}),t._uU(22," Add To Cart "),t.qZA()()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.productDetailesOptions),t.xp6(1),t.Q6J("ngForOf",e.productDetailes.images),t.xp6(4),t.Oqu(e.productDetailes.title),t.xp6(2),t.Oqu(e.productDetailes.description),t.xp6(2),t.Oqu(e.productDetailes.category.name),t.xp6(3),t.Oqu(t.xi3(16,8,e.productDetailes.price," EGP ")),t.xp6(3),t.Q6J("ngForOf",t.DdM(11,v)),t.xp6(1),t.hij(" ",e.productDetailes.ratingsAverage," ")}}let x=(()=>{class s{constructor(e,o,i,c,O){this._ActivatedRoute=e,this._ProductService=o,this._Renderer2=i,this._CartService=c,this._ToastrService=O,this.productDetailes=null,this.productDetailesOptions={loop:!0,mouseDrag:!1,touchDrag:!1,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id")}}),this._ProductService.getProductDetailes(this.productId).subscribe({next:({data:e})=>{this.productDetailes=e}})}addProduct(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:i=>{console.log(i),this._ToastrService.success(i.message),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNum.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(o,"disabled")}})}static#t=this.\u0275fac=function(o){return new(o||s)(t.Y36(u.gz),t.Y36(d.M),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-detailes"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 mx-auto rounded shadow p-5 mb-4",4,"ngIf"],[1,"w-75","mx-auto","rounded","shadow","p-5","mb-4"],[1,"row","align-items-center","g-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"text-muted","small"],[1,"d-flex","align-items-center","justify-content-between","my-3"],[1,"small"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],["carouselSlide",""],[1,"w-100",3,"src"],[1,"fas","fa-star"]],template:function(o,i){1&o&&t.YNc(0,h,23,12,"section",0),2&o&&t.Q6J("ngIf",i.productDetailes)},dependencies:[r.ez,r.sg,r.O5,r.H9,_.bB,_.Fy,_.Mp]})}return s})()}}]);