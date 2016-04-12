'use strict';

var gamePage, Router, App, eventHub, windowBackup;

describe('The Game Page', function() {

	beforeEach(function () {
		gamePage = require('../../src/js/pages/gamePage');
		Router = require('../../src/js/framework/router.js');
		App = require('../../src/js/app');
		eventHub = require('../../src/js/framework/eventHub');

		window.App = App;

		// windowBackup.setTimeout = window.setTimeout;
		// window.setTimeout = function (callback) {
		// 	callback();
		// };
	});

	afterEach(function () {
		// window.setTimeout = windowBackup.setTimeout;
	});

	describe('game object', function() {

		it('the game object should exist', function() {
			expect(window.game).toBeDefined();
		});

	});

	describe('initialization', function() {

		it('should initalize the game score to 0', function() {
			gamePage.render();
			expect(window.game.score).toEqual(0);
		});

	});

	describe('starting', function () {
		it('should redirect to the first question', function () {
			spyOn(window.App, 'navigate');
			gamePage.render();
			expect(window.App.navigate).toHaveBeenCalledWith('question');
		})
	})

});
