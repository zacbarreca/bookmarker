/****************
 * GENERATORS ***
 ****************/

function generateHomeHtml() {
  return `
    <div class="controls">
      <button id="add">Add</button>
      <select>
        <option value="">Filter</option>
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

function generateBookmarkHtml() {
  return `

  `;
}


/****************
 * EVENT HANDLERS
 ****************/
function handleAddBookmark() {
  $('main').on('click', '#add', function (event) {
    event.preventDefault();
    console.log('You clicked the add button');
  });
}

/********************
 * RENDER FUNCTION(S)
 ********************/

function render() {
  let html = '';
  $('main').html(generateHomeHtml());
}

/**************
 * PAGE LOADER
 **************/

function handleBookmarker() {
  render();
}

handleBookmarker();