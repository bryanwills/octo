if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-2621cf19"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Account.744b7ff4.js",revision:null},{url:"assets/apl.5279cdf3.js",revision:null},{url:"assets/asciiarmor.36ede709.js",revision:null},{url:"assets/asn1.1d497af6.js",revision:null},{url:"assets/asterisk.6b156c05.js",revision:null},{url:"assets/brainfuck.e6564070.js",revision:null},{url:"assets/changelog.547b7cf4.js",revision:null},{url:"assets/clike.d50545e9.js",revision:null},{url:"assets/clojure.e832e3b3.js",revision:null},{url:"assets/cmake.17de1bd4.js",revision:null},{url:"assets/cobol.2dfd90e7.js",revision:null},{url:"assets/coffeescript.c1964d4e.js",revision:null},{url:"assets/commonlisp.6cb62ad0.js",revision:null},{url:"assets/Context.6acdf54a.css",revision:null},{url:"assets/Context.9ef18cc6.js",revision:null},{url:"assets/crystal.8887b2b0.js",revision:null},{url:"assets/css.3c26eb64.js",revision:null},{url:"assets/cypher.3cfd7c2b.js",revision:null},{url:"assets/d.62084003.js",revision:null},{url:"assets/Daily.90b5379d.js",revision:null},{url:"assets/Dashboard.4cd9de2c.js",revision:null},{url:"assets/Dashboard.db12ffc4.css",revision:null},{url:"assets/diff.67d66c7a.js",revision:null},{url:"assets/dockerfile.8e9483a8.js",revision:null},{url:"assets/DocumentList.ad3eda09.js",revision:null},{url:"assets/Documents.5a737d42.js",revision:null},{url:"assets/dtd.7e711e8c.js",revision:null},{url:"assets/dylan.38e2f639.js",revision:null},{url:"assets/ebnf.5c30a706.js",revision:null},{url:"assets/ecl.f505022f.js",revision:null},{url:"assets/Editor.3d5bf6c9.css",revision:null},{url:"assets/Editor.c539b45b.js",revision:null},{url:"assets/Editor.fff44987.js",revision:null},{url:"assets/eiffel.9cb8ca3a.js",revision:null},{url:"assets/elm.30e6255b.js",revision:null},{url:"assets/erlang.1383a233.js",revision:null},{url:"assets/Example.a52905c1.js",revision:null},{url:"assets/Exporter.f3fc45ed.js",revision:null},{url:"assets/factor.a71dabf8.js",revision:null},{url:"assets/fcl.09e54a49.js",revision:null},{url:"assets/FileEditor.908cad11.js",revision:null},{url:"assets/files.59fbc2f8.js",revision:null},{url:"assets/forth.50aeb900.js",revision:null},{url:"assets/fortran.712a8abc.js",revision:null},{url:"assets/gas.23b0e1a7.js",revision:null},{url:"assets/gherkin.3fb3e32b.js",revision:null},{url:"assets/go.ab4daeb2.js",revision:null},{url:"assets/Graph.e10dbf0e.js",revision:null},{url:"assets/Graph.e6cff609.css",revision:null},{url:"assets/groovy.14a6b1dc.js",revision:null},{url:"assets/haskell.69cc2adb.js",revision:null},{url:"assets/haxe.89b50351.js",revision:null},{url:"assets/http.9bed8e47.js",revision:null},{url:"assets/idl.6d02433e.js",revision:null},{url:"assets/Importer.9e061e2e.js",revision:null},{url:"assets/index.00e4ad53.js",revision:null},{url:"assets/index.187b52f8.js",revision:null},{url:"assets/index.3f8e67ac.js",revision:null},{url:"assets/index.50e37e37.js",revision:null},{url:"assets/index.66febbe6.js",revision:null},{url:"assets/index.a25dc04c.js",revision:null},{url:"assets/index.b54fca1d.js",revision:null},{url:"assets/index.bb0e6d7c.js",revision:null},{url:"assets/index.d4c08de1.css",revision:null},{url:"assets/index.e0ad5220.js",revision:null},{url:"assets/index.f723ed91.js",revision:null},{url:"assets/javascript.14ff2075.js",revision:null},{url:"assets/jinja2.a49c81a6.js",revision:null},{url:"assets/julia.6d6c5e44.js",revision:null},{url:"assets/livescript.188868f2.js",revision:null},{url:"assets/lua.d506a169.js",revision:null},{url:"assets/mathematica.2e640b53.js",revision:null},{url:"assets/mbox.987e1005.js",revision:null},{url:"assets/mirc.bbdf6a3e.js",revision:null},{url:"assets/mllike.1c6f2c0d.js",revision:null},{url:"assets/modelica.3164296d.js",revision:null},{url:"assets/mscgen.88dc2281.js",revision:null},{url:"assets/mumps.a8c3b61a.js",revision:null},{url:"assets/nginx.ee3278f5.js",revision:null},{url:"assets/nsis.e82e0142.js",revision:null},{url:"assets/ntriples.d89c0dd5.js",revision:null},{url:"assets/octave.33274048.js",revision:null},{url:"assets/oz.a11dadbd.js",revision:null},{url:"assets/pascal.a4e9cf7d.js",revision:null},{url:"assets/perl.cacf9f61.js",revision:null},{url:"assets/pig.5c4d0697.js",revision:null},{url:"assets/powershell.26361c4f.js",revision:null},{url:"assets/Privacy.260ffe22.js",revision:null},{url:"assets/properties.0156ad53.js",revision:null},{url:"assets/protobuf.99e80c63.js",revision:null},{url:"assets/puppet.1f7652d7.js",revision:null},{url:"assets/python.ac641beb.js",revision:null},{url:"assets/q.ed284513.js",revision:null},{url:"assets/QuickAction.c75537a2.js",revision:null},{url:"assets/quotes.6145aced.js",revision:null},{url:"assets/r.dbcdf3b1.js",revision:null},{url:"assets/rpm.5d0d4165.js",revision:null},{url:"assets/ruby.c1f5c63b.js",revision:null},{url:"assets/sas.a9ccbcbf.js",revision:null},{url:"assets/sass.f0e19d3c.js",revision:null},{url:"assets/scheme.3c5dc50d.js",revision:null},{url:"assets/shell.4fdc9c48.js",revision:null},{url:"assets/sieve.9cf0a95f.js",revision:null},{url:"assets/simple-mode.2be04451.js",revision:null},{url:"assets/smalltalk.1a1dc7f5.js",revision:null},{url:"assets/solr.55928669.js",revision:null},{url:"assets/sparql.e4634a0b.js",revision:null},{url:"assets/spreadsheet.ea708a5e.js",revision:null},{url:"assets/sql.682a9ce0.js",revision:null},{url:"assets/stex.bb423439.js",revision:null},{url:"assets/stylus.516bd8ed.js",revision:null},{url:"assets/swift.8dc54098.js",revision:null},{url:"assets/Tag.ba84bbcb.js",revision:null},{url:"assets/TagLink.3c6f155a.js",revision:null},{url:"assets/TagList.1ead73af.css",revision:null},{url:"assets/TagList.2505c265.js",revision:null},{url:"assets/tcl.63c0f4d9.js",revision:null},{url:"assets/Terms.de3904f1.js",revision:null},{url:"assets/textile.790439e7.js",revision:null},{url:"assets/TheLeftSidebar.e6c3c68b.js",revision:null},{url:"assets/TheRightSidebar.3038c051.js",revision:null},{url:"assets/TheSettings.b81e5b8a.js",revision:null},{url:"assets/tiddlywiki.00e44342.js",revision:null},{url:"assets/tiki.db4b0342.js",revision:null},{url:"assets/toml.5f62c289.js",revision:null},{url:"assets/troff.b7a41639.js",revision:null},{url:"assets/ttcn-cfg.6d4d0be1.js",revision:null},{url:"assets/ttcn.a77db865.js",revision:null},{url:"assets/turtle.a34de549.js",revision:null},{url:"assets/vb.d4b2b4da.js",revision:null},{url:"assets/vbscript.2ba221db.js",revision:null},{url:"assets/velocity.82ca13ca.js",revision:null},{url:"assets/verilog.ac1604ab.js",revision:null},{url:"assets/vhdl.b163f95a.js",revision:null},{url:"assets/webidl.51fb3de5.js",revision:null},{url:"assets/xquery.4ff84527.js",revision:null},{url:"assets/yacas.fedbc06b.js",revision:null},{url:"assets/yaml.67a204c5.js",revision:null},{url:"assets/z80.7d536384.js",revision:null},{url:"index.html",revision:"4d3b5d22e3200b78af83ad42ea526031"},{url:"https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap",revision:"v1"},{url:"img/icons/favicon.ico",revision:"a51cd13d00a3113ac5f5540feab64494"},{url:"./img/icons/icon-16x16.png",revision:"16e4401ca4d1466f357e57fe86e0d0f6"},{url:"./img/icons/icon-32x32.png",revision:"9c7b7113009ca15f6e0fa664502ef3fa"},{url:"./img/icons/icon-60x60.png",revision:"f899983123f56dd67fcc127931717331"},{url:"./img/icons/icon-76x76.png",revision:"4c943988e3bd0f347a1cfb6f660a9bec"},{url:"./img/icons/icon-120x120.png",revision:"285c8864aa39a913f372cbc739dda59d"},{url:"./img/icons/icon-144x144.png",revision:"5e378d4c7f61b7ab80540747be3eeab1"},{url:"./img/icons/icon-150x150.png",revision:"ceb3f28628f5122b50d0637f5d5f9624"},{url:"./img/icons/icon-152x152.png",revision:"2600008f557b00a052c5a20cbc5a234d"},{url:"./img/icons/icon-180x180.png",revision:"e7c1cdc1352ab41c0a2105d48a5d148d"},{url:"./img/icons/icon-192x192.png",revision:"66c14bb772129256c468ef588703cd08"},{url:"./img/icons/icon-512x512.png",revision:"ff6508ce08772c21871e8507d22d86d9"},{url:"./img/icons/icon-maskable-192x192.png",revision:"392741d6209e832d56be05ed1d285cc9"},{url:"./img/icons/icon-maskable-512x512.png",revision:"19ff97dbf9430c44b651ead9ba17ee16"},{url:"manifest.webmanifest",revision:"1a45b44a2bf8ddeaaa5d96af7424e044"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html"),{denylist:[/\/manifest.json$/]})),s.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/.*/,new s.StaleWhileRevalidate({cacheName:"cloudflare-cache",plugins:[]}),"GET"),s.registerRoute(/^https:\/\/fonts.gstatic.com\/s\/.*/,new s.StaleWhileRevalidate({cacheName:"font-cache",plugins:[]}),"GET")}));
