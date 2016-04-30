'use strict';

var answer3Page,
  Router,
  App,
  eventHub;

describe('The Answers Page', function() {
    beforeEach(function() {
      answer3Page = require('../../src/js/pages/answer3Page');
      Router = require('../../src/js/framework/router');
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      answer3Page.render();
      expect(answer3Page.$el).toContainHtml('<p>3</p>');
    });
  });

  describe('button events', function() {
    describe('top', function() {
      it('should pass 3 as an answer', function() {
        answer3Page.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('answer3/3');
      });
    });
    
    describe('left', function() {
      it('should pass 4 as an answer', function() {
        answer3Page.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('answer3/4');
      });
    });
    
    describe('bottom', function() {
      it('should pass 2 as an answer', function() {
        answer3Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer3/2');
      });
    });
    
    describe('right', function() {
      it('should pass 5 as an answer', function() {
        answer3Page.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('answer3/5');
      });
    })
  });
});
