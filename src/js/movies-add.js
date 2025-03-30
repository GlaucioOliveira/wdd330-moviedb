import { createMovie } from "./externalServices.mjs";

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
        title: formData.get("title"),
        year: formData.get("year"),
        genre: formData.get("genre"),
        mediatype: formData.get("mediatype"),
        location: formData.get("location")
      };

      await createMovie(movieData);

      window.location = "/movies/";
    }