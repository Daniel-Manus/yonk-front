(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{337:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(85),n(70);function r(t){return t.startsWith("/")?"".concat("http://localhost:1337").concat(t):t}},340:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("da0063e4",content,!0,{sourceMap:!1})},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(337);function o(t){var e=[];if(t.metaTitle&&e.push({property:"og:title",content:t.metaTitle},{name:"twitter:title",content:t.metaTitle}),t.metaDescription&&e.push({name:"description",content:t.metaDescription},{property:"og:description",content:t.metaDescription},{name:"twitter:description",content:t.metaDescription}),t.shareImage){var n=Object(r.a)(t.shareImage.url);e.push({name:"image",content:n},{property:"og:image",content:n},{name:"twitter:image",content:n})}return t.article&&e.push({property:"og:type",content:"article"}),e.push({name:"twitter:card",content:"summary_large_image"}),e}},342:function(t,e,n){"use strict";n(62);var r=n(339),o=n(482),c=n(483),l=n(337),d={name:"Landing",props:{model:{type:Object,default:function(){return{}}}},data:function(){return{uid:null,debug:!1,container:null}},methods:{getStrapiMedia:l.a,main:function(){var t,e,n,d,m,f,h=this,w=new r.i,v=new r.X,y=new r.X,x=(new r.X,h.containerTarget.offsetWidth),j=.71*h.containerTarget.offsetWidth,O=new r.X(x/2,j/2),_={envMap:"HDR",roughness:.25,metalness:0};function M(){x=h.containerTarget.offsetWidth,j=.71*h.containerTarget.offsetWidth;t.position.set(0,20,900),t.aspect=x/j,t.updateProjectionMatrix(),n.setSize(x,j)}!function(){var d=document.createElement("div");h.containerTarget.appendChild(d),t=new r.I(25,x/j,1,3e3),(e=new r.O).background=new r.j(15921906);var w=new r.t(16514285,4473924);w.position.set(0,200,0),e.add(w);var v=new r.l(8421504);v.position.set(0,200,100),v.castShadow=!0,v.shadow.camera.top=180,v.shadow.camera.bottom=-100,v.shadow.camera.left=-120,v.shadow.camera.right=120,e.add(v);var y=new r.r(2e3,20,0,0);y.material.opacity=.2,y.material.transparent=!0,h.debug&&e.add(y),h.debug&&e.add(new r.g(v.shadow.camera)),(new c.a).load(Object(l.a)(h.model.url),(function(object){(m=new r.c(object)).clipAction(object.animations[0]).play(),object.traverse((function(t){t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})),f=object,e.add(object)})),(n=new r.bb({antialias:!0})).setPixelRatio(window.devicePixelRatio),n.setSize(x,j),n.shadowMap.enabled=!0,n.outputEncoding=r.cb,d.appendChild(n.domElement);var O=new o.a(t,n.domElement);O.enableZoom=!1,O.enablePan=!1,O.target.set(0,0,0),O.update(),window.addEventListener("resize",M),M()}(),function animate(){requestAnimationFrame(animate),function(){var r=w.getDelta();m&&m.update(r);d,v.x=.0012*(1-y.x),v.y=.0018*(1-y.y),f&&(f.rotation.x+=.05*(v.y-f.rotation.x),f.rotation.y+=.05*(v.x-f.rotation.y));n.toneMappingExposure=_.exposure,n.render(e,t)}()}(),document.addEventListener("mousemove",(function(t){y.x=t.clientX-O.x,y.y=t.clientY-O.y}),!1)}},mounted:function(){var t=this;this.uid=Math.floor(999999999*Math.random()),setTimeout((function(){t.containerTarget=document.querySelector(".three-dee-"+t.uid),t.main()}),1)}},m=(n(344),n(59)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"three-dee",class:"three-dee-"+t.uid})}),[],!1,null,null,null);e.a=component.exports},344:function(t,e,n){"use strict";n(340)},345:function(t,e,n){var r=n(58)(!1);r.push([t.i,"",""]),t.exports=r},346:function(t,e,n){var content=n(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("c988bf08",content,!0,{sourceMap:!1})},486:function(t,e,n){"use strict";n(346)},487:function(t,e,n){var r=n(58)(!1);r.push([t.i,".masonry-grid{margin-bottom:10px}.project-thumb{width:calc(33.3333% - 15px);height:auto;vertical-align:top;transition:.2s}.project-thumb:hover{filter:grayscale(40%)}@media only screen and (max-width:1098px){.project-thumb{width:calc(50% - 15px)}}@media only screen and (max-width:588px){.project-thumb{width:100%}}.project-thumb img{width:100%;margin-bottom:18px}",""]),t.exports=r},488:function(t,e,n){"use strict";n(47),n(62);var r=n(337),o=n(342),c={props:{article:{type:Object,default:function(){return{}}}},components:{ThreeDee:o.a},methods:{getStrapiMedia:r.a}},l=n(59),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{key:t.article.id,attrs:{to:{name:"penisfuck-slug",params:{slug:t.article.slug}}}},[".jpg"===t.article.image.ext||".png"===t.article.image.ext||".gif"===t.article.image.ext?[t.article.image.formats.small?[n("img",{attrs:{src:t.getStrapiMedia(t.article.image.formats.small.url),alt:""}})]:[n("img",{attrs:{src:t.getStrapiMedia(t.article.image.url),alt:""}})]]:t._e()],2)}),[],!1,null,null,null).exports,m=n(520),f={components:{ArticleCard:d},props:{articles:{type:Array,default:function(){return[]}}},computed:{reversedArticles:function(){return this.articles.slice().reverse()}},mounted:function(){var t=new m.a(".masonry-grid",{defaultDirection:"end",gap:5,align:"justify",column:3}),e=function(){setTimeout((function(){window.innerWidth>1098?t.column=3:window.innerWidth<1098&&window.innerWidth>588?t.column=2:t.column=1}),100)};window.addEventListener("resize",e),e(),t.renderItems()}},h=(n(486),Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"masonry-grid"},[t._l(t.reversedArticles,(function(article){return[n("div",{staticClass:"project-thumb",class:{fbx:".fbx"==article.image.ext}},[n("ArticleCard",{key:article.id,attrs:{article:article}})],1)]}))],2)}),[],!1,null,null,null));e.a=h.exports},569:function(t,e,n){"use strict";n.r(e);n(48),n(35),n(34),n(63),n(33),n(64);var r=n(22),o=n(2),c=(n(32),n(202),n(26),n(488)),l=n(341),d=n(337);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Articles:c.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$strapi,r=t.params,e.next=3,n.find("categories",{slug:r.slug});case 3:return o=e.sent,e.t0=o[0],e.next=7,n.find("articles",{"category.name":r.slug});case 7:return e.t1=e.sent,e.next=10,n.find("global");case 10:return e.t2=e.sent,e.abrupt("return",{category:e.t0,articles:e.t1,global:e.t2});case 12:case"end":return e.stop()}}),e)})))()},head:function(){var t=this.global,e=t.defaultSeo,n=t.favicon,r=t.siteName,o=f(f({},e),{},{metaTitle:"".concat(this.category.name," articles"),metaDescription:"All articles about ".concat(this.category.name)});return{title:o.metaTitle,titleTemplate:"%s | ".concat(r),meta:Object(l.a)(o),link:[{rel:"favicon",href:Object(d.a)(n.url)}]}}},w=n(59),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",[n("div",{},[n("div",{},[n("h1",[t._v(t._s(t.category.name))]),t._v(" "),n("Articles",{attrs:{articles:t.articles||[]}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);