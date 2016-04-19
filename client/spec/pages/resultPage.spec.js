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
    it('should produce the correct HTML', function() {
      resultPage.render();
      expect(resultPage.$el).toContainText('Good');
    })
  })
});