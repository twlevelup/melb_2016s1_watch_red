'use strict';

var answerPage,
  Router,
  App,
  eventHub,
  model = require('../../src/js/models/countingGame');

describe('The Answers Page', function() {
  beforeEach(function() {
    model.initialize([
      {
        text: 'How many cars do you see?',
        img: '/images/cars.png',
        choices: [4, 1, 5, 3],
        answer: 4
      }
    ]);
    answerPage = require('../../src/js/pages/answerPage');
    Router = require('../../src/js/framework/router'),
    App = require('../../src/js/app');
    window.App = App;
    spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      var options = model.current().choices;
      answerPage.render();
      options.forEach(function(option) {
        expect(answerPage.$el).toContainText(option);
      });
    });
  });

  describe('button events', function() {
    describe('top', function() {
      it('should pass first choice as an answer', function() {
        answerPage.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('answer/4');
      });
    })
    
    describe('left', function() {
      it('should pass second choice as an answer', function() {
        answerPage.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('answer/1');
      });
    });
    
    describe('bottom', function() {
      it('should pass third choice as an answer', function() {
        answerPage.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer/5');
      });
    });
    
    describe('right', function() {
      it('should pass fourth choice as an answer', function() {
        answerPage.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('answer/3');
      });
    })
  });
  
  describe('setting options', function() {
    it('should return an object mapping choices to cardinal directions', function() {
      var choices = [1, 2, 3, 4];
      expect(answerPage.mapOptions(choices)).toEqual({
        top: 1, 
        left: 2,
        bottom: 3,
        right: 4
      });
    });
  });
  
  describe('button event handlers', function() {
    describe('top', function() {
      it('should pass first choice as an answer', function() {
        answerPage.selectTop();
        expect(window.App.navigate).toHaveBeenCalledWith('answer/4');
      });
    })
    
    describe('left', function() {
      it('should pass second choice as an answer', function() {
        answerPage.selectLeft();
        expect(window.App.navigate).toHaveBeenCalledWith('answer/1');
      });
    });
    
    describe('bottom', function() {
      it('should pass third choice as an answer', function() {
        answerPage.selectBottom();
        expect(window.App.navigate).toHaveBeenCalledWith('answer/5');
      });
    });
    
    describe('right', function() {
      it('should pass fourth choice as an answer', function() {
        answerPage.selectRight();
        expect(window.App.navigate).toHaveBeenCalledWith('answer/3');
      });
    })
  });
});
