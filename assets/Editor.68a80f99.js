var p=Object.defineProperty,h=Object.defineProperties;var l=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(t,e,a)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&i(t,a,e[a]);if(s)for(var a of s(e))m.call(e,a)&&i(t,a,e[a]);return t},d=(t,e)=>h(t,l(e));import{E as f}from"./Editor.5b24f6e1.js";import{_ as y,N as $,$ as o,a0 as g,a1 as D,a2 as A,a3 as E,a4 as T,a5 as S,r as _,a as v,d as w}from"./index.4d2042ed.js";const n=(t,e=", ")=>t.map(a=>`#${a}`).join(e),I=$({name:"EditorView",components:{Editor:f},props:{id:String,initialFocus:{type:String,default:()=>"any",validator:t=>["any","start","end"].includes(t)},initialSelections:{type:Array},readonly:{type:Boolean}},data(){return{editor:null,placeholder:new o({text:n(this.$store.state.context.tags," ")})}},watch:{tags:{deep:!0,handler(){this.updateTitle()}},header(){this.updateTitle()}},computed:{appearance(){return this.$store.state.settings.theme==="october"?"dark":this.$store.state.settings.theme},currentDoc(){return this.$store.getters.currentDoc},doc(){return this.$store.getters.decrypted.find(t=>t.id===this.id)||this.placeholder},settings(){return this.$store.state.settings.editor},tags(){return this.doc.tags},header(){return this.doc.headers[0]}},methods:{async input(t){this.readonly||(this.id?this.$store.dispatch(g,{id:this.doc.id,text:t}):(this.$store.dispatch(D,new o({id:this.doc.id,text:t})),this.$router.replace({name:"doc",params:{id:this.doc.id,preserve:!0}})))},async findSharedDocument(){const t=await A({docId:this.$route.params.id}),e=t.data(),a=d(r({},e),{id:e.id||e.clientId,firebaseId:t.id,textKey:e.textKey||e.dataKey,createdAt:e.createdAt?e.createdAt.toDate():null,discardedAt:e.discardedAt?e.discardedAt.toDate():null,updatedAt:e.updatedAt?e.updatedAt.toDate():null,touchedAt:e.touchedAt?e.touchedAt.toDate():null,syncedAt:e.syncedAt.toDate()});return E(a,{privateKey:this.$store.state.settings.crypto.privateKey})},updateTitle(){T(this.doc.header||n(this.doc.tags))}},beforeRouteUpdate(t,e,a){t.name==="doc"&&this.$store.dispatch(S,{id:t.params.id}),a()},async mounted(){this.updateTitle(),this.readonly&&(this.placeholder=await this.findSharedDocument())}});function k(t,e,a,C,K,b){const c=_("Editor",!0);return v(),w(c,{ref:"editable",appearance:t.appearance,initialSelections:t.initialSelections,readonly:t.readonly,settings:t.settings,text:t.doc.text,onInput:t.input},null,8,["appearance","initialSelections","readonly","settings","text","onInput"])}var B=y(I,[["render",k]]);export{B as default};
