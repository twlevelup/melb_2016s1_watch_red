'use strict';

describe('The Question 3 Page', function() {
  var question3Page;
  beforeEach(function(){
    question3Page = require('../../src/js/pages/question3Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

 describe('rendering', function() {

    it('returns the view object', function() {
      expect(question3Page.render()).toEqual(question3Page);
    });

  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        question3Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer3');
      });
    });

  });

  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  question3Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  question3Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('answer3');
		  });
	  });
  });


});
