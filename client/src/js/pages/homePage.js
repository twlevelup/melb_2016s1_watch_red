'use strict';

var PageView = require('../framework/page');

var HomeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'startGame',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  startGame: function() {
    window.App.navigate('instructionPage');
  },

  goToContacts: function() {
    window.App.navigate('contacts');
  },

  goToGame: function() {
    window.App.navigate('game');
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = new HomeScreen();
