'use strict';

var answer1Page,
  Router,
  App,
  eventHub;

describe('The Answers Page', function() {
    beforeEach(function() {
      answer1Page = require('../../src/js/pages/answer1Page');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      answer1Page.render();
      expect(answer1Page.$el).toContainHtml('<p>8</p>');
    });
  });

  describe('button events', function() {
    describe('top', function() {
      it('should pass 8 as an answer', function() {
        answer1Page.setButtonEvents();
        window.App.vent.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1/8');
      });
    })
    
    describe('left', function() {
      it('should pass 7 as an answer', function() {
        answer1Page.setButtonEvents();
        window.App.vent.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1/7');
      });
    });
    
    describe('bottom', function() {
      it('should pass 5 as an answer', function() {
        answer1Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1/5');
      });
    });
    
    describe('right', function() {
      it('should pass 6 as an answer', function() {
        answer1Page.setButtonEvents();
        window.App.vent.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1/6');
      });
    })
  });
});
