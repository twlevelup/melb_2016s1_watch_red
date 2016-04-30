
'use strict';

var PageView = require('../framework/page');
var model = require('../models/countingGame');

var answerScreen = PageView.extend({

  id: 'answer',

  template: require('../../templates/pages/answer.hbs'),

  buttonEvents: {
    top: 'selectTop',
    left: 'selectLeft',
    right: 'selectRight',
    bottom: 'selectBottom'
  },
  
  selectTop: function() {
    var choice = model.current().choices[0];
    window.App.navigate('answer/' + choice);
  },
  
  selectLeft: function() {
    var choice = model.current().choices[1];
    window.App.navigate('answer/' + choice);
  },
  
  selectBottom: function() {
    var choice = model.current().choices[2];
    window.App.navigate('answer/' + choice);
  },
  
  selectRight: function() {
    var choice = model.current().choices[3];
    window.App.navigate('answer/' + choice);
  },
  
  render: function() {
    var options = model.current().choices;
    var choices = this.mapOptions(options);
    
    this.$el.html(this.template(choices));
    return this;
  },
  
  mapOptions: function(options) {
    return {
      top: options[0],
      left: options[1],
      bottom: options[2],
      right: options[3]
    };
  }

});

module.exports = new answerScreen();

