
'use strict';

var image1Page = require('../../src/js/pages/image1Page'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

window.App = App;

describe('The Image1 Page', function() {

  describe('button event handlers', function() {

    describe('bottom', function() {
      it('should skip the timer and display the answer page', function() {
        spyOn(window.App, 'navigate');
        image1Page.setButtonEvents();
        window.App.vent.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('answer1Page');
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(image1Page.render()).toEqual(image1Page);
    });

  });

});
