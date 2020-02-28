const bookmarks = [];
let adding = false;
let filter = 1;
let error = null;

/**********
 * EXPORTS
 **********/

function addBookmark(object) {
  this.bookmarks.push({ ...object, expanded: false });
}

export default {
  bookmarks,
  adding,
  filter,
  error,
  addBookmark
};