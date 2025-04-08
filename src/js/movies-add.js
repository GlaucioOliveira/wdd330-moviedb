import { createMovie, getMovieData } from "./externalServices.mjs";

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listener to the form submit
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    editForm(form); // Call checkout method
  });

  const yearInput = document.getElementById("title");
  yearInput.addEventListener("blur", () => {
    searchMovieData();
  });

});

// Correct async method declaration
async function editForm(form) {
  const formData = new FormData(form);
  const movieData = {
    title: formData.get("title"),
    poster: formData.get("poster"),
    year: formData.get("year"),
    genre: formData.get("genre"),
    mediatype: formData.get("mediatype"),
    location: formData.get("location"),
    wishlist: formData.get("wishlist") === "on" ? true : false,
  };

  await createMovie(movieData);

  window.location = "/wdd330-moviedb/movies/";
}


async function searchMovieData(){
  const movie = document.getElementById("title").value;
  const year = document.getElementById("year").value;

  if(!movie){ 
    return;
  }

  const movieData = await getMovieData(movie, year);  

  if(!movieData?.Poster){
    document.getElementById("posterImg").style.display = "none";  
  }
  else{
  document.getElementById("posterImg").src = movieData?.Poster;
  document.getElementById("posterImg").style.display = "block";
  document.getElementById("poster").value = movieData?.Poster;
  }

  document.getElementById("title").value = movieData?.Title;
  document.getElementById("year").value = movieData?.Year;
  document.getElementById("genre").value = movieData?.Genre;
}