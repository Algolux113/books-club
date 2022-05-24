import Route from '@ember/routing/route';

export default Route.extend({
  model({ search }) {
    if (search) {
      return this.store.query('meeting', { q: search });
    }

    return this.get('store').findAll('meeting');
  }
});
