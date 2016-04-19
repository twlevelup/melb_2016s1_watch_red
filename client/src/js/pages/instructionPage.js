'use strict';

var PageView = require('../framework/page');

var InstructionView;
InstructionView = PageView.extend({

  id: 'instructionPage',

  template: require('../../templates/pages/instructionPage.hbs'),

  buttonEvents: {
    //right: 'goToHomePage',
    //face: 'screenClickExample',
    //left: 'back'
  },

  initialize: function() {
    console.log('here');
    this.render();
  },

  /*screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },
  */

  /*
  goToHomePage: function() {
    window.App.navigate('');
  },
  */

  render: function() {

    this.$el.html(this.template());

    return this;
  }

});

module.exports = new InstructionView();

