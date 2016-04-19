'use strict';

var PageView = require('../framework/page');

var question2Screen = PageView.extend({

  id: 'question2',

  template: require('../../templates/pages/question2.hbs'),


  render: function() {
    this.$el.html(this.template());
    return this;
  },
});

module.exports = new question2Screen();
