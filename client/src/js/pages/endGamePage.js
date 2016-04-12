'use strict';

var PageView = require('../framework/page');

var EndGameView = PageView.extend({

  id: 'endGame',

  template: require('../../templates/pages/endGame.hbs'),

  initialize: function () {
    // if (game.score < 2) {
    //   this.message = "Better luck next time.";
    // } else if (game.score >= 2 && game.score < 4) {
    //   this.message = "Well done!";
    // } else {
    //   this.message = "Excellent!";
    // }
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.find('p').html(this.message);
    return this;
  }
});

module.exports = new EndGameView(); 