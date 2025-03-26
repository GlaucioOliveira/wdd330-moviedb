import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


import { loadHeaderFooter } from "../js/utils.mjs";
import { logout } from "./auth.mjs";

loadHeaderFooter();

window.logout = logout;