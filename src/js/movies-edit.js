import { getParam } from "./utils.mjs";

setTimeout(function () {
    document.getElementById("movie-id").innerText = getParam("id");
  }, 100);


  