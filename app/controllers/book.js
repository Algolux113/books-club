import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addBook() {
      this.transitionToRoute('book-create');
    },

    editBook(id) {
      this.transitionToRoute('book-edit', id);
    },

    deleteBook(id ){
      console.log(`Удаление книги: ${id}`);
    }
  }
});
