
'use strict';

var PageView = require('../framework/page');

var resultPage4 = PageView.extend({

  id: 'answer1',

  template: require('../../templates/pages/result.hbs'),

  buttonEvents: {
    bottom: 'next'
  },
  
 next: function() {
  window.App.navigate('endGame');
},
  
  render: function(response) {
    var result = '';
    var answer;
    
    // Retrieve user response
    // May be defined in URL or args depending on execution context
    if (!response) {
      var fragment = Backbone.history.fragment;
      answer = parseInt(
        fragment.substring(fragment.lastIndexOf('/') + 1)
      );
    }
    else {
      answer = parseInt(response);
    }
   
    // Set result text based on answer
    if (answer === 2) {
      result = 'Good Job! <img src="/images/smiley.png" alt="" />';
    }
    else {
      result = 'Good try! '
          + 'The correct answer is ' + 2 + ' :)';
    }
    
    this.$el.html(this.template({ message: result }));
    return this;
  }

});

module.exports = new resultPage4();

