'use strict';

var n,l$1,u$1,i$1,o$1,r$1,f$1,c$1={},s$1=[],a$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,h$1=Array.isArray;function v$1(n,l){for(var u in l)n[u]=l[u];return n}function p$1(n){var l=n.parentNode;l&&l.removeChild(n);}function y(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return d$1(l,f,i,o,null)}function d$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function k$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function g$1(n,l){if(null==l)return n.__?g$1(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?g$1(n):null}function m$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return m$1(n)}}function w$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!x.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(x);}function x(){var n,l,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(l=i$1.length,t=void 0,o=void 0,r=void 0,c=(e=(u=n).__v).__e,(s=u.__P)&&(t=[],o=[],(r=v$1({},e)).__v=e.__v+1,L(s,e,r,u.__n,void 0!==s.ownerSVGElement,null!=e.__h?[c]:null,t,null==c?g$1(e):c,e.__h,o),M(t,e,o),e.__e!=c&&m$1(e)),i$1.length>l&&i$1.sort(f$1));x.__r=0;}function P(n,l,u,t,i,o,r,f,e,a,v){var p,y,_,b,g,m,w,x,P,S,H=0,I=t&&t.__k||s$1,T=I.length,j=T,z=l.length;for(u.__k=[],p=0;p<z;p++)null!=(b=u.__k[p]=null==(b=l[p])||"boolean"==typeof b||"function"==typeof b?null:"string"==typeof b||"number"==typeof b||"bigint"==typeof b?d$1(null,b,null,null,b):h$1(b)?d$1(k$1,{children:b},null,null,null):b.__b>0?d$1(b.type,b.props,b.key,b.ref?b.ref:null,b.__v):b)&&(b.__=u,b.__b=u.__b+1,-1===(x=A(b,I,w=p+H,j))?_=c$1:(_=I[x]||c$1,I[x]=void 0,j--),L(n,b,_,i,o,r,f,e,a,v),g=b.__e,(y=b.ref)&&_.ref!=y&&(_.ref&&O(_.ref,null,b),v.push(y,b.__c||g,b)),null!=g&&(null==m&&(m=g),S=!(P=_===c$1||null===_.__v)&&x===w,P?-1==x&&H--:x!==w&&(x===w+1?(H++,S=!0):x>w?j>z-w?(H+=x-w,S=!0):H--:H=x<w&&x==w-1?x-w:0),w=p+H,S=S||x==p&&!P,"function"!=typeof b.type||x===w&&_.__k!==b.__k?"function"==typeof b.type||S?void 0!==b.__d?(e=b.__d,b.__d=void 0):e=g.nextSibling:e=$(n,g,e):e=C(b,e,n),"function"==typeof u.type&&(u.__d=e)));for(u.__e=m,p=T;p--;)null!=I[p]&&("function"==typeof u.type&&null!=I[p].__e&&I[p].__e==u.__d&&(u.__d=I[p].__e.nextSibling),q(I[p],I[p]));}function C(n,l,u){for(var t,i=n.__k,o=0;i&&o<i.length;o++)(t=i[o])&&(t.__=n,l="function"==typeof t.type?C(t,l,u):$(u,t.__e,l));return l}function $(n,l,u){return null==u||u.parentNode!==n?n.insertBefore(l,null):l==u&&null!=l.parentNode||n.insertBefore(l,u),l.nextSibling}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type)return u;if(t>(null!=e?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&i==e.key&&o===e.type)return f;f++;}}return -1}function H(n,l,u,t,i){var o;for(o in u)"children"===o||"key"===o||o in l||T(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||T(n,o,l[o],u[o],t);}function I(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||a$1.test(l)?u:u+"px";}function T(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||I(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||I(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t||n.addEventListener(l,o?z$1:j$1,o):n.removeEventListener(l,o?z$1:j$1,o);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==l&&"height"!==l&&"href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&"rowSpan"!==l&&"colSpan"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function j$1(n){return this.l[n.type+!1](l$1.event?l$1.event(n):n)}function z$1(n){return this.l[n.type+!0](l$1.event?l$1.event(n):n)}function L(n,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g,m,w,x,C,S,$,A,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(c=t.__h,e=u.__e=t.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(w=u.props,x=(a=T.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?m=(p=u.__c=t.__c).__=p.__E:("prototype"in T&&T.prototype.render?u.__c=p=new T(w,C):(u.__c=p=new b$1(w,C),p.constructor=T,p.render=B$1),x&&x.sub(p),p.props=w,p.state||(p.state={}),p.context=C,p.__n=i,y=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=v$1({},p.__s)),v$1(p.__s,T.getDerivedStateFromProps(w,p.__s))),d=p.props,_=p.state,p.__v=u,y)null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(null==T.getDerivedStateFromProps&&w!==d&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(w,C),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(w,p.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(p.props=w,p.state=p.__s,p.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[],p.__h.length&&f.push(p);break n}null!=p.componentWillUpdate&&p.componentWillUpdate(w,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(d,_,g);});}if(p.context=C,p.props=w,p.__P=n,p.__e=!1,$=l$1.__r,A=0,"prototype"in T&&T.prototype.render){for(p.state=p.__s,p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),H=0;H<p._sb.length;H++)p.__h.push(p._sb[H]);p._sb=[];}else do{p.__d=!1,$&&$(u),a=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++A<25);p.state=p.__s,null!=p.getChildContext&&(i=v$1(v$1({},i),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(d,_)),P(n,h$1(I=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?I:[I],u,t,i,o,r,f,e,c,s),p.base=u.__e,u.__h=null,p.__h.length&&f.push(p),m&&(p.__E=p.__=null);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=N(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,t);}}function M(n,u,t){for(var i=0;i<t.length;i++)O(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function N(l,u,t,i,o,r,f,e,s){var a,v,y,d=t.props,_=u.props,k=u.type,b=0;if("svg"===k&&(o=!0),null!=r)for(;b<r.length;b++)if((a=r[b])&&"setAttribute"in a==!!k&&(k?a.localName===k:3===a.nodeType)){l=a,r[b]=null;break}if(null==l){if(null===k)return document.createTextNode(_);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,_.is&&_),r=null,e=!1;}if(null===k)d===_||e&&l.data===_||(l.data=_);else {if(r=r&&n.call(l.childNodes),v=(d=t.props||c$1).dangerouslySetInnerHTML,y=_.dangerouslySetInnerHTML,!e){if(null!=r)for(d={},b=0;b<l.attributes.length;b++)d[l.attributes[b].name]=l.attributes[b].value;(y||v)&&(y&&(v&&y.__html==v.__html||y.__html===l.innerHTML)||(l.innerHTML=y&&y.__html||""));}if(H(l,_,d,o,e),y)u.__k=[];else if(P(l,h$1(b=u.props.children)?b:[b],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&g$1(t,0),e,s),null!=r)for(b=r.length;b--;)null!=r[b]&&p$1(r[b]);e||("value"in _&&void 0!==(b=_.value)&&(b!==l.value||"progress"===k&&!b||"option"===k&&b!==d.value)&&T(l,"value",b,d.value,!1),"checked"in _&&void 0!==(b=_.checked)&&b!==l.checked&&T(l,"checked",b,d.checked,!1));}return l}function O(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function q(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||O(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null,n.__c=void 0;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||p$1(n.__e),n.__=n.__e=n.__d=void 0;}function B$1(n,l,u){return this.constructor(n,u)}function D(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],L(t,u=(!o&&i||t).__k=y(k$1,null,[u]),r||c$1,c$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),M(f,u,e);}n=s$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v$1({},this.state),"function"==typeof n&&(n=n(v$1({},u),this.props)),n&&v$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),w$1(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w$1(this));},b$1.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},x.__r=0;

var t,r,u,i,o=0,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function d(t,u){l$1.__h&&l$1.__h(r,t,o||u),o=0;var i=r.__H||(r.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({__V:c}),i.__[t]}function h(n){return o=1,s(B,n)}function s(n,u,i){var o=d(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):B(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function p(u,i){var o=d(t++,3);!l$1.__s&&z(o.__H,i)&&(o.__=u,o.i=i,r.__H.__h.push(o));}function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w),i.__h=[],t=0)),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w(n)});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g="function"==typeof requestAnimationFrame;function j(n){var t,r=function(){clearTimeout(u),g&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w(n){var t=r;n.__c=n.__(),r=t;}function z(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function B(n,t){return "function"==typeof t?t(n):t}

const ProgressBar = ({
  progress,
  total
}) => {
  const progressPercent = progress / total * 100;
  return y("div", {
    className: "mt-6 gap-1 py-4 px-6 w-full bg-white rounded-xl shadow-lg flex items-center"
  }, y("span", {
    className: "mx-2 text-slate-500"
  }, y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24"
  }, y("path", {
    d: "M298-120v-60h152v-148q-54-11-96-46.5T296-463q-74-8-125-60t-51-125v-44q0-25 17.5-42.5T180-752h104v-88h392v88h104q25 0 42.5 17.5T840-692v44q0 73-51 125t-125 60q-16 53-58 88.5T510-328v148h152v60H298Zm-14-406v-166H180v44q0 45 29.5 78.5T284-526Zm196 141q57 0 96.5-40t39.5-97v-258H344v258q0 57 39.5 97t96.5 40Zm196-141q45-10 74.5-43.5T780-648v-44H676v166Zm-196-57Z"
  }))), y("div", {
    className: "h-[1.5em] w-full relative overflow-hidden"
  }, y("div", {
    className: "text-white absolute inset-0 flex items-center justify-center"
  }, y("span", null, progress, "/", total)), y("div", {
    className: "h-full bg-gray-200 rounded-xl"
  }, progressPercent > 5 && y("div", {
    className: "h-full bg-blue-500 rounded-xl",
    style: {
      width: `${progress / total * 100}%`
    }
  }))));
};

const Hero = () => {
  return y(k$1, null, y("h1", {
    className: "font font-mono font-bold text-4xl"
  }, "NSSCTF", y("br", null), "2nd Prompt Challenge", y("span", {
    className: "blinking-underscore"
  }, "_")), y("div", {
    className: "py-6 text-slate-600"
  }, y("p", null, " \uD83C\uDF89 \xA0 Welcome to NSSCTF challenge!"), y("p", null, "\uD83D\uDD11 \xA0 Hypnotized GPT, and got the KEY."), y("p", null, " \uD83D\uDE80 \xA0 Start your show.")));
};

const Footer = () => {
  return y("div", {
    className: "py-4 text-slate-500 text-center font-mono"
  }, y("a", {
    href: "https://github.com/rivertwilght",
    className: "cursor-pointer"
  }, "Designed By @RiverTwilight"), " ", "\xB7", " ", y("a", {
    href: "https://ctfer.vip",
    className: "underline cursor-pointer"
  }, "NSSCTF"));
};

const Result = ({
  submitId,
  uuid
}) => {
  const [recentSubmitRes, setRecentSubmitRes] = h(null);
  p(() => {
    if (submitId.length > 2) {
      getSubmitResult(submitId);
    }
  }, [submitId]);
  const getSubmitResult = id => {
    fetch("https://prompt.wd-ljt.com/get_result/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        uuid: uuid,
        submit_id: id
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      setRecentSubmitRes({
        score: data.message.score,
        result: data.message.result
      });
    });
  };
  if (!!!recentSubmitRes) {
    return null;
  }
  return y("div", {
    className: "mt-4 gap-1 py-4 px-6 w-full bg-white rounded-xl shadow-lg flex items-center"
  }, recentSubmitRes.score);
};

const Snackbar = ({
  message
}) => {
  p(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById("snackbar-root");
      if (element) {
        D(null, element);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return y("div", {
    className: "fixed top-4 right-4 bg-red-500 text-white p-2 rounded shadow-lg z-50"
  }, message);
};
const showSnackbar = message => {
  const snackbarRoot = document.createElement("div");
  snackbarRoot.id = "snackbar-root";
  document.body.appendChild(snackbarRoot);
  D(y(Snackbar, {
    message: message
  }), snackbarRoot);
};

const SCORE_REFRESH_FREQUENCY = 30000;
const App = () => {
  const [activeTab, setActiveTab] = h("Submit");
  const [selectedProblem, setSelectedProblem] = h("");
  const [problems, setProblems] = h([]);
  const [prompt, setPrompt] = h("");
  const [isLoading, setIsLoading] = h(false);
  const [score, setScore] = h(0);
  const [nssKey, setNssKey] = h("");
  const [nssSecret, setNssSecret] = h("");
  // const [nssKey, setNssKey] = useState("7e4dd3f47adecd02f75c");
  // const [nssSecret, setNssSecret] = useState(
  // 	"c396a00f30620c092a9c626d0d9287995aaaba02"
  // );
  const [history, setHistory] = h([]);
  const [uuid, setUuid] = h(null);
  const [recentSubmitId, setRecentSubmitId] = h("");
  p(() => {
    setUuid(localStorage.getItem("uuid") || "");
  }, []);
  p(() => {
    if (!!uuid) {
      getProblems(uuid);
      setInterval(() => {
        let currentId = uuid;
        getScore(currentId);
      }, SCORE_REFRESH_FREQUENCY);
    }
  }, [uuid]);
  const handlePromptSubmit = id => {
    if (!!!selectedProblem) return;
    setIsLoading(true);
    fetch("https://prompt.wd-ljt.com/submit/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        challenge_name: selectedProblem,
        prompt: prompt,
        uuid: id
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      setRecentSubmitId(data.message.submit_id);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const handleGenerateUUID = () => {
    setIsLoading(true);
    fetch("https://prompt.wd-ljt.com/get_user_id/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        nss_key: nssKey,
        nss_secret: nssSecret
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      if (data.code === 200 || data.code === 204) {
        setUuid(data.message.uuid);
        localStorage.setItem("uuid", data.message.uuid);
        setActiveTab("Submit");
      } else {
        showSnackbar("An error occured.");
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const handleGetHistory = () => {
    fetch("https://prompt.wd-ljt.com/get_history/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        uuid
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      setHistory(data.message.history);
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getScore = id => {
    fetch("https://prompt.wd-ljt.com/settle/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        uuid: id
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      if (data.code === 200) {
        setScore(data.message.score);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const getProblems = id => {
    fetch("https://prompt.wd-ljt.com/challenge/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      referrer: "https://prompt.wd-ljt.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        uuid: id
      }),
      mode: "cors",
      credentials: "include"
    }).then(response => response.json()).then(data => {
      if (data.code == 200) {
        let problemList = [];
        data.message.solved.forEach(solved => {
          problemList.push({
            solved: true,
            type: solved.challenge_type,
            name: solved.challenge_name,
            prompt: solved.challenge_prompt,
            best_score: solved.best_score
          });
        });
        data.message.unsolved.forEach(unsolved => {
          if (!problemList.some(pro => pro.name === unsolved.challenge_name)) {
            problemList.push({
              solved: false,
              type: unsolved.challenge_type,
              name: unsolved.challenge_name,
              prompt: unsolved.challenge_prompt,
              best_score: unsolved.best_score
            });
          }
        });
        setProblems(problemList);
        setSelectedProblem(data.message.unsolved.challenge_name);
      }
    }).catch(e => {
      showSnackbar("An error occured. Try again later or refesh the page.");
    }).finally(() => {
      setIsLoading(false);
    });
  };
  const handleKeyDown = e => {
    if (e.key === "Enter" && e.shiftKey) {
      handlePromptSubmit();
    }
  };
  p(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return y("div", {
    className: "flex flex-col"
  }, y("main", {
    className: "flex-grow w-[764px] mt-[20vh]"
  }, y(Hero, null), y(ProgressBar, {
    progress: score,
    total: 43200
  }), y("div", {
    className: "mt-4 w-full bg-white rounded-xl shadow-lg"
  }, y("div", {
    className: "w-full flex mb-4"
  }, [{
    value: "Submit",
    label: "Submit"
  }, {
    value: "ID",
    label: "Register"
  }, {
    value: "History",
    label: "History"
  }].map(tab => y("div", {
    className: "relative w-full"
  }, y("button", {
    key: tab,
    onClick: () => setActiveTab(tab.value),
    className: `w-full text-slate-500 px-4 py-3 ${activeTab === tab ? "text-slate-950" : ""}`
  }, tab.label), activeTab === tab.value && y("div", {
    className: "flex justify-center absolute bottom-0 right-0 left-0"
  }, y("span", {
    className: "h-[4px] w-6 bg-blue-500"
  }))))), y("section", {
    className: "py-4"
  }, activeTab === "Submit" && y("div", {
    className: `transition-all flex max-h-[600px]`
  }, problems.length > 0 && y("div", {
    className: "w-[200px] overflow-auto"
  }, y("ul", null, problems.map(problem => {
    return y("li", {
      key: problem.name,
      onClick: () => {
        setSelectedProblem(problem.name);
      },
      className: "py-2 px-3 cursor-pointer flex justify-between hover:bg-slate-100"
    }, y("span", {
      className: `${selectedProblem === problem.name && "font-semibold text-blue-600"}`
    }, problem.name), problem.solved && y("div", {
      className: ""
    }, y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24",
      className: "fill-green-400",
      viewBox: "0 -960 960 960",
      width: "24"
    }, y("path", {
      d: "m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
    }))));
  }))), y("div", {
    className: "w-full px-4 py-2 flex flex-col"
  }, y("div", {
    className: " bg-slate-200 flex px-2 fill-slate-400 justify-between  p-2 rounded"
  }, y("div", {
    className: "flex gap-2"
  }, y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24"
  }, y("path", {
    d: "M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.411-18h59.178Q534-880 552-862t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680v-480H570v30q0 28-18 44t-42.411 16h-59.178Q426-530 408-546t-18-44v-30H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408-418q0-22.5-15.75-38.25T354-472q-22.5 0-38.25 15.75T300-418q0 22.5 15.75 38.25T354-364Zm214-63h170v-50H568v50ZM450-590h60v-230h-60v230Zm30 210Z"
  })), y("div", {
    className: "text-slate-400"
  }, uuid)), y("div", {
    onClick: () => setActiveTab("ID"),
    className: "text-blue-500 cursor-pointer"
  }, "Change")), y("div", {
    className: "px-1 py-2 text-slate-600"
  }, selectedProblem ? problems.find(p => p.name === selectedProblem).prompt : " "), y("textarea", {
    type: "text",
    value: prompt,
    onChange: e => setPrompt(e.target.value),
    className: "border p-2 w-full min-h-[4em] flex-grow",
    placeholder: "Prompt"
  }), y("div", {
    className: "flex flex-row-reverse justify-between mt-4"
  }, y("div", {
    className: "gap-2 flex flex-row-reverse"
  }, y("button", {
    onClick: () => handlePromptSubmit(uuid),
    className: `px-4 uppercase font-semibold rounded py-2 ${isLoading || !!!selectedProblem ? "bg-gray-400" : "bg-blue-600"} text-white`
  }, "Submit"), y("span", {
    className: "font-mono text-slate-400 self-center"
  }, "Shift + Enter")), y("div", {
    className: "text-blue-600"
  }, selectedProblem)))), activeTab === "ID" && y("div", {
    className: `transition-all px-4 py-2`
  }, y("input", {
    type: "text",
    value: nssKey,
    onChange: e => setNssKey(e.target.value),
    className: "border p-2 w-full mb-2",
    placeholder: "NSS Key"
  }), y("input", {
    type: "text",
    value: nssSecret,
    onChange: e => setNssSecret(e.target.value),
    className: "border p-2 w-full",
    placeholder: "NSS Secret"
  }), y("div", {
    className: "flex flex-row-reverse justify-between gap-2 mt-4"
  }, y("button", {
    disabled: isLoading,
    onClick: handleGenerateUUID,
    className: `px-4 uppercase font-semibold rounded py-2 ${isLoading ? "bg-gray-400" : "bg-blue-600"} text-white`
  }, "Generate UUID"), y("div", {
    className: "tooltip-wrapper text-slate-400 self-center cursor-pointer hover:text-slate-700 transition-all"
  }, y("span", {
    className: "tooltip-text"
  }, "You can get the apply for key and secret at https://www.nssctf.cn/user/range/api"), y("span", null, y("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "fill-slate-500"
  }, y("path", {
    d: "M484-247q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-35-146h59q0-26 6.5-47.5T555-490q31-26 44-51t13-55q0-53-34.5-85T486-713q-49 0-86.5 24.5T345-621l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508-512q-30 26-44.5 51.5T449-393Zm31 313q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
  })))))), activeTab === "History" && y("div", {
    className: "p-2"
  }, history.length < 1 ? y("div", {
    className: "h-[40px] leading-[40px] text-slate-500 text-center "
  }, y("div", null, "No history yet")) : y("ul", null, y("li", {
    className: "px-2 flex py-2"
  }, y("span", {
    className: "w-full"
  }, "Date"), y("span", {
    className: "w-full"
  }, "Type"), y("span", {
    className: "w-full"
  }, "Score")), history.map((item, index) => y("li", {
    key: index,
    className: "flex py-3 px-2 border-t-2 border-slate-200 hover:bg-slate-100"
  }, y("span", {
    className: "w-full"
  }, item.submit_date), y("span", {
    className: "w-full text-green-700 text-sm"
  }, item.challenge_name), y("span", {
    className: "w-full"
  }, "14")))), y("div", {
    className: "text-center"
  }, y("button", {
    onClick: handleGetHistory,
    className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded"
  }, "Refresh History")))))), y(Result, {
    uuid: uuid,
    submitId: recentSubmitId
  }), y(Footer, null));
};

// Render the App into the DOM
D(y(App, null), document.body);
