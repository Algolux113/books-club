import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  router: inject(),

  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('idBook'),
        name: this.get('name'),
        author: this.get('author'),
        pagesCount: this.get('pagesCount'),
        coverUrl: this.get('coverUrl'),
        descriptionUrl: this.get('descriptionUrl'),
        tags: this.get('tags'),
        avgRating: this.get('avgRating')
      });
    },

    backToList() {
      this.get('router').transitionTo('book');
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    
    this.setProperties({
      idBook: this.get('book.id') ? this.get('book.id') : undefined,
      name: this.get('book.name'),
      author: this.get('book.author'),
      pagesCount: this.get('book.pagesCount'),
      coverUrl: this.get('book.coverUrl'),
      descriptionUrl: this.get('book.descriptionUrl'),
      tags: this.get('book.tags'),
      avgRating: this.get('book.avgRating')
    })
  }
});
