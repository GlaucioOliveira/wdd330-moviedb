import { loginRequest } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage, setSessionStorage, getSessionStorage } from "./utils.mjs";
import { jwtDecode } from "jwt-decode"; 

const tokenKey = "so-token";

export async function login(creds, redirect = "/wdd330-moviedb") {
    try {
      const token = await loginRequest(creds);
      console.log("Received token from loginRequest:", token);  // Debugging
      if (token) {
        setSessionStorage(tokenKey, token);  // Ensure the token is stored correctly
        window.location = redirect;
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      document.querySelector("#alert-container").innerHTML = `<div class="alert alert-danger" role="alert">Error: ${err.message}</div>`; // Display error message
    }
  }

  export async function userName() {
    try {
        const token = getLocalStorage(tokenKey);
        if (!token) return null;
        const decoded = jwtDecode(token); 
        return decoded.name || null; // Return the name from the decoded token
    } catch (err) {
        console.error("Failed to decode token: " + err.message);
        return null;
    }
  }

export async function logout() {
    try {
        localStorage.removeItem(tokenKey);
        window.location = "/wdd330-moviedb/login/index.html";
    } catch (err) {
        console.error("Logout failed: " + err.message);
    }
}

export function isTokenValid(token) {
    if (!token) return false;
    const decoded = jwtDecode(token); 
    return decoded.exp * 1000 > new Date().getTime();
}

export function checkLogin() {
  const token = getSessionStorage(tokenKey);
  const valid = isTokenValid(token);
  if (!valid) {
    sessionStorage.removeItem(tokenKey);
    const location = window.location;
    window.location = `/wdd330-moviedb/login/index.html?redirect=${location.pathname}${location.search}`;
  } else {
    return token;
  }
}


