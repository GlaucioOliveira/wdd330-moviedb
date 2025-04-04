import { wishlistList } from "./wishlistList.mjs";
import { deleteMovie, moviePurchased } from "./externalServices.mjs";
import { getParam } from "./utils.mjs";

async function deleteMovieConfirm(id) {
  await deleteMovie(id);
  window.location.reload();
}


document.addEventListener("DOMContentLoaded", async () => {
let purchasedMovieId = getParam("pid");

if(purchasedMovieId){
  await moviePurchased(purchasedMovieId);
}

//show only wishlist movies
wishlistList("#moviesList", true);

});

window.deleteMovieConfirm = deleteMovieConfirm; // Expose the function to the global scope
