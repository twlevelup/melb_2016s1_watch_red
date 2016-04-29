'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var questionScreen = PageView.extend({

  id: 'question',

  template: require('../../templates/pages/question.hbs'),

  buttonEvents: {
    bottom: 'skip'
  },

  skip: function(){
    window.App.navigate('answer');
  },

  render: function() {
    var question = model.current();
    this.$el.html(this.template({ 
      question_no: model.currentPos + 1,
      question: question
    }));

    var seconds_left = 15;
    var interval = setInterval(function() {
      document.getElementById('timer_div').innerHTML = --seconds_left;
	    this.checkCountDown(seconds_left, interval);
    }.bind(this), 1000);

    return this;
  },

  checkCountDown: function(secondsLeft, interval) {
    if (secondsLeft <= 0) {
      clearInterval(interval);
      window.App.navigate('answer');
    }
  }
});

module.exports = new questionScreen();
