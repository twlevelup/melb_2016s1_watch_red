'use strict';

var endGamePage = require('../../src/js/pages/endGamePage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The EndGame Page', function() {
  beforeEach(function () {
    endGamePage = require('../../src/js/pages/endGamePage');
    Router = require('../../src/js/framework/router');
    App = require('../../src/js/app');
    window.App = App;
  });

  describe('render', function () {
    it('should say well done when the score is not 5/5', function () {
      window.game.score = 3;
      endGamePage.render();
      expect(endGamePage.$el).toContainHtml('<p>Well done!</p>');
    })

    describe('when the score is 5/5', function () {
      it('should not say well done', function () {
        window.game.score = 3;
        endGamePage.render();
        expect(endGamePage.$el).not.toContainHtml('<p>Well done!</p>');
      });
    });

    it('should say excellent when the kid score is 5/5', function () {
      window.game.score = 5;
      endGamePage.render();
      expect(endGamePage.$el).toContainHtml('<p>Excellent!</p>');
    })
  })

});
