'use strict';

var PageView = require('../framework/page');

window.game = {};

window.questions = [
  {
    img: '2dogs.jpg',
    text: 'how many dogs?'
  },
  {
    img: '4trees.jpg',
    text: 'how many trees?'
  },
  {
    img: '3cats.jpg',
    text: 'how many cats?'
  }
];

var GameView = PageView.extend({

  id: 'game',

  render: function() {
    // reset the score
    game.score = 0;
    // go to question page
    setTimeout(function () {
      window.App.navigate('question');
    }, 500);

    return this;
  }
});

module.exports = new GameView();
