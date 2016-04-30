'use strict';

var PageView = require('../framework/page');

var question2Screen = PageView.extend({

  id: 'question2',

  template: require('../../templates/pages/question2.hbs'),

  buttonEvents: {
    bottom: 'skip'
  },

  skip: function(){
    clearInterval(this.interval);
    window.App.navigate('answer2');
  },

  render: function() {
    this.$el.html(this.template());

    window.game.questionIndex += 1;

    var seconds_left = 15;
    this.interval = setInterval(function() {
      document.getElementById('timer_div').innerHTML = --seconds_left;
	  this.checkCountDown(seconds_left, this.interval);
    }.bind(this), 1000);

    return this;
  },

  checkCountDown: function(secondsLeft, interval) {
  	if (secondsLeft <= 0) {
  		clearInterval(interval);
  		window.App.navigate('answer2');
  	}
  }
});

module.exports = new question2Screen();
