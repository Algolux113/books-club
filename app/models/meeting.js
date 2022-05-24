import DS from 'ember-data';

export default DS.Model.extend({
  meetingDate: DS.attr('date'),
  report: DS.belongsTo('report')
});
