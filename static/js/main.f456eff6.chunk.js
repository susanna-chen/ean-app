(this["webpackJsonpean-app"]=this["webpackJsonpean-app"]||[]).push([[0],{41:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(21),a=n.n(r),d=(n(41),n(42),n(11)),o=n(88),l=n(36),j=n(87),s=n(9),b=n(86),u=n(35),h=n(34),p=n.n(h),x=n(0),O=function(e){n(1),n(21);var t,c=n(46),i=p()({minFontSize:10,maxFontSize:300}),r=i.fontSize,a=i.ref;return Object(x.jsxs)("div",{style:(t={display:"flex",flexDirection:"column",justifyContent:"space-btween",height:"4.5cm",width:"8cm",padding:"0.5cm",margin:"-29%",borderRadius:"5px"},Object(s.a)(t,"margin",0),Object(s.a)(t,"background","white"),t),id:"prezzo",children:[Object(x.jsx)(b.a,{ref:a,style:{fontSize:r,height:"2cm",width:"100%",fontWeight:"bold"},children:e.product}),Object(x.jsxs)(b.a,{style:{},children:[Object(x.jsxs)(u.a,{style:{fontSize:"38px"},children:["\u20ac",e.price]}),Object(x.jsx)(u.a,{children:Object(x.jsx)(c,{value:e.ean,height:25,width:.8,fontSize:8})})]})]})},f=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(""),o=Object(d.a)(a,2),s=o[0],b=o[1],u=Object(c.useState)(""),h=Object(d.a)(u,2),p=h[0],f=h[1];return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"8cm",padding:"0",border:"1px solid black",alignContent:"center"},children:[e.show&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{controlId:"floatingInput",label:"Product",children:Object(x.jsx)(j.a.Control,{type:"text",placeholder:"product",onChange:function(e){return r(e.target.value)}})}),Object(x.jsx)(l.a,{controlId:"floatingPassword",label:"Price",children:Object(x.jsx)(j.a.Control,{type:"text",placeholder:"Price",onChange:function(e){return b(e.target.value)}})}),Object(x.jsx)(l.a,{controlId:"floatingPassword",label:"EAN",children:Object(x.jsx)(j.a.Control,{type:"text",placeholder:"EAN",onChange:function(e){return f(e.target.value)}})})]}),Object(x.jsx)("div",{children:Object(x.jsx)(O,{product:i,price:s,ean:p})})]})})},g=n(22),m=function(e){var t=e.product,n=(e.props,Object(c.useState)(!0)),i=Object(d.a)(n,2),r=i[0],a=i[1],l=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12}],j=l.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(f,{show:r})},e.id)}));l.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(O,{product:t})},e.id)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:{display:"inline-flex",alignItems:"center",flexWrap:"wrap",width:"24.07cm",height:"18cm",background:"white",border:"1px solid black"},id:"prezzo",children:j}),r&&Object(x.jsx)(o.a,{onClick:function(){return a(!1)},style:{margin:"30px"},children:"Done"}),!r&&Object(x.jsx)(o.a,{onClick:function(){g.a(document.getElementById("prezzo"),{quality:.95}).then((function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()}))},style:{margin:"30px"},children:"download"})]})};var y=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(m,{})})};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.f456eff6.chunk.js.map