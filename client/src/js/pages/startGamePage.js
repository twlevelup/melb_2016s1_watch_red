'use strict';

var PageView = require('../framework/page');

var startGameScreen = PageView.extend({

  id: 'startGame',

  template: require('../../templates/pages/startGame.hbs'),

  render: function() {
    this.$el.html(this.template());

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
