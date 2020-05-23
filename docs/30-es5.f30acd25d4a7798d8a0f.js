function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{loWw:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("mrSG"),o=e("i9w2"),a=e("6awz"),r=function(){function l(n){_classCallCheck(this,l),this.mapService=n,this.layers=[]}return _createClass(l,[{key:"ngOnInit",value:function(){this.loadMap()}},{key:"ngOnDestroy",value:function(){this.layers.forEach((function(l){l.remove()})),this.mapService.detachMap()}},{key:"loadMap",value:function(){return t.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n=this;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.mapService.attachMap("map_canvas",{mapType:o.i.NONE,camera:{target:{lat:43.0741704,lng:-89.3809802},zoom:2}});case 2:return this.map=l.sent,l.next=5,new Promise((function(l){["https://stamen-tiles.a.ssl.fastly.net/toner/{zoom}/{x}/{y}.png","https://stamen-tiles.a.ssl.fastly.net/watercolor/{zoom}/{x}/{y}.jpg"].forEach((function(l,e){var u=n.map.addTileOverlaySync({zIndex:e,getTile:function(n,e,u){return l.replace("{zoom}",u+"").replace("{x}",n+"").replace("{y}",e+"")}});n.layers.push(u)})),l()}));case 5:case"end":return l.stop()}}),l,this)})))}},{key:"onButtonClick",value:function(){this.layers=this.layers.reverse(),this.layers.forEach((function(l,n){l.setZIndex(n)}))}}]),l}(),i=function l(){_classCallCheck(this,l)},c=e("pMnS"),s=e("MKJQ"),b=e("sZkV"),p=u.nb({encapsulation:0,styles:[["ion-menu-button[_ngcontent-%COMP%]{color:var(--ion-color-primary)}#container[_ngcontent-%COMP%]{position:relative;width:100%;padding:2vmin}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}#container[_ngcontent-%COMP%]   #map_canvas[_ngcontent-%COMP%]{width:100%;height:75vh;margin-top:1%;margin-bottom:1%;border:1px solid #fff}"]],data:{}});function h(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,14,"ion-header",[],null,null,null,s.v,s.e)),u.ob(1,49152,null,0,b.y,[u.h,u.k,u.x],{translucent:[0,"translucent"]},null),(l()(),u.pb(2,0,null,0,12,"ion-toolbar",[],null,null,null,s.H,s.q)),u.ob(3,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.t,s.c)),u.ob(5,49152,null,0,b.i,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.B,s.l)),u.ob(7,49152,null,0,b.O,[u.h,u.k,u.x],null,null),(l()(),u.pb(8,0,null,0,6,"ion-title",[],null,null,null,s.G,s.p)),u.ob(9,49152,null,0,b.ub,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,[" TileOverlay "])),(l()(),u.pb(11,0,null,0,3,"ion-label",[["end",""]],null,null,null,s.y,s.h)),u.ob(12,49152,null,0,b.K,[u.h,u.k,u.x],null,null),(l()(),u.pb(13,0,null,0,1,"a",[["class","sourcecode"],["href","https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v5/blob/master/src/app/tile-overlay/tile-overlay.page.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["[source code]"])),(l()(),u.pb(15,0,null,null,28,"ion-content",[],null,null,null,s.u,s.d)),u.ob(16,49152,null,0,b.r,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(l()(),u.pb(17,0,null,0,6,"ion-header",[["collapse","condense"]],null,null,null,s.v,s.e)),u.ob(18,49152,null,0,b.y,[u.h,u.k,u.x],{collapse:[0,"collapse"]},null),(l()(),u.pb(19,0,null,0,4,"ion-toolbar",[],null,null,null,s.H,s.q)),u.ob(20,49152,null,0,b.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(21,0,null,0,2,"ion-title",[["size","large"]],null,null,null,s.G,s.p)),u.ob(22,49152,null,0,b.ub,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.Fb(-1,0,["TileOverlay"])),(l()(),u.pb(24,0,null,0,19,"div",[["id","container"]],null,null,null,null,null)),(l()(),u.pb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Click on the button!"])),(l()(),u.pb(27,0,null,null,3,"div",[["id","map_canvas"]],null,null,null,null,null)),(l()(),u.pb(28,0,null,null,2,"ion-button",[["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onButtonClick()&&u),u}),s.s,s.b)),u.ob(29,49152,null,0,b.h,[u.h,u.k,u.x],null,null),(l()(),u.Fb(-1,0,["Reverse the zIndex orders"])),(l()(),u.Fb(-1,null,[" Map tiles by "])),(l()(),u.pb(32,0,null,null,1,"a",[["href","http://stamen.com"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["Stamen Design"])),(l()(),u.Fb(-1,null,[", under "])),(l()(),u.pb(35,0,null,null,1,"a",[["href","http://creativecommons.org/licenses/by/3.0"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["CC BY 3.0"])),(l()(),u.Fb(-1,null,[". Data by "])),(l()(),u.pb(38,0,null,null,1,"a",[["href","http://openstreetmap.org"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["OpenStreetMap"])),(l()(),u.Fb(-1,null,[", under "])),(l()(),u.pb(41,0,null,null,1,"a",[["href","http://creativecommons.org/licenses/by-sa/3.0"]],null,null,null,null,null)),(l()(),u.Fb(-1,null,["CC BY SA"])),(l()(),u.Fb(-1,null,[". "]))],(function(l,n){l(n,1,0,!0),l(n,16,0,!0),l(n,18,0,"condense"),l(n,22,0,"large")}),null)}var y=u.lb("app-tile-overlay",r,(function(l){return u.Gb(0,[(l()(),u.pb(0,0,null,null,1,"app-tile-overlay",[],null,null,null,h,p)),u.ob(1,245760,null,0,r,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=e("SVse"),m=e("s7LF"),d=e("iInd");e.d(n,"TileOverlayPageModuleNgFactory",(function(){return v}));var v=u.mb(i,[],(function(l){return u.xb([u.yb(512,u.j,u.X,[[8,[c.a,y]],[3,u.j],u.v]),u.yb(4608,f.k,f.j,[u.s,[2,f.q]]),u.yb(4608,m.d,m.d,[]),u.yb(4608,b.a,b.a,[u.x,u.g]),u.yb(4608,b.Bb,b.Bb,[b.a,u.j,u.p]),u.yb(4608,b.Eb,b.Eb,[b.a,u.j,u.p]),u.yb(1073742336,f.b,f.b,[]),u.yb(1073742336,m.c,m.c,[]),u.yb(1073742336,m.a,m.a,[]),u.yb(1073742336,b.yb,b.yb,[]),u.yb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),u.yb(1073742336,i,i,[]),u.yb(1024,d.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);