"use strict";(self.webpackChunkreact_boiler_plate=self.webpackChunkreact_boiler_plate||[]).push([[943],{6271:(e,s,t)=>{t.r(s),t.d(s,{default:()=>D});var a=t(2123),l=t(9452),d=t(2739),n=t(3845),i=t(1349),r=t(9904),c=t(2327),o=t(2345),m=t(8359),u=t(2620);const p="style_glowButton__BuxOk";var h=t(423),x=t(9553),j=t(7973),g=t(4164),v=t(3003),A=t(5043),b=t(6592),y=t(6543),f=t(1358),N=t(1603),w=t(2641),S=t(184),E=t(3),k=t(782),P=t(579);const _=e=>{let{isOpen:s,toggle:t}=e;const l=(0,v.wA)(),[d,n]=(0,A.useState)(!0),{user:i}=(0,v.d4)((e=>e.user));return(0,P.jsx)(E.A,{size:"md",centered:!0,isOpen:s,backdrop:"static",children:(0,P.jsxs)(k.A,{className:"p-0 px-4",children:[(0,P.jsx)(o.A,{xs:12,className:"text-center",children:(0,P.jsx)(S.BAG,{size:150,className:"text-success text-center"})}),(0,P.jsx)("div",{children:(0,P.jsx)("h4",{className:"fw-noraml text-center",children:"Permission Required"})}),(0,P.jsx)(o.A,{md:"12",children:(0,P.jsxs)(c.A,{className:"py-3",children:[(0,P.jsx)(o.A,{xs:12,children:(0,P.jsx)("p",{children:"Are you okay with sending (up to 2) reminder emails to your adopters if they haven't accepted their free litter yet?"})}),(0,P.jsx)(o.A,{xs:12,children:(0,P.jsxs)("div",{className:"mb-3",children:[(0,P.jsx)("input",{className:"cursorPointer",type:"checkbox",checked:d,id:"permission",onChange:()=>n(!d)}),(0,P.jsx)("label",{className:"ps-2 cursorPointer",for:"permission",children:"Yes, I agree"})]})}),(0,P.jsx)(o.A,{xs:12,className:"text-end",children:(0,P.jsx)("button",{className:"btn m-0 w-100 text-white py-2 bg-success mb-2",onClick:()=>(e=>{const s=e?"TRUE":"FALSE",d={apiEndpoint:`adopter/adopterEmail?id=${null===i||void 0===i?void 0:i.id}&status=${s}`};l((0,a.F8)(d)).then((e=>{var s;"reminderEmailsPermission/fulfilled"===e.type&&(t(),w.A.success(null===(s=e.payload)||void 0===s?void 0:s.message))}))})(d),children:"Submit"})})]})})]})})},C=(0,A.memo)(_),D=()=>{var e;const s=(0,v.wA)(),[t,w]=(0,A.useState)(!1),[S,E]=(0,A.useState)(),[k,_]=(0,A.useState)([]),[D,$]=(0,A.useState)(1),{user:K}=(0,v.d4)((e=>e.user)),[O,R]=(0,A.useState)(""),[M,z]=(0,A.useState)([]),[F,G]=(0,A.useState)(!1),[Y,B]=(0,A.useState)(!1),{recordsPerPage:T}=(0,v.d4)((e=>e.user)),[I,q]=(0,A.useState)({}),H=(0,A.useRef)(!0);(0,A.useEffect)((()=>{H.current&&H.current.focus()}),[]);(0,A.useEffect)((()=>{const e={apiEndpoint:`adopter/adopterEmail?id=${null===K||void 0===K?void 0:K.id}&status=`};s((0,a.F8)(e)).then((e=>{var s,t,a;"reminderEmailsPermission/fulfilled"===e.type&&null===(null===e||void 0===e||null===(s=e.payload)||void 0===s||null===(t=s.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.emailSent)&&w(!0)}))}),[]);const L=()=>{B(!Y)},Q=()=>{G(!F)},U=()=>{const e={apiEndpoint:`/adopter/getAdopter?searchQuery=${O}&page=${D}&limit=${T}`};s((0,a._x)(e)).then((e=>{var s,t,a,l,d,n,i;"getShelterAdopters/fulfilled"===e.type&&(E(null===e||void 0===e||null===(s=e.payload)||void 0===s||null===(t=s.data)||void 0===t||null===(a=t.data)||void 0===a||null===(l=a.pagination)||void 0===l?void 0:l.totalCount),z(null===e||void 0===e||null===(d=e.payload)||void 0===d||null===(n=d.data)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.adopters))}))};(0,A.useEffect)((()=>{U()}),[O,D,T]),(0,A.useEffect)((()=>{if(M&&M.length>0){const e=M.map((e=>({adopterName:(0,P.jsxs)("span",{className:"fw-bold",children:[e.firstName," ",e.lastName]}),email:e.email,createdAt:(0,m.GP)(new Date(e.createdAt),"yyyy-MM-dd"),redeemStatus:(0,P.jsx)("span",{children:e.redemStatus?"True":"Not Yet"}),redemDate:!0===e.redemStatus?(0,m.GP)(new Date(e.redemDate),"yyyy-MM-dd"):"Not Redeemed Yet",action:(0,P.jsx)("span",{children:(0,P.jsxs)(l.A,{children:[(0,P.jsx)(d.A,{className:"p-0",nav:!0,children:(0,P.jsx)("div",{className:"bgProperties rounded-circle border-2 border-danger",children:"\u2022\u2022\u2022"})}),(0,P.jsx)(n.A,{className:"px-0 dropdown-custom-width position-fixed",children:(0,P.jsxs)(i.A,{onClick:()=>{(async e=>{const t={apiEndpoint:y._Y+e};s((0,a.Ge)(t)).then((e=>{var s;"getSingleAdopter/fulfilled"===e.type&&q(null===e||void 0===e||null===(s=e.payload)||void 0===s?void 0:s.adopter)}))})(e.id),Q()},className:"px-2 dropdown-custom-width-inner",children:[(0,P.jsx)(u.lg_,{className:"mb-1 me-2"}),"View"]})})]})})})));_(e)}else _([])}),[M]);return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(r.A,{children:[(0,P.jsxs)(c.A,{className:"px-sm-3 py-2 mb-3 align-items-center",children:[(0,P.jsx)(o.A,{xs:12,md:6,children:(0,P.jsxs)("div",{className:"d-flex justify-content-between align-items-center w-100 text-break",children:[(0,P.jsx)(b.A,{headingText:(null===K||void 0===K||null===(e=K.shelterName)||void 0===e?void 0:e.length)>20?K.shelterName.slice(0,20)+"...":null===K||void 0===K?void 0:K.shelterName,className:"text-start"}),(0,P.jsxs)("p",{className:"m-0 text-green text-center",children:[S," Adopters"]})]})}),(0,P.jsx)(o.A,{className:"p-0 text-end",xs:12,md:6,children:(0,P.jsx)("button",{type:"button",onClick:L,className:`btn custom-height px-md-5 fw-bold ${p}`,ref:H,children:(0,P.jsx)("span",{className:"d-flex",children:"Add Adopter"})})})]}),(0,P.jsx)("hr",{className:"mx-3 mb-4 d-none d-md-block"}),(0,P.jsx)("div",{className:"main-custom-search-width",children:(0,P.jsx)("span",{className:"mb-3 custom-search-width",children:(0,P.jsx)(j.A,{type:"search",name:"Searchbox",icon:(0,P.jsx)(h.Mmj,{size:20,className:"mb-2 text-warning"}),placeholder:"Search by Email",className:"searchbox ps-5 py-2.5 form-control-lg border border-dark rounded-2",value:O,onChangeHandle:e=>R(e.target.value)})})}),(0,P.jsx)(c.A,{children:(0,P.jsxs)(o.A,{className:"custom-shadow bg-white",md:12,children:[(0,P.jsx)(x.A,{columns:[{label:"Adopter Name",dataKey:"adopterName",align:"left"},{label:"Email",dataKey:"email",align:"left"},{label:"Invite Date",dataKey:"createdAt",align:"center"},{label:"Redemption Status",dataKey:"redeemStatus",align:"center"},{label:"Redemption Date",dataKey:"redemDate",align:"center"},{label:"Action",dataKey:"action",align:"center"}],data:k}),S>10&&(0,P.jsx)(g.A,{size:S,handlePageChange:e=>{$(e.selected+1)},page:D})]})}),(0,P.jsx)(N.A,{isOpen:F,toggle:Q,fetchSingleAdopters:I}),(0,P.jsx)(f.A,{isOpen:Y,toggle:L,fetchAllAdopters:U}),(0,P.jsx)(C,{isOpen:t,toggle:()=>{w(!t)}})]})})}}}]);
//# sourceMappingURL=943.dd3b0f21.chunk.js.map