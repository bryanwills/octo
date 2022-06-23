var S=Object.defineProperty,T=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(o,e,d)=>e in o?S(o,e,{enumerable:!0,configurable:!0,writable:!0,value:d}):o[e]=d,v=(o,e)=>{for(var d in e||(e={}))j.call(e,d)&&f(o,d,e[d]);if(w)for(var d of w(e))B.call(e,d)&&f(o,d,e[d]);return o},g=(o,e)=>T(o,R(e));import{_ as D,a as r,c as a,e as t,t as l,l as A,m as c,p as E,q as U,o as k,s as Y,R as I,u as L,v as N,x as H,r as _,d as p,w as O,f as i,F as x,k as b}from"./index.4d2042ed.js";import{_ as V}from"./TagLink.af28d8b8.js";import"./Tag.5563b13c.js";const P={name:"DiscardableAction",props:{discardedAt:Date,onDiscard:Function,onRestore:Function},computed:{actionText(){return this.discardedAt?"Restore":"Discard"}},methods:{toggle(){this.discardedAt?this.onRestore():this.onDiscard()}}},z=t("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),F={class:"ml-6 md:ml-3 text-left flex-grow"};function q(o,e,d,h,m,s){return r(),a("button",{class:"flex items-center cursor-pointer",onClick:e[0]||(e[0]=A((...u)=>s.toggle&&s.toggle(...u),["stop"]))},[z,t("div",F,l(s.actionText),1)])}var G=D(P,[["render",q]]);const J=o=>{const e={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({files:o})};return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1",e).then(d=>d.json()).then(d=>d.sandbox_id)},K=o=>{o&&window.open(`https://codesandbox.io/s/${o}`,"_blank")};var y={create:J,open:K};const Q={name:"TheRightSidebar",components:{DiscardableAction:G,TagLink:V},data(){return{now:c(),ticker:null}},computed:{codeblocks(){return E(this.doc.text)},createdAt(){return this.$route.params.id?c(this.doc.createdAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet created"},discardedAt(){return c(this.doc.discardedAt).format("ddd, MMM Do, YYYY [at] h:mm A")},doc(){return this.$store.getters.currentDoc},hasCodeblocks(){return this.codeblocks.length>0},publicUrl(){const o=this.$router.resolve({name:"public_doc",params:{id:this.doc.id}}).href;return`${location.protocol}//${location.host}${o}`},savedAt(){return this.$route.params.id?this.now.diff(this.doc.updatedAt,"seconds")<5?"just now":`${c(this.doc.updatedAt).from(this.now,!0)} ago`:"Not yet saved"},updatedAt(){return this.$route.params.id?c(this.doc.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A"):"Not yet updated"}},methods:{async copyPublicUrl(){this.$refs.link.select(),document.execCommand("copy")},async discardDocument(){this.$store.dispatch(U,{id:this.doc.id}),k({name:"new_doc"})},async duplicateDocument(){const o=await this.$store.dispatch(Y,{id:this.doc.id});k({name:"doc",params:{id:o}})},async openSandbox(){const o=this.codeblocks.reduce((e,d,h)=>{const m=d.filename||[h,d.language||"txt"].join(".");return g(v({},e),{[m]:{content:d.code}})},{});y.create(o).then(e=>y.open(e))},async restoreDocument(){this.$store.dispatch(I,{id:this.doc.id})},async restrictDocument(){this.$store.dispatch(L,{id:this.doc.id})},async shareDocument(){this.$store.dispatch(N,{id:this.doc.id})},async toggleMeta(){this.$store.dispatch(H,!this.$store.state.showRightSidebar)}},async beforeUnmount(){clearInterval(this.ticker)},async mounted(){this.mounted=!0,this.ticker=setInterval(()=>{this.now=c()},5e3)}},W={class:"flex flex-col flex-grow"},X={class:"hidden mb-4 md:flex justify-end"},Z=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),$=t("span",{class:"ml-3"},"Hide",-1),tt=[Z,$],et={key:0,class:"flex flex-col flex-grow"},st=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})],-1),ot=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Duplicate",-1),dt=[st,ot],nt=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})],-1),rt=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Create Sandbox",-1),at=[nt,rt],it={key:0},ct=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})],-1),lt=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Make Private",-1),ht=[ct,lt],mt=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"})],-1),ut=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Copy Link",-1),_t=[mt,ut],pt=["value"],wt={key:1,class:"mb-2"},ft=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"})],-1),vt=t("span",{class:"ml-6 md:ml-3 flex-grow text-left"},"Make Public",-1),gt=[ft,vt],kt={class:"mt-4"},xt={class:"mt-4"},bt={class:"flex items-center px-3 py-2 my-1 md:px-2 md:py-1"},yt=t("svg",{height:"1.25em",width:"1.25em",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1),Dt={class:"flex-grow overflow-hidden truncate ml-3"},At={class:"flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1"},Ct={key:0},Mt=t("small",{class:"text-gray-700"},"Last Saved",-1),St={class:"capitalize pt-2 md:pt-1"},Tt={key:1,class:"mt-3 md:mt-2"},Rt=t("small",{class:"text-gray-700"},"Created",-1),jt={class:"pt-2 md:pt-1"},Bt={key:2,class:"mt-3 md:mt-2"},Et=t("small",{class:"text-gray-700"},"Updated",-1),Ut={class:"pt-2 md:pt-1"},Yt={key:3,class:"mt-3 md:mt-2"},It=t("small",{class:"text-gray-700"},"Discarded",-1),Lt={class:"pt-2 md:pt-1"};function Nt(o,e,d,h,m,s){const u=_("DiscardableAction"),C=_("TagLink"),M=_("SimpleBar");return r(),p(M,{class:"meta p-4 md:p-2"},{default:O(()=>[t("div",W,[t("div",X,[t("button",{onClick:e[0]||(e[0]=(...n)=>s.toggleMeta&&s.toggleMeta(...n)),class:"sidebar-button"},tt)]),s.doc?(r(),a("div",et,[t("div",null,[s.doc.id?(r(),p(u,{key:0,discardedAt:s.doc.discardedAt,onDiscard:s.discardDocument,onRestore:s.restoreDocument,class:"sidebar-button w-full"},null,8,["discardedAt","onDiscard","onRestore"])):i("",!0),t("button",{onClick:e[1]||(e[1]=A((...n)=>s.duplicateDocument&&s.duplicateDocument(...n),["stop"])),class:"sidebar-button w-full"},dt),s.hasCodeblocks?(r(),a("button",{key:1,onClick:e[2]||(e[2]=(...n)=>s.openSandbox&&s.openSandbox(...n)),class:"sidebar-button w-full"},at)):i("",!0),t("div",null,[s.doc.public?(r(),a("div",it,[t("button",{onClick:e[3]||(e[3]=(...n)=>s.restrictDocument&&s.restrictDocument(...n)),class:"sidebar-button w-full"},ht),t("button",{onClick:e[4]||(e[4]=(...n)=>s.copyPublicUrl&&s.copyPublicUrl(...n)),class:"sidebar-button w-full"},_t),t("input",{ref:"link",value:s.publicUrl,type:"text",class:"form-text w-full mb-2",readonly:""},null,8,pt)])):(r(),a("div",wt,[t("button",{onClick:e[5]||(e[5]=(...n)=>s.shareDocument&&s.shareDocument(...n)),class:"sidebar-button w-full"},gt)]))])]),t("div",kt,[(r(!0),a(x,null,b(s.doc.tags,n=>(r(),p(C,{key:n,tag:n,class:"sidebar-link"},null,8,["tag"]))),128))]),t("div",xt,[(r(!0),a(x,null,b(s.doc.tasks,n=>(r(),a("div",bt,[yt,t("span",Dt,l(n),1)]))),256))]),t("div",At,[s.doc.updatedAt?(r(),a("div",Ct,[Mt,t("div",St,l(s.savedAt),1)])):i("",!0),s.doc.createdAt?(r(),a("div",Tt,[Rt,t("div",jt,l(s.createdAt),1)])):i("",!0),s.doc.updatedAt?(r(),a("div",Bt,[Et,t("div",Ut,l(s.updatedAt),1)])):i("",!0),s.doc.discardedAt?(r(),a("div",Yt,[It,t("div",Lt,l(s.discardedAt),1)])):i("",!0)])])):i("",!0)])]),_:1})}var zt=D(Q,[["render",Nt]]);export{zt as default};
