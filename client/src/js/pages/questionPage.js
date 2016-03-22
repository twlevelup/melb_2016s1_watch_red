'use strict';

var PageView = require('../framework/page');

var QuestionView = PageView.extend({

  id: 'question',

  template: require('../../templates/pages/question.hbs'),

  initialize: function () {
    // choose a random question
    window.game.currentQuestion = window.questions[Math.floor(Math.random() * window.questions.length)];
    this.render();
  },

  render: function () {
    this.$el.html(this.template());
    this.$el.find('p').html(window.game.currentQuestion.text);
    return this;
  }
});

module.exports = new QuestionView();
