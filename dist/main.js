(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"b66ca5f142ca38e8cf82.jpg";(function(){const e=document.querySelector("#content"),r=document.createElement("h1"),n=document.createElement("p"),o=document.createElement("img");r.textContent="Savor Haven",n.textContent="Savor Haven offers a delightful blend of culinary delights, bringing together flavors from around the world to create a unique and unforgettable dining experience. From savory appetizers to mouthwatering entrees and decadent desserts, every dish is crafted with care and passion, promising a journey of taste sensations that will leave you craving for more.",o.setAttribute("src",t),e.appendChild(r),e.appendChild(n),e.appendChild(o)})(),console.log("Restaurant webpage")})();