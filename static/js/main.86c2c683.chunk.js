(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),c=n.n(r),s=(n(14),n(2)),i=n.n(s),o=n(3),u=n(6),l=n(7),h=n(9),p=n(8),m=(n(16),n(0)),j=function(e){var t=e.id,n=e.name,a=e.height,r=e.weight,c=e.experience;return Object(m.jsxs)("div",{className:"tc dib bg-light-blue br3 pa2 ma2 grow bw2 shadow-5 link hover-bg-light-green",children:[Object(m.jsx)("img",{width:"200rem",alt:"pokemon ".concat(t," : ").concat(n),src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png")}),Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("h3",{className:"f3 ma1 tc",children:n}),Object(m.jsxs)("p",{className:"ma1 tr",children:["height: ",a]}),Object(m.jsxs)("p",{className:"ma1 tr",children:["weight: ",r]}),Object(m.jsxs)("p",{className:"ma1 tr",children:["experience: ",c]})]})]})},b=function(e){var t=e.pokemons;return Object(m.jsx)("div",{className:"flex flex-wrap justify-center items-center",children:t.map((function(e,n){return Object(m.jsx)(j,{id:t[n].id,name:t[n].name,height:t[n].height,weight:t[n].weight,experience:t[n].base_experience},t[n].id)}))})},f=function(e){var t=e.searchChange;return Object(m.jsx)("div",{className:"pa2 w-100",children:Object(m.jsx)("input",{className:"pa3 ba b-grey bg-lightest-blue w-50 tc",type:"search",placeholder:"search pokemon",onChange:t})})},d=(n(18),function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"containerChild",children:e.children})})}),g=n.p+"static/media/logo.30ae2236.jpg",v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemonDetail:[],searchfield:""},e}return Object(l.a)(n,[{key:"getData",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://pokeapi.co/api/v2/pokemon","?limit=115",e.next=5,fetch("https://pokeapi.co/api/v2/pokemon?limit=115");case 5:return t=e.sent,e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n.results);case 12:e.prev=12,e.t0=e.catch(0),console.log("error in getData",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getData2",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all(t.map(function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.name,n=t.url,e.next=3,fetch(n);case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log("ooooooops",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"run",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getData();case 2:return t=e.sent,e.next=5,this.getData2(t);case 5:n=e.sent,this.setState({pokemonDetail:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.run()}},{key:"render",value:function(){var e=this.state,t=e.pokemonDetail,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(m.jsxs)("div",{className:"tc",children:[Object(m.jsx)("div",{className:"bg-yellow",children:Object(m.jsx)("img",{className:"w-10 ma0",alt:"pokemon",src:g})}),Object(m.jsx)(f,{searchChange:this.onSearchChange}),Object(m.jsx)(d,{children:Object(m.jsx)(b,{className:"w-100",pokemons:a})})]}):Object(m.jsx)("h1",{className:"f1 tc vc",children:"Loading"})}}]),n}(a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(19);c.a.render(Object(m.jsx)(v,{}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.86c2c683.chunk.js.map