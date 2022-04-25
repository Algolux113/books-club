import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      await this.get("dataService").createBook(book);
      this.get('model').set('name', book.name);
      this.get('model').set('author', book.author);
      this.get('model').set('pagesCount', book.pagesCount);
      this.get('model').set('coverUrl', book.coverUrl);
      this.get('model').set('descriptionUrl', book.descriptionUrl);
      this.get('model').set('tags', book.tags);
      this.get('model').set('avgRating', book.avgRating);
      this.transitionToRoute('book');
    }
  }
});
