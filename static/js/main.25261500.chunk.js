(this["webpackJsonpchess-board"]=this["webpackJsonpchess-board"]||[]).push([[0],{14:function(e,t,n){e.exports={active:"draggable_active__3TbHp"}},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(13),a=n.n(r),o=(n(19),n(7)),s=n(14),u=n.n(s),h=n(0),l=function(e){var t=e.children,n=e.boundingBox,r=e.onMouseDown,a=e.onMouseMove,s=e.onMouseUp,l=Object(i.useState)({x:0,y:0,pressed:!1}),d=Object(o.a)(l,2),v=d[0],f=d[1],j=Object(i.useState)({x:0,y:0}),b=Object(o.a)(j,2),p=b[0],O=b[1],w=Object(i.useRef)(null);Object(i.useEffect)((function(){w.current&&v.pressed?w.current.style.transform="translate(".concat(p.x,"px, ").concat(p.y,"px)"):w.current&&(w.current.style.transform="")}),[p,v.pressed]);var k=c.a.useCallback((function(){f({x:0,y:0,pressed:!1}),O({x:0,y:0}),null===s||void 0===s||s(-1,-1)}),[s]),g=c.a.useCallback((function(e){var t;t="mousemove"===e.type?e:e.touches[0];var i=n?Math.max(Math.min(t.pageX,n.right),n.left):t.pageX,c=n?Math.max(Math.min(t.pageY,n.bottom),n.top):t.pageY,r=i-v.x,o=c-v.y;null===a||void 0===a||a(i,c),O({x:r,y:o})}),[v,n,a]),x=Object(i.useRef)(g);Object(i.useEffect)((function(){v.pressed?(x.current=g,document.addEventListener("mousemove",g),document.addEventListener("mouseup",k),document.addEventListener("touchmove",g),document.addEventListener("touchend",k)):(document.removeEventListener("mousemove",x.current),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",x.current),document.removeEventListener("touchend",k))}),[v.pressed,g,k]);var M=function(e){var t,i;i="mousedown"===e.type?e:e.touches[0];var c=null===(t=w.current)||void 0===t?void 0:t.getBoundingClientRect(),a=i.pageX,o=i.pageY;c&&(a=(null===c||void 0===c?void 0:c.x)+(null===c||void 0===c?void 0:c.width)/2,o=(null===c||void 0===c?void 0:c.y)+(null===c||void 0===c?void 0:c.height)/2);var s=n?Math.max(Math.min(i.pageX,n.right),n.left):i.pageX,u=n?Math.max(Math.min(i.pageY,n.bottom),n.top):i.pageY;O({x:s-a,y:u-o}),null===r||void 0===r||r(s,u),f({x:a,y:o,pressed:!0})};return Object(h.jsx)("div",{className:v.pressed?u.a.active:"",ref:w,onMouseDown:M,onTouchStart:M,children:t})},d=n(2);function v(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsxs)("g",{fill:"#000",strokeLinecap:"butt",children:[Object(h.jsx)("path",{d:"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"}),Object(h.jsx)("path",{d:"M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"}),Object(h.jsx)("path",{d:"M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"})]}),Object(h.jsx)("path",{d:"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5",stroke:"#fff",strokeLinejoin:"miter"})]})}))}var f=i.memo(v);function j(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsxs)("g",{fill:"#fff",strokeLinecap:"butt",children:[Object(h.jsx)("path",{d:"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"}),Object(h.jsx)("path",{d:"M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"}),Object(h.jsx)("path",{d:"M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"})]}),Object(h.jsx)("path",{d:"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5",strokeLinejoin:"miter"})]})}))}var b=i.memo(j);function p(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22.5 11.63V6",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",fill:"#000",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7",fill:"#000"}),Object(h.jsx)("path",{d:"M20 8h5",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5",stroke:"#fff"}),Object(h.jsx)("path",{d:"M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0",stroke:"#fff"})]})}))}var O=i.memo(p);function w(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22.5 11.63V6M20 8h5",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",fill:"#fff",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7",fill:"#fff"}),Object(h.jsx)("path",{d:"M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"})]})}))}var k=i.memo(w);function g(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",fill:"#000"}),Object(h.jsx)("path",{d:"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",fill:"#000"}),Object(h.jsx)("path",{d:"M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z",fill:"#fff",stroke:"#fff"}),Object(h.jsx)("path",{d:"M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z",fill:"#fff",stroke:"#fff",strokeWidth:1.49997}),Object(h.jsx)("path",{d:"M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z",fill:"#fff",stroke:"none"})]})}))}var x=i.memo(g);function M(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",fill:"#fff"}),Object(h.jsx)("path",{d:"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",fill:"#fff"}),Object(h.jsx)("path",{d:"M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z",fill:"#000"}),Object(h.jsx)("path",{d:"M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z",fill:"#000",strokeWidth:1.49997})]})}))}var m=i.memo(M),L=function(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsx)("path",{d:"M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round"})}))},P=i.memo(L);function y(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsx)("path",{d:"M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",fill:"#fff",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round"})}))}var E=i.memo(y);function A(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z",strokeLinecap:"butt"}),Object(h.jsx)("path",{d:"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0zM11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"}),Object(h.jsx)("circle",{cx:6,cy:12,r:2}),Object(h.jsx)("circle",{cx:14,cy:9,r:2}),Object(h.jsx)("circle",{cx:22.5,cy:8,r:2}),Object(h.jsx)("circle",{cx:31,cy:9,r:2}),Object(h.jsx)("circle",{cx:39,cy:12,r:2}),Object(h.jsx)("path",{d:"M11 38.5a35 35 1 0023 0",fill:"none",strokeLinecap:"butt"}),Object(h.jsx)("g",{fill:"none",stroke:"#fff",children:Object(h.jsx)("path",{d:"M11 29a35 35 1 0123 0M12.5 31.5h20M11.5 34.5a35 35 1 0022 0M10.5 37.5a35 35 1 0024 0"})})]})}))}var _=i.memo(A);function C(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"#fff",stroke:"#000",strokeWidth:1.5,strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"}),Object(h.jsx)("path",{d:"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"}),Object(h.jsx)("path",{d:"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0",fill:"none"}),Object(h.jsx)("circle",{cx:6,cy:12,r:2}),Object(h.jsx)("circle",{cx:14,cy:9,r:2}),Object(h.jsx)("circle",{cx:22.5,cy:8,r:2}),Object(h.jsx)("circle",{cx:31,cy:9,r:2}),Object(h.jsx)("circle",{cx:39,cy:12,r:2})]})}))}var T=i.memo(C);function W(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z",strokeLinecap:"butt"}),Object(h.jsx)("path",{d:"M14 29.5v-13h17v13H14z",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z",strokeLinecap:"butt"}),Object(h.jsx)("path",{d:"M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23",fill:"none",stroke:"#fff",strokeWidth:1,strokeLinejoin:"miter"})]})}))}function I(e){return Object(h.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(h.jsxs)("g",{fill:"#fff",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("path",{d:"M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5",strokeLinecap:"butt"}),Object(h.jsx)("path",{d:"M34 14l-3 3H14l-3-3"}),Object(h.jsx)("path",{d:"M31 17v12.5H14V17",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(h.jsx)("path",{d:"M31 29.5l1.5 2.5h-20l1.5-2.5"}),Object(h.jsx)("path",{d:"M11 14h23",fill:"none",strokeLinejoin:"miter"})]})}))}var B={King:O,Queen:_,Knight:x,Bishop:f,Pawn:P,Rook:i.memo(W)},H={King:k,Queen:T,Knight:m,Bishop:b,Pawn:E,Rook:i.memo(I)},K=n(9),S=n.n(K),R=n(3),z=n(4),N=n(8),V=n(6),D=n(5),G=[8,7,6,5,4,3,2,1],Q=["a","b","c","d","e","f","g","h"],q=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(R.a)(this,e),this._board=void 0,this._enPassant=void 0,this._movedPieces=void 0,this.addToMoved=function(e){n._movedPieces.includes(e)||n._movedPieces.push(e)},this.pieceMoved=function(e){return n._movedPieces.includes(e)},this.clone=function(){return new e(n._board.map((function(e){return e.clone()})),n._enPassant,n._movedPieces.map((function(e){return e})))},this.move=function(e,t){var i=n.getPieceAt(e),c=i.piece,r=n.getPieceAt(t);if(!c)throw new Error("no piece to move");i.remove(),n.addToMoved(c),r.place(c)},this.remove=function(e){var t=n.getPieceAt(e);if(!t.piece)throw new Error("no piece to remove");t.remove()},this.placeAt=function(e,t){n.getPieceAt(e).place(t)},this.getPieceAt=function(e){var t=n._board.find((function(t){return t.rank===e.rank&&t.file===e.file}));if(void 0===t)throw new Error("Out of bounds");return t},this.getPieces=function(e){return n.board.filter((function(t){return null!==t.piece&&t.piece.colour===e}))},this.getKing=function(e){var t=n.board.find((function(t){var n;return"KING"===(null===(n=t.piece)||void 0===n?void 0:n.pieceType)&&t.piece.colour===e}));if(!t)throw new Error("Where's the king?");return t},this._board=t,this.enPassant=i,this._movedPieces=c}return Object(z.a)(e,[{key:"board",get:function(){return this._board}},{key:"enPassant",get:function(){return this._enPassant},set:function(e){this._enPassant=e}}]),e}(),U=function(){function e(t,n){var i=this;Object(R.a)(this,e),this.piece=void 0,this.board=void 0,this.getMoveAtPosition=function(e,t,n){var c=Q.indexOf(e.file)+n,r=e.rank+t;if(!(r>8||c>7||r<1||c<0))return i.checkPosition(r,Q[c])},this.getMovesOnLine=function(e,t,n){for(var c=[],r=1;r<8;r++){var a=Q.indexOf(e.file)+n*r,o=e.rank+t*r;if(o>8||a>7||o<1||a<0)break;var s=i.checkPosition(o,Q[a]);if(void 0===s)break;if(c.push(s),"Capture"===s.move)break}return c},this.checkPosition=function(e,t){return i.canTakeAt(e,t)?{move:"Capture",rank:e,file:t}:i.canTakeEnPassant(e,t)?{move:"CaptureEnPassant",rank:e,file:t}:i.canMoveTo(e,t)?"PAWN"!==i.piece.pieceType||i.board.pieceMoved(i.piece)||4!==e&&5!==e?{move:"Move",rank:e,file:t}:{move:"PawnPush",rank:e,file:t}:void 0},this.isStandardMove=function(e){return!!e},this.canTakeAt=function(e,t){var n=i.board.getPieceAt({rank:e,file:t});return null!==n.piece&&n.piece.colour!==i.piece.colour},this.canTakeEnPassant=function(e,t){return"PAWN"===i.piece.pieceType&&(!!i.board.enPassant&&(i.board.enPassant.file===t&&i.board.enPassant.rank===e+("WHITE"===i.piece.colour?-1:1)))},this.canMoveTo=function(e,t){return null===i.board.getPieceAt({rank:e,file:t}).piece},this.isKingInCheck=function(e){var t=i.board.getKing(e);return i.board.getPieces("WHITE"===e?"BLACK":"WHITE").flatMap((function(e){return ee(e.piece,i.board).getPotentialMoves({file:e.file,rank:e.rank})})).some((function(e){return e.file===(null===t||void 0===t?void 0:t.file)&&e.rank===(null===t||void 0===t?void 0:t.rank)}))},this.piece=t,this.board=n}return Object(z.a)(e,[{key:"moves",value:function(e){var t=this;return this.getPotentialMoves(e).filter((function(n){var i=t.board.clone();return i.move(e,{rank:n.rank,file:n.file}),!ee(t.piece,i).isKingInCheck(t.piece.colour)}))}},{key:"canMove",value:function(e,t){var n=this.getPotentialMoves(e).find((function(e){return e.file===t.file&&e.rank===t.rank}));if(!n)return{move:"INVALID"};var i=this.board.clone();return i.move(e,t),ee(this.piece,i).isKingInCheck(this.piece.colour)?{move:"INVALID"}:n}}]),e}(),X=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){return[].concat(Object(N.a)(this.getMovesOnLine(e,-1,-1)),Object(N.a)(this.getMovesOnLine(e,1,1)),Object(N.a)(this.getMovesOnLine(e,1,-1)),Object(N.a)(this.getMovesOnLine(e,-1,1)))}}]),n}(U),Y=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){return[].concat(Object(N.a)(this.getMovesOnLine(e,1,0)),Object(N.a)(this.getMovesOnLine(e,0,1)),Object(N.a)(this.getMovesOnLine(e,0,-1)),Object(N.a)(this.getMovesOnLine(e,-1,0)))}}]),n}(U),F=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){return[].concat(Object(N.a)(new Y(this.piece,this.board).getPotentialMoves(e)),Object(N.a)(new X(this.piece,this.board).getPotentialMoves(e)))}}]),n}(U),J=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){var t=this;if(null===this.board.getPieceAt(e).piece)throw new Error("nope");return[[1,2],[2,1],[-1,2],[-2,1],[-1,-2],[-2,-1],[1,-2],[2,-1]].map((function(n){var i=Object(o.a)(n,2),c=i[0],r=i[1];return t.getMoveAtPosition(e,c,r)})).filter(this.isStandardMove)}}]),n}(U),Z=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){var t=this,n="WHITE"===this.piece.colour?1:-1,i=[[n,1],[n,-1]],c=(this.board.pieceMoved(this.piece)?[1*n]:[1*n,2*n]).map((function(n){return t.getMoveAtPosition(e,n,0)})).filter(this.isStandardMove).filter((function(e){return"Move"===e.move||"PawnPush"===e.move})),r=i.map((function(n){var i=Object(o.a)(n,2),c=i[0],r=i[1];return t.getMoveAtPosition(e,c,r)})).filter(this.isStandardMove).filter((function(e){return"Capture"===e.move||"CaptureEnPassant"===e.move}));return[].concat(Object(N.a)(c),Object(N.a)(r))}}]),n}(U),$=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).castlingDeltas=function(e){return"SHORT"===e?[0,1,2]:[0,-1,-2]},e}return Object(z.a)(n,[{key:"getPotentialMoves",value:function(e){var t=this,n=[],i=Q.indexOf(e.file),c=e.rank;return n=[[1,1],[0,1],[1,0],[-1,0],[-1,-1],[0,-1],[-1,1],[1,-1]].map((function(n){var i=Object(o.a)(n,2),c=i[0],r=i[1];return t.getMoveAtPosition(e,c,r)})).filter(this.isStandardMove),this.canCastle("SHORT")&&n.push({move:"Castle",type:"SHORT",colour:this.piece.colour,rank:c,file:Q[i+2]}),this.canCastle("LONG")&&n.push({move:"Castle",type:"LONG",colour:this.piece.colour,rank:c,file:Q[i-2]}),n}},{key:"canCastle",value:function(e){var t=this,n=this.castlingDeltas(e),i="SHORT"===e?"h":"a",c="WHITE"===this.piece.colour?1:8;if(this.board.pieceMoved(this.piece))return!1;var r=this.board.getPieceAt({rank:c,file:i});return!(!r.piece||this.board.pieceMoved(r.piece))&&n.every((function(e){var n=4+e;if(null===t.board.getPieceAt({file:Q[n],rank:c}).piece||0===e){var i=t.board.clone();return i.move({rank:c,file:"e"},{rank:c,file:Q[n]}),!ee(t.piece,i).isKingInCheck(t.piece.colour)}return!1}))}}]),n}(U),ee=function(e,t){switch(e.pieceType){case"BISHOP":return new X(e,t);case"KING":return new $(e,t);case"KNIGHT":return new J(e,t);case"PAWN":return new Z(e,t);case"QUEEN":return new F(e,t);case"ROOK":return new Y(e,t)}},te=function e(t){Object(R.a)(this,e),this.pieceType=void 0,this.colour=void 0,this.colour=t},ne=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="BISHOP",e}return n}(te),ie=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="KING",e}return n}(te),ce=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="KNIGHT",e}return n}(te),re=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="QUEEN",e}return n}(te),ae=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="ROOK",e}return n}(te),oe=function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(R.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).pieceType="PAWN",e}return n}(te),se=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(R.a)(this,e),this._piece=void 0,this.rank=void 0,this.file=void 0,this.rank=t,this.file=n,this._piece=i}return Object(z.a)(e,[{key:"piece",get:function(){return this._piece}},{key:"place",value:function(e){this._piece=e}},{key:"remove",value:function(){this._piece=null}},{key:"clone",value:function(){return new e(this.rank,this.file,this.piece)}}]),e}(),ue=(new ae("WHITE"),new ce("WHITE"),new ne("WHITE"),new re("WHITE"),new ie("WHITE"),new ne("WHITE"),new ce("WHITE"),new ae("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new oe("WHITE"),new ae("BLACK"),new ce("BLACK"),new ne("BLACK"),new re("BLACK"),new ie("BLACK"),new ne("BLACK"),new ce("BLACK"),new ae("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new oe("BLACK"),new(function(){function e(){Object(R.a)(this,e),this._board=void 0,this._state=void 0,this._board=new q(function(){var e=G.flatMap((function(e){return Q.map((function(t){return new se(e,t)}))})),t=function(t,n,i){var c=e.find((function(e){return e.file===n&&e.rank===t}));null===c||void 0===c||c.place(i)};return t(1,"a",new ae("WHITE")),t(1,"b",new ce("WHITE")),t(1,"c",new ne("WHITE")),t(1,"d",new re("WHITE")),t(1,"e",new ie("WHITE")),t(1,"f",new ne("WHITE")),t(1,"g",new ce("WHITE")),t(1,"h",new ae("WHITE")),t(2,"a",new oe("WHITE")),t(2,"b",new oe("WHITE")),t(2,"c",new oe("WHITE")),t(2,"d",new oe("WHITE")),t(2,"e",new oe("WHITE")),t(2,"f",new oe("WHITE")),t(2,"g",new oe("WHITE")),t(2,"h",new oe("WHITE")),t(7,"a",new oe("BLACK")),t(7,"b",new oe("BLACK")),t(7,"c",new oe("BLACK")),t(7,"d",new oe("BLACK")),t(7,"e",new oe("BLACK")),t(7,"f",new oe("BLACK")),t(7,"g",new oe("BLACK")),t(7,"h",new oe("BLACK")),t(8,"a",new ae("BLACK")),t(8,"b",new ce("BLACK")),t(8,"c",new ne("BLACK")),t(8,"d",new re("BLACK")),t(8,"e",new ie("BLACK")),t(8,"f",new ne("BLACK")),t(8,"g",new ce("BLACK")),t(8,"h",new ae("BLACK")),e}()),this._state="WhiteMove"}return Object(z.a)(e,[{key:"board",get:function(){return this._board}},{key:"state",get:function(){return this._state}},{key:"move",value:function(e,t){var n,i;if("BlackMove"===this._state||"WhiteMove"===this._state){var c=this._board.getPieceAt(e);if(("BlackMove"!==this._state||"WHITE"!==(null===(n=c.piece)||void 0===n?void 0:n.colour))&&("WhiteMove"!==this._state||"BLACK"!==(null===(i=c.piece)||void 0===i?void 0:i.colour))){if(!c.piece)throw new Error("No Piece to move");var r=ee(c.piece,this._board).canMove(e,t);switch(r.move){case"INVALID":return;case"Move":case"PawnPush":case"CaptureEnPassant":case"Capture":if("CaptureEnPassant"===r.move){if(!this._board.enPassant)throw new Error("no enPassant");this._board.remove(this._board.enPassant)}this._board.move(e,t),"PawnPush"===r.move?this._board.enPassant=t:this._board.enPassant=void 0;break;case"Castle":this._board.move(e,t);var a={rank:c.rank,file:"SHORT"===r.type?"h":"a"},o={rank:c.rank,file:"SHORT"===r.type?"f":"d"};this._board.move(a,o)}this.changeState()}}}},{key:"checkMate",value:function(e){var t=this,n=this._board.getKing(e);return!!ee(n.piece,this._board).isKingInCheck(e)&&0===this._board.getPieces(e).flatMap((function(e){return ee(e.piece,t._board).moves({rank:e.rank,file:e.file})})).length}},{key:"staleMate",value:function(e){var t=this;return 0===this._board.getPieces(e).flatMap((function(e){return ee(e.piece,t._board).moves({rank:e.rank,file:e.file})})).length}},{key:"changeState",value:function(){switch(this._state){case"BlackWin":case"StaleMate":case"WhiteWin":case"DrawRepition3":case"DrawRepition5":break;case"WhiteMove":this.checkMate("BLACK")?this._state="WhiteWin":this.staleMate("BLACK")?this._state="StaleMate":this._state="BlackMove";break;case"BlackMove":this.checkMate("WHITE")?this._state="BlackWin":this.staleMate("WHITE")?this._state="StaleMate":this._state="WhiteMove"}console.log(this._state)}}]),e}())),he={board:ue.board},le=Object(i.createContext)([he,function(){return null}]),de=function(e,t){switch(t.type){case"PIECE_HOVER":if(!e.activePiece)throw new Error("state is corrupted");return Object(d.a)(Object(d.a)({},e),{},{activePiece:Object(d.a)(Object(d.a)({},e.activePiece),{},{x:t.payload.x,y:t.payload.y})});case"PIECE_ACTIVATED":return Object(d.a)(Object(d.a)({},e),{},{activePiece:Object(d.a)({},t.payload)});case"SQUARE_ATTACKED":return Object(d.a)(Object(d.a)({},e),{},{threatenedSquare:Object(d.a)({},t.payload)});case"MOVE":if(!e.threatenedSquare)throw new Error("state is corrupted");if(!e.activePiece)throw new Error("state is corrupted");var n={file:e.activePiece.file,rank:e.activePiece.rank},i={file:e.threatenedSquare.file,rank:e.threatenedSquare.rank};return ue.move(n,i),{board:ue.board}}},ve=function(e){var t=e.children,n=Object(i.useReducer)(de,he),c=Object(o.a)(n,2),r=c[0],a=c[1];return Object(h.jsx)(le.Provider,{value:[r,a],children:t})},fe=function(e){var t=e.rank,n=e.file,c=e.bound,r=Object(i.useRef)(null),a=Object(i.useContext)(le),s=Object(o.a)(a,2),u=s[0],d=s[1],v=Object(i.useState)(!1),f=Object(o.a)(v,2),j=f[0],b=f[1],p=function(e,t){return e%2===0&&Q.indexOf(t)%2===0||e%2===1&&Q.indexOf(t)%2===1}(t,n),O=function(e,t,n){var i=n.getPieceAt({rank:e,file:t});if(i.piece){var c="WHITE"===i.piece.colour?H:B;switch(i.piece.pieceType){case"BISHOP":return c.Bishop;case"KING":return c.King;case"KNIGHT":return c.Knight;case"PAWN":return c.Pawn;case"QUEEN":return c.Queen;case"ROOK":return c.Rook}}}(t,n,u.board);Object(i.useEffect)((function(){var e,t=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect();t&&(u.activePiece&&u.activePiece.x>=(null===t||void 0===t?void 0:t.left)&&u.activePiece.x<(null===t||void 0===t?void 0:t.right)&&u.activePiece.y>=t.top&&u.activePiece.y<t.bottom?b(!0):b(!1))}),[u,t,n]),Object(i.useEffect)((function(){j&&d({type:"SQUARE_ATTACKED",payload:{rank:t,file:n}})}),[j,d,n,t]);var w=Object(i.useCallback)((function(e,t){return d({type:"PIECE_HOVER",payload:{x:e,y:t}})}),[d]),k=Object(i.useCallback)((function(e,i){return d({type:"PIECE_ACTIVATED",payload:{rank:t,file:n,x:e,y:i}})}),[d,t,n]),g=Object(i.useCallback)((function(){return d({type:"MOVE"})}),[d]);return Object(h.jsxs)("div",{className:"".concat(S.a.chessSquare," ").concat(p?S.a.light:""," ").concat(j?S.a.highlighted:""," ").concat(S.a["rank_".concat(t)]," ").concat(S.a["file_".concat(n)]),rank:t,file:n,ref:r,children:[O&&Object(h.jsx)(l,{boundingBox:c,onMouseUp:g,onMouseMove:w,onMouseDown:k,children:Object(h.jsx)(O,{})}),1===t&&Object(h.jsx)("div",{className:S.a.rank,children:n}),"a"===n&&Object(h.jsx)("div",{className:S.a.file,children:t})]},t+n)},je=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(),n=Object(o.a)(t,2),c=n[0],r=n[1],a=Object(i.useCallback)((function(){var t;r(null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[]);return pe(a),Object(i.useEffect)((function(){var t;r(null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[e]),Object(h.jsx)("div",{className:S.a.container,children:Object(h.jsx)("div",{ref:e,className:S.a.chessGrid,children:G.map((function(e){return Q.map((function(t){return Object(h.jsx)(fe,{rank:e,file:t,bound:c},e+t)}))}))})})};var be=function(){return Object(h.jsx)(ve,{children:Object(h.jsx)(je,{})})},pe=function(e){Object(i.useEffect)((function(){var t=function(){e()};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[e])},Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(be,{})}),document.getElementById("root")),Oe()},9:function(e,t,n){e.exports={container:"App_container__3Hag2",chessGrid:"App_chessGrid__3cPOC",chessSquare:"App_chessSquare__SDQaO",light:"App_light__3AKuB",highlighted:"App_highlighted__19TOk",rank:"App_rank__3KL7s",file:"App_file__3wQ0V"}}},[[21,1,2]]]);
//# sourceMappingURL=main.25261500.chunk.js.map