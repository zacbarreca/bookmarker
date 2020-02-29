const bookmarks = [];
let adding = false;
let filter = 1;
let error = null;

function addBookmark(object) {
  this.bookmarks.push({ ...object, expanded: false });
}

function expandBookmark(id) {
  let o = this.bookmarks.find(bookmark => bookmark.id !== id);
  if (!o){
    return;
  }
  o.expanded = !o.expanded;
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
  expandBookmark
};