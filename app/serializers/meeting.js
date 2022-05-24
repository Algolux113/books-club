import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  nornalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
