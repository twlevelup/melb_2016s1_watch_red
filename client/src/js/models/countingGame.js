'use strict';

module.exports = {
  score: 0,
  currentPos: 0,
  questions: [],
  // Set default values and question set
  initialize: function(questions) {
    this.score = 0;
    this.currentPos = 0;
    this.questions = questions;
  },
  // Get current question
  current: function() {
    return this.questions[this.currentPos];
  },
  // Move to next question
  next: function() {
    this.currentPos++;
  },
  // Increment score
  incrementScore: function() {
    this.score++;
  }
};