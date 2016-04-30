'use strict';

var PageView = require('../framework/page');

var startGameScreen = PageView.extend({

  id: 'startGame',

  template: require('../../templates/pages/startGame.hbs'),

  render: function() {
    window.game = {};

    this.$el.html(this.template());

    // reset the score
    window.game.score = 0;

    window.game.questionArray = ['question1', 'question2', 'question3', 'question4', 'question5'];

    window.game.questionIndex = 0;

    // current game answer
    window.game.answer = 0;


    var seconds_left = 5;
    var interval = setInterval(function() {
      document.getElementById('timer_div').innerHTML = --seconds_left;
	  this.checkCountDown(seconds_left, interval);
    }.bind(this), 1000);

    return this;
  },

  checkCountDown: function(secondsLeft, interval) {
	if (secondsLeft <= 0) {
		clearInterval(interval);
		window.App.navigate('question1');
	}
  }

});

module.exports = new startGameScreen();
