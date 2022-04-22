import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    backToList() {
      this.transitionToRoute('book');
    }
  }
});
