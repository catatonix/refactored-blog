!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){(function(e){const n="undefined"!=typeof window?window:e,s=n.XP||i(3),r=n.XPEmitter||i(4),a={};t.exports=new s.Class("XPScript",{extends:r,initialize:{promise:!0,value(t,e){r.call(this),this.state="idle",this.options=t,this.src=this.options.src,this.callback=this.options.callback||null;let i=a.hasOwnProperty(this.src),n=i?null:document.head.querySelector(`script[src="${this.src}"]`),s=i?null:document.createElement("script"),o=i?a[this.src]:new Promise(t=>(this.callback?window:s)[this.callback||"onload"]=t);a[this.src]=o.then(t=>{this.callback?delete window[this.callback]:t=null,this.state="loaded",this.data=t,this.emit("load",t),e(null,t)}),i||(n&&document.head.removeChild(n),document.head.appendChild(Object.assign(s,{async:!0,src:this.src})),"loaded"!==this.state&&(this.state="pending"))}},callback:{set(t){return s.isDefined(this.callback)?this.callback:t},validate:t=>!s.isNull(t)&&!s.isString(t,!0)&&"string"},data:{set(t){return s.isDefined(this.data)?this.data:t}},loaded:{get(){return"loaded"===this.state}},src:{set(t){return this.src||t},validate:t=>!s.isString(t,!0)&&"string"},state:{set:t=>t,then(t){this.emit("state",t)},validate(t){return!this.states.includes(t)&&"string"}},states:{frozen:!0,writable:!1,value:["idle","loaded","pending"]}}),"undefined"!=typeof window&&(window.XPScript=t.exports)}).call(e,i(2))},function(t,e){var i;i=function(){return this}();try{i=i||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e){t.exports=XP},function(t,e){t.exports=XPEmitter}]);