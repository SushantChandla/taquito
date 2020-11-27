/*! For license information please see 1be78505.900078f8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{159:function(r,t,e){"use strict";var i=e(2),n=e(6),a=e(0),p=e.n(a),s=e(111),o=e.n(s),m=e(105),c=e(94),u=e(106),l=e(48),g=e.n(l);function h(r){var t=r.to,e=r.href,a=r.label,s=Object(n.a)(r,["to","href","label"]),o=Object(u.a)(t);return p.a.createElement(m.a,Object(i.a)({className:"footer__link-item"},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{to:o},s),a)}var f=function(r){var t=r.url,e=r.alt;return p.a.createElement("img",{className:"footer__logo",alt:e,src:t})};t.a=function(){var r=Object(c.a)().siteConfig,t=(void 0===r?{}:r).themeConfig,e=(void 0===t?{}:t).footer,i=e||{},n=i.copyright,a=i.links,s=void 0===a?[]:a,m=i.logo,l=void 0===m?{}:m,d=Object(u.a)(l.src);return e?p.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===e.style})},p.a.createElement("div",{className:"container"},s&&s.length>0&&p.a.createElement("div",{className:"row footer__links"},s.map((function(r,t){return p.a.createElement("div",{key:t,className:"col footer__col"},null!=r.title?p.a.createElement("h4",{className:"footer__title"},r.title):null,null!=r.items&&Array.isArray(r.items)&&r.items.length>0?p.a.createElement("ul",{className:"footer__items"},r.items.map((function(r,t){return r.html?p.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:r.html}}):p.a.createElement("li",{key:r.href||r.to,className:"footer__item"},p.a.createElement(h,r))}))):null)}))),(l||n)&&p.a.createElement("div",{className:"text--center"},l&&l.src&&p.a.createElement("div",{className:"margin-bottom--sm"},l.href?p.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},p.a.createElement(f,{alt:l.alt,url:d})):p.a.createElement(f,{alt:l.alt,url:d})),n))):null}},222:function(r,t){},304:function(r,t){},333:function(r,t){},335:function(r,t){},399:function(r,t){},401:function(r,t){},410:function(r,t){},412:function(r,t){},437:function(r,t){},439:function(r,t){},440:function(r,t){},446:function(r,t){},448:function(r,t){},466:function(r,t){},468:function(r,t){},480:function(r,t){},483:function(r,t){},572:function(r,t,e){"use strict";(function(r){e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return u}));var i=e(573),n=e(598),a=e.n(n);function p(r,t,e,i){return new(e||(e=Promise))((function(n,a){function p(r){try{o(i.next(r))}catch(t){a(t)}}function s(r){try{o(i.throw(r))}catch(t){a(t)}}function o(r){var t;r.done?n(r.value):(t=r.value,t instanceof e?t:new e((function(r){r(t)}))).then(p,s)}o((i=i.apply(r,t||[])).next())}))}function s(r,t){var e,i,n,a,p={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(e)throw new TypeError("Generator is already executing.");for(;p;)try{if(e=1,i&&(n=2&a[0]?i.return:a[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;switch(i=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return p.label++,{value:a[1],done:!1};case 5:p.label++,i=a[1],a=[0];continue;case 7:a=p.ops.pop(),p.trys.pop();continue;default:if(!(n=p.trys,(n=n.length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){p=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){p.label=a[1];break}if(6===a[0]&&p.label<n[1]){p.label=n[1],n=a;break}if(n&&p.label<n[2]){p.label=n[2],p.ops.push(a);break}n[2]&&p.ops.pop(),p.trys.pop();continue}a=t.call(r,p)}catch(s){a=[6,s],i=0}finally{e=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var o;function m(t){var e=[];t.split("/").forEach((function(r){var t=parseInt(r,10);Number.isNaN(t)||(r.length>1&&"'"===r[r.length-1]&&(t+=2147483648),e.push(t))}));var i=r.alloc(1+4*e.length);return i[0]=e.length,e.forEach((function(r,t){i.writeUInt32BE(r,1+4*t)})),i}function c(t,e){var i=r.alloc(32);i.fill(0);var n=e[t],a=t+1;return n>32&&(a+=n-32,n=32),e.copy(i,32-n,a,a+n),{buffer:i,idxValueStart:a,length:n}}!function(r){r[r.tz1=0]="tz1",r[r.tz2=1]="tz2",r[r.tz3=2]="tz3"}(o||(o={}));var u=function(){function t(r,t,e,i){if(void 0===t&&(t="44'/1729'/0'/0'"),void 0===e&&(e=!0),void 0===i&&(i=o.tz1),this.transport=r,this.path=t,this.prompt=e,this.derivationType=i,this.CLA=128,this.INS_GET_PUBLIC_KEY=2,this.INS_PROMPT_PUBLIC_KEY=3,this.INS_SIGN=4,this.FIRST_MESSAGE_SEQUENCE=0,this.LAST_MESSAGE_SEQUENCE=129,this.OTHER_MESSAGE_SEQUENCE=1,this.transport.setScrambleKey("XTZ"),!t.startsWith("44'/1729'"))throw new Error("The derivation path must start with 44'/1729'");if(!Object.values(o).includes(i))throw new Error("The derivation type must be DerivationType.tz1, DerivationType.tz2 or DerivationType.tz3")}return t.prototype.publicKeyHash=function(){return p(this,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return this._publicKeyHash?[3,2]:[4,this.publicKey()];case 1:r.sent(),r.label=2;case 2:if(this._publicKeyHash)return[2,this._publicKeyHash];throw new Error("Unable to get the public key hash.")}}))}))},t.prototype.publicKey=function(){return p(this,void 0,void 0,(function(){var r,t,e,n,p,m,c,u;return s(this,(function(s){switch(s.label){case 0:return this._publicKey?[2,this._publicKey]:[4,this.getLedgerpublicKey()];case 1:return r=s.sent(),t=r[0],e=r.slice(1,1+t),n=function(r,t){return 0===t?r=r.slice(1):(r[0]=2+(1&r[64]),r=r.slice(0,33)),r}(e,this.derivationType),p=i.c[i.a.EDPK],m=i.c[i.a.TZ1],this.derivationType===o.tz2?(p=i.c[i.a.SPPK],m=i.c[i.a.TZ2]):this.derivationType===o.tz3&&(p=i.c[i.a.P2PK],m=i.c[i.a.TZ3]),c=Object(i.b)(n,p),[4,a.a.ready];case 2:return s.sent(),u=Object(i.b)(a.a.crypto_generichash(20,n),m),this._publicKey=c,this._publicKeyHash=u,[2,c]}}))}))},t.prototype.getLedgerpublicKey=function(){return p(this,void 0,void 0,(function(){var r;return s(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),r=this.INS_PROMPT_PUBLIC_KEY,!1===this.prompt&&(r=this.INS_GET_PUBLIC_KEY),[4,this.transport.send(this.CLA,r,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,m(this.path))];case 1:return[2,t.sent()];case 2:throw t.sent(),new Error("Unable to retrieve public key");case 3:return[2]}}))}))},t.prototype.secretKey=function(){return p(this,void 0,void 0,(function(){return s(this,(function(r){throw new Error("Secret key cannot be exposed")}))}))},t.prototype.sign=function(t,e){return p(this,void 0,void 0,(function(){var n,a,p,u,l,g,h,f,d;return s(this,(function(s){switch(s.label){case 0:return n=function(t,e){var i=t;return void 0!==e&&(i=r.from(e).toString("hex").concat(t)),i}(t,e),a=r.from(n,"hex"),(p=[]).push(m(this.path)),p=function(t,e){for(var i=0;i!==e.length;){var n=i+230>=e.length?e.length-i:230,a=r.alloc(n);e.copy(a,0,i,i+n),t.push(a),i+=n}return t}(p,a),[4,this.signWithLedger(p)];case 1:if(u=s.sent(),this.derivationType===o.tz1)l=u.slice(0,u.length-2).toString("hex");else{if(!function(r){var t=!0;49!==r[0]&&48!==r[0]&&(t=!1),r[1]+4!==r.length&&(t=!1),2!==r[2]&&(t=!1);var e=r[3];2!==r[4+e]&&(t=!1);var i=5+e;return i+1+r[i]+2!==r.length&&(t=!1),t}(u))throw new Error("Cannot parse ledger response.");3,g=c(3,u),h=g.idxValueStart+g.length+1,f=c(h,u),d=r.concat([g.buffer,f.buffer]),l=d.toString("hex")}return[2,{bytes:t,sig:Object(i.b)(l,i.c[i.a.SIG]),prefixSig:Object(i.b)(l,i.c[i.a.SIG]),sbytes:t+l}]}}))}))},t.prototype.signWithLedger=function(r){return p(this,void 0,void 0,(function(){var t,e,i;return s(this,(function(n){switch(n.label){case 0:return[4,this.transport.send(this.CLA,this.INS_SIGN,this.FIRST_MESSAGE_SEQUENCE,this.derivationType,r[0])];case 1:t=n.sent(),e=1,n.label=2;case 2:return e<r.length?(i=e===r.length-1?this.LAST_MESSAGE_SEQUENCE:this.OTHER_MESSAGE_SEQUENCE,[4,this.transport.send(this.CLA,this.INS_SIGN,i,this.derivationType,r[e])]):[3,5];case 3:t=n.sent(),n.label=4;case 4:return e++,[3,2];case 5:return[2,t]}}))}))},t}()}).call(this,e(89).Buffer)},573:function(r,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return s}));var i,n,a,p=e(89);!function(r){r.TZ1="tz1",r.TZ2="tz2",r.TZ3="tz3",r.KT="KT",r.KT1="KT1",r.EDSK2="edsk2",r.SPSK="spsk",r.P2SK="p2sk",r.EDPK="edpk",r.SPPK="sppk",r.P2PK="p2pk",r.EDESK="edesk",r.SPESK="spesk",r.P2ESK="p2esk",r.EDSK="edsk",r.EDSIG="edsig",r.SPSIG="spsig",r.P2SIG="p2sig",r.SIG="sig",r.NET="Net",r.NCE="nce",r.B="b",r.O="o",r.LO="Lo",r.LLO="LLo",r.P="P",r.CO="Co",r.ID="id",r.EXPR="expr",r.TZ="TZ"}(a||(a={}));var s=((i={})[a.TZ1]=new Uint8Array([6,161,159]),i[a.TZ2]=new Uint8Array([6,161,161]),i[a.TZ3]=new Uint8Array([6,161,164]),i[a.KT]=new Uint8Array([2,90,121]),i[a.KT1]=new Uint8Array([2,90,121]),i[a.EDSK]=new Uint8Array([43,246,78,7]),i[a.EDSK2]=new Uint8Array([13,15,58,7]),i[a.SPSK]=new Uint8Array([17,162,224,201]),i[a.P2SK]=new Uint8Array([16,81,238,189]),i[a.EDPK]=new Uint8Array([13,15,37,217]),i[a.SPPK]=new Uint8Array([3,254,226,86]),i[a.P2PK]=new Uint8Array([3,178,139,127]),i[a.EDESK]=new Uint8Array([7,90,60,179,41]),i[a.SPESK]=new Uint8Array([9,237,241,174,150]),i[a.P2ESK]=new Uint8Array([9,48,57,115,171]),i[a.EDSIG]=new Uint8Array([9,245,205,134,18]),i[a.SPSIG]=new Uint8Array([13,115,101,19,63]),i[a.P2SIG]=new Uint8Array([54,240,44,52]),i[a.SIG]=new Uint8Array([4,130,43]),i[a.NET]=new Uint8Array([87,82,0]),i[a.NCE]=new Uint8Array([69,220,169]),i[a.B]=new Uint8Array([1,52]),i[a.O]=new Uint8Array([5,116]),i[a.LO]=new Uint8Array([133,233]),i[a.LLO]=new Uint8Array([29,159,109]),i[a.P]=new Uint8Array([2,170]),i[a.CO]=new Uint8Array([79,179]),i[a.ID]=new Uint8Array([153,103]),i[a.EXPR]=new Uint8Array([13,44,64,27]),i[a.TZ]=new Uint8Array([2,90,121]),i);(n={})[a.TZ1]=20,n[a.TZ2]=20,n[a.TZ3]=20,n[a.KT]=20,n[a.KT1]=20,n[a.EDPK]=32,n[a.SPPK]=33,n[a.P2PK]=33,n[a.EDSIG]=64,n[a.SPSIG]=64,n[a.P2SIG]=64,n[a.SIG]=64,n[a.NET]=4,n[a.B]=32,n[a.P]=32;var o;e(293);!function(r){r[r.NO_PREFIX_MATCHED=0]="NO_PREFIX_MATCHED",r[r.INVALID_CHECKSUM=1]="INVALID_CHECKSUM",r[r.INVALID_LENGTH=2]="INVALID_LENGTH",r[r.VALID=3]="VALID"}(o||(o={}));a.TZ1,a.TZ2,a.TZ3,a.KT1,a.EDSIG,a.P2SIG,a.SPSIG,a.SIG,a.EDPK,a.SPPK,a.P2PK;e(595);var m=e(293);function c(r,t){var e="string"==typeof r?Uint8Array.from(p.Buffer.from(r,"hex")):r,i=new Uint8Array(t.length+e.length);return i.set(t),i.set(e,t.length),m.encode(p.Buffer.from(i.buffer))}},577:function(r,t){},579:function(r,t){},645:function(r,t,e){"use strict";var i=e(2),n=e(6),a=e(94),p=e(314),s=e(150),o=e(504),m=e(221),c=e(572),u=e(600),l=e(3),g=e(111),h=e.n(g),f=e(305),d=e.n(f),P=e(0),I=e.n(P),E=e(606),y=e(58),S=e.n(y),D=function(r){function t(){var t;return(t=r.call(this)||this).onChange=function(r){t.code=r},t}Object(l.a)(t,r);var e=t.prototype;return e.UNSAFE_componentWillMount=function(){this.code=this.props.code},e.componentDidUpdate=function(){},e.run=function(){var r=this.props,t=r.scope,e=r.transformCode,i=r.noInline,n='\nlet _printlnBuffer = "";\n\nfunction println(value) {\n  _printlnBuffer += value + "\\n";\n\n  render(_printlnBuffer);\n}\n\nTezos.setProvider({ rpc: \'https://api.tez.ie/rpc/carthagenet\' });\n\n'+(this.props.wallet?'const option = {name:"exampleWallet"};\nconst wallet = new BeaconWallet(option);\nconst network = {type:"carthagenet"};\nwallet.requestPermissions({network})\n.then(permission => {\n  return Tezos.setWalletProvider(wallet);\n})\n.then(() => {\n  '+this.code+"\n});":"fetch('https://api.tez.ie/keys/carthagenet/', {\n  method: 'POST',\n  headers: { Authorization: 'Bearer taquito-example' },\n})\n.then(response => response.text())\n.then(privateKey => {\n  return Tezos.importKey(privateKey);\n })\n.then(() => {\n  "+this.code+"\n });")+'\n\n//contract used in example "estimate a contract origination"\nconst genericMultisigJSONfile = \n[ { "prim": "parameter","args":[ { "prim": "or","args":[ { "prim": "unit", "annots": [ "%default" ] },{ "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%counter" ] },{ "prim": "or","args":[ { "prim": "lambda","args":[ { "prim": "unit" },{ "prim": "list","args":[ { "prim":"operation" } ] } ],"annots":[ "%operation" ] },{ "prim": "pair", "args":[ { "prim": "nat","annots":[ "%threshold" ] },{ "prim": "list",\n"args":[ { "prim": "key" } ],"annots":[ "%keys" ] } ],"annots":[ "%change_keys" ] } ],"annots": [ ":action" ] } ],"annots": [ ":payload" ] },{ "prim": "list","args":[ { "prim": "option","args":[ { "prim": "signature" } ] } ],"annots": [ "%sigs" ] } ],"annots": [ "%main" ] } ] } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%stored_counter" ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%threshold" ] },{ "prim": "list","args": [ { "prim": "key" } ],"annots": [ "%keys" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ [ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "IF_LEFT","args":[ [ { "prim": "DROP" },{ "prim": "NIL","args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ],[ { "prim": "PUSH","args":[ { "prim": "mutez" },{ "int": "0" } ] },{ "prim": "AMOUNT" },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ], { "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "SWAP" }, \n{ "prim": "DUP" },{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DUP" },{ "prim": "SELF" },{ "prim": "ADDRESS" },{ "prim": "PAIR" },{ "prim": "PACK" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR","annots":[ "@counter" ] },{ "prim": "DIP","args":[ [ { "prim":"CDR" } ] ] } ] ],{ "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] } ] ] },{ "prim": "SWAP" } ] ] },\n[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@stored_counter" ] },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ],{ "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@threshold" ] },{ "prim": "DIP","args":[ [ { "prim": "CDR","annots": [ "@keys" ] } ] ] } ] ],\n{ "prim": "DIP","args":[ [ { "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "0" } ],"annots": [ "@valid" ] },{ "prim": "SWAP" },{ "prim": "ITER","args":[ [ { "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] },{ "prim": "SWAP" },{ "prim": "IF_CONS","args":[ [ [ { "prim":"IF_NONE","args":[ [ { "prim":"SWAP" },{ "prim":"DROP" } ],[ { "prim":"SWAP" },{ "prim":"DIP","args":[ [ { "prim":"SWAP" },{ "prim":"DIP","args":[ { "int":"2" },[ [ { "prim":"DIP","args":[ [ { "prim":"DUP" } ] ] },{ "prim":"SWAP" } ] ] ] },\n[ [ { "prim":"DIP","args":[ { "int":"2" },[ { "prim":"DUP" } ] ] },{ "prim":"DIG","args":[ { "int":"3" } ] } ],{ "prim":"DIP","args":[ [ { "prim":"CHECK_SIGNATURE" } ] ] },{ "prim":"SWAP" },{ "prim":"IF","args":[ [ { "prim":"DROP" } ],[ { "prim":"FAILWITH" } ] ] } ],{ "prim":"PUSH","args":[ { "prim":"nat" },{ "int":"1" } ] },{ "prim":"ADD","annots":[ "@valid" ] } ] ] } ] ] } ] ],[ [ { "prim":"UNIT" },{ "prim":"FAILWITH" } ] ] ] },{ "prim": "SWAP" } ] ] } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "LE" } ],{ "prim": "IF","args":[ [],\n[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "IF_CONS","args":[ [ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ],[] ] }, { "prim": "DROP" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "1" } ] },{ "prim": "ADD","annots": [ "@new_counter" ] },{ "prim": "PAIR" } ] ] },{ "prim": "IF_LEFT","args":[ [ { "prim": "UNIT" },{ "prim": "EXEC" } ],[ { "prim": "DIP","args":[ [ { "prim": "CAR" } ] ] },\n{ "prim": "SWAP" },{ "prim": "PAIR" },{ "prim": "NIL","args":[ { "prim": "operation" } ] } ] ] },{ "prim": "PAIR" } ] ] } ] ] } ]\n\n//contract for the example "Contract origination with map in storage having initial values"\nconst contractMapTacoShop = \n[ { "prim": "parameter", "args": [ { "prim": "nat" } ] },\n{ "prim": "storage","args":[ { "prim": "map","args":[ { "prim": "nat" },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%current_stock" ] },{ "prim": "mutez", "annots": [ "%max_price" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "DUP" }, { "prim": "DIG", "args": [ { "int": "2" } ] },{ "prim": "DUP" }, { "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "GET" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string": "Unknown kind of taco." } ] },{ "prim": "FAILWITH" } ],[ { "prim": "DUP" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] },\n{ "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "EDIV" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" }, { "string": "DIV by 0" } ] },{ "prim": "FAILWITH" } ], [] ] }, { "prim": "CAR" },{ "prim": "DUP" }, { "prim": "AMOUNT" }, { "prim": "COMPARE" },{ "prim": "NEQ" },{ "prim": "IF","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string":"Sorry, the taco you are trying to purchase has a different price" } ] },\n{ "prim": "FAILWITH" } ],[ { "prim": "PUSH","args": [ { "prim": "unit" }, { "prim": "Unit" } ] } ] ] },{ "prim": "DIG", "args": [ { "int": "2" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "1" } ] },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "5" } ] }, { "prim": "CAR" },{ "prim": "SUB" }, { "prim": "ABS" }, { "prim": "SWAP" },{ "prim": "CDR" }, { "prim": "SWAP" }, { "prim": "PAIR" },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },\n{ "prim": "DUG", "args": [ { "int": "5" } ] },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] },{ "prim": "DIG", "args": [ { "int": "7" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "8" } ] }, { "prim": "SWAP" },{ "prim": "SOME" }, { "prim": "SWAP" }, { "prim": "UPDATE" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP","args": [ [ { "prim": "DROP", "args": [ { "int": "7" } ] } ] ] } ] ] } ]\n\n\n//contract for the example of map wih pair key\nconst contractMapPairKey = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address", "annots": [ "%theAddress" ] },\n{ "prim": "map","args":[ { "prim": "pair","args":[ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "pair","args":[ { "prim": "mutez", "annots": [ "%amount" ] },{ "prim": "int", "annots": [ "%quantity" ] } ] } ],"annots": [ "%theMap" ] } ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\n//contract for the example of map in storage with 8 nested pairs\nconst contractMap8pairs = \n[{ "prim": "parameter", "args": [{ "prim": "unit" }] },{"prim": "storage","args":[{prim: \'map\',args: [{prim: "pair", args: [{ prim: "int" },{prim: "pair", args: [{ prim: "nat" },{prim: "pair", args: [{ prim: "string" },{prim: "pair", args: [{ prim: "bytes" },{prim: "pair", args: [{ prim: "mutez" },{prim: "pair", args: [{ prim: "bool" },{prim: "pair", args: [{ prim: "key_hash" },{prim: "pair", args: [{ prim: "timestamp" },{ prim: "address" }]}]}]}]}]}]}]}]}, { prim: "int" }]},]},{"prim": "code","args":[[{ "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [{ "prim": "operation" }] },\n{ "prim": "PAIR" },{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]]}]\n\n//contract for map and bigmap combined example\nconst contractMapBigMap = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "big_map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%thebigmap" ] },{ "prim": "map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%themap" ] } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\n//signer for example with complex storage/parameters\nconst emailExample = "zsjpcmui.oysiavbv@tezos.example.org"\nconst passwordExample = "4rW0D22yXt"\nconst mnemonicExample = "arrange ceiling whisper churn congress double step carpet empty rice prevent swallow silk casual champion"\nconst secretExample = "af552679c4943509bd77643b8ef3f8dcf42e61b3"\n\n//contracts for examples of storage with and without annotations\nconst contractStorageAnnot = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address", "annots": [ "%theAddress" ] },{ "prim": "bool", "annots": [ "%theBool" ] } ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%theNat" ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },{ "prim": "mutez", "annots": [ "%theTez" ] } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst contractStorageWithAndWithoutAnnot =\n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address"},{ "prim": "bool"} ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%theNat" ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },{ "prim": "mutez" } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst contractStorageWithoutAnnot =\n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address"},{ "prim": "bool"} ] },{ "prim": "pair","args":[ { "prim": "nat" },{ "prim": "int" } ] } ] },{ "prim": "mutez" } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\nconst managerCode = [{"prim": "parameter","args":[{"prim": "or","args":[{"prim": "lambda","args":[{ "prim": "unit" },{"prim": "list","args": [{ "prim": "operation" }]}],"annots": ["%do"]},{ "prim": "unit", "annots": ["%default"] }]}]},{ "prim": "storage", "args": [{ "prim": "key_hash" }] },{"prim": "code","args":[[[[{ "prim": "DUP" }, { "prim": "CAR" },{"prim": "DIP","args": [[{ "prim": "CDR" }]]}]],{"prim": "IF_LEFT","args":[[{"prim": "PUSH","args":[{ "prim": "mutez" },{ "int": "0" }]},{ "prim": "AMOUNT" },[[{ "prim": "COMPARE" },{ "prim": "EQ" }],{"prim": "IF","args":[[],[[{ "prim": "UNIT" },{ "prim": "FAILWITH" }]]]}],\n[{"prim": "DIP","args": [[{ "prim": "DUP" }]]},{ "prim": "SWAP" }],{ "prim": "IMPLICIT_ACCOUNT" },{ "prim": "ADDRESS" },{ "prim": "SENDER" },[[{ "prim": "COMPARE" },{ "prim": "EQ" }],{"prim": "IF","args":[[],[[{ "prim": "UNIT" },{ "prim": "FAILWITH" }]]]}],{ "prim": "UNIT" }, { "prim": "EXEC" },{ "prim": "PAIR" }],[{ "prim": "DROP" },{"prim": "NIL","args": [{ "prim": "operation" }]},{ "prim": "PAIR" }]]}]]}]\n\n';this.transpile({code:n,scope:t,transformCode:e,noInline:i})},t}(E.d);var A=function(r){var t=r.children,e=r.theme,a=r.transformCode,p=Object(n.a)(r,["children","theme","transformCode"]),s=Object(P.useState)(!1),o=s[0],m=s[1],c=Object(P.useRef)(null),u=Object(P.useRef)(null);return Object(P.useEffect)((function(){var r;return u.current&&(r=new d.a(u.current,{text:function(){return c.current.code}})),function(){r&&r.destroy()}}),[u.current,c.current]),I.a.createElement(D,Object(i.a)({ref:c,code:t,transformCode:a||function(r){return r+";"},theme:e},p),I.a.createElement("div",{className:S.a.playgroundEditorWrapper},I.a.createElement("div",{className:h()(S.a.playgroundHeader,S.a.playgroundEditorHeader)},"Live Editor"),I.a.createElement(E.a,null),I.a.createElement("button",{ref:u,type:"button","aria-label":"Copy code to clipboard",className:h()(S.a.button,S.a.copyButton),onClick:function(){window.getSelection().empty(),m(!0),setTimeout((function(){return m(!1)}),2e3)}},o?"Copied":"Copy")),I.a.createElement("div",{className:h()(S.a.playgroundHeader,S.a.playgroundPreviewHeader)},"Result",I.a.createElement("button",{type:"button","aria-label":"Execute example",className:h()(S.a.button,S.a.runButton),onClick:function(){c.current&&c.current.run()}},"Run code")),I.a.createElement("div",{className:S.a.playgroundPreview},I.a.createElement(E.c,null),I.a.createElement(E.b,null)))},b=e(640),v=e.n(b),U=e(315),T=e(641),N=e(59),w=e.n(N),C=/{([\d,-]+)}/;t.a=function(r){var t=r.children,e=r.className,l=r.live,g=r.metastring,f=Object(n.a)(r,["children","className","live","metastring"]),E=Object(a.a)().siteConfig.themeConfig.prism,y=void 0===E?{}:E,S=Object(P.useState)(!1),D=S[0],b=S[1],N=Object(P.useRef)(null),_=Object(P.useRef)(null),R=[];if(g&&C.test(g)){var O=g.match(C)[1];R=v.a.parse(O).filter((function(r){return r>0}))}if(Object(P.useEffect)((function(){var r;return _.current&&(r=new d.a(_.current,{target:function(){return N.current}})),function(){r&&r.destroy()}}),[_.current,N.current]),l){var K=new p.b;return I.a.createElement(A,Object(i.a)({scope:Object.assign({},I.a,{Tezos:K,validateAddress:s.o,validateChain:s.p,validateKeyHash:s.r,validateContractAddress:s.q,validatePublicKey:s.s,validateSignature:s.t,b58cencode:s.d,prefix:s.n,Prefix:s.a,MichelsonMap:p.a,BeaconWallet:o.a,InMemorySigner:m.a,LedgerSigner:c.b,DerivationType:c.a,TransportU2F:u.a}),code:t.trim(),theme:y.theme||T.a,transformCode:function(r){return r.replace(/import .*/g,"")}},f))}var L=e&&e.replace(/language-/,"");!L&&y.defaultLanguage&&(L=y.defaultLanguage);var k=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return I.a.createElement(U.a,Object(i.a)({},U.b,{theme:y.theme||T.a,code:t.trim(),language:L}),(function(r){var t=r.className,e=r.style,n=r.tokens,a=r.getLineProps,p=r.getTokenProps;return I.a.createElement("div",{className:w.a.codeBlockWrapper},I.a.createElement("pre",{ref:N,className:h()(t,w.a.codeBlock),style:e},n.map((function(r,t){var e=a({line:r,key:t});return R.includes(t+1)&&(e.className=e.className+" docusaurus-highlight-code-line"),I.a.createElement("div",Object(i.a)({key:t},e),r.map((function(r,t){return I.a.createElement("span",Object(i.a)({key:t},p({token:r,key:t})))})))}))),I.a.createElement("button",{ref:_,type:"button","aria-label":"Copy code to clipboard",className:w.a.copyButton,onClick:k},D?"Copied":"Copy"))}))}}}]);