'use strict';

describe('The Instruction Page', function() {
  var instructionPage;
  beforeEach(function(){
    instructionPage = require('../../src/js/pages/instructionPage');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
    instructionPage.render();
    expect(instructionPage.$el).toContainText('➡');
    });

  });

  describe('Test change arrow', function () {
		  it('to tArrow', function () {
			  expect(instructionPage.changeArrow("lArrow")).toEqual("tArrow");
		  });
		  it('to rArrow', function () {
			  expect(instructionPage.changeArrow("tArrow")).toEqual("rArrow");
		  });
		  it('to okButton', function () {
			  expect(instructionPage.changeArrow("rArrow")).toEqual("okButton");
		  });
		  it('to lArrow', function () {
			  expect(instructionPage.changeArrow("okButton")).toEqual("lArrow");
		  });
		  it('default', function () {
			  expect(instructionPage.changeArrow("")).toEqual(null);
		  });
  });

  describe('Test navigate function', function() {
    it('should navigate', function() {
        instructionPage.navigateToFirstGame(true);
        expect(window.App.navigate).toHaveBeenCalledWith('question1');
        });
    });

  describe('Intialise', function() {

    it('should set the currToFlash correctly', function() {
        instructionPage.initialize()
        expect(instructionPage.currToFlash).toEqual("lArrow");
        expect(instructionPage.movementEnabled).toEqual(false);
        });

    it('should set the movementEnabled', function() {
        instructionPage.initialize()
        expect(instructionPage.movementEnabled).toEqual(false);
        });
    });
        


  describe('button event handlers', function() {
    describe('bottom', function() {
      it('should remove all interval functions and navigate if movementEnabled', function() {
        instructionPage.movementEnabled = true;
        instructionPage.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('question1');
      });
    });

  });

  /*
  describe('initialization', function() {

    it('should initalize the game score to 0', function() {
      questionPage.initialize();
    });

  });
  */

});
