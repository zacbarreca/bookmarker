let bookmarks = [];
let adding = false;

/**********
 * EXPORTS
 **********/

function addBookmark(object) {
  this.bookmarks.push({ object, expanded: false });
}

export default {
  bookmarks,
  adding,
  addBookmark
};