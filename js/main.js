/**********
 * IMPORTS
 **********/
// Import exports from api.js and store.js
import api from './api.js';
import store from './store.js';

/****************
 * GENERATORS ***
 ****************/

// Generate the home page html
function generateHomeHtml() {
  return `
    <div class="block">
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
    </div>
  `;
}

// Conditionally generates the html template for each bookmark 
function generateBookmarkHtml(bookmark) {
  let expandedHtml = bookmark.expanded
    ? `
        <li>${bookmark.desc}</li>
        <li>${bookmark.url}</li>
      <button id="delete-btn" type="submit">Delete</button>
      `
    : '';
  return`
    <section class="bookmark-sctn">
      <ul data-item-id="${bookmark.id}" class="bookmark">
        <li>${bookmark.title}</li>
        <li>${bookmark.rating} ⭐</li>
        ${expandedHtml}
      </ul>
    </section>
  `;
}


// Generates the html form for a user to submit a new bookmark
function generateAddBookmarkFormHtml() {
  return `
    <div class="block">
      <form>
        <fieldset>
          <legend>Add New Bookmark</legend>
          <label for="title">Title:</label><br>
          <input type="text" id="title" name="title"></input><br>
          <label for="url">URL:</label><br>
          <input type="text" id="url" name="url"></input><br>
          <label for="description">Description:</label><br>
          <textarea id="description" name="desc"></textarea><br>
          <select id="rating" name="rating">
            <option value="">Rating</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select><br>
          <button type="submit" id="submit-btn">Submit</button>
          <button type="button" value="Cancel" id="cancel-btn">Cancel</button>
        </fieldset>
      </form>
    </div>
  `;
}

/****************
 * EVENT HANDLERS
 ****************/

// Show add new bookmark form when user clicks add button on home page
function handleAddBookmark() {
  $('main').on('click', '#add-bookmark-btn', e => {
    e.preventDefault();
    store.adding = true;
    render();
  });
}

// Handle submit add new bookmark form
function handleSubmit() {
  $('main').on('submit', 'form', e => {
    e.preventDefault();
    let newBookmark = serialize(e.target);
    api.addBookmark(newBookmark)
      .then(res => {
        store.addBookmark(res);
        store.adding = false;
        render();
      })
      .catch(error => (store.error = error.message));
  });
}

// Handle when a user cancels the add bookmark form
function handleCancel() {
  $('main').on('click', '#cancel-btn', e => {
    e.preventDefault();
    store.adding = false;
    render();
  });
}

// Handle when a user adjusts the rating filter
function handleFilterChange() {
  $('main').on('change', '#filter', e => {
    store.filter = parseInt($(e.currentTarget).val());
    console.log(store.filter);
    render();

  });
}

// Handles when a user clicks the bookmark to expand it
function handleBookmarkExpand() {
  $('main').on('click', '.bookmark', e => {
    let id = $(e.currentTarget).closest('ul').data('id');
    console.log('Hello from inside handleBookmarkExpand!')
    store.expandBookmark(id);
    render();
  })
}

/********************
 * RENDER FUNCTION(S)
 ********************/

// Renders html conditionally
function render() {
  let html = '';
  let bookmarks = store.bookmarks.filter(bookmark => {
    return bookmark.rating >= store.filter;
  });
  if (store.adding) {
    html = (generateAddBookmarkFormHtml());
  } else if (bookmarks.length > 0) {
    html = generateHomeHtml();
    html += bookmarks.map(generateBookmarkHtml).join('');
  } else if (bookmarks.length === 0) {
    html = generateHomeHtml();
  }
  $('main').html(html);
}

/**************
 * PAGE LOADER
 **************/

//Initializer
function handleBookmarker() {
  api.apiRequest()
    .then(bookmarks => {
      bookmarks.forEach(bookmark => store.addBookmark(bookmark));
      render();
    });
  render();
  handleFilterChange();
  handleAddBookmark();
  handleSubmit();
  handleCancel();
  handleBookmarkExpand();
}

//Serializer for converting user input on the add bookmark form to a JSON string
function serialize(form) {
  let formData = new FormData(form);
  const o = {};
  formData.forEach((val, name) => o[name] = val);
  o.rating = Number(o.rating);
  return JSON.stringify(o);
}

//Call initializer
handleBookmarker();