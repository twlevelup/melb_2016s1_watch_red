'use strict';

var resultPage,
  Router,
  App,
  eventHub,
  model = require('../../src/js/models/countingGame');

describe('The Results Page', function() {
    beforeEach(function() {
      model.initialize([
        {
          text: 'How many cars do you see?',
          img: '/images/cars.png',
          choices: [4, 1, 5, 3],
          answer: 4
        },
        {
          text: 'How many stars do you see?',
          img: '/images/stars.png',
          choices: [5, 6, 3, 8],
          answer: 6
        }
      ]);
      
      resultPage = require('../../src/js/pages/resultPage');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      
      spyOn(model, 'next');
      spyOn(window.App, 'navigate');
      spyOn(model, 'incrementScore');
  });
  
  describe('rendering', function() {
    it('should display success message if response is correct', function() {
      resultPage.render(4);
      expect(resultPage.$el).toContainText('Good Job!');
    });
    
    it('should display the correct answer if response incorrect', function() {
      resultPage.render(5);
      expect(resultPage.$el).toContainText('Good try');
      expect(resultPage.$el).toContainText('The correct answer is 4');
    });
  });
  
  describe('model post-conditions', function() {
    it('should update current question stored in model', function() {
      resultPage.render(4);
      resultPage.next();
      expect(model.next).toHaveBeenCalled();
    });
    
    it('should increase the score when the user gets a correct answer', function() {
      model.currentPos = 0;
      resultPage.render(4);
      expect(model.incrementScore).toHaveBeenCalled();
    });
  });
  
  describe('navigation', function() {
    it('should move to the next question there are questions remaining', function() {
      model.currentPos = 0;
      resultPage.next();
      expect(window.App.navigate).toHaveBeenCalledWith('question');
    });
    
    it('should move to end game screen once game is completed', function() {
      model.currentPos = 2;
      resultPage.next();
      expect(window.App.navigate).toHaveBeenCalledWith('endGame');
    });
  });
  
  describe('checking the answer', function() {
    it('should return a boolean', function() {
      expect(resultPage.isCorrectAnswer(4, 4)).toEqual(jasmine.any(Boolean));
    });
    
    it('should return true if user answer matches correct answer', function() {
      expect(resultPage.isCorrectAnswer(4, 4)).toEqual(true);
    });
    
    it('should return false if user answer does not match correct answer', function() {
      expect(resultPage.isCorrectAnswer(4, 5)).toEqual(false);
    });
  });
  
  describe('get result message', function() {
    it('should return a string', function() {
      expect(resultPage.processResult(4, 4)).toEqual(jasmine.any(String));
    });
  });
  
  describe('get user response', function() {
    it('should return a number', function() {
      expect(resultPage.getResponse('4')).toEqual(jasmine.any(Number));
    });
  })
});