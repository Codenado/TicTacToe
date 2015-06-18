import DS from 'ember-data';

export default DS.Model.extend({
  fint: function(){
  	return "testinf"
  }
}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: [],
            isCompleted: false
        }
      
    ]
});


