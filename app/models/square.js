import DS from 'ember-data';

export default DS.Model.extend({
 	value: DS.attr('string'),
    taken: DS.attr('boolean'),
    postion: DS.attr()
  

}).reopenClass({
    FIXTURES: [
     
    ]
})



