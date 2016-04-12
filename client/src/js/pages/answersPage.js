'use strict';

var PageView = require('../framework/page');

var AnswersView = PageView.extend({

  id: 'answers',

  template: require('../../templates/pages/answers.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'screenClickExample',
    left: 'back'
  },


  // TODO use jquery to load a JSON file async test?

  screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {

    this.$el.html(this.template());
    return this;
  },

});

module.exports = new AnswersView();
