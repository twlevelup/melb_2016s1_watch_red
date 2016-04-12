'use strict';

var questionPage = require('../../src/js/pages/questionPage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('the question page', function() {

  describe('initialization', function() {

    it('should initalize the game score to 0', function() {
      questionPage.initialize();
    });

  });

  describe('rendering', function () {
    it('should render the question text', function () {
      questionPage.render();
    })
  })

});
