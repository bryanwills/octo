(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d221df8"],{cbcf:function(e,t,T){"use strict";T.r(t),T.d(t,"ttcnCfg",(function(){return R}));T("28a5");function n(e){for(var t={},T=e.split(" "),n=0;n<T.length;++n)t[T[n]]=!0;return t}var E,C={name:"ttcn-cfg",keywords:n("Yes No LogFile FileMask ConsoleMask AppendFile TimeStampFormat LogEventTypes SourceInfoFormat LogEntityName LogSourceInfo DiskFullAction LogFileNumber LogFileSize MatchingHints Detailed Compact SubCategories Stack Single None Seconds DateTime Time Stop Error Retry Delete TCPPort KillTimer NumHCs UnixSocketsEnabled LocalAddress"),fileNCtrlMaskOptions:n("TTCN_EXECUTOR TTCN_ERROR TTCN_WARNING TTCN_PORTEVENT TTCN_TIMEROP TTCN_VERDICTOP TTCN_DEFAULTOP TTCN_TESTCASE TTCN_ACTION TTCN_USER TTCN_FUNCTION TTCN_STATISTICS TTCN_PARALLEL TTCN_MATCHING TTCN_DEBUG EXECUTOR ERROR WARNING PORTEVENT TIMEROP VERDICTOP DEFAULTOP TESTCASE ACTION USER FUNCTION STATISTICS PARALLEL MATCHING DEBUG LOG_ALL LOG_NOTHING ACTION_UNQUALIFIED DEBUG_ENCDEC DEBUG_TESTPORT DEBUG_UNQUALIFIED DEFAULTOP_ACTIVATE DEFAULTOP_DEACTIVATE DEFAULTOP_EXIT DEFAULTOP_UNQUALIFIED ERROR_UNQUALIFIED EXECUTOR_COMPONENT EXECUTOR_CONFIGDATA EXECUTOR_EXTCOMMAND EXECUTOR_LOGOPTIONS EXECUTOR_RUNTIME EXECUTOR_UNQUALIFIED FUNCTION_RND FUNCTION_UNQUALIFIED MATCHING_DONE MATCHING_MCSUCCESS MATCHING_MCUNSUCC MATCHING_MMSUCCESS MATCHING_MMUNSUCC MATCHING_PCSUCCESS MATCHING_PCUNSUCC MATCHING_PMSUCCESS MATCHING_PMUNSUCC MATCHING_PROBLEM MATCHING_TIMEOUT MATCHING_UNQUALIFIED PARALLEL_PORTCONN PARALLEL_PORTMAP PARALLEL_PTC PARALLEL_UNQUALIFIED PORTEVENT_DUALRECV PORTEVENT_DUALSEND PORTEVENT_MCRECV PORTEVENT_MCSEND PORTEVENT_MMRECV PORTEVENT_MMSEND PORTEVENT_MQUEUE PORTEVENT_PCIN PORTEVENT_PCOUT PORTEVENT_PMIN PORTEVENT_PMOUT PORTEVENT_PQUEUE PORTEVENT_STATE PORTEVENT_UNQUALIFIED STATISTICS_UNQUALIFIED STATISTICS_VERDICT TESTCASE_FINISH TESTCASE_START TESTCASE_UNQUALIFIED TIMEROP_GUARD TIMEROP_READ TIMEROP_START TIMEROP_STOP TIMEROP_TIMEOUT TIMEROP_UNQUALIFIED USER_UNQUALIFIED VERDICTOP_FINAL VERDICTOP_GETVERDICT VERDICTOP_SETVERDICT VERDICTOP_UNQUALIFIED WARNING_UNQUALIFIED"),externalCommands:n("BeginControlPart EndControlPart BeginTestCase EndTestCase"),multiLineStrings:!0},N=C.keywords,i=C.fileNCtrlMaskOptions,r=C.externalCommands,I=C.multiLineStrings,o=/[\|]/;function _(e,t){var T=e.next();if('"'==T||"'"==T)return t.tokenize=A(T),t.tokenize(e,t);if(/[:=]/.test(T))return E=T,"punctuation";if("#"==T)return e.skipToEnd(),"comment";if(/\d/.test(T))return e.eatWhile(/[\w\.]/),"number";if(o.test(T))return e.eatWhile(o),"operator";if("["==T)return e.eatWhile(/[\w_\]]/),"number";e.eatWhile(/[\w\$_]/);var n=e.current();return N.propertyIsEnumerable(n)?"keyword":i.propertyIsEnumerable(n)?"atom":r.propertyIsEnumerable(n)?"deleted":"variable"}function A(e){return function(t,T){var n,E=!1,C=!1;while(null!=(n=t.next())){if(n==e&&!E){var N=t.peek();N&&(N=N.toLowerCase(),"b"!=N&&"h"!=N&&"o"!=N||t.next()),C=!0;break}E=!E&&"\\"==n}return(C||!E&&!I)&&(T.tokenize=null),"string"}}function O(e,t,T,n,E){this.indented=e,this.column=t,this.type=T,this.align=n,this.prev=E}function U(e,t,T){var n=e.indented;return e.context&&"statement"==e.context.type&&(n=e.context.indented),e.context=new O(n,t,T,null,e.context)}function a(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}var R={startState:function(){return{tokenize:null,context:new O(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var T=t.context;if(e.sol()&&(null==T.align&&(T.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;E=null;var n=(t.tokenize||_)(e,t);if("comment"==n)return n;if(null==T.align&&(T.align=!0),";"!=E&&":"!=E&&","!=E||"statement"!=T.type)if("{"==E)U(t,e.column(),"}");else if("["==E)U(t,e.column(),"]");else if("("==E)U(t,e.column(),")");else if("}"==E){while("statement"==T.type)T=a(t);"}"==T.type&&(T=a(t));while("statement"==T.type)T=a(t)}else E==T.type?a(t):(("}"==T.type||"top"==T.type)&&";"!=E||"statement"==T.type&&"newstatement"==E)&&U(t,e.column(),"statement");else a(t);return t.startOfLine=!1,n},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"#"}}}}}]);