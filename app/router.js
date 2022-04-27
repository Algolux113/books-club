import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('book', { path: '/books'}, function() {});
  this.route('speaker', { path: 'speakers'}, function() {});
  this.route('error', {path: '/:error'});
  this.route('404', { path: '*path' });
  this.route('book-edit', { path: 'book/edit/:id'});
  this.route('speaker-edit', { path: 'speaker/edit/:id'});
  this.route('speaker-create');
  this.route('book-create');
  this.route('meeting');
});

export default Router;
