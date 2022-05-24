import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model({ search }) {
    if (search) {
      return this.store.query('book', { q: search });
    }

    return this.get('store').findAll('book');
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
