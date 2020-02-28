const apiURL = 'https://thinkful-list-api.herokuapp.com/zacbarreca/bookmarks';


// makes a request from the api
// under construction
function apiRequest() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => console.log(data));
}