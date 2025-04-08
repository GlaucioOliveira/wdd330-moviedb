import{a as o,g as r,m as d,d as l}from"./auth-e00725ba.js";import"./main-e0adf169.js";function c(t,s=!1){o().then(e=>{let i=e;if(s&&(i=e.filter(a=>a.wishlist)),!i||i.length===0){document.querySelector(t).innerHTML="<p>Wishlist is empty.</p>";return}const n=i.map(a=>h(a));document.querySelector(t).innerHTML=n.join("")}).catch(e=>{console.error("Error fetching Wish List:",e),document.querySelector(t).innerHTML="<p>Failed to load Wish List. Please try again later.</p>"})}function h(t){return`<tr>
                <td><img src="${t.poster}" style="width:128px;padding-right:10px;"><strong>${t.title}</strong><span class="badge badge-pill text-bg-info">Wishlist</span></td>
                <td>${t.genre}</td>
                <td>${t.year}</td>
                <td>${t.mediatype}</td>
                <td>
                  <button class="btn btn-success" type="button" onclick="window.location='/wdd330-moviedb/wishlists/?pid=${t.id}'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  </button>
                  <span></span>
                  <button class="btn btn-danger" type="button" class="delete-movie" onclick="deleteMovieConfirm(${t.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                  </button>
                </td>
              </tr>`}async function p(t){await l(t),window.location.reload()}document.addEventListener("DOMContentLoaded",async()=>{let t=r("pid");t&&await d(t),c("#moviesList",!0)});window.deleteMovieConfirm=p;
