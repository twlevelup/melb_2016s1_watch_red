/*
'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var startGameScreen = PageView.extend({

  id: 'startGame',

  template: require('../../templates/pages/startGame.hbs'),

  render: function() {
    model.initialize([
      {
        text: 'How many stars do you see?',
        img: '/images/stars.png',
        choices: [5, 6, 3, 8],
        answer: 6
      },
      {
        text: 'How many cars do you see?',
        img: '/images/cars.png',
        choices: [4, 1, 5, 3],
        answer: 4
      },
      {
        text: 'How many fish do you see?',
        img: '/images/fish.png',
        choices: [1, 2, 3, 4],
        answer: 2
      },
      {
        text: 'How many flowers do you see?',
        img: '/images/flowers.png',
        choices: [3, 1, 5, 2],
        answer: 3
      },
      {
        text: 'How many trees do you see?',
        img: '/images/trees.png',
        choices: [4, 5, 8, 6],
        answer: 5
      }
    ]);
    
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
      window.App.navigate('question');
    }
  }

});

module.exports = new startGameScreen();
*/