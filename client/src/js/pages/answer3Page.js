
'use strict';

var PageView = require('../framework/page');

var answer3Screen = PageView.extend({

  id: 'answer3',

  template: require('../../templates/pages/answer3.hbs'),

  buttonEvents: {
    top: 'selectTop',
    left: 'selectLeft',
    right: 'selectRight',
    bottom: 'selectBottom'
  },
  
  selectTop: function() {
    window.App.navigate('answer3/3');
  },
  
  selectLeft: function() {
    window.App.navigate('answer3/4');
  },
  
  selectBottom: function() {
    window.App.navigate('answer3/2');
  },
  
  selectRight: function() {
    window.App.navigate('answer3/5');
  },
  
  render: function() {
    this.$el.html(this.template());
    window.game.answer = 5;
    return this;
  }

});

module.exports = new answer3Screen();

