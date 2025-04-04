import { movieList } from "./moviesList.mjs";
import { deleteMovie } from "./externalServices.mjs";

movieList("#moviesList");

async function deleteMovieConfirm(id) {
  await deleteMovie(id);
  window.location.reload();
}

window.deleteMovieConfirm = deleteMovieConfirm; // Expose the function to the global scope
