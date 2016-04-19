
'use strict';

var PageView = require('../framework/page');

var answer1Screen = PageView.extend({

  id: 'answer1',

  template: require('../../templates/pages/answer1.hbs'),

  buttonEvents: {
    top: 'selectTop',
    left: 'selectLeft',
    right: 'selectRight',
    bottom: 'selectBottom'
  },
  
  selectTop: function() {
    window.App.navigate('answer1/8');
  },
  
  selectLeft: function() {
    window.App.navigate('answer1/7');
  },
  
  selectBottom: function() {
    window.App.navigate('answer1/5');
  },
  
  selectRight: function() {
    window.App.navigate('answer1/6');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new answer1Screen();

