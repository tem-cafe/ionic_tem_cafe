(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{TbC0:function(n,l,e){"use strict";e.r(l);var o=e("CcnG"),t=e("XXEo"),u=e("mrSG"),r=e("oZWX"),c=function(){function n(n){this.apiService=n}return n.prototype.get=function(){return u.b(this,void 0,void 0,function(){var n=this;return u.e(this,function(l){switch(l.label){case 0:return[4,new Promise(function(l,e){n.apiService.get("tem-cafe").subscribe(function(n){l(n)},function(n){e(n)})})];case 1:return[2,l.sent()]}})})},n.prototype.post=function(n){return u.b(this,void 0,void 0,function(){var l=this;return u.e(this,function(e){switch(e.label){case 0:return[4,new Promise(function(e,o){l.apiService.post("tem-cafe",n).subscribe(function(n){e(n)},function(n){o(n)})})];case 1:return[2,e.sent()]}})})},n.ngInjectableDef=o.Ob({factory:function(){return new n(o.Pb(r.a))},token:n,providedIn:"root"}),n}(),i=function(){function n(n,l,e,o){this.router=n,this.loginService=l,this.temCafeService=e,this.storage=o,this.quantityBottle=0,this.limitMin=!1,this.limitMax=!1,this.nameLastAuthor=null,this.name=null,this.email=null,this.ageCoffee=null}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.storage.get("email").then(function(l){n.email=l}).catch(function(n){console.error("Storage email: ",n)}),this.storage.get("name").then(function(l){n.name=l}).catch(function(n){console.error("Storage name: ",n)}),this.getTemCafe()},n.prototype.getTemCafe=function(){var n=this;this.temCafeService.get().then(function(l){n.setDataOfResponse(l)}).catch(function(n){console.error("Error tem cafe: ",n)})},n.prototype.postTemCafe=function(n){var l=this;n.name=n.fizCafe?this.name:this.nameLastAuthor,n.email=this.email,this.temCafeService.post(n).then(function(n){l.setDataOfResponse(n)}).catch(function(n){console.error("Error tem cafe: ",n)})},n.prototype.setDataOfResponse=function(n){this.ageCoffee=n.date,this.nameLastAuthor=n.name,this.colorTemCopo=n.temCopo?"success":"danger",this.colorTemAcucar=n.temAcucar?"success":"danger",this.colorTemPo=n.temPo?"success":"danger",this.colorTemCafe=n.temCafe?"success":"danger"},n.prototype.logout=function(){var n=this;this.loginService.logout().then(function(l){n.router.navigateByUrl("login")}).catch(function(n){console.error("Logout error: ",n)})},n.prototype.temCopo=function(){this.postTemCafe("success"===this.colorTemCopo?{temCopo:!1}:{temCopo:!0})},n.prototype.temAcucar=function(){this.postTemCafe("success"===this.colorTemAcucar?{temAcucar:!1}:{temAcucar:!0})},n.prototype.temPo=function(){this.postTemCafe("success"===this.colorTemPo?{temPo:!1}:{temPo:!0})},n.prototype.temCafe=function(){this.postTemCafe("success"===this.colorTemCafe?{temCafe:!1}:{temCafe:!0})},n.prototype.fizCafe=function(){this.postTemCafe({fizCafe:!0,name:this.name})},n}(),a=function(){return function(){}}(),s=e("pMnS"),b=e("oBZk"),f=e("ZZ/e"),p=e("Ip0R"),m=e("ZYCi"),h=e("iw74"),d=o.qb({encapsulation:0,styles:[[".homeBackground[_ngcontent-%COMP%]{background:url(background.cca6b0d89bb8026522a5.jpg) center center/cover no-repeat fixed;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%}.homeContent[_ngcontent-%COMP%]{background-color:#ffffff7e;border-radius:7px}.homeProgressBarDiv[_ngcontent-%COMP%]{width:300px}.homeProgressBar[_ngcontent-%COMP%]{height:12px;border-radius:7px}"]],data:{}});function g(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,1,"ion-img",[["src","../../../assets/vazia.png"]],null,null,null,b.s,b.g)),o.rb(1,49152,null,0,f.A,[o.h,o.k,o.z],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../../../assets/vazia.png")},null)}function k(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,1,"ion-img",[["src","../../../assets/cheia.png"]],null,null,null,b.s,b.g)),o.rb(1,49152,null,0,f.A,[o.h,o.k,o.z],{src:[0,"src"]},null)],function(n,l){n(l,1,0,"../../../assets/cheia.png")},null)}function C(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,5,"ion-chip",[["color","tertiary"]],null,null,null,b.o,b.c)),o.rb(1,49152,null,0,f.p,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.Jb(2,0,["Idade do caf\xe9: "," "])),o.Fb(3,2),(n()(),o.sb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),o.Jb(5,0,[" Autor do caf\xe9: "," "]))],function(n,l){n(l,1,0,"tertiary")},function(n,l){var e=l.component,t=o.Kb(l,2,0,n(l,3,0,o.Db(l.parent,0),e.ageCoffee,"dd/MM/yy HH:mm"));n(l,2,0,t),n(l,5,0,e.nameLastAuthor)})}function v(n){return o.Lb(0,[o.Eb(0,p.d,[o.u]),(n()(),o.sb(1,0,null,null,44,"div",[["class","homeBackground"]],null,null,null,null,null)),(n()(),o.sb(2,0,null,null,43,"div",[["class","homeContent"],["padding",""]],null,null,null,null,null)),(n()(),o.sb(3,0,null,null,38,"div",[["class","homeProgressBarDiv"]],null,null,null,null,null)),(n()(),o.sb(4,0,null,null,3,"ion-button",[["color","danger"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.logout()&&o),o},b.n,b.b)),o.rb(5,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"]},null),(n()(),o.sb(6,0,null,0,1,"ion-icon",[["name","power"]],null,null,null,b.r,b.f)),o.rb(7,49152,null,0,f.z,[o.h,o.k,o.z],{name:[0,"name"]},null),(n()(),o.sb(8,0,null,null,33,"ion-grid",[],null,null,null,b.q,b.e)),o.rb(9,49152,null,0,f.x,[o.h,o.k,o.z],null,null),(n()(),o.sb(10,0,null,0,7,"ion-row",[["style","justify-content: center;"]],null,null,null,b.w,b.k)),o.rb(11,49152,null,0,f.fb,[o.h,o.k,o.z],null,null),(n()(),o.hb(16777216,null,0,1,null,g)),o.rb(13,16384,null,0,p.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,0,1,null,k)),o.rb(15,16384,null,0,p.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.hb(16777216,null,0,1,null,C)),o.rb(17,16384,null,0,p.i,[o.N,o.K],{ngIf:[0,"ngIf"]},null),(n()(),o.sb(18,0,null,0,11,"ion-row",[],null,null,null,b.w,b.k)),o.rb(19,49152,null,0,f.fb,[o.h,o.k,o.z],null,null),(n()(),o.sb(20,0,null,0,4,"ion-col",[],null,null,null,b.p,b.d)),o.rb(21,49152,null,0,f.q,[o.h,o.k,o.z],null,null),(n()(),o.sb(22,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.temCopo()&&o),o},b.n,b.b)),o.rb(23,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o.Jb(-1,0,[" Copo "])),(n()(),o.sb(25,0,null,0,4,"ion-col",[],null,null,null,b.p,b.d)),o.rb(26,49152,null,0,f.q,[o.h,o.k,o.z],null,null),(n()(),o.sb(27,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.temAcucar()&&o),o},b.n,b.b)),o.rb(28,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o.Jb(-1,0,[" A\xe7\xfacar "])),(n()(),o.sb(30,0,null,0,11,"ion-row",[],null,null,null,b.w,b.k)),o.rb(31,49152,null,0,f.fb,[o.h,o.k,o.z],null,null),(n()(),o.sb(32,0,null,0,4,"ion-col",[],null,null,null,b.p,b.d)),o.rb(33,49152,null,0,f.q,[o.h,o.k,o.z],null,null),(n()(),o.sb(34,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.temPo()&&o),o},b.n,b.b)),o.rb(35,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o.Jb(-1,0,[" P\xf3 "])),(n()(),o.sb(37,0,null,0,4,"ion-col",[],null,null,null,b.p,b.d)),o.rb(38,49152,null,0,f.q,[o.h,o.k,o.z],null,null),(n()(),o.sb(39,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.temCafe()&&o),o},b.n,b.b)),o.rb(40,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o.Jb(-1,0,[" Caf\xe9 "])),(n()(),o.sb(42,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.sb(43,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==n.component.fizCafe()&&o),o},b.n,b.b)),o.rb(44,49152,null,0,f.h,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),o.Jb(-1,0,[" Fiz caf\xe9! "]))],function(n,l){var e=l.component;n(l,5,0,"danger"),n(l,7,0,"power"),n(l,13,0,"success"!=e.colorTemCafe),n(l,15,0,"success"==e.colorTemCafe),n(l,17,0,"success"==e.colorTemCafe&&e.ageCoffee),n(l,23,0,e.colorTemCopo,!e.email,"block"),n(l,28,0,e.colorTemAcucar,!e.email,"block"),n(l,35,0,e.colorTemPo,!e.email,"block"),n(l,40,0,e.colorTemCafe,!e.email,"block"),n(l,44,0,"primary",!e.email,"block")},null)}function y(n){return o.Lb(0,[(n()(),o.sb(0,0,null,null,1,"app-home",[],null,null,null,v,d)),o.rb(1,114688,null,0,i,[m.m,t.a,c,h.b],null,null)],function(n,l){n(l,1,0)},null)}var x=o.ob("app-home",i,y,{},{},[]),z=e("gIcY");e.d(l,"HomePageModuleNgFactory",function(){return w});var w=o.pb(a,[],function(n){return o.Ab([o.Bb(512,o.j,o.ab,[[8,[s.a,x]],[3,o.j],o.x]),o.Bb(4608,p.k,p.j,[o.u,[2,p.r]]),o.Bb(4608,z.l,z.l,[]),o.Bb(4608,f.a,f.a,[o.z,o.g]),o.Bb(4608,f.Cb,f.Cb,[f.a,o.j,o.q]),o.Bb(4608,f.Fb,f.Fb,[f.a,o.j,o.q]),o.Bb(1073742336,p.b,p.b,[]),o.Bb(1073742336,z.k,z.k,[]),o.Bb(1073742336,z.b,z.b,[]),o.Bb(1073742336,f.Ab,f.Ab,[]),o.Bb(1073742336,m.n,m.n,[[2,m.s],[2,m.m]]),o.Bb(1073742336,a,a,[]),o.Bb(1024,m.k,function(){return[[{path:"",component:i}]]},[])])})}}]);