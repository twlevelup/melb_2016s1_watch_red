'use strict';

var resultPage1,
  Router,
  App,
  eventHub;

describe('The Results Page', function() {
    beforeEach(function() {
      resultPage1 = require('../../src/js/pages/resultPage1');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });
  
  describe('rendering', function() {
    it('should display success message if response is correct', function() {
      resultPage1.render(6);
      expect(resultPage1.$el).toContainText('Good Job!');
    });
    
    it('should display the correct answer if response incorrect', function() {
      resultPage1.render(4);
      expect(resultPage1.$el).toContainText('Good try');
      expect(resultPage1.$el).toContainText('6');
    })
  })
});