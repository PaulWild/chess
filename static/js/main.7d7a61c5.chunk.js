(this["webpackJsonpchess-board"]=this["webpackJsonpchess-board"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"App_container__3Hag2",chessGrid:"App_chessGrid__3cPOC",chessSquare:"App_chessSquare__SDQaO",light:"App_light__3AKuB",highlighted:"App_highlighted__19TOk",rank:"App_rank__3KL7s",file:"App_file__3wQ0V"}},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(14),o=n.n(r),a=(n(19),n(5)),s=n(0),u=function(e){var t=e.children,n=e.boundingBox,r=e.onMouseDown,o=e.onMouseMove,u=e.onMouseUp,l=Object(c.useState)({x:0,y:0,pressed:!1}),h=Object(a.a)(l,2),d=h[0],v=h[1],f=Object(c.useState)({x:0,y:0}),j=Object(a.a)(f,2),b=j[0],O=j[1],p=Object(c.useRef)(null);Object(c.useEffect)((function(){p.current&&d.pressed?p.current.style.transform="translate(".concat(b.x,"px, ").concat(b.y,"px)"):p.current&&(p.current.style.transform="")}),[b,d.pressed]);var w=i.a.useCallback((function(){v({x:0,y:0,pressed:!1}),O({x:0,y:0}),null===u||void 0===u||u(-1,-1)}),[u]),g=i.a.useCallback((function(e){var t;t="mousemove"===e.type?e:e.touches[0];var c=n?Math.max(Math.min(t.pageX,n.right),n.left):t.pageX,i=n?Math.max(Math.min(t.pageY,n.bottom),n.top):t.pageY,r=c-d.x,a=i-d.y;null===o||void 0===o||o(c,i),O({x:r,y:a})}),[d,n,o]),k=Object(c.useRef)(g);Object(c.useEffect)((function(){d.pressed?(k.current=g,document.addEventListener("mousemove",g),document.addEventListener("mouseup",w),document.addEventListener("touchmove",g),document.addEventListener("touchend",w)):(document.removeEventListener("mousemove",k.current),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",k.current),document.removeEventListener("touchend",w))}),[d.pressed,g,w]);var x=function(e){var t,c;c="mousedown"===e.type?e:e.touches[0];var i=null===(t=p.current)||void 0===t?void 0:t.getBoundingClientRect(),o=c.pageX,a=c.pageY;i&&(o=(null===i||void 0===i?void 0:i.x)+(null===i||void 0===i?void 0:i.width)/2,a=(null===i||void 0===i?void 0:i.y)+(null===i||void 0===i?void 0:i.height)/2);var s=n?Math.max(Math.min(c.pageX,n.right),n.left):c.pageX,u=n?Math.max(Math.min(c.pageY,n.bottom),n.top):c.pageY;O({x:s-o,y:u-a}),null===r||void 0===r||r(s,u),v({x:o,y:a,pressed:!0})};return Object(s.jsx)("div",{ref:p,onMouseDown:x,onTouchStart:x,children:t})},l=n(2);function h(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsxs)("g",{fill:"#000",strokeLinecap:"butt",children:[Object(s.jsx)("path",{d:"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"}),Object(s.jsx)("path",{d:"M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"}),Object(s.jsx)("path",{d:"M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"})]}),Object(s.jsx)("path",{d:"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5",stroke:"#fff",strokeLinejoin:"miter"})]})}))}var d=c.memo(h);function v(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsxs)("g",{fill:"#fff",strokeLinecap:"butt",children:[Object(s.jsx)("path",{d:"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"}),Object(s.jsx)("path",{d:"M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"}),Object(s.jsx)("path",{d:"M25 8a2.5 2.5 0 11-5 0 2.5 2.5 0 115 0z"})]}),Object(s.jsx)("path",{d:"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5",strokeLinejoin:"miter"})]})}))}var f=c.memo(v);function j(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M22.5 11.63V6",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",fill:"#000",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7",fill:"#000"}),Object(s.jsx)("path",{d:"M20 8h5",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5",stroke:"#fff"}),Object(s.jsx)("path",{d:"M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0",stroke:"#fff"})]})}))}var b=c.memo(j);function O(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M22.5 11.63V6M20 8h5",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5",fill:"#fff",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7",fill:"#fff"}),Object(s.jsx)("path",{d:"M12.5 30c5.5-3 14.5-3 20 0M12.5 33.5c5.5-3 14.5-3 20 0M12.5 37c5.5-3 14.5-3 20 0"})]})}))}var p=c.memo(O);function w(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",fill:"#000"}),Object(s.jsx)("path",{d:"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",fill:"#000"}),Object(s.jsx)("path",{d:"M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z",fill:"#fff",stroke:"#fff"}),Object(s.jsx)("path",{d:"M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z",fill:"#fff",stroke:"#fff",strokeWidth:1.49997}),Object(s.jsx)("path",{d:"M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34-2.37-4.49-5.79-6.64-9.19-7.16l-.51-.1z",fill:"#fff",stroke:"none"})]})}))}var g=c.memo(w);function k(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21",fill:"#fff"}),Object(s.jsx)("path",{d:"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3",fill:"#fff"}),Object(s.jsx)("path",{d:"M9.5 25.5a.5.5 0 11-1 0 .5.5 0 111 0z",fill:"#000"}),Object(s.jsx)("path",{d:"M14.933 15.75a.5 1.5 30 11-.866-.5.5 1.5 30 11.866.5z",fill:"#000",strokeWidth:1.49997})]})}))}var x=c.memo(k),m=function(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsx)("path",{d:"M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round"})}))},M=c.memo(m);function L(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsx)("path",{d:"M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z",fill:"#fff",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round"})}))}var E=c.memo(L);function P(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z",strokeLinecap:"butt"}),Object(s.jsx)("path",{d:"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0zM11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0"}),Object(s.jsx)("circle",{cx:6,cy:12,r:2}),Object(s.jsx)("circle",{cx:14,cy:9,r:2}),Object(s.jsx)("circle",{cx:22.5,cy:8,r:2}),Object(s.jsx)("circle",{cx:31,cy:9,r:2}),Object(s.jsx)("circle",{cx:39,cy:12,r:2}),Object(s.jsx)("path",{d:"M11 38.5a35 35 1 0023 0",fill:"none",strokeLinecap:"butt"}),Object(s.jsx)("g",{fill:"none",stroke:"#fff",children:Object(s.jsx)("path",{d:"M11 29a35 35 1 0123 0M12.5 31.5h20M11.5 34.5a35 35 1 0022 0M10.5 37.5a35 35 1 0024 0"})})]})}))}var A=c.memo(P);function y(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"#fff",stroke:"#000",strokeWidth:1.5,strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"}),Object(s.jsx)("path",{d:"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"}),Object(s.jsx)("path",{d:"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0",fill:"none"}),Object(s.jsx)("circle",{cx:6,cy:12,r:2}),Object(s.jsx)("circle",{cx:14,cy:9,r:2}),Object(s.jsx)("circle",{cx:22.5,cy:8,r:2}),Object(s.jsx)("circle",{cx:31,cy:9,r:2}),Object(s.jsx)("circle",{cx:39,cy:12,r:2})]})}))}var C=c.memo(y);function T(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z",strokeLinecap:"butt"}),Object(s.jsx)("path",{d:"M14 29.5v-13h17v13H14z",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z",strokeLinecap:"butt"}),Object(s.jsx)("path",{d:"M12 35.5h21M13 31.5h19M14 29.5h17M14 16.5h17M11 14h23",fill:"none",stroke:"#fff",strokeWidth:1,strokeLinejoin:"miter"})]})}))}function H(e){return Object(s.jsx)("svg",Object(l.a)(Object(l.a)({xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 45 45"},e),{},{children:Object(s.jsxs)("g",{fill:"#fff",fillRule:"evenodd",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:[Object(s.jsx)("path",{d:"M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5",strokeLinecap:"butt"}),Object(s.jsx)("path",{d:"M34 14l-3 3H14l-3-3"}),Object(s.jsx)("path",{d:"M31 17v12.5H14V17",strokeLinecap:"butt",strokeLinejoin:"miter"}),Object(s.jsx)("path",{d:"M31 29.5l1.5 2.5h-20l1.5-2.5"}),Object(s.jsx)("path",{d:"M11 14h23",fill:"none",strokeLinejoin:"miter"})]})}))}var I={King:b,Queen:A,Knight:g,Bishop:d,Pawn:M,Rook:c.memo(T)},B={King:p,Queen:C,Knight:x,Bishop:f,Pawn:E,Rook:c.memo(H)},W=n(10),_=n.n(W),K=n(3),R=n(7),S=[8,7,6,5,4,3,2,1],z=["a","b","c","d","e","f","g","h"],N=function(){function e(t){var n=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Object(K.a)(this,e),this._board=void 0,this._enPassant=void 0,this.clone=function(){return new e(n._board.map((function(e){return e.clone()})),n._enPassant)},this.move=function(e,t){console.log(n.enPassant,"enPassant");var c=n.getPieceAt(e),i=n.getPieceAt(t);if(!c.piece)throw new Error("no piece to move");c.piece.setMoved(),i.place(c.piece),c.remove()},this.remove=function(e){var t=n.getPieceAt(e);if(!t.piece)throw new Error("no piece to remove");t.remove()},this.placeAt=function(e,t){n.getPieceAt(e).place(t)},this.getMoveAtPosition=function(e,t,c,i){var r=z.indexOf(e.file)+i,o=e.rank+c;if(!(o>8||r>7||o<1||r<0))return n.checkPosition(t,o,z[r])},this.getMovesOnLine=function(e,t,c,i){for(var r=[],o=1;o<8;o++){var a=z.indexOf(e.file)+i*o,s=e.rank+c*o;if(s>8||a>7||s<1||a<0)break;var u=n.checkPosition(t,s,z[a]);if(void 0===u)break;if(r.push(u),"Capture"===u.move)break}return r},this.checkPosition=function(e,t,c){return n.canTakeAt(t,c,e.colour)?{move:"Capture",rank:t,file:c}:n.canTakeEnPassant(t,c,e)?{move:"CaptureEnPassant",rank:t,file:c}:n.canMoveTo(t,c)?"PAWN"!==e.pieceType||e.moved||4!==t&&5!==t?{move:"Move",rank:t,file:c}:{move:"PawnPush",rank:t,file:c}:void 0},this.isStandardMove=function(e){return!!e},this.canTakeAt=function(e,t,c){var i=n.getPieceAt({rank:e,file:t});return null!==i.piece&&i.piece.colour!==c},this.canTakeEnPassant=function(e,t,c){return"PAWN"===c.pieceType&&(!!n.enPassant&&(n.enPassant.file===t&&n.enPassant.rank===e+("WHITE"===c.colour?-1:1)))},this.canMoveTo=function(e,t){return null===n.getPieceAt({rank:e,file:t}).piece},this.getPieceAt=function(e){var t=n._board.find((function(t){return t.rank===e.rank&&t.file===e.file}));if(void 0===t)throw new Error("Out of bounds");return t},this.isKingInCheck=function(e){var t=n.board.find((function(t){var n;return"KING"===(null===(n=t.piece)||void 0===n?void 0:n.pieceType)&&t.piece.colour===e}));return n.board.filter((function(t){return null!==t.piece&&t.piece.colour!==e})).flatMap((function(e){var t;return null===(t=e.piece)||void 0===t?void 0:t.getPotentialMoves({file:e.file,rank:e.rank},n)})).some((function(e){return e.file===(null===t||void 0===t?void 0:t.file)&&e.rank===(null===t||void 0===t?void 0:t.rank)}))},this._board=t,this.enPassant=c}return Object(R.a)(e,[{key:"board",get:function(){return this._board}},{key:"enPassant",get:function(){return this._enPassant},set:function(e){this._enPassant=e}}]),e}(),V=n(4),D=n(6),G=n(9),Q=n(8),q=function(){function e(t){Object(K.a)(this,e),this.pieceType=void 0,this.colour=void 0,this.moved=void 0,this.colour=t,this.moved=!1}return Object(R.a)(e,[{key:"setMoved",value:function(){this.moved=!0}},{key:"canMove",value:function(e,t,n){var c=this.getPotentialMoves(e,n);console.log(c);var i=c.find((function(e){return e.file===t.file&&e.rank===t.rank}));if(!i)return{move:"INVALID"};var r=n.clone();r.remove(e),this.setMoved(),r.placeAt(t,this);var o=r.isKingInCheck(this.colour)?{move:"INVALID"}:i;return this.moved=!1,o}}]),e}(),U=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="BISHOP",e.getPotentialMoves=function(t,n){return[].concat(Object(V.a)(n.getMovesOnLine(t,Object(D.a)(e),-1,-1)),Object(V.a)(n.getMovesOnLine(t,Object(D.a)(e),1,1)),Object(V.a)(n.getMovesOnLine(t,Object(D.a)(e),1,-1)),Object(V.a)(n.getMovesOnLine(t,Object(D.a)(e),-1,1)))},e}return n}(q),X=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="KING",e.getPotentialMoves=function(t,n){var c=[],i=z.indexOf(t.file),r=t.rank;return c=[[1,1],[0,1],[1,0],[-1,0],[-1,-1],[0,-1],[-1,1],[1,-1]].map((function(c){var i=Object(a.a)(c,2),r=i[0],o=i[1];return n.getMoveAtPosition(t,Object(D.a)(e),r,o)})).filter(n.isStandardMove),e.canCastle(n,"SHORT")&&c.push({move:"Castle",type:"SHORT",colour:e.colour,rank:r,file:z[i+2]}),e.canCastle(n,"LONG")&&c.push({move:"Castle",type:"LONG",colour:e.colour,rank:r,file:z[i-2]}),c},e.castlingDeltas=function(e){return"SHORT"===e?[0,1,2]:[0,-1,-2]},e}return Object(R.a)(n,[{key:"canCastle",value:function(e,t){var c=this,i=this.castlingDeltas(t),r="SHORT"===t?"h":"a",o="WHITE"===this.colour?1:8;if(console.log(this.moved),this.moved)return!1;var a=e.getPieceAt({rank:o,file:r});return!(!a.piece||a.piece.moved)&&i.every((function(t){var i=4+t;if(null===e.getPieceAt({file:z[i],rank:o}).piece||0===t){var r=e.clone(),a=new n(c.colour);return a.setMoved(),console.log(a),r.remove({rank:o,file:"e"}),r.placeAt({rank:o,file:z[i]},a),!r.isKingInCheck(c.colour)}return!1}))}}]),n}(q),Y=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="KNIGHT",e.getPotentialMoves=function(t,n){return[[1,2],[2,1],[-1,2],[-2,1],[-1,-2],[-2,-1],[1,-2],[2,-1]].map((function(c){var i=Object(a.a)(c,2),r=i[0],o=i[1];return n.getMoveAtPosition(t,Object(D.a)(e),r,o)})).filter(n.isStandardMove)},e}return n}(q),F=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="PAWN",e.getPotentialMoves=function(t,n){var c="WHITE"===e.colour?1:-1,i=[[c,1],[c,-1]],r=(e.moved?[1*c]:[1*c,2*c]).map((function(c){return n.getMoveAtPosition(t,Object(D.a)(e),c,0)})).filter(n.isStandardMove).filter((function(e){return"Move"===e.move||"PawnPush"===e.move})),o=i.map((function(c){var i=Object(a.a)(c,2),r=i[0],o=i[1];return n.getMoveAtPosition(t,Object(D.a)(e),r,o)})).filter(n.isStandardMove).filter((function(e){return"Capture"===e.move||"CaptureEnPassant"===e.move}));return[].concat(Object(V.a)(r),Object(V.a)(o))},e}return n}(q),J=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="ROOK",e}return Object(R.a)(n,[{key:"getPotentialMoves",value:function(e,t){return[].concat(Object(V.a)(t.getMovesOnLine(e,this,1,0)),Object(V.a)(t.getMovesOnLine(e,this,0,1)),Object(V.a)(t.getMovesOnLine(e,this,0,-1)),Object(V.a)(t.getMovesOnLine(e,this,-1,0)))}}]),n}(q),Z=function(e){Object(G.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).pieceType="QUEEN",e.getPotentialMoves=function(t,n){return[].concat(Object(V.a)(new J(e.colour).getPotentialMoves(t,n)),Object(V.a)(new U(e.colour).getPotentialMoves(t,n)))},e}return n}(q),$=function(){function e(t,n){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(K.a)(this,e),this._piece=void 0,this.rank=void 0,this.file=void 0,this.rank=t,this.file=n,this._piece=c}return Object(R.a)(e,[{key:"piece",get:function(){return this._piece}},{key:"place",value:function(e){this._piece=e}},{key:"remove",value:function(){this._piece=null}},{key:"clone",value:function(){return new e(this.rank,this.file,this.piece)}}]),e}(),ee=(new J("WHITE"),new Y("WHITE"),new U("WHITE"),new Z("WHITE"),new X("WHITE"),new U("WHITE"),new Y("WHITE"),new J("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new F("WHITE"),new J("BLACK"),new Y("BLACK"),new U("BLACK"),new Z("BLACK"),new X("BLACK"),new U("BLACK"),new Y("BLACK"),new J("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new F("BLACK"),new(function(){function e(){Object(K.a)(this,e),this._board=void 0,this._board=new N(function(){var e=S.flatMap((function(e){return z.map((function(t){return new $(e,t)}))})),t=function(t,n,c){var i=e.find((function(e){return e.file===n&&e.rank===t}));null===i||void 0===i||i.place(c)};return t(1,"a",new J("WHITE")),t(1,"b",new Y("WHITE")),t(1,"c",new U("WHITE")),t(1,"d",new Z("WHITE")),t(1,"e",new X("WHITE")),t(1,"f",new U("WHITE")),t(1,"g",new Y("WHITE")),t(1,"h",new J("WHITE")),t(2,"a",new F("WHITE")),t(2,"b",new F("WHITE")),t(2,"c",new F("WHITE")),t(2,"d",new F("WHITE")),t(2,"e",new F("WHITE")),t(2,"f",new F("WHITE")),t(2,"g",new F("WHITE")),t(2,"h",new F("WHITE")),t(7,"a",new F("BLACK")),t(7,"b",new F("BLACK")),t(7,"c",new F("BLACK")),t(7,"d",new F("BLACK")),t(7,"e",new F("BLACK")),t(7,"f",new F("BLACK")),t(7,"g",new F("BLACK")),t(7,"h",new F("BLACK")),t(8,"a",new J("BLACK")),t(8,"b",new Y("BLACK")),t(8,"c",new U("BLACK")),t(8,"d",new Z("BLACK")),t(8,"e",new X("BLACK")),t(8,"f",new U("BLACK")),t(8,"g",new Y("BLACK")),t(8,"h",new J("BLACK")),e}())}return Object(R.a)(e,[{key:"board",get:function(){return this._board}},{key:"move",value:function(e,t){var n=this._board.getPieceAt(e);if(console.log(n),!n.piece)throw new Error("No Piece to move");var c=n.piece.canMove(e,t,this.board);switch(console.log(c),c.move){case"INVALID":break;case"Move":case"PawnPush":case"CaptureEnPassant":case"Capture":if("CaptureEnPassant"===c.move){if(!this._board.enPassant)throw new Error("no enPassant");this._board.remove(this._board.enPassant)}this._board.move(e,t),"PawnPush"===c.move?this._board.enPassant=t:this._board.enPassant=void 0;break;case"Castle":this._board.move(e,t);var i={rank:n.rank,file:"SHORT"===c.type?"h":"a"},r={rank:n.rank,file:"SHORT"===c.type?"f":"d"};this._board.move(i,r)}}}]),e}())),te={board:ee.board},ne=Object(c.createContext)([te,function(){return null}]),ce=function(e,t){switch(t.type){case"PIECE_HOVER":if(!e.activePiece)throw new Error("state is corrupted");return Object(l.a)(Object(l.a)({},e),{},{activePiece:Object(l.a)(Object(l.a)({},e.activePiece),{},{x:t.payload.x,y:t.payload.y})});case"PIECE_ACTIVATED":return Object(l.a)(Object(l.a)({},e),{},{activePiece:Object(l.a)({},t.payload)});case"SQUARE_ATTACKED":return Object(l.a)(Object(l.a)({},e),{},{threatenedSquare:Object(l.a)({},t.payload)});case"MOVE":if(!e.threatenedSquare)throw new Error("state is corrupted");if(!e.activePiece)throw new Error("state is corrupted");var n={file:e.activePiece.file,rank:e.activePiece.rank},c={file:e.threatenedSquare.file,rank:e.threatenedSquare.rank};return ee.move(n,c),{board:ee.board}}},ie=function(e){var t=e.children,n=Object(c.useReducer)(ce,te),i=Object(a.a)(n,2),r=i[0],o=i[1];return Object(s.jsx)(ne.Provider,{value:[r,o],children:t})},re=function(e){var t=e.rank,n=e.file,i=e.bound,r=Object(c.useRef)(null),o=Object(c.useContext)(ne),l=Object(a.a)(o,2),h=l[0],d=l[1],v=Object(c.useState)(!1),f=Object(a.a)(v,2),j=f[0],b=f[1],O=function(e,t){return e%2===0&&z.indexOf(t)%2===0||e%2===1&&z.indexOf(t)%2===1}(t,n),p=function(e,t,n){var c=n.getPieceAt({rank:e,file:t});if(c.piece){var i="WHITE"===c.piece.colour?B:I;switch(c.piece.pieceType){case"BISHOP":return i.Bishop;case"KING":return i.King;case"KNIGHT":return i.Knight;case"PAWN":return i.Pawn;case"QUEEN":return i.Queen;case"ROOK":return i.Rook}}}(t,n,h.board);Object(c.useEffect)((function(){var e,t=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect();t&&(h.activePiece&&h.activePiece.x>=(null===t||void 0===t?void 0:t.left)&&h.activePiece.x<(null===t||void 0===t?void 0:t.right)&&h.activePiece.y>=t.top&&h.activePiece.y<t.bottom?b(!0):b(!1))}),[h,t,n]),Object(c.useEffect)((function(){j&&d({type:"SQUARE_ATTACKED",payload:{rank:t,file:n}})}),[j,d,n,t]);var w=Object(c.useCallback)((function(e,t){return d({type:"PIECE_HOVER",payload:{x:e,y:t}})}),[d]),g=Object(c.useCallback)((function(e,c){return d({type:"PIECE_ACTIVATED",payload:{rank:t,file:n,x:e,y:c}})}),[d,t,n]),k=Object(c.useCallback)((function(){return d({type:"MOVE"})}),[d]);return Object(s.jsxs)("div",{className:"".concat(_.a.chessSquare," ").concat(O?_.a.light:""," ").concat(j?_.a.highlighted:""," ").concat(_.a["rank_".concat(t)]," ").concat(_.a["file_".concat(n)]),rank:t,file:n,ref:r,children:[p&&Object(s.jsx)(u,{boundingBox:i,onMouseUp:k,onMouseMove:w,onMouseDown:g,children:Object(s.jsx)(p,{})}),1===t&&Object(s.jsx)("div",{className:_.a.rank,children:n}),"a"===n&&Object(s.jsx)("div",{className:_.a.file,children:t})]},t+n)},oe=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(),n=Object(a.a)(t,2),i=n[0],r=n[1],o=Object(c.useCallback)((function(){var t;r(null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[]);return se(o),Object(c.useEffect)((function(){var t;r(null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect())}),[e]),Object(s.jsx)("div",{className:_.a.container,children:Object(s.jsx)("div",{ref:e,className:_.a.chessGrid,children:S.map((function(e){return z.map((function(t){return Object(s.jsx)(re,{rank:e,file:t,bound:i},e+t)}))}))})})};var ae=function(){return Object(s.jsx)(ie,{children:Object(s.jsx)(oe,{})})},se=function(e){Object(c.useEffect)((function(){var t=function(){e()};return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[e])},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(ae,{})}),document.getElementById("root")),ue()}},[[21,1,2]]]);
//# sourceMappingURL=main.7d7a61c5.chunk.js.map