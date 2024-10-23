"use strict";(self.webpackChunkreact_boiler_plate=self.webpackChunkreact_boiler_plate||[]).push([[526],{2526:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(5043),a=function(e){return"object"===typeof e&&null!==e},l=function(e){var t=e.value,n=void 0===t?"":t,l=e.numInputs,o=void 0===l?4:l,s=e.onChange,c=e.onPaste,i=e.renderInput,u=e.shouldAutoFocus,f=void 0!==u&&u,d=e.inputType,p=void 0===d?"text":d,m=e.renderSeparator,b=e.placeholder,v=e.containerStyle,h=e.inputStyle,g=e.skipDefaultStyles,y=void 0!==g&&g,j=r.useState(0),x=j[0],O=j[1],N=r.useRef([]),w=function(){return n?n.toString().split(""):[]},k="number"===p||"tel"===p;r.useEffect((function(){N.current=N.current.slice(0,o)}),[o]),r.useEffect((function(){var e;f&&(null===(e=N.current[0])||void 0===e||e.focus())}),[f]);var A=function(){if("string"===typeof b){if(b.length===o)return b;b.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},S=function(e){return(k?!isNaN(Number(e)):"string"===typeof e)&&1===e.trim().length},P=function(e){var t=e.target.value;S(t)&&(I(t),E(x+1))},C=function(e){var t=e.nativeEvent,n=e.target.value;if(!S(n)){if(n.length===o)n.split("").some((function(e){return!S(e)}))||(_(n.split("")),E(o-1));null===t.data&&"deleteContentBackward"===t.inputType&&(e.preventDefault(),I(""),E(x-1)),e.target.value=""}},T=function(){O(x-1)},D=function(e){var t=w();[e.code,e.key].includes("Backspace")?(e.preventDefault(),I(""),E(x-1)):"Delete"===e.code?(e.preventDefault(),I("")):"ArrowLeft"===e.code?(e.preventDefault(),E(x-1)):"ArrowRight"===e.code||e.key===t[x]?(e.preventDefault(),E(x+1)):"Spacebar"!==e.code&&"Space"!==e.code&&"ArrowUp"!==e.code&&"ArrowDown"!==e.code||e.preventDefault()},E=function(e){var t,n,r=Math.max(Math.min(o-1,e),0);N.current[r]&&(null===(t=N.current[r])||void 0===t||t.focus(),null===(n=N.current[r])||void 0===n||n.select(),O(r))},I=function(e){var t=w();t[x]=e[0],_(t)},_=function(e){var t=e.join("");s(t)},M=function(e){var t;e.preventDefault();var n=w(),r=x,a=e.clipboardData.getData("text/plain").slice(0,o-x).split("");if(!k||!a.some((function(e){return isNaN(Number(e))}))){for(var l=0;l<o;++l)l>=x&&a.length>0&&(n[l]=null!==(t=a.shift())&&void 0!==t?t:"",r++);E(r),_(n)}};return r.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},a(v)&&v),className:"string"===typeof v?v:void 0,onPaste:c},Array.from({length:o},(function(e,t){return t})).map((function(e){var t,n,l;return r.createElement(r.Fragment,{key:e},i({value:null!==(t=w()[e])&&void 0!==t?t:"",placeholder:null!==(l=null===(n=A())||void 0===n?void 0:n[e])&&void 0!==l?l:void 0,ref:function(t){return N.current[e]=t},onChange:P,onFocus:function(t){return function(e){return function(t){O(t),e.target.select()}}(t)(e)},onBlur:T,onKeyDown:D,onPaste:M,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(y?{}:{width:"1em",textAlign:"center"},a(h)?h:{}),className:"string"===typeof h?h:void 0,type:p,inputMode:k?"numeric":"text",onInput:C},e),e<o-1&&("function"===typeof m?m(e):m))})))};const o="style_otpInput__TqdeT",s="style_otpContainer__QIfRC";var c=n(2345),i=n(3216),u=n(6476),f=n(3003),d=n(2123),p=n(9916),m=n(6592),b=n(579);const v=()=>{const e=(0,i.zy)().state,t=(0,i.Zp)(),n=(0,f.wA)(),{loading:a}=(0,f.d4)((e=>e.user)),[v,h]=(0,r.useState)(""),[g,y]=(0,r.useState)((()=>{const e=localStorage.getItem("otp-timer");return e?parseInt(e):120})),[j,x]=(0,r.useState)(!0);(0,r.useEffect)((()=>{if(g>0&&j){localStorage.setItem("otp-timer",g);const e=setInterval((()=>{y((e=>e-1))}),1e3);return()=>clearInterval(e)}0===g&&(localStorage.removeItem("otp-timer"),x(!1))}),[g,j]);return(0,b.jsxs)("div",{className:"",children:["pending"===a&&(0,b.jsx)(p.A,{}),(0,b.jsxs)("center",{children:[(0,b.jsx)(m.A,{headingText:"Enter OTP Code Here"}),(0,b.jsx)("p",{className:"mb-0 fs-4 text-green fw-bold mb-5"}),(0,b.jsx)(c.A,{className:"p-0",children:(0,b.jsx)(l,{name:"token",value:v,numInputs:6,onChange:h,inputStyle:o,containerStyle:s,renderInput:e=>(0,b.jsx)("input",{...e}),renderSeparator:(0,b.jsx)("span",{children:"\xa0\xa0\xa0"})})}),(0,b.jsx)(u.A,{className:"w-50 fw-bold py-2 my-5",disabled:v.length<6,text:"DONE",handleOnClick:()=>{const r={apiEndpoint:"/shelter/verifyOTP",requestData:JSON.stringify({token:v,email:e})};n((0,d.vJ)(r)).then((n=>{"verifyOTP/fulfilled"===n.type&&t("/newpassword",{state:e})}))}})]})]})},h=(0,r.memo)(v);var g=n(2327),y=n(9277),j=n(2415),x=n(1876);const O=()=>{const[e,t]=(0,r.useState)();return(0,b.jsxs)(g.A,{className:"m-0 p-0 bg-green",children:[(0,b.jsx)(c.A,{md:4,className:"d-none d-md-flex p-0 justify-content-center align-items-center",children:(0,b.jsx)(y.A,{imageSrc:j.A.CUSTOM_IMAGE,title:"OTP Verification ",highlightText:"",description:"Enter the OTP sent to your email to verify your identity",linkText:"",linkHref:""})}),(0,b.jsx)(c.A,{md:8,className:"min-vh-100 p-0",children:(0,b.jsx)(x.A,{children:(0,b.jsx)(h,{name:"otpInput",value:e,handleOnChange:e=>t(e)})})})]})},N=(0,r.memo)(O),w=()=>(0,b.jsx)(r.Fragment,{children:(0,b.jsx)(N,{})})},1876:(e,t,n)=>{n.d(t,{A:()=>c});n(5043);var r=n(6592),a=n(9904),l=n(2327),o=n(2345),s=n(579);const c=e=>{let{children:t,HeadingText:n,className:c}=e;return(0,s.jsx)(a.A,{fluid:!0,className:" AuthWrapper h-100 ",children:(0,s.jsx)(l.A,{className:"justify-content-center align-items-center h-100 ",children:(0,s.jsxs)(o.A,{sm:"8",className:"",children:[(0,s.jsx)(r.A,{headingText:n,className:c}),(0,s.jsx)("span",{className:"",children:t})]})})})}},6476:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(5043),a=n(6259),l=n(579);const o=e=>{const{icon:t,text:n,className:r,handleOnClick:o,disabled:s=!1,type:c="button"}=e;return(0,l.jsxs)(a.A,{className:`fillBtn fw-bold shadow-sm  ${r}`,onClick:o,disabled:s,type:c,children:[t&&t,n]})},s=(0,r.memo)(o)},6592:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043),a=n(579);const l=e=>{let{headingText:t,className:n,style:l}=e;return(0,a.jsx)(r.Fragment,{children:(0,a.jsx)("h2",{className:`fw-bold text-darkgreen  ${n} heading`,style:{style:l,textTransform:"camelCase"},children:t})})},o=(0,r.memo)(l)},9277:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(5043),a=n(5475),l=n(2415),o=n(579);const s=e=>{let{imageSrc:t=l.A.SIDE_PANEL_IMG,title:n="Let's create your",highlightText:r="account",description:s="Already have an account?",linkText:c="Login",linkHref:i="/login"}=e;return(0,o.jsx)("div",{className:"sidePanel d-flex flex-column align-items-center justify-content-center",children:(0,o.jsxs)("center",{children:[(0,o.jsx)("div",{className:"p-5",children:(0,o.jsx)("img",{src:t,alt:"Side-Panel",className:"img-fluid"})}),(0,o.jsxs)("h1",{className:"fw-bold fs-1 text-white",children:[n," ",(0,o.jsx)("br",{}),(0,o.jsx)("span",{className:"  text-yellow",children:r})]}),(0,o.jsxs)("p",{className:"text-white fs-6 px-5",children:[s," ",(0,o.jsx)(a.N_,{className:"  text-yellow text-decoration-none fw-bold",to:i,children:c})]})]})})},c=(0,r.memo)(s)},6259:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(5043),a=n(5173),l=n.n(a),o=n(8139),s=n.n(o),c=n(6794),i=["className","cssModule","variant","innerRef"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={active:l().bool,"aria-label":l().string,onClick:l().func,variant:l().oneOf(["white"]),className:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().string,l().func])};function b(e){var t=e.className,n=(e.cssModule,e.variant),a=e.innerRef,l=p(e,i),o=(0,c.qO)(s()(t,"btn-close",n&&"btn-close-".concat(n)));return r.createElement("button",u({ref:a,type:"button",className:o},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"aria-label":"close"},l)))}b.propTypes=m;const v=b;var h=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={active:l().bool,"aria-label":l().string,block:l().bool,children:l().node,className:l().string,cssModule:l().object,close:l().bool,color:l().string,disabled:l().bool,innerRef:l().oneOfType([l().object,l().func,l().string]),onClick:l().func,outline:l().bool,size:l().string,tag:c.Wx};function x(e){var t=(0,r.useCallback)((function(t){if(!e.disabled)return e.onClick?e.onClick(t):void 0;t.preventDefault()}),[e.onClick,e.disabled]),n=e.active,a=e["aria-label"],l=e.block,o=e.className,i=e.close,u=e.cssModule,f=e.color,d=void 0===f?"secondary":f,p=e.outline,m=e.size,b=e.tag,j=void 0===b?"button":b,x=e.innerRef,O=y(e,h);if(i)return r.createElement(v,O);var N="btn".concat(p?"-outline":"","-").concat(d),w=(0,c.qO)(s()(o,"btn",N,!!m&&"btn-".concat(m),!!l&&"d-block w-100",{active:n,disabled:e.disabled}),u);return O.href&&"button"===j&&(j="a"),r.createElement(j,g({type:"button"===j&&O.onClick?"button":void 0},O,{className:w,ref:x,onClick:t,"aria-label":a}))}x.propTypes=j;const O=x}}]);
//# sourceMappingURL=526.3df02a62.chunk.js.map