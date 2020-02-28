const apiURL = 'https://thinkful-list-api.herokuapp.com/zacbarreca/bookmarks';


// makes a request from the api
function apiRequest() {
  return fetch(apiURL)
    .then(res => res.json());
}

// adds a bookmark with a POST request
function addBookmark(newBookmark) {
  return fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newBookmark
  })
    .then(res => res.json());
}

export default {
  apiRequest,
  addBookmark
};