(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),l=(n(12),n(3)),o=n(4),u=n(6),s=n(5),b=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={activeTitle:"Tab 1"},t.changeHandler=function(e){t.setState({activeTitle:e})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.activeTitle,n=this.props.tabs,a=n.find((function(t){return t.title===e}));return r.a.createElement("div",null,r.a.createElement("div",null,n.map((function(e){return r.a.createElement("button",{type:"button",key:e.title,onClick:function(){t.changeHandler(e.title)}},e.title)}))),r.a.createElement("p",null,a.content))}}]),n}(r.a.PureComponent),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{tabs:m}))};i.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fc72ef0b.chunk.js.map