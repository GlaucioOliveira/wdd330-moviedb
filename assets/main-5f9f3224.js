import{h as a,i as d,j as n,u as s}from"./auth-40e2bfcb.js";window.logout=a;document.addEventListener("DOMContentLoaded",async()=>{d();let t=await n(),e=await s();t&&(document.getElementById("header-username").innerText=e||"Guest",document.location.pathname==="/wdd330-moviedb/movies/"?(document.getElementById("nav-movies").classList.add("text-decoration-underline"),document.getElementById("nav-movies").classList.add("active")):document.location.pathname==="/wdd330-moviedb/wishlists/"&&(document.getElementById("nav-wishlists").classList.add("text-decoration-underline"),document.getElementById("nav-wishlists").classList.add("active")))});
