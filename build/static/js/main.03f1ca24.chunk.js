(this["webpackJsonpculture-club-app"]=this["webpackJsonpculture-club-app"]||[]).push([[0],{32:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){e.exports=t(73)},45:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(35),l=t.n(r),i=(t(45),t(3)),c=t(5),o=t(7),u=t(6),m=t(14),p=t.n(m),d=t(39),h=t(1),g=new function e(){Object(i.a)(this,e),Object(h.h)(this,{isLoggedIn:!1,username:"",userID:""})};t(62);var v=function(e){return s.a.createElement("div",{className:"email-container"},s.a.createElement("input",{onChange:e.onChange,value:e.email,placeholder:"email",type:"email"}),""!==e.email?(a=e.email,/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(a)?s.a.createElement("p",{className:"valid"},s.a.createElement("i",{className:"fas fa-check"})):s.a.createElement("p",{className:"required"},"Please enter a valid email.")):s.a.createElement("p",{className:"valid-placeholder"},"email"));var a};t(32);var f=function(e){return s.a.createElement("div",{className:"password-container"},s.a.createElement("input",{value:e.password,onChange:e.onChange,autoComplete:"new-password",placeholder:"Password",type:"".concat(e.isToggleOn?"text":"password")}),s.a.createElement("i",{onClick:e.handleToggle,className:"fas ".concat(e.isToggleOn?"fa-eye-slash":"fa-eye")}))},b=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{className:"login-btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},"Log in"))}}]),t}(n.Component),E=t(36),N=(t(63),t(10)),C=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={email:"",name:"",location:"",time:"",invitation:""},e.handleInputChange=function(a){var t=a.target,n=t.value,s=t.name;e.setState(Object(E.a)({},s,n))},e.onSubmit=function(a){a.preventDefault(),fetch("/sendEmail",{method:"post",body:JSON.stringify(e.state),headers:{"Content-Type":"application/json"}}).then((function(a){a.status&&e.confirmMessage()}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({invitation:"Create an invition"})}},{key:"confirmMessage",value:function(){this.setState({email:"",name:"",location:"",time:"",invitation:"The invitation has been sent"})}},{key:"render",value:function(){var e=this.state,a=e.email,t=e.name,n=e.location,r=e.time,l=e.invitation,i=this.handleInputChange;return s.a.createElement(N.a,null,s.a.createElement("div",{className:"profile-container"},s.a.createElement("div",{className:"profile-card"},s.a.createElement("div",{className:"profile-picture-bg",style:{background:'linear-gradient(\n        rgba(0, 0, 0, 0.669),\n        rgba(0, 0, 0, 0.101)\n      ),\n        url("https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")'}},s.a.createElement("h1",null,"SARAH ENGLISH")),s.a.createElement("form",{className:"create-event-form",onSubmit:this.onSubmit},s.a.createElement("h3",null,l),s.a.createElement("input",{type:"email",name:"email",placeholder:"email",value:a,onChange:i,required:!0}),s.a.createElement("input",{type:"text",name:"name",placeholder:"name",value:t,onChange:i,required:!0}),s.a.createElement("input",{type:"text",name:"location",placeholder:"location",value:n,onChange:i,required:!0}),s.a.createElement("input",{className:"time",type:"time",name:"time",placeholder:"Enter time",value:r,onChange:i,required:!0}),s.a.createElement("input",{className:"submit-btn",type:"submit",value:"Submit"})))))}}]),t}(n.Component),w=(t(68),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleToggle=function(){n.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},n.handlePassword=function(e){n.setState({password:e.target.value})},n.handleEmail=function(e){n.setState({email:e.target.value})},n.handleLogin=function(e){n.state.email&&n.state.password&&(n.setState({buttonDisabled:!0}),p.a.post("/login",{email:n.state.email,password:n.state.password}).then((function(e){e.data.success?(g.isLoggedIn=!0,g.userID=e.userID,g.username=e.username):(n.resetForm(),alert(e.msg))})).catch((function(e){console.log(e)})))},n.state={email:"",password:"",buttonDisabled:!1,isToggleOn:!1},n}return Object(c.a)(t,[{key:"resetForm",value:function(){this.setState({email:"",password:"",buttonDisabled:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=a.email,n=a.password,r=a.buttonDisabled,l=a.isToggleOn;return g.isLoggedIn?s.a.createElement("div",null,s.a.createElement(C,null)):s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"login-form"},s.a.createElement("form",null,s.a.createElement("h2",null,"Log in"),s.a.createElement(v,{name:"email",email:t,onChange:this.handleEmail}),s.a.createElement(f,{name:"password",handleToggle:this.handleToggle,isToggleOn:l,password:n,onChange:this.handlePassword}),s.a.createElement(b,{disabled:r,onClick:function(){return e.handleLogin()}}))))}}]),t}(n.Component)),O=t(21),x=t.n(O),y=t(38),j=(t(34),function(e){if(e.length>0){var a={score:0,hasLowerCase:!1,hasUpperCase:!1,hasNumber:!1,hasNonAlphaNumeric:!1,isOver8Char:!1,isOver12Char:!1},t=e.split("");for(var n in t.forEach((function(e){/\d/.test(e)&&(a.hasNumber=!0),/[a-z]/.test(e)&&(a.hasLowerCase=!0),/[A-Z]/.test(e)&&(a.hasUpperCase=!0),/[^a-zA-Z0-9]/.test(e)&&(a.hasNonAlphaNumeric=!0),t.length>8&&(a.isOver8Char=!0),t.length>12&&(a.isOver12Char=!0)})),a)!0===a[n]&&(a.score+=1);return a.score<=5?s.a.createElement("p",{className:"password-strength required"},"Use 8 or more characters with a mix of letters, numbers & symbols."):s.a.createElement("p",{className:"password-strength valid"},s.a.createElement("i",{className:"fas fa-check"}))}});var k=function(e){return s.a.createElement("div",{className:"password-container"},s.a.createElement("input",{value:e.password,onChange:e.onChange,autoComplete:"new-password",placeholder:"Password",type:"".concat(e.isToggleOn?"text":"password")}),s.a.createElement("i",{onClick:e.handleToggle,className:"fas ".concat(e.isToggleOn?"fa-eye-slash":"fa-eye")}),""!==e.password?j(e.password):s.a.createElement("p",{className:"valid-placeholder"},"password"))},S=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{className:"signup-btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},"Sign up"))}}]),t}(n.Component),T=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).handleToggle=function(){n.setState((function(e){return{isToggleOn:!e.isToggleOn}}))},n.handlePassword=function(e){n.setState({password:e.target.value})},n.handleUsername=function(e){n.setState({username:e.target.value})},n.handleEmail=function(e){n.setState({email:e.target.value})},n.state={username:"",email:"",password:"",buttonDisabled:!1,isToggleOn:!1},n}return Object(c.a)(t,[{key:"handleSignUp",value:function(){var e=Object(y.a)(x.a.mark((function e(){var a,t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.email){e.next=4;break}return e.abrupt("return");case 4:if(this.state.password){e.next=6;break}return e.abrupt("return");case 6:return this.setState({buttonDisabled:!0}),e.prev=7,e.next=10,fetch("/signup",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({username:this.state.username,email:this.state.email,password:this.state.password})});case 10:return a=e.sent,e.next=13,a.json();case 13:(t=e.sent)&&t.success?(console.log(t.username),g.isLoggedIn=!0,g.username=t.username,g.userID=t.userID):t&&!1===t.success&&(this.resetForm(),alert(t.msg)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),console.log(e.t0),this.resetForm();case 21:case"end":return e.stop()}}),e,this,[[7,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"resetForm",value:function(){this.setState({username:"",email:"",password:"",buttonDisabled:!1})}},{key:"render",value:function(){var e=this,a=this.state,t=(a.username,a.email),n=a.password,r=a.buttonDisabled,l=a.isToggleOn;return s.a.createElement("div",{className:"sign-up-container"},s.a.createElement("div",{className:"sign-up-form"},s.a.createElement("form",null,s.a.createElement("h2",null,"Sign up"),s.a.createElement("input",{className:"user-name",name:"username",onChange:this.handleUsername,type:"text",id:"",placeholder:"First name"}),s.a.createElement(v,{name:"email",email:t,onChange:this.handleEmail}),s.a.createElement(k,{name:"password",handleToggle:this.handleToggle,isToggleOn:l,password:n,onChange:this.handlePassword}),s.a.createElement(S,{disabled:r,onClick:function(){return e.handleSignUp()}}))))}}]),t}(n.Component),D=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("button",{className:"session-btns logout-session-btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},"Log out"))}}]),t}(n.Component),I=(t(70),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={page:0,totalPages:0,data:[]},e.renderEvents=function(a,t){return s.a.createElement("div",{className:"event",key:t},s.a.createElement("div",{className:"container-event-img"},s.a.createElement("a",{href:a.url},s.a.createElement("img",{className:"event-img",src:a.images[0].url,alt:""}))),s.a.createElement("div",{className:"event-info"},s.a.createElement("p",{className:"date-format"},"".concat(e.convertDate(a.dates.start.localDate)," ").concat(e.convertTime(a.dates.start.localTime))),s.a.createElement("h3",null,a.name),s.a.createElement("p",null,a._embedded.venues[0].name)))},e.convertTime=function(e){var a=e.slice(0,2),t=e.slice(3,5);return a>12?a-12+":"+t+" PM":a+":"+t+" AM"},e.convertDate=function(e){var a=new Date(e),t=a.toDateString().split(" ").slice(0,1),n=a.toDateString().split(" ").slice(1,3).join(" "),s=a.toDateString().split(" ").slice(-1);return"".concat(t,", ").concat(n,", ").concat(s)},e.getUnique=function(e,a){return e.map((function(e){return e[a]})).map((function(e,a,t){return t.indexOf(e)===a&&a})).filter((function(a){return e[a]})).map((function(a){return e[a]}))},e.getNextPage=function(){if(e.state.page<e.state.totalPages){var a=e.state.page+1;e.setState({page:a}),e.getNewEvents()}},e.getPreviousPage=function(){if(e.state.page>0){var a=e.state.page-1;e.setState({page:a}),e.getNewEvents()}},e.getNewEvents=function(){p.a.get("http://localhost:8888/getEvents?page=".concat(e.state.page)).then((function(a){e.setState({data:e.getUnique(a.data._embedded.events,"name")})}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://localhost:8888/getEvents?page=".concat(this.state.page)).then((function(a){return e.setState({data:e.getUnique(a.data._embedded.events,"name"),totalPages:a.data.page.totalPages})}))}},{key:"render",value:function(){var e=this,a=this.state.data;return 0!==a.length?s.a.createElement("div",null,s.a.createElement("h2",{className:"whatsup"},"what's ",s.a.createElement("span",{className:"up"},"up!")),s.a.createElement("div",{className:"events"},s.a.createElement("div",{className:"events-banner"},s.a.createElement("section",null,a.map(this.renderEvents)),s.a.createElement("h2",null,"Events"),s.a.createElement("button",{className:"roll-pages",onClick:function(){return e.getPreviousPage()}},"-"),s.a.createElement("button",{className:"roll-pages",onClick:function(){return e.getNextPage()}},"+")))):s.a.createElement("div",null,s.a.createElement("h2",null,"Events"))}}]),t}(n.Component)),L=(t(71),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(N.a,null,s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"home-banner-container"},s.a.createElement("h2",null,"CATCH UP"),s.a.createElement("h2",null,"AND STAY CONNECTED"),s.a.createElement("p",null,"Catch up with friends... Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec"),s.a.createElement("div",{className:"home-banner-wrapper"},s.a.createElement("div",{className:"home-banner"},s.a.createElement("h1",null,"CULTURE CLUB")),s.a.createElement("p",{className:"home-banner-text"},"Catch up with friends... Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est,"))),s.a.createElement("p",{className:"banner-description"},"Catch up with friends... Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),s.a.createElement(I,null))))}}]),t}(n.Component)),A=t(2),P=(t(72),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){p()({method:"post",url:"/isLoggedIn",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){(e=e.data)&&e.success&&(g.isLoggedIn=!0,g.userID=e.userID,g.username=e.username)})).catch((function(e){console.log(e)}))}},{key:"doLogout",value:function(){p()({method:"post",url:"/logout",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){(e=e.data)&&e.success&&(g.isLoggedIn=!1,g.userID="",g.username="")})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return g.isLoggedIn?s.a.createElement(N.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("div",{className:"logo-container"},s.a.createElement("span",null,"C"),s.a.createElement("h1",{className:"site-name"},"ulture club")),s.a.createElement("ul",{className:"menu"},s.a.createElement(D,{onClick:function(){return e.doLogout()}}),s.a.createElement("span",{className:"menu-division"},"|"),s.a.createElement("li",null,s.a.createElement(N.b,{className:"session-btns signup-session-btn",to:"/profile"},"profile")),s.a.createElement(N.b,{className:"home-session-btn hvr-radial-out",exact:!0,to:"/"},s.a.createElement("i",{className:"fas fa-bars"})))),s.a.createElement("div",{className:"content"},s.a.createElement(A.a,{exact:!0,path:"/",component:L}),s.a.createElement(A.a,{path:"/login",component:w}),s.a.createElement(A.a,{path:"/profile",component:C}))))):s.a.createElement(N.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("div",{className:"logo-container"},s.a.createElement("span",null,"C"),s.a.createElement("h1",{className:"site-name"},"ulture lub")),s.a.createElement("ul",{className:"menu"},s.a.createElement("li",null,s.a.createElement(N.b,{className:"session-btns login-session-btn",to:"/login"},"login")),s.a.createElement("span",{className:"menu-division"},"|"),s.a.createElement("li",null,s.a.createElement(N.b,{className:"session-btns signup-session-btn",to:"/signup"},"signup")),s.a.createElement("li",null,s.a.createElement(N.b,{className:"home-session-btn hvr-radial-out",exact:!0,to:"/"},s.a.createElement("i",{className:"fas fa-bars"}))))),s.a.createElement("div",{className:"content"},s.a.createElement(A.a,{exact:!0,path:"/",component:L}),s.a.createElement(A.a,{path:"/login",component:w}),s.a.createElement(A.a,{path:"/signup",component:T}),s.a.createElement(A.a,{path:"/logout",component:w}),s.a.createElement(A.a,{path:"/profile",component:w})))))}}]),t}(n.Component)),U=Object(d.a)(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.03f1ca24.chunk.js.map