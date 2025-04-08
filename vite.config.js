import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  base: "/wdd330-moviedb/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/login/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        movies: resolve(__dirname, "src/movies/index.html"),
        new_movie: resolve(__dirname, "src/movies/new/index.html"),
        edit_movie: resolve(__dirname, "src/movies/edit/index.html"),
        wishlists: resolve(__dirname, "src/wishlists/index.html"),
        index: resolve(__dirname, "src/index.html"),
      },
    },
  },
});
