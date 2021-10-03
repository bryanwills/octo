function x(e){for(var t={},r=0,i=e.length;r<i;++r)t[e[r]]=!0;return t}var o,b=["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"],w=x(b),E=x(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),T=x(["end","until"]),_={"[":"]","{":"}","(":")"},L={"]":"[","}":"{",")":"("};function c(e,t,r){return r.tokenize.push(e),e(t,r)}function k(e,t){if(e.sol()&&e.match("=begin")&&e.eol())return t.tokenize.push(A),"comment";if(e.eatSpace())return null;var r,i,a,n=e.next();if(n=="`"||n=="'"||n=='"')return c(p(n,"string",n=='"'||n=="`"),e,t);if(n=="/")return function(l){for(var f,y=l.pos,h=0,z=!1,m=!1;(f=l.next())!=null;)if(m)m=!1;else{if("[{(".indexOf(f)>-1)h++;else if("]})".indexOf(f)>-1){if(--h<0)break}else if(f=="/"&&h==0){z=!0;break}m=f=="\\"}return l.backUp(l.pos-y),z}(e)?c(p(n,"string.special",!0),e,t):"operator";if(n=="%"){var u="string",s=!0;e.eat("s")?u="atom":e.eat(/[WQ]/)?u="string":e.eat(/[r]/)?u="string.special":e.eat(/[wxq]/)&&(u="string",s=!1);var d=e.eat(/[^\w\s=]/);return d?(_.propertyIsEnumerable(d)&&(d=_[d]),c(p(d,u,s,!0),e,t)):"operator"}if(n=="#")return e.skipToEnd(),"comment";if(n=="<"&&(r=e.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return c((i=r[2],a=r[1],function(l,f){return a&&l.eatSpace(),l.match(i)?f.tokenize.pop():l.skipToEnd(),"string"}),e,t);if(n=="0")return e.eat("x")?e.eatWhile(/[\da-fA-F]/):e.eat("b")?e.eatWhile(/[01]/):e.eatWhile(/[0-7]/),"number";if(/\d/.test(n))return e.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if(n=="?"){for(;e.match(/^\\[CM]-/););return e.eat("\\")?e.eatWhile(/\w/):e.next(),"string"}if(n==":")return e.eat("'")?c(p("'","atom",!1),e,t):e.eat('"')?c(p('"',"atom",!0),e,t):e.eat(/[\<\>]/)?(e.eat(/[\<\>]/),"atom"):e.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":e.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(e.eatWhile(/[\w$\xa1-\uffff]/),e.eat(/[\?\!\=]/),"atom"):"operator";if(n=="@"&&e.match(/^@?[a-zA-Z_\xa1-\uffff]/))return e.eat("@"),e.eatWhile(/[\w\xa1-\uffff]/),"propertyName";if(n=="$")return e.eat(/[a-zA-Z_]/)?e.eatWhile(/[\w]/):e.eat(/\d/)?e.eat(/\d/):e.next(),"variableName.special";if(/[a-zA-Z_\xa1-\uffff]/.test(n))return e.eatWhile(/[\w\xa1-\uffff]/),e.eat(/[\?\!]/),e.eat(":")?"atom":"variable";if(n!="|"||!t.varList&&t.lastTok!="{"&&t.lastTok!="do"){if(/[\(\)\[\]{}\\;]/.test(n))return o=n,null;if(n=="-"&&e.eat(">"))return"operator";if(/[=+\-\/*:\.^%<>~|]/.test(n)){var g=e.eatWhile(/[=+\-\/*:\.^%<>~|]/);return n!="."||g||(o="."),"operator"}return null}return o="|",null}function v(e){return e||(e=1),function(t,r){if(t.peek()=="}"){if(e==1)return r.tokenize.pop(),r.tokenize[r.tokenize.length-1](t,r);r.tokenize[r.tokenize.length-1]=v(e-1)}else t.peek()=="{"&&(r.tokenize[r.tokenize.length-1]=v(e+1));return k(t,r)}}function W(){var e=!1;return function(t,r){return e?(r.tokenize.pop(),r.tokenize[r.tokenize.length-1](t,r)):(e=!0,k(t,r))}}function p(e,t,r,i){return function(a,n){var u,s=!1;for(n.context.type==="read-quoted-paused"&&(n.context=n.context.prev,a.eat("}"));(u=a.next())!=null;){if(u==e&&(i||!s)){n.tokenize.pop();break}if(r&&u=="#"&&!s){if(a.eat("{")){e=="}"&&(n.context={prev:n.context,type:"read-quoted-paused"}),n.tokenize.push(v());break}if(/[@\$]/.test(a.peek())){n.tokenize.push(W());break}}s=!s&&u=="\\"}return t}}function A(e,t){return e.sol()&&e.match("=end")&&e.eol()&&t.tokenize.pop(),e.skipToEnd(),"comment"}const I={startState:function(e){return{tokenize:[k],indented:0,context:{type:"top",indented:-e},continuedLine:!1,lastTok:null,varList:!1}},token:function(e,t){o=null,e.sol()&&(t.indented=e.indentation());var r,i=t.tokenize[t.tokenize.length-1](e,t),a=o;if(i=="variable"){var n=e.current();(i=t.lastTok=="."?"property":w.propertyIsEnumerable(e.current())?"keyword":/^[A-Z]/.test(n)?"tag":t.lastTok=="def"||t.lastTok=="class"||t.varList?"def":"variable")=="keyword"&&(a=n,E.propertyIsEnumerable(n)?r="indent":T.propertyIsEnumerable(n)?r="dedent":n!="if"&&n!="unless"||e.column()!=e.indentation()?n=="do"&&t.context.indented<t.indented&&(r="indent"):r="indent")}return(o||i&&i!="comment")&&(t.lastTok=a),o=="|"&&(t.varList=!t.varList),r=="indent"||/[\(\[\{]/.test(o)?t.context={prev:t.context,type:o||i,indented:t.indented}:(r=="dedent"||/[\)\]\}]/.test(o))&&t.context.prev&&(t.context=t.context.prev),e.eol()&&(t.continuedLine=o=="\\"||i=="operator"),i},indent:function(e,t,r){if(e.tokenize[e.tokenize.length-1]!=k)return null;var i=t&&t.charAt(0),a=e.context,n=a.type==L[i]||a.type=="keyword"&&/^(?:end|until|else|elsif|when|rescue)\b/.test(t);return a.indented+(n?0:r.unit)+(e.continuedLine?r.unit:0)},languageData:{indentOnInput:/^\s*(?:end|rescue|elsif|else|\})$/,commentTokens:{line:"#"},autocomplete:b}};export{I as ruby};