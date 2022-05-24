import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  model({ search }) {
    if (search) {
      return this.store.query('speaker', { q: search });
    }

    return this.get('store').findAll('speaker');
  },

  actions: {
    refreshModel() {
      this.refresh();
    }
  }
});
