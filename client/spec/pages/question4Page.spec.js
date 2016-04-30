
'use strict';

describe('The Question4 Page', function() {
  var question4Page;
  beforeEach(function(){
    question4Page = require('../../src/js/pages/question4Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
  spyOn(window.App, 'navigate');
  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        question4Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer4');
      });
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      question4Page.render();
      expect(question4Page.$el).toContainText('Question 4');
    })

    it('returns the view object', function() {
      expect(question4Page.render()).toEqual(question4Page);
    });

  });

  describe('check count down', function () {

    describe('when there is more than 0 seconds left', function () {
      it('does not navigate to the answer page', function () {
        var secondsLeft = 1;
        question4Page.checkCountDown(secondsLeft, 1000);
        expect(window.App.navigate).not.toHaveBeenCalled();
      });
    });

    describe('when there are 0 seconds left', function () {
      it('navigates to the answer page', function () {
        var secondsLeft = 0;
        question4Page.checkCountDown(secondsLeft, 1000);
        expect(window.App.navigate).toHaveBeenCalledWith('answer4');
      })
    });
  });

});
