import { wishlistList } from "./wishlistList.mjs";
import { deleteMovie } from "./externalServices.mjs";

//show only wishlist movies
wishlistList("#moviesList", true);

async function deleteMovieConfirm(id) {
  await deleteMovie(id);
  window.location.reload();
}

window.deleteMovieConfirm = deleteMovieConfirm; // Expose the function to the global scope
