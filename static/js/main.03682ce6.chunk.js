(this["webpackJsonpmy-app-02"]=this["webpackJsonpmy-app-02"]||[]).push([[0],{18:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(28),n=a.n(i),l=(a(38),a(18),a(10)),r=a(2),d=a(0),j=function(){return Object(d.jsx)("div",{className:"d-flex flex-wrap",style:{backgroundColor:"#172146",padding:"80px 16%",color:"#fff"},children:Object(d.jsx)("p",{className:"m-0 px-5",style:{textAlign:"center"},children:"Copyright \xa9 2021 | Edyoda | All Rights Reserved"})})},o=function(){return Object(d.jsx)("div",{className:"top-bar",children:Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"",children:Object(d.jsxs)(l.b,{to:"/",className:"nav-link-lkj",children:[Object(d.jsx)("div",{className:"logo-edyoda",children:"EDYODA"}),Object(d.jsx)("p",{className:"logo-stories",children:"Stories"})]})}),Object(d.jsxs)("div",{className:"top-bar-2",children:[Object(d.jsx)("ul",{children:Object(d.jsxs)("div",{className:"nav-link-lkj explore-text-top",children:["Explore Categories",Object(d.jsx)("span",{children:Object(d.jsx)("img",{src:" ",alt:""})})]})}),Object(d.jsx)("ul",{className:"right-top-top",children:Object(d.jsx)("div",{className:"nav-link-lkj",children:Object(d.jsxs)("p",{className:"top-bar-text-2",children:["EdYoda is free learning and knowledge",Object(d.jsx)("br",{}),"sharing platform for techies"]})})})]}),Object(d.jsx)("div",{className:"nav-link-lkj",children:Object(d.jsx)("button",{className:"btn-websit nav-link-lkj ",children:"Go To Main  Website"})})]})})},b=a(12),h=a(30),x=a(31),O=a(33),m=a(32),p=a(9),f=a.n(p),u=function(e){var t=e.id,a=e.small_image,c=e.title,s=e.posted_on,i=e.description,n=e.authorname,r=e.slug;return Object(d.jsx)(l.b,{to:"/course/".concat(r),children:Object(d.jsxs)("div",{className:" m-4 card",style:{width:" 300px",height:"400px"},id:t,children:[Object(d.jsx)("div",{className:"card-img",children:Object(d.jsx)("img",{src:a,className:"card-img-top",alt:t})}),Object(d.jsxs)("div",{className:"p-4 card-text",children:[Object(d.jsx)("h3",{className:"card-title",children:c}),Object(d.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(d.jsx)("p",{className:"authorname",children:n}),Object(d.jsxs)("span",{className:"publish-date",children:[" ","  | "+s]})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:" grid-text",children:[i," ",Object(d.jsx)("span",{children:"..."})]})})]})]})})},g=function(e){var t=e.id,a=e.title,c=e.slug,s=e.onSet,i=c;return Object(d.jsx)("div",{onClick:function(){s(i)},children:Object(d.jsx)("div",{id:t,className:"m-1 p-1 category-link",children:Object(d.jsx)("h6",{children:a})})})},v=function(){return Object(d.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(d.jsx)("div",{className:"m-1 p-1",children:Object(d.jsx)("img",{width:"25px",height:"25px",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=",alt:"f"})}),Object(d.jsx)("div",{className:"m-1 p-1",children:"Filter by Category"})]})},A=function(e){Object(O.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(h.a)(this,a),(c=t.call(this,e)).handleData=function(e){c.setState({searchData:e}),console.log(e)},c.clearData=function(e){c.setState({allData:""}),c.setState({searchData:""})},c.state={Data:[],allData:"",Category:[],loader:!0,searchData:" "},c}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.edyoda.com/v1/blog/").then((function(t){e.setState({Data:t.data}),e.setState({allData:t.data}),e.setState({loader:!1})})),f.a.get("https://api.edyoda.com/v1/blog/postcategories/").then((function(t){e.setState({Category:t.data})}))}},{key:"componentDidUpdate",value:function(){var e=this;f.a.get("https://api.edyoda.com/v1/blog/"+this.state.searchData+"/").then((function(t){return e.setState({Data:t.data.posts})})),f.a.get("https://api.edyoda.com/v1/blog/"+this.state.allData).then((function(t){e.setState({Data:t.data}),e.setState({allData:t.data}),e.setState({loader:!1})}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"asdfkitjv",children:[Object(d.jsx)("div",{children:Object(d.jsx)(v,{})}),Object(d.jsxs)("div",{className:"d-flex flex-wrap category-container ",children:[Object(d.jsx)("div",{className:"m-1 p-1 category-link",children:Object(d.jsx)("h6",{onClick:this.clearData,children:"All"})}),this.state.Category.map((function(t,a){return Object(c.createElement)(g,Object(b.a)(Object(b.a)({onSet:e.handleData},t),{},{key:a}))}))]}),Object(d.jsx)("div",{className:"d-flex flex-wrap",children:this.state.loader?Object(d.jsx)("h1",{children:"Loading..!"}):this.state.Data.map((function(e,t){return Object(c.createElement)(u,Object(b.a)(Object(b.a)({},e),{},{key:t}))}))})]})})}}]),a}(c.PureComponent),N=a(17),k=function(e){var t=Object(c.useState)([]),a=Object(N.a)(t,2),s=a[0],i=a[1],n=Object(c.useState)([]),l=Object(N.a)(n,2),r=l[0],j=l[1];Object(c.useEffect)((function(){f.a.get("https://api.edyoda.com/v1/blog/post-detail/"+e.match.params.slug+"/").then((function(e){i(e.data),j(e.data.author)}))}),[]);var o=s.id,b=s.large_image,h=s.title,x=s.posted_on,O=r.name,m=r.description,p=r.profilepicture;return Object(d.jsxs)("div",{id:o,className:"course-page",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:b,className:"course-img-page",alt:"big img"})}),Object(d.jsxs)("div",{className:"course-page-text-container",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[" ",h," "]}),Object(d.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(d.jsxs)("p",{style:{color:"blue"},children:[O," "]}),Object(d.jsxs)("span",{className:"publish-date",children:[" | ",x,"  "]})]})]}),Object(d.jsx)("div",{}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col",style:{maxWidth:"150px"},children:Object(d.jsx)("img",{src:p,style:{borderRadius:"50%"},alt:"",width:"100%"})}),Object(d.jsxs)("div",{className:"col",children:[Object(d.jsx)("p",{style:{color:"skyblue"},children:O}),Object(d.jsx)("p",{children:m})]})]}),Object(d.jsx)("div",{})]})]})},y=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,component:A}),Object(d.jsx)(r.a,{path:"/Course/:slug",component:k}),Object(d.jsx)(r.a,{component:function(){return Object(d.jsx)("h1",{children:"404 page not found"})}})]}),Object(d.jsx)(j,{})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.03682ce6.chunk.js.map