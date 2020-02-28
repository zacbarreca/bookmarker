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
      <select id="filter">
        <option value="">Filter By Rating</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">All</option>
      </select>
    <div>
    <div class="bookmark-list">
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
    <form>
      <fieldset>
        <legend>Add New Bookmark</legend>
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title"></input><br>
        <label for="url">URL:</label><br>
        <input type="text" id="url" name="url"></input><br>
        <label for="description">Description:</label><br>
        <input type="text-area" id="description" name="description"></input><br>
        <select id="rating">
          <option value="">Rating</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select><br>
        <input type="submit"></input>
        <input type="button" value="Cancel"></input>
      </fieldset>
    </form>
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
    render();
  });
}

// Handle submit add new bookmark form

function handleSubmit() {
  $('main').on('click', 'submit', function (event) {
    event.preventDefault();
    console.log('Test test');
  });
}
/********************
 * RENDER FUNCTION(S)
 ********************/

function render() {
  let html = '';
  if (store.adding) {
    $('main').html(generateAddBookmarkFormHtml());
  } else {
    $('main').html(generateHomeHtml());
  }
}

/**************
 * PAGE LOADER
 **************/

function handleBookmarker() {
  render();
  handleAddBookmark();
}

handleBookmarker();