!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in n||(n[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==o.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=n[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(o.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=n[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},b.name);c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=n[k],o=s[k];o?j=o.exports:l&&!l.declarative?j=l.esModule:l?(h(l),o=l.module,j=o.exports):j=m(k),o&&o.importers?(o.importers.push(c),c.dependencies.push(o)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=n[a];if(c)c.declarative?l(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=m(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b["default"]:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=n[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){if(b===a)return b;var c={};if("object"==typeof b||"function"==typeof b)if(p){var d;for(var e in b)(d=Object.getOwnPropertyDescriptor(b,e))&&r(c,e,d)}else{var f=b&&b.hasOwnProperty;for(var e in b)(!f||b.hasOwnProperty(e))&&(c[e]=b[e])}return c["default"]=b,r(c,"__useDefault",{value:!0}),c}function l(b,c){var d=n[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==o.call(c,g)&&(n[g]?l(g,c):m(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function m(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return t(a.substr(6));var b=n[a];if(!b)throw"Module "+a+" not present.";return f(a),l(a,[]),n[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var n={},o=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},p=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(q){p=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(d){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,u={"@empty":{}};return function(a,d,e){return function(f){f(function(f){for(var g={_nodeRequire:t,register:b,registerDynamic:c,get:m,set:function(a,b){u[a]=b},newModule:function(a){return a}},h=0;h<d.length;h++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[h],arguments[h]);e(g);var i=m(a[0]);if(a.length>1)for(var h=1;h<a.length;h++)m(a[h]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)(["1"],[],function(a){!function(){var b=a;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var c=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");b.set("@@cjs-helpers",b.newModule({getPathVars:function(a){var b,d=a.lastIndexOf("!");b=-1!=d?a.substr(0,d):a;var e=b.split("/");return e.pop(),e=e.join("/"),"file:///"==b.substr(0,8)?(b=b.substr(7),e=e.substr(7),isWindows&&(b=b.substr(1),e=e.substr(1))):c&&b.substr(0,c.length)===c&&(b=b.substr(c.length),e=e.substr(c.length)),{filename:b,dirname:e}}}))}(),a.register("2",[],function(a){"use strict";function b(){$Z.verbose&&console.log("vizflow step start","$Z.requestAnimFrame",$Z.requestAnimFrame,"$Z.run",$Z.run,"$Z.iter",$Z.iter,"$Z.maxIter",$Z.maxIter),$Z.iter++,$Z.requestAnimFrame.call(window,$Z.run)}return a("default",b),{setters:[],execute:function(){}}}),a.register("3",[],function(a){"use strict";function b(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];return 0==b.length?$Z._item:($Z._item=b[0],$Z)}return a("default",b),{setters:[],execute:function(){}}}),a.register("4",["5"],function(a){function b(){for(var a=arguments.length,b=Array(a),d=0;a>d;d++)b[d]=arguments[d];return 0==b.length?$Z._prep.map(function(a){return c.resolve(a.prep())}):($Z._prep=b[0],$Z)}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("6",["5"],function(a){function b(){for(var a=arguments.length,b=Array(a),d=0;a>d;d++)b[d]=arguments[d];return 0==b.length?$Z._post.map(function(a){return c.resolve(a.post())}):($Z._post=b[0],$Z)}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("7",["5"],function(a){function b(){for(var a=arguments.length,b=Array(a),d=0;a>d;d++)b[d]=arguments[d];return 0==b.length?$Z._detect.map(function(a){return c.resolve(a.detect())}):($Z._detect=b[0],$Z)}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("8",["5"],function(a){function b(){for(var a=arguments.length,b=Array(a),d=0;a>d;d++)b[d]=arguments[d];return 0==b.length?$Z._perform.map(function(a){return c.resolve(a.perform())}):($Z._perform=b[0],$Z)}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("9",["5"],function(a){function b(a){for(var b=c.resolve(),d=0;d<a.length;d++)b=b.then(a[d]);return b}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("a",[],function(a){"use strict";function b(){return $Z.iter>$Z.maxIter?!0:!1}return a("default",b),{setters:[],execute:function(){}}}),a.register("b",[],function(a){"use strict";function b(){return $Z.verbose&&console.log("$Z exiting"),$Z._item=[],$Z._prep=[],$Z._post=[],$Z._detect=[],$Z._perform=[],$Z._viz={},!1}return a("default",b),{setters:[],execute:function(){}}}),a.register("c",[],function(a){"use strict";function b(){$Z.verbose&&console.log("vizflow run start","$Z.iter",$Z.iter,"$Z.task",$Z.task),$Z.currentTime=Date.now(),$Z.sim=$Z.pipe($Z.task)}return a("default",b),{setters:[],execute:function(){}}}),a.register("d",[],function(a){"use strict";function b(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];if(0==b.length)return $Z._viz;$Z.exit();var d=b[0];return void 0!==d.item&&($Z._item=d.item),void 0!==d.prep&&$Z._prep.push(d),void 0!==d.post&&$Z._post.push(d),void 0!==d.detect&&$Z._detect.push(d),void 0!==d.perform&&$Z._perform.push(d),$Z._viz=d,$Z}return a("default",b),{setters:[],execute:function(){}}}),a.register("e",[],function(a){"use strict";function b(){var a=this,b=[],c=[];if(void 0!==a.child)for(var d=0;d<a.child.length;d++){var e=a.child[d];e.update?e.update():$Z.update.call(e)}if(void 0!==a.transition){a.transition.constructor!==Array&&(a.transition=[a.transition]);for(var f=0;f<a.transition.length;f++){var g=a.transition[f],h=0;void 0===g.startTime?g.startTime=$Z.currentTime:h=$Z.currentTime-g.startTime;var i=g.duration-h;if(0==h)g.startValue=a[g.varName];else if(i>0){var j=1-i/g.duration;a[g.varName]=g.interpFunc(j)}else a[g.varName]=g.endValue,(void 0===g.pause||-i>g.pause)&&(b.push(f),void 0!==g.child&&c.push(g.child))}for(var k=b.length-1;k>=0;k--){if(b[k]<a.transition.length-1){var l=a.transition[a.transition.length-1];a.transition[a.transition.length-1]=a.transition[b[k]],a.transition[b[k]]=l}var g=a.transition.pop();if(void 0!==g.end)if(g.end.constructor===Array)for(var m=0;m<g.end.length;m++)"function"==typeof g.end[m]?g.end[m]():g.end[kend].run();else"function"==typeof g.end?g.end():g.end.run()}for(var d=0;d<c.length;d++)a.transition.push(c[d])}}return a("default",b),{setters:[],execute:function(){}}}),a.register("f",["5"],function(a){function b(){return c.all($Z.prep())}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("10",["5"],function(a){function b(){return c.all($Z.item().map(function(a){return c.resolve(a.update?a.update():$Z.update.call(a))})).then(c.resolve($Z._viz.update?$Z._viz.update():$Z.update.call($Z._viz)))}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("11",["5"],function(a){function b(){return c.all($Z.detect())}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("12",["5"],function(a){function b(){return c.all($Z.perform())}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("13",["5"],function(a){function b(){return c.all($Z.item().map(function(a){return c.resolve(a.render())}))}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("14",["5"],function(a){function b(){return $Z.verbose&&console.log("vizflow: step or exit start"),$Z.done()?($Z.exit(),c.resolve(!0)):($Z.step(),c.resolve(!1))}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.registerDynamic("15",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,d.define=e,c.exports}),a.registerDynamic("16",["17","18"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("17"),g=a("18");return c.exports=function(a){return function(b,c){var d,e,h=String(g(b)),i=f(c),j=h.length;return 0>i||i>=j?a?"":void 0:(d=h.charCodeAt(i),55296>d||d>56319||i+1===j||(e=h.charCodeAt(i+1))<56320||e>57343?a?h.charAt(i):d:a?h.slice(i,i+2):(d-55296<<10)+(e-56320)+65536)}},d.define=e,c.exports}),a.registerDynamic("19",["16","1a"],!0,function(a,b,c){"use strict";var d=this,e=d.define;d.define=void 0;var f=a("16")(!0);return a("1a")(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,b=this._t,c=this._i;return c>=b.length?{value:void 0,done:!0}:(a=f(b,c),this._i+=a.length,{value:a,done:!1})}),d.define=e,c.exports}),a.registerDynamic("1b",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(){},d.define=e,c.exports}),a.registerDynamic("1c",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a,b){return{value:b,done:!!a}},d.define=e,c.exports}),a.registerDynamic("1d",["1e"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("1e");return c.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==f(a)?a.split(""):Object(a)},d.define=e,c.exports}),a.registerDynamic("18",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a},d.define=e,c.exports}),a.registerDynamic("1f",["1d","18"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("1d"),g=a("18");return c.exports=function(a){return f(g(a))},d.define=e,c.exports}),a.registerDynamic("20",["21","22","23","24","25"],!0,function(a,b,c){"use strict";var d=this,e=d.define;d.define=void 0;var f=a("21"),g=a("22"),h=a("23"),i={};return a("24")(i,a("25")("iterator"),function(){return this}),c.exports=function(a,b,c){a.prototype=f.create(i,{next:g(1,c)}),h(a,b+" Iterator")},d.define=e,c.exports}),a.registerDynamic("1a",["26","27","28","24","29","2a","20","23","21","25"],!0,function(a,b,c){"use strict";var d=this,e=d.define;d.define=void 0;var f=a("26"),g=a("27"),h=a("28"),i=a("24"),j=a("29"),k=a("2a"),l=a("20"),m=a("23"),n=a("21").getProto,o=a("25")("iterator"),p=!([].keys&&"next"in[].keys()),q="@@iterator",r="keys",s="values",t=function(){return this};return c.exports=function(a,b,c,d,e,u,v){l(c,b,d);var w,x,y=function(a){if(!p&&a in C)return C[a];switch(a){case r:return function(){return new c(this,a)};case s:return function(){return new c(this,a)}}return function(){return new c(this,a)}},z=b+" Iterator",A=e==s,B=!1,C=a.prototype,D=C[o]||C[q]||e&&C[e],E=D||y(e);if(D){var F=n(E.call(new a));m(F,z,!0),!f&&j(C,q)&&i(F,o,t),A&&D.name!==s&&(B=!0,E=function(){return D.call(this)})}if(f&&!v||!p&&!B&&C[o]||i(C,o,E),k[b]=E,k[z]=t,e)if(w={values:A?E:y(s),keys:u?E:y(r),entries:A?y("entries"):E},v)for(x in w)x in C||h(C,x,w[x]);else g(g.P+g.F*(p||B),b,w);return w},d.define=e,c.exports}),a.registerDynamic("2b",["1b","1c","2a","1f","1a"],!0,function(a,b,c){"use strict";var d=this,e=d.define;d.define=void 0;var f=a("1b"),g=a("1c"),h=a("2a"),i=a("1f");return c.exports=a("1a")(Array,"Array",function(a,b){this._t=i(a),this._i=0,this._k=b},function(){var a=this._t,b=this._k,c=this._i++;return!a||c>=a.length?(this._t=void 0,g(1)):"keys"==b?g(0,c):"values"==b?g(0,a[c]):g(0,[c,a[c]])},"values"),h.Arguments=h.Array,f("keys"),f("values"),f("entries"),d.define=e,c.exports}),a.registerDynamic("2c",["2b","2a"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0,a("2b");var f=a("2a");return f.NodeList=f.HTMLCollection=f.Array,d.define=e,c.exports}),a.registerDynamic("26",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=!0,d.define=e,c.exports}),a.registerDynamic("27",["2d","2e","2f"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var d=a("2d"),f=a("2e"),g=a("2f"),h="prototype",i=function(a,b,c){var e,j,k,l=a&i.F,m=a&i.G,n=a&i.S,o=a&i.P,p=a&i.B,q=a&i.W,r=m?f:f[b]||(f[b]={}),s=m?d:n?d[b]:(d[b]||{})[h];m&&(c=b);for(e in c)j=!l&&s&&e in s,j&&e in r||(k=j?s[e]:c[e],r[e]=m&&"function"!=typeof s[e]?c[e]:p&&j?g(k,d):q&&s[e]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[h]=a[h],b}(k):o&&"function"==typeof k?g(Function.call,k):k,o&&((r[h]||(r[h]={}))[e]=k))};return i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,c.exports=i,d.define=e,c.exports}),a.registerDynamic("30",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a,b,c){if(!(a instanceof b))throw TypeError(c+": use the 'new' operator!");return a},d.define=e,c.exports}),a.registerDynamic("31",["32"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("32");return c.exports=function(a,b,c,d){try{return d?b(f(c)[0],c[1]):b(c)}catch(e){var g=a["return"];throw void 0!==g&&f(g.call(a)),e}},d.define=e,c.exports}),a.registerDynamic("33",["2a","25"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("2a"),g=a("25")("iterator"),h=Array.prototype;return c.exports=function(a){return void 0!==a&&(f.Array===a||h[g]===a)},d.define=e,c.exports}),a.registerDynamic("17",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=Math.ceil,g=Math.floor;return c.exports=function(a){return isNaN(a=+a)?0:(a>0?g:f)(a)},d.define=e,c.exports}),a.registerDynamic("34",["17"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("17"),g=Math.min;return c.exports=function(a){return a>0?g(f(a),9007199254740991):0},d.define=e,c.exports}),a.registerDynamic("35",["1e","25"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("1e"),g=a("25")("toStringTag"),h="Arguments"==f(function(){return arguments}());return c.exports=function(a){var b,c,d;return void 0===a?"Undefined":null===a?"Null":"string"==typeof(c=(b=Object(a))[g])?c:h?f(b):"Object"==(d=f(b))&&"function"==typeof b.callee?"Arguments":d},d.define=e,c.exports}),a.registerDynamic("2a",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports={},d.define=e,c.exports}),a.registerDynamic("36",["35","25","2a","2e"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("35"),g=a("25")("iterator"),h=a("2a");return c.exports=a("2e").getIteratorMethod=function(a){return void 0!=a?a[g]||a["@@iterator"]||h[f(a)]:void 0},d.define=e,c.exports}),a.registerDynamic("37",["2f","31","33","32","34","36"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("2f"),g=a("31"),h=a("33"),i=a("32"),j=a("34"),k=a("36");return c.exports=function(a,b,c,d){var e,l,m,n=k(a),o=f(c,d,b?2:1),p=0;if("function"!=typeof n)throw TypeError(a+" is not iterable!");if(h(n))for(e=j(a.length);e>p;p++)b?o(i(l=a[p])[0],l[1]):o(a[p]);else for(m=n.call(a);!(l=m.next()).done;)g(m,o,l.value,b)},d.define=e,c.exports}),a.registerDynamic("38",["21","39","32","2f"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("21").getDesc,g=a("39"),h=a("32"),i=function(a,b){if(h(a),!g(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};return c.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(b,c,d){try{d=a("2f")(Function.call,f(Object.prototype,"__proto__").set,2),d(b,[]),c=!(b instanceof Array)}catch(e){c=!0}return function(a,b){return i(a,b),c?a.__proto__=b:d(a,b),a}}({},!1):void 0),check:i},d.define=e,c.exports}),a.registerDynamic("3a",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=Object.is||function(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b},d.define=e,c.exports}),a.registerDynamic("32",["39"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("39");return c.exports=function(a){if(!f(a))throw TypeError(a+" is not an object!");return a},d.define=e,c.exports}),a.registerDynamic("3b",["32","3c","25"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("32"),g=a("3c"),h=a("25")("species");return c.exports=function(a,b){var c,d=f(a).constructor;return void 0===d||void 0==(c=f(d)[h])?b:g(c)},d.define=e,c.exports}),a.registerDynamic("3c",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a},d.define=e,c.exports}),a.registerDynamic("2f",["3c"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("3c");return c.exports=function(a,b,c){if(f(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}},d.define=e,c.exports}),a.registerDynamic("3d",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)},d.define=e,c.exports}),a.registerDynamic("3e",["2d"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=a("2d").document&&document.documentElement,d.define=e,c.exports}),a.registerDynamic("39",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a},d.define=e,c.exports}),a.registerDynamic("3f",["39","2d"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("39"),g=a("2d").document,h=f(g)&&f(g.createElement);return c.exports=function(a){return h?g.createElement(a):{}},d.define=e,c.exports}),a.registerDynamic("40",["2f","3d","3e","3f","2d","1e","41"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,function(b){var d,e,f,g=a("2f"),h=a("3d"),i=a("3e"),j=a("3f"),k=a("2d"),b=k.process,l=k.setImmediate,m=k.clearImmediate,n=k.MessageChannel,o=0,p={},q="onreadystatechange",r=function(){var a=+this;if(p.hasOwnProperty(a)){var b=p[a];delete p[a],b()}},s=function(a){r.call(a.data)};l&&m||(l=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return p[++o]=function(){h("function"==typeof a?a:Function(a),b)},d(o),o},m=function(a){delete p[a]},"process"==a("1e")(b)?d=function(a){b.nextTick(g(r,a,1))}:n?(e=new n,f=e.port2,e.port1.onmessage=s,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",s,!1)):d=q in j("script")?function(a){i.appendChild(j("script"))[q]=function(){i.removeChild(this),r.call(a)}}:function(a){setTimeout(g(r,a,1),0)}),c.exports={set:l,clear:m}}(a("41")),d.define=e,c.exports}),a.registerDynamic("1e",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f={}.toString;return c.exports=function(a){return f.call(a).slice(8,-1)},d.define=e,c.exports}),a.registerDynamic("42",["2d","40","1e","41"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,function(b){var d,e,f,g=a("2d"),h=a("40").set,i=g.MutationObserver||g.WebKitMutationObserver,b=g.process,j=g.Promise,k="process"==a("1e")(b),l=function(){var a,c,f;for(k&&(a=b.domain)&&(b.domain=null,a.exit());d;)c=d.domain,f=d.fn,c&&c.enter(),f(),c&&c.exit(),d=d.next;e=void 0,a&&a.enter()};if(k)f=function(){b.nextTick(l)};else if(i){var m=1,n=document.createTextNode("");new i(l).observe(n,{characterData:!0}),f=function(){n.data=m=-m}}else f=j&&j.resolve?function(){j.resolve().then(l)}:function(){h.call(g,l)};c.exports=function(a){var c={fn:a,next:void 0,domain:k&&b.domain};e&&(e.next=c),d||(d=c,f()),e=c}}(a("41")),d.define=e,c.exports}),a.registerDynamic("22",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}},d.define=e,c.exports}),a.registerDynamic("24",["21","22","43"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("21"),g=a("22");return c.exports=a("43")?function(a,b,c){return f.setDesc(a,b,g(1,c))}:function(a,b,c){return a[b]=c,a},d.define=e,c.exports}),a.registerDynamic("28",["24"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=a("24"),d.define=e,c.exports}),a.registerDynamic("44",["28"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("28");return c.exports=function(a,b){for(var c in b)f(a,c,b[c]);return a},d.define=e,c.exports}),a.registerDynamic("29",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f={}.hasOwnProperty;return c.exports=function(a,b){return f.call(a,b)},d.define=e,c.exports}),a.registerDynamic("23",["21","29","25"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("21").setDesc,g=a("29"),h=a("25")("toStringTag");return c.exports=function(a,b,c){a&&!g(a=c?a:a.prototype,h)&&f(a,h,{configurable:!0,value:b})},d.define=e,c.exports}),a.registerDynamic("21",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=Object;return c.exports={create:f.create,getProto:f.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:f.getOwnPropertyDescriptor,setDesc:f.defineProperty,setDescs:f.defineProperties,getKeys:f.keys,getNames:f.getOwnPropertyNames,getSymbols:f.getOwnPropertySymbols,each:[].forEach},d.define=e,c.exports}),a.registerDynamic("45",[],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=function(a){try{return!!a()}catch(b){return!0}},d.define=e,c.exports}),a.registerDynamic("43",["45"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=!a("45")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),d.define=e,c.exports}),a.registerDynamic("46",["2e","21","43","25"],!0,function(a,b,c){"use strict";var d=this,e=d.define;d.define=void 0;var f=a("2e"),g=a("21"),h=a("43"),i=a("25")("species");return c.exports=function(a){var b=f[a];h&&b&&!b[i]&&g.setDesc(b,i,{configurable:!0,get:function(){return this}})},d.define=e,c.exports}),a.registerDynamic("47",["2d"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var d=a("2d"),f="__core-js_shared__",g=d[f]||(d[f]={});return c.exports=function(a){return g[a]||(g[a]={})},d.define=e,c.exports}),a.registerDynamic("48",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=0,g=Math.random();return c.exports=function(a){return"Symbol(".concat(void 0===a?"":a,")_",(++f+g).toString(36))},d.define=e,c.exports}),a.registerDynamic("2d",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var d=c.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();return"number"==typeof __g&&(__g=d),d.define=e,c.exports}),a.registerDynamic("25",["47","48","2d"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("47")("wks"),g=a("48"),h=a("2d").Symbol;return c.exports=function(a){return f[a]||(f[a]=h&&h[a]||(h||g)("Symbol."+a))},d.define=e,c.exports}),a.registerDynamic("49",["25"],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=a("25")("iterator"),g=!1;try{var h=[7][f]();h["return"]=function(){g=!0},Array.from(h,function(){throw 2})}catch(i){}return c.exports=function(a,b){if(!b&&!g)return!1;var c=!1;try{var d=[7],e=d[f]();e.next=function(){return{done:c=!0}},d[f]=function(){return e},a(d)}catch(h){}return c},d.define=e,c.exports}),a.registerDynamic("4a",[],!0,function(a,b,c){function d(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function f(a){if(n===setTimeout)return setTimeout(a,0);if((n===d||!n)&&setTimeout)return n=setTimeout,setTimeout(a,0);try{return n(a,0)}catch(b){try{return n.call(null,a,0)}catch(b){return n.call(this,a,0)}}}function g(a){if(o===clearTimeout)return clearTimeout(a);if((o===e||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(a);try{return o(a)}catch(b){try{return o.call(null,a)}catch(b){return o.call(this,a)}}}function h(){s&&q&&(s=!1,q.length?r=q.concat(r):t=-1,r.length&&i())}function i(){if(!s){var a=f(h);s=!0;for(var b=r.length;b;){for(q=r,r=[];++t<b;)q&&q[t].run();t=-1,b=r.length}q=null,s=!1,g(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var l=this,m=l.define;l.define=void 0;var n,o,p=c.exports={};!function(){try{n="function"==typeof setTimeout?setTimeout:d}catch(a){n=d}try{o="function"==typeof clearTimeout?clearTimeout:e}catch(a){o=e}}();var q,r=[],s=!1,t=-1;return p.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];r.push(new j(a,b)),1!==r.length||s||f(i)},j.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=k,p.addListener=k,p.once=k,p.off=k,p.removeListener=k,p.removeAllListeners=k,p.emit=k,p.prependListener=k,p.prependOnceListener=k,p.listeners=function(a){return[]},p.binding=function(a){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(a){throw new Error("process.chdir is not supported")},p.umask=function(){return 0},l.define=m,c.exports}),a.registerDynamic("4b",["4a"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=a("4a"),d.define=e,c.exports}),a.registerDynamic("4c",["4b"],!0,function(b,c,d){var e=this,f=e.define;return e.define=void 0,d.exports=a._nodeRequire?process:b("4b"),e.define=f,d.exports}),a.registerDynamic("41",["4c"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports=a("4c"),d.define=e,c.exports}),a.registerDynamic("4d",["21","26","2d","2f","35","27","39","32","3c","30","37","38","3a","25","3b","42","43","44","23","46","2e","49","41"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,function(b){"use strict";var c,d=a("21"),e=a("26"),f=a("2d"),g=a("2f"),h=a("35"),i=a("27"),j=a("39"),k=a("32"),l=a("3c"),m=a("30"),n=a("37"),o=a("38").set,p=a("3a"),q=a("25")("species"),r=a("3b"),s=a("42"),t="Promise",b=f.process,u="process"==h(b),v=f[t],w=function(){},x=function(a){var b,c=new v(w);return a&&(c.constructor=function(a){a(w,w)}),(b=v.resolve(c))["catch"](w),b===c},y=function(){function b(a){var c=new v(a);return o(c,b.prototype),c}var c=!1;try{if(c=v&&v.resolve&&x(),o(b,v),b.prototype=d.create(v.prototype,{constructor:{value:b}}),b.resolve(5).then(function(){})instanceof b||(c=!1),c&&a("43")){var e=!1;v.resolve(d.setDesc({},"then",{get:function(){e=!0}})),c=e}}catch(f){c=!1}return c}(),z=function(a,b){return e&&a===v&&b===c?!0:p(a,b)},A=function(a){var b=k(a)[q];return void 0!=b?b:a},B=function(a){var b;return j(a)&&"function"==typeof(b=a.then)?b:!1},C=function(a){var b,c;this.promise=new a(function(a,d){if(void 0!==b||void 0!==c)throw TypeError("Bad Promise constructor");b=a,c=d}),this.resolve=l(b),this.reject=l(c)},D=function(a){try{a()}catch(b){return{error:b}}},E=function(a,c){if(!a.n){a.n=!0;var d=a.c;s(function(){for(var e=a.v,g=1==a.s,h=0,i=function(b){var c,d,f=g?b.ok:b.fail,h=b.resolve,i=b.reject;try{f?(g||(a.h=!0),c=f===!0?e:f(e),c===b.promise?i(TypeError("Promise-chain cycle")):(d=B(c))?d.call(c,h,i):h(c)):i(e)}catch(j){i(j)}};d.length>h;)i(d[h++]);d.length=0,a.n=!1,c&&setTimeout(function(){var c,d,g=a.p;F(g)&&(u?b.emit("unhandledRejection",e,g):(c=f.onunhandledrejection)?c({promise:g,reason:e}):(d=f.console)&&d.error&&d.error("Unhandled promise rejection",e)),a.a=void 0},1)})}},F=function(a){var b,c=a._d,d=c.a||c.c,e=0;if(c.h)return!1;for(;d.length>e;)if(b=d[e++],b.fail||!F(b.promise))return!1;return!0},G=function(a){var b=this;b.d||(b.d=!0,b=b.r||b,b.v=a,b.s=2,b.a=b.c.slice(),E(b,!0))},H=function(a){var b,c=this;if(!c.d){c.d=!0,c=c.r||c;try{if(c.p===a)throw TypeError("Promise can't be resolved itself");(b=B(a))?s(function(){var d={r:c,d:!1};try{b.call(a,g(H,d,1),g(G,d,1))}catch(e){G.call(d,e)}}):(c.v=a,c.s=1,E(c,!1))}catch(d){G.call({r:c,d:!1},d)}}};y||(v=function(a){l(a);var b=this._d={p:m(this,v,t),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{a(g(H,b,1),g(G,b,1))}catch(c){G.call(b,c)}},a("44")(v.prototype,{then:function(a,b){var c=new C(r(this,v)),d=c.promise,e=this._d;return c.ok="function"==typeof a?a:!0,c.fail="function"==typeof b&&b,e.c.push(c),e.a&&e.a.push(c),e.s&&E(e,!1),d},"catch":function(a){return this.then(void 0,a)}})),i(i.G+i.W+i.F*!y,{Promise:v}),a("23")(v,t),a("46")(t),c=a("2e")[t],i(i.S+i.F*!y,t,{reject:function(a){var b=new C(this),c=b.reject;return c(a),b.promise}}),i(i.S+i.F*(!y||x(!0)),t,{resolve:function(a){if(a instanceof v&&z(a.constructor,this))return a;var b=new C(this),c=b.resolve;return c(a),b.promise}}),i(i.S+i.F*!(y&&a("49")(function(a){v.all(a)["catch"](function(){})})),t,{all:function(a){var b=A(this),c=new C(b),e=c.resolve,f=c.reject,g=[],h=D(function(){n(a,!1,g.push,g);var c=g.length,h=Array(c);c?d.each.call(g,function(a,d){var g=!1;b.resolve(a).then(function(a){g||(g=!0,h[d]=a,--c||e(h))},f)}):e(h)});return h&&f(h.error),c.promise},race:function(a){var b=A(this),c=new C(b),d=c.reject,e=D(function(){n(a,!1,function(a){b.resolve(a).then(c.resolve,d)})});return e&&d(e.error),c.promise}})}(a("41")),d.define=e,c.exports}),a.registerDynamic("2e",[],!0,function(a,b,c){var d=this,e=d.define;d.define=void 0;var f=c.exports={version:"1.2.6"};return"number"==typeof __e&&(__e=f),d.define=e,c.exports}),a.registerDynamic("4e",["15","19","2c","4d","2e"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,a("15"),a("19"),a("2c"),a("4d"),c.exports=a("2e").Promise,d.define=e,c.exports}),a.registerDynamic("5",["4e"],!0,function(a,b,c){var d=this,e=d.define;return d.define=void 0,c.exports={"default":a("4e"),__esModule:!0},d.define=e,c.exports}),a.register("4f",["5"],function(a){
function b(){return c.all($Z.post())}var c;return{setters:[function(a){c=a["default"]}],execute:function(){"use strict";a("default",b)}}}),a.register("1",["2","3","4","6","7","8","9","10","11","12","13","14","a","b","c","d","e","f","4f"],function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;return{setters:[function(a){b=a["default"]},function(a){c=a["default"]},function(a){d=a["default"]},function(a){e=a["default"]},function(a){f=a["default"]},function(a){g=a["default"]},function(a){h=a["default"]},function(a){i=a["default"]},function(a){j=a["default"]},function(a){k=a["default"]},function(a){l=a["default"]},function(a){m=a["default"]},function(a){n=a["default"]},function(a){o=a["default"]},function(a){p=a["default"]},function(a){q=a["default"]},function(a){r=a["default"]},function(a){s=a["default"]},function(a){t=a["default"]}],execute:function(){u={requestAnimFrame:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a,b){window.setTimeout(a,17)},task:[s,j,k,i,l,t,m],verbose:!1,iter:0,maxIter:1/0,_item:[],_prep:[],_post:[],_detect:[],_perform:[],_viz:{},item:c,prep:d,update:r,post:e,detect:f,perform:g,pipe:h,step:b,done:n,exit:o,run:p,viz:q},window.$Z=u,a("default",u)}}})})(function(a){a()});
//# sourceMappingURL=vizflow.js.map