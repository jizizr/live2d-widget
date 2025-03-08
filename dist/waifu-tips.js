/*!
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */
!function(){"use strict";function e(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}var t=null;function o(o,n,i){if(o&&!(sessionStorage.getItem("waifu-text")&&Number(sessionStorage.getItem("waifu-text"))>i)){t&&(clearTimeout(t),t=null),o=e(o),sessionStorage.setItem("waifu-text",String(i));var s=document.getElementById("waifu-tips");s.innerHTML=o,s.classList.add("waifu-tips-active"),t=setTimeout((function(){sessionStorage.removeItem("waifu-text"),s.classList.remove("waifu-tips-active")}),n)}}var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,s){function c(e){try{r(n.next(e))}catch(e){s(e)}}function a(e){try{r(n.throw(e))}catch(e){s(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(c,a)}r((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var o,n,i,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},c=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return c.next=a(0),c.throw=a(1),c.return=a(2),"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(a){return function(r){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;c&&(c=0,a[0]&&(s=0)),s;)try{if(o=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{o=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}},s=function(){function t(e){this.modelList=null;var t=e.apiPath,o=e.cdnPath,n=!1;if("string"==typeof o)n=!0,o.endsWith("/")||(o+="/");else{if("string"!=typeof t)throw"Invalid initWidget argument!";t.endsWith("/")||(t+="/")}this.useCDN=n,this.apiPath=t||"",this.cdnPath=o||""}return t.prototype.loadModelList=function(){return n(this,void 0,void 0,(function(){var e,t;return i(this,(function(o){switch(o.label){case 0:return[4,fetch("".concat(this.cdnPath,"model_list.json"))];case 1:return e=o.sent(),t=this,[4,e.json()];case 2:return t.modelList=o.sent(),[2]}}))}))},t.prototype.loadModel=function(t,s,c){return n(this,void 0,void 0,(function(){var n;return i(this,(function(i){switch(i.label){case 0:return localStorage.setItem("modelId",t.toString()),localStorage.setItem("modelTexturesId",s.toString()),o(c,4e3,10),this.useCDN&&this.modelList?this.modelList?[3,2]:[4,this.loadModelList()]:[3,3];case 1:i.sent(),i.label=2;case 2:return n=e(this.modelList.models[t]),loadlive2d("live2d","".concat(this.cdnPath,"model/").concat(n,"/index.json")),[3,4];case 3:loadlive2d("live2d","".concat(this.apiPath,"get/?id=").concat(t,"-").concat(s)),console.log("Live2D Model ".concat(t,"-").concat(s," Loaded")),i.label=4;case 4:return[2]}}))}))},t.prototype.loadRandModel=function(){return n(this,void 0,void 0,(function(){var t,n,s,c=this;return i(this,(function(i){switch(i.label){case 0:return t=Number(localStorage.getItem("modelId")),n=Number(localStorage.getItem("modelTexturesId")),this.useCDN&&t&&this.modelList?this.modelList?[3,2]:[4,this.loadModelList()]:[3,3];case 1:i.sent(),i.label=2;case 2:return s=e(this.modelList.models[t]),loadlive2d("live2d","".concat(this.cdnPath,"model/").concat(s,"/index.json")),o("我的新衣服好看嘛？",4e3,10),[3,4];case 3:fetch("".concat(this.apiPath,"rand_textures/?id=").concat(t,"-").concat(n)).then((function(e){return e.json()})).then((function(e){1!==e.textures.id||1!==n&&0!==n?t&&c.loadModel(t,e.textures.id,"我的新衣服好看嘛？"):o("我还没有其他衣服呢！",4e3,10)})),i.label=4;case 4:return[2]}}))}))},t.prototype.loadOtherModel=function(){return n(this,void 0,void 0,(function(){var e,t,o=this;return i(this,(function(n){switch(n.label){case 0:return e=Number(localStorage.getItem("modelId")),this.useCDN&&e&&this.modelList?this.modelList?[3,2]:[4,this.loadModelList()]:[3,3];case 1:n.sent(),n.label=2;case 2:return t=++e>=this.modelList.models.length?0:e,this.loadModel(t,0,this.modelList.messages[t]),[3,4];case 3:fetch("".concat(this.apiPath,"switch/?id=").concat(e)).then((function(e){return e.json()})).then((function(e){o.loadModel(e.model.id,0,e.model.message)})),n.label=4;case 4:return[2]}}))}))},t}();var c={hitokoto:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>',callback:function(){fetch("https://v1.hitokoto.cn").then((function(e){return e.json()})).then((function(e){var t="这句一言来自 <span>「".concat(e.from,"」</span>，是 <span>").concat(e.creator,"</span> 在 hitokoto.cn 投稿的。");o(e.hitokoto,6e3,9),setTimeout((function(){o(t,4e3,9)}),6e3)}))}},asteroids:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>',callback:function(){if(window.Asteroids)window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids);else{var e=document.createElement("script");e.src="https://fastly.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js",document.head.appendChild(e)}}},"switch-model":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>',callback:function(){}},"switch-texture":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64l0 48c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l38.7 0c16.3 0 30-12.3 31.8-28.5L318.2 304l1.8 0c17.7 0 32-14.3 32-32l0-48c0-35.3-28.7-64-64-64l-64 0zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"/></svg>',callback:function(){}},photo:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M220.6 121.2L271.1 96 448 96l0 96-114.8 0c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24L64 192l0-64 128 0c9.9 0 19.7-2.3 28.6-6.8zM0 128L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L271.1 32c-9.9 0-19.7 2.3-28.6 6.8L192 64l-32 0 0-16c0-8.8-7.2-16-16-16L80 32c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>',callback:function(){o("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}},info:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',callback:function(){open("https://github.com/stevenjoezhang/live2d-widget")}},quit:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>',callback:function(){localStorage.setItem("waifu-display",Date.now().toString()),o("愿你有一天能与重要的人重逢。",2e3,11);var e=document.getElementById("waifu");e&&(e.style.bottom="-500px",setTimeout((function(){e.style.display="none";var t=document.getElementById("waifu-toggle");t&&t.classList.add("waifu-toggle-active")}),3e3))}}};function a(t){var n,i,a=new s(t);function r(t){var n,i,s=!1,c=t.message.default;window.addEventListener("mousemove",(function(){return s=!0})),window.addEventListener("keydown",(function(){return s=!0})),setInterval((function(){s?(s=!1,clearInterval(n),n=null):n||(n=setInterval((function(){o(e(c),6e3,9)}),2e4))}),1e3),o(function(e){if("/"===location.pathname)for(var t=0,o=e;t<o.length;t++){var n=o[t],i=n.hour,s=n.text,c=new Date,a=i.split("-")[0],r=i.split("-")[1]||a;if(Number(a)<=c.getHours()&&c.getHours()<=Number(r))return s}var l,u="欢迎阅读<span>「".concat(document.title.split(" - ")[0],"」</span>");if(""!==document.referrer){var d=new URL(document.referrer),m=d.hostname.split(".")[1],f={baidu:"百度",so:"360搜索",google:"谷歌搜索"};return location.hostname===d.hostname?u:(l=m in f?f[m]:d.hostname,"Hello！来自 <span>".concat(l,"</span> 的朋友<br>").concat(u))}return u}(t.time),7e3,11),window.addEventListener("mouseover",(function(n){for(var s,c=0,a=t.mouseover;c<a.length;c++){var r=a[c],l=r.selector,u=r.text;if(null===(s=n.target)||void 0===s?void 0:s.closest(l)){if(i===l)return;return i=l,void o(u=(u=e(u)).replace("{text}",n.target.innerText),4e3,8)}}})),window.addEventListener("click",(function(n){for(var i,s=0,c=t.click;s<c.length;s++){var a=c[s],r=a.selector,l=a.text;if(null===(i=n.target)||void 0===i?void 0:i.closest(r))return void o(l=(l=e(l)).replace("{text}",n.target.innerText),4e3,8)}})),t.seasons.forEach((function(t){var o=t.date,n=t.text,i=new Date,s=o.split("-")[0],a=o.split("-")[1]||s;Number(s.split("/")[0])<=i.getMonth()+1&&i.getMonth()+1<=Number(a.split("/")[0])&&Number(s.split("/")[1])<=i.getDate()&&i.getDate()<=Number(a.split("/")[1])&&(n=(n=e(n)).replace("{year}",String(i.getFullYear())),c.push(n))}));var a=function(){};console.log("%c",a),a.toString=function(){o(t.message.console,6e3,9)},window.addEventListener("copy",(function(){o(t.message.copy,6e3,9)})),window.addEventListener("visibilitychange",(function(){document.hidden||o(t.message.visibilitychange,6e3,9)}))}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n            <div id="waifu-tips"></div>\n            <canvas id="live2d" width="800" height="800"></canvas>\n            <div id="waifu-tool"></div>\n        </div>'),setTimeout((function(){document.getElementById("waifu").style.bottom="0"}),0),function(){c["switch-model"].callback=function(){return a.loadOtherModel()},c["switch-texture"].callback=function(){return a.loadRandModel()},Array.isArray(t.tools)||(t.tools=Object.keys(c));for(var e=0,o=t.tools;e<o.length;e++){var n=o[e];if(c[n]){var i=c[n],s=i.icon,r=i.callback;document.getElementById("waifu-tool").insertAdjacentHTML("beforeend",'<span id="waifu-tool-'.concat(n,'">').concat(s,"</span>")),document.getElementById("waifu-tool-".concat(n)).addEventListener("click",r)}}}(),n=Number(localStorage.getItem("modelId")),i=Number(localStorage.getItem("modelTexturesId")),null===n&&(n=0,i=53),a.loadModel(n,i,""),fetch(t.waifuPath).then((function(e){return e.json()})).then(r)}window.initWidget=function(e,t){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n       <span>看板娘</span>\n     </div>');var o=document.getElementById("waifu-toggle");null==o||o.addEventListener("click",(function(){o.classList.remove("waifu-toggle-active"),(null==o?void 0:o.getAttribute("first-time"))?(a(e),null==o||o.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout((function(){document.getElementById("waifu").style.bottom="0"}),0))})),localStorage.getItem("waifu-display")&&Date.now()-Number(localStorage.getItem("waifu-display"))<=864e5?(null==o||o.setAttribute("first-time","true"),setTimeout((function(){null==o||o.classList.add("waifu-toggle-active")}),0)):a(e)}}();
