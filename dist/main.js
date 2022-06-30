var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function o(e){console.log("all data returned is:"),console.log(e);const t=Math.round(10*e.weather.precip)/10,n=document.getElementById("all-posts"),o=document.createElement("div");o.classList.add("entry-holder"),o.innerHTML=`\n        <img src="${e.pix.webformatURL}" alt="destination">\n        <div class="stat-holder">\n            <div class="wait-time"><i>${e.geo.name}, ${Client.checkCountry(e.geo)} is ${Client.dateDiff()} days away.</i></div>\n            <h3>Typical weather for then is:</h3>\n            <div class="temp">High: ${e.weather.max_temp}&degC, Low: ${e.weather.min_temp}&degC</div>\n            <div class="precip">With a chance for ${t}mm of precipitation</div>\n        </div>\n    `,n.appendChild(o)}n.r(t),n.d(t,"updateUI",(function(){return o})),n.d(t,"postInput",(function(){return i})),n.d(t,"dateDiff",(function(){return r})),n.d(t,"checkCountry",(function(){return a})),n.d(t,"handleSubmit",(function(){return l}));const i=async(e="",t={})=>{const n=await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});try{const e=await n.json();console.log("newData in postInput function is:"),console.log(e),Client.updateUI(e)}catch(e){console.log("ERROR in POST:",e)}};function r(){let e=document.getElementById("trip-start").value,t=new Date,n=e.split("-"),o=new Date(n[0],n[1]-1,n[2]);return Math.round((o-t)/1e3/60/60/24*10)/10}function a(e){return"United States"===e.countryName?e.adminName1:e.countryName}function l(e){const t=document.getElementById("place"),n=document.getElementById("trip-start"),o=n.value,i=encodeURI(t.value);return t.value.length<=0||o.length<=0?(t.classList.add("invalid"),n.classList.add("invalid"),console.log("All fields must be filled!"),!1):Client.dateDiff()>16.5?(n.classList.add("invalid"),console.log(Client.dateDiff()),alert("You must travel less than 16 days from now!"),!1):(Client.postInput("http://localhost:3000/add",{location:i,date:o}),t.classList.remove("invalid"),n.classList.remove("invalid"),!0)}n(0),n(1),n(2);document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("generate").addEventListener("click",l)}))}]);