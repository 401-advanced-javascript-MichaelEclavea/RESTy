(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(21),s=n.n(i),o=n(7),l=n(8),j=n(14),h=n(10),d=n(9),u=n(11),b=n(2),O=(n(30),n(31),(new Date).getHours()),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={seconds:0},e}return Object(l.a)(n,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"render",value:function(){return O<12?Object(c.jsxs)("div",{id:"header-container",children:[Object(c.jsx)("h1",{children:"Good Morning!"}),Object(c.jsxs)("h2",{children:[(new Date).toLocaleDateString()," ",(new Date).toLocaleTimeString()]})]}):O<18?Object(c.jsx)("div",{children:Object(c.jsxs)("div",{id:"header-container",children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/form",children:"Search-API"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/help",children:"Help"})}),Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:"/history",children:"History"})})]})}),Object(c.jsx)("h1",{children:"Good Afternoon!"}),Object(c.jsxs)("h2",{children:[(new Date).toLocaleDateString()," ",(new Date).toLocaleTimeString()]})]})}):O<24&&this.state?Object(c.jsxs)("div",{id:"header-container",children:[Object(c.jsx)("h1",{children:"Good Evening!"}),Object(c.jsxs)("h2",{children:[(new Date).toLocaleDateString()," ",(new Date).toLocaleTimeString()]})]}):void 0}}]),n}(a.a.Component);n(37);var v=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("h3",{style:{textAlign:"center"},children:" \xa9 RESTy API"})})},f=n(19),p=n.n(f),m=n(23),g=(n(39),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handleForm=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!t){e.next=14;break}return n=t.target.url.value,localStorage.setItem("url",JSON.stringify(t.target.url.value)),localStorage.setItem("method",JSON.stringify(c.state.method)),e.next=7,fetch(n);case 7:return r=e.sent,e.next=10,r.json();case 10:a=e.sent,c.props.results(a),e.next=15;break;case 14:console.log(t);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.handleClick=function(e){var t=e.target.value;c.setState({method:t})},c.state={url:"",method:"",data:{}},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"form",children:[Object(c.jsx)("form",{onSubmit:this.handleForm,children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("label",{style:{color:"black"},children:["URL: ",this.state.method]}),Object(c.jsx)("input",{name:"url",type:"text"}),Object(c.jsx)("button",{id:"go",type:"submit",children:"Go"})]})}),Object(c.jsx)("div",{id:"btn-container"}),Object(c.jsx)("button",{className:"btn",onClick:this.handleClick,value:"GET",children:"GET"}),Object(c.jsx)("button",{className:"btn",onClick:this.handleClick,value:"POST",disabled:"true",children:"POST"}),Object(c.jsx)("button",{className:"btn",onClick:this.handleClick,value:"PUT",disabled:"true",children:"PUT"}),Object(c.jsx)("button",{className:"btn",onClick:this.handleClick,value:"DELETE",disabled:"true",children:"DELETE"})]})}}]),n}(a.a.Component)),y=n(24),k=n.n(y),S=(n(40),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.results;return console.log(e),Object(c.jsx)("div",{id:"json-container",children:Object(c.jsx)(k.a,{id:"json-pretty",data:e})})}}]),n}(a.a.Component)),T=(n(41),[]);var w=function(){var e=JSON.parse(localStorage.getItem("url")),t=JSON.parse(localStorage.getItem("method")),n="".concat(t," = ").concat(e," ");return T.push(n),console.log("array",T),Object(c.jsxs)("div",{id:"savedSearch",children:[Object(c.jsx)("h5",{children:"Search Results History"}),Object(c.jsx)("ul",{children:T.map((function(e,t){return Object(c.jsx)("li",{children:e},t)}))})]})};n(42);var D=function(){return Object(c.jsx)("h1",{id:"about",children:"Here is my About Page "})};n(43);var C=function(){return Object(c.jsxs)("div",{id:"help-box",children:[Object(c.jsx)("h2",{id:"one",children:"Welcome to the help page."}),Object(c.jsx)("p",{id:"two",children:"This site is to help you search an API and pull back the data in JSON format. The data will be displayed in the text area. To start your search, click on the (searchAPI) link in the navbar. A form will pull up onto the page. Just enter the url and hit go. To view the history of your searches click the history tab."})]})},E=n(44);var A=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("h2",{style:{textAlign:"center",marginTop:"10px"},children:["Fortune: ",E[1]]})})},I=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).state={data:null},c.handleResults=c.handleResults.bind(Object(j.a)(c)),c}return Object(l.a)(n,[{key:"handleResults",value:function(e){this.setState({data:e}),console.log("original data!!",this.state.data)}},{key:"render",value:function(){return Object(c.jsx)(u.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{}),Object(c.jsx)(g,{results:this.handleResults}),Object(c.jsx)(A,{}),Object(c.jsx)(S,{results:this.state.data}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{path:"/about",exact:!0,component:D}),Object(c.jsx)(b.a,{path:"/help",exact:!0,component:C}),Object(c.jsx)(b.a,{path:"/history",exact:!0,component:w})]}),Object(c.jsx)(v,{})]})})}}]),n}(a.a.Component);s.a.render(Object(c.jsx)("div",{children:Object(c.jsx)(I,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.3616489a.chunk.js.map