'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var EndGameView = PageView.extend({

  id: 'endGame',

  template: require('../../templates/pages/endGame.hbs'),

  render: function() {
    this.$el.html(this.template());

    var elementHTML;

    if (model.score === 5) {
      elementHTML = '<p>Excellent!</p>';
    } else {
      elementHTML = '<p>Well done!</p>';
    }

    this.$el.find('div').html(elementHTML);

    return this;
  },
  
  foo: function () {
    return 1;
  },

  bar: function () {
    return 2;
  },

  baz: function () {
    return 3;
  },

  foobar: function () {
    return 4;
  }
});

module.exports = new EndGameView();
