const BASE_URL = "https://api.example.com";

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}

export function get(url) {
  return fetch(`${BASE_URL}${url}`)
    .then(handleErrors)
    .catch((error) => {
      console.error("API request failed:", error);
      throw error;
    });
}

export function post(url, data) {
  return fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 其他自定义的请求头
    },
    body: JSON.stringify(data),
  })
    .then(handleErrors)
    .catch((error) => {
      console.error("API request failed:", error);
      throw error;
    });
}
