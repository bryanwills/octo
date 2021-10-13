import{u as Y,F as _,f as V,j as y,S as A,w as q,d as N,K as I,J as D,$ as p,C as M}from"./Editor.4d648d65.js";import"./MarkdownEditor.umd.9fc6c46c.js";import"./vendor.71bc5b01.js";import"./index.d5de1f84.js";function B(O){return O==45||O==46||O==58||O>=65&&O<=90||O==95||O>=97&&O<=122||O>=161}let U=null,R=null,X=0;function C(O,t){let e=O.pos+t;if(R==O&&X==e)return U;for(;(s=O.peek(t))==9||s==10||s==13||s==32;)t++;var s;let c="";for(;;){let h=O.peek(t);if(!B(h))break;c+=String.fromCharCode(h),t++}return R=O,X=e,U=c||null}function Z(O,t){this.name=O,this.parent=t,this.hash=t?t.hash:0;for(let e=0;e<O.length;e++)this.hash+=(this.hash<<4)+O.charCodeAt(e)+(O.charCodeAt(e)<<8)}const F=new Y({start:null,shift:(O,t,e,s)=>t==1?new Z(C(s,1)||"",O):O,reduce:(O,t)=>t==10&&O?O.parent:O,reuse(O,t,e,s){let c=t.type.id;return c==1||c==12?new Z(C(s,1)||"",O):O},hash:O=>O?O.hash:0,strict:!1}),H=new _((O,t)=>{if(O.next==60){if(O.advance(),O.next==47){O.advance();let e=C(O,0);if(!e)return O.acceptToken(5);if(t.context&&e==t.context.name)return O.acceptToken(2);for(let s=t.context;s;s=s.parent)if(s.name==e)return O.acceptToken(3,-2);O.acceptToken(4)}else if(O.next!=33&&O.next!=63)return O.acceptToken(1)}},{contextual:!0});function W(O,t){return new _(e=>{for(let s=0,c=0;;c++){if(e.next<0){c&&e.acceptToken(O);break}if(e.next==t.charCodeAt(s)){if(s++,s==t.length){c>t.length&&e.acceptToken(O,1-t.length);break}}else s=0;e.advance()}})}const J=W(36,"-->"),K=W(37,"?>"),L=W(38,"?>"),OO=V.deserialize({version:13,states:"-OOQOaOOOcObO'#CcOkOdO'#CdOOOP'#Cv'#CvOsOaO'#DTO!XOaOOOOOQ'#Cw'#CwO!aObO,58}OOOP,58},58}OOOS'#Cx'#CxO!iOdO,59OOOOP,59O,59OOOOP-E6t-E6tO!qO`O'#ChO#kOqO'#CfOOOP'#Cf'#CfO#rOaO'#CyQ$TOPOOO$YOaOOOOOQ-E6u-E6uOOOP1G.i1G.iOOOS-E6v-E6vOOOP1G.j1G.jOOOO'#Cz'#CzO$hO`O,59SO$pO!bO,59SO%OOhO'#CqO%WO`O'#CrOOOP'#D]'#D]OOOP'#C}'#C}O%`OqO,59QO%gO`O'#CsOOOP,59Q,59QOOOP,59e,59eOOOP-E6w-E6wO$TOPOOOOOO-E6x-E6xO%oO!bO1G.nO%oO!bO1G.nO%}O`O'#CjO&VO!bO'#C{O&eO!bO1G.nOOOP1G.n1G.nOOOP1G.{1G.{OOOW'#DO'#DOO&pOhO,59]OOOP,59],59]O&xO`O,59^O'QO`O,59^OOOP-E6{-E6{OOOP1G.l1G.lO'YO`O,59_O'bO`O,59_O'jO!bO7+$YO'xO!bO7+$YOOOP7+$Y7+$YOOOP7+$g7+$gO(TO`O,59UO(]O`O,59UO(eO!bO,59gOOOO-E6y-E6yOOOW-E6|-E6|OOOP1G.w1G.wO(sO`O1G.xO(sO`O1G.xOOOP1G.x1G.xO({O`O1G.yO({O`O1G.yOOOP1G.y1G.yO)TO!bO<<GtOOOP<<Gt<<GtOOOP<<HR<<HRO(]O`O1G.pO(]O`O1G.pO)`O#tO'#CmOOOO1G.p1G.pO)nO`O7+$dOOOP7+$d7+$dO)vO`O7+$eOOOP7+$e7+$eOOOPAN=`AN=`OOOPAN=mAN=mO(]O`O7+$[OOOO7+$[7+$[OOOO'#C|'#C|O*OO#tO,59XOOOO,59X,59XOOOP<<HO<<HOOOOP<<HP<<HPOOOO<<Gv<<GvOOOO-E6z-E6zOOOO1G.s1G.s",stateData:"*^~OyPOzRO|QOPwPXwP~OtUOxWO~OuXO{ZO~OyPOzRO|QOPwXXwXswX~OP]OXbO~OtUOxdO~OuXO{fO~O]iOzgO~OP]OQoOSkOTlOblOclOdlOyPO|QO!RjO~ORpO~P!yOyPOzRO|QOPwPswP~OP]O~OyPOzRO|QOPwP~O]uOzgO~OZzO_wOh{OzgO~Ov|O!Q!OO~O]!QOzgO~OR!SO~P!yO]!UOzgO~OZ!XO_wOh!YOzgO~O`![OzgO~OzgOZoX_oXhoX~OZ!XO_wOh!YO~Ov|O!Q!`O~O]!aOzgO~OZ!cOzgO~O]!dOzgO~OZ!fOzgO~OZ!hO_wOh!iOzgO~OZ!hO_wOh!iO~O`!jOzgO~OzgO}!lO~OzgOZoa_oahoa~OZ!oOzgO~OZ!qOzgO~OZ!rO_wOh!sO~Ob!vOc!vO}!xO!O!vO~OZ!yOzgO~OZ!zOzgO~Ob!vOc!vO}!}O!O!vO~O",goto:"&S!QPPPPPPP!R!RP!]P!fP!mPP!vPPP!X!X#QP#W#_#g#m#s#z%S%c%i%oPPPP%uPPPPPPP&OWROS`bTl^nU`TasTl^nZ^T^ans_xiuvy!V!W!gQ!m![S!u!j!kR!{!tQp^R!SnZ_T^ansUSO`bR[SQVPRcVQYQReYSaTsRraQh]jthv!P!T!V!Z!]!b!e!k!n!p!tQviQ!PkQ!ToQ!VuQ!ZwQ!]xQ!b!QQ!e!UQ!k![Q!n!aQ!p!dR!t!jQyiS!WuvU!^y!W!gR!g!VQ!w!lR!|!wQn^R!RnQ}jR!_}QTOQq`RsbTm^n",nodeNames:"\u26A0 StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Comment ProcessingInst DoctypeDecl Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue EntityReference CharacterReference Text Cdata MismatchedCloseTag CloseTag SelfCloseEndTag SelfClosingTag",maxTerm:49,context:F,nodeProps:[[y.closedBy,1,"SelfCloseEndTag EndTag",12,"CloseTag MissingCloseTag"],[y.openedBy,11,"StartTag StartCloseTag",23,"OpenTag",24,"StartTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kY$rUdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kQ%ZRdQOv%Uw!^%U!_~%UW%iR!OWOr%dsv%dw~%d_%{]dQ!OWzTOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{R}XdQOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POb~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOc~Z(xWdQ!OWOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[UxPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k^*uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k^+hUhSdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}_S]PdQ!OWOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kZ/xU!OWOq%dqr0[sv%dw!a%d!a!b=X!b~%dZ0aZ!OWOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dZ1XT!OWOr%dsv%dw}%d}!O1h!O~%dZ1oRyR!OWOr%dsv%dw~%dX1}T!OWOr%dsv%dw!q%d!q!r2^!r~%dX2cT!OWOr%dsv%dw!e%d!e!f2r!f~%dX2wT!OWOr%dsv%dw!v%d!v!w3W!w~%dX3]T!OWOr%dsv%dw!{%d!{!|3l!|~%dX3qT!OWOr%dsv%dw!r%d!r!s4Q!s~%dX4VT!OWOr%dsv%dw!g%d!g!h4f!h~%dX4kV!OWOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOXPX5jRXP!OWOr%dsv%dw~%dY5xV!OWOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dY6dT!OWOr%dsv%dw!f%d!f!g6s!g~%dY6xT!OWOr%dsv%dw!c%d!c!d7X!d~%dY7^T!OWOr%dsv%dw!v%d!v!w7m!w~%dY7rT!OWOr%dsv%dw!c%d!c!d8R!d~%dY8WT!OWOr%dsv%dw!}%d!}#O8g#O~%dY8nR!OW!RQOr%dsv%dw~%dY8|T!OWOr%dsv%dw#W%d#W#X9]#X~%dY9bT!OWOr%dsv%dw#T%d#T#U9q#U~%dY9vT!OWOr%dsv%dw#h%d#h#i:V#i~%dY:[T!OWOr%dsv%dw#T%d#T#U8R#U~%dX:pT!OWOr%dsv%dw#c%d#c#d;P#d~%dX;UT!OWOr%dsv%dw#V%d#V#W;e#W~%dX;jT!OWOr%dsv%dw#h%d#h#i;y#i~%dX<OT!OWOr%dsv%dw#m%d#m#n<_#n~%dX<dT!OWOr%dsv%dw#d%d#d#e<s#e~%dX<xT!OWOr%dsv%dw#X%d#X#Y4f#Y~%dZ=`R|R!OWOr%dsv%dw~%dZ=rU`PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_UZTdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU{PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhU!QPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[H,J,K,L,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function b(O,t){let e=t&&t.getChild("TagName");return e?O.sliceString(e.from,e.to):""}function Q(O,t){let e=t&&t.firstChild;return e&&e.name=="OpenTag"?b(O,e):""}function z(O){for(let t=O&&O.parent;t;t=t.parent)if(t.name=="Element")return t;return null}class tO{constructor(t,e,s){this.attrs=e,this.attrValues=s,this.children=[],this.name=t.name,this.completion=Object.assign(Object.assign({type:"type"},t.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=t.textContent?t.textContent.map(c=>({label:c,type:"text"})):[]}}const x=/^[:\-\.\w\u00b7-\uffff]*$/;function E(O){return Object.assign(Object.assign({type:"property"},O.completion||{}),{label:O.name})}function j(O){return typeof O=="string"?{label:`"${O}"`,type:"constant"}:/^"/.test(O.label)?O:Object.assign(Object.assign({},O),{label:`"${O.label}"`})}function eO(O,t){let e=[],s=[],c=Object.create(null);for(let a of t){let m=E(a);e.push(m),a.global&&s.push(m),a.values&&(c[a.name]=a.values.map(j))}let h=[],v=[],T=Object.create(null);for(let a of O){let m=s,i=c;a.attributes&&(m=m.concat(a.attributes.map(k=>typeof k=="string"?e.find(P=>P.label==k)||{label:k,type:"property"}:(k.values&&(i==c&&(i=Object.create(i)),i[k.name]=k.values.map(j)),E(k)))));let u=new tO(a,m,i);T[u.name]=u,h.push(u),a.top&&v.push(u)}v.length||(v=h);for(let a=0;a<h.length;a++){let m=O[a],i=h[a];if(m.children)for(let u of m.children)T[u]&&i.children.push(T[u]);else i.children=h}return a=>{var m;let{doc:i}=a.state,u=function(d,r){var $;let n=A(d).resolveInner(r,-1),l=null;for(let o=n;!l&&o.parent;o=o.parent)o.name!="OpenTag"&&o.name!="CloseTag"&&o.name!="SelfClosingTag"&&o.name!="MismatchedCloseTag"||(l=o);if(l&&(l.to>r||l.lastChild.type.isError)){let o=l.parent;if(n.name=="TagName")return l.name=="CloseTag"||l.name=="MismatchedCloseTag"?{type:"closeTag",from:n.from,context:o}:{type:"openTag",from:n.from,context:z(o)};if(n.name=="AttributeName")return{type:"attrName",from:n.from,context:l};if(n.name=="AttributeValue")return{type:"attrValue",from:n.from,context:l};let f=n==l||n.name=="Attribute"?n.childBefore(r):n;return(f==null?void 0:f.name)=="StartTag"?{type:"openTag",from:r,context:z(o)}:(f==null?void 0:f.name)=="StartCloseTag"&&f.to<=r?{type:"closeTag",from:r,context:o}:(f==null?void 0:f.name)=="Is"?{type:"attrValue",from:r,context:l}:f?{type:"attrName",from:r,context:l}:null}if(n.name=="StartCloseTag")return{type:"closeTag",from:r,context:n.parent};for(;n.parent&&n.to==r&&!(($=n.lastChild)===null||$===void 0?void 0:$.type.isError);)n=n.parent;return n.name=="Element"||n.name=="Text"||n.name=="Document"?{type:"tag",from:r,context:n.name=="Element"?n:z(n)}:null}(a.state,a.pos);if(!u||u.type=="tag"&&!a.explicit)return null;let{type:k,from:P,context:g}=u;if(k=="openTag"){let d=v,r=Q(i,g);if(r){let $=T[r];d=($==null?void 0:$.children)||h}return{from:P,options:d.map($=>$.completion),span:x}}if(k=="closeTag"){let d=Q(i,g);return d?{from:P,to:a.pos+(i.sliceString(a.pos,a.pos+1)==">"?1:0),options:[((m=T[d])===null||m===void 0?void 0:m.closeNameCompletion)||{label:d+">",type:"type"}],span:x}:null}if(k=="attrName"){let d=T[b(i,g)];return{from:P,options:(d==null?void 0:d.attrs)||s,span:x}}if(k=="attrValue"){let d=function(n,l,o){let f=l&&l.getChildren("Attribute").find(S=>S.from<=o&&S.to>=o),w=f&&f.getChild("AttributeName");return w?n.sliceString(w.from,w.to):""}(i,g,P);if(!d)return null;let r=T[b(i,g)],$=((r==null?void 0:r.attrValues)||c)[d];return $&&$.length?{from:P,to:a.pos+(i.sliceString(a.pos,a.pos+1)=='"'?1:0),options:$,span:/^"[^"]*"?$/}:null}if(k=="tag"){let d=Q(i,g),r=T[d],$=[],n=g&&g.lastChild;!d||n&&n.name=="CloseTag"&&b(i,n)==d||$.push(r?r.closeCompletion:{label:"</"+d+">",type:"type",boost:2});let l=$.concat(((r==null?void 0:r.children)||(g?h:v)).map(o=>o.openCompletion));if(g&&(r==null?void 0:r.text.length)){let o=g.firstChild;o.to>a.pos-20&&!/\S/.test(a.state.sliceDoc(o.to,a.pos))&&(l=l.concat(r.text))}return{from:P,options:l,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}const G=q.define({parser:OO.configure({props:[N.add({Element(O){let t=/^\s*<\//.test(O.textAfter);return O.lineIndent(O.node.from)+(t?0:O.unit)},"OpenTag CloseTag SelfClosingTag":O=>O.column(O.node.from)+O.unit}),I.add({Element(O){let t=O.firstChild,e=O.lastChild;return t&&t.name=="OpenTag"?{from:t.to,to:e.name=="CloseTag"?e.from:O.to}:null}}),D({Text:p.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":p.angleBracket,TagName:p.tagName,"MismatchedCloseTag/Tagname":[p.tagName,p.invalid],AttributeName:p.attributeName,AttributeValue:p.attributeValue,Is:p.definitionOperator,"EntityReference CharacterReference":p.character,Comment:p.blockComment,ProcessingInst:p.processingInstruction,DoctypeDecl:p.documentMeta,Cdata:p.special(p.string)})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/$/}});function oO(O={}){return new M(G,G.data.of({autocomplete:eO(O.elements||[],O.attributes||[])}))}export{eO as completeFromSchema,oO as xml,G as xmlLanguage};