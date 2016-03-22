
'use strict';

var PageView = require('../framework/page');

var answer1Screen = PageView.extend({

  id: 'answer1',

  template: require('../../templates/pages/answer1.hbs'),

  buttonEvents: {
    right: 'startGame',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new answer1Screen();

