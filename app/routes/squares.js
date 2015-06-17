import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
        return this.store.find('square');
    },
    actions: {
        newGame: function() {
        	var i 
           for (i = 0; i < 9; i++) { 
          		var square = this.store.createRecord('square', {
                	value: i,
               		taken: false
           		});
           		
            	square.save();
	    	}
        },
        selectSquare: function(square){
        	square.set('value', 'x')
        	square.set('taken', true)
        	
        }		
    }
});