'use strict';

var resultPage4,
  Router,
  App,
  eventHub;

describe('The Results Page', function() {
    beforeEach(function() {
      resultPage4 = require('../../src/js/pages/resultPage4');
      Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
      window.App = App;
      spyOn(window.App, 'navigate');
  });
  
  describe('rendering', function() {
    it('should display success message if response is correct', function() {
      resultPage4.render(2);
      expect(resultPage4.$el).toContainText('Good Job!');
    });
    
    it('should display the correct answer if response incorrect', function() {
      resultPage4.render(4);
      expect(resultPage4.$el).toContainText('Good try');
      expect(resultPage4.$el).toContainText('2');
    })
  })
});