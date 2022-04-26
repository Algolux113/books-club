import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  nornalize(model, hash) {
    let hashCopy = Object.assign({}, hash);
    hashCopy.attributes = {};
    hashCopy.attributes.firstName = hashCopy.firstName;
    hashCopy.attributes.lastName = hashCopy.lastName;
    hashCopy.attributes.patronymic = hashCopy.patronymic;
    delete hashCopy.firstName;
    delete hashCopy.lastName;
    delete hashCopy.patronymic;
    hash = {
      data: hashCopy
    };

    return hash;
  },

  serialize(snapshot, options) {
    let json = this._super(...arguments);
    json.type = snapshot.modelName;
    return json;
  }
});
