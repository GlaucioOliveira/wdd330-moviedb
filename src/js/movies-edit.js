import { getParam } from "./utils.mjs";
import { getMovieById, editMovie } from "./externalServices.mjs";

setTimeout(async function () {
  let movieId = getParam("id");
  let movieInfo = await getMovieById(movieId);

  document.getElementById("movie-id").innerText = getParam("id");

  if(movieInfo){
    document.getElementById("id").value = movieInfo.id;
    document.getElementById("title").value = movieInfo.title;
    document.getElementById("year").value = movieInfo.year;
    document.getElementById("genre").value = movieInfo.genre;
    document.getElementById("mediatype").value = movieInfo.mediatype;
    document.getElementById("location").value = movieInfo.location;
  }

  }, 100);


  document.addEventListener("DOMContentLoaded", () => {

  
    // Attach event listener to the form submit
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
      editForm(form); // Call checkout method
    });
  });  

    // Correct async method declaration
    async function editForm(form) {
      const formData = new FormData(form);
      const movieData = {
        id: formData.get("id"),
        title: formData.get("title"),
        year: formData.get("year"),
        genre: formData.get("genre"),
        mediatype: formData.get("mediatype"),
        location: formData.get("location")
      };

      await editMovie(formData.get("id"), movieData);

      window.location = "/movies/";
    }