(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(e,t,n){"use strict";n.r(t);var r=n(7294),o=n(9163),i=n(5893);function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=["black","lightblue","blue","orange","yellow","lightgreen","purple","red"],s=o.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["height:100vh;background-color:#b5e1ef;"]),f=o.ZP.div.withConfig({displayName:"pages__Main",componentId:"sc-eccczk-1"})(["position:absolute;top:50%;left:50%;width:800px;height:700px;margin:0;margin-right:-50%;background-color:#4995ff;border:solid 5px;border-color:#fff #777 #777 #fff;transform:translate(-50%,-50%);"]),l=o.ZP.div.withConfig({displayName:"pages__BlockArea",componentId:"sc-eccczk-2"})(["position:absolute;top:50%;left:50%;width:300px;height:600px;margin:0;margin-right:-50%;transform:translate(-50%,-50%);"]),d=(0,o.ZP)(l).withConfig({displayName:"pages__AroundBlockArea",componentId:"sc-eccczk-3"})(["width:306px;height:606px;border:solid 3px;border-color:white;"]),p=o.ZP.div.withConfig({displayName:"pages__MinBlock",componentId:"sc-eccczk-4"})(["float:left;width:30px;height:30px;line-height:30px;vertical-align:baseline;background-color:",";border:solid 0.15vh ",";"],(function(e){return u[e.num]}),(function(e){return 0===e.num?"#51515166":"black"})),h=o.ZP.div.withConfig({displayName:"pages__NextMinoArea",componentId:"sc-eccczk-5"})(["position:relative;top:7%;left:75%;width:140px;height:170px;padding-top:10px;font-size:30px;color:white;text-align:center;background-color:black;border:solid 2px white;border-color:white;border-radius:10%;"]),g=o.ZP.div.withConfig({displayName:"pages__AroundNextMino",componentId:"sc-eccczk-6"})(["position:relative;top:5%;left:16%;width:109px;height:109px;"]),m=o.ZP.div.withConfig({displayName:"pages__NextMino",componentId:"sc-eccczk-7"})(["width:120px;height:120px;"]),x=o.ZP.div.withConfig({displayName:"pages__NextMinoBlock",componentId:"sc-eccczk-8"})(["float:left;width:25px;height:25px;line-height:30px;vertical-align:baseline;background-color:",";border:solid 0.15vh #000;"],(function(e){return u[e.num]})),v=o.ZP.div.withConfig({displayName:"pages__ScoreArea",componentId:"sc-eccczk-9"})(["position:absolute;top:7%;left:6%;display:flex;align-items:center;justify-content:center;width:148px;height:105px;background-color:#000;border:solid 2px white;border-radius:10%;"]),b=o.ZP.div.withConfig({displayName:"pages__ScoreandLevel",componentId:"sc-eccczk-10"})(["font-size:30px;color:white;text-align:center;"]),w=(0,o.ZP)(v).withConfig({displayName:"pages__LevelArea",componentId:"sc-eccczk-11"})(["top:27%;"]),y=(0,o.ZP)(v).withConfig({displayName:"pages__GameStateArea",componentId:"sc-eccczk-12"})(["top:47%;"]),k=o.ZP.div.withConfig({displayName:"pages__Stop",componentId:"sc-eccczk-13"})(["position:absolute;top:37%;left:75%;width:140px;height:105px;padding-top:25px;background-color:#000;border:solid 5px;border-color:#fff #777 #777 #fff;"]);t.default=function(){var e=[[[[0,0,0,0],[1,1,1,1]],[[0,0,1],[0,0,1],[0,0,1],[0,0,1]],[[0,0,0,0],[0,0,0,0],[1,1,1,1]],[[0,1],[0,1],[0,1],[0,1]]],[[[2,0,0],[2,2,2],[0,0,0]],[[0,2,2],[0,2,0],[0,2,0]],[[0,0,0],[2,2,2],[0,0,2]],[[0,2,0],[0,2,0],[2,2,0]]],[[[0,0,3],[3,3,3],[0,0,0]],[[0,3,0],[0,3,0],[0,3,3]],[[0,0,0],[3,3,3],[3,0,0]],[[3,3,0],[0,3,0],[0,3,0]]],[[[0,4,4],[0,4,4],[0,0,0]],[[0,4,4],[0,4,4],[0,0,0]],[[0,4,4],[0,4,4],[0,0,0]],[[0,4,4],[0,4,4],[0,0,0]]],[[[0,5,5],[5,5,0],[0,0,0]],[[0,5,0],[0,5,5],[0,0,5]],[[0,0,0],[0,5,5],[5,5,0]],[[5,0,0],[5,5,0],[0,5,0]]],[[[0,6,0],[6,6,6],[0,0,0]],[[0,6,0],[0,6,6],[0,6,0]],[[0,0,0],[6,6,6],[0,6,0]],[[0,6,0],[6,6,0],[0,6,0]]],[[[7,7,0],[0,7,7],[0,0,0]],[[0,0,7],[0,7,7],[0,7,0]],[[0,0,0],[7,7,0],[0,7,7]],[[0,7,0],[7,7,0],[7,0,0]]]],t=(0,r.useState)(!1),n=t[0],o=t[1],a=(0,r.useState)(!1),u=a[0],_=a[1],S=(0,r.useState)(0),N=S[0],j=S[1],C=(0,r.useState)(1),A=C[0],I=C[1],z=(0,r.useState)(!1),P=z[0],M=z[1],Z=(0,r.useState)(!1),E=Z[0],L=Z[1],O=(0,r.useState)(e[Math.floor(7*Math.random())]),B=O[0],T=O[1],G=(0,r.useState)(e[Math.floor(7*Math.random())]),J=G[0],R=G[1],U=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],X=(0,r.useState)(U),D=X[0],Y=X[1],$=(0,r.useState)([[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,0,0,0,0,0,0,0,0,0,0,9],[9,9,9,9,9,9,9,9,9,9,9,9]]),q=$[0],F=$[1],H=(0,r.useState)(4),K=H[0],Q=H[1],V=(0,r.useState)(1),W=V[0],ee=V[1],te=(0,r.useState)(0),ne=te[0],re=te[1],oe=function(e){for(var t=JSON.parse(JSON.stringify(q)),n=0;n<e;n++)for(var r=0;r<J[ne][n].length;r++)0!==J[ne][n][r]&&(t[n+W][r+K]=J[ne][n][r]);return t},ie=(0,r.useMemo)((function(){return oe(J[ne].length).slice(3,23).map((function(e){return e.filter((function(e){return 9!==e}))}))}),[K,W,ne]),ce=function(){for(var e=U,t=0;t<B[0].length;t++)for(var n=0;n<B[0][t].length;n++)0!==B[0][t][n]&&(e[t+1][n]=B[0][t][n]);Y(e)},ae=function(e,t,n){if(t+n.length>24)return!0;for(var r=0;r<n.length;r++)for(var o=0;o<n[r].length;o++)if(n[r][o]>0&&q[r+t][o+e]>0)return!0;return!1};(0,r.useEffect)((function(){I(1+Math.floor(N/5))}),[N]),(0,r.useEffect)((function(){ae(K,W+1,J[ne])&&function(){M(!P);var t,n=[],r=0,i=c(oe(J[ne].length).reverse());try{for(i.s();!(t=i.n()).done;){var a=t.value;!a.every((function(e){return 0!==e}))||a.every((function(e){return 9===e}))?n.unshift(a):(r++,j((function(e){return e+1})))}}catch(s){i.e(s)}finally{i.f()}for(var u=0;u<r;u++)n.unshift([9,0,0,0,0,0,0,0,0,0,0,9]);F(n),n[2].every((function(e){return 0===e||9===e}))||o(!0),R(B),T(e[Math.floor(7*Math.random())]),ce(),re(0),Q(4),ee(1)}()}),[E]);(0,r.useEffect)((function(){if(ce(),!n&&!u){var e=ae(K,W+1,J[ne]);e||ee(W+1),setTimeout((function(){M(!P),e&&L(!E)}),1100-100*function(e){return e<=10?e:10}(A))}}),[P,u]);var ue=(0,r.useCallback)((function(e){switch(e.code){case"ArrowLeft":ae(K-1,W,J[ne])||Q((function(e){return e-1}));break;case"ArrowRight":ae(K+1,W,J[ne])||Q((function(e){return e+1}));break;case"ArrowDown":ae(K,W+1,J[ne])||ee((function(e){return e+1}));break;case"ArrowUp":!function(){if(ne<3){if(ae(K,W,J[ne+1]))return;re((function(e){return e+1}))}else{if(ae(K,W,J[0]))return;re(0)}}();break;case"Space":!function(){for(var e=W;!ae(K,e+1,J[ne]);)e++;ee(e)}()}}),[K,W,J,ne]);(0,r.useEffect)((function(){if(!n&&!u)return document.addEventListener("keydown",ue,!1),function(){document.removeEventListener("keydown",ue,!1)}}),[K,W,ne,J,u]);return(0,i.jsx)(s,{children:(0,i.jsxs)(f,{children:[(0,i.jsx)(d,{children:(0,i.jsx)(l,{children:ie.map((function(e,t){return e.map((function(e,n){return(0,i.jsx)(p,{num:e},"".concat(n,"-").concat(t))}))}))})}),(0,i.jsxs)(h,{children:["Next",(0,i.jsx)(g,{children:(0,i.jsx)(m,{children:D.map((function(e,t){return e.map((function(e,n){return(0,i.jsx)(x,{num:e},"".concat(n,"-").concat(t))}))}))})})]}),(0,i.jsx)(v,{children:(0,i.jsxs)(b,{children:["Score",(0,i.jsx)("br",{}),N]})}),(0,i.jsx)(w,{children:(0,i.jsxs)(b,{children:["Level",(0,i.jsx)("br",{}),A]})}),(0,i.jsx)(y,{children:(0,i.jsx)(b,{children:n?"Gameover":"You can do it!"})}),(0,i.jsx)(k,{children:(0,i.jsx)(b,{onClick:function(){_(!u)},children:u?"Resume!":"Stop!"})})]})})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])}},function(e){e.O(0,[163,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);