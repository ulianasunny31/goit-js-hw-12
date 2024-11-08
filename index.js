import{S as P,a as $,i as m}from"./assets/vendor-BzajH6aU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const w=new P(".gallery a",{captionsData:"alt"});function h(s,r){const i=s.map(({webformatURL:o,largeImageURL:l,tags:v,likes:b,views:L,comments:C,downloads:S})=>`
  <li class='gallery__item'>
         <a href='${l}'>
          <img src='${o}' alt='${v}'>
        </a>
      <div class="info">
        <div class='info-item'>
         <p class='main-p'>Likes</p>
         <p>${b}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Views</p>
         <p>${L}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Comments</p>
         <p>${C}</p>
        </div>
        <div class='info-item'>
         <p class='main-p'>Downloads</p>
         <p>${S}</p>
        </div>
      </div>
  </li>
      `).join("");u.insertAdjacentHTML("beforeend",i);const t=u.lastElementChild.getBoundingClientRect().height*2;r||window.scrollBy({top:t,behavior:"smooth"}),w.refresh()}const c=document.querySelector(".load-more-btn"),O="41103551-afb5440a0c91585482e280fcd",f=document.querySelector(".loader");let a=1,y=15,d=!1,p="";c.style.display="none";async function g(s,r,i=!1){if(d)return;d=!0,p!==s&&(p=s,a=1);const e=`https://pixabay.com/api/?${new URLSearchParams({key:O,page:a,per_page:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;try{f.style.display="block";const t=await $.get(e),o=t.data.hits,l=t.data.totalHits;o.length===0&&a===1?(c.style.display="none",m.error({title:"No pictures found",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0})):(a+=1,r(o,i),c.style.display="block"),a>Math.ceil(l/y)&&l>0&&(c.style.display="none",m.error({title:"We're sorry, but you've reached the end of search results.",message:"Try another query",messageColor:"black",messageSize:"14px",position:"topCenter",timeout:3e3,closeOnClick:!0}))}catch(t){console.error(t)}finally{f.style.display="none",d=!1}}const q=document.getElementById("form"),x=document.querySelector(".load-more-btn"),u=document.querySelector(".gallery");q.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.searchquery.value;r.trim()!==""&&(u.innerHTML="",g(r,h,!0))});x.addEventListener("click",async()=>{g(p,h,!1)});
//# sourceMappingURL=index.js.map
