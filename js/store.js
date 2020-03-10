// Initialize store variables
const bookmarks = [];
let adding = false;
let filter = 1;
let error = null;

// Used by the handleSubmit function in main.js to add new bookmarks
function addBookmark(object) {
  this.bookmarks.push({ ...object, expanded: false });
}

// Used by the handleBookmarkExpand function in main.js to expand bookmarks
function expandBookmark(id) {
  let o = this.bookmarks.find(bookmark => bookmark.id === id);
  if (!o) {
    return;
  }
  o.expanded = !o.expanded;
}

// Used by the handleDeleteBookmark function in main.js to delete bookmarks
function deleteBookmark(id) {
  this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
}


/**********
 * EXPORTS
 **********/

export default {
  bookmarks,
  adding,
  filter,
  error,
  addBookmark,
  expandBookmark,
  deleteBookmark
};