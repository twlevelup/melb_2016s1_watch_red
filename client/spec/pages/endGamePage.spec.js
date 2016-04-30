'use strict';

var endGamePage = require('../../src/js/pages/endGamePage'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The EndGame Page', function () {
  beforeEach(function () {
    endGamePage = require('../../src/js/pages/endGamePage');
    Router = require('../../src/js/framework/router');
    App = require('../../src/js/app');

    window.App = App;
  });

  describe('render', function () {
    it('should say well done when the score is not 5/5', function () {
      window.score = 4;
      endGamePage.render();
      expect(endGamePage.$el).toContainHtml('<p>Well done!</p>');
    });

    describe('when the score is 5/5', function () {
      it('should not say well done', function () {
        window.score = 5;
        endGamePage.render();
        expect(endGamePage.$el).not.toContainHtml('<p>Well done!</p>');
      });
    });

    it('should say excellent when the kid score is 5/5', function () {
      window.score = 5;
      endGamePage.render();
      expect(endGamePage.$el).toContainHtml('<p>Excellent!</p>');
    });
  });

  describe('foo', function () {

    it('should return 1', function () {
      expect(endGamePage.foo()).toEqual(1);
    });

  });

  describe('bar', function () {

    it('should return 2', function () {
      expect(endGamePage.bar()).toEqual(2);
    });

  });

  describe('baz', function () {

    it('should return 3', function () {
      expect(endGamePage.baz()).toEqual(3);
    });

  });

  describe('foobar', function () {

    it('should return 4', function () {
      expect(endGamePage.foobar()).toEqual(4);
    });

  });

});
