import{S as C,a as P,i as m}from"./assets/vendor-BzajH6aU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const $=new C(".gallery a",{captionsData:"alt"});function g(r,s){const i=r.map(({webformatURL:o,largeImageURL:l,tags:y,likes:v,views:b,comments:L,downloads:S})=>`
  <li class='gallery__item'>
         <a href='${l}'>
          <img src='${o}' alt='${y}'>
        </a>
      <div class="info">
        <div class='info-item'>
         <p class='main-p'>Likes</p>
         <p>${v}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Views</p>
         <p>${b}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Comments</p>
         <p>${L}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Downloads</p>
         <p>${S}</p>
        </div>
      </div>
  </li>
      `).join("");p.insertAdjacentHTML("beforeend",i);const t=p.lastElementChild.getBoundingClientRect().height*2;s||window.scrollBy({top:t,behavior:"smooth"}),$.refresh()}const c=document.querySelector(".load-more-btn"),w="41103551-afb5440a0c91585482e280fcd",O=document.querySelector(".loader");let a=1,f=15,d=!1,u="";async function h(r,s,i=!1){if(d)return;d=!0,u!==r&&(u=r,a=1);const e=`https://pixabay.com/api/?${new URLSearchParams({key:w,page:a,per_page:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;try{const t=await P.get(e),o=t.data.hits,l=t.data.totalHits;o.length===0&&a===1?m.error({title:"No pictures found",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0}):(a+=1,s(o,i),c.classList.toggle("visible","not-visible")),a>Math.ceil(l/f)?(c.classList.toggle("not-visible","visible"),m.error({title:"We're sorry, but you've reached the end of search results.",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0})):c.classList.toggle("visible","not-visible")}catch(t){console.error(t)}finally{O.computedStyleMap.display="none",d=!1}}const q=document.getElementById("form"),M=document.querySelector(".load-more-btn"),p=document.querySelector(".gallery");q.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.searchquery.value;s.trim()!==""&&(p.innerHTML="",h(s,g,!0))});M.addEventListener("click",async()=>{h(u,g,!1)});
//# sourceMappingURL=index.js.map
