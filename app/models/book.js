import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  coverUrl: DS.attr('string'),
  descriptionUrl: DS.attr('string'),
  tags: DS.attr('string'),
  pagesCount: DS.attr('number'),
  avgRating: DS.attr('number')
});
