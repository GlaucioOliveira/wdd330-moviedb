import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { login } from "./auth.mjs";
import { getParam } from "./utils.mjs";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-form");
  const redirect = getParam("redirect") || "/wdd330-moviedb/movies/";

  document.querySelector("#email").value = localStorage.getItem("email") || "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const pass = document.querySelector("#password").value;

    localStorage.setItem("email", email);

    await login({ email, pass }, redirect);
  });
});
