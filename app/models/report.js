import DS from 'ember-data';

export default DS.Model.extend({
  mark: DS.attr('number'),
  presentationURL: DS.attr('string'),
  review: DS.attr('string'),
  books: DS.hasMany('book'),
  speakers: DS.hasMany('speaker'),
  meetings: DS.hasMany('meeting')
});
