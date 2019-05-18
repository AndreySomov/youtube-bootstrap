!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=4)}([function(t,e,i){var n=i(1);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(2)(n,s);n.locals&&(t.exports=n.locals)},function(t,e,i){},function(t,e,i){var n,s,r={},o=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),a=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,d=[],h=i(3);function u(t,e){for(var i=0;i<t.length;i++){var n=t[i],s=r[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(w(n.parts[o],e))}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(w(n.parts[o],e));r[n.id]={id:n.id,refs:1,parts:a}}}}function p(t,e){for(var i=[],n={},s=0;s<t.length;s++){var r=t[s],o=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};n[o]?n[o].parts.push(a):i.push(n[o]={id:o,parts:[a]})}return i}function f(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),d.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=a(t.insertAt.before,i);i.insertBefore(e,s)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return i.nc}();n&&(t.attrs.nonce=n)}return b(e,t.attrs),f(t,e),e}function b(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function w(t,e){var i,n,s,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var o=c++;i=l||(l=m(e)),n=y.bind(null,i,o,!1),s=y.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),f(t,e),e}(e),n=function(t,e,i){var n=i.css,s=i.sourceMap,r=void 0===e.convertToAbsoluteUrls&&s;(e.convertToAbsoluteUrls||r)&&(n=h(n));s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var o=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}.bind(null,i,e),s=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=m(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),s=function(){v(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=p(t,e);return u(i,e),function(t){for(var n=[],s=0;s<i.length;s++){var o=i[s];(a=r[o.id]).refs--,n.push(a)}t&&u(p(t,e),e);for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete r[a.id]}}}};var C,g=(C=[],function(t,e){return C[t]=e,C.filter(Boolean).join("\n")});function y(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,n=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var s,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(s=0===r.indexOf("//")?r:0===r.indexOf("/")?i+r:n+r.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}},function(t,e,i){"use strict";i.r(e);class n{constructor(t){this.title=t.snippet.title,this.description=t.snippet.description?`${t.snippet.description.slice(0,100)}...`:"No description :(",this.viewCount=t.statistics.viewCount,this.dislikeCount=t.statistics.dislikeCount,this.likeCount=t.statistics.likeCount,this.channelTitle=t.snippet.channelTitle,this.publishedAt=`${t.snippet.publishedAt.slice(0,10)}`,this.imgUrl=t.snippet.thumbnails.medium.url,this.id=t.id}}async function s(t){return await fetch(t).then(t=>t.json())}class r{constructor(t,e){this.key=t,this.domain=e}async getClipIds(t,e){const i=e?`pageToken=${e}&`:"",n=`${this.domain}search?part=snippet&maxResults=15&${i}q=${t}&fields=items%2Fid%2FvideoId%2CnextPageToken&key=${this.key}`,r=await s(n),{nextPageToken:o}=r;return{ids:r.items.map(t=>t.id.videoId).join(),nextPageToken:o}}async getClipInfo(t){const e=`${this.domain}videos?part=snippet%2C+statistics&id=${t}=items(id%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2Cthumbnails%2Fmedium%2Ctitle)%2Cstatistics(commentCount%2CdislikeCount%2ClikeCount%2CviewCount))&key=${this.key}`;return await s(e)}static parseData(t){return t.items.map(t=>new n(t))}}class o{constructor(t){this.context=t,this.view=this.context.view,this.slider=this.context.view.slider,this.isDown=!1,this.startX=0,this.scrollLeft=0,this.offset=0,this.slider.addEventListener("mousedown",this.onDown.bind(this),!1),this.slider.addEventListener("mouseleave",this.onLeave.bind(this),!1),this.slider.addEventListener("mouseup",this.onUp.bind(this),!1),this.slider.addEventListener("mousemove",this.onMove.bind(this),!1),this.slider.addEventListener("touchstart",this.onDown.bind(this),!1),this.slider.addEventListener("touchend",this.onUp.bind(this),!1),this.slider.addEventListener("touchcancel",this.onLeave.bind(this),!1),this.slider.addEventListener("touchmove",this.onMove.bind(this),!1)}static unify(t){return t.targetTouches?t.targetTouches[0]:t}onDown(t){if(!this.context.sliderStatus||t.target.classList.contains("url"))return;this.activateSlider();const e=o.unify(t);this.isDown=!0,this.scrollLeft=this.slider.scrollLeft,this.startX=e.pageX}onLeave(){this.deactivateSlider(),this.isDown&&(this.isDown=!1,this.view.moveSlider(),this.context.checkSlider())}changeScreenCount(){this.offset>30&&(this.view.screenCount+=0===this.view.screenCount?0:-1),this.offset<=-30&&(this.view.screenCount+=1)}onUp(){this.isDown&&(this.deactivateSlider(),this.isDown=!1,this.changeScreenCount(),this.view.moveSlider(),this.context.checkSlider(),this.offset=0)}onMove(t){if(!this.isDown)return;const e=o.unify(t).pageX-this.slider.offsetLeft-this.startX;this.offset=e,this.slider.scrollLeft=this.scrollLeft-e}activateSlider(){document.documentElement.clientWidth<790||(this.slider.classList.remove("deactivated-slider"),this.slider.classList.add("activated-slider"))}deactivateSlider(){document.documentElement.clientWidth<790||(this.slider.classList.add("deactivated-slider"),this.slider.classList.remove("activated-slider"))}destroySlider(){this.view.slider.innerHTML="",this.context.token="",this.view.screenCount=0,this.view.checkSliderView()}}class a{constructor(t){this.context=t,this.view=this.context.view,this.buttonContainer=this.view.buttonContainer,this.buttonContainer.onclick=this.onClick.bind(this)}onClick(t){t.preventDefault(),t.target.hasAttribute("data-id")&&(this.view.screenCount+=+t.target.getAttribute("data-id"),this.view.moveSlider(),this.context.checkSlider())}hideButtons(){this.buttonContainer.classList.add("hidden")}showButtons(){this.buttonContainer.classList.remove("hidden")}}class l{constructor(t){this.element=document.createElement("li"),this.element.innerHTML=`<div class='card-container'>\n                            <div class='card'>\n                            <div class='card-head' style='background-image: url(${t.imgUrl});'>\n                                <div class='title'>\n                                <a href='https://www.youtube.com/watch?v=${t.id}' target='_blank'>\n                                    <p class='url'>${t.title}</p>\n                                </a>\n                                </div>\n                            </div>\n                            <div class='card-info'>\n                                <div class='channel-title'>\n                                <img src='src/assets/imgs/man.png'><span>${t.channelTitle}</span>\n                                </div>\n                                <div class='published-at'>\n                                <img src='src/assets/imgs/calendar.png'><span>${t.publishedAt}</span>\n                                </div>\n                                <div class='view-count'>\n                                <img src='src/assets/imgs/eye.png'><span>${t.viewCount}</span>\n                                </div>\n                                <div class='like-count'>\n                                <img src='src/assets/imgs/like.png'><span>${t.likeCount}</span>\n                                <img src='src/assets/imgs/dislike.png'><span>${t.dislikeCount}</span>\n                                </div>\n                            </div>\n                            <div class='description'>\n                                <p>${t.description}</p>\n                            </div>\n                            </div>\n                        </div>`}}class c{constructor(t,e){this.id=e,this.element=document.createElement("button"),this.element.classList.add("button",t),this.element.setAttribute("data-id",e),this.element.innerHTML='<div class="button-help"></div>'}}var d="AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y",h="https://www.googleapis.com/youtube/v3/";i(0);new class{constructor(t,e){this.inputValue=null,this.model=t,this.view=e,this.token="",this.sliderStatus=!1}async fillSlider(t){t&&t.preventDefault();const e=this.view.form.children[0].value;if(this.inputValue!==e&&(this.sliderStatus=!1,this.sliderConroller.destroySlider(),this.buttonsController.hideButtons()),""===e)return;this.sliderStatus=!0,this.inputValue=e;const i=await this.model.getClipIds(this.inputValue,this.token);if(0===i.ids.length)return;this.token=i.nextPageToken;const n=await this.model.getClipInfo(i.ids),s=r.parseData(n);this.view.createCardView(s),this.buttonsController.showButtons()}checkSlider(){this.view.checkSliderView();const t=this.view.slider.scrollWidth,e=document.documentElement.clientWidth;this.view.screenCount*e>t-3*e&&this.fillSlider()}start(){this.view.renderBaseView(),this.view.form.onsubmit=this.fillSlider.bind(this),this.sliderConroller=new o(this),this.view.createButtonsView(),this.buttonsController=new a(this)}}(new r(d,h),new class{constructor(){this.screenCount=0,this.walk=0,this.inputValue=null,this.token=""}renderBaseView(){this.app=document.createElement("div"),this.app.className="app",this.form=document.createElement("form"),this.form.classList.add("form"),this.form.innerHTML='<input type="text" class="input" placeholder="Введите запрос"></input>',this.slider=document.createElement("ul"),this.slider.classList.add("slider","disactive-slider"),this.app.appendChild(this.form),this.app.appendChild(this.slider),document.body.appendChild(this.app)}moveSlider(){const t=document.documentElement.clientWidth;this.slider.scroll({left:t*this.screenCount,behavior:"smooth"})}checkSliderView(){this.screenCount>=1&&this.buttons[1].classList.remove("hidden"),this.screenCount<1&&this.buttons[1].classList.add("hidden"),this.screenCount>=2&&this.buttons[0].classList.remove("hidden"),this.screenCount<2&&this.buttons[0].classList.add("hidden"),this.buttons[0].firstElementChild.innerHTML=this.screenCount-1,this.buttons[1].firstElementChild.innerHTML=this.screenCount,this.buttons[2].innerHTML=this.screenCount+1,this.buttons[3].firstElementChild.innerHTML=this.screenCount+2}createButtonsView(){this.buttons=[],this.buttonContainer=document.createElement("div"),this.buttonContainer.classList.add("button-container","hidden");const t=new c("prev-prev-button",-2).element;t.classList.add("hidden");const e=new c("prev-button",-1).element;e.classList.add("hidden");const i=new c("current-button",0).element;i.innerHTML="1";const n=new c("next-button",1).element;n.firstElementChild.innerHTML="2",this.buttons=[t,e,i,n],this.buttons.forEach(t=>this.buttonContainer.appendChild(t)),this.app.appendChild(this.buttonContainer)}createCardView(t){t.forEach(t=>{const e=new l(t);this.slider.appendChild(e.element)})}}).start()}]);
//# sourceMappingURL=app.bundle.js.map