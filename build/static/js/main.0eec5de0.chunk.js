(this["webpackJsonpsnapture-frontend"]=this["webpackJsonpsnapture-frontend"]||[]).push([[0],{15:function(e,t,a){e.exports={container:"RightSidebar_container__21nEp",profileCard:"RightSidebar_profileCard__1Uh5c",profileImg:"RightSidebar_profileImg__3shIP",name:"RightSidebar_name__1TztH",branch:"RightSidebar_branch__1ghXh",updateProfileBtn:"RightSidebar_updateProfileBtn__16ZXW",profileStats:"RightSidebar_profileStats__H1uhu",stat:"RightSidebar_stat__1U2aP",number:"RightSidebar_number__eeebx",createPost:"RightSidebar_createPost__3rJCg",createPostBtn:"RightSidebar_createPostBtn__2jbFP"}},23:function(e,t,a){e.exports={contentWrapper:"NewsCard_contentWrapper__N4f8q",newsCard:"NewsCard_newsCard__1y5ib",newsCard__cardLink:"NewsCard_newsCard__cardLink__xUZve",newsCard__image:"NewsCard_newsCard__image__2HH5s",newsCard__textWrapper:"NewsCard_newsCard__textWrapper__3iKEP",newsCard__title:"NewsCard_newsCard__title__2AvYv",newsCard__postDate:"NewsCard_newsCard__postDate__2oUUi",newsCard__detailsWrapper:"NewsCard_newsCard__detailsWrapper__1W8_c",newsCard__excerpt:"NewsCard_newsCard__excerpt__wNbzS",newsCard__readMore:"NewsCard_newsCard__readMore__222cy"}},31:function(e,t,a){e.exports={container:"LeftSidebar_container__1jlGL",brandlogo:"LeftSidebar_brandlogo__X7mgI",routes:"LeftSidebar_routes__3kUzH",routes_links:"LeftSidebar_routes_links__1wEYQ",active_route_links:"LeftSidebar_active_route_links__g7fVg",route:"LeftSidebar_route__1Jjnw",routeLogo:"LeftSidebar_routeLogo__1apud",routePath:"LeftSidebar_routePath__2Z2Jy"}},32:function(e,t,a){e.exports={container:"PostModal_container__1zqZ0",caption:"PostModal_caption__2NVgD",captionLabel:"PostModal_captionLabel__3lcru",caption_input:"PostModal_caption_input__2k72b",image:"PostModal_image__V5JAu",image_file:"PostModal_image_file__1M3Xu",image_btn:"PostModal_image_btn__359dZ",addPostBtn:"PostModal_addPostBtn__32T9w"}},33:function(e,t,a){e.exports={container:"PostCard_container__2899R",profileDetails:"PostCard_profileDetails__2bgBG",profileName:"PostCard_profileName__28YzO",image:"PostCard_image__37MN_",postCardDetails:"PostCard_postCardDetails__36mjR",caption:"PostCard_caption__3TGHm",like:"PostCard_like__3CGav",count:"PostCard_count__3R-e_"}},37:function(e,t,a){e.exports={container:"Home_container__1BEj_",heading:"Home_heading__dL3tz",posts:"Home_posts__3hJI8"}},42:function(e,t,a){e.exports={slideC:"NewsScroll_slideC__3D-ih",slide:"NewsScroll_slide__28dve",sliderContent:"NewsScroll_sliderContent__dM7BQ",center:"NewsScroll_center__YBDOX",btns:"NewsScroll_btns__1UfQU",btn:"NewsScroll_btn__1cMnq"}},5:function(e,t,a){e.exports={auth_container:"Authentication_auth_container__3AJhj",auth_card:"Authentication_auth_card__Q9CWb",card_left:"Authentication_card_left__3cINk",card_right:"Authentication_card_right__aZEhV",brandlogo:"Authentication_brandlogo__2ZGFS",svgIcons:"Authentication_svgIcons__37Ih9",svgIcons_google:"Authentication_svgIcons_google__sQpWq",largeFont_top:"Authentication_largeFont_top__x3c1R",largeFont:"Authentication_largeFont__1zKKF",smallFont:"Authentication_smallFont__269Jl",oauth_btns:"Authentication_oauth_btns__3rbZh",oauth_btn:"Authentication_oauth_btn__3GbGO",oauth_p:"Authentication_oauth_p__3I-Rm",oauth_logo:"Authentication_oauth_logo__RjGKf",authfooter:"Authentication_authfooter__XNtrK",link:"Authentication_link__2E1eD",oauth_text:"Authentication_oauth_text__2t1WR"}},56:function(e,t,a){e.exports={container:"DashLayout_container__2ds1k",middle:"DashLayout_middle__2hhUv",menuBtnContainer:"DashLayout_menuBtnContainer__29UIy"}},57:function(e,t,a){e.exports={container:"Posts_container__1JDwc",createPost:"Posts_createPost__WrF2V",createPostBtn:"Posts_createPostBtn__3wVWl"}},58:function(e,t,a){e.exports={container:"Header_container__2XKrL",routeName:"Header_routeName__3MZXK",userName:"Header_userName__TIaHL"}},63:function(e,t,a){e.exports={container:"News_container__3jAuo",scrollContainer:"News_scrollContainer__2u3DF"}},7:function(e,t,a){e.exports={form_container:"FormContainer_form_container__2dAWW",form_row:"FormContainer_form_row__1nRNh",auth_input_file:"FormContainer_auth_input_file__3vmrs",image_btn:"FormContainer_image_btn__3z9KY",auth_input:"FormContainer_auth_input__2RIBA",auth_btn:"FormContainer_auth_btn__3AzfT"}},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n,s=a(0),c=a.n(s),r=a(11),o=a.n(r),i=a(4),l=a(5),u=a.n(l),d=a(6),j=a(120),O=a(40),b=a.n(O),m=a(50),h=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(),r=Object(i.a)(c,2),o=r[0],l=r[1],u=Object(s.useRef)([]),d=Object(s.useCallback)(function(){var e=Object(m.a)(b.a.mark((function e(t){var a,s,c,r,o,i,d=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>1&&void 0!==d[1]?d[1]:"GET",s=d.length>2&&void 0!==d[2]?d[2]:null,c=d.length>3&&void 0!==d[3]?d[3]:{},n(!0),r=new AbortController,u.current.push(r),e.prev=6,e.next=9,fetch(t,{method:a,body:s,headers:c,signal:r.signal});case 9:return o=e.sent,e.next=12,o.json();case 12:if(i=e.sent,u.current=u.current.filter((function(e){return e!==r})),o.ok){e.next=16;break}throw new Error(i.message);case 16:return n(!1),e.abrupt("return",i);case 20:throw e.prev=20,e.t0=e.catch(6),l(e.t0.message),n(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(s.useEffect)((function(){return function(){u.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:a,error:o,sendRequest:d,clearError:function(){l(null)}}},p=a(7),g=a.n(p),_=a(1),x=function(){var e=h(),t=e.sendRequest,a=e.isLoading;return Object(_.jsx)("div",{className:g.a.form_container,children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);setTimeout((function(){t("https://snapture-modassir.herokuapp.com/api/auth/signup","POST",JSON.stringify(Object.fromEntries(a)),{"Content-Type":"application/json"}).then((function(e){console.log(e),e.ok?d.b.success(e.message,{position:d.b.POSITION.TOP_RIGHT}):d.b.warn(e.message,{position:d.b.POSITION.TOP_RIGHT})})).catch((function(e){console.log(e),d.b.error("Something went wrong, Please try again",{position:"top-right"})}))}),500)},children:[Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"text",name:"name",placeholder:"Name",className:g.a.auth_input})}),Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:g.a.auth_input})}),Object(_.jsxs)("div",{className:g.a.form_row,children:[Object(_.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:g.a.auth_input}),Object(_.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Repeat",className:g.a.auth_input})]}),a?Object(_.jsx)(j.a,{}):Object(_.jsx)("button",{type:"submit",className:g.a.auth_btn,children:">>"})]})})},f=Object(s.createContext)({isLoggedIn:!1,userId:null,userName:null,userEmail:null,token:null,login:function(){},logout:function(){},googleLogin:function(){}}),S=function(){var e=Object(s.useContext)(f),t=h(),a=t.sendRequest,n=t.isLoading;return Object(_.jsx)("div",{className:g.a.form_container,children:Object(_.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new FormData(t.target);setTimeout((function(){a("https://snapture-modassir.herokuapp.com/api/auth/login","POST",JSON.stringify(Object.fromEntries(n)),{"Content-Type":"application/json"}).then((function(t){t.ok?(d.b.success("Logged In",{position:"top-right"}),console.log(t),e.login(t.userName,t.userEmail,t.userId,t.token)):d.b.warn(t.message,{position:"top-right"})})).catch((function(e){console.log(e),d.b.error("Something went wrong, Please try again",{position:"top-right"})}))}),500)},children:[Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:g.a.auth_input})}),Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"password",name:"password",placeholder:"Password",className:g.a.auth_input})}),n?Object(_.jsx)(j.a,{}):Object(_.jsx)("button",{type:"submit",className:g.a.auth_btn,children:">>"})]})})},A=a.p+"static/media/AuthHomePic.2901dbd6.jpg",v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJnUExURUxpceESUOESUOESUOESUOESUOESUOESUN8QUOESUOESUOMQUOcQUOESUOESUOESUOMQUOESUOUQUOESUOESUOESUOESUP8AAOESUOESUOMSUOESUExpceMSUP8AMuESUOESUP8AVOESUOESUOESUN8AQOESUOMAVOESUOESUP8ASOESUOESUOESUOESUOkARuESUOESUOESUOESUOESUOESUP8AVOESUOESUOESUOESUOMQUP8AQOESUOESUOUMTuESUOESUOMOTuESUOcATOESUOESUOESUOESUOEQUuMSUOMUTuMSUOESUOMOTuESUOMQUOMSUOESUOESUOMSTOESTuESUOEOUOESUOEQUOESUOESUO0SSOEOUuESUOESUOESUO8QVOMSTuESUOEQUOESUOESUOcQUuUMUOMQUOEQTuMSTuEOSuMSUOESUOEQUOEQTuESTuUSUucQTOMQTukKTuUMUOkMUOMQTuUSTusUTuESUOEQUOEOUOEQUOESTuESUOcSTOMSUOMOUuMQUOMOUN8KSucMTOESUOEQUOMSTuEKUuMSTuMQUOESUOMQTuEQTuMSUOMOVOESUOEQTuMQUOESUOEQUOESTuMQTuESUOESUOEOUuEQTucMSOESTOUQUOEOTOEQUOESTuMSUuUQTuESUOEQUOMQTuEQUOsAVOMSTuMQTuEQUOEQUOESUOEQTuEQUOMQUOEQUOEGTOESTOESUOMSTuESTuMSUOESUOUSUuEQTuMQUOEOTOMOUOEQUOEQUOESUOEQTuEQUOEQUOEQTuEQUOMQTuESTuEQUOESUOEQTni2RbwAAADLdFJOUwDvsf3PmcGBENGhQCDTm5E+8TC/99+1As3hYPsAUASnnwb5Xo8I9QjjcAa9apfpCqW5x+t+qwLt5Y18WASv1ybbbjTZCqmtt/NKRhqDuySHTouV3RpUiTKddMvVDiJiyWwONsN257MeJmhmVhBiUmYwKjgeThYSFjwcDCiFQjxEdCg2JCwiGBTFeHoYRkg4LFpwEqM6k2Raiz5URDJ2FCouIFxkNEBW6y79DFBqzUx61b2J0SpWeJ/ncnIcTP1kfO3TQvWfw0rXbjqZGL1elQAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAABGFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNi0yNDwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD4zMTY3ZmI0My1iOTEwLTQ1ZGEtYjEwYy0zNGE3NTNmMTM5YWQ8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+QTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29t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",E=a.p+"static/media/google.0940a115.gif",N=(a.p,a.p+"static/media/microsoft.62c5c1b8.gif"),U=function(){var e=Object(s.useState)("signin"),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(_.jsx)("div",{className:u.a.auth_container,children:Object(_.jsxs)("div",{className:u.a.auth_card,children:[Object(_.jsx)("div",{className:u.a.card_left,children:Object(_.jsx)("img",{src:A,alt:"AuthBrandPic"})}),Object(_.jsxs)("div",{className:u.a.card_right,children:[Object(_.jsx)("img",{src:v,alt:"brandLogo",className:u.a.brandlogo}),Object(_.jsx)("div",{className:u.a.largeFont_top,children:"Login to Your Account"}),Object(_.jsx)("div",{className:u.a.smallFont,children:"Your Own Digital Campaign"}),Object(_.jsxs)("div",{className:u.a.oauth_btns,children:[Object(_.jsx)("a",{href:"".concat("https://snapture-modassir.herokuapp.com","/auth/google"),style:{textDecoration:"none"},children:Object(_.jsxs)("button",{className:u.a.oauth_btn,children:[Object(_.jsx)("div",{className:u.a.oauth_logo,children:Object(_.jsx)("img",{src:E,alt:"Continue with Google",className:u.a.svgIcons})}),Object(_.jsx)("div",{className:u.a.oauth_text,children:"Continue With Google"})]})}),Object(_.jsx)("a",{href:"".concat("https://snapture-modassir.herokuapp.com","/auth/microsoft"),style:{textDecoration:"none"},children:Object(_.jsxs)("button",{className:u.a.oauth_btn,children:[Object(_.jsx)("div",{className:u.a.oauth_logo,children:Object(_.jsx)("img",{src:N,alt:"Continue with Microsoft",className:u.a.svgIcons_google})}),Object(_.jsx)("div",{className:u.a.oauth_text,children:"Continue With Microsoft"})]})})]}),"signin"===a?Object(_.jsx)(S,{}):Object(_.jsx)(x,{}),Object(_.jsxs)("div",{className:u.a.authfooter,children:["signin"===a?Object(_.jsxs)("div",{className:u.a.smallFont,children:["Not a member yet ?"," ",Object(_.jsx)("p",{className:u.a.oauth_p,onClick:function(){return n("signup")},children:"Register Now"})]}):Object(_.jsxs)("div",{className:u.a.smallFont,children:["Already Registered ?"," ",Object(_.jsx)("p",{className:u.a.oauth_p,onClick:function(){return n("signin")},children:"Login"})]}),Object(_.jsx)("div",{className:u.a.smallFont,children:Object(_.jsx)("a",{href:"/auth/forgotPassword",className:u.a.link,children:"Forgot Password ?"})})]})]})]})})},C=a(10),w=a(30),k=function(){var e=h(),t=e.sendRequest,a=e.isLoading,n=Object(C.g)();return Object(_.jsx)("div",{className:g.a.form_container,children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);setTimeout((function(){t("https://snapture-modassir.herokuapp.com/api/auth/email/forgot","POST",JSON.stringify(Object.fromEntries(a)),{"Content-Type":"application/json"}).then((function(e){e.ok?(d.b.success(e.message,{position:"top-right"}),n.push("/auth")):d.b.warn(e.message,{position:"top-right"})})).catch((function(e){console.log(e),d.b.error("Something went wrong, Please try again",{position:"top-right"})}))}),500)},children:[Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:g.a.auth_input})}),a?Object(_.jsx)(j.a,{}):Object(_.jsx)("button",{type:"submit",className:g.a.auth_btn,children:">>"})]})})},P=function(){return Object(_.jsx)("div",{className:u.a.auth_container,children:Object(_.jsx)("div",{className:u.a.auth_card,style:{height:"60%",width:"550px"},children:Object(_.jsxs)("div",{className:u.a.card_right,style:{justifyContent:"center",width:"100%"},children:[Object(_.jsx)("img",{src:v,alt:"brandLogo"}),Object(_.jsx)("div",{className:u.a.largeFont,children:"Forgot Password"}),Object(_.jsx)("br",{}),Object(_.jsx)(k,{})]})})})},T=function(){var e=h(),t=e.sendRequest,a=e.isLoading,n=Object(C.g)(),s=Object(C.h)().resetToken;return Object(_.jsx)("div",{className:g.a.form_container,children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target);setTimeout((function(){t("https://snapture-modassir.herokuapp.com/api/auth/email/reset/"+s,"POST",JSON.stringify(Object.fromEntries(a)),{"Content-Type":"application/json"}).then((function(e){e.ok?(d.b.success(e.message,{position:"top-right"}),n.push("/auth")):d.b.warn(e.message,{position:"top-right"})})).catch((function(e){console.log(e),d.b.error("Something went wrong, Please try again",{position:"top-right"})}))}),500)},children:[Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"password",placeholder:"Enter New Password",name:"password",className:g.a.auth_input})}),Object(_.jsx)("div",{className:g.a.form_row,children:Object(_.jsx)("input",{type:"password",placeholder:"Retype New Password",name:"confirmPassword",className:g.a.auth_input})}),a?Object(_.jsx)(j.a,{}):Object(_.jsx)("button",{type:"submit",className:g.a.auth_btn,children:">>"})]})})},y=function(){return Object(_.jsx)("div",{className:u.a.auth_container,children:Object(_.jsx)("div",{className:u.a.auth_card,style:{height:"70%",width:"550px"},children:Object(_.jsxs)("div",{className:u.a.card_right,style:{justifyContent:"center",width:"100%"},children:[Object(_.jsx)("img",{src:v,alt:"brandLogo"}),Object(_.jsx)("div",{className:u.a.largeFont,children:"Reset Password"}),Object(_.jsx)("br",{}),Object(_.jsx)(T,{})]})})})},I=a(55),R=a.n(I),M=a(31),Q=a.n(M),D=function(e){var t=e.routes,a=e.mobile;return Object(_.jsxs)("div",{className:R()(Q.a.container),style:{backgroundColor:a&&"purple",width:"300px"},children:[Object(_.jsx)("div",{className:R()(Q.a.brandlogo),children:"SNAPTURE"}),Object(_.jsx)("div",{className:R()(Q.a.routes),children:t.map((function(e,t){return Object(_.jsx)(w.b,{to:e.path,className:Q.a.routes_links,activeClassName:Q.a.active_route_links,children:Object(_.jsxs)("div",{className:Q.a.route,children:[Object(_.jsx)("div",{className:Q.a.routeLogo,children:e.icon}),Object(_.jsx)("div",{className:Q.a.routePath,children:e.name})]})},t)}))})]})},L=a(56),Z=a.n(L),J=a(72),B=a.n(J),G=a(73),F=a.n(G),W=a(74),z=a.n(W),H=a(75),q=a.n(H),Y=a(76),X=a.n(Y),K=[{path:"/dash",name:"Home",icon:Object(_.jsx)(B.a,{})},{path:"/profile",name:"My Profile",icon:Object(_.jsx)(F.a,{})},{path:"/messages",name:"Messages",icon:Object(_.jsx)(z.a,{})},{path:"/market",name:"Market",icon:Object(_.jsx)(q.a,{})},{path:"/support",name:"Help Center",icon:Object(_.jsx)(X.a,{})}],V=a(126),$=a(79),ee=a.n($),te=a(36),ae=a(15),ne=a.n(ae),se=a.p+"static/media/PersonImg.437d7ead.webp",ce=a(125),re=a(123),oe=a(32),ie=a.n(oe),le=a(77),ue=a.n(le),de=a(127),je=function(e){var t=e.mobile,a=Object(s.useContext)(f),n=h(),c=n.sendRequest,r=n.isLoading,o=Object(s.useState)(""),l=Object(i.a)(o,2),u=l[0],O=l[1],b=Object(s.useState)(null),m=Object(i.a)(b,2),p=m[0],g=m[1],x=new FileReader;return x.onload=function(){O(x.result)},p&&x.readAsDataURL(p),Object(_.jsx)("div",{className:ie.a.container,style:{margin:t&&"10px"},children:Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);t.append("userId",a.userId),t.append("userName",a.userName),t.append("userEmail",a.userEmail),setTimeout((function(){c("https://snapture-modassir.herokuapp.com/api/post/createPost","POST",t).then((function(e){e.ok?d.b.success(e.message,{position:"top-right"}):d.b.warning(e.message,{position:"top-right"}),console.log(e)})).catch((function(e){d.b.error("Something went wrong,Please try again",{position:"top-right"}),console.log(e)}))}),500)},children:[Object(_.jsxs)("div",{className:ie.a.caption,children:[Object(_.jsx)("div",{className:ie.a.captionLabel,children:"ADD A CAPTION"}),Object(_.jsx)("textarea",{className:ie.a.caption_input,rows:"3",cols:"40",name:"caption"})]}),Object(_.jsxs)("div",{className:ie.a.image,children:[Object(_.jsx)("input",{type:"file",name:"file",accept:".png,.jpeg,.jpg",id:"profilePicBtn",className:ie.a.image_file,onChange:function(e){g(e.target.files[0])}}),Object(_.jsx)(de.a,{src:u||"/broken-image.jpg",variant:"square",style:{height:"150px",width:"300px",backgroundColor:"black",borderRadius:"20px"}}),Object(_.jsx)("label",{htmlFor:"profilePicBtn",className:ie.a.image_btn,children:Object(_.jsx)(ue.a,{fontSize:"large",style:{color:"white",backgroundColor:"#171e27",borderRadius:"50%",padding:"5px"}})})]}),r?Object(_.jsx)(j.a,{}):Object(_.jsx)("button",{type:"submit",className:ie.a.addPostBtn,children:"ADD POST"})]})})},Oe=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(_.jsxs)("div",{className:ne.a.container,children:[Object(_.jsxs)("div",{className:ne.a.profileCard,children:[Object(_.jsx)("div",{className:ne.a.profileImg,children:Object(_.jsx)("img",{src:se,alt:"profilePic"})}),Object(_.jsx)("div",{className:ne.a.name,children:"Modassir Ali"}),Object(_.jsx)("div",{className:ne.a.branch,children:"PIE"}),Object(_.jsx)("button",{className:ne.a.updateProfileBtn,children:"Update Profile"}),Object(_.jsxs)("div",{className:ne.a.profileStats,children:[Object(_.jsxs)("div",{className:ne.a.stat,children:[Object(_.jsx)("div",{className:ne.a.number,children:"1.1K"}),Object(_.jsx)("div",{className:ne.a.stateName,children:"POSTS"})]}),Object(_.jsxs)("div",{className:ne.a.stat,children:[Object(_.jsx)("div",{className:ne.a.number,children:"21.3K"}),Object(_.jsx)("div",{className:ne.a.stateName,children:"HITS"})]})]})]}),Object(_.jsxs)("div",{className:ne.a.createPost,children:[Object(_.jsx)("button",{className:ne.a.createPostBtn,onClick:function(){return n(!0)},children:"CREATE POST"}),Object(_.jsx)(ce.a,{open:a,onClose:function(){return n(!1)},children:Object(_.jsx)(re.a,Object(te.a)(Object(te.a)({in:a,style:{transformOrigin:"0 0 0"}},!a&&{timeout:1e3}),{},{children:Object(_.jsx)(je,{})}))})]})]})},be=a(37),me=a.n(be),he=a(57),pe=a.n(he),ge=a(78),_e=a.n(ge),xe=a(33),fe=a.n(xe),Se=function(e){var t=e.props,a=t.userName,n=t.imageUrl,c=t.caption,r=t.like,o=t.postId,l=t.userId,u=new Set(r),d=Object(s.useState)(u),j=Object(i.a)(d,1)[0],O=h().sendRequest,b=Object(s.useState)(j.has(l)),m=Object(i.a)(b,2),p=m[0],g=m[1];return Object(_.jsxs)("div",{className:fe.a.container,children:[Object(_.jsxs)("div",{className:fe.a.profileDetails,children:[Object(_.jsx)(de.a,{style:{backgroundColor:"orangered",margin:"10px 10px 10px 25px"}}),Object(_.jsx)("div",{className:fe.a.profileName,children:a})]}),Object(_.jsx)("img",{src:n,alt:"post",className:fe.a.image}),Object(_.jsxs)("div",{className:fe.a.postCardDetails,children:[Object(_.jsx)("div",{className:fe.a.caption,children:c}),Object(_.jsxs)("div",{className:fe.a.like,children:[Object(_.jsx)(_e.a,{style:{color:p?"red":"grey"},fontSize:"large",onClick:function(){var e={userId:l,postId:o,type:p};setTimeout((function(){O("https://snapture-modassir.herokuapp.com/api/post/like","POST",JSON.stringify(e),{"Content-Type":"application/json"}).then((function(e){console.log(e),e.ok&&(p?(j.delete(l),g(!1)):p||(j.add(l),g(!0)))})).catch((function(e){return console.log(e)}))}),500)}}),Object(_.jsx)("div",{className:fe.a.count,children:j.size})]})]})]})},Ae=function(){var e=h(),t=e.sendRequest,a=(e.isLoading,Object(s.useState)(null)),n=Object(i.a)(a,2),c=n[0],r=n[1],o=Object(s.useState)(null),l=Object(i.a)(o,2),u=l[0],j=l[1],O=Object(s.useState)(!1),b=Object(i.a)(O,2),m=b[0],p=b[1];Object(s.useEffect)((function(){setTimeout((function(){t("https://snapture-modassir.herokuapp.com/api/post/getPosts").then((function(e){e.ok?j(e.posts):(r(e.message),d.b.warning(e.message,{position:"top-right"}))})).catch((function(e){console.log(c)}))}),500)}),[]);var g=null;return u&&(g=u.map((function(e,t){return Object(_.jsx)(Se,{props:e},t)}))),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:pe.a.createPost,children:[Object(_.jsx)("button",{className:pe.a.createPostBtn,onClick:function(){return p(!0)},children:"CREATE POST"}),Object(_.jsx)(ce.a,{open:m,onClose:function(){return p(!1)},children:Object(_.jsx)(re.a,Object(te.a)(Object(te.a)({in:m,style:{transformOrigin:"0 0 0"}},!m&&{timeout:1e3}),{},{children:Object(_.jsx)(je,{mobile:!0})}))})]}),Object(_.jsx)("div",{className:pe.a.container,children:g||Object(_.jsx)("div",{style:{color:"white"},children:c})})]})},ve=a(63),Ee=a.n(ve),Ne=a(23),Ue=a.n(Ne),Ce=a(124),we=function(e){var t=e.props,a=t.title,n=t.abstract,s=t.created_date,c=t.url,r=t.multimedia,o=new Date(s);return o=o.toString(),Object(_.jsx)("div",{className:Ue.a.contentWrapper,children:Object(_.jsxs)("div",{className:Ue.a.newsCard,children:[Object(_.jsx)("a",{href:"#",className:Ue.a.newsCard__cardLink}),Object(_.jsx)("img",{src:r[0].url,alt:a,className:Ue.a.newsCard__image}),Object(_.jsxs)("div",{className:Ue.a.newsCard__textWrapper,children:[Object(_.jsx)("h2",{className:Ue.a.newsCard__title,children:a}),Object(_.jsx)("div",{className:Ue.a.newsCard__postDate,children:o}),Object(_.jsxs)("div",{className:Ue.a.newsCard__detailsWrapper,children:[Object(_.jsxs)("p",{className:Ue.a.newsCard__excerpt,children:[n,"\u2026"]}),Object(_.jsxs)("a",{href:c,className:Ue.a.newsCard__readMore,children:["Read more ",Object(_.jsx)(Ce.a,{})]})]})]})]})})},ke=a(42),Pe=a.n(ke),Te=a(64),ye=a.n(Te),Ie=function(e){var t=Object(s.useState)(e.activeSlide),a=Object(i.a)(t,2),n=a[0],r=a[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:Pe.a.slideC,children:e.contents.map((function(e,t){return Object(_.jsx)(c.a.Fragment,{children:Object(_.jsx)("div",{className:Pe.a.slide,style:Object(te.a)({},(a=t,n===a?{opacity:1,transform:"translateX(0px) translateZ(0px) rotateY(0deg)",zIndex:10}:n-1===a?{opacity:1,transform:"translateX(-240px) translateZ(-400px) rotateY(35deg)",zIndex:9}:n+1===a?{opacity:1,transform:"translateX(240px) translateZ(-400px) rotateY(-35deg)",zIndex:9}:n-2===a?{opacity:1,transform:"translateX(-240px) translateZ(-400px) rotateY(35deg)",zIndex:8}:n+2===a?{opacity:1,transform:"translateX(240px) translateZ(-400px) rotateY(-35deg)",zIndex:8}:a<n-2?{opacity:0,transform:"translateX(-240px) translateZ(-400px) rotateY(35deg)",zIndex:7}:a>n+2?{opacity:0,transform:"translateX(240px) translateZ(-400px) rotateY(-35deg)",zIndex:7}:void 0)),children:e})},t);var a}))}),Object(_.jsxs)("div",{className:Pe.a.btns,children:[Object(_.jsx)(ye.a,{onClick:function(){return n>0&&r(n-1)},className:Pe.a.btn,fontSize:"large",style:{transform:"rotate(180deg)"}}),Object(_.jsx)(ye.a,{onClick:function(){return n<e.contents.length-1&&r(n+1)},className:Pe.a.btn,fontSize:"large"})]})]})},Re=function(){var e=h().sendRequest,t=Object(s.useState)([]),a=Object(i.a)(t,2),n=a[0],c=a[1];Object(s.useEffect)((function(){e("https://snapture-modassir.herokuapp.com/api/news/home").then((function(e){e.ok&&c(e.articles)})).catch((function(e){console.log(e)}))}),[]);var r=n.map&&n.map((function(e,t){return Object(_.jsx)(we,{props:e},t)})),o=n&&n.slice(2);return Object(_.jsxs)("div",{className:Ee.a.container,children:[o.map&&o.map((function(e,t){return Object(_.jsx)(we,{props:e},t)})),Object(_.jsx)("div",{className:Ee.a.scrollContainer,children:Object(_.jsx)(Ie,{contents:r,activeSlide:1})})]})},Me=function(){return Object(_.jsx)("div",{className:me.a.container,children:Object(_.jsxs)("div",{className:me.a.postContainer,children:[Object(_.jsx)("div",{className:me.a.heading,children:"Trendy Posts"}),Object(_.jsx)("div",{className:me.a.posts,children:Object(_.jsx)(Ae,{})}),Object(_.jsx)("div",{className:me.a.heading,children:"FEED"}),Object(_.jsx)("div",{className:me.a.news,children:Object(_.jsx)(Re,{})})]})})},Qe=a(58),De=a.n(Qe),Le=function(){var e=Object(s.useContext)(f).userName;return Object(_.jsxs)("div",{className:De.a.container,children:[Object(_.jsx)("div",{className:De.a.routeName,children:"DASHBOARD"}),Object(_.jsxs)("div",{className:De.a.userName,children:["Hy, ",e,"!"]})]})},Ze=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){var e=function(){return n(window.innerWidth<1080)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resive",e)}}),[]);var c=Object(s.useState)(!1),r=Object(i.a)(c,2),o=r[0],l=r[1],u=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(e)}};return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:Z.a.menuBtnContainer,children:Object(_.jsx)(ee.a,{onClick:u(!0),style:{color:"white"},fontSize:"large"})}),Object(_.jsxs)("div",{className:Z.a.container,children:[a?Object(_.jsx)(V.a,{open:o,onClose:u(!1),children:Object(_.jsx)(D,{routes:K,mobile:!0})}):Object(_.jsx)(D,{routes:K,mobile:!1}),Object(_.jsxs)("div",{className:Z.a.middle,children:[Object(_.jsx)(Le,{}),Object(_.jsx)(C.b,{path:"/dash",component:Me})]}),Object(_.jsx)(Oe,{})]})]})},Je=(a(93),function(){var e=Object(s.useContext)(f),t=h(),a=t.sendRequest,n=t.isLoading,c=Object(C.g)(),r=Object(C.h)().id,o=Object(s.useState)(r),l=Object(i.a)(o,2),u=l[0],O=l[1],p=Object(s.useState)(null),g=Object(i.a)(p,2),x=g[0],S=g[1],A=Object(s.useState)(null),v=Object(i.a)(A,2),E=v[0],N=v[1];return Object(s.useEffect)(Object(m.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S(null),N(null),a("".concat("https://snapture-modassir.herokuapp.com/api","/auth/email/confirm/").concat(r)).then((function(t){t.ok?(N(t.message),d.b.success(t.message,{position:"top-right"}),e.login(t.userName,t.userEmail,t.userId,t.token)):(S(t.message),d.b.warn(t.message,{position:"top-right"}),c.push("/auth"))})).catch((function(e){console.log(e),S("Something went wrong"),d.b.error("Something went wrong",{position:"top-center"}),O(null)}));case 3:case"end":return t.stop()}}),t)}))),[u]),Object(_.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center"},children:[n&&Object(_.jsx)(j.a,{}),Object(_.jsx)("h3",{children:E||x})]})}),Be=function(){var e=Object(s.useContext)(f),t=h(),a=t.sendRequest,n=t.isLoading,c=Object(C.h)().token;return Object(s.useEffect)((function(){c&&a("https://snapture-modassir.herokuapp.com/api/auth/oauth/"+c).then((function(t){console.log(t),t.ok?(d.b.success("Logged In",{position:"top-right"}),e.login(t.userName,t.userEmail,t.userId,t.token)):d.b.error(t.message,{position:"top-right"})})).catch((function(e){console.log(e)}))}),[]),Object(_.jsxs)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:[n&&Object(_.jsx)(j.a,{}),Object(_.jsx)("h2",{children:!c&&"Token Expired"})]})},Ge=function(){var e=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(),o=Object(i.a)(r,2),l=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(i.a)(d,2),O=j[0],b=j[1],m=Object(s.useState)(null),h=Object(i.a)(m,2),p=h[0],g=h[1],_=Object(s.useState)(null),x=Object(i.a)(_,2),f=x[0],S=x[1],A=Object(s.useCallback)((function(e,t,a,n,s){c(n),b(a),S(t),g(e);var r=s||new Date((new Date).getTime()+36e5);u(r),localStorage.setItem("userData",JSON.stringify({userName:e,userEmail:t,userId:a,token:n,expiration:r.toISOString()}))}),[]),v=Object(s.useCallback)((function(e,t){c(e);var a=t||new Date((new Date).getTime()+36e5);u(a),localStorage.setItem("userData",JSON.stringify({token:e,expiration:a.toISOString()}))}),[]),E=Object(s.useCallback)((function(){c(null),u(null),b(null),localStorage.removeItem("userData")}),[]);return Object(s.useEffect)((function(){if(a&&l){var e=l.getTime()-(new Date).getTime();n=setTimeout(E,e)}else clearTimeout(n)}),[a,E,l]),Object(s.useEffect)((function(){var e=null;localStorage.getItem("userData")&&(e=JSON.parse(localStorage.getItem("userData"))),e&&e.token&&new Date(e.expiration)>new Date&&A(e.userName,e.userEmail,e.userId,e.token,new Date(e.expiration))}),[A,a]),{token:a,login:A,logout:E,userId:O,userName:p,userEmail:f,googleLogin:v}}(),t=e.token,a=e.login,c=e.logout,r=e.userId,o=e.userName,l=e.userEmail,u=e.googleLogin,j=null;return j=t?Object(_.jsxs)(C.d,{children:[Object(_.jsx)(C.b,{path:"/dash",component:Ze}),Object(_.jsx)(C.a,{to:"/dash"})]}):Object(_.jsxs)(C.d,{children:[Object(_.jsx)(C.b,{path:"/auth",exact:!0,component:U}),Object(_.jsx)(C.b,{path:"/auth/confirm/:id",component:Je}),Object(_.jsx)(C.b,{path:"/auth/forgotPassword",exact:!0,component:P}),Object(_.jsx)(C.b,{path:"/auth/reset/:resetToken",exact:!0,component:y}),Object(_.jsx)(C.b,{path:"/auth/:token",component:Be}),Object(_.jsx)(C.a,{to:"/auth"})]}),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(d.a,{}),Object(_.jsx)(f.Provider,{value:{isLoggedIn:!!t,token:t,userName:o,userEmail:l,userId:r,logout:c,login:a,googleLogin:u},children:Object(_.jsx)(w.a,{children:j})})]})};a(94);o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(Ge,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.0eec5de0.chunk.js.map