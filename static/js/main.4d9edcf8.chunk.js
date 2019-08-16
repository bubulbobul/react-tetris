(window["webpackJsonpreact-tetris"]=window["webpackJsonpreact-tetris"]||[]).push([[0],{15:function(n,e,t){n.exports=t(26)},20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(8),c=t.n(a),i=(t(20),t(1)),u=function(){return Array.from(Array(20),function(){return new Array(12).fill([0,"clear"])})},l=function(n,e,t){for(var r=t.x,o=t.y,a=0;a<n.tetromino.length;a+=1)for(var c=0;c<n.tetromino[a].length;c+=1)if(0!==n.tetromino[a][c]&&(!e[a+n.pos.y+o]||!e[a+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[a+n.pos.y+o][c+n.pos.x+r][1]))return!0},f=t(2),s=t(3),d=t(9),p=t.n(d);function b(){var n=Object(f.a)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  margin: 0 auto;\n  max-width: 900px;\n\n  aside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(f.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: url(",") #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  background-position: center;\n"]);return m=function(){return n},n}var v=s.a.div(m(),p.a),g=s.a.div(b());var O=t(12),h={0:{shape:[[0]],color:"0,0,0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},x=function(){var n="IJLOSTZ"[Math.floor(Math.random()*"IJLOSTZ".length)];return h[n]};function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}var j=function(){var n=Object(r.useState)({pos:{x:0,y:0},tetromino:h[0].shape,collided:!1}),e=Object(i.a)(n,2),t=e[0],o=e[1],a=function(n,e){var t=n.map(function(e,t){return n.map(function(n){return n[t]})});return e>0?t.map(function(n){return n.reverse()}):t.reverse()},c=Object(r.useCallback)(function(){o({pos:{x:4,y:0},tetromino:x().shape,collided:!1})},[]);return[t,function(n){var e=n.x,t=n.y,r=n.collided;o(function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(t,!0).forEach(function(e){Object(O.a)(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},n,{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:r})})},c,function(n,e){var r=JSON.parse(JSON.stringify(t));r.tetromino=a(r.tetromino,e);for(var c=r.pos.x,i=1;l(r,n,{x:0,y:0});)if(r.pos.x+=i,(i=-(i+(i>0?1:-1)))>r.tetromino[0].length)return a(r.tetromino,-e),void(r.pos.x=c);o(r)}]},w=function(n,e){var t=Object(r.useState)(u()),o=Object(i.a)(t,2),a=o[0],c=o[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),s=f[0],d=f[1];return Object(r.useEffect)(function(){d(0);var t=function(t){var r=t.map(function(n){return n.map(function(n){return"clear"===n[1]?[0,"clear"]:n})});return n.tetromino.forEach(function(e,t){e.forEach(function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])})}),n.collided?(e(),function(n){return n.reduce(function(e,t){return-1===t.findIndex(function(n){return 0===n[0]})?(d(function(n){return n+1}),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)},[])}(r)):r};c(function(n){return t(n)})},[n,e]),[a,c,s]};function E(){var n=Object(f.a)(["\n  display: grid;\n  grid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n  );\n  grid-template-columns: repeat(",", 1fr);\n  grid-gap: 1px;\n  border: 2px solid #333;\n  width: 100%;\n  max-width: 25vw;\n  background: #111;\n"]);return E=function(){return n},n}var k=s.a.div(E(),function(n){return n.height},function(n){return n.width},function(n){return n.width});function S(){var n=Object(f.a)(["\n  width: auto;\n  background: rgba(",", 0.8);\n  border: ",";\n  border-bottom-color: rgba(",", 0.1);\n  border-right-color: rgba(",", 1);\n  border-top-color: rgba(",", 1);\n  border-left-color: rgba(",", 0.3);\n"]);return S=function(){return n},n}var I=s.a.div(S(),function(n){return n.color},function(n){return 0===n.type?"0px solid":"4px solid"},function(n){return n.color},function(n){return n.color},function(n){return n.color},function(n){return n.color}),J=o.a.memo(function(n){var e=n.type;return o.a.createElement(I,{type:e,color:h[e].color},console.log("rerender")," ")}),P=function(n){var e=n.stage;return o.a.createElement(k,{width:e[0].length,height:e.length},e.map(function(n){return n.map(function(n,e){return o.a.createElement(J,{key:e,type:n[0]})})}))};function L(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  border: 4px solid #333;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  color: ",";\n  background: #000;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 0.8rem;\n"]);return L=function(){return n},n}var A=s.a.div(L(),function(n){return n.gameOver?"red":"#999"}),T=function(n){var e=n.gameOver,t=n.text;return o.a.createElement(A,{gameOver:e},t)};function Z(){var n=Object(f.a)(["\n  box-sizing: border-box;\n  margin: 0 0 20px 0;\n  padding: 20px;\n  min-height: 30px;\n  width: 100%;\n  border-radius: 20px;\n  border: none;\n  color: white;\n  background: #333;\n  font-family: Pixel, Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  outline: none;\n  cursor: pointer;\n  text-align: center;\n"]);return Z=function(){return n},n}var z=s.a.div(Z()),C=function(n){var e=n.callback;return o.a.createElement(z,{onClick:e},"Start Game")},D=function(){var n=Object(r.useState)(null),e=Object(i.a)(n,2),t=e[0],a=e[1],c=Object(r.useState)(!1),f=Object(i.a)(c,2),s=f[0],d=f[1],p=j(),b=Object(i.a)(p,4),m=b[0],O=b[1],h=b[2],x=b[3],y=w(m,h),E=Object(i.a)(y,3),k=E[0],S=E[1],I=function(n){var e=Object(r.useState)(0),t=Object(i.a)(e,2),o=t[0],a=t[1],c=Object(r.useState)(0),u=Object(i.a)(c,2),l=u[0],f=u[1],s=Object(r.useState)(0),d=Object(i.a)(s,2),p=d[0],b=d[1],m=[40,100,300,1200],v=Object(r.useCallback)(function(){n>0&&(a(function(e){return e+m[n-1]*(p+1)}),f(function(e){return e+n}))},[p,m,n]);return Object(r.useEffect)(function(){v()},[v,n,o]),[o,a,l,f,p,b]}(E[2]),J=Object(i.a)(I,6),L=J[0],A=J[1],Z=J[2],z=J[3],D=J[4],G=J[5];console.log("re-render");var M=function(n){l(m,k,{x:n,y:0})||O({x:n,y:0})},R=function(){Z>10*(D+1)&&(G(function(n){return n+1}),a(1e3/(D+1)+200)),l(m,k,{x:0,y:1})?(m.pos.y<1&&(console.log("GAME OVER !!!"),d(!0),a(null)),O({x:0,y:0,collided:!0})):O({x:0,y:1,collided:!1})},B=function(n){var e=n.keyCode;s||(37===e?M(-1):39===e?M(1):40===e?(console.log("interval off"),a(null),R()):38===e&&x(k,1))};return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)(function(){t.current=n},[n]),Object(r.useEffect)(function(){if(null!==e){var n=setInterval(function(){t.current()},e);return function(){clearInterval(n)}}},[e])}(function(){R()},t),o.a.createElement(v,{role:"button",tabIndex:"0",onKeyDown:function(n){return B(n)},onKeyUp:function(n){var e=n.keyCode;s||40===e&&(console.log("interval on"),a(1e3/(D+1)+200))}},o.a.createElement(g,null,o.a.createElement(P,{stage:k}),o.a.createElement("aside",null,s?o.a.createElement(T,{gameOver:s,text:"Game Over"}):o.a.createElement("div",null,o.a.createElement(T,{text:"Score: ".concat(L)}),o.a.createElement(T,{text:"Rows: ".concat(Z)}),o.a.createElement(T,{text:"Level: ".concat(D)})),o.a.createElement(C,{callback:function(){S(u()),a(1e3),h(),d(!1),A(0),z(0),G(0)}}))))},G=function(){return o.a.createElement("div",null,o.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},9:function(n,e,t){n.exports=t.p+"static/media/giphy.8641b892.gif"}},[[15,1,2]]]);
//# sourceMappingURL=main.4d9edcf8.chunk.js.map