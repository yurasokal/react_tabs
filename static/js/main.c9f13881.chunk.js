(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),l=n(2),o=n.n(l),r=n(3),s=n(4),i=n(6),u=n(5),b=(n(12),function(t){var e=t.tabs,n=t.onTabSelected;return c.a.createElement("ul",{className:"tabs"},e.map((function(t){return c.a.createElement("li",{key:t.id,className:"tabs__list"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return n(t)}},t.title))})))}),m=(n(13),[{id:"tab-1",title:"Home",content:"Some text 1"},{id:"tab-2",title:"Profile",content:"Some text 2"},{id:"tab-3",title:"Contact",content:"Some text 3"}]),d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:m[0]},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is ".concat(t.title)),c.a.createElement(b,{tabs:m,onTabSelected:this.onTabSelected}),c.a.createElement("p",null,t.content))}}]),n}(c.a.Component);o.a.render(c.a.createElement(d,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c9f13881.chunk.js.map