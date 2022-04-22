import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  router: inject(),

  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('idSpeaker'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        patronymic: this.get('patronymic'),
      });
    },

    backToList() {
      this.get('router').transitionTo('speaker');
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    
    this.setProperties({
      idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic')
    })
  }
});
