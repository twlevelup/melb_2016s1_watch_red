
'use strict';

describe('The Image1 Page', function() {
var image1Page;

  beforeEach(function(){
    image1Page = require('../../src/js/pages/image1Page');
    var Router = require('../../src/js/framework/router'),
      App = require('../../src/js/app');
    window.App = App;
  });

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
