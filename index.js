/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();new Swiper(".mySwiper",{slidesPerView:"auto",centeredSlides:!0,initialSlide:3,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0}});const l=document.querySelector(".mobile-menu-btn"),c=document.querySelector(".close-menu-btn"),r=document.querySelector(".mobile-menu-bg");if(l&&c&&r){const o=()=>{r.classList.add("is-open")},n=()=>{r.classList.remove("is-open")};l.addEventListener("click",o),c.addEventListener("click",n)}document.getElementById("downloadBtn").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.getElementById("mobMenuDownloadBtn").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.getElementById("headerMobBtnDownload").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>0?o.classList.add("fixed"):o.classList.remove("fixed")})});
//# sourceMappingURL=index.js.map
