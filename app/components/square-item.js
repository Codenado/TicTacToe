import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		selectSquare: function(){
			
	        this.sendAction('selectSquare', this.get('square'))
	    }		
	}    
});
