/**********
 * IMPORTS
 **********/
// Import exports from store.js
import store from './store.js';

/****************
 * GENERATORS ***
 ****************/

// Generate the home page html
function generateHomeHtml() {
  return `
    <div class="controls">
      <button id="add-bookmark-btn">Add Bookmark</button>
      <select>
        <option value="">Filter By Rating</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">All</option>
      </select>
    <div>
    <div class="bookmarks">
    </div>
  `;
}

// Generates the html template for each bookmark
/* under construction
function generateBookmarkHtml() {
  return `

  `;
}
*/

// Generates the html form for a user to submit a new bookmark
function generateAddBookmarkFormHtml() {
  return `

  `;
}
/****************
 * EVENT HANDLERS
 ****************/

// Show add new bookmark form when user clicks add button on home page
function handleAddBookmark() {
  $('main').on('click', '#add-bookmark-btn', function (event) {
    event.preventDefault();
    store.adding = true;
  });
}

/********************
 * RENDER FUNCTION(S)
 ********************/

function render() {
  let html = '';
  if (store.adding) {
    $('main').html(generateAddBookmarkFormHtml());
  }
  $('main').html(generateHomeHtml());
}

/**************
 * PAGE LOADER
 **************/

function handleBookmarker() {
  render();
  handleAddBookmark();
}

handleBookmarker();