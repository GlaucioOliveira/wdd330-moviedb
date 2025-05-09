const baseURL = "https://api.goliveira.com";
function getJWTToken() {
  const token = JSON.parse(sessionStorage.getItem("so-token")); 
  return token;
}

export async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: "servicesError", message: data };
  }
}

export async function getMoviesList() {
  const response = await fetch(`${baseURL}/movies?order=title`);
  const data = await convertToJson(response);
  return data;
}

export async function getMovieById(id) {
  const response = await fetch(`${baseURL}/movies?id=eq.${id}`);
  const data = await convertToJson(response);
  return data[0];
}

export async function getMovieData(movie, year) {
  const protocol = window.location.hostname === "localhost" ? "http" : "https";
  //const response = await fetch(`${protocol}://www.omdbapi.com/?t=${movie}&y=${year}&apikey=de78baf9`);
  const response = await fetch(`${protocol}://www.omdbapi.com/?t=${movie}&apikey=de78baf9`);
  const data = await convertToJson(response);
  return data;
}

export async function editMovie(id, payload) {

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getJWTToken()}`
    },
    body: JSON.stringify(payload),
  };
  return await fetch(`${baseURL}/movies?id=eq.${id}`, options);
}

export async function moviePurchased(id) {

  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getJWTToken()}`
    },
    body: JSON.stringify({"wishlist": false})
  };
  return await fetch(`${baseURL}/movies?id=eq.${id}`, options);
}

export async function deleteMovie(id) {

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getJWTToken()}`
    }
  };
  return await fetch(`${baseURL}/movies?id=eq.${id}`, options);
}



export async function createMovie(payload) {

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getJWTToken()}`
    },
    body: JSON.stringify(payload),
  };
  return await fetch(`${baseURL}/movies`, options);
}


export async function loginRequest(creds) {
  const response = await fetch("https://api.goliveira.com/rpc/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(creds),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  const { token } = data; 
  return token;
}

