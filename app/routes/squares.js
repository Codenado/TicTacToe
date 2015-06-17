import Ember from 'ember';

export default Ember.Route.extend({
  
    actions: {
        newGame: function() {
        	var i 
           for (i = 0; i < 9; i++) { 
           	alert(i)
	    		store.createRecord('square', {
	                title: i,
	                isCompleted: false
	            });
 			
			}
        }
    }
});