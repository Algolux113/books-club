import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ["search"],
  search: '',

  dataService: service('data'),

  refresh() {
    this.send('refreshModel');
  },

  actions: {
    addSpeaker() {
      this.transitionToRoute('speaker-create');
    },

    editSpeaker(speaker) {
      this.transitionToRoute('speaker-edit', speaker.id);
    },

    async deleteSpeaker(speaker) {
      await this.get("dataService").deleteSpeaker(speaker);
      this.refresh();
    },

    searchSpeaker(e) {
      e.preventDefault();
      this.refresh();
    }
  }
});
