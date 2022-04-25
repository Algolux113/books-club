import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: '',

  dataService: service('data'),

  refresh() {
    this.send('refreshModel');
  },

  actions: {
    addBook() {
      this.transitionToRoute('book-create');
    },

    editBook(book) {
      this.transitionToRoute('book-edit', book.id);
    },

    async deleteBook(book){
      await this.get("dataService").deleteBook(book);
      this.refresh();
    },

    searchBook(e) {
      e.preventDefault();
      this.refresh();
    }
  }
});
