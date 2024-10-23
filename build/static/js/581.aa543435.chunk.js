"use strict";(self.webpackChunkreact_boiler_plate=self.webpackChunkreact_boiler_plate||[]).push([[581],{9581:(e,s,a)=>{a.r(s),a.d(s,{default:()=>y});var r=a(5043),t=a(2327),i=a(2345),n=a(9277),d=a(3516),c=a(7973),o=a(423),l=a(6476),m=a(6463),u=a(3691),h=a(3216),p=a(3003),x=a(2123),w=a(9916),N=a(579);const b=()=>{const e=(0,h.zy)().state,s=(0,h.Zp)(),a=(0,p.wA)(),{loading:r,email:t}=(0,p.d4)((e=>e.user));return(0,N.jsxs)(N.Fragment,{children:["pending"===r&&(0,N.jsx)(w.A,{}),(0,N.jsx)(d.l1,{initialValues:{...u.Ff},validationSchema:m.DY,onSubmit:async(r,i)=>{let{setSubmitting:n,resetForm:d}=i;try{n(!0),await(async r=>{const i={apiEndpoint:"shelter/setPassword",requestData:JSON.stringify({...r,email:null!==e&&void 0!==e?e:t})};a((0,x.wO)(i)).then((e=>{"setPassword/fulfilled"===e.type&&s("/shelterLogin")}))})(r)}finally{n(!1)}},children:e=>{let{values:s,errors:a,touched:r,handleBlur:t,handleChange:i,handleSubmit:n,isSubmitting:m}=e;return(0,N.jsxs)(d.lV,{onSubmit:n,children:[(0,N.jsx)(c.A,{type:"password",autoComplete:"off",name:"newPassword",label:"New Password",onBlurHandle:t,value:s.newPassword,onChangeHandle:i,icon:(0,N.jsx)(o.pbr,{size:20}),className:"form-control-lg py-3 px-5",placeholder:"Enter your new password"}),(0,N.jsx)("p",{className:"errorField text-danger",children:a.newPassword&&r.newPassword&&a.newPassword}),(0,N.jsx)(c.A,{type:"password",autoComplete:"off",label:"Confirm Password",name:"confirmPassword",onBlurHandle:t,onChangeHandle:i,icon:(0,N.jsx)(o.pbr,{size:20}),value:s.confirmPassword,placeholder:"Confirm your password",className:"form-control-lg py-3 px-5"}),(0,N.jsx)("p",{className:"errorField text-danger",children:a.confirmPassword&&r.confirmPassword&&a.confirmPassword}),(0,N.jsx)("center",{children:(0,N.jsx)(l.A,{className:"w-50 fw-bold py-2 mt-4",text:"SAVE",type:"submit",disabled:m})})]})}})]})},j=(0,r.memo)(b);var A=a(2415),f=(a(6592),a(1876));const g=()=>(0,N.jsxs)(t.A,{className:"m-0 p-0",style:{backgroundColor:"#006633"},children:[(0,N.jsxs)(i.A,{md:4,className:"d-none d-md-flex p-0 justify-content-center align-items-center",children:[(0,N.jsx)(n.A,{imageSrc:A.A.CUSTOM_IMAGE,title:"Set your new",highlightText:"password",description:"Set a new password to secure your account",linkText:"",linkHref:""})," "]}),(0,N.jsx)(i.A,{md:8,className:"min-vh-100 p-0",children:(0,N.jsx)(f.A,{HeadingText:"New Password",className:"mb-3",children:(0,N.jsx)(j,{})})})]}),v=(0,r.memo)(g),y=()=>(0,N.jsx)(r.Fragment,{children:(0,N.jsx)(v,{})})},1876:(e,s,a)=>{a.d(s,{A:()=>c});a(5043);var r=a(6592),t=a(9904),i=a(2327),n=a(2345),d=a(579);const c=e=>{let{children:s,HeadingText:a,className:c}=e;return(0,d.jsx)(t.A,{fluid:!0,className:" AuthWrapper h-100 ",children:(0,d.jsx)(i.A,{className:"justify-content-center align-items-center h-100 ",children:(0,d.jsxs)(n.A,{sm:"8",className:"",children:[(0,d.jsx)(r.A,{headingText:a,className:c}),(0,d.jsx)("span",{className:"",children:s})]})})})}},6476:(e,s,a)=>{a.d(s,{A:()=>d});var r=a(5043),t=a(6259),i=a(579);const n=e=>{const{icon:s,text:a,className:r,handleOnClick:n,disabled:d=!1,type:c="button"}=e;return(0,i.jsxs)(t.A,{className:`fillBtn fw-bold shadow-sm  ${r}`,onClick:n,disabled:d,type:c,children:[s&&s,a]})},d=(0,r.memo)(n)},6592:(e,s,a)=>{a.d(s,{A:()=>n});var r=a(5043),t=a(579);const i=e=>{let{headingText:s,className:a,style:i}=e;return(0,t.jsx)(r.Fragment,{children:(0,t.jsx)("h2",{className:`fw-bold text-darkgreen  ${a} heading`,style:{style:i,textTransform:"camelCase"},children:s})})},n=(0,r.memo)(i)},9277:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(5043),t=a(5475),i=a(2415),n=a(579);const d=e=>{let{imageSrc:s=i.A.SIDE_PANEL_IMG,title:a="Let's create your",highlightText:r="account",description:d="Already have an account?",linkText:c="Login",linkHref:o="/login"}=e;return(0,n.jsx)("div",{className:"sidePanel d-flex flex-column align-items-center justify-content-center",children:(0,n.jsxs)("center",{children:[(0,n.jsx)("div",{className:"p-5",children:(0,n.jsx)("img",{src:s,alt:"Side-Panel",className:"img-fluid"})}),(0,n.jsxs)("h1",{className:"fw-bold fs-1 text-white",children:[a," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"  text-yellow",children:r})]}),(0,n.jsxs)("p",{className:"text-white fs-6 px-5",children:[d," ",(0,n.jsx)(t.N_,{className:"  text-yellow text-decoration-none fw-bold",to:o,children:c})]})]})})},c=(0,r.memo)(d)},3691:(e,s,a)=>{a.d(s,{l3:()=>r,Wc:()=>d,Ff:()=>c,XB:()=>o,Fj:()=>n,$U:()=>t,vj:()=>i,ev:()=>l});a(5043),a(579);const r={email:"",password:""},t={email:"",password:""},i={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",city:"",phoneNumber:"",password:"",catsNumber:"",adoptMonthly:""},n={firstName:"",address:"",state:"",apartment:"",zipCode:"",city:"",lastName:"",email:"",phoneNumber:""},d={email:""},c={newPassword:"",confirmPassword:""},o={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",phoneNumber:"",catsNumber:"",adoptMonthly:""},l={productId:"",quantity:"",frequency:"",duration:""}},6463:(e,s,a)=>{a.d(s,{DY:()=>Z,Jv:()=>P,OK:()=>$,Zo:()=>S,b9:()=>k,mc:()=>C,nE:()=>R,t9:()=>Y,tt:()=>I,vn:()=>z});var r=a(899),t=a(2750);const i=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,t.sR).min(2,t.lf).max(100,t.bh).required(t.w9),n=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,t.JJ).min(2,t.o3).max(40,t.IW).required(t.tJ),d=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,t.ST).min(2,t.zO).max(20,t.Bi).required(t.Ie),c=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^\d{5}$/,"Zip Code must be exactly 5 digits").min(5,t.Xi).max(5,t.Ru).required(t.VI),o=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,t.Ac).min(2,t.PQ).max(20,t.xs).required(t.sM),l=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,t.o4).min(2,t.YG).max(20,t.Zp).required(t.AE),m=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,t.bI).min(6,"Email address should be at least 6 characters").max(100,"Email address should be at most 100 characters").required(t.qi),u=r.Yj().trim("Remove extra spaces").strict(!0).min(8,t.cv).max(16,t.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,t.cv).required(t.w$),h=r.Yj().trim("Remove extra spaces").strict(!0).min(8,t.cv).max(16,t.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,t.cv).required(t.tp),p=r.Yj().trim("Remove extra spaces").strict(!0).min(8,t.cv).max(16,t.cv).oneOf([r.KR("newPassword"),""],t.q$).required(t.ib),x=r.Yj().required(t.F6),w=r.Yj(),N=r.Yj().required(t.mw).trim(),b=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").min(5,"Address should not be less than 5 characters").max(50,"Address should be less than 50 characters").required("Address is required"),j=r.Yj().trim("Remove extra spaces").strict(!0).min(8,t.cv).max(16,t.cv).required(t.ai),A=r.ai().typeError("Please enter a valid number").integer("Only numbers are allowed").max(99999999,"Please enter a ratio value with no more than 8 digits.").required(t.mw),f=r.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").max(50,"Apartment name can not be more than 50 characters"),g=r.Yj().required(t.sT),v=r.Yj().required(t.cl),y=r.Yj().required(t.lG),q=r.Yj().required(t.X1),P=r.Ik().shape({email:m,password:j}),I=r.Ik().shape({email:m,password:j}),S=r.Ik().shape({shelterName:i,address:b,state:d,city:N,zipCode:c,contactName:n,email:m,phoneNumber:x,password:u,catsNumber:N,adoptMonthly:N}),z=r.Ik().shape({shelterName:i,address:b,state:d,city:N,zipCode:c,contactName:n,email:m,password:u,catsNumber:N,adoptMonthly:N}),C=r.Ik().shape({email:m}),Z=r.Ik().shape({newPassword:h,confirmPassword:p}),k=(r.Ik().shape({oldPassword:u,newPassword:h,confirmNewPassword:p}),r.Ik().shape({shelterName:i,address:b,state:d,zipCode:c,contactName:n,email:m,phoneNumber:x,catsNumber:N,adoptMonthly:N})),Y=r.Ik().shape({firstName:o,address:b,state:d,city:N,zipCode:c,lastName:l,email:m,phoneNumber:w,apartment:f}),$=r.Ik().shape({numberOfAdopters:A,numberOfPack:A}),R=r.Ik().shape({productId:g,quantity:v,frequency:y,duration:q})},2750:(e,s,a)=>{a.d(s,{AE:()=>v,AH:()=>t,Ac:()=>o,Bi:()=>Y,F6:()=>z,IW:()=>A,Ie:()=>Z,JJ:()=>w,PQ:()=>m,Ru:()=>T,ST:()=>k,VI:()=>C,X1:()=>_,Xi:()=>R,YG:()=>y,Zp:()=>g,ai:()=>d,bI:()=>i,bh:()=>b,cl:()=>E,cv:()=>c,ib:()=>I,lG:()=>O,lf:()=>N,mw:()=>r,o3:()=>j,o4:()=>f,q$:()=>S,qi:()=>n,sM:()=>l,sR:()=>x,sT:()=>F,tJ:()=>p,tp:()=>q,w$:()=>P,w9:()=>h,xs:()=>u,zO:()=>$});const r="Required",t="Invalid email address",i="Invalid contact email address",n="Email is required",d="Password is required",c="Password must be 8 - 16 digits long including one uppercase, lowercase, special character and number",o="Invalid First Name",l="First Name is required",m="First Name must be greater than 2 charcters",u="Text too long",h="Shelter Name is required",p="Contact Name is requied",x="Invalid Shelter Name",w="Invalid Contact Name",N="Shelter Name must be greater than 2 charcters",b="Text is too long",j="Shelter Name must be greater than 2 charcters",A="Text is too long",f="Invalid Last Name",g="Text too long",v="Last Name is required",y="Last Name must be greater than 2 charcters",q="New Password is required",P="Password is required",I="Confirm New Password is required",S="Pasword must be match",z="Number is required",C="Zip Code is required",Z="State is required",k="State can only contain letters and spaces.",Y="State should be at most 50 characters long.",$="State should be at least 2 characters long.",R="ZIP code must be exactly 5 digits",T="ZIP code must be exactly 5 digits",F="Product Subscription is required",E="Quantity Subscription is required",O="Frequency Subscription is required",_="Duration Subscription is required"}}]);
//# sourceMappingURL=581.aa543435.chunk.js.map