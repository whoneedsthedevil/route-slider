/*! A KickAds company. - 2017-04-20 */!function(a){"use strict";function b(b){return b instanceof a||a.zepto&&a.zepto.isZ(b)}function c(b,c){if("string"==typeof b&&0===b.indexOf("-inline-"))return this.method=c||"html",this.target=this.el=a(b.replace("-inline-","")||"<div/>"),!0}function d(b){if("string"==typeof b&&0!==b.indexOf("-")){this.method="val";var c=document.createElement("input");return c.name=b,c.type="hidden",this.target=this.el=a(c),!0}}function e(a){if("function"==typeof a)return this.target=!1,this.method=a,!0}function f(a,c){if(b(a)&&!c)return a.is("input, select, textarea")?(this.method="val",this.target=a.on("change.liblink",this.changeHandler)):(this.target=a,this.method="html"),!0}function g(a,c){if(b(a)&&("function"==typeof c||"string"==typeof c&&a[c]))return this.method=c,this.target=a,!0}function h(b,c,d){var e=this,f=!1;if(this.changeHandler=function(b){var c=e.formatInstance.from(a(this).val());if(!1===c||isNaN(c))return a(this).val(e.lastSetValue),!1;e.changeHandlerMethod.call("",b,c)},this.el=!1,this.formatInstance=d,a.each(k,function(a,d){return!(f=d.call(e,b,c))}),!f)throw new RangeError("(Link) Invalid Link.")}function i(a){this.items=[],this.elements=[],this.origin=a}function j(b,c,d,e){0===b&&(b=this.LinkDefaultFlag),this.linkAPI||(this.linkAPI={}),this.linkAPI[b]||(this.linkAPI[b]=new i(this));var f=new h(c,d,e||this.LinkDefaultFormatter);f.target||(f.target=a(this)),f.changeHandlerMethod=this.LinkConfirm(b,f.el),this.linkAPI[b].push(f,f.el),this.LinkUpdate(b)}var k=[c,d,e,f,g];h.prototype.set=function(a){var b=Array.prototype.slice.call(arguments),c=b.slice(1);this.lastSetValue=this.formatInstance.to(a),c.unshift(this.lastSetValue),("function"==typeof this.method?this.method:this.target[this.method]).apply(this.target,c)},i.prototype.push=function(a,b){this.items.push(a),b&&this.elements.push(b)},i.prototype.reconfirm=function(a){var b;for(b=0;b<this.elements.length;b+=1)this.origin.LinkConfirm(a,this.elements[b])},i.prototype.remove=function(a){var b;for(b=0;b<this.items.length;b+=1)this.items[b].target.off(".liblink");for(b=0;b<this.elements.length;b+=1)this.elements[b].remove()},i.prototype.change=function(a){if(this.origin.LinkIsEmitting)return!1;this.origin.LinkIsEmitting=!0;var b,c=Array.prototype.slice.call(arguments,1);for(c.unshift(a),b=0;b<this.items.length;b+=1)this.items[b].set.apply(this.items[b],c);this.origin.LinkIsEmitting=!1},a.fn.Link=function(b){var c=this;if(!1===b)return c.each(function(){this.linkAPI&&(a.map(this.linkAPI,function(a){a.remove()}),delete this.linkAPI)});if(void 0===b)b=0;else if("string"!=typeof b)throw new Error("Flag must be string.");return{to:function(a,d,e){return c.each(function(){j.call(this,b,a,d,e)})}}}}(window.jQuery||window.Zepto);