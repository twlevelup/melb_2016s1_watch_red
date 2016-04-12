'use strict';

var endGamePage = require('../../src/js/pages/endGamePage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The EndGame Page', function() {

  describe('initialization', function() {

    it('should set the message', function() {
      endGamePage.initialize();
    });

  });

  describe('render', function () {
    it('should render the message', function () {
      endGamePage.render();
      expect(endGamePage.$el).toContainHtml(endGamePage.message);
    })
  })

});