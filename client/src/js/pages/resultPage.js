
'use strict';

var PageView = require('../framework/page');

var resultPage = PageView.extend({

  id: 'answer1',

  template: require('../../templates/pages/result.hbs'),

  buttonEvents: {
    bottom: 'next'
  },
  
  next: function() {
    window.App.navigate('question2');
  },
  
  render: function(fragment) {
    var result = {};
    var fragment = Backbone.history.fragment;
    var answer;
    if (fragment) {
      answer = fragment.substring(fragment.indexOf('/') + 1);
    }
    else {
      answer = '';
    }
   
    if (answer === "6") {
      result = {
        message: 'Good Job!'
      };
    }
    else {
      result = {
        message: 'Good try.'
          + 'The correct answer is ' + 6
      };
    }
    
    this.$el.html(this.template(result));
    return this;
  }

});

module.exports = new resultPage();

