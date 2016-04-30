
'use strict';

var PageView = require('../framework/page');

var answer4Screen = PageView.extend({

  id: 'answer4',

  template: require('../../templates/pages/answer4.hbs'),

  buttonEvents: {
    top: 'selectTop',
    left: 'selectLeft',
    right: 'selectRight',
    bottom: 'selectBottom'
  },
  
  selectTop: function() {
    window.App.navigate('answer4/5');
  },
  
  selectLeft: function() {
    window.App.navigate('answer4/7');
  },
  
  selectBottom: function() {
    window.App.navigate('answer4/3');
  },
  
  selectRight: function() {
    window.App.navigate('answer4/2');
  },
  
  render: function() {
    this.$el.html(this.template());
    window.game.answer = 2;
    return this;
  }

});

module.exports = new answer4Screen();

