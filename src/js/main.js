import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { loadHeaderFooter } from "../js/utils.mjs";
import { logout, userName } from "./auth.mjs";

loadHeaderFooter();

window.logout = logout;


setTimeout(function () {
    document.getElementById("header-username").innerText = userName() ? userName() : "Guest";

    if(document.location.pathname === "/movies/")
    {
        document.getElementById("nav-movies").classList.add("active");
    }
    else if(document.location.pathname === "/wishlists/")
    {
        document.getElementById("nav-wishlists").classList.add("active");
    }    
  }, 100);