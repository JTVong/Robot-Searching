(this["webpackJsonprobo-project"]=this["webpackJsonprobo-project"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(7),o=r.n(c),s=(r(12),r(13),r(2)),a=r(3),h=r(5),i=r(4),l=(r(14),r(0)),u=function(e){e.robots;throw new Error("Oh! NOOOO")};var b=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa1",children:Object(l.jsx)("input",{className:"blue tc f3 ph4 pv1 b--transparent bg-lightest-blue br4 outline-0 ",type:"search",placeholder:"SearchRobots",onChange:t})})};r(16);var j=function(e){return Object(l.jsx)("div",{style:{overflow:"scroll",border:"15px solid transparent",height:"80vh"},children:e.children})},d=function(e){Object(h.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this)).state={hasError:!1},n}return Object(a.a)(r,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Oops! that's not good ;( "}):this.props.children}}]),r}(n.Component),p=function(e){Object(h.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,r=e.searchfield,n=t.filter((function(e){return e.name.toLowerCase().substr(0,r.length)===r.toLowerCase()}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsxs)("div",{className:"vh-20",children:[Object(l.jsx)("h1",{children:"Robo - Friends"}),Object(l.jsx)(b,{searchChange:this.onSearchChange})]}),Object(l.jsx)(j,{children:Object(l.jsx)(d,{children:Object(l.jsx)(u,{robots:n})})})]}):Object(l.jsx)("h1",{className:"tc light-purple",children:"Loading ..."})}}]),r}(n.Component);o.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.11913f22.chunk.js.map