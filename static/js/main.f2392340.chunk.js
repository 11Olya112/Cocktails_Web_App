(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{184:function(e,t,s){},185:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(40),r=s.n(c),i=(s(52),s(53),s(22)),l=s(6),o=s(12),d=s(24),j=s(10),m=(s(38),s(8)),b=s(186);function h(e){var t={};return""===e.email?t.email="Name should not be empty":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?t.email="":t.email="Email Didnt match",""===e.password?t.password="Password should not be empty":/.*/.test(e.password)?t.password="":t.password="Password Didnt match",""===e.emailSecond?t.emailSecond="Name should not be empty":t.emailSecond="",""===e.passwordSecond?t.passwordSecond="Password should not be empty":t.passwordSecond="",""===e.name?t.name="Name should not be empty":t.name="",t}var u=s(2),x=function(){var e=Object(a.useState)({email:"",password:"",name:"",emailSecond:"",passwordSecond:""}),t=Object(j.a)(e,2),s=t[0],n=t[1],c=Object(l.n)(),r=Object(a.useState)({}),x=Object(j.a)(r,2),O=x[0],p=x[1],g=function(e){var t=e.target,s=t.name,a=t.value;n((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},s,a))}))};return Object(u.jsx)("div",{className:"sign",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(u.jsx)("div",{className:"sign-container",style:{width:"600px",height:"408px"},children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=h(s);p(t),""===t.email&&""===t.password&&(console.log("errr"),b.a.post("https://cocktails-wmqd.onrender.com/sign",s).then((function(e){"Success"===e.data?c("/home"):alert("Wrong data")})).catch((function(e){return console.log(e)})))}(e)},className:"has-text-centered",children:[Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"buttons has-addons is-centered",children:Object(u.jsxs)(m.Button.Group,{children:[Object(u.jsx)(i.b,{to:"/",color:"primary",className:"button is-primary",children:"Sign In"}),Object(u.jsx)(i.b,{to:"/register",color:"primary",className:"button is-secondary",children:"Register"})]})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)(m.Form.Field,{children:[Object(u.jsx)(m.Form.Label,{children:"Email"}),Object(u.jsxs)(m.Form.Control,{children:[Object(u.jsx)(m.Form.Input,{type:"email",placeholder:"example@gmail.com",name:"email",onChange:g}),Object(u.jsx)(m.Icon,{align:"left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})})]}),O.email&&Object(u.jsx)("span",{className:"error-message has-text-danger",children:O.email})]}),Object(u.jsxs)(m.Form.Field,{children:[Object(u.jsx)(m.Form.Label,{children:"Password"}),Object(u.jsxs)(m.Form.Control,{children:[Object(u.jsx)(m.Form.Input,{type:"password",placeholder:"password",name:"password",onChange:g}),Object(u.jsx)(m.Icon,{align:"left",children:Object(u.jsx)("i",{className:"fas fa-lock"})}),O.password&&Object(u.jsx)("span",{className:"error-message has-text-danger",children:O.password})]})]}),Object(u.jsx)(m.Button,{fullwidth:!0,rounded:!0,color:"primary",type:"submit",children:"Sign In"})]})]})})})},O=function(){var e=Object(a.useState)({email:"",password:"",name:"",emailSecond:"",passwordSecond:""}),t=Object(j.a)(e,2),s=t[0],n=t[1],c=Object(l.n)(),r=Object(a.useState)({}),x=Object(j.a)(r,2),O=x[0],p=x[1],g=function(e){var t=e.target,s=t.name,a=t.value;n((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(o.a)({},s,a))}))};return Object(u.jsx)("div",{className:"sign",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(u.jsx)("div",{className:"sign-container",style:{width:"600px",height:"408px"},children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=h(s);p(t),""===t.name&&""===t.emailSecond&&""===t.passwordSecond&&b.a.post("https://cocktails-wmqd.onrender.com/register",s).then((function(e){c("/")})).catch((function(e){return console.log(e)}))}(e)},className:"has-text-centered",children:[Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},className:"buttons has-addons is-centered",children:Object(u.jsxs)(m.Button.Group,{children:[Object(u.jsx)(i.b,{to:"/",color:"primary",className:"button is-primary",children:"Sign In"}),Object(u.jsx)(i.b,{to:"/register",color:"primary",className:"button is-secondary",children:"Register"})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(m.Form.Label,{children:"Name"}),Object(u.jsxs)(m.Form.Control,{children:[Object(u.jsx)(m.Form.Input,{type:"text",placeholder:"John Doe",className:"input",name:"name",onChange:g}),O.name&&Object(u.jsx)("span",{className:"error-message has-text-danger",children:O.name})]}),Object(u.jsxs)(m.Form.Field,{children:[Object(u.jsx)(m.Form.Label,{children:"Email"}),Object(u.jsxs)(m.Form.Control,{children:[Object(u.jsx)(m.Form.Input,{type:"email",placeholder:"example@gmail.com",className:"input",name:"emailSecond",onChange:g}),O.emailSecond&&Object(u.jsx)("span",{className:"error-message has-text-danger",children:O.emailSecond})]})]}),Object(u.jsxs)(m.Form.Field,{children:[Object(u.jsx)(m.Form.Label,{children:"Password"}),Object(u.jsxs)(m.Form.Control,{children:[Object(u.jsx)(m.Form.Input,{type:"password",placeholder:"Password",className:"input",name:"passwordSecond",onChange:g}),O.passwordSecond&&Object(u.jsx)("span",{className:"error-message has-text-danger",children:O.passwordSecond})]})]}),Object(u.jsx)(m.Button,{fullwidth:!0,rounded:!0,color:"primary",type:"submit",children:"Register"})]})]})})})},p=s(9),g=s.n(p),f=s(13),v=s.p+"static/media/Icon-Heart-Unfavorite.84e5b971.svg",N=s.p+"static/media/Icon-Heart-Favorite.62a8ee8b.svg",y=function(e){var t=e.item,s=e.handleLikeClick,a=e.liked;return Object(u.jsx)(m.Card,{className:"is-fullheight",children:Object(u.jsxs)(m.Card.Content,{className:"is-flex-direction-column has-min-height-0",children:[Object(u.jsxs)(m.Level,{children:[Object(u.jsx)(m.Level.Side,{align:"left",className:"is-flex is-justify-content-space-between",children:Object(u.jsx)("div",{className:"card-heading",children:Object(u.jsx)(m.Heading,{size:4,mb:4,children:t.strDrink})})}),Object(u.jsx)(m.Level.Side,{align:"right",className:"is-flex is-justify-content-space-between",children:Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)(m.Image,{src:a?N:v,alt:"Item Photo",onClick:s})})})]}),Object(u.jsx)(m.Media,{children:Object(u.jsx)(m.Media.Item,{children:Object(u.jsx)("div",{className:"card-image",children:Object(u.jsx)(m.Image,{src:t.strDrinkThumb})})})}),Object(u.jsx)(m.Content,{mt:4,children:Object(u.jsx)("div",{className:"category",children:Object(u.jsx)("div",{className:"columns is-mobile is-multiline is-flex-wrap-wrap",children:t.strCategory&&Object(u.jsx)("div",{className:"column is-narrow is-half-mobile is-one-quarter-tablet",children:Object(u.jsxs)("span",{className:"is-block has-text-weight-bold is-size-6 has-text-dark",children:["Category:"," ",t.strCategory]})})})})}),Object(u.jsx)(m.Content,{mt:4,children:Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)(m.Button,{color:"primary",className:"is-rounded is-fullwidth",children:"Details"})})})]})})},w=function(e){var t=e.cards,s=e.setCards,n=e.handleLikeClick,c=e.liked,r=Object(a.useState)(6),i=Object(j.a)(r,2),l=i[0],o=i[1];Object(a.useEffect)((function(){var e=function(){var t=Object(f.a)(g.a.mark((function t(a,n){var c,r,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,i=n.concat(r.drinks[0]),a<13?e(a+1,i):s(i),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error fetching data:",t.t0),alert("Error loading data. Please try again.");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,s){return t.apply(this,arguments)}}();0===t.length&&e(1,[])}),[t,s]);var d=t.slice(0,l);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{className:"has-text-centered is-size-4",children:[t.length," ","items"]}),Object(u.jsx)("br",{}),Object(u.jsx)(m.Columns,{className:"is-flex-wrap-wrap",children:d.map((function(e){return Object(u.jsx)(m.Columns.Column,{className:"is-one-third",children:Object(u.jsx)(y,{item:e,handleLikeClick:n,liked:c})},e.idDrink)}))}),Object(u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(u.jsx)(m.Columns,{children:Object(u.jsx)(m.Columns.Column,{className:"ml-5",children:t.length>l&&Object(u.jsx)(m.Button,{color:"primary",onClick:function(){o((function(e){return e+3}))},className:"is-large is-fullwidth is-expanded",children:"Show more"})})})})]})},C=s.p+"static/media/cocktail.d7fa533e.png",S=(s(184),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(!1),r=Object(j.a)(c,2),i=r[0],l=r[1],o={id:1,drinkName:"",thumbnail:"",category:"",area:"",tags:"",glass:""};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{className:"navbar has-background-info-light",role:"navigation","aria-label":"main navigation",children:[Object(u.jsxs)("div",{className:"navbar-brand",children:[Object(u.jsx)("a",{className:"navbar-item",href:"/",children:Object(u.jsx)("img",{src:C,alt:"Logo"})}),Object(u.jsxs)("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarMenu",href:"/",children:[Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{"aria-hidden":"true"})]})]}),Object(u.jsx)("div",{id:"navbarMenu",className:"navbar-menu",children:Object(u.jsx)("div",{className:"navbar-end",children:Object(u.jsx)("div",{className:"navbar-item",children:Object(u.jsx)("div",{className:"buttons",children:Object(u.jsx)("a",{href:"/",className:"button is-danger is-light",children:"Log out"})})})})})]}),Object(u.jsx)("div",{className:"columns",children:Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(m.Level,{children:Object(u.jsx)(m.Level.Item,{children:Object(u.jsx)(m.Heading,{size:3,mt:5,children:"Search results"})})}),Object(u.jsx)(w,{cards:s,setCards:n,handleLikeClick:function(){i?b.a.post("http://localhost:8081/remove-from-my-list",o).then((function(){l(!1)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0437 \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445:",e)})):b.a.post("http://localhost:8081/add-to-my-list",o).then((function(){l(!0)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043e \u0431\u0430\u0437\u0438 \u0434\u0430\u043d\u0438\u0445:",e)}))},liked:i})]})})})]})}),k=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(x,{})}),Object(u.jsx)(l.a,{path:"/register",element:Object(u.jsx)(O,{})}),Object(u.jsx)(l.a,{path:"/home",element:Object(u.jsx)(S,{})})]})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))},52:function(e,t,s){},53:function(e,t,s){}},[[185,1,2]]]);
//# sourceMappingURL=main.f2392340.chunk.js.map