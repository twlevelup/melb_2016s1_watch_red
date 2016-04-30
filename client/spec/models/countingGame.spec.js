'use strict';

var model = require('../../src/js/models/countingGame');

describe('Counting Game Model', function() {
  describe('initialization', function() {
    it('has a default score of 0', function() {
      model.initialize([]);
      expect(model.score).toEqual(0);
    });
    
    it('starts at the first question', function() {
      model.initialize([]);
      expect(model.currentPos).toEqual(0);
    });
    
    it('can be passed an array of questions', function() {
      model.initialize(['Test', 'Question 2']);
      expect(model.questions.length).toEqual(2);
    });
  });
  
  describe('incrementScore', function() {
    it('should increase the score', function() {
      model.initialize();
      var previousScore = model.score;
      model.incrementScore();
      expect(model.score).toEqual(1);
    });
  });
  
  describe('next', function() {
    it('should update current position', function() {
      model.initialize();
      expect(model.currentPos).toEqual(0);
      model.next();
      expect(model.currentPos).toEqual(1);
    });
  });
  
  describe('current', function() {
    it('should return the current question', function() {
      var question = "This is a test question";
      model.initialize([question]);
      expect(model.current()).toEqual(question);
    });
    
    it('should return undefined if no questions left', function() {
      model.initialize([]);
      expect(model.current()).toBeUndefined();
    });
  });
});