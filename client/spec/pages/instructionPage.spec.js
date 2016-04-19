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

  /*
  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the image page', function() {
        instructionPage.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('image1');
      });
    });

  });
  */

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
    instructionPage.render();
    expect(instructionPage.$el).toContainText('➡');
    });

  });

  describe('Test change arrow', function () {
		  it('to lArrow', function () {
			  expect(instructionPage.changeArrow("lArrow")).toEqual("tArrow");
		  });
		  it('to rArrow', function () {
			  expect(instructionPage.changeArrow("tArrow")).toEqual("rArrow");
		  });
		  it('to rtrrow', function () {
			  expect(instructionPage.changeArrow("rArrow")).toEqual("lArrow");
		  });
		  it('to rtrrow', function () {
			  expect(instructionPage.changeArrow("")).toEqual(null);
		  });
  });

  /*
  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  instructionPage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  instructionPage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('image1');
		  });
	  });
  });
  */

});
