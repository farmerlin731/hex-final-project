(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d4bd5a"],{"0a6e":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,r,c){var s=Object(a["resolveComponent"])("Loading"),i=Object(a["resolveComponent"])("ToastMessage"),l=Object(a["resolveComponent"])("Navbar"),u=Object(a["resolveComponent"])("RouterView");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(s,{active:r.loadingStatus},null,8,["active"]),Object(a["createVNode"])(i),Object(a["createVNode"])(l,{onLogout:c.logout},null,8,["onLogout"]),Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])((function(e){var t=e.Component;return[Object(a["createVNode"])(a["Transition"],{name:"fade-transform",mode:"out-in","enter-from-class":"fade-transform-enter"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1})],64)}n("ac1f"),n("5319");var r={class:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},c={class:"container-fluid"},s=Object(a["createTextVNode"])(" 後台管理頁面 "),i={class:"navbar-toggler ms-auto",ref:"toggleBtn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l=Object(a["createElementVNode"])("span",{class:"navbar-toggler-icon"},null,-1),u=[l],d={class:"collapse navbar-collapse",id:"navbarNavDropdown"},f={class:"navbar-nav"},b={class:"nav-item"},v=Object(a["createTextVNode"])("產品列表"),p={class:"nav-item"},g=Object(a["createTextVNode"])("訂單列表"),h=Object(a["createElementVNode"])("b",null,[Object(a["createElementVNode"])("i",{class:"bi bi-book-half",style:{color:"green"}}),Object(a["createTextVNode"])(" Logout "),Object(a["createElementVNode"])("i",{class:"bi bi-book-half",style:{color:"green"}})],-1),m=[h];function x(e,t,n,o,l,h){var x=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",r,[Object(a["createElementVNode"])("div",c,[Object(a["createVNode"])(x,{class:"navbar-brand",to:"/admin"},{default:Object(a["withCtx"])((function(){return[s]})),_:1}),Object(a["createElementVNode"])("button",i,u,512),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("ul",f,[Object(a["createElementVNode"])("li",b,[Object(a["createVNode"])(x,{class:"nav-link cancel",to:"/admin/products"},{default:Object(a["withCtx"])((function(){return[v]})),_:1})]),Object(a["createElementVNode"])("li",p,[Object(a["createVNode"])(x,{class:"nav-link cancel",to:"/admin/orders"},{default:Object(a["withCtx"])((function(){return[g]})),_:1})])]),Object(a["createElementVNode"])("button",{type:"button",class:"btn btn-warning ms-auto",onClick:t[0]||(t[0]=function(t){return e.$emit("logout")})},m)])])])}n("d3b7"),n("159b");var O={mounted:function(){var e=this,t=document.querySelectorAll(".cancel");t.forEach((function(t){t.addEventListener("click",(function(){window.innerWidth<1e3&&e.$refs.toggleBtn.click()}))}))}},j=(n("4388"),n("6b0d")),k=n.n(j);const E=k()(O,[["render",x]]);var N=E,y=n("459d"),w=n("4dcd"),V={data:function(){return{loadingStatus:!1}},components:{Navbar:N,ToastMessage:y["a"]},methods:{checkToken:function(){var e=this;this.loadingStatus=!0;var t=document.cookie.replace(/(?:(?:^|.*;\s*)hexFarmerToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common["Authorization"]=t;var n="".concat("https://vue3-course-api.hexschool.io/v2","/api/user/check");this.$http.post(n).then((function(t){e.loadingStatus=!1,e.$pushToastMessage(t,"登入")})).catch((function(t){e.loadingStatus=!1,alert("帳號驗證失敗，請重新登入。"),e.$router.push("/login"),console.dir(t)}))},logout:function(){var e=this;this.loadingStatus=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/logout");this.$http.post(t).then((function(t){t.data.success&&(e.loadingStatus=!1,alert("成功登出！"),e.$router.push("/"))})).catch((function(t){e.loadingStatus=!1,e.$pushToastMessage(t.response,"登出")}))}},mounted:function(){var e=this;this.checkToken(),w["a"].on("loading",(function(){e.loadingStatus=!0})),w["a"].on("un-loading",(function(){e.loadingStatus=!1}))}};n("82d0");const $=k()(V,[["render",o],["__scopeId","data-v-69b7dfd6"]]);t["default"]=$},"0cb2":function(e,t,n){var a=n("e330"),o=n("7b0b"),r=Math.floor,c=a("".charAt),s=a("".replace),i=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,d,f){var b=n+e.length,v=a.length,p=u;return void 0!==d&&(d=o(d),p=l),s(f,p,(function(o,s){var l;switch(c(s,0)){case"$":return"$";case"&":return e;case"`":return i(t,0,n);case"'":return i(t,b);case"<":l=d[i(s,1,-1)];break;default:var u=+s;if(0===u)return o;if(u>v){var f=r(u/10);return 0===f?o:f<=v?void 0===a[f-1]?c(s,1):a[f-1]+c(s,1):o}l=a[u-1]}return void 0===l?"":l}))}},"107c":function(e,t,n){var a=n("d039"),o=n("da84"),r=o.RegExp;e.exports=a((function(){var e=r("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var a=n("da84"),o=n("c65b"),r=n("825a"),c=n("1626"),s=n("c6b6"),i=n("9263"),l=a.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var a=o(n,e,t);return null!==a&&r(a),a}if("RegExp"===s(e))return o(i,e,t);throw l("RegExp#exec called on incompatible receiver")}},"1a83":function(e,t,n){},"1dde":function(e,t,n){var a=n("d039"),o=n("b622"),r=n("2d00"),c=o("species");e.exports=function(e){return r>=51||!a((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4388:function(e,t,n){"use strict";n("6fcd")},"459d":function(e,t,n){"use strict";var a=n("7a23"),o={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},r={class:"toast-header"},c={class:"me-auto"},s=["onClick"],i={key:0,class:"toast-body"};function l(e,t,n,l,u,d){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(u.messages,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:t,class:Object(a["normalizeClass"])(["toast show","toast".concat(t)]),role:"alert"},[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("span",{class:Object(a["normalizeClass"])(["bg-".concat(e.style),"p-2 rounded me-2 d-inline-block"])},null,2),Object(a["createElementVNode"])("strong",c,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("button",{type:"button",class:"btn-close",onClick:function(e){return d.clearToast(t)},"aria-label":"Close"},null,8,s)]),e.content?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,Object(a["toDisplayString"])(e.content),1)):Object(a["createCommentVNode"])("",!0)],2)})),128))])}n("a434");var u=n("4dcd"),d={data:function(){return{messages:[]}},methods:{toastShow:function(){var e=this;setTimeout((function(){e.messages.shift()}),3e3)},clearToast:function(e){this.messages.splice(e,1)}},mounted:function(){var e=this;u["a"].on("push-message",(function(t){var n=t.style,a=void 0===n?"success":n,o=t.title,r=t.content;e.messages.push({style:a,title:o,content:r}),e.toastShow()}))}},f=n("6b0d"),b=n.n(f);const v=b()(d,[["render",l]]);t["a"]=v},5319:function(e,t,n){"use strict";var a=n("2ba4"),o=n("c65b"),r=n("e330"),c=n("d784"),s=n("d039"),i=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),f=n("577e"),b=n("1d80"),v=n("8aa5"),p=n("dc4a"),g=n("0cb2"),h=n("14c3"),m=n("b622"),x=m("replace"),O=Math.max,j=Math.min,k=r([].concat),E=r([].push),N=r("".indexOf),y=r("".slice),w=function(e){return void 0===e?e:String(e)},V=function(){return"$0"==="a".replace(/./,"$0")}(),$=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),C=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));c("replace",(function(e,t,n){var r=$?"$":"$0";return[function(e,n){var a=b(this),r=void 0==e?void 0:p(e,x);return r?o(r,e,a,n):o(t,f(a),e,n)},function(e,o){var c=i(this),s=f(e);if("string"==typeof o&&-1===N(o,r)&&-1===N(o,"$<")){var b=n(t,c,s,o);if(b.done)return b.value}var p=l(o);p||(o=f(o));var m=c.global;if(m){var x=c.unicode;c.lastIndex=0}var V=[];while(1){var $=h(c,s);if(null===$)break;if(E(V,$),!m)break;var C=f($[0]);""===C&&(c.lastIndex=v(s,d(c.lastIndex),x))}for(var I="",S=0,T=0;T<V.length;T++){$=V[T];for(var B=f($[0]),R=O(j(u($.index),s.length),0),M=[],_=1;_<$.length;_++)E(M,w($[_]));var A=$.groups;if(p){var D=k([B],M,R,s);void 0!==A&&E(D,A);var L=f(a(o,void 0,D))}else L=g(B,s,R,M,A,o);R>=S&&(I+=y(s,S,R)+L,S=R+B.length)}return I+y(s,S)}]}),!C||!V||$)},"6fcd":function(e,t,n){},"82d0":function(e,t,n){"use strict";n("1a83")},8418:function(e,t,n){"use strict";var a=n("a04b"),o=n("9bf2"),r=n("5c6c");e.exports=function(e,t,n){var c=a(t);c in e?o.f(e,c,r(0,n)):e[c]=n}},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("c65b"),o=n("e330"),r=n("577e"),c=n("ad6d"),s=n("9f7f"),i=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),f=n("107c"),b=i("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,p=v,g=o("".charAt),h=o("".indexOf),m=o("".replace),x=o("".slice),O=function(){var e=/a/,t=/b*/g;return a(v,e,"a"),a(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=s.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],E=O||k||j||d||f;E&&(p=function(e){var t,n,o,s,i,d,f,E=this,N=u(E),y=r(e),w=N.raw;if(w)return w.lastIndex=E.lastIndex,t=a(p,w,y),E.lastIndex=w.lastIndex,t;var V=N.groups,$=j&&E.sticky,C=a(c,E),I=E.source,S=0,T=y;if($&&(C=m(C,"y",""),-1===h(C,"g")&&(C+="g"),T=x(y,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==g(y,E.lastIndex-1))&&(I="(?: "+I+")",T=" "+T,S++),n=new RegExp("^(?:"+I+")",C)),k&&(n=new RegExp("^"+I+"$(?!\\s)",C)),O&&(o=E.lastIndex),s=a(v,$?n:E,T),$?s?(s.input=x(s.input,S),s[0]=x(s[0],S),s.index=E.lastIndex,E.lastIndex+=s[0].length):E.lastIndex=0:O&&s&&(E.lastIndex=E.global?s.index+s[0].length:o),k&&s&&s.length>1&&a(b,s[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(s[i]=void 0)})),s&&V)for(s.groups=d=l(null),i=0;i<V.length;i++)f=V[i],d[f[0]]=s[f[1]];return s}),e.exports=p},"9f7f":function(e,t,n){var a=n("d039"),o=n("da84"),r=o.RegExp,c=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),s=c||a((function(){return!r("a","y").sticky})),i=c||a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:s,UNSUPPORTED_Y:c}},a434:function(e,t,n){"use strict";var a=n("23e7"),o=n("da84"),r=n("23cb"),c=n("5926"),s=n("07fa"),i=n("7b0b"),l=n("65f0"),u=n("8418"),d=n("1dde"),f=d("splice"),b=o.TypeError,v=Math.max,p=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,a,o,d,f,m,x=i(this),O=s(x),j=r(e,O),k=arguments.length;if(0===k?n=a=0:1===k?(n=0,a=O-j):(n=k-2,a=p(v(c(t),0),O-j)),O+n-a>g)throw b(h);for(o=l(x,a),d=0;d<a;d++)f=j+d,f in x&&u(o,d,x[f]);if(o.length=a,n<a){for(d=j;d<O-a;d++)f=d+a,m=d+n,f in x?x[m]=x[f]:delete x[m];for(d=O;d>O-a+n;d--)delete x[d-1]}else if(n>a)for(d=O-a;d>j;d--)f=d+a-1,m=d+n-1,f in x?x[m]=x[f]:delete x[m];for(d=0;d<n;d++)x[d+j]=arguments[d+2];return x.length=O-a+n,o}})},ac1f:function(e,t,n){"use strict";var a=n("23e7"),o=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("e330"),o=n("6eeb"),r=n("9263"),c=n("d039"),s=n("b622"),i=n("9112"),l=s("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var f=s(e),b=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=b&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!b||!v||n){var p=a(/./[f]),g=t(f,""[e],(function(e,t,n,o,c){var s=a(e),i=t.exec;return i===r||i===u.exec?b&&!c?{done:!0,value:p(t,n,o)}:{done:!0,value:s(n,t,o)}:{done:!1}}));o(String.prototype,e,g[0]),o(u,f,g[1])}d&&i(u[f],"sham",!0)}},fce3:function(e,t,n){var a=n("d039"),o=n("da84"),r=o.RegExp;e.exports=a((function(){var e=r(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-10d4bd5a.cc3d99ca.js.map