'use strict';

var PageView = require('../framework/page');

var image1Screen = PageView.extend({

  id: 'image1',

  template: require('../../templates/pages/image1.hbs'),

  buttonEvents: {
    bottom: 'skip'
  },

  skip: function(){
    window.App.navigate('answer1Page');
  },

  render: function() {
    this.$el.html(this.template());

    var seconds_left = 15;
    var interval = setInterval(function() {
      document.getElementById('timer_div').innerHTML = --seconds_left;

      if (seconds_left <= 0)
      {
        clearInterval(interval);
        window.App.navigate('answer1Page');
      }
    }, 1000);

    return this;
  }

});

module.exports = new image1Screen();

