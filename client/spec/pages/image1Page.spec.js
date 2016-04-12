
'use strict';

describe('The Image1 Page', function() {
var image1Page;

  beforeEach(function(){
    image1Page = require('../../src/js/pages/image1Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the answer page', function() {
        image1Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(image1Page.render()).toEqual(image1Page);
    });

  });

  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  image1Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  image1Page.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('answer1');
		  });
	  });
  });

});
