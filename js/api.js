const apiURL = 'https://thinkful-list-api.herokuapp.com/zacbarreca/bookmarks';


// makes a request from the api
// under construction
function apiRequest() {
  return fetch(apiURL)
    .then(res => res.json());
}

// adds a bookmark with a POST request
// under construction
function addBookmark(newBookmark) {
  return fetch(apiURL), {
    method: 'POST',
    headers: { 'content-type': 'application.json' },
    body: JSON.stringify(newBookmark)
  }
    .then(res => res.json());
}

export default {
  apiRequest,
  addBookmark
};