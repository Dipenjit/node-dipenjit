(this.webpackJsonpreact_dipenit=this.webpackJsonpreact_dipenit||[]).push([[5],{126:function(e,t,a){e.exports=a.p+"static/media/backgroung.b3de6fee.jpg"},309:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(40),l=a(41),r=a(42),o=a(50),s=a(48),i=a(47),c=a(0),m=a.n(c),u=a(11),d=a(126),b=a.n(d),p=a(31),h=function(e){Object(s.a)(c,e);var t=Object(i.a)(c);function c(e){var a;return Object(l.a)(this,c),(a=t.call(this,e)).state={email:"",password:"",users:[],validation:{email:null,password:null}},a.history=void 0,a.formInputChange=a.formInputChange.bind(Object(o.a)(a)),a.formSubmit=a.formSubmit.bind(Object(o.a)(a)),a}return Object(r.a)(c,[{key:"componentWillMount",value:function(){localStorage.token=null,localStorage.setItem("token","")}},{key:"formInputChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value));var t=this.state.validation;e.target.value?t[e.target.name]=null:t[e.target.name]="Can't be empty",this.setState({validation:t})}},{key:"formSubmit",value:function(e){e.preventDefault();var t=this.state.users;t.push({email:this.state.email,password:this.state.password}),this.setState({users:t,email:"",password:""}),console.log(t);var n=a(43);n.post(p.a.url+"/loginController/login",{email:t[0].email,password:t[0].password}).then((function(e){if(null!==e.data.token&&""!==e.data.token){var t="Bearer,".concat(e.data.token);localStorage.setItem("token","Bearer,".concat(e.data.token)),n.defaults.headers.common.authorization=t,window.location.href="/dashboard"}else e.data.token=null,console.log(e.data),window.location.href="/"}))}},{key:"render",value:function(){return m.a.createElement("div",{style:{backgroundColor:"#191717",backgroundImage:"url(".concat(b.a,")"),height:"657px",backgroundSize:"cover"}},m.a.createElement("div",{className:"container"},m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("div",{className:"container col-5 mt-5"},m.a.createElement("form",{onSubmit:this.formSubmit},m.a.createElement("div",{className:"form-row mb-3"},m.a.createElement("input",{type:"text",name:"email",placeholder:"Email",className:"form-control",value:this.state.email,onChange:this.formInputChange}),this.state.validation.email?m.a.createElement("span",{style:{color:"red"}},this.state.validation.email):null),m.a.createElement("div",{className:"form-row mb-3"},m.a.createElement("input",{type:"text",name:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.formInputChange}),this.state.validation.password?m.a.createElement("span",{style:{color:"red"}},this.state.validation.password):null),m.a.createElement("div",{className:"form-row mb-3"},m.a.createElement("button",{type:"submit",className:"btn btn-success"},"Sign In"),m.a.createElement(u.b,{style:{color:"#00ff95"},to:"/registration",className:"ml-5"},"Not registered "))))))}}]),c}(c.Component)},31:function(e,t,a){"use strict";t.a={url:"http://localhost:10019"}},40:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=5.1fd10cc1.chunk.js.map