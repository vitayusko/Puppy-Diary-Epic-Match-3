/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var a=new Swiper(".mySwiper",{slidesPerView:"auto",centeredSlides:!0,initialSlide:3,grabCursor:!0,pagination:{el:".swiper-pagination",clickable:!0},slideToClickedSlide:!0,watchSlidesProgress:!0});a.on("click",function(o,n){var i=n.target.closest(".swiper-slide");if(i){var r=Array.from(o.slides).indexOf(i);r!==o.activeIndex&&o.slideTo(r)}});const c=document.querySelector(".mobile-menu-btn"),u=document.querySelector(".close-menu-btn"),s=document.querySelector(".mobile-menu-bg"),p=document.querySelectorAll(".nav-item-link-mob");let d=0;if(c&&u&&s){const o=()=>{d=window.pageYOffset,document.body.style.position="fixed",document.body.style.top=`-${d}px`,document.body.style.width="100%",s.classList.add("is-open")},n=()=>{document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,d),s.classList.remove("is-open")};c.addEventListener("click",o),u.addEventListener("click",n),p.forEach(i=>{i.addEventListener("click",n)})}document.getElementById("downloadBtn").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.getElementById("mobMenuDownloadBtn").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.getElementById("headerMobBtnDownload").onclick=function(){window.open("https://play.google.com/store/apps/details?id=puppy.diary.puzzle.eliminate.blast.cure.free.android","_blank")};document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>0?o.classList.add("fixed"):o.classList.remove("fixed")})});
//# sourceMappingURL=index.js.map
