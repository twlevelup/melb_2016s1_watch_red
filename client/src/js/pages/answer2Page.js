
'use strict';

var PageView = require('../framework/page');

var answer2Screen = PageView.extend({

  id: 'answer2',

  template: require('../../templates/pages/answer2.hbs'),

  buttonEvents: {
    top: 'selectTop',
    left: 'selectLeft',
    right: 'selectRight',
    bottom: 'selectBottom'
  },
  
  selectTop: function() {
    window.App.navigate('answer2/3');
  },
  
  selectLeft: function() {
    window.App.navigate('answer2/4');
  },
  
  selectBottom: function() {
    window.App.navigate('answer2/2');
  },
  
  selectRight: function() {
    window.App.navigate('answer2/5');
  },
  
  render: function() {
    this.$el.html(this.template());
    window.game.answer = 3;
    return this;
  }

});

module.exports = new answer2Screen();

