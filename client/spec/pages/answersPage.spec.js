'use strict';

var answersPage = require('../../src/js/pages/answersPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Answers Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      answersPage.render();
      expect(answersPage.$el).toContainHtml('<h1>Answers</h1>');
    });

  });

});