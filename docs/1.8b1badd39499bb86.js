"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[1],{4001:(P,p,n)=>{n.r(p),n.d(p,{HomeComponent:()=>J});var a=n(6814),g=n(8129),m=n(756),d=n(1120),t=n(4769);let _=(()=>{class i{transform(e,o){return e.filter(s=>s.title.toLowerCase().includes(o.toLowerCase()))}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275pipe=t.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var l=n(95),h=n(0),f=n(6286),x=n(2425),v=n(9196);function C(i,r){1&i&&t._UZ(0,"img",10)}function T(i,r){1&i&&t._UZ(0,"img",11)}function Z(i,r){1&i&&t._UZ(0,"img",12)}function w(i,r){if(1&i&&t._UZ(0,"img",15),2&i){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name)}}function y(i,r){1&i&&(t.ynx(0),t.YNc(1,w,1,3,"ng-template",4),t.BQk())}function S(i,r){if(1&i&&(t.TgZ(0,"section",13)(1,"h1"),t._uU(2,"Shop Popular Categories"),t.qZA(),t.TgZ(3,"owl-carousel-o",3),t.YNc(4,y,2,0,"ng-container",14),t.qZA()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("options",e.categoryOptions),t.xp6(1),t.Q6J("ngForOf",e.categories)}}function A(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"i",34),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addFav(s._id))}),t.qZA()}}function O(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"i",35),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.removeFav(s._id))}),t.qZA()}}function H(i,r){if(1&i&&t._UZ(0,"i",36),2&i){const e=r.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const b=function(i){return["/detailes",i]},L=function(){return[1,2,3,4,5]};function M(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",20)(1,"div",21),t.YNc(2,A,1,0,"i",22),t.YNc(3,O,1,0,"i",23),t.TgZ(4,"header",24),t._UZ(5,"img",25),t.TgZ(6,"h3",26),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",27),t._uU(10),t.qZA(),t.TgZ(11,"div",28)(12,"span"),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",29),t.YNc(16,H,1,2,"i",30),t.TgZ(17,"span",31),t._uU(18),t.qZA()()()(),t.TgZ(19,"footer")(20,"button",32,33),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.MAs(21),N=t.oxw(2);return t.KtG(N.addProduct(c._id,u))}),t._uU(22," Add To Cart "),t.qZA()()()()}if(2&i){const e=r.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!o.wishList.includes(e._id)),t.xp6(1),t.Q6J("ngIf",o.wishList.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,b,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(8,11,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(14,14,e.price,"e\xa3")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,L)),t.xp6(2),t.hij(" ",e.ratingsAverage,"")}}function F(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"section",16)(1,"h1"),t._uU(2,"Shop Popular Products"),t.qZA(),t.TgZ(3,"input",17),t.NdJ("ngModelChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.term=s)}),t.qZA(),t.TgZ(4,"div",18),t.YNc(5,M,23,20,"div",19),t.ALo(6,"slice"),t.ALo(7,"search"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.term),t.xp6(2),t.Q6J("ngForOf",t.Dn7(6,2,t.xi3(7,6,e.products,e.term),0,18))}}let J=(()=>{class i{constructor(e,o,s,c,u){this._ProductService=e,this._CartService=o,this._ToastrService=s,this._Renderer2=c,this._WishlistService=u,this.products=[],this.categories=[],this.wishList=[],this.term="",this.categoryOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:7e3,autoplaySpeed:1e3,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:4}},nav:!1},this.mainSlidOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:1e3,navText:["",""],items:1,nav:!1}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{console.log("products",e.data),this.products=e.data}}),this._ProductService.getCategories().subscribe({next:e=>{console.log("categories",e),this.categories=e.data}}),this._WishlistService.getWiwhList().subscribe({next:e=>{const o=e.data.map(s=>s._id);this.wishList=o}})}addProduct(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{console.log(s),this._ToastrService.success(s.message),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNum.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(o,"disabled")}})}addFav(e){this._WishlistService.addToWishList(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message),this.wishList=o.data,this._WishlistService.wishListNum.next(this.wishList.length)}})}removeFav(e){this._WishlistService.removeWishList(e).subscribe({next:o=>{console.log(o),this._ToastrService.success(o.message),this.wishList=o.data,this._WishlistService.wishListNum.next(this.wishList.length)}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.M),t.Y36(f.N),t.Y36(x._W),t.Y36(t.Qsj),t.Y36(v.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:12,vars:3,consts:[[1,"py-3"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","../../../assets/images/slide-1.jpeg","alt","slide-1",1,"w-100"],["height","200","src","../../../assets/images/slide-2.jpeg","alt","slide-2",1,"w-100"],["class","py-4",4,"ngIf"],["class","py-5",4,"ngIf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt","slider-1"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","slider-2"],["height","400","src","./assets/images/main-slider-3.jpeg","alt","slider-3"],[1,"py-4"],[4,"ngFor","ngForOf"],["height","270",1,"w-100",3,"src","alt","title"],[1,"py-5"],["type","text","placeholder","Search...",1,"form-control","w-50","mx-auto","form-control-sm","my-4",3,"ngModel","ngModelChange"],[1,"row","g-4"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-2",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"products","h-100"],["role","button","style","color: #0aad0a","class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["role","button","class","fa-solid fa-heart-circle-xmark heart","style","color: #0aad0a",3,"click",4,"ngIf"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"small"],[1,"h6","text-main"],[1,"d-flex","align-content-center","justify-content-between","small"],[1,"mb-0"],["class","fas fa-star",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"main-btn","w-100","py-2",3,"click"],["btnAdd",""],["role","button",1,"fa-regular","fa-heart","heart",2,"color","#0aad0a",3,"click"],["role","button",1,"fa-solid","fa-heart-circle-xmark","heart",2,"color","#0aad0a",3,"click"],[1,"fas","fa-star"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,C,1,0,"ng-template",4),t.YNc(5,T,1,0,"ng-template",4),t.YNc(6,Z,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.YNc(10,S,5,2,"section",8),t.YNc(11,F,8,9,"section",9)),2&o&&(t.xp6(3),t.Q6J("options",s.mainSlidOptions),t.xp6(7),t.Q6J("ngIf",s.categories.length>0),t.xp6(1),t.Q6J("ngIf",s.products.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,g.r,m.bB,m.Fy,m.Mp,d.rH,_,l.u5,l.Fj,l.JJ,l.On],styles:[".products[_ngcontent-%COMP%]{position:relative;overflow:hidden}.products[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}.products[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{transform:translateY(150%);opacity:0;transition:.7s}.products[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%]{right:5px}.products[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{position:absolute;font-size:40px;top:5px;right:-50px;z-index:99;cursor:pointer;transition:right .7s}"]})}return i})()}}]);