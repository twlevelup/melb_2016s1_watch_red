
'use strict';

var questionPage = require('../../src/js/pages/questionPage');
var Router = require('../../src/js/framework/router');
var App = require('../../src/js/app');

describe('The Question Page', function() {
  var questionPage;
  var model = require('../../src/js/models/countingGame');
  
  beforeEach(function(){
    model.initialize([
      {
        text: 'How many cars do you see?',
        img: '/images/cars.png',
        choices: [4, 1, 5, 3],
        answer: 4
      }
    ]);
    questionPage = require('../../src/js/pages/questionPage');
    Router = require('../../src/js/framework/router');
    App = require('../../src/js/app');
    window.App = App;
	  spyOn(window.App, 'navigate');
  });

  describe('skipping the question', function() {

    it('should navigate to the answer page', function () {
      questionPage.skip();
      expect(window.App.navigate).toHaveBeenCalled();
    });

  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        questionPage.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer');
      });
    });

  });

  describe('rendering', function() {

    it('should display the question text', function() {
      questionPage.render();
      expect(questionPage.$el).toContainText('Question 1');
      expect(questionPage.$el).toContainText('How many cars do you see?');
    });

    it('returns the view object', function() {
      expect(questionPage.render()).toEqual(questionPage);
    });

  });

  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  questionPage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  questionPage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('answer');
		  });
	  });
  });

});
