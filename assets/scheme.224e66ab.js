function g(e){for(var t={},i=e.split(" "),n=0;n<i.length;++n)t[i[n]]=!0;return t}var x=g("\u03BB case-lambda call/cc class cond-expand define-class define-values exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax define-macro defmacro delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt #f floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? #t tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"),b=g("define let letrec let* lambda define-macro defmacro let-syntax letrec-syntax let-values let*-values define-syntax syntax-rules define-values when unless");function v(e,t,i){this.indent=e,this.type=t,this.prev=i}function m(e,t,i){e.indentStack=new v(t,i,e.indentStack)}var k=new RegExp(/^(?:[-+]i|[-+][01]+#*(?:\/[01]+#*)?i|[-+]?[01]+#*(?:\/[01]+#*)?@[-+]?[01]+#*(?:\/[01]+#*)?|[-+]?[01]+#*(?:\/[01]+#*)?[-+](?:[01]+#*(?:\/[01]+#*)?)?i|[-+]?[01]+#*(?:\/[01]+#*)?)(?=[()\s;"]|$)/i),y=new RegExp(/^(?:[-+]i|[-+][0-7]+#*(?:\/[0-7]+#*)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?@[-+]?[0-7]+#*(?:\/[0-7]+#*)?|[-+]?[0-7]+#*(?:\/[0-7]+#*)?[-+](?:[0-7]+#*(?:\/[0-7]+#*)?)?i|[-+]?[0-7]+#*(?:\/[0-7]+#*)?)(?=[()\s;"]|$)/i),w=new RegExp(/^(?:[-+]i|[-+][\da-f]+#*(?:\/[\da-f]+#*)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?@[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?[-+](?:[\da-f]+#*(?:\/[\da-f]+#*)?)?i|[-+]?[\da-f]+#*(?:\/[\da-f]+#*)?)(?=[()\s;"]|$)/i),E=new RegExp(/^(?:[-+]i|[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)i|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)@[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)|[-+]?(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)[-+](?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*)?i|(?:(?:(?:\d+#+\.?#*|\d+\.\d*#*|\.\d+#*|\d+)(?:[esfdl][-+]?\d+)?)|\d+#*\/\d+#*))(?=[()\s;"]|$)/i);function S(e){return e.match(k)}function q(e){return e.match(y)}function u(e,t){return t===!0&&e.backUp(1),e.match(E)}function Q(e){return e.match(w)}const C={startState:function(){return{indentStack:null,indentation:0,mode:!1,sExprComment:!1,sExprQuote:!1}},token:function(e,t){if(t.indentStack==null&&e.sol()&&(t.indentation=e.indentation()),e.eatSpace())return null;var i,n=null;switch(t.mode){case"string":for(var s=!1;(c=e.next())!=null;){if(c=='"'&&!s){t.mode=!1;break}s=!s&&c=="\\"}n="string";break;case"comment":for(var c,p=!1;(c=e.next())!=null;){if(c=="#"&&p){t.mode=!1;break}p=c=="|"}n="comment";break;case"s-expr-comment":if(t.mode=!1,e.peek()!="("&&e.peek()!="["){e.eatWhile(/[^\s\(\)\[\]]/),n="comment";break}t.sExprComment=0;default:var a=e.next();if(a=='"')t.mode="string",n="string";else if(a=="'")e.peek()=="("||e.peek()=="["?(typeof t.sExprQuote!="number"&&(t.sExprQuote=0),n="atom"):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n="atom");else if(a=="#")if(e.eat("|"))t.mode="comment",n="comment";else if(e.eat(/[tf]/i))n="atom";else if(e.eat(";"))t.mode="s-expr-comment",n="comment";else{var r=null,l=!1,f=!0;e.eat(/[ei]/i)?l=!0:e.backUp(1),e.match(/^#b/i)?r=S:e.match(/^#o/i)?r=q:e.match(/^#x/i)?r=Q:e.match(/^#d/i)?r=u:e.match(/^[-+0-9.]/,!1)?(f=!1,r=u):l||e.eat("#"),r!=null&&(f&&!l&&e.match(/^#[ei]/i),r(e)&&(n="number"))}else if(/^[-+0-9.]/.test(a)&&u(e,!0))n="number";else if(a==";")e.skipToEnd(),n="comment";else if(a=="("||a=="["){for(var h,o="",d=e.column();(h=e.eat(/[^\s\(\[\;\)\]]/))!=null;)o+=h;o.length>0&&b.propertyIsEnumerable(o)?m(t,d+2,a):(e.eatSpace(),e.eol()||e.peek()==";"?m(t,d+1,a):m(t,d+e.current().length,a)),e.backUp(e.current().length-1),typeof t.sExprComment=="number"&&t.sExprComment++,typeof t.sExprQuote=="number"&&t.sExprQuote++,n="bracket"}else a==")"||a=="]"?(n="bracket",t.indentStack!=null&&t.indentStack.type==(a==")"?"(":"[")&&((i=t).indentStack=i.indentStack.prev,typeof t.sExprComment=="number"&&--t.sExprComment==0&&(n="comment",t.sExprComment=!1),typeof t.sExprQuote=="number"&&--t.sExprQuote==0&&(n="atom",t.sExprQuote=!1))):(e.eatWhile(/[\w_\-!$%&*+\.\/:<=>?@\^~]/),n=x&&x.propertyIsEnumerable(e.current())?"builtin":"variable")}return typeof t.sExprComment=="number"?"comment":typeof t.sExprQuote=="number"?"atom":n},indent:function(e){return e.indentStack==null?e.indentation:e.indentStack.indent},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:";;"}}};export{C as scheme};