function o(t,e,r){return e(r),r(t,e)}var p=/[a-z]/,x=/[A-Z]/,u=/[a-zA-Z0-9_]/,a=/[0-9]/,h=/[0-9A-Fa-f]/,f=/[-&*+.\\/<>=?^|:]/,k=/[(),[\]{}]/,g=/[ \v\f]/;function n(){return function(t,e){if(t.eatWhile(g))return null;var r=t.next();if(k.test(r))return r==="{"&&t.eat("-")?o(t,e,l(1)):r==="["&&t.match("glsl|")?o(t,e,v):"builtin";if(r==="'")return o(t,e,d);if(r==='"')return t.eat('"')?t.eat('"')?o(t,e,m):"string":o(t,e,s);if(x.test(r))return t.eatWhile(u),"type";if(p.test(r)){var i=t.pos===1;return t.eatWhile(u),i?"def":"variable"}if(a.test(r)){if(r==="0"){if(t.eat(/[xX]/))return t.eatWhile(h),"number"}else t.eatWhile(a);return t.eat(".")&&t.eatWhile(a),t.eat(/[eE]/)&&(t.eat(/[-+]/),t.eatWhile(a)),"number"}return f.test(r)?r==="-"&&t.eat("-")?(t.skipToEnd(),"comment"):(t.eatWhile(f),"keyword"):r==="_"?"keyword":"error"}}function l(t){return t==0?n():function(e,r){for(;!e.eol();){var i=e.next();if(i=="{"&&e.eat("-"))++t;else if(i=="-"&&e.eat("}")&&--t==0)return r(n()),"comment"}return r(l(t)),"comment"}}function m(t,e){for(;!t.eol();)if(t.next()==='"'&&t.eat('"')&&t.eat('"'))return e(n()),"string";return"string"}function s(t,e){for(;t.skipTo('\\"');)t.next(),t.next();return t.skipTo('"')?(t.next(),e(n()),"string"):(t.skipToEnd(),e(n()),"error")}function d(t,e){for(;t.skipTo("\\'");)t.next(),t.next();return t.skipTo("'")?(t.next(),e(n()),"string"):(t.skipToEnd(),e(n()),"error")}function v(t,e){for(;!t.eol();)if(t.next()==="|"&&t.eat("]"))return e(n()),"string";return"string"}var W={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const y={startState:function(){return{f:n()}},copyState:function(t){return{f:t.f}},token:function(t,e){var r=e.f(t,function(c){e.f=c}),i=t.current();return W.hasOwnProperty(i)?"keyword":r}};export{y as elm};