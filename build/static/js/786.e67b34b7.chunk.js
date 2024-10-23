"use strict";(self.webpackChunkreact_boiler_plate=self.webpackChunkreact_boiler_plate||[]).push([[786],{6476:(e,a,t)=>{t.d(a,{A:()=>n});var s=t(5043),r=t(6259),l=t(579);const i=e=>{const{icon:a,text:t,className:s,handleOnClick:i,disabled:n=!1,type:o="button"}=e;return(0,l.jsxs)(r.A,{className:`fillBtn fw-bold shadow-sm  ${s}`,onClick:i,disabled:n,type:o,children:[a&&a,t]})},n=(0,s.memo)(i)},3082:(e,a,t)=>{t.d(a,{A:()=>l});t(5043);var s=t(7493),r=t(579);const l=e=>{const{Options:a,className:t,name:l,onChangeHandle:i,onBlurHandle:n,placeholder:o,showPlaceholder:d=!0,value:c,label:m,labelClass:u,disabled:h}=e;return(0,r.jsxs)("div",{className:"mb-0 customSelect text-custom-dark",children:[(0,r.jsx)(s.A,{className:`${u} mb-0 p-0 fw-bold`,children:m}),(0,r.jsxs)("select",{className:`customDropdownRadius w-100 form-control-lg ${t}`,name:l,onChange:i,onBlur:n,value:c,disabled:h,children:[d&&(0,r.jsx)("option",{value:"",children:o}),a&&(null===a||void 0===a?void 0:a.map(((e,a)=>(0,r.jsx)("option",{value:null===e||void 0===e?void 0:e.value,children:e.label},a))))]})]})}},3138:(e,a,t)=>{t.d(a,{A:()=>d});var s=t(7493),r=(t(5935),t(7195)),l=t.n(r),i=t(5043),n=t(579);const o=e=>{const{value:a,setFieldValue:t,inputProps:r,className:o,disabled:d,label:c}=e,[m,u]=(0,i.useState)(a||"");(0,i.useEffect)((()=>{u(a||"")}),[a]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{className:"mb-0 p-0 fw-bold text-green",children:c}),(0,n.jsx)(l(),{inputProps:{...r},country:"us",onlyCountries:["us"],countryCodeEditable:!1,masks:{us:"... - ... - ...."},value:m,className:`${o} border ltr`,onChange:e=>{"1"===e?(u(""),t(r.name,"")):(u(e),t(r.name,e))},disabled:d})]})},d=(0,i.memo)(o)},3691:(e,a,t)=>{t.d(a,{l3:()=>s,Wc:()=>n,Ff:()=>o,XB:()=>d,Fj:()=>i,$U:()=>r,vj:()=>l,ev:()=>c});t(5043),t(579);const s={email:"",password:""},r={email:"",password:""},l={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",city:"",phoneNumber:"",password:"",catsNumber:"",adoptMonthly:""},i={firstName:"",address:"",state:"",apartment:"",zipCode:"",city:"",lastName:"",email:"",phoneNumber:""},n={email:""},o={newPassword:"",confirmPassword:""},d={shelterName:"",address:"",state:"",zipCode:"",contactName:"",email:"",phoneNumber:"",catsNumber:"",adoptMonthly:""},c={productId:"",quantity:"",frequency:"",duration:""}},6463:(e,a,t)=>{t.d(a,{DY:()=>K,Jv:()=>I,OK:()=>R,Zo:()=>f,b9:()=>Y,mc:()=>j,nE:()=>Z,t9:()=>$,tt:()=>C,vn:()=>P});var s=t(899),r=t(2750);const l=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.sR).min(2,r.lf).max(100,r.bh).required(r.w9),i=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.JJ).min(2,r.o3).max(40,r.IW).required(r.tJ),n=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/,r.ST).min(2,r.zO).max(20,r.Bi).required(r.Ie),o=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^\d{5}$/,"Zip Code must be exactly 5 digits").min(5,r.Xi).max(5,r.Ru).required(r.VI),d=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,r.Ac).min(2,r.PQ).max(20,r.xs).required(r.sM),c=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Za-z]+( [A-Za-z]+)*$/,r.o4).min(2,r.YG).max(20,r.Zp).required(r.AE),m=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,r.bI).min(6,"Email address should be at least 6 characters").max(100,"Email address should be at most 100 characters").required(r.qi),u=s.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,r.cv).required(r.w$),h=s.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,r.cv).required(r.tp),b=s.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).oneOf([s.KR("newPassword"),""],r.q$).required(r.ib),p=s.Yj().required(r.F6),v=s.Yj(),y=s.Yj().required(r.mw).trim(),N=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").min(5,"Address should not be less than 5 characters").max(50,"Address should be less than 50 characters").required("Address is required"),g=s.Yj().trim("Remove extra spaces").strict(!0).min(8,r.cv).max(16,r.cv).required(r.ai),w=s.ai().typeError("Please enter a valid number").integer("Only numbers are allowed").max(99999999,"Please enter a ratio value with no more than 8 digits.").required(r.mw),A=s.Yj().trim("Remove extra spaces").strict(!0).matches(/^(?!\s*$)(?!.* {2})[A-Za-z0-9\S ]+$/,"Invalid Address").max(50,"Apartment name can not be more than 50 characters"),x=s.Yj().required(r.sT),q=s.Yj().required(r.cl),S=s.Yj().required(r.lG),k=s.Yj().required(r.X1),I=s.Ik().shape({email:m,password:g}),C=s.Ik().shape({email:m,password:g}),f=s.Ik().shape({shelterName:l,address:N,state:n,city:y,zipCode:o,contactName:i,email:m,phoneNumber:p,password:u,catsNumber:y,adoptMonthly:y}),P=s.Ik().shape({shelterName:l,address:N,state:n,city:y,zipCode:o,contactName:i,email:m,password:u,catsNumber:y,adoptMonthly:y}),j=s.Ik().shape({email:m}),K=s.Ik().shape({newPassword:h,confirmPassword:b}),Y=(s.Ik().shape({oldPassword:u,newPassword:h,confirmNewPassword:b}),s.Ik().shape({shelterName:l,address:N,state:n,zipCode:o,contactName:i,email:m,phoneNumber:p,catsNumber:y,adoptMonthly:y})),$=s.Ik().shape({firstName:d,address:N,state:n,city:y,zipCode:o,lastName:c,email:m,phoneNumber:v,apartment:A}),R=s.Ik().shape({numberOfAdopters:w,numberOfPack:w}),Z=s.Ik().shape({productId:x,quantity:q,frequency:S,duration:k})},6543:(e,a,t)=>{t.d(a,{BM:()=>u,GZ:()=>b,Go:()=>m,Hm:()=>N,IL:()=>s,O:()=>d,QK:()=>w,RJ:()=>v,Rx:()=>p,Z:()=>g,_Y:()=>r,_y:()=>n,aB:()=>o,bC:()=>l,bS:()=>y,ie:()=>c,jt:()=>h,ko:()=>i,nY:()=>A});const s=2,r="/adopter/getSingleAdopter/",l="/dashboard/dashboardCard",i="/admin/latestShelters",n="/adopter/getAllAdopterGraph",o="/shelter/getAllShelter",d="/admin/getAllAdopterByAdmin/",c=[...(()=>{const e=[];for(let a=1;a<=291;a+=10){const t=a+9<=300?a+9:300;e.push({label:`${a} - ${t} cats`,value:[a,t]})}return e.push({label:"300+ Cats",value:"300+ Cats"}),e.push({label:"Don't know yet",value:"Don't know yet"}),e})()],m=[...(()=>{const e=[];return["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].forEach((a=>{e.push({label:a,value:a})})),e})()],u=[{label:"MULTI CAT",value:"42662009471125"},{label:"HEALTHY CAT",value:"42661956550805"},{label:"UNSCENTED",value:"42662019858581"},{label:"WOOD PELLETS",value:"45119920930965"}],h=[{label:"Weekly",value:"week"},{label:"Monthly",value:"month"}],b=[{label:"1 Pack",value:1},{label:"2 Packs",value:2},{label:"3 Packs",value:3},{label:"4 Packs",value:4},{label:"5 Packs",value:5}],p=[...(()=>{const e=[];e.push({label:"1 week",value:1});for(let a=2;a<=12;a+=1)e.push({label:`${a} weeks`,value:a});return e})()],v=[...(()=>{const e=[];e.push({label:"1 month",value:1});for(let a=2;a<=12;a+=1)e.push({label:`${a} months`,value:a});return e})()],y=[{label:"10 records",value:"10"},{label:"20 records",value:"20"},{label:"30 records",value:"30"},{label:"40 records",value:"40"},{label:"50 records",value:"50"}],N=[{label:"Today",value:"daily"},{label:"Current Month",value:"monthly"},{label:"Current Year",value:"yearly"}],g=[{label:"Shelter Name",dataKey:"shelterName",align:"left"},{label:"Email",dataKey:"email",align:"left"},{label:"State",dataKey:"state",align:"center"},{label:"Invites sent",dataKey:"totalAdopters",align:"center"},{label:"Redemptions",dataKey:"redeem",align:"center"},{label:"Ratio",dataKey:"ratio",align:"center"},{label:"Status",dataKey:"status",align:"center"},{label:"Action",dataKey:"action",align:"center"}],w=[{label:"Shelter Order Name",dataKey:"shelterName",align:"left"},{label:"Shelter Email",dataKey:"email",align:"left"},{label:"State",dataKey:"state",align:"center"},{label:"Product",dataKey:"product",align:"center"},{label:"Quantity",dataKey:"quantity",align:"center"},{label:"Frequency",dataKey:"frequency",align:"center"},{label:"Order Date",dataKey:"lastSentDate",align:"center"},{label:"Subscription Status",dataKey:"status",align:"center"}],A=[{label:"Shelter Name",dataKey:"shelterName",align:"left"},{label:"Email",dataKey:"email",align:"left"},{label:"State",dataKey:"state",align:"center"},{label:"Invites Sent",dataKey:"totalAdopters",align:"center"},{label:"Redeemed",dataKey:"redeem",align:"center"},{label:"Repeat",dataKey:"repeatPercentage",align:"center"},{label:"Status",dataKey:"status",align:"center"},{label:"Subscription Status",dataKey:"subscriptionStatus",align:"center"},{label:"Action",dataKey:"action",align:"center"}]},2750:(e,a,t)=>{t.d(a,{AE:()=>q,AH:()=>r,Ac:()=>d,Bi:()=>$,F6:()=>P,IW:()=>w,Ie:()=>K,JJ:()=>v,PQ:()=>m,Ru:()=>z,ST:()=>Y,VI:()=>j,X1:()=>T,Xi:()=>Z,YG:()=>S,Zp:()=>x,ai:()=>n,bI:()=>l,bh:()=>N,cl:()=>E,cv:()=>o,ib:()=>C,lG:()=>O,lf:()=>y,mw:()=>s,o3:()=>g,o4:()=>A,q$:()=>f,qi:()=>i,sM:()=>c,sR:()=>p,sT:()=>M,tJ:()=>b,tp:()=>k,w$:()=>I,w9:()=>h,xs:()=>u,zO:()=>R});const s="Required",r="Invalid email address",l="Invalid contact email address",i="Email is required",n="Password is required",o="Password must be 8 - 16 digits long including one uppercase, lowercase, special character and number",d="Invalid First Name",c="First Name is required",m="First Name must be greater than 2 charcters",u="Text too long",h="Shelter Name is required",b="Contact Name is requied",p="Invalid Shelter Name",v="Invalid Contact Name",y="Shelter Name must be greater than 2 charcters",N="Text is too long",g="Shelter Name must be greater than 2 charcters",w="Text is too long",A="Invalid Last Name",x="Text too long",q="Last Name is required",S="Last Name must be greater than 2 charcters",k="New Password is required",I="Password is required",C="Confirm New Password is required",f="Pasword must be match",P="Number is required",j="Zip Code is required",K="State is required",Y="State can only contain letters and spaces.",$="State should be at most 50 characters long.",R="State should be at least 2 characters long.",Z="ZIP code must be exactly 5 digits",z="ZIP code must be exactly 5 digits",M="Product Subscription is required",E="Quantity Subscription is required",O="Frequency Subscription is required",T="Duration Subscription is required"}}]);
//# sourceMappingURL=786.e67b34b7.chunk.js.map