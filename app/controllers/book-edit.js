import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      // await this.get("dataService").updateBook(book);

      let bookModel = this.get('model');

      bookModel.set('name', book.name);
      bookModel.set('author', book.author);
      bookModel.set('pagesCount', book.pagesCount);
      bookModel.set('coverUrl', book.coverUrl);
      bookModel.set('descriptionUrl', book.descriptionUrl);
      bookModel.set('tags', book.tags);
      bookModel.set('avgRating', book.avgRating);

      await bookModel.save();

      this.transitionToRoute('book');
    }
  }
});
