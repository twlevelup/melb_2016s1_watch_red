
'use strict';



describe('The Question1 Page', function() {
  var question1Page;
  beforeEach(function(){
    question1Page = require('../../src/js/pages/question1Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        question1Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('image1');
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      question1Page.render();
      expect(question1Page.$el).toContainText('Question 1');
    });

    it('returns the view object', function() {
      expect(question1Page.render()).toEqual(question1Page);
    });

  });

  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  question1Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  question1Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('image1');
		  });
	  });
  });

});
