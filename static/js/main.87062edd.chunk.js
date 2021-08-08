(this["webpackJsonppm-demo"]=this["webpackJsonppm-demo"]||[]).push([[0],{64:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a,c,i,r,o,d,l,s,b,j,u,p,x,O,h,m,f,g,v,y,w,C,k,N,I=t(0),D=t.n(I),F=t(18),z=t.n(F),S=t(13),E=t(72),T=t(16),A=t(1),P=function(e){var n=e.id,t=e.title,a=e.text;return Object(A.jsx)(E.a,{className:"mx-2 my-3 shadow cardPreview",style:{width:"18rem",cursor:"pointer"},children:Object(A.jsx)(T.b,{to:"project/".concat(n),style:{width:"100%"},children:Object(A.jsxs)(E.a.Body,{children:[Object(A.jsx)(E.a.Title,{className:"text-center mb-3 ",children:t.toUpperCase()}),Object(A.jsx)(E.a.Text,{children:a})]})})})},M=t(4),R=t(48),U=t(6),B=t(7),L=Object(B.a)(a||(a=Object(U.a)(["\n  top: -16px;\n  font-size: 12px;\n  color: black;\n"]))),W=B.b.div(c||(c=Object(U.a)(["\n  position: relative;\n  margin: 15px;\n"]))),J=B.b.input(i||(i=Object(U.a)(["\n  width: 100%;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  font-size: 1.1rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"])),L),q=B.b.label(r||(r=Object(U.a)(["\n  color: lightgray;\n  font-size: 1.1rem;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 10px;\n  top: -5px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"])),L),H=function(e){var n=e.label,t=Object(R.a)(e,["label"]);return Object(A.jsxs)(W,{children:[Object(A.jsx)(J,Object(M.a)({},t)),n?Object(A.jsx)(q,{className:t.value?"shrink":"",children:n}):null]})},V=t(67),G=t(9),K=t(15),Q=t(44),X=B.b.div(o||(o=Object(U.a)(["\n  width: 70%;\n  min-width: 350px;\n  /* max-width: 600px; */\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: nowrap;\n"]))),Y=B.b.div(d||(d=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),Z=B.b.div(l||(l=Object(U.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  margin: 30px auto;\n  display: flex;\n  flex-direction: row;\n  /* flex-wrap: nowrap; */\n  justify-content: space-around;\n\n  button {\n    height: 45px;\n    width: 60px;\n    padding: 5px 10px;\n  }\n"]))),$=B.b.div(s||(s=Object(U.a)(["\n  width: 50%;\n"]))),_=function(){var e=Object(K.c)((function(e){return e.cards})),n=Object(G.g)(),t=Object(I.useState)(""),a=Object(S.a)(t,2),c=a[0],i=a[1],r=c?Object.values(e).filter((function(e){return e.profile.name.toLowerCase().includes(c.toLowerCase())})):e;return Object(A.jsxs)(X,{children:[Object(A.jsxs)(Z,{children:[Object(A.jsx)($,{children:Object(A.jsx)(H,{label:"search",value:c,onChange:function(e){return i(e.target.value)}})}),Object(A.jsx)(V.a,{variant:"outline-dark",size:"md",onClick:function(){return n.push("/new")},children:"NEW"})]}),Object(A.jsx)(Y,{children:Object(Q.isEmpty)(e)?Object(A.jsx)("h2",{children:"no cards..."}):Object.entries(r).map((function(e){var n=Object(S.a)(e,2),t=n[0],a=n[1];return Object(A.jsx)(P,{id:t,title:a.profile.name,text:a.createdAt.slice(0,10)},t)}))})]})},ee=t(45),ne=t(27),te=t(21),ae=Object(te.b)({name:"cards",initialState:{},reducers:{createCard:{reducer:function(e,n){var t=n.payload,a=t.id,c=t.data;return Object(M.a)(Object(M.a)({},e),{},Object(ne.a)({},a,c))},prepare:function(e){return{payload:{id:Object(te.c)(),data:{createdAt:(new Date).toISOString(),profile:e,todos:[]}}}}},updateProfile:function(e,n){var t=n.payload,a=t.cardId,c=t.profile;return Object(M.a)(Object(M.a)({},e),{},Object(ne.a)({},a,Object(M.a)(Object(M.a)({},e[a]),{},{profile:c})))},addTodo:{reducer:function(e,n){var t=n.payload,a=t.cardId,c=t.todoData,i=e[a];i&&i.todos.push(c)},prepare:function(e){var n=e.cardId,t=e.newContent;return{payload:{cardId:n,todoData:{id:Object(te.c)(),content:t,isDone:!1}}}}},toggleTodoIsDone:function(e,n){var t=n.payload,a=t.cardId,c=t.todoId,i=e[a];if(i){var r=i.todos.map((function(e){return e.id===c?Object(M.a)(Object(M.a)({},e),{},{isDone:!e.isDone}):e}));i.todos=r}},deleteTodo:function(e,n){var t=n.payload,a=t.cardId,c=t.todoId,i=e[a];i&&(i.todos=i.todos.filter((function(e){return e.id!==c})))},deleteCard:function(e,n){var t=n.payload.cardId;e.hasOwnProperty(t)&&delete e[t]}}}),ce=ae.actions,ie=ce.createCard,re=ce.updateProfile,oe=ce.addTodo,de=ce.toggleTodoIsDone,le=ce.deleteTodo,se=ce.deleteCard,be=ae.reducer,je=B.b.div(b||(b=Object(U.a)(["\n  width: 70%;\n  min-width: 350px;\n  /* max-width: 600px; */\n  height: 100%;\n  margin: 0 auto;\n\n  .project-name {\n    font-size: 2rem;\n    font-weight: bolder;\n    text-align: center;\n    padding: 30px;\n    border-bottom: 2px solid black;\n  }\n"]))),ue=B.b.div(j||(j=Object(U.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  margin: 20px auto;\n"]))),pe=B.b.div(u||(u=Object(U.a)(["\n  box-sizing: border-box;\n  border-right: 1px solid gray;\n  padding-right: 10px;\n"]))),xe=B.b.div(p||(p=Object(U.a)(["\n  box-sizing: border-box;\n  padding-left: 10px;\n"]))),Oe=B.b.p(x||(x=Object(U.a)(["\n  .span {\n    font-weight: bold;\n  }\n"]))),he=B.b.div(O||(O=Object(U.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px auto;\n  padding: 2px;\n\n  .group {\n    margin: 0;\n    padding: 0 1px;\n    display: inline-block;\n  }\n\n  .isDone {\n    color: gray;\n  }\n\n  .strikethrough {\n    text-decoration: line-through;\n  }\n\n  .label {\n    margin-left: 5px;\n  }\n"]))),me=B.b.div(h||(h=Object(U.a)(["\n  font-weight: bold;\n  cursor: pointer;\n"]))),fe=B.b.p(m||(m=Object(U.a)(["\n  color: gray;\n  font-size: 1.2rem;\n  text-align: center;\n"]))),ge=B.b.div(f||(f=Object(U.a)(["\n  width: 100%;\n\n  #button {\n    float: right;\n  }\n"]))),ve=B.b.div(g||(g=Object(U.a)(["\n  border: 2px solid rgb(230, 96, 96);\n  border-radius: 3px;\n  margin: 20px auto;\n  padding: 5px;\n\n  .warning {\n    color: black;\n    text-align: center;\n    margin: 20px auto 40px auto;\n  }\n\n  .button-group {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    justify-content: flex-end;\n    margin: 20px 5%;\n  }\n"]))),ye=function(e){var n=e.match.params.id,t=Object(I.useState)(""),a=Object(S.a)(t,2),c=a[0],i=a[1],r=Object(K.c)((function(e){return e.cards})),o=Object(K.b)(),d=Object(G.g)(),l=r.hasOwnProperty(n)?r[n]:void 0,s=Object(I.useState)(!1),b=Object(S.a)(s,2),j=b[0],u=b[1],p=Object(I.useState)(""),x=Object(S.a)(p,2),O=x[0],h=x[1],m=function(e){o(le({cardId:n,todoId:e.target.parentNode.id}))};return l?Object(A.jsxs)(je,{children:[Object(A.jsx)("div",{className:"project-name",children:l.profile.name}),Object(A.jsxs)(ue,{children:[Object(A.jsxs)(pe,{children:[Object(A.jsxs)(Oe,{children:["CREATED AT: ",Object(A.jsx)("span",{children:l.createdAt.slice(0,10)})]}),Object.entries(l.profile).map((function(e){var n=Object(S.a)(e,2),t=n[0],a=n[1];return"customFields"!==t?Object(A.jsxs)(Oe,{children:[t.toUpperCase(),": ",Object(A.jsx)("span",{children:a||"N/A"})]},t):a.map((function(e){return Object(A.jsxs)(Oe,{children:[e.name.toUpperCase(),": ",e.value]},e.id)}))})),Object(A.jsx)(V.a,{variant:"outline-dark",onClick:function(){return d.push("/profile/".concat(n))},children:"Edit Profile"})]}),Object(A.jsxs)(xe,{children:[l.todos.length?function(){var e,t=[],a=[],c=Object(ee.a)(l.todos);try{var i=function(){var c=e.value;c.isDone?a.push(Object(A.jsxs)(he,{id:c.id,children:[Object(A.jsxs)("div",{className:"group isDone",children:[Object(A.jsx)("input",{type:"checkbox",id:c.id,onChange:function(){return o(de({cardId:n,todoId:c.id}))},defaultChecked:!0}),Object(A.jsx)("label",{htmlFor:c.id,className:"strikethrough label",children:c.content})]}),Object(A.jsx)(me,{onClick:m,style:{color:"gray"},children:"\u2716"})]},c.id)):t.push(Object(A.jsxs)(he,{id:c.id,children:[Object(A.jsxs)("div",{className:"group",children:[Object(A.jsx)("input",{type:"checkbox",id:c.id,onChange:function(){return o(de({cardId:n,todoId:c.id}))}}),Object(A.jsx)("label",{htmlFor:c.id,className:"label",children:c.content})]}),Object(A.jsx)(me,{onClick:m,style:{color:"gray"},children:"\u2716"})]},c.id))};for(c.s();!(e=c.n()).done;)i()}catch(r){c.e(r)}finally{c.f()}return Object(A.jsxs)(A.Fragment,{children:[t,Object(A.jsx)(fe,{children:"Completed"}),a]})}():Object(A.jsx)("h2",{children:"No todos"}),Object(A.jsxs)(he,{children:[Object(A.jsx)(H,{label:"New todo",value:c,onChange:function(e){return i(e.target.value)}}),Object(A.jsx)(V.a,{className:"p-0",size:"lg",variant:"white",style:{fontWeight:"bolder",fontSize:"2rem",boxShadow:"none"},onClick:function(e){e.preventDefault(),o(oe({cardId:n,newContent:c})),i("")},children:"+"})]})]})]}),Object(A.jsx)(ge,{children:j?Object(A.jsxs)(ve,{children:[Object(A.jsx)("h2",{className:"warning",children:"Confirm Deletion"}),Object(A.jsx)("form",{children:Object(A.jsx)(H,{label:"Enter Project name",value:O,onChange:function(e){return h(e.target.value)}})}),Object(A.jsxs)("div",{className:"button-group",children:[Object(A.jsx)(V.a,{size:"md",variant:"danger",onClick:function(){O!==l.profile.name?alert("Input does not match project name, deletetion failed"):(o(se({cardId:n})),d.push("/"))},children:"CONFIRM"}),Object(A.jsx)(V.a,{size:"md",variant:"dark",onClick:function(){h(""),u(!1)},children:"DISCARD"})]})]}):Object(A.jsx)(V.a,{size:"sm",variant:"outline-dark",onClick:function(){return u(!0)},id:"button",children:"DELETE CARD"})})]}):Object(A.jsx)(G.a,{to:"/404"})},we=t(28),Ce=t(68),ke=B.b.div(v||(v=Object(U.a)(["\n  width: 50%;\n  min-width: 300px;\n  max-width: 600px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Ne=B.b.form(y||(y=Object(U.a)(["\n  width: 100%;\n  margin: 50px auto;\n  /* max-width: 400px; */\n  border: 2px solid black;\n  border-radius: 22px;\n  flex-direction: column;\n  padding: 25px 15px;\n\n  h2 {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n"]))),Ie=B.b.div(w||(w=Object(U.a)(["\n  border-radius: 10px;\n  color: #000;\n  width: 90%;\n  padding: 20px;\n  margin: 50px auto 20px auto;\n  border: solid 1px #999;\n  box-shadow: 0 4px 23px 5px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),De=B.b.select(C||(C=Object(U.a)(["\n  margin: 10px auto;\n  padding: 0;\n  box-sizing: border-box;\n  width: 90%;\n"]))),Fe=B.b.div(k||(k=Object(U.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  width: 95%;\n"]))),ze=B.b.div(N||(N=Object(U.a)(["\n  font-weight: bold;\n  cursor: pointer;\n"]))),Se=function(e){var n=e.match.params.id,t=Object(K.c)((function(e){return e.cards})),a=Object(K.b)(),c=Object(G.g)(),i=n&&t.hasOwnProperty(n)?t[n]:void 0,r=Object(I.useState)(i?{name:i.profile.name,address:i.profile.address,email:i.profile.email,mobile:i.profile.mobile,customFields:Object(we.a)(i.profile.customFields)}:{name:"",address:"",email:"",mobile:"",customFields:[]}),o=Object(S.a)(r,2),d=o[0],l=o[1],s=Object(I.useState)({name:"",type:"text",value:""}),b=Object(S.a)(s,2),j=b[0],u=b[1],p=function(e){var n=e.target,t=n.name,a=n.value,c=e.target.id;l(Object(M.a)(Object(M.a)({},d),{},{customFields:Object(we.a)(d.customFields.map((function(e){return e.id===c?Object(M.a)(Object(M.a)({},e),{},{name:t,value:a}):e})))}))},x=function(e){var n=e.target.parentNode.id;l(Object(M.a)(Object(M.a)({},d),{},{customFields:Object(we.a)(d.customFields.filter((function(e){return e.id!==n})))}))},O=d.customFields.map((function(e){var n=e.id,t=e.name,a=e.type,c=e.value;return Object(A.jsxs)(Fe,{id:n,children:[Object(A.jsx)(H,{name:t,type:a,value:c,label:t,id:n,onChange:p}),Object(A.jsx)(ze,{onClick:x,children:"\u2716"})]},n)}));return n&&!i?Object(A.jsx)(G.a,{to:"/404"}):Object(A.jsxs)(ke,{children:[Object(A.jsxs)(Ne,{children:[Object(A.jsx)("h2",{children:"NEW"}),Object(A.jsx)(H,{type:"text",name:"name",value:d.name,label:"Name",onChange:function(e){return l(Object(M.a)(Object(M.a)({},d),{},{name:e.target.value}))},required:!0}),Object(A.jsx)(H,{type:"text",name:"profileAddress",value:d.address,label:"Address",onChange:function(e){return l(Object(M.a)(Object(M.a)({},d),{},{address:e.target.value}))}}),Object(A.jsx)(H,{type:"email",name:"email",value:d.email,label:"Email",onChange:function(e){return l(Object(M.a)(Object(M.a)({},d),{},{email:e.target.value}))}}),Object(A.jsx)(H,{type:"tel",name:"mobile",value:d.mobile,label:"Mobile",onChange:function(e){return l(Object(M.a)(Object(M.a)({},d),{},{mobile:e.target.value}))}}),d.customFields.length?O:null,Object(A.jsxs)(Ie,{children:[Object(A.jsx)(H,{type:"text",value:j.name,name:"name",onChange:function(e){return u(Object(M.a)(Object(M.a)({},j),{},{name:e.target.value}))},label:"Field Name"}),Object(A.jsxs)(De,{name:"type",onChange:function(e){return u(Object(M.a)(Object(M.a)({},j),{},{type:e.target.value}))},value:j.type,className:"mb-2",styles:!0,children:[Object(A.jsx)("option",{value:"text",children:"Text"}),Object(A.jsx)("option",{value:"number",children:"Number"}),Object(A.jsx)("option",{value:"tel",children:"Phone"}),Object(A.jsx)("option",{value:"email",children:"Email"}),Object(A.jsx)("option",{value:"date",children:"Date"})]}),Object(A.jsx)(H,{type:j.type,value:j.value,name:"value",onChange:function(e){return u(Object(M.a)(Object(M.a)({},j),{},{value:e.target.value}))},label:"date"===j.type?null:"Field Value"}),Object(A.jsx)(V.a,{className:"mt-2",variant:"outline-dark",onClick:function(e){e.preventDefault(),l(Object(M.a)(Object(M.a)({},d),{},{customFields:[].concat(Object(we.a)(d.customFields),[Object(M.a)(Object(M.a)({},j),{},{id:Object(te.c)()})])})),u({name:"",type:"text",value:""})},disabled:!j.name||!j.value,children:"ADD"})]})]}),Object(A.jsxs)(Ce.a,{children:[i?Object(A.jsx)(V.a,{variant:"dark",onClick:function(){a(re({cardId:n,profile:d})),c.push("/project/".concat(n))},hidden:!d.name,children:"Update"}):Object(A.jsx)(V.a,{variant:"dark",onClick:function(){a(ie(d)),c.push("/")},hidden:!d.name,children:"Create"}),Object(A.jsx)(V.a,{variant:"secondary",onClick:function(){l({name:"",address:"",email:"",mobile:"",customFields:[]}),c.push("/")},children:"Cancel"})]})]})},Ee=function(){return Object(A.jsx)("h1",{children:"404, Page not found"})},Te=t(70),Ae=t(69),Pe=t(71),Me=function(){return Object(A.jsxs)(Te.a,{collapseOnSelect:!0,expand:"md",bg:"light",sticky:"top",children:[Object(A.jsx)(Ae.a,{children:Object(A.jsx)(Te.a.Brand,{className:!0,children:"PM-Demo"})}),Object(A.jsx)(Pe.a,{children:Object(A.jsx)(Ae.a,{className:"justify-content-end cursor-pointer",children:Object(A.jsx)(T.b,{to:"/",className:"px-4 py-2 rounded",children:"Home"})})})]})};var Re=function(){return Object(A.jsxs)(T.a,{children:[Object(A.jsx)(Me,{}),Object(A.jsxs)(G.d,{children:[Object(A.jsx)(G.b,{exact:!0,path:"/",component:_}),Object(A.jsx)(G.b,{path:"/project/:id",component:ye}),Object(A.jsx)(G.b,{path:["/new","/profile/:id"],component:Se}),Object(A.jsx)(G.b,{path:"/notfound",component:Ee}),Object(A.jsx)(G.a,{to:"/notfound"})]})]})},Ue=Object(te.a)({reducer:{cards:be}});t(63),t(64);z.a.render(Object(A.jsx)(D.a.StrictMode,{children:Object(A.jsx)(K.a,{store:Ue,children:Object(A.jsx)(Re,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.87062edd.chunk.js.map