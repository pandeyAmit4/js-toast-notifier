var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){var e={exports:{}};return t(e,e.exports),e.exports}var r,n,o=function(t){return t&&t.Math===Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||o("object"==typeof t&&t)||function(){return this}()||Function("return this")(),a=function(t){try{return!!t()}catch(t){return!0}},u=!a(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),c=!a(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}),f=Function.prototype.call,s=c?f.bind(f):function(){return f.apply(f,arguments)},l={}.propertyIsEnumerable,d=Object.getOwnPropertyDescriptor,p={f:d&&!l.call({1:2},1)?function(t){var e=d(this,t);return!!e&&e.enumerable}:l},h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},g=Function.prototype,v=g.call,y=c&&g.bind.bind(v,v),b=c?y:function(t){return function(){return v.apply(t,arguments)}},m=b({}.toString),w=b("".slice),x=function(t){return w(m(t),8,-1)},C=Object,O=b("".split),S=a(function(){return!C("z").propertyIsEnumerable(0)})?function(t){return"String"===x(t)?O(t,""):C(t)}:C,E=function(t){return null==t},j=TypeError,k=function(t){if(E(t))throw new j("Can't call method on "+t);return t},A=function(t){return S(k(t))},P="object"==typeof document&&document.all,T=void 0===P&&void 0!==P?function(t){return"function"==typeof t||t===P}:function(t){return"function"==typeof t},L=function(t){return"object"==typeof t?null!==t:T(t)},I=function(t,e){return arguments.length<2?T(r=i[t])?r:void 0:i[t]&&i[t][e];var r},R=b({}.isPrototypeOf),_=i.navigator,M=_&&_.userAgent,N=M?String(M):"",D=i.process,F=i.Deno,B=D&&D.versions||F&&F.version,z=B&&B.v8;z&&(n=(r=z.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&N&&(!(r=N.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=N.match(/Chrome\/(\d+)/))&&(n=+r[1]);var G=n,H=i.String,K=!!Object.getOwnPropertySymbols&&!a(function(){var t=Symbol("symbol detection");return!H(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&G&&G<41}),W=K&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,q=Object,U=W?function(t){return"symbol"==typeof t}:function(t){var e=I("Symbol");return T(e)&&R(e.prototype,q(t))},V=String,X=function(t){try{return V(t)}catch(t){return"Object"}},$=TypeError,Y=function(t){if(T(t))return t;throw new $(X(t)+" is not a function")},J=function(t,e){var r=t[e];return E(r)?void 0:Y(r)},Q=TypeError,Z=Object.defineProperty,tt=function(t,e){try{Z(i,t,{value:e,configurable:!0,writable:!0})}catch(r){i[t]=e}return e},et=e(function(t){var e="__core-js_shared__",r=t.exports=i[e]||tt(e,{});(r.versions||(r.versions=[])).push({version:"3.39.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),rt=function(t,e){return et[t]||(et[t]=e||{})},nt=Object,ot=function(t){return nt(k(t))},it=b({}.hasOwnProperty),at=Object.hasOwn||function(t,e){return it(ot(t),e)},ut=0,ct=Math.random(),ft=b(1..toString),st=function(t){return"Symbol("+(void 0===t?"":t)+")_"+ft(++ut+ct,36)},lt=i.Symbol,dt=rt("wks"),pt=W?lt.for||lt:lt&&lt.withoutSetter||st,ht=function(t){return at(dt,t)||(dt[t]=K&&at(lt,t)?lt[t]:pt("Symbol."+t)),dt[t]},gt=TypeError,vt=ht("toPrimitive"),yt=function(t){var e=function(t,e){if(!L(t)||U(t))return t;var r,n=J(t,vt);if(n){if(void 0===e&&(e="default"),r=s(n,t,e),!L(r)||U(r))return r;throw new gt("Can't convert object to primitive value")}return void 0===e&&(e="number"),function(t,e){var r,n;if("string"===e&&T(r=t.toString)&&!L(n=s(r,t)))return n;if(T(r=t.valueOf)&&!L(n=s(r,t)))return n;if("string"!==e&&T(r=t.toString)&&!L(n=s(r,t)))return n;throw new Q("Can't convert object to primitive value")}(t,e)}(t,"string");return U(e)?e:e+""},bt=i.document,mt=L(bt)&&L(bt.createElement),wt=function(t){return mt?bt.createElement(t):{}},xt=!u&&!a(function(){return 7!==Object.defineProperty(wt("div"),"a",{get:function(){return 7}}).a}),Ct=Object.getOwnPropertyDescriptor,Ot={f:u?Ct:function(t,e){if(t=A(t),e=yt(e),xt)try{return Ct(t,e)}catch(t){}if(at(t,e))return h(!s(p.f,t,e),t[e])}},St=u&&a(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),Et=String,jt=TypeError,kt=function(t){if(L(t))return t;throw new jt(Et(t)+" is not an object")},At=TypeError,Pt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,Lt="enumerable",It="configurable",Rt="writable",_t={f:u?St?function(t,e,r){if(kt(t),e=yt(e),kt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&Rt in r&&!r[Rt]){var n=Tt(t,e);n&&n[Rt]&&(t[e]=r.value,r={configurable:It in r?r[It]:n[It],enumerable:Lt in r?r[Lt]:n[Lt],writable:!1})}return Pt(t,e,r)}:Pt:function(t,e,r){if(kt(t),e=yt(e),kt(r),xt)try{return Pt(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new At("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},Mt=u?function(t,e,r){return _t.f(t,e,h(1,r))}:function(t,e,r){return t[e]=r,t},Nt=Function.prototype,Dt=u&&Object.getOwnPropertyDescriptor,Ft=at(Nt,"name"),Bt={EXISTS:Ft,PROPER:Ft&&"something"===function(){}.name,CONFIGURABLE:Ft&&(!u||u&&Dt(Nt,"name").configurable)},zt=b(Function.toString);T(et.inspectSource)||(et.inspectSource=function(t){return zt(t)});var Gt,Ht,Kt,Wt=et.inspectSource,qt=i.WeakMap,Ut=T(qt)&&/native code/.test(String(qt)),Vt=rt("keys"),Xt=function(t){return Vt[t]||(Vt[t]=st(t))},$t={},Yt="Object already initialized",Jt=i.TypeError;if(Ut||et.state){var Qt=et.state||(et.state=new(0,i.WeakMap));Qt.get=Qt.get,Qt.has=Qt.has,Qt.set=Qt.set,Gt=function(t,e){if(Qt.has(t))throw new Jt(Yt);return e.facade=t,Qt.set(t,e),e},Ht=function(t){return Qt.get(t)||{}},Kt=function(t){return Qt.has(t)}}else{var Zt=Xt("state");$t[Zt]=!0,Gt=function(t,e){if(at(t,Zt))throw new Jt(Yt);return e.facade=t,Mt(t,Zt,e),e},Ht=function(t){return at(t,Zt)?t[Zt]:{}},Kt=function(t){return at(t,Zt)}}var te={set:Gt,get:Ht,has:Kt,enforce:function(t){return Kt(t)?Ht(t):Gt(t,{})},getterFor:function(t){return function(e){var r;if(!L(e)||(r=Ht(e)).type!==t)throw new Jt("Incompatible receiver, "+t+" required");return r}}},ee=e(function(t){var e=Bt.CONFIGURABLE,r=te.enforce,n=te.get,o=String,i=Object.defineProperty,c=b("".slice),f=b("".replace),s=b([].join),l=u&&!a(function(){return 8!==i(function(){},"length",{value:8}).length}),d=String(String).split("String"),p=t.exports=function(t,n,a){"Symbol("===c(o(n),0,7)&&(n="["+f(o(n),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),a&&a.getter&&(n="get "+n),a&&a.setter&&(n="set "+n),(!at(t,"name")||e&&t.name!==n)&&(u?i(t,"name",{value:n,configurable:!0}):t.name=n),l&&a&&at(a,"arity")&&t.length!==a.arity&&i(t,"length",{value:a.arity});try{a&&at(a,"constructor")&&a.constructor?u&&i(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var p=r(t);return at(p,"source")||(p.source=s(d,"string"==typeof n?n:"")),t};Function.prototype.toString=p(function(){return T(this)&&n(this).source||Wt(this)},"toString")}),re=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(T(r)&&ee(r,i,n),n.global)o?t[e]=r:tt(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:_t.f(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t},ne=Math.ceil,oe=Math.floor,ie=Math.trunc||function(t){var e=+t;return(e>0?oe:ne)(e)},ae=function(t){var e=+t;return e!=e||0===e?0:ie(e)},ue=Math.max,ce=Math.min,fe=Math.min,se=function(t){return(e=ae(t.length))>0?fe(e,9007199254740991):0;var e},le=function(t){return function(e,r,n){var o=A(e),i=se(o);if(0===i)return!t&&-1;var a,u=function(t,e){var r=ae(t);return r<0?ue(r+e,0):ce(r,e)}(n,i);if(t&&r!=r){for(;i>u;)if((a=o[u++])!=a)return!0}else for(;i>u;u++)if((t||u in o)&&o[u]===r)return t||u||0;return!t&&-1}},de={includes:le(!0),indexOf:le(!1)},pe=de.indexOf,he=b([].push),ge=function(t,e){var r,n=A(t),o=0,i=[];for(r in n)!at($t,r)&&at(n,r)&&he(i,r);for(;e.length>o;)at(n,r=e[o++])&&(~pe(i,r)||he(i,r));return i},ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=ve.concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(t){return ge(t,ye)}},me={f:Object.getOwnPropertySymbols},we=b([].concat),xe=I("Reflect","ownKeys")||function(t){var e=be.f(kt(t)),r=me.f;return r?we(e,r(t)):e},Ce=function(t,e,r){for(var n=xe(e),o=_t.f,i=Ot.f,a=0;a<n.length;a++){var u=n[a];at(t,u)||r&&at(r,u)||o(t,u,i(e,u))}},Oe=/#|\.prototype\./,Se=function(t,e){var r=je[Ee(t)];return r===Ae||r!==ke&&(T(e)?a(e):!!e)},Ee=Se.normalize=function(t){return String(t).replace(Oe,".").toLowerCase()},je=Se.data={},ke=Se.NATIVE="N",Ae=Se.POLYFILL="P",Pe=Se,Te=Ot.f,Le=function(t,e){var r,n,o,a,u,c=t.target,f=t.global,s=t.stat;if(r=f?i:s?i[c]||tt(c,{}):i[c]&&i[c].prototype)for(n in e){if(a=e[n],o=t.dontCallGetSet?(u=Te(r,n))&&u.value:r[n],!Pe(f?n:c+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;Ce(a,o)}(t.sham||o&&o.sham)&&Mt(a,"sham",!0),re(r,n,a,t)}},Ie=Object.keys||function(t){return ge(t,ve)},Re=Object.assign,_e=Object.defineProperty,Me=b([].concat),Ne=!Re||a(function(){if(u&&1!==Re({b:1},Re(_e({},"a",{enumerable:!0,get:function(){_e(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol("assign detection"),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!==Re({},t)[r]||Ie(Re({},e)).join("")!==n})?function(t,e){for(var r=ot(t),n=arguments.length,o=1,i=me.f,a=p.f;n>o;)for(var c,f=S(arguments[o++]),l=i?Me(Ie(f),i(f)):Ie(f),d=l.length,h=0;d>h;)c=l[h++],u&&!s(a,f,c)||(r[c]=f[c]);return r}:Re;Le({target:"Object",stat:!0,arity:2,forced:Object.assign!==Ne},{assign:Ne});var De={};De[ht("toStringTag")]="z";var Fe="[object z]"===String(De),Be=ht("toStringTag"),ze=Object,Ge="Arguments"===x(function(){return arguments}()),He=Fe?x:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=ze(t),Be))?r:Ge?x(e):"Object"===(n=x(e))&&T(e.callee)?"Arguments":n},Ke=String,We=function(t){if("Symbol"===He(t))throw new TypeError("Cannot convert a Symbol value to a string");return Ke(t)},qe=/"/g,Ue=b("".replace);Le({target:"String",proto:!0,forced:a(function(){var t="".anchor('"');return t!==t.toLowerCase()||t.split('"').length>3})},{anchor:function(t){return e=t,r=We(k(this)),n="<a",(n+=' name="'+Ue(We(e),qe,"&quot;")+'"')+">"+r+"</a>";var e,r,n}});var Ve=Array.isArray||function(t){return"Array"===x(t)},Xe=TypeError,$e=function(t){if(t>9007199254740991)throw Xe("Maximum allowed index exceeded");return t},Ye=function(t,e,r){u?_t.f(t,e,h(0,r)):t[e]=r},Je=function(){},Qe=I("Reflect","construct"),Ze=/^\s*(?:class|function)\b/,tr=b(Ze.exec),er=!Ze.test(Je),rr=function(t){if(!T(t))return!1;try{return Qe(Je,[],t),!0}catch(t){return!1}},nr=function(t){if(!T(t))return!1;switch(He(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return er||!!tr(Ze,Wt(t))}catch(t){return!0}};nr.sham=!0;var or=!Qe||a(function(){var t;return rr(rr.call)||!rr(Object)||!rr(function(){t=!0})||t})?nr:rr,ir=ht("species"),ar=Array,ur=function(t,e){return new(function(t){var e;return Ve(t)&&(or(e=t.constructor)&&(e===ar||Ve(e.prototype))||L(e)&&null===(e=e[ir]))&&(e=void 0),void 0===e?ar:e}(t))(0===e?0:e)},cr=ht("species"),fr=function(t){return G>=51||!a(function(){var e=[];return(e.constructor={})[cr]=function(){return{foo:1}},1!==e[t](Boolean).foo})},sr=ht("isConcatSpreadable"),lr=G>=51||!a(function(){var t=[];return t[sr]=!1,t.concat()[0]!==t}),dr=function(t){if(!L(t))return!1;var e=t[sr];return void 0!==e?!!e:Ve(t)},pr=!lr||!fr("concat");Le({target:"Array",proto:!0,arity:1,forced:pr},{concat:function(t){var e,r,n,o,i,a=ot(this),u=ur(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(dr(i=-1===e?a:arguments[e]))for(o=se(i),$e(c+o),r=0;r<o;r++,c++)r in i&&Ye(u,c,i[r]);else $e(c+1),Ye(u,c++,i);return u.length=c,u}});var hr=function(t){if("Function"===x(t))return b(t)},gr=hr(hr.bind),vr=function(t,e){return Y(t),void 0===e?t:c?gr(t,e):function(){return t.apply(e,arguments)}},yr=b([].push),br=function(t){var e=1===t,r=2===t,n=3===t,o=4===t,i=6===t,a=7===t,u=5===t||i;return function(c,f,s,l){for(var d,p,h=ot(c),g=S(h),v=se(g),y=vr(f,s),b=0,m=l||ur,w=e?m(c,v):r||a?m(c,0):void 0;v>b;b++)if((u||b in g)&&(p=y(d=g[b],b,h),t))if(e)w[b]=p;else if(p)switch(t){case 3:return!0;case 5:return d;case 6:return b;case 2:yr(w,d)}else switch(t){case 4:return!1;case 7:yr(w,d)}return i?-1:n||o?o:w}},mr=[br(0),br(1),br(2),br(3),br(4),br(5),br(6),br(7)][2],wr=fr("filter");Le({target:"Array",proto:!0,forced:!wr},{filter:function(t){return mr(this,t,arguments.length>1?arguments[1]:void 0)}});var xr=function(t,e,r){var n,o;kt(t);try{if(!(n=J(t,"return"))){if("throw"===e)throw r;return r}n=s(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return kt(n),r},Cr=function(t,e,r,n){try{return n?e(kt(r)[0],r[1]):e(r)}catch(e){xr(t,"throw",e)}},Or={},Sr=ht("iterator"),Er=Array.prototype,jr=function(t){return void 0!==t&&(Or.Array===t||Er[Sr]===t)},kr=ht("iterator"),Ar=function(t){if(!E(t))return J(t,kr)||J(t,"@@iterator")||Or[He(t)]},Pr=TypeError,Tr=function(t,e){var r=arguments.length<2?Ar(t):e;if(Y(r))return kt(s(r,t));throw new Pr(X(t)+" is not iterable")},Lr=Array,Ir=ht("iterator"),Rr=!1;try{var _r=0,Mr={next:function(){return{done:!!_r++}},return:function(){Rr=!0}};Mr[Ir]=function(){return this},Array.from(Mr,function(){throw 2})}catch(t){}var Nr=function(t,e){try{if(!e&&!Rr)return!1}catch(t){return!1}var r=!1;try{var n={};n[Ir]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Dr=!Nr(function(t){Array.from(t)});Le({target:"Array",stat:!0,forced:Dr},{from:function(t){var e=ot(t),r=or(this),n=arguments.length,o=n>1?arguments[1]:void 0,i=void 0!==o;i&&(o=vr(o,n>2?arguments[2]:void 0));var a,u,c,f,l,d,p=Ar(e),h=0;if(!p||this===Lr&&jr(p))for(a=se(e),u=r?new this(a):Lr(a);a>h;h++)d=i?o(e[h],h):e[h],Ye(u,h,d);else for(u=r?new this:[],l=(f=Tr(e,p)).next;!(c=s(l,f)).done;h++)d=i?Cr(f,o,[c.value,h],!0):c.value,Ye(u,h,d);return u.length=h,u}});var Fr,Br=u&&!St?Object.defineProperties:function(t,e){kt(t);for(var r,n=A(e),o=Ie(e),i=o.length,a=0;i>a;)_t.f(t,r=o[a++],n[r]);return t},zr={f:Br},Gr=I("document","documentElement"),Hr="prototype",Kr="script",Wr=Xt("IE_PROTO"),qr=function(){},Ur=function(t){return"<"+Kr+">"+t+"</"+Kr+">"},Vr=function(t){t.write(Ur("")),t.close();var e=t.parentWindow.Object;return t=null,e},Xr=function(){try{Fr=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;Xr="undefined"!=typeof document?document.domain&&Fr?Vr(Fr):(e=wt("iframe"),r="java"+Kr+":",e.style.display="none",Gr.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(Ur("document.F=Object")),t.close(),t.F):Vr(Fr);for(var n=ve.length;n--;)delete Xr[Hr][ve[n]];return Xr()};$t[Wr]=!0;var $r=Object.create||function(t,e){var r;return null!==t?(qr[Hr]=kt(t),r=new qr,qr[Hr]=null,r[Wr]=t):r=Xr(),void 0===e?r:zr.f(r,e)},Yr=_t.f,Jr=ht("unscopables"),Qr=Array.prototype;void 0===Qr[Jr]&&Yr(Qr,Jr,{configurable:!0,value:$r(null)});var Zr=function(t){Qr[Jr][t]=!0},tn=de.includes,en=a(function(){return!Array(1).includes()});Le({target:"Array",proto:!0,forced:en},{includes:function(t){return tn(this,t,arguments.length>1?arguments[1]:void 0)}}),Zr("includes");var rn,nn,on,an=!a(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}),un=Xt("IE_PROTO"),cn=Object,fn=cn.prototype,sn=an?cn.getPrototypeOf:function(t){var e=ot(t);if(at(e,un))return e[un];var r=e.constructor;return T(r)&&e instanceof r?r.prototype:e instanceof cn?fn:null},ln=ht("iterator"),dn=!1;[].keys&&("next"in(on=[].keys())?(nn=sn(sn(on)))!==Object.prototype&&(rn=nn):dn=!0);var pn=!L(rn)||a(function(){var t={};return rn[ln].call(t)!==t});pn&&(rn={}),T(rn[ln])||re(rn,ln,function(){return this});var hn={IteratorPrototype:rn,BUGGY_SAFARI_ITERATORS:dn},gn=_t.f,vn=ht("toStringTag"),yn=function(t,e,r){t&&!r&&(t=t.prototype),t&&!at(t,vn)&&gn(t,vn,{configurable:!0,value:e})},bn=hn.IteratorPrototype,mn=function(){return this},wn=String,xn=TypeError,Cn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=function(t){try{return b(Y(Object.getOwnPropertyDescriptor(t,"__proto__").set))}catch(t){}}(Object.prototype))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return k(r),function(t){if(function(t){return L(t)||null===t}(t))return t;throw new xn("Can't set "+wn(t)+" as a prototype")}(n),L(r)?(e?t(r,n):r.__proto__=n,r):r}}():void 0),On=Bt.PROPER,Sn=Bt.CONFIGURABLE,En=hn.IteratorPrototype,jn=hn.BUGGY_SAFARI_ITERATORS,kn=ht("iterator"),An="keys",Pn="values",Tn="entries",Ln=function(){return this},In=function(t,e,r,n,o,i,a){!function(t,e,r){var n=e+" Iterator";t.prototype=$r(bn,{next:h(1,r)}),yn(t,n,!1),Or[n]=mn}(r,e,n);var u,c,f,l=function(t){if(t===o&&y)return y;if(!jn&&t&&t in g)return g[t];switch(t){case An:case Pn:case Tn:return function(){return new r(this,t)}}return function(){return new r(this)}},d=e+" Iterator",p=!1,g=t.prototype,v=g[kn]||g["@@iterator"]||o&&g[o],y=!jn&&v||l(o),b="Array"===e&&g.entries||v;if(b&&(u=sn(b.call(new t)))!==Object.prototype&&u.next&&(sn(u)!==En&&(Cn?Cn(u,En):T(u[kn])||re(u,kn,Ln)),yn(u,d,!0)),On&&o===Pn&&v&&v.name!==Pn&&(Sn?Mt(g,"name",Pn):(p=!0,y=function(){return s(v,this)})),o)if(c={values:l(Pn),keys:i?y:l(An),entries:l(Tn)},a)for(f in c)(jn||p||!(f in g))&&re(g,f,c[f]);else Le({target:e,proto:!0,forced:jn||p},c);return g[kn]!==y&&re(g,kn,y,{name:o}),Or[e]=y,c},Rn=function(t,e){return{value:t,done:e}},_n=_t.f,Mn="Array Iterator",Nn=te.set,Dn=te.getterFor(Mn),Fn=In(Array,"Array",function(t,e){Nn(this,{type:Mn,target:A(t),index:0,kind:e})},function(){var t=Dn(this),e=t.target,r=t.index++;if(!e||r>=e.length)return t.target=null,Rn(void 0,!0);switch(t.kind){case"keys":return Rn(r,!1);case"values":return Rn(e[r],!1)}return Rn([r,e[r]],!1)},"values"),Bn=Or.Arguments=Or.Array;if(Zr("keys"),Zr("values"),Zr("entries"),u&&"values"!==Bn.name)try{_n(Bn,"name",{value:"values"})}catch(t){}var zn,Gn=b([].join),Hn=S!==Object||!((zn=[].join)&&a(function(){zn.call(null,",",1)}));Le({target:"Array",proto:!0,forced:Hn},{join:function(t){return Gn(A(this),void 0===t?",":t)}}),Fe||re(Object.prototype,"toString",Fe?{}.toString:function(){return"[object "+He(this)+"]"},{unsafe:!0});var Kn,Wn,qn=function(){var t=kt(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e},Un=i.RegExp,Vn=a(function(){var t=Un("a","y");return t.lastIndex=2,null!==t.exec("abcd")}),Xn=Vn||a(function(){return!Un("a","y").sticky}),$n={BROKEN_CARET:Vn||a(function(){var t=Un("^r","gy");return t.lastIndex=2,null!==t.exec("str")}),MISSED_STICKY:Xn,UNSUPPORTED_Y:Vn},Yn=i.RegExp,Jn=a(function(){var t=Yn(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}),Qn=i.RegExp,Zn=a(function(){var t=Qn("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}),to=te.get,eo=rt("native-string-replace",String.prototype.replace),ro=RegExp.prototype.exec,no=ro,oo=b("".charAt),io=b("".indexOf),ao=b("".replace),uo=b("".slice),co=(Wn=/b*/g,s(ro,Kn=/a/,"a"),s(ro,Wn,"a"),0!==Kn.lastIndex||0!==Wn.lastIndex),fo=$n.BROKEN_CARET,so=void 0!==/()??/.exec("")[1];(co||so||fo||Jn||Zn)&&(no=function(t){var e,r,n,o,i,a,u,c=this,f=to(c),l=We(t),d=f.raw;if(d)return d.lastIndex=c.lastIndex,e=s(no,d,l),c.lastIndex=d.lastIndex,e;var p=f.groups,h=fo&&c.sticky,g=s(qn,c),v=c.source,y=0,b=l;if(h&&(g=ao(g,"y",""),-1===io(g,"g")&&(g+="g"),b=uo(l,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==oo(l,c.lastIndex-1))&&(v="(?: "+v+")",b=" "+b,y++),r=new RegExp("^(?:"+v+")",g)),so&&(r=new RegExp("^"+v+"$(?!\\s)",g)),co&&(n=c.lastIndex),o=s(ro,h?r:c,b),h?o?(o.input=uo(o.input,y),o[0]=uo(o[0],y),o.index=c.lastIndex,c.lastIndex+=o[0].length):c.lastIndex=0:co&&o&&(c.lastIndex=c.global?o.index+o[0].length:n),so&&o&&o.length>1&&s(eo,o[0],r,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)}),o&&p)for(o.groups=a=$r(null),i=0;i<p.length;i++)a[(u=p[i])[0]]=o[u[1]];return o}),Le({target:"RegExp",proto:!0,forced:/./.exec!==no},{exec:no});var lo=b([].slice),po=be.f,ho="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],go={f:function(t){return ho&&"Window"===x(t)?function(t){try{return po(t)}catch(t){return lo(ho)}}(t):po(A(t))}},vo=a(function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}),yo=Object.isExtensible,bo=a(function(){yo(1)})||vo?function(t){return!!L(t)&&(!vo||"ArrayBuffer"!==x(t))&&(!yo||yo(t))}:yo,mo=!a(function(){return Object.isExtensible(Object.preventExtensions({}))}),wo=e(function(t){var e=_t.f,r=!1,n=st("meta"),o=0,i=function(t){e(t,n,{value:{objectID:"O"+o++,weakData:{}}})},a=t.exports={enable:function(){a.enable=function(){},r=!0;var t=be.f,e=b([].splice),o={};o[n]=1,t(o).length&&(be.f=function(r){for(var o=t(r),i=0,a=o.length;i<a;i++)if(o[i]===n){e(o,i,1);break}return o},Le({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:go.f}))},fastKey:function(t,e){if(!L(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!at(t,n)){if(!bo(t))return"F";if(!e)return"E";i(t)}return t[n].objectID},getWeakData:function(t,e){if(!at(t,n)){if(!bo(t))return!0;if(!e)return!1;i(t)}return t[n].weakData},onFreeze:function(t){return mo&&r&&bo(t)&&!at(t,n)&&i(t),t}};$t[n]=!0}),xo=TypeError,Co=function(t,e){this.stopped=t,this.result=e},Oo=Co.prototype,So=function(t,e,r){var n,o,i,a,u,c,f,l=!(!r||!r.AS_ENTRIES),d=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),g=vr(e,r&&r.that),v=function(t){return n&&xr(n,"normal",t),new Co(!0,t)},y=function(t){return l?(kt(t),h?g(t[0],t[1],v):g(t[0],t[1])):h?g(t,v):g(t)};if(d)n=t.iterator;else if(p)n=t;else{if(!(o=Ar(t)))throw new xo(X(t)+" is not iterable");if(jr(o)){for(i=0,a=se(t);a>i;i++)if((u=y(t[i]))&&R(Oo,u))return u;return new Co(!1)}n=Tr(t,o)}for(c=d?t.next:n.next;!(f=s(c,n)).done;){try{u=y(f.value)}catch(t){xr(n,"throw",t)}if("object"==typeof u&&u&&R(Oo,u))return u}return new Co(!1)},Eo=TypeError,jo=function(t,e){if(R(e,t))return t;throw new Eo("Incorrect invocation")},ko=function(t,e,r){return r.get&&ee(r.get,e,{getter:!0}),r.set&&ee(r.set,e,{setter:!0}),_t.f(t,e,r)},Ao=function(t,e,r){for(var n in e)re(t,n,e[n],r);return t},Po=ht("species"),To=wo.fastKey,Lo=te.set,Io=te.getterFor,Ro={getConstructor:function(t,e,r,n){var o=t(function(t,o){jo(t,i),Lo(t,{type:e,index:$r(null),first:null,last:null,size:0}),u||(t.size=0),E(o)||So(o,t[n],{that:t,AS_ENTRIES:r})}),i=o.prototype,a=Io(e),c=function(t,e,r){var n,o,i=a(t),c=f(t,e);return c?c.value=r:(i.last=c={index:o=To(e,!0),key:e,value:r,previous:n=i.last,next:null,removed:!1},i.first||(i.first=c),n&&(n.next=c),u?i.size++:t.size++,"F"!==o&&(i.index[o]=c)),t},f=function(t,e){var r,n=a(t),o=To(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key===e)return r};return Ao(i,{clear:function(){for(var t=a(this),e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=null),e=e.next;t.first=t.last=null,t.index=$r(null),u?t.size=0:this.size=0},delete:function(t){var e=this,r=a(e),n=f(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first===n&&(r.first=o),r.last===n&&(r.last=i),u?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=a(this),n=vr(t,arguments.length>1?arguments[1]:void 0);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!f(this,t)}}),Ao(i,r?{get:function(t){var e=f(this,t);return e&&e.value},set:function(t,e){return c(this,0===t?0:t,e)}}:{add:function(t){return c(this,t=0===t?0:t,t)}}),u&&ko(i,"size",{configurable:!0,get:function(){return a(this).size}}),o},setStrong:function(t,e,r){var n=e+" Iterator",o=Io(e),i=Io(n);In(t,e,function(t,e){Lo(this,{type:n,target:t,state:o(t),kind:e,last:null})},function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?Rn("keys"===e?r.key:"values"===e?r.value:[r.key,r.value],!1):(t.target=null,Rn(void 0,!0))},r?"entries":"values",!r,!0),function(t){var e=I(t);u&&e&&!e[Po]&&ko(e,Po,{configurable:!0,get:function(){return this}})}(e)}};!function(t,e,r){var n=-1!==t.indexOf("Map"),o=-1!==t.indexOf("Weak"),u=n?"set":"add",c=i[t],f=c&&c.prototype,s=c,l={},d=function(t){var e=b(f[t]);re(f,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return!(o&&!L(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return o&&!L(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return!(o&&!L(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(Pe(t,!T(c)||!(o||f.forEach&&!a(function(){(new c).entries().next()}))))s=r.getConstructor(e,t,n,u),wo.enable();else if(Pe(t,!0)){var p=new s,h=p[u](o?{}:-0,1)!==p,g=a(function(){p.has(1)}),v=Nr(function(t){new c(t)}),y=!o&&a(function(){for(var t=new c,e=5;e--;)t[u](e,e);return!t.has(-0)});v||((s=e(function(t,e){jo(t,f);var r=function(t,e,r){var n,o;return Cn&&T(n=e.constructor)&&n!==r&&L(o=n.prototype)&&o!==r.prototype&&Cn(t,o),t}(new c,t,s);return E(e)||So(e,r[u],{that:r,AS_ENTRIES:n}),r})).prototype=f,f.constructor=s),(g||y)&&(d("delete"),d("has"),n&&d("get")),(y||h)&&d(u),o&&f.clear&&delete f.clear}l[t]=s,Le({global:!0,constructor:!0,forced:s!==c},l),yn(s,t),o||r.setStrong(s,t,n)}("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},Ro);var _o=ht("match"),Mo=TypeError,No=ht("match"),Do=b("".indexOf);Le({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[No]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~Do(We(k(this)),We(function(t){if(function(t){var e;return L(t)&&(void 0!==(e=t[_o])?!!e:"RegExp"===x(t))}(t))throw new Mo("The method doesn't accept regular expressions");return t}(t)),arguments.length>1?arguments[1]:void 0)}});var Fo=b("".charAt),Bo=b("".charCodeAt),zo=b("".slice),Go=function(t){return function(e,r){var n,o,i=We(k(e)),a=ae(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=Bo(i,a))<55296||n>56319||a+1===u||(o=Bo(i,a+1))<56320||o>57343?t?Fo(i,a):n:t?zo(i,a,a+2):o-56320+(n-55296<<10)+65536}},Ho=(Go(!1),Go(!0)),Ko="String Iterator",Wo=te.set,qo=te.getterFor(Ko);In(String,"String",function(t){Wo(this,{type:Ko,string:We(t),index:0})},function(){var t,e=qo(this),r=e.string,n=e.index;return n>=r.length?Rn(void 0,!0):(t=Ho(r,n),e.index+=t.length,Rn(t,!1))});var Uo,Vo="\t\n\v\f\r                　\u2028\u2029\ufeff",Xo=b("".replace),$o=RegExp("^["+Vo+"]+"),Yo=RegExp("(^|[^"+Vo+"])["+Vo+"]+$"),Jo=function(t){return function(e){var r=We(k(e));return 1&t&&(r=Xo(r,$o,"")),2&t&&(r=Xo(r,Yo,"$1")),r}},Qo={start:Jo(1),end:Jo(2),trim:Jo(3)},Zo=Bt.PROPER,ti=Qo.trim;Le({target:"String",proto:!0,forced:(Uo="trim",a(function(){return!!Vo[Uo]()||"​᠎"!=="​᠎"[Uo]()||Zo&&Vo[Uo].name!==Uo}))},{trim:function(){return ti(this)}});var ei,ri={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},ni=wt("span").classList,oi=ni&&ni.constructor&&ni.constructor.prototype,ii=oi===Object.prototype?void 0:oi,ai=ht("iterator"),ui=Fn.values,ci=function(t,e){if(t){if(t[ai]!==ui)try{Mt(t,ai,ui)}catch(e){t[ai]=ui}if(yn(t,e,!0),ri[e])for(var r in Fn)if(t[r]!==Fn[r])try{Mt(t,r,Fn[r])}catch(e){t[r]=Fn[r]}}};for(var fi in ri)ci(i[fi]&&i[fi].prototype,fi);function si(t,e){void 0===t&&(t="top-right"),void 0===e&&(e="");var r,n,o="droplet-toast-container";r=window.innerWidth<=768,n=/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),(r||n)&&(t=t.includes("top")?"top-center":"bottom-center");var i=document.querySelector("."+o+'[data-position="'+t+'"]');if(i){var a=i.className.split(" "),u=e.split(" ").filter(function(t){return t}),c=Array.from(new Set([].concat(a,u)));i.className=c.join(" ")}else(i=document.createElement("div")).className=(o+" "+e).trim(),i.setAttribute("data-position",t),document.body.appendChild(i);return i}ci(ii,"DOMTokenList");var li="success",di="error",pi="info",hi="warning",gi=((ei={})[li]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',ei[di]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',ei[pi]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',ei[hi]='<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',ei),vi={light:{backgroundColor:"#ffffff",textColor:"#333333"},dark:{backgroundColor:"#1a1a1a",textColor:"#ffffff"}},yi={success:{backgroundColor:"#0d6d4d",textColor:"#ffffff",iconColor:"#ffffff"},error:{backgroundColor:"#c41e3a",textColor:"#ffffff",iconColor:"#ffffff"},info:{backgroundColor:"#0055b3",textColor:"#ffffff",iconColor:"#ffffff"},warning:{backgroundColor:"#944e00",textColor:"#ffffff",iconColor:"#ffffff"},neutral:{backgroundColor:"#6c757d",textColor:"#ffffff",iconColor:"#ffffff"},successLight:{backgroundColor:"#d4edda",textColor:"#155724",iconColor:"#155724"},errorLight:{backgroundColor:"#f8d7da",textColor:"#721c24",iconColor:"#721c24"},infoLight:{backgroundColor:"#d1ecf1",textColor:"#0c5460",iconColor:"#0c5460"},warningLight:{backgroundColor:"#fff3cd",textColor:"#856404",iconColor:"#856404"},highContrast:{backgroundColor:"#000000",textColor:"#ffdd57",iconColor:"#ffdd57"},positive:{backgroundColor:"#2e7d32",textColor:"#ffffff",iconColor:"#ffffff"},negative:{backgroundColor:"#b71c1c",textColor:"#ffffff",iconColor:"#ffffff"},accentBlue:{backgroundColor:"#1976d2",textColor:"#ffffff",iconColor:"#ffffff"},accentPink:{backgroundColor:"#d81b60",textColor:"#ffffff",iconColor:"#ffffff"},accentPurple:{backgroundColor:"#6a1b9a",textColor:"#ffffff",iconColor:"#ffffff"},accentTeal:{backgroundColor:"#00897b",textColor:"#ffffff",iconColor:"#ffffff"}},bi=/*#__PURE__*/function(){function t(t){"undefined"!=typeof window&&(this.options=Object.assign({position:"top-right",timeout:5e3,theme:"light",showCloseButton:!0,pauseOnHover:!0},t||{}),this.container=si(this.options.position,this.options.customContainerClass),this.handleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.handleKeyDown))}var e=t.prototype;return e.show=function(t,e){if("undefined"==typeof window)return null;var r=Object.assign({},this.options,e||{}),n=function(t,e){var r=document.createElement("div"),n=function(t){return Object.assign({},t.type&&yi[t.type]?yi[t.type]:vi[t.theme]||vi.light,t.theme)}(e),o=e.type||"default";r.className="toast "+(e.customClass||""),r.setAttribute("role","alert"),r.setAttribute("aria-live","polite"),r.setAttribute("aria-atomic","true"),"default"!==o&&r.setAttribute("aria-label",o+" notification: "+t),Object.assign(r.style,{backgroundColor:n.backgroundColor,color:n.textColor});var i=function(t,e,r){var n=document.createElement("div");if(n.className="toast-content",n.setAttribute("role","presentation"),e.type&&gi[e.type]){var o=function(t,e){var r=document.createElement("div");return r.className="toast-icon",r.setAttribute("role","img"),r.setAttribute("aria-label",t.type+" icon"),r.innerHTML=t.icon||gi[t.type],r.style.color=e.iconColor||e.textColor,r}(e,r);n.appendChild(o)}var i=document.createElement("span");return i.innerHTML=t,n.appendChild(i),n}(t,e,n);if(r.appendChild(i),!1!==e.showCloseButton){var a=function(t){var e=document.createElement("button");return e.className="toast-close",e.setAttribute("aria-label","Close notification"),e.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',e.style.color=t.textColor,e}(n);r.appendChild(a)}if(e.anchor){r.classList.add("toast-anchored");var u=function(t){var e=document.createElement("div");return e.className="toast-droplet",e.setAttribute("role","presentation"),e.setAttribute("aria-hidden","true"),e.style.backgroundColor=t.backgroundColor,e}(n);r.appendChild(u)}if(!1!==e.showProgress&&e.timeout){var c=function(t){var e=document.createElement("div");e.className="toast-progress",t.progressHeight&&e.style.setProperty("--progress-height",t.progressHeight),t.progressColor&&e.style.setProperty("--progress-color",t.progressColor),t.progressBackground&&e.style.setProperty("--progress-background",t.progressBackground);var r=document.createElement("div");r.className="toast-progress-bar",e.appendChild(r);var n=null,o=null,i=0,a=null,u=function(e){if(void 0===e&&(e=!1),e&&null!==n){var u=Date.now()-n;i=Math.max(0,Math.min(1,u/t.timeout)),o=u,n=null,a&&(cancelAnimationFrame(a),a=null),r.style.transition="none",r.style.transform="scaleX("+i+")"}else if(!e){if(null!==o){var c=t.timeout-o;n=Date.now()-o,r.style.transition="transform "+c+"ms linear",requestAnimationFrame(function(){r.style.transform="scaleX(1)"})}else n=Date.now(),r.style.transition="transform "+t.timeout+"ms linear",r.style.transform="scaleX(0)",requestAnimationFrame(function(){r.style.transform="scaleX(1)"});var f=function(){if(null!==n){var e=Date.now()-n;i=Math.max(0,Math.min(1,e/t.timeout)),e<t.timeout&&(a=requestAnimationFrame(f))}};f()}};return setTimeout(function(){u(!1)},0),{progressBar:e,updateProgress:u}}(e),f=c.updateProgress;r.appendChild(c.progressBar),r._updateProgress=f}return r.setAttribute("tabindex","0"),r}(t,r),o={width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight};if(r.anchor){var i=function(t,e,r,n){var o=null==e?void 0:e.getBoundingClientRect(),i=t.getBoundingClientRect(),a={top:0,left:0};if(e){if(a=function(t,e,r){var n={top:{top:e.top-r.height-12-6,left:e.left+(e.width-r.width)/2},bottom:{top:e.bottom+12+6,left:e.left+(e.width-r.width)/2},left:{top:e.top+(e.height-r.height)/2,left:e.left-r.width-12-6},right:{top:e.top+(e.height-r.height)/2,left:e.right+12+6}};return n[t]||n.top}(r,o,i),a=function(t,e,r){var n=20,o=Object.assign({},t);if(t.left<n?t.left=n:t.left+e.width>r.width-n&&(t.left=r.width-e.width-n),t.top<n?t.top=n:t.top+e.height>r.height-n&&(t.top=r.height-e.height-n),t.left!==o.left){var i=Math.min(Math.max(o.left-t.left+e.width/2,20),e.width-20);t.dropletOffset=i}return t}(a,i,n),t.setAttribute("data-point",function(t){return{top:"bottom",bottom:"top",left:"right",right:"left"}[t]||"bottom"}(r)),"bottom"===r){var u=Math.abs(o.top-(a.top+i.height));t.style.setProperty("--droplet-connector-height",u+"px")}}else a=function(t,e,r,n){var o={"top-left":{top:n,left:n},"top-right":{top:n,right:n},"bottom-left":{bottom:n,left:n},"bottom-right":{bottom:n,right:n}};return o[t]||o["top-right"]}(r,0,0,12);return a}(n,r.anchor,r.position,o);Object.assign(n.style,{position:"absolute",top:i.top+"px",left:i.left+"px",zIndex:"1001"}),i.dropletOffset&&n.style.setProperty("--droplet-left",i.dropletOffset+"px"),document.body.appendChild(n)}else this.container=si(r.position),this.container.appendChild(n);var a=new CustomEvent("toastOpened",{detail:{toast:n,message:t,options:r}});document.dispatchEvent(a),n.addEventListener("keydown",function(t){"Enter"!==t.key&&" "!==t.key||this.hide(n)}.bind(this));var u=n.querySelector(".toast-close");if(u&&u.addEventListener("click",this.hide.bind(this,n)),setTimeout(function(){n.classList.add("toast-show"),n._updateProgress&&n._updateProgress(!1)},10),r.timeout){var c,f,s=r.timeout,l=function(){c=Date.now(),f=setTimeout(this.hide.bind(this,n),s),n._updateProgress&&n._updateProgress(!1)}.bind(this);r.pauseOnHover&&(n.addEventListener("mouseenter",function(){clearTimeout(f),s-=Date.now()-c,n._updateProgress&&n._updateProgress(!0)}),n.addEventListener("mouseleave",l)),l()}return n},e.success=function(t,e){return this.show(t,Object.assign({},e,{type:li}))},e.error=function(t,e){return this.show(t,Object.assign({},e,{type:di}))},e.info=function(t,e){return this.show(t,Object.assign({},e,{type:pi}))},e.warning=function(t,e){return this.show(t,Object.assign({},e,{type:hi}))},e.hide=function(t){t.classList.remove("toast-show");var e=new CustomEvent("toastClosed",{detail:{toast:t}});t.dispatchEvent(e);var r=function(){t.parentNode&&t.parentNode.removeChild(t),t.removeEventListener("transitionend",r)};t.addEventListener("transitionend",r)},e.handleKeyDown=function(t){if("Escape"===t.key)for(var e=this.container.querySelectorAll(".toast"),r=0;r<e.length;r++)this.hide(e[r])},e.destroy=function(){document.removeEventListener("keydown",this.handleKeyDown),this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)},t}();export{bi as ToastNotifier};
