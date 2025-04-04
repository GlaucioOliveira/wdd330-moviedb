import { getMoviesList } from "./externalServices.mjs";

export function wishlistList(selector, wishlistOnly = false) {
  getMoviesList()
    .then((data) => {
      let filteredData = data;

      if (wishlistOnly) {
        filteredData = data.filter((item) => item.wishlist);
      }

      if (!filteredData || filteredData.length === 0) {
        document.querySelector(selector).innerHTML =
          "<p>Wishlist is empty.</p>";
        return;
      }

      const htmlItems = filteredData.map((item) => moviesTemplate(item));
      document.querySelector(selector).innerHTML = htmlItems.join("");
    })
    .catch((error) => {
      console.error("Error fetching Wish List:", error);
      document.querySelector(selector).innerHTML =
        "<p>Failed to load Wish List. Please try again later.</p>";
    });
}

function moviesTemplate(movie) {

  return `<tr>
                <td><img src="${movie.poster}" style="width:128px;padding-right:10px;"><strong>${movie.title}</strong><span class="badge badge-pill text-bg-info">Wishlist</span></td>
                <td>${movie.genre}</td>
                <td>${movie.year}</td>
                <td>${movie.mediatype}</td>
                <td>
                  <button class="btn btn-success" type="button" onclick="window.location='/wishlists/?pid=${movie.id}'">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
                  </svg>
                  </button>
                  <span></span>
                  <button class="btn btn-danger" type="button" class="delete-movie" onclick="deleteMovieConfirm(${movie.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
                  </button>
                </td>
              </tr>`;
}
