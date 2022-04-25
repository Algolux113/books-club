import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create({
      name: '',
      author: '',
      pagesCount: 0,
      coverUrl: '',
      descriptionUrl: '',
      tags: '',
      avgRating: 0
    });
  }
});
