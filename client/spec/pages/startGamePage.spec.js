
'use strict';



describe('The start game Page', function() {
  var startGamePage;

  beforeEach(function(){
    startGamePage = require('../../src/js/pages/startGamePage');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
	spyOn(window.App, 'navigate');
  });

  describe('check count down', function () {

	  describe('when there is more than 0 seconds left', function () {
		  it('does not navigate to the answer page', function () {
			  var secondsLeft = 1;
			  startGamePage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).not.toHaveBeenCalled();
		  });
	  });

	  describe('when there are 0 seconds left', function () {
		  it('navigates to the answer page', function () {
			  var secondsLeft = 0;
			  startGamePage.checkCountDown(secondsLeft, 1000);
			  expect(window.App.navigate).toHaveBeenCalledWith('question1');
		  });
	  });
  });

});
