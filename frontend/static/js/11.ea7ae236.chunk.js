(this.webpackJsonpreact_dipenit=this.webpackJsonpreact_dipenit||[]).push([[11],{31:function(e,t,a){"use strict";t.a={url:"http://localhost:10019"}},313:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(41),l=a(42),r=a(48),c=a(47),s=a(0),o=a.n(s),i=a(43),m=a.n(i),u=a(11),d=a(31),b=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get(d.a.url+"/users",{headers:{authorization:"".concat(localStorage.token)}}).then((function(t){e.setState({users:t.data.userList})}))}},{key:"viewNote",value:function(e){localStorage.setItem("user_id_forNotes","".concat(e))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(u.b,{to:"/dashboard",className:"btn btn-outline-primary",style:{position:"fixed",right:"150px"}},"Go to Dashboard"),o.a.createElement(u.b,{to:"/",className:"btn btn-danger",style:{position:"fixed",right:"34px"}},"Sign Out")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h4",null,"Users List"),o.a.createElement("br",null),o.a.createElement("div",{className:"row"},this.state.users.map((function(t){return o.a.createElement("div",{className:"col col-9",key:t._id},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header",style:{backgroundColor:"#EAD0FF"}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-9"},o.a.createElement("h3",null,t.firstname," ",t.lastname," ")),o.a.createElement("div",{className:"col-3"},o.a.createElement(u.b,{to:"/allnotes",onClick:function(){return e.viewNote(t._id)},className:"btn btn-info btn-sm",style:{float:"right"}},"View Notes")))))),o.a.createElement("div",{className:"row card-body "},o.a.createElement("div",{className:"col-6"},o.a.createElement("p",null,o.a.createElement("b",null,"Email: "),t.email)),o.a.createElement("div",{className:"col-6"},o.a.createElement("p",null,o.a.createElement("b",null," Mobile Number: "),t.mobileNumber)))),o.a.createElement("br",null))}))))}}]),a}(s.Component)}}]);
//# sourceMappingURL=11.ea7ae236.chunk.js.map