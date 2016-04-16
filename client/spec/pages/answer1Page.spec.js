'use strict';

var answer1Page = require('../../src/js/pages/answer1Page'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Answers Page', function() {

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      answer1Page.render();
      expect(answer1Page.$el).toContainHtml('<p>8</p>');
    });

  });

});
