'use strict';

var answer2Page,
  Router,
  App,
  eventHub;

describe('The Answers Page', function() {
    beforeEach(function() {
      answer2Page = require('../../src/js/pages/answer2Page');
      Router = require('../../src/js/framework/router');
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      answer2Page.render();
      expect(answer2Page.$el).toContainHtml('<p>5</p>');
    });
  });

  describe('button events', function() {
    describe('top', function() {
      it('should pass 3 as an answer', function() {
        answer2Page.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('answer2/3');
      });
    })
    
    describe('left', function() {
      it('should pass 4 as an answer', function() {
        answer2Page.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('answer2/4');
      });
    });
    
    describe('bottom', function() {
      it('should pass 2 as an answer', function() {
        answer2Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer2/2');
      });
    });
    
    describe('right', function() {
      it('should pass 5 as an answer', function() {
        answer2Page.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('answer2/5');
      });
    })
  });
});
