
'use strict';



describe('The Question2 Page', function() {
  var question2Page;
  beforeEach(function(){
    question2Page = require('../../src/js/pages/question2Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
  spyOn(window.App, 'navigate');
  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        question2Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer2');
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      question2Page.render();
      expect(question2Page.$el).toContainText('Question 2');
    });

    it('returns the view object', function() {
      expect(question2Page.render()).toEqual(question2Page);
    });

  });

  describe('check count down', function () {

    describe('when there is more than 0 seconds left', function () {
      it('does not navigate to the answer page', function () {
        var secondsLeft = 1;
        question2Page.checkCountDown(secondsLeft, 1000);
        expect(window.App.navigate).not.toHaveBeenCalled();
      });
    });

    describe('when there are 0 seconds left', function () {
      it('navigates to the answer page', function () {
        var secondsLeft = 0;
        question2Page.checkCountDown(secondsLeft, 1000);
        expect(window.App.navigate).toHaveBeenCalledWith('answer2');
      });
    });
  });

});
