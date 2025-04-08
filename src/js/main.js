import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { loadHeaderFooter } from "../js/utils.mjs";
import { logout, userName } from "./auth.mjs";
import {checkLogin} from "./auth.mjs";

window.logout = logout;

document.addEventListener("DOMContentLoaded", async () => {
      checkLogin();
      
      let partialsLoaded = await loadHeaderFooter();
      let userNameStr = await userName();

      if(partialsLoaded){
          document.getElementById("header-username").innerText = userNameStr
          ? userNameStr
          : "Guest";
      
        if (document.location.pathname === "/wdd330-moviedb/movies/") {
          document.getElementById("nav-movies").classList.add("text-decoration-underline");
          document.getElementById("nav-movies").classList.add("active");
        } else if (document.location.pathname === "/wdd330-moviedb/wishlists/") {
          document.getElementById("nav-wishlists").classList.add("text-decoration-underline");
          document.getElementById("nav-wishlists").classList.add("active");
        }
      }
});