'use strict';

var PageView = require('../framework/page');

var question1Screen = PageView.extend({

  id: 'question1',

  template: require('../../templates/pages/question1.hbs'),

  buttonEvents: {
    bottom: 'skip'
  },

  skip: function(){
    window.App.navigate('image1');
  },

  render: function() {
    this.$el.html(this.template());

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
		window.App.navigate('image1');
	}
  }
});

module.exports = new question1Screen();
