function u(e){for(var n={},r=0,t=e.length;r<t;++r)n[e[r]]=!0;return n}var p=u(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),d=u([":=","and then","and","or","<<",">>"]);function g(e,n){if(e.eatSpace())return null;var r,t,l,s,a=e.next();return a=='"'||a=="'"?(r=a,t=function(c,f){for(var o,i=!1;(o=c.next())!=null;){if(o==r&&!i){f.tokenize.pop();break}i=!i&&o=="%"}return"string"},l=e,(s=n).tokenize.push(t),t(l,s)):a=="-"&&e.eat("-")?(e.skipToEnd(),"comment"):a==":"&&e.eat("=")?"operator":/[0-9]/.test(a)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"variable"):/[a-zA-Z_0-9]/.test(a)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"variable"):/[=+\-\/*^%<>~]/.test(a)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}const h={startState:function(){return{tokenize:[g]}},token:function(e,n){var r=n.tokenize[n.tokenize.length-1](e,n);if(r=="variable"){var t=e.current();r=p.propertyIsEnumerable(e.current())?"keyword":d.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(t)?"tag":/^0[bB][0-1]+$/g.test(t)||/^0[cC][0-7]+$/g.test(t)||/^0[xX][a-fA-F0-9]+$/g.test(t)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(t)||/^[0-9]+$/g.test(t)?"number":"variable"}return r},languageData:{commentTokens:{line:"--"}}};export{h as eiffel};