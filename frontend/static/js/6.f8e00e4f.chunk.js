(this.webpackJsonpreact_dipenit=this.webpackJsonpreact_dipenit||[]).push([[6],{308:function(e,t,a){e.exports=a.p+"static/media/dashboard_image.51bc8de0.jpg"},31:function(e,t,a){"use strict";t.a={url:"http://localhost:10019"}},311:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(41),l=a(42),o=a(48),r=a(47),c=a(0),s=a.n(c),i=a(43),d=a.n(i),m=a(11),u=a(308),h=a.n(u),b=a(46),E=a.n(b),p=a(31),w=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={notes:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.setItem("note_edit_id",""),localStorage.setItem("user_id_forNotes",""),d.a.get(p.a.url+"/notes",{headers:{authorization:"".concat(localStorage.token)}}).then((function(t){e.setState({notes:t.data})}))}},{key:"delete",value:function(e){d.a.delete(p.a.url+"/notes/".concat(e)).then((function(e){alert("Note deleted successfully")})).catch((function(e){})),window.location.reload(!1)}},{key:"edit",value:function(e){localStorage.setItem("note_edit_id","".concat(e)),window.location.href="/new-notes"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{backgroundColor:"black",backgroundImage:"url(".concat(h.a,")"),height:"657px",backgroundSize:"cover",backgroundAttachment:"fixed"}},s.a.createElement("div",{style:{paddingTop:"54px"}},s.a.createElement("h3",{style:{color:"#ffe20f",position:"fixed",left:"50px"}},"Welcome to Dashboard"),s.a.createElement(m.b,{to:"/user-photo-upload",className:"btn btn-info",style:{position:"fixed",right:"408px",color:"white",backgroundColor:"#37bd6c"}},"My Profile"),s.a.createElement(m.b,{to:"/new-notes",className:"btn btn-outline-primary",style:{position:"fixed",right:"305px",backgroundColor:"#e0b34d",color:"white"}},"Add Note"),s.a.createElement(m.b,{to:"/allnotes",className:"btn btn-outline-primary",style:{position:"fixed",right:"205px",backgroundColor:"#e0b34d",color:"white"}},"All Notes"),s.a.createElement(m.b,{to:"/users",className:"btn btn-outline-primary",style:{position:"fixed",right:"130px",backgroundColor:"#e0b34d",color:"white"}},"Users"),s.a.createElement(m.b,{to:"/",className:"btn btn-danger",style:{position:"fixed",right:"34px",color:"white"}},"Sign Out")),s.a.createElement("div",{className:"container",style:{width:"900px"}},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),this.state.notes.length>0?s.a.createElement("div",{className:"row",style:{overflow:"scroll",height:480,overflowX:"hidden"}},s.a.createElement("div",{style:{color:"rgb(224, 179, 77)"}},"Note List"),this.state.notes.map((function(t){return s.a.createElement("div",{className:"col col-12",key:t._id},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10"},s.a.createElement("h3",null,t.title)),s.a.createElement("div",{className:"col-2"},"\xa0\xa0\xa0",s.a.createElement("button",{onClick:function(){return e.edit(t._id)},className:"btn btn-sm btn-outline-primary"},"E"),"\xa0\xa0\xa0",s.a.createElement("button",{onClick:function(){return e.delete(t._id)},className:"btn btn-sm btn-outline-danger"},"x")))),s.a.createElement("div",{className:"row card-body "},s.a.createElement("div",{className:"col-6"},s.a.createElement("p",null,s.a.createElement("b",null,"Body: "),t.body),s.a.createElement("p",null,s.a.createElement("b",null,"Note Color: "),t.noteColor),s.a.createElement("div",{className:"border border-dark",style:{backgroundColor:t.noteColor,height:70,width:70,borderRadius:50}})),s.a.createElement("div",{className:"col-6"},""===t.image?s.a.createElement("img",{src:E.a,style:{height:120,width:120,float:"right"}}):s.a.createElement("img",{src:t.image,style:{height:120,width:120,float:"right"}})))),s.a.createElement("br",null))}))):s.a.createElement("p",null,"No Data to display")))}}]),a}(c.Component)},46:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9mZmZfX19nZ2dcXFxiYmKysrL29vbAwMD7+/tzc3NZWVmTk5NdXV34+PjOzs58fHzg4OCioqKGhobY2Nju7u6cnJypqamUlJTm5ubHx8eMjIxtbW2xsbGlpaW8vLyDg4NPT09JSUm0hXY6AAAOgklEQVR4nO1dCZurLA9VhFqhuFWtVrvM9/9/5JcEu8zMbcdt1HtfzvPM0oKYYyBsITqOhYWFhYWFhYWFhYWFhYWFxRvkx3O564ryfMyXFrgnkj3njImuYIzzfba00D0QlEq4AK8rMLNQZbC04F3hS+aSzN1B+Zn0lxa9GwKJAjMl687tsJYKH4qQf4cWSxSWF1Wvi6pCuZ7Lyl+SaVJkCjUY9b4u0nCd+hvMTSw8l/cnCBS564l4cnkmR648VxSDLi2E66n194sXaIV8mJg5h+p9mVie6QGKEHLgtWCEB6p/TtQg5VCLWMK1+0ml+Q3shcvSgdem7F9nWPzzDNPla2meRD8gi91RDN04++kWyW91KPm2Flzxn4DDyzEM3R/vwLmot9OzTGqu8f400fkBgxkWokPpKIHgvE4m5ZfX7YSvgwQwuBzaa29Up/Lb6WQ9oR63WtAslSnF2U9VSPPd0DlQUP/cChhXNNOCMazeTkWwUOahyUNU+cGPGHOrn0sP/Co6SFOl1EQDoJqshyqnrfjjkJh1El5PUdgO520s7jeh/X1UMdZVvRtf0gE06Knz+IImxxnmaS4/jC2GZuyDjePv4kKyjV0VaFCDm0kEmh4b1GIzsgzteqx21rIElh+30WPFMXBq5rl61PMPyCivZRXTr7E7VkX4+Ia6sTHP/whmhk/Wr45E7ppxlZYPilvueqMEjLHE8bJNg1jQMjp0XU9dBNgJd8T6nK+gFa7FzERgOdn1hAvq6tE5b6AlquHNKMJKupauvhAew1EaTrEfT71CEYeszhoc2GhjPB2uwuU4cIz0pwU5qKZseK+P62aTjPymAAijUVkb5rLzp69HyDhmRWJynLBCZX4E7ZAfH1+nbIypkcDwNIFwkyDHMRoX+Fs8ugsiPnQF2jBciyl9WgFQx+dv/yGGzoHmhIxfnkeRa2MY+rkfDh5lJUXjyvTz8sx6GFbHcy1dXOURrqzPx4Hd7Lensw6GQVQ0SrPHWqFgWjVFNMWUZQ0Mq1SY1bEvYEqk4wdMyzNMaqLneTBqZtqsNzIYP7fLk6MXdpdmWJmlZA8aoJblZhtlWRZtN6XUnJnVa1WP0+PCDE9cmKVWkUafJwB+BHXXJPJRg4pFGVaSm/ZW/3m1KDMV2OVyhBqXZBiR8RS8fL2/kJekZDHA/eaGBRmaQRa/vtdPdeXYHocv5y3HMFUdN09w2wcoDp3DLMaw4J7r6bjLBlgea8jLB+6yLMWQ9gJ4V6+Tkg9fn1+IoVlv777Zcab8g1YFl2GImx2e6qOTA67PD9qCWIRh6OG6bb92VWi8KPw541cswBB3E+C6vqtD7UW9pxtL6BCXbvurgxSv+vf8S+iwwVXp/lOGBB6MaP4GHeIt9RDLf9BDbzczQxxt91eFg8qH8Rvve+X8DPGOzyu2PYB7eYPuNy9D3O4a7CPs9t8nmZ0hbVcNU2G7IdvTnM7OcIfzvcFeXzhX7OkhMzfDQMGUafhmzhkmUqrf85mbIVXS4ctnSf9qOjdD3OtyB9/Pcdze+3lzM4zdcScm0Ie2327gzAxDHM+Mcf7Y4rim15B2ZoaVGjQkfQAHp6rX2uLMDNHQsDEuVD7ra2pmZngZ7bzR9D3cNTPD0yi3AUTc13VgZobjDy7tRc/DDDMzLEY74NR9D+hZhu+xTC3tN6iZmeEBGI60NKKnm5rtLd6jf4+vJ+jx9Zp7/P6Dri/oP+ybmSGqgA1dw0AcWd9KMPfsSU4we+on7xIz4DGu797qZ8AR97wR0ydox97KVzFCPsrtGh3Leb89ndlXE2vh9VrTD8MnZ0xc1+876ltmRbhzPQvoSOrddva72GB2hrSo23ng5ju57+fBrV7GA5aT59+3wElw141OUF8A1dRvGdKpmL5ObvMz9HGjs+MtgyAPfT/I22pKB376jvnmYxiAqPQP2kPdURPADy5rdXjSQ+zwfAyhshmGIbmz/TQ4NebFd/z8dmHFv5yk6IYFGDpH1SHyGuiOroKG2OaUGCWq/5h2JoZgLHwyGH4Iv66ubDR6fAV+W3UhDZ7AzaJg24MPPmYOMAOYG6cUsqH1gUe+TpiHIRAJc9ShT6rJoeOO+Yl4E8UwNHxCEp0eRkhN0Ec+RPDQSLdpciyrH8VZGBpxscKhdI4fRI3UsdoQc8MC+Rn6DikzpBTMTD/OxRVNLI4BldWL4jwMUaKQGILGwDQGGyUb1904YWBsJf6Evun5jF7xV2D+wiO5KOlKtQnwaYS5f2/Sa2FIukGRUWEkY5CivwL67pFqQ/9WNcObjaGH0uowLDwX6miBygR+/vpqqVFKeGeIn2uNQl/xu+8Mg2eGQbhDDbLSMTUaOKIGu5KctR2SiMaS+EHJgaJsjo4hbviF99ZoDAp8H0YC8rleHRiGptHCeDXvVlNns6W3xuXcLWeqpBQNK3LnwdBkRPUElCdw8l2DT0Kltwfk3xl20+Jc/WFIHWE7/mrVcFEecJTuwQ+op8QnENwbGY3y/AOTnutJdXHaWmuuDmGs09HaLHqiJGnowAhj6Z/XNZKUmQzNH9K7WtNlTwUFqTKHnpQ8fSWRnExkXVcMPohAWPpkVxJzcTuKdz1vs6SqqiTbHq4ub6Mp83jc6bWlGcK0to1aRdWVKwRnt+OIQsnh54EMlmfoONmO6T+FmhOa7caHDV4DQwxIuAfFiSeaAtS5nyQ04DoYAoJss4s9jdWUay8uN9lEcYtWw9DAz8HS5JPGLFoZw1+AZfgeq4r88QInNjz2NK1BizVG23vGWYxxjlhVBJ4XGCfjqqIovcC4KEp0OmDdge5zPeL0gwnrs/JA9+jBM+ZtA3Fvx4G5Ifts5v0BW959q2wR4IbcqKiC6Jm+aluDp6z6eb5/Be14rfeFDEWPnbwXwE1rb9gx8hmwxRPgg09ZtaBDvQM2vebAkWQbbSZSeoXPGsffFFpETxAT8Eqvb9qvrePP97hnzK5TlEWBs4U6r4ljfjbR6aZ5eRLuslCsu/0lWUNIYT+57M1apK6nCuF8aiM6MaW6vJ/hdyGUYm30qQnnrlW8AmqfIdTEgfCj+B5VrvNbDX8DrQxMxdMPJqtTzBRbHlorFp9+KbpxmETH7dI4RsmogaiFhYWFhYWFhYWFhYWFxX8AjxdQvnkV5ci3VPZCENLN/nDLT990F2mjeLvPsVcfL5wisw917SXlGGwUBiNOPtTXbdpCPb+xEKTtuC61YV77oqFavDqvnKlpVtK7CcTRCyFR38L6pOx5970WXU+eon+RYfaGoYzn20/cxvEGGX7byB7D0DyulwznfxNiMLUOzbb4neGxlrJ+3j6s0vMGf6eRc4plWTn+IZaFWb7MiljGuzZ3VMvrxbmkKe11bPcy/vxGkkfmQ2pS8jQ9B21CTbuyUZoeH7X0KQEYbvMCisyfGWY7KXdvuUI7bFxX+HeGueSCMcbjx45MpviVfhex4kKwrFHaFQzvdFKCcSYURa8slBBc7fYMfUHCWAmtxfNO66bNXDvOmRtn9ovCKO4XyMo1JaDpe7TDywckwBV7Yih2QmkQLnkwPECRmql3keA3oPtYiPLOUApXlDvxvIuVcTwlmClgddhgkAd93nj0VrvkQ4jzpWAUVGGrXLa77JRxOaqZkJszewpbUoE0KWTGr3LI69Dd4MNzgnNh4s7wkZBRdArmnU6NcL3gxhBuKc6bxuVvtnORYcKxCMPwwl08Epg/e3S0DLnLMgpFoo/4B01BVkhsGzu6nTS+WAeGDEHEJsToNY93MyYmcynQoWlPl4BBkZSAEhYCY6Rc2MOWQsKJEjBsIYZrwsOKHjlEGYbwf0Yv7mSvjQUw3Dglc2XLMBbGoWrLHsbszhCdUOBxCIdEuHVYQXLFi0AtdCrbJ4YnZpw4xVe3gmRPRCKFzndkPdr0pBZs+5nhPUFfqJZSxT4wrD3E8CZEyt5EryeGIJS+7JBhIFqvNjyE/JUhcW5LrdrCszNu3uBjhW8EZW+wiEIIud9f996zg1abGeuA47o6D26RaSBBQ8J3huYKj10etvTI8dkQwwgeOt5E0pXvGGJ99mJsBuGNYa68+wtb7zr8xjC8KqZEuUcdYrChB8MdyKs+8KjF/27mNLgqTZkpYM+J6S0UTGeH94orsdt/Z1hD8WwHVzwz1CgNMTxCfaJ7qI/XO6eGoQnegLW0aePJAp/7sOnO8PqV4VkLfLNRyuB2n2spyLNpT8qaBxU4B06ZD4x0mMOn1Bg3SNhjAjW3Z4YnuGWFD4NROzQulxfBypYhGL8Yz2c+YjS8ZliplmFJdhVLeAQOes1QmhBRptk35k3EJ2K4pboEPWdU3apCfMtMDDFMm2eeIrR9JFpSwjPD2G0TDENBzmhX0ijdEi0yln7avtl9axk6B+0RQyhaF0lVcO/Rfl4zjAWKc+QeyraBP8WxNL2Fz8GEh2Gp1N1iXE1m5RmG0Ig8U++uAm3I8Xs7hOqZ4guIPGNpXFZXeaqpZZuHCnqo4Wkq/vHaa+TGEIP/o6VBpxyBL7t76qrv/eE3hhd4iLJRrX9/DM1Cq5raIfWO+C5ffR/VXJTXZjaNBhqGNoMfyNpQwuHBEM3aERNkmwA6vCqumfFlMgxzBgMQV799TzpMVsz9og/+QSY3klCOip/Mb0SzJ5hDkaX5UNRpfHAMDpViM0+rdq5z8BR0154xVlGDac++BWf8oqiUMq6PB6XavvJwS4AiNx9Ps6cDmCBVQoLAEdNHcoJ8rd7N7Cm/4qXeOxe18Ba9w3kcGM+z7JPSA3Na1EQPMB9ufzCvTwdK4d/AHFa+ByervpTTFkyZHSrw1kR9KoVO3Jrb3Ir36Qo8PWxiVMDnsJXbZMAyq9+fG9Ck3JFMYpec8BfuqZ3lWMtr3b/hDMO63aHoG+fxLwLMJmBOAiP9+N91nIgKGEIVa3YSt7CwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwWBv+D53G2YT70DOaAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=6.f8e00e4f.chunk.js.map