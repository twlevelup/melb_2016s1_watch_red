'use strict';

var resultPage,
  Router,
  App,
  eventHub;

describe('The Results Page', function() {
    beforeEach(function() {
      resultPage = require('../../src/js/pages/resultPage');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });
  
  describe('rendering', function() {
    it('should display success message if response is correct', function() {
      resultPage.render(6);
      expect(resultPage.$el).toContainText('Good Job!');
    });
    
    it('should display the correct answer if response incorrect', function() {
      resultPage.render(4);
      expect(resultPage.$el).toContainText('Good try');
      expect(resultPage.$el).toContainText('6');
    })
  })
});