import{c as o,b as r}from"./auth-e00725ba.js";import"./main-e0adf169.js";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("form");n.addEventListener("submit",e=>{n.checkValidity()&&(e.preventDefault(),d(n))}),document.getElementById("title").addEventListener("blur",()=>{l()})});async function d(n){const t=new FormData(n),e={title:t.get("title"),poster:t.get("poster"),year:t.get("year"),genre:t.get("genre"),mediatype:t.get("mediatype"),location:t.get("location"),wishlist:t.get("wishlist")==="on"};await o(e),window.location="/wdd330-moviedb/movies/"}async function l(){const n=document.getElementById("title").value,t=document.getElementById("year").value;if(!n)return;const e=await r(n,t);e!=null&&e.Poster?(document.getElementById("posterImg").src=e==null?void 0:e.Poster,document.getElementById("posterImg").style.display="block",document.getElementById("poster").value=e==null?void 0:e.Poster):document.getElementById("posterImg").style.display="none",document.getElementById("title").value=e==null?void 0:e.Title,document.getElementById("year").value=e==null?void 0:e.Year,document.getElementById("genre").value=e==null?void 0:e.Genre}
