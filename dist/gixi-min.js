!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(/*! ./gixi */1),o=r(i);"undefined"!=typeof jQuery&&jQuery?!function(t){t.fn.gixi=function(t){var e=t.color,n=t.seed;void 0===n&&(n=this.data("gixiseed"));var r=new o["default"](this.height(),n);"undefined"!=typeof e&&(r.fillStyle=e);var i=r.getImage();"IMG"!==this.prop("tagName")?this.css({"background-image":"url("+i+")"}):this.attr("src",i)}}(jQuery):"undefined"!=typeof window?window.GIXI=o["default"]:t.exports=o["default"],e["default"]=o["default"]},/*!*********************!*\
  !*** ./lib/gixi.js ***!
  \*********************/
function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e){n(this,t),this.r=Math.floor(200*e.random()),this.g=Math.floor(200*e.random()),this.b=Math.floor(200*e.random()),this.t=1}return r(t,[{key:"rgba",value:function(){return"rgba("+this.r+","+this.g+","+this.b+","+this.t+")"}}]),t}(),o=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?60:arguments[0],r=arguments.length<=1||void 0===arguments[1]?Math.random():arguments[1];n(this,t),this.w=e,this.h=e,this.PARTITIONS=3,this.LESS_SEED=6,this.BASE_SEED=5,this.SEED_H=this.h/this.BASE_SEED,this.SEED_W=this.w/this.BASE_SEED,this.random_seed=0,r=r.toString();for(var i=0;i<r.length;i++)this.random_seed+=r.charCodeAt(i)}return r(t,[{key:"random",value:function(){return this.random_seed=Math.sin(34812*this.random_seed+.3),Math.abs(this.random_seed)}},{key:"getImage",value:function(){var t=document.createElement("canvas"),e=null;if(t.width=this.w,t.height=this.h,!t&&!t.getContext)throw new Error("Canvas does not supported");return this.drw=t.getContext("2d"),this.drw.fillStyle=this.fillStyle||new i(this).rgba(),this.map(this.grid()),e=t.toDataURL(),t=null,e}},{key:"draw",value:function(){this.drw.fillRect.apply(this.drw,arguments)}},{key:"map",value:function(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++)t[e][n]===!0&&(this.draw(this.SEED_H*e,this.SEED_W*n,this.SEED_W,this.SEED_H),e<this.PARTITIONS-1&&this.draw(this.SEED_H*(this.PARTITIONS+1-e),this.SEED_W*n,this.SEED_W,this.SEED_H))}},{key:"grid",value:function(){for(var t=this,e=function(){for(var e=[],n=0;n<t.PARTITIONS;n++){e[n]=[];for(var r=0;r<t.BASE_SEED;r++)e[n][r]=!!Math.floor(2*t.random())}return e[t.PARTITIONS-1]=e[t.PARTITIONS-1].map(function(n,r){return e[t.PARTITIONS-2][r]!==n&&!!Math.floor(2*t.random())}),{map:e,dots:function(){return e.map(function(t){return t.reduce(function(t,e){return e?t+e:t})}).reduce(function(t,e){return e+t})},isFilledTop:function(){return e.map(function(t){return t[0]}).reduce(function(t,e){return!(!t&&!e)})},isFilledBottom:function(){return e.map(function(t){return t[t.length-1]}).reduce(function(t,e){return!(!t&&!e)})}}},n=e();n.dots()<this.LESS_SEED||!n.isFilledTop()||!n.isFilledBottom();)n=e();return n.map}}]),t}();e["default"]=o}]);
//# sourceMappingURL=gixi-min.js.map