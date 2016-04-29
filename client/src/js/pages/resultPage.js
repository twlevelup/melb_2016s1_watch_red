
'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var resultPage = PageView.extend({

  id: 'result',

  template: require('../../templates/pages/result.hbs'),

  buttonEvents: {
    bottom: 'next'
  },
  
  next: function() {
    model.next();
    if (model.current()) {
      window.App.navigate('question');
    } 
    else {
      window.App.navigate('endGame');
    }
  },
  
  render: function(response) {
    var result = '';
    var answer;
    var correctAnswer = model.current().answer;
    
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
    if (answer === correctAnswer) {
      result = 'Good Job! <img src="/images/smiley.png" alt="" />';
      model.incrementScore();
    }
    else {
      result = 'Good try! '
          + 'The correct answer is ' + correctAnswer + ' :)';
    }
    
    this.$el.html(this.template({ message: result }));
    return this;
  }

});

module.exports = new resultPage();

