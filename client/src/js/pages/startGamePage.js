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

      if (seconds_left <= 0)
      {
        clearInterval(interval);
        window.App.navigate('question1');
      }
    }, 1000);

    return this;
  }

});

module.exports = new startGameScreen();
