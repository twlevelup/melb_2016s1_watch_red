
'use strict';

var answer4Page,
  Router,
  App,
  eventHub;

describe('The Answers Page', function() {
    beforeEach(function() {
      answer4Page = require('../../src/js/pages/answer4Page');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      answer4Page.render();
      expect(answer4Page.$el).toContainHtml('<p>5</p>');
    });
  });

  describe('button events', function() {
    describe('top', function() {
      it('should pass 5 as an answer', function() {
        answer4Page.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('answer4/5');
      });
    })
    
    describe('left', function() {
      it('should pass 7 as an answer', function() {
        answer4Page.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('answer4/7');
      });
    });
    
    describe('bottom', function() {
      it('should pass 3 as an answer', function() {
        answer4Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer4/3');
      });
    });
    
    describe('right', function() {
      it('should pass 2 as an answer', function() {
        answer4Page.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('answer4/2');
      });
    })
  });
});
