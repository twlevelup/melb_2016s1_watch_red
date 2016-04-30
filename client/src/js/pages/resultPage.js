
'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var resultPage4 = PageView.extend({

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
    var result = this.processResult(answer, correctAnswer);
    
    this.$el.html(this.template({ message: result }));
    return this;
  },
  
  isCorrectAnswer: function(userResponse, correctAnswer) {
    return userResponse === correctAnswer;
  },
  
  processResult: function(answer, correctAnswer) {
    if (this.isCorrectAnswer(answer, correctAnswer)) {
      model.incrementScore();
      return 'Good Job! <img src="/images/smiley.png" alt="" />';
    }
    else {
      return 'Good try! '
          + 'The correct answer is ' + correctAnswer + ' :)';
    }
  },
  
  getResponse: function(input) {
    return parseInt(input);
  }

});

module.exports = new resultPage4();

