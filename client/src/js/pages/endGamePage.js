'use strict';

var PageView = require('../framework/page');

var EndGameView = PageView.extend({

  id: 'endGame',

  template: require('../../templates/pages/endGame.hbs'),

  render: function() {
    this.$el.html(this.template());

    var elementHTML;

    if (window.game.score === 4) {
      elementHTML = '<p>Excellent!</p>';
    } else {
      elementHTML = '<p>Well done!</p>';
    }

    this.$el.find('div').html(elementHTML);

    return this;
  }
});

module.exports = new EndGameView();
