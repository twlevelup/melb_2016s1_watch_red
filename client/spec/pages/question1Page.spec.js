
'use strict';

var question1Page = require('../../src/js/pages/question1Page'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

window.App = App;

describe('The Question1 Page', function() {

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        spyOn(window.App, 'navigate');
        question1Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('image1Page');
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

});
