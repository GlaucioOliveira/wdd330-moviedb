import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/login/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        movies: resolve(__dirname, "src/movies/index.html"),
        wishlists: resolve(__dirname, "src/wishlists/index.html"),},
    },
  },
});
