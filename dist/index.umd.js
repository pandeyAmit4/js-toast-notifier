!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t||self).jsToastNotifier={})}(this,function(t){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){var e={exports:{}};return t(e,e.exports),e.exports}var r,o,i=function(t){return t&&t.Math===Math&&t},a=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},c=!u(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),f=!u(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),s=Function.prototype.call,l=f?s.bind(s):function(){return s.apply(s,arguments)},d={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h={f:p&&!d.call({1:2},1)?function(t){var e=p(this,t);return!!e&&e.enumerable}:d},g=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v=Function.prototype,y=v.call,b=f&&v.bind.bind(y,y),m=f?b:function(t){return function(){return y.apply(t,arguments)}},w=m({}.toString),x=m("".slice),C=function(t){return x(w(t),8,-1)},O=Object,S=m("".split),E=u(function(){return!O("z").propertyIsEnumerable(0)})?function(t){return"String"===C(t)?S(t,""):O(t)}:O,j=function(t){return null==t},k=TypeError,A=function(t){if(j(t))throw new k("Can't call method on "+t);return t},P=function(t){return E(A(t))},T="object"==typeof document&&document.all,L=void 0===T&&void 0!==T?function(t){return"function"==typeof t||t===T}:function(t){return"function"==typeof t},I=function(t){return"object"==typeof t?null!==t:L(t)},R=function(t,e){return arguments.length<2?L(n=a[t])?n:void 0:a[t]&&a[t][e];var n},_=m({}.isPrototypeOf),M=a.navigator,N=M&&M.userAgent,D=N?String(N):"",F=a.process,B=a.Deno,z=F&&F.versions||B&&B.version,G=z&&z.v8;G&&(o=(r=G.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&D&&(!(r=D.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=D.match(/Chrome\/(\d+)/))&&(o=+r[1]);var H=o,K=a.String,W=!!Object.getOwnPropertySymbols&&!u(function(){var t=Symbol("symbol detection");return!K(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&H&&H<41}),q=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,U=Object,V=q?function(t){return"symbol"==typeof t}:function(t){var e=R("Symbol");return L(e)&&_(e.prototype,U(t))},X=String,$=function(t){try{return X(t)}catch(t){return"Object"}},Y=TypeError,J=function(t){if(L(t))return t;throw new Y($(t)+" is not a function")},Q=function(t,e){var n=t[e];return j(n)?void 0:J(n)},Z=TypeError,tt=Object.defineProperty,et=function(t,e){try{tt(a,t,{value:e,configurable:!0,writable:!0})}catch(n){a[t]=e}return e},nt=n(function(t){var e="__core-js_shared__",n=t.exports=a[e]||et(e,{});(n.versions||(n.versions=[])).push({version:"3.39.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),rt=function(t,e){return nt[t]||(nt[t]=e||{})},ot=Object,it=function(t){return ot(A(t))},at=m({}.hasOwnProperty),ut=Object.hasOwn||function(t,e){return at(it(t),e)},ct=0,ft=Math.random(),st=m(1..toString),lt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+st(++ct+ft,36)},dt=a.Symbol,pt=rt("wks"),ht=q?dt.for||dt:dt&&dt.withoutSetter||lt,gt=function(t){return ut(pt,t)||(pt[t]=W&&ut(dt,t)?dt[t]:ht("Symbol."+t)),pt[t]},vt=TypeError,yt=gt("toPrimitive"),bt=function(t){var e=function(t,e){if(!I(t)||V(t))return t;var n,r=Q(t,yt);if(r){if(void 0===e&&(e="default"),n=l(r,t,e),!I(n)||V(n))return n;throw new vt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var n,r;if("string"===e&&L(n=t.toString)&&!I(r=l(n,t)))return r;if(L(n=t.valueOf)&&!I(r=l(n,t)))return r;if("string"!==e&&L(n=t.toString)&&!I(r=l(n,t)))return r;throw new Z("Can't convert object to primitive value")}(t,e)}(t,"string");return V(e)?e:e+""},mt=a.document,wt=I(mt)&&I(mt.createElement),xt=function(t){return wt?mt.createElement(t):{}},Ct=!c&&!u(function(){return 7!==Object.defineProperty(xt("div"),"a",{get:function(){return 7}}).a}),Ot=Object.getOwnPropertyDescriptor,St={f:c?Ot:function(t,e){if(t=P(t),e=bt(e),Ct)try{return Ot(t,e)}catch(t){}if(ut(t,e))return g(!l(h.f,t,e),t[e])}},Et=c&&u(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),jt=String,kt=TypeError,At=function(t){if(I(t))return t;throw new kt(jt(t)+" is not an object")},Pt=TypeError,Tt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,It="enumerable",Rt="configurable",_t="writable",Mt={f:c?Et?function(t,e,n){if(At(t),e=bt(e),At(n),"function"==typeof t&&"prototype"===e&&"value"in n&&_t in n&&!n[_t]){var r=Lt(t,e);r&&r[_t]&&(t[e]=n.value,n={configurable:Rt in n?n[Rt]:r[Rt],enumerable:It in n?n[It]:r[It],writable:!1})}return Tt(t,e,n)}:Tt:function(t,e,n){if(At(t),e=bt(e),At(n),Ct)try{return Tt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw new Pt("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},Nt=c?function(t,e,n){return Mt.f(t,e,g(1,n))}:function(t,e,n){return t[e]=n,t},Dt=Function.prototype,Ft=c&&Object.getOwnPropertyDescriptor,Bt=ut(Dt,"name"),zt={EXISTS:Bt,PROPER:Bt&&"something"===function(){}.name,CONFIGURABLE:Bt&&(!c||c&&Ft(Dt,"name").configurable)},Gt=m(Function.toString);L(nt.inspectSource)||(nt.inspectSource=function(t){return Gt(t)});var Ht,Kt,Wt,qt=nt.inspectSource,Ut=a.WeakMap,Vt=L(Ut)&&/native code/.test(String(Ut)),Xt=rt("keys"),$t=function(t){return Xt[t]||(Xt[t]=lt(t))},Yt={},Jt="Object already initialized",Qt=a.TypeError;if(Vt||nt.state){var Zt=nt.state||(nt.state=new(0,a.WeakMap));Zt.get=Zt.get,Zt.has=Zt.has,Zt.set=Zt.set,Ht=function(t,e){if(Zt.has(t))throw new Qt(Jt);return e.facade=t,Zt.set(t,e),e},Kt=function(t){return Zt.get(t)||{}},Wt=function(t){return Zt.has(t)}}else{var te=$t("state");Yt[te]=!0,Ht=function(t,e){if(ut(t,te))throw new Qt(Jt);return e.facade=t,Nt(t,te,e),e},Kt=function(t){return ut(t,te)?t[te]:{}},Wt=function(t){return ut(t,te)}}var ee={set:Ht,get:Kt,has:Wt,enforce:function(t){return Wt(t)?Kt(t):Ht(t,{})},getterFor:function(t){return function(e){var n;if(!I(e)||(n=Kt(e)).type!==t)throw new Qt("Incompatible receiver, "+t+" required");return n}}},ne=n(function(t){var e=zt.CONFIGURABLE,n=ee.enforce,r=ee.get,o=String,i=Object.defineProperty,a=m("".slice),f=m("".replace),s=m([].join),l=c&&!u(function(){return 8!==i(function(){},"length",{value:8}).length}),d=String(String).split("String"),p=t.exports=function(t,r,u){"Symbol("===a(o(r),0,7)&&(r="["+f(o(r),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),u&&u.getter&&(r="get "+r),u&&u.setter&&(r="set "+r),(!ut(t,"name")||e&&t.name!==r)&&(c?i(t,"name",{value:r,configurable:!0}):t.name=r),l&&u&&ut(u,"arity")&&t.length!==u.arity&&i(t,"length",{value:u.arity});try{u&&ut(u,"constructor")&&u.constructor?c&&i(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var p=n(t);return ut(p,"source")||(p.source=s(d,"string"==typeof r?r:"")),t};Function.prototype.toString=p(function(){return L(this)&&r(this).source||qt(this)},"toString")}),re=function(t,e,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:e;if(L(n)&&ne(n,i,r),r.global)o?t[e]=n:et(e,n);else{try{r.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=n:Mt.f(t,e,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return t},oe=Math.ceil,ie=Math.floor,ae=Math.trunc||function(t){var e=+t;return(e>0?ie:oe)(e)},ue=function(t){var e=+t;return e!=e||0===e?0:ae(e)},ce=Math.max,fe=Math.min,se=Math.min,le=function(t){return(e=ue(t.length))>0?se(e,9007199254740991):0;var e},de=function(t){return function(e,n,r){var o=P(e),i=le(o);if(0===i)return!t&&-1;var a,u=function(t,e){var n=ue(t);return n<0?ce(n+e,0):fe(n,e)}(r,i);if(t&&n!=n){for(;i>u;)if((a=o[u++])!=a)return!0}else for(;i>u;u++)if((t||u in o)&&o[u]===n)return t||u||0;return!t&&-1}},pe={includes:de(!0),indexOf:de(!1)},he=pe.indexOf,ge=m([].push),ve=function(t,e){var n,r=P(t),o=0,i=[];for(n in r)!ut(Yt,n)&&ut(r,n)&&ge(i,n);for(;e.length>o;)ut(r,n=e[o++])&&(~he(i,n)||ge(i,n));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],be=ye.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(t){return ve(t,be)}},we={f:Object.getOwnPropertySymbols},xe=m([].concat),Ce=R("Reflect","ownKeys")||function(t){var e=me.f(At(t)),n=we.f;return n?xe(e,n(t)):e},Oe=function(t,e,n){for(var r=Ce(e),o=Mt.f,i=St.f,a=0;a<r.length;a++){var u=r[a];ut(t,u)||n&&ut(n,u)||o(t,u,i(e,u))}},Se=/#|\.prototype\./,Ee=function(t,e){var n=ke[je(t)];return n===Pe||n!==Ae&&(L(e)?u(e):!!e)},je=Ee.normalize=function(t){return String(t).replace(Se,".").toLowerCase()},ke=Ee.data={},Ae=Ee.NATIVE="N",Pe=Ee.POLYFILL="P",Te=Ee,Le=St.f,Ie=function(t,e){var n,r,o,i,u,c=t.target,f=t.global,s=t.stat;if(n=f?a:s?a[c]||et(c,{}):a[c]&&a[c].prototype)for(r in e){if(i=e[r],o=t.dontCallGetSet?(u=Le(n,r))&&u.value:n[r],!Te(f?r:c+(s?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Oe(i,o)}(t.sham||o&&o.sham)&&Nt(i,"sham",!0),re(n,r,i,t)}},Re=Object.keys||function(t){return ve(t,ye)},_e=Object.assign,Me=Object.defineProperty,Ne=m([].concat),De=!_e||u(function(){if(c&&1!==_e({b:1},_e(Me({},"a",{enumerable:!0,get:function(){Me(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol("assign detection"),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!==_e({},t)[n]||Re(_e({},e)).join("")!==r})?function(t,e){for(var n=it(t),r=arguments.length,o=1,i=we.f,a=h.f;r>o;)for(var u,f=E(arguments[o++]),s=i?Ne(Re(f),i(f)):Re(f),d=s.length,p=0;d>p;)u=s[p++],c&&!l(a,f,u)||(n[u]=f[u]);return n}:_e;Ie({target:"Object",stat:!0,arity:2,forced:Object.assign!==De},{assign:De});var Fe={};Fe[gt("toStringTag")]="z";var Be="[object z]"===String(Fe),ze=gt("toStringTag"),Ge=Object,He="Arguments"===C(function(){return arguments}()),Ke=Be?C:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Ge(t),ze))?n:He?C(e):"Object"===(r=C(e))&&L(e.callee)?"Arguments":r},We=String,qe=function(t){if("Symbol"===Ke(t))throw new TypeError("Cannot convert a Symbol value to a string");return We(t)},Ue=/"/g,Ve=m("".replace);Ie({target:"String",proto:!0,forced:u(function(){var t="".anchor('"');return t!==t.toLowerCase()||t.split('"').length>3})},{anchor:function(t){return e=t,n=qe(A(this)),r="<a",(r+=' name="'+Ve(qe(e),Ue,"&quot;")+'"')+">"+n+"</a>";var e,n,r}});var Xe=Array.isArray||function(t){return"Array"===C(t)},$e=TypeError,Ye=function(t){if(t>9007199254740991)throw $e("Maximum allowed index exceeded");return t},Je=function(t,e,n){c?Mt.f(t,e,g(0,n)):t[e]=n},Qe=function(){},Ze=R("Reflect","construct"),tn=/^\s*(?:class|function)\b/,en=m(tn.exec),nn=!tn.test(Qe),rn=function(t){if(!L(t))return!1;try{return Ze(Qe,[],t),!0}catch(t){return!1}},on=function(t){if(!L(t))return!1;switch(Ke(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return nn||!!en(tn,qt(t))}catch(t){return!0}};on.sham=!0;var an=!Ze||u(function(){var t;return rn(rn.call)||!rn(Object)||!rn(function(){t=!0})||t})?on:rn,un=gt("species"),cn=Array,fn=function(t,e){return new(function(t){var e;return Xe(t)&&(an(e=t.constructor)&&(e===cn||Xe(e.prototype))||I(e)&&null===(e=e[un]))&&(e=void 0),void 0===e?cn:e}(t))(0===e?0:e)},sn=gt("species"),ln=function(t){return H>=51||!u(function(){var e=[];return(e.constructor={})[sn]=function(){return{foo:1}},1!==e[t](Boolean).foo})},dn=gt("isConcatSpreadable"),pn=H>=51||!u(function(){var t=[];return t[dn]=!1,t.concat()[0]!==t}),hn=function(t){if(!I(t))return!1;var e=t[dn];return void 0!==e?!!e:Xe(t)},gn=!pn||!ln("concat");Ie({target:"Array",proto:!0,arity:1,forced:gn},{concat:function(t){var e,n,r,o,i,a=it(this),u=fn(a,0),c=0;for(e=-1,r=arguments.length;e<r;e++)if(hn(i=-1===e?a:arguments[e]))for(o=le(i),Ye(c+o),n=0;n<o;n++,c++)n in i&&Je(u,c,i[n]);else Ye(c+1),Je(u,c++,i);return u.length=c,u}});var vn=function(t){if("Function"===C(t))return m(t)},yn=vn(vn.bind),bn=function(t,e){return J(t),void 0===e?t:f?yn(t,e):function(){return t.apply(e,arguments)}},mn=m([].push),wn=function(t){var e=1===t,n=2===t,r=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(c,f,s,l){for(var d,p,h=it(c),g=E(h),v=le(g),y=bn(f,s),b=0,m=l||fn,w=e?m(c,v):n||a?m(c,0):void 0;v>b;b++)if((u||b in g)&&(p=y(d=g[b],b,h),t))if(e)w[b]=p;else if(p)switch(t){case 3:return!0;case 5:return d;case 6:return b;case 2:mn(w,d)}else switch(t){case 4:return!1;case 7:mn(w,d)}return i?-1:r||o?o:w}},xn=[wn(0),wn(1),wn(2),wn(3),wn(4),wn(5),wn(6),wn(7)][2],Cn=ln("filter");Ie({target:"Array",proto:!0,forced:!Cn},{filter:function(t){return xn(this,t,arguments.length>1?arguments[1]:void 0)}});var On=function(t,e,n){var r,o;At(t);try{if(!(r=Q(t,"return"))){if("throw"===e)throw n;return n}r=l(r,t)}catch(t){o=!0,r=t}if("throw"===e)throw n;if(o)throw r;return At(r),n},Sn=function(t,e,n,r){try{return r?e(At(n)[0],n[1]):e(n)}catch(e){On(t,"throw",e)}},En={},jn=gt("iterator"),kn=Array.prototype,An=function(t){return void 0!==t&&(En.Array===t||kn[jn]===t)},Pn=gt("iterator"),Tn=function(t){if(!j(t))return Q(t,Pn)||Q(t,"@@iterator")||En[Ke(t)]},Ln=TypeError,In=function(t,e){var n=arguments.length<2?Tn(t):e;if(J(n))return At(l(n,t));throw new Ln($(t)+" is not iterable")},Rn=Array,_n=gt("iterator"),Mn=!1;try{var Nn=0,Dn={next:function(){return{done:!!Nn++}},return:function(){Mn=!0}};Dn[_n]=function(){return this},Array.from(Dn,function(){throw 2})}catch(t){}var Fn=function(t,e){try{if(!e&&!Mn)return!1}catch(t){return!1}var n=!1;try{var r={};r[_n]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n},Bn=!Fn(function(t){Array.from(t)});Ie({target:"Array",stat:!0,forced:Bn},{from:function(t){var e=it(t),n=an(this),r=arguments.length,o=r>1?arguments[1]:void 0,i=void 0!==o;i&&(o=bn(o,r>2?arguments[2]:void 0));var a,u,c,f,s,d,p=Tn(e),h=0;if(!p||this===Rn&&An(p))for(a=le(e),u=n?new this(a):Rn(a);a>h;h++)d=i?o(e[h],h):e[h],Je(u,h,d);else for(u=n?new this:[],s=(f=In(e,p)).next;!(c=l(s,f)).done;h++)d=i?Sn(f,o,[c.value,h],!0):c.value,Je(u,h,d);return u.length=h,u}});var zn,Gn=c&&!Et?Object.defineProperties:function(t,e){At(t);for(var n,r=P(e),o=Re(e),i=o.length,a=0;i>a;)Mt.f(t,n=o[a++],r[n]);return t},Hn={f:Gn},Kn=R("document","documentElement"),Wn="prototype",qn="script",Un=$t("IE_PROTO"),Vn=function(){},Xn=function(t){return"<"+qn+">"+t+"</"+qn+">"},$n=function(t){t.write(Xn("")),t.close();var e=t.parentWindow.Object;return t=null,e},Yn=function(){try{zn=new ActiveXObject("htmlfile")}catch(t){}var t,e,n;Yn="undefined"!=typeof document?document.domain&&zn?$n(zn):(e=xt("iframe"),n="java"+qn+":",e.style.display="none",Kn.appendChild(e),e.src=String(n),(t=e.contentWindow.document).open(),t.write(Xn("document.F=Object")),t.close(),t.F):$n(zn);for(var r=ye.length;r--;)delete Yn[Wn][ye[r]];return Yn()};Yt[Un]=!0;var Jn=Object.create||function(t,e){var n;return null!==t?(Vn[Wn]=At(t),n=new Vn,Vn[Wn]=null,n[Un]=t):n=Yn(),void 0===e?n:Hn.f(n,e)},Qn=Mt.f,Zn=gt("unscopables"),tr=Array.prototype;void 0===tr[Zn]&&Qn(tr,Zn,{configurable:!0,value:Jn(null)});var er=function(t){tr[Zn][t]=!0},nr=pe.includes,rr=u(function(){return!Array(1).includes()});Ie({target:"Array",proto:!0,forced:rr},{includes:function(t){return nr(this,t,arguments.length>1?arguments[1]:void 0)}}),er("includes");var or,ir,ar,ur=!u(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),cr=$t("IE_PROTO"),fr=Object,sr=fr.prototype,lr=ur?fr.getPrototypeOf:function(t){var e=it(t);if(ut(e,cr))return e[cr];var n=e.constructor;return L(n)&&e instanceof n?n.prototype:e instanceof fr?sr:null},dr=gt("iterator"),pr=!1;[].keys&&("next"in(ar=[].keys())?(ir=lr(lr(ar)))!==Object.prototype&&(or=ir):pr=!0);var hr=!I(or)||u(function(){var t={};return or[dr].call(t)!==t});hr&&(or={}),L(or[dr])||re(or,dr,function(){return this});var gr={IteratorPrototype:or,BUGGY_SAFARI_ITERATORS:pr},vr=Mt.f,yr=gt("toStringTag"),br=function(t,e,n){t&&!n&&(t=t.prototype),t&&!ut(t,yr)&&vr(t,yr,{configurable:!0,value:e})},mr=gr.IteratorPrototype,wr=function(){return this},xr=String,Cr=TypeError,Or=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=function(t){try{return m(J(Object.getOwnPropertyDescriptor(t,"__proto__").set))}catch(t){}}(Object.prototype))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return A(n),function(t){if(function(t){return I(t)||null===t}(t))return t;throw new Cr("Can't set "+xr(t)+" as a prototype")}(r),I(n)?(e?t(n,r):n.__proto__=r,n):n}}():void 0),Sr=zt.PROPER,Er=zt.CONFIGURABLE,jr=gr.IteratorPrototype,kr=gr.BUGGY_SAFARI_ITERATORS,Ar=gt("iterator"),Pr="keys",Tr="values",Lr="entries",Ir=function(){return this},Rr=function(t,e,n,r,o,i,a){!function(t,e,n){var r=e+" Iterator";t.prototype=Jn(mr,{next:g(1,n)}),br(t,r,!1),En[r]=wr}(n,e,r);var u,c,f,s=function(t){if(t===o&&y)return y;if(!kr&&t&&t in h)return h[t];switch(t){case Pr:case Tr:case Lr:return function(){return new n(this,t)}}return function(){return new n(this)}},d=e+" Iterator",p=!1,h=t.prototype,v=h[Ar]||h["@@iterator"]||o&&h[o],y=!kr&&v||s(o),b="Array"===e&&h.entries||v;if(b&&(u=lr(b.call(new t)))!==Object.prototype&&u.next&&(lr(u)!==jr&&(Or?Or(u,jr):L(u[Ar])||re(u,Ar,Ir)),br(u,d,!0)),Sr&&o===Tr&&v&&v.name!==Tr&&(Er?Nt(h,"name",Tr):(p=!0,y=function(){return l(v,this)})),o)if(c={values:s(Tr),keys:i?y:s(Pr),entries:s(Lr)},a)for(f in c)(kr||p||!(f in h))&&re(h,f,c[f]);else Ie({target:e,proto:!0,forced:kr||p},c);return h[Ar]!==y&&re(h,Ar,y,{name:o}),En[e]=y,c},_r=function(t,e){return{value:t,done:e}},Mr=Mt.f,Nr="Array Iterator",Dr=ee.set,Fr=ee.getterFor(Nr),Br=Rr(Array,"Array",function(t,e){Dr(this,{type:Nr,target:P(t),index:0,kind:e})},function(){var t=Fr(this),e=t.target,n=t.index++;if(!e||n>=e.length)return t.target=null,_r(void 0,!0);switch(t.kind){case"keys":return _r(n,!1);case"values":return _r(e[n],!1)}return _r([n,e[n]],!1)},"values"),zr=En.Arguments=En.Array;if(er("keys"),er("values"),er("entries"),c&&"values"!==zr.name)try{Mr(zr,"name",{value:"values"})}catch(t){}var Gr,Hr=m([].join),Kr=E!==Object||!((Gr=[].join)&&u(function(){Gr.call(null,",",1)}));Ie({target:"Array",proto:!0,forced:Kr},{join:function(t){return Hr(P(this),void 0===t?",":t)}}),Be||re(Object.prototype,"toString",Be?{}.toString:function(){return"[object "+Ke(this)+"]"},{unsafe:!0});var Wr,qr,Ur=function(){var t=At(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},Vr=a.RegExp,Xr=u(function(){var t=Vr("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),$r=Xr||u(function(){return!Vr("a","y").sticky}),Yr={BROKEN_CARET:Xr||u(function(){var t=Vr("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:$r,UNSUPPORTED_Y:Xr},Jr=a.RegExp,Qr=u(function(){var t=Jr(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}),Zr=a.RegExp,to=u(function(){var t=Zr("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}),eo=ee.get,no=rt("native-string-replace",String.prototype.replace),ro=RegExp.prototype.exec,oo=ro,io=m("".charAt),ao=m("".indexOf),uo=m("".replace),co=m("".slice),fo=(qr=/b*/g,l(ro,Wr=/a/,"a"),l(ro,qr,"a"),0!==Wr.lastIndex||0!==qr.lastIndex),so=Yr.BROKEN_CARET,lo=void 0!==/()??/.exec("")[1];(fo||lo||so||Qr||to)&&(oo=function(t){var e,n,r,o,i,a,u,c=this,f=eo(c),s=qe(t),d=f.raw;if(d)return d.lastIndex=c.lastIndex,e=l(oo,d,s),c.lastIndex=d.lastIndex,e;var p=f.groups,h=so&&c.sticky,g=l(Ur,c),v=c.source,y=0,b=s;if(h&&(g=uo(g,"y",""),-1===ao(g,"g")&&(g+="g"),b=co(s,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==io(s,c.lastIndex-1))&&(v="(?: "+v+")",b=" "+b,y++),n=new RegExp("^(?:"+v+")",g)),lo&&(n=new RegExp("^"+v+"$(?!\\s)",g)),fo&&(r=c.lastIndex),o=l(ro,h?n:c,b),h?o?(o.input=co(o.input,y),o[0]=co(o[0],y),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:fo&&o&&(c.lastIndex=c.global?o.index+o[0].length:r),lo&&o&&o.length>1&&l(no,o[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o&&p)for(o.groups=a=Jn(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o}),Ie({target:"RegExp",proto:!0,forced:/./.exec!==oo},{exec:oo});var po=m([].slice),ho=me.f,go="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],vo={f:function(t){return go&&"Window"===C(t)?function(t){try{return ho(t)}catch(t){return po(go)}}(t):ho(P(t))}},yo=u(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}),bo=Object.isExtensible,mo=u(function(){bo(1)})||yo?function(t){return!!I(t)&&(!yo||"ArrayBuffer"!==C(t))&&(!bo||bo(t))}:bo,wo=!u(function(){return Object.isExtensible(Object.preventExtensions({}))}),xo=n(function(t){var e=Mt.f,n=!1,r=lt("meta"),o=0,i=function(t){e(t,r,{value:{objectID:"O"+o++,weakData:{}}})},a=t.exports={enable:function(){a.enable=function(){},n=!0;var t=me.f,e=m([].splice),o={};o[r]=1,t(o).length&&(me.f=function(n){for(var o=t(n),i=0,a=o.length;i<a;i++)if(o[i]===r){e(o,i,1);break}return o},Ie({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:vo.f}))},fastKey:function(t,e){if(!I(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!ut(t,r)){if(!mo(t))return"F";if(!e)return"E";i(t)}return t[r].objectID},getWeakData:function(t,e){if(!ut(t,r)){if(!mo(t))return!0;if(!e)return!1;i(t)}return t[r].weakData},onFreeze:function(t){return wo&&n&&mo(t)&&!ut(t,r)&&i(t),t}};Yt[r]=!0}),Co=TypeError,Oo=function(t,e){this.stopped=t,this.result=e},So=Oo.prototype,Eo=function(t,e,n){var r,o,i,a,u,c,f,s=!(!n||!n.AS_ENTRIES),d=!(!n||!n.IS_RECORD),p=!(!n||!n.IS_ITERATOR),h=!(!n||!n.INTERRUPTED),g=bn(e,n&&n.that),v=function(t){return r&&On(r,"normal",t),new Oo(!0,t)},y=function(t){return s?(At(t),h?g(t[0],t[1],v):g(t[0],t[1])):h?g(t,v):g(t)};if(d)r=t.iterator;else if(p)r=t;else{if(!(o=Tn(t)))throw new Co($(t)+" is not iterable");if(An(o)){for(i=0,a=le(t);a>i;i++)if((u=y(t[i]))&&_(So,u))return u;return new Oo(!1)}r=In(t,o)}for(c=d?t.next:r.next;!(f=l(c,r)).done;){try{u=y(f.value)}catch(t){On(r,"throw",t)}if("object"==typeof u&&u&&_(So,u))return u}return new Oo(!1)},jo=TypeError,ko=function(t,e){if(_(e,t))return t;throw new jo("Incorrect invocation")},Ao=function(t,e,n){return n.get&&ne(n.get,e,{getter:!0}),n.set&&ne(n.set,e,{setter:!0}),Mt.f(t,e,n)},Po=function(t,e,n){for(var r in e)re(t,r,e[r],n);return t},To=gt("species"),Lo=xo.fastKey,Io=ee.set,Ro=ee.getterFor,_o={getConstructor:function(t,e,n,r){var o=t(function(t,o){ko(t,i),Io(t,{type:e,index:Jn(null),first:null,last:null,size:0}),c||(t.size=0),j(o)||Eo(o,t[r],{that:t,AS_ENTRIES:n})}),i=o.prototype,a=Ro(e),u=function(t,e,n){var r,o,i=a(t),u=f(t,e);return u?u.value=n:(i.last=u={index:o=Lo(e,!0),key:e,value:n,previous:r=i.last,next:null,removed:!1},i.first||(i.first=u),r&&(r.next=u),c?i.size++:t.size++,"F"!==o&&(i.index[o]=u)),t},f=function(t,e){var n,r=a(t),o=Lo(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key===e)return n};return Po(i,{clear:function(){for(var t=a(this),e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=null),e=e.next;t.first=t.last=null,t.index=Jn(null),c?t.size=0:this.size=0},delete:function(t){var e=this,n=a(e),r=f(e,t);if(r){var o=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=o),o&&(o.previous=i),n.first===r&&(n.first=o),n.last===r&&(n.last=i),c?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=a(this),r=bn(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!f(this,t)}}),Po(i,n?{get:function(t){var e=f(this,t);return e&&e.value},set:function(t,e){return u(this,0===t?0:t,e)}}:{add:function(t){return u(this,t=0===t?0:t,t)}}),c&&Ao(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,e,n){var r=e+" Iterator",o=Ro(e),i=Ro(r);Rr(t,e,function(t,e){Io(this,{type:r,target:t,state:o(t),kind:e,last:null})},function(){for(var t=i(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?_r("keys"===e?n.key:"values"===e?n.value:[n.key,n.value],!1):(t.target=null,_r(void 0,!0))},n?"entries":"values",!n,!0),function(t){var e=R(t);c&&e&&!e[To]&&Ao(e,To,{configurable:!0,get:function(){return this}})}(e)}};!function(t,e,n){var r=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),i=r?"set":"add",c=a[t],f=c&&c.prototype,s=c,l={},d=function(t){var e=m(f[t]);re(f,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return!(o&&!I(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return o&&!I(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return!(o&&!I(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})};if(Te(t,!L(c)||!(o||f.forEach&&!u(function(){(new c).entries().next()}))))s=n.getConstructor(e,t,r,i),xo.enable();else if(Te(t,!0)){var p=new s,h=p[i](o?{}:-0,1)!==p,g=u(function(){p.has(1)}),v=Fn(function(t){new c(t)}),y=!o&&u(function(){for(var t=new c,e=5;e--;)t[i](e,e);return!t.has(-0)});v||((s=e(function(t,e){ko(t,f);var n=function(t,e,n){var r,o;return Or&&L(r=e.constructor)&&r!==n&&I(o=r.prototype)&&o!==n.prototype&&Or(t,o),t}(new c,t,s);return j(e)||Eo(e,n[i],{that:n,AS_ENTRIES:r}),n})).prototype=f,f.constructor=s),(g||y)&&(d("delete"),d("has"),r&&d("get")),(y||h)&&d(i),o&&f.clear&&delete f.clear}l[t]=s,Ie({global:!0,constructor:!0,forced:s!==c},l),br(s,t),o||n.setStrong(s,t,r)}("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},_o);var Mo=gt("match"),No=TypeError,Do=gt("match"),Fo=m("".indexOf);Ie({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Do]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~Fo(qe(A(this)),qe(function(t){if(function(t){var e;return I(t)&&(void 0!==(e=t[Mo])?!!e:"RegExp"===C(t))}(t))throw new No("The method doesn't accept regular expressions");return t}(t)),arguments.length>1?arguments[1]:void 0)}});var Bo=m("".charAt),zo=m("".charCodeAt),Go=m("".slice),Ho=function(t){return function(e,n){var r,o,i=qe(A(e)),a=ue(n),u=i.length;return a<0||a>=u?t?"":void 0:(r=zo(i,a))<55296||r>56319||a+1===u||(o=zo(i,a+1))<56320||o>57343?t?Bo(i,a):r:t?Go(i,a,a+2):o-56320+(r-55296<<10)+65536}},Ko=(Ho(!1),Ho(!0)),Wo="String Iterator",qo=ee.set,Uo=ee.getterFor(Wo);Rr(String,"String",function(t){qo(this,{type:Wo,string:qe(t),index:0})},function(){var t,e=Uo(this),n=e.string,r=e.index;return r>=n.length?_r(void 0,!0):(t=Ko(n,r),e.index+=t.length,_r(t,!1))});var Vo,Xo="\t\n\v\f\r                　\u2028\u2029\ufeff",$o=m("".replace),Yo=RegExp("^["+Xo+"]+"),Jo=RegExp("(^|[^"+Xo+"])["+Xo+"]+$"),Qo=function(t){return function(e){var n=qe(A(e));return 1&t&&(n=$o(n,Yo,"")),2&t&&(n=$o(n,Jo,"$1")),n}},Zo={start:Qo(1),end:Qo(2),trim:Qo(3)},ti=zt.PROPER,ei=Zo.trim;Ie({target:"String",proto:!0,forced:(Vo="trim",u(function(){return!!Xo[Vo]()||"​᠎"!=="​᠎"[Vo]()||ti&&Xo[Vo].name!==Vo}))},{trim:function(){return ei(this)}});var ni,ri={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},oi=xt("span").classList,ii=oi&&oi.constructor&&oi.constructor.prototype,ai=ii===Object.prototype?void 0:ii,ui=gt("iterator"),ci=Br.values,fi=function(t,e){if(t){if(t[ui]!==ci)try{Nt(t,ui,ci)}catch(e){t[ui]=ci}if(br(t,e,!0),ri[e])for(var n in Br)if(t[n]!==Br[n])try{Nt(t,n,Br[n])}catch(e){t[n]=Br[n]}}};for(var si in ri)fi(a[si]&&a[si].prototype,si);function li(t,e){void 0===t&&(t="top-right"),void 0===e&&(e="");var n,r,o="droplet-toast-container";n=window.innerWidth<=768,r=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),(n||r)&&(t=t.includes("top")?"top-center":"bottom-center");var i=document.querySelector("."+o+'[data-position="'+t+'"]');if(i){var a=i.className.split(" "),u=e.split(" ").filter(function(t){return t}),c=Array.from(new Set([].concat(a,u)));i.className=c.join(" ")}else(i=document.createElement("div")).className=(o+" "+e).trim(),i.setAttribute("data-position",t),document.body.appendChild(i);return i}fi(ai,"DOMTokenList");var di="success",pi="error",hi="info",gi="warning",vi=((ni={})[di]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',ni[pi]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',ni[hi]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',ni[gi]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',ni),yi={light:{backgroundColor:"#ffffff",textColor:"#333333"},dark:{backgroundColor:"#1a1a1a",textColor:"#ffffff"}},bi={success:{backgroundColor:"#0d6d4d",textColor:"#ffffff",iconColor:"#ffffff"},error:{backgroundColor:"#c41e3a",textColor:"#ffffff",iconColor:"#ffffff"},info:{backgroundColor:"#0055b3",textColor:"#ffffff",iconColor:"#ffffff"},warning:{backgroundColor:"#944e00",textColor:"#ffffff",iconColor:"#ffffff"},neutral:{backgroundColor:"#6c757d",textColor:"#ffffff",iconColor:"#ffffff"},successLight:{backgroundColor:"#d4edda",textColor:"#155724",iconColor:"#155724"},errorLight:{backgroundColor:"#f8d7da",textColor:"#721c24",iconColor:"#721c24"},infoLight:{backgroundColor:"#d1ecf1",textColor:"#0c5460",iconColor:"#0c5460"},warningLight:{backgroundColor:"#fff3cd",textColor:"#856404",iconColor:"#856404"},highContrast:{backgroundColor:"#000000",textColor:"#ffdd57",iconColor:"#ffdd57"},positive:{backgroundColor:"#2e7d32",textColor:"#ffffff",iconColor:"#ffffff"},negative:{backgroundColor:"#b71c1c",textColor:"#ffffff",iconColor:"#ffffff"},accentBlue:{backgroundColor:"#1976d2",textColor:"#ffffff",iconColor:"#ffffff"},accentPink:{backgroundColor:"#d81b60",textColor:"#ffffff",iconColor:"#ffffff"},accentPurple:{backgroundColor:"#6a1b9a",textColor:"#ffffff",iconColor:"#ffffff"},accentTeal:{backgroundColor:"#00897b",textColor:"#ffffff",iconColor:"#ffffff"}};t.ToastNotifier=/*#__PURE__*/function(){function t(t){"undefined"!=typeof window&&(this.options=Object.assign({position:"top-right",timeout:5e3,theme:"light",showCloseButton:!0,pauseOnHover:!0},t||{}),this.container=li(this.options.position,this.options.customContainerClass),this.handleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.handleKeyDown))}var e=t.prototype;return e.show=function(t,e){if("undefined"==typeof window)return null;var n=Object.assign({},this.options,e||{}),r=function(t,e){var n=document.createElement("div"),r=function(t){return Object.assign({},t.type&&bi[t.type]?bi[t.type]:yi[t.theme]||yi.light,t.theme)}(e),o=e.type||"default";n.className="toast "+(e.customClass||""),n.setAttribute("role","alert"),n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic","true"),"default"!==o&&n.setAttribute("aria-label",o+" notification: "+t),Object.assign(n.style,{backgroundColor:r.backgroundColor,color:r.textColor});var i=function(t,e,n){var r=document.createElement("div");if(r.className="toast-content",r.setAttribute("role","presentation"),e.type&&vi[e.type]){var o=function(t,e){var n=document.createElement("div");return n.className="toast-icon",n.setAttribute("role","img"),n.setAttribute("aria-label",t.type+" icon"),n.innerHTML=t.icon||vi[t.type],n.style.color=e.iconColor||e.textColor,n}(e,n);r.appendChild(o)}var i=document.createElement("span");return i.innerHTML=t,r.appendChild(i),r}(t,e,r);if(n.appendChild(i),!1!==e.showCloseButton){var a=function(t){var e=document.createElement("button");return e.className="toast-close",e.setAttribute("aria-label","Close notification"),e.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',e.style.color=t.textColor,e}(r);n.appendChild(a)}if(e.anchor){n.classList.add("toast-anchored");var u=function(t){var e=document.createElement("div");return e.className="toast-droplet",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),e.style.backgroundColor=t.backgroundColor,e}(r);n.appendChild(u)}if(!1!==e.showProgress&&e.timeout){var c=function(t){var e=document.createElement("div");e.className="toast-progress",t.progressHeight&&e.style.setProperty("--progress-height",t.progressHeight),t.progressColor&&e.style.setProperty("--progress-color",t.progressColor),t.progressBackground&&e.style.setProperty("--progress-background",t.progressBackground);var n=document.createElement("div");n.className="toast-progress-bar",e.appendChild(n);var r=null,o=null,i=0,a=null,u=function(e){if(void 0===e&&(e=!1),e&&null!==r){var u=Date.now()-r;i=Math.max(0,Math.min(1,u/t.timeout)),o=u,r=null,a&&(cancelAnimationFrame(a),a=null),n.style.transition="none",n.style.transform="scaleX("+i+")"}else if(!e){if(null!==o){var c=t.timeout-o;r=Date.now()-o,n.style.transition="transform "+c+"ms linear",requestAnimationFrame(function(){n.style.transform="scaleX(1)"})}else r=Date.now(),n.style.transition="transform "+t.timeout+"ms linear",n.style.transform="scaleX(0)",requestAnimationFrame(function(){n.style.transform="scaleX(1)"});var f=function(){if(null!==r){var e=Date.now()-r;i=Math.max(0,Math.min(1,e/t.timeout)),e<t.timeout&&(a=requestAnimationFrame(f))}};f()}};return setTimeout(function(){u(!1)},0),{progressBar:e,updateProgress:u}}(e),f=c.updateProgress;n.appendChild(c.progressBar),n._updateProgress=f}return n.setAttribute("tabindex","0"),n}(t,n),o={width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight};if(n.anchor){var i=function(t,e,n,r){var o=null==e?void 0:e.getBoundingClientRect(),i=t.getBoundingClientRect(),a={top:0,left:0};if(e){if(a=function(t,e,n){var r={top:{top:e.top-n.height-12-6,left:e.left+(e.width-n.width)/2},bottom:{top:e.bottom+12+6,left:e.left+(e.width-n.width)/2},left:{top:e.top+(e.height-n.height)/2,left:e.left-n.width-12-6},right:{top:e.top+(e.height-n.height)/2,left:e.right+12+6}};return r[t]||r.top}(n,o,i),a=function(t,e,n){var r=20,o=Object.assign({},t);if(t.left<r?t.left=r:t.left+e.width>n.width-r&&(t.left=n.width-e.width-r),t.top<r?t.top=r:t.top+e.height>n.height-r&&(t.top=n.height-e.height-r),t.left!==o.left){var i=Math.min(Math.max(o.left-t.left+e.width/2,20),e.width-20);t.dropletOffset=i}return t}(a,i,r),t.setAttribute("data-point",function(t){return{top:"bottom",bottom:"top",left:"right",right:"left"}[t]||"bottom"}(n)),"bottom"===n){var u=Math.abs(o.top-(a.top+i.height));t.style.setProperty("--droplet-connector-height",u+"px")}}else a=function(t,e,n,r){var o={"top-left":{top:r,left:r},"top-right":{top:r,right:r},"bottom-left":{bottom:r,left:r},"bottom-right":{bottom:r,right:r}};return o[t]||o["top-right"]}(n,0,0,12);return a}(r,n.anchor,n.position,o);Object.assign(r.style,{position:"absolute",top:i.top+"px",left:i.left+"px",zIndex:"1001"}),i.dropletOffset&&r.style.setProperty("--droplet-left",i.dropletOffset+"px"),document.body.appendChild(r)}else this.container=li(n.position),this.container.appendChild(r);var a=new CustomEvent("toastOpened",{detail:{toast:r,message:t,options:n}});document.dispatchEvent(a),r.addEventListener("keydown",function(t){"Enter"!==t.key&&" "!==t.key||this.hide(r)}.bind(this));var u=r.querySelector(".toast-close");if(u&&u.addEventListener("click",this.hide.bind(this,r)),setTimeout(function(){r.classList.add("toast-show"),r._updateProgress&&r._updateProgress(!1)},10),n.timeout){var c,f,s=n.timeout,l=function(){c=Date.now(),f=setTimeout(this.hide.bind(this,r),s),r._updateProgress&&r._updateProgress(!1)}.bind(this);n.pauseOnHover&&(r.addEventListener("mouseenter",function(){clearTimeout(f),s-=Date.now()-c,r._updateProgress&&r._updateProgress(!0)}),r.addEventListener("mouseleave",l)),l()}return r},e.success=function(t,e){return this.show(t,Object.assign({},e,{type:di}))},e.error=function(t,e){return this.show(t,Object.assign({},e,{type:pi}))},e.info=function(t,e){return this.show(t,Object.assign({},e,{type:hi}))},e.warning=function(t,e){return this.show(t,Object.assign({},e,{type:gi}))},e.hide=function(t){t.classList.remove("toast-show");var e=new CustomEvent("toastClosed",{detail:{toast:t}});t.dispatchEvent(e);var n=function(){t.parentNode&&t.parentNode.removeChild(t),t.removeEventListener("transitionend",n)};t.addEventListener("transitionend",n)},e.handleKeyDown=function(t){if("Escape"===t.key)for(var e=this.container.querySelectorAll(".toast"),n=0;n<e.length;n++)this.hide(e[n])},e.destroy=function(){document.removeEventListener("keydown",this.handleKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)},t}()});
