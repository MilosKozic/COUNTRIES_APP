(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{42:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var i,a,r,c,o,s,l,d,j,u,p,b=t(1),x=t.n(b),h=t(33),g=t.n(h),m=(t(42),t(4)),O=t(11),f=t(2),v=t(13),w=t.n(v),y=function(){return w.a.get("https://my-json-server.typicode.com/MilosKozic/users-api/users")},k=function(e){return(Number(e)-273.15).toFixed(2)},S=t(9),C=t(10),N=C.a.span(i||(i=Object(S.a)(["\n\n   a { \n       font-family: Arial, Helvetica, sans-serif;\n    text-decoration: none;\n    color:#fcf9f9;\n    padding:10px;\n    }\n"]))),T=C.a.div(a||(a=Object(S.a)(["\ndisplay:flex;\n   a { \n   font-size:2em;\n  \n       font-family: 'Times New Roman', Times, serif;\n    text-decoration: none;\n    color:#fcf9f9;\n    padding-left:20px;\n    margin:10px;\n    margin-bottom:10px;  \n    margin-top:5px;\n    text-align: center;\n    padding-top:10px;}\n"]))),z=C.a.div(r||(r=Object(S.a)(["\n  margin:20px;\n  margin-left:50px;\n  display:flex;\n \n"]))),F=C.a.select(c||(c=Object(S.a)(["\n width: 300px;\n padding:10px;\n  color:#fcf9f9;\n  background:transparent;\n  margin-left:16px;\n  border:0.5px solid white;\n  option{\n  background:#131d13;\n  padding:5px;\n}\n\n\n"]))),R=C.a.input(o||(o=Object(S.a)(["\nmargin-left:150px;\n  color:#fcf9f9;\nwidth:300px;\nbackground:transparent;\nborder:0.5px solid white;\npadding: 5px 30px;\n\n"]))),U=C.a.button(s||(s=Object(S.a)(["\npadding:5px 30px;\ncolor: white;\nfont-size:1em;\nbackground: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));\n:hover{\nbackground:#162218;}\nmargin-left:160px;\nborder:0.5px solid white;\n    "]))),I=C.a.div(l||(l=Object(S.a)(["\n  display: wrap ;\n  \n  justify-content: space-between;\n  align-content: space-between;\n  max-width:90%;\n \n"]))),A=C.a.div(d||(d=Object(S.a)(["\n   margin:50px 70px;\n   border:0.5px solid #191f17;\n   border-radius: 8px;\n   display: inline-block;\n   background: linear-gradient(rgba(247, 250, 246, 0.3),rgba(22, 32, 19, 0.3));\n    \n     width:250px;\n     height:250px;\n\n   a { font-weight: bold;\n       font-family: 'Times New Roman', Times, serif;\n    text-decoration: none;\n    color:#fcf9f9;\n    text-align:center;\n    font-size:1.2em;\n    \n    }\n    p{\n        color:#fcf9f9;\n        font-family: 'Times New Roman', Times, serif;\n        text-align:center;\n        \n    }\n    span{\n      font-weight:bold;\n      font-family: 'Times New Roman', Times, serif;\n      padding-left:10px;\n     \n    }\n    img{\n        display:block;\n       height:125px ;\n        width:250px ;\n        border-radius:8px;   }\n"]))),E=C.a.div(j||(j=Object(S.a)(["\ndiv{\n  margin-left: 200px;\n  display:inline-block;\n}\n\np{\n  font-family: 'Times New Roman', Times, serif;\n  \n  padding:9px;\n  background: linear-gradient(rgba(133, 138, 133, 0.1),rgba(247, 250, 246, 0.1))\n}\n  font-size:1.5em;\n  display:flex;\n  \n  padding: 20px;\n  color: #fcf9f9; \n  span{\n  font-weight:bold;\n  font-family: 'Times New Roman', Times, serif;\n}\n  img{\n      width:200px;\n      height:200px;\n      border-radius:30px;\n\n  }\n  button{\n    display:flex;\n    margin-left:50px;\n    margin-top:27px;\n    height:42px;\n    padding:5px 31px;\n    color: white;\n   font-size:1em;\n    background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));\n    border:0.5px solid white;\n:hover{\n  background:#142414; \n  }\n}\n"]))),L=C.a.div(u||(u=Object(S.a)(["\nmargin-top:150px;\ndisplay:flex;\njustify-content:space-between;\nflex-direction:column;\nalign-items:center;\ninput{\n  width:500px;\n  padding:15px 30px;\n  margin-top:8px;\n  /* background: transparent; */\n  border:1px solid white;\n \n}\n\n"]))),W=C.a.input(p||(p=Object(S.a)(["\ncolor: white;\nfont-size:1em;\nbackground: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));\n:hover{\nbackground:#111311;\n}\n"]))),B=t(0),M=function(e){var n=e.user;return Object(B.jsx)(B.Fragment,{children:n?Object(B.jsx)(f.a,{to:"/countries"}):Object(B.jsx)(f.a,{to:"/login"})})},P=function(e){var n=e.setUser,t=(e.user,Object(f.g)()),i=Object(b.useState)(""),a=Object(m.a)(i,2),r=a[0],c=a[1],o=Object(b.useState)(""),s=Object(m.a)(o,2),l=s[0],d=s[1];return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)("form",{onSubmit:function(e){e.preventDefault(),y().then((function(e){var i=e.data.find((function(e){return e.username===r&&e.password===l}));if(i){localStorage.setItem("user",i.username);var a=localStorage.getItem("user");n(a),t.push("/countries")}else window.alert("Neispravni podaci, unesite ponovo")}))},children:Object(B.jsxs)(L,{children:[Object(B.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(e){return c(e.target.value)}}),Object(B.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){return d(e.target.value)}}),Object(B.jsx)(W,{type:"submit",value:"Login"})]})})})},D=function(e){e.user;var n=Object(f.g)(),t=Object(b.useState)(""),i=Object(m.a)(t,2),a=i[0],r=i[1],c=Object(b.useState)(""),o=Object(m.a)(c,2),s=o[0],l=o[1],d=Object(b.useState)(""),j=Object(m.a)(d,2),u=j[0],p=j[1],x=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;return Object(B.jsx)("form",{onSubmit:function(e){return e.preventDefault(),a.length<2?window.alert("Ime je previse kratko"):u.length<8||!u.match(x)?window.alert("Sifra mora sadrzati izmedju 8 i 15 karaktera,  minimum jedno malo slovo, jedno veliko slovo, jedan broj i jedan specijalan karakter"):void y().then((function(e){console.log(e.data);var t={username:a,email:s,password:u};console.log(t.username),e.data.find((function(e){return e.username===t.username||e.email===t.email}))?window.alert("Ve\u0107 postoji korisnik sa unetim podacima"):function(e){return w.a.post("https://my-json-server.typicode.com/MilosKozic/users-api/users",e)}(t).then((function(e){n.push("/login")}))}))},children:Object(B.jsxs)(L,{children:[Object(B.jsx)("input",{type:"text",placeholder:"username...",onChange:function(e){return r(e.target.value)}}),Object(B.jsx)("input",{type:"email",placeholder:"email...",onChange:function(e){return l(e.target.value)}}),Object(B.jsx)("input",{type:"password",placeholder:"password...",onChange:function(e){return p(e.target.value)}}),Object(B.jsx)(W,{type:"submit",value:"Register"})]})})},J=t(37),K=function(e){var n=e.countries,t=e.setUser,i=e.user,a=Object(b.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1],s=Object(b.useState)(""),l=Object(m.a)(s,2),d=l[0],j=l[1],u=Object(f.g)();return i?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(Z,{countries:n,setSelectvalue:o,setSearch:j,setUser:t}),Object(B.jsx)(I,{children:n.filter((function(e){return e.region.startsWith(c)&&e.name.toLowerCase().includes(d)})).map((function(e){return Object(B.jsxs)(A,{onClick:function(){u.push("/countries/".concat(e.name))},children:[console.log(c),Object(B.jsx)("img",{src:"".concat(null===e||void 0===e?void 0:e.flag)}),Object(B.jsx)(O.b,{to:"countries/".concat(null===e||void 0===e?void 0:e.name),children:Object(B.jsx)("p",{children:null===e||void 0===e?void 0:e.name})}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"  Capital city:"}),"  ",e.capital?null===e||void 0===e?void 0:e.capital:"No capital city"]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"  Population:"}),"  ",e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")]})]},e.name)}))})]}):Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h3",{children:"You need to be logged in to access this page!"}),u.push("/login")]})},Z=function(e){var n=e.countries,t=e.setSelectvalue,i=void 0===t?{setSelectvalue:i}:t,a=e.setSearch,r=void 0===a?{setSearch:r}:a,c=e.setUser,o=void 0===c?{setUser:o}:c,s=Array.apply(void 0,Object(J.a)(new Set(n.map((function(e){return e.region}))))),l=Object(f.g)();return Object(B.jsxs)(z,{children:[Object(B.jsxs)(F,{onChange:function(e){i(e.target.value)},children:[Object(B.jsx)("option",{value:"",children:"All countries"}),s.splice(0,6).map((function(e){return Object(B.jsx)("option",{value:e,children:e},e)}))]}),Object(B.jsx)(R,{type:"text",placeholder:"Search some country...",onChange:function(e){r(e.target.value.toLowerCase())}}),Object(B.jsx)(U,{onClick:function(){l.push("/login"),o(null),localStorage.removeItem("user")},children:"Logout"})]})},q=function(e){var n,t,i,a,r,c,o,s=e.countries,l=Object(f.h)().country,d=s.filter((function(e){return e.name==l})),j=Object(f.g)(),u=Object(b.useState)(!1),p=Object(m.a)(u,2),x=p[0],h=p[1],g=Object(b.useState)(),O=Object(m.a)(g,2),v=O[0],y=O[1];return Object(b.useEffect)((function(){var e=!0;(function(e){return w.a.get("https://restcountries.eu/rest/v2/name/".concat(e))})(l).then((function(n){var t;return e&&(n.data[0].capital?(t=n.data[0].capital,w.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("eabac33fe6ddae5c4cb0b2393407b914"))).then((function(e){y(e.data)})):y(null)),function(){e=!1}}))}),[]),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)(E,{children:[Object(B.jsx)("br",{}),Object(B.jsx)("button",{onClick:function(){j.push("/countries")},children:"Back"}),Object(B.jsxs)("div",{className:"text",children:[Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"Capital city:"})," ",null===(n=d[0])||void 0===n?void 0:n.capital]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"Region:"}),"  ",null===(t=d[0])||void 0===t?void 0:t.region]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"Native name:"}),"  ",null===(i=d[0])||void 0===i?void 0:i.nativeName]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"Currency:"}),"  ",null===(a=d[0])||void 0===a?void 0:a.currencies[0].name]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("span",{children:"Primary language:"})," ",null===(r=d[0])||void 0===r?void 0:r.languages[0].name]})]}),Object(B.jsx)("div",{className:"img",children:Object(B.jsx)("img",{src:"".concat(null===(c=d[0])||void 0===c?void 0:c.flag)})})]}),v?Object(B.jsxs)(E,{children:[Object(B.jsx)("button",{onClick:function(){h(!x)},children:"\u2103 / \u2109"}),x?Object(B.jsxs)("p",{children:["Temperature : ",(o=null===v||void 0===v?void 0:v.main.temp,(9*Number(o)/5-459.67).toFixed(2)),Object(B.jsx)(B.Fragment,{children:"\u2109"})," "]}):Object(B.jsxs)("p",{children:["Temperature: ",k(null===v||void 0===v?void 0:v.main.temp),Object(B.jsx)(B.Fragment,{children:"\u2103"})]}),Object(B.jsxs)("p",{children:["Weather : ",null===v||void 0===v?void 0:v.weather[0].main]}),Object(B.jsxs)("p",{children:["Wind speed: ",null===v||void 0===v?void 0:v.wind.speed," mp/h "]})]}):Object(B.jsx)(E,{children:Object(B.jsx)("p",{children:"No forecast data available"})})]})};var H=function(){var e=Object(b.useState)([]),n=Object(m.a)(e,2),t=n[0],i=n[1],a=Object(b.useState)(localStorage.getItem("user")),r=Object(m.a)(a,2),c=r[0],o=r[1];return console.log(localStorage.getItem("user")),console.log(c),Object(b.useEffect)((function(){var e=!0;w.a.get("https://restcountries.eu/rest/v2/all").then((function(n){return e&&i(n.data),function(){e=!1}}))}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(O.a,{children:[Object(B.jsx)("header",{children:c?Object(B.jsx)(T,{children:Object(B.jsxs)(O.b,{to:"/countries",children:[Object(B.jsx)(B.Fragment,{children:"\ud83c\udf0e"}),"Explore world around you..."]})}):Object(B.jsxs)(T,{children:[Object(B.jsxs)(N,{children:[" ",Object(B.jsx)(O.b,{to:"/",children:'Welcome to "Explore world around you...." '})]}),Object(B.jsx)("hr",{}),Object(B.jsxs)(N,{children:["  ",Object(B.jsx)(O.b,{to:"/login",children:"Login"})]}),Object(B.jsxs)(N,{children:["  ",Object(B.jsx)(O.b,{to:"/register",children:"Create new account"})]})]})}),Object(B.jsxs)(f.d,{children:[Object(B.jsx)(f.b,{exact:!0,path:"/",children:Object(B.jsx)(M,{user:c})}),Object(B.jsx)(f.b,{exact:!0,path:"/login",children:Object(B.jsx)(P,{setUser:o,user:c})}),Object(B.jsx)(f.b,{exact:!0,path:"/register",children:Object(B.jsx)(D,{user:c})}),Object(B.jsx)(f.b,{exact:!0,path:"/countries",children:Object(B.jsx)(K,{countries:t,setUser:o,user:c})}),Object(B.jsx)(f.b,{exact:!0,path:"/countries/:country",children:Object(B.jsx)(q,{countries:t})})]})]})})};g.a.render(Object(B.jsx)(x.a.StrictMode,{children:Object(B.jsx)(H,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d0e46df3.chunk.js.map