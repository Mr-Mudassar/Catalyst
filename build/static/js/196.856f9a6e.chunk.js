"use strict";(self.webpackChunkreact_boiler_plate=self.webpackChunkreact_boiler_plate||[]).push([[196],{4196:(e,a,s)=>{s.r(a),s.d(a,{default:()=>q});var t=s(5043),r=s(2327),i=s(2345),n=s(9277),l=s(3516),d=s(3216),c=s(5475),m=s(6720),o=s(7973),h=s(423),u=s(6476),p=s(6463),x=s(3691),N=s(3003),b=s(2123),j=s(9916),w=s(579);const g=()=>{const{loading:e}=(0,N.d4)((e=>e.user)),a=(0,N.wA)(),s=(0,d.Zp)();return(0,w.jsxs)(w.Fragment,{children:["pending"===e&&(0,w.jsx)(j.A,{}),(0,w.jsx)(l.l1,{initialValues:{...x.$U},validationSchema:p.tt,onSubmit:async(e,t)=>{let{setSubmitting:r}=t;try{r(!0),await(async e=>{const t={apiEndpoint:"shelter/shelterLogin",requestData:JSON.stringify({...e})};a((0,b.iD)(t)).then((e=>{"login/fulfilled"===e.type&&(e.payload.shelter.firstLoginDone?s("/newPassword"):s("/adopters"))}))})(e)}finally{r(!1)}},children:e=>{let{values:a,errors:s,touched:t,handleBlur:r,handleChange:i,handleSubmit:n,isSubmitting:d}=e;return(0,w.jsxs)(l.lV,{onSubmit:n,className:"",children:[(0,w.jsx)(o.A,{type:"email",autoComplete:"off",name:"email",label:"Email",onBlurHandle:r,value:a.email,icon:(0,w.jsx)(m.mm2,{size:20}),onChangeHandle:i,placeholder:"Enter email",className:"form-control-lg py-3 px-5"}),(0,w.jsx)("p",{className:"errorField text-danger",children:s.email&&t.email&&s.email}),(0,w.jsx)(o.A,{type:"password",name:"password",label:"Password",autoComplete:"off",value:a.password,onBlurHandle:r,onChangeHandle:i,icon:(0,w.jsx)(h.pbr,{size:20}),placeholder:"Enter your password",className:"form-control-lg py-3 px-5"}),(0,w.jsx)("p",{className:"errorField text-danger",children:s.password&&t.password&&s.password}),(0,w.jsx)("p",{className:"text-end text-green  fs-6 mb-4",children:(0,w.jsx)(c.N_,{to:"/forgotPassword",className:"text-decoration-none fw-bold text-green",children:"Forgot Password?"})}),(0,w.jsx)("center",{children:(0,w.jsx)(u.A,{className:"w-50 fw-bold py-2",text:"SIGN IN",type:"submit",disabled:d})})]})}})]})};var v=s(1876),A=s(2415);const y=()=>(0,w.jsxs)(r.A,{className:"m-0 p-0 min-vh-100 bg-green",children:[(0,w.jsx)(i.A,{md:4,className:"d-none d-md-flex p-0 justify-content-center align-items-center",children:(0,w.jsx)(n.A,{imageSrc:A.A.CUSTOM_IMAGE,title:"Hi! Welcome ",highlightText:"back",description:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("span",{children:"Don't have an account yet?"}),(0,w.jsx)("br",{})]}),linkText:"Apply to be a Catalyst Shelter Partner!",linkHref:"/signUp"})}),(0,w.jsx)(i.A,{md:8,className:"min-vh-100 p-0",children:(0,w.jsx)(v.A,{HeadingText:"Shelter Sign In",children:(0,w.jsx)(g,{})})})]}),f=(0,t.memo)(y),q=()=>(0,w.jsx)(t.Fragment,{children:(0,w.jsx)(f,{})})},1876:(e,a,s)=>{s.d(a,{A:()=>d});s(5043);var t=s(6592),r=s(9904),i=s(2327),n=s(2345),l=s(579);const d=e=>{let{children:a,HeadingText:s,className:d}=e;return(0,l.jsx)(r.A,{fluid:!0,className:" AuthWrapper h-100 ",children:(0,l.jsx)(i.A,{className:"justify-content-center align-items-center h-100 ",children:(0,l.jsxs)(n.A,{sm:"8",className:"",children:[(0,l.jsx)(t.A,{headingText:s,className:d}),(0,l.jsx)("span",{className:"",children:a})]})})})}},6476:(e,a,s)=>{s.d(a,{A:()=>l});var t=s(5043),r=s(6259),i=s(579);const n=e=>{const{icon:a,text:s,className:t,handleOnClick:n,disabled:l=!1,type:d="button"}=e;return(0,i.jsxs)(r.A,{className:`fillBtn fw-bold shadow-sm  ${t}`,onClick:n,disabled:l,type:d,children:[a&&a,s]})},l=(0,t.memo)(n)},6592:(e,a,s)=>{s.d(a,{A:()=>n});var t=s(5043),r=s(579);const i=e=>{let{headingText:a,className:s,style:i}=e;return(0,r.jsx)(t.Fragment,{children:(0,r.jsx)("h2",{className:`fw-bold text-darkgreen  ${s} heading`,style:{style:i,textTransform:"camelCase"},children:a})})},n=(0,t.memo)(i)},9277:(e,a,s)=>{s.d(a,{A:()=>d});var t=s(5043),r=s(5475),i=s(2415),n=s(579);const l=e=>{let{imageSrc:a=i.A.SIDE_PANEL_IMG,title:s="Let's create your",highlightText:t="account",description:l="Already have an account?",linkText:d="Login",linkHref:c="/login"}=e;return(0,n.jsx)("div",{className:"sidePanel d-flex flex-column align-items-center justify-content-center",children:(0,n.jsxs)("center",{children:[(0,n.jsx)("div",{className:"p-5",children:(0,n.jsx)("img",{src:a,alt:"Side-Panel",className:"img-fluid"})}),(0,n.jsxs)("h1",{className:"fw-bold fs-1 text-white",children:[s," ",(0,n.jsx)("br",{}),(0,n.jsx)("span",{className:"  text-yellow",children:t})]}),(0,n.jsxs)("p",{className:"text-white fs-6 px-5",children:[l," ",(0,n.jsx)(r.N_,{className:"  text-yellow text-decoration-none fw-bold",to:c,children:d})]})]})})},d=(0,t.memo)(l)},3691:(e,a,s)=>{s.d(a,{l3:()=>t,Wc:()=>l,Ff:()=>d,XB:()=>c,Fj:()=>n,$U:()=>r,vj:()=>i,ev:()=>m});s(5043),s(579);const t={email:"",password:""},r={email:"",password:""},i={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",city:"",phoneNumber:"",password:"",catsNumber:"",adoptMonthly:""},n={firstName:"",address:"",state:"",apartment:"",zipCode:"",city:"",lastName:"",email:"",phoneNumber:""},l={email:""},d={newPassword:"",confirmPassword:""},c={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",phoneNumber:"",catsNumber:"",adoptMonthly:""},m={productId:"",quantity:"",frequency:"",duration:""}},6463:(e,a,s)=>{s.d(a,{DY:()=>k,Jv:()=>I,OK:()=>$,Zo:()=>P,b9:()=>C,mc:()=>Z,nE:()=>R,t9:()=>Y,tt:()=>S,vn:()=>z});var t=s(899),r=s(2750);const i=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.sR).min(2,r.lf).max(100,r.bh).required(r.w9),n=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.JJ).min(2,r.o3).max(40,r.IW).required(r.tJ),l=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.ST).min(2,r.zO).max(20,r.Bi).required(r.Ie),d=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^\d{5}$/,"Zip Code must be exactly 5 digits").min(5,r.Xi).max(5,r.Ru).required(r.VI),c=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,r.Ac).min(2,r.PQ).max(20,r.xs).required(r.sM),m=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,r.o4).min(2,r.YG).max(20,r.Zp).required(r.AE),o=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,r.bI).min(6,"Email address should be at least 6 characters").max(100,"Email address should be at most 100 characters").required(r.qi),h=t.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,r.cv).required(r.w$),u=t.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,r.cv).required(r.tp),p=t.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).oneOf([t.KR("newPassword"),""],r.q$).required(r.ib),x=t.Yj().required(r.F6),N=t.Yj(),b=t.Yj().required(r.mw).trim(),j=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").min(5,"Address should not be less than 5 characters").max(50,"Address should be less than 50 characters").required("Address is required"),w=t.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).required(r.ai),g=t.ai().typeError("Please enter a valid number").integer("Only numbers are allowed").max(99999999,"Please enter a ratio value with no more than 8 digits.").required(r.mw),v=t.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").max(50,"Apartment name can not be more than 50 characters"),A=t.Yj().required(r.sT),y=t.Yj().required(r.cl),f=t.Yj().required(r.lG),q=t.Yj().required(r.X1),I=t.Ik().shape({email:o,password:w}),S=t.Ik().shape({email:o,password:w}),P=t.Ik().shape({shelterName:i,address:j,state:l,city:b,zipCode:d,contactName:n,email:o,phoneNumber:x,password:h,catsNumber:b,adoptMonthly:b}),z=t.Ik().shape({shelterName:i,address:j,state:l,city:b,zipCode:d,contactName:n,email:o,password:h,catsNumber:b,adoptMonthly:b}),Z=t.Ik().shape({email:o}),k=t.Ik().shape({newPassword:u,confirmPassword:p}),C=(t.Ik().shape({oldPassword:h,newPassword:u,confirmNewPassword:p}),t.Ik().shape({shelterName:i,address:j,state:l,zipCode:d,contactName:n,email:o,phoneNumber:x,catsNumber:b,adoptMonthly:b})),Y=t.Ik().shape({firstName:c,address:j,state:l,city:b,zipCode:d,lastName:m,email:o,phoneNumber:N,apartment:v}),$=t.Ik().shape({numberOfAdopters:g,numberOfPack:g}),R=t.Ik().shape({productId:A,quantity:y,frequency:f,duration:q})},2750:(e,a,s)=>{s.d(a,{AE:()=>y,AH:()=>r,Ac:()=>c,Bi:()=>Y,F6:()=>z,IW:()=>g,Ie:()=>k,JJ:()=>N,PQ:()=>o,Ru:()=>T,ST:()=>C,VI:()=>Z,X1:()=>H,Xi:()=>R,YG:()=>f,Zp:()=>A,ai:()=>l,bI:()=>i,bh:()=>j,cl:()=>E,cv:()=>d,ib:()=>S,lG:()=>_,lf:()=>b,mw:()=>t,o3:()=>w,o4:()=>v,q$:()=>P,qi:()=>n,sM:()=>m,sR:()=>x,sT:()=>F,tJ:()=>p,tp:()=>q,w$:()=>I,w9:()=>u,xs:()=>h,zO:()=>$});const t="Required",r="Invalid email address",i="Invalid contact email address",n="Email is required",l="Password is required",d="Password must be 8 - 16 digits long including one uppercase, lowercase, special character and number",c="Invalid First Name",m="First Name is required",o="First Name must be greater than 2 charcters",h="Text too long",u="Shelter Name is required",p="Contact Name is requied",x="Invalid Shelter Name",N="Invalid Contact Name",b="Shelter Name must be greater than 2 charcters",j="Text is too long",w="Shelter Name must be greater than 2 charcters",g="Text is too long",v="Invalid Last Name",A="Text too long",y="Last Name is required",f="Last Name must be greater than 2 charcters",q="New Password is required",I="Password is required",S="Confirm New Password is required",P="Pasword must be match",z="Number is required",Z="Zip Code is required",k="State is required",C="State can only contain letters and spaces.",Y="State should be at most 50 characters long.",$="State should be at least 2 characters long.",R="ZIP code must be exactly 5 digits",T="ZIP code must be exactly 5 digits",F="Product Subscription is required",E="Quantity Subscription is required",_="Frequency Subscription is required",H="Duration Subscription is required"}}]);
//# sourceMappingURL=196.856f9a6e.chunk.js.map