import DS from 'ember-data';
import ENV from 'books-club/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  buildURL(modelName, requestType) {
    let url = this._super(...arguments);
    if (modelName === 'meeting') {
      url += '?_embed=reports';
    }

    return url;
  }
});
